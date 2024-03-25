//Swap form register, login popup account
const btnSwapForm = document.querySelector('.popup-account .register-action .swap-form')
if(btnSwapForm) {
    const form = document.querySelector('.popup-account .account-form')
    const textSuggest = document.querySelector('.popup-account .register-action h4')
    const textHeader = document.querySelector('.popup-account h3')

    btnSwapForm.addEventListener('click', () => {
        form.classList.toggle('register')

        if(btnSwapForm.classList.contains('register')){
            btnSwapForm.classList.remove('register')
            btnSwapForm.textContent = "Đăng ký ngay"
            textSuggest.textContent = "Bạn chưa có tài khoản?"
            textHeader.textContent = "Đăng nhập"
            
            return true
        }

        btnSwapForm.classList.add('register')
        textHeader.textContent = "Đăng ký"
        btnSwapForm.textContent = "Đăng nhập ngay"
        textSuggest.textContent = "Bạn đã có tài khoản?"
    })
}

//Show password input password
const btnShowPassword = document.querySelectorAll('.form-line .btn-show')
if(btnShowPassword) {
    Array.from(btnShowPassword).forEach((btn) => {
        btn.addEventListener('click', () => {
            const input = btn.previousElementSibling

            if(input.getAttribute('type') === "password") {
                input.setAttribute('type', "text")
                return true
            }
            input.setAttribute('type', "password")
        })
    })
}

//Show modal OTP
const btnShowOTP = document.querySelector('.popup-account #account-register .submit')

if(btnShowOTP) {
    const modalOTP = new bootstrap.Modal('#popup-otp')
    const modalAccount = new bootstrap.Modal('#popup-account')
    const popupOTP = document.querySelector('#popup-otp')
    const popupAccount = document.querySelector('#popup-account')

    btnShowOTP.addEventListener('click', () => {
        modalOTP.show(popupOTP)
        modalAccount.hide(popupAccount)
    })
}

//Show sub menu mobile
const btnOpenSubmenu = document.querySelectorAll('.menu-mobile .nav-list .more')
if(btnOpenSubmenu) {
    Array.from(btnOpenSubmenu).forEach((btn) => {
        btn.addEventListener('click', () => {
            const subMenu = btn.previousElementSibling
            subMenu.classList.add('show')
        })
    })
}

const btnCloseSubmenu = document.querySelectorAll('.menu-mobile .nav-list .toggle-sub-menu')
if(btnCloseSubmenu) {
    Array.from(btnCloseSubmenu).forEach((btn) => {
        btn.addEventListener('click', () => {
            const subMenu = btn.parentElement
            subMenu.classList.remove('show')
        })
    })
}

