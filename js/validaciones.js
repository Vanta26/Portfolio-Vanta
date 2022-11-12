const formulario = document.querySelector('.contact__form')
const inputs = document.querySelectorAll('.input');
const messageName = document.querySelector('.name-error');
const messageEmail = document.querySelector('.email-error');
const messageSend = document.querySelector('.message-send');

const expresiones = {
    nombre: /^[a-zA-Z]{4,16}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}

const campos = {
    nombre: false,
    email: false
};

const validarForm = (e) => {
    switch(e.target.name) {
        case 'name':
            if (!expresiones.nombre.test(e.target.value)) {
                messageName.style.display = 'block';
                campos.nombre = true;
            }
            else {
                messageName.style.display = 'none';
                campos.nombre = false;
            }
        break;
        case 'email':
            if (!expresiones.correo.test(e.target.value)) {
                messageEmail.style.display = 'block';
                campos.email = true;
            }
            else {
                messageEmail.style.display = 'none';
                campos.email = false;
            }
        break;

    }
}


inputs.forEach((input) => {
    input.addEventListener('keyup', validarForm);
    input.addEventListener('blur', validarForm);
})


function reset() {
    inputs.forEach((input) => {
        input.value = '';
    })
}

formulario.addEventListener('submit', (e) =>{
    e.preventDefault();

    if (!campos.nombre && !campos.email){
        formulario.reset();
        messageSend.style.display = 'block';
    }

})
