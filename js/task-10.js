const input = document.querySelector('input');
const createBoxButton = document.querySelector('button[data-create]');
const destroyBoxButton = document.querySelector('button[data-destroy]');
const storageForNewBoxes = document.querySelector('#boxes');


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBoxes = amount => {
  const boxes = [];
  let counter = 0

  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement('div');
    const size = `${30 + 10 * counter}px`;
    div.style.width = size;
    div.style.height = size;
    div.style.backgroundColor = getRandomHexColor();
    boxes.push(div);
    counter += 1;
  }

  storageForNewBoxes.append(...boxes);
};

const createNewBoxes = () => createBoxes(input.value);

const destroyAllBoxes = () => {
  storageForNewBoxes.innerHTML = '';
};



createBoxButton.addEventListener('click', createNewBoxes);
destroyBoxButton.addEventListener('click', destroyAllBoxes);