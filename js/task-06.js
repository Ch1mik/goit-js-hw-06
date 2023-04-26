// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur),
// перевіряє його вміст щодо правильної кількості введених символів.

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.
//===========================================================
// const input = document.querySelector('#validation-input');
// const length = input.dataset.length;
// input.addEventListener('blur', e => {
//   const lengthValue = input.value.length;
//   if (lengthValue === Number(length)) {
//     input.classList.add('valid');
//     input.classList.remove('invalid');
//   } else {
//     input.classList.add('invalid');
//     input.classList.remove('valid');
//   }
// });
//============================================================
const refs = {
  input: document.querySelector('#validation-input'),
  // length: Number(input.dataset.length),
  length: Number(document.querySelector('#validation-input').dataset.length),
};
refs.input.addEventListener('blur', e => {
  const lengthValue = refs.input.value.length;
  if (lengthValue === refs.length) {
    refs.input.classList.add('valid');
    refs.input.classList.remove('invalid');
  } else {
    refs.input.classList.add('invalid');
    refs.input.classList.remove('valid');
  }
});
