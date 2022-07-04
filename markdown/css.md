# 常用样式
## 解决div里面的图片下方会有空白
```css
div {
  img {
    vertical-align: middle;
  }
}
```
## 让星号垂直居中
```css
:after{
  content: "*";
  color: red;
  font-size: 14px;
  width: 20px;
  height: 20px;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  line-height: 23px;
}
```
## 弹窗-居中的规范写法
```html
/* 弹窗页面标记结构 */
<div class="component_popup">
  <div class="popup_mask"></div>
  <div class="popup_content">
    <div class="content_box"></div>
    <div class="content_close"></div>
  </div>
</div>
```
```css
/*整个弹窗组件*/
.component_popup{
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
}
/*遮罩背景*/
.popup_mask{
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
}
/*弹窗区域-严格居中*/
.popup_content{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

## 段落文字溢出后显示省略号

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

## 波纹动态效果

```html
<div class="get movable_block">
  <div class="inner"></div>
  <div class="inner outter"></div>
  <div class="inner outter1"></div>
  <div class="inner outter2"></div>
  <img src="../assets/img/home/get_img.svg" alt="领用图标" class="option_box_img get_img">
  <p class="get_text">领用</p>
</div>
```
```css
.movable_block {
  transition: all .3s;
}
.movable_block:hover {
  transform: translateY(-10px);
}

.get {
      position: relative;
      .inner {
        width: 50px;
        height: 50px;
        background: #FFFFFF;
        border-radius: 50%;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        z-index: 10;
        -webkit-animation-duration: 4s;
        animation-duration: 4s;
        -webkit-animation-name: state1;
        animation-name: state1;
        -webkit-animation-timing-function: linear;
        animation-timing-function: linear;
        -webkit-animation-iteration-count: infinite;
        animation-iteration-count: infinite;
        opacity: 0;
      }
      @keyframes state1 {
        0% {
          opacity: .08;
          -webkit-transform: scale(1);
          transform: scale(1);
        }
        100% {
          opacity: 0;
          -webkit-transform: scale(3.6);
          transform: scale(15);
        }
      }
      .outter {
        animation-delay: 1s;
      }
      .outter1 {
        animation-delay: 2s;
      }
      .outter2 {
        animation-delay: 3s;
      }
      p {
        font-size: 24px;
        font-weight: 700;
        text-align: center;
        color: #ffffff;
        line-height: 40px;
      }
    }
```
## less配置默认样式
```js
#flex(){
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: -moz-box;
		display: -moz-flex;
		display: flex;
	}
	#flex-direction-column(){
		-webkit-box-orient: vertical;
		-webkit-flex-direction: column;
		-moz-box-orient: vertical;
		-moz-flex-direction: column;
		-ms-flex-direction: column;
		flex-direction: column;
	}
	#flex-direction-row-reverse(){
		-webkit-flex-direction:  row-reverse;
		-moz-flex-direction:  row-reverse;
		-ms-flex-direction:  row-reverse;
		flex-direction: row-reverse;
	}
	#justify-content-center(){
		-webkit-box-pack: center;
		-webkit-justify-content: center;
		-moz-box-pack: center;
		-moz-justify-content: center;
		-ms-flex-pack: center;
		justify-content: center;
	}
	#justify-content-space-between(){
	    -webkit-box-pack: justify;
	    -webkit-justify-content: space-between;
	    -moz-box-pack: justify;
	    -moz-justify-content: space-between;
	    -ms-flex-pack: justify;
	    justify-content: space-between;
	}
	#align-items-center(){
		-webkit-box-align: center;
		-webkit-align-items: center;
		-moz-box-align: center;
		-moz-align-items: center;
		-ms-flex-align: center;
		align-items: center;
	}
```
# 无限滚动条
```css
.center {
      height: 100%;
      width: 300px;
      display: flex;
      align-items: center;
      overflow: hidden;
      .scrollAnimate {
        padding-left: 20px;
        font-size: 16px;
        color: rgba(0,0,0,0.75);
        display: inline-block;
        white-space: nowrap;
        animation: 10s wordsLoop linear infinite normal;
      }
      @keyframes wordsLoop {
        0% {
          transform: translateX(300px);
        }
        100% {
          transform: translateX(-100%);
        }
      }
    }
```