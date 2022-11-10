let infos = document.querySelector('#infos')
let cardinfos_container = document.querySelector('#cardinfos-container')
let cardInfosValidacao = document.getElementById('cardinfos-container').style.display
console.log(cardinfos_container, infos)


infos.addEventListener('click', (e) => {
    e.preventDefault()

    if(cardInfosValidacao){

        cardinfos_container.removeAttribute('style', 'display:none')
    }
    else{
        cardinfos_container.style.display = "flex"
        console.log('clicou')
    }
})
