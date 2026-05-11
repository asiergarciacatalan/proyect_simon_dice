const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Definición de colores con sus respectivos números
const tcolores = {
  ROJO: 0,
  VERDE: 1,
  AZUL: 2,
  DORADO: 3,
  BLANCO: 4,
  MARRON: 5,
  NARANJA: 6
};

// Constantes imprescindibles para el juego
const MAX_COLORES_SEQ = 15;
const MAX_FACIL = 4;
const MAX_DIFICIL = 7;
const AYUDAS = 3;

// Función para convertir letra a número de color
function charToColor(letracolor) {
    const letra = letracolor.toLowerCase();

    if (letra === "r") return tcolores.ROJO;
    if (letra === "v") return tcolores.VERDE;
    if (letra === "a") return tcolores.AZUL;
    if (letra === "d") return tcolores.DORADO;
    if (letra === "b") return tcolores.BLANCO;
    if (letra === "m") return tcolores.MARRON;
    if (letra === "n") return tcolores.NARANJA;

    return -1;
}

// Función para convertir número de color a su nombre
function intToColor(numero) {
    if (numero === tcolores.ROJO) return "Rojo";
    if (numero === tcolores.VERDE) return "Verde";
    if (numero === tcolores.AZUL) return "Azul";
    if (numero === tcolores.DORADO) return "Dorado";
    if (numero === tcolores.BLANCO) return "Blanco";
    if (numero === tcolores.MARRON) return "Marron";
    if (numero === tcolores.NARANJA) return "Naranja";

    return "Desconocido";
}

// Función para generar una secuencia aleatoria de colores

function generarSecuencia(numcolores) {
    const sec = [];

    for (let i = 0; i < MAX_COLORES_SEQ; i++) {
        let aleatorio = Math.floor(Math.random() * numcolores);
        sec.push(aleatorio);
    }

    return sec;
}

// Función para mostrar la secuencia de colores al jugador

function mostrarSecuencia(secuenciaColores, numero) { 
    let resultado = "Secuencia: ";
    
    for (let i = 0; i < numero; i++) {
        let numeroColor = secuenciaColores[i];
        let nombreColor = intToColor(numeroColor);
        resultado += nombreColor;
        
        if (i < numero - 1) {
            resultado += " - ";
        }
    }
    
    return resultado;
}

// Función para comprobar si el color ingresado por el usuario es correcto

function comprobarcolor(secuencia, indice, color) {
    return secuencia[indice] === color;
}

// Función para hacer preguntas al usuario y esperar su respuesta
function pregunta(texto) {
    return new Promise(resolve => rl.question(texto, resolve));
}

// Función para utilizar una ayuda y mostrar el color correcto al jugador

function utilizarAyuda(secuenciacolores, indice, numAyudas) {
    if (numAyudas > 0) {
        let colorNumero = secuenciacolores[indice];
        let colorNombre = intToColor(colorNumero);
        console.log("El color es: " + colorNombre);
        console.log("Ayudas restantes: " + (numAyudas - 1));
        return numAyudas - 1;
    } else {
        console.log("No hay mas ayudas disponibles");
        return 0;
    }
}

// Función principal para comenzar el juego que maneja todo el flujo del processo del juego

async function comenzarjuego(nombre, rl, modo) {
    console.clear();
     
    let numcolores;
    let maxSecuencias;
    let textoModo;
    
    if (modo === 1) {
        numcolores = MAX_FACIL;
        maxSecuencias = 12;
        textoModo = "SENCILLO";
    } else {
        numcolores = MAX_DIFICIL;
        maxSecuencias = 15;
        textoModo = "DIFICIL";
    }
    
    console.log(`Modo: ${textoModo}`);
    console.log(`Hola ${nombre}, pulsa Enter para empezar.`);
    await pregunta("");
    
    const secuenciacolores = generarSecuencia(numcolores);
    let longitud = 3;
    let juegoactivo = true;
    let ayudas = AYUDAS;

    while (juegoactivo && longitud <= maxSecuencias) {
        console.clear();
        console.log(`Nivel ${longitud - 2}`);
        console.log(mostrarSecuencia(secuenciacolores, longitud));
        console.log("Memoriza y pulsa Enter...");
        await pregunta("");
        
        console.clear();
        console.log(`Ayudas disponibles: ${ayudas}`);
        
       
        if (modo === 1) {
            console.log(`Introduce ${longitud} colores (R, V, A, D, x=ayuda):`);
        } else {
            console.log(`Introduce ${longitud} colores (R, V, A, D, B, M, N, x=ayuda):`);
        }
       
        let correcto = true;
        let i = 0;
        
        while (i < longitud && correcto) {
            const respuesta = await pregunta(`Color ${i + 1}: `);
            
            if (respuesta === "x") {
                
                ayudas = utilizarAyuda(secuenciacolores, i, ayudas);
            } else {
                
                let colorusuario = charToColor(respuesta);
                
                
                if (colorusuario === -1) {
                    console.log("Color inválido. Intenta de nuevo.");
                } else if (!comprobarcolor(secuenciacolores, i, colorusuario)) {
                    
                    correcto = false;
                } else {
                    
                    i++;
                }
            }
        }

        console.clear();

        if (!correcto) {
            console.log("¡Incorrecto! Fin del juego.");
            juegoactivo = false;
        } else if (longitud >= maxSecuencias) {
            console.log("¡Felicidades! Has completado el juego.");
            juegoactivo = false;
        } else {
            console.log("¡Correcto!");
            console.log("Pasamos al siguiente nivel...");
            await pregunta("");
            longitud++;
        }
    }
}

// Función para mostrar el menú principal y obtener la opción del usuario

async function menu() {
    console.clear();
    
    console.log("\n===== SIMON DICE =====\n");
    console.log("Elija una opción para continuar:");
    console.log("0: Salir.");
    console.log("1: Jugar en modo sencillo.");
    console.log("2: Jugar en modo difícil.\n");
    
    const opcion = await pregunta("Opción: ");
    return opcion;
}

//

async function main() {
    console.clear();
    console.log("Bienvenido a Simón dice!\n");
    const nombre = await pregunta("¿Cuál es tu nombre? ");
    
    if (nombre === "") {
        console.log("Nombre no válido. Usando 'Jugador'...\n");
        nombre = "Jugador";
    }
    
    let continuar = true;
    
    while (continuar) {
        const opcion = await menu();
        
        if (opcion === "0") {
            console.log("¡Gracias por jugar! ¡Hasta pronto!\n");
            continuar = false;
        } else if (opcion === "1") {
            await comenzarjuego(nombre, rl, 1);
            await pregunta("Presiona Enter para volver al menú...");
        } else if (opcion === "2") {
            await comenzarjuego(nombre, rl, 2);
            await pregunta("Presiona Enter para volver al menú...");
        } else {
            console.log("Opción no válida. Intenta de nuevo.\n");
            await pregunta("Presiona Enter para continuar...");
        }
    }
    
    rl.close();
}

main().catch(console.error);