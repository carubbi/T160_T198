// Aula 7 - Exemplo 11 (for para gerar a tabuada)
// Declaracao de variaveis
let num;
let fator;
let prod;
let tabuada;

// Entrada
num = prompt("Digite o numero da tabuada:"); // 4

// Processamento
num = parseInt(num);
tabuada = "";

for (fator = 1; fator <= 10; fator++) {
  prod = num * fator;
  tabuada += `${num} x ${fator} = ${prod}\n`;
}

// Saida
console.log(tabuada);
