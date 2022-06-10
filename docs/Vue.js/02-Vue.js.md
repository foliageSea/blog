# 02-Vue.js

### 1. v-model 数据视图双向绑定

*   作用: 数据视图双向绑定

#### 修饰符

*   `.number` 转换成数字类型

*   `.trim` 去除首位空格

*   `.lazy` 失去焦点后才收集数据 `(change)`

### 2. 表单数据获取

#### 下拉框

```vue
<select v-model="city">
  <option value="广州">广州</option>
  <option value="深圳">深圳</option>
  <option value="东莞">东莞</option>
</select>
```

```vue
data() {
  return {
    // 下拉框默认城市
    city: "东莞",
  };
},
```

#### 单选框

```vue
<label><input v-model="gender" type="radio" value="男" />男</label>
<label><input v-model="gender" type="radio" value="女" />女</label>
```

```vue
data() {
  return {
    // 单选框默认性别
    gender: "男",
};
```

#### 复选框

```vue
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
```

```vue
data() {
  return {
    // 复选框收集多个数据, 初始化值要设置为数组
    hobby: ["睡觉"],
  };
},
```

#### 文本域

```vue
<div>
  自我介绍:
  <div>
    <textarea v-model.lazy="intro"></textarea>
  </div>
</div>
```

```vue
data() {
  return {
    intro: "",
  };
},
```

### 3. v-if 和 v-else

作用: 结构的渲染或者移除

注意: 两者互斥, 书写时需要和 v-if 同级

#### 📌 常见应用场景

*   列表状态和空状态切换

*   加载状态切换

### 4. v-for

作用: 基于源数据多次渲染元素或模板块

注意: 支持遍历 数组, 对象, 数字, 字符串

#### 📌 v-for 更新监测

**数组方法影响原数组可以触发更新监测**

📌 **直接通过下标修改数组的值不会触发更新监测**, 需要用 `this.$set(数组, 下标, 值)`

#### 🎯 key

1.  无key, 就地更新

2.  有key, 按照key比较进行更新

3.  key的要求, 唯一不重复的字符串或者数值

4.  有id用id, 无id用索引

好处: 可以配合虚拟DOM, 提高更新的性能

#### 📌 虚拟 DOM

本质是保存节点关键信息的一个JS对象

*   比如保存属性和内容

好处

*   提高DOM更新的性能, 不用频繁操作真实DOM

### 5. 动态 class

```vue
:class="{redClass: true}"
:class="{'red-class': true}"

```

### 6. 动态 style

```vue
:style="{color: colorStr, fontSize: '100px'}"
:style="{color: colorStr, 'font-size': '100px'}"

```
