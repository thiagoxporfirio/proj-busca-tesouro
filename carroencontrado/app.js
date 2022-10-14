let inputNomeCompleto = document.querySelector('#NomeCompleto')
let inputPlaca = document.querySelector('#Placa')
let inputMarcaeModelo = document.querySelector('#MarcaeModelo')
let inputEstado = document.querySelector('#Estado')
let inputMunicipio = document.querySelector('#Municipio')
let inputFotos = document.querySelector('.putImg')
let inputDescricao = document.querySelector('#TextDescricao')

let btnEnviar = document.querySelector('.submitButton')


function Checkfiles(){
    let fup = document.getElementById('filename');
    let fileName = fup.value;
    let ext = fileName.substring(fileName.lastIndexOf('.') + 1);

    if(ext =="jpeg" || ext=="png"){
        return true;
    }
    else{
        return false;
    }
}

const successHandler = () => {
    btnEnviar.classList.remove('loading');
    btnEnviar.classList.remove('error');
    btnEnviar.classList.add('success');
    btnEnviar.textContent = "Sucesso! :)";

    setTimeout(() => {
        
    })
}

const errorHandler = () => {
    btnEnviar.classList.remove('loading');
    btnEnviar.classList.remove('success');
    btnEnviar.classList.add('error');
    btnEnviar.textContent = "Nada encontrado :(";
}

const validateInputNome = (event) => {
    const input = event.currentTarget;

    if(input.value.length <= 10) {
        btnEnviar.setAttribute("disabled", "disabled");
        input.setAttribute('style', 'box-shadow: 0 2px 2px rgba(248, 5, 5, 0.5)')
        
    } else {
        btnEnviar.removeAttribute("disabled");
        input.setAttribute('style', 'box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5)')
    }
}

const validateInputPlaca = (event) => {
    const input = event.currentTarget;

    if(input.value.length <= 6) {
        btnEnviar.setAttribute("disabled", "disabled");
        input.setAttribute('style', 'box-shadow: 0 2px 2px rgba(248, 5, 5, 0.5)')
    } else {
        btnEnviar.removeAttribute("disabled");
        input.setAttribute('style', 'box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5)')
    }
}

const validateInputMarca = (event) => {
    const input = event.currentTarget;

    if(input.value.length <= 8) {
        btnEnviar.setAttribute("disabled", "disabled");
        input.setAttribute('style', 'box-shadow: 0 2px 2px rgba(248, 5, 5, 0.5)')
    } else {
        btnEnviar.removeAttribute("disabled");
        input.setAttribute('style', 'box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5)')
    }
}

const validateInputEstado = (event) => {
    const input = event.currentTarget;

    if(input.value.length <= 1) {
        btnEnviar.setAttribute("disabled", "disabled");
        input.setAttribute('style', 'box-shadow: 0 2px 2px rgba(248, 5, 5, 0.5)')
    } else {
        btnEnviar.removeAttribute("disabled");
        input.setAttribute('style', 'box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5)')
    }
}

const validateInputMunicipio = (event) => {
    const input = event.currentTarget;

    if(input.value.length <= 4) {
        btnEnviar.setAttribute("disabled", "disabled");
        input.setAttribute('style', 'box-shadow: 0 2px 2px rgba(248, 5, 5, 0.5)')
    } else {
        btnEnviar.removeAttribute("disabled");
        input.setAttribute('style', 'box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5)')
    }
}

const validateInputFotos = (event) => {
    const input = event.currentTarget;

    if(input.value.length <= 3) {
        btnEnviar.setAttribute("disabled", "disabled");
        input.setAttribute('style', 'box-shadow: 0 2px 2px rgba(248, 5, 5, 0.5)')
    } else {
        btnEnviar.removeAttribute("disabled");
        input.setAttribute('style', 'box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5)')
    }
}

const validateInputDescricao = (event) => {
    const input = event.currentTarget;

    if(input.value.length <= 50) {
        btnEnviar.setAttribute("disabled", "disabled");
        input.setAttribute('style', 'box-shadow: 0 2px 2px rgba(248, 5, 5, 0.5)')
    } else {
        btnEnviar.removeAttribute("disabled");
        input.setAttribute('style', 'box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5)')
    }
}


inputNomeCompleto.addEventListener('input', validateInputNome)
inputPlaca.addEventListener('input', validateInputPlaca)
inputMarcaeModelo.addEventListener('input', validateInputMarca)
inputEstado.addEventListener('input', validateInputEstado)
inputMunicipio.addEventListener('input', validateInputMunicipio)
inputFotos.addEventListener('textarea', validateInputFotos)
inputDescricao.addEventListener('input', validateInputDescricao)


if(btnEnviar){
    btnEnviar.addEventListener('click', (e) => {
        e.preventDefault()
        btnEnviar.textContent = "Enviando dados..."

        setTimeout(() => {
            fetch('', {
                method: 'POST',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify({})
            }).then((res) => {
                if(res.status !== 200){
                    return errorHandler()
                }else{
                    successHandler()
                }
            }).catch((error) => {
                console.log(error.message)
                return errorHandler()
            })

        }, 1000)
    })
}

