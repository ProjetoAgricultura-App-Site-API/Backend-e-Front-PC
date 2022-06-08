## Backend-e-Front-PC

#INSTRUÇÕES PARA FUNCIONAMENTO ADEQUADO!

Antes de tudo, devemos rodar as APIS necessárias para o funcionamento adequado de toda a estrutura.
API 1(app):"Backend-e-front-PC/APP_API" "npm install" e dar "npm start" no prompt de comando.
abrindo, então, um localhost no endereço 5700. (http://localhost:5700/api)
API 2(app):"Backend-e-front-PC/API_PROD" "npm install" e dar "npm start" no prompt de comando.
abrindo, então, um localhost no endereço 5600. (http://localhost:5600/api)
API 3(pc):"Backend-e-front-PC/API_SITE" ""npm install" e dar "npm start" no prompt de comando.
abrindo, então, um localhost no endereço 5500. (http://localhost:5500/api)

-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
-PARA O APP:
Basta dar o comando "ionic serve" na pasta referente ao app, a pasta "muda-meu-mundo".
-com isso, deixe no modo para celular, usando a ferramenta de desenvolvedor do chrome(f12+ símbolo de mobile).
-É necessário, também, ligar a primeira API, sendo ela a responsável por verificar, gerenciar e registrar novos logins aos usuários.

//(Passo a passo para rodar a primeira API. Caso precise nas próximas, apenas modificar os endereços.) Para iniciar o seu funcionamento, devemos ir até a sua pasta "Backend-e-front-PC/APP_API" com o prompt de comando e usar o comando "npm start".FEITO ISSO, o registro e o login funcionam adequadamente no aplicativo.

faça um registro ou faça um novo usuário. Você está dentro do app!

Lá, você encontra um menu com duas opções: VENDER e PERFIL.
(MENU PERFIL)
Exibe qual é o usuário logado naquele instante. Você também pode apertar o botão de sair do app e ser deslogado.
(MENU VENDER)
-PARA AS VENDAS ACONTECEREM, a segunda API entra em ação: A utilizamos para enviar para o sistema qual usuário fez qual venda. Temos 3 informações para preencher: PRODUTO, QUANTIDADE e DATA.

-PRODUTO: De uma lista seleta de produtos, você escreve o nome do que você tem para vender.
-QUANTIDADE: Você preenche quantos quilos você tem do produto a ser vendido.
-DATA: A Data em que o produto estará disponível.

Com isso, apertamos o botão de "VENDER!" e pronto, Seus produtos e suas informações de contato já foram enviadas para a segunda API!

-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
-PARA O SITE:
Basta abrir o arquivo "Index.html" localizado em "Backend-e-front-PC/SITE MMM".

Na tela inicial você verá uma página de login para entrada no sistema, basta logar com eamil e senha ou fazer um novo registro, 
seus dados serão enviados para o servidor e você irá logar tranquilamente!!!

Após logar, o usuário será lançado na tela de início que possui opções para navegar até "Minha Conta", "Mensagens" ou simplesmente o botão sair do sistema

Na tela de início também está localizado um formulário com dados para serem requisitados no servidor de Produtos do nosso app:

Produtos: Escreva qual produto deseja obter
Quantidade: Escreva a quantidade desejada do produto em(KG)
Data: Escreva a data para a qual precisa do produto

Após responder o formulário, o sistema irá procurar no servidor uma descrição que se encaixe com sua pesquisa,
caso haja algum produto com quantidade maior que a desejada, ele também será apresentado.

Caso haja resposta, aparece uma tabela ao lado direito do form com todos os dados do produto e do usuário que o postou no app
Caso não haja resposta, um alerta é mostrado na tela indicado que não houve resultados para os parâmetros de busca apresentados.

(MINHA CONTA)

Na aba minha conta estarão listados todos os dados do usuário que logou no sistema!

(VENDAS DO DIA)

Na aba vendas do dia, você verá todos os produtos que foram cadastrados nesse dia em específico!

(SAIR)

O botão SAIR, apaga os dados do usuário logado da sessão e o redireciona para a página de login!!!
