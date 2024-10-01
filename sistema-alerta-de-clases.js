
// SISTEMA DE ALERTA DE CLASES

const cursos = [
    {nombre: "Matemáticas", hora:9},
    {nombre: "Lógica", hora:11},
    {nombre: "JavasCript", hora:13},
    {nombre: "Prácticas", hora:0}
];

function verificarCursoActual(){
    const ahora = new Date();
    const horaActual = ahora.getHours();

    const cursoActual = cursos.find(curso => curso.hora === horaActual);

    if(cursoActual){
        console.log(`Es hora de tu curso de ${cursoActual.nombre}.`);
    }else{
        console.log(`No tines ningún curso a esta hora.`)
    };
};

verificarCursoActual();