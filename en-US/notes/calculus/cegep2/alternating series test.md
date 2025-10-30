---
tags:
  - mat/calculus
  - cegep/2
date: 2025-04-30T14:57:45
---

# Alternating Series Test

Test to determine whether a [[series]] that alternates between positive and negative diverges

Let $\sum_{ n = 1 }^{ \infty } b_n = \sum_{ n = 1 }^{ \infty }(-1)^na_n\text{ or }\sum_{ n = 1 }^{ \infty }(-1)^{n + 1}a_n$.
Then if

1. $\lim_{ n \to \infty } b_n = 0$
2. $\{b_n\}_{n = 1}^\infty$ is decreasing for $n \in (N, \infty)$

then $\sum a_n$ is convergent.

## Examples

> Determine if the following series are convergent:

> $\sum_{ n = 1 }^{ \infty } \frac{(-1)^n\cos(n\pi)}{n^3 + 1}$

$$
\begin{align}
\sum_{ n = 1 }^{ \infty }  & = \frac{(-1)^n\cos(n\pi)}{n^3 + 1} \\
 & = \frac{(-1)^n(-1)^n}{n^3 + 1} \\
 & = \frac{1}{n^3 + 1}
\end{align}
$$

> $\sum_{ n = 1 }^{ \infty } \frac{(-5)^n}{(n + 1)5^n}$

$$
\sum_{ n = 1 }^{ \infty } \frac{(-5)^n}{(n + 1)5^n} = \sum_{ n = 1 }^{ \infty } \frac{(-1)^n}{n + 1}
$$

Let $b_n = \frac{1}{n + 1}$.

Since $\lim_{ n \to \infty } \frac{1}{n + 1} = 0$ and $f\left( x = \frac{1}{x + 1} \right) \implies f'(x) = -\frac{1}{(x + 1)^2} < 0 \, \forall x \in \mathbb{R}$,
By AST, ${b_n}_{n = 1}^\infty$ is decreasing for $n \ge 1$.
