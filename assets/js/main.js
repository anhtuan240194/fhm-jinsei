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
      },
      navigation: {
        nextEl: '.flash-sale .swiper-button-next',
        prevEl: '.flash-sale .swiper-button-prev',
      }
  }) || false;

  //Slider top sale product
  const swiperTopSale = new Swiper('.top-sale .swiper', {
      direction: 'horizontal',
      slidesPerView: 5,
      spaceBetween: 20,
      speed: 1000,
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
      },
      navigation: {
        nextEl: '.top-sale .swiper-button-next',
        prevEl: '.top-sale .swiper-button-prev',
      }
  }) || false;

  //Slider top sale product
  const swiperProductViewed = new Swiper('.product-viewed .swiper', {
    direction: 'horizontal',
    slidesPerView: 5,
    spaceBetween: 20,
    speed: 1000,
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

  //Slider recently product
  const swiperProductRecently = new Swiper('.product-recently .swiper', {
    direction: 'horizontal',
    slidesPerView: 5,
    spaceBetween: 20,
    speed: 1000,
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

  //Slider recently blog
  const swiperBlogRecently = new Swiper('.blog-recently .swiper', {
    direction: 'horizontal',
    slidesPerView: 3,
    spaceBetween: 23,
    speed: 1000,
    breakpoints: {
        200: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        376: {
            slidesPerView: 2,
            },
        992: {
            slidesPerView: 3,
        }
    },
    navigation: {
      nextEl: '.blog-recently .swiper-button-next',
      prevEl: '.blog-recently .swiper-button-prev',
    },
  }) || false;

  //Slider promotion orther
  const swiperPromotionOrther = new Swiper('.promotions-orther .swiper', {
    direction: 'horizontal',
    slidesPerView: 3,
    spaceBetween: 20,
    speed: 1000,
    breakpoints: {
        200: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        376: {
            slidesPerView: 2,
            },
        992: {
            slidesPerView: 3,
        }
    },
    navigation: {
      nextEl: '.promotions-orther .swiper-button-next',
      prevEl: '.promotions-orther .swiper-button-prev',
    },
  }) || false;

   //Slider Partner
  document.addEventListener('DOMContentLoaded', () => {
    //Slider partner
    const swiperPartnerEl = document.querySelector('.partners .swiper')

    if(swiperPartnerEl) {
      const swiperPartner = new Swiper(swiperPartnerEl, {
        direction: 'horizontal',
        slidesPerView: 5,
        spaceBetween: 20,
        speed: 1000,
        navigation: {
          nextEl: '.partners .swiper-button-next',
          prevEl: '.partners .swiper-button-prev',
        },
      }) || false;
  
      if(window.innerWidth < 992) {
        swiperPartner.destroy(true, true)
      }
  
      window.addEventListener('resize', () => {
        if(window.innerWidth < 992) {
          swiperPartner.destroy(true, true)
        }
      })
    }
  })



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

  //Event active tabs product details
  const btnTabsProductDetail = document.querySelectorAll('.product-detail-tabs .tab-item')
  if(btnTabsProductDetail) {
    Array.from(btnTabsProductDetail).forEach((tab) => {
      tab.addEventListener('click', () => {
        if(tab.classList.contains('active')) {
          return
        }

        //Active tab
        const tabActive = document.querySelector('.product-detail-tabs .tab-item.active')
        tabActive.classList.remove('active')
        tab.classList.add('active')
      })
    })
  }

  //Copy code voucher Promotion page
  const btnCopyVoucher = document.querySelectorAll('.voucher-item .copy')
  if(btnCopyVoucher) {
    Array.from(btnCopyVoucher).forEach((btn) => {
      const code = btn.previousElementSibling.textContent

      btn.addEventListener('click', () => {
        navigator.clipboard.writeText(code);

        alert("Bạn đã copy mã thành công")
      })
    })

    const showCondition = document.querySelectorAll('.voucher-item .btn-condition')
    Array.from(showCondition).forEach((btnShow) => {
      btnShow.addEventListener('click', () => {
        const parentEl = btnShow.closest('.voucher-item')
        parentEl.classList.add('show-condition')

      })
    })

    const hideCondition = document.querySelectorAll('.voucher-item .close-condition')
    Array.from(hideCondition).forEach((btnHide) => {
      btnHide.addEventListener('click', () => {
        const parentEl = btnHide.closest('.voucher-item')
        parentEl.classList.remove('show-condition')

      })
    })
  }


  //Select Province and district cart
  const formNoUserCart = document.querySelector('.cart-information')
  if(formNoUserCart) {
    const localpicker = new LocalPicker({
      province: "ls_province",
      district: "ls_district",
      ward: "ls_ward"
      });
  }

  //Show bill details cart
  const showBillDetails = document.querySelector('.cart .show-bill-detail')
  if(showBillDetails) {
    const billDetails = document.querySelector('.cart .cart-bill-detail')
    showBillDetails.addEventListener('click', () => {
      billDetails.classList.toggle('show')
    })
  }

  //Auto fill code voucher list
  const btnsUseVoucher = document.querySelectorAll('.voucher-list .voucher-item .use')
  if(btnsUseVoucher) {
    Array.from(btnsUseVoucher).forEach((btn) => {
      btn.addEventListener('click', () => {
        const code = btn.closest('.voucher-item').querySelector('.code').textContent
        const statusVoucher = document.querySelector('.add-voucher-code')
        const inputApply = document.querySelector('.input-apply-voucher')

        if(inputApply) {
          inputApply.value = code
        }

        if(statusVoucher) {
          statusVoucher.textContent = code
        }
      })
    })
  }

  //Hidden cart right when scrolling down
  //Option check view port 
  const optionObserver = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5
  }

  const footer = document.querySelector('footer')
  const cartRight = document.querySelector('.cart .cart-right')

  const footerCallback = (entries) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting) {
        cartRight.classList.add('hiden-cart')
      } else {
        cartRight.classList.remove('hiden-cart')
      }
    })
  }

  if(footer && cartRight) {
    const observerDiscovery = new IntersectionObserver(footerCallback, optionObserver )
    observerDiscovery.observe(footer)
  }

  //Counts the number of HTML characters on review form
  const inputReviewContents = document.querySelectorAll('.popup-review .review-content textarea')
  if(inputReviewContents) {
    Array.from(inputReviewContents).forEach((textarea) => {
      const text = textarea.closest('.review-content').querySelector('.text-max span')
      textarea.addEventListener('input', () => {
        if(textarea.value.length > 500) {
          return
        }

        text.textContent = textarea.value.length
      })
    })
  }

    //Select Province and district cart
    const formEditAddressCustomer = document.querySelector('.edit-address-customer')
    if(formEditAddressCustomer) {
      const localpicker = new LocalPicker({
        province: "ls_province",
        district: "ls_district",
        ward: "ls_ward"
        });
    }

  //Show modal edit address customer page
  const btnShowEditAddress = document.querySelector('.customer-address-page .btn-add-address')
  if(btnShowEditAddress) {
    const modal = document.querySelector('.customer-address-page .customer-info')

    btnShowEditAddress.addEventListener("click", () => {
      modal.classList.toggle('show-edit')
    })
  }

  //Check view all norti
  const btnViewAllNorti = document.querySelector('.customer-norti-page .btn-view-all')
  if(btnViewAllNorti) {
    const nortis = document.querySelectorAll('.customer-norti-page .norti-item.not-seen')

    btnViewAllNorti.addEventListener("click", () => {
      if(nortis) {
        Array.from(nortis).forEach((norti) => {
          norti.classList.remove('not-seen')
        })
      }
    })

  }

  //Show - Hide password input
  const boxPassword = document.querySelectorAll('.input-password')
  if(boxPassword) {
    Array.from(boxPassword).forEach((box) => {
      const btn = box.querySelector('.show')
      const input = box.querySelector('input')
      btn.addEventListener("click", () => {
        if(input.getAttribute('type') === 'text'){
          input.setAttribute('type', 'password')
          return
        }

        input.setAttribute('type', 'text')
      })
    })

  }