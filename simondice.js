const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Colores representados como números
const tcolores = {
  ROJO: 0,
  VERDE: 1,
  AZUL: 2,
  DORADO: 3

};


const MAX_COLORES = 12;

// Convierte letra a número de color
function charToColor(color) {
    letra = color.toLowerCase();

    if (color === "r") return tcolores.ROJO;
    if (color === "v") return tcolores.VERDE;
    if (color === "a") return tcolores.AZUL;
    if (color === "d") return tcolores.DORADO;

    return null;
}

// Convierte número a nombre
function intToColor(numero) {
    if (numero === tcolores.ROJO) return "Rojo";
    if (numero === tcolores.VERDE) return "Verde";
    if (numero === tcolores.AZUL) return "Azul";
    if (numero === tcolores.DORADO) return "Dorado";
}

// Genera secuencia completa

function generarSecuencia(numcolores) {
    const sec = [];

    for (let i = 0; i < MAX_COLORES; i++) {
        const aleatorio = parseInt(Math.random() * numcolores);
        sec.push(aleatorio);
    }

    return sec;
}
function mostrarSecuencia ( secuenciaColores , numero ) { 
    let texto = "Secuencia: ";
    for(let i=0;i<numero;i++){
        texto += intToColor(secuenciaColores[i]);
        if (i < numero - 1) texto += " - ";
     }
    return texto;

}
function comprobarcolor (secuencia,indice,color){
    for(let i=0;i<secuencia.length;i++){
        if(secuencia[indice]==color){
            return true
        } else{
            return false
         }
    }
}

// Preguntar con promesa
function pregunta(texto) {
    return new Promise(resolve => rl.question(texto, resolve));
}

async function comenzarjuego(nombre, rl) {
    console.log(`Hola ${nombre}, pulsa Enter para empezar.`);
    await pregunta("");
    
    const numcolores = 4;
    const secuenciacolores = generarSecuencia(numcolores);
    let longitud = 3;

    while (true || longitud <= MAX_COLORES) {
        console.clear();
        console.log(`Nivel ${longitud - 2}`);
        console.log(mostrarSecuencia(secuenciacolores,longitud));
        console.log("Memoriza y pulsa Enter...");
        await pregunta("");
        console.clear();
        console.log(`Introduce ${longitud} colores (R, V, A, D):`);
       
        let correcto = true;
        for(let i=0;i<longitud;i++){

            const respuesta = await pregunta(`Color ${i + 1}: `);
            comprobarcolor(secuenciacolores,longitud,respuesta);
            const color = charToColor(respuesta);
            
            if (!comprobarcolor(secuenciacolores,i,color)) {

                correcto = false;
                break;
            }
        }
        if (!correcto) {

            console.log("¡Incorrecto! Fin del juego.");
            break;
        }
        console.log("¡Correcto!");

        console.log("Pasamos al siguiente nivel...");

        await pregunta("");
        if (longitud = MAX_COLORES) {
            console.log("¡Felicidades! Has completado el juego.");
            break;
            
        }

        longitud++;

    }   
}
// Inicio del programa
rl.question("Bienvenido a Simón dice!\n¿Cuál es tu nombre? ", nombre => {
    comenzarjuego(nombre);
});