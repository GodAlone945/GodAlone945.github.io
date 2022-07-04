// 获取导航按钮
const navList = document.querySelector('#infoNav').querySelectorAll('p')
// 获取企业文化
const left = document.querySelector('.box-one')
const right = document.querySelector('.box-two')

navList.forEach((e) => {
    e.addEventListener('click', () => {
        navList.forEach((e) => {
            e.classList.remove('active')
        })
        e.classList.add('active')
    })
})
// 点击打开企业文化
navList[0].addEventListener('click', () => {
    left.style.display = 'block'
    right.style.display = 'none'
})
navList[1].addEventListener('click', () => {
    left.style.display = 'none'
    right.style.display = 'flex'
})
