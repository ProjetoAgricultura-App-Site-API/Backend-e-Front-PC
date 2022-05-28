function puxaproduto(){
    let produto = document.getElementById('produto');
    let quant = document.getElementById('quant');
    let data = document.getElementById('data');

    let req = {
        Produto: produto.value,
        Quantidade: quant.value,
        Data: data.value
    }

    console.log(req);

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
        console.log(newArray)
        if (!newArray.includes(filteredFruitsList[i])){
            const option = document.createElement('option')
            option.value = filteredFruitsList[i]
            option.className = 'optionValue'
            data_list.appendChild(option)
        }
    }
    console.log(filteredFruitsList)
}