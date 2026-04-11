// Declarar as variáveis
let entradaDistancia;
let distancia;

function pontuacao(distancia) {
  if (distancia <= 800) {
    return 1;
  } else if (distancia <= 1400) {
    return 2;
  } else {
    return 3;
  }
}

// Entrada de dados
entradaDistancia = prompt('Digite a distancia: ');

// Processamento dos dados
distancia = parseInt(entradaDistancia);

// Saída de dados
console.log(pontuacao(distancia));
