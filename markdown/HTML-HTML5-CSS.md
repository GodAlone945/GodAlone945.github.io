# 一、HTML

## 1.文本格式化

| 标签       | 描述         |
| :--------- | :----------- |
| `<b>`      | 定义粗体文本 |
| `<em>`     | 定义着重文字 |
| `<i>`      | 定义斜体字   |
| `<small>`  | 定义小号字   |
| `<strong>` | 定义加重语气 |
| `<sub>`    | 定义下标字   |
| `<sup>`    | 定义上标字   |
| `<ins>`    | 定义插入字   |
| `<del>`    | 定义删除字   |

## 2. 链接

### 2.1 target属性

`<a href="https://www.baidu.com" target="_blank">百度一下</a>`

如果将`target`属性设置为 `_blank` ,链接将在新窗口打开。

### 2.2 提示

请始终将正斜杠添加到子文件夹。假如这样书写链接：`href="https://www.runoob.com/html"`，就会向服务器产生两次 HTTP 请求。这是因为服务器会添加正斜杠到这个地址，然后创建一个新的请求，就像这样：`href="https://www.runoob.com/html/"`。

## 3. 头部

| 标签       | 描述                               |
| :--------- | :--------------------------------- |
| `<head>`   | 定义了文档的信息                   |
| `<title>`  | 定义了文档的标题                   |
| `<base>`   | 定义了页面链接标签的默认链接地址   |
| `<link>`   | 定义了一个文档和外部资源之间的关系 |
| `<meta>`   | 定义了HTML文档中的元数据           |
| `<script>` | 定义了客户端的脚本文件             |
| `<style>`  | 定义了HTML文档的样式文件           |

## 4. 语义化标签

