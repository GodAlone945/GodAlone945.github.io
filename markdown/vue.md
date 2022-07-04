

# 一、杂记

- vue——声明式编程
- js——命令式编程

# 二、语法解析
## v-once
1. 该指令后面不需要跟任何表达式
2. 该指令表示元素和组件只能在当前页面渲染一次，在第一次数据渲染完成后，不会在变化。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>title<title>
</head>
<body>

<div id="app>
  <h2 v-once>{{message}}</h2>
</div>

<script src="../js/vue.js"></script>
<script>
  const app = new Vue({
    el: '#app',
    data: {
      message: '你好啊'
    }
  })
</script>

</body>
</html>
```

## v-html
1. 该指令会将 `string` 里的 `html` 解析出来并进行渲染

```html
  <div class="" id="app">
    <h2>{{message}}</h2>
    <h2>{{url}}</h2>
    <h2 v-html="url"></h2>
  </div>

  <script src="node_modules/vue/dist/vue.js"></script>
  <script>
      const app = new Vue({
      el: '#app',
      data: {
        message: '你好啊',
        url: '<a href="http://www.baidu.com">百度一下</a>'
      }
    })
  </script>
```

## v-cloak
1. 该指令可以在下方 `script` 中的指令未解析时，将上方的 `{{}}` 遮罩，以防显示问题。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>

  <style>
    [v-cloak] {
      display: none;
    }
  </style>

</head>
<body>
  
  <div class="" id="app" v-cloak>
    <h2>{{message}}</h2>
    <h2>{{url}}</h2>
    <h2 v-html="url"></h2>
  </div>

  <script src="node_modules/vue/dist/vue.js"></script>
  <script>
      const app = new Vue({
      el: '#app',
      data: {
        message: '你好啊',
        url: '<a href="http://www.baidu.com">百度一下</a>'
      }
    })
  </script>

</body>
</html>
```

## v-bind

绑定值为 `null` 或 `undefined` ，将不会被包含在渲染的元素上。

### :class
1. 动态绑定属性
2. 可以缩写为 `:`

```html
// 1.对类名进行判断，来传入多个类样式
<div :class="{ 类名: boolean, 类名: boolean }">123</div>

// 2.如果对象里过于复杂，可以放在一个methods或者computed中
<div :class="getClass()">123</div>

methods: {
  getClass: function () {
    return { 类名: boolean, 类名: boolean }
  }
}
```

### :style
```html
# 有多个变量对象需要添加，可以使用数组
<h2 :style="[fontType, colorType]"></h2>

data: {
  fontType: { fontSize: '12px' },
  colorType: { colorSize: 'red' }
}

# 直接将属性名写在里面，属性值必须加引号
<h2 :style="{ fontSize: 'value(属性值)'  }"></h2>

# 使用变量传值，起到动态修改的作用
<h2 :style="{ fontSize: finalColor }"></h2>
data: {
  finalColor: 'red
}

# 如果对象里过于复杂，可以放在一个methods或者computed中
<div :style="getStyle()">123</div>

methods: {
  getStyle: function () {
    return { fontSize: '16px', color: 'red' }
  }
}
```

## v-model

- **radio**

```html
// 在没有 v-model 的情况下，必须设置 name 值，才能让单选互斥
<div id="id">
  <label for='male'>
    <input type="radio" id='male' value='男' v-model='sex'>男
  </label>
  <label for='female'>
    <input type="radio" id='female' value='女' v-model='sex'>女
  </label>
</div>

data: {
  设置 radio 的默认选中项
  sex: '男'
}
```

- **checkout**

```html
<!-- ====checkout单选框==== -->
<div id="app">
  <label for="agree">
    <input type='checkout' id='agree' v-model='agree'>同意协议
  </label>
  <h2>{{ isAgree }}</h2>
  <button :disabled='!isAgree'>下一步</button>
</div>

data: {
  isAgree: false
}
```

```html
<!-- ====多选框==== -->
<div id="app">
  <label for="">
    <input type='checkout' v-model='hobbies' value='篮球'>篮球
    <input type='checkout' v-model='hobbies' value='足球'>足球
    <input type='checkout' v-model='hobbies' value='乒乓球'>乒乓球
    <input type='checkout' v-model='hobbies' value='网球'>网球
    <input type='checkout' v-model='hobbies' value='羽毛球'>羽毛球
  </label>
</div>

data: {
  hobbies: []
}
```

- **select**

```html
<!-- ====下拉选项==== -->
<!-- multiple 允许多选 -->
<select name="abc" id="" v-model="苹果" multiple>
  <option value="苹果">苹果</option>
  <option value="香蕉">香蕉</option>
  <option value="榴莲">榴莲</option>
  <option value="葡萄">葡萄</option>
</select>

data: {
  hobbies: []
}
```

```html
<!-- ====动态渲染选择列表==== -->
<label v-for="(item, index) in list" :for="item">
  <input type="checkout" :value="item" :id="item" v-model="hobbies">{{ item }}
</label>

data: {
  hobbies: ['篮球', '足球', '乒乓球', '羽毛球', '台球']
}
```

- **修饰符**
  - lazy 修饰符：
    - lazy 修饰符-可以让数据在失去焦点或者回车时才会更新
  - number 修饰符
    - v-model 绑定的 输入框 数值会自动转换为 String 类型
    - 该修饰符将 输入框 的值以 number 类型存储
  - trim 修饰符
    - 该修饰符将字符串两端的多余字符串去掉

