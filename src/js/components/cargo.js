function cargoSlider() {
    var swiper = new Swiper('.cargo .swiper-container', {
        slidesPerView: 2,
        pagination: {
            el: '.cargo .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            700: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 40,
            }
        }
    })
}

cargoSlider()
