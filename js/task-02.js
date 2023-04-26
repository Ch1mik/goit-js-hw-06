// Напиши скрипт, який для кожного елемента масиву ingredients:
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
//================================================================
// const list = document.querySelector('#ingredients');
// const listItem = [];
// ingredients.forEach(ingredient => {
//   const item = document.createElement('li');
//   item.textContent = ingredient;
//   item.classList.add('item');
//   listItem.push(item);
// });
// list.append(...listItem);
//===========================================================
const list = document.querySelector('#ingredients');
for (let i = 0; i < ingredients.length; i++) {
  let listItem = document.createElement('li');
  listItem.textContent = ingredients[i];
  listItem.classList.add('item');
  list.append(listItem);
}
