
//  CREA UN SISTEMA DE INVENTARIOS PARA UNA FRUTERIA

// ARRAY PARA ALMACENAR LOS PRODUCTOS
let inventario = [];

function agregarProducto(prooducto){
    inventario.push(prooducto);
}

function buscarProducto(nombre){
    const prooducto = inventario.find(item => item.nombre === nombre);
    return prooducto ? prooducto : 'Producto no encontrado';
}

function mostrarInventario(){
    console.log(`Inventario:`, inventario);
}

agregarProducto({nombre: `Manzana`, precio: 0.5, cantidad: 100});
agregarProducto({nombre: `Banana`, precio: 0.3, cantidad: 150});
agregarProducto({nombre: `Naranja`, precio: 0.7, cantidad: 80});


console.log(buscarProducto(`Banana`));
console.log(buscarProducto(`Pera`));

mostrarInventario();