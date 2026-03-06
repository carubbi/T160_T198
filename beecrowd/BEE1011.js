// Declarar as variáveis
let entradaRaio;
let raio;
let volume;
const PI = 3.14159;

// Entrada de dados
entradaRaio = prompt('Digite o raio: ');

// Processamento dos dados
raio = parseFloat(entradaRaio);
volume = (4.0 / 3.0) * PI * raio * raio * raio;

// Saída de dados
console.log('VOLUME = ' + volume.toFixed(3));
