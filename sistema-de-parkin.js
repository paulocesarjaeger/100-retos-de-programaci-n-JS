

// CREAMOS UN SISTEMA PARA CONTROLAR LA ENTRADA Y SALIDA DE VEHICULOS DE UN PARKING

class Parking{
    constructor(totalplazas){
        this.totalplazas = totalplazas;
        this.plazasOcupadas = 0;
        this.vehiculos = [];
    };

    // REGISTRAMOS LA ENTRADA DE VEHICULOS
    entradaVehiculos(matricula){
        if(this.plazasOcupadas < this.totalplazas){
            const fechaIngreso = new Date();
            this.vehiculos.push({matricula,fechaIngreso});
            this.plazasOcupadas++;
            console.log(`Vehiculo con matrícula ${matricula} ingresó a las ${fechaIngreso}`);
        }else{
            console.log(`No hay plazas disponibles`);
        };
    };

    // REGISTRAMOS LA SALIDA DEL VEHICULO
    salidaVehiculo(matricula){
        const index = this.vehiculos.findIndex(vehiculo => vehiculo.matricula === matricula);
        if(index !== -1){
            const vehicuo = this.vehiculos.splice(index,1)[0];
            this.plazasOcupadas--;
            const fechaSalida = new Date();
            console.log(`Vehículo con matrícula ${matricula} salió el ${fechaSalida}`);
        }else{
            console.log(`El vehículo no se encuentra en el parking.`);
        };
    };

    // MOSTRAR INFORMACION DEL PARKING

    estadoParking(){
        console.log(`Plazas ocupadas: ${this.plazasOcupadas}/${this.totalplazas}`);
        console.log("Vehículos en el parking:");
        this.vehiculos.forEach(vehiculo => {
            console.log(`Matricula: ${vehiculo.matricula}, Fecha de ingreso: ${vehiculo.fechaIngreso}`);
        });
    };
};

// COMPROBAMOS

const parking = new Parking(5);

parking.entradaVehiculos("CD8293");
parking.entradaVehiculos("XYZ789");
parking.estadoParking();
parking.salidaVehiculo("CD8293");
parking.estadoParking();