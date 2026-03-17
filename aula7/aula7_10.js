// Aula 7 - Exemplo 10 (for para contar de 0 ate um limite)
// Declaracao de variaveis
let limite;
let i;
let mensagem;

// Entrada
limite = prompt("Digite o limite da contagem:"); // 3

// Processamento
limite = parseInt(limite);
mensagem = "";

for (i = 0; i <= limite; i++) {
  mensagem += `${i}\n`;
}

// Saida
console.log(mensagem);
