---
tags:
  - mat/algebra
  - cegep/3
date: 2025-10-24T11:33:48
---

# multiplication matricielle

Opération [[matrice|matricielle]]
`Ant.` [[inverse matricielle]]
Soit les matrices compatibles

$$
\begin{align}
A_{mk} & = \begin{bmatrix}
\vec{L_1} \\
\vec{L_2} \\
\vdots \\
\vec{L_m}
\end{bmatrix} \\
B_{kn} & = \begin{bmatrix}
\vec{C_1} & \vec{C_2} & \dots & \vec{C_n}
\end{bmatrix}
\end{align}
$$

La multiplication matricielle de $A$ et $B$ est

$$
AB = [\vec{L_i} \cdot \vec{C_j}]_{mn} 
$$

> [!abstract] compatibilité
> Propriété de deux matrices dont le nombre de colonnes de l'une est égal au nombre de lignes de l'autre

## Propriétés

> $$
> \exists A^2 \iff \mathrm{size}(A) = n \times n
> $$

> $$
> \vec{u}^T\vec{v} = \vec{u} \cdot \vec{v}
> $$

### Non-commutativité

> $AB \ne BA$

> Soit $A$ et $B$ deux matrices qui commutent. Alors,
> 
> $$
> \mathrm{size}(A) = \mathrm{size}(B) = n \times n
> $$

Par hypothèse,

$$
AB = BA
$$

Supposons que $\mathrm{size}(A) = m \times n$ et $\mathrm{size}(B) = k \times l$.

Puisque $AB$ est défini,

$$
\begin{align}
n & = k \\
\implies \mathrm{size}(B) & = n \times l
\end{align}
$$

Puisque $BA$ est défini,

$$
\begin{align}
l & = m \\
\implies \mathrm{size(B)} & = n \times m
\end{align}
$$

Puisque $AB = BA$,

$$
\begin{align}
n & = m \\
\implies \mathrm{size(A)} & = \mathrm{size(B)} = n \times n
\end{align}
$$

$\square$

### Associativité

$$
\begin{align}
k(AB) & = (kA)B \\
(AB)C & = A(BC)
\end{align}
$$

### Distributivité

$$
\begin{align}
A(B + C) & = AB + AC \\
(B + C)A & = BA + CA
\end{align}
$$

### Neutre multiplicatif

Soit la matrice

$$
I = [I_{ij}]_{mn}\text{ où }I_{ij} = \begin{cases}
1, i = j \\
0, i \ne j
\end{cases}
$$

Alors

$$
A_{mn} = I_{mm}A = AI_{nn}
$$

## Exemples

> Trouver toutes les matrices qui commutent avec la matrice
> 
> $$
> A = \begin{bmatrix}
> 44 & -24 \\
> -36 & -94
> \end{bmatrix}
> $$

$$
\begin{align}
AB = & BA \\
\begin{bmatrix}
44a - 24c & 44b - 24d \\
-36a - 94c & -36b - 94d
\end{bmatrix} = & \begin{bmatrix}
44a - 36b & -24a - 94b \\
44c - 36d & -24c - 94d
\end{bmatrix} \\
\implies & \begin{bmatrix}
0 & 36 & -24 & 0 & \bigm| & 0 \\
24 & 138 & 0 & -24 & \bigm| & 0 \\
-36 & 0 & -138 & 36 & \bigm| & 0 \\
0 & -36 & 24 & 0 & \bigm| & 0
\end{bmatrix} \\
= & \begin{bmatrix}
1 & 0 & \frac{23}{6} & -1 & \bigm| & 0 \\
0 & 1 & -\frac{2}{3} & 0 & \bigm| & 0 \\
0 & 0 & 0 & 0 & \bigm| & 0 \\
0 & 0 & 0 & 0 & \bigm| & 0
\end{bmatrix} \\
\implies & \begin{cases}
a & = -\frac{23}{6}s + t \\
b & = \frac{2}{3}s \\
c & = s \\
d & = t
\end{cases}
\end{align}
$$

> Une matrice C est dite idempotente si $C^2 = C$. Soit A et B des matrices (pas forcément carrées).
> Démontrer que si AB = I, alors BA est idempotente.

$$
\begin{align}
(BA)^2 & = BABA \\
 & = BIA \\
 & = BA
\end{align}
$$