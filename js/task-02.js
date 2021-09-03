const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// console.log(ingredients);
const listEl = document.querySelector('ul#ingredients');
const elements = ingredients.map(ingredient => {
  const itemEl = document.createElement('li');
  itemEl.textContent = ingredient;
  return itemEl;
});

listEl.append(...elements);

// Второй способ
// console.log(ingredients);
// const listEl = document.querySelector('ul');
// for (let i = 0; i < ingredients.length; i += 1) {
//   // console.log(listEl);
//   const itemEl = document.createElement('li');
//   itemEl.textContent = ingredients[i];
//   listEl.appendChild(itemEl);
// }
// console.log(listEl);

// Напиши скрипт, который для каждого элемента массива `ingredients` создаст
// отдельный `li`, после чего вставит все `li` за одну операцию в список
// `ul.ingredients`. Для создания DOM-узлов используй `document.createElement()`
