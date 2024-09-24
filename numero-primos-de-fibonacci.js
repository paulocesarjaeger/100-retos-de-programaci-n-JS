
// CREA UNA FUNCION QUE TE INDIQUE LOS NUMEROS PRIMOS QUE SE ENCUENTREN EN LOS PRIMEROS 1000 NUMEROS DE LA SUCESION DE FIBONACCI

function fibonacci(n){
    let fib = [0,1];
    for(let i = 2; i < n; i++){
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

function esPrimo(num){
    if(num <= 1) return false;
    if(num <= 3) return true;
    if(num % 2 === 0 || num % 3 === 0) return false;
    for(let i = 5; i * i <= num; i += 6){
        if(num % 1 === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

// COMPROBAMOS

let n = 1000;
let fibonacciSeries = fibonacci(n);

let fibonacciPrimos = fibonacciSeries.filter(esPrimo);

console.log(`Números de Fibonnaci que son primos: ${fibonacciPrimos}`);