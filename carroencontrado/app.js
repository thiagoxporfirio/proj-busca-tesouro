let inputNomeCompleto = document.querySelector('#NomeCompleto')
let inputPlaca = document.querySelector('#Placa')
let inputMarcaeModelo = document.querySelector('#MarcaeModelo')
let inputEstado = document.querySelector('#Estado')
let inputMunicipio = document.querySelector('#Municipio')
let inputFotos = document.querySelector('.putImg')
let inputDescricao = document.querySelector('#TextDescricao')
let inputEmail = document.querySelector('#email')

let btnEnviar = document.querySelector('.submitButton')


function Checkfiles() {
    let fup = document.getElementById('filename');
    let fileName = fup.value;
    let ext = fileName.substring(fileName.lastIndexOf('.') + 1);

    if (ext == "jpeg" || ext == "png") {
        return true;
    }
    else {
        return false;
    }
}

const successHandler = () => {
    btnEnviar.classList.remove('loading');
    btnEnviar.classList.remove('error');
    btnEnviar.classList.add('success');
    btnEnviar.textContent = "Sucesso! :)";

    setTimeout(() => {
        let cardsuccess = document.querySelector('.content-box')
        cardsuccess.setAttribute('style', 'displa:flex')

        return validateCardHandle()
    }, 1000)
}

const errorHandler = () => {
    btnEnviar.classList.remove('loading');
    btnEnviar.classList.remove('success');
    btnEnviar.classList.add('error');
    btnEnviar.textContent = "Nada encontrado :(";

}

const validateCardHandle = () => {
    let cardsuccess = document.querySelector('.content-box')
    let cardflex = cardsuccess.style.display = 'flex'

    if (cardflex) {
        btnEnviar.setAttribute("disabled", "disabled")
    }
}

const validateInputNome = (event) => {
    const input = event.currentTarget;

    if (input.value.length <= 10) {
        btnEnviar.setAttribute("disabled", "disabled");
        input.setAttribute('style', 'box-shadow: 0 2px 2px rgba(248, 5, 5, 0.5)')

    } else {
        btnEnviar.removeAttribute("disabled");
        input.setAttribute('style', 'box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5)')
    }
}

const validateInputPlaca = (event) => {
    const input = event.currentTarget;

    if (input.value.length <= 6) {
        btnEnviar.setAttribute("disabled", "disabled");
        input.setAttribute('style', 'box-shadow: 0 2px 2px rgba(248, 5, 5, 0.5)')
    } else {
        btnEnviar.removeAttribute("disabled");
        input.setAttribute('style', 'box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5)')
    }
}

const validateInputMarca = (event) => {
    const input = event.currentTarget;

    if (input.value.length <= 8) {
        btnEnviar.setAttribute("disabled", "disabled");
        input.setAttribute('style', 'box-shadow: 0 2px 2px rgba(248, 5, 5, 0.5)')
    } else {
        btnEnviar.removeAttribute("disabled");
        input.setAttribute('style', 'box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5)')
    }
}

const validateInputEstado = (event) => {
    const input = event.currentTarget;

    if (input.value.length <= 1) {
        btnEnviar.setAttribute("disabled", "disabled");
        input.setAttribute('style', 'box-shadow: 0 2px 2px rgba(248, 5, 5, 0.5)')
    } else {
        btnEnviar.removeAttribute("disabled");
        input.setAttribute('style', 'box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5)')
    }
}

const validateInputMunicipio = (event) => {
    const input = event.currentTarget;

    if (input.value.length <= 4) {
        btnEnviar.setAttribute("disabled", "disabled");
        input.setAttribute('style', 'box-shadow: 0 2px 2px rgba(248, 5, 5, 0.5)')
    } else {
        btnEnviar.removeAttribute("disabled");
        input.setAttribute('style', 'box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5)')
    }
}

const validateInputFotos = (event) => {
    const input = event.currentTarget;

    if (input.value.length <= 2) {
         Checkfiles()
        btnEnviar.setAttribute("disabled", "disabled");
        input.setAttribute('style', 'box-shadow: 0 2px 2px rgba(248, 5, 5, 0.5)')
    } else {
        btnEnviar.removeAttribute("disabled");
        input.setAttribute('style', 'box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5)')
    }

    
}

const validateInputDescricao = (event) => {
    const input = event.currentTarget;

    if (input.value.length <= 50) {
        btnEnviar.setAttribute("disabled", "disabled");
        input.setAttribute('style', 'box-shadow: 0 2px 2px rgba(248, 5, 5, 0.5)')
    } else {
        btnEnviar.removeAttribute("disabled");
        input.setAttribute('style', 'box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5)')
    }
}

const validateEmail = (event) => {
    const input = event.currentTarget;
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    const emailTest = regex.test(input.value);

    if (!emailTest) {
        btnEnviar.setAttribute("disabled", "disabled");
        input.classList.add('error');
    } else {
        btnEnviar.removeAttribute("disabled");
        input.classList.remove('error');
    }
}


inputNomeCompleto.addEventListener('input', validateInputNome)
inputPlaca.addEventListener('input', validateInputPlaca)
inputMarcaeModelo.addEventListener('input', validateInputMarca)
inputEstado.addEventListener('input', validateInputEstado)
inputMunicipio.addEventListener('input', validateInputMunicipio)
// inputFotos.addEventListener('textarea', validateInputFotos)
inputDescricao.addEventListener('input', validateInputDescricao)
inputEmail.addEventListener('input', validateEmail);

let btnvoltarMenu = document.querySelector('.btn-group')
if (btnvoltarMenu) {
    btnvoltarMenu.addEventListener('click', () => {
        window.location.href = 'projBuscaTesouro/index.html'
    })
}






async function converterImagem() {
    const receberArquivo = document.getElementById("filename").files;
    console.log(receberArquivo)

    const dadosImagem = [];

    for (let arquivo of receberArquivo) {
        let reader = new FileReader();

        reader.readAsDataURL(arquivo);
        reader.onload = function () {
           
            dadosImagem.unshift(reader.result);
            localStorage.setItem('imagensCarregadas',JSON.stringify(dadosImagem))
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }
} 


if (btnEnviar) {
    btnEnviar.addEventListener('click', (e) => {
        e.preventDefault()
        btnEnviar.textContent = "Enviando dados..."
        console.log('get imagens', JSON.parse(localStorage.getItem('imagensCarregadas')))

        let imagens = JSON.parse(localStorage.getItem('imagensCarregadas'))
        
        // let arrayProdutos = []
        // let descricao = {
        //     Placa: inputPlaca.value,
        //     Marca: inputMarcaeModelo.value,
        //     Estado: inputEstado.value,
        //     Municipio: inputMunicipio.value
        // }

        // JSON.stringify(descricao)
        //arrayProdutos.push(descricao)

        let formdados = {
            nome: inputNomeCompleto.value,
            email: inputEmail.value,
            localizacao: inputDescricao.value,
            placa: inputPlaca.value,
            marca: inputMarcaeModelo.value,
            municipio: inputMunicipio.value,
            estado: inputEstado.value,
            foto2: imagens[0],
            foto3: imagens[1],
            foto1: imagens[2],
        }
        console.log(formdados)

        setTimeout(() => {
            fetch('https://dry-chamber-14632.herokuapp.com/sendInformation', {
                method: 'POST',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify(formdados)

            }).then((res) => {
                if (res.status !== 200) {
                    return errorHandler()
                } else {
                    localStorage.removeItem('imagemCarregada');
                    successHandler()
                }
            }).catch((error) => {
                console.log(error.message)
                return errorHandler()
            })

        }, 1000)
    })
}

