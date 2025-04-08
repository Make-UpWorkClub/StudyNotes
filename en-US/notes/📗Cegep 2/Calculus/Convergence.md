---
tags:
  - Cegep2
  - Calculus
date: 2025-04-03T11:14:03
---

# Convergence

Property of a [[limit]] that exists
`Ant.` **divergence**

## Proof

> Determine $p$ such that the integral $\int_{1}^{\infty} \frac{1}{x^p} \, \mathrm{d}x$ is at the boundary of convergence.

When $p = 1$, we know $\int_{1}^{\infty} \frac{1}{x} \, \mathrm{d}x$ is divergent.

When $p \ne 1$,

$$
\begin{align}
\int_{1}^{\infty} \frac{1}{x^p} \, \mathrm{d}x & = \lim_{ t \to \infty } \int_{1}^{t} \frac{1}{x^p} \, \mathrm{d}x \\
 & = \left.\lim_{ t \to \infty } \frac{x^{-p +1}}{-p + 1} \right|_{1}^t \\
 & = \lim_{ t \to \infty } \left( \frac{1}{1 - p} \right)(t^{1 - p} - 1^{1 - p})
\end{align}
$$

Consider $\lim_{ t \to \infty }t^{1 - p}$.
When $p < 1$, $1 - p > 0$, thus $t^{1 - p} \to \infty$, making the integral diverge.
When $p > 1$, $1 - p < 0$, thus $t^{1 - p} \to 0$, making the integral converge to

$$
\begin{align}
\lim_{ t \to \infty } \left( \frac{1}{1 - p} \right)(t^{1 - p} - 1^{1 - p}) & = -\frac{1}{1 - p}
\end{align}
$$

Since the integral diverges for $p \le 1$ and converges for $p > 1$, $p = 1$ is the boundary between convergence and divergence.

$\square$

## Examples

> Determine if the improper integral converges or diverges. If it converges, find the value:

> $\int_{0}^{\infty} \frac{6x^3}{(x^4 + 1)^2} \, \mathrm{d}x$

Let $u = x^4 + 1$, then $du = 4x^3dx$.

$$
\begin{align}
\int_{0}^{\infty} \frac{6x^3}{(x^4 + 1)^2} \, \mathrm{d}x & = \lim_{ t \to \infty } \int_{0^4 + 1}^{t^4 + 1} \frac{3}{2u^2} \, \mathrm{d}u \\
 & = \lim_{ t \to \infty } \frac{3}{2}[-u^{-1}]_{0^4 + 1}^{t^4 + 1} \\
 & = \lim_{ t \to \infty } \frac{3}{2}(-(t^4 + 1) ^{-1} + (0^4 + 1)^{-1}) \\
 & = \frac{3}{2}
\end{align}
$$

> $\int_{-\infty}^{2} \sqrt{6 - y} \, \mathrm{d}y$

Let $u = 6 - y$, then $du = -dy$.

$$
\begin{align}
\int_{-\infty}^{2} \sqrt{6 - y} \, \mathrm{d}y & = \lim_{ t \to \infty } \int_{6 + t}^{4} \sqrt{u}\cdot - \, \mathrm{d}u \\
 & = \lim_{ t \to \infty } \left[ -\frac{2}{3}u^{\frac{3}{2}} \right]_{6 + t}^4 \\
 & = \lim_{ t \to \infty } \left( -\frac{2}{3}4^{\frac{3}{2}} + \frac{2}{3}(6 + t)^{\frac{3}{2}} \right) \\
 & = \infty
\end{align}
$$

> $\int_{-\infty}^{\infty} x^3 \, \mathrm{d}x$

$$
\begin{align}
\int_{-\infty}^{\infty} x^3 \, \mathrm{d}x & = \int_{-\infty}^{0} x^3 \, \mathrm{d}x + \int_{0}^{\infty} x^3 \, \mathrm{d}x \\
 & = \lim_{ t \to -\infty } \int_{t}^{0} x^3 \, \mathrm{d}x + \lim_{ s \to \infty } \int_{0}^{s} x^3 \, \mathrm{d}x \\
 & = \left. \lim_{ t \to -\infty } \frac{1}{4}x^4 \right|_{t}^{0} + \left. \lim_{ s \to \infty } \frac{1}{4}x^4 \right|_{0}^{s} \\
 & = \lim_{ t \to \infty } \left( 0 - \frac{1}{4}t^4 \right) + \lim_{ s \to \infty } \left( \frac{1}{4}s^4 - 0 \right) \\
 & = \text{D.N.E.}
\end{align}
$$