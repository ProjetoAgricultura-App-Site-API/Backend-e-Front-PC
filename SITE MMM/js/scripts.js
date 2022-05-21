function guardaCadastro() {
    var nomeValor = document.getElementById("name").value;
    var sobrenomeValor = document.getElementById("lastname").value;
    var emailValor = document.getElementById("email").value;
    var senhaValor = document.getElementById("password").value;

    var formValue = {
        Nome: nomeValor,
        Sobrenome: sobrenomeValor,
        Email: emailValor,
        Senha: senhaValor
    }

    console.log(formValue);
}

