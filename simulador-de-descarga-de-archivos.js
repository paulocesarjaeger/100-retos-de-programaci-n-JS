
// Vas a crear un simulador de descarga de archivos que utiliza promesas para manejar operaciones asíncronas. El simulador debe incluir las siguientes funciones:

function iniciarDescarga(){
    return new Promise((resolve,reject) => {
        console.log("Iniciando Descarga...");
        setTimeout(() => {
            const exito =  Math.random() > 0.2; //80% de probabilidad de éxito
            if(exito) {
                resolve("descarga iniciada con éxito");
            }else {
                reject("Error al iniciar la descarga");
            }
        }, 2000);
    });
};

function progresoDescarga() {
    return new Promise((resolve,reject) => {
        console.log("Descargando...");
        setTimeout(() => {
            const exito = Math.random() > 0.2;
            if(exito) {
                resolve("Descarga en proceso");
            }else {
                reject("Error durante la descarga");
            };
        }, 3000);
    });
};

function finalizarDescarga(){
    return new Promise((resolve,reject) => {
        console.log("Finalizando descarga");
        setTimeout(() => {
            const exito = Math.random() > 0.2;
            if(exito) {
                resolve("Descarga dinalizada con éxito");
            }else {
                reject("Error al finalizar la descarga");
            };
        },1000);
    });
};

// EJECUTAMOS TODAS LAS PROMESAS
Promise.all([iniciarDescarga(), progresoDescarga(), finalizarDescarga()])
    .then(results => {
        results.forEach(result => console.log(result));
        console.log("¡Todas las operaciones completadas con éxito");
    })
    .catch(error => {
        console.error("Una de las operaciones falló", error);
    });