## v-on

```js
// 当方法传入多个变量时，同时需要传入 event 对象
<button @click="show(data, $event)"></button>

data: {
  data: 123
}

methods: {
  show (data, e) {
    console.log(data, e) // 123 默认对象
  }
}
```

## v-for

循环对象

```js
// item => 属性值  key => 属性名称  index => 下标
<ul v-for="(item, key, index) in itemList"></ul>

data () {
  return {
    itemList: {
      name: 'wfw',
      age: 18,
      height: 170
    }
  }
}
```



## 计算属性

对于任何包含响应式数据的复杂逻辑，你都应该使用**计算属性**。

如果你不希望有缓存，请用 `method` 来替代。

```html
* 计算属性会将第一次计算结果缓存，如果计算的输入值不发生变化，将不执行代码，提高性能
* 多使用 computed 属性 
<h1>{{ fullName }}</h1>
<h1>{{getFullName()}}</h1>

computed: {
  fullName: function () {
    return this.firstName + " " + this.lastName
  }
},
methods: {
  getFullName: function () {
    return this.firstName + ' ' + this.lastName
  }
}

// 复杂操作
<h1>{{ fullName }}</h1>

data: {
  firstName: '1',
  lastName: '2'
},
computed: {
  fullName:{
	// 当有人读取fullName时，get调用
   	// 什么时候调用：第一次fullName时调用；所依赖的值变化时调用
    get() {
    	return `${firstName}-${lastName}`
	},
	当修改funllName时调用
	set(data) {
		const arr = data.split('-')
 		this.firstName = arr[0]
		this.lastName = arr[1]
	}
  }
}
```

## 侦听器

`watch` 选项提供了一个更通用的方法来响应数据的变化。当需要在数据变化时执行异步或开销较大的操作时，这个方式是最有用的。

```js
new app ({
    data: {
        numbers: {
            a:  1,
            b: 2
        }
    },
    watch: {
        // 监视numbers对象中所有属性值的变化
        numbers: {
            deep: true,	// 监视多级结构中所有属性的变化
            handler() {
                console.log('numbers改变了')
            }
        },
        'numbers.a': {
            handler() {
                console.log('a改变了')
            }
        }
    }
})
```



## 修饰符

```html
<!-- 停止冒泡 -->
<button @click.stop="doThis"></button>

<!-- 阻止默认行为 -->
<button @click.prevent="doThis"></button>

<!-- 键修饰符，键别名 -->
<input @keyup.enter="onEnter">
<input @keyup.13="onEnter">
// 自定义按键修饰符别名
Vue.config.keyCodes.f1 = 112

```

## 条件渲染-可复用的元素

- Vue 会尽可能高效地渲染元素，通常会复用已有元素而不是从头开始渲染。
- 为了不复用某些元素，添加 `key` 属性来表示当前元素的独立性，就可以复用了。

### v-show和v-if

- 如果需要频繁切换显示和隐藏，使用 `v-show`
- 当只有一次切换时，通过使用 `v-if`

## 过滤器

```js
{{ message | capitalize }}

filters: {
  capitalize (value) {
    return value + 1
  }
}
```

- 可以添加多个过滤器，后一个过滤器接受的是前一个过滤器的结果
```js
{{ message | capitalize | change }}

filters: {
  capitalize (value) {
    return value + 1
  },
  change () {
    return value * 3
  }
}
```

- 全局注册过滤器

```js
Vue.filter('mySlice', function(value) {
    return value.slice(0, 4)
})

new Vue({
    data: {},
    methods: {}
})
```



## 键盘事件

- 回车 =》 enter
- 删除 =》 delete （捕获“删除”和“退格”键）
- 退出 =》 esc
- 空格 =》 spce
- 换行 =》 tab（特殊，必须配合keydown去使用）
- 上 =》 up
- 下 =》 down
- 左 =》 left
- 右 =》 right

## 自定义指令

```html
<span v-big='n'></span>

<script>
	new Vue({
        el: '#app',
        data: {
            n: 1
        },
        directives: {
            big函数何时会被调用？ 1.指令与元素成功绑定时；2.指令所在的模板重新解析时调用；
            big(element, binding) {
        		this --- 指向window
                console.log('big')
                element.innerText = binding.value * 10
            }
        }
    })
</script>
```



# 三、组件化



## 3.1 基本使用方法

