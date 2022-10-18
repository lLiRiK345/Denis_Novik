const popUp = document.querySelector('.popup')
const burger = document.querySelector('.burger')
const burger_top = document.querySelector('.burger_top')
const burger_bot = document.querySelector('.burger_bot')
const close = document.querySelectorAll('.close')

burger.addEventListener('click', () => {
  console.log(close);
  close[0].classList.toggle('close_right')
  close[1].classList.toggle('close_left')
  popUp.classList.toggle('popUp-active')
  burger_top.classList.toggle('hidden')
  burger_bot.classList.toggle('hidden')
  console.dir(close);
  if (popUp.classList.contains('popUp-active')) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})