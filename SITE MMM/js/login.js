function entrar(){
    let user = document.getElementById("email");
    let senha = document.getElementById("password");
    let msgerror = document.getElementById("msg-error");

    let listaUser = [];

    let userValid = {
        Nome: '',
        Email: '',
        Senha: ''
    }

    listaUser = JSON.parse(localStorage.getItem('listauser'));

    listaUser.forEach((item) => {
        if(user.value == item.Email && senha.value == item.Senha){
            userValid = {
                Nome: item.Nome,
                Email: item.Email,
                Senha: item.Senha
            }
        }
    });

    console.log(userValid);

    if(user.value == userValid.Email && senha.value == userValid.Senha){

        alert("DEU CERTO");

    } else {
        msgerror.setAttribute('style', 'display: block');
        msgerror.innerHTML = 'Usuário ou senha incorretos';
        user.focus()
    }
}