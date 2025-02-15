---
tags:
  - Cegep2
  - Calculus
date: 2025-01-29T19:49:07
---

# Definite Integral

The definite integral of $f$ on $[a, b]$ is

$$
\int_a^b\, f(x) dx  = \lim_{ n \to \infty } \sum_{ i = 1 }^{ n } f(x_i)\Delta x
$$

Derived from [[Riemann Sum]]

> [!info] Subtraction notation: $\int_{a}^{b} f(x) \, dx = \left. F(x) \right|_a^b$

## Properties

- $\int_a^bk \, dx = k(b - a)$
- $\int_b^b kf(x) \, dx = k\int_{a}^{b} f(x) \, dx$
- $\int_{a}^{b} (f(x) + g(x)) \, dx = \int_{a}^{b} f(x) \, dx + \int_{a}^{b} g(x) \, dx$
- $\int_{a}^{a} f(x) \, dx = 0$
- $\int_{a}^{b} f(x) \, dx = -\int_{b}^{a} f(x) \, dx$
- $\int_{a}^{b} f(x) \, dx + \int_{b}^{c} f(x) \, dx = \int_{a}^{c} f(x) \, dx$
- Integration maintains inequality:
	- $f(x)\ge 0 \implies \int_{a}^{b} f(x) \, dx\ge0$
	- $f(x)\ge g(x) \implies \int_{a}^{b} f(x) \, dx\ge \int_{a}^{b} g(x) \, dx$
	- $m\le f(x)\le M \implies m(b - a)\le \int_{a}^{b} f(x) \, dx\le M(b - a)$
- For an even function $f$, $\int_{-a}^{a} f(x) \, dx = 2\int_{0}^{a} f(x) \, dx$
- For an odd function $f$, $\int_{-a}^{a} f(x) \, dx = 0$

## Examples

> Suppose $\int_{0}^{1} f(x) \, dx = 2$, $\int_{1}^{2} f(x) \, dx = 3$, $\int_{0}^{1} g(x) \, dx = -1$, and $\int_{0}^{2} g(x) \, dx = 4$. Compute the following.

> $\int_{1}^{2} g(x) \, dx$

$$
\begin{align}
\int_{1}^{2} g(x) \, dx & = \int_{0}^{2} g(x) \, dx - \int_{0}^{1} g(x) \, dx \\
 & = 4 + 1 \\
 & = 5
\end{align}
$$

> $\int_{0}^{2} (2f(x) - 3g(x)) \, dx$

$$
\begin{align}
\int_{0}^{2} (2f(x) - 3g(x)) \, dx & = 2\int_{0}^{2} f(x) \, dx - 3\int_{0}^{2} g(x) \, dx \\
 & = 2\left( \int_{0}^{1} f(x) \, dx + \int_{1}^{2} f(x) \, dx  \right) - 3\cdot4 \\
 & = 2(2 + 3) - 12 \\
 & = -2
\end{align}
$$

> $\int_{1}^{1} g(x) \, dx$

$$
\int_{1}^{1} g(x) \, dx = 0
$$

---

> Simplify the following expressions.

> $\int_{-2}^{2} f(x) \, dx + \int_{2}^{5} f(x) \, dx - \int_{-2}^{-1} f(x) \, dx$

$$
\int_{-2}^{2} f(x) \, dx + \int_{2}^{5} f(x) \, dx - \int_{-2}^{-1} f(x) \, dx = \int_{-1}^{5} f(x) \, dx 
$$

> $\int_{0}^{2} 3f(x) \, dx + \int_{1}^{3} 3f(x) \, dx - \int_{0}^{2} 2f(x) \, dx - \int_{1}^{2} 3f(x) \, dx - \int_{2}^{3} 2f(x) \, dx$

$$
\begin{align}
 & \int_{0}^{2} 3f(x) \, dx + \int_{1}^{3} 3f(x) \, dx - \int_{0}^{2} 2f(x) \, dx - \int_{1}^{2} 3f(x) \, dx - \int_{2}^{3} 2f(x) \, dx \\
= & \int_{0}^{2} 3f(x) \, dx + \int_{2}^{3} 3f(x) \, dx - \int_{0}^{3} 2f(x) \, dx \\
= & 3\int_{0}^{3} f(x) \, dx - 2\int_{0}^{3} f(x) \, dx \\
= & \int_{0}^{3} f(x) \, dx 
\end{align}
$$

---

> Let $f(x)$ be an even function such that $\int_{0}^{2} 3f(x) \, dx = 6$ and $\int_{1}^{2} f(x) \, dx = 5$. Find $\int_{-2}^{1} f(x) \, dx$.

$$
\begin{align}
\int_{0}^{2} 3f(x) \, dx & = 6 \\
2\int_{0}^{2} f(x) \, dx & = 4 \\
\int_{-2}^{2} f(x) \, dx & = 4 \\
\int_{-2}^{1} f(x) \, dx & = -1
\end{align}
$$