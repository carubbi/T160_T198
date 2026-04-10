<img src="../imgs/UNIFOR_logo1b.png" width="400"> 

# Raciocínio Lógico Algorítmico: Aula 8
Orientador: Prof. Me Ricardo Carubbi

## Funções e algoritmos clássicos

### Objetivo da aula
Compreender como **reutilizar código com funções** e como implementar **algoritmos clássicos** de **troca de valores**, **contagem**, **soma**, **multiplicação**, **fatorial**, **Fibonacci**, **conversão de base** e **geração dos primeiros números primos** em JavaScript.

## 1. Fundamentação teórica
Em algoritmos maiores, repetir o mesmo bloco de código em vários pontos dificulta a **manutenção**, aumenta a **chance de erro** e torna a leitura mais cansativa. Para evitar isso, usamos **funções**.

Uma **função** é um bloco de código que:

- recebe valores de entrada, chamados **parâmetros**;
- executa uma **tarefa específica**;
- pode devolver um resultado por meio de `return`, quando a intenção for produzir um **valor** para uso posterior;
- também pode apenas executar uma **ação**, como exibir uma mensagem, sem retornar valor.

O uso de funções ajuda a:

- **dividir problemas grandes** em partes menores;
- **reaproveitar a mesma lógica** em vários pontos;
- **testar trechos de código** separadamente;
- deixar o algoritmo mais **organizado**.

Nesta aula, as funções serão aplicadas a algoritmos clássicos muito usados em exercícios introdutórios.

### Decomposição de problemas como estratégia computacional
Uma estratégia importante em programação é **dividir um problema grande em partes menores** e mais fáceis de resolver. Cada parte pode ser transformada em uma **função com responsabilidade bem definida**.

Esse processo melhora:

- a **organização** da solução;
- a **leitura** do algoritmo;
- a **reutilização de código**;
- a **identificação de erros**.

#### Fluxograma
```mermaid
flowchart TD
A([Problema grande]) --> B[Identificar partes menores]
B --> C[Definir função para entrada de dados]
B --> D[Definir função para processamento principal]
B --> E[Definir função para apresentação da saída]
C --> F[Resolver subproblema 1]
D --> G[Resolver subproblema 2]
E --> H[Resolver subproblema 3]
F --> I[Integrar resultados]
G --> I
H --> I
I --> J([Solução completa])
```

## 2. Sintaxe básica de função

```javascript
function nomeDaFuncao(parametro1, parametro2) {
    let resultado;

    resultado = parametro1 + parametro2;

    return resultado;
}
```

Exemplo de uso:

```javascript
function somar(a, b) {
    a = parseFloat(a);
    b = parseFloat(b);

    return a + b;
}

let num1;
let num2;
let total;

num1 = prompt("Digite o primeiro número:"); // 4
num2 = prompt("Digite o segundo número:"); // 7

total = somar(num1, num2);
console.log(total); // 11
```

<img src="../imgs/aula8.png" width="800"> 

**Figura 8.1** - Uso de funções e comparação entre a sintaxe tradicional de função com `function nome() {}` e a sintaxe moderna com **arrow function**, como em `const nome = () => {}`.

### Comentário sobre a Figura 8.1
A figura destaca duas ideias importantes. A primeira é o **conceito de função**: um bloco de código criado para executar uma tarefa específica, podendo ou não **retornar um valor**. A segunda é a existência de **duas formas comuns de escrever funções em JavaScript**: a forma tradicional e a forma moderna com **arrow function**.

Na prática, as duas sintaxes servem ao mesmo propósito fundamental: **organizar o algoritmo**, **evitar repetição de código** e **facilitar a reutilização da lógica**. Em cursos introdutórios, a forma tradicional com `function nome() {}` costuma ser a melhor para começar, porque sua estrutura é mais explícita e facilita a leitura.

A sintaxe com **arrow function**, como em `const nome = () => {}`, aparece com muita frequência em JavaScript moderno. Por isso, é importante que o aluno reconheça essa forma desde cedo, mesmo que os exemplos principais da aula continuem usando a sintaxe tradicional para priorizar a clareza didática.

