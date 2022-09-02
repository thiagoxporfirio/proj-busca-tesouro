
const NomeCompleto = document.querySelector('#nome')
let labelNomeCompleto = document.querySelector('#LabelNomeCompleto')
let validNomeCompleto = false

const Apelido = document.querySelector('#username')
let labelApelido = document.querySelector('#LabelApelido')
let validApelido = false

const Email = document.querySelector('#email')
let labelEmail = document.querySelector('#LabelEmail')
let validEmail = false

const Telefone = document.querySelector('#telefone')
let labelTelefone = document.querySelector('#LabelTelefone')
let validTelefone = false

const Senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#LabelSenha')
let validSenha = false

const ConfirmSenha = document.querySelector('#confirmSenha')
let labelConfirmSenha = document.querySelector('#LabelConfirmSenha')
let validConfirmSenha = false


  NomeCompleto.addEventListener('keyup', () => {
    if(NomeCompleto.value.length <= 6){
          labelNomeCompleto.setAttribute('style', 'color: red')
          labelNomeCompleto.innerHTML = 'Nome Completo *Insira no minimo 6 caracteres'
          NomeCompleto.setAttribute('style', 'border-color: red')
          validNomeCompleto = false
    } else {
          labelNomeCompleto.setAttribute('style', 'color: green')
          labelNomeCompleto.innerHTML = 'Nome'
          NomeCompleto.setAttribute('style', 'border-color: green')
          validNomeCompleto = true
          NomeCompleto.focus()
    }
  })

  Apelido.addEventListener('keyup', () => {
    if(Apelido.value.length <= 3){
          labelApelido.setAttribute('style', 'color: red')
          labelApelido.innerHTML = 'Apelido *Insira no minimo 4 caracteres'
          Apelido.setAttribute('style', 'border-color: red')
          validApelido = false
    } else {
          labelApelido.setAttribute('style', 'color: green')
          labelApelido.innerHTML = 'Nome do perfil'
          Apelido.setAttribute('style', 'border-color: green')
          validApelido = true
          Apelido.focus()
    }
  })

  Email.addEventListener('keyup', () => {
      if(Email.value.length <= 12){
            labelEmail.setAttribute('style', 'color: red')
            labelEmail.innerHTML = 'E-mail *Insira um email valido*'
            Email.setAttribute('style', 'border-color: red')
            validEmail = false
      } else {
            labelEmail.setAttribute('style', 'color: green')
            labelEmail.innerHTML = 'E-mail'
            Email.setAttribute('style', 'border-color: green')
            validEmail = true
            Email.focus()
      }
  })

  Telefone.addEventListener('keyup', () => {
      if(Telefone.value.length <= 9){
            labelTelefone.setAttribute('style', 'color: red')
            labelTelefone.innerHTML = 'Telefone *Insira no minimo 9 caracteres*'
            Telefone.setAttribute('style', 'border-color: red')
            validTelefone = false
      } else {
            labelTelefone.setAttribute('style', 'color: green')
            labelTelefone.innerHTML = 'Telefone'
            Telefone.setAttribute('style', 'border-color: green')
            validTelefone = true
            Telefone.focus()
      }
  })


  Senha.addEventListener('keyup', () => {
    if(Senha.value.length <= 5){
      labelSenha.setAttribute('style', 'color: red')
      labelSenha.innerHTML = '*Insira no minimo 6 caracteres'
      Senha.setAttribute('style', 'border-color: red')
      validSenha = false
    } else {
      labelSenha.setAttribute('style', 'color: green')
      labelSenha.innerHTML = 'Senha'
      Senha.setAttribute('style', 'border-color: green')
      validSenha = true
    }

    if(Senha.value == ""){
      labelSenha.innerHTML = 'Senha'
      labelSenha.setAttribute('style', 'color: black') 
    }
  })

  ConfirmSenha.addEventListener('keyup', () => {
    if(ConfirmSenha.value != Senha.value){
      labelConfirmSenha.setAttribute('style', 'color: red')
      labelConfirmSenha.innerHTML = '*As senhas não conferem'
      ConfirmSenha.setAttribute('style', 'border-color: red')
      validConfirmSenha = false
    } else {
      labelConfirmSenha.setAttribute('style', 'color: green')
      labelConfirmSenha.innerHTML = 'Confirmar Senha'
      ConfirmSenha.setAttribute('style', 'border-color: green')
      validConfirmSenha = true
    }

  })

    let senha = document.getElementById("senha").value
    let confirmsenha = document.getElementById("confirmSenha").value

    if(senha == "" && senha <= 5){
        labelSenha.setAttribute('style', 'color: red')
        labelSenha.innerHTML = 'Senha contem menos de 5 caracteres'
        formcadastro.senha.focus()
    }

    if(confirmsenha == "" && confirmsenha <= 5){
        labelConfirmSenha.setAttribute('style', 'color: red')
        labelConfirmSenha.innerHTML = 'Senha contem menos de 5 caracteres'
        formcadastro.rep_senha.focus()
    }

    if(senha != confirmsenha){
        labelSenha.setAttribute('style', 'color: red')
        labelSenha.innerHTML = 'Senhas divergentes'
        labelConfirmSenha.setAttribute('style', 'color: red')
        labelConfirmSenha.innerHTML = 'Senhas divergentes'
        formcadastro.rep_senha.focu()
    }

