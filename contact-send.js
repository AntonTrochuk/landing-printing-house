

async function submitForm(event) {
	event.preventDefault(); // отключаем перезагрузку/перенаправление страницы
	try {
		// Формируем запрос
		const response = await fetch(event.target.action, {
			method: 'POST',
			body: new FormData(event.target)
		});
		// проверяем, что ответ есть
		if (!response.ok) throw (`Ошибка при обращении к серверу: ${response.status}`);
		// проверяем, что ответ действительно JSON
		const contentType = response.headers.get('content-type');
		if (!contentType || !contentType.includes('application/json')) {
			throw ('Ошибка обработки. Ответ не JSON');
		}
		// обрабатываем запрос
		const json = await response.json();
		if (json.result === "success") {
			// в случае успеха
			const modalWindowDOMElement = document.querySelector('.modal-window');
			modalWindowDOMElement.classList.add('modal-window--close');
			alert(json.info);
		} else {
			// в случае ошибки
			console.log(json);
			throw (json.info);
		}
	} catch (error) { // обработка ошибки
		alert(error);
	}
}
