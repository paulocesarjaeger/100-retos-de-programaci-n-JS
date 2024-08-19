/*
 * Crea dos funciones, una que calcule el máximo común divisor (MCD) y otra
 * que calcule el mínimo común múltiplo (mcm) de dos números enteros.
 * - No se pueden utilizar operaciones del lenguaje que
 *   lo resuelvan directamente.
 */

// FUNCION PARA CLACULAR EL MAXIMO COMUN DIVISOR USANDO EL ALGORITMO DE EUCLIDES

function calcularMCD(a,b){
    while (b !== 0){
        let temp = b;
        b = a % b;
        a = temp;
    };
    return a;
};

// FUNCION PARA CALCULAR EL MINIMO COMUN MULTIPLO
function calcularMCM(a,b){
    return Math.abs(a * b) / calcularMCD(a,b);
};

// COMRPOBAMOS

let num1 = 12;
let num2 = 18;

console.log(`El MCD de ${num1} y ${num2} es: ${calcularMCD(num1,num2)}`);
console.log(`El MCM de ${num1} y ${num2} es: ${calcularMCM(num1,num2)}`);
