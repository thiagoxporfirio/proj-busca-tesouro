let identidadeUser = JSON.parse(localStorage.getItem('_DadosUser2') || '{}')
let usuarioid = identidadeUser.dados.UserId
console.log(usuarioid)

const dados = {
    userId: usuarioid
}

let btnVerCarros = document.querySelector('#btnVerCarros')
let btnVoltar = document.querySelector('#imgVoltar')

if(btnVoltar){
    btnVoltar.addEventListener('click', () => {
        window.location.href = "/index.html"
    })
}


const successHandler = () => {
    btnVerCarros.classList.remove('loading');
    btnVerCarros.classList.remove('error');
    btnVerCarros.classList.add('success');
    btnVerCarros.textContent = "Sucesso! :)";
}

const errorHandler = () => {
    btnVerCarros.classList.remove('loading');
    btnVerCarros.classList.remove('success');
    btnVerCarros.classList.add('error');
    btnVerCarros.textContent = "Nada encontrado :(";
}

if(btnVerCarros){
    btnVerCarros.addEventListener('click', (event) => {
        event.preventDefault()

        btnVerCarros.textContent = "Buscando..."

        setTimeout(() => {

            fetch('http://11775.masterdaweb.net/car/cars', {
                    method: 'POST',
                    headers: {'Content-type': 'application/json'},
                    body: JSON.stringify(dados)
                }).then((res) => {
                    if(res.status !== 200){
                        return errorHandler()
                    }else{
                        successHandler()
                        return res.json()
                    }
                }).then((data) => {
                    console.log(data)
                    const ListadeDados = data

                    let postElements = ''
                    let posts = ListadeDados
                    

                    posts.forEach((post) => {

                        let postElement = `<div class="card">
                        <div class="card-header">
                          <h3 class="card-title">Carros Procurado</h3>
                        </div>
                        <div class="card-body">
                                                  <div class="dadoscard"><span>Nome:</span><p>${post.Nome}</p></div>
                                                  <div class="dadoscard"><span>Modelo:</span><p>${post.MarcaEModelo}</p></div>
                                                  <div class="dadoscard"><span>Placa:</span><p>${post.Placa}</p></div>
                                                  <div class="dadoscard"><span>Cor:</span><p>${post.Cor}</p></div>
                                                  <div class="dadoscard"><span>Ano:</span><p>${post.AnoDoCarro}</p></div>
                                                  <div class="dadoscard"><span>Municipio:</span><p>${post.Municipio}</p></div>
                        </div>
                      </div>`
                     postElements += postElement
                    })

                    document.getElementById('posts').innerHTML = postElements

                }).catch(error => {
                    console.log(error.message)
                    errorHandler()
                })
            














        }, 1000)
    })
}