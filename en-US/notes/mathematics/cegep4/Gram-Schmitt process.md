---
tags:
  - mat/algebra
  - cegep/4
date: 2026-04-24T15:49:44
---

# Gram-Schmitt process

Process of turning a [[en-US/notes/mathematics/base|basis]] [[orthogonal set|orthogonal]] or orthonormal

## Examples

> Let
> 
> $$
> \begin{align}
> \vec{v}_{1} & = \begin{bmatrix}
> 2 \\
> 1 \\
> 0 \\
> -1 \\
> 1
> \end{bmatrix}, \vec{v}_{2} = \begin{bmatrix}
> 1 \\
> 2 \\
> 1 \\
> 1 \\
> 1
> \end{bmatrix}, \vec{v}_{3}\begin{bmatrix}
> 3 \\
> 3 \\
> 1 \\
> 0 \\
> 1
> \end{bmatrix}
> \end{align}
> $$
> 
> Find an orthogonal basis for $W = \mathrm{span}(\vec{v}_{1}, \vec{v}_{2}, \vec{v}_{3})$.

Let

$$
\begin{align}
\vec{w}_{1} & = \vec{v}_{1} \\
 \\
\vec{w}_{2} & = \vec{v}_{2} - \mathrm{proj}_{\vec{w}_{1}}\vec{v}_{2} \\
 & = \vec{v}_{2} - \frac{\langle \vec{v}_{2}, \vec{w}_{1} \rangle}{\langle \vec{w}_{1}, \vec{w}_{1} \rangle}\vec{w}_{1} \\
 & = \begin{bmatrix}
 1 \\
 2 \\
 1 \\
 1 \\
 1
 \end{bmatrix} - \frac{2 + 2 - 1 + 1}{4 + 1 + 1 + 1}\begin{bmatrix}
 2 \\
 1 \\
 0 \\
 - 1 \\
 1
 \end{bmatrix} \\
 & = \begin{bmatrix}
 - \frac{1}{7} \\
 \frac{10}{7} \\
 1 \\
 \frac{11}{7} \\
 \frac{3}{7}
 \end{bmatrix} \\
 \\
\vec{w}_{3} & = \vec{v}_{3} - \mathrm{proj}_{\vec{w}_{1}}\vec{v}_{3} - \mathrm{proj}_{\vec{w}_{2}}\vec{v}_{3} \\
 & = \vec{v}_{3} - \frac{\langle \vec{v}_{3}, \vec{w}_{1} \rangle}{\langle \vec{w}_{1}, \vec{w}_{1} \rangle}\vec{w}_{1} - \frac{\langle \vec{v}_{3}, \vec{w}_{2} \rangle}{\langle \vec{w}_{2}, \vec{w}_{2} \rangle}\vec{w}_{2} \\
 & = \begin{bmatrix}
 3 \\
 3 \\
 1 \\
 0 \\
 1
 \end{bmatrix} - \frac{6 + 3 + 1}{4 + 1 + 1 + 1}\begin{bmatrix}
 2 \\
 1 \\
 0 \\
 - 1 \\
 1
 \end{bmatrix} - \frac{-\frac{3}{7} + \frac{30}{7} + 1 + \frac{3}{7}}{\frac{1}{49} + \frac{100}{49} + 1 + \frac{121}{49} + \frac{9}{49}}\begin{bmatrix}
 - \frac{1}{7} \\
 \frac{10}{7} \\
 1 \\
 \frac{11}{7} \\
 \frac{3}{7}
 \end{bmatrix} \\
 & = \begin{bmatrix}
 \frac{11}{40} \\
 \frac{1}{4} \\
 \frac{3}{40} \\
 - \frac{1}{40} \\
 - \frac{33}{40}
 \end{bmatrix} \\
 \\
\implies S = \left\{ \begin{bmatrix}
2 \\
1 \\
0 \\
-1 \\
1
\end{bmatrix}, \begin{bmatrix}
- \frac{1}{7} \\
\frac{10}{7} \\
1 \\
\frac{11}{7} \\
\frac{3}{7}
\end{bmatrix}, \begin{bmatrix}
\frac{11}{40} \\
\frac{1}{4} \\
\frac{3}{40} \\
- \frac{1}{40} \\
- \frac{33}{40}
\end{bmatrix} \right\}
\end{align}
$$