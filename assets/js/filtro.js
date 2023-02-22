const inputTXT = document.querySelector('.input__txt')
const select = document.querySelector('.input__select')

const toHideCard = ([...bandeiras], pesquisa) => {  
  bandeiras.filter(bandeira => !bandeira.textContent.toUpperCase().includes(pesquisa.toUpperCase()))
    .forEach(card => card.style.display = 'none')
}

const showCardPais = ([...bandeiras], pesquisa) => {
  bandeiras.filter(bandeira => bandeira.textContent.toUpperCase().includes(pesquisa.toUpperCase()))
    .forEach(card => card.style.display = 'block')
}


select.addEventListener('change', ({target}) => {
  const card = document.querySelectorAll('.card__container')
  const pesquisa = target.value.trim()

  toHideCard(card,pesquisa)
  showCardPais(card,pesquisa)
})

inputTXT.addEventListener('input', ({target}) => {
  const card = document.querySelectorAll('.card__container')
  const pesquisa = target.value.trim()
  
  toHideCard(card,pesquisa)
  showCardPais(card,pesquisa)
})
