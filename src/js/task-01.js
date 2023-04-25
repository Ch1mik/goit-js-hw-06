// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
const categories = document.querySelector('#categories');
const categoriesItems = categories.querySelectorAll('.item');
console.log('Number of categories: ', categoriesItems.length);
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.
categoriesItems.forEach(item => {
  const category = item.querySelector('h2').textContent;
  const elementsCategory = item.querySelectorAll('li').length;
  console.log('Category: ', category);
  console.log('Elements: ', elementsCategory);
});
