---
tags:
  - mat/algebra
  - cegep/4
date: 2026-04-22T15:47:20
---

# orthogonal set

Set of [[vecteur|vectors]] such that every vector is orthogonal to all other vectors

## Properties

> In a real inner product space, let
> 
> $$
> A = \begin{bmatrix}
> \vec{v}_{1} \\
> \vdots \\
> \vec{v}_m
> \end{bmatrix}
> $$
> 
> $\{ \vec{v}_{1}, \dots, \vec{v}_m \}$ is orthogonal if and only if $AA^T$ is diagonal.

> In a real inner product space, an orthogonal set without $\vec{0}$ is [[dépendance linéaire|linearly independent]].

Let $S = \{ \vec{v}_{1}, \dots, \vec{v}_n \}, \ \vec{0} \notin S$ be an orthogonal set, then

$$
\begin{align}
\sum_{ i = 1 }^{ n } c_i\vec{v}_i & = \vec{0} \\
\implies \left\langle  \vec{v}_{1}, \sum_{ i = 1 }^{ n } c_i\vec{v}_i  \right\rangle & = \langle \vec{v}_{1}, \vec{0} \rangle \\
\sum_{ i = 1 }^{ n } \langle \vec{v}_{1}, c_i\vec{v}_i \rangle & = 0 \\
\sum_{ i = 1 }^{ n } c_i\langle \vec{v}_{1}, \vec{v}_i \rangle & = 0 \\
c_1\langle \vec{v}_{1}, \vec{v}_{1} \rangle & = 0 \\
c_1 & = 0
\end{align}
$$

Similarly, we can show that $c_2, \dots, c_n = 0$.
Therefore, $S$ is orthogonal.

$\square$