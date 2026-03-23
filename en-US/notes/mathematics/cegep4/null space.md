---
tags:
  - mat/algebra
  - cegep/4
date: 2026-02-06T14:53:16
---

# null space

[[Subspace]] of $\mathbb{R}^n$ consisting of all homogeneous solutions of a [[matrice|matrix]] with $n$ columns
The null space of matrix $A_{m \times n}$ is 

$$
\mathrm{Null}(A) = \{ \vec{X} | A\vec{X} = \vec{0} \}
$$

## Properties

> Assume the solution of the homogeneous system $A\vec{X} = \vec{0}$ is
> 
> $$
> \vec{X} = t_1\vec{v_1} + t_2\vec{v_2} +\dots + t_k\vec{v_k}
> $$
> 
> Then
> 
> $$
> \mathrm{Null}(A) = \mathrm{span}(\vec{v_1}, \dots, \vec{v_k})
> $$

## Examples

> $$
> A = \begin{bmatrix}
> 1 & 2 & 1 & 0 \\
> 0 & 1 & 3 & 0 \\
> 1 & -1 & 0 & 1
> \end{bmatrix}
> $$
> 
> Find $\mathrm{Null}(A)$.

$$
\begin{align}
 & \begin{bmatrix}
1 & 2 & 1 & 0 & \bigm| & 0 \\
0 & 1 & 3 & 0 & \bigm| & 0 \\
1 & -1 & 0 & 1 & \bigm| & 0
\end{bmatrix} \\
= & \begin{bmatrix}
1 & 0 & 0 & \frac{5}{8} & \bigm| & 0 \\
0 & 1 & 0 & -\frac{3}{8} & \bigm| & 0 \\
0 & 0 & 1 & \frac{1}{8} & \bigm| & 0
\end{bmatrix} \\
\implies & \begin{cases}
x_1 & = -\frac{5}{8}t \\
x_2 & = \frac{3}{8}t \\
x_3 & = -\frac{1}{8}t \\
x_4 & = t
\end{cases} \\
\implies \mathrm{Null}(A) & = \left\{ \left. t\begin{bmatrix}
-\frac{5}{8} \\
\frac{3}{8} \\
-\frac{1}{8} \\
1
\end{bmatrix} \right| t \in \mathbb{R} \right\} = \mathrm{span}\left( \begin{bmatrix}
-\frac{5}{8} \\
\frac{3}{8} \\
-\frac{1}{8} \\
1
\end{bmatrix} \right)
\end{align}
$$