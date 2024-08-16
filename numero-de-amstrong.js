/*
 * Escribe una función que calcule si un número dado es un número de Armstrong
 * (o también llamado narcisista).
 * Si no conoces qué es un número de Armstrong, debes buscar información
 * al respecto.
 */

function numeroAmstrong(num){

    // CONVERTIMOS EL NUMERO A STRING PARA PODER RECORRERLO
    let digitos = num.toString();
    let numeroDeDigitos = digitos.length;
    let suma = 0;

    for(let digito of digitos){
        // ELEVAMOS LA BASE AL EXPONENTE
        suma += Math.pow(parseInt(digito), numeroDeDigitos);
    };
    return suma === num;
};


for (let i = 100; i < 10000; i++){
    if( numeroAmstrong(i)){
        console.log(i);
    };

};