function modelInfoSlider() {
    var swiper = new Swiper('.model-info .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        pagination: {
            el: '.model-info .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
    })
}

function variantsSlider() {
    var swiper = new Swiper('.variants .swiper-container', {
        slidesPerView: 4,
        spaceBetween: 6,
        loop: true,
        speed: 500,
        navigation: {
            nextEl: '.variants .swiper-button-next',
            prevEl: '.variants .swiper-button-prev',
        },
        pagination: {
            el: '.variants .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
            },
        }
    })
}

modelInfoSlider()
variantsSlider()
