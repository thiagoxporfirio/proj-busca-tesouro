
const pegaNomeEId = () => {
    const btnlogin = document.querySelector('.btn')
    const btncadastro = document.querySelector('.btn2')
    const header1 = document.querySelector('#header1')


    let identidadeUser = JSON.parse(localStorage.getItem('_DadosUser2') || '{}')
    const usuarioid = identidadeUser.dados.UserId
    const Name = identidadeUser.dados.Name


    btncadastro.setAttribute('style', 'display:none')
    btnlogin.setAttribute('style', 'display:none')

    
        let postElements = ''
        let postElement = `<p class="IdName">${Name}➭</p>`
    
        postElements += postElement
    


    document.getElementById('openDados').innerHTML = postElements

}

pegaNomeEId()
