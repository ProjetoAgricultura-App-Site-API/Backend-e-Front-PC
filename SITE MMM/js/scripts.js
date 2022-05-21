

//GUARDA O CADASTRO E REDIRECIONA PARA TELA DE LOGIN
function guardaCadastro() {
    
    var nomeValor = document.getElementById("name").value;
    var sobrenomeValor = document.getElementById("lastname").value;
    var emailValor = document.getElementById("email").value;
    var senhaValor = document.getElementById("password").value;
    const btn = document.getElementById("CADASTRAR");

    var formValue = {
        Nome: nomeValor,
        Sobrenome: sobrenomeValor,
        Email: emailValor,
        Senha: senhaValor
    }

    console.log(formValue);

    alert("Cadastro realizado com sucesso, faça o login!!!");
    location.href = "index.html";   
            
}
