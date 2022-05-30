
let userLogado = JSON.parse(localStorage.getItem('userLogado'));
console.log(userLogado);
let logado = document.getElementById('logado');

if(localStorage.getItem('token') == null){
    alert("Você precisa estar logado para acessar essa página!!");
    window.location.href = "index.html";
}
else{
}

function sair(){
    localStorage.removeItem('token');  /*REMOVE OS DADOS DE SEGURANÇA DO LOCALSTORAGE*/ 
    localStorage.removeItem('userLogado'); /*REMOVE OS DADOS DO USUÁRIO LOGADO DO LOCALSTORAGE*/ 

    alert("VOCÊ SERÁ REDIRECIONADO PARA A PÁGINA DE LOGIN!!!");
    window.location.href = "index.html";
}