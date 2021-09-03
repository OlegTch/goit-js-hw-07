const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const listEl = document.querySelector('#gallery');

const createListGallary = ({ url, alt }) => {
  return `
  <li>
    <img src="${url}" alt="${alt}">
  </li> `;
};

const createItemEl = images.map(createListGallary).join(' ');
// console.log(createListGallary);

listEl.insertAdjacentHTML('afterbegin', createItemEl);
// createListGallary.style.display = 'flex';

// Напиши скрипт для создания галлереи изображений по массиву данных.

// В HTML есть список `ul#gallery`.

// ```html
// <ul id="gallery"></ul>
// ```

// Используй массив объектов `images` для создания тегов `img` вложенных в `li`.
// Для создания разметки используй шаблонные строки и `insertAdjacentHTML()`.

// - Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// - Добавь минимальное оформление галереи флексбоксами или гридами через
//   css-классы.

// ```js
//

// const listEl = document.querySelector('#gallery');
// listEl.classList.add('list');

// const elements = images.map(image => {
//   console.log(image);
//   const itemEl = document.createElement('li');
//   itemEl.classList.add('item');
//   const imgEl = document.createElement('img');
//   imgEl.classList.add('image');
//   itemEl.insertAdjacentHTML('afterbegin', imgEl);
//   listEl.appendChild(itemEl);
//   imgEl.src = image.url;
//   imgEl.alt = image.alt;
//   console.log(image.url);
//   return listEl;
// });
// console.log(elements);
//
//
// console.log(image);
// {
//   /* <li clas="item"></li>; */
// }

// const ListEl = document.querySelector('#gallery')

// const elemCreate = (elements) => {
//   return elements.map(
//     (el) =>
//       <li class="item"><img src='${el.url}' alt='${el.alt}' class="img"> </li>,
//   )
// }
// ListEl.classList.add('list');
// ListEl.insertAdjacentHTML('afterbegin', elemCreate(images).join(''));

// ListEl.classList.add('list');
// ListEl.insertAdjacentHTML('afterbegin', elemCreate(images).join(''));

//
// const makeImageCard = ({ url, alt }) =>
//   const listEl = document.querySelector('ul');
//   listEl.classList.add('list');

//   const itemEl = document.createElement('li');
//   itemEl.classList.add('item');

//   const imgEl = document.createElement('img');
//   imgEl.classList.add('image');

//   itemEl.insertAdjacentHTML('afterbegin', imgEl);

//   listEl.appendChild(itemEl);

// Коли ты делаешь createelement то добавлять надо append,  а в adgenthtml добавляется строка
// const productsContainerEl = document.querySelector('.task-03js');
