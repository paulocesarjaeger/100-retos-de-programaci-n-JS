/*
 * Escribe un programa que sea capaz de generar contraseñas de forma aleatoria.
 * Podrás configurar generar contraseñas con los siguientes parámetros:
 * - Longitud: Entre 8 y 16.
 * - Con o sin letras mayúsculas.
 * - Con o sin números.
 * - Con o sin símbolos.
 * (Pudiendo combinar todos estos parámetros entre ellos)
 */

function generarContrasena(longitud, mayusculas, numeros, simbolos){
    return new Promise((resolve,reject) =>{
        if(longitud < 8){
            reject(new Error('La contraseña debe tener al menos 8 caracteres.'));
            return;
        }

        const letrasMinuscular = 'abcdefghijklmnopqrstuvwxyz';
        const letrasMayusculas = letrasMinuscular.toUpperCase();
        const digitos = '1234567890';
        const simbolosEspeciales = '!@#$%^&*()_+{}[]|:;<>,.?~';

        let caracteres = letrasMinuscular;
        if(mayusculas) caracteres += letrasMayusculas;
        if(numeros) caracteres += digitos;
        if(simbolos) caracteres += simbolosEspeciales;

        let contrasena = "";
        for (let i = 0; i < longitud; i++){
            const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
            contrasena += caracteres.charAt(indiceAleatorio);
        }

        resolve(contrasena);
    });
}

// COMPROBAMOS

const longitud = 7;
const incluirMayusculas = true;
const incluirNumeros = true;
const incluirSimbolos = true;

generarContrasena(longitud, incluirMayusculas, incluirNumeros, incluirSimbolos)
    .then(constrasena => console.log(constrasena))
    .catch(error => console.error(error.message));

