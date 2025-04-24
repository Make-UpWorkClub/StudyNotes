---
tags:
  - Cegep2
  - Calculus
date: 2025-04-03T11:14:03
---

# Convergence

1. Property of a [[limit]] that exists
2. Property of a [[sequence]] if $\lim_{ n \to \infty } a_n$ exists

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