// Aula 7 - Exemplo 2 (while para pedir um numero positivo)
// Declaracao de variaveis
let num;

// Entrada
num = prompt("Digite um numero positivo:"); // -3

// Processamento
num = parseInt(num);

while (num <= 0) {
  num = prompt("Digite um numero positivo:"); // 0, 7
  num = parseInt(num);
}

// Saida
console.log("Numero valido");
