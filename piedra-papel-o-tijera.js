/*
 * Crea un programa que calcule quien gana más partidas al piedra,
 * papel, tijera.
 * - El resultado puede ser: "Player 1", "Player 2", "Tie" (empate)
 * - La función recibe un listado que contiene pares, representando cada jugada.
 * - El par puede contener combinaciones de "R" (piedra), "P" (papel)
 *   o "S" (tijera).
 * - Ejemplo. Entrada: [("R","S"), ("S","R"), ("P","S")]. Resultado: "Player 2".
 */

function calcularGanador(jugadas){
    let jugador1 = 0;
    let jugador2 = 0;

    jugadas.forEach(([jugada1,jugada2]) =>{
        if(jugada1 === jugada2){
            // EMPATE, NO SE SUMA NINGUN PUNTO
        }else if(
            (jugada1 === 'R' && jugada2 === 'S') ||
            (jugada1 === 'P' && jugada2 === 'R') ||
            (jugada1 === 'S' && jugada2 === 'P')
        ){
            jugador1++;
        }else{
            jugador2++;
        };
    });

    if(jugador1 > jugador2){
        return "Playe1";
    }else if(jugador2 > jugador1){
        return "Player2";
    }else{
        return "Tie"
    };
};

// COMPROBAMOS

const jugadas = [['R','S'],['S','R'],['P','S']];
console.log(calcularGanador(jugadas));