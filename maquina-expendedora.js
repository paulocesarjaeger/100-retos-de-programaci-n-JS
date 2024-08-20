/*
 * Simula el funcionamiento de una máquina expendedora creando una operación
 * que reciba dinero (array de monedas) y un número que indique la selección
 * del producto.
 * - El programa retornará el nombre del producto y un array con el dinero
 *   de vuelta (con el menor número de monedas).
 * - Si el dinero es insuficiente o el número de producto no existe,
 *   deberá indicarse con un mensaje y retornar todas las monedas.
 * - Si no hay dinero de vuelta, el array se retornará vacío.
 * - Para que resulte más simple, trabajaremos en céntimos con monedas
 *   de 5, 10, 50, 100 y 200.
 * - Debemos controlar que las monedas enviadas estén dentro de las soportadas.
 */

class Coin {
    constructor(value){
        this.value = value;
    };
};

class Product {
    constructor(name,price){
        this.name = name;
        this.price = price;
    };
};

class VendingMachine {
    constructor(){
        this.products = [
            new Product("Agua",50),
            new Product("Refresco",100),
            new Product("Jugo",150),
            new Product("Café",200)
        ];
        this.supportedCoins = [5,10,50,100,200];
    };

    processTransaction(coins,productNumbre){
        let totalMoney = 0;

        // VERIFICAMOS QUE TODAS LAS MONEDAS SEAN SOPORTADAS
        for(let coin of coins){
            if(!this.supportedCoins.includes(coin.value)){
                return { message: "Moneda no soportada", change: coins};
            };
            totalMoney += coin.value;
        };

        // VERIFICAMOS QUE EL NUMERO DE PRODUCTO SEA VALIDO
        if(productNumbre < 0 || productNumbre >= this.products.length){
            return { message: "Producto no existe", change: coins};
        };

        const product = this.products[productNumbre];

        // VERIFICAR SI EL DINERO ES SUFICIENTE
        if(totalMoney < product.price) {
            return { message: "Dinero insufiiente", change: coins};
        };

        // CALCULAR CAMBIO

        let change = totalMoney - product.price;
        let changeArray = [];
        for(let coinValue of this.supportedCoins.reverse()){
            while(change >= coinValue){
                changeArray.push(new Coin(coinValue));
                change -= coinValue;
            };
        };

        return { product: product.name, change: changeArray};
    };
};

// COMPROBAMOS
const vendingMachine = new VendingMachine();
const result = vendingMachine.processTransaction([new Coin(100),new Coin(50),new Coin(10),new Coin(10)],5);
console.log(result);