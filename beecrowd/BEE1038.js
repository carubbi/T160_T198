// Declarar as variáveis
let entradaCod;
let entradaQtd;
let codProd;
let qtdProd;
let precoProd;
let totalPagar;

// Entrada de dados
entradaCod = prompt('Digite o código do produto: ');
entradaQtd = prompt('Digite a quantidade do produto: ');

// Processamento dos dados
// Converter as entradas (string) para numérico
codProd = parseInt(entradaCod);
qtdProd = parseInt(entradaQtd);

// Verificar o total a pagar
if (codProd == 1) {
    precoProd = 4;
} else if (codProd == 2) {
    precoProd = 4.4;
} else if (codProd == 3) {
    precoProd = 5;
} else if (codProd == 4) {
    precoProd = 2;
} else {
    precoProd = 1.5;
}

// Calcular o total a pagar
totalPagar = qtdProd * precoProd;

// Saída de dados
console.log(`Total: R$ ${totalPagar.toFixed(2)}`);
