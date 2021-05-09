/*
function soma(n1, n2){
    return n1 + n2;
}

alert(soma(5, 10));
*/

// Exemplo 2
/*
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}
alert(setReplace("Vai Japão!", "Japão", "Brasil"));
*/


//Exemplo 3

//var validar // pode usar esse aqui que é global (vale para mais que uma função) ou pode usar o var que está dentro da function validaIdade
function validaIdade (idade){
    var validar; // Esse var validar é local
    if(idade >= 18){
    validar = true
    }else{
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual é sua idade? ");
console.log(validaIdade(idade));