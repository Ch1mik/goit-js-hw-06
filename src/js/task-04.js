// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.
const counterValue = document.querySelector('#value');
let targetValue = 0;
document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', () => {
    if (button.dataset.action === 'decrement') {
      targetValue -= 1;
    } else if (button.dataset.action === 'increment') {
      targetValue += 1;
    }
    counterValue.textContent = targetValue;
  });
});
