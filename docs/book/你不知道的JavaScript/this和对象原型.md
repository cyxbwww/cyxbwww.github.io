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

##### 硬绑定

但是显式绑定的一个变种可以解决这个问题。

``` javascript
function foo() {
  console.log(this.a);
}
 
var obj = {
  a: 2
};
 
var bar = function() {
  foo.call(obj);
};
 
bar(); // 2
setTimeout(bar, 100); // 2
 
// 硬绑定的 bar 不可能再修改它的 this
bar.call(window); // 2
```

我们创建了函数 `bar()`，并在它的内部手动调用了 `foo.call(obj)`，因此强制把 `foo` 的 `this` 绑定到了 `obj`。无论之后如何调用函数 `bar`，它总会手动在 `obj` 上调用 `foo`。这种绑定是一种显式的强制绑定，因此我们称之为**硬绑定**。

硬绑定的典型应用场景就是创建一个包裹函数，赋值接收参数并返回值：

``` javascript
function foo(something) {
  console.log(this.a, something);
  return this.a + something;
}
 
var obj = {
  a: 2
};
 
var bar = function() {
  return foo.apply(obj, arguments);
};
 
var b = bar(3); // 2 3
 
console.log(b); // 5
```

另一种使用方法时创建一个可以重复使用的辅助函数：

``` javascript
function foo(something) {
  console.log(this.a, something);
  return this.a + something;
}
 
function bind(fn, obj) {
  return function() {
    return fn.apply(obj, arguments);
	}
}
 
var obj = {
  a: 2
};
 
var bar = bind(foo, obj);
 
var b = bar(3); // 2 3
 
console.log(b); // 5
```

由于**硬绑定**是一种非常常用的模式，所以 ES5 提供了内置的方法 `Function.prototype.bind`，它的用法如下：

``` javascript
function foo(something) {
  console.log(this.a, something);
  return this.a + something;
}
 
var obj = {
  a: 2
};

var bar = foo.bind(obj);

var b = bar(3); // 2 3

console.log(b); // 5
```

`bind()` 会返回一个硬编码的新韩淑，它会把你指定的参数设置为 `this` 的上下文并调用原始函数。

##### API 调用的“上下文”

第三方库的许多函数，以及 JavaScript 语言和宿主环境中许多新的内置函数，都提供了一个可选的参数，通常被称为“上下文”（context），其作用和 `bind()` 一样，确保你的回调参数使用指定的 `this`。

``` javascript
function foo(el) {
  console.log(el, this.id);
}
 
var obj = {
  id: 'awesome'
};
 
// 调用 foo() 时把 this 绑定到 obj
[1, 2, 3].forEach(foo, obj);
// 1 awesome
// 2 awesome
// 3 awesome
```

#### 2.2.4 `new` 绑定

使用 `new` 来调用函数，或者说发生构造函数调用时，会自动执行下面的操作。

1. 创建（或者说构造）一个全新的对象
2. 这个新对象会被执行[[Prototype]]连接
3. 这个新对象会绑定到函数调用的 `this`
4. 如果函数没有返回其它对象，那么`new` 表达式中的函数调用会自动返回这个新对象

``` javascript
function foo(a) {
	this.a = a;
}
 
var bar = new foo(2);
 
console.log(bar.a); // 2
```

使用 `new` 来调用 `foo()` 时，我们会构造一个新对象并把它绑定到 `foo()` 调用中的 `this` 上。`new` 是最后一种可以影响函数调用时 `this` 绑定行为的方法，我们称之为 `new` 绑定。

### 2.3 优先级

隐式绑定和显式绑定哪个优先级更高？我们来测试一下：

``` javascript
function foo() {
  console.log(this.a);
}
 
var obj1 = {
  a: 2,
	foo
};
 
var obj2 = {
  a: 3,
	foo
};
 
obj1.foo(); // 2
obj2.foo(); // 3
 
obj1.foo.call(obj2); // 3
obj2.foo.call(obj1); // 2
```

**显式绑定**优先级更高，也就是说在判断时应当先考虑是否可以存在**显式绑定**。

现在我们需要搞清楚 **`new` 绑定**和**隐式绑定**的优先级谁高谁低：

