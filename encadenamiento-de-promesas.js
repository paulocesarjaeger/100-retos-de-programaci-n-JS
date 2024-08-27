// Crea una serie de funciones que devuelvan promesas y encadénalas para realizar una serie de operaciones secuenciales.

function pasoUno(){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Paso 1 completo');
            resolve();
        }, 3000);
    });
};

function pasoDos(){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('paso 2 completo');
            resolve();
        }, 3000);
    });
};

function pasoTres(){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Paso 3 completo');
            resolve();
        }, 3000);
    });
};

pasoUno()
    .then(pasoDos)
    .then(pasoTres)
    .then(() => console.log('Todos los pasos completados'))