//Slider de imagenes 
const sliderImages = document.querySelectorAll('.slider_container img');
    
// Función para mostrar una imagen cada 5 segundos
function mostrarSiguienteImagen() {
    let index = 0; //Arranca en la primera imagen
    return function() {
        // Ocultar todas las imágenes
        sliderImages.forEach(img => img.style.display = 'none'); //Recorre las imagenes 
        // Mostrar la siguiente imagen y volver al principio si es necesario
        sliderImages[index].style.display = 'block'; //Para hacerla visible 
        index = (index + 1) % sliderImages.length; 
    }
}

const mostrarSiguiente = mostrarSiguienteImagen();

// Mostrar la primera imagen inmediatamente
mostrarSiguiente();

// Actualizar la imagen cada 5 segundos
setInterval(mostrarSiguiente, 3000);


//FORMULARIO
//Mensaje error
function showError(field, errorMessage) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = errorMessage;

    errorDiv.style.display = 'block';
    errorDiv.style.color = 'red';
    errorDiv.style.marginTop = '8px';
    errorDiv.style.fontWeight = 'bold';

    const parent = field.parentElement;
    parent.appendChild(errorDiv);
}

//Limpia mensaje error
function clearError(field) {
    const parent = field.parentElement;
    const errorDiv = parent.querySelector('.error-message');

    if (errorDiv) {
        parent.removeChild(errorDiv);
    }
}

const onSubmitProduct = (e) => {
    e.preventDefault();
    let validForm = true;
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const commentInput = document.getElementById("comment");

    // Nombre
    if (validateStrings(nameInput.value)) {
        const validStgName = validateStgLength(nameInput.value, 2, 20);

        if (validStgName === true) {
            nameInput.setAttribute('aria-invalid', 'false');
            clearError(nameInput);
        } else {
            nameInput.setAttribute('aria-invalid', 'true');
            showError(nameInput, validStgName);
            validForm = false;
        }
    } else {
        nameInput.setAttribute('aria-invalid', 'true');
        showError(nameInput, "Debe colocar caracteres alfabéticos en el nombre.");
        validForm = false;
    }

    //Correo electrónico
    const emailValidationResult = validateEmail(emailInput.value);
    if (emailValidationResult === true) {
        emailInput.setAttribute('aria-invalid', 'false');
        clearError(emailInput);
    } else {
        emailInput.setAttribute('aria-invalid', 'true');
        showError(emailInput, emailValidationResult);
        validForm = false;
    }

//Comentario
if (validateStrings(commentInput.value)) {
    const validStg = validateStgLength(commentInput.value, 2, 200);

    if (validStg === true) {
        commentInput.setAttribute('aria-invalid', 'false');
        clearError(commentInput);
    } else {
        commentInput.setAttribute('aria-invalid', 'true');
        showError(commentInput, validStg); 
        validForm = false;
    }
} else {
    commentInput.setAttribute('aria-invalid', 'true');
    showError(commentInput, "Debe colocar caracteres alfabéticos en los comentarios.");
    validForm = false;
}


    if(validForm && commentInput.value) {
        const newComment = {
            name: nameInput.value,
            email: emailInput.value,
            comment: commentInput.value
        };
        const stgComment = JSON.stringify(newComment);
        localStorage.setItem("message", stgComment)
        alert("Tu mensaje fue enviado correctamente")
    } else alert("Debe completar correctamente el comentario al enviar")
};
