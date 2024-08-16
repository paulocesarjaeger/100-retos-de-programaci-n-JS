/* 
CREA UNA FUNCION QUE TOME EL NUMERO MENOR Y MAYOR DE ESTE 
ARRAY [2,5,1,,2,6,1,1,9,35,56]; Y DEVUELVA LA SUMA DE ELLOS.
*/ 


function sumaExtremos(array){
    // ORDENAMOS EL ARRAY Y LE PASAMOS UNA FUNCION COMPARATIVA PARA QUE SE ORDENE COMO SI FUERAN NUMEROS Y NO STRINGS

    let arrayOrdenado = array.sort((a,b) => a - b);

    // RECORREMOS EL ARRAY PARA ELIMIAR ELEMENTOS VACIOS EN CASO LOS HAYA

    for(let i = 0; i < arrayOrdenado.length; i++){
        if(arrayOrdenado[i] == undefined){
            arrayOrdenado.splice(i,1);
            i--;
        };
    };

    // SUMAMOS LOS EXTREMOS
    let suma = arrayOrdenado[0] + arrayOrdenado[arrayOrdenado.length - 1];

    return suma;
};

let array = [2,5,1,,2,6,1,1,9,35,56];
console.log(sumaExtremos(array));