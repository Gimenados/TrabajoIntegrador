const validateStrings = (string) => {
    const regex = new RegExp("^[A-Za-z Ññ]+$")
    return regex.test(string)
}

const validateStgLength = (stg, minLength, maxLength) => {
    if (stg.length < minLength) {
        return `El valor debe tener al menos ${minLength} caracteres.`
    } else if (stg.length > maxLength) {
        return `El valor debe tener no más de ${maxLength} caracteres.`
    } else {
        return true
    }
}

const validatePostiveNumber = num => num >= 0

const validateInt = num => Number.isInteger(num)

// Foto * Emails

const validateEmails = (email) => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regex.test(email)
}

//Precio * Stock * Edad desde y  hasta 

const validatePositiveNumber = num => num >= 0;

const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return "El formato del correo electrónico no es válido.";
    }
    return true;
};

