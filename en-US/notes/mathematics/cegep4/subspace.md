---
tags:
  - mat/algebra
  - cegep/4
date: 2026-01-28T14:34:13
---

# subspace

Let $W$ be a subset of real [[vector space]] $V$. $W$ is a subspace of $V$ if and only if $W$ is a real vector space, i.e.:

- $\vec{0} \in W$
- $\vec{u}, \vec{v} \in W \implies \vec{u} + \vec{v} \in W$
- $\vec{u} \in W \implies k\vec{u} \in W\ \forall k \in \mathbb{R}$

## Properties

> $$
> \{ \vec{0} \} \le V
> $$

> $$
> V \le V
> $$

> $$
> W_1 \cap W_2 \le V
> $$

## Examples

> $$
> A = \begin{bmatrix}
> 1 & 2 & 1 & 0 \\
> 0 & 1 & 3 & 0 \\
> 1 & -1 & 0 & 1
> \end{bmatrix}
> $$
> 
> Find $\mathrm{Null}(A)$.

$$
\begin{align}
 & \begin{bmatrix}
1 & 2 & 1 & 0 & \bigm| & 0 \\
0 & 1 & 3 & 0 & \bigm| & 0 \\
1 & -1 & 0 & 1 & \bigm| & 0
\end{bmatrix} \\
= & \begin{bmatrix}
1 & 0 & 0 & \frac{5}{8} & \bigm| & 0 \\
0 & 1 & 0 & -\frac{3}{8} & \bigm| & 0 \\
0 & 0 & 1 & \frac{1}{8} & \bigm| & 0
\end{bmatrix} \\
\implies & \begin{cases}
x_1 & = -\frac{5}{8}t \\
x_2 & = \frac{3}{8}t \\
x_3 & = -\frac{1}{8}t \\
x_4 & = t
\end{cases} \\
\implies \mathrm{Null}(A) & = \left\{ \left. t\begin{bmatrix}
-\frac{5}{8} \\
\frac{3}{8} \\
-\frac{1}{8} \\
1
\end{bmatrix} \right| t \in \mathbb{R} \right\} = \mathrm{span}\left( \begin{bmatrix}
-\frac{5}{8} \\
\frac{3}{8} \\
-\frac{1}{8} \\
1
\end{bmatrix} \right)
\end{align}
$$