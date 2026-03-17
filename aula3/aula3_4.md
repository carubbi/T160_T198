<img src="../imgs/UNIFOR_logo1b.png" width="400"> 

# Raciocínio Lógico Algorítmico
Orientador: Prof. Me Ricardo Carubbi

# Aula 3 - Exercício 4

## Descrição narrativa
1. Ler um número.
2. Calcular o resto da divisão por 2.
3. Se o resto for 0, mostrar "par"; caso contrário, mostrar "impar".

## Fluxograma

```mermaid
flowchart TD
A([INICIO]) --> B[\num\]
B --> C["resto = num % 2"]
C --> D{resto === 0}
D --FALSE--> E[/"impar"/]
D --TRUE--> F[/"par"/]
E --> G([FIM])
F --> G
```

## Teste de mesa

| numero | resto | resto == 0 | saída   |
| --     | --    | --         | --      | 
| 0      | 0     | V          | "par"   |
| 13     | 1     | F          | "impar" |
| 30     | 0     | V          | "par"   |

