/*
 * Crea una función que ordene y retorne una matriz de números.
 * - La función recibirá un listado (por ejemplo [9, 8, 2, 4, 6]) y un parámetro
 *   adicional "Asc" o "Desc" para indicar si debe ordenarse de menor a mayor
 *   o de mayor a menor.
 */

function ordenarLista(lista,orden){

    if(orden === "Asc"){
        lista.sort((a,b) => a - b);
        console.log(lista);
    }else if(orden === "Desc"){
        lista.sort((a,b) => a - b).reverse();
        console.log(lista);
    }else{
        console.log("La opción no existe. Opción1: Asc, Opción 2: Desc");
    };
};

// COMPROBAMOS
ordenarLista([9, 8, 2, 4, 6],"Asc");
ordenarLista([9, 8, 2, 4, 6],"Desc");