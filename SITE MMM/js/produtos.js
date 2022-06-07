function puxaproduto(){
    const url = "http://localhost:5600/api";
    let content = document.getElementById('content');
    let result = document.getElementById('result');
    let produto = document.getElementById('produto');
    let quant = document.getElementById('quant');
    let data = document.getElementById('data');

    console.log(data.value)
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
                    td_data.innerText = filtrodados[i].Data.split('-').reverse().join('/');

                }
            } 
            else {alert("NÃO HOUVE RESULTADOS NA BUSCA");}
            
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
    const fruitslist = ["Abacate","Abacaxi","Abóbora","Abóbora(flor)","Abobrinha","Acelga","Acelga-Chinesa","Agave-Caribenho","Agrião","Agrião-do-Líbano","Aipim","Aipo","Alcachofra","Alcaparra","Alecrim","Alface","Alfafa(broto)","Alfavaca","Alho","Alho-Poró","Almeirão","Amaranto","Amêndoa","Amendoim","Amendoim-da-Mata","Amora","Andu","Arachachá","Arroz","Arroz-Selvagem","Aspargo","Aveia","Avelã","Azedinha","Azeitona","Açafrão","Açafrão","Bacuri","Banana","Baroa","Batata","Batata-Doce","Batata-Doce(folha)","Beldroega","Beldroega-Grande","Beldroegão","Berdana","Berdana(folha)","Berinjela","Bertalha","Bertalha-Coração","Beterraba","Bredo","Brócolis","Buriti","Cabotchan","Cacau","Café","Caju","Cambuquira","Capeba","Capiçoba","Capuchinha","Cará","Cará-do-Ar","Cará-Moela","Carambola","Carambola","Caruru","Caruru-Manteiga","Castanha-de-Baru","Castanha-de-Caju","Castanha-de-Macaco","Castanha-do-Maranhão","Castanha-do-Pará","Castanheiro-do-Mato","Catalonha","Caxi","Cebola","Cebolinha","Celósia","Celósia(sementes)","Cenoura","Centeio","Cevada","Chalota","Chaya","Chia","Chichá","Chichá-do-Norte","Chicória","Chuchu","Coentro","Colza","Comelina","Couve","Couve-de-Bruxelas","Couve-de-Milão","Couve-de-Saboia","Couve-Flor","Couve-Lombarda","Couve-Nabo","Couve-Nabo(folha)","Couve-Rábano","Couve-Rábano","Couvinha","Cumaru","Dendê","Dill","Echalota","Embaúba","Endívia","Erva-Cidreira","Erva-Doce","Erva-Luísa","Erva-Mate","Ervilha","Ervilha-de-Pombo","Escarola","Escorcioneira","Espinafre","Espinafre-de-Okinawa","Estragão","Fava","Feijão","Feijão(broto)","Feijão-Andu","Feijão-Azuki","Feijão-Boer","Figo","Framboesa","Fruta-Pão","Funcho","Gengibre","Gergelim","Gergelim(broto)","Girassol(semente)","Gobô","Gobô(folha)","Goiaba","Goiaba","Goya","Grão-de-Bico","Grão-de-Bico(broto)","Graviola","Groselha","Grumixama","Guandu","Guasca","Hibisco","Hortelã","Inajá","Ingá","Inhame","Inhame(folha)","Jabuticaba","Jaca Verde","Jalapeño","Jambo","Jasmim-Manga","Jicama","Jiló","Kiwi","Kohlrabi","Kohlrabi(folha)","Labaca","Labaca(folha)","Lambari-da-Horta","Laranja Hamlin","Laranja-Baía","Laranja-da-Terra","Laranja-Lima","Laranja-Natal","Laranja-Pera","Lentilha","Lentilha(broto)","Lichia","Limão","Linhaça","Linhaça(broto)","Lírio-do-Brejo","Louro","Macassá","Maçã","Madressilva","Major-Gomes","Malagueta","Malte","Mamão","Mandioca","Mandioquinha","Manjericão","Manjerona","Maria-Gorda","Marmelo","Maxixe","Melancia","Melão","Mendubiguaçu","Milho","Mitsubá","Mogango","Monguba","Moranga","Morango","Mostarda","Nabo","Nabo-da-Suécia","Nabo-da-Suécia(folha)","Nabo-Mexicano","Nectarina","Nêspera","Noz","Nozes-da-Macadâmia","Olho-de-Boi","Oliva","Ora-Pro-Nobis(Orabrobó)","Orégano","Orelha-de-Coelho","Palma","Palmito","Paru","Pau-Rei","Pé-de-Anta","Peixinho-da-Horta","Pelega","Pepino","Pepino-Japonês","Pequi","Pera","Pêssego","Physalis","Picão","Pimenta","Pimentão","Pinhão","Pistache","Quiabo","Quina","Quinoa","Rabanete","Rábano","Rábano-Silvestre","Radicchio","Raiz-Forte","Repolho","Romã","Rúcula","Ruibarbo","Rutabaga","Rutabaga(folha)","Salsa","Salsão","Sálvia","Sapoti","Seriguela","Serralha","Shissô","Shissô(sementes)","Soja","Soja(broto)","Sorgo","Taioba","Taioba(batata)","Tâmara","Tamarindo","Tangerina","Taro","Taro(folha)","Tingensai","Tomate","Tomate-Cereja","Tomilho","Tonka","Trapoeraba","Trevo(broto)","Trigo","Trigo(broto)","Tupinambo","Umbu","Urtiga","Urucum","Uva","Vagem","Veludo","Vinagreira","Wampee","Wasabi","Wasabi(folha)","Xixá","Xoconostle","Yamamomo","Zimbro","Zizânia"] //Pesquisa e ordenação por Rennan Januario
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