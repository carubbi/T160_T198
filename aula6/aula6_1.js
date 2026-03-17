// Aula 6 - Exemplo 1 (if aninhado)
// Declaracao de variaveis
let condicao1;
let condicao2;
let mensagem;

// Entrada
condicao1 = prompt("Digite o valor logico da condicao 1 (true/false):"); // true
condicao2 = prompt("Digite o valor logico da condicao 2 (true/false):"); // false

// Processamento
if (condicao1 == "true") {
  if (condicao2 == "true") {
    mensagem = "condicao1 e condicao2 sao verdadeiras";
  } else {
    mensagem = "condicao1 e verdadeira, mas condicao2 e falsa";
  }
} else {
  mensagem = "condicao1 e falsa";
}

// Saida
console.log(mensagem);
