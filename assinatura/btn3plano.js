let identidadeUser = JSON.parse(localStorage.getItem('_DadosUser2') || '{}')
    const usuarioid = identidadeUser.dados.UserId
        console.log(usuarioid)

    
        let btnUserid3 = document.querySelector('userid3')

        if(btnUserid3){
            btnUserid3.addEventListener('click', () => {
                window.location.href = `https://calm-caverns-77349.herokuapp.com/cliente2/?userID=${usuarioid}`
            })
        }