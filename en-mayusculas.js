/*
 * Crea una función que reciba un String de cualquier tipo y se encargue de
 * poner en mayúscula la primera letra de cada palabra.
 * - No se pueden utilizar operaciones del lenguaje que
 *   lo resuelvan directamente.
 */

function capitalizandoPalabras(str){
    // DIVIDIMOS EL STRING EN PALABRAS USANDO EL ESPACIO COMO DELIMITADOR
    let palabras = str.split(" ");

    // ITERAMOS SOBRE CADA PALABRA
    palabras.forEach((palabra,index) =>{
        // CONVERTIMOS LA PRIMERA LETRA A MAYUSCULA Y LA CONCATENAMOS CON EL RESTO DE PALABRAS
        palabras[index] = palabra.charAt(0).toUpperCase() + palabra.slice(1);
    });

    // UNIMOS LAS PALABRAS DE NUEVO EN UN SOLO STRING
    return palabras.join(" ");
};

// COMPROBAMOS

console.log(capitalizandoPalabras("este es un texto de prueba que estamos utilizando"));