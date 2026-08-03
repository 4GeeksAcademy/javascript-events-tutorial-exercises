<!-- hide -->
<div align="center">

# Eventos de Javascript

[![certificado por 4Geeks Academy](https://img.shields.io/badge/certificado%20por-4Geeks%20Academy-2563eb)](https://4geeks.com/es/interactive-exercise/javascript-events-exercises-es)
[![hecho con LearnPack](https://img.shields.io/badge/hecho%20con-LearnPack-2563eb)](https://github.com/learnpack/learnpack)
[![abrir en Codespaces](https://img.shields.io/badge/abrir%20en-Codespaces-fb5a1f)](https://codespaces.new/?repo=4GeeksAcademy/javascript-events-tutorial-exercises)

![Imagen de portada del tutorial: el texto "Learn Javascript Events interactive" junto al logo hexagonal amarillo de JavaScript](https://raw.githubusercontent.com/4GeeksAcademy/javascript-events-tutorial-exercises/master/.learn/assets/js-events.jpeg)

</div>

*Estas instrucciones [también están disponibles en 🇺🇸 inglés](https://github.com/4GeeksAcademy/javascript-events-tutorial-exercises/blob/HEAD/README.md).*
<!-- endhide -->

Este tutorial interactivo enseña a manejar eventos con JavaScript puro a lo largo de 10 carpetas de ejercicios: una introducción y 9 retos para escribir código. Practicas el atributo `onclick`, `addEventListener`, el evento `load`, `event.target` y cómo cambiar el CSS desde JavaScript. Cada uno de los 9 retos trae su `index.html`, su `index.js`, instrucciones en español e inglés y un fichero con la solución de referencia. Duración estimada: 8 horas. Dificultad: principiante.

<!-- hide -->
## 📋 Sobre este tutorial

+ **Dificultad:** principiante — es el quinto paso de la ruta de desarrollo web de 4Geeks Academy, justo después de El DOM.

+ **Duración estimada:** 8 horas.

+ **Ejercicios:** 10 carpetas dentro de `exercises/` — `00-introduction` (solo lectura) y 9 ejercicios en los que escribes código.

+ **Tecnologías:** JavaScript puro, HTML y CSS. Sin frameworks, sin proceso de build y sin `npm install` dentro de los ejercicios.

+ **Corrección:** desactivada. `learn.json` tiene `"disableGrading": true` y ningún ejercicio incluye fichero de tests, así que nada califica tu respuesta de forma automática.

+ **Soluciones:** cada uno de los 9 ejercicios de código trae su solución de referencia: `solution.hide.js` en todos menos en el `01`, y `solution.hide.html` en el `01`, el `02`, el `05` y el `07`, que son los cuatro en los que cambia el HTML.

+ **Idiomas:** todos los ejercicios tienen `README.es.md` (español) y `README.md` (inglés).
<!-- endhide -->

## 🎯 ¿Qué vas a aprender?

Un evento es cualquier cosa que ocurre en la página y a la que tu código puede reaccionar: un clic, una tecla, la ventana que termina de cargar. Manejar eventos es justo lo que convierte un documento estático en una aplicación. Al terminar estos ejercicios vas a saber:

+ Asignar una función directamente desde el HTML con el atributo [`onclick`](https://developer.mozilla.org/es/docs/Web/API/Element/click_event), que es como conectan sus botones los ejercicios `01`, `02`, `03`, `04`, `07` y `07.1`.

+ Registrar funciones en tiempo de ejecución con [`addEventListener`](https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener), la técnica que se practica en los ejercicios `06` y `08`.

+ Esperar al evento [`load`](https://developer.mozilla.org/es/docs/Web/API/Window/load_event) antes de tocar la página, ya sea con `window.onload` o con el atributo `onload` de la etiqueta `<body>`.

+ Leer lo que escribió la persona usuaria con `input.value`, convertirlo con `parseInt` y devolver el resultado a otro input.

+ Cambiar el CSS desde JavaScript a través del objeto `element.style`, por ejemplo ocultando un `<div>` con `style.display = "none"`.

+ Guardar estado entre clics en una variable global y repintar la pantalla con `innerHTML` después de cada cambio.

+ Usar el [objeto del evento](https://developer.mozilla.org/es/docs/Web/API/Event/target) que el navegador le pasa a tu función e identificar con `event.target` el elemento exacto en el que se hizo clic.

## 👀 ¿Qué vas a construir?

`exercises/00-introduction` es una bienvenida corta, sin código. Las otras 9 carpetas son pequeñas webs que tienes que terminar:

+ **`01` Alert onclick** — la página tiene dos botones y la función `myClickFunction` ya muestra la alerta "Your first function!". Tú añades esa misma función como listener del `onclick` de `#button2`.

+ **`02` onclick Hello World** — aquí no hay nada conectado: declaras la función en `index.js` y la asignas a la propiedad `onclick` del input `#hello` para que al hacer clic aparezca "Hello World".

+ **`03` Sum Values** — completas `calculateSumListener` para que la suma de los inputs `#firstNumber` y `#secondNumber` se escriba en el `value` del input `#resultNumber`.

+ **`04` Hide onclick** — completas `myEventListener` para que, al pulsar el botón, desaparezca el div verde `#firstDiv` y siga visible el amarillo `#secondDiv`.

+ **`05` The load Event** — creas una función llamada `loadListener` que muestre la alerta "Loading finished..." y haces que el `<body>` la ejecute al cargar.

+ **`06` Add Listener With JS** — la página ya avisa cuando termina de cargar. Tú usas `addEventListener` sobre el botón `#theGreen` para que al pulsarlo salga la alerta "woohoo!".

+ **`07` Count onclick** — el contador solo sube. Añades un botón para restar y una función que baje en uno la variable global `counter` y refresque el titular `#screen`.

+ **`07.1` Change Turn on Click** — el turno alterna entre Mario y Juan. Amplías la función `turnChanger` para que entre en la rotación un tercer jugador, Josh.

+ **`08` Event Target** — hay un único listener de clic sobre el div `#container`, que contiene un botón, un enlace y una imagen. Tienes que mostrar en una alerta el `id` del elemento que se pulsó de verdad.

Cada ejercicio es una página real que puedes ejecutar y clicar mientras lees las instrucciones al lado:

![Captura animada del ejercicio 06 dentro del editor de LearnPack: las pestañas index.html e index.js con el botón de ejecutar a la izquierda, el botón verde renderizado en la vista previa debajo y las instrucciones del ejercicio a la derecha](https://raw.githubusercontent.com/4GeeksAcademy/javascript-events-tutorial-exercises/master/.learn/assets/a1mgdPD.gif)

## 🎓 ¿Qué necesitas saber antes de empezar?

No hace falta que sepas nada de eventos, pero los ejercicios dan por hecho que te manejas con:

+ **HTML básico** — etiquetas como `<button>`, `<input>` y `<div>`, el atributo `id` y la etiqueta `<script>`, porque todos los ejercicios seleccionan elementos por su id.

+ **CSS básico** — propiedades como `display` y `background`, ya que las vas a cambiar desde JavaScript y no desde una hoja de estilos.

+ **JavaScript básico** — variables, funciones, `if / else if / else`, concatenación de cadenas y `parseInt`.

+ **DOM básico** — `document.getElementById`, `document.querySelector`, `innerHTML`, `.value` y `.style`. Si eso te suena raro, haz antes [Aprende cómo manipular el DOM con JavaScript](https://4geeks.com/es/interactive-exercise/the-dom-exercises-es).

## ✅ ¿Cómo compruebas que tu respuesta es correcta?

Aquí no hay corrección automática. `learn.json` tiene `"disableGrading": true` y ninguna de las 10 carpetas incluye fichero de tests, así que la comprobación es visual:

+ **Ejecuta la página.** LearnPack muestra el `index.html` junto a las instrucciones, así que pulsas tu propio botón y ves si salta la alerta, si desaparece el div o si se mueve el contador.

+ **Fíjate en el resultado esperado.** Varios ejercicios piden un texto exacto: "Hello World" en el `02`, "Loading finished..." en el `05` y "woohoo!" en el `06`. Cópialos tal cual.

+ **Compara con la solución de referencia.** Ocho de los nueve ejercicios de código tienen un `solution.hide.js` en su carpeta, y el `01`, el `02`, el `05` y el `07` traen además un `solution.hide.html`, porque también cambia su HTML. El `01` se resuelve entero en el HTML, así que su única solución es el `solution.hide.html`.

> 💡 Como nada se corrige solo, la prueba de verdad es que la página se comporte como dice el enunciado. Léelo, ejecútalo y solo entonces mira la solución.

## 💡 ¿Qué errores conviene evitar?

Estas son las trampas que más tiempo cuestan en este tutorial concreto:

+ **Quitar el `window.` que trae el código inicial.** Ficheros como el del `03` y el `04` declaran su función como `window.calculateSumListener = function() {...}` y `window.myEventListener = function() {...}` a propósito: el HTML llama a esas funciones desde un atributo `onclick`, así que tienen que existir en el ámbito global.

+ **Concatenar en vez de sumar en el `03`.** Un input siempre devuelve texto, así que `"2" + "2"` da `"22"`. Pasa los dos valores por `parseInt` antes de sumarlos.

+ **Escribir el resultado con `innerHTML` en el `03`.** `#resultNumber` es un `<input>`, y un input muestra lo que hay en su propiedad `value`, no lo que va entre etiquetas.

+ **Quedarte solo en declarar la función en el `05`.** Crear `loadListener` es la mitad del trabajo: el listener tiene que quedar asignado al body, por eso la solución de referencia también edita el `index.html` y añade `onload="loadListener()"` a la etiqueta `<body>`.

+ **Llamar a la función en lugar de pasarla en el `06`.** `addEventListener("click", myClickFunction())` la ejecuta al momento y registra lo que devuelve; lo correcto es pasar la referencia, sin paréntesis.

+ **Cambiar el contador y olvidarte de la pantalla en el `07`.** El titular `#screen` no se actualiza solo: después de `counter--` hay que reescribir su `innerHTML`, igual que ya hace `increaseCounter`.

+ **Usar `else` en vez de `else if` en el `07.1`.** Con solo dos ramas Josh nunca llega a jugar. Necesitas encadenar la condición para que la rotación sea Mario, luego Juan, luego Josh y de vuelta a Mario.

+ **Mostrar el contenedor en el `08`.** El listener está puesto en `#container`, pero la respuesta es `event.target.id`, el elemento que se pulsó realmente: `btn1`, `anchor1` o `img1`.

## ❓ Preguntas frecuentes

### ¿Qué diferencia hay entre el atributo `onclick` y `addEventListener`?

Los dos ejecutan tu función cuando alguien hace clic. El atributo `onclick` vive en el HTML, se lee de un vistazo y admite una sola función: si asignas otra, sustituye a la anterior. `addEventListener` se llama desde JavaScript en tiempo de ejecución, permite varias funciones sobre el mismo elemento y el mismo evento, y se puede deshacer con `removeEventListener`. En este tutorial practicas los dos, primero el atributo y después el método.

### ¿Por qué hay que esperar al evento `load`?

Porque el navegador lee tu HTML de arriba abajo. Si tu script se ejecuta antes de que exista el elemento, `document.getElementById` devuelve `null` y todo se rompe. El ejercicio `05` presenta el evento `load`, y los ejercicios `06`, `07`, `07.1` y `08` ya traen su código de arranque dentro de `window.onload` por ese mismo motivo.

### ¿Qué es `event.target` y para qué sirve?

Cada función manejadora recibe un objeto de evento con información de lo que acaba de pasar, y `target` es el elemento que lo originó. Eso permite que un solo listener atienda a muchos elementos: en el ejercicio `08`, un único listener en el contenedor te dice si se pulsó el botón, el enlace o la imagen.

### ¿Estos ejercicios se corrigen solos?

No. La corrección está desactivada en `learn.json` y el repositorio no contiene ficheros de tests, así que nada puntúa tu código. Lo compruebas ejecutando la página y, si te atascas, comparando tu fichero con el `solution.hide.js` (o con el `solution.hide.html`, en el ejercicio `01`) que hay en cada carpeta de ejercicio.

### ¿Necesito instalar algo para hacer el tutorial?

No. Al abrir el repositorio en GitHub Codespaces obtienes un contenedor basado en la imagen de Node.js 22, con LearnPack y su plugin de DOM ya instalados por el devcontainer, y los ejercicios arrancan solos. Instalarlo en tu máquina solo compensa si prefieres trabajar sin conexión.

### ¿Es gratis y de quién es el código que escribo?

Acceder no cuesta nada y el JavaScript que escribas en los ejercicios es tuyo. El material del tutorial no está publicado como código abierto: el repositorio es público pero no incluye fichero LICENSE, así que todos los derechos sobre el contenido siguen siendo de sus autores.

<!-- hide -->
## 📚 Tutoriales relacionados

Este tutorial es un paso de una serie más larga sobre desarrollo web. El orden recomendado es:

1. [Introducción a HTML](https://4geeks.com/es/interactive-exercise/html-exercises-es)
2. [Introducción a CSS](https://4geeks.com/es/interactive-exercise/css-exercises-es)
3. [Introducción a JavaScript](https://4geeks.com/es/interactive-exercise/ejercicios-javascript-para-principiantes)
4. [Introducción a El DOM](https://4geeks.com/es/interactive-exercise/the-dom-exercises-es)
5. [Uso de eventos y El DOM](https://4geeks.com/es/interactive-exercise/javascript-events-exercises-es) ← estás aquí 🔥
6. [Programación Orientada a Objetos en JavaScript](https://4geeks.com/es/interactive-exercise/object-oriented-programing-in-javascript-es)

Dos buenas continuaciones al terminar: [Formularios en HTML](https://4geeks.com/es/interactive-exercise/forms-exercises-es) y [Domina JavaScript practicando](https://4geeks.com/es/interactive-exercise/master-javascript-exercises-es).

## 🚀 Cómo empezar

La vía más rápida es la instalación en un clic, sin configurar nada en tu equipo.

1. Abre el repositorio en [GitHub Codespaces](https://codespaces.new/?repo=4GeeksAcademy/javascript-events-tutorial-exercises) y espera a que se construya el contenedor.

2. LearnPack debería arrancar solo en cuanto VSCode esté listo. Si no lo hace, ejecútalo desde la terminal:

    ```bash
    learnpack start
    ```

3. Lee las instrucciones, edita el `index.js` (y el `index.html` cuando el ejercicio lo pida) y pulsa el botón de build para ver la página.

> 💡 Haz los ejercicios en orden: cada uno reutiliza la técnica del anterior, y el `07.1` practica la misma idea de estado global que el `07`.

## 💻 Instalación local

Si prefieres trabajar en tu propia máquina:

1. Instala Node.js 22, que es la versión que usan el contenedor y la CI del repositorio, y después LearnPack con su plugin de DOM:

    ```bash
    npm i -g @learnpack/learnpack@5.0.348
    learnpack plugins:install @learnpack/dom@1.1.7
    ```

2. Clona el repositorio y entra en la carpeta que se crea:

    ```bash
    git clone https://github.com/4GeeksAcademy/javascript-events-tutorial-exercises.git
    cd javascript-events-tutorial-exercises
    ```

3. Arranca el tutorial desde la raíz del proyecto:

    ```bash
    learnpack start
    ```

## 📚 Cómo están organizados los ejercicios

Cada ejercicio vive en su propia carpeta dentro de [`exercises/`](https://github.com/4GeeksAcademy/javascript-events-tutorial-exercises/tree/HEAD/exercises) y es una pequeña web independiente:

+ **`index.html`** — la página. Ya contiene los elementos a los que tienes que reaccionar y la etiqueta `<script>` que carga tu JavaScript.

+ **`index.js`** — el fichero que editas. Casi todos traen código inicial con un comentario que marca el sitio donde va tu código.

+ **`styles.css`** — solo en el ejercicio `04`, importado desde el HTML.

+ **`README.es.md`** y **`README.md`** — las instrucciones, en español e inglés.

+ **`solution.hide.js`** y **`solution.hide.html`** — la solución de referencia, que LearnPack mantiene oculta en el editor y que siempre puedes leer en el repositorio.

¿Has encontrado un fallo o algo desactualizado? Abre un issue en [learnpack/learnpack](https://github.com/learnpack/learnpack/issues/new).

## 🤝 Colaboradores

+ [Alejandro Sánchez (@alesanchezr)](https://github.com/alesanchezr) — código 💻, idea 🤔, tutorial 📖.

+ [Paolo (@plucodev)](https://github.com/plucodev) — reporte de bugs 🐛, código 💻, traducción 🌎.

Gracias también a [todas las demás personas que han contribuido](https://github.com/4GeeksAcademy/javascript-events-tutorial-exercises/graphs/contributors). Este proyecto sigue la especificación [all-contributors](https://github.com/kentcdodds/all-contributors) y toda contribución es bienvenida.
<!-- endhide -->
