// Aula 7 - Exemplo 8 (do...while para mostrar menu ate escolher sair)
// Declaracao de variaveis
let opcao;
let mensagem;

// Entrada
opcao = prompt("Digite uma opcao de 1 a 3 (0 para sair):"); // 2

// Processamento
do {
  if (opcao == "1") {
    mensagem = "Opcao 1 escolhida";
  } else if (opcao == "2") {
    mensagem = "Opcao 2 escolhida";
  } else if (opcao == "3") {
    mensagem = "Opcao 3 escolhida";
  } else if (opcao == "0") {
    mensagem = "Encerrar menu";
  } else {
    mensagem = "Opcao invalida";
  }

  if (opcao != "0") {
    opcao = prompt("Digite uma opcao de 1 a 3 (0 para sair):"); // 5, 0
  }
} while (opcao != "0");

// Saida
console.log(mensagem);
