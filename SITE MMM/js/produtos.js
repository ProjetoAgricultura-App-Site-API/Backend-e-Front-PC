function puxaproduto(){
    let produto = document.getElementById('produto').value;
    let quant = document.getElementById('quant').value;
    let data = document.getElementById('data').value;

    let req = {
        Produto: produto,
        Quantidade: quant,
        Data: data
    }

    console.log(req);

}