// Aula 9 - Exemplo 11 (busca linear em vetor)

// Declaracao de variaveis
let entrada;
let partes;
let valores;
let procurado;
let encontrado;
let i;

// Entrada
entrada = prompt("Digite os valores separados por espaco:"); // 12 45 7 89 23
procurado = parseInt(prompt("Digite o valor procurado:")); // 7

// Processamento
partes = entrada.split(" ");
valores = [];
encontrado = false;

for (i = 0; i < partes.length; i++) {
  valores[i] = parseInt(partes[i]);
}

for (i = 0; i < valores.length; i++) {
  if (valores[i] === procurado) {
    encontrado = true;
  }
}

// Saida
if (encontrado) {
  console.log("Valor encontrado");
} else {
  console.log("Valor nao encontrado");
}
