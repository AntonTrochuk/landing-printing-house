const modalWindowDOMElement = document.querySelector('.modal-window');
const buttonOpenDOMElement = document.querySelector('.initial-banner__button');
const buttonCloseDOMElement = document.querySelector('.button-close');

const openModal = () => {
	buttonOpenDOMElement.addEventListener('click', () => {
		modalWindowDOMElement.classList.remove('modal-window--close');
	});
}

const closeModal = () => {
	buttonCloseDOMElement.addEventListener('click', () => {
		modalWindowDOMElement.classList.add('modal-window--close');
	});
}


openModal();
closeModal();
