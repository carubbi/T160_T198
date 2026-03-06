// Declarar as variáveis
let entradaTempo;
let tempo;
let horas;
let minutos;
let segundos;
let resto;

// Entrada de dados
entradaTempo = prompt('Digite o tempo em segundos: ');

// Processamento dos dados
tempo = parseInt(entradaTempo);

horas = parseInt(tempo / 3600);
resto = tempo % 3600;
minutos = parseInt(resto / 60);
segundos = resto % 60;

// Saída de dados
console.log(horas + ':' + minutos + ':' + segundos);
