---
tutorial: "https://www.youtube.com/watch?v=AtGZsioWZ14"
---

# `07` Count onclick

Si tienes **variables globales**, puedes cambiar su valor durante el tiempo de ejecución usando los handlers de eventos. Por ejemplo, este código incrementa el valor de la variable `counter` cada vez que el usuario hace clic en el botón **Increase**.

```js
window.increaseCounter = function increaseCounter() {
  counter++;
}
```

## 📝 Instrucciones:

1. Crea un botón que disminuya con una función handler de evento. La función debería disminuir la variable `counter` y actualizar el número en pantalla.
