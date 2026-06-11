document.addEventListener('DOMContentLoaded', () => {

    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

        if (hamburger && navLinks) {

            hamburger.addEventListener('click', () => {

                hamburger.classList.toggle('active');
                navLinks.classList.toggle('nav-active');

            });
        }
    });
    const darkModeBtn = document.createElement('button');
    darkModeBtn.innerHTML ='<img src="images/moon.png" alt="Dark Mode" class="theme-icon">';
    darkModeBtn.classList.add('dark-mode-btn');

    document.body.appendChild(darkModeBtn);
    
    darkModeBtn.addEventListener('click', () => {

    document.body.classList.toggle('dark-mode');

    const icon = darkModeBtn.querySelector('.theme-icon');

        if (document.body.classList.contains('dark-mode')) {

            icon.src = 'images/sun.png';
            localStorage.setItem('darkMode', 'enabled');

        } else {

            icon.src = 'images/moon.png';
            localStorage.setItem('darkMode', 'disabled');
        }

    });

    if (localStorage.getItem('darkMode') === 'enabled') {

    document.body.classList.add('dark-mode');

    darkModeBtn.querySelector('.theme-icon').src =
        'images/sun.png';

}

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
  console.log('Red Denim Store JavaScript Loaded Successfully!');

