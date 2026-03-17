// Aula 6 - Exemplo 5 (media do aluno com validacao)
// Declaracao de variaveis
let alunoNota1;
let alunoNota2;
let alunoMedia;
let situacaoAluno;
let mensagem;

// Entrada
alunoNota1 = prompt("Digite a nota 1 do aluno:"); // 7.0
alunoNota2 = prompt("Digite a nota 2 do aluno:"); // 4.0

// Processamento
alunoNota1 = parseFloat(alunoNota1);
alunoNota2 = parseFloat(alunoNota2);

if (alunoNota1 >= 0 && alunoNota2 >= 0) {
  alunoMedia = (alunoNota1 + alunoNota2) / 2;

  if (alunoMedia >= 5) {
    situacaoAluno = "aprovado!";
  } else {
    situacaoAluno = "reprovado!";
  }

  mensagem = `Media: ${alunoMedia}. O aluno esta ${situacaoAluno}`;
} else {
  mensagem = "A nota deve ser maior ou igual a zero!";
}

// Saida
console.log(mensagem);
