/*
Crea un sistema de Vehículos.
    1. Crea una clase Vehículo que incluya un constructor que establezca el número de ruedas y un método para mostrar detalles generales del vehículo. 
    2. Crea dos subclases de Vehículos cualesquiera que hereden de Vehículo e incluyan un constructor con atributos específicos, como la capacidad de pasajeros, y un método para mostrar detalles personalizados.
    3. Crea una instancia de cada Vehículo y muestra sus detalles en la consola.
    */

class Vehiculo{
    constructor(ruedas){
        this.ruedas = ruedas;
    }

    mostrarInfo(){
        console.log(`Este vehículo tiene ${this.ruedas} ruedas`);
    }
}

class Coche extends Vehiculo{
    constructor(ruedas,capacidad){
        super(ruedas);
        this.capacidad = capacidad;
    }

    mostrarInfo(){
        console.log(`Este vehículo tiene ${this.ruedas} ruedas y una capacidad de ${this.capacidad} personas`);
    }
}

class Motocicleta extends Vehiculo{
    constructor(ruedas,modelo){
        super(ruedas);
        this.modelo = modelo;
    }

    mostrarInfo(){
        console.log(`Esta motocicleta tiene ${this.ruedas} ruedas y es de modelo ${this.modelo}`);
    }
}


let miCoche = new Coche(4,5);
let miMotocicleta = new Motocicleta(2,"Pistera");

miCoche.mostrarInfo();
miMotocicleta.mostrarInfo();