```html
<div id="app">
  <!-- ====使用组件==== -->
  <my-cpn></my-cpn>
</div>

<script>
  // ====创建组件构造器对象====
  const cpnC = Vue.extend({
    template: `
      <div>
        <h1>GODALONE</h1>
      </div>`
  })

  // ====注册组件====
  Vue.component('my-cpn', cpmC)

  // ====注册组件====
  const app = new Vue({
    el: '#app',
    data: {
      message: '123'
    },
    // 局部组件
    component: {
      cpn: cpnC
    }
  })

  // ====注册局部组件的语法糖====
  const app = new Vue({
    el: '#app',
    data: {
      message: '123'
    },
    components: {
      'cpn2': {
        template: `
          <div>
            <h2>123</h2>
          </div>
        `
      }
    }
  })
</script>>

// ========抽离模板的组件写法========

<!-- ====script标签，注册组件==== -->
<script type="text/x-template" id="cpn">
  <div>
    <h2>godalone</h2>
    <p>123</p>
  </div>
</script>

<!-- ====template标签==== -->
<template id="cpn">
  <div>
    <h2>godalone</h2>
    <p>123</p>
  </div>
</template>

const app = new Vue({
  el: '#app',
  data () {
    return {
      message: 'GODALONE'
    }
  },
  components: {
    cpn2: {
      template: '#cpn2',
      methods: {
        showMessage() {
          console.log('showMessage')
        }
      }
    }
  }
})

<script>
  // 全局注册
  Vue.component('cpn', {
    template: '#cpn',
    // 一个组件的 `data` 选项必须是一个函数，每个实例可以维护一份被返回对象的独立的拷贝
    // data必须是函数，是为了为每次组件的复用创造单独的栈空间，保证组件数据的独立性
    data () {
      return {
        message: '123'
      }
    }
  })
</script>
```

- 组件里的 `data` 为什么是函数
  -  一个组件的 `data` 选项必须是一个函数，每个实例可以维护一份被返回对象的独立的拷贝
  - data必须是函数，是为了为每次组件的复用创造单独的栈空间，保证组件数据的独立性

## 3.2 组件化应用构建

```js
<div id="counter">
</div>

const TodoItem = {
    template: `<li>This is a todo.</li>`
}

// 创建 Vue 应用
const app = Vue.createApp({
    components: {
        TodoItem	// 注册一个新组件
    },
    ... // 组件的其它 property
})
    
// 挂载 Vue 应用
app.mount('#counter')
```

将其放到另一个组件的模板中：

```html
<ol>
    <!-- 创建一个 todo-item 组件实例 -->
    <todo-item></todo-item>
</ol>
```

为能将数据从父组件传入子组件，使之能够接收一个 `prop`:

```js
app.component('todo-item', {
    props: ['todo'],
    template: `<li>{{ todo.text }}</li>`
})
```



## 3.3 父子组件的通信

### 父组件向子组件传递数据

- 在父组件中调用子组件时，在子组件里填写的值名称有驼峰属性名时，如下
- 组件中数据优先使用props中的数据

```html
<div id="app">
  <cpn2 :god-alone="456"></cpn2>
</div>

props: {
  godAlone: {
    type: String,
    default: '123'
  }

}
```

```html
<body>

  // ====子组件的调用====
  <div id="app">
    // ====向子组件传递内容值====
    // ====当传递父组件中的变量时，需要添加 v-bind ====
    <cpn2 :message="message"></cpn2>
  </div>
  
  // ====自定义子组件模板====
  <template id="cpn2">
    <div>
      <h1>{{ message }}</h1>
    </div>
  </template>
  
  <script src="node_modules/vue/dist/vue.js"></script>

  <script>
  
  // ====注册子组件====
  const cpn2 = {
    template: '#cpn2',
    // ====设置父组件要传递给子组件的值====
    props: {
      message: {
        type: String,
        default: '123',
        // ====设置必须传值====
        required: true
      },
      // ====当值类型为数组或对象时，默认值要返回一个函数类型的值====
      data: {
        type: Array,
        default () {
          return []
        }
      }
    }
  }
  
  const app = new Vue({
    el: '#app',
    data () {
      return {
        message: 'GODALONE'
      }
    },
    components: {
      cpn2: cpn2
    }
  })
  </script>

</body>
```

### 自定义事件\

- 在那个组件实例对象上定义自定义事件，就去哪个组件里面调用。

```html
<div id="app">
    <cpn2 @itemclick="cpnClick"></cpn2>
  </div>

  <template id="cpn2">
    <div>
      <button v-for="item in categories" @click="btnClick(item.id)">{{ item.name }}</button>
    </div>
  </template>
  
  <script src="node_modules/vue/dist/vue.js"></script>

  <script>

  const cpn2 = {
    template: '#cpn2',
    data() {
      return {
        categories: [
          {
            id: 'a',
            name: '热门推荐'
          }, 
          {
            id: 'b',
            name: '希腊免费'
          },
          {
            id: 'c',
            name: '路撒地方'
          }
        ]
      }
    },
    methods: {
      btnClick(item) {
        this.$emit('itemclick', item)
      }
    }
  }
  
  const app = new Vue({
    el: '#app',
    data () {
      return {
        message: 'GODALONE'
      }
    },
    methods: {
      cpnClick (item) {
        console.log(item)
      }
    },
    components: {
      cpn2: cpn2
    }
  })
  </script>
```

### 父子组件的访问方式

- 父组件访问子组件：使用 `$children` 或 `$refs`
- 子组件访问父组件：使用 `$parent`

```js
<body>

  <div id="app">
    <cpn2 :message="message"></cpn2>
    <cpn2 message="god" ref="god"></cpn2>
    <cpn2 message="alone" ref="alone"></cpn2>
    <button @click="btnClick">点击事件</button>
  </div>

  <template id="cpn2">
    <div>
      <h1>{{ message }}</h1>
    </div>
  </template>
  
  <script src="node_modules/vue/dist/vue.js"></script>

  <script>
  
  const app = new Vue({
    el: '#app',
    data () {
      return {
        message: 'GODALONE'
      }
    },
    methods: {
      btnClick () {
        // console.log(this.$children)
        console.log(this.$refs.god)
      }
    },
    components: {
      cpn2: {
        template: '#cpn2',
        methods: {
          showMessage() {
            console.log('showMessage')
          }
        }
      }
    }
  })
  </script>

</body>
```

