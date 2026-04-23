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

#TODO

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

> $A_{n \times n}$ is invertible if and only if 0 is not an eigenvalue of A.

> If $\lambda$ is an eigenvalue of $A_{n \times n}$, then $\lambda^k$ is an eigenvalue of $A^k$.

$$
\begin{align}
Av & = \lambda v \\
\implies A^kv & = A^{k - 1}(\lambda v) \\
A^kv & = \lambda A^{k - 1}v \\
A^kv & = \lambda^kv
\end{align}
$$

Therefore, $\lambda^k$ is an eigenvalue of $A^k$.

$\square$

> If $\lambda$ is an eigenvalue of $A$, $c\lambda$ is an eigenvalue of $cA$.

$$
\begin{align}
Av & = \lambda v \\
\implies (cA)v & = (c\lambda)v
\end{align}
$$

Therefore, $c\lambda$ is an eigenvalue of $cA$.

$\square$