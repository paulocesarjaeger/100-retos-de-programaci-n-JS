/*
 * Escribe un programa que, dado un número, compruebe y muestre si es primo,
 * fibonacci y par.
 * Ejemplos:
 * - Con el número 2, nos dirá: "2 es primo, fibonacci y es par"
 * - Con el número 7, nos dirá: "7 es primo, no es fibonacci y es impar"
 */

// COMPROBAMOS SI ES PRIMO
function esPrimo(n){
    if(n <= 1) return false;
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i === 0) return false;
    };
    return true;
};

// COMPROBAMOS QUE SEA FIBONACCI
function esFibonacci(n){
    let a = 0, b = 1;
    while(b < n){
        [a,b] = [b,a + b];
    };
    return b === n || n === 0;
};

// COMPROBAMOS QUE ES PAR
function esPar(n){
    return n % 2 === 0;
};

// VERIFICAMOS EL NUMERO
function verificarNumero(n){
    let primo = esPrimo(n) ? "es primo" : "no es primo";
    let fibonacci = esFibonacci(n) ? "es fibonacci" : "no es fibonacci";
    let par = esPar(n) ? "es par" : "no es par";
    console.log(`${n} ${primo}, ${fibonacci} y ${par}`);
};

// COMPROBAMOS

verificarNumero(2);
verificarNumero(7);