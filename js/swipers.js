// Swiper Slider
const swiper = new Swiper('.swiper', {
  // Параметры
  loop: true,
	// Для корректной работы со свойством slidesPerGroup
	loopedSlides: 2,
	// Разрешить свайпать слайды
	simulateTouch: true,
	grabCursor: true,
	slideToClickedSlide: true,

	slidesPerView: 1,
	slidesPerGroup: 2,
	spaceBetween: 20,

	centeredSlides: false,
	watchOverflow: true,

	autoplay: {
		delay: 1000,
		stopOnLastSlide: true,
		// Отключить после свайпа слайдов вручную
		disableOnInteraction: true
	},

	speed: 800,
	// effect: 'fade',


	// Миниатюрный слайдер
	thumbs: {
		swiper: {
			// Указываем название нашего слайдера
			el: '.mini-slider',
			// Количество должно совпадать с большим слайдером
			slidesPerView: 5,
		}
	},

  // Пагинация
  pagination: {
    el: '.swiper-pagination',
		clickable: true,
		type: 'bullets',
  },

  // Стрелки слайдера
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

	// Адаптивность слайдера
	breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }
});

/*
Разметка слайдера
<div class="swiper">
  <div class="swiper-wrapper">
    <div class="swiper-slide">Slide 1</div>
    <div class="swiper-slide">Slide 2</div>
    <div class="swiper-slide">Slide 3</div>
  </div>
  <div class="swiper-pagination"></div>

  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>

  <div class="swiper-scrollbar"></div>
</div>
*/

/* 
Стилизация кнопок слайдера
.swiper-button-prev::after,
.swiper-button-next::after {
	display: none;
}
.swiper-button-prev,
.swiper-button-next {
	min-height: 40px;
	border-radius: 50%;
	background-repeat: no-repeat;
	background-position: center;
	background-size: 7px 13px;
	background-color: var(--accent-color);
	color: var(--default-color);
	padding: 0 21px;
	position: static;
	margin-left: 15px;
}
.swiper-button-prev {
	background-image: url(./../../images/offers/arrow-left.svg);
}
.swiper-button-next {
	background-image: url(./../../images/offers/arrow-right.svg);
}
*/

/*
Стилизация буллетов
.swiper-pagination {
	bottom: 0;
}
.swiper-pagination-bullet {
	background-color: ;
	width: 18px;
	height: 18px;
	font-size: 12px;
}
*/