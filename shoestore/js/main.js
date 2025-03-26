$(document).ready(function () {
    var $slider = $('.gallery').slick({
        dots: false,
        infinite: false,
        arrows: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        adaptiveHeight: true,
        variableWidth: false,
        centerMode: false,
        focusOnSelect: false,
        initialSlide: 0,
        edgeFriction: 0.15,
        cssEase: 'ease',
        waitForAnimate: true,
        useTransform: true,
        rows: 0,
        slidesPerRow: 0,
        slidesPerView: 1.5,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 801,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 551,
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





document.addEventListener('click', burgerInit)

function burgerInit(e) {

    const burgerIcon = e.target.closest('.burger-icon')
    const burgerNavLink = e.target.closest('.nav__link')


    if (!burgerIcon && !burgerNavLink) return
    if (document.documentElement.clientWidth > 900) return



    if (!document.body.classList.contains('body--opened-menu')) {
        document.body.classList.add('body--opened-menu')
    } else {
        document.body.classList.remove('body--opened-menu')
    }

}