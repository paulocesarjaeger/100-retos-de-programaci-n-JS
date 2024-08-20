/*
 * Crea una función que reciba un texto y muestre cada palabra en una línea,
 * formando un marco rectangular de asteriscos.
 * - ¿Qué te parece el reto? Se vería así:
 *   **********
 *   * ¿Qué   *
 *   * te     *
 *   * parece *
 *   * el     *
 *   * reto?  *
 *   **********
 */

function marcoRectangular(texto){
    let palabras = texto.split(' ');
    let maxLength = Math.max(...palabras.map(palabra => palabra.length));
    let borde = '*'.repeat(maxLength + 4);

    console.log(borde);
    palabras.forEach(palabra => {
        let espacios = ' '.repeat(maxLength - palabra.length);
        console.log(`* ${palabra}${espacios} *`);
    });

    console.log(borde);
};

// COMPROBAMOS
marcoRectangular("¿Qué te parece el reto?");