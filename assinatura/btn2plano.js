let identidadeUser = JSON.parse(localStorage.getItem('_DadosUser2') || '{}')
    const usuarioid = identidadeUser.dados.UserId
        console.log(usuarioid)

    
        let btnUserid2 = document.querySelector('userid2')

        if(btnUserid2){
            btnUserid2.addEventListener('click', () => {
                window.location.href = `https://calm-caverns-77349.herokuapp.com/cliente2/?userID=${usuarioid}`
            })
        }