---
tags:
  - algebra/linear
  - cegep/3
date: 2025-09-16T10:46:46
---

# triple produit scalaire

Opération [[vecteur|vectorielle]]
Soit $\vec{u}, \vec{v}, \vec{w} \in \mathbb{R}^3, \ k \in \mathbb{R}$,

$$
\vec{u} \cdot (\vec{v} \times \vec{w})
$$

## Propriétés

> $\vec{u} \cdot (\vec{v} \times \vec{w}) = -\vec{v} \cdot (\vec{u} \times \vec{w}) = -\vec{w} \cdot (\vec{v} \times \vec{u}) =\dots$

### Formule de volume

> ![[assets/img/parallélépipède]]
> Le volume du [[assets/img/parallélépipède|parallélépipède]] est $|\vec{AB} \cdot (\vec{AC} \times \vec{AD})|$.

$$
\begin{align}
A_B & = ||\vec{AB} \times \vec{AC}|| \\
 \\
h & = ||\vec{AD}||\cos\theta \\
 \\
V & = A_Bh \\
 & = ||\vec{AB} \times  \vec{AC}||\ ||\vec{AD}||\cos\theta \\
 & = \vec{AD} \cdot (\vec{AB} \times  \vec{AC}) \\
 & = |\vec{AB} \cdot (\vec{AC} \times  \vec{AD})|
\end{align}
$$

$\square$

## Exemples

> $\vec{u} \cdot (\vec{v} \times \vec{w}) = 8$

> 1. Calculer $(3\vec{w}) \cdot ((2\vec{v}) \times \vec{u})$.

$$
\begin{align}
(3\vec{w}) \cdot ((2\vec{v}) \times \vec{u}) & = 6(\vec{w} \cdot (\vec{v} \times \vec{u})) \\
 & = -6(\vec{u} \cdot(\vec{v} \times \vec{w})) \\
 & = -6 \cdot8 \\
 & = -48
\end{align}
$$

> 2. Calculer $(2\vec{v} + \vec{w}) \cdot[(\vec{u} + \vec{v}) \times \vec{w}]$.

$$
\begin{align}
(2\vec{v} + \vec{w}) \cdot[(\vec{u} + \vec{v}) \times \vec{w}] & = (2\vec{v} + \vec{w}) \cdot (\vec{u} \times \vec{w} + \vec{v} \times \vec{w}) \\
 & = 2\vec{v} \cdot (\vec{u} \times \vec{w}) + 2\vec{v} \cdot (\vec{v} \times \vec{w}) + \vec{w} \cdot (\vec{u} \times \vec{w}) + \vec{w} \cdot (\vec{v} \times \vec{w}) \\
 & = -2\vec{u} \cdot (\vec{v} \times \vec{w}) \\
 & = -2 \cdot 8 \\
 & = -16
\end{align}
$$