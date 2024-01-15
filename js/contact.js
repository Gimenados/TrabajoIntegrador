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

        validateField(firstName, /^[A-Za-z\s-]*$/, 'Ingrese un nombre correcto');
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
    
    
    function showError(field, errorMessage) {
        const parent = field.parentElement;
        const existingError = parent.querySelector('.error-message');
    
        if (existingError) {
            // Si ya hay un mensaje de error, simplemente actualiza el contenido
            existingError.textContent = errorMessage;
            existingError.style.display = 'block'; // Muestra el mensaje de error
            existingError.style.color = 'red';
            
        } else {
            // Si no hay un mensaje de error, agrega el nuevo elemento div al DOM
            const errorDiv = document.createElement('div');
            errorDiv.className = 'error-message';
            errorDiv.textContent = errorMessage;
            parent.appendChild(errorDiv);
        }
    }
    
    
    function hideError(field) {
        const parent = field.parentElement;
        const errorDiv = parent.querySelector('.error-message');
      
        if (errorDiv) {
            // Ocultar el mensaje de error al cambiar la propiedad display
            errorDiv.style.display = 'none';
        }
    }    
    
});
