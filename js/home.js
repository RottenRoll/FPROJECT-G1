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
.hero {
    background-color: var(--white);
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-bottom: 5px solid var(--primary-red);
}

.hero h1 {
    font-size: 3rem;
    margin-bottom: 10px;
}

.hero p {
    font-size: 1.2rem;
    margin-bottom: 20px;
}
