// Aula 6 - Exemplo 4 (comparacao com estrutura aninhada)
// Declaracao de variaveis
let condicao1;
let condicao2;
let mensagem;

// Entrada
condicao1 = prompt("Digite o valor logico da condicao 1 (true/false):"); // true
condicao2 = prompt("Digite o valor logico da condicao 2 (true/false):"); // true

// Processamento
if (condicao1 == "true") {
  if (condicao2 == "true") {
    mensagem = "caminho mais especifico";
  } else {
    mensagem = "outro resultado especifico";
  }
} else {
  mensagem = "tratamento alternativo";
}

// Saida
console.log(mensagem);
