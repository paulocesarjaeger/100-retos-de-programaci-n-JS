/*
 * Crea una única función (importante que sólo sea una) que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */

function calcularArea(tipo,b,h){
    let area = 0;

    switch(tipo){
        case "triángulo":
            area = b * h /2;
            break;
        
        case "cuadrado":
            area = b ** 2;
            break;
        
        case "rectángulo":
            area = b * h;
            break;
    }

    return area;
};

console.log(calcularArea("triángulo", 10, 8, 6));
console.log(calcularArea("cuadrado", 10, 8));
console.log(calcularArea("rectángulo", 10, 8, 5));