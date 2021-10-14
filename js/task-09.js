const button = document.querySelector('.change-color');
const valueOfColor = document.querySelector('.color');
const body = document.body;
// console.log(body);

button.addEventListener('click', changeBackgroundColor);

function changeBackgroundColor() {
  body.style.backgroundColor = getRandomHexColor();
  valueOfColor.textContent = body.style.backgroundColor;
};


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}