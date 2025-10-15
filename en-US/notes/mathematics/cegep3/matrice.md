---
tags:
  - algebra/linear
  - cegep/3
date: 2025-10-10T11:31:35
---

# matrice

Une matrice de $m$ lignes et de $n$ colonnes est un tableau de forme :

$$
\begin{bmatrix}
a_{11} & a_{12} & \dots & a_1n \\
a_{21} & a_{22} & \dots & a_{2n} \\
\vdots & \vdots & & \vdots \\
a_{m_1} & a_{m_2} & \dots & a_{mn}
\end{bmatrix}
$$

## Formes

### Échelonnée

1. Toutes les lignes nulles sont en dessous des lignes non-nulles.
2. Le pivot d'une ligne est à droite du pivot de la ligne au dessus.

`Abbr.` FE

> [!abstract] pivot
> Premier coefficient non-nul

> [!info]
> - Si $A$ et $B$ se réduisent à la même FE, $A \sim B$.
> - Si $[A|\vec{b}] \sim [C|\vec{d}]$, ils ont les mêmes solutions.

> [!example]+
> $$
> \begin{bmatrix}
> -1 & 2 & 3 & 7 & 0 \\
> 0 & 0 & 4 & -3 & 1 \\
> 0 & 0 & 0 & 7 & 2 \\
> 0 & 0 & 0 & 0 & -1
> \end{bmatrix}
> $$
> 
> $$
> \begin{bmatrix}
> -1 & 2 \\
> 0 & 3 \\
> 0 & 0 \\
> 0 & 0
> \end{bmatrix}
> $$

## Opérations élémentaires

### Permutation de lignes

$$
L_i \leftrightarrow L_j
$$

### Multiplication de ligne

$$
L_i \to kL_i, \ k \in \mathbb{R}
$$

### Addition de lignes

$$
L_i \to L_i + kL_j, \ k \in \mathbb{R}
$$

## Exemples

> Transformer $A$ en FE :
> 
> $$
> A = \begin{bmatrix}
> 1 & -2 & 1 & 4 \\
> -3 & 6 & -3 & -12 \\
> 2 & -8 & -6 & 9 \\
> 0 & 3 & 15 & 0
> \end{bmatrix}
> $$

$$
\begin{align}
\begin{bmatrix}
1 & -2 & 1 & 4 \\
-3 & 6 & -3 & -12 \\
2 & -8 & -6 & 9 \\
0 & 3 & 15 & 0
\end{bmatrix} & \xrightarrow{L_2 + 3L_1} & \begin{bmatrix}
1 & - 2 & 1 & 4 \\
0 & 0 & 0 & 0 \\
2 & -8 & -6 & 9 \\
0 & 3 & 15 & 0
\end{bmatrix} \\
 & \xrightarrow{L_2 \leftrightarrow L_4} & \begin{bmatrix}
1 & -2 & 1 & 4 \\
0 & 3 & 15 & 0 \\
2 & -8 & -6 & 9 \\
0 & 0 & 0 & 0
\end{bmatrix} \\
 & \xrightarrow{L_3 - 2L_1} & \begin{bmatrix}
1 & -2 & 1 & 4 \\
0 & 3 & 15 & 0 \\
0 & -4 & -8 & 1 \\
0 & 0 & 0 & 0
\end{bmatrix} \\
 & \xrightarrow{L_3 + \frac{4}{3}L_2} & \begin{bmatrix}
1 & -2 & 1 & 4 \\
0 & 3 & 15 & 0 \\
0 & 0 & 12 & 1 \\
0 & 0 & 0 & 0
\end{bmatrix}
\end{align}
$$

> Transformer $[A|\vec{b}]$ en FE :
> 
> $$
> [A|\vec{b}] = \begin{bmatrix}
> 0 & 2 & 1 & \bigm| & 4 \\
> 2 & 1 & 8 & \bigm| & 3 \\
> 1 & -2 & 1 & \bigm| & 4
> \end{bmatrix}
> $$

$$
\begin{align}
\begin{bmatrix}
0 & 2 & 1 & \bigm| & 4 \\
2 & 1 & 8 & \bigm| & 3 \\
1 & -2 & -1 & \bigm| & 4
\end{bmatrix} & \xrightarrow{L_1 \leftrightarrow L_3} & \begin{bmatrix}
1 & -2 & -1 & \bigm| & 4 \\
2 & 1 & 8 & \bigm| & 3 \\
0 & 2 & 1 & \bigm| & 4
\end{bmatrix} \\
 & \xrightarrow{L_2 - 2L_1} & \begin{bmatrix}
1 & -2 & 1 & \bigm| & 4 \\
0 & 5 & 10 & \bigm| & -5 \\
0 & 2 & 1 & \bigm| & 4
\end{bmatrix} \\
 & \xrightarrow{L_3 - \frac{2}{5}L_2} & \begin{bmatrix}
1 & -2 & 1 & \bigm| & 4 \\
0 & 5 & 10 & \bigm| & -5 \\
0 & 0 & -3 & \bigm| & 6
\end{bmatrix}
\end{align}
$$