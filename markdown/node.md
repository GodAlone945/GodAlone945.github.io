# 一、注意

- 相对路径必须添加 `./`
- 在node中，没有全局作用域，只有模块作用域
  - 外部访问不到内部
  - 内部也访问不到外部
- 有时候，加载文件模块的目的不是为了简简单单的执行里面的代码，更重要是为了使用里面的对象，方法。
* 可以省略加载文件的后缀名——推荐
- 服务端渲染和客户端渲染的区别
  - 客户端渲染不利于 `SEO` 搜索引擎优化。
  - 服务端渲染是可以被爬虫抓取到的，客户端异步渲染是。
- 所有的API都是异步加载
- 文件操作路径中，相对路径设计的就是相对于执行 `node` 命令所处的路径
- 服务端重定向针对异步请求无效

## cookie，session，token
- cookie 在客户端记录状态
- session 在服务端记录状态
- token 维持状态
  1. 输入用户名和密码进行登录
  2. 服务器验证通过之后生成该用户的 token 并返回
  3. 客户端存储该 token
  4. 后续所有请求都携带该 token 发送请求
  5. 服务器验证 token 是否通过

当不存在跨域问题时，使用 cookie、session 管理登录状态
当存在跨域时，使用 token 管理登录状态

## 1.1获取函数中异步操作的结果，必须通过回调函数获取

```js
function fn(callback) {
  // var callback = function (data) { console.log(data) }

  setTimeout(function () {
      var data = 'hello'
      callback(data)
    },1000)
  }

fn(function (data) {
  console.log(data)
})
```

## 1.2自定义函数头部描述
```js
/**
 * [findById description]
 * @param  {[type]}   id       [description]
 * @param  {Function} callback [description]
 * @return {[type]}            [description]
 */
```

# 二、require

1. 加载文件模块并执行里面的代码
2. 拿到被加载文件模块导出的接口对象
3. 优先从缓存中加载
4. 第三方模块
  - 凡是第三方模块都必须通过npm来下载
  - 使用的时候就可以通过 `require`('包名') 的方式来进行加载才可以使用
  - 不可能有任何一个第三方包和核心模块的名字是一样的
  - 既不是核心模块、也是不路径形式的模块
    - 先找到文件所处目录中的 `node_modules` 目录
    - node_modules/art-template
    - node_modules/art-template/package.json 文件
    - node_modules/art-template/package.json 文件中的 `main` 属性
    - main 记录了 `art-template` 的入口模块
    - 然后加载使用这个第三方包
    - 实际上最终加载的还是文件
    - 如果 `package.json` 文件不存在或者main指定的入口模块不存在
    - 则 `node` 会自动找该目录下的 `index.js`
    - 如果以上所有任何一个条件都不成立，则会层层往上一级目录中的 `node_modules` 中查找
    - 直到跟文件换没有，则报错
> var template = require('art-template')

# 三、npm

## npm网站
> npmjs.com

## 常用命令
- `npm init`
    - `npm init -y` 可以跳过向导，快速生成
- `npm install`
  - 一次性把 `dependencies` 中的依赖项全部安装
- `npm install 包名`
    - 只下载
- `npm install --save 包名`
    - 下载并且保存依赖项
  - 间写 `npm i -S 包名`
- `npm uninstall 包名`
  - 只删除，依赖项依然会保存
- `npm uninstall --save 包名`
  - 删除的同时也会把依赖信息也去除
  - `npm un -S 包名`
- npm view less-loader versions 查看less-loader的版本

