
//  CREA UN SISTEMA DE DESPACHO DE HAMBURGUESAS

class Hamburguesa{
    constructor(tipo,tiempo){
        this.tipo = tipo;
        this.tiempo = tiempo;
    }
}

const tipoHamburguesa = [
    new Hamburguesa('Simple', 1),
    new Hamburguesa('Con Queso', 2),
    new Hamburguesa('Con Bacon y Queso', 3)
];

function generarPedido(){
    const indice = Math.floor(Math.random() * tipoHamburguesa.length);
    return tipoHamburguesa[indice];
}

function despachorPedido(pedidos){
    pedidos.forEach((pedido, index) => {
        setTimeout(() => {
            console.log(`Pedido ${index + 1}: ${pedido.tipo} está listo después de ${pedido.tiempo} minuto (s).`);
        }, pedido.tiempo * 1000);
    });
}

// COMPROBAMOS

const pedidos = Array.from({length: 10}, generarPedido);
console.log(`Generando pedido...`);
despachorPedido(pedidos);