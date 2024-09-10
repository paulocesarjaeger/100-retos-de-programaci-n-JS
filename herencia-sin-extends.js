// CREA UN SISTEMA DE HERENCIAS SIN UTILIZAR EXTENDS.

// PARA EL EJEMPLO SE CREARA UN MOVIL QUE HEREDARA LOS METODOS PRENDER Y APAGAR.

class Movil{
    constructor(modelo){
        this.modelo = modelo;
    }
}

const encendido = {
    encender(){
        console.log(`El móvil modelo ${this.modelo} está encendido`)
    }
}

const apagado = {
    apagar() {
        console.log(`El móvil modelo ${this.modelo} está apagado`)
    }
}

Object.assign(Movil.prototype, encendido);
Object.assign(Movil.prototype, apagado);


const iphone = new Movil('iPhone 16 Pro');

iphone.encender();
iphone.apagar();



