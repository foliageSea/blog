# 06-Vue.js

### 1. 动态组件

作用: 在同一个挂载点, 可以切换显示不同组件

#### 语法

```vue
<component :is="comName"></component>

```

#### 💠组件缓存

```vue
<keep-alive>
  <component :is="comName"></component>
</keep-alive>
```

#### 钩子函数

*   `activated` 激活&#x20;

*   `deactivated`  失去激活状态

### 2. 组件插槽

应用场景: 组件内某个标签不确定

#### 语法

**子组件**

```vue
<slot></slot>
```

**父组件**

```vue
<MyCom>Hello</MyCom>
```

**默认值**

```vue
<slot>默认值</slot>
```

### 3. 具名插槽

**子组件**

```vue
<slot name="title"></slot>
```

**父组件**

```vue
<Son>
  <template #title></template>
</Son>
```

### 4. 作用域插槽

1.  子组件, 在 slot 标签上添加属性并赋值 `:row="defaultObj"`

2.  父组件, 通过 `v-slot="变量名"` 接收

*   PS: 作用域插槽相当于是插槽的子传父

`Pannle.vue` 子组件

```vue
<div class="box">
  <slot :row="defaultObj">{{ defaultObj.defaultOne }}</slot>
</div>

data() {
  return {
    defaultObj: {
      defaultOne: "张三",
      defaultTwo: "王五",
    },
  };
},

```

`UsePannle.vue` 父组件

```vue
<Pannle>
  <template v-slot="scope">
    {{ scope }}
    <br />
    {{ scope.row }}
    <br />
    {{ scope.row.defaultTwo }}
  </template>
</Pannle>
```

*   相当于作用域插槽的子传父

### 5. 自定义指令

#### 全局注册

`main.js`

```vue
Vue.directive('focus', {
  inserted(el) {
    console.log(el);
    el.focus();
  },
});
```

#### 局部注册

```vue
directives: {
  // 指令的名称
  focus: {
    // 挂载到页面后触发
    inserted(el) {
      console.log(el);
      el.focus();
    },
  },
},
```

#### 传值

```vue
Vue.directive('color', {
  inserted(el, binding) {
    // console.log(binding);
    el.style.color = binding.value;
  },
  update(el, binding) {
    el.style.color = binding.value;
  }
});
```
