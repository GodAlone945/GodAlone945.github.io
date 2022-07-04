# element表格动态高度响应

Created: April 9, 2021 11:07 AM
标签: JS, 代码

```jsx
// onresize 属性可以用来获取或设置当前窗口的 resize 事件的事件处理函数
// 在窗口大小改变之后，就会触发 resize 事件
window.onresize = () => {
	this.$nextTick(function () {
		this.height = this.$refs.body.clientHeight * 0.64
	})
}
// 第一次页面加载设置高度
this.$nextTick(function () {
	this.height = this.$refs.body.clientHeight * 0.64
})
```