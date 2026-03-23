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

> $\lambda$ is an eigenvalue of $A$ if and only if $\det(\lambda I - A) = 0$.

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

## Examples