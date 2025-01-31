document.addEventListener("DOMContentLoaded", function () {
    // Слайдер
    const slider = document.querySelector('.slider');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    const images = slider.querySelectorAll('img');

    let index = 0;
    const totalImages = images.length;

    function updateSlider() {
        const offset = -index * 100;
        slider.style.transform = `translateX(${offset}%)`;
    }

    nextBtn.addEventListener('click', () => {
        index = (index + 1) % totalImages;
        updateSlider();
    });

    prevBtn.addEventListener('click', () => {
        index = (index - 1 + totalImages) % totalImages;
        updateSlider();
    });
});
