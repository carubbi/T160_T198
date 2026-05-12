// Aula 9 - Vetores em JavaScript

console.log("=== 1) Array dinamico por indice ===");
let valores1;
let i1;

valores1 = [];

for (i1 = 0; i1 < 3; i1++) {
  valores1[i1] = i1 + 1;
}

for (i1 = 0; i1 < valores1.length; i1++) {
  console.log(valores1[i1]);
}

console.log("\n=== 2) Acesso por indice ===");
let notas2;

notas2 = [8.5, 7.0, 9.2, 6.5, 10.0];

console.log(notas2[0]);
console.log(notas2[1]);
console.log(notas2[4]);

console.log("\n=== 3) Alteracao de valor ===");
let notas3;
let i3;

notas3 = [8.5, 7.0, 9.2];
notas3[1] = 8.0;

for (i3 = 0; i3 < notas3.length; i3++) {
  console.log(notas3[i3]);
}

console.log("\n=== 4) Uso de length ===");
let notas4;
let ultimoIndice4;

notas4 = [8.5, 7.0, 9.2, 6.5, 10.0];
ultimoIndice4 = notas4.length - 1;

console.log(notas4.length);
console.log(ultimoIndice4);
console.log(notas4[ultimoIndice4]);

console.log("\n=== 5) Percurso com for ===");
let notas5;
let i5;

notas5 = [8.5, 7.0, 9.2, 6.5, 10.0];

for (i5 = 0; i5 < notas5.length; i5++) {
  console.log(notas5[i5]);
}

console.log("\n=== 6) Preenchimento com varios prompt (simulado) ===");
let notas6Prompt;
let entradas6Prompt;
let i6Prompt;

notas6Prompt = [];
entradas6Prompt = ["8.5", "7.0", "9.2", "6.5", "10.0"];

for (i6Prompt = 0; i6Prompt < entradas6Prompt.length; i6Prompt++) {
  notas6Prompt[i6Prompt] = parseFloat(entradas6Prompt[i6Prompt]);
}

for (i6Prompt = 0; i6Prompt < notas6Prompt.length; i6Prompt++) {
  console.log(notas6Prompt[i6Prompt]);
}

console.log("\n=== 7) split com espaco ===");
let entrada6;
let partes6;
let numeros6;
let i6;

entrada6 = "8.5 7.0 9.2 6.5 10.0";
partes6 = entrada6.split(" ");
numeros6 = [];

for (i6 = 0; i6 < partes6.length; i6++) {
  numeros6[i6] = parseFloat(partes6[i6]);
}

for (i6 = 0; i6 < numeros6.length; i6++) {
  console.log(numeros6[i6]);
}

console.log("\n=== 8) split com quebra de linha ===");
let entrada7;
let partes7;
let numeros7;
let i7;

entrada7 = "8.5\n7.0\n9.2\n6.5\n10.0";
partes7 = entrada7.split("\n");
numeros7 = [];

for (i7 = 0; i7 < partes7.length; i7++) {
  numeros7[i7] = parseFloat(partes7[i7]);
}

for (i7 = 0; i7 < numeros7.length; i7++) {
  console.log(numeros7[i7]);
}

console.log("\n=== 9) Soma e media ===");
let entrada8;
let partes8;
let notas8;
let soma8;
let media8;
let i8;

entrada8 = "8.5\n7.0\n9.2\n6.5\n10.0";
partes8 = entrada8.split("\n");
notas8 = [];
soma8 = 0;

for (i8 = 0; i8 < partes8.length; i8++) {
  notas8[i8] = parseFloat(partes8[i8]);
}

for (i8 = 0; i8 < notas8.length; i8++) {
  soma8 = soma8 + notas8[i8];
}

media8 = soma8 / notas8.length;

console.log("Soma: " + soma8);
console.log("Media: " + media8);

console.log("\n=== 10) Maior valor e posicao ===");
let entrada9;
let partes9;
let valores9;
let maior9;
let posicao9;
let i9;

entrada9 = "12 45 7 89 23";
partes9 = entrada9.split(" ");
valores9 = [];

for (i9 = 0; i9 < partes9.length; i9++) {
  valores9[i9] = parseInt(partes9[i9]);
}

maior9 = valores9[0];
posicao9 = 0;

for (i9 = 1; i9 < valores9.length; i9++) {
  if (valores9[i9] > maior9) {
    maior9 = valores9[i9];
    posicao9 = i9;
  }
}

console.log("Maior valor: " + maior9);
console.log("Indice: " + posicao9);
console.log("Ordem de entrada: " + (posicao9 + 1));

console.log("\n=== 11) Busca linear ===");
let entrada10;
let partes10;
let valores10;
let procurado10;
let encontrado10;
let i10;

entrada10 = "12 45 7 89 23";
procurado10 = 7;
partes10 = entrada10.split(" ");
valores10 = [];
encontrado10 = false;

for (i10 = 0; i10 < partes10.length; i10++) {
  valores10[i10] = parseInt(partes10[i10]);
}

for (i10 = 0; i10 < valores10.length; i10++) {
  if (valores10[i10] === procurado10) {
    encontrado10 = true;
  }
}

if (encontrado10) {
  console.log("Valor encontrado");
} else {
  console.log("Valor nao encontrado");
}

console.log("\n=== 12) Beecrowd 1018 - Cedulas ===");
let valor11;
let cedulas11;
let quantidade11;
let i11;

valor11 = 576;
cedulas11 = [100, 50, 20, 10, 5, 2, 1];

console.log(valor11);

for (i11 = 0; i11 < cedulas11.length; i11++) {
  quantidade11 = parseInt(valor11 / cedulas11[i11]);
  valor11 = valor11 % cedulas11[i11];

  console.log(quantidade11 + " nota(s) de R$ " + cedulas11[i11] + ",00");
}
