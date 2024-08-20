/*
 * Crea un programa que dibuje un cuadrado o un triángulo con asteriscos "*".
 * - Indicaremos el tamaño del lado y si la figura a dibujar es una u otra.
 * - EXTRA: ¿Eres capaz de dibujar más figuras?
 */

function dibujarFigura(tipo,tamaño,altura=tamaño){
    switch (tipo){

        case 'triangulo':
            for(let i = 1; i <= tamaño; i++){
                console.log('* '.repeat(i));
            };
        
            break;

        case 'cuadrado':
            for(let i = 0; i < tamaño; i++){
                console.log('* '.repeat(tamaño));
            };

            break;
        
            default:
                console.log('Tipo de figura no reconocido.');
    };
};

dibujarFigura('cuadrado', 5);
console.log('==========================')
dibujarFigura('triangulo', 5);