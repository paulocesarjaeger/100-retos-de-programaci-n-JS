/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */

// FUNCION PARA VERIFICAR SI UN NUMERO ES PRIMO

function esPrimo(num){
    if(num <= 1) return false;

    for( let i = 2; i < num; i++){
        if(num % i === 0) return false;
    }

    return true;
};

// IMPRIMIR LOS NUMEROS PRIMOS HASTA EL 100

for(let i = 0; i <= 100; i++){
    if(esPrimo(i)){
        console.log(i);
    };
};