# `08` Target del Evento 

Cada evento tiene información útil que puedes usar durante el tiempo de ejecución.

Por ejemplo:

- Si un usuario hace clic en un botón, sabes que bóton específico tocó el usuario.

- Si el usurio se desplaza por la ventana, puedes saber cuánto se ha desplazado.

- Si el usuario movió el mouse, puedes saber la posición del mouse.

- ¡Y mucho más!

Cuando declaras una función event-handler, puedes usar un parámetro opcional que contenga la información del evento de esta manera:

```js
`function myFunctionName(eventInformation){}`
```

Este parámetro puede tener el nombre que quieras, y puedes estar seguro de que siempre contendrá la información del evento que la gatilló. Por ejemplo la propiedad `eventInformation.target` devolverá el objeto que gatilló el evento.


## 📝 Instrucciones:

Este sitio web ya tiene un listener cuando se hace un clic en el `div` `#container`. 

1. Por favor muestra una alerta con el id del elemento objetivo (el elemento al cual se le hizo clic).


## 💡 Pista:

Aquí está la documentación sobre event.target: http://www.w3schools.com/jsref/event_target.asp