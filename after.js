

    const btnlogin = document.querySelector('.btn')
    const btncadastro = document.querySelector('.btn2')
    const header1 = document.querySelector('#header1')


    let identidadeUser = JSON.parse(localStorage.getItem('_DadosUser2') || '{}')

    let Name = identidadeUser.dados.Name
    let Permission = identidadeUser.dados.Permission

    if(Permission == 0){
        const btnCadastraCarro = document.querySelector('.cadastracarro')
        const btnmeuSaldo = document.querySelector('#meuSaldo')
        const btnMeusVeiculos = document.querySelector('#meusVeiculos')

        btnCadastraCarro.setAttribute('style', 'display:none')
        btnmeuSaldo.setAttribute('style', 'display:none')
        btnMeusVeiculos.setAttribute('style', 'display:none')

        btncadastro.setAttribute('style', 'display:none')
        btnlogin.setAttribute('style', 'display:none')

    
        let postElements = ''
        let postElement = `<p class="IdName">${Name}➭</p>`
    
        postElements += postElement
    


        document.getElementById('openDados').innerHTML = postElements
    }

    if(Permission == 1){
        let spanvalue2 = document.querySelector('.spanValue2')
        

        btncadastro.setAttribute('style', 'display:none')
        btnlogin.setAttribute('style', 'display:none')

    
        let postElements = ''
        let postElement = `<p class="IdName">${Name}➭</p>`
    
        postElements += postElement
    


        document.getElementById('openDados').innerHTML = postElements
    }

    if(Permission == 2){
        

        btncadastro.setAttribute('style', 'display:none')
        btnlogin.setAttribute('style', 'display:none')

    
        let postElements = ''
        let postElement = `<p class="IdName">${Name}➭</p>`
    
        postElements += postElement
    


        document.getElementById('openDados').innerHTML = postElements
    }

    if(Permission == 3){
        

        btncadastro.setAttribute('style', 'display:none')
        btnlogin.setAttribute('style', 'display:none')

    
        let postElements = ''
        let postElement = `<p class="IdName">${Name}➭</p>`
    
        postElements += postElement
    


        document.getElementById('openDados').innerHTML = postElements
    }


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
    btnmeuSaldo.addEventListener('click', (e) => {
        e.preventDefault()

        const cardMeuSaldoValidacao = document.getElementById('cardMeuSaldo').style.display
        const cardMeuSaldo = document.querySelector('#cardMeuSaldo')

        if(cardMeuSaldoValidacao){
            
            cardMeuSaldo.removeAttribute('style', 'display:none')
           
        }
        else{
            cardMeuSaldo.style.display = "flex"
        
        }

        let identidadeUser = JSON.parse(localStorage.getItem('_DadosUser2') || '{}')
        let usuarioid = identidadeUser.dados.UserId

        fetch('http://localhost:1323/car/carsCanCreate', {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                userId: usuarioid,
            })
        }).then((res) => {
            
            return res.json()
        }).then(data => {
            console.log(data)
        
            var valor = "Voce tem: " + data + " carros cadastrado"
            console.log(valor)

            if(data === "-1"){
                valor = "Voce tem plano Ilimitado"
             }
            let postElements = ''
            postElements += valor
            document.getElementById('value_saldo').textContent = postElements
           
        })
    })
}


if(btnMeusVeiculos){
    btnMeusVeiculos.addEventListener('click', () => {
        window.location.href = '/carrosuser/seucarro.html'
    })
}