O mais importante, neste momento, não é memorizar apenas a diferença visual entre as duas escritas, mas entender a **aplicação das funções**: separar partes do problema, dar nome a cada etapa do raciocínio e construir soluções mais **claras**, **modulares** e **fáceis de manter**.

## 3. Escopo de variáveis em funções

### Ideia principal
**Escopo** é a região do algoritmo em que uma variável pode ser usada. Ao trabalhar com funções, é importante distinguir **variáveis locais** das **variáveis declaradas fora da função**.

### Escopo local
Chamamos de **escopo local** o conjunto de variáveis que existem apenas dentro de uma função.

- variáveis declaradas dentro da função existem apenas dentro dela;
- **parâmetros** também pertencem ao escopo da função;
- essas variáveis deixam de fazer sentido fora da função.

### Escopo global
Chamamos de **escopo global** o conjunto de variáveis declaradas fora das funções, em uma região mais ampla do algoritmo.

- essas variáveis podem ser usadas em outras partes do programa;
- seu uso exige **cuidado**, para evitar confusão e alterações indevidas;
- em algoritmos bem organizados, prefere-se usar **funções com parâmetros e retornos claros**, reduzindo a dependência de variáveis globais.

### Exemplo básico

```javascript
function mostrarMensagem(nome) {
    let saudacao;

    saudacao = "Olá, " + nome;
    console.log(saudacao);
}

let aluno;

aluno = prompt("Digite o nome do aluno:"); // Ana

mostrarMensagem(aluno);
console.log(aluno);
```

### Observação didática
No exemplo, `nome` e `saudacao` pertencem ao **escopo local** da função `mostrarMensagem`. Já a variável `aluno` foi declarada fora da função e pertence ao **escopo global**.

Observe também que `mostrarMensagem` **não usa `return`**. Isso acontece porque seu objetivo não é **devolver um valor**, mas realizar uma **saída** com `console.log()`. Esse tipo de função também é válido e útil quando a responsabilidade principal é **executar uma ação**.

Entender escopo é importante para:

- evitar confusão entre variáveis com funções diferentes;
- impedir **alterações indevidas** em dados do algoritmo;
- organizar melhor a **responsabilidade de cada função**.

## 4. Reutilização de código com o uso de funções

### Ideia principal
Quando um mesmo cálculo ou processo aparece várias vezes, ele deve ser colocado em uma **função**.

### Exemplo básico: calcular o dobro de vários valores

#### Descrição narrativa
1. Criar uma função que receba um número.
2. Multiplicar esse número por 2.
3. Retornar o resultado.
4. Chamar a função para diferentes valores.

#### Código JavaScript
```javascript
function calcularDobro(numero) {
    numero = parseFloat(numero);

    return numero * 2;
}

let valor1;
let valor2;
let valor3;

valor1 = prompt("Digite o primeiro valor:"); // 5
valor2 = prompt("Digite o segundo valor:"); // 8
valor3 = prompt("Digite o terceiro valor:"); // 12

valor1 = calcularDobro(valor1);
valor2 = calcularDobro(valor2);
valor3 = calcularDobro(valor3);

console.log(valor1);
console.log(valor2);
console.log(valor3);
```

### Observação didática
Sem função, o cálculo `numero * 2` seria repetido várias vezes. Com função, o algoritmo fica **menor**, mais **organizado** e mais **fácil de alterar**.

## 5. Algoritmo de troca de valores

### Ideia principal
**Trocar valores** significa fazer com que o valor de `a` passe para `b` e o valor de `b` passe para `a`.

Para isso, normalmente usamos uma **variável auxiliar**.

### Exemplo básico

#### Descrição narrativa
1. Guardar o valor de `a` em uma variável auxiliar.
2. Copiar o valor de `b` para `a`.
3. Copiar o valor auxiliar para `b`.
4. Organizar os novos valores em uma estrutura de dados simples.
5. Retornar essa estrutura.
6. Armazenar cada valor retornado em uma variável.

#### Código JavaScript
```javascript
function trocarValores(a, b) {
    let aux;

    a = parseFloat(a);
    b = parseFloat(b);

    aux = a;
    a = b;
    b = aux;

    return [a, b];
}

let resultado;
let novoA;
let novoB;

novoA = prompt("Digite o valor de a:"); // 10
novoB = prompt("Digite o valor de b:"); // 25

resultado = trocarValores(novoA, novoB);
[novoA, novoB] = resultado;

console.log(novoA); // 25
console.log(novoB); // 10
```

