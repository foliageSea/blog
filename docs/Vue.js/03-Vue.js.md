# 03-Vue.js

### 1. 计算属性

*   作用: 通过一系列运算, 最终得到一个属性值

#### 语法

```javascript
computed: {
  num() {
    return 255;
  },
},
```

```html
<h2>{{ num }}</h2>
```

### 2. 计算属性的完整写法

#### 语法

```vue
computed: {
    full: {
      get() {
        return "佚名";
      },
      set(val) {
        console.log(val);
      },
    },
  },
```

#### 🎯 v-model 和 checkbox 绑定的两种场景

1.  绑定数组, 收集 value 值

2.  绑定布尔值(或者字符串), 收集 checked 值

#### 计算属性 应用场景

1.  购物车全选

### 2. 侦听器

作用: 侦听 data / computed 属性值的改变

#### 语法

```vue
watch: {
  name(newVal, oldVal) {
    console.log('new', newVal);
    console.log('old', oldVal);
  },
},
```

#### 侦听复杂数据类型

```vue
watch: {
  // 默认情况下, watch 侦听不到对象内部的变化
  user: {
    handler(newVal, oldVal) {
      console.log(newVal, oldVal);
      // oldVal 可以省略
    },
    immediate: true, // 立即执行
    deep: true, // 深度侦听复杂数据类型类变化 (递归)
  },
},
```

*   默认情况下, watch 侦听不到对象内部的变化

🎯 注意: 对象的内存地址没有变化

`immediate: true` 程序运行时立即触发侦听的 handler 函数

**应用: 分页**

`deep: true` 深度侦听复杂数据类型类变化 (递归)

### 3. 组件

#### 步骤

1.  新建组件

2.  导入组件

3.  注册组件

4.  使用组件

#### 分类

*   全局组件

*   局部组件

#### 全局组件注册

`main.js`

```vue
// 1. 导入
import MyButton from './components/MyButton.vue';
// 2. 全局注册
Vue.component('MyButton', MyButton);
```

#### 局部组件注册

`App.vue`

```vue
// 🎯 局部组件注册
import MyButton2 from "./components/MyButton.vue";
export default {
  components: {
    MyButton2,
  },
};
```

### 4. 组件通信

#### 父传子

> 子组件

```vue
<template>
  <div class="box">
    <h3>标题: {{ title }}</h3>
    <p>价格: {{ price }}元</p>
    <p>{{ info }}</p>
  </div>
</template>

<script>
export default {
  props: ["title", "price", "info"],
};
</script>
```

> 父组件

```vue
<MyProduct
  title="超级好吃的口水鸭"
  :price="50"
  :info="'开业大酬宾, 全场8折'"
></MyProduct>
```

*   📌 注意: 动态绑定属性 :属性名, 传递字符串需要加引号, 否则会识别成变量

#### 🎯 子传父

步骤

1.  子组件注册自定义事件 `this.$emit('自定义事件名', 传递的数据)`

2.  父组件绑定自定义事件 `@自定义事件名=(传递的数据) => {}`

> 子组件

```vue
this.$emit("change", 0.1);
```

> 父组件

```vue
  <MyProduct
    :title="'超级好吃的棒棒糖'"
    :price="price"
    :info="'开业大酬宾, 全场8折'"
    @change="fn"
  ></MyProduct>
  
methods: {
  fn(val) {
    this.price = Number(this.price - val).toFixed(2);
  },
},
```

#### 🎯 组件循环渲染

```vue
<MyProduct
  v-for="item in list"
  :key="item.id"
  :title="item.proname"
  :price="item.proprice"
  :info="item.info"
></MyProduct>
```

#### 🎯 包装自定义事件

> 方案一

```vue
<MyProduct
  v-for="item in list"
  :key="item.id"
  :title="item.proname"
  :price="item.proprice"
  :info="item.info"
  @change="(val) => changeFn(val, item)"
></MyProduct>
```

> 方案二

```vue
<MyProduct
  v-for="item in list"
  :key="item.id"
  :title="item.proname"
  :price="item.proprice"
  :info="item.info"
  @change="changeFn($event, item)"
></MyProduct>
```

```vue
methods: {
  changeFn(val, item) {
    item.proprice = Number(item.proprice - val).toFixed(2);
  },
},
```

#### 单向数据流

子组件 `props` 里属性**只读**, 否则父子组件数据不一致, 会报错

父组件可以修改子组件 `props` 里属性

#### 非父子关系通信

🔭本地存储

#### 跨组件通信

🔭EventBus

🎯Vuex
