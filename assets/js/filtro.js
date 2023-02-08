const inputTXT = document.querySelector('.input__txt')
inputTXT.addEventListener('input', e => {
    const card = document.querySelectorAll('.card__container')
    const cardDark = [...card].filter(card => !card.textContent.toUpperCase().includes(e.target.value.toUpperCase()))
    .forEach(card => card.style.display ='none')
    const car = [...card].filter(card => card.textContent.toUpperCase().includes(e.target.value.toUpperCase()))
    .forEach(card => card.style.display ='block')
})

