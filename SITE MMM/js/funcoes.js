$(function(){
	var operacao = "A"; //"A"=Adição; "E"=Edição
	var indice_selecionado = -1; //Índice do item selecionado na lista
	var tbClientes = localStorage.getItem("tbClientes");// Recupera os dados armazenados
	tbClientes = JSON.parse(tbClientes); // Converte string para objeto
	if(tbClientes == null) // Caso não haja conteúdo, iniciamos um vetor vazio
	tbClientes = [];
});

function Adicionar(){
	var cliente = JSON.stringify({
		Nome: $("#name").val(),
        Sobrenome: $("#lastname").val(),
		Email: $("#email").val(),
        Senha: $("#password")
	});
	tbClientes.push(cliente);
	localStorage.setItem("tbClientes", JSON.stringify(tbClientes));
	alert("Registro adicionado.");
	return true;
}

function Listar(){
    $("#tblListar").html("");
    $("#tblListar").html(
        "<thead>"+
        "   <tr>"+
        "   <th></th>"+
        "   <th>Nome</th>"+
        "   <th>Sobrenome</th>"+
        "   <th>Senha</th>"+
        "   <th>Email</th>"+
        "   </tr>"+
        "</thead>"+
        "<tbody>"+
        "</tbody>"
        );
    for(var i in tbClientes){
        var cli = JSON.parse(tbClientes[i]);
        $("#tblListar tbody").append("<td>"+cli.Nome+"</td>");
        $("#tblListar tbody").append("<td>"+cli.Sobrenome+"</td>");
        $("#tblListar tbody").append("<td>"+cli.Senha+"</td>");
        $("#tblListar tbody").append("<td>"+cli.Email+"</td>");
        $("#tblListar tbody").append("</tr>");
    }
}


$("#frmCadastro").on("submit",function(){
	if(operacao == "A")
		return Adicionar();
	else
		return 0;
});