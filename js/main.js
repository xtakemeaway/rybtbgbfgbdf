

// const slider = document.querySelector('.slider-container');

// let mySwiper;

// function mobileSlider() {
// 	if (window.innerWidth <= 900 && slider.dataset.mobile == "false") {
// 		mySwiper = new Swiper(slider, {
// 			loop: true,
// 			slidesPerView: 1,
// 			spaceBetween: 10,
// 			// Указываем имя наших слайдов
// 			wrapperClass: 'slider-wrapper',
// 			slideClass: 'card',
// 		});
// 		slider.dataset.mobile = "true";
// 	}
// 	if (window.innerWidth > 900) {
// 		slider.dataset.mobile = "false";
// 		if (slider.classList.contains('swiper-container-initialized')) {
// 			mySwiper.destroy();
// 		}
// 	}
// }

// mobileSlider();

// window.addEventListener('resize', () => {
// 	mobileSlider();
// });



/* Выпадающее меню */
document.addEventListener('DOMContentLoaded', () => {
	const burgerMenu = document.querySelector('.burger-menu');
	const websiteNavigation = document.querySelector('.options-header');
	burgerMenu.addEventListener('click', () => {
		burgerMenu.classList.toggle('_active');
		document.body.classList.toggle('_lock');
		websiteNavigation.classList.toggle('_active');
	});

	const swiper = new Swiper('.firstscreen-swiper', {
		loop: true,
		// simulateTouch: true,
		// grabCursor: true,
		// slideToClickedSlide: true,
		// slidesPerView: 1,
		autoplay: {
			delay: 5000,
		},
		speed: 1000,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			type: 'bullets',
		},
	});

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

	const accordeons = document.querySelectorAll('.accordeon__item');
	accordeons.forEach(element => {
		element.addEventListener('click', (e) => {
		const currentAccordeon = e.currentTarget;
		const accordeonControl = currentAccordeon.querySelector('.accordeon__header');
		const accordeonContent = currentAccordeon.querySelector('.accordeon__content');

		currentAccordeon.classList.toggle('open');

		if(currentAccordeon.classList.contains('open')) {
			accordeonContent.style.maxHeight = accordeonContent.scrollHeight + 'px';
		} else {
			accordeonContent.style.maxHeight = null;
		}
		});
	});

	/* Определяем все кнопки */
	const listButtons = document.querySelectorAll('.navigation__link');
	/* Определяем все дропдауны */
	const drops = document.querySelectorAll('.dropdown');
	listButtons.forEach(element => {
		element.addEventListener('click', (e) => {
			e.preventDefault();
			/* Определяем кнопку, которая была нажата в данный момент */
			const currentButton = e.currentTarget;
			/* Ищем дропдаун через родителя (от кнопки ищем ее родителя, а от него сам дропдаун) */
			const dropdowns = currentButton.closest('.navigation__item').querySelector('.dropdown');
			/* Если эта кнопка не текущая, то мы убираем активный класс */
			listButtons.forEach(element => {
				if (element !== currentButton) {
					element.classList.remove('menu__button--active');
				}
			});
			drops.forEach(element => {
				if (element !== dropdowns) {
					element.classList.remove('_active');
				}
			});
			/* Добавляем класс, открывающий дропдаун */
			dropdowns.classList.toggle('_active');
			/* Добавляем класс на кнопку при нажатии */
			currentButton.classList.toggle('menu__button--active');
		});
	});
	/* При клике вне меню */
	document.addEventListener('click', (e) => {
		if (!e.target.closest('.navigation')) {
			listButtons.forEach(element => {
				element.classList.remove('menu__button--active');
			});
			drops.forEach(element => {
				element.classList.remove('_active');
			});
		}
	});

	const popupButtons = document.querySelectorAll('*[data-popup-open]');
	for(let i = 0; i < popupButtons.length; i++){
		popupButtons[i].addEventListener('click', () => {
			const popupName = popupButtons[i].getAttribute('data-popup-open');
			const currentPopup = document.querySelector("[data-popup='"+popupName+"']");
			currentPopup.classList.add('is-active');

			const buttonClose = currentPopup.querySelector('.popup-close');
			buttonClose.addEventListener('click', () => {
				currentPopup.classList.remove('is-active');
			});
		});
	}

	window.addEventListener('click', (e) => {
		if(e.target.hasAttribute('data-popup')) {
			e.target.classList.remove('is-active');
		}
	});
});
