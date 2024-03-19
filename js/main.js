//Event on inputs
const inputs = document.querySelectorAll('.contact-form-line input[type="text"], .contact-form-line input[type="email"]');
  Array.from(inputs).forEach((input) => {
    const placeholder = input.placeholder
    const elParrent = input.closest('.contact-form-line')

    //Change color button clear
    input.addEventListener('input', () => {

        if (input.value.length > 0 ) {
            elParrent.classList.add('input-focus')
            return true
        }
        elParrent.classList.remove('input-focus')
    })

    //Focus on input
    input.addEventListener('focus', () => {
        input.placeholder = ""
    })

    input.addEventListener('focusout', () => {
        input.placeholder = placeholder
    })

    //Click clear input
    const buttonClear = elParrent.querySelector('.clear-input')
    buttonClear.addEventListener('click', () => {
        input.value = ''
        elParrent.classList.remove('input-focus')
        input.focus()
    })
});

const textareaInputs = document.querySelectorAll('.contact-form-line textarea');
Array.from(textareaInputs).forEach((textarea) => {
  const placeHolder = textarea.placeholder;
  textarea.addEventListener('focus', function(){
    textarea.placeholder = ""
  })

  textarea.addEventListener('focusout', function(e) {
    textarea.placeholder = placeHolder
  })
})

//Choose languague footer
window.addEventListener('DOMContentLoaded',  () => {
  let buttonChoosseLanguage;
  const choosseLanguage = () => {
    if (window.innerWidth > 992) {
      buttonChoosseLanguage = document.querySelector('.language-pc .language-button');
    } else {
      buttonChoosseLanguage = document.querySelector('.language-mb .language-button');
    }
  }
  
  choosseLanguage();
 
  if(buttonChoosseLanguage) {
    const boxSelectLanguage = buttonChoosseLanguage.nextElementSibling
    
    buttonChoosseLanguage.addEventListener('click', () => {
      boxSelectLanguage.classList.toggle('active')
    })
  
    const itemsChooseLanguage = document.querySelectorAll('.box-select-language .language-item')
    if(itemsChooseLanguage) {
      Array.from(itemsChooseLanguage).forEach(item => {
        item.addEventListener('click', () => {
          const val = item.querySelector('input').value
          const dataSrc = './assets/image/icons/' + item.getAttribute('data-image')
          const img = buttonChoosseLanguage.querySelector('img')
          const span = buttonChoosseLanguage.querySelector('span')
  
          img.setAttribute('src', dataSrc)
          span.textContent = val
  
          boxSelectLanguage.classList.remove('active')
        })
      })
    }
  }
})