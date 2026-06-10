/* ==========================================
RED DENIM STORE - JavaScript Functionality
========================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. Mobile Navigation - Hamburger Toggle
    // ==========================================
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('nav-active');
            
            if (navLinks.classList.contains('nav-active')) {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '60px';
                navLinks.style.right = '0';
                navLinks.style.backgroundColor = '#D32F2F';
                navLinks.style.width = '100%';
                navLinks.style.padding = '20px';
            } else {
                navLinks.style.display = 'none';
            }
        });
    }

    // ==========================================
    // 2. Add to Cart Functionality with Alert
    // ==========================================
    window.addToCart = function(productName) {
        // Get existing cart from localStorage or create empty array
        let cart = JSON.parse(localStorage.getItem('redDenimCart')) || [];
        
        // Add new product to cart
        cart.push(productName);
        
        // Save back to localStorage
        localStorage.setItem('redDenimCart', JSON.stringify(cart));
        
        // Show success alert message
        alert(`✅ ${productName} has been added to your cart!\n\nCart total items: ${cart.length}`);
        
        // Update cart badge if it exists
        updateCartBadge();
    };

    // Function to update cart badge count
    function updateCartBadge() {
        let cart = JSON.parse(localStorage.getItem('redDenimCart')) || [];
        let badge = document.getElementById('cart-badge');
        if (badge) {
            badge.textContent = cart.length;
        }
    }

    // ==========================================
    // 3. Contact Form Validation
    // ==========================================
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            // Prevent actual form submission
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Check if all fields are filled
            if (!name || !email || !message) {
                alert('⚠️ Please fill in all fields!');
                return;
            }
            
            // Validate email format
            if (!validateEmail(email)) {
                alert('⚠️ Please enter a valid email address!');
                return;
            }
            
            // Show success message
            alert(`✅ Thank you, ${name}!\n\nYour message has been sent.\nWe will contact you at ${email} soon.`);
            
            // Reset the form
            contactForm.reset();
        });
    }

    // Email validation helper function
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // ==========================================
    // 4. Dark Mode Toggle
    // ==========================================
    const darkModeBtn = document.createElement('button');
    darkModeBtn.textContent = '🌙';
    darkModeBtn.style.cssText = 'position:fixed; top:80px; right:20px; padding:12px; border-radius:50%; cursor:pointer; border:none; background:#333; color:#fff; font-size:18px; z-index:101; box-shadow: 0 2px 5px rgba(0,0,0,0.3);';
    document.body.appendChild(darkModeBtn);
    
    darkModeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            darkModeBtn.textContent = '☀️';
            localStorage.setItem('darkMode', 'enabled');
        } else {
            darkModeBtn.textContent = '🌙';
            localStorage.setItem('darkMode', 'disabled');
        }
    });

    // Check saved dark mode preference on load
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        darkModeBtn.textContent = '☀️';
    }

    // ==========================================
    // 5. Smooth Scroll for Anchor Links
    // ==========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // ==========================================
    // 6. Initial Cart Badge Update
    // ==========================================
    updateCartBadge();

    console.log('✅ Red Denim Store JavaScript Loaded Successfully!');
});
