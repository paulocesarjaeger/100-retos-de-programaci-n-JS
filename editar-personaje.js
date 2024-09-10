

// CREA UN PERSONAJE Y EDITA SU NOMBRE Y RAZA


const personaje = {
    nombre: "Personaje 1",
    raza: "Sin especificar"
};

const personalizar = new Proxy(personaje, {
    get: (objeto,propiedad) => {
        console.log(`El personaje es: ${objeto[propiedad]}`)
    },
    set: (objeto,propiedad,valor) => {
        console.log(`el personaje a cambiado de ${objeto[propiedad]} a ${valor}`)
    }
});

personalizar.nombre;
personalizar.nombre = "Phoenix";

personalizar.raza;
personalizar.raza = "Mago";