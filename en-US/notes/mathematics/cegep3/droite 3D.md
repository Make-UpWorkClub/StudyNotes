---
tags:
  - mat/algebra
  - cegep/3
date: 2025-09-19T11:53:16
---

# droite 3D

## Équations

### Vectorielle

`Aka.` paramétrique
Soit un point $P = (x_0, y_0, z_0) \in D$ et un **vecteur directeur** $\vec{d} = \langle \Delta x, \Delta y, \Delta z \rangle\parallel D$,

$$
\begin{align}
D: \langle x, y, z \rangle & = \vec{OP} + t\vec{d} \\
\langle x, y, z \rangle & = \langle x_0 + td_1, y_0 + td_2, z_0 + td_3 \rangle 
\end{align}
$$

- Facile à vérifier l'inclusion d'un point

### Symétrique

$$
D = \frac{x - x_0}{d_1} = \frac{y - y_0}{d_2} = \frac{z - z_0}{d_3}
$$

> [!warning] Si $\vec{d}$ contient une composante nulle, on omet cette composante dans l'équation symétrique.

### Propriétés

> Deux droites qui s'intersectent sont coplanaires, donc le [[triple produit scalaire]] du vecteur entre deux points sur les droites et deux vecteurs directeurs est 0.
> 
> $$
> \vec{P_1P_2} \cdot (\vec{d_1} \times \vec{d_2}) = 0
> $$

## Exemples

> Soit la droite $D = < -3, 6, 1 > + t < -1, 0, 2 >$.

> 1. Donner l'équation symétrique de $D$.

$$
\begin{align}
d_2 = 0 & \implies y = y_0 \\
\frac{x + 3}{-1} & = \frac{z - 1}{2}, \ y = 6
\end{align}
$$

> 2. Vérifier si le point $Q = (-3, 6, 1)$ est sur $D$.

$$
\begin{align}
\frac{x + 3}{-1} &\  \frac{z - 1}{2} \\
\frac{-3 + 3}{-1} &\  \frac{1 - 1}{2} \\
0 & = 0 \\
y & = 6 \\
\implies Q & \in D
\end{align}
$$

> Soit $A = (1, -2, 5)$ et $B = (0, 3, 2)$.

> 1. Donner l'équation paramétrique de la droite $D$ passant par $A$ et $B$.

$$
\begin{align}
\vec{d} & = \vec{AB} = < -1, 5, -3 > \\
D & = < 1, -2, 5 > + t < -1, 5, -3 >
\end{align}
$$

> 2. Donner l'équation symétrique de $D$.

$$
\frac{x - 1}{-1} = \frac{y + 2}{5} = \frac{z - 5}{-3}
$$