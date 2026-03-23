---
tags:
  - mat/algebra
  - cegep/3
  - cegep/4
date: 2025-11-14T11:40:11
---

# espace engendré

Ensemble de toutes les [[combinaison linéaire|combinaisons linéaires]] d'un ensemble de vecteurs
`Sym.` $\mathrm{span}()$

In $\mathbb{R}^3$:

$$
\begin{align}
\mathrm{span}(\vec{0}) & = \{ \vec{0} \} \\
 \\
\mathrm{span}(\vec{u}) & = \{ t\vec{u} | t \in \mathbb{R} \} \\
\implies \langle x, y, z \rangle & = \langle 0, 0, 0 \rangle + t \langle u_1, u_2, u_3 \rangle \\
\implies & \text{line through origin} \\
 \\
\vec{u} & \nparallel \vec{v} \\
\implies \mathrm{span}(\vec{u}, \vec{v}) & = \{ s\vec{u} + t\vec{v} | s, t \in \mathbb{R} \} \\
\implies \langle x, y, z \rangle & = \langle 0, 0, 0 \rangle + s\langle u_1, u_2, u_3 \rangle + t \langle v_1, v_2, v_3 \rangle \\
\implies & \text{plane through origin} \\
 \\
\vec{u} & \nparallel \vec{v} \nparallel \vec{w} \\
\implies \mathrm{span}(\vec{u}, \vec{v}, \vec{w}) & = \mathbb{R}^3
\end{align}
$$

> [!abstract] dimension
> Number of elements in the basis of a span
> `Sym.` $\mathrm{dim}()$

## Properties

> Let $\vec{v}_{1}, \dots, \vec{v}_n \in \mathbb{R}^n$, then $\mathrm{span}(\vec{v}_{1}, \dots, \vec{v}_n)$ is a subspace of $\mathbb{R}^n$.

1. $\vec{0} = 0\vec{v}_{1} +\dots + 0\vec{v}_n \in \mathrm{span}$
2. Let $a_1\vec{v}_{1} +\dots + a_n\vec{v}_n \in \mathrm{span}$ and $b_1\vec{v}_{1} +\dots + b_n\vec{v}_n \in \mathrm{span}$, then $(a_1\vec{v}_{1} +\dots + a_n\vec{v}_n) + (b_1\vec{v}_{1} +\dots + b_n\vec{v}_n) = (a_1 + b_1)\vec{v}_{1} +\dots + (a_n + b_n)\vec{v}_n \in \mathrm{span}$
3. Let $a_1\vec{v}_{1} +\dots + a_n\vec{v}_n \in \mathrm{span}$ and $k \in \mathbb{R}$, then $k(a_1\vec{v}_{1} +\dots + a_n\vec{v}_n) = (ka_1)\vec{v}_{1} +\dots + (ka_n)\vec{v}_n \in \mathrm{span}$

$\square$

> $\vec{w}$ is a linear combination of $\vec{v}_{1}, \dots, \vec{v}_n$ if and only if $\mathrm{span}(\vec{v}_1, \dots, \vec{v}_n, \vec{w}) = \mathrm{span}(\vec{v}_{1}, \dots, \vec{v}_n)$.

We show that if $\vec{w}$ is a linear combination of $\vec{v}_{1}, \dots, \vec{v}_n$, then $\mathrm{span}(\vec{v}_1, \dots, \vec{v}_n, \vec{w}) = \mathrm{span}(\vec{v}_{1}, \dots, \vec{v}_n)$.

$$
\begin{align}
a_1\vec{v}_{1} +\dots + a_n\vec{v}_n & \in \mathrm{span}(\vec{v}_{1}, \dots, \vec{v}_n) \\
\implies a_1\vec{v}_{1} +\dots + a_n\vec{v}_n + 0\vec{w} & \in \mathrm{span}(\vec{v}_{1}, \dots, \vec{v}_n, \vec{w}) \\
\therefore \mathrm{span}(\vec{v}, \dots, \vec{v}_n) & \subseteq \mathrm{span}(\vec{v}_{1}, \dots, \vec{v}_n, \vec{w})
\end{align}
$$

We show that if $\mathrm{span}(\vec{v}_{1}, \dots, \vec{v}_n, \vec{w}) = \mathrm{span}(\vec{v}_{1}, \dots, \vec{v}_n)$, then $\vec{w}$ is a linear combination of $\vec{v}_{1}, \dots, \vec{v}_n$.

Since $\vec{w} \in \mathrm{span}(\vec{v}_{1}, \dots, \vec{v}_n, \vec{w})$ and $\mathrm{span}(\vec{v}_{1}, \dots, \vec{v}_n, \vec{w}) = \mathrm{span}(\vec{v}_{1}, \dots, \vec{v}_n)$,
$\vec{w} \in \mathrm{span}(\vec{v}_{1}, \dots, \vec{v}_n)$.
Therefore, $\vec{w}$ is a linear combination of $\vec{v}_{1}, \dots, \vec{v}_n$.

$\square$

> $\vec{w} \in \mathrm{span}(\vec{v}_{1}, \dots, \vec{v}_n)$ if and only if
> 
> $$
> \begin{bmatrix}
> \vec{v}_{1} & \dots & \vec{v}_n & | \vec{w}
> \end{bmatrix}
> $$
> 
> is consistent.