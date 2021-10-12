const inputArea = document.querySelector('#name-input');
const textField = document.querySelector('#name-output');

inputArea.addEventListener('input', event => {
    textField.textContent = event.currentTarget.value;
    if (event.currentTarget.value === "") {
        textField.textContent = 'Anonymous';
    }
})