// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".
const nameInput = document.querySelector('#name-input');
// console.log(nameInput);
const nameOutput = document.querySelector('#name-output');
// console.log(nameOutput);
nameInput.addEventListener('input', () => {
  if (nameInput === '') {
    nameOutput.textContent = 'Anonymous';
  } else {
    nameOutput.textContent = nameInput.value;
  }
});
