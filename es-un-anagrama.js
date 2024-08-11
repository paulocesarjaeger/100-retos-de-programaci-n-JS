/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

function anagrama(palabra1,palabra2){

    // SI LAS PALABRAS SON EXACTAMENTE IGUALES NO ES UN ANAGRAMA
    if(palabra1 === palabra2) return false;

    // PASAMOS LAS PALABRAS A MINUSCULAS Y ORDENAMOS LAS LETRAS
    let palabra1Ordenada = 
        palabra1.toLowerCase().split("").sort().join("");
    let palabra2Ordenada =
        palabra2.toLowerCase().split("").sort().join("");

    // VERIFICAMOS SI LAS PALABRAS SON IGUALES

    return palabra1Ordenada === palabra2Ordenada;
}

// COMPROBAMOS

console.log(anagrama("amor", "roma"));
console.log(anagrama("amor", "amor"));
console.log(anagrama("amor", "ramo"));