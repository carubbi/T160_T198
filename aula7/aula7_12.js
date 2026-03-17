// Aula 7 - Exemplo 12 (for para somar n numeros)
// Declaracao de variaveis
let quantidade;
let i;
let num;
let soma;

// Entrada
quantidade = prompt("Digite quantos numeros deseja somar:"); // 3

// Processamento
quantidade = parseInt(quantidade);
soma = 0;

for (i = 1; i <= quantidade; i++) {
  num = prompt(`Digite o ${i}o numero:`); // 10, 20, 5
  num = parseInt(num);
  soma += num;
}

// Saida
console.log(soma);
