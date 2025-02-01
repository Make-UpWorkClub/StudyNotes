---
tags:
  - Cegep2
  - Calculus
date: 2025-01-24T21:03:42
---

# Riemann Sum

Approximation of a region's area by summing rectangles

The Riemann sum of $y = f(x)$ on $[a, b]$ obtained using $n$ rectangles and right endpoints:

$$
R_n = \sum_{ i = 1 }^{ n } A_i = \sum_{ i = 1 }^{ n } f\left( a + i \frac{b - a}{n} \right) \frac{b - a}{n}
$$

## Evaluation

Evaluate the area under $f(x) = 5x + 2$ on $[0, 3]$.

$$
\begin{align}
A & = \lim_{ n \to \infty } \sum_{ i = 1 }^{ n } f(x_i)\Delta x \\
 & = \lim_{ n \to \infty } \sum_{ i = 1 }^{ n } \left( 5\left( \frac{3i}{n} \right) + 2 \right)\left( \frac{3}{n} \right) \\
 & = \lim_{ n \to \infty } \frac{3}{n}\left( \frac{15}{n}\cdot \frac{n(n + 1)}{2} + 2n \right) \\
 & = \lim_{ n \to \infty } \left( \frac{45(n + 1)}{2n} + 6 \right) \\
 & = \frac{45}{2} + 6 \\
 & = \frac{57}{2}
\end{align}
$$

---

Evaluate the area under $f(x) = x^2 - 2x - 5$ on $[1, 4]$.

$$
\begin{align}
A & = \lim_{ n \to \infty } \sum_{ i = 1 }^{ n } f(x_i)\Delta x \\
 & = \lim_{ n \to \infty } \sum_{ i = 1 }^{ n } \left( \left( 1 + \frac{(4 - 1)i}{n} \right)^2 - 2\left(  1 + \frac{(4 - 1)i}{n}\right) - 5 \right)\left( \frac{4 - 1}{n} \right) \\
 & = \lim_{ n \to \infty } \frac{3}{n}\sum_{ i = 1 }^{ n } \left( 1 + \frac{6i}{n} + \frac{9i^2}{n^2} - 2 - \frac{6i}{n} - 5 \right) \\
 & = \lim_{ n \to \infty } \frac{3}{n}\sum_{ i = 1 }^{ n } \left( \frac{9i^2}{n^2} - 6 \right) \\
 & = \lim_{ n \to \infty } \frac{3}{n}\left( \frac{9}{n^2}\cdot \frac{n(n + 1)(2n + 1)}{6} - 6n \right) \\
 & = \lim_{ n \to \infty } \left( \frac{9(n + 1)(2n + 1)}{2n^2} - 18 \right) \\
 & = \frac{9\cdot2}{2} - 18 \\
 & = -9
\end{align}
$$