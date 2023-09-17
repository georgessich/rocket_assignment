const slideButtons = document.querySelectorAll('.services__slider-btns--btnleft, .services__slider-btns--btnright');
const slideNumber = document.querySelector('.services__slider-btns--number');
const slides = document.querySelectorAll('.services__slide');
let currentSlideIndex = 0;
// Функция для отображения текущего слайда
function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.display = 'flex';
    } else {
      slide.style.display = 'none';
    }
  });
  slideNumber.textContent = `${index + 1}/${slides.length}`;
}
console.log(slideButtons)
// Нажатие кнопки "Вперед"
slideButtons[1].addEventListener('click', function () {
  currentSlideIndex++;
  if (currentSlideIndex >= slides.length) {
    currentSlideIndex = 0;
  }
  showSlide(currentSlideIndex);
});

// Нажатие кнопки "Назад"
slideButtons[0].addEventListener('click', function () {
  currentSlideIndex--;
  if (currentSlideIndex < 0) {
    currentSlideIndex = slides.length - 1;
  }
  showSlide(currentSlideIndex);
});

// Показать первый слайд при загрузке страницы
showSlide(currentSlideIndex);