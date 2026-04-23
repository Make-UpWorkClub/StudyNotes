---
tags:
  - mat/algebra
  - cegep/4
date: 2026-04-17T13:23:30
---

# diagonalisable matrix

[[matrice|Matrix]] for which if $\exists P_{n \times n}$ invertible and $D_{n \times n}$ diagonal such that $D = P^{-1}AP$

## Properties

> Let $A_{n \times n}$. $A$ is diagonalisable if and only if $A$ has $n$ linearly independent [[eigenvector|eigenvectors]].

Knowing that $A$ has $n$ linearly independent eigenvectors,
Let $\vec{v}_{1}, \dots, \vec{v}_n$ be the eigenvectors of $\lambda_1, \dots, \lambda_n$ (eigenvalues may repeat).
Let

$$
\begin{align}
P_{n \times n} & = \begin{bmatrix}
\vec{v}_{1} & \dots & \vec{v}_n
\end{bmatrix} \\
D_{n \times n} & = \begin{bmatrix}
\lambda_1 & \dots & 0 \\
\vdots & \vdots & \vdots \\
0 & \dots & \lambda_n
\end{bmatrix}
\end{align}
$$

We show that $A = PDP^{-1} \iff AP = PD$.
$$
\begin{align}
AP & = A\begin{bmatrix}
\vec{v}_{1} & \dots & \vec{v}_n
\end{bmatrix} \\
& = \begin{bmatrix}
A\vec{v}_{1} & \dots & A\vec{v}_n
\end{bmatrix} \\
 & = \begin{bmatrix}
\lambda_1\vec{v}_{1} & \dots & \lambda_n\vec{v}_n
\end{bmatrix} \\
 \\
PD & = \begin{bmatrix}
\vec{v}_{1} & \dots & \vec{v}_n
\end{bmatrix}\begin{bmatrix}
\lambda_1 & \dots & 0 \\
\vdots & \vdots & \vdots \\
0 & \dots & \lambda_n
\end{bmatrix} \\
 & = \begin{bmatrix}
\lambda_1\vec{v}_{1} & \dots & \lambda_n\vec{v}_n
\end{bmatrix} \\
 \\
AP & = PD
\end{align}
$$

Therefore, $A$ is diagonalisable if $A$ has $n$ linearly independent eigenvectors.
Knowing that $A$ is diagonalisable,

#TODO 

Then, solving $(A - \lambda I)$ augmented by $\vec{0}$ gives $\vec{x}$.

## Evaluation

To find $D$ and $P$ for a diagonalisable matrix $A$,

1. Find eigenvalues by solving $\det(A - \lambda I) = 0$.
2. Find an eigenvector for each eigenspace by solving $(A - \lambda_iI)\vec{v}_i = 0$.

$$
\begin{align}
P & = [\vec{v}_{1}\ \vec{v}_{2}\ \dots\ \vec{v}_{n}] \\
A & = \begin{bmatrix}
\lambda_1 & 0 & \dots & 0 \\
0 & \lambda_2 & \dots & 0 \\
\vdots & \vdots & & \vdots \\
0 & 0 & \dots & \lambda_n
\end{bmatrix}
\end{align}
$$

## Examples

> Let
> 
> $$
> A = \begin{bmatrix}
> 2 & 3 & 5 & 1 \\
> 0 & 1 & 2 & -1 \\
> 0 & 0 & 3 & 0 \\
> 0 & 0 & 0 & 5
> \end{bmatrix}
> $$
> 
> Prove $A$ is diagonalisable without diagonalising it. Find $D$.

Since $A$ is upper-triangular, $\lambda = 1, 2, 3, 5$ are eigenvalues.
Therefore, $W_{\lambda = 1}, W_{\lambda = 2}, W_{\lambda = 3}, W_{\lambda = 5} \ne \{ \vec{0} \}$.
Choose one vector from each eigenspace,