# this和对象原型

## 1. 关于 `this`

`this` 关键字是 JavaScript 中最复杂的机制之一。它是一个很特别的关键字，被自动定义在所有函数的作用域中。

### 1.1 为什么要用 `this`

``` javascript
function identify() {
	return this.name.toUpperCase();
}
 
function speak() {
  const greeting = 'Hello, I\'m ' + identify.call(this);
  console.log(greeting);
}
 
const me = {
  name: 'Kyle'
};
 
const you = {
  name: 'Reader'
};
 
console.log(identify.call(me)); // KYLE
console.log(identify.call(you)); // READER
 
speak.call(me); // Hello, I'm KYLE
speak.call(you); // Hello, I'm READER
```

这段代码可以在不同的上下文对象（`me` 和 `you`）中重复使用函数 `identify()` 和 `speak()`，不用针对每个对象编写不同版本的函数。

如果不使用 `this`，那就需要给 `identify()` 和 `speak()` 显式传入一个上下文对象。

``` javascript
function identify(context) {
	return context.name.toUpperCase();
}
 
function speak(context) {
  const greeting = 'Hello, I\'m ' + identify(context);
  console.log(greeting);
}
 
const me = {
  name: 'Kyle'
};
 
const you = {
  name: 'Reader'
};
 
console.log(identify(me)); // KYLE
speak(you); // Hello, I'm READER
```

然而 `this` 提供了一种更优雅的方式来隐式“传递”一个对象引用，因此可以将 API 设计得更加简洁并且易于复用。随着我们使用模式越来越复杂，显式传递上下文对象会让代码变得越来越混乱，使用 `this` 则不会这样。
