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
            document.getElementById("resp_errada_1").innerHTML = "Errada, é a letra C."

        }
        if(resp2.value == "correta"){
            document.getElementById("resp_correta_2").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_2").innerHTML = "Errada, pois uma vez que o corpo desliza com velocidade constante, a aceleração sobre ele é nula, portanto a força resultante sobre esse corpo também é nula. A alternativa correta é a B."

        }
        if(resp3.value == "correta"){
            document.getElementById("resp_correta_3").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_3").innerHTML = "Errada, é a Letra A. A soma das forças que atuam sobre o livro é nula, e a tendência do corpo é manter o movimento. A situação do livro é de equilíbrio dinâmico."

        }
        if(resp4.value == "correta"){
            document.getElementById("resp_correta_4").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_4").innerHTML = "Errada, pois uma vez que as duas forças são perpendiculares entre si, é necessário calcular o módulo da força resultante por meio do Teorema de Pitágoras. Depois disso, podemos aplicar o resultado obtido à 2ª lei de Newton. A alternativa correta é a letra A"

        }
        if(resp1.value == "correta"){
            document.getElementById("resp_correta_5").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_5").innerHTML = "Errada, pois Conforme a primeira lei de Newton, os corpos possuem a tendência de manter suas trajetórias em movimento retilíneo uniforme devido sua inércia. "

        }
        if(resp1.value == "correta"){
            document.getElementById("resp_correta_6").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_6").innerHTML = "Errada, pois a terceira lei de Newton, conhecida como lei da ação e reação, afirma que, para toda força de ação que é aplicada a um corpo, surge uma força de reação em um corpo diferente. Essa força de reação tem a mesma intensidade da força de ação e atua na mesma direção, mas com sentido oposto."

        }
        if(resp1.value == "correta"){
            document.getElementById("resp_correta_7").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_7").innerHTML = "Errada, pois a soma dos quadrados dos catetos é igual ao quadrada da hipotenusa!"

        }
        if(resp1.value == "correta"){
            document.getElementById("resp_correta_8").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_8").innerHTML = "Errada, pois sendo a inércia do segundo corpo quatro vezes menor que a do primeiro corpo, podemos afirmar, com base na 2ª lei de Newton, que a aceleração obtida por esse corpo será quatro vezes maior que aquela desenvolvida pelo corpo 1"

        }
        if(resp1.value == "correta"){
            document.getElementById("resp_correta_9").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_9").innerHTML = "Errada, pois por serem elásticos, os para-choques modernos prolongam o tempo das colisões, que, por sua vez, diminuem a aceleração sofrida pelos passageiros, já que tal grandeza é inversamente proporcional ao tempo em que uma colisão ocorre."

        }
        if(resp1.value == "correta"){
            document.getElementById("resp_correta_10").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_10").innerHTML = "Errada, a correta é a letra A."

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


