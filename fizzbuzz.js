

/*
 * Escribe un programa que muestre por consola los
 * números de 1 a 100 (ambos incluidos), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */


// IMPRIMIMOS LOS NUMEROS DEL 1 - 100 CON UN BUCLE FOR 
for(let i = 1; i <= 100; i++){
    // CONDICIONAMOS LO QUE SE IMPRIMIRA EN CONSOLA SEGÚN PIDE EL RETO
    if(i % 3 == 0 && i % 5 == 0){
        console.log("fizzbuzz");
    }else if(i % 3 == 0){
        console.log("fizz");
    }else if(i % 5 == 0){
        console.log("buzz");
    }else{
        console.log(i);
    }
};