## 3.4 兄弟组件之间共享数据 EventBus

- $on    接收数据的那个组件
- $emit 发送数据的那个组件

## 3.5 main.js 文件解析

默认引入的vue.runtime.esm.js文件没有模板解析器，需要调用 `render` 解析模板

## 3.6 output.js

vue inspect > output.js

# 四、生命周期

![实例的生命周期](E:\Gitee\note\vx_images\lifecycle.svg)

- init（Events & Lifecycle）---- 初始化：生命周期、事件，但数据代理还未开始
- beforeCreate ---- 无法通过vm访问到data中的数据、methods中的方法
- init (injections & reactivity) ---- 初始化：数据监测、数据代理。
- created ---- 可以通过vm访问到data中的数据、methods中配置的方法
- created <----> beforeMounted 之间 ---- Vue开始解析模板，生成虚拟DOM，页面还不能显示解析好的内容。
- beforeMount ---- 页面呈现的是<font color=red>未经Vue编译</font>的DOM结构；所有对DOM的操作，最终都不奏效。
- Create vm.$el and replace 'el' with it ---- 将内存中的虚拟DOM转为真是DOM插入页面。
- mounted ---- 1、页面中呈现的是<font color=red>经过Vue编译</font>的DOM。对DOM的操作均有效（尽可能避免）。至此初始化过程结束，一般在此进行：开启定时器、发送网络请求、订阅消息、绑定自定义事件、等<font color=red>初始化操作</font>。
- beforeUpdate ---- 此时：数据是新的，单页面是旧的，即：页面尚未和数据保持同步。
- Virtual DOM re-render and patch ---- 根据新数据，生成新的虚拟DOM，随后与旧的虚拟DOM进行比较，最终完成页面更新，即：完成了 Model -》 View 的更新。
- updated ---- 此时：数据最新的，页面也是新的，即：页面和数据保持同步。
- beforeDestroy ---- 此时：vm中所有的：data、methods、指令等等，都处于可用状态，马上要执行销毁过程，一般在此阶段：关闭定时器、取消订阅消息、解绑自定义事件等收尾操作。

# 五、VUE检测数据

Object.defneProperty

数组方法监测：

push，pop，shift，unshift，splice，sort，reverse

修改数据

vue.set()

this.$set()

# 六、混入

```js
// minxin.js
export const mixin = {
    methods: {
        showImage() {
            alert('123')
        }
    }
}

// app.vue
<script>
      import {mixin} from '../mixin.js'
	export default {
        name: 'student',
        data() {
            return {
                name: '张三'
            }
        },
        minxins: [mixin]
    }
</script>

// main.js
import {maxinOne, maxinTwo} from '../mixin.js'

Vue.mixin(maxinOne)
Vue.maxin(maxinTwo)
```

# 七、插件

```js
// plugin.js
export obj = {
    install() {
        console.log('loading!')
    }
}

// 自动获取焦点组件
export default {
    install(Vue, x, y, x) {
        Vue.directive('fbind', {
    		// 指令与元素成功绑定时（一上来）
    		bind(element, binding) {
        		element.value = binding.value
    		},
    		// 指令所在元素被插入页面时
    		inserted(element, binding) {
       		 element.focus()
    		},
    		// 指令所在的模板被重新解析时
    		update(element, binding) {
        		element.value = binding.value
    		}
		})
    }
}
// 使用获取焦点组件
<input type='text' v-fbind:value='name'>

// main.js
import plugins from '../plugin.js'

Vue.use(plugins, 1,2,3)
```

# 八、防抖和节流

如果某个组件仅适用一次，在 `methods` 中直接应用防抖

```js
app.component('save-button', {
  created() {
    // 使用 Lodash 实现防抖
    this.debouncedClick = _.debounce(this.click, 500)
  },
  unmounted() {
    // 移除组件时，取消定时器
    this.debouncedClick.cancel()
  },
  methods: {
    click() {
      // ... 响应点击 ...
    }
  },
  template: `
    <button @click="debouncedClick">
      Save
    </button>
  `
})
```



# 九、插槽

```html
<body>

  <div id="app">
    <cpn2 :message="message">
      <button>one</button>
    </cpn2>
    <cpn2 :message="message">
      <input type="checkout">
      <span>123</span>
    </cpn2>
    <cpn2 :message="message"></cpn2>
    <cpn2 :message="message"></cpn2>
  </div>

  <template id="cpn2">
    <div>
      <h1>{{ message }}</h1>
      <!-- <slot></slot> -->
      <!-- 插槽默认值 -->
      <slot><button>btn</button></slot>
    </div>
  </template>
  
  <script src="node_modules/vue/dist/vue.js"></script>

  <script>
  
  const app = new Vue({
    el: '#app',
    data () {
      return {
        message: 'GODALONE'
      }
    },
    methods: {
    },
    components: {
      cpn2: {
        template: '#cpn2',
        props: {
          message: {
            type: String
          }
        }
      }
    }
  })
  </script>

</body>
```

## 具名插槽

