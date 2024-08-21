/*
 * Crea un programa que calcule el daño de un ataque durante
 * una batalla Pokémon.
 * - La fórmula será la siguiente: daño = 50 * (ataque / defensa) * efectividad
 * - Efectividad: x2 (súper efectivo), x1 (neutral), x0.5 (no es muy efectivo)
 * - Sólo hay 4 tipos de Pokémon: Agua, Fuego, Planta y Eléctrico 
 *   (buscar su efectividad)
 * - El programa recibe los siguientes parámetros:
 *  - Tipo del Pokémon atacante.
 *  - Tipo del Pokémon defensor.
 *  - Ataque: Entre 1 y 100.
 *  - Defensa: Entre 1 y 100.
 */

function calcularDanio(tipoAtaque,tipoDefensa,ataque,defensa){
    const efectividad = {
        Agua: { Fuego: 2, Planta: 0.5, Eléctrico: 1, Agua: 1 },
        Fuego: { Planta: 2, Agua: 0.5, Eléctrico: 1, Fuego: 1 },
        Planta: { Agua: 2, Fuego: 0.5, Eléctrico: 1, Planta: 1 },
        Eléctrico: { Agua: 2, Planta: 0.5, Fuego: 1, Eléctrico: 1 }
    };

    const efectividadAtaque = efectividad[tipoAtaque][tipoDefensa];
    const danio = 50 * (ataque / defensa) * efectividadAtaque;

    return danio;

};

// COMPROBAMOS

const tipoAtaque = 'Agua';
const tipoDefensa = 'Fuego';
const ataque = 80;
const defensa = 60;

console.log(`El daño del ataque es: ${calcularDanio(tipoAtaque,tipoDefensa,ataque,defensa)}`);