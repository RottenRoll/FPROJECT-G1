
let cart = JSON.parse(localStorage.getItem('redDenimCart')) || [];

const prices = {
    "Cropped Denim Jacket": 4320.00,
    "Straight Leg Jeans": 3699.00,
    "Easy Fit Jorts": 2199.00,
    "Collared Zip Cardigan": 5800.90,
    "Core Cargo Jeans": 6267.49,
    "Low Waist Mini Skirt": 4000.00,
    "Relaxed Long Denim Polo": 5199.75,
    "Down Town Wide Leg": 4599.00,
    "Everyday Baggy Jeans": 3899.00,
    "Denim Mini Skirt": 2499.00,
    "Drop Barrel Jeans": 4799.00,
    "Metro Pocket Culottes": 3399.00,
    "Low Rise Baggy Jeans": 4299.00,
    "Bermuda Shorts": 1999.00,
    "Cargo Pocket Mini Skirt": 2899.00,
    "City Flare Jeans": 4499.00,
    "Bermuda Mom Shorts": 2299.00
};

function saveCart(){
    localStorage.setItem('redDenimCart', JSON.stringify(cart));
}

window.addToCart = function(productName){
    cart.push(productName);
    saveCart();
    updateCartUI();
}

window.toggleCart = function(){
    document.getElementById('cart-sidebar').classList.toggle('active');
}

function updateCartUI(){
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const total = document.getElementById('cart-total');

    cartItems.innerHTML = '';
    let totalPrice = 0;

    cart.forEach((item,index)=>{
        totalPrice += prices[item] || 0;

        cartItems.innerHTML += `
            <div class="cart-item">
                <div>
                    <h4>${item}</h4>
                    <p>₱ ${(prices[item] || 0).toFixed(2)}</p>
                </div>
                <button class="remove-btn" onclick="removeItem(${index})">X</button>
            </div>
        `;
    });

    cartCount.textContent = cart.length;
    total.textContent = totalPrice.toFixed(2);
}

window.removeItem = function(index){
    cart.splice(index,1);
    saveCart();
    updateCartUI();
}

window.checkoutCart = function(){
    if(cart.length === 0){
        alert("Your cart is empty.");
        return;
    }

    document.getElementById('checkout-popup').style.display = 'flex';
    cart = [];
    saveCart();
    updateCartUI();
}

window.closeCheckout = function(){
    document.getElementById('checkout-popup').style.display = 'none';
}

updateCartUI();
