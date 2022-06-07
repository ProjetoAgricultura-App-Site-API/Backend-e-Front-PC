const url = "http://localhost:5600/api";

var dataclass = new Date();
var dia = String(dataclass.getDate()).padStart(2, '0');
var mes = String(dataclass.getMonth() + 1).padStart(2, '0');
var ano = dataclass.getFullYear();
Data = ano + '-' + mes + '-' + dia;


function getDate(){
    axios.get(url)
    .then(response => {
        const dados = response.data.users;
        const filtrodados = dados.filter(value => {
            if(value.Data == Data){
                return value;
            }
        })
        if(filtrodados.length != 0){
            result.innerText = '';
            for(let i = 0; i < filtrodados.length; i++){
                let tr = result.insertRow();

                let td_nome = tr.insertCell();
                let td_sobre = tr.insertCell();
                let td_email = tr.insertCell();
                let td_num = tr.insertCell();
                let td_prod = tr.insertCell();
                let td_quant = tr.insertCell();
                let td_data = tr.insertCell();
                
                td_nome.innerText = filtrodados[i].Nome;
                td_sobre.innerText = filtrodados[i].Sobrenome;
                td_email.innerText = filtrodados[i].Email;
                td_num.innerText = filtrodados[i].Numero;
                td_prod.innerText = filtrodados[i].Produto;
                td_quant.innerText = filtrodados[i].Quantidade + " kg";
                td_data.innerText = filtrodados[i].Data.split('-').reverse().join('/');

            }
        } 
    })
    .catch(error => console.log(error))
}

getDate()