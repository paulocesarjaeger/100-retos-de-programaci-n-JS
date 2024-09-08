/*¡Encuentra el primer número de identificación que se ha repetido, donde la segunda ocurrencia tenga el índice más pequeño!

En otras palabras, si hay más de un número repetido, debes devolver el número cuya segunda ocurrencia aparezca primero en la lista. Si no hay números repetidos, devuelve -1. */

function findFirstRepeated(arr){
    const seen = new Map();

    for(let i = 0; i < arr.length; i++){
        if(seen.has(arr[i])){
            return arr[i];
        }else{
            seen.set(arr[i], i);
        };
    };
    return -1;
};

// COMPROBAMOS

const arrPrueba1 = [2,1,3,5,3,2];
console.log(findFirstRepeated(arrPrueba1));
console.log("===============================");
const arrPrueba2 = [1,2,3,4];
console.log(findFirstRepeated(arrPrueba2));
console.log("===============================");
const arrPrueba3 = [5,1,5,1];
console.log(findFirstRepeated(arrPrueba3));