#### Opção equivalente usando variável temporária de forma direta
```javascript
let a;
let b;
let temp;

a = prompt("Digite o valor de a:"); // 10
b = prompt("Digite o valor de b:"); // 25

a = parseFloat(a);
b = parseFloat(b);

temp = a;
a = b;
b = temp;

console.log(a); // 25
console.log(b); // 10
```

### Observação didática
Esse algoritmo é importante porque aparece em **ordenação**, **reorganização de dados** e vários problemas de **comparação**. No primeiro exemplo, foi usada uma estrutura de dados simples para devolver dois valores ao mesmo tempo, e depois cada valor foi armazenado em sua própria variável. Na opção equivalente, a troca foi mostrada de forma **direta**, usando apenas uma **variável temporária**. O estudo formal de **estruturas de dados** será abordado mais adiante na disciplina.

## 6. Algoritmo de contagem, soma e multiplicação

### Ideia principal
Em problemas com repetição, três padrões aparecem com frequência:

- **contador**: registra quantas vezes algo aconteceu;
- **acumulador de soma**: soma valores ao longo do processo;
- **acumulador de produto**: multiplica valores ao longo do processo.

### Exemplo básico: contar, somar e multiplicar de 1 até `n`

#### Descrição narrativa
1. Ler um valor `n`.
2. Repetir de 1 até `n`.
3. Incrementar o contador.
4. Somar o valor atual ao acumulador.
5. Multiplicar o valor atual ao produto.
6. Organizar os resultados em uma estrutura de dados simples.
7. Retornar essa estrutura.
8. Armazenar cada resultado em uma variável própria.

#### Código JavaScript
```javascript
function calcularResumo(n) {
    let contador;
    let soma;
    let produto;
    let i;

    n = parseInt(n);
    contador = 0;
    soma = 0;
    produto = 1;

    for (i = 1; i <= n; i++) {
        contador++;
        soma = soma + i;
        produto = produto * i;
    }

    return [contador, soma, produto];
}

let resultado;
let contadorFinal;
let somaFinal;
let produtoFinal;
let n;

n = prompt("Digite o valor de n:"); // 4
resultado = calcularResumo(n);
[contadorFinal, somaFinal, produtoFinal] = resultado;

console.log("Contagem: " + contadorFinal);
console.log("Soma: " + somaFinal);
console.log("Produto: " + produtoFinal);
```

Para `n = 4`, teremos:

- contagem = 4
- soma = 10
- produto = 24

### Observação didática
Neste exemplo, foi usada uma estrutura de dados simples para reunir **vários resultados em um único retorno**. Em seguida, cada resultado foi armazenado em sua própria variável, evitando o uso direto de indexação. A ideia aparece aqui apenas como antecipação prática; **estruturas de dados** serão estudadas com mais profundidade mais adiante na disciplina.

### Exemplo simples: loop infinito com uso de `break`

Em alguns problemas, não sabemos com antecedência **quantas repetições** serão necessárias. Nesses casos, pode ser útil usar um **loop infinito** e interrompê-lo quando uma condição de parada for satisfeita.

#### Código JavaScript
```javascript
let numero;

while (true) {
    numero = parseInt(prompt("Digite 0 para sair:"));

    if (numero === 0) {
        break;
    }

    console.log("Voce digitou: " + numero);
}

console.log("Programa encerrado.");
```

### Observação didática
O laço `while (true)` cria uma repetição que, em princípio, nunca termina sozinha. Por isso, ele só deve ser usado quando existe uma **condição de parada clara** dentro do bloco. Neste exemplo, o comando `break` encerra o laço quando o usuário digita `0`.

## Algoritmo de fatorial

### Ideia principal
O **fatorial** de um número natural `n` é o produto de todos os inteiros de `1` até `n`.

Exemplos:

- `3! = 3 x 2 x 1 = 6`
- `5! = 5 x 4 x 3 x 2 x 1 = 120`

Por convenção:

- **`0! = 1`**

### Exemplo básico

