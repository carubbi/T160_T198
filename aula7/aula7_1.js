// Aula 7 - Exemplo 1 (while basico com contador)
// Declaracao de variaveis
let i;
let quantidade;

// Entrada
quantidade = prompt("Digite a quantidade de iteracoes:"); // 3

// Processamento
i = 0;
quantidade = parseInt(quantidade);

while (i < quantidade) {
  console.log(i);
  i++;
}
