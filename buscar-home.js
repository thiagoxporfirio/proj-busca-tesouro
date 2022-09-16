
const init = () => {

    let identidadeUser = JSON.parse(localStorage.getItem('_DadosUser2') || '{}')
    const usuarioid = identidadeUser.dados.UserId
    console.log('UserID: ' + usuarioid)

    const btnSubmit_Buscar = document.querySelector('#btnSubmit')
    const inputPlaca = document.querySelector('.input1')

    const btnFechar = document.querySelector('#fechar')
    const btnSucesso = document.querySelector('#btn-sucesso')
    const divGameOver = document.querySelector('#gameover')

    if(btnSucesso){
        btnSucesso.addEventListener('click', () => {
            window.location.href = ''
        })
    }

    if(btnFechar){
        btnFechar.addEventListener('click', () => {
            divGameOver.setAttribute('style', 'display:none')
        })
    }

    const successHandler = () => {
        btnSubmit_Buscar.classList.remove('loading');
        btnSubmit_Buscar.classList.remove('error');
        btnSubmit_Buscar.classList.add('success');
        btnSubmit_Buscar.textContent = "Sucesso! :)";

        setTimeout(() => {
            divGameOver.setAttribute('style', 'display:flex')
        }, 1000)
    }

    const errorHandler = () => {
        btnSubmit_Buscar.classList.remove('loading');
        btnSubmit_Buscar.classList.remove('success');
        btnSubmit_Buscar.classList.add('error');
        btnSubmit_Buscar.textContent = "Nada encontrado :(";
    }


    if(btnSubmit_Buscar){
        btnSubmit_Buscar.addEventListener('click', (e) => {
            e.preventDefault()

            btnSubmit_Buscar.textContent = "Buscando..."

            setTimeout(() => {
                
                fetch('http://localhost:1323/car/placa', {
                    method: 'POST',
                    headers: {'Content-type': 'application/json'},
                    body: JSON.stringify({
                        placa: inputPlaca.value,
                        userId: usuarioid
                    })
                }).then((response) => {
                    if(response.status !== 200){
                        return errorHandler()

                    }else{
                        successHandler()
                    }
                }).catch((error) => {
                    console.log(error.message)
                    errorHandler()
                })
            
            
            
            }, 1500);
        })
    }
}


window.onload = init