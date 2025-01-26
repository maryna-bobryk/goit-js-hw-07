const inputElem = document.querySelector('#name-input');
const spanElem = document.querySelector('#name-output');

inputElem.addEventListener('input', UpdateGreeting);

function UpdateGreeting() {
  const trimInputValue = inputElem.value.trim();
  spanElem.textContent = trimInputValue || 'Anonymous';
}
