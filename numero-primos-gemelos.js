/*
 * Crea un programa que encuentre y muestre todos los pares de números primos
 * gemelos en un rango concreto.
 * El programa recibirá el rango máximo como número entero positivo.
 *
 * - Un par de números primos se considera gemelo si la diferencia entre
 *   ellos es exactamente 2. Por ejemplo (3, 5), (11, 13)
 *
 * - Ejemplo: Rango 14
 *   (3, 5), (5, 7), (11, 13)
 */

// CREAMOS LA FUNCION PARA ENCONTRAR NUMEROS PRIMOS
function esPrimo(num){
    if (num <= 1)return false;
    for(let i = 2; i < Math.sqrt(num); i++){
        if( num % i === 0) return false;
    }
    return true;
};

// CREAMOS LA FUNCION PARA LLAR LOS PRIMOS GEMELOS
function primosGemelos(min,max){
    let gemelos = [];

    for(let i = min; i <= max; i++){
        if(esPrimo(i) && esPrimo(i+2)){
            gemelos.push([i,i+2]);
        };
    };

    return gemelos;
};

// COMPROBAMOS

console.log(primosGemelos(2,50));