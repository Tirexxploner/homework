$(document).ready(function() {
    // Initialize variables
    var $slider;
    var allProducts = [];
    
    // Collect all product data on page load
    $('.gallery__slide').each(function() {
        allProducts.push({
            element: $(this),
            brand: $(this).find('.slider__bottom-company').text().trim().toLowerCase(),
            price: parseInt($(this).find('.slider__bottom-price').text().replace(/[^\d]/g, '')),
            name: $(this).find('.slider__bottom-name').text().trim()
        });
    });
    
    // Initialize slider
    initSlider();
    
    // Navigation arrows
    $('.slick-prev').on('click', () => $slider.slick('slickPrev'));
    $('.slick-next').on('click', () => $slider.slick('slickNext'));
    
    // SEE ALL/HIDE button
    const $button = $('.slider__button').css({
        'display': 'block',
        'margin': '30px auto 0',
        'text-align': 'center'
    });
    
    $button.on('click', function(e) {
        e.preventDefault();
        if ($('#shoes-accordion').length) {
            closeAccordion();
        } else {
            openAccordion();
        }
    });
    
    // Toggle filter/sort panel
    $('.slider__filter, .slider__sort').on('click', function(e) {
        e.preventDefault();
        $('.filter-sort-panel').slideToggle();
    });
    
    // Apply filters and sorting
    $('#brand-filter, #price-filter, #sort-option').on('change', function() {
        applyFilters();
    });
    
    function applyFilters() {
        const brandFilter = $('#brand-filter').val();
        const priceFilter = $('#price-filter').val();
        const sortOption = $('#sort-option').val();
        
        let filteredProducts = [...allProducts];
        
        // Apply brand filter
        if (brandFilter !== 'all') {
            filteredProducts = filteredProducts.filter(product => 
                product.brand === brandFilter.toLowerCase()
            );
        }
        
        // Apply price filter
        if (priceFilter !== 'all') {
            const [min, max] = priceFilter.split('-').map(Number);
            filteredProducts = filteredProducts.filter(product => {
                if (max) {
                    return product.price >= min && product.price <= max;
                }
                return product.price >= min;
            });
        }
        
        // Apply sorting
        switch(sortOption) {
            case 'price-asc':
                filteredProducts.sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                filteredProducts.sort((a, b) => b.price - a.price);
                break;
            case 'name-asc':
                filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'name-desc':
                filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
                break;
        }
        
        // Update the display
        updateProductDisplay(filteredProducts);
    }
    
    function updateProductDisplay(products) {
        const $gallery = $('.gallery');
        const isSliderMode = !$gallery.hasClass('disabled');
        
        if (isSliderMode) {
            // In slider mode - unslick, update, then re-slick
            $slider.slick('unslick');
            $gallery.empty();
            products.forEach(product => {
                $gallery.append(product.element.clone());
            });
            initSlider();
        } else {
            // In accordion mode - just update the content
            const $accordion = $('#shoes-accordion');
            const $grid = $accordion.find('.shoes-grid');
            
            $grid.empty();
            products.forEach(product => {
                $grid.append(
                    product.element.clone()
                        .removeClass('slick-slide slick-active')
                        .addClass('accordion-item')
                );
            });
            
            // Recalculate height if accordion is open
            if ($accordion.is(':visible')) {
                $accordion.css('height', $grid.outerHeight(true));
            }
        }
    }
    
    function openAccordion() {
        // Disable slider
        $slider.slick('unslick');
        $('.gallery').addClass('disabled').css({
            'display': 'flex',
            'flex-wrap': 'wrap'
        });
        $('.custom-arrows').hide();
        
        // Create accordion
        const $accordion = $(`
            <div id="shoes-accordion" style="
                opacity: 0;
                height: 0;
                overflow: hidden;
                transition: all 0.5s ease;
            "></div>
        `);
        
        const $grid = $('<div class="shoes-grid"></div>');
        
        // $('.gallery__slide').each(function() {
        //     $grid.append(
        //         $(this).clone()
        //             .removeClass('slick-slide slick-active')
        //             .addClass('accordion-item')
        //             .css({
        //                 'opacity': 0,
        //                 'transform': 'translateY(20px)',
        //                 'transition': 'all 0.4s ease-out'
        //             })
        //     );
        // });
        
        $accordion.append($grid).insertAfter('.slider__container');
        
        // Animation
        setTimeout(() => {
            $accordion.css({
                'opacity': 1,
                'height': $grid.outerHeight(true)
            });
            
            $('.accordion-item').each(function(i) {
                $(this).delay(i*75).animate({
                    'opacity': 1,
                    'transform': 'translateY(0)'
                }, 300);
            });
        }, 50);
        
        $button.text("HIDE").css('margin', '30px auto 0');
    }
    
    function closeAccordion() {
        $('#shoes-accordion').animate({
            'opacity': 0,
            'height': 0
        }, 400, function() {
            $(this).remove();
            
            // Re-enable slider
            $('.gallery').removeClass('disabled').removeAttr('style');
            $('.custom-arrows').show();
            initSlider();
            
            // Scroll to slider
            $('html, body').animate({
                scrollTop: $('.slider__container').offset().top - 100
            }, 500);
        });
        
        $button.text("SEE ALL").css('margin', '30px auto 0');
    }
    
    function initSlider() {
        $slider = $('.gallery').slick({
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
            responsive: [
                { breakpoint: 1001  , settings: { slidesToShow: 3 } },
                { breakpoint: 801, settings: { slidesToShow: 2 } },
                { breakpoint: 551, settings: { slidesToShow: 1 } }
            ] 
        });
    }
});
// АККОРДЕОН







// БУРГЕР
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


// СЛАЙДЕР ХИРО
$(document).ready(function () {
    // Инициализация слайдера
    var $slider = $('.vertical-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        arrows: false,
        dots: false,
        fade: false,
        infinite: true
    });

    // Обработчик кликов для существующих кнопок
    $('.slider-dots').on('click', 'button', function () {
        var index = $(this).data('index');
        $slider.slick('slickGoTo', index);
    });

    // Обновление активного состояния
    $slider.on('afterChange', function (event, slick, currentSlide) {
        $('.slider-dots li').removeClass('slick-active');
        $('.slider-dots li').eq(currentSlide).addClass('slick-active');
    });

    // Активируем первую кнопку
    $('.slider-dots li:first').addClass('slick-active');
});