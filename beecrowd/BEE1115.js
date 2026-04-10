// Declarar as variáveis
let x;
let y;

// Entrada, processamento e saída de dados
while (true) {
  x = parseInt(prompt('Digite X: '));
  y = parseInt(prompt('Digite Y: '));

  if (x === 0 || y === 0) {
    break;
  }

  if (x > 0 && y > 0) {
    console.log('primeiro');
  } else if (x < 0 && y > 0) {
    console.log('segundo');
  } else if (x < 0 && y < 0) {
    console.log('terceiro');
  } else {
    console.log('quarto');
  }
}
