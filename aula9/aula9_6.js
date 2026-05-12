// Aula 9 - Exemplo 6 (preenchimento com varios prompt)

// Declaracao de variaveis
let notas;
let entrada;
let i;

// Processamento
notas = [];

// Entrada e preenchimento do vetor
for (i = 0; i < 5; i++) {
  entrada = prompt("Digite uma nota:"); // 8.5, 7.0, 9.2, 6.5, 10.0
  notas[i] = parseFloat(entrada);
}

// Saida
for (i = 0; i < notas.length; i++) {
  console.log(notas[i]);
}
