/*
 * Crea una función que simule las condiciones climáticas (temperatura y probabilidad de lluvia)
 * de un lugar ficticio al pasar un número concreto de días según estas reglas:
 * - La temperatura inicial y el % de probabilidad de lluvia lo define el usuario.
 * - Cada día que pasa:
 *   - 10% de posibilidades de que la temperatura aumente o disminuya 2 grados.
 *   - Si la temperatura supera los 25 grados, la probabilidad de lluvia al día
 *     siguiente aumenta en un 20%.
 *   - Si la temperatura baja de 5 grados, la probabilidad de lluvia al día
 *     siguiente disminuya en un 20%.
 *   - Si llueve (100%), la temperatura del día siguiente disminuye en 1 grado.
 * - La función recibe el número de días de la predicción y muestra la temperatura
 *   y si llueve durante todos esos días.
 * - También mostrará la temperatura máxima y mínima de ese periodo y cuántos días va a llover.
 */

function simularClima(dias, tempInicial, probLluviaInicial) {
    let temperatura = tempInicial;
    let probLluvia = probLluviaInicial;
    let tempMax = tempInicial;
    let tempMin = tempInicial;
    let diasLluvia = 0;

    for (let i = 0; i < dias; i++){
        // simular cambio de temperatura
        if(Math.random() <0.1) {
            let cambio = Math.random() < 0.5 ? -2 : 2;
            temperatura += cambio;
        }

        // AJUSTAR PROBABILIDAD DE LLUVIA SEGUN LA TEMPERATURA
        if(temperatura < 25) {
            probLluvia = Math.min(probLluvia + 20, 100);
        }else if(temperatura < 5) {probLluvia = Math.max(probLluvia - 20, 0);
        }

        // DETERMINAR SI LLUEVE
        let llueve = Math.random() * 100 < probLluvia;
        if(llueve) {
            diasLluvia++;
            temperatura -= 1; //DISMINUIR TEMPERATURA SI LLUEVE
        }

        // ACTUALIZAR TEMPERATURA MAXIMA Y MINIMA
        if(temperatura > tempMax) tempMax = temperatura;
        if(temperatura < tempMin) tempMin = temperatura;

        // MOSTRAR RESULTADO DEL DIA
        console.log(`Día ${i + 1}: Temperatura = ${temperatura} ºC, Probabilidad de lluvia = ${probLluvia}, Llueve = ${llueve}`);
    }

    // MOSTRAR RESUMEN

    console.log(`Temperatura máxima: ${tempMax} ºC`);
    console.log(`Temperatura mínima ${tempMin} ºC`);
    console.log(`Días de lluvia: ${diasLluvia}`);
};

// PROBAMOS

simularClima(10,20,30);
