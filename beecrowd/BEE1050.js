// Declarar as variáveis
let entradaDD;
let DDD;
let cidade;

// Entrada de dados
entradaDD = prompt('Digite o DDD: ');

// Processamento dos dados
// Converter as entradas (string) para numérico
DDD = parseInt(entradaDD);

// Verificar o DDD e definir a cidade
switch (DDD) {
    case 61:
        cidade = 'Brasilia';
        break;
    case 71:
       cidade = 'Salvador';
        break;
    case 11:
        cidade = 'Sao Paulo';
        break;
    case 21:
        cidade = 'Rio de Janeiro';
        break;
    case 32:
        cidade = 'Juiz de Fora';
        break;
    case 19:
        cidade = 'Campinas';
        break;
    case 27:
        cidade = 'Vitoria';
        break;
    case 31:
        cidade = 'Belo Horizonte';
        break;
    default:
        cidade = 'nao cadastrada';
}

// Saída de dados
console.log(cidade);
