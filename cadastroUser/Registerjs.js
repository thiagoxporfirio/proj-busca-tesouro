const init = () => {

  const submitButton = document.querySelector('.submitButton')

  const inputNomeCompleto = document.querySelector('#nome')
  const inputUsername = document.querySelector('#username')
  const inputEmail = document.querySelector('#email')
  const inputTelefone = document.querySelector('#telefone')
  const inputSenha = document.querySelector('#senha')
  const inputConfirmSenha = document.querySelector('#confirmSenha')

  const validateEmail = (event) => {
    const input = event.currentTarget;
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    const emailTest = regex.test(input.value);

    if(!emailTest) {
          submitButton.setAttribute("disabled", "disabled");
          input.classList.add('error');
      }else {
          submitButton.removeAttribute("disabled");
          input.classList.remove('error');
      }
  }
  
  const validatePassowrd = (event) => {
    const input = event.currentTarget;

    if(input.value.length < 6) {
          submitButton.setAttribute("disabled", "disabled");
          input.classList.add('error');
      }else {
          submitButton.removeAttribute("disabled");
          input.classList.remove('error');
      }
  }

  const validateNomeCompleto = (event) => {
    const input = event.currentTarget;

    if(input.value.length < 12) {
          submitButton.setAttribute("disabled", "disabled");
          input.classList.add('error');
      }else {
          submitButton.removeAttribute("disabled");
          input.classList.remove('error');
      }
  }

  const validateUsername = (event) => {
    const input = event.currentTarget;

    if(input.value.length < 4) {
          submitButton.setAttribute("disabled", "disabled");
          input.classList.add('error');
      }else {
          submitButton.removeAttribute("disabled");
          input.classList.remove('error');
      }
  }

  const successHandler = () => {
    submitButton.classList.remove('loading');
    submitButton.classList.remove('error');
    submitButton.classList.add('success');
    submitButton.textContent = "Sucesso! :)";

    setTimeout(()=>{
      window.location.href = './validateEmail.html'
    }, 2000)
      
   }
      
  const errorHandler = () => {
    submitButton.classList.remove('loading');
    submitButton.classList.remove('success');
    submitButton.classList.add('error');
    submitButton.textContent = "Error :(";
  }


  // Emial ja existe no sistema
  let emailExists = document.querySelector('.emailExists')
  const errorEmailExists = () => {
    emailExists.setAttribute('style', 'display:flex')
  }

  inputNomeCompleto.addEventListener('input', validateNomeCompleto);
  inputUsername.addEventListener('input', validateUsername);
  inputEmail.addEventListener('input', validateEmail);
  inputConfirmSenha.addEventListener('input', validatePassowrd)
  inputSenha.addEventListener('input', validatePassowrd)


    
  if(submitButton){

    submitButton.addEventListener('click', (event) => {
        event.preventDefault()

        submitButton.textContent = "Loading..."
      setTimeout(() => {

      
        fetch ('http://24.152.39.248/cadastro', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                  name: inputNomeCompleto.value,
                  username: inputUsername.value,
                  password: inputSenha.value,
                  email: inputEmail.value,
                  telefone: inputTelefone.value
            })
        })
        .then(response => {
          if (response.status !== 200){
            errorHandler() 
            if(response = "User Exists: email already exists in Sql"){
                return errorEmailExists()
             }
    
        }else{
            console.log(response)
            successHandler()
            return response.text()
          }
        }).then(data => {
          const TOKEN = data
          console.log(TOKEN)

          let identidadeUser = JSON.parse(localStorage.getItem('_DadosUser') || '{}');
          identidadeUser =  {... identidadeUser, dados: TOKEN}
          
          localStorage.setItem('_DadosUser', JSON.stringify(identidadeUser));
          
        }).catch(error => {
            console.log(error.message)
        })
      }, 1000)
    
    })

  }
}
window.onload = init