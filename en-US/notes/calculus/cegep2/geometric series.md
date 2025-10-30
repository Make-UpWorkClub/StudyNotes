---
tags:
  - mat/calculus
  - cegep/2
date: 2025-04-30T14:16:14
---

# Geometric series

[[Series]] of a geometric sequence

$$
\begin{align}
S_N & = \sum_{ n = 1 }^{ N } ar^{n - 1} \\
\lim_{ N \to \infty } S_N & = \begin{cases}
\frac{a}{1 - r} & \text{if }|r| < 1 \\
\text{DNE} & \text{if }|r| \ge 1
\end{cases}
\end{align}
$$

## Examples

> Determine if the geometric series converges or diverges. If it converges, find the value:

> $\sum_{ n = 1 }^{ \infty } \frac{3^{n - 1}}{5^{n + 1}}$

$$
\begin{align}
\sum_{ n = 1 }^{ \infty } \frac{3^{n - 1}}{5^{n + 1}} & = \sum_{ n = 1 }^{ \infty } \left( \frac{1}{5^2} \right)\left( \frac{3^{n - 1}}{5^{n - 1}} \right) \\
 & = \sum_{ n = 1 }^{ \infty } \left( \frac{1}{25} \right)\left( \frac{3}{5} \right)^{n - 1}
\end{align}
$$

Since $|\frac{3}{5}| < 1$, the geometric series is convergent.

$$
\begin{align}
 & = \frac{\frac{1}{25}}{1 - \frac{3}{5}} \\
 & = \frac{1}{10}
\end{align}
$$

> $\sum_{ n = 3 }^{ \infty } \frac{e^{n}}{\pi^{n - 2}}$

$$
\begin{align}
\sum_{ n = 3 }^{ \infty } \frac{e^n}{\pi^{n - 2}} & = \sum_{ n = 3 }^{ \infty } \left( \frac{e}{\pi} \right)\left( \frac{e^{n - 1}}{\pi^{n - 1}} \right) \\
 & = \sum_{ n = 3 }^{ \infty } \left( \frac{e}{\pi} \right)\left( \frac{e}{\pi} \right)^{n - 1} \\
 & = \sum_{ n = 1 }^{ n } \left( \frac{e}{\pi} \right)\left( \frac{e}{\pi} \right)^{n - 1} - \frac{e}{\pi} - \left( \frac{e}{\pi} \right)^2
\end{align}
$$

Since $|\frac{e}{\pi}| < 1$, the geometric series is convergent.

$$
\begin{align}
 & = \frac{\frac{e}{\pi}}{1 - \frac{e}{\pi}} - \frac{e}{\pi} - \left( \frac{e}{\pi} \right)^2 \\
 & = \frac{e}{\pi - e} - \frac{e}{\pi} - \left( \frac{e}{\pi} \right)^2
\end{align}
$$

> $\sum_{ n = 1 }^{ \infty } 2^{2n}3^{1 - n}$

$$
\begin{align}
\sum_{ n = 1 }^{ \infty } 2^{2n}3^{1 - n} & = \sum_{ n = 1 }^{ \infty } 4\cdot 4^{n - 1}\cdot \frac{1}{3}^{n - 1} \\
 & = \sum_{ n = 1 }^{ \infty } 4\cdot \frac{4}{3}^{n - 1}
\end{align}
$$

Since $|\frac{4}{3}| \ge 1$, the geometric series is divergent.
