let identidadeUser = JSON.parse(localStorage.getItem('_DadosUser2') || '{}')
const usuarioid = identidadeUser.dados.UserId


    const dadosForm = {
        state: '',
        userId: usuarioid
    }

    const inputBuscar = document.querySelector('#buscarEstado')
    const select = document.querySelector('#estado')
    const messageErrorLogin = document.querySelector('.errorvalidate')

    const errorHandlerLogin = () => {
        messageErrorLogin.setAttribute('style', 'display:flex')
    }

    const successHandler = () => {
        inputBuscar.classList.remove('loading');
        inputBuscar.classList.remove('error');
        inputBuscar.classList.add('success');
        inputBuscar.textContent = "Sucesso! :)";
    }

    const errorHandler = () => {
        inputBuscar.classList.remove('loading');
        inputBuscar.classList.remove('success');
        inputBuscar.classList.add('error');
        inputBuscar.textContent = "Nada encontrado :(";
    }

    function atualizaSelect(){
        const select = document.querySelector('#estado')
        const OptionValue = select.options[select.selectedIndex]
    
        dadosForm.state = OptionValue.value

    }
    

    if(inputBuscar){
        inputBuscar.addEventListener('click', (event) => {
            event.preventDefault()
            atualizaSelect()

            inputBuscar.textContent = "Buscando..."

            setTimeout(() => {

                fetch('http://11775.masterdaweb.net/car/state', {
                    method: 'POST',
                    headers: {'Content-type': 'application/json'},
                    body: JSON.stringify(dadosForm)
                }).then((response) => {
                    if(response.status !== 200){
                        if(dadosForm.userId == ""){
                            errorHandlerLogin()
                        }
                        return errorHandler()
                    }else{
                        successHandler()
                        return response.json()
    
                    }
                }).then((data) => {
                    console.log(data)
                    const ListadeDados = data

                    let postElements = ''
                    let posts = ListadeDados
                    console.log(posts)

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
            }, 1500)
        })
    }

