---
tags:
  - mat/algebra
  - cegep/4
date: 2026-03-27T14:48:23
---

# characteristic polynomial

Let $A_{n \times n}$ be a matrix.
The characteristic polynomial of $A$ is

$$
p(\lambda) = \det(\lambda I - A)
$$

## Properties

> Degree of $p(\lambda)$ is $n$.

> $\lambda$ is an [[eigenvector|eigenvalue]] if and only if $p(\lambda) = 0$.

## Examples

> Let
> 
> $$
> A = \begin{bmatrix}
> 1 & 0 \\
> -1 & 3
> \end{bmatrix}
> $$

> 1. Find the characteristic matrix of $A$.

$$
\begin{align}
p(\lambda) & = \det(\lambda I - A) \\
 & = \det(\begin{bmatrix}
\lambda & 0 \\
0 & \lambda
\end{bmatrix} - \begin{bmatrix}
1 & 0 \\
-1 & 3
\end{bmatrix}) \\
 & = \begin{vmatrix}
\lambda - 1 & 0 \\
1 & \lambda - 3
\end{vmatrix} \\
 & = (\lambda - 1)(\lambda - 3)
\end{align}
$$

> 2. Find all eigenvalues of $A$.

$$
\lambda \in \{ 1, 3 \}
$$

> Let
> 
> $$
> A = \begin{bmatrix}
> 0 & 1 & 0 \\
> 0 & 0 & 1 \\
> 4 & -17 & 8
> \end{bmatrix}
> $$

> 1. Find the characteristic polynomial of $A$.

$$
\begin{align}
p(\lambda) & = \begin{vmatrix}
\lambda & -1 & 0 \\
0 & \lambda & -1 \\
-4 & 17 & \lambda - 8
\end{vmatrix} \\
 & = \lambda \begin{vmatrix}
\lambda & -1 \\
17 & \lambda - 8
\end{vmatrix} + 1\begin{vmatrix}
0 & -1 \\
-4 & \lambda - 8
\end{vmatrix} \\
 & = \lambda(\lambda(\lambda - 8) + 1 \cdot 17) + 1(-1(-4)) \\
 & = \lambda^3 - 8\lambda^2 + 17\lambda + 4
\end{align}
$$

> 2. Find all eigenvalues of $A$.

Using long division,

$$
\begin{align}
\lambda^3 - 8\lambda^2 + 17\lambda + 4 & = 0 \\
\implies \lambda^2 - 4\lambda + 1 & = 0 \\
\implies \lambda & \in \{ 2 + \sqrt{3}, 2 - \sqrt{3} \}
\end{align}
$$