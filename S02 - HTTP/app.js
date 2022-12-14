var http = require("http");

http.createServer(function(requisicao,resposta){
    resposta.end("<h1>Bem vindo ao meu site!<h1><h4>Você vai ser feliz, ganhar muito dinheiro e comprar o que você quiser! Princiaplemnte seu New Civic Preto e envelopar de preto fosco!")
}).listen(8181);

console.log("Meus servidor está rodando!")