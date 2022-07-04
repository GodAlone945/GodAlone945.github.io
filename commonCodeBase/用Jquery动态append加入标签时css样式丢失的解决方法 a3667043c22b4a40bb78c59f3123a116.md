# 用Jquery动态append加入标签时css样式丢失的解决方法

Created: June 11, 2021 6:10 PM
标签: jQuery, 代码

```jsx
$("#所在标签id").append(obj);  // 用append 方式添加拼接的标签

$("#所在标签id").listview("refresh");   //在使用'ul'标签时才使用，作用:刷新列表

$("#所在标签id").trigger("create"); //重新加载所在标签的样式。不加这一句动态append的标签将丢失Css样式
```