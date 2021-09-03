const categoriesForEl = document.querySelector('ul#categories');
const categories = categoriesForEl.querySelectorAll('li.item');
let totalCategories = categories.length;
console.log(`В списке ${totalCategories} категории.`);

const itemNew = [...categories];
const ItemsEl = itemNew.map(element => {
  console.log('Категория: ', element.querySelector(`.item > h2`).innerHTML);
  const listEl = element.querySelectorAll([`.item > ul >li`]);
  console.log('Количество элементов: ', listEl.length);
});

//
// // Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в `ul#categories`, то есть
// элементов `li.item`. Получится `'В списке 3 категории.'`.

// Для каждого элемента `li.item` в списке `ul#categories`, найдет и выведет в
// консоль текст заголовка элемента (тега h2) и количество элементов в категории
// (всех вложенных в него элементов `li`).

// Например для первой категории получится:

// - Категория: Животные
// - Количество элементов: 4
