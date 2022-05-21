let userLogado = JSON.parse(localStorage.getItem('userLogado'));
console.log(userLogado);
let logado = document.getElementById('logado');

if(localStorage.getItem('token') == null){
    alert("Você precisa estar logado para acessar essa página!!");
    window.location.href = "index.html";
}
else{
    logado.innerHTML = `Olá ${userLogado.Nome}`;
}

function sair(){
    localStorage.removeItem('token');
    localStorage.removeItem('userLogado');

    window.location.href = "index.html";
}