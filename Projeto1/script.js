var opera = "";
var valorAnt = 0;

function adicionarNaTela(valor){
    var numero=0
    var ax;
    var num;

    numero = document.getElementById("tela").value
    document.getElementById("tela").value = numero + valor
}

function mais(){
     //verifica se já tem um valor anterior salvo
    if (opera === "+") { //verifica
        //faaz a soma acumulada
        var valorAtual = parseFloat(document.getElementById("tela").value);
        valorAnt += valorAtual;
    }
    else { //soma normal
        valorAnt = parseFloat(document.getElementById("tela").value);
    }

    opera = "+";
    document.getElementById("tela").value = ""; // limpa tela pro próximo número

}

function menos(){
    if (opera === "-") {
        var valorAtual = parseFloat(document.getElementById("tela").value);
        valorAnt -= valorAtual;
    }
    else {
        valorAnt = parseFloat(document.getElementById("tela").value);
    }

    opera = "-";
    document.getElementById("tela").value = "";

}

function multi(){
    var valorAtual = parseFloat(document.getElementById("tela").value);
    // multiplicar por 0 dá 0

    if (opera === "*") {
        valorAnt = valorAnt * valorAtual;
    }
    else {
        valorAnt = valorAtual
    }

    opera = "*";
    document.getElementById("tela").value = "";

}

function divisao(){
    var valorAtual = parseFloat(document.getElementById("tela").value);

    if (opera === "/") {
        valorAnt = valorAnt / valorAtual;
    }
    else {
        valorAnt = valorAtual
    }

    opera = "/";
    document.getElementById("tela").value = ""; //limpa tela pro próximo número

}

function raiz(){
    var numero;
    var raiz

    numero = document.getElementById("tela").value
    raiz = Math.sqrt(numero);

    document.getElementById("tela").value = raiz;
}

function quadrado(){
    var numero;
    var qua;

    numero = document.getElementById("tela").value;
    qua = numero ** 2;

    document.getElementById("tela").value = qua;
}

function cubo(){
    var numero;
    var cubo;

    numero = document.getElementById("tela").value;
    cubo = numero ** 3;

    document.getElementById("tela").value = cubo;
}

function porcem(){
    var valor;
    var porcem;
    var result;

     //verifica se já tem um valor anterior salvo
    if (opera === "%") { //verifica
        //faaz a soma acumulada
        var valorAtual = parseFloat(document.getElementById("tela").value);
        valorAnt += valorAtual;
    }
    else { //soma normal
        valorAnt = parseFloat(document.getElementById("tela").value);
    }

    opera = "%";
    document.getElementById("tela").value = ""; // limpa tela pro próximo número

}

function punto(){
    var tela = document.getElementById("tela").value;

    if (!tela.includes(".")){
    document.getElementById("tela").value = tela + ".";
    }
}

function igual(){
    var valorAtual = parseFloat(document.getElementById("tela").value); //guarda segundo valor
    var result = 0;

    if(opera === "+"){
        result = valorAnt + valorAtual;
    }
    
    else if(opera === "-"){
        result = valorAnt - valorAtual;
    }

    else if(opera === "*"){
        result = valorAnt * valorAtual;
    }

    else if(opera === "/"){
        result = valorAnt / valorAtual;
    }

    else if(opera === "%"){
        result = (valorAnt * valorAtual) / 100

    }

    document.getElementById("tela").value = result;
    valorAnt = result;
    opera= "";

}

function limpa(){
    valorAtual = 0;
    valorAnt = 0;
    result = 0;
    opera = 0;

    document.getElementById("tela").value = " ";

}