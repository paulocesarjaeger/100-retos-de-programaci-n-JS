//Crea una función que tome un objeto como argumento y devuelva un nuevo objeto que contenga el conteo de cada tipo de propiedad (número, cadena, booleano, etc.) en el objeto original. La función debe utilizar un bucle for...in para iterar sobre las propiedades del objeto.

function contarTipos(obj){
    const conteo = {};

    for(let propiedad in obj){
        const tipo = typeof obj[propiedad];
        if(conteo[tipo]){
            conteo[tipo]++;
        }else{
            conteo[tipo] = 1;
        }
    }
    return conteo;
}

// COMPROBAMOS

const objeto = {
    nombre: "Juan",
    edad: 30,
    esEstidiante: true,
    notas: [10,9,8],
    direccion: {
        ciudad: "Madrid",
        codigoPostal: 28001
    }
}

console.log(contarTipos(objeto));