const tabs = document.querySelectorAll('.tabheader__item')
const tabsParent = document.querySelector('.tabheader__items')
const tabContent = document.querySelectorAll('.tabcontent')

const hideTabContent = () => {
    tabContent.forEach(item => {
        item.style.display = 'none'
    })
    tabs.forEach(item => {
        item.classList.remove('tabheader__item_active')
    })
}

const showTabContent = (i = 0) => {
    tabContent[i].style.display = 'block'
    tabs[i].classList.add('tabheader__item_active')
}

hideTabContent()
showTabContent()


const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('.btn_white')
const closeModalBtn = document.querySelector('.modal__close')

const openModal = () => {
    modal.classList.add('show')
    modal.classList.remove('hide')
    document.body.style.overflow = 'hidden'
}

const closeModal = () => {
    modal.classList.add('hide')
    modal.classList.remove('show')
    document.body.style.overflow = ''
}

modalTrigger.addEventListener('click', openModal)
closeModalBtn.addEventListener('click', closeModal)

modal.onclick = (event) => event.target === modal ? closeModal() : false
window.onkeydown = (event) => event.code === 'Backspace' ? closeModal() : false

let j = 0
function sliderAuto() {
    setInterval(() => {
        j++
        if (j > 3) {
            j = 0
        }
        hideTabContent()
        showTabContent(j)
    }, 2000)
}
sliderAuto()

tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tabheader__item')) {
        tabs.forEach((item, i) => {
            if (event.target === item) {
                hideTabContent()
                showTabContent(i)
                j = i
            }
        })
    }
}


const footerModal = () => {
    const scroll = document.documentElement
    if (scroll.scrollTop + scroll.clientHeight >= scroll.scrollHeight - 0.8) {
        openModal()
        document.body.style.overflow = 'hidden'
    }
}
window.addEventListener('scroll', footerModal)

const dedline = '2023-02-25'
function getTimerRemaining(dedline) {
    const t = new Date(dedline) - new Date(),
        days = Math.floor((t / (1000 * 60 * 60 * 24))), // опре кол дней
        hours = Math.floor((t / (1000 * 60 * 60) % 24)), // опре кол часов
        min = Math.floor(((t / 1000 / 60) % 60)), // опре кол минут
        sec = Math.floor(((t / 1000) % 60)) // опре кол секунды
    return {
        "total": t,
        "days": days,
        "hours": hours,
        "minutes": min,
        "seconds": sec
    }
}

function setClock(element, deadline) {
    const elem = document.querySelector(element),
          days = elem.querySelector('#days'),
          hours = elem.querySelector('#hours'),
          minutes = elem.querySelector('#minutes'),
          seconds = elem.querySelector('#seconds')
}