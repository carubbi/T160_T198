// Aula 7 - Exemplo 7 (do...while para pedir nota ate ela estar valida)
// Declaracao de variaveis
let nota;

// Entrada
nota = prompt("Digite uma nota de 0 a 10:"); // 12

// Processamento
nota = parseFloat(nota);

do {
  if (nota < 0 || nota > 10) {
    console.log("Nota invalida");
    nota = prompt("Nota invalida. Digite uma nota de 0 a 10:"); // -1, 8
    nota = parseFloat(nota);
  }
} while (nota < 0 || nota > 10);

// Saida
console.log(`Nota valida: ${nota}`);
