const containerCard = document.querySelector('.container__principal')
const country = document.querySelector('.country')
const creatElement = (el, clas) => {
    const elemento = document.createElement(el)
    elemento.classList.add(clas)
    return elemento
}

const creatCard = (data) => {
    data.forEach(([{common},population,region,[capi],flags])=>{
        const ul = creatElement('ul', 'card__container')
        const li = creatElement('li', 'img')
        const img = creatElement('img', 'card__img')
        const h2 = creatElement('h2', 'card__pais')
        const liPopulation = creatElement('li', 'card__populacao')
        const liRegion = creatElement('li', 'card__regiao')
        const liCapital = creatElement('li', 'card__capital')
        const cardCorpo = creatElement('div','card__corpo')
        liPopulation.innerText =`População: ${population}`
        h2.innerText = common
        liRegion.innerText = `Região: ${region}`
        liCapital.innerText = `Capital: ${capi}`
        img.setAttribute('src',`${flags.svg}` )
        li.append(img)
        ul.append(li)
        cardCorpo.append(h2)
        cardCorpo.append(liPopulation)
        cardCorpo.append(liRegion)
        cardCorpo.append(liCapital)
        ul.append(cardCorpo)
        country.append(ul)
      
    })
}
const getData =( async () => {
    const response = await fetchApi()
    const dataCard = response.map(( {name,population,region,capital,flags})=> [name,population,region,capital,flags])
    creatCard(dataCard)
})()

