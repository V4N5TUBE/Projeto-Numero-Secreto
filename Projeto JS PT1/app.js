// Exibe a mensagem inicial do jogo
alert("Boas-vindas ao jogo do Numero Secreto");

// Define o maior número possível
let numeroMaximo = 5000;

// Gera um número secreto aleatório
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);

// Mostra o número secreto no console para testes
console.log(numeroSecreto);

// Armazena o chute do jogador
let chute;

// Contador de tentativas
let tentativas = 1;


// Continua enquanto o jogador não acertar
while (chute != numeroSecreto) {

    // Solicita um número ao jogador
    chute = prompt(`Escolha o numero entre 1 e ${numeroMaximo}`);

    // Verifica se o jogador acertou
    if (chute == numeroSecreto) {
        break;

    } else {

        // Informa se o número secreto é menor
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);

        // Informa se o número secreto é maior
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }

        // Adiciona uma tentativa
        tentativas++;
    }
}


// Define singular ou plural de "tentativa"
let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";

// Exibe o resultado final
alert(
    `Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`
);