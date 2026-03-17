// Aula 6 - Exemplo 12 (validacao com expressao logica unica)
// Declaracao de variaveis
let nota;
let mensagem;

// Entrada
nota = prompt("Digite a nota:"); // 8

// Processamento
nota = parseFloat(nota);

if (nota >= 0 && nota <= 10) {
  mensagem = "Nota valida";
} else {
  mensagem = "Nota invalida";
}

// Saida
console.log(mensagem);
