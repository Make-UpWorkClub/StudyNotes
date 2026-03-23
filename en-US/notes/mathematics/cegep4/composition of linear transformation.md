---
tags:
  - mat/algebra
  - cegep/4
date: 2026-03-13T14:57:51
---

# composition of linear transformation

Let $T_1$ and $T_2$ be [[en-US/notes/mathematics/cegep4/linear transformation|linear transformations]].
The composition of $T_2$ and $T_1$ is

$$
T_2\circ T_1(\vec{v}) = T_2(T_1(\vec{v}))
$$

## Properties

>  $T_2\circ T_1$ is a linear transformation.

$$
\begin{align}
T_2\circ T_1(\vec{v}_{1} + \vec{v}_{2}) & = T_2(T_1(\vec{v}_{1} + \vec{v}_{2})) \\
 & = T_2(T_1(\vec{v}_{1}) + T_1(\vec{v}_{2})) \\
 & = T_2(T_1(\vec{v}_{1})) + T_2(T_1(\vec{v}_{2})) \\
 & = T_2\circ T_1(\vec{v}_{1}) + T_2\circ T_1(\vec{v}_{2}) \\
 \\
T_2\circ T_1(k\vec{v}) & = T_2(T_1(k\vec{v})) \\
 & = T_2(kT_1(\vec{v})) \\
 & = kT_2(T_1(\vec{v})) \\
 & = kT_2\circ T_1(\vec{v})
\end{align}
$$

$\square$

> $[T_2\circ T_1]_\text{stan}^\text{stan} = A_2A_1$

> If $T_1$ and $T_2$ are 1 to 1, then $T_2\circ T_1$ is 1 to 1.

$$
\begin{align}

\end{align}
$$

## Examples

$$
\begin{align}
T_1\begin{bmatrix}
x \\
y
\end{bmatrix} & = \begin{bmatrix}
x - y \\
2x \\
x + y
\end{bmatrix} \\
T_2\begin{bmatrix}
x \\
y \\
z
\end{bmatrix} & = \begin{bmatrix}
x - y \\
z + x
\end{bmatrix}
\end{align}
$$