![img](https://www.runoob.com/wp-content/uploads/2013/07/html5-layout.jpg)

1. `<section>`元素

​		`<section>` 标签定义文档中的节。

2. `<article>` 元素

   `<article>` 标签定义独立的内容。

3. `<nav>` 元素

   `<nav>` 标签定义导航链接的部分。

4. `<aside>` 元素

   `<aside>` 标签定义页面内容主要区域内容之外的内容（比如侧边栏）

5. `<header>` 元素

   `<header>` 标签描述了文档的头部内容。

6. `<footer>` 元素

   `<footerr>` 标签描述了文档的底部区域。

# CSS

css提供了**3中机制**来设置盒子的摆放位置，**标准流、浮动、定位**

## 自适应页面布局

`width=device-width` => 网页宽度默认等于屏幕宽度
`initial-scale=1` => 网页初始大小占屏幕面积的`100%`
```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

### 不适用绝对宽度

- css代码不能指定像素宽度
- 只能指定百分比宽度，后者`width: auto`

### 相对大小的字体

```html
// 会默认指定字体大小为16px
body {
  font: normal 100% Helvetica, Arial, snas-serif;
}

h1 {
  font-size: 1.5em;  // 24/16=1.5
}
```

### 流动布局
各个区块的位置都是浮动的，不是固定不变的

### @media查询

### 图片的自适应

```css
img {
  max-width: 100%;
}
```

## 处理兼容性问题：私有前缀

```css
-webkit-:谷歌 苹果
-moz-:火狐
-ms-:IE
-o-:欧朋
```

## 响应式图像

### 像素密度的选择：srcset属性

像素描述符 => 像素密度倍数 + 字母x
```html
<img srcset='foo-320w.jpg,
                 foo-480w.jpg 1.5x
                 foo-640w.jpg 2x'
         src="foo-640w.jpg"
         alt=''>
```

像素密度的适配，只适合像是区域一样大小的图像。

### sizes属性

宽度描述符 => 图像原始宽度 + 字符w
```html
<img srcset="foo-160.jpg 160w,
             foo-320.jpg 320w,
             foo-640.jpg 640w,
             foo-1280.jpg 1280w"
     sizes="(max-width: 440px) 100vw,
            (max-width: 900px) 33vw,
            254px"
     src="foo-1280.jpg">
```

### `<picture>`标签，`<source>`标签

```html
<picture>
  <source srcset="homepage-person@desktop.png,
                  homepage-person@desktop-2x.png 2x"
          media="(min-width: 990px)">
  <source srcset="homepage-person@tablet.png,
                  homepage-person@tablet-2x.png 2x"
          media="(min-width: 750px)">
  <img srcset="homepage-person@mobile.png,
               homepage-person@mobile-2x.png 2x"
       alt="Shopify Merchant, Corrine Anestopoulos">
</picture>
```

#### `<source>`标签的type属性

`type` => 图像的 `MIME` 类型
`srcset`=> 图像的 `URL`
```html
<picture>
  <source type="image/svg+xml" srcset="logo.xml">
  <source type="image/webp" srcset="logo.webp"> 
  <img src="logo.png" alt="ACME Corp">
</picture>
```

## 操作元素类样式

```HTML
add:为元素添加指定名称的样式，一次只能添加一个样式
document.querySelector("div").classList.add("red");

remove:为元素移除指定名称的样式，一次只能移除一个
document.querySelector("#remove").onclick = function() {
document.querySelector(".blue").classList.remove("blue");
};

toggle:切换元素的样式:如果元素之前没有指定名称的样式则添加。如果有则移除
document.querySelectorAll("li").classList.toggle("green");

contains:判断元素是否包含指定名称的样式，返回Boolen值


```



#### 行内式

```css
<div style="color:red;font-size:12px;">123456</div
```

#### 外链语法

```css
<link rel = "stylesheet" type = "text/css" href = "css文件路径">
=== link真正的定义：炼入一个文档，通过rel属性申明链入的文档与当前文档之间的关系 ===
```

#### 颜色样式

```css
background-color:rgb(100,13,43); --- 设置RGB颜色
background-color:rgba(225,0,0,.5); --- 可实现颜色半透明效果
background-color:#000; --- 实现半透明的效果
opacity: .5;
```

#### 文本修饰

```css
text-shadow:	设置文字阴影
text-shadow:0px 0px 10px red;
第一个值 === 水平偏移量
第二个值 === 垂直偏移量
第三个值 === 阴影模糊度
第四个值 === 文字的阴影颜色

font-size:	设置文字大小
font-family:	设置文字字体
font-weight:	设置文字是否加粗显示  normal => 400 | bold => 700 不带单位
font-style:		设置文字是否斜体显示  normal | italic
line-height:	设置文字行高，设置为文字框架高度的话可以使文字水平居中显示
text-indent:	设置文字首行缩进
font-variant: small-caps; 小写变大写
text-decoration: lowercase; 单词字体大小写。uppercase大写、lowercase小写、capitalize单词首字母大写
// 行高、字号、一般都是偶数
=============================================
让单行文本垂直居中
vertical-align: middle;  指定行级元素的垂直对齐方式（行内元素inline、行内块元素inline-block、表格的单元格table-cell）

```

#### font属性连写

```css
font:700 italic 30px/20px "微软雅黑";
```

- 在font属性连写中必须设置font-size和font-family
- 在font属性连写中，font-size必须设置在font-family之前
- 行高必须设置到font-size中

#### overflow属性

- visible: 默认值。多余的内容不剪切也不添加滚动条，会全部显示出来。
- hidden: 不显示超过对象尺寸的内容
- auto: 如果内容不超出，则不显示滚动条；如果内容超出，则显示滚动条。
- scroll: Windows平台下，无论内容是否超出，总是显示滚动条。

#### 选择器

##### 后代选择器

- 定义的时候用空格隔开
- 把某一部分的所有的什么，进行样式改变。

##### 交集原则器

- 两个选择器之间紧密相连

##### 并集选择器

- 定义的时候用逗号隔开

##### 子代选择器

- 用符号`>`表示
- div > p

##### 下一个兄弟选择器

- +表示选择下一个兄弟

##### 结构伪类选择器

:first-child === 选中父元素中的第一个子元素

:last-child === 选中父元素中最后一个子元素

:nth-child(n) === 选中父元素中第n个子元素

- ​	n 可以去一个正整数（可以去到0）
- ​	n 可以设置一个关键字（odd => 奇数 | even => 偶数）
- ​	n 可以是一个表达式（an+b => A和B可以设置正数和负数）

:nth-last-child(n) === 选中倒数第n个子元素

##### 格式

- `E:first-of-type`匹配同类型中的第一个同级兄弟元素E
- `E:last-of-type`匹配同类型中的最后一个同级兄弟元素E
- `E:nth-of-type(n)`匹配同类型中的第n个同级兄弟元素E
- `E:nth-last-of-type(n)`匹配同类型中的倒数第n个兄弟元素E

##### 格式

- `E:empty`匹配没有任何子节点的元素E
- `E:target`匹配相关URL指向的E元素。要配合锚点使用。

##### 属性选择器

```css
选中具有class属性的标签
[class]{
    color:red;
}
选中标签class属性是one的标签
[class = "one"]{
    color:red;
}
选择具有att属性且属性值为：用空格分隔的字词列表，其中一个等于val的E元素
E[attr~=val]
要么是一个单独的属性值，要么这个属性值是以“-”分隔的。
E[attr|=val]
选中标签class属性的值是以字母o结束的标签
[class$="o"]{
    color:red;
}
选中标签class属性的值是以字母o开始的标签
[class^="o"]{
    color:red;
}
选中标签class属性的值是包含字母o开始的标签
[class*="o"]{
    color:red;
}
```

##### 伪元素选择器

- ::first-line{} === 选中标签中第一行文字

- ::first-letter{} === 选中标签中第一个字母或者汉字

- ::selection{} === 设置鼠标选中区域的样式（只能设置与颜色相关的属性）
- `E::before`设置在元素E前面的内容，配合content属性一起使用
- `E::after`设置在元素E后面的内容，配合content属性一起使用
- 通过上面两个属性添加的伪元素，是行内元素，需要转换成块元素才能设置宽高。

##### 伪类（也是一种选择器）

1. 静态伪类：只能用于超链接

   - `:link`超链接点击之前
   - `:visited`超链接被访问过之后

2. 动态伪类：针对所有标签都适用的样式

   - `:hover` --”悬停“：鼠标放到标签上的时候
   - `:active`--"激活"：鼠标点击标签，但是不松手时
   - `:focus`--是某个标签获得焦点时的样式（比如某个输入框获得焦点）

3. 在css中，这四种状态必须按照固定的顺序写：

   > a:link、a:visited、a:hover、a:active   先爱后恨

4. a{}和a:link{}的区别

   - `a{}`定义的样式针对所有的超链接（包括锚点）
   - `a:link{}`定义的样式针对所有写了href属性的超链接（不包括锚点）

5. 一定要将a标签写在前面，将伪类写在后面

设置a标签的默认样式

推荐直接通过a标签设置样式

a:visited{属性：值;}		设置a标签被访问过后的样式

​	该选择器会让浏览器有缓存的问题

​	该选择器中只能设置与颜色相关的属性

a:hover{属性：值;}		设置当鼠标悬停到a标签上的样式

a:active{属性：值;}		当a标签被激活的时候的样式

input:focus{属性:值;}		当input标签获取光标焦点的时候的样式

#### 

#### Placeholder样式设置

在输入框设置placeholder = "wdw"显示框内默认文字，且不占用输入框内容。

#### 设置鼠标样式

cursor:pointer;

#### 标签的显示方式

##### 块级元素

代表 h1-h6,p,div,li,ul,ol,dd,dt...

- 不设置宽度，该元素宽度等于其父元素的宽度。
- 所有的块级元素都独占一行。
- 可以设置宽度和高度。

##### 行内元素

代表 span,a,b,font,strong...

- 所有的行内元素都在一行显示
- 行内元素不能设置宽度和高度

##### 行内块元素

代表 input,img

元素可以设置宽度和高度

元素在一行显示

##### 元素模式转换

display:block; === 转换块级元素

display:inline-block; === 转行内块元素

dispaly:inline; === 转行内元素

#### 伪元素

::before

::after

```css
body::before{
    content:"";
    background-color:red;
    width:200px;
    height:200px;
    display:inline-block;
}
body::after{
    conten:"";
    width:200px;
    height:200px;
    background-color:green;
    display:inline-block;
}
```

伪元素必须设置content属性

伪元素属于行内元素

伪元素中不能在创建伪元素

一般是将伪元素要依附于某一个标签

#### css特性

##### 样式表冲突

- 对于相同的选择器，其样式表排序：行级样式>内嵌样式表>外部样式表

- 对于相同类型的样式表，其选择器排序：ID选择器>类选择器>标签选择器

- 外部样式表的ID选择器>内嵌样式表的标签选择器

  > 就近原则>内嵌样式表的标签选择器

- 对于同一标签，如果用到的都是内嵌样式表，且权重一致，那它的优先级：定义的css样式表中，谁最近，就用谁。

- 对于同一个标签，如果用到的都是外部样式表，且权重一致，那它的优先级：html文件中，引用样式表的位置越近，就用谁。

##### 层叠性

在同一个标签中，如果优先级相同，如果定义的样式发生冲突，那么最后一次定义的样式会将前面定义的样式覆盖掉。

- 计算权重
  - 统计选择器的数量，（id选择器，类选择器，标签选择器），哪个最大优先级最高。
- 权重相同时
  - 就近原则——书写顺序靠后的
- 如果不能直接选中某个元素，通过继承性影响的话，那么权重为0.
- 并集选择器要拆开计算，不能合着算。
- 

##### 继承性

- 只有在嵌套关系的标签中才会出现继承性
- 如果子元素默认没有样式，同时该元素又受父元素的样式影响
- color，font属性，text-align...都可以被子元素影响
- 注意：

​		width和height不能被继承

​		a标签在默认情况下，不能受父元素的文字颜色影响

​		标题标签在默认情况下，不能直接等于父元素设置的文字大小

#### 背景-background

background-color:设置背景颜色		默认值：transparent（透明色）

- #000 黑
- #fff 白
- #f00 红
- #222 深灰
- #333 灰
- #ccc 浅灰

opacity: 0.3;   设置盒子的透明度；会影响到里面的子盒子

background-image:url(images/1.jpg);	设置背景颜色

background-repeat:设置背景图片的平铺方式		

- repeat 
- no-repeat  不要平铺
- repeat-x  横向平铺
- repeat-y  纵向平铺

background-position:设置背景图片位置		

- 如果该属性设置一个值，那么另一个默认值代表center

- 如果设置具体数字，那么第一个值代表水平方向，第二值代表垂直方向

- 可以设置负数
- 描述左右的词：left、center、right
- 描述上下的词：top、center、bottom

##### background-attachment: scroll

- 设置背景图片是否固定
- fixed（背景被固定住，不会被滚动条滚走）
- scroll（与fixed属性相反，默认属性）

##### background-size

可以设置具体值

- background-size: 500px 500px;	宽高的具体值
- background-size: 50% 50%;    相对容器的大小，简写成：background-size: 50%;
- background-size: 100% auto; 横向整个填充，纵向自动重复填充；

- cover === 将背景图片按照自己原来的缩放比，始终沾满整个父元素

- contain === 将背景图片按照自己原来的缩放比，始终要将自己完整的显示到父容器中

##### background-origin

- background-origin: padding-box; 默认值，从内边距开始显示背景图
- background-origin: border-box; 从边框开始显示背景图
- background-origin: conten-box; 从内容区域开始显示背景图

##### background-clip

- 设置元素的背景是否延伸到边框下面
- background-clip: content-box; 超出的部分，将裁减掉。
  - border-box 超出border-box的部分，将裁减掉
  - padding-box 超出padding-box的部分，将裁减掉
  - content-box 超出content-box的部分，将裁减掉

##### 可以给一个容器同时设置多张背景图片

```css
background:url("1.png") no-repeat left top
background:url("2.png") no-repeat right top
background:url("3.png") no-repeat left bottom
background:url("4.png") no-repeat right top
```

#### 目标伪类

:target{属性:值;}

只有当被锚链接指向该标签的时候才会执行目标伪类中的css代码

#### 渐变

##### 线性渐变

开始的背景颜色和结束的背景颜色

渐变方向		水平或者垂直 | 通过角度表示渐变的方向

渐变的范围

```css
background-image:linear-gradient(
	渐变的方向从左向右
	to right,
	渐变的开始颜色
	red,
	渐变的结束颜色
	pink
);
```

通过角度表示渐变方向

```css
.box{
    width:200px;
    height:200px;
    background-image:linear-gradient(
    	90deg,		0deg代表渐变的方向是从下向上渐变；90deg代表渐变的方向是从左向右渐变
        red,
        pink
    )
}
```

如果不设置background-size属性的时候，百分比是相对父元素宽度，如果设置了background-size，百分比是相对background-size设置的值。

- 不写方向，表示默认的方向是：从上往下

- ```css
  background-image: linear-gradient(
  	to right,
  	yellow 0%,
  	red 40%,
  	green 70%,
  	blue 100%
  );
  
  //颜色突变
  background-image: linnear-gradient(
  	45deg,
  	yellow 0%,
  	yellow 25%,
  	blue 25%,
  	blue 25%,
  	red 50%,
  	red 50%,
  	green 75%,
  	green 100%
  	);
  ```

  

##### 径向渐变

组成：开始颜色和结束颜色；圆心的位置和半径

```css
background-image:raidal-gradient(
	100px at center,		at + center top left right bottom设置圆心位置，也可以设置具体值
	red,
	blue
)
```

如果要设置椭圆的渐变效果，需要设置水平半径和垂直半径

```css
background-image:radial-gradient(
	100px 50px at center,
	red,
	blue
)
```

#### 盒子模型

##### box-sizing属性

- 外加模式（默认属性）
  - box-sizing: content-box;
  - 此时改变padding和border的大小，也不会改变内容的宽高，而是盒子的总宽高发生变化。
- 内减模式
  - box-sizing: border-box;
  - 此时改变padding和border的大小，会改变内容的宽高，盒子的总宽高不变。

##### box-radius属性

![](D:\我的文档\前端\笔记\img\box-radius.png)

##### 边框

border-width:设置边框宽度

border-color：设置边框的颜色

border-style：设置边框的样式		none | solid | dashed(虚线) | dotted(点线)

去掉边框：border-style:none	border:none	border-top:none

去掉边框轮廓线：outline-style:none;

边框圆角：border-radius:10px;	要设置椭圆的话，需要同时设置水平半径和垂直半径

```css
border-radius:10px/1px;
```

##### 内边距（padding）

内容和边框之间的距离

只能改变元素中内容区域的位置

给行内元素设置上下内外边距不会再top和bottom产生影响，只会在left和right产生影响。

##### 外边距（margin）

设置盒子和盒子之间的距离

margin：

​		改变盒子的位置

​		margin不会改变元素的大小

margin特点：

```
	1.垂直外边距合并（在垂直方向，外边距以最大值为准，不会进行叠加运算）
    2.距垂直塌陷： 如果给子元素设置margin-top值的时候，发现父元素也向下移动了
    3.设置边框
    4.元素设置overflow：hidden;可以出发元素的bfc（该元素在文档中独立的一块区域）
    5.元素或者父元素脱标（浮动，绝对定位，固定位定位）
```
##### IE6的双倍margin的bug

- 当出现连续浮动的元素，携带与浮动方向相同的margin时，队首的元素，会双倍margin；

- ![](D:\我的文档\前端\笔记\img\IE6margin.png)

- 解决方案

  - 使浮动的方向和margin的方向，相反。

  - ```css
    float: left;
    margin-right: 40px;
    ```

  - 使用hack：

    ```css
    单独给第一个元素写一个一半的margin
    _margin-left: 20px;
    ```

    

##### 块级盒子水平居中

- 让一个块级盒子实现水平居中：

  - 盒子必须指定了宽度（width）

  - 然后就给左右的外边距都设置为auto

  - 示例代码：

  - ```
    .header{width:800px;margin:0 auto;}
    ```
    
  - 只有标准流的盒子才能使用margin: 0 auto;

##### 文字居中和盒子居中区别

1. 盒子内的文字水平居中是 `text-algin: center;`,而且换可以让行内元素和行内块居中对齐
2. 块级盒子水平居中左右margin改为auto

##### 块级盒子中的子元素在父容器里的水平垂直居中

- ##### 绝对定位+margin（需要制定子元素的宽高，不推荐）

  - ```css
    .father{
                position: relative;
                min-height: 500px;
                background: pink;
            }
            .son {
                position: absolute;
                width: 200px;
                height: 100px;
                background: red;
                top: 50%;
                left: 50%;
                margin-top: -50px;
                margin-left: -100px;
            }
    ```

- ##### 绝对定位+translate（无需指定子元素的宽高，推荐）

  - ```css
    .father{
                position: relative;
                min-height: 500px;
                background: pink;
            }
            .son {
                position: absolute;
                background: red;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);----动态计算宽高
    ```

- ##### flex布局+margin：auto（推荐）

  - ```css
    .father{
                display: flex;
                min-height: 100vh;
                background: pink;
            }
            .son {
                margin: auto;
                background: red;
            }
    ```

    

##### 外边距合并

使用margin定义块元素的垂直外边距时，可能会出现外边距的合并。

- 当上下相邻的两个块元素相遇时，如果上面的元素有下外边距margin-bottom

- 下面的元素有上外边距margin-top，则他们之间的垂直间距不是margin-bottom与margin-top之和

- **取两个值中的较大者**这种现象被称为相邻块元素垂直外边距的合并（也称外边距塌陷）。

  ![](D:\我的文档\前端\笔记\img\www.png)

**解决方案：尽量只给一个盒子添加margin值**

##### 嵌套块元素垂直外边距的合并（塌陷）

- 当父元素和子元素同时设置margin-top值的时候，会发生合并现象

- 合并后的外边距为两者中的较大者

  ![<img src = "img/n.png">]

**解决方案** ：

1. 可以为父元素定义上边框
2. 可以为父元素定义上内边距
3. 可以为父元素添加overflow:hidden;

##### 盒子模型布局稳定性

**按照优先使用**

```
width > padding > margin
```

**原因：**

- ​		margin 会有外边距合并 还有 ie6下面margin 加倍的bug（讨厌）所以最后使用。
- padding  会影响盒子大小， 需要进行加减计算（麻烦） 其次使用。
- width   没有问题（嗨皮）我们经常使用宽度剩余法 高度剩余法来做。

##### 盒子阴影

语法:

```
box-shadow:水平阴影 垂直阴影 模糊距离 阴影尺寸 阴影颜色 内/外阴影
```

外阴影（outset）是默认的但是不能写，想要内阴影可以写inset

##### 利用border画三角形

```css
width: 0;
height: 0;
border: 50px solid transparent;
border-top-color: red;
border-bottom: none;
```



#### 插入图片和背景图片区别

1. 插入图片 我们用的最多 比如产品展示类  移动位置只能靠盒模型 padding margin

2. 背景图片我们一般用于小图标背景 或者 超大背景图片  背景图片 只能通过  background-position

3. ```css
    img {  
      		width: 200px;/* 插入图片更改大小 width 和 height */
      		height: 210px;
      		margin-top: 30px;  /* 插入图片更改位置 可以用margin 或padding  盒模型 */
      		margin-left: 50px; /* 插入当图片也是一个盒子 */
      	}
      
    div {
      		width: 400px;
      		height: 400px;
      		border: 1px solid purple;
      		background: #fff url(images/sun.jpg) no-repeat;
      		background-position: 30px 50px; /* 背景图片更改位置 我用 background-position */
      	}
   ```

   

#### 点击文字设置控件光标

```html
<lable for = "id"></lable>
```

#### 浮动（float）

#####  标准文档流的特性

1. 空白折叠现象：无论对少个空格、换行、tab、都会折叠为一个空格。
2. 高矮不齐，底边对齐。
3. 自动换行，一行写不满，换行写。

float:left | right;

**特点：**

1. 浮动的元素不占位置（脱离标准流）
2. 块级元素在一行上显示的时候就使用浮动（脱标）

3. 浮动可以实现模式转换（脱标）


**总结：**

1. 在网页布局中，块级元素在一行显示就使用浮动
2. 如果只是希望一个行内元素有宽度或者高度（进行模式转换），就使用display。
3. 浮动只会影响当前的或者是后面的标准流盒子，不会影响前面的标准流
4. 如果一个盒子里面有多个子盒子，如果其中一个盒子浮动了，其他兄弟也应该浮动

**使用：**

1. 为了实现图片和文字环绕效果，而设计了浮动该属性。【文字不会受浮动的影响，文字不会被浮动的元素压着】
2. 网页布局块级元素一行显示

3. 在网页布局中制作导航


##### 清除浮动

**原因：**

- 因为父级盒子很多情况下，不方便给高度，但是子盒子浮动就不占有位置，最后父级盒子高度为0，影响下面的标准流盒子。
- 消除浮动元素对后面元素的影响

**方法：**

- 给浮动元素的祖先元素加高度
- 一个元素要浮动，那么它的祖先元素一定要有高度
- 有高度的盒子，才能关住浮动

- 使用clear属性：left | right | both
  - 缺陷：所在的标签，margin属性失效。

<img src = "img/清除浮动.jpg" style="width:20em">

- 隔墙法：

  - ```css
    li{
        float: left;
        width: 150px;
        height: 30px;
        background-color: pink;
    }
    .cl{
        clear: both;
    }
    .h16{
        height: 16px;
    }
    
    <div class="box1">
    	<ul>
    		<li>123</li>
    		<li>123</li>
    		<li>123</li>
    		<li>123</li>
    	</ul>
    </div>
    <div class="cl h16"></div>
    <div class="box2">
    	<ul>
    		<li>123</li>
    		<li>123</li>
    		<li>123</li>
    		<li>123</li>
    	</ul>
    </div>
    
    用中间的新的div隔开，然后设置`clear: both;`属性。利用height属性达到margin的效果
    ```

- 内墙法

  - ```css
    <div>
    	<p></p>
    	<p></p>
    	<div class = "cl"></div>
    </div>
    ```

  - > 一个父亲是不能被浮动的儿子撑出高度的

  - 为div设置`clear: both`属性，就可以让其将盒子撑开。

- 使用伪元素清除浮动（推荐）

  <img src = "img/伪元素清除浮动.png" style = "width:20em">

- 4.使用before和after双伪元素清除浮动

  ```html
       .clearfix:after,.clearfix:before{
          content: "";
          display: table;
      }
      .clearfix:after{
          clear: both;
      }
      .clearfix{
          *zoom: 1;
      }
  <div class="fahter clearfix">
     <div class="big">big</div>
     <div class="small">small</div>
  </div>
     <div class="footer"></div>
  ```

- 给父元素设置 voerflow:hidden; 如果父元素中有定位的元素，并且该定位的元素超出了父元素，那么不推荐使用该方式清除浮动。

- ##### Overflow

  - overflow:visible; === 默认超出父元素的内容也是可见的

  - overflow:hidden; === 将超出父元素的内容部分进行隐藏

  - overflow:scroll; === 如果内容超出父元素，给父元素添加一个滚动条

  - overflow:auto; === 如果内容超出父元素那么久添加滚动条，否则不添加

- 额外标签

w3c推荐在浮动元素末尾添加一个空的标签如`<div style = "clear:both"></div>`，或其他标签br等。

- 使用双伪元素清除浮动

使用方法：

```css
.clearfix:before,.clearfix:after { 
  content:"";
  display:table; 
}
.clearfix:after {
 clear:both;
}
.clearfix {
  *zoom:1;
}
```

- ```css
  IE6中无法正确显示height小于12px的问题，
  height: 10px;
  _font-size: 0;
  
  IE6不支持overflow: hidden;
  overflow: hidden;
  _zoom: 1;
  ```

  

#### 定位

##### 1.静态定位

```css
position:static;
left:200px;
top:200px;
```

**特点：**

- 静态定位无法改变元素位置（认为静态定位的元素就是我们网页中标准流下的元素）。
- 一般我们需要将固定定位或者绝对定位及其他定位转化为标准流下的元素，我们需要将该元素设置为静态定位即可。

##### 2.绝对定位

```css
position:absolute:
left:100px;
```

**特点：**

- 通过给元素设置绝对定位可以改变元素位置。
- 如果一个子元素的父元素没有设置定位或者设置了静态定位，那么该绝对定位的子元素是相对浏览器左上角为参照进行位置移动的。
- 如果一个绝对定位的元素，其父元素如果设置了出静态定位以外的其它定位（绝对 | 相对定位 | 固定定位）,那么该绝对定位的元素是相对父元素左上角为参照进行为之改变。
- 绝对定位的元素也是脱标的元素（不占位置）
- 绝对定位也可以让元素进行模式转换

**概括：**

一般如果页面网页布局中出现一个容器压着另外一个盒子，那么我们考虑使用绝对定位。

**元素集中显示**

- `margin:0 auto;`	只能让标准流的盒子居中

- 推荐的方式：

  ```css
  position:absolute;
  left:50%;
  margin-left:-100px;
  ```

  left:50%;	移动相对父元素宽度的一半

  margin-left:-100px;	移动相对自己宽度一半



##### 3.相对定位

```css
position:relative;
left:20px;
```

**特点：**

- 相对定位的元素是相对元素自己原来的位置发生的改变。
- 相对定位的元素没有脱标，不能实现模式转换
- **子绝父相**

##### 4.固定定位

```css
position:fixed;
left:20px;
top:20px;
```

**特点：**

- 固定定位的元素始终参照浏览器左上角为参照进行位置改变。
- 固定定位的元素也是脱标的元素
- 可以进行模式转换

##### 5.定位层级关系

- 只有定位（除静态定位）的元素才有层级关系
- 通过 z-index 属性去设置元素的层级关系
- 默认的 z-index:auto;
- 层级特点：
  - 如果 z-index 值相同，那么后面的定位元素会压着前面的定位元素（后来居上）
  - 如果 z-index 值相同，那么 z-index 的值越大，该元素的层级越高
  - 如果子元素的父元素设置了定位（绝对定位、相对定位、固定定位），父元素层级越大该元素层级越高

**注意：**

- 通过 z-index 改变元素的层级关系的时候，一定要保证当前元素属于定位元素
- z-index 的取值可以是负数
- 如果没有z-index的值，或者都一样，代码写在后面的就能压住别人。**浮动的元素不能用。**
- 父亲大的即使字元素小于其他的子元素，也能显示在上面。

#### 元素隐藏方式

1. overflow:hidden;

2. display:none; === 元素隐藏后不占位置

   display:block; === 显示元素

3. visibility:hidden; === 元素隐藏占位置

#### 图片与文字垂直对齐方式

1. vertical-align:baseline;默认值（基线对齐）

   ​						top | middle | bottom;

2. 总结：

   1. vertical-align 属性只能用在行内块元素或者table标签中
   2. 如果其他非行内块元素或者table标签要使用该属性，那么请将元素转为行内块元素或者table标签【display:table;】

3. 使用：

   1. 解决插入图片底部3像素的空白（给img添加display:block;）

   2. 实现图片垂直居中

      ```css
      .box{
          width:300px;
          height:300px;
          border:1px solid red;
          line-height:300px;
      }
      img{
          vertical-align:middle;
      }
      ```

      第一步先设置行高等于容器的高度

      第二部给图片设置 vertical-align:middle;

#### logo内容移除

1. 推荐将logo作为a标签的背景图片使用

2. 推荐在logo中要设置文字，但是还要将该文字移除

3. 推荐使用 text-indent 设置一个负值来移除 logo 中的内容

   或者：

   ```css
   font-size:0px;
   color:transparent;
   ```

#### 精灵图使用

1. 先将精灵图作为盒子的背景图片
2. 通过background-position 在水平方向和垂直方向移动背景图片

#### 鼠标样式cursor

```html
<li style = "cursor:default">默认</li>
<li style = "cursor:pointer">小手</li>
<li style = "cursor:move">移动</li>
<li style = "cursor:text">文本</li>
<li style = "cursor:not-allowed">禁止</li>
```

#### 轮廓线 outline

```html
outline:outline-color||outline-style||outline-width
```

平时都是去掉的

```html
<input type = "text" style = "outline:0;"/>
```

#### 防止拖拽文本域 resize

<img src = "img/textarea.png">

实际开发中，文本域的右下角是不可以拖拽：

```html
<textarea stylee = "resize:none;"></textarea>
```

#### 溢出的文字省略号显示

1. white-space

   white-space 设置或检索对象内文本显示方式。通常强制一行显示内容

   ```
   white-space:normal;	默认处理方式
   white-space:nowrap;	强制在同一行内显示所有文本，直到文本结束或者遭遇br标签对象才换行。
   ```

2. text-overflow 文字溢出

   设置或检索是否使用一个省略标记（...）标示对象内文本的溢出

   ```
   text-overflow:clip;	不显示省略标记（...），而是简单的裁剪
   text-overflow:ellipsis;	当对象内文本溢出时显示省略标记（...）
   ```

   一定要首先强制一行内显示，再次和overflow属性搭配使用

3. 总结

   ```css
   1.	先强制一行内显示文本
   white-space:nowrap;
   2.	超出的部分隐藏
   overflow:hidden;
   3.	文字用省略号替代超出的部分
   text-overflow:ellipsis;
   ```

#### css三角形之美

```css
div{
	width:0;
	height:0;
	line-height:0;//兼容低版本浏览器
    font-size:0;//兼容低版本浏览器
    border-top:10px solid red;
    border-right:10px solid green;
    border-bottom:10px solid blue;
    border-left:10px solid #000;
}
```

#### 过渡：transition

- 过渡属于一种特殊的动画

- 通过一种状态向另外一种状态的改变

- transition 复合属性：

  ```css
  设置参与过渡的属性
  transition-property:width,height,background-color;
  transition-property:all;----希望所有的属性都发生过渡，就使用all。
  
  设置过渡完成的时间
  transition-duration:1s;
  
  设置过渡延时执行的时间
  transiton-delay:1s;
  
  设置过渡的类型（速度类型）
  transition-timing-function:linear;   线性
  transition-timing-function:ease;	由快到慢
  transition-timing-function:ease-in;		由慢到快
  transition-timing-function:ease-out;	
  transition-timing-function:ease-in-out;
  
  代表过渡的速度是匀速完成的
  transition-timing-function:linear;
  
  属性连写
  transition:all 1s 2s linear;
  
  或者单独为每一个属性设置过渡的效果
  transition: width 1s linear,
  			height 1s 1s linear,
  			background-color 1s 2s linear;
  ```

#### 2D转换（transform）

1. 位移

   - transform:translate(400px,200px);
   - 总结：
     - 如果在 translate() 中设置**一个值**，那么代表当前元素是沿着水平方向移动，如果是正数则向右移动，反之向左移动。
     - 如果在 translate() 中设置两个值，第一个值代表水平方向移动，第二个值代表垂直方向移动。
     - translate() 中可以设置百分比，百分比是相对元素自己的宽度或者高度

2. 旋转

   - transform:rotate(360deg);

   - 总结：

     - 如果设置的是一个正数，那么代表当前元素是按照顺时针方向旋转，反之逆时针旋转

     - 如果我们希望一个元素即旋转又位移，推荐先写位移然后设置旋转

       ```css
       transform:translate(400px) rotate(360deg);
       ```

   - 设置旋转圆心

     - transform-origin 设置旋转圆心位置
       - 可以通过关键字设置 left | right | top | bottom
       - 可以设置具体值

3. 缩放(让元素放大或缩小)

   - transform:scale(0.5,1);
   - 总结：
     - 如果 scale() 中设置的是一个值，那么代表该元素在水平方向和垂直方向同时放大或者缩小。
     - 如果设置两个值，那么第一个值代表的是水平方向的放大或缩小。第二个值代表的是垂直方向的放大或者缩小。
     - 如果要实现放大的效果，那么我们设置大于 1 的数字就可以了。
     - 如果要实现缩小的效果，那么我们设置大于 0 小于 1 之间的小数就可以了。
     - 不能设置负数。

4. 倾斜

   - transform:skew(30deg);

   - 总结：

     - 如果 skew 设的是一个值，那么代表该元素是沿着水平方向让元素发生倾斜，如果设置两个值，第一个代表水平方向，第二值代表垂直方向。

   - 属性连写：

     ```css
     transform:translate() rotate() scale() skew();
     ```

5. 定位盒子居中显示

   - 2d转化实现绝对定位的盒子居中：

     ```css
     .one{
         width:123px;
         height:123px;
         background-color:pink;
         position:absolute;
         left:50%;
         transform:translate(-50%);
     }
     ```

   - 3d转化的方式实现绝对定位的盒子水平居中

     ```css
     .one{
         width:123px;
         height:123px;
         background-color:pink;
         position:absolute;
         left:50%;
         transform:translateX(-50%);
     }
     ```

#### 3D转换（transform）

1. 位移

   1. ```css
      transform:translateX(-400px) translateY(-400px) translateZ(-400px);
      ```

   2. 总结

      1. 如果设置的是正数，那么就沿着对应坐标轴的正方向移动，反之沿着反方向移动。

2. 旋转

   1. ```css
      transform:rotateX(-90deg);
      transform:rotateY(-90deg);
      transform:rotateZ(90deg);
      ```

   2. 备注

      1. 通过左手法则判断元素的旋转方向
      2. 左手法则：用左手握住坐标轴，大拇指指向坐标轴的方向，四个手指弯曲的方向就是旋转的方向。

3. 缩放

   ```css
   transform:scaleX(2) scaleY(2);
   ```

4. 透视

   - perspective:1000px;
   - 总结:
     - 该属性要设置给变形元素的父元素
     - 该属性不是一个必须要设置的属性
     - 该属性的取值不是惟一的，但是我们一般情况下将该属性的取值设置了800 - 1000 之间。

#### 3D呈现（transform-style）

```css
transform-style: preserve-3d;----让子盒子位于三维空间里
transform-style: flat;----让子盒子位于此元素所在的平面内（子盒子被扁平化）
```



#### 动画（animation）

1. animation复合属性

   ```css
   动画名称
   animation-name:box_move;
   动画执行的时间
   animation-duration:1s;
   动画执行次数,默认执行一次，	infinite:次数无限
   animation-iteration-count:infinite;
   设置动画的方向：normal正常，alternate反向
   animation-direction:alternate;
   设置动画的速度类型----linear ease-in-out steps()
   animation-timing-function:linear;
   设置动画延时执行
   animation-delay:2s;
   设置动画结束时，盒子的状态---forwards保持结束后的状态，backwards动画结束后回到最初的状态
   animation-fill-mode:forwoards;
   
   .box:hover{
       动画暂停
       animation-play-state:paused;
   }
   ```

2. steps()的效果

   1. 

3. 定义动画

   - 通过@keyframes  + 自定义动画名称{}

   - 在动画集中通过from和to设置动画的开始状态和结束状态

     <img src = "img/动画.jpg" style = "width:40em;">

   - 注意：

     - 动画集要单独定义，不能放到类样式中

   - 动画连写方式：

     ```css
     animation: move 1s linear infinite alternate;
     ```

     或者可以同时调用多个动画集

     ```css
     .box{
         width:200px;
         height:200px;
         background-color:red;
         
         animation: 定义的动画名称 持续时间 执行次数 是否反向 运动曲线 延迟执行
         animation:move 1s linear infinite alternate,
             	  chage1 1s 1s linear;
         
     }
     ```

   - 可以通过设置百分比的形式设置动画集中的不同状态

     ```css
     @keyframes change{
         动画的开始状态
         0%{
             
         }
         
         动画的结束状态
         100%{
             
         }
     }
     ```

     百分比是相对动画时间

   #### 伸缩布局（flex）

   - 首先给子元素的直接父元素设置为伸缩盒子	display:flex;

   - 当父元素为伸缩盒子的时候，默认子元素在一行上显示。

   - 伸缩盒子特点：

     - 如果一个盒子变为伸缩盒子，那么该盒子就具有了两条轴，一条是主轴，一条是侧轴。主轴的默认方向是水平从左向右，侧轴始终要垂直于主轴。
     - 子元素是按照主轴的方向显示的

   - 设置主轴的方向

     ```css
     设置主轴的方向：默认主轴是水平从左向右 row
     flex-direction:row;	水平
     flex-direction:row-reverse;	翻转水平
     flex-direction:column;	垂直
     flex-direction:column-reverse;	
     ```

   - 总结：

     - 由于在伸缩盒子中子元素是按照主轴的方向显示的，所以当我们调整主轴的方向的时候，子元素随着发生位置的改变。
     - 主轴方向发生了改变后，侧轴的方向也会发生改变。

   - 设置子元素在主轴的对齐方式

     ```css
     justify-content:flex-start;从主轴的起点对齐
     justify-content:flex-end;从主轴的终点对齐
     justify-content:center;居中对齐
     justify-content:space-around;在父盒子里平分
     justify-content:space-between;两端对齐 平分
     ```

     - 总结：
       - 通过设置该属性，只是改变了子元素在主轴方向的对齐显示位置，而元素自己本身的位置并没有改变。

   - 设置子元素在侧轴的对齐方式

     ```css
     设置子元素在侧轴的对齐方式 stretch
     align-items:flex-start;从侧轴开始的方向对齐
     align-items:flex-end;从侧轴结束的方向对齐
     align-items:center;中间对齐
     align-items:baseline; 基线默认flex-start
     align-items:stretch;拉伸
     ```

     - 总结：
       - 在伸缩盒子中，子元素可以不用设置高度，如果不设置，那么该子元素的高度等于其父元素的高度，由于子元素是在侧轴的对齐方式是拉伸的效果。

   - 设置伸缩盒子是否允许子元素换行

     - 在伸缩盒子中，如果子元素的宽度超出父元素的宽度，那么子元素不会换行显示。

     - 设置子元素是否换行显示

       ```css
       设置子元素是否换行显示：默认不换行 nowrap
       flex-wrap:nowrap;
       子元素可以换行显示
       flex-wrap:wrap;
       ```

   - 设置子元素换行后的对齐方式

     ```css
     设置子元素换行后的对齐方式 默认的对齐方式：stretch；
     align-content:flex-start;
     align-content:flex-end;
     align-content:center;
     align-content:space-around;
     align-content:space-between;
     align-content:stretch;
     ```

     该属性设置的前提必须保证元素是换行后的元素。

   - 伸缩盒子中子元素的相关属性

     - flex:设置子元素占父元素剩余宽度的比例
     - order：排序
       - 不需要改变HTML结构中的位置，就可以实现在页面中调换元素的显示位置
       - order的取值越大，那么该元素在页面中的显示位置越靠后。

