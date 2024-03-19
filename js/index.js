const slider = new Swiper('.slide .swiper', {
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 10,
  slidesPerGroup: 1,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
  speed: 1000,
  navigation: {
    nextEl: '.slide .swiper-button-next',
    prevEl: '.slide .swiper-button-prev',
  },
}) || false;

const productTabs = document.querySelectorAll('.product-tabs .tab-pane')

if(productTabs) {
  Array.from(productTabs).forEach((tab, index) => {
    const ele = '.product-tabs .tab-pane:nth-child(' + (index + 1) + ')'
    const tabSwiper = new Swiper(ele + ' .swiper', {
      direction: 'horizontal',
      slidesPerView: 4,
      spaceBetween: 32,
      speed: 1000,
      grid: {
        rows: 2,
        fill: "rows",
      },
      breakpoints: {
          200: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
          376: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 32,
          },
      },
      navigation: {
        nextEl: ele + ' .swiper-button-next',
        prevEl: ele + ' .swiper-button-prev',
      },
    })
  })
}

const homeProjects = new Swiper('.projects .swiper', {
  direction: 'horizontal',
  slidesPerView: 4,
  spaceBetween: 19,
  slidesPerGroup: 1,
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },
  breakpoints: {
    200: {
      slidesPerView: 4,
      spaceBetween: 6,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 12,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 19,
    },
},
  loop: true,
  speed: 1000,
  navigation: {
    nextEl: '.projects .swiper-button-next',
    prevEl: '.projects .swiper-button-prev',
  },
}) || false;