``` javascript
function foo(something) {
  this.a = something;
}
 
var obj1 = {
  foo
};
 
var obj2 = {};
 
obj1.foo(2);
console.log(obj1.a); // 2
 
obj1.foo.call(obj2, 3);
console.log(obj2.a); // 3
 
var bar = new obj1.foo(4);
console.log(obj1.a); // 2
console.log(bar.a); // 4
```

可以看到 **`new` 绑定**比**隐式绑定**优先级高。但是 **`new` 绑定**和**显式绑定**谁的优先级更高呢？

> `new` 和 `call/apply` 无法一起使用，因此无法通过 `new foo.call(obj1)` 来直接进行测试。但我们可以使用**硬绑定**来测试它俩的优先级。

`Function.prototype.bind()` 会创建一个新的包装函数，这个函数会忽略它当前的 `this` 绑定，并把我们提供的对象绑定到 `this` 上。

这样看起来硬绑定（也是显式绑定的一种）似乎比 `new` 绑定的优先级更高，无法使用 `new` 来控制 `this` 绑定。

``` javascript
function foo(something) {
  this.a = something;
}
 
var obj1 = {};
 
var bar = foo.bind(obj1);
bar(2);
 
console.log(obj1.a); // 2
 
var baz = new bar(3);
 
console.log(obj1.a); // 2
console.log(baz.a); // 3
```

`bar` 被硬绑定到 `obj1` 上，但是 `new bar(3)` 并没有像我们预计的那样把 `obj1.a` 修改为 3。相反，`new` 修改了硬绑定（到 `obj1` 的）调用 `bar()` 中的 `this`。因为使用了 `new` 绑定，我们得到了一个名字为 `baz` 的新对象，并且 `baz.a` 的值是 3。

再来看看我们之前使用的“裸”辅助函数 `bind`：

``` javascript
function bind(fn, obj) {
  return function() {
    return fn.apply(obj, arguments);
	}
}
```

看起来在辅助函数中 `new` 操作符的调用无法修改 `this` 绑定但是在刚才的代码中 `new` 确实修改了 `this` 绑定。

实际上，ES5 中内置的 `Function.prototype.bind()` 更加复杂。下面是 MDN 提供的一种 `bind()` 实现。

``` javascript
Function.prototype.bind = function(oThis) {
  if (typeof this !== 'function') {
    // 与 ECMAScript 5 最接近的内部 IsCallable 函数
    throw new TypeError(
      'Function.prototype.bind - what is trying ' +
      'to be bound is no callable'
    )
  }
 
  var aArgs = Array.prototype.slice.call(arguments, 1),
    fToBind = this,
    fNOP = function() {},
    fBound = function() {
      return fToBind.apply(
        (this instanceof fNOP && oThis ? this : oThis),
        aArgs.concat(Array.prototype.slice.call(arguments))
      );
    };
 
  fNOP.prototype = this.prototype;
  fBound.prototype = new fNOP();
 
  return fBound;
}
```

> 这是一种 polyfill 代码（主要用于旧浏览器的兼容，比如说在旧的浏览器中并没有内置 `bind` 函数，因此可以使用 polyfill 代码在旧浏览器中实现新的功能），对于 `new` 使用的硬绑定函数来说，这段代码和 ES5 内置的 `bind()` 函数并不完全相同。由于 polyfill 并不是内置函数，所以无法创建一个不包含 `.prototype` 的函数，因此会具有一些副作用。如果我们要在 `new` 中使用硬绑定函数并且依赖 polyfill 代码的话，一定要非常小心。

下面是 `new` 修改 `this` 的相关代码：

``` javascript
this instanceof fNOP && oThis ? this : oThis
 
// ...以及
 
fNOP.prototype = this.prototype;
fBound.prototype = new fNOP();
```

简单来说，这段代码会判断硬绑定函数是否被 `new` 调用，如果是的话就会使用新创建的 `this` 替换硬绑定的 `this`。

那为什么要在 `new` 中使用硬绑定函数呢？直接使用普通函数不是更简单吗？

之所以要在 `new` 中使用硬绑定函数，主要目的是预先设置函数的一些参数，这样在使用 `new` 进行初始化时就可以只传入其余的参数。`bind()` 的功能之一就是可以把除了第一个参数（第一个参数用于绑定 `this`）之外的其它参数都传给下层的函数（这种技术称为“部分应用”，是“柯里化”的一种）。

