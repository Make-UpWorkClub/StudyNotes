---
tags:
  - mat/algebra
  - cegep/4
date: 2026-04-17T15:40:44
---

# orthogonal complement

[[Subspace]] operation
Let $W \le V$.
The orthogonal complement of $W$ is the subspace of all vectors in $V$ [[orthogonality|orthogonal]] to all vectors in $W$.
`Sym.` $W^{\perp}$

$$
W^{\perp} = \{ \vec{v}\ |\ \vec{v} \in V, \ \langle \vec{v}, \vec{w} \rangle = 0\ \forall\ \vec{w} \in W \}
$$

## Properties

> $W^{\perp^{\perp}} = W$

> $W^{\perp} \le V$

Let $\vec{u}, \vec{v} \in W^{\perp}, \ \vec{w} \in W, \ k \in \mathbb{R}$.

$$
\begin{align}
\langle \vec{0}, \vec{w} \rangle = 0 & \implies \vec{0} \in W^{\perp} \\
\langle \vec{u} + \vec{v}, \vec{w} \rangle = \langle \vec{u}, \vec{w} \rangle + \langle \vec{v}, \vec{w} \rangle = 0 & \implies \vec{u} + \vec{v} \in W^{\perp} \\
\langle k\vec{u}, \vec{w} \rangle = k\langle \vec{u}, \vec{w} \rangle = 0 & \implies k\vec{u} \in W^{\perp}
\end{align}
$$

Therefore, $W^{\perp} < V$.

$\square$

> $W \cap W^{\perp} = \{ \vec{0} \}$

Let $\vec{v} \in W \cap W^{\perp}$.

$$
\begin{align}
\vec{v} \in W^{\perp} & \implies \langle \vec{v}, \vec{w} \rangle = 0\ \forall \vec{w} \in W \\
\vec{v} \in W & \implies \langle \vec{v}, \vec{v} \rangle = 0 \\
 & \implies ||\vec{v}|| = 0 \\
 & \implies \vec{v} = \vec{0}
\end{align}
$$

$\square$

> Let $W$ be a subspace of finite-dimensional vector space $V$, then
> 
> $$
> \mathrm{dim}(W + W^\perp) = dim(V)
> $$

$$
\begin{align}
\mathrm{dim}(W + W^\perp) & = \mathrm{dim}(W) + \mathrm{dim}(W^\perp) - \mathrm{dim}(W \cap W^\perp) \\
 & = \mathrm{dim}(W) + (\mathrm{dim}(V) - \mathrm{dim}(W)) - \mathrm{dim}(\{ \vec{0} \}) \\
 & = \mathrm{dim}(V)
\end{align}
$$

$\square$

## Evaluation

> $W^{\perp}$ is the [[null space]] of the basis of $W$ as a row matrix.

