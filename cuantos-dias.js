/*
 * Crea una función que calcule y retorne cuántos días hay entre dos cadenas
 * de texto que representen fechas.
 * - Una cadena de texto que representa una fecha tiene el formato "dd/MM/yyyy".
 * - La función recibirá dos String y retornará un Int.
 * - La diferencia en días será absoluta (no importa el orden de las fechas).
 * - Si una de las dos cadenas de texto no representa una fecha correcta se
 *   lanzará una excepción.
 */

function cuantosDias(fecha1,fecha2){

    // FUNCION PARA VALIDAR LAS FECHAS
    function validarFechas(fecha){
        let regex = /^\d{2}\/\d{2}\/\d{4}$/;
        if(!regex.test(fecha)){
            throw new Error("Formato de fecha invalido");
        };
    };

    // VALIDAMOS LAS FECHAS
    validarFechas(fecha1);
    validarFechas(fecha2);

    // CONVERTIMOS LAS FECHAS DE STRING A OBJETO DATE
    let parteFecha1 = fecha1.split("/");
    let parteFecha2 = fecha2.split("/");

    let date1 = new Date(parteFecha1[2], parteFecha1[1] - 1, parteFecha1[0]);
    let date2 = new Date(parteFecha2[2], parteFecha2[1] - 1, parteFecha2[0]);

    // CALCULAMOS LA DIFERENCIA EN MILISEGUNDOS
    let diferenciaEnMilisegundos = Math.abs(date2 - date1);

    // CONVERTIMOS LA DIFERENCIA DE MILISEGUNDOS A DIAS
    let milisegndosPorDia = 1000 * 60 * 60 * 24;
    let diferenciaDias = Math.round(diferenciaEnMilisegundos / milisegndosPorDia);

    return diferenciaDias;
};

// COMPROBAMOS

try{
    console.log(cuantosDias("15/08/2024", "20/08/2024"));
}catch(error){
    console.log(error.message);
};