``` javascript
function foo(p1, p2) {
  this.val = p1 + p2;
}
 
var bar = foo.bind(null, 'p1');
var baz = new bar('p2');
 
console.log(baz.val); // p1p2
```

##### 判断 `this`

现在我们可以根据优先级来判断函数在某个调用位置应用的是哪条规则。可以按照下面的顺序来进行判断。

1. 函数是否在 `new` 中调用（`new` 绑定）？如果是的话 `this` 绑定的是新创建的对象。
   ``` javascript
   var bar = new foo();
   ```

2. 函数是否通过 `call`、`apply`（显式绑定）或者硬绑定调用？如果是的话，`this` 绑定的是指定的对象。
   ``` javascript
   var bar = foo.call(obj1);
   ```

3. 函数是否在某个上下文对象中调用（隐式绑定）？如果是的话，`this` 绑定的是那个上下文对象。
   ``` javascript
   var bar = obj2.foo();
   ```

4. 如果都不是的话，使用默认绑定。如果在严格模式下，就绑定到 `undefined`，否则绑定到全局对象。
   ``` javascript
   var bar = foo();
   ```

对于正常函数调用来说，理解了这些知识我们就可以明白 `this` 的绑定原理了。

### 2.4 绑定例外

在某些场景下 `this` 的绑定行为会出乎意料，你认为应当应用其它绑定规则时，实际上应用的可能是默认绑定规则。

#### 2.4.1 被忽略的 `this`

如果把 `null` 或 `undefined` 作为 `this` 的绑定对象传入 `call`、`apply` 或者 `bind`，这些值在调用时会被忽略，实际应用的是默认绑定规则。

``` javascript
function foo() {
  console.log(this.a);
}
 
var a = 2;
 
foo.call(null, 2); // 2
```

什么情况下会传入 `null` 呢？

一种很常见的做法是使用 `apply()` 来“展开”一个数组，并当作参数传入一个函数。类似地，`bind()` 可以对参数进行柯里化（预先设置一些参数），这种方法有时很有用：

``` javascript
function foo(a, b) {
  console.log('a: ' + a + ', b: ' + b);
}
 
// 把数组“展开”成参数
foo.apply(null, [2, 3]); // a: 2, b: 3
 
// 使用 bind() 进行柯里化
var bar = foo.bind(null, 2);
bar(3); // a: 2, b: 3
```

这两种方法都需要传入一个参数当作 `this` 的绑定对象。如果函数并不关心 `this` 的话，仍然需要传入一个占位值，这时 `null` 可能是一个不错的选择。

> 在 ES6 中，可以用 `...` 操作符代替 `apply()` 来“展开”数组。但 ES6 中没有柯里化的相关语法，因此还是需要使用 `bind()`。

##### 更安全的 `this`

一种“更安全”的做法是传入一个特殊的对象，把 `this` 绑定到这个对象不会对程序产生任何副作用。我们可以创建一个“DMZ”（demilitarized zone，非军事区）对象——它就是一个空的非委托的对象。

在 JavaScript 中创建一个空对象最简单的方法是 `Object.create(null)`。`Object.create(null)` 和 `{}` 很像，但是并不会创建 `Object.prototype` 这个委托，所以它比 `{}` “更空”。

``` javascript
function foo(a, b) {
  console.log('a: ' + a + ', b: ' + b);
}
 
// DMZ 空对象
var empty = Object.create(null);
 
// 把数组“展开”成参数
foo.apply(empty, [2, 3]); // a: 2, b: 3
 
// 使用 bind() 进行柯里化
var bar = foo.bind(empty, 2);
bar(3); // a: 2, b: 3
```

#### 2.4.2 间接引用

另一个需要注意的是，我们有可能（有意或者无意地）创建一个函数的“间接引用”，在这种情况下，调用这个函数会应用默认绑定规则。

**间接引用**最容易在赋值时发生：

``` javascript
function foo(a, b) {
  console.log(this.a);
}
 
var a = 2;
var o = {
  a: 3,
	foo
};
var p = {
  a: 4
};
 
o.foo(); // 3
(p.foo = o.foo)(); // 2
```

