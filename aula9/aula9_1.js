// Aula 9 - Exemplo 1 (array dinamico por indice)

// Declaracao de variaveis
let valores;
let i;

// Processamento
valores = [];

for (i = 0; i < 3; i++) {
  valores[i] = i + 1;
}

// Saida
for (i = 0; i < valores.length; i++) {
  console.log(valores[i]);
}
