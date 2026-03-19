// Declarar as variáveis
let entradaX;
let entradaY;
let x;
let y;
let mensagem;

// Entrada de dados
entradaX = prompt('Digite X: ');
entradaY = prompt('Digite Y: ');

// Processamento dos dados
// Converter as entradas (string) para numérico
x = parseFloat(entradaX);
y = parseFloat(entradaY);

// Verificar a posição do ponto (x, y) e atribuir a mensagem correspondente
if (x === 0 && y === 0) {
  mensagem = 'Origem';
} else if (x === 0) {
  mensagem = 'Eixo Y';
} else if (y === 0) {
  mensagem = 'Eixo X';
} else if (x > 0 && y > 0) {
  mensagem = 'Q1';
} else if (x < 0 && y > 0) {
  mensagem = 'Q2';
} else if (x < 0 && y < 0) {
  mensagem = 'Q3';
} else {
  mensagem = 'Q4';
}

// Saída de dados
console.log(mensagem);
