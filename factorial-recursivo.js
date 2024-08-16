/*
 * Escribe una función que calcule y retorne el factorial de un número dado
 * de forma recursiva.
 */

// UTILIZAREMOS UNA FUNCION RECURSIVA LA CUAL SE LLAMA A SI MISMA

function factorial(n){
    if(n == 0){
        return 1;
    }else {
        return n * factorial(n-1);
    };
};

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));