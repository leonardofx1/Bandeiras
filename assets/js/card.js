const containerCard = document.querySelector('.container__principal')
const country = document.querySelector('.country')
const creatElement = (el, clas) => {
    const elemento = document.createElement(el)
    elemento.classList.add(clas)
    return elemento
}

const dataCards = () => {
    let dataCard = [];

    const fetch = async () => {
      const response = await fetchApi();
      dataCard = response.map(({ name, population, region, capital, flags }) => [name, population, region, capital, flags]);
    }

    const storage = (objtString) => {
        localStorage.setItem('pais', objtString)
    }

    const convertObject = (cardDetail) => {
        const cardObjString = JSON.stringify(cardDetail)
        storage(cardObjString)
    }

    const filtroDetail = async(pais) => {
        const response = await fetchApi();
           const cardDetail =  [...response.filter(paises => paises.name.common.toUpperCase() ===pais.toUpperCase())]
           convertObject(cardDetail)
    } 
    const createCards = () => {
      dataCard.forEach(creatCard);
    }

    return { fetch, createCards,filtroDetail};
  };
  
  const data = dataCards
();
  data.fetch().then(() => data.createCards());

const showCard = (card) => {
        country.append(card)
}
const linkPage = () =>  location.href ='assets/bandeira/index.html'

const handleinfoPais = (e) => {
  const value = e.currentTarget.getAttribute('value');

  data.filtroDetail(value)
  
  setTimeout(linkPage,100)

}

const creatCard = ([name, population, region, capital, flags]) => {
    const ul = creatElement('ul', 'card__container')
    const li = creatElement('li', 'img')
    const img = creatElement('img', 'card__img')
    const h2 = creatElement('h2', 'card__pais')
    const liPopulation = creatElement('li', 'card__populacao')
    const liRegion = creatElement('li', 'card__regiao')
    const liCapital = creatElement('li', 'card__capital')
    const cardCorpo = creatElement('div', 'card__corpo')
    liPopulation.innerText = `População: ${population}`
    h2.innerText = name.common
    liRegion.innerText = `Região: ${region}`
    liCapital.innerText = `Capital: ${capital}`
    img.setAttribute('src', `${flags.png}`)
    img.setAttribute('alt', `${name.common}`)
    li.append(img)
    ul.append(li)
    cardCorpo.append(h2)
    cardCorpo.append(liPopulation)
    cardCorpo.append(liRegion)
    cardCorpo.append(liCapital)
    ul.append(cardCorpo)
    ul.setAttribute('value', name.common)

    ul.addEventListener('click',handleinfoPais );

    showCard(ul)

}


