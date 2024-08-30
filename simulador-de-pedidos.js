// Crea un simulador de pedidos de un restaurante utilizando callbacks.
//  * Estará formado por una función que procesa pedidos.
//  * Debe aceptar el nombre del plato, una callback de confirmación, una
//  * de listo y otra de entrega.
//  * - Debe imprimir un confirmación cuando empiece el procesamiento.
//  * - Debe simular un tiempo aleatorio entre 1 a 10 segundos entre
//  *   procesos.
//  * - Debe invocar a cada callback siguiendo un orden de procesado.
//  * - Debe notificar que el plato está listo o ha sido entregado.

function procesarPedido(plato, confirmar, listo, entregar){
    console.log(`Procesando pedido para ${plato}`);

    let tiempoAleatorio = () => Math.floor(Math.random() * 10000) + 1000;

    setTimeout(() => {
        confirmar(plato);

        setTimeout(() => {
            listo(plato);

            setTimeout(() => {
                entregar(plato);
            }, tiempoAleatorio);
        }, tiempoAleatorio);
    }, tiempoAleatorio);
};

// CALLBACKS

function confirmarPedido(plato){
    console.log(`Pedido confirmado: ${plato}`);
};

function platoListo(plato){
    console.log(`Plato listo: ${plato}`);
};

function entregarPedido(plato){
    console.log(`Pedido entregado: ${plato}`);
};


procesarPedido(`Pizza Margherita`, confirmarPedido, platoListo, entregarPedido);