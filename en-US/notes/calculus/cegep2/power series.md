---
tags:
  - mat/calculus
  - cegep/2
date: 2025-04-30T15:49:04
---

# Power Series

[[Series]] with the form

$$
\begin{align}
S & = \sum_{ n = 0 }^{ \infty } C_n(x - a)^n \\
S_N & = \sum_{ n = 0 }^{ N - 1 } C_n(x - a)^n
\end{align}
$$

> [!important]+ Only three possibilities of convergence
> 1. The series converges only when $x = a$ ($R = 0$).
> 2. The series converges for all $x \in \mathbb{R}$ ($R = \infty$).
> 3. The series converges on the interval $(a - R, a + R)$.
>
>  > [!info] $R$ is known as the **radius of convergence**.

## Theorem

If $f(x) = \sum_{ n = 0 }^{ \infty } C_n(x - a)^n$ with radius $R > 0$, then $f$ is differentiable on the interval $(a - R, a + R)$.

Also,

1. $f'(x) = \frac{\mathrm{d}}{\mathrm{d}x}\left[ \sum_{ n = 0 }^{ \infty }C_n(x - a)^n \right] = \sum_{ n = 0 }^{ \infty } \frac{\mathrm{d}}{\mathrm{d}x}[C_n(x - a)^n]$
2. $\int f(x) \, \mathrm{d} x = \int \sum_{ n = 0 }^{ \infty } \, C_n(x - a)^n dx = \sum_{ n = 0 }^{ \infty } \int C_n(x - a) \, \mathrm{d} x$

With the same radius of convergence.

## Examples

> Consider the power series $\sum_{ n = 0 }^{ \infty }n!x^n$.

> 1. What is the radius of convergence?

$$
\begin{align}
\lim_{ n \to \infty } \left| \frac{a_{n + 1}}{a_n} \right| & = \lim_{ n \to \infty } \left| \frac{(n + 1)!x^{n + 1}}{n!x^n} \right| \\
 & = \lim_{ n \to \infty } |(n + 1)x| \\
 & = \infty > 1
\end{align}
$$

Therefore, the series is divergent by RT $\forall x \ne 0$.

If $x = 0$, the limit is

$$
\lim_{ n \to \infty } |(n + 1)(0)| = \lim_{ n \to \infty } |0| = 0 < 1
$$

Therefore, the series is convergent by RT. The radius of convergence is 0.

> 2. What is the interval on which the series converges?

Since it converges on a point, there is no interval.

> 3. What is the series centred?

$x = 0$

> Consider the power series $\sum_{ n = 0 }^{ \infty } \frac{(-1)^nx^{2n}}{(2n)!}$.

> 1. What is the radius of convergence?

$$
\begin{align}
\lim_{ n \to \infty } \left| \frac{(-1)^nx^{2(n + 1)}}{(2(n + 1))!} \frac{(2n)!}{(-1)^nx^{2n}} \right| & = \lim_{ n \to \infty } \left| \frac{x^2}{(2n + 2)(2n + 1)} \right| \\
 & = 0 < 1
\end{align}
$$

Therefore, the series is convergent by RT $\forall x\in \mathbb{R}$. The radius of convergence is $\infty$.

> 2. What is the interval on which the series converges?

$\mathbb{R}$

> 3. What is the series centred?

$x = 0$
