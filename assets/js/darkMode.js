const icon = document.querySelector('[data-js="iconThema"]')
const btn = document.querySelector('.btn__mode')
const body = document.querySelector('[data-js="body"]')
const cabecalho = document.querySelector('.cabecalho')
const inputTxt = document.querySelector('.input__txt')
const inputSelect = document.querySelector('.input__select')
const card = document.querySelectorAll('.card__container')

const toggleClass = (ele, func) => {
    ele.classList.toggle(func)
}

const cardDark =  () =>{
    const card = document.querySelectorAll('.card__container')
    const cardDark = [...card].forEach(card => toggleClass(card,'card__dark'))
}


const handleClickDark =  e => {
    toggleClass(body,'body__dark')
    toggleClass(cabecalho,'cabecalho__dark')
    toggleClass(inputSelect,'input__dark')
    toggleClass(inputTxt,'input__dark')
    cardDark()
}

btn.addEventListener('click',handleClickDark)
