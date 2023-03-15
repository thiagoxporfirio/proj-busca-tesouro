   
let usuarioid = identidadeUser?.dados?.UserId
console.log(usuarioid)

let btnUserid = document.querySelector('.userid')
let btnUserid2 = document.querySelector('.userid2')
let btnUserid3 = document.querySelector('.userid3')

let spanfazlogin = document.querySelector('.container-error-validate')


if(btnUserid){
    btnUserid.addEventListener('click', () => {
        if(typeof usuarioid == "undefined"){
            spanfazlogin.style.display = "flex"
            return
        }
        window.location.href = `https://calm-caverns-77349.herokuapp.com/?userID=${usuarioid}`
    })
}


if(btnUserid2){
    btnUserid2.addEventListener('click', () => {
        if(typeof usuarioid == "undefined"){
            spanfazlogin.style.display = "flex"
            return
        }
        window.location.href = `https://calm-caverns-77349.herokuapp.com/cliente2/?userID=${usuarioid}`
        console.log("clicou")
    })
}


if(btnUserid3){
    btnUserid3.addEventListener('click', () => {
        if(typeof usuarioid == "undefined"){
            spanfazlogin.style.display = "flex"
            return
        }
        window.location.href = `https://calm-caverns-77349.herokuapp.com/cliente3/?userID=${usuarioid}`
    })
}