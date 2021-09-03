const imputEl = document.querySelector(`input#font-size-control`);
const nameLabel = document.querySelector(`span#text`);
nameLabel.style.fontSize = '50px';
imputEl.addEventListener('input', onImputClick);

function onImputClick() {
  return (nameLabel.style.fontSize = imputEl.value + 'px');
}

// Напиши скрипт, который реагирует на изменение значения `input#font-size-control`
// (событие input) и изменяет инлайн-стиль `span#text` обновляя свойство
// `font-size`. В результате при перетаскивании ползунка будет меняться размер
// текста.

// ```html
// <input id="font-size-control" type="range" />
// <br />
// <span id="text">Абракадабра!</span>
// ```
