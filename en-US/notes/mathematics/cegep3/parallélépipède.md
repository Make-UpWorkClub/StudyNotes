---
tags:
  - algebra/linear
  - cegep/3
date: 2025-09-16T11:22:51
---

# parallélépipède

Prisme composé de 6 [[en-US/notes/mathematics/cegep3/parallélogramme|parallélogrammes]]

> ![[assets/img/parallélépipède]]

## Propriétés

> Le volume du parallélépipède est le [[triple produit scalaire]] de ses vecteurs.
> $V = |\vec{AB} \cdot (\vec{AC} \times \vec{AD})|$

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

> Soit les vecteurs $\vec{u}, \vec{v}, \vec{w}$ tels que le volume du parallélépipède engendré par les 3 vecteurs soit 4. Calculer toutes les valeurs possible de $\vec{u} \cdot ((2\vec{v} + \vec{w}) \times (\vec{w} + 3\vec{u}))$.

$$
\begin{align}
\vec{u} \cdot ((2\vec{v} + \vec{w}) \times (\vec{w} + 3\vec{u})) & = \vec{u} \cdot (2\vec{v} \times \vec{w} + \underbrace{6\vec{v} \times \vec{u}}_{0} + \underbrace{\vec{w} \times \vec{w}}_{0} + \underbrace{3\vec{w} \times \vec{u}}_{0}) \\
 & = 2\vec{u} \cdot (\vec{v} \times \vec{w}) \\
 & = 2 (\pm4) \\
 & = \pm8
\end{align}
$$