const formEl = document.querySelector('#controls');
const imputEl = document.querySelector('input[type="number"]');
const renderBtn = document.querySelector('button[data-action="render"]');
const destroyBtn = document.querySelector('button[data-action="destroy"]');
const boxEl = document.querySelector('#boxes');

imputEl.value = 0;

function createBoxes(amount) {
  amount = imputEl.value;
  const elementsCollection = [];

  let widthEl = 30;
  let heigthEl = 30;
  const step = 10;

  for (let i = 0; i < amount; i += 1) {
    elementsCollection.push(document.createElement('div'));
    elementsCollection[i].style.width = widthEl + 'px';
    elementsCollection[i].style.height = heigthEl + 'px';
    elementsCollection[i].style.marginBottom = '2px'; // сделал дополнительній отступ

    let r = Math.floor(Math.random() * 255 + 1);
    let g = Math.floor(Math.random() * 255 + 1);
    let b = Math.floor(Math.random() * 255 + 1);
    let randomColor = '#' + r.toString(16) + g.toString(16) + b.toString(16);

    elementsCollection[i].style.backgroundColor = randomColor;
    widthEl += step;
    heigthEl += step;
  }
  console.log(widthEl + step);

  boxEl.append(...elementsCollection);
}

function destroyBoxes() {
  boxEl.textContent = ' ';
  imputEl.value = 0;
}

renderBtn.addEventListener('click', () => {
  createBoxes(imputEl.value);
});

destroyBtn.addEventListener('click', () => {
  destroyBoxes();
});

// еще один вариант рандома
// elementsCollection[i].style.backgroundColor = `#${Math.random()
//   .toString(16)
//   .substring(2, 8)}`;

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

//
// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит
// количество элементов в `input` и нажимает кнопку `Создать`, после чего
// рендерится коллекция. При нажатии на кнопку `Очистить`, коллекция элементов
// очищается.

// Создай функцию `createBoxes(amount)`, которая принимает 1 параметр `amount` -
// число. Функция создает столько `div`, сколько указано в `amount` и добавляет их
// в `div#boxes`.

// Каждый созданный div:

// - Имеет случайный rgb цвет фона
// - Размеры самого первого div - 30px на 30px
// - Каждый следующий div после первого, должен быть шире и выше предыдущего на
//   10px

// Создай функцию `destroyBoxes()`, которая очищает `div#boxes`.

// ```html
// <div id="controls">
//   <input type="number" min="0" max="100" step="1" />
//   <button type="button" data-action="render">Создать</button>
//   <button type="button" data-action="destroy">Очистить</button>
// </div>

// <div id="boxes"></div>
// ```
