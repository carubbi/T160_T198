// Aula 6 - Exemplo 11 (validacao com if aninhado)
// Declaracao de variaveis
let nota;
let mensagem;

// Entrada
nota = prompt("Digite a nota:"); // 8

// Processamento
nota = parseFloat(nota);

if (nota >= 0) {
  if (nota <= 10) {
    mensagem = "Nota valida";
  } else {
    mensagem = "Nota invalida";
  }
} else {
  mensagem = "Nota invalida";
}

// Saida
console.log(mensagem);
