
// CREAUN TEMPORIZADOR QUE RECIBA UNA CANTIDAD DE HORAS, MINUTOS Y SEGUNDOS Y HAGA UN CONTEO HACIA ATRAS HASTA LLEGAR A CERO 

class Temporizador{
    constructor(horas,minutos,segundos){
        this.horas = horas;
        this.minutos = minutos;
        this.segundos = segundos;
        this.duracion = (horas * 3600000) + (minutos * 60000) + (segundos * 1000);
        this.temporizadorId = null;
        this.intervalId = null;
    };

    iniciar(){
        const tiempoFinal = Date.now() + this.duracion;
        console.log(`Temporizador iniciado por ${this.horas}:${this.minutos}:${this.segundos}`);

        this.intervalId = setInterval(() => {
            const tiempoRestante = tiempoFinal - Date.now();
            if(tiempoRestante <= 0){
                return;
            }else{
                this.horas = Math.floor((tiempoRestante / 3600000) % 24);
                this.minutos = Math.floor((tiempoRestante / 60000) % 60);
                this.segundos = Math.floor((tiempoRestante / 1000) % 60) + 1;
                console.log(`Tiempo restante: ${this.formatearTiempo(this.horas)}:${this.formatearTiempo(this.minutos)}:${this.formatearTiempo(this.segundos)}`);
            };
        },1000);

        this.temporizadorId = setTimeout(() => {
            clearInterval(this.intervalId);
            this.finalizar();
        },this.duracion);
    };

    formatearTiempo(tiempo){
        return tiempo.toString().padStart(2, '0');
    };

    finalizar(){
        console.log(`El tiempo ha terminado`);
    };
};


let miTemporizador = new Temporizador('00','00','04');
miTemporizador.iniciar();