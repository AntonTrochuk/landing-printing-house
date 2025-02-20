async function submitForm(event) {
	event.preventDefault();
	try {
		const response = await fetch(event.target.action, {
			method: 'POST',
			body: new FormData(event.target)
		});

		if (!response.ok) throw (`Ошибка при обращении к серверу: ${response.status}`);

		const contentType = response.headers.get('content-type');
		if (!contentType || !contentType.includes('application/json')) {
			throw ('Ошибка обработки. Ответ не JSON');
		}

		const json = await response.json();
		if (json.result === "success") {
			closeModal();
			alert(json.info);
		} else {

			console.log(json);
			throw (json.info);
		}
	} catch (error) {
		alert(error);
	}
}

function closeModal() {
	const modalWindowDOMElement = document.querySelector('.modal-window');
	if (modalWindowDOMElement) {
		modalWindowDOMElement.classList.add('modal-window--close');
	} else {
		console.error("Модальное окно не найдено");
	}
}

document.addEventListener('keydown', (event) => {
	if (event.key === 'Escape') {
		closeModal();
	}
});
