---
tags:
  - mat/algebra
  - cegep/4
date: 2026-05-01T15:09:28
---

# reflection

[[en-US/notes/mathematics/cegep4/linear transformation|Linear transformation]] corresponding to reflection about an axis

## x-axis

$$
\begin{align}
T(x, y) & = (x, -y) \\
[T] & = \begin{bmatrix}
1 & 0 \\
0 & -1
\end{bmatrix} \\
W_{-1} & = \left\{ t\begin{bmatrix}
0 \\
1
\end{bmatrix}\ |\ t \in \mathbb{R} \right\} \\
W_{1} & = \left\{ t\begin{bmatrix}
1 \\
0
\end{bmatrix}\ |\ t \in \mathbb{R} \right\}
\end{align}
$$

## y-axis

$$
\begin{align}
T(x, y) & = (-x, y) \\
[T] & = \begin{bmatrix}
-1 & 0 \\
0 & 1
\end{bmatrix} \\
W_{-1} & = \left\{ t\begin{bmatrix}
1 \\
0
\end{bmatrix}\ |\ t \in \mathbb{R} \right\} \\
W_{1} & = \left\{ t\begin{bmatrix}
0 \\
1
\end{bmatrix}\ |\ t \in \mathbb{R} \right\}
\end{align}
$$

## y = x

$$
\begin{align}
T(x, y) & = (y, x) \\
[T] & = \begin{bmatrix}
0 & 1 \\
1 & 0
\end{bmatrix} \\
W_{-1} & = \left\{ t\begin{bmatrix}
1 \\
-1
\end{bmatrix}\ |\ t \in \mathbb{R} \right\} \\
W_{1} & = \left\{ t\begin{bmatrix}
1 \\
1
\end{bmatrix}\ |\ t \in \mathbb{R} \right\}
\end{align}
$$