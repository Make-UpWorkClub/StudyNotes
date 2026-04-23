---
tags:
  - mat/algebra
  - cegep/4
date: 2026-04-17T15:40:44
---

# orthogonal complement

Let $W \le V$.
The orthogonal complement of $W$ is the [[subspace]] of all vectors in $V$ orthogonal to all vectors in $W$.
`Sym.` $W^{\perp}$

$$
W^{\perp} = \{ \vec{v}\ |\ \vec{v} \in V, \ \langle \vec{v}, \vec{w} \rangle = 0\ \forall\ \vec{w} \in W \}
$$

## Properties

> $W^{\perp^{\perp}} = W$

> $W^{\perp} < V$

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

## Evaluation

> $W^{\perp}$ is the [[null space]] of the basis of $W$ as a row matrix.

