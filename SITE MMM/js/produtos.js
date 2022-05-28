function puxaproduto(){
    const url = "http://localhost:5600/api";
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
                if(value.Produto.toLowerCase() == req.Produto.toLowerCase() && value.Data == req.Data && value.Quantidade.toLowerCase() >= req.Quantidade.toLowerCase()){
                    return value;
                }
            })
            result.innerHTML = JSON.stringify(filtrodados);
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