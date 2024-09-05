// Crea un diccionario con las siguientes claves y valores:
//  * "name": "Tu nombre"
//  * "age": "Tu edad"
//  * "birth_date": "Tu fecha de nacimiento"
//  * "programming_languages": ["Listado de lenguajes de programación"]
//  * Crea dos test:
//  * - Un primero que determine que existen todos los campos.
//  * - Un segundo que determine que los datos introducidos son correctos.

// CREAMOS EL DICCIONARIO

const persona = {
    name: "tu nombre",
    age: "tu edad",
    birth_date: "tu fecha de nacimiento",
    programming_languages: ["listado de lenguajes de programación"]
};

// TEST1: VERIFICAR SI EXISTEN TODOS LOS DATOS
function testCamposExistentes(obj) {
    const camposRequeridos = ["name", "age", "birth_date", "programming_languages"];
    return camposRequeridos.every(campos => obj.hasOwnProperty(campos));
};

// TEST2: VERIFICAR QUE LOS DATOS INTRODUCIDOS SON CORRECTOS
function testDatosCorrectos(obj) {
    return typeof obj.name === 'string' &&
            typeof obj.age === 'string' &&
            typeof obj.birth_date === 'string' &&
            Array.isArray(obj.programming_languages);
};

// COMPROBAMOS
console.log("Test de campos existentes: ", testCamposExistentes(persona));
console.log("Test de datos correctos: ", testDatosCorrectos(persona));