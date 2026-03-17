<img src="../imgs/UNIFOR_logo1b.png" width="400"> 

# Raciocínio Lógico Algorítmico
Orientador: Prof. Me Ricardo Carubbi

# Aula 3 - Exercício 3

## Descrição narrativa
1. Receber dois números.
2. Verificar se o segundo número é zero.
3. Se for zero, mostrar "impossível dividir".
4. Caso contrário, calcular a divisão do primeiro pelo segundo.
5. Mostrar o resultado.

## Fluxograma

```mermaid
flowchart TD
A([INICIO]) --> B[\num1\]
B --> C[\num2\]
C --> D{num2 == 0}
D --TRUE--> E[/"impossível dividir"/]
D --FALSE--> F["resultado = num1 / num2"]
F --> G[/"resultado"/]
E --> H([FIM])
G --> H
```

## Teste de mesa

| num1 | num2 | resultado | saída               |
| --   | --   | --        | --                  |
| 10   | 2    | 5         | 5                   |
| 9    | 4.5  | 2         | 2                   |
| 7    | 0    | -         | "impossível dividir" |

