//var lista = ["maça", "pêra", "laranja"];
//console.log(lista[0]); //-mostrará maça
//alert(lista[0]); //- mostrará maça
//console.log(lista[1]); //-mostrará perâ 
//alert(lista[1]) //-mostrará pêra
//console.log(lista[2]); //-mostrará laranja
//alert(lista[3]) //-mostrará laranja

//lista.push("uva", "banana");
//console.log(lista);

//lista.pop()
//console.log(lista);

//console.log(lista.length); // quantos elementos tem no []

//console.log(lista.reverse()); //coloca a ordem de trás para frente

//console.log(lista.toString()); // transforma em uma string (texto)

//console.log(lista[0]);
//console.log(lista.toString()[2]); //- mostra a 2ª letra que tem na posição lista[0], nesse caso aparece "a" de maça

//console.log(lista.toString()[5]); //- mostra a letra que está na 5ª posição, considerando todas as palavras dentro do []

//console.log(lista.join(" - ")); // - muda "," -> "-"
//console.log(lista.join(" * ")); // - muda "," -> "*"
//console.log(lista.join(" ")); // - muda "," -> "com espaço"
//console.log(lista.join("")); // - muda "," -> "tudo junto sem espaço"


//2 Exemplo da Aula
/*
var fruta = {nome: "maça", cor:"vermelha"};
console.log(fruta);
console.log(fruta.nome);
alert(fruta.cor);
*/
var frutas = [{nome: "maça", cor:"vermelha"}, {nome: "uva", cor:"roxa"}];
console.log(frutas);
alert(frutas[1].nome);