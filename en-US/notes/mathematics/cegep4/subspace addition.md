---
tags:
  - mat/algebra
  - cegep/4
date: 2026-02-20T14:24:14
---

# subspace addition

Let $W_1$ and $W_2$ be subspaces of $\mathbb{R}^n$, then

$$
W_1 + W_2 = \{ \vec{w}_{1} + \vec{w}_{2}\ |\ \vec{w}_{1} \in W_1\ \&\ \vec{w}_{2} \in W_2 \}
$$

## Direct addition

Let $W_1$ and $W_2$ be subspaces of $\mathbb{R}^n$.
If $W_1 \cap W_2 = \{ \vec{0} \}$, we call $W_1 \oplus W_2$ the direct sum of $W_1$ and $W_2$.

## Properties

> $$
> W_1, W_2 \le \mathbb{R}^n \implies W_1 + W_2 \le \mathbb{R}^n
> $$

1. $\vec{0} = \vec{0} + \vec{0} \in W_1 + W_2$
2. Let $\vec{u}_{1} + \vec{u}_{2} \in W_1 + W_2$ and $\vec{v}_{1} + \vec{v}_{2} \in W_1 + W_2$, then
	
	$$
	(\vec{u}_{1} + \vec{u}_{2}) + (\vec{v}_{1} + \vec{v}_{2}) = \overset{ \in W_1}{(\vec{u}_{1} + \vec{v}_{1})} + \overset{ \in W_2}{(\vec{u}_{2} + \vec{v}_{2})} \in W_1 + W_2
	$$

3. Let $k \in \mathbb{R}$ and $\vec{u}_{1} + \vec{u}_{2} \in W_1 + W_2$, then
	
	$$
	k(\vec{u}_{1} + \vec{u}_{2}) = \overset{ \in W_1}{k\vec{u}_{1}} + \overset{ \in W_2}{k\vec{u}_{2}} \in W_1 + W_2
	$$

Therefore, $W_1 + W_2 \le \mathbb{R}^n$.

$\square$

> $$
> W_1, W_2 \le \mathbb{R}^n \implies \mathrm{dim}(W_1 + W_2) = \mathrm{dim}(W_1) + \mathrm{dim}(W_2) - \mathrm{dim}(W_1 \cap W_2)
> $$

Let $S = \{ \vec{w}_{1}, \dots, \vec{w}_m \}$ be a basis of $W_1 \cap W_2$.

By theorem, we can add vectors to $S$ so that
$\{ \vec{w}_{1}, \dots, \vec{w}_m, \vec{u}_{1}, \dots, \vec{u}_r \}$ is a basis of $W_1$;
$\{ \vec{w}_{1}, \dots, \vec{w}_m, \vec{v}_{1}, \dots, \vec{v}_s \}$ is a basis of $W_2$.

We show that $T = \{ \vec{w}_{1}, \dots, \vec{w}_m, \vec{u}_{1}, \dots, \vec{u}_r, \vec{v}_{1}, \dots, \vec{v}_s \}$ is a basis of $W_1 + W_2$.
Without loss of generality, assume $\vec{w}_1$ is a linear combination of $\vec{w}_{2}, \dots, \vec{w}_m, \vec{u}_{1}, \dots, \vec{u}_r, \vec{v}_{1}, \dots, \vec{v}_s$.

$$
\begin{align}
\vec{w}_{1} & = c_2\vec{w}_{2} +\dots + c_m\vec{w}_m + d_1\vec{u}_{1} +\dots + d_r\vec{u}_r + k_1\vec{v}_{1} +\dots + k_s\vec{v}_s \\
\overset{ \in W_2 - W_1}{k_1\vec{v}_{1} +\dots + k_s\vec{v}_s} & = \overset{ \in W_1}{\vec{w} - c_2\vec{w}_{2} -\dots - c_m\vec{w}_m - d_1\vec{u}_{1} - d_r\vec{u}_r} \\
\implies & \text{impossible}
\end{align}
$$

Therefore, $T$ is linearly independent.
For any $\vec{a} + \vec{b} \in W_1 + W_2$,

$$
\begin{align}
\vec{a} + \vec{b} & = a_1\vec{w}_{1} +\dots + a_m\vec{w}_m + b_1\vec{u}_{1} +\dots + b_r\vec{u}_r + c_1\vec{w}_{1} +\dots + c_m\vec{w}_m + d_1\vec{v}_{1} +\dots + d_s\vec{v}_s \\
 & = (a_1 + c_1)\vec{w}_{1} +\dots + (a_m + c_m)\vec{w}_{m} + b_1\vec{u}_{1} +\dots + b_r\vec{u}_r + d_1\vec{v}_{1} +\dots + d_s\vec{v}_s
\end{align}
$$

Therefore, $T$ is a basis of $W_1 + W_2$.

$$
\begin{align}
\mathrm{dim}(W_1 + W_2) & = \mathrm{dim}(W_1) + \mathrm{dim}(W_2) - \mathrm{dim}(W_1 \cap W_2) \\
m + r + s & = m + r + m + s - m \\
0 & = 0
\end{align}
$$

$\square$

> $$
> W_1 \cap W_2 = \{ \vec{0} \} \implies \mathrm{dim}(W_1 \oplus W_2) = \mathrm{dim}(W_1) + \mathrm{dim}(W_2)
> $$