let counterValue = 0;

const increaseButton = document.querySelector('[data-action="increment"]');
const decreseButton = document.querySelector('[data-action="decrement"]');
const value = document.querySelector('#value');

const handleClickIncrease = () => {
       value.textContent = counterValue += 1;
    console.log(counterValue);
};

const handleClickDecrese = () => {
    value.textContent = counterValue -= 1;
     console.log(counterValue);
};

increaseButton.addEventListener('click', handleClickIncrease);

decreseButton.addEventListener('click', handleClickDecrese);