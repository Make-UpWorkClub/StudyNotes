---
tags:
  - mat/algebra
  - cegep/3
date: 2025-10-31T12:01:15
---

# inverse matricielle

Opération [[matrice|matricielle]]
`Ant.` [[multiplication matricielle]]
Soit $A_{n \times n}$ une matrice inversible.
Une matrice $A^{-1}_{n \times n}$ est l'inverse de $A$ si

$$
AA^{-1} = A^{-1}A = I_{n \times n}
$$

> [!abstract] inversible / singulière
> Dont il existe une inverse / n'existe pas d'inverse

## Évaluation

Pour trouver $A^{-1}$,

$$
[A|I] \to [I|B] \implies B = A^{-1}
$$

## Propriétés

> $$
> AX = B \implies X = A^{-1}B
> $$

> $A^{-1}$ est unique.

Supposons qu'il existe deux inverses $B$ et $B'$ pour $A$.

$$
\begin{align}
BA & = B'A = I \\
BAB & = B'AB \\
BI & = B'I \\
B & = B'
\end{align}
$$

$\square$

> $$
> (A^{-1})^{-1} = A
> $$

$$
\begin{align}
A^{-1}A & = I \\
\implies (A^{-1})^{-1} & = A
\end{align}
$$

$\square$

> $$
> (kA)^{-1} = k^{-1}A^{-1}
> $$

$$
\begin{align}
(kA) \cdot (k^{-1}A^{-1}) & = kk^{-1}(AA^{-1}) \\
 & = I \\
\implies (kA)^{-1} & = k^{-1}A^{-1}
\end{align}
$$

$\square$

> $$
> (A^T)^{-1} = (A^{-1})^T
> $$

$$
\begin{align}
A^T \cdot (A^{-1})^T & = (A^{-1}A)^T \\
 & = I^T \\
 & = I \\
\implies (A^T)^{-1} & = (A^{-1})^T
\end{align}
$$

$\square$

> $$
> (AB)^{-1} = B^{-1}A^{-1}
> $$

$$
\begin{align}
AB \cdot B^{-1}A^{-1} & = A(BB^{-1})A^{-1} \\
 & = AA^{-1} \\
 & = I \\
\implies (AB)^{-1} & = B^{-1}A^{-1}
\end{align}
$$

$\square$

> $$
> (A_1A_2\dots A_n)^{-1} = A_n^{-1}A_{n - 1}^{-1}\dots A_1^{-1}
> $$

> Soit
> 
> $$
> B = \begin{bmatrix}
> a & b \\
> c & d
> \end{bmatrix}
> $$
> 
> Alors
> 
> $$
> \begin{align}
> B^{-1} & = \frac{1}{ad - bc}\begin{bmatrix}
> d & -b \\
> -c & a
> \end{bmatrix}
> \end{align}
> $$

## Exemples

> Montrer que
> 
> $$
> B = \begin{bmatrix}
> 1 & 2 \\
> 0 & 0
> \end{bmatrix}
> $$
> 
> est singulière.

$$
BB^{-1} = \begin{bmatrix}
B^{-1}_{11} + 2B^{-1}_{21} & B^{-1}_{12} + 2B^{-1}_{22} \\
0 & 0
\end{bmatrix} \ne I
$$

> Trouver l'inverse de
> 
> $$
> A = \begin{bmatrix}
> 1 & 2 \\
> 3 & 4
> \end{bmatrix}
> $$

$$
\begin{align}
A^{-1} & = \frac{1}{ad - bc}\begin{bmatrix}
d & -b \\
-c & a
\end{bmatrix} \\
 & = \frac{1}{4 - 6}\begin{bmatrix}
4 & -2 \\
-3 & 1
\end{bmatrix} \\
 & = \begin{bmatrix}
-2 & 1 \\
\frac{3}{2} & -\frac{1}{2}
\end{bmatrix}
\end{align}
$$

> Trouver $X$.
> 
> $$
> \begin{bmatrix}
> 3 & -2 \\
> 2 & 2
> \end{bmatrix}X = \begin{bmatrix}
> 5 & 2 \\
> -1 & 1
> \end{bmatrix}
> $$

$$
\begin{align}
3 \cdot 2 + 2 \cdot 2 & = 10 \ne 0 \\
\implies X & = \frac{1}{3 \cdot 2 + 2 \cdot 2}\begin{bmatrix}
2 & 2 \\
-2 & 3
\end{bmatrix}\begin{bmatrix}
5 & 2 \\
-1 & 1
\end{bmatrix} \\
 & = \begin{bmatrix}
\frac{4}{5} & \frac{3}{5} \\
-\frac{13}{10} & -\frac{1}{10}
\end{bmatrix}
\end{align}
$$

> Trouver $B^{-1}$ si possible.
> 
> $$
> B = \begin{bmatrix}
> -1 & 0 & 1 \\
> 1 & 1 & 0 \\
> 3 & 4 & 1
> \end{bmatrix}
> $$

$$
\begin{align}
[B|I] & = \begin{bmatrix}
-1 & 0 & 1 & \bigm| & 1 & 0 & 0 \\
1 & 1 & 0 & \bigm| & 0 & 1 & 0 \\
3 & 4 & 1 & \bigm| & 0 & 0 & 1
\end{bmatrix} \\
 & = \begin{bmatrix}
1 & 0 & -1 & \bigm| & -1 & 0 & 0 \\
0 & 1 & 1 & \bigm| & 1 & 1 & 0 \\
0 & 0 & 0 & \bigm| & -1 & -4 & 1
\end{bmatrix} \\
 & \implies \text{impossible}
\end{align}
$$

> Soit 𝐴 une matrice de taille 𝑛 × 𝑛 telle que
> 
> $$
> a_0I + \sum_{ k = 1 }^{ m } a_kA^k = \mathbb{O}
> $$
> 
> Montrer que 𝐴 est inversible et trouver une formule pour son inverse.

$$
\begin{align}
a_0I + \sum_{ k = 1 }^{ m } a_kA^k & = \mathbb{O} \\
A \frac{a_1 + \sum_{ k = 2 }^{ m } a_kA^k}{-a_0} & = I \\
\implies A^{-1} & = \frac{a_1 + \sum_{ k = 2 }^{ m } a_kA^k}{-a_0}
\end{align}
$$

$A$ est inversible si $a_0 \ne 0$.