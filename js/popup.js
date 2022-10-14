// Коллекция кнопок
// const buttonsOpen = document.querySelectorAll('.popup-open');
// Одна кнопка
const buttonOpen = document.querySelector('.popup-open');
const buttonClose = document.querySelector('.popup-close');
const mainPopup = document.querySelector('.popup');

/* Для коллекций кнопок
buttonsOpen.forEach(buttonOpen => {
	buttonOpen.addEventListener('click', popupOpen);
});
buttonClose.addEventListener('click', popupClose);
*/

buttonOpen.addEventListener('click', popupOpen);
buttonClose.addEventListener('click', popupClose);

function popupOpen() {
	mainPopup.classList.add('_active');
	// Запрещаем скроллить страницу
	document.body.classList.add('_lock');
}

mainPopup.addEventListener('click', (e) => {
	if(e.target.classList.contains('popup')) {
		mainPopup.classList.remove('_active');
	}
});

function popupClose(e) {
	mainPopup.classList.remove('_active');
	document.body.classList.remove('_lock');
	// Если кнопка является ссылкой
	// e.preventDefault();
}