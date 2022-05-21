function entrar(){
    let userlabel = document.getElementById("emailLabel");
    let senhalabel = document.getElementById("passwordLabel");
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
        window.location.href = "inicio.html";

        let token = Math.random().toString(16).substr(2);
        localStorage.setItem('token', token);


    } else {
        user.setAttribute('style', 'border-bottom: 2px solid red');
        userlabel.setAttribute('style', 'color: red');
        senha.setAttribute('style', 'border-bottom: 2px solid red');
        senhalabel.setAttribute('style', 'color: red');
        msgerror.setAttribute('style', 'display: block');
        msgerror.innerHTML = 'Usuário ou senha incorretos';
        user.focus()
    }
}