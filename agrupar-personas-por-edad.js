
//Tienes un array de objetos, donde cada objeto representa a una persona con un nombre y una edad. Debes crear una función que agrupe a las personas por su edad y devuelva un objeto donde las claves sean las edades y los valores sean arrays con los nombres de las personas que tienen esa edad.

function agruparPorEdad(personas){
    let grupos = {};
    personas.forEach(function(persona) {
        if(grupos[persona.edad]) {
            grupos[persona.edad].push(persona.nombre);
        }else{
            grupos[persona.edad] = [persona.nombre];
        };
    });
    return grupos;
};

// COMPROBAMOS

const personas = [
    {nombre: "Ana", edad: 25},
    {nombre: "Luis", edad: 30},
    {nombre: "María", edad: 25},
    {nombre: "Juan", edad: 30},
    {nombre: "Pedro", edad: 20},
];

const resultado = agruparPorEdad(personas);
console.log(resultado);