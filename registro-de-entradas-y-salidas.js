
// CREAR UN SISTEMA QUE REGISTRE LAS ENTRADASY SALIDAS DE LOSTRABAJADORES

const asistencias = {};

function registrarEntrada(nombreTrabajador){
    const horaEntrada = new Date().toLocaleTimeString();
    if(!asistencias[nombreTrabajador]){
        asistencias[nombreTrabajador] = {};
    }
    asistencias[nombreTrabajador].entrada = horaEntrada;
    console.log(`${nombreTrabajador} - Entrada: ${horaEntrada}`);
}

function registrarSalida(nombreTrabajador){
    const horaSalida = new Date().toLocaleTimeString();
    if(!asistencias[nombreTrabajador]){
        console.log(`No se encontró una entrada para ${nombreTrabajador}`);
        return;
    }
    asistencias[nombreTrabajador].salida = horaSalida;
    console.log(`${nombreTrabajador} - salida: ${horaSalida}`);
};

// COMPROBAMOS

registrarEntrada('Juan Pérez');

registrarSalida('Juan Pérez');

registrarEntrada(`Pedro Erquiaga`)

registrarSalida('Carlos Lozano');