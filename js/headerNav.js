// 获取pc端页面的导航栏按钮
const headerList = document.querySelector('#headerList').querySelectorAll('li')
// 获取自适应设备的导航栏按钮
const mediaHeaderList = document.querySelector('#mediaHeaderList').querySelectorAll('li')
// 获取小屏设备展开导航栏的按钮
const menuListBtn = document.querySelector('.menu-img')
// 获取隐藏的导航栏
const menuList = document.querySelector('.menu-list')
// 获取关闭导航栏按钮
const menuClose = document.querySelector('.menu-close')

// 为导航按钮注册点击事件，并控制高亮
headerList.forEach((e) => {
    e.onclick = () => {
        // 清除所有的激活样式
        headerList.forEach((el) => {
            el.classList.remove('active')
        })
        // 添加激活样式类名
        e.classList.add('active')
    }
})
// 为相应设备页面的导航栏注册点击事件，并控制高亮
mediaHeaderList.forEach((e) => {
    e.onclick = () => {
        // 清除所有的激活样式
        mediaHeaderList.forEach((el) => {
            el.children[0].classList.remove('active')
        })
        // 添加激活样式类名
        e.children[0].classList.add('active')
    }
})

// 点击展开导航列表
menuListBtn.onclick = () => {
    menuList.style.display = 'block'
}
// 点击关闭导航列表
menuClose.onclick = () => {
    menuList.style.display = 'none'
}
