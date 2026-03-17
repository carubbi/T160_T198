// Aula 6 - Exemplo 10 (lanche com adicional no X-Bacon)
// Declaracao de variaveis
let codigo;
let quantidade;
let comCheddar;
let precoUnitario;
let valorTotal;
let mensagem;

// Entrada
codigo = prompt("Digite o codigo do item:"); // 3
quantidade = prompt("Digite a quantidade:"); // 2
comCheddar = prompt("Se for X-Bacon, deseja adicionar cheddar? (s/n)"); // s

// Processamento
codigo = parseInt(codigo);
quantidade = parseInt(quantidade);

if (codigo >= 1 && codigo <= 4) {
  switch (codigo) {
    case 1:
      precoUnitario = 4.0;
      break;
    case 2:
      precoUnitario = 4.5;
      break;
    case 3:
      precoUnitario = 5.0;
      if (comCheddar == "s") {
        precoUnitario = precoUnitario + 0.5;
      }
      break;
    case 4:
      precoUnitario = 2.0;
      break;
  }
} else {
  mensagem = "Codigo invalido";
}

// Saida
if (mensagem != "Codigo invalido") {
  valorTotal = precoUnitario * quantidade;
  mensagem = `Total: R$ ${valorTotal.toFixed(2)}`;
}
console.log(mensagem);
