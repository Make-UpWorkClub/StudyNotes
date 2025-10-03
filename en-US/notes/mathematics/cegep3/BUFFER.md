---
tags:
  - algebra/linear
  - cegep/2
date: 2025-08-19T10:08:35
---

# Buffer

- B-315
- Porte ouverte = question
- lundi 12:15-14:15
- mercredi 11:15-13:15
- vendredi 12:15-13:15

# distance

## Entre une droite et un point

![[distance droite-point]]

$$
\begin{align}
dist(A, D) & = ||orth_{\vec{d}}\vec{PA}|| = ||\vec{PA} - \frac{\vec{PA} \cdot \vec{d}}{||\vec{d}||^2}\vec{d}|| \\
 & = \frac{||\vec{PA} \times \vec{d}||}{||\vec{d}||} \\
P_D(A) & = \vec{OP} + proj_{\vec{d}}\vec{PA}
\end{align}
$$

## Entre deux droites

- Coïncidentes parallèles ou intersectées : 0
- Distinctes parallèles: distance entre un point quelconque sur une droite et l'autre
- Obliques : $$
dist(D_1, D_2) = ||proj_{\vec{d_1} \times \vec{d_2}}\vec{P_1P_2}||
$$

## Exemples

> $$
> \begin{align}
> A & = (2, 1, 1) \\
> D: & \begin{cases}
x & = -1 + t \\
y & = 8 + 2t \\
z & = 8 + t
\end{cases}
> \end{align}
> $$

> 1. Montrer que $A \notin D$.

$$
\begin{align}
x & = -1 + t \\
2 & = -1 + t \\
t & = 3 \\
 \\
y & = 8 + 2t \\
1 & = 8 + 2t \\
t & = -\frac{7}{2} \\
 \\
3 & \ne -\frac{7}{2}
\end{align}
$$

> 2. Trouver le point $P_D(A)$.

$$
\begin{align}
\vec{d} & = \langle 1, 2, 1 \rangle \\
P & = (-1, 8, 8) \\
\vec{PA} & = \vec{OA} - \vec{OP} = \langle 3, -7, -7 \rangle \\
\vec{OP_D(A)} & = \vec{OP} + proj_{\vec{d}}\vec{PA} \\
 & = \langle -1, 8, 8 \rangle + \frac{\vec{PA} \cdot \vec{d}}{\vec{d} \cdot \vec{d}}\vec{d} \\
 & = \langle -1, 8, 8 \rangle - \frac{18}{6}\langle -3, -6, -3 \rangle \\
 & = \langle 4, 2, 5 \rangle \\
\implies P_D(A) & = (4, 2, 5)
\end{align}
$$

> 3. Trouver la distance entre $A$ et $D$.

$$
\begin{align}
dist(A, D) & = ||\vec{OA} - \vec{OP_D(A)}|| \\
 & = ||\langle 2, 1, 1 \rangle - \langle -4, 2, 5 \rangle|| \\
 & = \sqrt{53}
\end{align}
$$