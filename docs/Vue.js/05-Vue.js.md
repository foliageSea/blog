# 05-Vue.js

### 1. 模块导出函数

```javascript
// @ 表示 src
import http from '@/utils/http';

export function getbook(params) {
  // 函数被调用后, 返回 Promise 对象
  return http({
    method: 'GET',
    url: '/api/getbooks',
    params: params,
  });
}

export function addbook(data) {
  return http({
    method: 'POST',
    url: '/api/addbook',
    data: data,
  });
}
```

### 2. 导入模块

> 📌必须解构

```javascript
import { getbook, addbook } from "@/api/books";
```

### 3. 组件name属性 (了解)

```vue
components: {
  HomePage: Home,
  [Login.name]: Login,
}
```

### 4. props 项目级写法

```vue
props: {
  obj: {
    type: Object,
    required: true,
  },
},
```

*   🎯 `props`**引用类型**的属性可以被修改

*   type 校验类型

*   required 必传属性

*   default 默认值

### 6. Array.reduce()

[Array.prototype.reduce() - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce "Array.prototype.reduce() - JavaScript | MDN (mozilla.org)")

### 7. ref 属性

*   作用: 获取组件或DOM 元素

#### DOM元素

```vue
<h1 ref="refTitle">一级标题</h1> 

console.log(this.$refs.refTitle);

```

#### 组件

```vue
<Son ref="refSon"></Son>
// 获取组件
console.log(this.$refs.refSon);
// 获取组件的内部属性
console.log(this.$refs.refSon.name);
// 调用组件的内部方法
this.$refs.refSon.test();

```

*   🎯 不推荐用来父子通信

### 8. \$nextTick

*   🎯 Vue 的 DOM 更新是异步的

*   📌 \$nextTick 执行时机, DOM 更新后自动触发

```vue
this.count++;

this.$nextTick(() => {
  console.log(this.$refs.countRef.innerHTML);
});
```