赋值表达式 `p.foo = o.foo` 的返回值时目标函数的引用，因此调用位置是 `foo()` 而不是 `p.foo()` 或者 `o.foo()`。 

#### 2.4.3 软绑定

使用硬绑定可以把 `this` 强制绑定到指定的对象（除了使用 `new` 时），防止函数调用应用默认绑定规则。但会大大降低函数的灵活性，使用硬绑定之后就无法使用隐式绑定或者显式绑定来修改 `this`。

我们可以给默认绑定指定一个全局对象和 `undefined` 以外的值，这样就可以实现和硬绑定相同的效果，同时保留隐式绑定或者显式绑定来修改 `this`，一种被称为软绑定的方法。

``` javascript
Function.prototype.softBind = function(obj) {
  var fn = this;
  // 捕获所有 curried 参数
	var curried = [].slice.call(arguments, 1);
  var bound = function() {
    return fn.apply(
      (!this || this === window) ? obj : this,
			curried.concat.apply(curried, arguments)
		);
	}
 
  bound.prototype = Object.create(fn.prototype);
  return bound;
}
```

除了软绑定之外，`softBind()` 的其它原理和 ES5 内置的 `bind()` 类似。它会对指定的函数进行封装，首先检查调用时的 `this`，如果 `this` 绑定到全局对象或者 `undefined`，那就把指定的默认对象 `obj` 绑定到 `this`，否则不会修改 `this`。此外这段代码还支持可选的柯里化。

下面看看 `softBind()` 是否实现了软绑定功能：

``` javascript
function foo() {
  console.log('name: ' + this.name)
}
 
var obj = { name: 'obj' },
		obj2 = { name: 'obj2' },
		obj3 = { name: 'obj3' };
 
var fooOBJ = foo.softBind(obj);
 
fooOBJ(); // name: obj
 
obj2.foo = foo.softBind(obj);
obj2.foo(); // name: obj2
 
fooOBJ.call(obj3); // name: obj3
 
setTimeout(obj2.foo, 10); // name: obj <- 应用了软绑定
```

软绑定版本的 `foo()` 可以手动将 `this` 绑定到 `obj2` 或者 `obj3` 上，但如果应用默认绑定，则会将 `this` 绑定到 `obj`。

### 2.5 `this` 词法

前面我们学习过的四条规则已经可以包含所有正常的函数。但 ES6 中有一种无法使用这些规则的特殊函数类型：箭头函数。它是根据外层（函数或者全局）作用域来决定 `this`。

``` javascript
function foo() {
	// 返回一个箭头函数
	return (a) => {
    console.log(this.a)
  }
}
 
var obj1 = {
  a: 2
};
 
var obj2 = {
  a: 3
};
 
var bar = foo.call(obj1);
bar.call(obj2); // 2
```

`foo()` 内部创建的箭头函数会捕获调用时 `foo()` 的 `this`。由于 `foo()` 的 `this` 绑定到 `obj1`，`bar`（应用箭头函数）的 `this` 也会绑定到 `obj1`，箭头函数的绑定无法被修改（`new` 也不行）。

箭头函数最常用于回调函数中，例如事件处理器或者定时器：

``` javascript
function foo() {
	setTimeout(() => {
    // 这里的 this 语法继承自 foo()
    console.log(this.a)
  }, 100);
}
 
var obj = {
  a: 2
};
 
foo.call(obj); // 2
```

箭头函数可以像 `bind()` 一样确保函数的 `this` 被绑定到指定对象，此外，其重要性还体现在它用更常见的词法作用域取代了传统的 `this` 机制。实际上，在 ES6 之前我们就已经在使用一种几乎和箭头函数完全一样的模式。

``` javascript
function foo() {
  var self = this
	setTimeout(function() {
    console.log(self.a)
  }, 100);
}
 
var obj = {
  a: 2
};
 
foo.call(obj); // 2
```

### 2.6 小结

如果要判断一个运行中函数的 `this` 绑定，就需要找到这个函数的直接调用位置，找到之后就可以顺序应用下面这四条规则来判断 `this` 的绑定对象。

