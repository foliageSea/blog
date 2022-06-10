# 04-Vue.js

### 1. 生命周期

*   🎯从创建到销毁的整个过程, 就是Vue实例的生命周期

### 2. 钩子函数

*   作用: 特定的时间点, 执行特点的操作

#### 分类

1.  初始化: data / method 挂载

    *   beforeCreate

    *   created 🎯 发送请求业务

2.  挂载: template 挂载

    *   beforeMount

    *   mounted 🎯 获取DOM业务

3.  更新: 数据发生变化 (打补丁)

    *   beforeUpdate

    *   updated

    *   🎯 watch

4.  销毁

    *   beforeDestroy

    *   destroyed

    *   销毁 vue 实例 v-if="false" 或 \$destroy()

    *   🎯应用: 手动清除定时器/延时器/全局事件, 一般写在 📌beforeDestroy
