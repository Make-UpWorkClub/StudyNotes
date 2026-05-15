---
tags:
  - mat/algebra
  - cegep/4
date: 2026-04-22T15:47:20
---

# orthogonal set

Set of [[vecteur|vectors]] such that every vector is [[orthogonality|orthogonal]] to all other vectors

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

> Let $S = \{ \vec{v}_{1}, \dots, \vec{v}_n \}$ be an orthogonal basis of inner product space $V$,
> Then for any $\vec{u} \in V$,
> 
> $$
> \vec{u} = \sum_{ i = 1 }^{ n } \frac{\langle \vec{u}, \vec{v}_i \rangle}{\lVert \vec{v}_i \rVert^2}\vec{v}_i
> $$

Since $S$ is a basis, $\exists c_1, \dots, c_n$ s.t.

$$
\begin{align}
\vec{u} & = \sum_{ i = 1 }^{ n } c_i\vec{v}_i \\
\implies \langle \vec{u}, \vec{v}_{1} \rangle & = \left\langle  \sum_{ i = 1 }^{ n } c_i\vec{v}_i, \vec{v}_{1}  \right\rangle \\
 & = \sum_{ i = 1 }^{ n } c_i\langle \vec{v}_i, \vec{v}_{1} \rangle \\
 & = c_1\langle \vec{v}_{1}, \vec{v}_{1} \rangle \\
c_1 & = \frac{\langle \vec{u}, \vec{v}_{1} \rangle}{\lVert \vec{v}_{1} \rVert^2}
\end{align}
$$

Similarly,

$$
\begin{align}
c_i & = \frac{\langle \vec{u}, \vec{v}_i \rangle}{\lVert \vec{v}_{1} \rVert^2} \\
\implies \vec{u} & = \sum_{ i = 1 }^{ n } \frac{\langle \vec{u}, \vec{v}_{1} \rangle}{\lVert \vec{v}_i \rVert^2}\vec{v}_i
\end{align}
$$

$\square$

> Any finite dimensional inner product space has an orthogonal basis.

Let $V$ be a finite dimensional inner product space.
We know that $V$ has a basis $\{ u_1, \dots, u_n \}$.
Let

$$
\begin{align}
\vec{v}_{1} & = \vec{u}_{1} \\
W_1 & = \mathrm{span}(\vec{v}_{1}) \\
\vec{v}_{2} & = \mathrm{proj}_{W_1^\perp}\vec{u}_{2} \\
 & = \vec{u}_{2} - \mathrm{proj}_{W}\vec{u}_{2} \\
 & = \vec{u}_{2} - \frac{\langle \vec{u}_{2}, \vec{v}_{1} \rangle}{\lVert \vec{v}_{1} \rVert^2}\vec{v}_{1}
\end{align}
$$

Assuming $\vec{v}_{2} = \vec{0}$,

$$
\begin{align}
\vec{u}_{2} - \frac{\langle \vec{u}_{2}, \vec{v}_{1} \rangle}{\lVert \vec{v}_{1} \rVert^2}\vec{v}_{1} & = \vec{0} \\
\vec{u}_{2} & = \frac{\langle \vec{u}_{2}, \vec{v}_{1} \rangle}{\lVert \vec{v}_{1} \rVert^2}\vec{v}_{1} \\
\vec{u}_{2} & \parallel \vec{v}_{1}
\end{align}
$$

Therefore, $\vec{v}_{2} \ne \vec{0}$.
Since $\vec{v}_{2} \in W_1^\perp$ and $\vec{v}_{1} \in W_1$,
$\langle \vec{v}_{2}, \vec{v}_{1} \rangle = \vec{0} \implies \vec{v}_{2} \perp \vec{v}_{1}$.
Let

$$
\begin{align}
W_2 & = \mathrm{span}(\vec{v}_{1}, \vec{v}_{2}) \\
\vec{v}_{3} & = \mathrm{proj}_{W_2^\perp}\vec{u}_{3} \\
 & = \vec{u}_{3} - \mathrm{proj}_{W_2}\vec{u}_{3} \\
 & = \vec{u}_{3} - \frac{\langle \vec{u}_{3}, \vec{v}_{1} \rangle}{\lVert \vec{v}_{1} \rVert^2}\vec{v}_{1} - \frac{\langle \vec{u}_{3}, \vec{v}_{2} \rangle}{\lVert \vec{v}_{2} \rVert^2}\vec{v}_{2}
\end{align}
$$

## Examples

