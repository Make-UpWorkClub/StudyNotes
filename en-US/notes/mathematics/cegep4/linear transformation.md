---
tags:
  - mat/algebra
  - cegep/4
date: 2026-02-25T14:53:09
---

# linear transformation

Let $T:V \to W$ be a mapping from [[vector space|vector spaces]] $V$ and $W$.
$T$ is a linear transformation if for any $\vec{v}_{1}, \vec{v}_{2} \in V$ and $k \in \mathbb{R}$ the following are true:

-  $T(\vec{v}_{1} + \vec{v}_{2}) = T(\vec{v}_{1}) + T(\vec{v}_{2})$
- $T(k\vec{v}_{1}) = kT(\vec{v}_{1})$

> [!info] $T$ is **1 to 1** if and only if $\mathrm{Ker}(T) = \{ \vec{0} \}$.

> [!info] $T:V \to W$ is **onto** if and only if $\mathrm{Im}(T) = W$.

## Properties

> Let $T:\mathbb{R}^n \to \mathbb{R}^m$.
> $\exists [T]_\text{stan}^\text{stan} = A_{m \times n}$ s.t. $T(\vec{v}) = A\vec{v}$.
> In other words, any linear transformation is a [[matrice|matrix]].

> $$
> T(\vec{0}_V) = \vec{0}_W
> $$

Let $k = 0$.
By definition,

$$
\begin{align}
T(0\vec{v}) & = 0T(\vec{v}) \\
T(\vec{0}_V) & = \vec{0}_W
\end{align}
$$

$\square$

> $$
> T(-\vec{v}) = -T(\vec{v})
> $$

Let $k = -1$.
By definition,

$$
T(-1\vec{v}) = -1T(\vec{v})
$$

$\square$

> $$
> T(\vec{v}_{1} - \vec{v}_{2}) = T(\vec{v}_{1}) - T(\vec{v}_{2})
> $$

By definition,

$$
\begin{align}
T(\vec{v}_{1} - \vec{v}_{2}) & = T(\vec{v}_{1} + (-\vec{v}_{2})) \\
 & = T(\vec{v}_{1}) - T(\vec{v}_{2})
\end{align}
$$

$\square$

> Let $S = \{ \vec{v}_{1}, \dots, \vec{v}_n \}$ be a basis of vector space $V$.
> Let $T: V \to W$.
> If $\vec{v} = k_1\vec{v}_{1} +\dots + k_n\vec{v}_n$, then
> 
> $$
> T(\vec{v}) = k_1T(\vec{v}_{1}) +\dots + k_nT(\vec{v}_n)
> $$

$$
\begin{align}
T(\vec{v}) & = T(k_1\vec{v}_1 + \dots + k_n\vec{v}_n) \\
 & = T(k_1\vec{v}_{1}) + \dots + T(k_n\vec{v}_n) \\
 & = k_1T(\vec{v}_{1}) + \dots + k_nT(\vec{v}_n)
\end{align}
$$

$\square$

> If $T:\mathbb{R}^n \to \mathbb{R}^m, m < n$,
> Then $T$ cannot be 1 to 1.

> If $T:\mathbb{R}^n \to \mathbb{R}^m, m > n$,
> Then $T$ cannot be onto.

> Let $T:\mathbb{R}^n \to \mathbb{R}^n$.
> $T$ is onto if and only if $T$ is 1 to 1.

## Examples

> Determine whether $T(\langle x, y \rangle) = \langle 2x^2 - y, x + 3y \rangle$ is a linear transformation.

Let $k \in \mathbb{R}$.

$$
\begin{align}
T( k\langle x, y \rangle) & = T(\langle kx, ky \rangle) \\
 & = \langle 2(kx)^2 - ky, kx + 3ky \rangle \\
kT(\langle x, y \rangle) & = k\langle 2x^2 - y, x + 3y \rangle \\
 & = \langle 2kx^2 - ky, kx + 3ky \rangle \\
\implies T(k\langle x, y \rangle) & \ne kT(\langle x, y \rangle)
\end{align}
$$

Therefore, $T$ is not a linear transformation.

> $$
> A = \begin{bmatrix}
> 1 & 2 \\
> -3 & 0 \\
> 1 & -1
> \end{bmatrix}
> $$
> 
> Find all vectors $\vec{v} = \langle x, y \rangle$ s.t. $T_A(\vec{V}) = \vec{0}$.

$$
\begin{align}
T_A(\langle x, y \rangle) & = \langle 0, 0, 0 \rangle \\
\langle x + 2y, 0, x - y \rangle & = \langle 0, 0, 0 \rangle \\
\implies & \begin{cases}
x & = 0 \\
y & = 0
\end{cases} \\
\vec{v} & = \langle 0, 0 \rangle
\end{align}
$$

> Let
> 
> $$
> S = \left\{ \vec{v}_{1} = \begin{bmatrix}
> 1 \\
> 1 \\
> 1
> \end{bmatrix}, \vec{v}_{2} = \begin{bmatrix}
> 1 \\
> 1 \\
> 0
> \end{bmatrix}, \vec{v}_{3} = \begin{bmatrix}
> 1 \\
> 0 \\
> 0
> \end{bmatrix} \right\}
> $$
> 
> be a basis of $\mathbb{R}^3$.
> Let $T:\mathbb{R}^3 \to \mathbb{R}^2$ be a linear transformation s.t.
> 
> $$
> T(\vec{v}_{1}) = \begin{bmatrix}
> 1 \\
> 0
> \end{bmatrix}, \ T(\vec{v}_{2}) = \begin{bmatrix}
> 2 \\
> -1
> \end{bmatrix}, \ T(\vec{v}_{3}) = \begin{bmatrix}
> 4 \\
> 3
> \end{bmatrix}
> $$
> 
> Find a formula for T.

$$
\begin{align}
\begin{bmatrix}
1 & 1 & 1 & \bigm| & x \\
1 & 1 & 0 & \bigm| & y \\
1 & 0 & 0 & \bigm| & z
\end{bmatrix} & = \begin{bmatrix}
1 & 0 & 0 & \bigm| & z \\
0 & 1 & 0 & \bigm| & y - z \\
0 & 0 & 1 & \bigm| & x - y
\end{bmatrix} \\
\implies (\vec{v})_S & = \begin{bmatrix}
z \\
y - z \\
x - y
\end{bmatrix} \\
 \\
T(\vec{v}) & = z\begin{bmatrix}
1 \\
0
\end{bmatrix} + (y - z)\begin{bmatrix}
2 \\
-1
\end{bmatrix} + (x - y)\begin{bmatrix}
4 \\
3
\end{bmatrix} \\
 & = \begin{bmatrix}
4x - 2y - z \\
3x - 4y + z
\end{bmatrix}
\end{align}
$$