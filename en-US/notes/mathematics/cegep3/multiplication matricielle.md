---
tags:
  - mat/algebra
  - cegep/3
date: 2025-10-24T11:33:48
---

# multiplication matricielle

Opération [[matrice|matricielle]]
Soit les matrices

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

## Propriétés

> $\exists A^2 \iff \mathrm{size}(A) = n \times n$

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
k(AB) = (kA)B
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

