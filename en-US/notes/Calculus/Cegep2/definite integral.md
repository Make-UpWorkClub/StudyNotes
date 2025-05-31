---
tags:
  - Calculus
  - Cegep/2
date: 2025-01-29T19:49:07
---

# Definite Integral

Area under a curve between two boundaries

The definite integral of $f$ on $[a, b]$ is

$$
\int_a^b\, f(x) dx  = \lim_{ n \to \infty } \sum_{ i = 1 }^{ n } f(x_i)\Delta x
$$

Derived from [[Riemann sum]]

## Properties

- $\int_a^bk \, dx = k(b - a)$
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

---

> Show that $\frac{1}{17} \le \int_{1}^{2} \frac{1}{1 + x^4} \, \mathrm{d} x \le \frac{1}{2}$.

$$
\begin{align}
\frac{1}{1 + 2^4} & \le \frac{1}{1 + x^4} & \le \frac{1}{1 + 1^4} & \text{ on }[1, 2] \\
\implies \frac{1}{17}(2 - 1) & \le \int_{1}^{2} \frac{1}{1 + x^4} \, \mathrm{d} x & \le \frac{1}{2}(2 - 1)
\end{align}
$$

---

> Find a definite integral that represents $\lim_{ n \to \infty }\sum_{ i = 1 }^{ n } \frac{2}{n}e^{\left( \frac{4i^2}{n^2} + \frac{4i}{n} + 1 \right)}$.

$$
\begin{align}
\int_{0}^{2} e^{(x + 1)^2} \, \mathrm{d} x
\end{align}
$$
