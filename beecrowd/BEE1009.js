// Declarar as variáveis
let nome;
let entradaSalario;
let entradaVendas;
let salarioFixo;
let vendas;
let total;

// Entrada de dados
nome = prompt('Digite o nome: ');
entradaSalario = prompt('Digite o salario fixo: ');
entradaVendas = prompt('Digite o total de vendas: ');

// Processamento dos dados
salarioFixo = parseFloat(entradaSalario);
vendas = parseFloat(entradaVendas);

total = salarioFixo + (vendas * 0.15);

// Saída de dados
console.log('TOTAL = R$ ' + total.toFixed(2));
