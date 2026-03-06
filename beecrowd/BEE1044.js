// Declarar as variáveis
let entradaA;
let entradaB;
let A;
let B;

// Entrada de dados
entradaA = prompt('Digite A: ');
entradaB = prompt('Digite B: ');

// Processamento dos dados
A = parseInt(entradaA);
B = parseInt(entradaB);

// Saída de dados
if ((A % B === 0) || (B % A === 0)) {
  console.log('Sao Multiplos');
} else {
  console.log('Nao sao Multiplos');
}