```html
<body>

  <div id="app">
    <cpn2><span>标题</span></cpn2>
    <!-- 组件里面的标签任意，只要加入slot属性 -->
    <cpn2><span slot="right">替换右边</span></cpn2>
  </div>

  <template id="cpn2">
    <div>
      <slot name="left"><span>左边</span></slot>
      <slot name="center"><span>中间</span></slot>
      <slot name="right"><span>右边</span></slot>

      <!-- 如果不加name属性，插槽里面的内容会被上面的内容替换掉 -->
      <slot>哈哈</slot>
    </div>
  </template>
  
  <script src="node_modules/vue/dist/vue.js"></script>

  <script>
  
  const app = new Vue({
    el: '#app',
    data () {
      return {
        message: 'GODALONE'
      }
    },
    methods: {
    },
    components: {
      cpn2: {
        template: '#cpn2',
        props: {
          message: {
            type: String
          }
        }
      }
    }
  })
  </script>

</body>
```

组件里面使用变量的时候，在当前主模板里面寻找相关的变量

## 作用域插槽

```html
<body>

  <div id="app">
    <cpn2>
      <template slot-scope="slot">
          // slot 接收组件传来的参数 ：{data: ['JavaScript', 'C++', 'Java', 'Python']}
        <div v-for="item in slot.data">{{ item }}</div>
      </template>
    </cpn2>
  </div>

  <template id="cpn2">
    <div>
      <slot :data=pLanguages>
        <li v-for="(item, index) in pLanguages" :key="index + 'pl'">{{ item }}</li>
      </slot>
    </div>
  </template>
  
  <script src="node_modules/vue/dist/vue.js"></script>

  <script>
  
  const app = new Vue({
    el: '#app',
    data () {
      return {
        message: 'GODALONE'
      }
    },
    methods: {
    },
    components: {
      cpn2: {
        template: '#cpn2',
        data () {
          return {
            pLanguages: [ 'JavaScript', 'C++', 'Java', 'Python' ]
          }
        },
        props: {
          message: {
            type: String
          }
        }
      }
    }
  })
  </script>

</body>
```

# 模块化

## 模块化导入和导出

### export

- 每个文件模块中都提供了一个对象：exports
- exports默认是一个空对象。
- 把需要被外部访问的成员exports出去。
- exports和 `module.exports`的一个引用
- export default 的属性才能利用`import XXX form 'xxx'`

```js
// 隐性显示==========
var module = {
  exports: {
    foo: 'bar',
    add: function
  }
}

return module.exports
//================

console.log(exports === module.exports) // => true

exports.foo = 'bar'

// 等价于
module.exports.foo = 'bar'
```
```js
var foo = 'bar'
function add(x, y) {
  return x + y
}
// 如果一个模块需要直接导出某个成员，而非挂载的方式
// 必须使用下面这种方式
module.exports = 'hello'

// 导出多个成员（必须在对象中）
exports.a = 123
exports.b = 'hello'
exports.c = function () {
  console.log('ccc')
}
exports.d = {
  foo: 'bar'
}
exports.add = add

// 导出单个成员（拿到的就是：函数，字符串）
module.exports = 'hello'
module.exports = function (x,y) {
  return x+y
}
上面这两个同时导出，后者会覆盖前者

也可以这样导出多个
module.exports = {
  add: function () {
    return x + y
  },
  str: 'hello'
 }

// 另外一个页面接收
var add = require('./foo')
```

### import

要使用 `import` 命令来加载对应的模块，需要设置类型 `module`
```html
<script src="aaa.js" type="module"></script>
```

导出
```js
let flag = true
let sum = 1
export {
  flag, sum
}

export var total = 1000

export function num1 (num1, num2) {
  return num1 + num2
}
```
导入
```js
import { flag, sum } from './aaa.js'

import {total} from './aaa.js'

import {num1} from './aaa.js'

import * as aaa from './aaa.js'
```

## webpack

```js
// 打包方式
将 js 文件 以某个文件名打包到指定文件里
webpack ./src/main.js ./dist/bundle.js

在配置webpack.config.js了之后，直接调用 `webpack`

或者在package.json中的`scripts`中添加
"build": "webpack"

```

### vue项目中给路径起别名

```js
resolve: {
  alias: {
    '@': resolve('src')
  }
}
```

### loader

需要将css或less文件导入到主配置文件`main.js`文件中
```js
require('/src/css/normal.css')
require('/src/css/special.less')

// commonjs
const { num1, num2 } = require('./number.js')

// ES6
// import { name, age, height } from './info.js'
import { name, age, height } from './info.js'

console.log(name,age,height)
console.log(num1, num2)

```

#### css-loader

安装
```shell
npm install --save-dev css-loader
```

package.config.js 配置

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
```
css-loader => 只负责加载`css`文件
#### style-loader
安装
```shell
npm install --save-dev style-loader
```
#### less-loader
安装
```shell
npm install less less-loader --save-dev
```
```js
const path = require('path')

module.exports = {
  entry: './src/js/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.less$/i,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "less-loader" }
        ]
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      }
    ]

  }
}

