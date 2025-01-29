const buttonRight = document.getElementById('buttonRight');
const buttonLeft = document.getElementById('buttonLeft');
const images = Array.from(document.querySelectorAll('.advertising-img'));
let currentIndex = 0;

const updateSlider = () => {
  images.forEach((img, index) => {
    if (index === currentIndex) {
      img.classList.remove('visually-hidden');
    } else {
      img.classList.add('visually-hidden');
    }
  });
};


updateSlider();


buttonRight.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateSlider();
});


buttonLeft.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateSlider();
});

