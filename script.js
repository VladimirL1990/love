document.addEventListener('DOMContentLoaded', () => {
	const textElement = document.getElementById('animated-text');
	const messages = ['Люблю тебя !!!', 'Ты лучшее в моей жизни !!!', 'Ты - мой смысл жизни !!!'];
	let currentIndex = 1;

	function changeText() {
			textElement.classList.remove('typing'); // Удаляем анимацию, чтобы перезапустить ее
			textElement.classList.add('typing'); // Добавляем класс для скрытия текста

			// Задержка перед обновлением текста
			setTimeout(() => {
					textElement.textContent = messages[currentIndex];
					textElement.classList.remove('typing'); // Убираем класс скрытия
					textElement.classList.add('typing'); // Добавляем анимацию печатания

					// Переход к следующему сообщению
					currentIndex = (currentIndex + 1) % messages.length;
			}, 500); // Задержка для плавного исчезновения текста
	}

	// Инициализация текстовой анимации
	changeText(); // Начальная установка текста
	setInterval(changeText, 10000); // Меняем текст каждые 8 секунд

	// Генерация падающих сердец
	function createFallingHeart() {
			const heart = document.createElement('div');
			heart.classList.add('heart-fall');
			heart.style.left = `${Math.random() * 100}vw`;
			heart.style.animationDuration = `${Math.random() * 8 + 8}s`;
			document.body.appendChild(heart);
			
			// Удаление сердца после завершения анимации
			heart.addEventListener('animationend', () => {
					heart.remove();
			});
	}

	// Создание падающих сердец каждые 500ms
	setInterval(createFallingHeart, 500);
});