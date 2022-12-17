
const init = () => {

    const btnSubmit_Buscar = document.querySelector('#btnSubmit')
    const inputPlaca = document.querySelector('.input1')

    const btnFechar = document.querySelector('#fechar')
    const btnFecharLogin = document.querySelector('#fecharLogin')
    const divGameOver = document.querySelector('#gameover')
    const divGameoverLogin = document.querySelector('#gameoverLogin')
    const btnFazLogin = document.querySelector('#btn-faz-login')

    if(btnFazLogin){
        btnFazLogin.addEventListener('click', () => {
            window.location.href = '/loginUser/login.html'
        })
    }

    if(btnFecharLogin){
        btnFecharLogin.addEventListener('click', () => {
            divGameoverLogin.setAttribute('style', 'display:none')
        })
    }

    if(btnFechar){
        btnFechar.addEventListener('click', () => {
            divGameOver.setAttribute('style', 'display:none')
        })
    }

    const successFound = () => {

        btnSubmit_Buscar.classList.remove('loading');
        btnSubmit_Buscar.classList.remove('error');
        btnSubmit_Buscar.classList.add('success');
        btnSubmit_Buscar.textContent = "Sucesso! :)";

        setTimeout(() => {
            divGameoverLogin.setAttribute('style', 'display:flex')
        }, 1000)
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
            console.log("clicou")

            btnSubmit_Buscar.textContent = "Buscando..."

            setTimeout(() => {
                
                fetch('http://127.0.0.1:3000/car/placa', {
                    method: 'POST',
                    headers: {'Content-type': 'application/json'},
                    body: JSON.stringify({
                        placa: inputPlaca.value,
                    })
                }).then((response) => {
                    if(response.status !== 200){
                        return errorHandler()

                    }
                    if(response.status == 200){
                        let identidadeUser = JSON.parse(localStorage.getItem('_DadosUser2') || '{}')
                        let usuarioid = identidadeUser?.dados?.UserId

                        if(typeof usuarioid === "undefined"){
                            return successFound()
                        }else{
                            
                        successHandler()
                        }
                    }    
                    }).catch((error) => {
                        console.log(error.message)
                        errorHandler()
                    })
            
                    // fetch('http://127.0.0.1:3000/car', {
                    //     method: 'POST',
                    //     headres: {'Contente-type': 'application/json'},
                    //     body: JSON.stringify({placa: inputPlaca.value,})
                    // }).then( async (res) => {
                    //     let response = await res.text()
                    //     console.log(response)

                    //     let dadosdoCar = JSON.parse(localStorage.getItem('_DadosCar') || '{}')
                    //     dadosdoCar = {... dadosdoCar, dados: JSON.parse(response)}

                    //     localStorage.setItem('_DadosCar', JSON.stringify(dadosdoCar))
                    

                    // }).catch((error) => {
                    //     console.log(error.message)
                    //     errorHandler()
                    // })
            
            }, 1000);
        })
    }

    let btn_gameover = document.querySelector('#btn-sucesso')
    if(btn_gameover){
        btn_gameover.addEventListener('click', () => {
            window.location.href = '/carroencontrado/sucesso.html'
        })
    }

    let btn_fechaCardCarros = document.querySelector('.fechaCardCarros')
    if(btn_fechaCardCarros){
        btn_fechaCardCarros.addEventListener('click', () => {
            let cardMeuSaldo = document.querySelector('#cardMeuSaldo')

            cardMeuSaldo.setAttribute('style', 'display:none')
        })
    }




















}


window.onload = init