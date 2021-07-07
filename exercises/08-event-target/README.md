# `08` Event Target

Every event has useful information that you can use during the runtime. 

For example:

- If a user clicks on a button you can know what specific button the user clicked,

- If the window has scrolled you can know how much the user has scrolled,

- If the user moved the mouse, you can know the mouse position,

- and much more!

When you declare any event-handler function, you can use an optional parameter that contains the event information like this:

```js
`function myFunctionName(eventInformation){}`
```

This parameter can have the name that you want, and you can trust that it will always contain the information of the event that was triggered. For example the `eventInformation.target` property will return the object that triggered the event.

## 📝 Instructions

This website already has a listener for the click on the `#container div`. 

1. Please prompt an alert with the id of the target element (the element that was clicked).

## 💡 Hint:

Here is the documentation on the event.target: http://www.w3schools.com/jsref/event_target.asp