```

#### url-loader

安装
```shell
npm install url-loader --save-dev
```

配置
```js
rules: [
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 当加载的图片，小于limit时，会将图片编译成base64字符串形式
              // 当大于limit时，使用file-loader模块加载
              limit: 8192,
              // 将打包后的图片放到img文件里
              // [name] => 将图片名字加到图片命名里面
              // [hash:8] => 文件名加8位哈希值
              // [ext] => 文件后缀名
              name: 'img/[name].[hash:8].[ext]'
            },
          },
        ],
      },
    ],
  }
```

打包后的图片名字以不会重复的哈希值替代


#### ES6语法处理

安装
```shell
npm install --save-dev babel-loader babel-core babel-preset-es2015
```

配置
```js
rules: [
    {
      test: /\.m?js$/,
      // 排除相关目录下的文件
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['es2015']
        }
      }
    }
  ]
```

#### vue

```js
import Vue from 'vue/dist/vue.esm';

const app = new Vue({
  el: '#app',
  data: {
    message: '123'
  }
})

```

安装
```shell
npm i --save vue
npmi --save-dev vue-loader vue-template-compiler
```

配置
```js
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/i,
        use: [
          {
            loader: 'vue-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin
  ]
}
```

#### 添加版权的Plugin

插件名`BannerPlugin` ,webpack 自带插件

```配置
const webpack = require('webpack')

module.exports = {
  plugins: [
    new webpack.BannerPlugin('最终版权归coderwhy所有')
  ]
}
```

#### 在打包文件中添加 html 文件的 plugin

- 自动生成一个 index.html 文件(可以指定模板来生成)
- 将打包的 js 文件，自动通过 script 标签插入到 body 中

安装
```shell
npm install html-webpack-plugin --save-dev
```

配置
```js
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  plugins: [
    new VueLoaderPlugin,
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ]
}
```

#### js压缩的Plugin
安装
```shell
npm install uglifyjs-webpack-plugin --save-dev
```

配置
```js
const path = require('path')
const webpack = require('webpack')
const uglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  ...
  plugins: [
    new webpack.BannerPlugin('最终版权归 coderwhy 所有')
    new uglifyJsPlugin()
  ]
}
```

#### webpack-dev-server 搭建本地服务器

安装
```shell
npm install webpack-dev-server
```

### package.json
```js
const path = require('path')

module.exports = {
  entry: './src/js/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      }
    ]

  }
}

```
# vue-router

配置路由模式为 history
```js
const router = new VueRouter({
  mode: 'histroy',
  routes: [...]
})
```

SPA 单页面富应用

改变 `url` 页面不刷新
更改hash
```js
location.hash = 'aaa'
```
```js
history.pushState({},'', 'about')
```
```js
history.replaceState({}, '', 'home')
```

```js
// 可以记录历史跳转
this.$router.push('/home')

// 不可以进行历史跳转
this.$router.replice('/home')
```

## router-link

- `to`=>跳转路径
- `tag` => 将该标签渲染为哪种标签
默认跳转方法调用 `history.pushState()`
-  `replace`
跳转使用 `history.replaceState()`

当router-link的标签被点击时自动添加指定的class名称，使用`linkActiveClass:active`
```js
const router = new VueRouter({
  routes,
  // 默认为哈希模式
  mode: 'history',
  linkActiveClass: 'active'
})
```

## 动态路由

```js
path: '/home/:homeId'

this.$route.params.homeId
```

## 路由懒加载

```js
const routes = [
  {
    path: '/home',
    component: () => import('../components/Home')
  },
  {
    path: '/about',
    component: () => import('../components/About')
  }
]

// 方便管理的写法
const Home = () => import('../components/Home')
const About = () => import('../components/About')

const routes = [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/about',
    component: About
  }
]
```

## 传递参数的方式

有两种： params 和 query
- params 的类型
  - 配置路由格式：/router/:id
  - 传递的方式：在path后面跟上对应的值
  - 传递后形成的路径：/router/123,/router/abc
- query 的类型
  - 配置路由格式： /router, 也就是普通配置
  - 传递的方式：对象中使用 query 的key 作为传递方式
  - 传递后形成路径： /router?id=123,/router?id=abc

## 导航守卫
```js
router.beforeEach((to, from, next) => {
  // 从from跳转到to
  // to 将要访问的路径
  // from 代表从哪个路径跳转而来
  // next 是一个函数，表示放行
  if (to.path === '/login') reutrn next()
  // 获取token
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})
```

## keep-alive

```js
<keep-alive>
  <view-router></view-router>
</keep-alive>

在组件使用了keey-alive时，actived和deativated才可以使用
保留之前的路由状态
activated () {
  this.$router.push(this.path)
}
beforeRouter (to, from, next) {
  this.path = this.$route.path
  next()
}
```



# VUEX

![vuex](E:\Gitee\note\vx_images\vuex.png)

Vuex是实现组件全局状态管理的一种机制，可以方便的实现组件之间数据的共享。

**注意**
vuex 不允许直接修改state 中的值

- 能够在 vuex 中集中管理共享的数据，易于开发和后期维护
- 能够高效的实现组件之间的数据共享，提高开发效率
- 存储在 vuex 中的数据都是响应式的，能够实时保持数据与页面的同步

目录结构

```js
//state.js
export default {
  counter: 1000,
  students: [
    age: 12,
    name: 'godalone
  ]
}

// mutations.js
export default {
  add () {
    console.log(123)
  }
}

