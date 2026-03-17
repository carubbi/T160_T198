// Aula 7 - Estruturas de repeticao

console.log('=== 1) while: basico com contador ===');
let i = 0;
let quantidadeIteracoesWhile = 3;
while (i < quantidadeIteracoesWhile) {
  console.log(i);
  i++;
}

console.log('\n=== 2) while: pedir numero positivo ===');
let num = -3;
while (num <= 0) {
  num = num === -3 ? 0 : 7;
}
console.log('Numero valido');

console.log('\n=== 3) while: pedir senha ate acertar ===');
let senha = '1111';
let mensagem = '';
while (senha !== '1234') {
  mensagem += 'Senha incorreta\n';
  senha = senha === '1111' ? '9999' : '1234';
}
mensagem += 'Acesso liberado';
console.log(mensagem);

console.log('\n=== 4) while: somar ate digitar 0 ===');
let entrada = 5;
let soma = 0;
while (entrada !== 0) {
  soma += entrada;
  if (entrada === 5) {
    entrada = 3;
  } else if (entrada === 3) {
    entrada = 2;
  } else {
    entrada = 0;
  }
}
console.log(soma);

console.log('\n=== 5) do...while: basico com contador ===');
i = 0;
do {
  console.log(i);
  i++;
} while (i < 3);

console.log('\n=== 6) do...while: pedir numero positivo ===');
num = -2;
do {
  if (num <= 0) {
    num = num === -2 ? 0 : 5;
  }
} while (num <= 0);
console.log('Numero valido');

console.log('\n=== 7) do...while: validar nota ===');
let nota = 12;
do {
  if (nota < 0 || nota > 10) {
    nota = nota === 12 ? -1 : 8;
  }
} while (nota < 0 || nota > 10);
console.log(`Nota valida: ${nota}`);

console.log('\n=== 8) do...while: menu ===');
let opcao = '2';
mensagem = '';
do {
  if (opcao === '1') {
    mensagem += 'Opcao 1 escolhida\n';
  } else if (opcao === '2') {
    mensagem += 'Opcao 2 escolhida\n';
  } else if (opcao === '3') {
    mensagem += 'Opcao 3 escolhida\n';
  } else if (opcao === '0') {
    mensagem += 'Encerrar menu\n';
  } else {
    mensagem += 'Opcao invalida\n';
  }

  if (opcao !== '0') {
    opcao = opcao === '2' ? '5' : '0';
  }
} while (opcao !== '0');
console.log(mensagem);

console.log('\n=== 9) for: basico com contador ===');
let quantidadeIteracoes = 3;
for (i = 0; i < quantidadeIteracoes; i++) {
  console.log(i);
}

console.log('\n=== 10) for: contar de 0 ate um limite ===');
let limite = 3;
mensagem = '';
for (i = 0; i <= limite; i++) {
  mensagem += `${i}\n`;
}
console.log(mensagem);

console.log('\n=== 11) for: tabuada ===');
num = 4;
let fator;
let prod;
let tabuada = '';
for (fator = 1; fator <= 10; fator++) {
  prod = num * fator;
  tabuada += `${num} x ${fator} = ${prod}\n`;
}
console.log(tabuada);

console.log('\n=== 12) for: somar n numeros ===');
let quantidade = 3;
soma = 0;
for (i = 1; i <= quantidade; i++) {
  if (i === 1) {
    num = 10;
  } else if (i === 2) {
    num = 20;
  } else {
    num = 5;
  }
  soma += num;
}
console.log(soma);
