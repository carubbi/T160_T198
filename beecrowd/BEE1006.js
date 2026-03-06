// Declarar as variáveis
let entradaA;
let entradaB;
let entradaC;
let A;
let B;
let C;
let MEDIA;

// Entrada de dados
entradaA = prompt('Digite A: ');
entradaB = prompt('Digite B: ');
entradaC = prompt('Digite C: ');

// Processamento dos dados
A = parseFloat(entradaA);
B = parseFloat(entradaB);
C = parseFloat(entradaC);
MEDIA = ((A * 2) + (B * 3) + (C * 5)) / 10;

// Saída de dados
console.log('MEDIA = ' + MEDIA.toFixed(1));
