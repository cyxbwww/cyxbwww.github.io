# Map和Set（映射和集合）

## Map（映射）

`Map` 是一个带键的数据项的集合，像 `object` 一样，区别是 `Map` 允许任何类型的键。

### 方法和属性

- `new Map()` 创建 `Map`
- `map.set(key, value)` 根据键存值
- `map.get(key)` 根据键返回值，不存在对应 `key` 返回 `undefined`
- `map.has(key)` `key` 存在返回 `true`，否则返回 `false`
- `map.delete(key)` 删除指定键的值
- `map.size` 返回当前元素个数

``` javascript
const map = new Map();

map.set('1', 'str1'); // 字符串键
map.set(1, 'num1'); // 数字键
map.set(true, 'bool1'); // 布尔值键

// Object会将键转化为字符串，Map 会保留键的类型
alert( map.get(1)   ); // 'num1'
alert( map.get('1') ); // 'str1'

alert( map.size ); // 3
```

### Map 迭代

- `map.keys()` 遍历并返回一个包含所有键的可迭代对象
- `map.values()` 遍历并返回一个包含所有值的可迭代对象
- `map.entries()` 遍历并返回一个包含所有实体 `[key, value]` 的可迭代对象，`for..of` 在默认情况下使用的就是这个

``` javascript
const map = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion', 50]
]);

// 遍历所有的键
for (let v of map.keys()) {
  console.log(v); // cucumber, tomatoes, onion
}

// 遍历所有的值
for (let v of map.values()) {
  console.log(v); // 500, 350, 50
}

// 遍历所有的实体 [key, value]
for (let v of map) {
  /**
   * ['cucumber', 500]
   * ['tomatoes', 350]
   * ['onion', 50]
   */
  console.log(v);
}
```

### 从对象创建 Map

``` javascript
const obj = {
  name: 'John',
  age: 30
};

const map = new Map(Object.entries(obj));

console.log(map.get('name')); // John
```

### 从 Map 创建对象

``` javascript
const map = new Map();
map.set('banana', 1);
map.set('orange', 2);
map.set('meat', 4);

const obj = Object.fromEntries(map.entries());

console.log(obj.orange); // 2
```
## Set（集合）

`Set` 是一个“值的集合”，每个值只能出现一次。

### 方法和属性

- `new Set(iterable)` 创建一个 `Set`，如果提供了一个 `iterable` 对象（通常是数组），将会从数组里面复制值到 `set` 中
- `set.add(value)` 添加一个值，返回 `set` 本身
- `set.delete(value)` 删除值，如果 `value` 在这个方法调用的时候存在则返回 `true` ，否则返回 `false`
- `set.has(value)` 如果 `value` 在 set 中，返回 `true`，否则返回 `false`
- `set.clear()` 清空 `set`
- `set.size` 返回元素个数

### Set 迭代

``` javascript
const set = new Set(['oranges', 'apples', 'bananas']);

for (let v of set) {
  console.log(v); // oranges, apples, bananas
}

// 与 forEach 相同：
set.forEach((value) => {
  console.log(value); // oranges, apples, bananas
});
```

`Map` 中用于迭代的方法在 `Set` 中也同样支持：

- `set.keys()` 遍历并返回一个包含所有值的可迭代对象
- `set.values()` 与 `set.keys()` 作用相同，这是为了兼容 `Map`
- `set.entries()` 遍历并返回一个包含所有的实体 `[value, value]` 的可迭代对象，它的存在也是为了兼容 `Map`
