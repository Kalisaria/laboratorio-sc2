const form = document.getElementById('Form');
const Nombre = document.getElementById('Nombre');
const email = document.getElementById('email');
const password = document.getElementById('password');
const Rcontraseña = document.getElementById('Rcontraseña');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});


function checkInputs() {

    const nombreV = Nombre.value.trim();
    const emailV = email.value.trim();
    const contraseñaV = password.value.trim();
    const RcontraseñaV = Rcontraseña.value.trim();

    if (nombreV === '') {


        setErrorFor(Nombre, 'Rellene este campo');
    } else if (!isNaN(nombreV)) {
        setErrorFor(Nombre, 'Sólo se permiten caracteres de texto');
    } else {


        setSuccessFor(Nombre);
    }

    if (emailV === '') {
        setErrorFor(email, 'Rellene este campo');
    } else if (!isEmailValid(emailV)) {
        setErrorFor(email, 'Email inválido')
    } else {
        setSuccessFor(email);
    }
    if (contraseñaV === '') {
        setErrorFor(password, 'Rellene este campo');
    } else if (contraseñaV.length > 8) {
        setErrorFor(password, 'No debe tener más de 8 caracteres');
        return;
    }
    else {
       
        setSuccessFor(password);
    }

    if (RcontraseñaV === '') {
        setErrorFor(Rcontraseña, 'Rellene este campo');
    } else if (contraseñaV !== RcontraseñaV) {
        setErrorFor(Rcontraseña, 'Las contraseñas no coinciden');
    } else {
      
        setSuccessFor(Rcontraseña);
    }

    

    if (nombreV !== '' && emailV !== '' && contraseñaV !== '' && RcontraseñaV !== '' && isNaN(nombreV) && isEmailValid(emailV) && contraseñaV === RcontraseñaV) {
        alert('La inscripción ha sido correcta');
    }
}

function setErrorFor(input, message) {
    const inputFields = input.parentElement;
    const small = inputFields.querySelector('small');
   1
    small.innerText = message;
   

    inputFields.className = 'input-fields error';
}


function setSuccessFor(input) {
    const inputFields = input.parentElement;
    inputFields.className = 'input-fields success';
}

function isEmailValid(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}