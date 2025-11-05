
05/11/2025

aprendendo a programar

https://lab.open-roberta.org/

# Material para Microcontroladores (2° ano)

<BR>Sugestão de lista de compras para montagem de projetos com ESP32
<BR>
** Dica faça uma pesquisa em sites como Aliexpress que possui garantia de entrega. Não compre kits prontos com sensores que não muitas vezes utilizado.
<BR>
<BR>-Esp32  Devkit Esp32-wroom-32 - 30 Pinos - Tipo C
<BR><img src=https://raw.githubusercontent.com/mchavesferreira/mcr/refs/heads/main/imagens/ESP32_tipoC.png width=200 height=200>

<BR>https://produto.mercadolivre.com.br/MLB-3456778444-esp32-doit-devkit-esp32-wroom-32-30-pinos-tipo-c-_JM

<BR>-Display Oled 0.96 I2c Branco/amarelo ou Azul 
<BR><img src=https://raw.githubusercontent.com/mchavesferreira/mcr/refs/heads/main/imagens/display_oled.png width=200 height=200>

<BR>https://produto.mercadolivre.com.br/MLB-2844134920-display-oled-branco-096-i2c-arduino-pic-_JM
<BR>
<BR>-Cabo Wire Jumper 20cm 40 Fios Fêmea-macho Protoboard 
<BR><img src=https://raw.githubusercontent.com/mchavesferreira/mcr/refs/heads/main/imagens//jumpers_machofemea.png width=200 height=200>
<BR>https://produto.mercadolivre.com.br/MLB-1884942498-cabo-wire-jumper-20cm-40-fios-fmea-macho-protoboard-arduino-_JM
<BR>
<BR>-Jumper Macho X Macho 65pcs Fio Arduino 
<BR><img src=https://github.com/mchavesferreira/mcr/imagens/jumpers_machomacho.png  width=200 height=200>
<BR>https://produto.mercadolivre.com.br/MLB-1944458631-jumper-macho-x-macho-65pcs-fio-arduino-para-mega-e-uno-_JM
<BR>
<BR>-Protoboard 830 Furos
<BR><img src=https://raw.githubusercontent.com/mchavesferreira/mcr/refs/heads/main/imagens/protoboard.png  width=200 height=200>
<BR>https://produto.mercadolivre.com.br/MLB-1934614556-protoboard-830-furos-breadboard-830-pontos-_JM

<BR>
<BR>-Minimo 5 Leds, resistores, botões Push-buttons
<BR><img src=https://raw.githubusercontent.com/mchavesferreira/mcr/refs/heads/main/imagens/leds_resistor.png  width=200 height=200>
<BR>


29/10/2025

Mensagem secreta
<img width="888" height="418" alt="Captura de tela 2025-10-29 031700" src="https://github.com/user-attachments/assets/83d41716-1665-440b-99d4-68e532ed19e3" />



#  Atividades com code.org




## Atividades com Atividades com Loop

https://studio.code.org/s/express-2021/lessons/10/levels/2

## Atividades com Comando IF

https://studio.code.org/s/express-2021/lessons/15/levels/1



### Atividades com Funções:

https://studio.code.org/s/express-2021/lessons/21/levels/1

Termine as atividades de funções!  Caso tenha terminado retorne a atividade 11

https://studio.code.org/courses/express-2021/units/1/lessons/21/levels/11?lang=pt-BR


### Converta em blocos o seguinte códigos
Codigo 1:

```c
for (var i = 0; i < 5; i++)  {
  moveForward(100);
  turnRight(144);
});
```

Codigo 2:
```c
for (var i = 0; i < 4; i++) {
  moveForward(100);
  turnRight(90);
}

moveForward(100);
turnRight(30);
for (var i = 0; i < 3; i++) {
  moveForward(100);
  turnRight(120);
}
```

Código 3


```c
function parte1() {
  turnLeft(75);
  moveForward(100);
}

function parte2() {
  turnRight(150);
  moveForward(100);
}

function parte3() {
  jumpBackward(50);
  turnLeft(75);
  moveBackward(25);
}

penWidth(3);
penColour('#000000');
parte1();
parte2();
parte3();
```
# 11/06
# github.com/mchavesferreira/matematicaaplicada  

## Acesse e logue em https://studio.code.org em sua conta e vamos para a atividade de hoje
# Ciclos condicionais

## if (true) {  }
## if(true) {    } else  {   }
## while(true )  {  }

https://studio.code.org/courses/express-2021/units/1/lessons/22/levels/1?lang=pt-BR

---
## Trabalho 

Utilizando as funções construímos figuras geométricas como este exemplo

