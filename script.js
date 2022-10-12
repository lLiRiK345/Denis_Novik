const burger = document.querySelector('.burger')
const popUp = document.querySelector('.popup')
const close = document.querySelector('.close')

burger.addEventListener('click', () => {
  popUp.style.display = 'block'
})

close.addEventListener('click', () => {
  popUp.style.display = 'none'
})