// Função para incluir o nome do usuário
function inclui_nome() { 
    // Verifica se o usuário inseriu um nome
    var nome_variavel = prompt("Coloque seu nome:");
    // Exibe o nome na página
    if(nome_variavel){
        document.getElementById("marcacao_nome").innerHTML = nome_variavel;
    }
     // Alerta o usuário e pede para preencher o nome novamente
    else{
        alert("Nome não atribuido, preencha o nome.");
        inclui_nome();
    }
} 
// Função para processar as respostas do formulário
function funcao_resposta(){
    // Obtém as respostas do formulário
    var resp1 = document.querySelector('input[name="quest_1"]:checked');
    var resp2 = document.querySelector('input[name="quest_2"]:checked');
    var resp3 = document.querySelector('input[name="quest_3"]:checked');
    var resp4 = document.querySelector('input[name="quest_4"]:checked');

    var contador = 0;// Inicializa um contador de respostas corretas

  // Verifica se todas as questões foram respondidas
if(resp1 && resp2 && resp3 && resp4){
   
    if(resp1.value == "correta"){
        document.getElementById("resp_correta_1").innerHTML = "Correta!"
        contador = contador + 1;
        }
    
     // Repita o mesmo processo para as outras questões (resp2, resp3, resp4 e assim por diante)...
    else{
        document.getElementById("resp_errada_1").innerHTML = "Errada. A primeira afirmativa é verdadeira pois aceleração é nula porque não há variação na marcação da velocidade feita pelo velocímetro. Se não há variação de velocidade, não há aceleração; A segunda afirmativa é verdadeira pois a força é resultado do produto da massa pela aceleração. Se a aceleração é nula, a resultante das forças que atuam sobre o veículo também é nula; A terceira afirmativa é falsa pois não há vetor força resultante, uma vez que a força é nula."
    }
    if(resp2.value == "correta"){
        document.getElementById("resp_correta_2").innerHTML = "Correta!"
        contador = contador + 1;
    }
    else{
        document.getElementById("resp_errada_2").innerHTML = "Errada. Uma vez que o corpo desliza com velocidade constante, a aceleração sobre ele é nula, portanto a força resultante sobre esse corpo também é nula. A alternativa correta é a letra B."

    }
    if(resp3.value == "correta"){
        document.getElementById("resp_correta_3").innerHTML = "Correta!"
        contador = contador + 1;
    }
    else{
        document.getElementById("resp_errada_3").innerHTML = "Errada. A soma das forças que atuam sobre o livro é nula, e a tendência do corpo é manter o movimento. A situação do livro é de equilíbrio dinâmico. A alternativa correta é a letra A."

    }
    if(resp4.value == "correta"){
        document.getElementById("resp_correta_4").innerHTML = "Correta!"
        contador = contador + 1;
    }
    else{
        document.getElementById("resp_errada_4").innerHTML = "Errada, pois uma vez que as duas forças são perpendiculares entre si, é necessário calcular o módulo da força resultante por meio do Teorema de Pitágoras. Depois disso, podemos aplicar o resultado obtido à 2ª lei de Newton. A alternativa correta é a letra A."

    }
    if(resp1.value == "correta"){
        document.getElementById("resp_correta_5").innerHTML = "Correta!"
        contador = contador + 1;
    }
    else{
        document.getElementById("resp_errada_5").innerHTML = "Errada, pois conforme a primeira lei de Newton, os corpos possuem a tendência de manter suas trajetórias em movimento retilíneo uniforme devido sua inércia. A alternativa correta é a letra E. "

    }
    if(resp1.value == "correta"){
        document.getElementById("resp_correta_6").innerHTML = "Correta!"
        contador = contador + 1;
    }
    else{
        document.getElementById("resp_errada_6").innerHTML = "Errada, pois a terceira lei de Newton, conhecida como lei da ação e reação, afirma que, para toda força de ação que é aplicada a um corpo, surge uma força de reação em um corpo diferente. Essa força de reação tem a mesma intensidade da força de ação e atua na mesma direção, mas com sentido oposto. A alternativa correta é a letra E."

    }
    if(resp1.value == "correta"){
        document.getElementById("resp_correta_7").innerHTML = "Correta!"
        contador = contador + 1;
    }
    else{
        document.getElementById("resp_errada_7").innerHTML = "Errada. A força peso é definida como o produto da massa pela gravidade. Sendo assim, podemos escrever que o peso do objeto na lua é: m = 30 kg. A massa independe da gravidade, assim, a massa do objeto na Terra também é de 30 kg. O peso do objeto na Terra é, portanto: P = 300 N. A alternativa correta é a letra B."
    }
    if(resp1.value == "correta"){
        document.getElementById("resp_correta_8").innerHTML = "Correta!"
        contador = contador + 1;
    }
    else{
        document.getElementById("resp_errada_8").innerHTML = "Errada, pois sendo a inércia do segundo corpo quatro vezes menor que a do primeiro corpo, podemos afirmar, com base na 2ª lei de Newton, que a aceleração obtida por esse corpo será quatro vezes maior que aquela desenvolvida pelo corpo 1. A alternativa é a letra A."

    }
    if(resp1.value == "correta"){
        document.getElementById("resp_correta_9").innerHTML = "Correta!"
        contador = contador + 1;
    }
    else{
        document.getElementById("resp_errada_9").innerHTML = "Errada, pois por serem elásticos, os para-choques modernos prolongam o tempo das colisões, que, por sua vez, diminuem a aceleração sofrida pelos passageiros, já que tal grandeza é inversamente proporcional ao tempo em que uma colisão ocorre. A alternativa é a letra A."

    }
    if(resp1.value == "correta"){
        document.getElementById("resp_correta_10").innerHTML = "Correta!"
        contador = contador + 1;
    }
    else{
        document.getElementById("resp_errada_10").innerHTML = "Errada. I) Correta; II) Incorreta: as forças são iguais; III) Incorreta: o tempo de atuação das forças é igual; IV) Incorreta: a força aplicada pela bola no rosto é a ação. A alternativa correta é a letra A."

    }
    // Exibe o número de respostas corretas
    document.getElementById("quantos_acertos").innerHTML = "Você acertou " + contador + " questões!";
}
    // Alerta se alguma questão não foi respondida
    else{
        alert("não deixe questões em branco!");
    }
}
// Funções para realizar cálculos de soma, subtração, multiplicação e divisão
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
    // Verifica se o divisor é zero
    if(aram2.value == 0){
        alert("Não é possível dividir por zero.");
        aram1.value = 0;
    }
    else{
        fernanda.value = parseInt(aram1.value) / parseInt(aram2.value);
    }
}
// Função para calcular a aceleração
function calcular(){
    if(massa.value == 0){
        alert("Não é possível dividir por zero.");
        forca.value = 0;
    }
    else{
        aceleracao.value = parseInt(forca.value) / parseInt(massa.value);
    }
    
}
// Funções para calcular a variação de velocidade e a variação de tempo
function variacaov(){
    deltavelocidade.value = parseInt(deltav.value) - parseInt(deltav2.value);
}
function variacaot(){
    deltatempo.value = parseInt(deltat.value) - parseInt(deltat2.value);
}
// Função para calcular a aceleração com base em cálculos anteriores
function calcularaceleracao(){
    if(deltataceleracao.value == 0){
        alert("Não é possível dividir por zero.");
        deltavaceleracao.value = 0;
    }
    else{
        aceleracaodeltavt.value = parseInt(deltavaceleracao.value) / parseInt(deltataceleracao.value);
    }
}
// Função para calcular a força resultante
function forcar(){
    forcaresultante.value = parseInt(massadafr.value) * parseInt(aceleracaodafr.value);
}
// Funções para trocar imagens dinamicamente
function mudar (objeto, imagem){
    lampada.src = imagem;
}

function outro (objeto, imagem){
    lampada2.src = imagem;
}

function trocar (objeto, imagem){
    lampada3.src = imagem;
}


