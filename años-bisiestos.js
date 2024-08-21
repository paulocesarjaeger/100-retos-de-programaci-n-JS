/*
 * Crea una función que imprima los 30 próximos años bisiestos
 * siguientes a uno dado.
 * - Utiliza el menor número de líneas para resolver el ejercicio.
 */

function proximoBisiesto(año) {
    for(let i = 0, y = año + 1; i < 30; y++){
        // EL AÑO DEBE SER DIVISIBLE ENTRE 4 PERO NO ENTRE 100 ALMENOS QUE SEA DIVISIBLE ENTRE 400
        if((y % 4 === 0 && y % 100 !== 0) || y % 400 === 0) {
            console.log(y);
            i++;
        };
    };
};

// PROBAMOS

proximoBisiesto(2024);