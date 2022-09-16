const init = () => {

    const inputNomeCompleto = document.querySelector('#nome')
    const inputPlaca = document.querySelector('#placa')
    const inputRenavam = document.querySelector('#renavam')
    const inputMarca = document.querySelector('#marca')
    const inputCor = document.querySelector('#cor')
    const inputChassi = document.querySelector('#chassi')
    const inputAnoCarro = document.querySelector('#anoCarro')
    const inputEstado = document.querySelector('#estado')
    const inputMunicipio = document.querySelector('#municipio')

    const submit_Button = document.querySelector('.submitButton')

    const divError = document.querySelector('#msgError')


    const validateInputNome = (event) => {
        const input = event.currentTarget;

        if(input.value.length <= 7) {
            submit_Button.setAttribute("disabled", "disabled");
            input.setAttribute('style', 'box-shadow: 0 2px 2px rgba(248, 5, 5, 0.5)')
            
        } else {
            submit_Button.removeAttribute("disabled");
            input.setAttribute('style', 'box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5)')
        }
    }

    const validateInputPlaca = (event) => {
        const input = event.currentTarget;

        if(input.value.length <= 6) {
            submit_Button.setAttribute("disabled", "disabled");
            input.setAttribute('style', 'box-shadow: 0 2px 2px rgba(248, 5, 5, 0.5)')
        } else {
            submit_Button.removeAttribute("disabled");
            input.setAttribute('style', 'box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5)')
        }
    }

    const validateInputRenavam = (event) => {
        const input = event.currentTarget;

        if(input.value.length <= 8) {
            submit_Button.setAttribute("disabled", "disabled");
            input.setAttribute('style', 'box-shadow: 0 2px 2px rgba(248, 5, 5, 0.5)')
        } else {
            submit_Button.removeAttribute("disabled");
            input.setAttribute('style', 'box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5)')
        }
    }
    
    const validateInputMarca_Cor = (event) => {
        const input = event.currentTarget;

        if(input.value.length <= 3) {
            submit_Button.setAttribute("disabled", "disabled");
            input.setAttribute('style', 'box-shadow: 0 2px 2px rgba(248, 5, 5, 0.5)')
        } else {
            submit_Button.removeAttribute("disabled");
            input.setAttribute('style', 'box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5)')
        }
    }

    const validateInputChassi = (event) => {
        const input = event.currentTarget;

        if(input.value.length <= 9) {
            submit_Button.setAttribute("disabled", "disabled");
            input.setAttribute('style', 'box-shadow: 0 2px 2px rgba(248, 5, 5, 0.5)')
        } else {
            submit_Button.removeAttribute("disabled");
            input.setAttribute('style', 'box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5)')
        }
    }

    const validateInputAnoCarro = (event) => {
        const input = event.currentTarget;

        if(input.value.length <= 3) {
            submit_Button.setAttribute("disabled", "disabled");
            input.setAttribute('style', 'box-shadow: 0 2px 2px rgba(248, 5, 5, 0.5)')
        } else {
            submit_Button.removeAttribute("disabled");
            input.setAttribute('style', 'box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5)')
        }
    }

    const validateInputEstado = (event) => {
        const input = event.currentTarget;

        if(input.value.length <= 1) {
            submit_Button.setAttribute("disabled", "disabled");
            input.setAttribute('style', 'box-shadow: 0 2px 2px rgba(248, 5, 5, 0.5)')
        } else {
            submit_Button.removeAttribute("disabled");
            input.setAttribute('style', 'box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5)')
        }
    }

    const validateInputMunicipio = (event) => {
        const input = event.currentTarget;

        if(input.value.length <= 3) {
            submit_Button.setAttribute("disabled", "disabled");
            input.setAttribute('style', 'box-shadow: 0 2px 2px rgba(248, 5, 5, 0.5)')
        } else {
            submit_Button.removeAttribute("disabled");
            input.setAttribute('style', 'box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5)')
        }
    }

    inputNomeCompleto.addEventListener('input', validateInputNome)
    inputPlaca.addEventListener('input', validateInputPlaca)
    inputRenavam.addEventListener('input', validateInputRenavam)
    inputMarca.addEventListener('input', validateInputMarca_Cor)
    inputCor.addEventListener('input', validateInputMarca_Cor)
    inputChassi.addEventListener('input', validateInputChassi)
    inputAnoCarro.addEventListener('input', validateInputAnoCarro)
    inputEstado.addEventListener('input', validateInputEstado)
    inputMunicipio.addEventListener('input', validateInputMunicipio)


    const divLimite_Cadastro = document.querySelector('#gameover')
    const btnVoltar = document.querySelector('.btn-home')
    const btnPlanos = document.querySelector('#btn-sucesso')
    const btnFechar = document.querySelector('#fechar')

    console.log(divLimite_Cadastro, btnFechar, btnPlanos, btnVoltar)

    if(btnPlanos){
        btnPlanos.addEventListener('click', () => {
            window.location.href = './assinatura.html'
        })
    }
    
        if(btnVoltar){
        btnVoltar.addEventListener('click', () => {
            window.location.href = '../index.html'
        })
    }
    
    if(btnFechar){
        btnFechar.addEventListener('click', () => {
            divLimite_Cadastro.setAttribute('style', 'display:none')
        })
    }

    const successHandler = () => {
        submit_Button.classList.remove('loading');
        submit_Button.classList.remove('error');
        submit_Button.classList.add('success');
        submit_Button.textContent = "Sucesso! :)";

        setTimeout(()=>{
            window.location.href = '../carros/carros_procurados.html'
        }, 2000)
    }

    const errorHandler = () => {
        submit_Button.classList.remove('loading');
        submit_Button.classList.remove('success');
        submit_Button.classList.add('error');
        submit_Button.textContent = "Error :(";
        divError.setAttribute('style', 'display: block')
        divLimite_Cadastro.setAttribute('style', 'display:flex')
    }




    let identidadeUser = JSON.parse(localStorage.getItem('_DadosUser2') || '{}')
     const usuarioid = identidadeUser.dados.UserId
     console.log(usuarioid)

    if(submit_Button) {
        submit_Button.addEventListener('click', (event) => {
            event.preventDefault()

            submit_Button.textContent = "Loading..."
            setTimeout(() => {

                
                fetch('http://localhost:1323/car/create', {
                    method: 'POST',
                    headers: {'Content-type': 'application/json'},
                    body: JSON.stringify({
                        placa: inputPlaca.value,
                        state: inputEstado.value,
                        municipio: inputMunicipio.value,
                        cor: inputCor.value,
                        marcaEModelo: inputMarca.value,
                        anoDoCarro: inputAnoCarro.value,
                        chassi: inputChassi.value,
                        renavam: inputRenavam.value,
                        nome: inputNomeCompleto.value,
                        userId: usuarioid
                    })

                }).then((response) => {
                    if (response.status !== 200){
                        console.log(response)
                        return errorHandler()
                    }else{
                        successHandler()
                        return response.json()
                    }

                }) .then((data) => {
                    const dados = data
                    console.log(dados)

                }).catch(error => {
                    console.log(error.message)
                })


            }, 2500)

        })
    }








    
}



window.onload = init