#### Descrição narrativa
1. Receber `n`.
2. Começar com `fatorial = 1`.
3. Multiplicar `fatorial` pelos números de 1 até `n`.
4. Retornar o resultado.

#### Código JavaScript
```javascript
function calcularFatorial(n) {
    let fatorial;
    let i;

    n = parseInt(n);
    fatorial = 1;

    for (i = 1; i <= n; i++) {
        fatorial = fatorial * i;
    }

    return fatorial;
}

let numero;

numero = prompt("Digite um número para calcular o fatorial:"); // 5
console.log(calcularFatorial(numero)); // 120
```

### Ponto de atenção
O algoritmo iterativo de fatorial usa **multiplicação acumulada**. Por isso, ele é um caso particular do padrão visto na seção anterior.

## 8. Algoritmo de sequência de Fibonacci

### Ideia principal
Na **sequência de Fibonacci**, cada termo a partir do terceiro é a **soma dos dois anteriores**.

Sequência inicial:

`0, 1, 1, 2, 3, 5, 8, 13, ...`

### Exemplo básico

#### Descrição narrativa
1. Definir os dois primeiros termos.
2. Mostrar os termos iniciais.
3. Calcular o próximo como soma dos dois anteriores.
4. Atualizar as variáveis.
5. Repetir até gerar a quantidade desejada.

#### Código JavaScript
```javascript
function gerarFibonacci(quantidade) {
    let a;
    let b;
    let proximo;
    let i;
    let sequencia;

    quantidade = parseInt(quantidade);
    a = 0;
    b = 1;
    sequencia = "";

    for (i = 1; i <= quantidade; i++) {
        sequencia += a;

        if (i < quantidade) {
            sequencia += ", ";
        }

        proximo = a + b;
        a = b;
        b = proximo;
    }

    return sequencia;
}

let quantidade;

quantidade = prompt("Digite a quantidade de termos:"); // 7
console.log(gerarFibonacci(quantidade)); // 0, 1, 1, 2, 3, 5, 8
```

### Ponto de atenção
Neste algoritmo, a **ordem das atualizações importa**. Se as variáveis forem atualizadas na ordem errada, a sequência fica incorreta.

## 9. Algoritmo de conversão de base

### Ideia principal
**Conversão de base** é a mudança de representação de um número. Um caso clássico em aulas introdutórias é converter um **número decimal para binário**.

O processo funciona com divisões sucessivas por 2:

1. **dividir** o número por 2;
2. **guardar o resto**;
3. repetir com o **quociente**;
4. ler os restos de **trás para frente**.

### Exemplo básico: decimal para binário

#### Descrição narrativa
1. Receber um número decimal inteiro positivo.
2. Enquanto o número for maior que zero, calcular o resto da divisão por 2.
3. Colocar esse resto no início da resposta.
4. Substituir o número pelo quociente inteiro da divisão por 2.
5. Ao final, retornar o binário obtido.

#### Código JavaScript
```javascript
function decimalParaBinario(numero) {
    let binario;
    let resto;

    numero = parseInt(numero);

    if (numero == 0) {
        return "0";
    }

    binario = "";

    while (numero > 0) {
        resto = numero % 2;
        binario = resto + binario;
        numero = parseInt(numero / 2);
    }

    return binario;
}

let numero;

numero = prompt("Digite um número decimal inteiro:"); // 13
console.log(decimalParaBinario(numero)); // 1101
```

### Observação didática
Esse algoritmo combina:

- **repetição**;
- operador de **resto `%`**;
- **divisão inteira**;
- construção gradual de uma resposta.

## 10. Algoritmo de geração dos n-primeiros números primos

### Ideia principal
Um **número primo** é divisível apenas por `1` e por ele mesmo.

Para gerar os `n` primeiros primos, precisamos:

1. testar vários candidatos;
2. verificar se cada candidato é primo;
3. contar quantos primos já foram encontrados;
4. parar quando a quantidade desejada for atingida.

### Exemplo básico

#### Descrição narrativa
1. Criar uma função para verificar se um número é primo.
2. Começar com o candidato igual a 2.
3. Enquanto ainda faltarem primos, testar o candidato.
4. Se for primo, adicionar à resposta e aumentar a contagem.
5. Passar para o próximo candidato.