1. 由 `new` 调用？绑定到新创建的对象。
2. 由 `call` 或者 `apply`（或者 `bind`）调用？绑定到指定的对象。
3. 有上下文对象调用？绑定到那个上下文。
4. 默认：在严格模式下绑定到 `undefined`，否则绑定到全局对象。

有些调用可能在无意间使用默认绑定规则。如果想“更安全”地忽略 `this` 绑定，我们可以使用一个 DMZ 对象，比如 `empty = Object.create(null)`，以保护全局对象。

ES6 中的箭头函数并不会使用四条标准的绑定规则，而是根据当前的词法作用域来决定 `this`，具体来说，箭头函数会继承外层函数的 `this` 绑定（无论 `this` 绑定到什么）。这其实和 ES6 之前代码中的 `self = this` 机制一样。

## 3. 对象

### 3.1 语法

对象可以通过两种形式定义：声明（文字）形式和构造形式。

``` javascript
// 文字语法
const myObj1 = {
  key: 'value'
};

// 构造形式
const myObj2 = new Object();
myObj2.key = 'value';
```

### 3.2 类型

对象是 JavaScript 的基础，在 JavaScript 中一共有六种主要类型（语言类型）

- `string`
- `number`
- `boolean`
- `null`
- `undefined`
- `object`

**简单基本类型**本身并不是对象。`null` 有时会被当作一种对象类型，但这其实是语言本身的一个 bug，即对 `null` 执行 `typeof null` 时会返回字符串 `"object"`。实际上 `null` 本身时基本类型。

JavaScript 中由许多特殊的对象子类型，我们可以称之为复杂基本类型。

####  内置对象

JavaScript 中还有一些对象子类型，通常被称为内置对象。

- `String`
- `Number`
- `Boolean`
- `Object`
- `Function`
- `Array`
- `Date`
- `RegExp`
- `Error`

这些内置函数可以当作构造函数（由 `new` 产生的函数调用）来使用，从而可以构造一个对应子类型的新对象：

``` javascript
var strPrimitive = 'I am a string';
console.log(typeof strPrimitive); // string
console.log(strPrimitive instanceof String); // false
 
var strObject = new String('I am a string');
console.log(typeof strObject); // object
console.log(strObject instanceof String); // true
 
// 使用 sub-type 检查对象
console.log(Object.prototype.toString.call(strObject)); // [object String]
```

子类型在内部借用了 `Object` 中的 `toString()` 方法，`strObject` 是由 `String` 构造函数创建的一个对象。

`null` 和 `undefined` 没有对应的构造形式，它们只有文字形式。相反，`Date` 只有构造形式，没有文字形式。

### 3.3 内容

对象的内容是由一些存储在特定命名空间位置的（任意类型的）值组成的，我么称之为属性。

``` javascript
var myObject = {
  a: 2
};
 
console.log(myObject.a); // 2
console.log(myObject['a']); // 2
```

要访问对象中的属性值，我们需要使用 `.` 操作符（属性访问）或 `[]` 操作符（键访问）。

在对象中，属性名永远都是字符串。如果我们使用 `string`（字面量）以外的其它值作为属性名，那它首先会被转换为一个字符串：

``` javascript
var myObject = {};
 
myObject[true] = 'foo';
myObject[3] = 'bar';
myObject[myObject] = 'baz';
 
console.log(myObject['true']); // foo
console.log(myObject['3']); // bar
console.log(myObject['[object Object]']); // baz
```

#### 3.3.1 可计算属性名

ES6 增加了**可计算属性名**，可以在文字形式中使用 `[]` 包裹一个表达式来当作属性名：

``` javascript
var prefix = 'foo';
 
var myObject = {
  [prefix + 'bar']: 'hello',
  [prefix + 'baz']: 'world'
};
 
console.log(myObject['foobar']); // hello
console.log(myObject['foobaz']); // world
```

#### 3.3.2 属性与方法

#### 3.3.3 数组

#### 3.3.4 复制对象

#### 3.3.5 属性描述符

#### 3.3.6 不变性

#### 3.3.7 `[[Get]]`

#### 3.3.8 `[[Put]]`

#### 3.3.9 `Getter` 和 `Setter`

#### 3.3.10 存在性

### 3.4 遍历

### 3.5 小结

## 4. 混合对象“类”

