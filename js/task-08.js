// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.
const form = document.querySelector('.login-form');
form.addEventListener('submit', e => {
  e.preventDefault();
  const myForm = e.target;
  //   console.log(myForm.elements['email']);
  //   console.log(myForm.elements.email.value);
  const emailInput = myForm.elements.email;
  const passwordInput = myForm.elements.password;
  if (!emailInput.value || !passwordInput.value) {
    alert('Всі поля повинні бути заповнені');
    return;
  }
  const formData = {
    email: emailInput.value,
    password: passwordInput.value,
  };
  console.log(formData);
  form.reset();
});
//================================================ цікава спроба;)
//   form.addEventListener('submit', e => {
//     e.preventDefault();
//     const myForm = e.target;
//   const formData = new FormData(myForm);
//   const data = {};
//   formData.forEach((value, key) => {
//     data[key] = value;
//   });
//   const email = formData.value;
//   const password = formData.value;
//   if (!email || !password) {
//     alert('Всі поля повинні бути заповнені');
//     return;
//   }
//   console.log(data);
// });
