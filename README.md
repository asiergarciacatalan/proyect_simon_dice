# proyect_simon_dice

# 🎮 Simón Dice - Juego de Memoria

Un juego de consola interactivo basado en el clásico **Simón Dice**, donde debes memorizar y reproducir secuencias de colores cada vez más largas.

## 📋 Descripción

En este juego, el ordenador genera una secuencia de colores que se muestra brevemente. Tu objetivo es memorizar la secuencia y reproducirla correctamente usando las letras correspondientes. Con cada nivel que superes, la secuencia se hace más larga y el desafío aumenta.

## 🎯 Objetivo del Juego

- Memoriza la secuencia de colores mostrada
- Introduce los colores en el orden correcto
- Avanza a través de 12 niveles cada vez más difíciles
- ¡Gana si completas todos los niveles sin errores!

## 🕹️ Cómo Jugar

1. **Ejecuta el programa:**
   ```bash
   node simon_dice_corregido.js
   ```

2. **Ingresa tu nombre** cuando se te pida

3. **En cada nivel:**
   - Se mostrará una secuencia de colores
   - Tienes unos segundos para memorizarla
   - Presiona Enter cuando estés listo
   - Introduce los colores en el orden correcto usando:
     - **R** → Rojo
     - **V** → Verde
     - **A** → Azul
     - **D** → Dorado

4. **Si cometes un error:** Fin del juego (Game Over)

5. **Si completás todos los niveles:** ¡Felicidades! 🎉

## 🎨 Colores

| Letra | Color  | Número |
|-------|--------|--------|
| **R** | Rojo   | 0      |
| **V** | Verde  | 1      |
| **A** | Azul   | 2      |
| **D** | Dorado | 3      |

## 📊 Niveles

- **Nivel 1:** 3 colores
- **Nivel 2:** 4 colores
- **Nivel 3:** 5 colores
- ...
- **Nivel 10:** 12 colores (máximo)

La secuencia crece en 1 color con cada nivel superado.

## 🏗️ Estructura del Código

### Funciones Principales

#### `charToColor(color)`
Convierte una letra (r, v, a, d) al número correspondiente de color.

**Parámetros:**
- `color` (string): Letra del color

**Retorna:** Número del color o `null` si no es válido

#### `intToColor(numero)`
Convierte un número de color a su nombre en español.

**Parámetros:**
- `numero` (number): Número del color (0-3)

**Retorna:** Nombre del color (string)

#### `generarSecuencia(numcolores)`
Genera una secuencia aleatoria de colores.

**Parámetros:**
- `numcolores` (number): Cantidad de colores disponibles (4 en este caso)

**Retorna:** Array con 12 colores aleatorios

#### `mostrarSecuencia(secuenciaColores, numero)`
Formatea la secuencia para mostrarla en la consola.

**Parámetros:**
- `secuenciaColores` (array): Secuencia generada
- `numero` (number): Cuántos colores mostrar

**Retorna:** String formateado

#### `comprobarcolor(secuencia, indice, color)`
Verifica si el color introducido coincide con el de la secuencia.

**Parámetros:**
- `secuencia` (array): Secuencia del juego
- `indice` (number): Posición a verificar
- `color` (number): Número del color introducido

**Retorna:** `true` si coincide, `false` si no

#### `pregunta(texto)`
Muestra una pregunta en consola y retorna la respuesta como Promesa.

**Parámetros:**
- `texto` (string): Pregunta a mostrar

**Retorna:** Promise que se resuelve con la respuesta del usuario

#### `comenzarjuego(nombre, rl)`
Función principal que controla el flujo del juego.

**Parámetros:**
- `nombre` (string): Nombre del jugador
- `rl` (ReadlineInterface): Interfaz de lectura

**Comportamiento:**
1. Muestra bienvenida
2. Genera la secuencia
3. Itera por niveles (3-12 colores)
4. Muestra secuencia y espera memorización
5. Valida respuestas del jugador
6. Termina en victoria o derrota

## 📦 Requisitos

- **Node.js** (versión 12 o superior)
- Módulo `readline` (incluido en Node.js)

## 🚀 Instalación

1. Descarga el archivo `simon_dice_corregido.js`
2. Abre una terminal en la carpeta del archivo
3. Ejecuta:
   ```bash
   node simon_dice_corregido.js
   ```

## ⚙️ Configuración

Puedes modificar estas constantes en el código:

```javascript
const MAX_COLORES_SEQ = 12;  // Máximo de colores en la secuencia final
```

## 🐛 Bugs Corregidos en esta Versión

- ✅ Condición de bucle infinito arreglada
- ✅ Función `comprobarcolor()` simplificada y corregida
- ✅ Variables declaradas correctamente
- ✅ Todas las funciones retornan valores apropiados
- ✅ Parámetros pasados correctamente a las funciones

## 💡 Tips para Jugar

- Concéntrate en los colores mostrados
- Crea patrones mentales para recordar mejor
- Comienza lentamente y aumenta la velocidad conforme avances
- Practica para mejorar tu memoria

## 📝 Ejemplo de Ejecución

```
Bienvenido a Simón dice!
¿Cuál es tu nombre? Juan

Hola Juan, pulsa Enter para empezar.

Nivel 1
Secuencia: Rojo - Verde - Azul
Memoriza y pulsa Enter...

Introduce 3 colores (R, V, A, D):
Color 1: r
Color 2: v
Color 3: a

¡Correcto!
Pasamos al siguiente nivel...
```

## 📄 Licencia

Este proyecto es de código abierto y libre para usar y modificar.

---

**Diviértete jugando y mejora tu memoria con Simón Dice!** 🧠✨