## npm下载慢
淘宝镜像 `http://npm.taobao.org/` 
- 安装淘宝的cnpm: 
```shell
npm install --global cnpm
```
- 在之后的安装中把npm替换成cnpm
```shell
cnpm install jquery
```
- 对单个包使用淘宝镜像源
```shell
npm install jquery --registry=https://registry.npm.taobao.org
```
- 将镜像地址配置到npm的配置文件里
```shell
npm config set registry https://registry.npm.taobao.org

# 查看 npm 配置信息
npm config list

## npm命令行工具

npm 的第二层含义就是 一个命令行工具，只要你安装了 `node` 就已经安装了 `npm`。

# 四、package.json-包说明文件

```json
{
  "name": "test",
  "version": "0.0.1",
  "description": "test",
  "main": "index.js",
  "scripts": {
    "test": "0.0.1"
  },
  "author": "GODALONE",
  "license": "ISC",
  "dependencies": {
    "animation": "^0.1.3",
    "jquery": "^3.5.1"
  }
}
```

## package.json 和 package-lock.json
- npm5 之前是不会有 `package-clock.json` 这个文件的
- 当安装包的时候，npm 都会生成或者更新 `package-lock.json` 这个文件
- npm5 之后，安装包的时候不需要加 `--save` ，会自动保存依赖信息
- 加快利用配置文件重新下载包的速度
- 锁住下载依赖的版本，防止出现问题

- `npm init --yes` 自动配置包
- 目前来讲，最有用的是 `dependencies` 选项，可以用来帮我们保存第三方包的依赖信息。
- 执行 `npm install` 就会把 `package.json` 中的 `dependencies` 中所有的依赖项都下载回来。
- 建议每个项目的根目录中都有一个 `package.json` 文件
- 建议执行 `npm install 包名` 的时候都加上 `--save` 这个选项，目的是用来保存依赖项信息

# 五、模块化导入和导出

## export

- 每个文件模块中都提供了一个对象：exports
- exports默认是一个空对象。
- 把需要被外部访问的成员exports出去。
- exports和 `module.exports`的一个引用
- export default 导出的 引用时才可以去掉{}
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

## import

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

# 六、加载模板字符串

```js
const template = require('art-template')
var fs = require('fs')

