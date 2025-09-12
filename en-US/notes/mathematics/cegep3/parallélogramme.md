---
tags:
  - algebra/linear
  - cegep/3
date: 2025-09-05T10:43:37
---

# parallélogramme

Quadrilatère dont les côtés opposés sont les mêmes [[vecteur|vecteurs]] (même longueur et direction)

![[assets/excalidraw/parallélogramme]]

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