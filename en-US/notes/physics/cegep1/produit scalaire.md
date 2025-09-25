---
tags:
  - Physics/Mechanics
  - algebra/linear
  - cegep/1
  - cegep/3
date: 2024-10-21T09:07:53
---

# produit scalaire

Opération [[vecteur|vectorielle]]
Soit $\vec{u}, \vec{v}, \vec{w} \in \mathbb{R}^n$,

$$
\begin{align}
\vec{v} \cdot \vec{w} & = v_1w_1 + v_2w_2 +\dots v_nw_n \\
 & = ||\vec{v}||\ ||\vec{w}||\cos\theta
\end{align}
$$

## Propriétés

> $\theta = \arccos \frac{\vec{v} \cdot \vec{w}}{||\vec{v}||\ ||\vec{w}||}$

### Commutativité

> $\vec{v} \cdot \vec{w} = \vec{w} \cdot \vec{v}$

### Distributivité

> $\vec{u} \cdot (\vec{v} + \vec{w}) = \vec{u} \cdot \vec{v} + \vec{u} \cdot \vec{w}$

$$
\begin{align}
\vec{u} \cdot(\vec{v} + \vec{w}) & = \vec{u} \cdot < v_1 + w_1, v_2 + w_2,\dots v_n + w_n > \\
 & = u_1(v_1 + w_1) + u_2(v_2 + w_2) +\dots u_n(v_n + w_n) \\
 & = u_1v_1 + u_2v_2 +\dots u_nv_n + u_1w_1 + u_2w_2 +\dots u_nw_n \\
 & = \vec{u} \cdot \vec{v} + \vec{u} \cdot \vec{w}
\end{align}
$$

$\square$

### Associativité avec multiple scalaire

> $(c\vec{u}) \cdot \vec{v} = c(\vec{u} \cdot \vec{v}) = \vec{u} \cdot(c\vec{v})$

### Carré de norme

> $\vec{u} \cdot \vec{u} = ||\vec{u}||^2$

### Perpendicularité

> $\vec{v} \perp \vec{w} \iff \vec{v} \cdot \vec{w} = 0$

## Exemples

> Supposer que $||\vec{v}|| = 6, \ ||\vec{w}|| = 5, \ \vec{v} \cdot \vec{w} = -5$, évaluer $(6\vec{v} + \vec{w}) \cdot (2\vec{v} - 5\vec{w})$.

$$
\begin{align}
(6\vec{v} + \vec{w}) \cdot (2\vec{v} - 5\vec{w}) & = 12\vec{v} \cdot \vec{v} - 30\vec{v} \cdot \vec{w} + 2\vec{w} \cdot \vec{v} - 5\vec{w} \cdot \vec{w} \\
 & = 12||\vec{v}||^2 - 28\vec{v} \cdot \vec{w} - 5||\vec{w}||^2 \\
 & = 12 \cdot6^2 - 28(-5) - 5 \cdot5^2 \\
 & = 447
\end{align}
$$

> Montrer que les diagonales d'un losange sont perpendiculaires.

![[losange|200]]

On veut montrer que $\vec{u} \cdot \vec{v} = 0$.

$$
\begin{align}
\vec{u} \cdot \vec{v} & = (\vec{d} + \vec{a}) \cdot(\vec{a} + \vec{b}) \\
 & = \vec{d} \cdot \vec{a} + \vec{d} \cdot \vec{b} + \vec{a} \cdot \vec{a} + \vec{a} \cdot \vec{b} \\
 & = \cancel{-\vec{b} \cdot \vec{a}} \cancel{- \vec{b} \cdot \vec{b}} \cancel{+ \vec{a} \cdot \vec{a}} \cancel{+ \vec{a} \cdot \vec{b}} \\
 & = 0
\end{align}
$$