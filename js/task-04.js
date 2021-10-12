let counterValue = 0;

const increaseButton = document.querySelector('[data-action="increment"]');
const decreseButton = document.querySelector('[data-action="decrement"]');
const value = document.querySelector('#value');

increaseButton.addEventListener('click', () => {
    value.textContent = counterValue += 1;
    console.log(counterValue);
});

decreseButton.addEventListener('click', () => {
    value.textContent = counterValue -= 1;
     console.log(counterValue);
});