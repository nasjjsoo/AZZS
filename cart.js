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
        const cartCountElement = document.getElementById('cart-count');
        if (!cartCountElement) return;
        
        cartCountElement.textContent = this.itemCount;
        
        if (this.itemCount > 0) {
            cartCountElement.classList.remove('hidden');
        } else {
            cartCountElement.classList.add('hidden');
        }
    }
    
    showAddToCartFeedback() {
        const cartIcon = document.getElementById('cart-icon');
        if (cartIcon) {
            cartIcon.classList.add('animate');
            setTimeout(() => cartIcon.classList.remove('animate'), 1000);
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
                
                const productCard = this.closest('.product-card, .horizontal-product-card');
                if (!productCard) return;
                
                const productId = productCard.dataset.productId;
                const productNameElement = productCard.querySelector('.product-title, .horizontal-product-title');
                const productVariantElement = productCard.querySelector('.product-variant, .horizontal-product-variant');
                const productPriceElement = productCard.querySelector('.product-price, .horizontal-product-price');
                const productImageElement = productCard.querySelector('.product-image img, .horizontal-product-image img');
                
                if (!productId || !productNameElement || !productVariantElement || !productPriceElement || !productImageElement) {
                    console.error("Missing product data for add to cart.", productCard);
                    return;
                }
                
                const productName = productNameElement.textContent;
                const productVariant = productVariantElement.textContent;
                const priceText = productPriceElement.textContent;
                const numericPrice = priceText.replace(/[^\d,]/g, '').replace(',', '.');
                const productPrice = parseFloat(numericPrice) || 0;
                const productImage = productImageElement.src;
                
                cart.addItem({
                    id: productId,
                    name: productName,
                    variant: productVariant,
                    price: productPrice,
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
    const cartIcon = document.getElementById('cart-icon');
    const cartSidebar = document.querySelector('.cart-sidebar');
    const closeCartBtn = document.querySelector('.close-cart');
    const cartOverlay = document.querySelector('.cart-overlay');
    
    if (cartIcon && cartSidebar && closeCartBtn && cartOverlay) {
        cartIcon.addEventListener('click', function(e) {
            e.preventDefault();
            cartSidebar.classList.add('active');
            cartOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
            cart.renderCartUI(); // Re-render cart UI when opening
        });
        
        closeCartBtn.addEventListener('click', () => {
            cartSidebar.classList.remove('active');
            // Only deactivate overlay and restore scroll if mobile menu is also not active
            const mobileMenu = document.querySelector('.mobile-menu');
            if (!mobileMenu || !mobileMenu.classList.contains('active')) {
                 cartOverlay.classList.remove('active');
                 document.body.style.overflow = '';
            }
        });
        
        // Overlay click handles both cart and mobile menu
        cartOverlay.addEventListener('click', () => {
            const mobileMenu = document.querySelector('.mobile-menu');
            let wasActive = false;

            if (mobileMenu && mobileMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
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
