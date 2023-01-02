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

### 1.2 误解

太拘泥于 `this` 地字面意思就会产生一些误解。有两种常见的对于 `this` 的解释，但是它们都是错误的。

#### 1.2.1 指向自身

我们想要记录一下函数 `foo` 被调用的次数：

``` javascript
function foo(num) {
  console.log('foo: ' + num);
 
  // 记录 foo 被调用的次数
  this.count++;
}
 
foo.count = 0;
 
for (let i = 0; i < 10; i++) {
  if (i > 5) {
    foo(i);
	}
}
 
// foo: 6
// foo: 7
// foo: 8
// foo: 9
 
// foo 被调用了多少次？
console.log(foo.count); // 0
```

`console.log` 语句产生了 4 条输出，证明 `foo()` 确实被调用了 4 次，但是 `foo.count` 仍然是 0。显然从字面意思来理解 `this` 是错误的。

#### 1.2.2 它的作用域

第二种常见的误解是，`this` 指向函数的作用域。这个问题有点复杂，因为在某种情况下它是正确的，但是在其它情况下它却是错误的。

需要明确的是，`this` 在任何情况下都不指向函数的词法作用域。在 JavaScript 内部，作用域确实和对象类似，可见的标识符都是它的属性。但是作用域“对象”无法通过 JavaScript 代码访问，它存在于 JavaScript 引擎内部。

下面的代码试图（但是没有成功）跨越边界，使用 `this` 来隐式引用函数的词法作用域：

``` javascript
function foo() {
	const a = 2;
  this.bar();
}
 
function bar() {
  console.log(this.a);
}
 
foo(); // undefined
```

首先，这段代码试图通过 `this.bar()` 来引用 `bar()` 函数。这样调用能成功纯属意外，调用 `bar()` 最自然的方法是省略前面的 `this`，直接使用词法引用标识符。

此外，还试图使用 `this` 联通 `foo()` 和 `bar()` 的词法作用域，从而让 `bar()` 可以访问 `foo()` 作用域里的变量 `a`。这是不可能实现的，使用 `this` 不可能在词法作用域中查找到什么。

每当我们想要把 `this` 和词法作用域的查找混合使用时，一定要提醒自己，这是无法实现的。

#### 1.3 `this` 到底是什么

`this` 是在运行时进行绑定的，并不是在编写时绑定，它的上下文取决于函数调用时的各种条件。`this` 的绑定和函数声明的位置没有任何关系，只取决于函数的调用方式。

当一个函数被调用时，会创建一个活动记录（有时候也称为执行上下文）。这个记录会包含函数在哪里被调用（调用栈）、函数的调用方式、传入的参数等信息。`this` 就是这个记录的一个属性，会在函数执行的过程中用到。

#### 1.4 小结

学习 `this` 的第一步时明白 `this` 既不指向函数自身也不指向函数的词法作用域，抛开以前的错误的假设和理解。

`this` 实际上是在函数被调用时发生的绑定，它指向什么完全取决于函数在哪里被调用。

## 2. `this` 全面解析

### 2.1 调用位置

在理解 `this` 的绑定过程之前，首先要理解**调用位置：**调用位置就是函数在代码中被调用的位置（而不是声明的位置）。只有仔细分析调用位置才能回答这个问题：这个 `this` 到底引用的是什么？

寻找调用位置最重要的是要分析**调用栈**（就是为了到达当前执行位置所调用的所有函数）。我们关系你的调用位置就在当前正在执行的函数的**前一个**调用中。

``` javascript
function baz() {
  // 当前调用栈是：baz
	// 因此，当前调用位置是全局作用域
 
  console.log('baz');
  bar(); // <- bar 的调用位置
}
 
function bar() {
	// 当前调用栈是：baz -> bar
	// 因此，当前调用位置在 baz 中
 
  console.log('bar');
  foo(); // <- foo 的调用位置
}
 
function foo() {
	// 当前调用栈是：baz -> bar -> foo
	// 因此，当前调用位置在 bar 中
 
  console.log('foo');
}
 
baz(); // <- baz 的调用位置
```

> 我们可以把调用栈想象成一个函数调用链，就像我们前面代码段的注释中所写的一样。但是这种方法非常麻烦并且容易出错。另一个查看调用栈的方法是使用浏览器的调试工具。

### 2.2 绑定规则

我们来看看在函数的执行过程中调用位置如何决定 `this` 的绑定对象。

你必须找到调用位置，然后判断需要应用下面四条规则中的哪一条。我们首先会分别解释这四条规则，然后解释多条规则都可用时它们的优先级如何排列。

#### 2.2.1 默认绑定

首先要介绍的是最常用的函数调用类型：独立函数调用。可以把这条规则看作是无法应用其它规则时的默认规则。

