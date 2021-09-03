const imputEl = document.querySelector('#validation-input');
console.log(imputEl);

imputEl.addEventListener('focus', onImputFocus);
imputEl.addEventListener('blur', onImputBlur);

function onImputFocus(event) {
  const imputBorder = event.currentTarget;
  imputBorder.classList.remove('invalid', 'valid');
}

function onImputBlur(event) {
  const imputBorder = event.currentTarget;
  return event.currentTarget.value.length !==
    Number(event.currentTarget.dataset.length)
    ? imputBorder.classList.add('invalid')
    : imputBorder.classList.add('valid');
}

// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое
// на правильное количество символов.

// ```html
// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символов"
// />
// ```

// - Сколько символов должно быть в инпуте, указывается в его атрибуте
//   `data-length`.
// - Если введено подходящее количество, то `border` инпута становится зеленым,
//   если неправильное - красным.

// Для добавления стилей, используй CSS-классы `valid` и `invalid`.

// ```css
// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }
// ```
