/*
 * Crea un programa que comprueba si los paréntesis, llaves y corchetes
 * de una expresión están equilibrados.
 * - Equilibrado significa que estos delimitadores se abren y cieran
 *   en orden y de forma correcta.
 * - Paréntesis, llaves y corchetes son igual de prioritarios.
 *   No hay uno más importante que otro.
 * - Expresión balanceada: { [ a * ( c + d ) ] - 5 }
 * - Expresión no balanceada: { a * ( c + d ) ] - 5 }
 */


function estaEquilibrado(expresion){
    // DICCIONARIO PARA EMPAREJAR LOS DELIMITADORES
    const pares = {
        ')': '(',
        '}': '{',
        ']': ']'
    }

    // PILA PARA ALMACENAR LOS DELIMITADORES ABIERTOS

    const pila = [];

    for(let char of expresion){
        if(Object.values(pares).includes(char)){
            // SI ES UN DELIMITADOR DE APERTURA, LO AÑADIMOS A LA PILA
            pila.push(char);
        }else if(Object.keys(pares).includes(char)){
            // SI ES UN DELIMITADOR DE CIERRE, COMPROBAMOS
            // SI COINCIDE CON EL ULTIMO ABIERTO
            if(pila.length === 0 || pares[char] !== pila.pop()){
                return false;
            }
        }
    }

    // SI LA PILA ESTA VACIA, TODOS LOS DELIMITADORES
    // ESTAN EQUILIBRADOS
    return pila.length === 0;
}

// COMPROBAMOS

console.log(estaEquilibrado("{ [ a * ( c + d) ] - 5 }")); //true
console.log(estaEquilibrado("{ a * ( c + d) ] - 5 }")); //false
