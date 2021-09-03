const inputEl = document.querySelector('input#name-input');
const nameLabel = document.querySelector(`span#name-output`);

inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
  return !event.currentTarget.value
    ? (nameLabel.textContent = 'незнакомец')
    : (nameLabel.textContent = event.currentTarget.value);
}

// Напиши скрипт который, при наборе текста в инпуте `input#name-input` (событие
// input), подставляет его текущее значение в `span#name-output`. Если инпут
// пустой, в спане должна отображаться строка `'незнакомец'`.

// ```html
// <input type="text" placeholder="Ваше имя?" id="name-input" />
// <h1>Привет, <span id="name-output">незнакомец</span>!</h1>
// ```
