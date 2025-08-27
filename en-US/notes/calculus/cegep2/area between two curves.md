---
tags:
  - Calculus
  - cegep/2
date: 2025-02-28T15:28:59
---

# Area Between two Curves

Application of the [[definite integral]]

Let $f$ be the upper function and $g$ the lower function, then

$$
A = \int_{a}^{b} (f(x) - g(x)) \, \mathrm{d}x
$$

## Examples

> Find the equation of the intersection between $y = x^2$ and $y = 2x - x^2$.

$$
\begin{align}
A & = \int (x^2 - (2x - x^2)) \, \mathrm{d}x \\
 & = 2\int (x^2 - x) \, \mathrm{d}x \\
 & = \frac{2}{3}x^3 - x^2
\end{align}
$$

>  Find the area of the intersection between $y = x - 1$ and $y^2 = 2x + 6$:
>
>  1. With respect to $y$.
>  2. With respect to $x$.

1.

$$
\begin{align}
y & = x - 1 \\
x & = y + 1 \\
 \\
y^2 & = 2x + 6 \\
x & = \frac{1}{2}y^2 - 3
\end{align}
$$

Intersecting points:

$$
\begin{align}
y + 1 & = \frac{1}{2}y^2 - 3 \\
y^2 - 2y - 8 & = 0 \\
(y - 4)(y + 2) & = 0 \\
y & = 4\text{ or }-2 \\
 \\
x_1 & = 4 + 1 = 5 \\
x_2 & = -2 + 1 = -1
\end{align}
$$

Area:

$$
\begin{align}
A & = \left[ \int \left( y + 1 - \frac{1}{2}y^2 + 3 \right) \, \mathrm{d}y \right]_{-2}^4 \\
 & = \left[ -\frac{1}{6}y^3 + \frac{1}{2}y^2 + 4y + c \right]_{-2}^4 \\
 & = -\frac{1}{6}4^3 + \frac{1}{2}4^2 + 4\cdot4 + \frac{1}{6}(-2)^3 - \frac{1}{2}(-2)^2 - 4(-2) \\
 & = 18
\end{align}
$$

3.

$$
\begin{align}
A & = \left[ \int (\sqrt{2x + 6} + \sqrt{2x + 6}) \, \mathrm{d}x \right]_{-3}^{-1} + [\sqrt{2x + 6} - x + 1]_{-1}^5 \\
 & = \left[ \frac{2}{3}(2x + 6)^{\frac{3}{2}} + c \right]_{-3}^{-1} + \left[ \frac{1}{3}(2x + 6)^{\frac{3}{2}} - \frac{1}{2}x^2 + x + c \right]_{-1}^{5} \\
 & = \left( \frac{2}{3}(2\cdot -1 + 6)^{\frac{3}{2}} - \frac{2}{3}(2\cdot - 3 + 6)^{\frac{3}{2}} \right) + \left( \frac{1}{3}(2\cdot5 + 6)^{\frac{3}{2}} - \frac{1}{2}5^2 + 5 - \frac{1}{3}(2\cdot - 1 + 6)^{\frac{3}{2}} + \frac{1}{2}(-1)^2 + 1 \right) \\
 & = 4.666…
\end{align}
$$
