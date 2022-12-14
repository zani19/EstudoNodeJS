const express = require("express"); //IMPORTANDO O EXPRESS
const req = require("express/lib/request");
const app = express(); // INICIANDO O EXPRESS

app.get("/",function(req,res){
    res.send("<h1>Bem vindo ao seu novo mundo! Você é um vencedor!<h1>")
});

app.get("/blog/:artigo?",function(req,res){
    
    var artigo = req.params.artigo;

    if(artigo){
        res.send("<h2>Artigo: " + artigo + "</h2>")
    }else{
        res.send("<h3>Bem vindo ao meu blog!</h3>")
    }
})

app.get("/blog",function(req,res){
    res.send("Bem vindo ao meu blog!")
})

app.get("/canal/youtube",function(req,res){
    res.send("Bem vindo ao meu canal!")
})

app.listen(4000,function(erro){
    if(erro){
        console.log("Ocorreu um erro");
    }else{
        console.log("Servidor iniciado com sucesso!");
    }
})