const inputTXT = document.querySelector('.input__txt')
const select = document.querySelector('.input__select')

const filtro = ([...bandeiras], pesquisa) => {
    bandeiras.filter((bandeira => !bandeira.textContent.toUpperCase().includes(pesquisa.toUpperCase())))
    .forEach(card => card.style.display ='none')
    bandeiras.filter((bandeira => bandeira.textContent.toUpperCase().includes(pesquisa.toUpperCase() ,console.log(bandeira))))
    .forEach(card => card.style.display ='block')
}


select.addEventListener('change', ({target})=> {
    const card = document.querySelectorAll('.card__container')
    filtro(card,target.value)
})


inputTXT.addEventListener('input', ({target}) => {
    const card = document.querySelectorAll('.card__container')
    filtro(card, target.value)
})

