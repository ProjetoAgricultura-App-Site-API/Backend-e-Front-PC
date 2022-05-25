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