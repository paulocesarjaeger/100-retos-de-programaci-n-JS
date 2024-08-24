/*CREA PROGRAMA QUE SIMULE UNA LAVADORA Y SECADORA DE ROPA
QUE INDIQUE CUANTAS PRENDAS SE ESTAN LAVANDO Y EN QUE PARTE DEL CICLO VA.
*/

class Electrodomestico {
    constructor(conectado, encendido){
        this.conectado = conectado;
        this.encendido = encendido;
    };

    encender() {
        if(this.conectado) {
            this.encendido = !this.encendido;
            if(this.encendido){
                console.log("Electrodoméstico encendido");
            }else{
                console.log("Electrodoméstico apagado");
            };
        }else{
            console.log("Conectar a tomacorriente");
        };
    };
};

class Lavadora extends Electrodomestico{
    constructor(conectado, encendido, carga){
        super(conectado, encendido);
        this.carga = carga;
    };

    lavar(){
        if(this.encendido){
            console.log(`Lavando ${this.carga} piezas de ropa`);
            setTimeout(() =>{
                this.secar();
            }, 5000);
        }else{
            console.log("La lavadora está apagada");
        };
    };

    secar(){
        if(this.encendido){
            console.log("Secando ropa");
        }else{
            console.log("La lavadora está apagada");
        };
    };
};

let miLavadora = new Lavadora(true, false, 7);

miLavadora.encender();
console.log("=======================");
miLavadora.lavar();
console.log("=======================")