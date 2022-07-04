// 获取页面跳转图标
const icon = document.querySelector('.icon')
// 获取跳转对应页面的页面高度
const sectionClientHeight = document.querySelector('.section-two').offsetTop
// 获取 section-five 的四个点击框
const solutionList = document.querySelector('#solutionList').querySelectorAll('li')

// 点击图标滚动到对应页面高度
icon.onclick = () => {
    window.scrollTo({
        top: sectionClientHeight,
        behavior: 'smooth'
    })
}
// 点击更多解决方案的四个分类框的点击事件
solutionList.forEach((e) => {
  e.querySelector('.active').onclick = () => {
      e.querySelector('.active').style.display = 'none'
      e.querySelector('.common').style.display = 'grid'
  }
  e.querySelector('.common').onclick = () => {
      e.querySelector('.active').style.display = 'flex'
      e.querySelector('.common').style.display = 'none'
  }
})