// 读取文件
// readFile 的第二个参数是可选的，传入 utf8 就是告诉它把读取到的文件直接按照 utf8 编码
fs.readFile('./db.json', 'utf8', function (err, data) {
    if (err) {
      return res.status(500).send('server error.')
    }
    // 从文件中获取到的数据一定是字符串
    // 所以一定要转换成对象
    const students = JSON.parse(data).students

    res.render('index.html', {
      fruits: [
        '苹果',
        '香蕉',
        '橘子',
        '菠萝'
      ],
      students: students
    })

fs.readFile('./tpl.html', function (err, data) {
  if (err) {
    return res.end('404 Not Found.')
  }
  var ret = template.render(data.toString(), {
    name: 'jack',
    age: 18,
    province: '北京市',
    hobbies: [
      '写代码',
      '唱歌',
      '画画'
    ]
  })
  console.log(ret)
  // res.end(data)
})
```

# 七、url模块
```js
var url = require('url')

var obj = url.parse('/pinglun?name=wow$message=123', true)

console.log(obj)
console.log(obj.query)

// 解析请求URL中的后面的参数
url.parse(req.url, true)
```

# 八、http

1.加载HTTP核心模块

```js
var http = require('http')

// 操作文件
var fs = require('fs')
// 读取路径文件内容
fs.readFile('./www/index.html', function (err, data) {
    if (err) {
        return res.end('404 Not Found')
    }
    res.end(data)
})
// 读取访问路径里的文件内容
fs.readdir('./www', function (err, files) {
    if (err) {
        return console.log('不存在')
    }
    console.log(files)
})

// 获取机器信息
var os = require('os')

// 用来操作路径的
var path = require('path')

// 用来获取某个目录中的文件名称
```

2.使用`http.createServer()` 方法创建一个web服务器

```js
var server = http.createServer()
```

3.服务器要干嘛

- ​	提供对数据的服务
- 发请求
- 接收请求
- 处理请求
- 给个反馈
- 注册request请求事件
- 当客户请求过来，就会自动触发服务器的 request 请求事件，然后执行第二个参数：回调处理。

```js
server.on('request', function(){
	console.log('收到客户端的请求了')
})
```

- request 请求事件处理函数，需要接受两个参数：
  - request 请求对象
    - 请求对象可以用来获取客户端的一些请求信息，例如请求路径
  - response 响应对象
    - 响应对象可以用来给客户端发送响应消息

```js
server.on('request', function(request, response){
	console.log('收到客户端的请求了')
    
    response.write('第一条数据')
    response.write('第二条数据')
    response.end()
})
```

- response 对象有一个方法： write 可以用来给客户端发送相应数据
- write可以使用多次，但是最后一定要使用end来结束响应，否则客户端会一直等待

```js
server.on('request', function(req, res){
	console.log('收到客户端的请求了')
	
    结束的时候直接输出内容
	res.end('hello world!')
})
```

- 正确告诉浏览器所发送内容的编码格式
  - text/plain 就是普通文本

```js
server.on('request', function (req, res) {
	res.setHeader('Content-Type', 'text/plain; charset=utf-8')
	res.end('主页面')
})
```

4.绑定端口号，启动服务器

```js
server.listen(5000, function () {
    console.log('服务器启动成功！')
})
```

## 实例一
```js
http.createServer(function (req, res) {
  // 
  var parseObj = url.parse(req.url, true)
  var pathname = parseObj.pathname
  if (pathname === '/') {
    fs.readFile('./view/index.html', function (err, data) {
      if (err) {
        return res.end('404 Not Found！')
      }
      var htmlStr = template.render(data.toString(), {
        comments: comments
      })
      res.end(htmlStr)
    })
  } else if (pathname.indexOf('/public/') === 0) {
    fs.readFile('.' + pathname, function (err, data) {
      if (err) {
        return res.end('404 Not Found')
      }
      res.end(data)
    })
  } else if (pathname === '/post') {
    fs.readFile('./view/post.html', function (err, data) {
      if (err) {
        return res.end('404')
      }
      res.end(data)
    })
  } else if (pathname === '/pinglun') {
    // 无论/pinglun?xxx 之后是什么，都不用担心，pathname只包含请求路径
    // res.end(JSON.stringify(parseObj.query))

    var comment = parseObj.query
    comment.dateTime = '2017-11-2 17:11:22'
    comments.push(comment)

    // 服务端这个时候已经把数据存储好了，接下来就是让用户重新请求/首页
    // 如何通过服务器让客户段重定向
    //  1. 状态码设置为 302 临时重定向
    //      statusCode
    //  2. 在响应头中通过 Location 告诉客户端往哪儿重定向
    //      setHeader
    // 如果客户端发现收到服务器的响应的状态码是 302 就会自动去响应头中找 Location
    res.statusCode = 302
    res.setHeader('Location', '/')
    res.end()
  } else {
    fs.readFile('./view/err.html', function (err, data) {
      if (err) {
        return res.end('404')
      }
      res.end(data)
    })
  }
})
```

# 九、Express

> **配置模板引擎和 `body-parser` 一定要在  `app.use(router)` 挂载路由之前**

```js
var express = require('express')

// 创建服务器 == http.createServer
var app = express()

// 公开指定目录
// 只要这样做了，你就可以直接通过 `/public/xx` 的方式访问 `public` 目录中的所有资源了
app.use('/public/', express.static('./public/'))

app.get('/', function (req, res){
  res.send('heloo express!')
})

app.listen(3000, function () {
  console.log('app is runing！')
})

```

## 1.基本路由

路由器
- 请求方法
- 请求路径
- 请求处理函数
get：
```js
// 当你以 GET 方法请求 / 的时候，执行对应的处理函数
app.get('/', function (req, res) {
  res.send('Hello World!')
})
```
post:
```js
// 当你以 POST 方法请求 / 的时候，指定对应的处理函数
app.post('/', function (req, res) {
  res.send('Got a POST request')
})
```

## 2.静态服务

```js
// 当省略第一个参数的时候，则可以通过省略 /public 的方式来访问
app.use(express.static('public'))
app.use(express.static('files'))

// 当以 /public/ 开头的时候，去 ./public/ 目录中找找对应的资源
# 推荐
app.use('/public', express.static('public'))

path.join----将路径连接起来
app.usr('/static', express.static(path.join(__dirname, 'public')))
```

## 3.在Express中配置使用 art-template 模板引擎
- [art-template-GitHub仓库](https://github.com/aui/art-template)
- [art-template-官网](http://aui.github.io/art-template/)

安装：
```js
npm install --save art-template
npm install --save express-art-template
```

配置：
```js
// 当渲染后缀为html的模板时，使用的模板引擎是什么
app.engine('html', require('express-art-template'))
```

使用：
```js
app.get('/', function (req, res) {
  // express 默认回去项目中的 views 目录找 index.html
  res.render('index.html', {
    title: 'hello world!'
  })
})
```

如果希望修改默认的 `views` 试图渲染存储目录，可以：
```js
// 第一个 views 千万不要写错
app.set('views', 目录路径)
app.set('views', path.join(__dirname, './views/')) // 默认就是 ./views 目录
```

## 4.在 Express 中获取表单 GET 请求参数
express 内置了一个 API，直接通过 `req.query` 来获取
```js
req.query
```

## 5.在Express获取表单 POST 请求体数据
在 Express 中没有内置获取表单的 POST 请求体的 API，引用第三方包： `body-parser`
安装：
```js
npm install --save body-parser
```

引用：
```js
var express = require('express')
var bodyParser = require('body-parser')

var app = express()

// 配置 body-parser
// 只要加入这个配置，在 req 请求对象上会多出来一个属性： body
// 可以世界通过 req.body 来获取表单 POST 请求体数据流
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
```

使用：
```js
app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
})
```

## 6.路由设计

| 请求方法 | 请求路径 | get参数 | post 参数 | 备注 |
| :-: | :-: | :-: | :-: | :-: |
| GET | /students | | | 渲染页面 |
| GET | /students/new | | | 渲染添加学生 |
|POST | /students | | name,age,gender,hobbies | 处理添加学生请求 |
| GET | /students/edit | id | | 渲染编辑页面 |
| POST | /students/edit | | id,name,age,gender,hobbies | 处理编辑学生请求 |
| GET | /students/delete | id | | 处理删除请求 |


## 7.操作文件数据API模块
```js
/**
 * student.js
 * 数据操作文件模块
 * 职责：操作文件中的数据，只处理数据，不关心业务
 */

