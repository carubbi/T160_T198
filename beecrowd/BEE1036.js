// Declarar as variáveis
let entradaA;
let entradaB;
let entradaC;
let A;
let B;
let C;
let delta;
let R1;
let R2;
let raizDelta;

// Entrada de dados
entradaA = prompt('Digite A: ');
entradaB = prompt('Digite B: ');
entradaC = prompt('Digite C: ');

// Processamento dos dados
// Converter as entradas (string) para numérico
A = parseFloat(entradaA);
B = parseFloat(entradaB);
C = parseFloat(entradaC);

delta = (B * B) - (4 * A * C);

// Saída de dados
if ((A === 0) || (delta < 0)) {
  console.log('Impossivel calcular');
} else {
  raizDelta = delta ** (1 / 2);
  R1 = (-B + raizDelta) / (2 * A);
  R2 = (-B - raizDelta) / (2 * A);
  console.log('R1 = ' + R1.toFixed(5));
  console.log('R2 = ' + R2.toFixed(5));
}