#### Código JavaScript
```javascript
function ehPrimo(numero) {
    let divisor;

    numero = parseInt(numero);

    if (numero < 2) {
        return false;
    }

    for (divisor = 2; divisor < numero; divisor++) {
        if (numero % divisor == 0) {
            return false;
        }
    }

    return true;
}

function gerarNPrimeirosPrimos(quantidade) {
    let encontrados;
    let candidato;
    let resposta;

    quantidade = parseInt(quantidade);
    encontrados = 0;
    candidato = 2;
    resposta = "";

    while (encontrados < quantidade) {
        if (ehPrimo(candidato)) {
            if (encontrados > 0) {
                resposta += ", ";
            }

            resposta += candidato;
            encontrados++;
        }

        candidato++;
    }

    return resposta;
}

let quantidade;

quantidade = prompt("Digite quantos números primos deseja gerar:"); // 5
console.log(gerarNPrimeirosPrimos(quantidade)); // 2, 3, 5, 7, 11
```

### Ponto de atenção
Esse algoritmo usa decomposição em funções:

- uma função decide se um número é **primo**;
- outra função usa esse teste para gerar **vários primos**.

Esse é um bom exemplo de **reutilização de código**.

## 11. Comparativo rápido dos algoritmos estudados

| Tema | Ideia central | Estrutura mais usada |
| --- | --- | --- |
| Reutilização com funções | evitar repetição de código | função com parâmetros e `return` |
| Troca de valores | inverter conteúdos de duas variáveis | variável auxiliar |
| Contagem, soma e multiplicação | acompanhar repetições e acumulações | `for` ou `while` |
| Fatorial | produto acumulado de 1 até `n` | `for` |
| Fibonacci | soma dos dois termos anteriores | `for` |
| Conversão de base | divisões sucessivas e restos | `while` |
| Números primos | teste de divisibilidade | funções + repetição |

## 12. Exemplo do Beecrowd: `1153` Fatorial Simples

### Por que este problema é adequado?
O problema `1153` trabalha diretamente com:

- **repetição**;
- **acumulador de produto**;
- **algoritmo de fatorial**;
- organização da solução com **função**.

Mesmo que o enunciado não exija explicitamente funções, podemos usá-las para deixar a solução mais **clara**.

### Estratégia de resolução
1. Ler um número inteiro `n`.
2. Criar uma função `calcularFatorial`.
3. Multiplicar os valores de 1 até `n`.
4. Imprimir o resultado.

### Solução em JavaScript para o Beecrowd
```javascript
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim();

function calcularFatorial(n) {
    let fatorial;
    let i;

    n = parseInt(n);
    fatorial = 1;

    for (i = 1; i <= n; i++) {
        fatorial = fatorial * i;
    }

    return fatorial;
}

console.log(calcularFatorial(input));
```

### Observação didática
Esse exemplo mostra que **funções** não servem apenas para programas grandes. Mesmo em problemas pequenos, elas ajudam a separar:

- **leitura da entrada**;
- **processamento principal**;
- **exibição da saída**.

## 13. Erros comuns

1. Criar funções sem objetivo claro.
2. Esquecer de usar `return` quando a função precisa devolver resultado.
3. Trocar valores sem variável auxiliar e perder um dos dados.
4. Iniciar produto com `0` em vez de `1`.
5. Atualizar as variáveis da sequência de Fibonacci em ordem incorreta.
6. Ler os restos da conversão de base na ordem errada.
7. Considerar `1` como número primo.
8. Confundir variáveis locais da função com variáveis declaradas fora dela.

## 14. Fechamento
Nesta aula, você estudou como usar **funções** para organizar algoritmos e **reaproveitar lógica**. Também viu sete padrões clássicos muito frequentes em programação introdutória: **troca de valores**, **acumuladores**, **fatorial**, **Fibonacci**, **conversão de base** e **números primos**.

O ponto central não é apenas memorizar cada algoritmo, mas perceber que muitos problemas podem ser construídos a partir de poucos **padrões**:

- **repetição**;
- **contagem**;
- **acumulação**;
- **teste de divisibilidade**;
- **decomposição em funções**.

## Saiba mais
- MDN - Functions: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Functions
- MDN - return: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/return
