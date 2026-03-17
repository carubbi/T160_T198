// Aula 6 - Exemplo 7 (faixa de desempenho)
// Declaracao de variaveis
let nota1;
let nota2;
let media;
let resultado;

// Entrada
nota1 = prompt("Digite a nota 1:"); // 8.0
nota2 = prompt("Digite a nota 2:"); // 6.0

// Processamento
nota1 = parseFloat(nota1);
nota2 = parseFloat(nota2);

if (nota1 >= 0 && nota2 >= 0) {
  media = (nota1 + nota2) / 2;

  if (media >= 7) {
    resultado = "Aluno aprovado com bom desempenho.";
  } else {
    if (media >= 5) {
      resultado = "Aluno aprovado.";
    } else {
      resultado = "Aluno reprovado.";
    }
  }
} else {
  resultado = "Notas invalidas.";
}

// Saida
console.log(resultado);
