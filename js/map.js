// Объявление функции инициализации карты
function init(){
	// Создаем новый объект карты
	const map = new ymaps.Map('map', {
		// Координаты карты
		center: [55.73213730697374,37.595185079162576],
		// Масштаб
		zoom: 15,
	});

	// Значение маркера на карте
	const placeMark = new ymaps.Placemark([55.73213730697374,37.595185079162576], {
		// Контент балуна
		balloonContent: 
		`
			<div class="balloon">
				<div class="balloon__text">Медлайн-Сервис</div>
				<div class="balloon__content">
					<a class="balloon__link" href="">Перейти по адресу...</a>
				</div>
			</div>
		`
	}, {
		iconLayout: 'default#image',
		// Путь до картинки
		iconImageHref: '',
		// Размер картинки
		iconImageSize: [20, 20],
		// Отступы картинки
		iconImageOffset: [0, 0],
	});

	// Дополнительные настройки карты

	// Удаление поиска
  map.controls.remove('searchControl');
	// Удаление полноэкранного режима
  map.controls.remove('fullscreenControl');

	// Добавляем маркер на карту
	map.geoObjects.add(placeMark);

	// Открытие балуна по умолчанию
	placeMark.balloon.open();
}

ymaps.ready(init);

// Положение координат - https://yandex.ru/map-constructor/location-tool/?from=club