```c
unction quadrados_deslocados() {
    for (var count2 = 0; count2 < 2; count2++) {
        turnRight(180);
  }
}

function desenhar_quadrado() {
    for (var count3 = 0; count3 < 4; count3++) {
        moveForward(50);
    turnLeft(90);
  }
}

for (var count = 0; count < 4; count++) {
    moveForward(100);
  turnRight(90);
}
jumpForward(100);
turnRight(45);
moveForward(141);
turnRight(135);
moveForward(100);
turnLeft(90);
moveForward(100);
```
<img src=https://raw.githubusercontent.com/mchavesferreira/matematicaaplicada/refs/heads/main/figuras/figuraexemplo2.png width=300 height=300>

### Faça a figura a seguir e apresente o código em funções

<img src=https://raw.githubusercontent.com/mchavesferreira/matematicaaplicada/refs/heads/main/figuras/figuraexemplo1.png width=400 height=400>

Utilize o link de exemplo:
https://studio.code.org/courses/express-2021/units/1/lessons/21/levels/13?lang=pt-BR



# O que são funções?
Funções são blocos de código reutilizáveis que executam uma tarefa específica dentro de um programa. Elas ajudam a organizar, modularizar e reduzir a repetição de código, facilitando a manutenção e leitura.

![funcoes](https://github.com/user-attachments/assets/103bcc90-ef9a-435b-a403-95cd6707466a)

```c
function desenhar_uma_fila_de_quadrados() {
    for (var count = 0; count < 3; count++) {
        desenhar_quadrado();
    jumpForward(100);
  }
}

function desenhar_quadrado() {
    for (var count2 = 0; count2 < 4; count2++) {
        moveForward(50);
    turnLeft(90);
  }
}

main () {
desenhar_quadrado()

}

```




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

## Variáveis
**Variáveis** armazenam dados que podem ser manipulados ao longo do programa. Elas possuem:
- Nome para identificação.
- Valores que podem ser alterados, como números ou textos.

Exemplo:
- Uma variável `idade` pode armazenar o número 15 e depois ser atualizada para 16.
- Variáveis booleanas assumem apenas os valores `verdadeiro` ou `falso`, úteis para controle lógico.

Esses conceitos tornam a programação dinâmica, permitindo soluções adaptáveis e eficientes.



## Estruturas de Controle de Fluxo
Estruturas que controlam a execução de um programa com base em condições:

- **Condicionais** (`if`): Executam ações específicas se uma condição for verdadeira.
- **Repetição** (`while`): Repetem ações enquanto uma condição é verdadeira.
- **Desvio** (`goto`): Alteram o fluxo diretamente para um ponto específico no código.

Essas estruturas tornam os programas flexíveis, permitindo decisões e loops baseados em situações dinâmicas. O uso excessivo de desvios é desencorajado, pois dificulta a manutenção do código.

---


---

# Funções na Programação

## O que são funções?
Funções são blocos de código reutilizáveis que executam uma tarefa específica dentro de um programa. Elas ajudam a organizar, modularizar e reduzir a repetição de código, facilitando a manutenção e leitura.

---

## Componentes de uma função
Uma função geralmente inclui:
- **Nome**: Identificador único para chamá-la.
- **Parâmetros** (opcionais): Valores de entrada que podem influenciar o comportamento da função.
- **Corpo**: Bloco de código que define o que a função faz.
- **Retorno** (opcional): Resultado que a função devolve após sua execução.

---

## Exemplos
### Exemplo de função em C:
```c
int soma(int a, int b) {
    return a + b;
}
```

### Benefícios do uso de funções

***Reutilização de código:*** Evita duplicidade.

***Organização:*** Torna o código mais modular e fácil de entender.

***Manutenção:*** Alterações podem ser feitas em um único local.

***Flexibilidade:*** Permite trabalhar com diferentes entradas.

### Tipos de funções

***Sem retorno:*** Executam uma tarefa e não devolvem valor (ex.: funções void em C).

***Com retorno:*** Devolvem um resultado para o programa (ex.: funções matemáticas).

***Recursivas:*** Chamam a si mesmas para resolver problemas divididos em subproblemas menores.


### Exemplos

Crie uma função em linguagem C que receba 2 números e retorne o maior valor.

Código C:

```ruby

float maior2(float num1, float num2)
{
    if(num1 >= num2)
        return num1;
    else
        return num2;
}
```


 Crie uma função em linguagem C que receba 2 números e retorne o menor valor.

Código C:

```ruby

float menor2()2(float num1, float num2)
{
    if(num1 <= num2)
        return num1;
    else
        return num2;
}
```



## aprendendo com http://code.org


==================================================

Aprenda coma Elza

https://studio.code.org/s/frozen/lessons/1/levels/1


### projeto java
https://studio.code.org/projects/applab/c-RGedG09DDOJwT50bHoA1cV_A74yUA2Y__cbTAk9r0

projeto login:
https://studio.code.org/projects/applab/1BPUeRbEj7lw91-ZdfB3HkcquJaFzRMV06ZFQV_KbvU/view




Referencias:

https://blog.gocobi.com/scratch-to-java/


