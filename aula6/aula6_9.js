// Aula 6 - Exemplo 9 (switch dentro de if)
// Declaracao de variaveis
let usuarioAutenticado;
let opcaoMenu;
let nota1;
let nota2;
let resultado;
let mensagem;

// Entrada
usuarioAutenticado = prompt("Usuario autenticado? (true/false)"); // true
opcaoMenu = prompt("Digite a opcao do menu:"); // 2
nota1 = prompt("Digite a nota 1:"); // 8.0
nota2 = prompt("Digite a nota 2:"); // 6.0

// Processamento
opcaoMenu = parseInt(opcaoMenu);
nota1 = parseFloat(nota1);
nota2 = parseFloat(nota2);

if (usuarioAutenticado == "true") {
  switch (opcaoMenu) {
    case 1:
      resultado = nota1 + nota2;
      mensagem = `Soma: ${resultado}`;
      break;
    case 2:
      resultado = (nota1 + nota2) / 2;
      mensagem = `Media: ${resultado}`;
      break;
    case 3:
      resultado = nota1 > nota2 ? nota1 - nota2 : nota2 - nota1;
      mensagem = `Diferenca: ${resultado}`;
      break;
    default:
      mensagem = "Opcao invalida.";
  }
} else {
  mensagem = "Usuario nao autenticado.";
}

// Saida
console.log(mensagem);
