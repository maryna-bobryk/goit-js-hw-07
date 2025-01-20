function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyElem = document.querySelector('body');
const colorElem = document.querySelector('.color');
const btnElem = document.querySelector('.change-color');

function changeRandomHexColor() {
  const color = getRandomHexColor();
  bodyElem.style.backgroundColor = color;
  colorElem.textContent = color;
}

btnElem.addEventListener('click', changeRandomHexColor);
