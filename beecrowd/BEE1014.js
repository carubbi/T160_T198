// Declarar as variáveis
let entradaDistancia;
let entradaCombustivel;
let distancia;
let combustivel;
let consumo;

// Entrada de dados
entradaDistancia = prompt('Digite a distancia total: ');
entradaCombustivel = prompt('Digite o combustivel gasto: ');

// Processamento dos dados
distancia = parseInt(entradaDistancia);
combustivel = parseFloat(entradaCombustivel);
consumo = distancia / combustivel;

// Saída de dados
console.log(consumo.toFixed(3) + ' km/l');
