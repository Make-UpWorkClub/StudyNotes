---
tags:
  - mat/algebra
  - cegep/4
date: 2026-03-18T14:45:09
---

# inverse of linear transformation

Let $T:V \to W$ be an invertible [[linear transformation]].
The inverse of $T$ is the linear transformation $T^{-1}:W \to V$ s.t.

$$
T^{-1}(W) = V
$$

## Properties

> Let $T:V \to W$ be an invertible linear transformation.
> Then, $\mathrm{dim}(V) = \mathrm{dim}(W)$.

Since $T$ is onto, $\mathrm{Im}(T) = W$.
Since $T$ is 1 to 1, $\mathrm{Ker}(T) = \{ \vec{0} \}$.
Therefore,

$$
\begin{align}
\mathrm{rank}(T) + \mathrm{nullity}(T) & = \mathrm{dim}(V) \\
\mathrm{dim}(W) + 0 & = \mathrm{dim}(V) \\
\mathrm{dim}(V) & = \mathrm{dim}(W)
\end{align}
$$

$\square$

> Let $T:V \to W$ be a linear transformation.
> $T$ is invertible if and only if $[T]_\text{stan}^\text{stan}$ is invertible.

> Let $[A]_\text{stan}^\text{span}$  be the standard matrix of linear transformation $T:V \to W$.