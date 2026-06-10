window.addToCart = function(productName) {
    let cart = JSON.parse(localStorage.getItem('redDenimCart')) || [];

    cart.push(productName);

    localStorage.setItem('redDenimCart', JSON.stringify(cart));

    alert(`✅ ${productName} has been added to your cart!\n\nCart total items: ${cart.length}`);
};
