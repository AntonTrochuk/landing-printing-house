const sliders = document.querySelectorAll('.image-slider');

sliders.forEach((slider) => {
	const buttonRight = slider.querySelector('.slider-button-right');
	const buttonLeft = slider.querySelector('.slider-button-left');
	const images = Array.from(slider.querySelectorAll('.about-section__img'));
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
});

