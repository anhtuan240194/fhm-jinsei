const blogDetailSlider = new Swiper("#blog-detail-slider .swiper", {
  direction: "horizontal",
  slidesPerView: 1,
  spaceBetween: 47,
  speed: 1000,
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    767: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});
