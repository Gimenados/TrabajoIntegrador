document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        validateForm();
    });

    function validateForm() {
        const firstName = document.getElementById('firstName');
        const email = document.getElementById('email');
        const comment = document.getElementById('comment');

        validateField(firstName, /^[A-Za-z- ][a-záéíóúüñÁÉÍÓÚÜÑ]{2,9}$/, 'Primer nombre inválido');
        validateField(email, /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/, 'La dirección de correo electrónico no es válida');
        validateField(comment, /^[A-Za-z0-9\s]{1,150}$/, 'Ingrese hasta máximo 150 caracteres');
    }

    //Nombre 
    //Email
    //Comentario

    });