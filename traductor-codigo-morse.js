
/*
 * Crea un programa que sea capaz de transformar texto natural a código
 * morse y viceversa.
 * - Debe detectar automáticamente de qué tipo se trata y realizar
 *   la conversión.
 * - En morse se soporta raya "—", punto ".", un espacio " " entre letras
 *   o símbolos y dos espacios entre palabras "  ".
 */

// CREAMOS UN OBJETJO QUE SERA NUESTRO DICCIONARIO MORSE

const morseDiccionario ={
    A: '.-',B: '-...', C: '-.-.', D: '-..', E: '.',F: '..-.', G: '--.', H: '....', I: '..', J: '.---',K: '-.-', L: '.-..', M: '--', N: '-.', O: '---',P: '.--.', Q: '--.-', R: '.-.', S: '...', T: '-',U: '..-', V: '...-', W: '.--', X: '-..-', Y: '-.--',Z: '--..',0: '-----', 1: '.----', 2: '..---', 3: '...--', 4: '....-',5: '.....', 6: '-....', 7: '--...', 8: '---..', 9: '----.','.': '.-.-.-', ',': '--..--', '?': '..--..', "'": '.----.','!': '-.-.--', '/': '-..-.', '(': '-.--.', ')': '-.--.-','&': '.-...', ':': '---...', ';': '-.-.-.', '=': '-...-','+': '.-.-.', '-': '-....-', '_': '..--.-', '"': '.-..-.','$': '...-..-', '@': '.--.-.', 
};

// COMPROBAMOS SI EL TIPO DE TEXTO QUE LE PASAMOS ES MORSE O NATURAL

function comprobarTipoTexto(texto){
    // UTILIZAMOS REGEX PARA SABER SI CONTIENE ELEMENTOS DE UN TEXTO MORSE
    let regex = /^[.-\s]+$/;
    let resultado = regex.test(texto);

    return resultado;
}

// FUNCION QUE INVIERTE EL DICCINOARIO

function obtenerClavePorValor(valorBuscado, diccionario){
    let claves = Object.keys(diccionario);

    for(let clave of claves){
        if(diccionario[clave] === valorBuscado){
            return clave;
        };
    };
};

// FUNCNION PARA TRADUCIR

function traducirMorse(texto){

    let traduccion = "";

    switch(comprobarTipoTexto(texto)){
        case false:

        for(let letra of texto.toUpperCase()){
            if(letra in morseDiccionario){
                traduccion += morseDiccionario[letra] + " ";
            }else if(letra == " "){
                traduccion += " ".repeat(2);
            };
        };

        return traduccion;
        break;

        case true:

        // ANTES DEBEMOS INVERTIR EL DICCIONARIO

        let textoArray = texto.split(" ");

        for(let i = 0; i < textoArray.length; i++){

            let indicado = obtenerClavePorValor(textoArray[i],morseDiccionario);
            if(indicado == undefined){
                traduccion += " ";
            }else{
                traduccion += indicado;
            };
        };
        return traduccion;
        break;
    };
};


// COMPROBAMOS

console.log(traducirMorse(".... --- .-.. .-   -- ..- -. -.. --- "));