function entrar(){

    const url = "http://localhost:5500/api";
    let userlabel = document.getElementById("emailLabel");
    let senhalabel = document.getElementById("passwordLabel");
    let user = document.getElementById("email");
    let senha = document.getElementById("password");
    let msgerror = document.getElementById("msg-error");

    let listaUser = [];

    let userValid = {
        Nome: '',
        Email: '',
        Sobrenome: '',
        Senha: ''
    }

    /*COMPARA OS DADOS DO USUÁRIO DIGITADO COM OS DA API A PARTIR DE UM VALIDADOR*/ 
    function getUser(){
        axios.get(url)
        .then(response => {
            listaUser = response.data.users;
            listaUser.forEach((item) => {
                if(user.value == item.Email && senha.value == item.Senha){
                    userValid = {
                        Nome: item.Nome,
                        Sobrenome: item.Sobrenome,
                        Email: item.Email,
                        Senha: item.Senha
                    }
                }
            })
            console.log(userValid);
            if(user.value == userValid.Email && senha.value == userValid.Senha){
                window.location.href = "inicio.html";
        
                let token = Math.random().toString(16).substr(2);
                localStorage.setItem('token', token); /*SALVA UM TOKEN DE SEGURANÇA NO LOCALSTORAGE*/
                
                /*COMO ESSES DADOS SÓ SERÃO UTILIZADOS NA SESSÃO PODEM SER SALVOS NO LOCALSTORAGE*/

                localStorage.setItem('userLogado', JSON.stringify(userValid)); /*SALVA O USER LOGADO NO LOCALSTORAGE*/
        
        
            } else {
                user.setAttribute('style', 'border-bottom: 2px solid red');
                userlabel.setAttribute('style', 'color: red');
                senha.setAttribute('style', 'border-bottom: 2px solid red');
                senhalabel.setAttribute('style', 'color: red');
                msgerror.setAttribute('style', 'display: block');
                msgerror.innerHTML = 'Usuário ou senha incorretos';
                user.focus()
            }
        }).catch(error => console.log(error))
    }

    getUser(); //CHAMA A FUNÇÃO DECLARADA ACIMA

}