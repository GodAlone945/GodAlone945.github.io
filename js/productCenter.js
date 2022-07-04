// 获取产品分类导航列表
const productList = document.querySelector('#productList').querySelectorAll('li')
// 获取当前产品分类类名
const productListTitle = document.querySelector('#product_list_title')

// 为导航列表添加点击事件，并添加激活样式
productList.forEach((e) => {
    e.onclick = () => {
        // 清除激活样式类名
        productList.forEach((el) => {
            el.classList.remove('active')
        })
        // 添加激活样式类名
        e.classList.add('active')
        // 更改显示当前分类类名
        productListTitle.innerText = e.innerText
    }
})
