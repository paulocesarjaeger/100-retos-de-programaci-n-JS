

// Escribir un programa en JavaScript que identifique y liste todos los números primos dentro de un rango especificado utilizando el método forEach.

// FUNCION PARA VERIFICAR SI ES UN NUMERO PRIMO

function esPrimo(num){
    if(num <= 1) return false;
    for(let i =2; i < num; i++){
        if(num % i === 0) return false;
    }
    return true;
};

// FUNCION PARA ENCONTRAR NUMERO PRIMOS EN UN RANGO

function encontrarPrimos(rango){
    let primo = [];
    rango.forEach(num =>{
        if(esPrimo(num)){
            primo.push(num);
        };
    });
    return primo;
};

// DEFINIR EL RANGO DE NUMEROS

let rango = Array.from({length: 100}, (_,i) => i + 1);

// ENCONTRAR Y MOSTRAR LOS NUMERO PRIMOS EN EL RANGO
let primos = encontrarPrimos(rango);
console.log("Números primos en el rango", primos);

