const burger = document.querySelector('.header__mobile-burger');
const menu = document.querySelector('.header__mobile-menu');

burger.addEventListener('click', () => {
  menu.classList.toggle('active');
  burger.classList.toggle('active');
});