/**
 * 获取所有学生列表
 * return []
 */
exports.find = function () {

}

 /**
  * 添加保存学生
  */
 exports.save = function () {

 }

  /**
   * 更新学生
   */
  exports.update = function () {

  }

   /**
    * 删除学生
    */
   exports.delete = function () {
     
   }
```

## 8.express-ssion

安装：
```shell
npm install express-session
```
配置:
```js
app.use(session({
  // 配置加密字符串，它会在原有加密基础上和这个字符串拼起来去加密
  // 目的是为了增加安全性，防止客户端恶意伪造
  secret: 'itcast',
  resave: false,
  saveUninitialized: false // 无论你是否使用 Session，我都默认直接给你分配一把钥匙
}))
```
使用：
```js
// 添加 Session 数据
req.session.foo = 'bar'

// 获取 Session 数据
req.session.foo
```
提示：默认 Session 数据是内存存储的，服务器一旦重启就会丢失，真正的生产环境会持久化存储

## 7.实例

### 初始实例
```js
var app = new express()

app.engine('html', require('express-art-template'))

app.use('/public', express.static('./public/'))

app.get('/', function (req, res) {
  res.render('index.html', {
    comments: comments
  })
})

app.get('/admin', function (req, res) {
  res.render('admin/text.html', {
    title: 'GODALONE'
  })
})

app.get('/post', function (req, res) {
  res.render('post.html')
})

app.get('/pinglun', function (req, res) {
// url参数传过来的数据接收
// req.query 只能拿到 get 请求的参数
  var comment = req.query
  comment.dateTime = "2077-1-1 10:58:32"
  comments.unshift(comment)
  res.redirect('/')
})

app.listen(3000, function (req, res) {
  console.log('留言板功能已启动')
})
```

### 路由挂载

**app.js**

```js
/**
 * app.js 入门模块
 * 职责：
 *    创建服务
 *    做一些服务相关配置
 *      模板引擎
 *      body-parser 解析表单 post 请求体
 *      提供静态资源服务
 *    挂载
 *    监听端口启动服务
 */

var express = require('express')
var router = require('./route')

var app = express()

app.use('/node_modules/', express.static('./node_modules/'))
app.use('/public/', express.static('./public/'))

app.engine('html', require('express-art-template'))

// 把路由容器挂载到 app 服务中
app.use(router)

app.listen(3000, function() {
  console.log("!!!!!!!!!!!")
})

module.exports = app
```

**router.js**

```js
/**
 * router.js 路由模块
 * 职责：
 *    处理路由
 *    根据不同的请求方法 + 请求路径设置具体请求处理函数
 */

var fs = require('fs')

// 这样也不方便
// module.exports = function (app) {
//   app.get('/', function (req, res) {

//     fs.readFile('./db.json', 'utf8', function (err, data) {
//       if (err) {
//         return res.status(500).send('server error.')
//       }
//       // 从文件中获取到的数据一定是字符串
//       // 所以一定要转换成对象
//       const students = JSON.parse(data).students
  
