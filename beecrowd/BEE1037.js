// Declarar as variáveis
let entradaValor;
let valor;
let mensagem;

// Entrada de dados
entradaValor = prompt('Digite o valor: ');

// Processamento dos dados
// Converter a entrada para um número de ponto flutuante
valor = parseFloat(entradaValor);

// Verificar o intervalo do valor e atribuir a mensagem correspondente
if (valor < 0 || valor > 100) {
  mensagem = `Fora de intervalo`;
} else if (valor <= 25) {
  mensagem = `Intervalo [0,25]`;
} else if (valor <= 50) {
  mensagem = `Intervalo (25,50]`;
} else if (valor <= 75) {
  mensagem = `Intervalo (50,75]`;
} else {
  mensagem = `Intervalo (75,100]`;
}

// Saída de dados
console.log(mensagem);
