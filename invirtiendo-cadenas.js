/*
 * Crea un programa que invierta el orden de una cadena de texto
 * - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
 */

function invertirCadena(cadena){

    // 1. SEPARAR LA CADENA
    // 2. INVERTIR 
    // 3. VOLVER A UNIR LA CADENA

    let texto = cadena.split("").reverse().join("");

    return texto;
};

console.log(invertirCadena("¡Hola mundo!"));