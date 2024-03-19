const swiper = new Swiper(".detail-img", {
  spaceBetween: 8,
  slidesPerView: "auto",
  speed: 800,
  breakpoints: {
    768: {
      spaceBetween: 20,
    },
  },
});
const swiper2 = new Swiper(".detail-thumb", {
  loop: true,
  spaceBetween: 10,
  speed: 800,
  thumbs: {
    swiper: swiper,
  },
});
const relatedSlider = new Swiper(".related-slider", {
  spaceBetween: 20,
  slidesPerView: 2,
  speed: 1000,
  breakpoints: {
    576: {
      spaceBetween: 20,
      slidesPerView: 3,
    },
    991: {
      spaceBetween: 32,
      slidesPerView: 4,
    },
  },
  navigation: {
    nextEl: ".related-slider-next",
    prevEl: ".related-slider-prev",
  },
});
