/*CREA UNA ROCOLA,
TIENES UNA LISTA DE DIFERENTES CANCIONES, ESTA ROCOLA TE DARA UNA CANCION DE VUELTA CADA VEZ QUE PRESIONES PLAY.
LA ROCOLA TOCARA UNA CANCION AL AZAR Y NO REPETIRA LA CANCION CADA CIERTO NUMERO DE TURNOS*/

class Rocola{
    constructor(){

        this.temas = [
            "Eyes Of The Tiger",
            "Billy Jean",
            "Like A Virgen",
            "Livin On A Prayer",
            "Sweet Child O Mine",
            "Vino Tinto",
            "Learn To Fly",
            "Wonderwall",
            "21 Guns"
        ];

        this.queue = [];
    };

    play(k){
        if(this.queue.length >= k){
            let primero = this.queue.shift();
            this.temas.push(primero);
        }
        let indiceRandom = Math.floor(Math.random() * this.temas.length);
        let tema = this.temas.splice(indiceRandom, 1);
        this.queue.push(tema);
        return tema[0].toString();
    };
};

// COMPROBAMOS

let rocola = new Rocola();

console.log(rocola.play(4));
console.log(rocola.play(4));
console.log(rocola.play(4));
console.log(rocola.play(4));
console.log(rocola.play(4));
console.log(rocola.play(4));
console.log(rocola.play(4));
console.log(rocola.play(4));
console.log(rocola.play(4));
console.log(rocola.play(4));
console.log(rocola.play(4));
console.log(rocola.play(4));
console.log(rocola.play(4));
console.log(rocola.play(4));
