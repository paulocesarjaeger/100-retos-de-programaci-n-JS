/*
 * Crea una función que sume 2 números y retorne su resultado pasados
 * unos segundos.
 * - Recibirá por parámetros los 2 números a sumar y los segundos que
 *   debe tardar en finalizar su ejecución.
 * - Si el lenguaje lo soporta, deberá retornar el resultado de forma
 *   asíncrona, es decir, sin detener la ejecución del programa principal.
 *   Se podría ejecutar varias veces al mismo tiempo.
 */

function sumarConRetraso(num1,num2,segundos){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num1 + num2);
        }, segundos * 1000);
    });
};

// LA FUNCION DEVUELVE UNA PROMESA, LO QUE PERMITE MANEJAR LA OPERACION DE FORMA ASINCRONA.

// SE RETRASA LA EJECUCION DE LA SUMA CON EL SETIMEOUT. ,ULTIPLICAMOS LOS SEGUNDOS POR 1000PARA CONVERTIRLOS EN MILISEGUNDOS

// DESPUES DEL RETRASO, LA PROMESA SE RESUELVE CON EL RESULTADO DE LA SUMA.

// COMPROBAMOS

sumarConRetraso(5,10,3).then((resultado) => {
    console.log(`Resultado:`)
})