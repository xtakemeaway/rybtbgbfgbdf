/* Аккордеон */
document.querySelectorAll('.accordeon-item__head').forEach(element => {
	/* Вешаем клик на каждую шапку аккордеона */
	element.addEventListener('click', () => {
		/* Ищем родителя нашей шапки */
		const parent = element.parentNode;
		if (parent.classList.contains('accordeon-item--active')) {
			parent.classList.remove('accordeon-item--active');
		} else {
			document.querySelectorAll('.accordeon-item').forEach(child => {
				child.classList.remove('accordeon-item--active');
				parent.classList.add('accordeon-item--active');
			});
		}
	});
});

/* 
<div class="accordeon">
	<div class="accordeon-item">
		<!-- <input class="accordeon-item__input" type="checkbox" id="accordeon-1">
		<label class="accordeon-item__head" for="accordeon-1">Trigger</label> -->
		<div class="accordeon-item__head">Trigger</div>
		<div class="accordeon-item__body">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi illo itaque rerum, voluptate et nostrum.
		</div>
	</div>
</div>
*/