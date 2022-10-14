let identidadeUser = JSON.parse(localStorage.getItem('_DadosUser2') || '{}')
const usuarioid = identidadeUser.dados.UserId

const dadosBtnVerCarros = {
    state: '',
    userId: usuarioid
}

let btnVerCarros = document.querySelector('#btnVerCarros')
let btnVoltar = document.querySelector('#imgVoltar')

if(btnVoltar){
    btnVoltar.addEventListener('click', () => {
        window.location.href = "/index.html"
    })
}


const successHandler = () => {
    btnVerCarros.classList.remove('loading');
    btnVerCarros.classList.remove('error');
    btnVerCarros.classList.add('success');
    btnVerCarros.textContent = "Sucesso! :)";
}

const errorHandler = () => {
    btnVerCarros.classList.remove('loading');
    btnVerCarros.classList.remove('success');
    btnVerCarros.classList.add('error');
    btnVerCarros.textContent = "Nada encontrado :(";
}

if(btnVerCarros){
    btnVerCarros.addEventListener('click', (event) => {
        event.preventDefault()

        btnVerCarros.textContent = "Buscando..."

        setTimeout(() => {

            fetch('', {
                    method: 'POST',
                    headers: {'Content-type': 'application/json'},
                    body: JSON.stringify(dadosBtnVerCarros)
                }).then((res) => {
                    if(res.status !== 200){
                        return errorHandler()
                    }else{
                        successHandler()
                        return res.json()
                    }
                }) 
            














        }, 1000)
    })
}