let identidadeUser = JSON.parse(localStorage.getItem('_DadosUser2') || '{}')
    const usuarioid = identidadeUser.dados.UserId
        console.log(usuarioid)



let btnUserid = document.querySelector('.userid')





if(btnUserid){
    btnUserid.addEventListener('click', () => {
        window.location.href = `https://calm-caverns-77349.herokuapp.com/?userID=${usuarioid}`
    })
}