// 调用state.js、mutations.js
import state from './state'
const store = new Vuex.Store({
  state,
  mutations,
  actions
})
```

1. 安装
```shell
npm install vuex --save
```

2. 导入
```js
import Vuex from 'vuex'
Vue.use(Vuex)
```

3. 创建 Store 对象
```js
const store = new Vuex.Store({
  // state 中存放的就是全局共享的数据
  state: { count: 0 },
  mutations: {},
  actions: {},
  modules: {}
})
```

4. 将 store 对象挂载到 vue 实例中

```js
new Vue({
  el: '#app',
  render: h => h(app),
  router,
  // 将创建的共享数据对象，挂载到 vue 实例中
  // 所有的组件，就可以直接从 store 中获取全局的数据了
  store
})
```

## State
state 提供惟一的公共数据源，所有共享的数据都要统一放到 Store 的 State 中进行存储。
```js
const store = new Vuex.store({
  state: {
    count: 0
  }
})
```

1. 访问 State 中数据的第一种方式：
```js
this.$store.state.全局数据名称
```
2. 访问 State 中数据的第二种方式
```js
// 从 vuex 中按需导入 mapState 函数
import { mapState } from 'vuex'
```
通过 mapState 函数，将当前组件需要的全局数据，映射为当前组件的 computed 计算属性
```js
// 将全局数据，映射为当前组件的计算属性
computed: {
  ...mapState(['count'])
}
```

## Mutation
- 变更 Store 中的数据，不可以直接操作 Store 中的数据
- mutation 中不能执行异步操作，如延时器

```js
// 定义 Mutation
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    add(state) {
      // 变更状态
      state.count++
    }
  }
})
```
// 触发 mutations 的第一种方式
```js
// 触发 mutation
methods: {
  handle1 () {
    // 触发 mutations 的第一种方式
    this.$store.commit('add')
  }
}
```
触发 mutations 的第二种方式
```js
// 从 vuex 中按需导入 mapMutations 函数
import { mapMutations } from 'vuex'
```
```js
// 将指定的 mutations 函数，映射为当前组件的 methods 函数
methods: {
  ...mapMutations(['add', 'addN'])
  subHandle () {
    this.add()
  }
}
```
触发 mutations 时传递参数
```js
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    addN(state, step) {
      state.count += step
    }
    addN(state, payload) {
      state.count += payload.count
    }
  }
})
```
```js
methods: {
  handle2 () {
    // 触发 mutations 时携带参数
    this.$store.commit('addN', 3)
    this.$store.commit({
      type: 'addN',
      // 变量
      count
    })
  }
}
```

## Action
- 用于处理异步操作
- 但是在 action 中还是要通过触发 mutation 的方式间接变更数据

```js
const store = new Vuex.Store({
  mutation: {
    add (state) {
      state.count++
    }
  },
  actions: {
      addAsync (context) {
        setTimeout(() => {
          context.commit('add')
        },1000)
      }
    }
  }
})
```
触发 actions 的第一种方式
```js
methods: {
  handle () {
    // 触发 actions 的第一种方式
    this.$store.dispatch('addAsync')
  }
}
```
触发 actions 的第二种方式
```js
// 从 vuex 中按需导入 mapActions 函数
import { mapActions } from 'vuex'
```
将需要的 actions 函数，映射为当前组件的 methods 方法
```js
methods: {
  ...mapActions(['addAsync', 'addNAsync'])
  subHandle () {
    this.addAsync()
  }
}
```

触发 actions 异步任务时携带参数
```js
const store = new Vuex.Store({
  mutation: {
    addN (state, step) {
      state.count += step
    },
    actions: {
      addAsync (context, step) {
        setTimeout(() => {
          context.commit('add', step)
        }, 1000)
      }
    }
  }
})
```
触发 Action
```js
methods: {
  handle () {
    // 触发 actions 的第一种方式
    this.$store.dispatch('addAsync', 5)
  }
}
```

## Getter
- 用于对 Store 中的数据进行加工处理形成新的数据
- 类似 Vue 的计算属性
- Store 中的数据发生变化， Getter 的数据也会跟着变化。
```js
// 定义 Getter
const store = new Vuex.Store({
  state: {
    count: 0
  },
  getters: {
    showNum: state => {
      return '最新的数量是【'+ state.count +'】'
    }
  }
})
```
使用 getters 的第一种方式
```js
this.$store.getters.名称
```
使用 getters 的第二种方式

```js
import { mapGetters } from 'vuex'

computed: {
  ...mapGetters(['showNum'])
  subHandle () {
    this.showNum()
  }
}
```

## modules

```js
const moduleA = {
  state: {
    name: 'zhangsan',
      a: '',
      b: '',
      c: ''
  },
  mutations: {
    updateName(state, payload) {
      state.name = payload
    }
  },
  actions: {
    aUpdateName(context) {
      setTimeout(()=>{
        context.commit('updateName', 'wagnwu')
      }, 1000)
    }
  },
  getters: {
    fullname(state) {
      return state.name + '11111'
    },
    fullname2(state, getters) {
      return getters.fullname + '222'
    },
    rootState 是根状态调用根store中的属性
    fullname3(state, getters, rootState) {
      return getters.fullname2 + rootState.counter
    }
  }
}

const moduleB = {
    // 必需设置为true，才可以使用下方的解析方式，获取state中的数据
    namespaced: true,
    actions: {},
    mutations: {},
    state: {},
    getters: {}
}

