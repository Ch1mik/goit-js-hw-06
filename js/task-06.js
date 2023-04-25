// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur),
// перевіряє його вміст щодо правильної кількості введених символів.

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.
const refs = {
  input: document.querySelector('#validation-input'),
  length: document
    .querySelector('#validation-input')
    .getAttribute('data-length'),
};
// const input = document.querySelector('#validation-input');
// const length = input.getAttribute('data-length');
// refs.input.addEventListener('focus', e => {
//   console.log('focus');
// });
refs.input.addEventListener('blur', e => {
  const value = e.target.value;
  if (value.length === 6) {
    refs.input.classList.add('valid');
    refs.input.classList.remove('invalid');
  } else {
    refs.input.classList.add('invalid');
    refs.input.classList.remove('valid');
  }
});
