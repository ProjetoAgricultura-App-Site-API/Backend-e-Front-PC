

//GUARDA O CADASTRO E REDIRECIONA PARA TELA DE LOGIN
function guardaCadastro() {
    
    var nomeValor = document.getElementById("name").value;
    var sobrenomeValor = document.getElementById("lastname").value;
    var emailValor = document.getElementById("email").value;
    var senhaValor = document.getElementById("password").value;
    var confirm = document.getElementById("passconfirmation").value;
    const btn = document.getElementById("CADASTRAR");
    let listauser = JSON.parse(localStorage.getItem('listauser') || '[]');
    if(senhaValor == confirm){
        var formValue = {
            Nome: nomeValor,
            Sobrenome: sobrenomeValor,
            Email: emailValor,
            Senha: senhaValor
        }

        //ADICIONA OS VALORES AO LOCAL STORAGE
        listauser.push(formValue);
        localStorage.setItem('listauser', JSON.stringify(listauser));

        console.log(formValue);

        alert("Cadastro realizado com sucesso, faça o login!!!");
        location.href = "index.html"; 
    } 
    else{
        alert("SENHAS DIFERENTES, DIGITE NOVAMENTE");
    }
            
}
