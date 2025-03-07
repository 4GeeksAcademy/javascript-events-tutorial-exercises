# Event-Oriented Programming with JavaScript

<!-- hide -->
<a href="https://www.4geeksacademy.co"><img height="280" align="right" src="https://github.com/4GeeksAcademy/javascript-events-tutorial-exercises/blob/master/.learn/assets/badge.svg?raw=true"></a>

> By [@alesanchezr](https://twitter.com/alesanchezr) and [other contributors](https://github.com/4GeeksAcademy/javascript-events-tutorial-exercises/graphs/contributors) at [4Geeks Academy](https://4geeksacademy.co/)

![last commit](https://img.shields.io/github/last-commit/4geeksacademy/javascript-arrays-exercises-tutorial)
[![build by developers](https://img.shields.io/badge/build_by-Developers-blue)](https://breatheco.de)
[![build by developers](https://img.shields.io/twitter/follow/4geeksacademy?style=social&logo=twitter)](https://twitter.com/4geeksacademy)

This tutorial is part of a bigger group of tutorials about web development, this repository focuses only on JavaScript Events, you will learn Mouse Events, Keyboard events, Frame Events and how to react to those events to make your web application interactive.

*Estas instrucciones [están disponibles en 🇪🇸 español](https://github.com/4GeeksAcademy/javascript-events-tutorial-exercises/blob/master/README.es.md) :es:* 
<!-- endhide -->


### What you will learn during this tutorial:

1. The first event that triggers on a website.
2. Make your code react to user clicks on buttons.
3. Create a counter that increases when the user clicks.
4. Add event listeners.
5. What is the event target?

<!-- hide -->
### Before we start... other related tutorials

1. [Introduction to HTML](https://github.com/4GeeksAcademy/html-tutorial-exercises-course)
2. [Introduction to CSS](https://github.com/4GeeksAcademy/css-tutorial-exercises-course)
3. [Introduction to JavaScript](https://github.com/4GeeksAcademy/javascript-beginner-exercises-tutorial)
4. [Introduction to The DOM](https://github.com/4GeeksAcademy/javascript-dom-tutorial-exercises)
5. [Using events & The DOM](https://github.com/4GeeksAcademy/javascript-events-tutorial-exercises) ← You are here now 🔥
6. [Object Oriented Programming](https://github.com/4GeeksAcademy/object-oriented-javascript-tutorial-exercises)

## One click installation (recommended):

You can open these exercises in just a few seconds by clicking: [Open in Codespaces](https://codespaces.new/?repo=4GeeksAcademy/javascript-events-tutorial-exercises) (recommended) or [Open in Gitpod](https://gitpod.io#https://github.com/4GeeksAcademy/javascript-events-tutorial-exercises).

> Once you have VSCode open, the LearnPack exercises should start automatically. If exercises don't run automatically you can try typing on your terminal: `$ learnpack start`

## Local Installation

Clone the repository in your local environment and follow the steps below:

1) Make sure you have [LearnPack](https://github.com/learnpack/learnpack-cli), `node.js` version v14+, and jest v27 installed. This is the command to install the learnpack-cli and jest:

```bash
$ npm i learnpack jest@29.7.0 jest-environment-jsdom@29.7.0 -g
```

2) Clone or download this repository. Once you finish downloading, you will find a new folder with a subdirectory "exercises" that contains all the exercises within.

3) Install the LearnPack plugin to test and compile vanillajs:

```bash
$ learnpack plugins:install @learnpack/dom
```

4) Start the tutorial/exercises by running the following command from the root of the project:

```bash
$ learnpack start
```

<!-- endhide -->


## How are the exercises organized?

Each exercise is a small React application containing the following files:

1. **index.js:** represents the entry JavaScript file that will be executed by the computer.
1. **index.html:** represents the entry website.
1. **style.css:** your website styles, they have to be imported from the index.html.
2. **README.md:** contains exercise instructions.
3. **test.js:** you don't have to open this file, it contains the testing script for the exercise.

> Note: The exercises have automatic grading, but it's very rigid and strict, my recommendation is to not take the tests too serious and use them only as a suggestion, or you may get frustrated.

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

1. [Alejandro Sanchez (alesanchezr)](https://github.com/alesanchezr), contribution: (coder) 💻, (idea) 🤔, (build-tests) ⚠️, (pull-request-review) 👀, (build-tutorial) ✅, (documentation) 📖

2. [Paolo (plucodev)](https://github.com/plucodev), contribution: (bug reports) 🐛, (coder) 💻, (translation) 🌎

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind are welcome!

This and many other exercises are built by students as part of the 4Geeks Academy [Coding Bootcamp](https://4geeksacademy.com/us/coding-bootcamp) by [Alejandro Sánchez](https://twitter.com/alesanchezr) and many other contributors. Find out more about our [Full Stack Developer Course](https://4geeksacademy.com/us/coding-bootcamps/part-time-full-stack-developer), and  [Data Science Bootcamp](https://4geeksacademy.com/us/coding-bootcamps/datascience-machine-learning).
