var swiperStore = new Swiper(".boySwipper", {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 1800,
      },
    loop:true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 70,
        },
        1024: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
    },
});