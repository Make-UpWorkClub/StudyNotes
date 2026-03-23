---
tags:
  - mat/algebra
  - cegep/4
date: 2026-01-28T14:34:09
---

# vector space

Let $V$ be a non-empty set of objects in field $\mathbb{R}$ on which two operations are defined:

- Addition: for each $u, v$ in $V$, assign $u + v$ in $V$
- Scalar multiplication: for each $u$ in $V$ and $k$ in $\mathbb{R}$, assign $ku$ in $V$

$V$ is a real vector space if and only if the following axioms are satisfied for all $u, v, w$ in $V$ and $a, b$ in $\mathbb{R}$:

- Axioms of addition:
	- $u + v \in V$
	- Commutativity: $u + v = v + u$
	- Associativity: $u + (v + w) = (u + v) + w$
	- $\exists 0 \in V\text{ s.t. }0 + u = u + 0 = u$
	- $\exists -u \in V\text{ s.t. }u + (-u) = 0$
- Axioms of scalar multiplication:
	- $au \in V$
	- Scalar distributivity: $(a + b)u = au + bu$
	- Vector distributivity: $a(u + v) = au + av$
	- Associativity: $a(bu) = (ab)u = b(au)$
	- $1u = u$

> [!info] The smallest vector space is $\{ \vec{0} \}$.

## Examples

> Let $\vec{u}, \vec{v}, \vec{w}$ be vectors in a vector space $V$. If $\vec{u} + \vec{v} = \vec{u} + \vec{w}$, show $\vec{v} = \vec{w}$.

$$
\begin{align}
\vec{u} + \vec{v} & = \vec{u} + \vec{w} \\
\vec{u} + \vec{v} + (-\vec{u}) & = \vec{u} + \vec{w} + (-\vec{u}) \\
(-\vec{u}) + (\vec{u} + \vec{v}) & = (-\vec{u}) + (\vec{u} + \vec{w}) \\
((-\vec{u}) + \vec{u}) + \vec{v} & = ((-\vec{u}) + \vec{u}) + \vec{w} \\
\vec{v} & = \vec{w}
\end{align}
$$