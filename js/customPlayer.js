// Получение видео
const videoPlayer = document.querySelector('.video');

// Получение кнопок взаимодейсвия
const buttonPlay = document.querySelector('.button-play');
const buttonPause = document.querySelector('.button-pause');
const buttonStop = document.querySelector('.button-stop');
const buttonVolume = document.querySelector('.button-volume');
const buttonRewind = document.querySelector('.button-rewind');

// Получение обработчика событий
buttonPlay.addEventListener('click', videoPlay);
buttonPause.addEventListener('click', videoPause);
buttonStop.addEventListener('click', videoStop);
buttonVolume.addEventListener('input', videoVolume);
buttonRewind.addEventListener('click', videoRewind);

// Определение функций
function videoPlay() {
	videoPlayer.play();
}
function videoPause() {
	videoPlayer.pause();
}
function videoStop() {
	// Останавливаем видео
	videoPlayer.pause();
	// Задаем ему начальное положение
	videoPlayer.currentTime = 0;
}
function videoVolume() {
	// Получение значения ползунка
	let videoVolumeValue = buttonVolume.value;
	videoPlayer.volume = videoVolumeValue / 100;
}
function videoRewind(event) {
	// Получаем ширину прогрессбара
	let buttonWidth = buttonRewind.offsetWidth;
	// Получаем место, в которое мы нажали
	let buttonClicked = event.offsetX;
	// Получаем значение прогрессбара
	buttonRewind.value = 100 * buttonClicked / buttonWidth;
	videoPlayer.pause();
	// Получаем текущее время 
	videoPlayer.currentTime = videoPlayer.duration * (buttonClicked / buttonWidth);
	videoPlayer.play();
}

/* Пример кнопки звука
<input type="range" class="button-volume" min="0" max="100" value="50"> 
*/

/* Пример перемотки видео
<progress class="button-rewind" value="0" max="100"></progress>
*/