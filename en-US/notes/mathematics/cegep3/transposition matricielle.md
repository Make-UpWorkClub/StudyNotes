---
tags:
  - mat/algebra
  - cegep/3
date: 2025-10-31T11:05:34
---

# transposition matricielle

Opération [[matrice|matricielle]]
Inversion des colonnes et des lignes

$$
A_{n \times m}^T = A_{m \times n}
$$

## Propriétés

$$
\begin{align}
(A^T)^T & = A \\
(A + B)^T & = A^T + B^T \\
(kA)^T & = kA^T \\
(AB)^T & = B^TA^T
\end{align}
$$

> $$
> (A_1A_2\dots A_n)^T = A_n^TA_{n - 1}^T\dots A_1^T
> $$

### Symétrie

Symétrie :

$$
A^T = A
$$

Anti-symétrie :

$$
A^T = -A
$$

> Soit $A, B$ deux matrices symétriques qui commutent. Alors, $AB$ est symétrique.

$$
\begin{align}
(AB)^T & = AB \\
B^TA^T & = AB \\
BA & = AB \\
AB & = AB
\end{align}
$$

## Exemples

> Trouver $x$, $y$ et $z$ sachant que $A$ est symétrique.
> 
> $$
> A = \begin{bmatrix}
> -4 & -6 & 2x + y + z \\
> x + y - z & 1 & 6 \\
> -1 & x - 2y + z & 4
> \end{bmatrix}
> $$

$$
\begin{align}
 & \begin{cases}
x + y - z & = -6 \\
2x + y + z & = -1 \\
x - 2y + z & = 6
\end{cases} \\
\implies & \begin{bmatrix}
1 & 1 & -1 & \bigm| & -6 \\
2 & 1 & 1 & \bigm| & -1 \\
1 & -2 & 1 & \bigm| & 6
\end{bmatrix} \\
= & \begin{bmatrix}
1 & 0 & 0 & \bigm| & -1 \\
0 & 1 & 0 & \bigm| & -2 \\
0 & 0 & 1 & \bigm| & 3
\end{bmatrix} \\
\implies & \begin{cases}
x & = -1 \\
y & = -2 \\
z & = 3
\end{cases}
\end{align}
$$

> Trouver $a$, $b$, $c$, $d$ et $e$ sachant que $B$ est antisymétrique.
> 
> $$
> B = \begin{bmatrix}
> a & 5d - 3e + c & 0 \\
> -8 & b & -5 \\
> -3d - 3e + a & 5 & c
> \end{bmatrix}
> $$

$$
\begin{align}
 & \begin{cases}
a & = -a \\
5d - 3e + c & = 8 \\
-3d - 3e + a & = 0 \\
b & = -b \\
c & = -c
\end{cases} \\
\implies & \begin{bmatrix}
2 & 0 & 0 & 0 & 0 & \bigm| & 0 \\
0 & 0 & 1 & 5 & -3 & \bigm| & 8 \\
1 & 0 & 0 & -3 & -3 & \bigm| & 0 \\
0 & 2 & 0 & 0 & 0 & \bigm| & 0 \\
0 & 0 & 2 & 0 & 0 & \bigm| & 0
\end{bmatrix} \\
= & \begin{bmatrix}
1 & 0 & 0 & 0 & 0 & \bigm| & 0 \\
0 & 1 & 0 & 0 & 0 & \bigm| & 0 \\
0 & 0 & 1 & 0 & 0 & \bigm| & 0 \\
0 & 0 & 0 & 1 & 0 & \bigm| & 1 \\
0 & 0 & 0 & 0 & 1 & \bigm| & -1
\end{bmatrix} \\
\implies & \begin{cases}
a & = 0 \\
b & = 0 \\
c & = 0 \\
d & = 1 \\
e & = -1
\end{cases}
\end{align}
$$