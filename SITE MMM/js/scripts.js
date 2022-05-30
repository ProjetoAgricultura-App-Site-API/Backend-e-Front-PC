

//GUARDA O CADASTRO E REDIRECIONA PARA TELA DE LOGIN
function guardaCadastro() {
    
    const url = "http://localhost:5500/api";
    var senha = document.getElementById("password");
    let msgerror = document.getElementById("msg-error");
    var nomeValor = document.getElementById("name").value;
    var sobrenomeValor = document.getElementById("lastname").value;
    var emailValor = document.getElementById("email").value;
    var senhaValor = document.getElementById("password").value;
    var confirm = document.getElementById("passconfirmation").value;
    const btn = document.getElementById("CADASTRAR");

    //let listauser = JSON.parse(localStorage.getItem('listauser') || '[]');
    
    if(senhaValor == confirm){
        var formValue = {
            Nome: nomeValor,
            Sobrenome: sobrenomeValor,
            Email: emailValor,
            Senha: senhaValor
        }

        //ADICIONA OS VALORES NA API DE CADASTRO
        function newuser(){
            axios.post(url, formValue)
            .then(response => {
                console.log("USER CADASTRADO");
            })
            .catch(error => error)
        }

        newuser();

        //listauser.push(formValue);
        //localStorage.setItem('listauser', JSON.stringify(listauser));

        console.log(formValue); //PRINTA A OS VALORES DIGITADOS PARA VER SE DEU CERTO

        alert("Cadastro realizado com sucesso, faça o login!!!");
        window.location.href = "index.html"; //ENVIA O USUÁRIO PARA A TELA DE LOGIN 
    } 
    else{
        msgerror.setAttribute('style', 'display: block');
        msgerror.innerHTML = 'As senhas não conferem';
        senha.focus()
    }
            
}
