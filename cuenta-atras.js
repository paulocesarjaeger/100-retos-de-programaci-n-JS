/*
 * Crea una función que reciba dos parámetros para crear una cuenta atrás.
 * - El primero, representa el número en el que comienza la cuenta.
 * - El segundo, los segundos que tienen que transcurrir entre cada cuenta.
 * - Sólo se aceptan números enteros positivos.
 * - El programa finaliza al llegar a cero.
 * - Debes imprimir cada número de la cuenta atrás.
 */

function cuentaAtras(inicio, intervalo){
    if(inicio < 0 || intervalo < 0 || !Number.isInteger(inicio) ||!Number.isInteger(intervalo)) {
        console.log("Por favor, introduce números enteros positivos.");
        return;
    }

    const countDown = setInterval(() => {
        console.log(inicio);
        inicio--;

        if(inicio < 0) {
            clearInterval(countDown);
        };
    }, intervalo * 1000);
};

//COMPROBAMOS

cuentaAtras(10, 1) //COMIENZA LA CUNETA EN 10, CON INTEVALOS DE 1 SEGUNDO