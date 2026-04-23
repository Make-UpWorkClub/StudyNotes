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

> Let $\lambda_1$and $\lambda_2$ be two different eigenvalues of $A$.
> Then $W_{\lambda_1} \cap W_{\lambda_2} = \{ \vec{0} \}$.

Let $\vec{w} \in W_{\lambda 1} \cap W_{\lambda 2}$.

$$
\implies
$$

#TODO

> Let $S_1, S_2, \dots, S_n$ be bases of eigenspaces $W_1, W_2, \dots, W_n$.
> Then $S_1 \cap S_2 \cap\dots \cap S_n$ is linearly independent.

Assuming $S_1 \cap S_2 \cap\dots \cap S_n = \vec{v}_{1, 1}, \dots, \vec{v}_{1, n}, \dots, \vec{v}_{n, n}$ is linearly dependent,

$$
\begin{align}
\exists c_{1, 1}, \dots, c_{1, n}, \dots, c_{n, n}\text{ s.t. }c_{1, 1}\vec{v}_{1, 1} +\dots + c_{1, n}\vec{v}_{1, n} +\dots + c_{n, n}\vec{v}_{n, n} & = \vec{0}\text{ where at least one of c is non-zero} \\
\implies c_{1, 1}A\vec{v}_{1, 1} +\dots + c_{1, n}A\vec{v}_{1, n} +\dots + c_{n, n}A\vec{v}_{n, n} & = \vec{0} \\
c_{1, 1}\lambda_1\vec{v}_{1, 1} +\dots + c_{1, n}\lambda_1\vec{v}_{1, n} +\dots + c_{n, n}\lambda_n\vec{v}_{n, n} & = \vec{0} \\
\text{Without loss of generality, let }\lambda_1\text{ be the eigenvalue corresponding to c that is non-zero.} \\
\implies c_{1, 1}\lambda_1\vec{v}_{1, 1} +\dots + c_{1, n}\lambda_1\vec{v}_{1, n} +\dots + c_{n, n}\lambda_n\vec{v}_{n, n} - \lambda_1()
\end{align}
$$

#TODO

> If $W_{\lambda}(A)$ is the eigenspace of $A$ for $\lambda$, then $W_{\lambda^n}(A^n) = W_\lambda(A)$.
> In case $-\lambda$ is an eigenvalue of $A$ and $n$ is even, $W_{\lambda^n}(A^n) = W_\lambda(A) + W_{-\lambda}(A)$.

## Evaluation

> The eigenspace of $A$ for $\lambda$ is the kernel of $T_{A - \lambda I}: \mathbb{R}^n \to \mathbb{R}^n$.

To find the basis and the formula of $W_{\lambda}$,
Let $\vec{x}$ be any eigenvector corresponding to $\lambda$, then

$$
\begin{align}
A\vec{x} & = \lambda \vec{x} \\
A\vec{x} - \lambda \vec{x} & = \vec{0} \\
(A - \lambda I)\vec{x} & = \vec{0} \\
\implies W_{\lambda} & = \mathrm{Ker}(T_{A - \lambda I}) = [A - \lambda I\ |\ \vec{0}]
\end{align}
$$

Solving the augmented matrix gives $W_{\lambda}$.

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