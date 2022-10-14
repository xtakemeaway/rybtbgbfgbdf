// Делегирование событий
// Определяем коллекцию элементов
const menuLinks = document.querySelectorAll('.navigation__link');
const buttonReset = document.querySelector('.button-reset');

// Вешаем событие на весь документ
document.addEventListener('click', (e) => {
	// Определяем элемент, на который мы кликнули
	const targetElement = e.target;
	if(targetElement.closest('.navigation__link')) {
		// Определяем, есть ли у нашего элемента класс 
		targetElement.closest('.navigation__link').classList.toggle('_active');
		// Отменяем типичное поведение ссылки
		e.preventDefault();
	} else {
		// Если кликаем на документ вне ссылки, то удаляем класс у наших элементов
		removeClass(menuLinks, _active);
	}
	if(targetElement.closest('.buttonReset')) {
		// Если кликаем на какой-лиюо объект, например кнопку вне ссылки, то удаляем класс у наших элементов
		removeClass(menuLinks, _active);
	}
});

function removeClass(elements, className) {
	elements.forEach(element => {
		element.classList.remove('className');
	});
}

// Фиксированная шапка
const headerClass = document.querySelector('.header');
const headerHeight = headerClass.offsetHeight;

window.addEventListener('scroll', setHeaderClass);

function setHeaderClass() {
	if(window.pageYOffset > headerHeight) {
  	headerClass.classList.add('active');
  } else {
  	headerClass.classList.remove('active');
  }
}

// Кнопка наверх
const buttonUp = document.querySelector('.button-up');
window.addEventListener('scroll', () => {
	if(window.pageYOffset > 350) {
		buttonUp.classList.add('_active');
	} else {
		buttonUp.classList.remove('_active');
	}
});
buttonUp.addEventListener('click', () => {
	window.scrollBy({
		top: -document.body.scrollHeight,
		behavior: "smooth"
	});
});