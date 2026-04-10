// Declarar as variáveis
let codigo;
let alcool;
let gasolina;
let diesel;

// Inicialização
alcool = 0;
gasolina = 0;
diesel = 0;

// Entrada e processamento dos dados
while (true) {
  codigo = parseInt(prompt('Digite o codigo: '));

  if (codigo === 1) {
    alcool++;
  } else if (codigo === 2) {
    gasolina++;
  } else if (codigo === 3) {
    diesel++;
  } else if (codigo === 4) {
    break;
  }
}

// Saída de dados
console.log('MUITO OBRIGADO');
console.log(`Alcool: ${alcool}`);
console.log(`Gasolina: ${gasolina}`);
console.log(`Diesel: ${diesel}`);
