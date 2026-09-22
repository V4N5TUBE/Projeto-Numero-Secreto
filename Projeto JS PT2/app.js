// Armazena os números que já foram sorteados
let listaDeNumerosSorteados = [];

// Define o maior número possível
let numeroLimite = 10;

// Gera o primeiro número secreto
let numeroSecreto = gerarNumeroAleatorio();

// Contador de tentativas
let tentativas = 1;


// Exibe um texto em um elemento HTML e faz a leitura em voz alta
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

    responsiveVoice.speak(
        texto,
        "Brazilian Portuguese Female",
        { rate: 1.2, pitch: 1.0 }
    );
}


// Exibe as mensagens iniciais do jogo
function mensagemInicial() {
    exibirTextoNaTela("h1", "Jogo do número secreto");
    exibirTextoNaTela("p", "Escolha um número entre 1 e 10");
}

mensagemInicial();


// Verifica se o número digitado é o número secreto
function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {

        // Exibe a mensagem de acerto
        exibirTextoNaTela("h1", "Acertou");

        // Define singular ou plural de acordo com as tentativas
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";

        let mensagemTentativas =
            `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;

        exibirTextoNaTela("p", mensagemTentativas);

        // Habilita o botão para iniciar um novo jogo
        document.getElementById("reiniciar").removeAttribute("disabled");

    } else {

        // Informa se o número secreto é menor ou maior
        if (chute > numeroSecreto) {
            exibirTextoNaTela("p", "O número é menor");
        } else {
            exibirTextoNaTela("p", "O número é maior");
        }

        // Aumenta o número de tentativas
        tentativas++;

        // Limpa o campo para o próximo chute
        limparCampo();
    }
}


// Gera um número aleatório que ainda não foi sorteado
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);

    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    // Reinicia a lista quando todos os números já foram sorteados
    if (quantidadeDeElementosNaLista === numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    // Se o número já saiu, sorteia novamente
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();

    } else {

        // Adiciona o novo número à lista
        listaDeNumerosSorteados.push(numeroEscolhido);

        console.log(listaDeNumerosSorteados);

        return numeroEscolhido;
    }
}


// Limpa o campo de entrada e devolve o foco para ele
function limparCampo() {
    let chute = document.querySelector('input');

    chute.value = "";

    // Coloca o cursor novamente no campo
    chute.focus();
}


// Reinicia o jogo
function reiniciarJogo() {

    // Gera um novo número secreto
    numeroSecreto = gerarNumeroAleatorio();

    // Limpa o campo
    limparCampo();

    // Reinicia o contador
    tentativas = 1;

    // Restaura as mensagens iniciais
    mensagemInicial();

    // Desabilita o botão até o jogador acertar novamente
    document.getElementById("reiniciar").setAttribute("disabled", true);
}