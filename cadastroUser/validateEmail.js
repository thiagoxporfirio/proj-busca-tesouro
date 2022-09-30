
const init = () => {
    const spanValidateEmail = document.querySelector('.errorvalidate')
    const inputCodigo = document.querySelector('#codigo')
    const submitCodigo = document.querySelector('.submitButton')

    console.log(spanValidateEmail, inputCodigo, submitCodigo)

    const errorValidateEmail = () => {
        submitCodigo.textContent = "Codigo invalido :(";
    }


    const validateUsername = (event) => {
        const input = event.currentTarget;
    
        if(input.value.length < 4) {
              submitCodigo.setAttribute("disabled", "disabled");
              
          }else {
              submitCodigo.removeAttribute("disabled");
              input.classList.remove('error');
          }
    }

    const successHandler = () => {
        submitCodigo.classList.remove('loading');
        submitCodigo.classList.remove('error');
        submitCodigo.classList.add('success');
        submitCodigo.textContent = "Sucesso! :)";

        spanValidateEmail.classList.add('success')
    
        setTimeout(()=>{
          window.location.href = '../loginUser/login.html'
        }, 2000)
          
    }

    const errorHandler = () => {
        submitCodigo.classList.remove('loading');
        submitCodigo.classList.remove('success');
        submitCodigo.classList.add('error');
        submitCodigo.textContent = "Error :(";
    }

    inputCodigo.addEventListener('input', validateUsername)

    let identidadeUser = JSON.parse(localStorage.getItem('_DadosUser') || '{}')
            const usuarioid = identidadeUser.dados
            console.log(usuarioid)

    if(submitCodigo){
        submitCodigo.addEventListener('click', (event) => {
            event.preventDefault()

            submitCodigo.textContent = "Loading..."
            

            setTimeout( () => {

                fetch ('http://localhost:1323/validation', {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                        userId:  usuarioid,
                        number: inputCodigo.value,
                    })
                    }).then( async (response) => {
                        let responseTextFromError = await response.text()

                        if(response.status !== 200){
                            if(responseTextFromError == "Validate User: number not correct"){
                                errorHandler()
                                return errorValidateEmail()
                        
                            }
                            return errorHandler()

                        }else{
                            successHandler()
                        }
                    }).catch((error) => {
            
                        errorHandler()
                    })

            }, 1500)
        })
    }
}

window.onload = init