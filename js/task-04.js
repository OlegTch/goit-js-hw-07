const getCounter = document.querySelector('#counter');
const currentValue = document.getElementById('value');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

decrementBtn.addEventListener('click', () => {
  let counterValue = productCounter.onDecrementButtonClick(1);
  console.log(counterValue);
  currentValue.textContent = counterValue;
});

incrementBtn.addEventListener('click', () => {
  let counterValue = productCounter.onIncrementButtonClick(1);
  console.log(counterValue);
  currentValue.textContent = counterValue;
});

const productCounter = createCounter();

function createCounter() {
  let current = 0;

  function onIncrementButtonClick(value) {
    return (current += value);
  }

  function onDecrementButtonClick(value) {
    if (current <= 0) return 0;
    return (current -= value);
  }

  return { onIncrementButtonClick, onDecrementButtonClick };
}

//
//
// const getCounter = document.querySelector('#counter');
// document.getElementById('value');

// document
//   .querySelector('button[data-action="decrement"]')
//   .addEventListener('click', () => {
//     let counterValue = productCounter.decrement(1);
//     console.log(counterValue);
//     document.getElementById('value').textContent = counterValue;
//   });

// document
//   .querySelector('button[data-action="increment"]')
//   .addEventListener('click', () => {
//     let counterValue = productCounter.increment(1);
//     console.log(counterValue);
//     document.getElementById('value').textContent = counterValue;
//   });

// const productCounter = createCounter();
// // console.log(productCounter);
// // productCounter.increment(1);

// function createCounter() {
//   let current = 0;

//   function increment(value) {
//     // console.log(current);
//     return (current += value);
//   }

//   function decrement(value) {
//     // console.log(current);
//     if (current <= 0) return 0;
//     return (current -= value);
//   }

//   return { increment, decrement };
// }

// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать
// значение счетчика на `1`.

// - Создай переменную `counterValue` в которой будет хранится текущее значение
//   счетчика.
// - Создай функции `increment` и `decrement` для увеличения и уменьшения значения
//   счетчика
// - Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

// ```html
// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>
// ```
