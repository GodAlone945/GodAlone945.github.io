# 将页面滚动到指定位置
```js
uni.createSelectorQuery().select("#submit").boundingClientRect(function(res){
  console.log("标签获取====>",typeof(res.top))
  uni.pageScrollTo({
    scrollTop:res.top,
    duration: 300
  });
}).exec()

```

# 配置mainfest.json来关闭沉浸式
```json
"app-plus" : {
    "statusbar": {  
        "immersed": false  
    },
}
```

# 图片预览

**urls的参数必须是数组，才能正确显示**
```js
uni.previewImage({
  urls: ['',''] 
})
```