# test

## 1. BFC

### 什么是 BFC

BFC 是 Block Fomatting Context（块级上下文）的缩写。

BFC 是一个独立的空间，里面子元素的渲染不影响外面的布局。

### BFC 的作用

- 解决 `margin` 塌陷
- 清除浮动

### 如何触发 BFC

- `overflow: hidden`
- `display: inline-block` / `table-cell` / `flex`
- `position: absolute` / `fixed`

## 2. 盒子模型

### 什么是盒子模型

盒子模型就是元素再网页中实际占据的大小。

