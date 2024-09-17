
// CREAMOS UN SISTEMA PARA CONTROLAR UN ASCENSOR

class Ascensor{
    constructor(pisos){
        this.pisos = pisos;
        this.pisoActual = 0;
        this.objetivo = null;
        this.movimiento = null;
    }

    llamar(piso){
        if(piso < 0 || piso >= this.pisos){
            console.log("Piso no válido.");
            return;
        }
        this.objetivo = piso;
        this.mover();
    }

    mover(){
        if(this.objetivo === null) return;

        if(this.pisoActual < this.objetivo){
            this.movimiento = setInterval(() => {
                if(this.pisoActual < this.objetivo){
                    this.pisoActual++;
                    console.log(`Subiendo... Piso Actual: ${this.pisoActual}`)
                }else{
                    clearInterval(this.movimiento);
                    this.movimiento = null;
                    console.log(`Llegamos al piso: ${this.pisoActual}`);
                }
            },1000);
        }else if(this.pisoActual > this.objetivo){
            this.movimiento = setInterval(() => {
                if(this.pisoActual > this.objetivo){
                    this.pisoActual--;
                    console.log(`Bajando... Piso actual: ${this.pisoActual}`);
                }else{
                    clearInterval(this.movimiento);
                    this.movimiento = null;
                    console.log(`Llegamos al piso: ${this.pisoActual}`)
                }
            },1000);
        }
    }
}

// COMROBAMOS

const ascensor = new Ascensor(10);

ascensor.llamar(3)