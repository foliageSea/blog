# 07-Vue.js

### 1. 路由

*   后端路由: 接口和服务的映射关系

*   前端路由: 路径和组件的映射关系

### 2. 单页面应用

*   开发效率高, 用户体验好

*   **依赖路由切换**

### 3. 组件

*   页面组件: `src/views`

*   复用组件: `src/components`

### 4. vue-router

#### 使用步骤

1.  下载

    ```powershell
    npm i vue-router@3
    ```

2.  导入 `main.js`

    ```javascript
    import VueRouter from 'vue-router';
    ```

3.  注册两个全局组件

    ```vue
    Vue.use(VueRouter);


    <router-view></router-view>
    <router-link></router-link>
    ```

4.  导入页面组件

    ```javascript
    import My from '@/views/My';
    ```

5.  创建路由规则数组

    ```javascript
    const routes = [
      {
        path: "/my",
        component: My
      },
    ];
    ```

6.  创建路由对象

    ```javascript
    const router = new VueRouter({ routes });
    ```

7.  把路由对象注入Vue实例

    ```javascript
    new Vue({
    render: h => h(App), 
    router: router, 
    }).$mount('#app');
    ```

8.  `<router-view />` 作为挂载点, 切换不同的路由页面

### 5. router-link 组件

#### 语法

```vue
<router-link to="/my">
```

*   本质: a 标签

*   `.router-link-exact-active` 精确匹配

*   `.router-link-active` 模糊匹配

*   🎯 用途: 选中高亮

### 6. 声明式导航 (组件)

#### 语法

```vue
<router-link to="/find">发现音乐</router-link>

```

#### 路由页面传参

1.  查询字符串

    `app.vue`

    ```vue
    <router-link to="/part?id=123">朋友</router-link>
    ```

    `Part.vue`

    ```vue
    this.$route.query
    ```

2.  动态参数

    `app.vue`

    ```vue
    <router-link to="/part/456">朋友 /part/456</router-link>
    ```

    `Part.vue`

    ```vue
    this.$route.params
    ```

#### 默认路由重定向路由路径

```vue
const routes = [
  {
    // 默认路由
    path: "/",
    // redirect 重定向 / 替换为 /find
    redirect: "/find",
  },
];
```

### 7. 路由模式

```javascript
const router = new VueRouter({
  routes,
  // 路由模式 mode 默认值 hash 带 # 模式
  mode: 'history', // 不带 # 的模式
});
```

#### 后端也需要配置&#x20;

[HTML5 History 模式 | Vue Router (vuejs.org)](https://v3.router.vuejs.org/zh/guide/essentials/history-mode.html "HTML5 History 模式 | Vue Router (vuejs.org)")

### 8. 编程式导航 (JS代码)

#### 普通写法

```vue
this.$router.push('/my')
```

#### 进阶写法

`app.vue`

```vue
this.$router.push({ name: 'Part', {id: 1}})
```

`main.js`

```javascript
const routes = [
  {
    path: "/part",
    name: 'Part',
    component: Part
  }
];
```

### 9. 嵌套路由

`main.js`

```javascript
const routes = [
 {
    path: "/find",
    component: Find,
    children: [
      {
        path: "",
        redirect: "recommend",
      },
      {
        path: 'recommend',
        component: Recommend,
      },
      {
        path: 'ranking',
        component: Ranking,
      },
      {
        path: 'songlist',
        component: SongList,
      }
    ]

  }
];

```

`app.vue`

```vue
<ul>
  <li><router-link to="/find/ranking">排行榜</router-link></li>
  <li><router-link to="/find/recommend">推荐</router-link></li>
  <li><router-link to="/find/songlist">歌单</router-link></li>
</ul>
```

#### 10. 404 页面

```javascript
const routes = [
  ...
  {
    // 404 页面路由写在最后
    path: "*",
    component: NotFound
  }
];
```

#### 11. 前置路由守卫

```javascript
const isLogin = true;
router.beforeEach((to, from, next) => {
  if (to.path === '/my' && isLogin === false) {
    alert('请先登录');
    next(false);
  } else {
    next();
  }
});
```
