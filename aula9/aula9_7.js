// Aula 9 - Exemplo 7 (split com espaco)

// Declaracao de variaveis
let entrada;
let partes;
let numeros;
let i;

// Entrada
entrada = prompt("Digite as notas separadas por espaco:"); // 8.5 7.0 9.2 6.5 10.0

// Processamento
partes = entrada.split(" ");
numeros = [];

for (i = 0; i < partes.length; i++) {
  numeros[i] = parseFloat(partes[i]);
}

// Saida
for (i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}
