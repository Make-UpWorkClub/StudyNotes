---
tags:
  - mat/algebra
  - cegep/4
date: 2026-03-27T15:32:26
---

# eigenspace

Let $\lambda$ be an eigenvalue of $A_{n \times n}$.
The eigenspace of $A$ corresponding to $\lambda$, $W_\lambda$, is the [[subspace]] of all solutions of $A\vec{x} = \lambda \vec{x}$ ([[eigenvector|eigenvectors]] of $A$ corresponding to $\lambda$) ==and $\vec{0}$==.

## Properties

> Let $\lambda$ be an eigenvalue of $A_{n \times n}$ and $W_{\lambda}$ the eigenspace of $\lambda$.
> 
> $$
> W_{\lambda} \le \mathbb{R}^n
> $$

> The eigenspace of $\lambda$ is the kernel $T_{\lambda I - A}: \mathbb{R}^n \to \mathbb{R}^n$.

> Let $\lambda_1$and $\lambda_2$ be two different eigenvalues of $A$.
> Then $W_{\lambda_1} \cap W_{\lambda_2} = \{ \vec{0} \}$.

Let $\vec{w} \in W_{\lambda 1} \cap W_{\lambda 2}$.

$$
\implies
$$

> Let $\vec{v}_{1}, \dots, \vec{v}_n$ be eigenvectors corresponding to distinct eigenvalues $\lambda_1, \dots, \lambda_n$.
> Then $\vec{v}_{1}, \dots, \vec{v}_n$ are linearly independent.

$$
c_1\vec{v}_{1} +\dots + c_n\vec{v}_n = \vec{0}
$$

## Examples

> Let
> 
> $$
> A = \begin{bmatrix}
> 0 & 0 & -2 \\
> 1 & 2 & 1 \\
> 1 & 0 & 3
> \end{bmatrix}
> $$

> 1. Find all eigenvalues of $A$.

$$
\begin{align}
p(\lambda) & = \begin{vmatrix}
\lambda & 0 & 2 \\
-1 & \lambda - 2 & -1 \\
-1 & 0 & \lambda - 3
\end{vmatrix} \\
 & = \lambda(\lambda - 2)(\lambda - 3) + 2(\lambda - 2) \\
 & = (\lambda - 2)(\lambda - 1)(\lambda - 2) \\
\implies \lambda & \in \{ 1, 2 \}
\end{align}
$$

> 2. Find $W_{\lambda = 2}$.

$$
\begin{align}
W_{\lambda = 2} & = \{ \vec{X}\ |\ A\vec{X} = 2\vec{X} \} \\
\implies A\vec{X} - 2\vec{X} & = \vec{0} \\
(A - 2I)\vec{X} & = \vec{0} \\
\begin{bmatrix}
-2 & 0 & -2 & \bigm| & 0 \\
1 & 0 & 1 & \bigm| & 0 \\
1 & 0 & 1 & \bigm| & 0
\end{bmatrix} & \to \begin{bmatrix}
1 & 0 & 1 & \bigm| & 0 \\
0 & 0 & 0 & \bigm| & 0 \\
0 & 0 & 0 & \bigm| & 0
\end{bmatrix} \\
\implies \begin{cases}
x & = -t
y & = s
z & = t
\end{cases} \\
W_{\lambda = 2} & = \left\{ s\begin{bmatrix}
0 \\
1 \\
0
\end{bmatrix} + t\begin{bmatrix}
-1 \\
0 \\
1
\end{bmatrix}, s, t \in \mathbb{R} \right\}
\end{align}
$$