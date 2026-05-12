// Aula 9 - Exemplo 10 (maior valor e posicao usando vetor)

// Declaracao de variaveis
let entrada;
let partes;
let valores;
let maior;
let posicao;
let i;

// Entrada
entrada = prompt("Digite os valores separados por espaco:"); // 12 45 7 89 23

// Processamento
partes = entrada.split(" ");
valores = [];

for (i = 0; i < partes.length; i++) {
  valores[i] = parseInt(partes[i]);
}

maior = valores[0];
posicao = 0;

for (i = 1; i < valores.length; i++) {
  if (valores[i] > maior) {
    maior = valores[i];
    posicao = i;
  }
}

// Saida
console.log("Maior valor: " + maior);
console.log("Indice: " + posicao);
console.log("Ordem de entrada: " + (posicao + 1));
