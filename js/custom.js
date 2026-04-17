$(function () {
    const bar = document.querySelector('.slide_progress .bar');

    new Swiper('.main_visual_slide', {
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        on: {
            autoplayTimeLeft(swiper, time, progress) {
                bar.style.width = `${(1 - progress) * 100}%`;
            }
        }
    });
});