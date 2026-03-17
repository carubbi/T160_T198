// Aula 7 - Exemplo 4 (while para pedir numeros ate digitar 0)
// Declaracao de variaveis
let num;
let soma;

// Entrada
num = prompt("Digite um numero (0 para encerrar):"); // 5

// Processamento
num = parseInt(num);
soma = 0;

while (num != 0) {
  soma += num;
  num = prompt("Digite um numero (0 para encerrar):"); // 3, 2, 0
  num = parseInt(num);
}

// Saida
console.log(soma);
