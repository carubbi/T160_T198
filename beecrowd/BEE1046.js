// Declarar as variáveis
let entradaInicio;
let entradaFim;
let inicio;
let fim;
let duracao;

// Entrada de dados
entradaInicio = prompt('Digite a hora inicial: ');
entradaFim = prompt('Digite a hora final: ');

// Processamento dos dados
inicio = parseInt(entradaInicio);
fim = parseInt(entradaFim);

if (inicio < fim) {
  duracao = fim - inicio;
} else {
  duracao = (24 - inicio) + fim;
}

// Saída de dados
console.log('O JOGO DUROU ' + duracao + ' HORA(S)');
