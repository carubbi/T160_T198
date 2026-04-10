// Declarar as variáveis
let x;
let y;

// Entrada, processamento e saída de dados
while (true) {
  x = parseInt(prompt('Digite X: '));
  y = parseInt(prompt('Digite Y: '));

  if (x === y) {
    break;
  }

  if (x < y) {
    console.log('Crescente');
  } else {
    console.log('Decrescente');
  }
}
