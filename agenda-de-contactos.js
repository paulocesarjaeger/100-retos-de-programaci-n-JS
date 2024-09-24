
// CREA UNA AGENDA DE CONTACTOS.

class Contacto{
    constructor(nombre,telefono,email){
        this.nombre = nombre;
        this.telefono = telefono;
        this.email = email;
    }

    getNombre(){
        return this.nombre;
    }

    setNombre(nombre){
        this.nombre = nombre;
    }

    getTelefono(){
        return this.telefono;
    }

    setTelefono(telefono){
        this.telefono = telefono;
    }

    getEmail(){
        return this.email;
    }

    setEmail(email){
        this.email = email;
    }
}

class Agenda{
    constructor(){
        this.contactos = [];
    }

    agregarContacto(contacto){
        this.contactos.push(contacto);
        console.log(`Contacto ${contacto.getNombre()} agregado.`);
    }

    eliminarContacto(nombre){
        this.contactos = this.contactos.filter(contacto => contacto.getNombre() !== nombre);
        console.log(`Contacto ${nombre} eliminado.`)
    }

    buscarContacto(nombre){
        return this.contactos.find(contacto => contacto.getNombre() === nombre);
    }

    mostrarContactos(){
        console.log(`Lista de contactos:`);
        this.contactos.forEach(contacto => {
            console.log(`Nombre: ${contacto.getNombre()}, Tteléfono: ${contacto.getTelefono()}, Email: ${contacto.getEmail()}`);
        });
    };
};

// COMPROBAMOS
const agenda = new Agenda();
const contacto1 = new Contacto(`Juan Pérez`, `123456789`, `juanperez@gmail.com`);
const contacto2 = new Contacto(`María López`,`987654321`,`marialopez@gmail.com`);

agenda.agregarContacto(contacto1);
agenda.agregarContacto(contacto2);
agenda.mostrarContactos();

const contactoBuscado = agenda.buscarContacto(`Juan Pérez`);
console.log(`Contacto encontrado: Nombre: ${contactoBuscado.getNombre()}, Teléfono: ${contactoBuscado.getTelefono()}, Email: ${contactoBuscado.getEmail()}`);

agenda.eliminarContacto(`María López`);
agenda.mostrarContactos();