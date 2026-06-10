document.addEventListener('DOMContentLoaded', () => {
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
  console.log('✅ Red Denim Store JavaScript Loaded Successfully!');
});
