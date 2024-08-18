/*
 * Crea una función que reciba dos array, un booleano y retorne un array.
 * - Si el booleano es verdadero buscará y retornará los elementos comunes
 *   de los dos array.
 * - Si el booleano es falso buscará y retornará los elementos no comunes
 *   de los dos array.
 * - No se pueden utilizar operaciones del lenguaje que
 *   lo resuelvan directamente.
 */

function procesandoArrays(arr1,arr2,boleano){
    let resultado = [];

    if(boleano){
        // BUSCAMOS ELEMENTOS COMUNES
        for(let char1 of arr1){
            for(let char2 of arr2){
                if(char1 === char2 && !resultado.includes(char1)){
                    resultado.push(char1);
                };
            };
        };
    }else{
        // BUSCAMOS ELEMENTOS NO COMUNES
        for(let char1 of arr1){
            if(!arr2.includes(char1) && !resultado.includes(char1)){
                resultado.push(char1);
            };
        };
        for(let char2 of arr2){
            if(!arr1.includes(char2) && !resultado.includes(char2)){
                resultado.push(char2);
            };
        };
    };
    return resultado;
};

// COMPROBAMOS

let array1 = [1,2,3,4,5];
let array2 = [4,5,6,7,8];

console.log(procesandoArrays(array1,array2,true));
console.log(procesandoArrays(array1,array2,false));