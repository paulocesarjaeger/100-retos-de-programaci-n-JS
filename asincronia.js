
// Crea una función que permita obtener los datos de la API "https://jsonplaceholder.typicode.com/posts" utilizando fetch. Después crea una función que muestre los datos obtenidos en la consola después de un cierto tiempo.

async function obtenerDatos(){
    try{
        const response = await fetch ("https://jsonplaceholder.typicode.com/posts");
        if(!response.ok){
            throw new Error('Error al obtener los datos');
        }
        const datos = await response.json();
        return datos;
    }catch(error){
        console.error('Error: ', error);
    }
}

function mostrarDatosConRetraso(){
    obtenerDatos().then(datos => {
        setTimeout(() => {
            console.log(datos);
        },5000);
    });
};


mostrarDatosConRetraso();