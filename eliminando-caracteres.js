/*
 * Crea una función que reciba dos cadenas como parámetro (str1, str2)
 * e imprima otras dos cadenas como salida (out1, out2).
 * - out1 contendrá todos los caracteres presentes en la str1 pero NO
 *   estén presentes en str2.
 * - out2 contendrá todos los caracteres presentes en la str2 pero NO
 *   estén presentes en str1.
 */
 

function compararCadenas(str1,str2){

    // DECLARAMOS LAS DOS CADENAS DE SALIDA VACIAS
    let out1 = "";
    let out2 = "";

    // RECORREMOS LA PRIMERA CADENA
    for(let char of str1){
        // SI EL CARACTER RECORRIDO NO SE ENCUENTRA EN LA CADENA 2
        // ENTONCES LO AGREGAMOS EN LA CADENA DE SALIDA

        if(!str2.includes(char)){
            out1 += char;
        };
    };

    for(let char of str2){
        if(!str1.includes(char)){
            out2 += char;
        };
    };

    // IMPRIMIMOS EN CONSOLA
    console.log("out1: ", out1);
    console.log("out2: ", out2);
};

// COMPROBAMOS
compararCadenas("hola", "mundo");
