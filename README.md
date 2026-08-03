<!-- hide -->
<div align="center">

# Javascript Events

[![certified by 4Geeks Academy](https://img.shields.io/badge/certified%20by-4Geeks%20Academy-2563eb)](https://4geeks.com/en/interactive-exercise/javascript-events-exercises)
[![built with LearnPack](https://img.shields.io/badge/built%20with-LearnPack-2563eb)](https://github.com/learnpack/learnpack)
[![open in Codespaces](https://img.shields.io/badge/open%20in-Codespaces-fb5a1f)](https://codespaces.new/?repo=4GeeksAcademy/javascript-events-tutorial-exercises)

![Cover image of the tutorial: the text "Learn Javascript Events interactive" next to the yellow JavaScript hexagon logo](https://raw.githubusercontent.com/4GeeksAcademy/javascript-events-tutorial-exercises/master/.learn/assets/js-events.jpeg)

</div>

*These instructions are [also available in 🇪🇸 Spanish](https://github.com/4GeeksAcademy/javascript-events-tutorial-exercises/blob/HEAD/README.es.md).*
<!-- endhide -->

This interactive tutorial covers event handling in vanilla JavaScript across 10 exercise folders: one introduction plus 9 hands-on challenges. You practise the `onclick` attribute, `addEventListener`, the `load` event, `event.target`, and changing CSS from JavaScript. Each of the 9 challenges ships an `index.html`, an `index.js`, instructions in English and Spanish, and a reference solution file. Estimated time: 8 hours. Difficulty: beginner.

<!-- hide -->
## 📋 About this tutorial

+ **Difficulty:** beginner — it is the fifth step of the 4Geeks Academy web development track, right after The DOM.

+ **Estimated duration:** 8 hours.

+ **Exercises:** 10 folders inside `exercises/` — `00-introduction` (reading only) plus 9 exercises where you write code.

+ **Technologies:** vanilla JavaScript, HTML and CSS. No frameworks, no build step, no `npm install` inside the exercises.

+ **Grading:** disabled. `learn.json` sets `"disableGrading": true` and no exercise contains a test file, so nothing marks your answer automatically.

+ **Solutions:** each of the 9 coding exercises ships a reference solution: `solution.hide.js` in all of them except `01`, and `solution.hide.html` in `01`, `02`, `05` and `07`, the four where the HTML changes.

+ **Languages:** every exercise has both `README.md` (English) and `README.es.md` (Spanish).
<!-- endhide -->

## 🎯 What will you learn?

An event is anything that happens on the page and that your code can react to: a click, a key press, the window finishing its load. Handling events is what turns a static document into an application. By the end of these exercises you will be able to:

+ Attach a handler straight from the HTML with the [`onclick`](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event) attribute, which is how exercises `01`, `02`, `03`, `04`, `07` and `07.1` wire their buttons.

+ Register handlers at runtime with [`addEventListener`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener), the technique used in exercises `06` and `08`.

+ Wait for the [`load`](https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event) event before touching the page, either with `window.onload` or with the `onload` attribute of the `<body>` tag.

+ Read what the user typed with `input.value`, convert it with `parseInt`, and write the result back into another input.

+ Change CSS from JavaScript through the `element.style` object, for instance hiding a `<div>` with `style.display = "none"`.

+ Keep state between clicks in a global variable and repaint the screen with `innerHTML` after every change.

+ Use the [event object](https://developer.mozilla.org/en-US/docs/Web/API/Event/target) that the browser passes to your handler, and identify the exact element the user clicked with `event.target`.

## 👀 What will you build?

`exercises/00-introduction` is a short welcome page with no code. The other 9 folders are small websites you have to finish:

+ **`01` Alert onclick** — the page has two buttons and `myClickFunction` already alerts "Your first function!". You add the same function as the `onclick` listener of `#button2`.

+ **`02` onclick Hello World** — nothing is wired yet: you declare the listener function in `index.js` and set it as the `onclick` property of the `#hello` input so a click alerts "Hello World".

+ **`03` Sum Values** — complete `calculateSumListener` so the sum of the `#firstNumber` and `#secondNumber` inputs is written into the `value` of the `#resultNumber` input.

+ **`04` Hide onclick** — complete `myEventListener` so clicking the button hides the green `#firstDiv` while the yellow `#secondDiv` stays visible.

+ **`05` The load Event** — create a function called `loadListener` that alerts "Loading finished..." and make the `<body>` run it on load.

+ **`06` Add Listener With JS** — the page already alerts when it finishes loading. You use `addEventListener` on the `#theGreen` button so clicking it alerts "woohoo!".

+ **`07` Count onclick** — the counter only goes up. You add a Decrease button and a handler that subtracts one from the global `counter` and refreshes the `#screen` heading.

+ **`07.1` Change Turn on Click** — the turn switches between Mario and Juan. You extend the `turnChanger` function so a third player, Josh, joins the rotation.

+ **`08` Event Target** — a single click listener sits on the `#container` div, which holds a button, a link and an image. You alert the `id` of the element that was actually clicked.

Each exercise is a real page you can run and click on while you read the instructions next to it:

![Animated capture of exercise 06 running inside the LearnPack editor: the index.html and index.js tabs with the run button on the left, the green button rendered in the preview underneath, and the exercise instructions on the right](https://raw.githubusercontent.com/4GeeksAcademy/javascript-events-tutorial-exercises/master/.learn/assets/a1mgdPD.gif)

## 🎓 What do you need before starting?

No previous knowledge of events is required, but the exercises assume you are comfortable with:

+ **Basic HTML** — tags such as `<button>`, `<input>` and `<div>`, the `id` attribute, and the `<script>` tag, because every exercise selects elements by id.

+ **Basic CSS** — properties like `display` and `background`, since you will change them from JavaScript instead of from a stylesheet.

+ **Basic JavaScript** — variables, functions, `if / else if / else`, string concatenation and `parseInt`.

+ **Basic DOM** — `document.getElementById`, `document.querySelector`, `innerHTML`, `.value` and `.style`. If those look unfamiliar, do [Learn how to manipulate The DOM with JS](https://4geeks.com/en/interactive-exercise/the-dom-exercises) first.

## ✅ How do you check your answers?

There is no autograder here. `learn.json` sets `"disableGrading": true` and none of the 10 folders contains a test file, so the feedback loop is visual instead of automatic:

+ **Run the page.** LearnPack renders `index.html` next to the instructions, so you click your own button and see whether the alert fires, the div disappears or the counter moves.

+ **Read the expected result carefully.** Several exercises ask for an exact string: "Hello World" in `02`, "Loading finished..." in `05`, "woohoo!" in `06`. Match them literally.

+ **Compare with the reference solution.** Eight of the nine coding exercises have a `solution.hide.js` file in their folder, and `01`, `02`, `05` and `07` ship a `solution.hide.html` too, because their HTML changes as well. Exercise `01` is solved entirely in the HTML, so `solution.hide.html` is its only solution file.

> 💡 Because nothing is checked automatically, the honest test is whether the page behaves as described. Read the instructions, run it, and only then peek at the solution.

## 💡 What mistakes should you avoid?

These are the traps that cost beginners the most time in this specific tutorial:

+ **Dropping the `window.` prefix that the starter code uses.** Files like `03` and `04` declare their handler as `window.calculateSumListener = function() {...}` and `window.myEventListener = function() {...}` on purpose: the HTML calls those functions from an inline `onclick` attribute, so they must live in the global scope.

+ **Concatenating instead of adding in `03`.** An input always returns a string, so `"2" + "2"` gives `"22"`. Wrap both values in `parseInt` before adding them.

+ **Writing the result with `innerHTML` in `03`.** `#resultNumber` is an `<input>`, and an input shows what is in its `value` property, not what is between its tags.

+ **Only declaring the function in `05`.** Creating `loadListener` is half the job: the listener has to be attached to the body, which is why the reference solution also edits `index.html` and adds `onload="loadListener()"` to the `<body>` tag.

+ **Calling the handler instead of passing it in `06`.** `addEventListener("click", myClickFunction())` runs the function immediately and registers its return value; the correct form passes the reference, without parentheses.

+ **Changing the counter but not the screen in `07`.** The `#screen` heading does not update by itself: after `counter--` you have to rewrite its `innerHTML`, exactly as `increaseCounter` already does.

+ **Using `else` instead of `else if` in `07.1`.** With only two branches Josh never gets a turn. You need a chained condition so the rotation goes Mario, then Juan, then Josh, and back to Mario.

+ **Alerting the container in `08`.** The listener is attached to `#container`, but the answer is `event.target.id`, the element that was actually clicked: `btn1`, `anchor1` or `img1`.

## ❓ Frequently asked questions

### What is the difference between the `onclick` attribute and `addEventListener`?

Both run your function when the user clicks. The `onclick` attribute lives in the HTML, is easy to read, and holds a single handler: assigning a second one replaces the first. `addEventListener` is called from JavaScript at runtime, accepts many handlers on the same element and the same event, and can be undone with `removeEventListener`. This tutorial makes you practise both, first the attribute and then the method.

### Why do I need to wait for the `load` event?

Because the browser reads your HTML from top to bottom. If your script runs before the element exists, `document.getElementById` returns `null` and your code breaks. Exercise `05` introduces the `load` event and exercises `06`, `07`, `07.1` and `08` already put their setup code inside `window.onload` for the same reason.

### What is `event.target` and why is it useful?

Every handler receives an event object with information about what just happened, and `target` is the element that originated it. That lets one listener serve many elements: in exercise `08` a single listener on the container tells you whether the user clicked the button, the link or the image.

### Do these exercises correct themselves automatically?

No. Grading is disabled in `learn.json` and the repository contains no test files, so nothing scores your code. You verify by running the page and, if you get stuck, by comparing your file with the `solution.hide.js` (or the `solution.hide.html`, in exercise `01`) shipped in each exercise folder.

### Do I need to install anything to run the tutorial?

No. Opening the repository in GitHub Codespaces gives you a ready container based on the Node.js 22 image, with LearnPack and its DOM plugin installed by the devcontainer, and the exercises start on their own. Installing locally only makes sense if you prefer to work offline.

### Is this tutorial free, and who owns the code I write?

Access costs nothing and the JavaScript you write in the exercises is yours. The tutorial material itself is not published as open source: the repository is public but ships no LICENSE file, so all rights over the content remain with its authors.

<!-- hide -->
## 📚 Related tutorials

This tutorial is one step of a longer web development series. The recommended order is:

1. [Introduction to HTML](https://4geeks.com/en/interactive-exercise/html-exercises)
2. [Introduction to CSS](https://4geeks.com/en/interactive-exercise/css-exercises)
3. [Introduction to JavaScript](https://4geeks.com/en/interactive-exercise/javascript-beginner-exercises)
4. [Introduction to The DOM](https://4geeks.com/en/interactive-exercise/the-dom-exercises)
5. [Using events and The DOM](https://4geeks.com/en/interactive-exercise/javascript-events-exercises) ← you are here 🔥
6. [Object Oriented Programming in JavaScript](https://4geeks.com/en/interactive-exercise/object-oriented-programing-in-javascript)

Two good follow-ups once you finish: [HTML Forms](https://4geeks.com/en/interactive-exercise/forms-exercises) and [Master JavaScript by practising](https://4geeks.com/en/interactive-exercise/master-javascript-exercises).

## 🚀 How to start

The fastest way is the one-click option, with no local setup.

1. Open the repository in [GitHub Codespaces](https://codespaces.new/?repo=4GeeksAcademy/javascript-events-tutorial-exercises) and wait for the container to build.

2. LearnPack should start by itself once VSCode is ready. If it does not, run it from the terminal:

    ```bash
    learnpack start
    ```

3. Read the instructions, edit `index.js` (and `index.html` when the exercise asks for it), and press the build button to preview the page.

> 💡 Do the exercises in order: each one reuses the technique introduced by the previous one, and `07.1` practises the same global-state idea as `07`.

## 💻 Local installation

If you prefer to work on your own machine:

1. Install Node.js 22, which is the version used by the container and the repository CI, and then LearnPack plus its DOM plugin:

    ```bash
    npm i -g @learnpack/learnpack@5.0.348
    learnpack plugins:install @learnpack/dom@1.1.7
    ```

2. Clone the repository and move into the folder it creates:

    ```bash
    git clone https://github.com/4GeeksAcademy/javascript-events-tutorial-exercises.git
    cd javascript-events-tutorial-exercises
    ```

3. Start the tutorial from the root of the project:

    ```bash
    learnpack start
    ```

## 📚 How the exercises are organized

Every exercise lives in its own folder inside [`exercises/`](https://github.com/4GeeksAcademy/javascript-events-tutorial-exercises/tree/HEAD/exercises) and is a small standalone website:

+ **`index.html`** — the page. It already contains the elements you have to react to, and the `<script>` tag that loads your JavaScript.

+ **`index.js`** — the file you edit. Almost every exercise gives you starter code with a comment marking the spot where your code goes.

+ **`styles.css`** — only in exercise `04`, imported from the HTML.

+ **`README.md`** and **`README.es.md`** — the instructions, in English and Spanish.

+ **`solution.hide.js`** and **`solution.hide.html`** — the reference solution, which LearnPack keeps hidden in the editor and you can always read in the repository.

Found a bug or something out of date? Open an issue at [learnpack/learnpack](https://github.com/learnpack/learnpack/issues/new).

## 🤝 Contributors

+ [Alejandro Sánchez (@alesanchezr)](https://github.com/alesanchezr) — code 💻, idea 🤔, tutorial 📖.

+ [Paolo (@plucodev)](https://github.com/plucodev) — bug reports 🐛, code 💻, translation 🌎.

Thanks to [everyone else who has contributed](https://github.com/4GeeksAcademy/javascript-events-tutorial-exercises/graphs/contributors). This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification, and contributions of any kind are welcome.
<!-- endhide -->
