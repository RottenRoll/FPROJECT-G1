document.addEventListener('DOMContentLoaded', () => {

    const hero = document.querySelector('.hero');
    const backgrounds = [
        'images/hero1.jpg',
        'images/hero2.jpg',
        'images/hero3.jpg'
    ];

    let current = 0;
    hero.style.backgroundImage = `url('${backgrounds[current]}')`;
    setInterval(() => {
        current++;

        if (current >= backgrounds.length) {
            current = 0;
        }

        hero.style.backgroundImage =
            `url('${backgrounds[current]}')`;

    }, 4000);

});
