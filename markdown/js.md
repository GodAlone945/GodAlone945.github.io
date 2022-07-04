# 脚本
## 在现有节点后插入一个新元素
```js
/****
Description: 在现有节点后面插入一个新元素；
             如果定位节点是最后一个节点，则直接添加到parent元素上。
             如果不是，就把新元素插入到目标元素和目标元素的下一个兄弟元素之间。
Input:
  newElement:    需要添加的新节点
  targetElement: 要插入的定位节点
****/
function insertAfter(newElement, targetElement) {
  var parent = targetElement.parentNode
  if (parent.lastChild == targetElement) {
    parent.appendChild(newElement)
  } else {
    parent.insertBefore(newElement, targetElement.nextSibling)
  }
}
```

## 页面加载事件

```js
/**
 * Description: 把现有的 window.onload 事件处理函数的值存入变量 oldOnload
 *              如果在这个处理函数上还没有绑定任何函数，就像平时那样把新函数添加给它。
 *              如果这个处理函数上已经绑定了一些函数，就把新函数追加到现有指令的末尾。
 * Input:
 *  fun: 需要加载的执行函数
 * Call:
 *  addLoadEvent(fun1)
 *  addLoadEvent(fun2)
 * */
function addLoadEvent(fun) {
  const oldOnload = window.onload
  if (typeof window.onload != 'funciton') {
    window.onload = fun
  } else {
    window.onload = function () {
      oldOnload()
      fun()
    }
  }
}
```

## element的联级选择器数据
```js
// 利用高德地图web服务api获取三级行政区域
async function getOption () {
  // 利用结构赋值获得所有行政区域信息
  const { data: { districts: location } } = await axios.get('https://restapi.amap.com/v3/config/district?key=31dd798fb66188348b01506618fe8fd1&subdistrict=3&extensions=base')
  const data = location[0].districts
  // 定义一个对象用来存放符合element联级选择器数据结构的数组
  let position = []
  // 第一级循环获取省/直辖市区域
  for (let a = 0; a < data.length; a++) {
    let arr = {}
    // 将区域编码作为 value 值
    arr.value = data[a].adcode
    // 将行政区名称作为 label 值
    arr.label = data[a].name
    // 定义children 属性存放下一级 信息
    arr.children = []
    // 第二级循环获取市级区域
    for (let b = 0; b < data[a].districts.length; b++) {
      let arr1 = {}
      arr1.children = []
      arr1.value = data[a].districts[b].adcode
      arr1.label = data[a].districts[b].name
      arr.children.push(arr1)
      // 第三级获取区/县区域
      for (let c = 0; c < data[a].districts[b].districts.length; c++) {
        let arr2 = {}
        arr2.value = data[a].districts[b].districts[c].adcode
        arr2.label = data[a].districts[b].districts[c].name
        arr1.children.push(arr2)
      }
    }
    position.push(arr)
  }
  return position
}

```

# Ajax
## get请求
```js
    var xhr = new XMLHttpRequest()

    // get请求
    xhr.open('get', 'data.json', true)
    xhr.send()
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        console.log('数据返回成功')

        console.log(xhr.responseText)
      }
    }

    // 封装get请求
    function get (url, callback) {
      var xhr = new XMLHttpRequest()

      xhr.open('get', url, true)
      xhr.send()
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
          console.log('数据返回成功')
          callback(xhr.responseText)
        }
      }
    }
    // 调用
    get('data.json', function (data) {
      console.log(data)
    })
```

## Promise get 请求
```js
    // 封装 Promise 的 get 请求
    function pGet(url, callback) {
      return new Promise(function (resolve, reject) {
        return xhr = new XMLHttpRequest()
        xhr.onload = function () {
          callback && callback(JSON.parse(xhr.responseText))
          resolve(JSON.parse(xhr.responseText))
        }
        xhr.onerror = function (err) {
          reject(err)
        }
        xhr.open('get', url, true)
        xhr.send()
      })
    }

    // 既可以这么调用
    pGet('./data/data.json', function (data) {
      console.log(data)
    })
    // 也可以这么调用
    pGet('./data/data.json')
      .then(function (data) {
        console.log(data)
      })
```