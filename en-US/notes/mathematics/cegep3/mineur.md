---
tags:
  - mat/algebra
  - cegep/3
date: 2025-11-11T11:26:03
---

# mineur

Le mineur $M_{ij}$ de $A_{n \times n}$ est le [[déterminant]] de $A'_{(n - 1) \times (n - 1)}$ obtenue en retirant la ligne $i$ et la colonne $j$ de $A$.

## Exemples

> Trouver $M_{34}$ de $A$.
> 
> $$
> A = \begin{bmatrix}
> 3 & 1 & 0 & -2 \\
> 1 & 0 & 1 & -1 \\
> 4 & 1 & 0 & 2 \\
> -1 & 2 & -5 & 3
> \end{bmatrix}
> $$

$$
\begin{align}
M_{34} & = \begin{vmatrix}
3 & 1 & 0 & \cancel{-2} \\
1 & 0 & 1 & \cancel{-1} \\
\cancel{4} & \cancel{1} & \cancel{0} & \cancel{2} \\
-1 & 2 & -5 & \cancel{3}
\end{vmatrix} \\
 & = 3 \cdot 0(-5) + 1 \cdot 1(-1) + 0 \cdot 1 \cdot 2 + 1 \cdot 0 \cdot 0 - 2 \cdot 1 \cdot 3 + 5 \cdot 1 \cdot 1 \\
 & = -2
\end{align}
$$