// Declarar as variáveis
let entradaNumero;
let entradaHoras;
let entradaValorHora;
let numero;
let horas;
let valorHora;
let salario;

// Entrada de dados
entradaNumero = prompt('Digite o numero do funcionario: ');
entradaHoras = prompt('Digite as horas trabalhadas: ');
entradaValorHora = prompt('Digite o valor por hora: ');

// Processamento dos dados
numero = parseInt(entradaNumero);
horas = parseInt(entradaHoras);
valorHora = parseFloat(entradaValorHora);

salario = horas * valorHora;

// Saída de dados
console.log('NUMBER = ' + numero);
console.log('SALARY = U$ ' + salario.toFixed(2));
