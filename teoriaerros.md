

# 📘 Teoria de Erros Aplicada a Códigos de Barra e QR Code

A **Teoria de Erros** aplicada à codificação automática tem o objetivo de permitir que sistemas detectem (e, em alguns casos, corrijam) erros que ocorrem durante a leitura de dados. No comércio e na indústria editorial, isso é fundamental para:

* Garantir que o produto correto seja identificado
* Evitar cobranças equivocadas
* Reduzir falhas em sistemas automatizados
* Assegurar rastreabilidade e logística precisa

Dois exemplos clássicos de sistemas de identificação são os **códigos de barras** (lineares) e os **QR Codes** (bidimensionais).

---

## ✅ Códigos de Barras: Como as barras representam números?

Os códigos de barras **não são imagens aleatórias**. Eles seguem regras rígidas onde cada algarismo decimal é convertido em um **padrão binário de barras pretas (1) e espaços brancos (0)**.

Exemplo do padrão **EAN-13** (mais comum no comércio):

| Dígito | Padrão (esquerda – tipo A) |
| ------ | -------------------------- |
| 0      | 0001101                    |
| 1      | 0011001                    |
| 2      | 0010011                    |
| 3      | 0111101                    |
| 4      | 0100011                    |
| 5      | 0110001                    |
| 6      | 0101111                    |
| 7      | 0111011                    |
| 8      | 0110111                    |
| 9      | 0001011                    |

Cada número vira **7 bits**. O leitor óptico interpreta espessura das barras para reconstruir os bits.

Além disso, existem marcadores fixos no início, meio e fim do código para sincronização e verificação visual:


<img width="222" height="163" alt="Captura de tela 2025-10-29 024516" src="https://github.com/user-attachments/assets/18c81893-ed7d-427c-a9a6-f2e1be910794" />

```
|101| (lado esquerdo) 6 dígitos |01010| (centro) 6 dígitos |101|
```

---

## 🔢 Dígito Verificador: Evitando Erros

Códigos como **EAN-13** e **ISBN-13** utilizam **1 dígito verificador (DV)** para detectar erros durante leitura.

### Algoritmo (EAN-13 / ISBN-13)

1. Multiplicam-se alternadamente os 12 primeiros dígitos por **1 e 3**
2. Soma-se o resultado
3. DV = (10 − (Soma mod 10)) mod 10

Essa técnica detecta com alta eficiência:

✅ Erros de troca de dígitos
✅ Erro de um dígito isolado
✅ Algumas inversões de dígitos vizinhos

---

## 🏷️ Tipos de códigos lineares mais comuns

| Padrão       | Dígitos  | Aplicação                                         |
| ------------ | -------- | ------------------------------------------------- |
| **EAN-13**   | 13       | Comércio mundial                                  |
| **UPC-A**    | 12       | Comércio nos EUA                                  |
| **ISBN-13**  | 13       | Livros (compatível com EAN-13)                    |
| **ISBN-10**  | 10       | Livros (obsoleto, DV base 11 com X para valor 10) |
| **Code 128** | Variável | Logística e indústria                             |
| **Code 39**  | Variável | Indústria e identificação                         |

📌 Observação: Existem códigos com **10 dígitos (ISBN-10)** e até **variáveis**, portanto o tamanho não é padronizado universalmente.

---

## 📚 ISBN-13 x ISBN-10

| Versão  | Aplicação       | Cálculo do DV                 |
| ------- | --------------- | ----------------------------- |
| ISBN-10 | Livros até 2006 | Módulo 11 (DV pode ser **X**) |
| ISBN-13 | Livros atuais   | Módulo 10 (mesmo do EAN-13)   |

A mudança foi necessária para que livros fossem compatíveis com sistemas comerciais internacionais.


## Estrutura explicada para um livro Brasileiro ISBN 978-85-66250-09-0

Exemplo: **978-85-66250-09-0**

| Parte | Função                              |
| ----- | ----------------------------------- |
| 978   | Prefixo (padrão de livro no EAN-13) |
| 85    | País / área linguística (Brasil)    |
| 66250 | Editora                             |
| 09    | Título específico                   |
| 0     | Dígito verificador (DV)             |
---

# 📚 Encontre o digito Verificador para os seguintes números ISBN


 **978-85-333-0227-?** 


 **978-65-86044-00-?**  




---

## 🧊 E o QR Code?

O **QR Code (Quick Response Code)** é **bidimensional** e representa informações em módulos quadrados (pixels pretos e brancos). Vantagens:

* Alta densidade de dados
* Leitura em qualquer direção
* Permite **correção de erros**

### Correção de erros com Reed-Solomon

O QR Code possui **4 níveis** de correção:

| Nível  | Símbolo | Taxa de recuperação |
| ------ | ------- | ------------------- |
| Baixa  | L       | 7%                  |
| Média  | M       | 15%                 |
| Alta   | Q       | 25%                 |
| Máxima | H       | 30%                 |

Isso permite que parte do código fique **apagado, sujo ou rasgado**, mas ainda possa ser lido corretamente.

O que são QR Code : https://nordvpn.com/pt-br/blog/o-que-e-qr-code/

<img width="649" height="402" alt="Captura de tela 2025-10-29 025732" src="https://github.com/user-attachments/assets/c02b6365-6002-4504-9028-577102c3bf85" />

<img width="811" height="514" alt="Captura de tela 2025-10-29 025849" src="https://github.com/user-attachments/assets/790726a2-a9f8-4afa-b2cf-64b3aa750039" />

---

## 📌 Referências

* International ISBN Agency – https
* GS1 Global Standards – https
* ISO/IEC 18004:2015 – QR Code
* Richard E. Blahut – Theory and Practice of Error Control Codes


Quer que eu prepare também um **quiz interativo** para seus alunos? 🎯📲
