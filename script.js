function inclui_nome() {
    var nome_variavel = prompt("Coloque seu nome:");
    if(nome_variavel){
        document.getElementById("marcacao_nome").innerHTML = nome_variavel;
    }
    else{
        alert("Nome não atribuido, preencha o nome.");
        inclui_nome();
    }
}

function funcao_resposta(){

    var resp1 = document.querySelector('input[name="quest_1"]:checked');
    var resp2 = document.querySelector('input[name="quest_2"]:checked');
    var resp3 = document.querySelector('input[name="quest_3"]:checked');
    var resp4 = document.querySelector('input[name="quest_4"]:checked');

    var contador = 0;


    if(resp1 && resp2 && resp3 && resp4){
        if(resp1.value == "correta"){
            document.getElementById("resp_correta_1").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_1").innerHTML = "Errada, pois a soma dos quadrados dos catetos é igual ao quadrada da hipotenusa!"

        }
        if(resp2.value == "correta"){
            document.getElementById("resp_correta_2").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_2").innerHTML = "Errada, pois a soma dos quadrados dos catetos é igual ao quadrada da hipotenusa!"

        }
        if(resp3.value == "correta"){
            document.getElementById("resp_correta_3").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_3").innerHTML = "Errada, pois a soma dos quadrados dos catetos é igual ao quadrada da hipotenusa!"

        }
        if(resp4.value == "correta"){
            document.getElementById("resp_correta_4").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_4").innerHTML = "Errada, pois a soma dos quadrados dos catetos é igual ao quadrada da hipotenusa!"

        }
        document.getElementById("quantos_acertos").innerHTML = "Você acertou " + contador + " questões!";
    }
    else{
        alert("não deixe questões em branco!")
    }

}

function josefa(){
    fernanda.value = parseInt(aram1.value) + parseInt(aram2.value);
}
function diminuir(){
    fernanda.value = parseInt(aram1.value) - parseInt(aram2.value);
}
function multiplicacao(){
    fernanda.value = parseInt(aram1.value) * parseInt(aram2.value);
}
function divisao(){
    if(aram2.value == 0){
        alert("Não é possível dividir por zero.");
        aram1.value = 0;
    }
    else{
        fernanda.value = parseInt(aram1.value) / parseInt(aram2.value);
    }
}

function calcular(){
    if(massa.value == 0){
        alert("Não é possível dividir por zero.");
        forca.value = 0;
    }
    else{
        aceleracao.value = parseInt(forca.value) / parseInt(massa.value);
    }
    
}

function variacaov(){
    deltavelocidade.value = parseInt(deltav.value) - parseInt(deltav2.value);
}
function variacaot(){
    deltatempo.value = parseInt(deltat.value) - parseInt(deltat2.value);
}
function calcularaceleracao(){
    if(deltataceleracao.value == 0){
        alert("Não é possível dividir por zero.");
        deltavaceleracao.value = 0;
    }
    else{
        aceleracaodeltavt.value = parseInt(deltavaceleracao.value) / parseInt(deltataceleracao.value);
    }
}

function forcar(){
    forcaresultante.value = parseInt(massadafr.value) * parseInt(aceleracaodafr.value);
}

function mudar (objeto, imagem){
    lampada.src = imagem;
}

function outro (objeto, imagem){
    lampada2.src = imagem;
}

function trocar (objeto, imagem){
    lampada3.src = imagem;
}


