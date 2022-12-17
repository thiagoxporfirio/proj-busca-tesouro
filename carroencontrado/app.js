let inputNomeCompleto = document.querySelector('#NomeCompleto')
let inputPlaca = document.querySelector('#Placa')
let inputMarcaeModelo = document.querySelector('#MarcaeModelo')
let inputEstado = document.querySelector('#Estado')
let inputMunicipio = document.querySelector('#Municipio')
let inputFotos = document.querySelector('.putImg')
let inputDescricao = document.querySelector('#TextDescricao')
let inputEmail = document.querySelector('#email')
let divphoto = document.querySelector('#photo')

let btnEnviar = document.querySelector('.submitButton')

//Local storage data
let identidadeUser = JSON.parse(localStorage.getItem('_DadosUser2') || '{}')
let usuarioid = identidadeUser.dados.UserId
let useremail = identidadeUser.dados.Email
let username = identidadeUser.dados.Name


let nameStorage = document.querySelector('#namelocalstorage')
let emailStorage = document.querySelector("#emaillocalstorage")

// Dados do carro manipulados pelo localstorage
let dataCar = JSON.parse(localStorage.getItem('_DadosCar') || '{}')
let marcaemodelo = dataCar.dados.MarcaEModelo
let placadoCar = dataCar.dados.Placa
let anodoCar = dataCar.dados.AnoDoCarro
let cordoCar = dataCar.dados.Cor
let estadodoCar = dataCar.dados.State
let municipiodoCar = dataCar.dados.Municipio

let marcaStorage = document.querySelector('#marcaemodelo')
let placaStorage = document.querySelector('#placa')
let anoStorage = document.querySelector('#ano')
let corStorage = document.querySelector('#cor')

//Manipulando dados da pagina
nameStorage.textContent = `${username} `
emailStorage.textContent = `${useremail} `
marcaStorage.textContent = `${marcaemodelo}`
placaStorage.textContent = `${placadoCar}`
anoStorage.textContent = `${anodoCar}`
corStorage.textContent = `${cordoCar}`


let inputFile = document.querySelector("#filename");
if(inputFile.files.length === 0){
    localStorage.removeItem('imagensCarregadas')
    
    btnEnviar.setAttribute("disabled", "disabled");

}else{
    btnEnviar.removeAttribute("disabled");
}


const dadosImagem = [];

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
    Checkfiles()

    if (input.value.length <= 3) {
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

inputFotos.addEventListener('textarea', validateInputFotos)
inputDescricao.addEventListener('input', validateInputDescricao)


let btnvoltarMenu = document.querySelector('.btn-group')
if (btnvoltarMenu) {
    btnvoltarMenu.addEventListener('click', () => {
        window.location.href = '/index.html'
    })
}


const pictureImage = document.querySelector(".imgphoto");
const labelFotos = document.querySelector('#LabelFotos')

inputFile.addEventListener("change", function (e) {
    const inputTarget = e.target;
    for (const file of inputTarget.files) {
        if (file) {
            var readerTarget;
            const reader = new FileReader();
            labelFotos.setAttribute('style', 'display: block')
            reader.addEventListener("load", function (e) {
                readerTarget = e.target;
    
                const img = document.createElement("img");
                img.src = readerTarget.result;
                img.classList.add("picture__img");
    
                pictureImage.appendChild(img);
    
                reader.onerror = function (error) {
                    console.log('Error: ', error);
                };
            });
    
            reader.readAsDataURL(file);
            reader.onload = function () {
                
                dadosImagem.push(readerTarget.result)
                //console.log(readerTarget.result)
    
                localStorage.setItem('imagensCarregadas', JSON.stringify(dadosImagem))
            }
        } else {
    
        }
        
    }
});


if (btnEnviar) {
    btnEnviar.addEventListener('click', (e) => {
        e.preventDefault()
        btnEnviar.textContent = "Enviando dados..."
        console.log('get imagens', JSON.parse(localStorage.getItem('imagensCarregadas')))

        let imagens = JSON.parse(localStorage.getItem('imagensCarregadas'))
        console.log(imagens)
        
        
        let formdados = {
            nome: username,
            email: useremail,
            localizacao: inputDescricao.value,
            placa: placadoCar,
            marca: marcaemodelo,
            municipio: municipiodoCar,
            estado: estadodoCar,
            foto2: imagens[0],
            foto3: imagens[1],
            foto1: imagens[2],
            foto4: imagens[3],
        }
        console.log(formdados)

        setTimeout(() => {
            fetch('http://127.0.0.1/sendInformation', {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
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

