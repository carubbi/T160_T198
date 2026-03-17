// Aula 7 - Exemplo 3 (while para pedir senha ate acertar)
// Declaracao de variaveis
let senha;
let mensagem;

// Entrada
senha = prompt("Digite a senha:"); // 1111

// Processamento

while (senha != "1234") {
  senha = prompt("Digite a senha:"); // 9999, 1234
}

mensagem = "Acesso liberado";

// Saida
console.log(mensagem);
