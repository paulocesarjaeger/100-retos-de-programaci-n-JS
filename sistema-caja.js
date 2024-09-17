
// CREA UN SISTEMA PARA EL CONTROL DE UNA CAJA REGISTRADORA

class Producto{
    constructor(nombre,precio){
        this.nombre = nombre;
        this.precio = precio;
    }
}

class CajaRegistradora{
    constructor(){
        this.productos = {};
        this.historialVenta = [];
    }

    anadirProducto(nombre,precio){
        this.productos[nombre] = new Producto(nombre,precio);
    }

    calcularCuenta(compras){
        let total = 0;
        for(let item of compras){
            const producto = this.productos[item.nombre];
            const cantidad = item.cantidad;
            if(producto){
                total += producto.precio * cantidad;
            }else{
                console.log(`El producto no está disponible.`)
            }
        }
        return total;
    }

    registrarVenta(compras){
        const totalCuenta = this.calcularCuenta(compras);
        this.historialVenta.push({
            fecha: new Date(),
            compras: compras,
            total: totalCuenta
        });
        return totalCuenta;
    }


    abrirCaja(){
        this.historialVenta = [];
        console.log(`Caja abierta.`);
    }

    cerrarCaja(){
        let totalDia = 0;
        for(let venta of this.historialVenta){
            totalDia += venta.total;
        }
        console.log(`Total cobrado en el día: €${totalDia.toFixed(2)}`);
        console.log("Historial de ventas:",this.historialVenta);
    }
}


// COMPROBAMOS
const caja = new CajaRegistradora();
caja.abrirCaja();

caja.anadirProducto("manzana", 0.5)//PRECIO POR KILO
caja.anadirProducto("pan", 1.2)//PRECIO POR UNIDAD
caja.anadirProducto("leche", 0.9)//PRECIO POR UNIDAD
caja.anadirProducto("huevos", 2.1)//PRECIO POR DOCENA
caja.anadirProducto("queso", 3.5)//PRECIO POR KILO

const compraCliente1 = [
    {nombre: "manzana", cantidad: 0.5},
    {nombre: "pan", cantidad: 2},
    {nombre: "leche", cantidad: 1}
];
console.log(`El total de la cuenta es: €${caja.registrarVenta(compraCliente1).toFixed(2)}`);

const compraCliente2 = [
    {nombre: "queso", cantidad: 1},
    {nombre: "huevos", cantidad: 1}
];
console.log(`El total de la cuenta es: €${caja.registrarVenta(compraCliente2).toFixed(2)}`);

caja.cerrarCaja();
