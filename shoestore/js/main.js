$(document).ready(function () {
    var $slider = $('.gallery').slick({
        dots: false,
        infinite: false, /* Отключаем бесконечную прокрутку */
        arrows: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        adaptiveHeight: true,
        variableWidth: false, /* Убедимся, что ширина слайдов фиксированная */
        centerMode: false, /* Отключаем центральный режим */
        focusOnSelect: false,
        initialSlide: 0,
        edgeFriction: 0.15,
        cssEase: 'ease',
        waitForAnimate: true,
        useTransform: true,
        rows: 0,
        slidesPerRow: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });
    $('.slider').css('max-width', '1800px');

    $('.slick-prev').on('click', function () {
        $slider.slick('slickPrev');
    });

    $('.slick-next').on('click', function () {
        $slider.slick('slickNext');
    });
});