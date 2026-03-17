// Aula 7 - Exemplo 6 (do...while para pedir um numero positivo)
// Declaracao de variaveis
let num;

// Entrada
num = prompt("Digite um numero positivo:"); // -2

// Processamento
num = parseInt(num);

do {
  if (num <= 0) {
    num = prompt("Digite um numero positivo:"); // 0, 5
    num = parseInt(num);
  }
} while (num <= 0);

// Saida
console.log("Numero valido");
