function clicou(){
    //alert("Obrigado por clicar!")
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</b>"  //.innerHTML é para digitar um texto ou qualquer outra coisa.
    //<b></b>: tag b, deixa tudo do texto em negrito.
    //console.log(document.getElementById("agradecimento"))
}


function redirecionar(){
    window.open("https://www.planocritico.com/") //redireciona para um site, na palavra que foi selecioanada no redirecionar() no HTML
    //window.location.href = "https://www.planocritico.com/" //Também redireciona para outra pagina, mas ele também na mesma página que você está criando

}

function trocar(elemento){
    document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse!"  // ao passar o mouse nessa frase, que está no HTML ele muda a frase pela que está dentro do innerHTML
    elemento.innerHTML = "Obrigado por passar o mouse"
    //alert("trocar texto!") //só de passar o mouse já dá a mensagem do alert.4

}

function voltar(elemento){
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui!" // Vai dar um erro, pois não devia ter elemento no function voltar(elemento), mesma situação da function acima. 
    elemento.innerHTML = "Passe o mouse"
}

function load(){
    alert("Pagina carregada!")
}

function funcaoChange(elemento){
    console.log(elemento.value)
}