面向类的设计模式：实例化（instantiation）、继承（inheritance）和（相对）多态（polymorphism）。

### 4.1 类理论

类/继承描述了一种代码的组织结构形式——一种在软件中对真实世界中问题领域的建模方法。

面向对象编程强调的是数据和操作数据的行为本质上是互相关联的（不同的数据由不同的行为），因此好的设计就是把数据以及和它相关的行为打包（或者说封装）起来。这在正式的计算机科学中有时被称为数据结构。

举例来说，用来表示一个单词或者短语的一串字符通常被称为字符串。字符就是数据，但是我们关心的往往不是数是什么，而是可以对数据做什么，所以可以应用在这种数据上的行为（计算长度、添加数据、搜索等）都被设计成 `String` 类的方法。

所有的字符串都是 `String` 类的一个实例，也就是说它是一个包裹，包含字符数据和我们可以应用在数据上的函数。

我们还可以使用类对数据结构进行分类，可以把任意数据结构看作范围更广的定义的一种特例。

比如，“汽车”可以被看作“交通工具”的一种特例，后者是更广泛的类。我们可以在软件中定义一个 `Vehicle` 类和一个 `Car` 类来对这种关系进行建模。

`Vehicle` 的定义可能包括推进器（比如引擎）、载人能力等，这些都是 `Vehicle` 的行为。我们在 `Vehicle` 中定义的是（几乎）所有类型的交通工具（飞机、火车、汽车等）都包含的东西。

在我们的软件中，对不同的交通工具重复定义“载人能力”是没有意义的。相反，我们只在 `Vehicle` 中定义一次，定义 `Car` 时，只要声明它继承（或者扩展）了 `Vehicle` 这个基础定义就行。`Car` 的定义就是对通用 `Vehicle` 定义的特殊化。

虽然 `Vehicle` 和 `Car` 会定义相同的方法，但是实例中的数据可能是不同的，比如每辆车独一无二的车牌号等等。

这就是类、继承和实例化。

类的另一个核心概念是**多态**，这个概念是说父类的通用行为可以被子类用更特殊的行为重写。实际上，相对多态性允许我们从重写行为中引用基础行为。

类理论强烈建议父类和子类使用相同的方法名来表示特定的行为，从而让子类重写父类。我们之后会看到，在 JavaScript 代码中这样做会降低代码的可读性和健壮性。

#### 4.1.1 “类”设计模式

我们可能从来没有把类作为设计模式来看待，讨论得最多的是面向对象设计模式，比如**迭代器**模式、**观察者**模式、**工厂**模式、**单例**模式等。从这个角度来说，我们似乎是在（低级）面向对象类的基础上实现了**所有**（高级）设计模式，似乎面向对象是优秀代码的基础。

如果我们之前接受过正规的编程教育，可能听说过**过程化编程**，这种代码只包含过程（函数）调用，没有高层的抽象。

如果我们有**函数式编程**（比如 Monad）的经验就会知道类也是非常常用的一种设计模式。但是对于其它人来说，这可能是第一次知道类并不是必须的编程基础，而是一种可选的代码抽象。

有些语言（比如 Java）并不会给你选择的机会，类并不是**可选的**——万物皆是类。其它语言（比如 C 或者 PHP）会提供过程化和面向类这两种语法，开发者可以选择其中一种风格或者混用两种风格。

#### 4.1.2 JavaScript 中的“类”

JavaScript 属于哪一类呢？在相当长的一段时间里，JavaScript 只有一些近似类的语法元素（比如 `new` 和 `instanceof`），不过在后来的 ES6 中新增了一些元素，比如 `class` 关键字。

这是不是意味着 JavaScript 中实际上由类呢？简单来说：**不是**。

由于类是一种设计模式，所以我们可以用一些方法近似实现类的功能。为了满足对于类设计模式的普遍需求，JavaScript 提供了一些近似类的语法。但 JavaScript 的机制似乎一直在组织我们使用类设计模式。在近似类的表象之下，JavaScript 的机制其实和类完全不同。语法糖和（广泛使用的）JavaScript “类”库试图掩盖这个现实，但是我们迟早会面对它：其它语言中的类和 JavaScript 中的“类”并不一样。

