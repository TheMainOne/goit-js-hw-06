const inputArea = document.querySelector('#name-input');
const textField = document.querySelector('#name-output');

const inputTextModifier = (event) => {
    textField.textContent = event.currentTarget.value;
    if (event.currentTarget.value === "") {
        textField.textContent = 'Anonymous';
    }
};

inputArea.addEventListener('input', inputTextModifier);