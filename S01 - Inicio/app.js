/* var mostrarSite = true;
const site = "www.guiadoprogramador.com"

console.log("Hello World!");
console.log("Meu nome é Thiago");
console.log("E eu estou aprendendo Node.js com o Guia do Programador");

if(mostrarSite){
    console.log(site);
} */

var calculadora = require ("./calculadora");

console.log(calculadora.mult(10,20));
console.log(calculadora.soma(100,20));
calculadora.nome = "Calculadora TZ"
console.log(calculadora.nome);


