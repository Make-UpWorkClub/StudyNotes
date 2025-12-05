---
tags:
  - mat/algebra
  - cegep/3
date: 2025-11-07T11:34:26
---

# déterminant

Nombre réel associé à une [[matrice]]

## Évaluation

$$
\begin{align} \\
\det(A_{1 \times 1}) & = |a| & = a \\
\det(A_{2 \times 2}) & = \begin{vmatrix}
a & b \\
c & d
\end{vmatrix} & = ad - bc
\end{align}
$$

**Règle de Sarrus** :

$$
\det(A_{3 \times 3}) = \begin{vmatrix}
a & b & c \\
d & e & f \\
g & h & i
\end{vmatrix} = aei + bfg + cdh - gec - hfa - idb
$$

$\det(A_{n \times n})$ est l'[[expansion en cofacteurs]] de n'importe quelle ligne ou colonne.

## Propriétés

> $$
> A^{-1} \exists \iff \det A \ne 0
> $$

> $$
> A\text{ est consistent} \iff \det A \ne 0
> $$

> $$
> \det A^T = \det A
> $$

> $$
> \begin{align}
> \det AB & = \det A\det B \\
> \det A^n & = (\det A)^n
\end{align}
> $$

> Soit $C$ une matrice inversible, alors
> 
> $$
> \det C^{-1} = (\det C)^{-1}
> $$

$$
\begin{align}
C^{-1}C & = I \\
\implies \det C^{-1}C & = \det I \\
\det C^{-1}\det C & = 1 \\
\det C^{-1} & = (\det C)^{-1}
\end{align}
$$

$\square$

> $$
> \begin{align}
> \mathrm{diag}(\lambda_1, \lambda_2, \dots\lambda_n) & = \begin{bmatrix}
> \lambda_1 & 0 & \dots & 0 \\
> 0 & \lambda_2 & \dots & 0 \\
> \vdots & \vdots &  & 0 \\
> 0 & 0 & 0 & \lambda_n
> \end{bmatrix} \\
> \implies \det(\mathrm{diag}(\lambda_1, \lambda_2, \dots\lambda_n)) & = \prod_{ i = 1 }^{ n } \lambda_i
> \end{align}
> $$

> $$
> \det kA = k^n\det A
> $$

$$
\begin{align}
\det kA & = \det(kI_nA) \\
 & = \det(kI_n)\det A \\
 & = \det(\mathrm{diag}(k, k, \dots k))\det A \\
 & = k^n\det A
\end{align}
$$

$\square$

## Exemples

> Pour quelles valeurs de $k$ est-ce que $A$ admet une inverse ?
> 
> $$
> A = \begin{bmatrix}
> -2 & 1 & 3 \\
> 1 & 1 & k \\
> 0 & -1 & 2
> \end{bmatrix}
> $$

$$
\begin{align}
\det(A) & \ne 0 \\
-2 \cdot 1 \cdot 2 + 1 \cdot k \cdot 0 + 3 \cdot 1 \cdot -1 - 0 \cdot 1 \cdot 3 + 1 \cdot k \cdot -2 - 2 \cdot 1 \cdot 1 & \ne 0 \\
-9 - 2k & \ne 0 \\
k & \ne - \frac{9}{2}
\end{align}
$$

> Calculer le déterminant des matrices suivantes.

> $$
> A = \begin{bmatrix}
> 1 & -1 & 0 & 2 \\
> 3 & 1 & 4 & 2 \\
> 0 & 2 & 0 & -1 \\
> -1 & 3 & 0 & -2
> \end{bmatrix}
> $$

$$
\begin{align}
\det(A) & = \sum_{ i = 1 }^{ 4 } A_{i3}C_{i3} \\
 & = 4(-1)^{2 + 3}M_{23} \\
 & = -4\begin{vmatrix}
1 & -1 & 2 \\
0 & 2 & -1 \\
-1 & 3 & -2
\end{vmatrix} \\
 & = -4(2(-2) - 3(-1) + 1(-1) + 2 \cdot 2) \\
 & = -8
\end{align}
$$

> $$
> B = \begin{bmatrix}
> -3 & 0 & 0 & 1 & 0 \\
> -1 & 0 & -1 & 0 & 0 \\
> 0 & 1 & 0 & 0 & 2 \\
> 0 & 0 & 0 & -1 & 2 \\
> 0 & -1 & -1 & 0 & 0
> \end{bmatrix}
> $$

$$
\begin{align}
\det B & = \sum_{ i = 1 }^{ 5 } B_{i2}C_{i2} \\
 & = -\begin{vmatrix}
-3 & 0 & 1 & 0 \\
-1 & -1 & 0 & 0 \\
0 & 0 & -1 & 2 \\
0 & -1 & 0 & 0
\end{vmatrix} + \begin{vmatrix}
-3 & 0 & 1 & 0 \\
-1 & -1 & 0 & 0 \\
0 & 0 & 0 & 2 \\
0 & 0 & -1 & 2
\end{vmatrix} \\
 & = 2\begin{vmatrix}
-3 & 0 & 1 \\
-1 & -1 & 0 \\
0 & -1 & 0
\end{vmatrix} - 2\begin{vmatrix}
-3 & 0 & 1 \\
-1 & -1 & 0 \\
0 & 0 & -1
\end{vmatrix} \\
 & = 2\begin{vmatrix}
-1 & -1 \\
0 & -1
\end{vmatrix} + 2\begin{vmatrix}
-3 & 0 \\
-1 & -1
\end{vmatrix} \\
 & = -2\begin{vmatrix}
-1
\end{vmatrix} - 6\begin{vmatrix}
-1
\end{vmatrix} \\
 & = 8
\end{align}
$$

> Soit $A$ et $P$ des matrices inversibles de dimension 6 x 6 telles que
> 
> $$
> PA^2P^{-1} = 7A^TA^2
> $$
> 
> Calculer $\det A$.

$$
\begin{align}
PA^2P^{-1} & = 7A^TA^2 \\
\implies \det(PA^2P^{-1}) & = \det(7A^TA^2) \\
\det P \cdot \cancel{\det(A^2)}\det(P^{-1}) & = 7^6\det(A^T)\cancel{\det (A^2)} \\
1 & = 7^6\det A \\
\det A & = 7^{-6}
\end{align}
$$

> Soit k une constante réelle et soit le système d'équations linéaires suivant :
> 
> $$
> \begin{cases}
> (2k)x + 3y + kz & = 4 \\
> (3kx) + 2y + (4k)z & = -8k \\
> x - 2y - 2z & = 4
> \end{cases}
> $$

> À l'aide de déterminants, déterminer toutes les valeurs de $k$, si elles existent, telles que le système linéaire a une solution unique.