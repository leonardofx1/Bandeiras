const btnDark = document.querySelector('[data-js="dark-mode"]')
const fronteiras = [...document.querySelectorAll('.pais__fronteira')]
const voltar = document.querySelector('[data-js="btn-voltar"]')
const body = document.querySelector('.body')
const cardDesc = document.querySelector('.card__desc')
const cabecalho =  document.querySelector('.cabecalho')
const textoDesc = [...document.querySelectorAll('[data-js="texto__desc"]')]
const btnVoltar = document.querySelector('[data-js="btn-voltar"]')
console.log(btnVoltar)

const darkMode = (tag, classDark ) => {
    tag.classList.toggle(classDark)
}

btnVoltar.addEventListener('click', () => {
    location.href = 'https://rest-coutry-fx.netlify.app'
})

btnDark.addEventListener('click', () => {
    fronteiras.forEach((item) => darkMode(item,'dark'))
    darkMode(body, 'body__dark')
    darkMode(voltar, 'dark')
    darkMode(cabecalho, 'dark')
    darkMode(btnDark, 'dark')
    textoDesc.forEach(item => darkMode(item, 'text__dark'))
})