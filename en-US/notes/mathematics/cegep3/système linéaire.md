---
tags:
  - algebra/linear
  - cegep/3
date: 2025-10-10T10:49:23
---

# système linéaire

Un système linéaire de $n$ variables et de $m$ [[équation linéaire|équations]] :

$$
(A) = \left. \begin{cases}
\sum_{ i = 1 }^{ n } a_{1i}x_i = b_i \\
\sum_{ i = 1 }^{ n } a_{2i}x_i = b_i \\
\vdots \\
\sum_{ i = 1 }^{ n } a_{mi}x_i = b_i
\end{cases} \ \ \ \ \ \right\}m
$$

- Un système doit avoir une, une infinité de, ou aucune solution.
- Une ou une infinité de solutions -> système ==consistent==
- Aucune solution -> système ==inconsistent==
- Deux systèmes sont équivalents s'ils ont les mêmes solutions.

## Matrice des coefficients

La [[matrice]] des coefficients de $A$ est

$$
[A] = \begin{bmatrix}
a_{11} & a_{12} & \dots & a_1n \\
a_{21} & a_{22} & \dots & a_{2n} \\
\vdots & \vdots & & \vdots \\
a_{m_1} & a_{m_2} & \dots & a_{mn}
\end{bmatrix}
$$

La matrice augmentée de $A$ est

$$
[A|\vec{B}] = \begin{bmatrix}
a_{11} & a_{12} & \dots & a_1n & \bigm| & b_1 \\
a_{21} & a_{22} & \dots & a_{2n} & \bigm| & b_2 \\
\vdots & \vdots & & \vdots & \bigm| \\
a_{m_1} & a_{m_2} & \dots & a_{mn} & \bigm| & b_m
\end{bmatrix}
$$

## Résolution

### Élimination de Gauss

Pour résoudre un système linéaire :

1. Écrire la matrice augmentée.
2. Trouver une FE.
3. Résoudre le système linéaire correspondant à la FE.

## Exemples

> Résoudre
> 
> $$
> \begin{cases}
> x + 2y - 4z & = 8 \\
> -x + y - 2z & = -5 \\
> 2x + 6y - 9z & = 9
> \end{cases}
> $$

$$
\begin{align}
\begin{bmatrix}
1 & 2 & -4 & \bigm| & 8 \\
-1 & 1 & -2 & \bigm| & -5 \\
2 & 6 & -9 & \bigm| & 9
\end{bmatrix} & = \begin{bmatrix}
1 & 2 & -4 & \bigm| & 8 \\
0 & 3 & -6 & \bigm| & 3 \\
2 & 6 & -9 & \bigm| & 9
\end{bmatrix} \\
 & = \begin{bmatrix}
1 & 2 & -4 & \bigm| & 8 \\
0 & 3 & -6 & \bigm| & 3 \\
0 & 2 & -1 & \bigm| & -7
\end{bmatrix} \\
 & = \begin{bmatrix}
1 & 2 & -4 & \bigm| & 8 \\
0 & 1 & -2 & \bigm| & 1 \\
0 & 0 & 3 & \bigm| & -9
\end{bmatrix} \\
 & = \begin{bmatrix}
1 & 2 & -4 & \bigm| & 8 \\
0 & 1 & -2 & \bigm| & 1 \\
0 & 0 & 1 & \bigm| & -3
\end{bmatrix} \\
 & = \begin{bmatrix}
1 & 2 & -4 & \bigm| & 8 \\
0 & 1 & 0 & \bigm| & -5 \\
0 & 0 & 1 & \bigm| & -3
\end{bmatrix} \\
 & = \begin{bmatrix}
1 & 0 & 0 & \bigm| & 6 \\
0 & 1 & 0 & \bigm| & -5 \\
0 & 0 & 1 & \bigm| & -3
\end{bmatrix} \\
 \\
\begin{cases}
x & = 30 \\
y & = -5 \\
z & = -3
\end{cases}
\end{align}
$$