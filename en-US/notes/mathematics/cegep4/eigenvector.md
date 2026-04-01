---
tags:
  - mat/algebra
  - cegep/4
date: 2026-03-20T15:25:20
---

# eigenvector

Let matrix $A_{n \times n}$ and [[vecteur|vector]] $\vec{x} \in \mathbb{R}^n \ne \vec{0}$.
$\vec{x}$ is an eigenvector of A if the [[multiplication matricielle|matrix multiplication]] of $A$ and $\vec{x}$ is a scalar multiple of $\vec{x}$.
In other words, there exists an **eigenvalue** $\lambda$ s.t.

$$
A\vec{x} = \lambda \vec{x}
$$

## Properties

> $\lambda$ is an eigenvalue of $\vec{x}$ if and only if $(\lambda I - A)\vec{x} = \vec{0}$ has non-trivial solution, or equivalently $\det(\lambda I - A) = 0$.

$\lambda$ is an eigenvalue of $A$

$$
\begin{align}
\iff \exists \vec{x}
\end{align}
$$

> If $A$ is triangular or diagonal,
> Then the eigenvalues of $A$ are the entries in the diagonal.

Proof for upper triangular $A_{3 \times 3}$:

$$
\begin{align}
\lambda I - A & = \begin{bmatrix}
\lambda - a_{11} & -a_{12} & -a_{13} \\
0 & \lambda - a_{22} & -a_{23} \\
0 & 0 & \lambda - a_{33}
\end{bmatrix} \\
\implies \det(\lambda I - A) & = (\lambda - a_{11})(\lambda - a_{22})(\lambda - a_{33}) = 0 \\
\lambda & = a_{11}\text{ or }\lambda = a_{22}\text{ or }\lambda = a_{33}
\end{align}
$$

> Let $A_{n \times n}$. $A$ is diagonalisable if and only if $A$ has $n$ linearly independent eigenvectors.

We know that $A$ has $n$ linearly independent eigenvectors.
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

## Examples