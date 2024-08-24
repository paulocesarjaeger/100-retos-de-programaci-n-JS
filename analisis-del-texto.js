/*
 * Crea un programa que analice texto y obtenga:
 * - Número total de palabras.
 * - Longitud media de las palabras.
 * - Número de oraciones del texto (cada vez que aparecen un punto).
 * - Encuentre la palabra más larga.
 *
 * Todo esto utilizando un único bucle.
 */

function analizarTexto(texto){
    let palabras = texto.split(/\s+/);
    let numPalabras = palabras.length;
    let longitudTotal = 0;
    let numOracines = 0;
    let palabraMasLarga = "";

    for(let i = 0; i < palabras.length; i++){
        let palabra = palabras[i];
        longitudTotal += palabra.length;

        if(palabra.includes('.')){
            numOracines++;
        };
        
        if(palabra.length > palabraMasLarga.length){
            palabraMasLarga = palabra;
        };
    };

    let longitudMedia = longitudTotal / numPalabras;

    return {
        numPalabras: numPalabras,
        longitudMedia: longitudMedia.toFixed(2),
        numOracines: numOracines,
        palabraMasLarga: palabraMasLarga
    };
};

// PROBAMOS

let texto = "ESTO ES UN EJEMPLO DEL TETO. CONTIENE VARIAS PALABRAS Y ORACIONES. VAMOS A ANALIZARLO.";

let resultado = analizarTexto(texto);

console.log("Numero total de palabras:",resultado.numPalabras);
console.log("Longitud media de las plabras:",resultado.longitudMedia);
console.log("Número de oraciones:",resultado.numOracines);
console.log("Palabra más larga:", resultado.palabraMasLarga);

