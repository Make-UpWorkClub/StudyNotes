---
tags:
  - mat/algebra
  - cegep/4
date: 2026-02-27T15:27:47
---

# kernel

Let $T:V \to W$ be a [[en-US/notes/mathematics/cegep4/linear transformation|linear transformation]]. The kernel of $T$ is the set of all vectors in $V$ nullified by $T$.

$$
\mathrm{Ker}(T) = \{ \vec{v}\ |\ \vec{v} \in V\ \&\ T(\vec{v}) = \vec{0} \}
$$

## Properties

> The kernel of $T_A$ is the [[null space]] of $A$.
> 
> $$
> \mathrm{Ker}(T_A) = \mathrm{Null}(A)
> $$

## Examples

> $$
> A = \begin{bmatrix}
> 1 & 0 & 1 \\
> 2 & 1 & 4 \\
> 0 & 1 & 2 \\
> 1 & 1 & 3
> \end{bmatrix}_{4 \times 3}
> $$
> 
> Let $T_A$ be the linear transformation
> 
> $$
> T_A: \mathbb{R}^3 \to \mathbb{R}^4
> $$ 
> 
> Find $\mathrm{Ker}(T_A)$.

$$
\begin{align} \\
\begin{bmatrix}
1 & 0 & 1 & \bigm| & 0 \\
2 & 1 & 4 & \bigm| & 0 \\
0 & 1 & 2 & \bigm| & 0 \\
1 & 1 & 3 & \bigm| & 0
\end{bmatrix} & = \begin{bmatrix}
1 & 0 & 1 & \bigm| & 0 \\
0 & 1 & 2 & \bigm| & 0 \\
0 & 0 & 0 & \bigm| & 0 \\
0 & 0 & 0 & \bigm| & 0
\end{bmatrix}
\end{align}
$$