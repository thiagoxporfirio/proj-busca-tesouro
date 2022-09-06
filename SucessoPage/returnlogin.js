const returnLogin = document.querySelector('.returnLogin')

if(returnLogin){
    returnLogin.addEventListener('click', () => {
        
        localStorage.clear();
        window.location.href = '../loginUser/login.html'
    })
}