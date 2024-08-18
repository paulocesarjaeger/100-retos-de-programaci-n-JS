//Crea un sistema de envió de un formulario. Utiliza una función flecha que permita validar si un formulario cuenta con los valores de "nombre", "email" y "mensaje" y otra función para enviarlo, debes imprimir en la consola "¡Formulario enviado con éxito!", de lo contrario imprime "Por favor completa todos los campos.". 

// VALIDAMOS QUE TANTO EL NOMBRE, EMAIL Y MENSAJE ESTEN EN UN FORMATO VALIDO

let nombreValido = (nombre) => {
    let regexNombre = /^[A-Za-z\s]{2,}$/;
    return regexNombre.test(nombre);
};

let emailValido = (email) => {
    let regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regexEmail.test(email);
};

let mensajeValido = (mensaje) => {
    let regexMensaje = /^[A-Za-z0-9\s.,!?'"-]{1,}$/;
    return regexMensaje.test(mensaje);
};

// VALIDAMOS EL FORMULARIO
let formularioValido = (nombre,email,mensaje) => {
    return nombreValido(nombre) && emailValido(email) && mensajeValido(mensaje);
};

// ENVIAMOS EL FORMULARIO
let enviarFormulario = (nombre,email,mensaje) => {
    if(formularioValido(nombre,email,mensaje)){
        console.log("Formulario enviado con éxito");
    }else{
        console.log("Llene todos los cmpor con sun formato válido");
    };
};

// COMPROBAMOS

enviarFormulario("Juan","juan@dev.com","este es un mensaje de prueba");

