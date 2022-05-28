function puxaproduto(){
    const url = "http://localhost:5600/api";
    let content = document.getElementById('content');
    let result = document.getElementById('result');
    let produto = document.getElementById('produto');
    let quant = document.getElementById('quant');
    let data = document.getElementById('data');

    let req = {
        Produto: produto.value,
        Quantidade: quant.value,
        Data: data.value
    }

    function getUser(){
        axios.get(url)
        .then(response => {
            const dados = response.data.users;
            const filtrodados = dados.filter(value => {
                if(value.Produto.toLowerCase() == req.Produto.toLowerCase() && value.Data == req.Data && Number(req.Quantidade) <= Number(value.Quantidade)){
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
                    td_data.innerText = filtrodados[i].Data;

                }
            } 
            else {content.innerHTML = "NÃO HOUVE RESULTADOS NA BUSCA";}
            
        })
        .catch(error => console.log(error))
    }

    console.log(req);
    getUser()

    document.getElementById('produto').value = '';
    document.getElementById('quant').value = '';
    document.getElementById('data').value = '';
    produto.focus()

}

function procurarProduto(){
    const fruitslist = ["abacate","abacaxi","caju","jaca"]
    const data_list = document.getElementById('browsers')
    let Produto = document.getElementById('produto').value;
    const filteredFruitsList = fruitslist.filter((value) => {
        const lengthWord = Produto.length
        const newWord = value.slice(0, lengthWord)
        if (Produto.toLowerCase() == newWord.toLowerCase()){
            return value
        }
    })
    
    for(let i = 0; i <= filteredFruitsList.length; i++) {
        const listOfOptions = document.getElementsByClassName('optionValue')
        const newArray = []
        for (let j = 0; j < listOfOptions.length; j++){
            newArray.push(listOfOptions[j].value)
            if (listOfOptions[j].value == "undefined"){
                listOfOptions[j].remove()
            }
        }
        if (!newArray.includes(filteredFruitsList[i])){
            const option = document.createElement('option')
            option.value = filteredFruitsList[i]
            option.className = 'optionValue'
            data_list.appendChild(option)
        }
    }
}