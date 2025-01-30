const modalWindowDOMElement = document.querySelector('.modal-window');
const buttons = document.querySelectorAll('.button-js');
const buttonCloseDOMElement = document.querySelector('.button-close');

buttons.forEach((button) => {
	button.addEventListener('click', () => {
		modalWindowDOMElement.classList.remove('modal-window--close');
	});

	buttonCloseDOMElement.addEventListener('click', () => {
		modalWindowDOMElement.classList.add('modal-window--close');
	});
});
