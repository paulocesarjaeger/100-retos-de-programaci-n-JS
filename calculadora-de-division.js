// Crea una función que tome dos números como argumentos y devuelva el resultado de dividir el primer número por el segundo. La función debe manejar los siguientes casos:

// Si el segundo número es 0, debe lanzar un error.
// Si los argumentos no son números, debe lanzar un error.
// Utiliza try y catch para manejar estos errores y devolver un mensaje apropiado.

function dividir(a,b){
    try{
        if(isNaN(a) || isNaN(b)){
            throw new Error('Los argumentos deben ser números');
        }
        if(b === 0){
            throw new Error('No se puede dividir entre cero');
        }
        return a/b;
    }catch (error){
        return `Error: ${error.message}`;
    };
};

// COMPROBAMOS

console.log(dividir(10,2)); //DEBERIA IMPRIMR: 5
console.log(dividir(10,0)); //DEBERIA IMPRIMIR: ERROR
console.log(dividir(10,'a')); //DEBERIA IMPRIMIR ERROR