<img src="../imgs/UNIFOR_logo1b.png" width="400"> 

# Raciocínio Lógico Algorítmico
Orientador: Prof. Me Ricardo Carubbi

# Aula 3 - Exercício 2

## Descrição narrativa
1. Ler a temperatura em Celsius.
2. Calcular a temperatura em Fahrenheit.
3. Mostrar o resultado.

## Fluxograma

```mermaid
flowchart TD
A([INICIO]) --> B[\tempC\]
B --> C["tempF = (9/5) * tempC + 32"]
C --> D[/"tempF"/]
D --> E([FIM])
```

## Teste de mesa

| tempC  | tempF | saída                 | 
| --     | --    | --                    |
| 0      | 32    | 32 graus Fahrenheit   |
| 10     | 50    | 50 graus Fahrenheit   |
| -17.78 | 0.00  | 0.00 graus Fahrenheit |

