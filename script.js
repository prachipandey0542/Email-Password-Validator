let userEmail = document.querySelector('#userEmail');
let userPass = document.querySelector('#userPass');

let form = document.querySelector('form');
let resultmsg = document.querySelector('#resultmsg');

let emailError = document.querySelector('#emailError');
let passError = document.querySelector('#passError');

form.addEventListener('submit', function (dtls) {
    dtls.preventDefault();

    emailError.textContent = " ";
    passError.textContent = " ";

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=\[\]{};:'",.<>/?\\|`~]).{8,}$/;

    let emailans = emailRegex.test(userEmail.value);
    let passans = passRegex.test(userPass.value);
    let isValid = true;

    if(!emailans){
        emailError.innerHTML = "Invalid Email<br>"
        emailError.style.display = 'initial';
        isValid = false;
    }

      if(!passans){
        passError.innerHTML = "Invalid Password<br>";
        passError.style.display = 'initial';
        isValid = false;
    }

    if(isValid){
        resultmsg.textContent = "Everything is correct !"
    }

})
