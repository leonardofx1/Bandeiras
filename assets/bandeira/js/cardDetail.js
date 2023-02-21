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



const [cardDetail]=  JSON.parse( localStorage.getItem('pais'))
const [chave]= Object.keys(cardDetail.name.nativeName)
const [chaveMoeda] =   Object.keys(cardDetail.currencies)
const [chaveIndioma] = Object.keys(cardDetail.languages)
 console.log( chaveIndioma,cardDetail)

const card = () => {
    const imgWEb =  cardDetail.flags.png
    img.setAttribute('src', imgWEb)
    pais.textContent= cardDetail.name.common
    nomeNativo.textContent =  cardDetail.name.nativeName[chave].official
    populacao.textContent = cardDetail.population
    regiao.textContent = cardDetail.region
    capital.textContent = cardDetail.capital[0]
    subregiao.textContent = cardDetail.subregion
    dominio.textContent = cardDetail.tld[0]
    moeda.textContent = cardDetail.currencies[chaveMoeda].name
    linguagem.textContent = cardDetail.languages[chaveIndioma]
}
card()