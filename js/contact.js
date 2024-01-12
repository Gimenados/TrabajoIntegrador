document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        validateForm();
    });

    function validateForm() {
        const firstName = document.getElementById('number');
        const email = document.getElementById('email');
        const comment = document.getElementById('comment');

        validateField(firstName, /^[A-Za-z- ][a-záéíóúüñÁÉÍÓÚÜÑ]{2,9}$/, 'Primer nombre inválido');
        validateField(email, /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/, 'La dirección de correo electrónico no es válida');
        validateField(comment, /^[A-Za-z0-9\s]{1,150}$/, 'Ingrese hasta máximo 150 caracteres');
    }

    //validateFiel toma 3 parametros, field un objeto del dom, pattern que verifica si un objeto es null o undefined y errorMensaje que muestra el mensaje del error
    function validateField(field, pattern, errorMessage) {  
        if (pattern && !pattern.test(field.value)) { 
            showError(field, errorMessage);
        } else {
            hideError(field);
        }
    }
  
    //Creo un elemento div en el dom para mostrar el mensaje error
    function showError(field, errorMessage) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = errorMessage;
  
        //Estilos al div
        errorDiv.style.display = 'block';
        errorDiv.style.color = 'red';
        errorDiv.style.marginTop = '8px';
  
        const parent = field.parentElement;
        parent.appendChild(errorDiv);
    }


    //Ocultar el mensaje de error asociado a un campo de formulario.
    function hideError(field) {
        const parent = field.parentElement;
        const errorDiv = parent.querySelector('.error-message');
  
        if (errorDiv) {
            // Ocultar el mensaje de error al removerlo del DOM
            parent.removeChild(errorDiv);
        }
    }
});
