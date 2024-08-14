/*
 * Crea un programa que cuente cuantas veces se repite cada palabra
 * y que muestre el recuento final de todas ellas.
 * - Los signos de puntuación no forman parte de la palabra.
 * - Una palabra es la misma aunque aparezca en mayúsculas y minúsculas.
 * - No se pueden utilizar funciones propias del lenguaje que
 *   lo resuelvan automáticamente.
 * // REGEX: /[.,¿?\/#!¡$%\^&\*;:{}=\-_`~()]/g, ""
 */

function contarRepetidas(frase){
    // CONVERTIMOS EL TEXTO EN MINUSCULAS Y
    // QUITAMOS LOS SIGNOS DE PUNTUACION

    frase = 
    frase.toLowerCase().replace(/[.,¿?\/#!¡$%\^&\*;:{}=\-_`~()]/g, "");

    // DIVIDIMOS EL TEXTO EN PALABRAS

    let palabras = frase.split(" ");

    // CREAMOS UN OBJETO PARA ALMACENAR LAS PALABRAS

    let recuento = {};

    // CONTAR LAS PALABRAS
    for(let palabra of palabras)
    if(recuento[palabra]){
        recuento[palabra]++;
    }else{
        recuento[palabra] = 1;
    };

    // MOSTRAMOS EL RECUENTO DE PALABRAS
    for(let palabra in recuento){
        console.log(`${palabra}: ${recuento[palabra]}`);
    };
};

// COMPROBAMOS
contarRepetidas("Hola, hola! ¿Cómo estas? Estoy bien, gracias. ¿Y tú?")