# test

## 1. BFC

### 什么是 BFC

BFC 是 Block Fomatting Context（块级上下文）的缩写

BFC 是一个独立的空间，里面子元素的渲染不影响外面的布局

### BFC 的作用

- 解决 `margin` 塌陷
- 清除浮动

### 如何触发 BFC

- `overflow: hidden`
- `display: inline-block` / `table-cell` / `flex`
- `position: absolute` / `fixed`

## 2. 盒子模型

### 什么是盒子模型

盒子模型就是元素再网页中实际占据的大小

### 盒子模型的计算方式

`width / height + padding + border`

### `box-sizing`

当 `box-sizing` 的值为 `border-box` 时，会改变盒子模型的计算方式

## 3. `margin` 负值

### 有什么效果

- `margin-left` 负值，元素自身向左移动
- `margin-top` 负值，元素自身向上移动
- `margin-right` 负值，右边的元素向左移动
- `margin-bottom` 负值，下边的元素向上移动

### 应用

- 增加宽度
- 圣杯布局
- 双飞翼布局

## 4. 圣杯布局

### 什么是圣杯布局

两边固定宽度，中间自适应宽度

### 难点

- `margin-left: -100%`，`100%` 是父级宽度的 `100%`
- `margin-right: -300px`，其它元素认为此元素宽度减少 `300px`

## 5. 双飞翼布局

## 什么是双飞翼布局

左右宽度固定，中间宽度自适应，中间的内容优先加载

## 6. 清除浮动

### 清除浮动的方法

- 父级加 `overflow: hidden`
- 父级设置 `clearFix`
- 父级也浮动