总的来说，在软件设计中类是一个可选的模式，我们需要自己决定是否在 JavaScript 中使用它。由于许多开发者都非常喜欢面向类的软件设计，我们会在后面了解如何在 JavaScript 中实现类以及存在的一些问题。

### 4.2 类的机制

在许多面向类的语言中，“标准库”会提供 `Stack` 类，它是一种“栈”数据结构（支持压入、弹出等等）。`Stack` 类内部会有一些变量来存储数据，同时会提供一些公有的可访问行为（“方法”），从而让你的代码可以和（隐藏的）数据进行交换（比如添加、删除数据）。

但是在这些语言中，我们实际上并不是直接操作 `Stack`（除非创建一个静态类成员引用）。`Stack` 类仅仅是一个抽象的表示，它描述了所有“栈”需要做的事，但是它本身并不是一个“栈”。我们必须先实例化 `Stack` 类然后才能对它进行操作。

#### 4.2.1 建造

“类”和“实例”的概念来源于房屋建造。

建筑师会规划出一个建筑的所有特性：多宽、多高、多少个窗户以及窗户的位置，甚至建造墙和房顶需要的材料都要计划好。在这个阶段他并不需要关心建筑会被建在哪里，也不需要关心建造**多少**个这样的建筑。

建筑师也不太关心建筑里的内容——家具、壁纸、吊扇等。他只关心需要用什么结构来容纳它们。

建筑蓝图只是建筑**计划**，并不是真正的建筑，我们还需要一个建筑工人来建造建筑。建筑工人会按照蓝图**建造**建筑。实际上，他会把规划好的特性从蓝图中**复制**到现实世界的建筑中。

完成后，建筑就成为了蓝图的物理实例，本质上就是对蓝图的复制。之后建筑工人就可以到下一个地方，把所有工作都重复一遍，再创建一份副本。

建筑和蓝图之间的关系是间接的。我们可以通过蓝图了解建筑的结构，只观察建筑本身是无法获得这些信息的。但是如果我们想打开一扇门，那就必须接触真实的建筑才行——蓝图只能**表示**门在哪，但并不是真正的门。

一个类就是一张蓝图。为了获得真正可以交互的对象，我们必须按照类来建造（实例化）一个东西，这个东西通常被称为实例，有需要的话，我们可以直接在实例上调用方法并访问其所有公有数据属性。

这个对象就是类中描述的所有特性的一份副本。

我们走进一栋建筑时，它的蓝图不太可能挂在墙上（尽管这个蓝图可能会保存在公共档案馆中）。类似地，我们通常也不会使用一个实例对象来直接访问并操作它的类，不过至少可以判断出这个实例对象来自哪个类。

把类和实例对象之间的关系看作是直接关系而不是讲解关系通常更有助于理解。类通过复制操作被实例化为对象形式：

![闭包1.png](../../images/建造.png)

箭头的方向是从左向右、从上向下，它表示概念和物理意义上发生的复制操作。

#### 4.2.2 构造函数

类实例是由一个特殊的类方法构造的，这个方法名通常和类名相同，被称为构造函数。这个方法的任务就是初始化实例需要的所有信息（状态）。

举例来说，思考下面这个关于类的伪代码（编造出来的语法）：

``` javascript
class CoolGuy {
  specialTrick = 'nothing';
  
  CoolGuy(trick) {
    specialTrick = trick;
	}
  
  showOff() {
    output('Here\'s my trick: ', specialTrick);
	}
}
```

我们可以调用类构造函数来生成一个 `CoolGuy` 实例：

``` javascript
Joe = new CoolGuy('jumping rope');
Joe.showOff(); // Here's my trick: jumping rope
```

`CoolGuy` 类有一个 `CoolGuy` 构造函数，执行 `new CoolGuy()` 时实际上调用的就是它。构造函数会返回一个对象（也就是类的一个实例），之后我们可以在这个对象上调用 `showOff()` 方法，来输出指定 `CoolGuy` 的特产。

类构造函数**属于**类，而且通常和类同名。此外，构造函数大多需要用 `new` 来调，这样语言引擎才知道你想要构造一个新的类实例。

### 4.3 类的继承

在面向类的语言中，你可以先定义一个类，然后定义一个继承前者的类。后者通常被称为“子类”，前者通常被称为“父类”。
