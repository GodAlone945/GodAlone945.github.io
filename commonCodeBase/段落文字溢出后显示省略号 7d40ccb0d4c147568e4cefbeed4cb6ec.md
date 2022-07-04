# 段落文字溢出后显示省略号

Created: November 21, 2021 7:44 PM
标签: css, 代码

```css
# 只可以单行文本溢出显示省略号
overflow: hidden;
text-overflow:ellipsis;
white-space: nowrap;

# 多行文本溢出显示省略号
// 必须结合的属性，将对象作为弹性伸缩盒子模型显示
display: -webkit-box;
// 必须结合的属性，设置或检索伸缩对象的子元素的排列方式
-webkit-box-orient: vertical;
// 用来限制在一个块元素显示的文本的行数。为实现效果，需要组合其他的Webkit属性
-webkit-line-clamp: 3;
overflow: hidden;
```