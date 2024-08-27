/*Crea una función que simule un juego de adivinanzas. La función debe devolver una promesa que se resuelve si el número adivinado es correcto y se rechaza si es incorrecto. */

function adivinaElNumero(numero){
    const numeroSecreto = 7;
    return new Promise((resolve, reject) => {
        if (numeroSecreto === numero) {
            resolve('Adivinast el número');
        }else {
            reject('Número incorrecto, intenta de nuevo');
        };
    });
};

adivinaElNumero(7)
        .then(resultado => console.log(resultado))
        .catch(resultado => console.log(resultado));