``` javascript
function foo() {
  console.log(this.a);
}
 
var a = 2;
 
foo(); // 2
```

我们注意到的第一件事是，声明在全局作用域中的变量就是全局对象的一个同名属性，它们本质上是同一个东西。

接着我们可以看到调用 `foo()` 时，`this.a` 被解析成了全局变量 `a`。因为在本例中，函数调用时应用了 **`this` 的默认绑定**，因此 `this` 指向全局对象。

在代码中，`foo()` 是直接使用不带任何修饰的函数引用进行调用的，因此只能使用**默认绑定**，无法应用其它规则。

如果使用严格模式（strict mode），则不能将全局对象用于默认绑定，因此 `this` 会绑定到 `undefined`。

``` javascript
function foo() {
  'use strict';
  console.log(this.a);
}
 
var a = 2;
 
foo(); // Uncaught TypeError: Cannot read properties of undefined
```

这里有一个微妙但是非常重要的细节，在严格模式下调用 `foo()` 不影响默认绑定。

``` javascript
function foo() {
  console.log(this.a);
}
 
var a = 2;
 
(function () {
	'use strict';
  foo(); // 2
})();
```

#### 2.2.2 隐式绑定

另一条需要考虑的规则是调用位置是否有上下文对象，或者说是否被某个对象拥有或者包含，不过这种说法可能会造成一些误导。

``` javascript
function foo() {
  console.log(this.a);
}
 
var obj = {
  a: 2,
	foo
};
 
obj.foo(); // 2
```

无论是直接在 `obj` 中定义还是先定义再添加为引用属性，`foo()` 函数严格来说都不属于 `obj` 对象。

然而调用位置**会使用 `obj`** 上下文来引用函数，因此可以说函数被调用时 `obj` 对象“拥有”或者“包含”函数引用。

当函数引用有上下文对象时，**隐式绑定**规则会把函数调用中的 `this` 绑定到这个上下文对象。因为调用 `foo()` 时 `this` 被绑定到 `obj`，因此 `this.a` 和 `obj.a` 是一样的。

对象属性引用链中只有上一层或者说最后一层再调用位置中起作用。

``` javascript
function foo() {
  console.log(this.a);
}
 
var obj2 = {
  a: 42,
	foo
};
 
var obj1 = {
  a: 2,
	obj2
};
 
obj1.obj2.foo(); // 42
```

##### 隐式丢失

一个最常见的 `this` 绑定问题就是被**隐式绑定**的函数会丢失绑定对象，也就是说它会应用**默认绑定**，从而把 `this` 绑定到全局对象或者 `undefined` 上。

``` javascript
function foo() {
  console.log(this.a);
}
 
var obj = {
  a: 2,
	foo
};
 
var bar = obj.foo; // 函数别名
 
var a = 'oops, global'; // a 是全局对象的属性
 
bar(); // oops, global
```

虽然 `bar` 是 `obj.foo` 的一个引用，但实际上它引用的是 `foo` 函数本身，因此此时的 `bar()` 是一个不带任何修饰的函数调用，因此应用了默认绑定。

一中更微妙、更常见并且更出乎意料的情况发生在传入回调函数时：

``` javascript
function foo() {
  console.log(this.a);
}
 
function doFoo(fn) {
  // fn 其实引用的是 foo
 
  fn(); // <- 调用位置
}
 
var obj = {
  a: 2,
	foo
};
 
var a = 'oops, global';
 
doFoo(obj.foo); // oops, global
```

参数传递其实就是一种隐式赋值，因此我们传入函数时也会被隐式赋值，所以结果和上一个例子一样。

回调函数丢失 `this` 绑定是非常常见的。除此之外，还有一种情况 `this` 的行为会出乎我们意料：调用回调函数的函数可能会修改 `this`。在一个 JavaScript 库中事件处理器常会把回调函数的 `this` 强制绑定到触发事件的 DOM 元素上。

#### 2.2.3 显式绑定

在分析**隐式绑定**时，我们必须在一个对象内部包含一个指向函数的属性，并通过这个属性间接引用函数，从而把 `this` 间接（隐式）绑定到这个对象上。

如果我们不想在对象内部包含函数引用，而想在某个对象上强制调用函数，可以使用函数 `call()` 和 `apply()` 方法。它们的第一个参数是一个对象，是给 `this` 准备的，接着在调用函数时将其绑定到 `this`。因为可以直接指定 `this` 的绑定对象，因此我们称之为显式绑定。

``` javascript
function foo() {
  console.log(this.a);
}
 
var obj = {
  a: 2
};
 
foo.call(obj); // 2
```

但**显式绑定**仍然无法解决我们之前提出的丢失绑定问题。
