# matematicaplicada

<img src=qr.png width=300 height=300>


# Conceitos de Programação

## Algoritmos
Um **algoritmo** é uma sequência lógica de passos para resolver problemas ou realizar tarefas, seja por humanos ou computadores. Exemplos práticos incluem receitas de culinária. Em programação, algoritmos podem ser escritos em linguagens como C ou Python, descrevendo como calcular a média de números, por exemplo:

1. Leia três números.
2. Some-os e divida por 3.
3. Exiba a média.

Algoritmos eficazes devem ser claros, precisos e completos.

---

## Fluxogramas
**Fluxogramas** são diagramas visuais que representam a lógica de algoritmos, usando símbolos para ações (entrada, processamento, saída) conectados por linhas que indicam a ordem. Por exemplo, para calcular a área de um círculo:

1. **Entrada**: raio.
2. **Processamento**: cálculo da área.
3. **Saída**: exibir resultado.

Esses diagramas ajudam a entender e comunicar a lógica de programas, especialmente úteis no ensino e na depuração de códigos.

---

## Estruturas de Controle de Fluxo
Estruturas que controlam a execução de um programa com base em condições:

- **Condicionais** (`if`): Executam ações específicas se uma condição for verdadeira.
- **Repetição** (`while`): Repetem ações enquanto uma condição é verdadeira.
- **Desvio** (`goto`): Alteram o fluxo diretamente para um ponto específico no código.

Essas estruturas tornam os programas flexíveis, permitindo decisões e loops baseados em situações dinâmicas. O uso excessivo de desvios é desencorajado, pois dificulta a manutenção do código.

---

## Variáveis
**Variáveis** armazenam dados que podem ser manipulados ao longo do programa. Elas possuem:
- Nome para identificação.
- Valores que podem ser alterados, como números ou textos.

Exemplo:
- Uma variável `idade` pode armazenar o número 15 e depois ser atualizada para 16.
- Variáveis booleanas assumem apenas os valores `verdadeiro` ou `falso`, úteis para controle lógico.

Esses conceitos tornam a programação dinâmica, permitindo soluções adaptáveis e eficientes.


---

## Funções
Crie uma função em linguagem C que receba 2 números e retorne o maior valor.

Código C:

´´´java

float maior2(float num1, float num2)
{
    if(num1 >= num2)
        return num1;
    else
        return num2;
}
´´´
====================================

 Crie uma função em linguagem C que receba 2 números e retorne o menor valor.

Código C:

´´´java

float menor2()2(float num1, float num2)
{
    if(num1 <= num2)
        return num1;
    else
        return num2;
}
´´´

========================


