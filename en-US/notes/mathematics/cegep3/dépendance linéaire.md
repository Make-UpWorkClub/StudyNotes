---
tags:
  - mat/algebra
  - cegep/3
date: 2025-11-14T11:52:03
---

# dépendance linéaire

Un ensemble de vecteurs $E = \{ \vec{v}_1, \vec{v}_2, \dots, \vec{v}_n \}$ est linéairement dépendant si

$$
\sum_{ i = 1 }^{ n } a_i\vec{v}_i = \vec{0}
$$

pour certains $a_1, a_2, \dots a_n$ où au moins un des $a_i$ est non-nul.

## Propriétés

> $E = \{ \vec{v}_1, \vec{v}_2, \dots, \vec{v}_k \}$ est linéairement dépendant si et seulement si au moins un des vecteurs dans $E$ peut s'écrire comme une combinaison linéaire des autres vecteurs dans $E$.

Supposons que $E$ est linéairement dépendant. De plus, sans perte de généralité, supposons que $a_1 \ne 0$. Par définition,

$$
\begin{align}
a_1\vec{v}_1 + a_2\vec{v}_2 +\dots + a_k\vec{v}_k & = \vec{0} \\
\vec{v}_1 & = -\frac{a_2}{a_1}\vec{v}_2 -\dots - \frac{a_k}{a_1}\vec{v}_k
\end{align}
$$

Supposons que $\vec{v}_1$ peut s'écrire comme une combinaison linéaire des autres vecteurs dans $E$. Par définition,

$$
\begin{align}
\vec{v}_1 & = a_2\vec{v}_{2} +\dots + a_k\vec{v}_k \\
\vec{0} & = -\vec{v}_1 + a_2\vec{v}_{2} +\dots + a_k\vec{v}_k \\
\implies a_1 & = -1 \ne 0
\end{align}
$$

$\square$

> $E = \{ \vec{v}_1, \vec{v}_2, \dots, \vec{v}_n \} \subseteq \mathbb{R}^n$ est linéairement indépendant si et seulement si
> 
> $$
> \begin{vmatrix}
> \vec{v}_{11} & \vec{v}_{12} & \dots & \vec{v}_{1n} \\
> \vec{v}_{21} & \vec{v}_{22} & \dots & \vec{v}_{2n} \\
> \vdots & \vdots &  & \vdots \\
> \vec{v}_{n_1} & \vec{v}_{n_2} & \dots & \vec{v}_{nn}
> \end{vmatrix} \ne 0
> $$

Pour $E' = \{ \vec{v}_{1}, \vec{v}_{2}, \vec{v}_{3} \} \subseteq R^3$ linéairement dépendant,

$$
\begin{align}
\det E'= \begin{vmatrix}
\vec{v}_{11} & \vec{v}_{12} & \vec{v}_{13} \\
\vec{v}_{21} & \vec{v}_{22} & \vec{v}_{23} \\
\vec{v}_{31} & \vec{v}_{32} & \vec{v}_{33}
\end{vmatrix} & = \vec{v}_{1} \cdot (\vec{v}_{2} \times \vec{v}_{3}) \\
 & = 0 \because E'\text{ est coplanaire} \\
\therefore \det E & \ne 0
\end{align}
$$

$\square$

## Exemples

> Trouver si les ensembles suivants sont linéairement dépendants.

> $$
> E = \{ \langle 1, -1, 1 \rangle, \langle 2, -1, -1 \rangle, \langle -4, 1, 5 \rangle \}
> $$

$$
\begin{align}
\begin{bmatrix}
1 & 2 & -4 & \bigm| & 0 \\
-1 & -1 & 1 & \bigm| & 0 \\
1 & -1 & 5 & \bigm| & 0
\end{bmatrix} & = \begin{bmatrix}
1 & 0 & 2 & \bigm| & 0 \\
0 & 1 & -3 & \bigm| & 0 \\
0 & 0 & 0 & \bigm| & 0
\end{bmatrix} \\
\implies \vec{s} & = \langle -2t, 3t, t \rangle \\
\therefore E & \text{ est linéairement dépendant}
\end{align}
$$

> $$
> F = \{ \langle 1, -1, 1 \rangle, \langle 2, -1, -1 \rangle, \langle -4, 1, 5 \rangle \}
> $$

$$
\begin{align}
\begin{vmatrix}
1 & -1 & 1 \\
2 & -1 & -1 \\
-4 & 1 & 5
\end{vmatrix} & = \begin{vmatrix}
-1 & 1 \\
-1 & 5
\end{vmatrix} + \begin{vmatrix}
2 & -1 \\
-4 & 5
\end{vmatrix} + \begin{vmatrix}
2 & -1 \\
-4 & 1
\end{vmatrix} \\
 & = -5 + 1 + 10 - 4 - 4 + 2 \\
 & = 0 \\
\therefore E & \text{ est linéairement dépendant}
\end{align}
$$