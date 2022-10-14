/* Выпадающее меню */
document.addEventListener('DOMContentLoaded', () => {
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
					element.classList.remove('_active');
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
			currentButton.classList.toggle('_active');
		});
	});
	/* При клике вне меню */
	document.addEventListener('click', (e) => {
		if (!e.target.closest('.navigation')) {
			listButtons.forEach(element => {
				element.classList.remove('_active');
			});
			drops.forEach(element => {
				element.classList.remove('_active');
			});
		}
	});
});

/*
<nav class="navigation">
	<ul class="menu">
		<li class="menu__item">
			<a href="#" class="menu__link">Первый пункт</a>
		</li>
		<li class="menu__item">
			<button class="button-reset menu__button">Второй пункт</button>
			<div class="dropdown">
				<ul class="dropdown__list">
					<li class="dropdown__item">
						<a href="#" class="dropdown__link">Подпункты</a>
					</li>
					<li class="dropdown__item">
						<a href="#" class="dropdown__link">Подпункты</a>
					</li>
					<li class="dropdown__item">
						<a href="#" class="dropdown__link">Подпункты</a>
					</li>
					<li class="dropdown__item">
						<a href="#" class="dropdown__link">Подпункты</a>
					</li>
				</ul>
			</div>
		</li>
		<li class="menu__item">
			<a href="#" class="menu__link">Третий пункт</a>
		</li>
		<li class="menu__item">
			<a href="#" class="menu__link">Четвертый пункт</a>
		</li>
		<li class="menu__item">
			<button class="button-reset menu__button">Пятый пункт</button>
			<div class="dropdown">
				<ul class="dropdown__list">
					<li class="dropdown__item">
						<a href="#" class="dropdown__link">Подпункты</a>
					</li>
					<li class="dropdown__item">
						<a href="#" class="dropdown__link">Подпункты</a>
					</li>
				</ul>
			</div>
		</li>
		<li class="menu__item">
			<button class="button-reset menu__button">Шестой пункт</button>
			<div class="dropdown">
				<ul class="dropdown__list">
					<li class="dropdown__item">
						<a href="#" class="dropdown__link">Подпункты</a>
					</li>
					<li class="dropdown__item">
						<a href="#" class="dropdown__link">Подпункты</a>
					</li>
					<li class="dropdown__item">
						<a href="#" class="dropdown__link">Подпункты</a>
					</li>
				</ul>
			</div>
		</li>
		<li class="menu__item">
			<a href="#" class="menu__link">Седьмой пункт</a>
		</li>
	</ul>
</nav>
*/