// Declarar as variáveis
let entradaTempo;
let entradaVelocidade;
let tempo;
let velocidade;
let litros;

// Entrada de dados
entradaTempo = prompt('Digite o tempo gasto: ');
entradaVelocidade = prompt('Digite a velocidade media: ');

// Processamento dos dados
tempo = parseInt(entradaTempo);
velocidade = parseInt(entradaVelocidade);
litros = (tempo * velocidade) / 12;

// Saída de dados
console.log(litros.toFixed(3));
