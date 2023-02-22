const img = document.querySelector('img')
const pais = document.querySelector('.pais')
const nomeNativo = document.querySelector('[data-js="nativo"]')
const populacao = document.querySelector('[data-js="populacao"]')
const regiao = document.querySelector('[data-js="regiao"]')
const capital = document.querySelector('[data-js="capital"]')
const subregiao = document.querySelector('[data-js="subregiao"]')
const dominio = document.querySelector('[data-js="dominio"]')
const moeda = document.querySelector('[ data-js="moeda"]')
const linguagem = document.querySelector('[data-js="linguagem"]')

const toTransformKey = prop => Object.keys(prop)

const [cardDetal] =  JSON.parse( localStorage.getItem('pais'))
const [chave] = toTransformKey(cardDetal.name.nativeName)
const [chaveMoeda] =   toTransformKey(cardDetal.currencies)
const [chaveIndioma] = toTransformKey(cardDetal.languages)


const cardShowInfos = () => {
    const imgWEb =  cardDetal.flags.png
    img.setAttribute('src', imgWEb)
    pais.textContent= cardDetal.name.common
    nomeNativo.textContent =  cardDetal.name.nativeName[chave].official
    populacao.textContent = cardDetal.population
    regiao.textContent = cardDetal.region
    capital.textContent = cardDetal.capital[0]
    subregiao.textContent = cardDetal.subregion
    dominio.textContent = cardDetal.tld[0]
    moeda.textContent = cardDetal.currencies[chaveMoeda].name
    linguagem.textContent = cardDetal.languages[chaveIndioma]
}
cardShowInfos()