const openModalBtn = document.querySelector('.header__top-btn');
const closeModalBtn = document.getElementById('closeModalBtn');
const modal = document.getElementById('myModal');
const emailForm = document.getElementById('emailForm');
const modalContent = document.querySelector('.modal__content'); 
const ctaButtons = document.querySelectorAll('.services__slide-btns--cta');
const mobileMenuBtn = document.querySelector(".header__mobile-menu--btn");


function openModal() {
  modal.style.display = 'flex';
}


function closeModal() {
  modal.style.display = 'none';
}


openModalBtn.addEventListener('click', openModal);

closeModalBtn.addEventListener('click', closeModal);
ctaButtons.forEach((button) => {
    button.addEventListener('click', openModal);
  });


emailForm.addEventListener('submit', () => {

});


modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

mobileMenuBtn.addEventListener('click', openModal);