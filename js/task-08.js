const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    let userData = {};
    
    if (event.currentTarget.elements.password.value === '' || event.currentTarget.elements.email.value === '') {
        window.alert('Пожалуйста заполните все поля!');
        return;
    } else {
        userData.email = event.currentTarget.elements.email.value;
        userData.password = event.currentTarget.elements.password.value;
        console.log(userData);
    }
       
    event.currentTarget.reset();
};



