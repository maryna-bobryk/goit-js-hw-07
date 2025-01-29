function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputElem = document.querySelector('input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const boxElem = document.querySelector('#boxes');

function boxTemplate(box) {
  return `<div 
            style="
              width: ${box.width}px; 
              height: ${box.height}px; 
              margin: 5px; 
              background-color: ${box.backgroundColor};
            ">
          </div>`;
}

function boxesTemplate(boxes) {
  const markup = boxes.map(boxTemplate).join('');
  return markup;
}

let boxesArray = [];

function createBoxes(amount) {
  boxesArray = [];
  boxElem.innerHTML = '';

  let width = 30;
  let height = 30;

  for (let i = 0; i < amount; i++) {
    const boxObj = {
      width: width,
      height: height,
      backgroundColor: getRandomHexColor(),
    };
    width += 10;
    height += 10;
    boxesArray.push(boxObj);
  }
  boxElem.innerHTML = boxesTemplate(boxesArray);
}

// ========= Input rot =========a
inputElem.addEventListener('input', onInputChange);
function onInputChange() {
  let value = Number(inputElem.value);
  if (value >= 0 && value <= 100) {
    inputElem.style.border = '1px solid black';
  } else {
    inputElem.style.border = '2px solid red';
  }
}

// ========= Create Btn  =========
btnCreate.addEventListener('click', onBtnCreateClick);
function onBtnCreateClick() {
  let amount = Number(inputElem.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    inputElem.value = '';
  }
}
// console.log(boxesArray);

// ========= Destroy Btn  =========
btnDestroy.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  boxElem.innerHTML = '';
  boxesArray = [];
}

// ========= Box erstellen  =========

// function createBoxes(amount) {
//   boxElem.innerHTML = '';
//   boxesArray = [];

//   let width = 30;
//   let height = 30;

//   for (let i = 0; i < amount; i++) {
//     const box = document.createElement('div');
//     box.style.width = `${width}px`;
//     box.style.height = `${height}px`;
//     box.style.margin = '5px';
//     box.style.backgroundColor = getRandomHexColor();
//     width += 10;
//     height += 10;
//     boxElem.append(box);
//   }
// }
