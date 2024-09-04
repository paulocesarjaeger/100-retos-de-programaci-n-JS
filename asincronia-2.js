// Utilizando el concepto de asincronía, crea
//  * el siguiente programa que ejecuta en este orden:
//  * - Una función C que dura 3 segundos.
//  * - Una función B que dura 2 segundos.
//  * - Una función A que dura 1 segundo.
//  * - Una función D que dura 1 segundo.
//  * - Las funciones C, B y A se ejecutan en paralelo.
//  * - La función D comienza su ejecución cuando las 3 anteriores han finalizado.

// FUNCION QUE SIMULA UNA TAREA ASINCRONA CON RETRASO
const delay = (ms) => new Promise(resolve => setTimeout(resolve,ms));

// FUNCIONES C, B Y A
const functionC = async () => {
    console.log('Función C iniciada');
    await delay(3000);
    console.log('Función C finalizada');
};

const functionB = async () => {
    console.log('Función B iniciada');
    await delay(2000);
    console.log('Función B finalizada');
};

const functionA = async () => {
    console.log('Función A iniciada');
    await delay (1000);
    console.log('Función A finalizada');
};

// FUNCION D

const fucntionD = async () => {
    console.log('Función D iniciada');
    await delay(1000);
    console.log('Función D finalizada');
};


// FUNCION PRINCIPAL QUE COORDINA LA EJECUCION

const main = async () =>{
    console.log('Ejecutando funciones C, B y A en paralelo');
    await Promise.all([functionC(), functionB(), functionA()]);
    console.log('Funciones C, B y A finalizadas')
    await fucntionD();
    console.log('FIN');
};


// COMPROBAMOS
main();