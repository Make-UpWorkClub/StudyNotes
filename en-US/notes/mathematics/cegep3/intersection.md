---
tags:
  - algebra/linear
  - cegep/3
date: 2025-10-10T10:17:41
---

# intersection

## Entre deux droites

Forme paramétrique

## Entre un plan et une droite

Plan : forme générale
Droite : forme paramétrique

## Entre deux plans

Forme générale

## Exemples

> $$
> \begin{align}
> D_1 & \langle x, y, z \rangle = \langle 7, - 3, -2 \rangle + t \langle t, -1, -1 \rangle \\
> D_2: & x - 1 = y - 6 = -z - 1
> \end{align}
> $$

> 1. Démontrer que $D_1 \cap D_2$ est un point.

$$
\begin{align}
\vec{d_1} & = \langle 2, -1, -1 \rangle \\
\vec{d_2} & = \langle 1, 1, -1 \rangle \\
P_1: & (7, -3, -2) \\
P_2: &  (1, 6, -1) \\
 \\
\vec{d_1} \times \vec{d_2} & = \begin{bmatrix}
2 \\
1 \\
3
\end{bmatrix} \ne \vec{0} \\
D_1 & \nparallel D_2 \\
 \\
\vec{P_1P_2} & = \langle 1, 6, -1 \rangle - \langle 7, -3, -2 \rangle \\
 & = \langle -6, 9, 1 \rangle \\
\implies \vec{P_1P_2} \cdot (\vec{d_1 \times \vec{d_2}}) & = \langle -6, 9, 1 \rangle \cdot \langle 2, 1, 3 \rangle = 0 \\
\therefore D_1 \cap D_2 & = \{ A \}
\end{align}
$$

> 2. Déterminer les coordonnées du point d'intersection.

$$
\begin{align}
7 + 2t_1 & = 1 + t_2 \\
-3 - t_1 & = 6 + t_2 \\
\implies 10 + 3t_1 & = -5 \\
t_1 & = -5 \\
 \\
\vec{OA} & = \langle 7, -3, -2 \rangle + - 5\langle 2, -1, -1 \rangle \\
 & = \langle -3, 2, 3 \rangle \\
\implies A & = (-3, 2, 3)
\end{align}
$$

> $$
> \begin{align}
> \pi: & x + 2y - z = -9 \\
> D: & \langle x, y, z \rangle = \langle 2, -3, -3 \rangle + t \langle -1, 1, 3 \rangle
> \end{align}
> $$
> 
> Trouver $D \cap \pi$.

> $$
> \begin{align}
> \pi_1: & x + y - z = 2 \\
> \pi_2: & x + y + z = 1
> \end{align}
> $$
> 
> Trouver $\pi_1 \cap \pi_2$.

$$
\begin{align}
\implies 2x + 2y & = 3 \\
x + y & = \frac{3}{2}
\end{align}
$$

Poser $x = t$, alors

$$
\begin{align}
t + y & = \frac{3}{2} \\
y & = \frac{3}{2} - t \\
 \\
t + \left( \frac{3}{2} - t \right) - z & = 2 \\
z & = -\frac{1}{2} \\
 \\
\implies D: & \begin{cases}
x & = t \\
y & = \frac{3}{2} - t \\
z & = -\frac{1}{2}
\end{cases}
\end{align}
$$