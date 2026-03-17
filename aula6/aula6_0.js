// Aula 6 - Estruturas condicionais aninhadas

console.log('=== 1) if dentro de if ===');
let condicao1 = true;
let condicao2 = false;
let mensagem;

if (condicao1) {
  if (condicao2) {
    mensagem = 'condicao1 e condicao2 sao verdadeiras';
  } else {
    mensagem = 'condicao1 e verdadeira, mas condicao2 e falsa';
  }
} else {
  mensagem = 'condicao1 e falsa';
}
console.log(mensagem);

console.log('\n=== 2) Validar antes de decidir ===');
let alunoNota1 = 7.0;
let alunoNota2 = 4.0;
let alunoMedia;
let situacaoAluno;

if (alunoNota1 >= 0 && alunoNota2 >= 0) {
  alunoMedia = (alunoNota1 + alunoNota2) / 2;

  if (alunoMedia >= 5) {
    situacaoAluno = 'aprovado!';
  } else {
    situacaoAluno = 'reprovado!';
  }

  console.log(`Media: ${alunoMedia}. O aluno esta ${situacaoAluno}`);
} else {
  console.log('A nota deve ser maior ou igual a zero!');
}

console.log('\n=== 3) Faixa de idade com validacao ===');
let idade = 16;
let anosApto;

if (idade < 0) {
  console.log('A idade deve ser maior ou igual a zero!');
} else if (idade >= 18) {
  console.log('O candidato esta apto a tirar a CNH!');
} else {
  anosApto = 18 - idade;
  console.log(`Faltam ${anosApto} ano(s) para o candidato estar apto!`);
}

console.log('\n=== 4) Classificacao progressiva ===');
let nota1 = 8.0;
let nota2 = 6.0;
let media = (nota1 + nota2) / 2;
let resultado;

if (nota1 >= 0 && nota2 >= 0) {
  if (media >= 7) {
    resultado = 'Aluno aprovado com bom desempenho.';
  } else if (media >= 5) {
    resultado = 'Aluno aprovado.';
  } else {
    resultado = 'Aluno reprovado.';
  }
} else {
  resultado = 'Notas invalidas.';
}
console.log(resultado);

console.log('\n=== 5) switch com if aninhado ===');
let perfil = 'aluno';
let matriculaAtiva = true;
let valorCurso = 1200;
let valorFinal;

switch (perfil) {
  case 'aluno':
    if (matriculaAtiva) {
      valorFinal = valorCurso * 0.8;
    } else {
      valorFinal = valorCurso;
    }
    break;
  case 'professor':
    valorFinal = valorCurso * 0.7;
    break;
  case 'visitante':
    valorFinal = valorCurso;
    break;
  default:
    valorFinal = -1;
}

if (valorFinal === -1) {
  console.log('Perfil invalido.');
} else {
  console.log(`R$ ${valorFinal.toFixed(2)}`);
}
