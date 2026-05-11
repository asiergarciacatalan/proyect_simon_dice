
---

# 🧠 **Simón Dice – Juego en Node.js**

Este proyecto implementa una versión del clásico juego **“Simón dice”** en la terminal utilizando **Node.js**.  
El jugador debe memorizar una secuencia creciente de colores y repetirla correctamente.  
Incluye dos modos de dificultad, sistema de ayudas y un menú interactivo.

---

## 📌 **Características principales**

- ✔️ Juego completamente interactivo por consola  
- ✔️ Dos modos disponibles:
  - **Modo sencillo** (4 colores)
  - **Modo difícil** (7 colores)
- ✔️ Secuencia generada aleatoriamente en cada partida  
- ✔️ Sistema de **3 ayudas** que revelan el color correcto  
- ✔️ Validación de entrada del usuario  
- ✔️ Menú principal con opciones para jugar o salir  
- ✔️ Código modular y fácil de entender  

---

## 🎮 **Cómo jugar**

1. Ejecuta el programa.
2. Introduce tu nombre.
3. Elige un modo de juego:
   - `1` → Modo sencillo  
   - `2` → Modo difícil  
4. Memoriza la secuencia de colores mostrada.
5. Pulsa Enter para ocultarla.
6. Introduce los colores uno por uno usando las letras:
   - **R** → Rojo  
   - **V** → Verde  
   - **A** → Azul  
   - **D** → Dorado  
   - **B** → Blanco *(solo modo difícil)*  
   - **M** → Marrón *(solo modo difícil)*  
   - **N** → Naranja *(solo modo difícil)*  
7. Si necesitas ayuda, escribe **x** para revelar el color correcto (máx. 3 veces).

Si fallas un color → **fin del juego**  
Si completas todos los niveles → **¡Victoria!**

---

## 🚀 **Cómo ejecutar el juego**

Asegúrate de tener instalado **Node.js**.

1. Clona o descarga el proyecto.
2. Abre una terminal en la carpeta del juego.
3. Ejecuta:

```bash
node simon.js
```

*(O el nombre del archivo que uses.)*

---

## 🧩 **Estructura del código**

El programa está dividido en funciones claras:

- **charToColor()** → Convierte letras a números de color  
- **intToColor()** → Convierte números a nombres de color  
- **generarSecuencia()** → Crea la secuencia aleatoria  
- **mostrarSecuencia()** → Muestra los colores al jugador  
- **comprobarcolor()** → Verifica si el color introducido es correcto  
- **utilizarAyuda()** → Gestiona las ayudas  
- **comenzarjuego()** → Controla toda la partida  
- **menu()** → Muestra el menú principal  
- **main()** → Punto de entrada del programa  

---

## 🛠️ **Requisitos**

- Node.js 14 o superior  
- Consola compatible con `console.clear()`  

---

## 📄 **Licencia**

Este proyecto puede ser utilizado libremente con fines educativos.

---

## 🙌 **Autor**

Proyecto desarrollado por **Asier** como práctica de programación en JavaScript y manejo de entrada por consola.

---