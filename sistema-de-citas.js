
//  CREAR UN SISTEMA DE CITAS PARA UNA PELUQUERIA

class Cita{
    constructor(fecha,hora,estilista){
        this.fecha = fecha;
        this.hora = hora;
        this.estilista = estilista;
    }
}

class Agenda{
    constructor(){
        this.citas = [];
        this.horasDisponibles = ['09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00'];
        this.estilistas = ['Juan','María','Pedro'];
    }

    validarEntradas(fecha,hora,estilista){
        if(!fecha || !hora || !estilista){
            return 'Todos los campos son obligatorios.'
        }

        if(!this.horasDisponibles.includes(hora)){
            return 'Hora no disponible.';
        }

        if(!this.estilistas.includes(estilista)){
            return 'Estilista no disponible.';
        }
        return null;
    }

    agendarCita(fecha,hora,estilista){
        const error = this.validarEntradas(fecha,hora,estilista);
        if(error){
            return error;
        }

        const estaOcupado = this.citas.some(cita =>
            cita.fecha === fecha &&
            cita.hora === hora &&
            cita.estilista === estilista
        );

        if(estaOcupado){
            const horaSugeridas = this.horasDisponibles.filter(h =>
                !this.citas.some(cita =>
                    cita.fecha === fecha &&
                    cita.hora === h &&
                    cita.estilista === estilista
                )
            );
            return `El estilista está ocupado a esta hora. Horas disponibles: ${horaSugeridas.join(', ')}`;
        }else{
            this.citas.push(new Cita(fecha,hora,estilista));
            return `Cita agendada con éxito`;
        }
    }
}

// COMPROBAMOS

let agenda = new Agenda();

// AGENDAR CITA CON EXITO

let fecha = '2024-09-29';
let hora = '10:00';
let estilista = 'Juan';
let mensaje = agenda.agendarCita(fecha,hora,estilista);
console.log(mensaje);

// AGENDAR CITA CON UN ETILISTA OCUPADO

fecha = '2024-09-29';
hora = '10:00';
estilista = 'Juan';
mensaje = agenda.agendarCita(fecha,hora,estilista);
console.log(mensaje);

// AGENDAR CITA EN UNAHORA NO DISPONIBLE

fecha = '2024-09-29';
hora = '18:00';
estilista = 'María';
mensaje = agenda.agendarCita(fecha,hora,estilista);
console.log(mensaje);

// AGENDAR CITA CON UN ESTILISTA NO DISPONIBLE

fecha = '2024-09-29';
hora = '10:00';
estilista = 'Carlos';
mensaje = agenda.agendarCita(fecha,hora,estilista);
console.log(mensaje);

// AGENDAR CITA SIN COMPLETR TODOS LOS CAMPOS

fecha = '';
hora = '10:00';
estilista = 'Juan';
mensaje = agenda.agendarCita(fecha,hora,estilista);
console.log(mensaje);
