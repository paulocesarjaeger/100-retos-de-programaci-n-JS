/*
 * Crea un programa se encargue de transformar un número
 * decimal a binario sin utilizar funciones propias del lenguaje que lo hagan directamente.
 */

function decimalABinario(decimal){
    // DECLARAMOS UN STRING VACIO DONDE SE ALMACENARAN LOS NUMEROS BINARIOS

    let binario = "";

    // UTILIZAMOS UN BUCLE WHILE PARA DIVIDIR EL DECIMAL ENTRE 2
    //REPETIDAMENTE, ALMACENANDO EL RESIDUO (0 o 1) QUE REPRESENTAN
    // EL NUMERO BINARIO Y ESTO SE REPITE HASTA QUE EL DECIMAL SEA 0

    while(decimal > 0){
        binario += decimal % 2;
        decimal = Math.floor(decimal / 2);
    };
    return binario;
};

console.log(decimalABinario(10));
console.log(decimalABinario(100));
console.log(decimalABinario(1000));
