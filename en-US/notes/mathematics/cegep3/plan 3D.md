---
tags:
  - algebra/linear
  - cegep/3
date: 2025-09-23T11:32:31
---

# plan 3D

## Équations

### Générale

Soit $P = (x_0, y_0, z_0) \in \pi$ et un **vecteur normal** $\vec{n} = (a, b, c)$,

$$
\begin{align}
\pi: (\langle x, y, z \rangle - \vec{OP}) \cdot \vec{n} & = 0 \\
ax + by + cz - d & = 0 \\
d & = \langle ax_0, by_0, cz_0 \rangle
\end{align}
$$

### Vectorielle

Soit $P = (x_0, y_0, z_0) \in \pi$ et deux ==vecteurs directeurs== $\vec{u}, \vec{v} \parallel \pi$ de sorte que $\vec{u} \nparallel \vec{v}$,

$$
\begin{align}
\pi: \langle x, y, z \rangle & = \vec{OP} + s\vec{u} + t\vec{v} \\
\langle x, y, z \rangle & = \langle x_0 + su_1 + tv_1, y_0 + su_2 + tv_2, z_0 + su_3 + tv_3 \rangle
\end{align}
$$

- $\vec{u} \times \vec{v}$ est un vecteur normal de $\pi$.

## Exemples

> Soit $\pi: x + y - 2z + 3 = 0$.

> 1. Trouver un vecteur perpendiculaire à $\pi$.

$$
\vec{n} = \langle 1, 1, -2 \rangle
$$

> 2. Trouver un point sur $\pi$.

Soit $Q = (0, 0, z) \in \pi$,

$$
\begin{align}
0 + 0 - 2z + 3 & = 0 \\
z & = \frac{3}{2} \\
\implies Q & = \left( 0, 0, \frac{3}{2} \right)
\end{align}
$$

> Trouver une équation pour le plan $\pi$ perpendiculaire à
> 
> $$
> L:\begin{cases}
x & = 2 + t \\
y & = 4 \\
z & = 4 - 5t
\end{cases}
> $$
> 
> et passant par $P = (1, -3, 4)$.

Puisque $L\perp \pi$, $\vec{n}$ est le vecteur directeur de $L$, donc $\langle 1, 0, -5 \rangle$.

$$
\begin{align}
d & = \vec{OP} \cdot \vec{n} \\
 & = \langle 1, -3, 4 \rangle \cdot \langle 1, 0, -5 \rangle  \\
 & = 1 + 0 - 20 \\
 & = -19 \\
\implies \pi: ax + by + cz - d & = 0 \\
\pi: x - 5z + 19 & = 0
\end{align}
$$

> Donner l'équation d'un plan $\pi$ perpendiculaire à l'axe des $z$.

$\pi \perp z \implies \vec{n} \parallel z$

Soit $\vec{n} = \langle 0, 0, 1 \rangle \parallel z$ et $P = (0, 0, 0)$.

$$
\begin{align}
d & = \vec{OP} \cdot \vec{n} = 0 \\
\implies \pi: ax + by + cz & = 0 \\
z & = 0
\end{align}
$$