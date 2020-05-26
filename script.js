const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for(let card of cards) {
    const fotoID = card.getAttribute('id')
    const titulo = card.querySelector('h3').innerHTML
    const inventor = card.querySelector('p').innerHTML

    card.addEventListener('click', function(){
        modalOverlay.classList.add('ativo')
        
        modalOverlay.querySelector('img').src = `assets/${fotoID}.png`
        modalOverlay.querySelector('h3').innerHTML = `${titulo}`
        modalOverlay.querySelector('p').innerHTML = `${inventor}`
    })
}

document.querySelector('.close-modal').addEventListener('click', function(){
    modalOverlay.classList.remove('ativo')
})