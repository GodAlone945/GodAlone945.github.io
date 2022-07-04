# 6位数验证码

Created: April 20, 2021 4:25 PM
标签: vue, 代码

```jsx
<div class="numberCode">
        <el-input @input="inputControl(item)"
                  @keyup.native="inputDirection($event, item)"
                  @focus="adjust(item)"
                  :ref="'item' + item"
                  :key="item + 'code'"
                  :id="'item' + item"
                  :autofocus="item == current"
                  maxlength="1"
                  v-for="item in 6"
                  v-model="numberCode[item - 1]"></el-input>
      </div>

// ====================控制验证码输入框 ↓====================
      inputControl (item) {
        // 当输入框内的内容变化是，判断当前输入框对应位置的数组位置内容是否为空
        let number = this.numberCode[item - 1]
        // 不为空，将聚焦与下一个输入框
        this.current = number ? item+1 : item-1
        let ref = number ? `item${parseInt(item) + 1}` : `item${parseInt(item) - 1}`
        let dom = document.getElementById(ref)
        if (dom) dom.focus()
      },
      //
      adjust (item) {
        // 必须从第一个输入框开始输入
        if (!this.numberCode[0]) {
          let dom = document.getElementById('item1')
          if (dom) dom.focus()
        }
        console.log(item, this.current);
        if (item !== this.current) {
          let ref = `item${parseInt(this.current)}`
          let dom = document.getElementById(ref)
          if (dom) dom.focus()
        }
      },
      // ========== 回退键触发事件 ↓ ==========
      inputDirection (e, item) {
        let val = this.numberCode[item - 1]
        if (!val && e.keyCode == 8) {
          let ref = `item${parseInt(item) - 1}`
          this.current = item -1
          let dom = document.getElementById(ref)
          if (dom) dom.focus()
        }
        if (e.keyCode != 8 && val) {
          let ref = `item${parseInt(item) + 1}`
          this.current = item + 1
          let dom = document.getElementById(ref)
          if (dom) dom.focus()
        }
      },
```