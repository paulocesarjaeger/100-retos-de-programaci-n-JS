// CREA UNA BALANZA QUE TE INDIQUE EL INDICE DE MASA CORPORAL SEGUN TU PESO Y ALTURA Y TE INDIQUE EN QUE RANGO TE ENCUENTRAS.

class Balanza{
    constructor(peso,altura){
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC(){
        return this.peso / (this.altura * this.altura);
    };

    calificarIMC(){
        const imc = this.calcularIMC();
        const categorias = [
            {limite: 18.5, clalsifiacion: "Bajo Peso"},
            {limite: 24.9, clalsifiacion: "Peso Normal"},
            {limite: 29.9, clalsifiacion: "Sobrepeso"},
            {limite: Infinity, clalsifiacion: "Obesidad"}
        ];

        return categorias.reduce((acc,categoria) => {
            return imc <= categoria.limite ? acc || categoria.clalsifiacion : acc;
        },null);
    };
};

let balanza = new Balanza(90,1.78);
let imc = balanza.calcularIMC();
let clalsifiacion = balanza.calificarIMC();

console.log(`Tu IMC es ${imc.toFixed(2)} y tu clasificaión es: ${clalsifiacion}`);