/*
 * Dado un listado de números, encuentra el SEGUNDO más grande
 */

const segundoMasGrande = (numeros) => {
    let max = -Infinity, segundoMax = -Infinity;
    for(let num of numeros) {
        if(num > max) {
            segundoMax = max;
            max = num;
        }else if(num > segundoMax && num < max){
            segundoMax = num;
        };
    };

    return segundoMax;
};

// PROBAMOS

console.log(segundoMasGrande([10,5,20,8,15]));