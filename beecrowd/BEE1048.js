// Declarar as variáveis
let entradaSalario;
let salario;
let percentual;
let reajuste;
let novoSalario;

// Entrada de dados
entradaSalario = prompt('Digite o salario: ');

// Processamento dos dados
salario = parseFloat(entradaSalario);

if (salario <= 400.00) {
  percentual = 15;
} else if (salario <= 800.00) {
  percentual = 12;
} else if (salario <= 1200.00) {
  percentual = 10;
} else if (salario <= 2000.00) {
  percentual = 7;
} else {
  percentual = 4;
}

reajuste = salario * (percentual / 100);
novoSalario = salario + reajuste;

// Saída de dados
console.log('Novo salario: ' + novoSalario.toFixed(2));
console.log('Reajuste ganho: ' + reajuste.toFixed(2));
console.log('Em percentual: ' + percentual + ' %');
