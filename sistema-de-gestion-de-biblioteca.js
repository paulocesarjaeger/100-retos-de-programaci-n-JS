
// Vas a crear un sistema básico para gestionar una biblioteca. Este sistema permitirá agregar, eliminar y buscar libros, así como gestionar los préstamos de los mismos.

class Libro{
    constructor(titulo,autor,isbn){
        this.titulo = titulo;
        this.autor = autor;
        this.isbn = isbn;
        this.disponible = true;
    };

    prestar(){
        if(this.disponible){
            this.disponible = false;
            console.log(`El libro "${this.titulo}" ha sido prestado.`);
        }else{
            console.log(`El libro "${this.titulo}" no está disponible.`)
        };
    };

    devolver(){
        if(!this.disponible){
            this.disponible = true;
            console.log(`El libro "${this.titulo}" ha sido devuelto.`);
        }else{
            console.log(`El libro "${this.titulo}" ya estaba disponible.`);
        };
    };
};


class Biblioteca{
    constructor(){
        this.libros = [];
    };

    agregarLibro(libro){
        this.libros.push(libro);
        console.log(`El libro "${libro.titulo}" ha sido agregado a la biblioteca`);
    };

    eliminarLibro(isbn){
        this.libros = this.libros.filter(libro => libro.isbn !== isbn);
        console.log(`El libro con ISBN ${isbn} ha sido eliminado de la biblioteca`);
    }

    buscarLibro(titulo){
        const libro = this.libros.find(libro => libro.titulo.toLowerCase() === titulo.toLowerCase());
        if(libro){
            return libro;
        }else{
            console.log(`No se encontró un libro con el título ${titulo}.`);
            return null;
        };
    };

    listarLibros(){
        if(this.libros.length === 0){
            console.log(`No hay libros en la biblioteca.`)
        }else{
            this.libros.forEach(libro => {
                const estado = libro.disponible ? 'disponible' : 'no disponible';
                console.log(`Título: ${libro.titulo}, Autor: ${libro.autor}, ISBN: ${libro.isbn}, Estado: ${estado}`);
            });
        };
    };
};

// COMPROBAMOS

const biblioteca = new Biblioteca();
const libro1 =new Libro('1984','Geroge Orwell','1234567890');
const libro2 = new Libro('Cien años de soledad', 'Gabriel García Márquez','0987654321');

biblioteca.agregarLibro(libro1);
biblioteca.agregarLibro(libro2);

biblioteca.listarLibros();

const libroBuscado = biblioteca.buscarLibro('1984');
if(libroBuscado) {
    libroBuscado.prestar()
};

biblioteca.listarLibros();