   const init = () => {
        
        const inputEmail = document.querySelector('#email')
        const inputPassword = document.querySelector('#password')
        const submitButton = document.querySelector('.submitButton')

        console.log(inputEmail, inputPassword, submitButton)

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

        if(submitButton) {
            submitButton.addEventListener('click', (event) => {
                event.preventDefault()

                submitButton.textContent = "Loading..."
                setTimeout(() => {

                

                fetch('http://localhost:1323/login', {
                    method: 'POST',
                    headers: {'Content-type': 'application/json'},
                    body: JSON.stringify({
                        email: inputEmail.value,
                        password: inputPassword.value
                    })

                }).then((response) => {
                    if (response.status !== 200){
                        return errorHandler()
                    }else{
                        console.log(response)
                        successHandler()
                        return response.json()  
                    }
                }).then((data) => {
                    const dadosUser = data
                    console.log(dadosUser)
                    
                    let dadosdoUser = JSON.parse(localStorage.getItem('_DadosUser2') || '{}')
                    dadosdoUser = {... dadosdoUser, dados: dadosUser}

                    localStorage.setItem('_DadosUser2', JSON.stringify(dadosdoUser))

                }).catch(error => {
                    console.log(error.message)
                    errorHandler()
                })
            }, 1000)
            
        })
        }
   }


window.onload = init



//     function fazLogin(url, body){

//         console.log(body)
//         debugger

//         fetch(url, {
//             method: "POST",
//             headers: {"Content-Type": "application/json",},
//             body: JSON.stringify(body)
//     })
//         .then(response => {
//             console.log(response)
//             return response.text()
//         })
//         .then(data => {
//             console.log(data)
//         })
    
//         .catch(error => {
//             console.log(error)
//         })
//     }


//    function login(event){
//     event.preventDefault()

//     let url = 'http://localhost:1323/login'

//     const email = document.getElementById('email').value
//     const senha = document.getElementById('password').value

//     console.log(email)
//     console.log(senha)

//     debugger

//     let body = {
//         "username": email, 
//         "password": senha,
//      }

//     fazLogin(url, body)

// }


