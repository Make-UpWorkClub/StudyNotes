---
tags:
  - mat/algebra
  - cegep/4
date: 2026-03-18T15:55:56
---

# isomorphism

A [[linear transformation]] $T:V \to W$ is an isomorphism if it is invertible, i.e. 1 to 1 and onto.
We say $V$ and $W$ are isomorphic: $V \simeq W$.

## Properties

> Let $V$ be a vector space with $\mathrm{dim}(V) = n$.
> Then, $V \simeq \mathbb{R}^n$.

Let $T:V \to \mathbb{R}^n$.
Let $\vec{v}$ s.t. $T(\vec{v}) = \vec{0}$.

$$
\begin{align}
T(\vec{v}) & = ()
\end{align}
$$

## Examples

> Let $T:\mathbb{R}^3 \to \mathbb{R}^3$ be a linear transformation such that $T(\hat{i}) = \hat{i}$, $T(\hat{j}) = \hat{i} + \hat{j}$, $T(\hat{k}) = \hat{j} + \hat{k}$.

> 1. Find a formula for $T(x, y, z)$.

$$
\begin{align}
T(x, y, z) & = T(x\hat{i} + y\hat{j} + z\hat{k}) \\
 & = xT(\hat{i}) + yT(\hat{j}) + zT(\hat{k}) \\
 & = x\hat{i} + y(\hat{i} + \hat{j}) + z(\hat{j} + \hat{k}) \\
 & = \langle x + y, y + z, z \rangle
\end{align}
$$

> 2. Is $T$ an isomorphism?

Since $T:\mathbb{R}^n \to \mathbb{R}^n$, $T$ is an isomorphism if and only if $T$ is onto.

$$
\begin{align}
\begin{bmatrix}
1 & 1 & 0 & \bigm| & 0 \\
0 & 1 & 1 & \bigm| & 0 \\
0 & 0 & 1 & \bigm| & 0
\end{bmatrix} & \to \begin{bmatrix}
1 & 0 & 0 & \bigm| & 0 \\
0 & 1 & 0 & \bigm| & 0 \\
0 & 0 & 1 & \bigm| & 0
\end{bmatrix} \\
\implies \mathrm{Ker}(T) & = \{ \vec{0} \}
\end{align}
$$

Yes, $T$ is an isomorphism.

> 3. If $T$ is an isomorphism, find $T^{-1}$.

$$
\begin{align}
[T|I] & \to \begin{bmatrix}
1 & 1 & 0 & \bigm| & 1 & 0 & 0 \\
0 & 1 & 1 & \bigm| & 0 & 1 & 0 \\
0 & 0 & 1 & \bigm| & 0 & 0 & 1
\end{bmatrix} \\
& \to \begin{bmatrix}
1 & 0 & 0 & \bigm| & 1 & -1 & 1 \\
0 & 1 & 0 & \bigm| & 0 & 1 & -1 \\
0 & 0 & 1 & \bigm| & 0 & 0 & 1
\end{bmatrix} \\
\implies [T]^{-1} & = \begin{bmatrix}
1 & -1 & 1 \\
0 & 1 & -1 \\
0 & 0 & 1
\end{bmatrix} \\
\implies T^{-1}(x, y, z) & = \begin{bmatrix}
x - y + z \\
y - z \\
z
\end{bmatrix}
\end{align}
$$

> 4. Let $S:\mathbb{R}^3 \to R^2$ s.t. $S(x, y, z) = (x - y, x + y + z)$.
>    Find a formula for $S\circ T$.

$$
\begin{align}
S\circ T(x, y, z) & = \begin{bmatrix}
(x + y) - (y + z)
(x + y) + (y + z) + z
\end{bmatrix} \\
 & = \begin{bmatrix}
x - z \\
x + 2y + 2z
\end{bmatrix}
\end{align}
$$

> 5. Is $S\circ T$ an isomorphism?