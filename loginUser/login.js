   const init = () => {
        
        const inputEmail = document.querySelector('#email')
        const inputPassword = document.querySelector('#password')
        const submitButton = document.querySelector('.submitButton')
        


        const errorValidateEmail = () => {
            const errorValidate = document.querySelector('.errorvalidate')
            errorValidate.setAttribute('style', 'display:block')
        }

        const validateEmail = (event) => {
            const input = event.currentTarget;
            const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            const emailTest = regex.test(input.value);
    
            if(!emailTest) {
                submitButton.setAttribute("disabled", "disabled");
                input.classList.add('error');
            } else {
                submitButton.removeAttribute("disabled");
                input.classList.remove('error');
            }
        }
    
        const validatePassowrd = (event) => {
            const input = event.currentTarget;
    
            if(input.value.length < 6) {
                submitButton.setAttribute("disabled", "disabled");
                input.classList.add('error');
            } else {
                submitButton.removeAttribute("disabled");
                input.classList.remove('error');
            }
        }

        inputEmail.addEventListener('input', validateEmail);
        inputPassword.addEventListener('input', validatePassowrd);

        const successHandler = () => {
            submitButton.classList.remove('loading');
            submitButton.classList.remove('error');
            submitButton.classList.add('success');
            submitButton.textContent = "Sucesso! :)";

            setTimeout(()=>{
                window.location.href = '../index.html'
            }, 2000)
        }

        const errorHandler = () => {
            submitButton.classList.remove('loading');
            submitButton.classList.remove('success');
            submitButton.classList.add('error');
            submitButton.textContent = "Error :(";
        }
       
        let emailExists = document.querySelector('.input-box-email')
        const errorEmailExists = () => {
            emailExists.setAttribute('style', 'display:flex')
        }

        if(submitButton) {
            submitButton.addEventListener('click', (event) => {
                event.preventDefault()

                submitButton.textContent = "Loading..."
                setTimeout(() => {

                

                fetch('http://localhost:3000/login', {
                    method: 'POST',
                    headers: {'Content-type': 'application/json'},
                    body: JSON.stringify({
                        email: inputEmail.value,
                        password: inputPassword.value
                    })

                }).then(async (response) => {
                    let responseTextFromError = await response.text()
                    
                    function setCookie(nome,valor,dias) {
                        var nome = "CookieDados"
                        var valor = responseTextFromError

                        var validade = "";
                    
                        // if (days) {
                        //     var date = new Date();
                        //     date.setTime(date.getTime() + (days*24*60*60*1000));
                        //     validade = "; expires=" + date.toUTCString();
                        // }
                        document.cookie = nome + "=" + (valor || "")  + validade + "; path=/";
                    }
                   
                    console.log(responseTextFromError)

                    if (response.status !== 200){
                        if(responseTextFromError == "Validate User: error user in validation"){
                            errorHandler()
                            return errorValidateEmail()
                    
                        }
                        if(response = "Validate User: user not exists"){
                            errorEmailExists()
                            return errorHandler()
                        }
                        
                        errorHandler()
                    }else{
                        let dadosdoUser = JSON.parse(localStorage.getItem('_DadosUser2') || '{}')
                        dadosdoUser = {... dadosdoUser, dados: JSON.parse(responseTextFromError)}
                        localStorage.setItem('_DadosUser2', JSON.stringify(dadosdoUser))
                        let usuarioid = dadosdoUser.dados


                        setCookie()
                        return successHandler()
                    }

                }).catch(error => {
                    console.log(error.message)
                    errorHandler()
                })
            }, 1000)
            
        })
        }
   }


window.onload = init



