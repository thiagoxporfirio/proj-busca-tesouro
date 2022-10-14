
const pegaNomeEId = () => {
    const btnlogin = document.querySelector('.btn')
    const btncadastro = document.querySelector('.btn2')
    const header1 = document.querySelector('#header1')


    let identidadeUser = JSON.parse(localStorage.getItem('_DadosUser2') || '{}')
    const usuarioid = identidadeUser.dados.UserId
    const Name = identidadeUser.dados.Name
    const Permission = identidadeUser.dados.Permission

    console.log('Permission: ' + Permission)

    if(Permission == 0){
        const btnCadastraCarro = document.querySelector('.cadastracarro')
        const btnmeuSaldo = document.querySelector('.meuSaldo')
        const btnMeusVeiculos = document.querySelector('.meusVeiculos')

        btnCadastraCarro.setAttribute('style', 'display:none')
        btnmeuSaldo.setAttribute('style', 'display:none')
        btnMeusVeiculos.setAttribute('style', 'display:none')
    }


    btncadastro.setAttribute('style', 'display:none')
    btnlogin.setAttribute('style', 'display:none')

    
        let postElements = ''
        let postElement = `<p class="IdName">${Name}➭</p>`
    
        postElements += postElement
    


    document.getElementById('openDados').innerHTML = postElements

}
pegaNomeEId()

const openDados = document.querySelector('#openDados')
const btnSair = document.querySelector('.btnsair')
const btnLogout = document.querySelector('.logout')
const btncadastra_Carro = document.querySelector('#cadastroDeCarros')
const btnmeuSaldo = document.querySelector('#meuSaldo')
const btnMeusVeiculos = document.querySelector('#meusVeiculos')

if(openDados){
    openDados.addEventListener('click', () => {
        const divPainel = document.querySelector('.containerCard')

        divPainel.setAttribute('style', 'display:block')
    })
}

if(btnSair){
    btnSair.addEventListener('click', () => {
        const divPainel = document.querySelector('.containerCard')
        divPainel.setAttribute('style', 'display:none')
    })
}

if(btnLogout){
    btnLogout.addEventListener('click', () => {
        
        localStorage.clear();
        window.location.href = '/loginUser/login.html'
    })
}

if(btncadastra_Carro){
    btncadastra_Carro.addEventListener('click', ()=> {
        window.location.href = '/assinatura/cadastrocarro.html'
    })
}

if(btnmeuSaldo){
    btnmeuSaldo.addEventListener('click', () => {
        const cardMeuSaldoValidacao = document.getElementById('cardMeuSaldo').style.display
        const cardMeuSaldo = document.querySelector('#cardMeuSaldo')

        if(cardMeuSaldoValidacao){
            
            cardMeuSaldo.removeAttribute('style', 'display:none')
           
        }
        else{
            cardMeuSaldo.style.display = "flex"
        
        }
    })
}


if(btnMeusVeiculos){
    btnMeusVeiculos.addEventListener('click', () => {
        window.location.href = '/carrosuser/seucarro.html'
    })
}