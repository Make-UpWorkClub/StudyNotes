---
tags:
  - mat/algebra
  - cegep/4
date: 2026-04-08T14:40:57
---

# inner product

[[vecteur|Vector]] operation
Generalization of [[produit scalaire|dot product]]

Function $V \times V \to F$ on a real vector space $V$ over field $F$ that satisfied the following properties for all $\vec{u}, \vec{v}, \vec{w} \in V$ and $k \in \mathbb{R}$:

- Commutativity: $\langle \vec{u}, \vec{v} \rangle = \langle \vec{v}, \vec{u} \rangle$
- Distributivity: $\langle \vec{u} + \vec{v}, \vec{w} \rangle = \langle \vec{u}, \vec{w} \rangle + \langle \vec{v}, \vec{w} \rangle$
- Associativity: $\langle k\vec{u}, \vec{v} \rangle = k\langle \vec{u}, \vec{v} \rangle$
- $\langle \vec{u}, \vec{u} \rangle = 0 \iff \vec{u} = \vec{0}$
- $\langle \vec{u}, \vec{u} \rangle \ge 0$

Let $A_{n \times n}$ be a [[matrice|matrix]]. We can define an inner product for $\mathbb{R}^n$ using $A$:

$$
\langle \vec{u}, \vec{v} \rangle = A\vec{u} \cdot A\vec{v}
$$

The **standard inner product** for $M_{n \times n}$ is the [[trace]] of the product of $B$ transposed and $A$:

$$
\langle A, B \rangle = \sum_{ i, j = 1 }^{ n }a_{ij}b_{ij} = \mathrm{tr}(B^TA)
$$

> [!important] Do not confuse with vector notation

## Properties

> Let $\vec{u}, \vec{v}, \vec{w}$ be vectors in real inner product space $V$ and $k \in \mathbb{R}$, then

> $$
> d(\vec{u}, \vec{v}) = d()
> $$

> $$
> \langle \vec{0}, \vec{v} \rangle = 0
> $$

$$
\begin{align}
\langle \vec{0}, \vec{v} \rangle & = \langle 0 \cdot \vec{0}, \vec{v} \rangle \\
 & = 0\langle \vec{0}, \vec{v} \rangle \\
 & = 0
\end{align}
$$

$\square$

> $$
> \langle \vec{u}, \vec{v} + \vec{w} \rangle = \langle \vec{u}, \vec{v} \rangle + \langle \vec{u}, \vec{w} \rangle
> $$

$$
\begin{align}
\langle \vec{u}, \vec{v} + \vec{w} \rangle & = \langle \vec{v} + \vec{w}, \vec{u} \rangle \\
 & = \langle \vec{v}, \vec{u} \rangle + \langle \vec{w}, \vec{u} \rangle \\
 & = \langle \vec{u}, \vec{v} \rangle + \langle \vec{u}, \vec{w} \rangle
\end{align}
$$

$\square$

> $$
> \langle \vec{u}, k\vec{v} \rangle = k\langle \vec{u}, \vec{v} \rangle
> $$

$$
\begin{align}
\langle \vec{u}, k\vec{v} \rangle & = \langle k\vec{v}, \vec{u} \rangle \\
 & = k\langle \vec{v}, \vec{u} \rangle \\
 & = k\langle \vec{u}, \vec{v} \rangle
\end{align}
$$

$\square$

## Examples

> Show $\mathbb{R}^2,$ is a real inner product space where $\langle \vec{u}, \vec{v} \rangle = \frac{1}{9}u_1v_1 + \frac{1}{4}u_2v_2$.