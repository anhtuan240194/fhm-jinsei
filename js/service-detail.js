const serviceSlide = new Swiper(".service-detail-blog-slider .swiper", {
  direction: "horizontal",
  slidesPerView: 1,
  spaceBetween: 41,
  speed: 1000,
  breakpoints: {
    767: {
      slidesPerView: 2,
      spaceBetween: 41,
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 41,
    },
  },
  autoplay: {
    delay: 3000,
  },
  navigation: {
    prevEl: ".service-detail-slider-prev",
    nextEl: ".service-detail-slider-next",
  },
});
