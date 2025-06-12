// Enhanced Cart Class
class Cart {
    constructor() {
        this.items = [];
        this.total = 0;
        this.itemCount = 0;
        this.init();
    }
    
    init() {
        this.loadFromLocalStorage();
        this.renderCartCount();
    }
    
    addItem(product) {
        const existingItem = this.items.find(item => 
            item.id === product.id && item.variant === product.variant
        );
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.items.push({
                id: product.id,
                name: product.name,
                variant: product.variant,
                price: product.price,
                image: product.image,
                quantity: 1
            });
        }
        
        this.updateCart();
        this.showAddToCartFeedback();
    }
    
    removeItem(id, variant) {
        this.items = this.items.filter(item => 
            !(item.id === id && item.variant === variant)
        );
        this.updateCart();
    }
    
    updateQuantity(id, variant, newQuantity) {
        const item = this.items.find(item => 
            item.id === id && item.variant === variant
        );
        
        if (item) {
            if (newQuantity > 0) {
                item.quantity = newQuantity;
            } else {
                this.removeItem(id, variant);
            }
            this.updateCart();
        }
    }
    
    calculateTotals() {
        this.total = this.items.reduce((sum, item) => 
            sum + (item.price * item.quantity), 0
        );
        this.itemCount = this.items.reduce((count, item) => 
            count + item.quantity, 0
        );
    }
    
    updateCart() {
        this.calculateTotals();
        this.saveToLocalStorage();
        this.renderCartUI();
        this.renderCartCount();
    }
    
    saveToLocalStorage() {
        localStorage.setItem('cart', JSON.stringify(this.items));
    }
    
    loadFromLocalStorage() {
        try {
            const savedCart = localStorage.getItem('cart');
            this.items = savedCart ? JSON.parse(savedCart) : [];
            this.calculateTotals();
        } catch (e) {
            console.error("Error loading cart:", e);
            this.items = [];
        }
    }
    
    renderCartUI() {
        const cartItemsContainer = document.querySelector('.cart-items');
        const emptyCartMessage = document.querySelector('.empty-cart-message');
        const cartSubtotalValue = document.querySelector('.cart-subtotal-value');
        const cartTotalValue = document.querySelector('.cart-total-value');
        
        if (!cartItemsContainer) return;
        
        cartItemsContainer.innerHTML = '';
        
        if (this.items.length === 0) {
            if (emptyCartMessage) {
                 emptyCartMessage.innerHTML = `
                    <i class="fas fa-shopping-cart"></i>
                    <p>Votre panier est vide</p>
                    <a href="#products" class="btn btn-primary">Voir nos produits</a>
                `;
                emptyCartMessage.style.display = 'block';
            }
            if (cartSubtotalValue) cartSubtotalValue.textContent = '0,00 €';
            if (cartTotalValue) cartTotalValue.textContent = '0,00 €';
            // Ensure checkout button is handled correctly when cart is empty/not empty
            const checkoutButton = document.querySelector('.checkout-btn');
            if (checkoutButton) {
                checkoutButton.disabled = true; // Disable if cart is empty
            }
            return;
        }
        
        if (emptyCartMessage) emptyCartMessage.style.display = 'none';
        
        this.items.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'cart-item';
            itemElement.dataset.id = item.id;
            itemElement.dataset.variant = item.variant;
            
            itemElement.innerHTML = `
                <div class="cart-item-img">
                    <img src="${item.image}" alt="${item.name}" onerror="this.src='placeholder.jpg'">
                </div>
                <div class="cart-item-details">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-variant">${item.variant}</div>
                    <div class="cart-item-price">${item.price.toFixed(2)} €</div>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn minus">-</button>
                        <input type="number" class="quantity-input" value="${item.quantity}" min="1">
                        <button class="quantity-btn plus">+</button>
                    </div>
                    <div class="cart-item-remove">Supprimer</div>
                </div>
            `;
            
            const minusBtn = itemElement.querySelector('.minus');
            const plusBtn = itemElement.querySelector('.plus');
            const quantityInput = itemElement.querySelector('.quantity-input');
            const removeBtn = itemElement.querySelector('.cart-item-remove');
            
            minusBtn.addEventListener('click', () => {
                const newQuantity = parseInt(quantityInput.value) - 1;
                this.updateQuantity(item.id, item.variant, newQuantity);
            });
            
            plusBtn.addEventListener('click', () => {
                const newQuantity = parseInt(quantityInput.value) + 1;
                this.updateQuantity(item.id, item.variant, newQuantity);
            });
            
            quantityInput.addEventListener('change', (e) => {
                const newQuantity = parseInt(e.target.value);
                if (!isNaN(newQuantity)) {
                    this.updateQuantity(item.id, item.variant, newQuantity);
                } else {
                    e.target.value = item.quantity; // Reset to current if input is invalid
                }
            });
            
            removeBtn.addEventListener('click', () => {
                this.removeItem(item.id, item.variant);
            });
            
            cartItemsContainer.appendChild(itemElement);
        });
        
        if (cartSubtotalValue) cartSubtotalValue.textContent = `${this.total.toFixed(2)} €`;
        if (cartTotalValue) cartTotalValue.textContent = `${this.total.toFixed(2)} €`; // Assuming shipping is calculated elsewhere or free

        const checkoutButton = document.querySelector('.checkout-btn');
        if (checkoutButton) {
            checkoutButton.disabled = false; // Enable if cart has items
        }
    }
    
    renderCartCount() {
        const cartCountElement = document.getElementById('cart-count-header'); 
        if (!cartCountElement) {
            // console.warn("Cart count element #cart-count-header not found.");
            return;
        }
        
        cartCountElement.textContent = this.itemCount;
        
        if (this.itemCount > 0) {
            cartCountElement.classList.remove('hidden');
        } else {
            cartCountElement.classList.add('hidden');
        }
    }
    
    showAddToCartFeedback() {
        const cartIcon = document.getElementById('cart-icon-header'); 
        if (cartIcon) {
            // The 'animate' class and associated @keyframes bounce are in style.css
            // and targeted #cart-icon.animate i. We need to ensure this still works
            // or adapt the animation CSS if #cart-icon-header structure is different.
            // For now, assuming the animation might need review if not working with new ID.
            const iconElement = cartIcon.querySelector('i'); // If animation targets the <i>
            if (iconElement) {
                 iconElement.classList.add('animate-bounce-icon'); // Using a more specific class for clarity
                 setTimeout(() => iconElement.classList.remove('animate-bounce-icon'), 800);
            } else { // Fallback if direct icon animation is not set up
                 cartIcon.classList.add('animate');
                 setTimeout(() => cartIcon.classList.remove('animate'), 1000);
            }
        } else {
            // console.warn("Cart icon element #cart-icon-header not found for feedback.");
        }
        }
    }
    
    clearCart() {
        this.items = [];
        this.total = 0;
        this.itemCount = 0;
        this.updateCart();
    }
}

