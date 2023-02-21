const icon = document.querySelector('[data-js="iconThema"]')
const btn = document.querySelector('.btn__mode')
const body = document.querySelector('[data-js="body"]')
const cabecalho = document.querySelector('.cabecalho')
const inputTxt = document.querySelector('.input__txt')
const inputSelect = document.querySelector('.input__select')
const card = document.querySelectorAll('.card__container')

const cardDark =  () =>{
    const card = document.querySelectorAll('.card__container')
    const cardDark = [...card].forEach(card => card.classList.toggle('card__dark'))
}

btn.addEventListener('click', e => {
    body.classList.toggle('body__dark')
    cabecalho.classList.toggle('cabecalho__dark')
    cardDark()
    inputSelect.classList.toggle('input__dark')
    inputTxt.classList.toggle('input__dark')
})
