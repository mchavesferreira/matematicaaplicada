
---

### 🔹 1. Interpretação inicial

```c
unsigned char 0b00001100, A;
X += 0b00000011;
A = (1<<7) | (1<<6) | (1<<4) | (1<<5);
A = A | X;
```

⚠️ Observação importante: há um erro de sintaxe na declaração. O correto seria algo como:

```c
unsigned char X = 0b00001100, A;
```

Vamos assumir isso para continuar.

---

### 🔹 2. Valor inicial de X

```c
X = 0b00001100
```

Em decimal: 12

---

### 🔹 3. Operação: `X += 0b00000011`

```c
X = 0b00001100
    +0b00000011
-------------
     0b00001111
```

✔️ Resultado:

```c
X = 0b00001111  (15 decimal)
```

---

### 🔹 4. Montagem de A com deslocamento de bits

```c
A = (1<<7) | (1<<6) | (1<<5) | (1<<4);
```

Cada termo:

* `(1<<7)` → 10000000
* `(1<<6)` → 01000000
* `(1<<5)` → 00100000
* `(1<<4)` → 00010000

Fazendo OR:

```
  10000000
| 01000000
| 00100000
| 00010000
-----------
  11110000
```

✔️ Resultado:

```c
A = 0b11110000  (240 decimal)
```

---

### 🔹 5. Operação final: `A = A | X`

```c
A = 0b11110000
X = 0b00001111
--------------
    0b11111111
```

✔️ Resultado final:

```c
A = 0b11111111
```

---

# ✅ ✔️ **Resposta final**

```c
A = 0b11111111  (255 decimal)
```


```


+++++++++++++++++++++++++



---

## 🔹 1. Valores iniciais

```c
A = 0b11100111
B = 0b10000001
X = 0b11001100
Y = 0b10101010
```

---

## 🔹 2. Operação: `X = X | A`

```text
   11001100
|  11100111
-----------
   11101111
```

✔️ Resultado:

```c
X = 0b11101111
```

---

## 🔹 3. Operação: `Y = Y ^ B` (XOR)

```text
   10101010
^  10000001
-----------
   00101011
```

✔️ Resultado:

```c
Y = 0b00101011
```

---

## 🔹 4. Operação: `X = ~X << 2`

### Passo 1: NOT (~X)

```text
X = 11101111
~X= 00010000   (inversão bit a bit em 8 bits)
```

### Passo 2: Shift left 2 bits

```text
00010000 << 2 = 01000000
```

✔️ Resultado:

```c
X = 0b01000000
```

---

## 🔹 5. Operação final: `Y = Y | X`

```text
   00101011
|  01000000
-----------
   01101011
```

✔️ Resultado final:

```c
Y = 0b01101011
```

---

# ✅ ✔️ **Resposta final**

```c
Y = 0b01101011   (107 decimal)
```

---



++++++++++++++++++++++++
Faltam os valores iniciais de **A** e **B**.

O trecho começa com:

```c
X = A % B;
```

Então o valor de **Y** depende diretamente de quanto valem **A** e **B** antes dessa linha.

Envie algo como:

```c
unsigned char A = ?, B = ?;
```

Aí calculo o valor final de **Y**.


++++++++++++++++++


---

## 🔹 1. Variáveis globais

```c
unsigned char A = 6, B = 3, Y = 56;
```

✔️ Importante:

* Esse `A` global **NÃO será usado dentro da função**, pois há outro `A` local.

---

## 🔹 2. Função `funcao1`

```c
int funcao1(float C)  { 
    int R, A = 3;
    R = 5.5 * C;
    return (R);
}
```

### Pontos críticos:

* `C` é `float`
* `5.5 * C` → resultado em **float**
* `R` é `int` → ocorre **truncamento (perda da parte decimal)**

---

## 🔹 3. Execução no `main`

```c
unsigned int A = 5, D = 0, Z = 10;

Z = funcao1(A);
```

### Passo 1: chamada da função

```c
funcao1(A) → funcao1(5)
```

---

## 🔹 4. Dentro da função

```text
C = 5
R = 5.5 * 5 = 27.5
```

Como `R` é `int`:

```text
R = 27   (truncamento, não arredonda!)
```

✔️ Retorno:

```c
Z = 27
```

---

## 🔹 5. Última operação

```c
Y = Z * 3;
```

```text
Y = 27 * 3 = 81
```

---

## ✅ ✔️ **Resposta final**

```c
Y = 81
```

---
