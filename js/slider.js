const slideButtons = document.querySelectorAll('.services__slider-btns--btnleft, .services__slider-btns--btnright');
const slideNumber = document.querySelector('.services__slider-btns--number');
const slides = document.querySelectorAll('.services__slide');
let currentSlideIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.display = 'flex';
    } else {
      slide.style.display = 'none';
    }
  });
  slideNumber.innerHTML = `${index + 1}/<span>${slides.length}</span>`;
}
console.log(slideButtons)

slideButtons[1].addEventListener('click', function () {
  currentSlideIndex++;
  if (currentSlideIndex >= slides.length) {
    currentSlideIndex = 0;
  }
  showSlide(currentSlideIndex);
});


slideButtons[0].addEventListener('click', function () {
  currentSlideIndex--;
  if (currentSlideIndex < 0) {
    currentSlideIndex = slides.length - 1;
  }
  showSlide(currentSlideIndex);
});


showSlide(currentSlideIndex);