# MongoDB
- 官网：https://www.mongodb.com/
- 下载：https://www.mongodb.com/try/download/community

## 下载

### 下载 32 位的  
在 win32 后面加 `i382`

- ** 下载后，如果无法获取命令，找到安装目录下的 bin 复制路径，配置到环境变量里的 path 里 **

## 启动和关闭数据库

启动：
```shell
# mongodb 默认使用执行 MongoDB 命令处所处盘符根目录下的 /data/db 作为自己的数据存储目录
# 所以在第一次执行该命令之前先自己手动新建一个 /data/db
mongod
```
修改默认的数据存储目录，可以：
```shell
mongdb --dbpath=数据存储目录路径
```
停止
```shell
ctrl+c
```

## 连接和退出数据库

连接：
```shell
# 该命令默认连接本机的 MongoDB 服务
mongo
```
退出：
```shell
# 在连接状态时输入 exit 退出连接
exit
```

## 基本命令

- show dbs
  - 查看显示所有数据库
- use 数据库名称
  - 切换到指定的数据库（如果没有新建）
- 插入数据

## 在 Node 中如何操作 MongDB 数据库
第三方包： `mongoose` 
官网：http://www.mongoosejs.net/

### mongoose

安装：
```shell
npm i mongoose
```

```js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

// 创建一个模型
// 相当于设计数据库
const Cat = mongoose.model('Cat', { name: String });

// 实例化一个cat
const kitty = new Cat({ name: 'Zildjian' });

// 持久化保存 kitty 实例
kitty.save().then(() => console.log('meow'));
```

### 自定义数据库对象
```js
var mongoose = require('mongoose')

var Schema = mongoose.Schema

mongoose.connect('mongodb://localhost/itcast')

var studentsSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  gender: {
    type: Number,
    enum: [0, 1],
    default: 0
  },
  age: {
    type: Number
  },
  hobbies: {
    type: String
  }
})

module.exports = mongoose.model('Student', studentsSchema)

// var Student = mongoose.model('Student', studentsSchema)

```

### 存储
```js
var mongoose = require('mongoose')

var Schema = mongoose.Schema

// 连接数据库
// 指定连接的数据库不需要存在，当你插入第一条数据之后就会自动被创建出来
mongoose.connect('mongodb://localhost/itcast')

// 设计集合（collection）结构
// 约束的目的是为了保证数据的完整性，不要有脏数据
var blogSchema = new Schema({
  username: {
    type: String,
    required: true // 设置改数据必须有
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String
  },
  gender: {
    type: Number,
    enum: [-1, 0, 1],
    default: -1
  }
})

// 将文档结构发布为模型
// 第一个参数：传入一个大写名词单数字符串用来表示你的数据库名称
var User = mongoose.model('User', blogSchema)

// 当我们有了模型构造函数之后，就可以使用这个构造函数对 users 集合中的数据进行操作了
/**
 * #region /新增数据==================
 */
var admin = new User(
  {
    username: 'admin_123',
    password: '123456',
    email: 'admin@admin.com'
  }
)

admin.save(function (err, ret) {
  if (err) {
    console.log('存储失败')
  } else {
    console.log('存储成功')
    console.log(ret)
  }
})
```

### 查询
查询所有：

```js
/**
 * //#region /查询====================
 */
User.find(function (err, ret) {
  if (err) {
    console.log('查询失败')
  } else {
    console.log(ret)
  }
})
```

按条件查询：

```js
User.find({
  username: 'admin'
},function (err, ret) {
  if (err) {
    console.log('查询失败')
  } else {
    console.log(ret)
  }
})
```

按条件查询单个：
```js
User.findOne({
  username: 'admin'
},function (err, ret) {
  if (err) {
    console.log('查询失败')
  } else {
    console.log(ret)
  }
})
```

查询条件修饰符
```js
User.findOne({
    $or: [
      {
        email: body.email
      },
      {
        nickname: body.nickname
      }
    ]
  }
```

### 删除

按条件删除数据：
```js
User.remove({
  username: 'admin_123'
}, function (err, ret) {
  if (err) {
    console.log('删除失败')
  } else {
    console.log('删除成功')
  }
})
```

## 在 node 中操作 MySQL 数据库
### 安装
```shell
npm i mysql
```

```js
var mysql      = require('mysql');

// 创建连接
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'godalone'
});

// 连接
connection.connect();

// 所有的查询语句都在这添加
connection.query('SELECT * FROM `ai`', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
});

connection.end();
```
