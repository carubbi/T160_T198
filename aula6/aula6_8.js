// Aula 6 - Exemplo 8 (switch com if aninhado)
// Declaracao de variaveis
let perfil;
let matriculaAtiva;
let valorCurso;
let valorFinal;
let mensagem;

// Entrada
perfil = prompt("Digite o perfil do usuario: "); // aluno
matriculaAtiva = prompt("A matricula esta ativa? (true/false): "); // true
valorCurso = prompt("Digite o valor do curso: "); // 1200

// Processamento
valorCurso = parseFloat(valorCurso);

switch (perfil) {
  case "aluno":
    if (matriculaAtiva == "true") {
      valorFinal = valorCurso * 0.8;
    } else {
      valorFinal = valorCurso;
    }
    break;

  case "professor":
    valorFinal = valorCurso * 0.7;
    break;

  case "visitante":
    valorFinal = valorCurso * 1.0;
    break;

  default:
    valorFinal = -1;
}

// Saida
if (valorFinal == -1) {
  console.log("Perfil invalido.");
} else {
  console.log(`R$ ${valorFinal.toFixed(2)}`);
}
