
// Escribir un programa en JavaScript que calcule la transpuesta de una matriz. (Remplazar las filas por las columnas)

function transposeMatrix(matrix){
    let transposed = [];
    for(let i = 0; i < matrix[0].length; i++){
        transposed[i] = [];
        for(let j = 0; j < matrix.length; j++){
            transposed[i][j] = matrix[j][i];
        };
    };
    return transposed;
};


let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

console.log(transposeMatrix(matrix));




