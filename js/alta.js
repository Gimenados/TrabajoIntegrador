
// const onSubmitProduct = e => {
//     e.preventDefault();
//     const subName = document.getElementById("name").value;
//     console.log(subName);
// };

//Nombre * 
//Marca
//Categoria *
//Descripcion corta *

const validateStrings = (string) => {
    const regex = new RegExp("^[A-Za-z ]+$")
    return regex.test(string)  
}

const validateStgLength = (stg, minLength, maxLength) => {
    if (stg.length < minLength) {
        return `El valor debe tener al menos ${minLength} caracteres.`
    } else if (stg > maxLength) {
        return `El valor debe tener mas de ${maxLength} caracteres.`
    } else {
        return true
    }
}

//Precio *
//Stock *
//Edad desde y  hasta 

const validatePositiveNumber = num => num >= 0

const validateInt = num => Number.isInteger(num)
// console.log(nanme)


//Traemos todos los varoles de mi formulario
const onSubmitProduct = e => {
    e.preventDefault() 
    const nameInput = document.getElementById("name").value
    const precioInput = document.getElementById("precio").value
    const stockInput = document.getElementById("stock").value
    const categoriaInput = document.getElementById("categoria").value
    const descripcion_cortaInput = document.getElementById("descripcion_corta").value
    const marcaInput = document.getElementById("marca").value
    const envioInput = document.getElementById("envio").value
    const edadDesdeInput = document.getElementById("edad_desde").value
    const edadHastaInput = document.getElementById("edad_hasta").value
    const fotoInput = document.getElementById("foto").value

//Input cuando tiene errores
    const nameError = document.getElementById("nameError")
    const precioError = document.getElementById("precioError")
    const stockError = document.getElementById("stockError")
    const categoriaError = document.getElementById("categoriaError")
    const marcaError = document.getElementById("marcaError").value
    const descripcion_cortaError = document.getElementById("descripcion_cortaError")
    const edadDesdeError = document.getElementById("edad_desdeError")
    const edadHastaError = document.getElementById("edad_hastaError")


 // Nombre *
 if (validateStrings(nameInput.value)) { //Validamos primero que haya un valor, nos devuelve un true o un false
    const validStg = validateStgLength(nameInput.value, 2, 30) //Guardamos el valor que retorna en una variable (Valor minimo 2 y max 30)
    if (validStg === true) { 
        nameInput.ariaInvalid = false
        nameError.innerText = ""
        nameError.style.display = "none"
    } else {
        nameInput.ariaInvalid = true
        nameError.innerText = validStg
        nameError.style.display = "block"
        validForm = false
    }
     } else {
         nameInput.ariaInvalid = true
         nameError.innerText = "Debe colocar caracteres alfabéticos."
         nameError.style.display = "block" //Le damos al mensaje que aparece un desplay block para que no se encime a ninguna caja 
         validForm = false
        }
        
        
 // Precio *
        if (!validatePostiveNumber(precioInput.value)) {
            precioInput.ariaInvalid = true
            precioError.innerText = "Debe ser un número positivo"
            precioError.style.display = "block"
            validForm = false
        } else {
            precioInput.ariaInvalid = false
            precioError.innerText = ""
            precioError.style.display = "none"
        }
    
    
//Marca
if (marcaInput.value.length > 0) {
    if (validateStrings(marcaInput.value)) {
        const validStgMarca = validateStgLength(marcaErrorInput.value, 2, 30)
        if (validStgMarca === true) {
            marcaInput.ariaInvalid = false
            marcaError.innerText = ""
            marcaError.style.display = "none"
        } else {
            marcaInput.ariaInvalid = true
            marcaError.innerText = validStgBrand
            marcaError.style.display = "block"
            precioForm = false
        }
    } else {
        marcaError.ariaInvalid = true
        marcaError.innerText = "Debe colocar caracteres alfabéticos."
        marcaError.style.display = "block"
        precioForm = false
    }
}


// Categoría *
if (validateStrings(categoriaInput.value)) {
    const validStgCat = validateStgLength(categoriaInput.value, 2, 15)
    if (validStgCat === true) {
        categoriaInput.ariaInvalid = false
        categoriaError.innerText = ""
        categoriaError.style.display = "none"
    } else {
        categoriaInput.ariaInvalid = true
        categoriaError.innerText = validStgCat
        categoriaError.style.display = "block"
        validForm = false
    }
} else {
    categoriaInput.ariaInvalid = true
    categoriaError.innerText = "Debe colocar caracteres alfabéticos."
    categoriaError.style.display = "block"
    validForm = false
}

// Descripcion corta *
if (validateStrings(descripcion_cortaInput.value)) {
    const validStg = validateStgLength(descripcion_cortaInput.value, 10, 140)
    if (validStgDesc === true) {
        descripcion_cortaInput.ariaInvalid = false
        descripcion_cortaInput.innerText = ""
        descripcion_cortaInput.style.display = "none"
    } else {
        descripcion_cortaInput.ariaInvalid = true
        descripcion_cortaInput.innerText = validStgDesc
        descripcion_cortaInput.style.display = "block"
        validForm = false
    }
} else {
    descripcion_cortaInput.ariaInvalid = true
    descripcion_cortaInput.innerText = "Debe colocar caracteres alfabéticos."
    descripcion_cortaInput.style.display = "block"
    validForm = false
}


// Stock *
if (!validatePostiveNumber(stockInput.value)) {
    stockInput.ariaInvalid = true
    stockError.innerText = "Debe ser un número positivo"
    stockError.style.display = "block"
    validForm = false
} else if (!validateInt(parseInt(stockInput.value))) {
    stockInput.ariaInvalid = true
    stockError.innerText = "Debe ser un número entero"
    stockError.style.display = "block"
    validForm = false
} else {
    stockInput.ariaInvalid = false
    stockError.innerText = ""
    stockError.style.display = "none"
}

// Edad desde y hasta
if (edadDesdeInput.value.length || edadHastaInput.value.length) { 
    if (!validatePostiveNumber(edadDesdeInput.value)) {
        edadDesdeInput.ariaInvalid = true
        edadDesdeError.innerText = "Debe ser un número positivo"
        edadDesdeError.style.display = "block"
        validForm = false
    } else if (!validateInt(parseInt(edadDesdeInput.value))) {
        edadDesdeInput.ariaInvalid = true
        edadDesdeError.innerText = "Debe ser un número entero"
        edadDesdeError.style.display = "block"
        validForm = false
    } else {
        ageFromInput.ariaInvalid = false
        ageFromError.innerText = ""
        ageFromError.style.display = "none"
    }
    if (!validatePostiveNumber(edadHastaInput.value)) {
        edadHastaInput.ariaInvalid = true
        edadHastaError.innerText = "Debe ser un número positivo"
        edadHastaError.style.display = "block"
        validForm = false
    } else if (!validateInt(parseInt(edadHastaInput.value))) {
        edadHastaInput.ariaInvalid = true
        edadHastaError.innerText = "Debe ser un número entero"
        edadHastaError.style.display = "block"
        validForm = false
    } else if (parseInt(edadDesdeInput.value) >= parseInt(edadHastaInput.value)) {
        edadHastaInput.ariaInvalid = true
        edadHastaError.innerText = "La edad hasta no debe ser menor a edad desde."
        edadHastaError.style.display = "block"
        validForm = false
    } else {
        edadHastaInput.ariaInvalid = false
        edadHastaError.innerText = ""
        edadHastaError.style.display = "none"
    }
}

if (validForm) {
    const game = {
        name: nameInput.value,
        price: parseFloat(priceInput.value),
        stock: parseInt(stockInput.value),
        brand: brandInput.value,
        category: categoryInput.value,
        shortDescription: shortDescriptionInput.value,
        description: longDescriptionInput.value,
        freeDeliver: freeDeliverInput.checked,
        ageFrom: ageFromInput.value === "" ? "" : parseInt(ageFromInput.value),
        ageTo: ageToInput.value === "" ? "" : parseInt(ageToInput.value),
        photo: photoInput.value,
    }
    saveGame(game)
}

}