export default new Vuex.store({
  module: {
      moduleA: moduleA,
      moduleB: modduleB
  }
})

// 使用

computed: {
    ...mapState('moduleA', ['a', 'b', 'c'])
},
methods: {
    ...mapMutations('moduleA', {a: 'a', b: 'b'})
}

```

# axios

封装`axios`
```js
function request (config) {
  // 创建 axios 实例
  const instance = axios.create({
    baseURL: 'http://zhfb.fenbanruanjian.com/division/',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })

  // 发送网络请求
  return instance(config)
}

// 调用
request({
  method: 'post',
  url: '/publish',
  data: {
    name: '123'
  }
})
.then((res) => {
  console.log(res)
})
.catch((err) => {
  console.log(err)
})
```

# 功能实现

## 组件-底部导航栏
```html
// 点击标签时有动画效果
// 字体，图标缩小，有背景颜色出现
<template>
	<view class="tabBar">
		<view
			v-for="(item,index) in tabList"
			:key="index"
			class="itemStyle"
			@click="active(index)"
		>
			<image v-if="index == current" :src="item.src_click"></image>
			<image v-if="index != current" :src="item.src_normal"></image>
			<text :class="{ active: index == current, unActive: index != current }">{{ item.text }}</text>
			<view :class="{backType: index == current}" >
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "vue-tabBar",
		props: {
			
		},
		data() {
			return {
				current: 0,
				tabList: [
					{ 
						src_normal: "../../static/images/repair_normal.png",
						src_click: "../../static/images/repair.png",
						text: "一键报修"
					}
					,{
						src_normal: "../../static/images/management_normal.png",
						src_click: "../../static/images/management.png",
						text: "管理中心"
					}
					,{
						src_normal: "../../static/images/ordercenter_normal.png",
						src_click: "../../static/images/ordercenter.png",
						text: "订单中心"
					}
					,{
						src_normal: "../../static/images/personcenter_normal.png",
						src_click: "../../static/images/personcenter.png",
						text: "个人中心"
					}
				]
			};
		},
		methods: {
			active(index) {
				this.current = index;
			}
		}
	}
</script>

<style lang="scss">
	@import "uni.scss";
	page{
		width: 100%;
		background: #fff;
		.tabBar{
			width: 100%;
			height: 120rpx;
			background: $white;
			border-top: 2rpx solid $gray-8;
			overflow: hidden;
			
			display: flex;
			align-items: center;
			justify-content: space-around;
			
			position: fixed;
			bottom: 0;
			.itemStyle{
				position: relative;
				
				flex: 1;
				display: flex;
				flex-direction: column;
				align-items: center;
				image{
					position: relative;
					z-index: 10;
					width: 48rpx;
					height: 48rpx;
					margin-bottom: 4rpx;
				}
				// image:active{
				// 	width: 44rpx;
				// 	height: 44rpx;
				// }
				@keyframes move{
					0% {
						width: 0;
					}
					100% {
						width: 248rpx;
					}
				}
				.backType{
					position: absolute;
					z-index: 1;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					width: 248rpx;
					height: 248rpx;
					background: $gray-500;
					border-radius: 50%;
					line-height: 248rpx;
				}
				.active{
					font-weight: 700;
					color: $type-primary;
				}
				.unActive{
					font-weight: 400;
					color: $gray-85;
				}
				text{
					position: relative;
					z-index: 10;
					font-size: 24rpx;
					text-align: center;
				}
				// text:active{
				// 	position: relative;
				// 	z-index: 10;
				// 	font-size: 22rpx;
				// 	text-align: center;
				// }
			}
		}
		.tabBar>view:active{
			.backType{
				animation: move 0.3s;
			}
			image{
				width: 44rpx;
				height: 44rpx;
			}
			text{
				font-size: 22rpx;
			}
		}
	}
</style>

```

## 遍历中点击元素的状态管理
```html
<view
  class="cont"
  @click="playBtn(index)"
  v-for="(item,index) in voiceList"
  :key="item.index">
  <image
    v-if="index !== current"
    class="play"
    src="../../static/images/play.png">
  </image>
  <image
    v-else
    class="play"
    src="../../static/images/suspend.png">
  </image>
  <text>录音{{ voiceIfo[index] }}</text>
</view>

data () {
  return {
    current: -1
  }
}

methods: {
  playBtn(index) {
    if (index !=== this.current) {
      this.current = index
    } else {
      this.current = -1
    }
  }
}
```

## 动态修改 html title 属性

### 使用插件 vue-wechat-title
```js
// 安装插件
npm i vue-wechat-title

// 在 main.js 里面引入插件
import VueWechatTitle from 'vue-wechat-title
Vue.use(VueWechatTitle)

// 在路由里面 添加title
routes: [
  {
    path: '/login',
    component: Login,
    meta: {
      title: '登录'
    }
  }, {
    path: '/home',
    component: Home,
    meta: {
      title: '首页'
    }
  }
]

// 在 app.vue 中添加指令 v-wechat-title
<router-view v-wecaht-title='$route.meta.title'/>
```

### 修改 title 旁边的 icon 图片
在 public 文件中,修改index.html页面里的文件
```html
<link rel="icon" href="<%= BASE_URL %>favicon.ico">
```