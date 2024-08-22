// Llamada a la API de Pokémon para obtener información sobre Pikachu
/*
 * Llamar a una API es una de las tareas más comunes en programación.
 *
 * Implementa una llamada HTTP a una API (la que tú quieras) y muestra su
 * resultado a través de la terminal. Por ejemplo: Pokémon, Marvel...
 *
 * Aquí tienes un listado de posibles APIs:
 * https://github.com/public-apis/public-apis
 */

// LLAMADA A LA API DE POKEMON PARA OBTENER INFORMACION SOBRE CHARIZARD

fetch('https://pokeapi.co/api/v2/pokemon/charizard').then(response => response.json()).then(data => {
    console.log('Nombre:',data.name);
    console.log('Altura:',data.height);
    console.log('Peso:',data.weight);
    console.log('Habilidades',data.abilities.map(ability => ability.ability.name).join(', '));
})
.catch(error => console.error('Error:',error));