/////JS Modules

  //Slider homepage
  const swiperSlider = new Swiper('.slider .swiper', {
    direction: 'horizontal',
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },  
    speed: 1000,
    watchOverflow: true,
    navigation: {
      nextEl: '.slider .swiper-button-next',
      prevEl: '.slider .swiper-button-prev',
    }
  }) || false;

  //Slider category homepage
  const swiperProductCategory = new Swiper('.product-category .swiper', {
    direction: 'horizontal',
    slidesPerView: 8,
    spaceBetween: 30,
    speed: 750,
    watchOverflow: true,
    breakpoints: {
        200: {
          slidesPerView: 3.5,
          spaceBetween: 22,
        },
        375: {
            slidesPerView: 4.75,
            spaceBetween: 10,
          },
        577: {
            slidesPerView: 4,
        },
        768: {
          slidesPerView: 6,
        },
        992: {
          slidesPerView: 8,
          spaceBetween: 30,
        },
    },
    navigation: {
      nextEl: '.product-category .swiper-button-next',
      prevEl: '.product-category .swiper-button-prev',
    }
  }) || false;

  //Slider category homepage
  const swiperFlashsale = new Swiper('.flash-sale .swiper', {
      direction: 'horizontal',
      slidesPerView: 5,
      spaceBetween: 20,
      speed: 1000,
      watchOverflow: true,
      breakpoints: {
          200: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          375: {
              slidesPerView: 2.2,
            },
          577: {
              slidesPerView: 2,
              spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
          },
          992: {
            slidesPerView: 4,
          },
          1200: {
              slidesPerView: 5,
            },
      }
  }) || false;

  //Slider top sale product
  const swiperTopSale = new Swiper('.top-sale .swiper', {
      direction: 'horizontal',
      slidesPerView: 5,
      spaceBetween: 20,
      speed: 1000,
      watchOverflow: true,
      breakpoints: {
          200: {
              slidesPerView: 1,
              spaceBetween: 10,
          },
          375: {
              slidesPerView: 2.2,
              },
          577: {
              slidesPerView: 2,
              spaceBetween: 20,
          },
          768: {
              slidesPerView: 3,
          },
          992: {
              slidesPerView: 4,
          },
          1200: {
              slidesPerView: 5,
              },
      }
  }) || false;

  //Slider top sale product
  const swiperProductViewed = new Swiper('.product-viewed .swiper', {
    direction: 'horizontal',
    slidesPerView: 5,
    spaceBetween: 20,
    speed: 1000,
    watchOverflow: true,
    breakpoints: {
        200: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        376: {
            slidesPerView: 2.2,
            },
        577: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 5,
            },
    }
  }) || false;

  //Slider Thumb Image Product Detail
  const productImageThumbs = new Swiper('.detail-image .thumb-image .swiper', {
    direction: 'horizontal',
    slidesPerView: 4,
    spaceBetween: 20,
    speed: 1000,
    freeMode: true,
    watchSlidesProgress: true,
    navigation: {
        nextEl: '.detail-image .thumb-image .swiper-button-next',
        prevEl: '.detail-image .thumb-image .swiper-button-prev',
    },
}) || false;

  //Slider Large Image Product Detail
  const productImageLarge = new Swiper('.detail-image .large-image .swiper', {
      direction: 'horizontal',
      slidesPerView: 1,
      spaceBetween: 20,
      speed: 1000,
      touch: false,
      mousewheel: false,
      navigation: {
        nextEl: '.detail-image .large-image .swiper-button-next',
        prevEl: '.detail-image .large-image .swiper-button-prev',
    },
      thumbs: {
          swiper: productImageThumbs,
      },
  }) || false;

  //Set time Flash sale
  
  //Time flash sale
  //Hàm set thời gian đếm ngược
  const boxCountDown = document.querySelector('.box-countdown')
  function setTimeFlashSale(timeReMaining) {
    const hours = Math.floor(timeReMaining / 3600);
    const minutes = Math.floor((timeReMaining - hours * 3600)/60);
    const seconds = Math.floor(timeReMaining - hours * 3600 - minutes * 60);
    document.querySelector('.box-countdown .hours').textContent = hours.toString().padStart(2, "0");
    document.querySelector('.box-countdown .minutes').textContent = minutes.toString().padStart(2, "0")
    document.querySelector('.box-countdown .second').textContent = seconds.toString().padStart(2, "0")
  };
  
  if(boxCountDown) {
    const deadLine = new Date("2024/03/30 12:00:00");
    const newDate = new Date(); 
    let timeReMaining = Math.floor((deadLine - newDate) / 1000);
    if (timeReMaining > 0) {
      setInterval(function () {
        setTimeFlashSale(timeReMaining);
        timeReMaining--;
      }, 1000);
    } else {
      setTimeFlashSale(0);
    }
  }


  //Demo Hiển thị toast
  // const modalToastCart = new bootstrap.Modal('#toast-add-cart')
  // const toastCart = document.querySelector('#toast-add-cart')
  // modalToastCart.show(toastCart)

  //Sidebar fillter
  const filterProduct = document.querySelector('.page-product-list .filter')
  if(filterProduct) {
    window.addEventListener('DOMContentLoaded', () => {
      if(window.innerWidth < 992) {
        filterProduct.classList.add('offcanvas')
      } else {
        filterProduct.classList.remove('offcanvas')
      }
    })

    window.addEventListener('resize', () => {
      if(window.innerWidth < 992) {
        filterProduct.classList.add('offcanvas')
      } else {
        filterProduct.classList.remove('offcanvas')
      }
    })
  }

  //Sort by
  const sortBy = document.querySelector('.sortby')
  if(sortBy) {
    const btnSortBy = sortBy.querySelector('.sortby-toggle');
    const text = sortBy.querySelector('.sortby-toggle span')
    const itemsSortBy = document.querySelectorAll('.sortby-item')

    //Hide box dropdown when click outside element
    document.addEventListener('click', (event) => {
      if(event.target.classList.contains('sortby-toggle') 
      || event.target.closest('.sortby-toggle')) {
        return
      }
      console.log(event.target.closest('.sortby-toggle'))
      sortBy.classList.remove('active')
    })

    //Show box dropdown
    btnSortBy.addEventListener('click', () => {
      sortBy.classList.toggle('active')
    })

    Array.from(itemsSortBy).forEach(item => {
      item.addEventListener('click', () => {
        const data = item.getAttribute('data-sort')
        const newText = item.textContent
        text.textContent = newText
        sortBy.setAttribute('data-sort', data)
      })
    })
  }

  //Quantity product detail
  const addQuantityProduct = document.querySelectorAll('.add-quantity');
  Array.from(addQuantityProduct).forEach((addQuantity) => {
    const increBtn = addQuantity.querySelector('.plus')
    const decreBtn = addQuantity.querySelector('.minus')
    const quantity = addQuantity.querySelector('input')

    increBtn.addEventListener('click', () => {
      quantity.value++
    })

    quantity.addEventListener('change', (e) => {
      if(e.target.value < 0 || e.target.value === "") {
        quantity.value = 1
      }
    })

    decreBtn.addEventListener('click', () => {
      if (quantity.value > 1) {
        quantity.value--
      } else {
        quantity.value = 1
      }
    })
  })