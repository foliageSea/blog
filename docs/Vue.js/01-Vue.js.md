# 01-Vue.js

## 一. Vue 的介绍

### 1. 介绍

*   渐进式的 JavaScript 框架

*   官网地址: [https://cn.vuejs.org/](https://cn.vuejs.org/ "https://cn.vuejs.org/")

### 2. 渐进式概念

*   逐渐使用, 集成更多的功能

*   声明式渲染

*   组件系统

*   客户端路由

*   大规模状态管理

*   构建工具

### 3. 库和框架

*   库: 封装属性或方法 (例如: JQuery)

*   框架: 拥有自己的规则和元素, 比库强大的多 (例如 BootStrap, Vue)

### 4. vue 的开发方式

*   传统开发模式, 基于 HTML 文件开发 vue

*   工程开发方式, 在 webpack 环境中开发 vue (推荐)

### 5. yarn&#x20;

**安装**

```powershell
npm install -g yarn@2
```

**查看版本**

```powershell
yarn --version
```

**安装**包

```powershell
yarn add <包名>
```

### 6. @vue/cli 脚手架

1.  安装全局模块包

    ```powershell
    npm i -g @vue/cli
    ```

2.  查看版本

    ```powershell
    vue --version
    ```

3.  创建项目

    ```powershell
    vue create vuecli-demo
    ```

    *   注意: 项目名不能有大写字母, 中文和特殊字符

4.  运行项目

    ```powershell
    npm run server
    yarn serve
    ```

5.  @vue/cli 自定义配置

    *   `vue.config.js`

    *   devServer 开发服务器配置

        ```javascript
        const { defineConfig } = require('@vue/cli-service');
        module.exports = defineConfig({
          // 禁用 eslint 语法检测
          lintOnSave: false,
          transpileDependencies: true,
          // 开发服务器配置
          devServer: {
            // IP 地址
            host: '127.0.0.1',
            // 端口号
            port: 3000,
            // 默认浏览器打开项目
            open: true,
          },
        });

        // 注意: 修改 vue.config.js 配置文件需要重启服务

        ```

### 6. 项目基本结构

*   `src/main.js` 打包的入口文件

*   `src/app.vue`

    *   `template` HTML 代码

    *   `script` JS 代码

    *   `style` CSS 代码

    *   `.vue` 单文件(组件)

*   `public/index.html` 浏览器运行的网页

*   `package.json` 依赖包列表文件

*   `node_modules` 第三方依赖包

### 7. eslint 检查代码

*   插件: `eslint`

*   `vue.config.js` 配置 `lintOnSave` 为 `false`

### 8. vue 单文件

*   独立作用域

*   📌style 的 scoped 属性

    *   保证样式仅针对当前 template 生效

    ```vue
    <style scoped>

    </style>
    ```

### 9. MVVM 设计模式

*   Model 模型 `Plain JavaScript Object`

*   View 视图 `DOM`

*   ViewModel 视图模型 `Vue`

*   好处: 减少 DOM 操作, 提高开发效率

## 二. vue 指令

### 1. 插值表达式

*   声明式渲染

*   语法: `{{ 表达式 }}`

```vue
<div>{{ name }}</div>


<script>
export default {
  data() {
    return {
      name: '张三',
    };
  },
};
</script>

```

### 2. v-bind 绑定属性

*   用于设置标签的属性值

*   语法: `v-bind:属性名="属性值"`

```vue
<a :href="url"></a>

```

### 3. v-on 绑定事件

*   给标签绑定事件

```vue
<button v-on:click="change">改变</button>

<button @click="change">改变</button>

// 获取事件对象
<button @click="change($event)">改变</button>

```

### 4. v-on 点击修饰符

*   .stop 阻止事件冒泡

*   .prevent 阻止默认行为

*   .once 程序运行期间, 只触发一次事件处理函数

### 5. v-on 按键修饰符

*   @keyup.enter 监测回车按键

*   @keyup.esc 监测返回按键

更多修饰符:&#x20;

[事件处理 — Vue.js (vuejs.org)](https://cn.vuejs.org/v2/guide/events.html "事件处理 — Vue.js (vuejs.org)")

### 6. v-model 双向绑定

*   value 属性 和 vue 数据变量, 双向绑定到一起

*   `v-model="Vue数据变量"`

*   双向数据绑定

    *   变量变化 - 视图自动同步

    *   视图变化 - 变量自动同步

*   🎯 **v-model 展示只能用在表单标签上**

### 7. v-model 修饰符

*   .number 转成数字类型

*   .trim 去除首尾空白字符

*   lazy 在 change 时触发数据同步

### 8. v-model 表单数据获取

```vue
<template>
  <div id="app">
    来自:
    <select v-model="city">
      <option value="广州">广州</option>
      <option value="深圳">深圳</option>
      <option value="东莞">东莞</option>
    </select>
    <div>
      爱好:
      <label
        ><input v-model="hobby" type="checkbox" value="打游戏" />打游戏</label
      >
      <label
        ><input v-model="hobby" type="checkbox" value="敲代码" />敲代码</label
      >
      <label><input v-model="hobby" type="checkbox" value="睡觉" />睡觉</label>
    </div>
    <div>
      性别:
      <label><input v-model="gender" type="radio" value="男" />男</label>
      <label><input v-model="gender" type="radio" value="女" />女</label>
    </div>
    <div>
      自我介绍:
      <div>
        <textarea v-model.lazy="intro"></textarea>
      </div>
    </div>
  </div>
</template>

<script>
/*
  Vue 开发思维: 数据驱动视图
*/
export default {
  data() {
    return {
      // 下拉框默认城市
      city: "东莞",
      // 复选框收集多个数据, 初始化值要设置为数组
      hobby: ["睡觉"],
      // 单选框默认性别
      gender: "男",
      intro: "",
    };
  },
  methods: {},
};
</script>

<style>
</style>
```

### 9. v-html/v-text

*   更新DOM对象的innnerHTML/innerText

*   注意: 会覆盖插值表达式

### 10. v-show&#x20;

*   让盒子显示或隐藏 display: none

### 11. v-if 和 v-else

*   结构的渲染或者移除

*   两者互斥, 书写时需要和 v-if 同级

*   常见应用场景

    *   列表状态和空状态切换

    *   加载状态切换

```vue
<button @click="isShow = !isShow">切换状态</button>
<ul v-if="isShow === true">
  <li>列表 1</li>
  <li>列表 2</li>
  <li>列表 3</li>
</ul>
<div v-else>空状态</div>


```