//       res.render('index.html', {
//         fruits: [
//           '苹果',
//           '香蕉',
//           '橘子',
//           '菠萝'
//         ],
//         students: students
//       })
//     })
//   })
  
  
//   app.get('/status', function (req, res) {
  
//   })

// express 提供了更好的方式

var express = require('express')

// 创建一个路由
var router = express.Router()

// 把路由都挂载到 router 路由容器中
router.get('/', function (req, res) {

  fs.readFile('./db.json', 'utf8', function (err, data) {
    if (err) {
      return res.status(500).send('server error.')
    }
    // 从文件中获取到的数据一定是字符串
    // 所以一定要转换成对象
    const students = JSON.parse(data).students

    res.render('index.html', {
      fruits: [
        '苹果',
        '香蕉',
        '橘子',
        '菠萝'
      ],
      students: students
    })
  })
})


router.get('/status', function (req, res) {

})

router.get('/status', function (req, res) {

})

module.exports = router

```

# 十、修改完代码自动重启js文件
1. 使用第三方命令行工具， `nodemon` 来帮助我们解决频繁修改代码重启服务器问题。
2. 安装
```shell
npm install --global nodemon
```
安装完后使用
```shell
node app.js
# 使用 nodemon
nodemon app.js
```

当文件发生变化是，自动自动重启服务器

# 十一、文件操作路径和模块路径
1. 文件操作路径
```js
# **在文件操作中**
    # `./data/a.txt` 相当于当前目录
    # `data/a.txt` 相对于当前目录
    # `/data/a.txt` 当前文件模块所处磁盘根目录
```
2. 模块操作路径
```js
// 忽略了 `.` 访问的是磁盘根目录
require('/data/foo.js')

// 相对路径
require('./data/foo.js')
```

# 十二、Promise-ES6(解决毁掉地狱的问题）

- promise 本身不是异步，但其内部往往是封装一个异步

```js
# 创建 Promise 容器
var p1 = new Promise (function (resolve, reject) {
  fs.readFile('./data/a.txt', 'utf8', function (err, data) {
    if (err) {
      // 当异步代码执行成功时，调用 resolve(...)
      reject(err)
    } else {
      // 当异步代码失败时，调用 reject(...)
      resolve(data)
    }
  })
})

p1
// then 里的函数就是 resolve
  .then(function (data) {
    console.log(data)
    // 下面的function 就是调用 reject
  }, function (err) {
    console.log(err)
  })

// then 里的函数就是 resolve
  .then(function (data) {
    console.log(data)
    // 该return 的值传递到下面 ----------
    return p2                         -
    // 下面的function 就是调用 reject   -
  }, function (err) {                 -
    console.log(err)                  -
  })                                  -
  .then (function(data) {   -----------
    console.log(data)
    // 由下方的 then 接收 返回值
    return p3
  })
  .then(function (data) {
    console.log(data)
    console.log('end')
  })

```

## 封装Promise版本的readFile
```js
// 封装 Promise
function pReadFile(filePath) {
  return new Promise (function (resolve, reject) {
    fs.readFile(filePath, 'utf8', function (err, data) {
      if (err) {
        // 当异步代码执行成功时，调用 resolve(...)
        reject(err)
      } else {
        // 当异步代码失败时，调用 reject(...)
        resolve(data)
      }
    })
  })
}

// 调用
pReadFile('./data/data.json')
  .then(function (data) {
    console.log(data)
    return pReadFile('./data/data1.json')
  })
  .then(function (data) {
    console.log(data)
    return pReadFile('./data/data2.json')
  })
  .then(function (data) {
    console.log(data)
  })
```

# 十三、 Node中的其他成员
每个模块中，除了 `require`、`exports`等模块相关API之外，还有连个特殊的成员
- `__dirname` 获取当前文件模块所属目录的绝对路径
- `__filename` 可以用来获取当前文件的绝对路径

在文件操作中，使用相对路径是不可靠的，因为在 `Node` 中文件操作的路径被设计为相对于执行 `node` 命令所处的路径。

推荐使用 `path.join()`进行路径拼接
```js
fs.readFile(path.join(__dirname, './a.txt'), 'utf8', function (err,data) {
  if (err) {
    throw err
  }
  console.log(data)
}
```

为了尽量避免问题，在文件操作中使用的相对路径都统一转换为**动态的绝对路径**

> 模块中的路径标识和这里的路径没关系，不受影响
