/*Define una clase CuentaBancaria con propiedades titular y saldo.

- Añade métodos mostrar saldo, depositar y retirar para modificar el saldo.
- Crea instancias de la clase y realiza varias operaciones de depósito y retiro, mostrando el saldo después de cada operación. */


class CuentaBancaria{
    constructor(titular, saldo){
        this.titular = titular;
        this.saldo = saldo;
    }

    mostrarSaldo(){
        console.log(`Titular: ${this.titular}, Saldo: ${this.saldo}`);
    }

    depositar(monto){
        let nuevoSaldo = this.saldo + monto;
        this.saldo = nuevoSaldo;
        // this.saldo += monto; TAMBIE PUEDES REMPLAZAR LAS DOS LINEAS DE ARRIBA POR ESTA
        console.log(`Titular: ${this.titular}, Saldo: ${this.saldo}`);
    }

    retirar(monto){
        let nuevoSaldo = this.saldo - monto;
        this.saldo = nuevoSaldo;
        // this.saldo -= monto; TAMBIE PUEDES REMPLAZAR LAS DOS LINEAS DE ARRIBA POR ESTA
        console.log(`Titular: ${this.titular}, Saldo: ${this.saldo}`);
    }
};

// PROBAMOS

let cuenta = new CuentaBancaria("Fernando Piñones", 1000);

cuenta.mostrarSaldo();
cuenta.depositar(1250);
cuenta.retirar(350);
cuenta.retirar(1000);
cuenta.depositar(350);
