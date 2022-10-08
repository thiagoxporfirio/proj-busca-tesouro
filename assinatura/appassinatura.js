let identidadeUser = JSON.parse(localStorage.getItem('_DadosUser2') || '{}')
    const usuarioid = identidadeUser.dados.UserId
        console.log(usuarioid)



let btnUserid = document.querySelector('.userid')
let btnUserid2 = document.querySelector('userid2')
let btnUserid3 = document.querySelector('userid3')



if(btnUserid){
    btnUserid.addEventListener('click', () => {
        window.location.href = `https://calm-caverns-77349.herokuapp.com/?userID=${usuarioid}`
    })
}

if(btnUserid2){
    btnUserid2.addEventListener('click', () => {
        window.location.href = `https://calm-caverns-77349.herokuapp.com/cliente2/?userID=${usuarioid}`
    })
}

if(btnUserid3){
    btnUserid3.addEventListener('click', () => {
        window.location.href = `https://calm-caverns-77349.herokuapp.com/cliente3/?userID=${usuarioid}`
    })
}