document.addEventListener('DOMContentLoaded', () => {

    const slide1 = document.querySelector('.slide1');
    const slide2 = document.querySelector('.slide2');
    const images = [
        'images/hero1.jpg',
        'images/hero2.jpg',
        'images/hero3.jpg',
        'images/hero4.jpg',
        'images/hero5.jpg',
        'images/hero6.jpg'
    ];

    let current = 0;
    let showingFirst = true;

    slide1.style.backgroundImage = `url('${images[0]}')`;

    setInterval(() => {

        current = (current + 1) % images.length;

        if (showingFirst) {
            slide2.style.backgroundImage =
                `url('${images[current]}')`;
            slide2.style.opacity = "1";
            slide1.style.opacity = "0";

        } else {
            slide1.style.backgroundImage =
                `url('${images[current]}')`;
            slide1.style.opacity = "1";
            slide2.style.opacity = "0";
        }

        showingFirst = !showingFirst;
    }, 4000);

});
