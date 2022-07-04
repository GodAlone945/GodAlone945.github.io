// 获取咨询本产品按钮
const button = document.querySelectorAll('button')
// 获取弹窗
const popup = document.querySelector('.popup')
// 获取弹窗关闭按钮
const popupCloseBtn = document.querySelector('#closePopup')

button.forEach((e) => {
    e.onclick = () => {
        popup.style.display = 'block'
    }
})
popupCloseBtn.onclick = () => {
    popup.style.display = 'none'
}
