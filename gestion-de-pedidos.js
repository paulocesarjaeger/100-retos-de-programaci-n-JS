// Crea un pequeño sistema de gestión del estado de pedidos.
// Implementa una clase que defina un pedido con las siguientes características:
// - El pedido tiene un identificador y un estado.
// - El estado son estos valores: PENDIENTE, ENVIADO, ENTREGADO y CANCELADO.
// - Implementa las funciones que sirvan para modificar el estado:
//   - Pedido enviado
//   - Pedido cancelado
//   - Pedido entregado
//   (Establece una lógica, por ejemplo, no se puede entregar si no se ha enviado, etc...)
// - Implementa una función para mostrar un texto descriptivo según el estado actual.
// - Crea diferentes pedidos y muestra cómo se interactúa con ellos. 


class Pedido{
    constructor(id){
        this.id = id;
        this.estado = `Pendiente`;
    };

    async enviar(){
        return new Promise ((resolve,reject) =>{
            setTimeout(() =>{
                if(this.estado === `Pendiente`){
                    this.estado = `Enviado`;
                    resolve(`El pedido con ID: ${this.id} ha sido enviado`);
                }else{
                    reject(`El pedido con ID: ${this.id} no se puede enviar porque su estado actual es ${this.estado}`);
                }
            }, 2000);
        });
    };

    async entregar(){
        return new Promise((resolve,reject) =>{
            setTimeout(() =>{
                if(this.estado === `Enviado`){
                    this.estado = `Entregado`;
                    resolve(`El pedido con ID: ${this.id} ha sido entregado`);
                }else{
                    reject(`El pedido con ID: ${this.id} no se puede entregar porque su estado actual es ${this.estado}`);
                };
            }, 2000);
        });
    };

    async cancelar(){
        return new Promise((resolve,reject) =>{
            setTimeout(() =>{
                if(this.estado === `Pendiente` || this.estado === `Enviado`){
                    this.estado = `Cancelado`;
                    resolve(`El pedido con ID: ${this.id} ha sido cancelado`);
                }else{
                    reject(`El pedido con ID: ${this.id} no se puede cancelar porque su estado actual es ${this.estado}`);
                };
            }, 2000);
        });
    };
};

// CREAMOS Y GESTIONAMOS PEDIDOS

(async () =>{
    const pedido1 = new Pedido(1);

    try{
        let mensaje = await pedido1.enviar();
        console.log(mensaje);
        mensaje = await pedido1.entregar();
        console.log(mensaje);
    }
    catch (error) {
        console.error(error);
    }

    const pedido2 = new Pedido(2);

    try{
        const mensaje = await pedido2.cancelar();
        console.log(mensaje);
    }catch (error) {
        console.error(error)
    }
})();