---
tags:
  - mat/algebra
  - cegep/3
date: 2025-11-14T11:18:20
---

# combinaison linéaire

Somme de multiples de vecteurs

$$
a_1\vec{v}_1 + a_2\vec{v}_2 +\dots a_k\vec{v}_k
$$

## Exemples

> Déterminer si $\vec{w} = \langle 1, 4, 6, 4 \rangle$ est une combinaison linéaire des vecteurs
> 
> $$
> \begin{align}
> \vec{v}_1 & = \langle 2, -1, -3, 1 \rangle \\
> \vec{v}_2 & = \langle 1, -2, -4, 2 \rangle \\
> \vec{v}_3 & = \langle 0, 3, 5, -3 \rangle
> \end{align}
> $$

$$
\begin{align}
\vec{w} = & a_1\vec{v}_1 + a_2\vec{v}_{2} + a_3\vec{v}_{3} \\
\begin{bmatrix}
1 \\
4 \\
6 \\
4
\end{bmatrix} = & \begin{bmatrix}
2a_1 + a_2 + 0a_3 \\
-a_1 - 2a_2 + 3a_3 \\
-3a_1 - 4a_2 + 5a_3 \\
a_1 + 2a_2 - 3a_3
\end{bmatrix} \\
\implies & \begin{bmatrix}
2 & 1 & 0 & \bigm| & 1 \\
-1 & -2 & 3 & \bigm| & 4 \\
-3 & -4 & 5 & \bigm| & 6 \\
1 & 2 & -3 & \bigm| & -4
\end{bmatrix} \\
= & \begin{bmatrix}
1 & 0 & 1 & \bigm| & 2 \\
0 & 1 & -2 & \bigm| & -3 \\
0 & 0 & 0 & \bigm| & 0 \\
0 & 0 & 0 & \bigm| & 0
\end{bmatrix} \\
\implies & \begin{cases}
a_1 & = 2 - t \\
a_2 & = -3 + 2t \\
a_3 & = t
\end{cases} \\
\implies & \vec{w}\text{ est une combinaison linéaire de }\vec{v}_1, \vec{v}_2\text{ et }\vec{v}_3\text{.}
\end{align}
$$