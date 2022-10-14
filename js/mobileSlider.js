const slider = document.querySelector('.slider-container');

let mySwiper;

function mobileSlider() {
	if (window.innerWidth <= 600 && slider.dataset.mobile == "false") {
		mySwiper = new Swiper(slider, {
			loop: true,
			slidesPerView: 1,
			spaceBetween: 10,
			// Указываем имя наших слайдов
			slideClass: 'card',
		});
		slider.dataset.mobile = "true";
	}
	if (window.innerWidth > 600) {
		slider.dataset.mobile = "false";
		if (slider.classList.contains('swiper-container-initialized')) {
			mySwiper.destroy();
		}
	}
}

mobileSlider();

window.addEventListener('resize', () => {
	mobileSlider();
});




/*
.slider-container {
	overflow: hidden;
	width: 100%;
}

.swiper-wrapper {
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	height: 100%;
}

.card {
	width: 30%;
	margin: 0px 10px 10px 0px;
	padding: 0px 0px 50px 0px;
	flex-shrink: 0;
	background-color: red;
}

@media (max-width: 600px) {
	.card {
		width: 100%;
		margin: 0px 0px 10px 0px;
	}
	.swiper-wrapper {
		flex-wrap: nowrap;
	}
}
*/