// En el taller de Santa, los elfos tienen una lista de regalos que desean fabricar y un conjunto limitado de materiales.

// Los regalos son cadenas de texto y los materiales son caracteres. Tu tarea es escribir una función que, dada una lista de regalos y los materiales disponibles, devuelva una lista de los regalos que se pueden fabricar.

// Un regalo se puede fabricar si contamos con todos los materiales necesarios para fabricarlo. resulevelo con javascript

function fabricarRegalos(regalos, materiales){
    return regalos.filter(regalo => {return [...regalo].every(char => materiales.includes(char));
    });
};

// COMPROBAMOS

const regalos = ['tren', 'oso', 'pelota'];
const materiales = 'tronesa';

console.log(fabricarRegalos(regalos, materiales));