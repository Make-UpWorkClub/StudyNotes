---
tags:
  - algebra/linear
  - cegep/3
date: 2025-09-05T10:43:37
---

# parallélogramme

Quadrilatère dont les côtés opposés sont les mêmes [[vecteur|vecteurs]] (même longueur et direction)

![[assets/excalidraw/parallélogramme]]

## Propriétés

> L'aire du parallélogramme est la norme du [[produit vectoriel]] de ses vecteurs.
> $A = ||\vec{v} \times \vec{w}||$
> L'aire du triangle formé par $\vec{v}$, $\vec{w}$ et $\vec{v} - \vec{w}$ est $\frac{||\vec{v} \times \vec{w}||}{2}$.

Soit $\theta$ l'angle entre $\vec{v}$ et $\vec{w}$,

$$
\begin{align}
A_\text{parallélogramme} & = bh \\
 & = ||\vec{v}||\ ||\vec{w}||\cos\theta \\
 & = ||\vec{v}\times \vec{w}|| \\
\implies A_\text{triangle} & = \frac{||\vec{v}\times \vec{w}||}{2}
\end{align}
$$

$\square$

## Vérification

> Soit $A, B, C, D \in \mathbb{R}^n$, déterminer si ces points forment un parallélogramme.

1. Choisir un point de base ($A$).
2. Calculer $\vec{AB}, \vec{AC}, \vec{AD}$.
3. Vérifier si l'addition de deux de ces vecteurs donne l'autre, alors $ABCD$ est un parallélogramme.

## Exemples

> Soit $A = (1, 2), \ B = (6, 4), \ C = (2, 5), \ D = (5, 1)$.

> 1. Vérifier que $ABCD$ forme un parallélogramme.

$$
\begin{align}
\vec{AC} & = \vec{DB} \\
< 2 - 1, 5 - 2 > & = < 6 - 5, 4 - 1 > \\
< 1, 3 > & = < 1, 3 > \\
 \\
\vec{AD} & = \vec{CB} \\
< 5 - 1, 1 - 2 > & = < 6 - 2, 4 - 5 > \\
< 4, -1 > & = < 4, -1 >
\end{align}
$$

Puisque les côtés opposés sont les mêmes vecteurs, $ABCD$ est un parallélogramme.

> 2. Calculer les longueurs des diagonales de $ABCD$.

$$
\begin{align}
||\vec{AB}|| & = \sqrt{(6 - 1)^2 + (4 - 2)^2} \\
 & = \sqrt{29} \\
 \\
||\vec{CD}|| & = \sqrt{(5 - 2)^2 + (1 - 5)^2} \\
 & = 5
\end{align}
$$

> Trouver l'aire du parallélogramme formé des points $A = (0, 5, 7), B = (-1, 13, 8), C = (-4, -5, 5), D = (-5, 3, 6)$.

$$
\begin{align}
\vec{AB} & = \vec{OB} - \vec{OA} & = \langle -1, 8, 1 \rangle \\
\vec{AC} & = \vec{OC} - \vec{OA} & = \langle -4, -10, -2 \rangle \\
\vec{AB} \times \vec{AC} & = \begin{bmatrix}
8(-2) + 10 \cdot 1 \\
1(-4) + 2(-1) \\
(-1)(-10) + 4 \cdot 8
\end{bmatrix} & = \begin{bmatrix}
-6 \\
-6 \\
42
\end{bmatrix} \\
||\vec{AB} \times \vec{AC}|| & = \sqrt{(-6)^2 + (-6)^2 + 42^2} & = 6\sqrt{51}
\end{align}
$$