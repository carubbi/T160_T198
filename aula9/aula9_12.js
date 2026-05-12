// Aula 9 - Exemplo 12 (Beecrowd 1018 - Cedulas)
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim();

// Declaracao de variaveis
let valor;
let cedulas;
let quantidade;
let i;

// Entrada
valor = parseInt(input);

// Processamento
cedulas = [100, 50, 20, 10, 5, 2, 1];

// Saida exigida pelo problema: valor original
console.log(valor);

for (i = 0; i < cedulas.length; i++) {
  quantidade = parseInt(valor / cedulas[i]);
  valor = valor % cedulas[i];

  console.log(quantidade + " nota(s) de R$ " + cedulas[i] + ",00");
}
