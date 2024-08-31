// * EJERCICIO:
//  * Empleando tu lenguaje, explora la definición del tipo de dato
//  * que sirva para definir enumeraciones (Enum).
//  * Crea un Enum que represente los días de la semana del lunes
//  * al domingo, en ese orden. Con ese enumerado, crea una operación
//  * que muestre el nombre del día de la semana dependiendo del número entero
//  * utilizado (del 1 al 7).


const diasDeLaSemana = Object.freeze({
    LUNES: 1,
    MARTES: 2,
    MIERCOLES: 3,
    JUEVES: 4,
    VIERNES: 5,
    SABADO: 6,
    DOMINGO: 7
});

// FUNCION PARA OBTENER EL NOMBRE DEL DIA DE LA SEMANA
function obtenerNombreDia(numero){
    for (const dia in diasDeLaSemana) {
        if(diasDeLaSemana[dia] === numero){
            return dia.charAt(0) + dia.slice(1).toLowerCase();
        };
    };
    return "número inválido";
};



// COMPROBAMOS

console.log(obtenerNombreDia(1));
console.log(obtenerNombreDia(5));
console.log(obtenerNombreDia(8));
console.log(obtenerNombreDia(10));