// Initialize Cart when the script loads
// This ensures 'cart' is available globally if other scripts need it,
// or locally within this module if using ES modules (though not specified here).
const cart = new Cart();

// Event listeners for cart functionality that should be initialized on DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    // Add to cart functionality
    function setupAddToCartButtons() {
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                
                const productCard = this.closest('.product-card-v2'); 
                if (!productCard) {
                    console.error("Could not find .product-card-v2 for button:", this);
                    return;
                }
                
                const productId = productCard.dataset.productId;
                const productNameElement = productCard.querySelector('.product-title-v2 a'); 
                const productVariantElement = productCard.querySelector('.product-variant-v2');
                const productPriceElement = productCard.querySelector('.product-price-v2 .current-price');
                const productImageElement = productCard.querySelector('.product-image-v2 img');
                
                if (!productId || !productNameElement || !productVariantElement || !productPriceElement || !productImageElement) {
                    console.error("Missing product data elements for add to cart within .product-card-v2:", productCard);
                    // Log which specific element is missing if possible
                    if(!productId) console.error("Missing: productId");
                    if(!productNameElement) console.error("Missing: productNameElement");
                    if(!productVariantElement) console.error("Missing: productVariantElement");
                    if(!productPriceElement) console.error("Missing: productPriceElement");
                    if(!productImageElement) console.error("Missing: productImageElement");
                    return;
                }
                
                const productName = productNameElement.textContent.trim();
                const productVariant = productVariantElement.textContent.trim();
                const priceText = productPriceElement.textContent.trim();
                const numericPrice = parseFloat(priceText.replace(/[^\d,.]/g, '').replace(',', '.'));
                const productImage = productImageElement.src;
                
                if (isNaN(numericPrice)) {
                    console.error("Could not parse price for product:", productName, priceText);
                    return;
                }

                cart.addItem({
                    id: productId,
                    name: productName,
                    variant: productVariant,
                    price: numericPrice, 
                    image: productImage
                });
                
                const originalText = this.textContent;
                this.textContent = 'Ajouté !';
                this.classList.add('added');
                
                setTimeout(() => {
                    this.textContent = originalText;
                    this.classList.remove('added');
                }, 2000);
            });
        });
    }
    setupAddToCartButtons();

    // Cart sidebar functionality (opening, closing)
    const cartIconHeader = document.getElementById('cart-icon-header'); 
    const cartSidebar = document.querySelector('.cart-sidebar');
    const closeCartBtn = document.querySelector('.close-cart');
    const cartOverlay = document.querySelector('.cart-overlay');
    
    if (cartIconHeader && cartSidebar && closeCartBtn && cartOverlay) {
        cartIconHeader.addEventListener('click', function(e) {
            e.preventDefault();
            cartSidebar.classList.add('active');
            cartOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
            cart.renderCartUI(); 
        });
        
        closeCartBtn.addEventListener('click', () => {
            cartSidebar.classList.remove('active');
            const mobileNavMenu = document.querySelector('.mobile-nav-menu'); 
            if (!mobileNavMenu || !mobileNavMenu.classList.contains('active')) {
                 cartOverlay.classList.remove('active');
                 document.body.style.overflow = '';
            }
        });
        
        cartOverlay.addEventListener('click', () => {
            const mobileNavMenu = document.querySelector('.mobile-nav-menu'); 
            let wasActive = false;

            if (mobileNavMenu && mobileNavMenu.classList.contains('active')) {
                mobileNavMenu.classList.remove('active');
                const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
                if (mobileMenuToggle) mobileMenuToggle.setAttribute('aria-expanded', 'false');
                wasActive = true;
            }
            if (cartSidebar && cartSidebar.classList.contains('active')) {
                cartSidebar.classList.remove('active');
                wasActive = true;
            }

            if (wasActive) {
                cartOverlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
    // Initial render of cart UI, in case there are items from localStorage
    cart.renderCartUI();
});
