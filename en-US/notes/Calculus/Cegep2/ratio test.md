---
tags:
  - Calculus
  - Cegep/2
date: 2025-04-30T14:22:57
---

# Ratio Test

Test to determine whether a [[series]] diverges

1. If $\lim_{ n \to \infty } \left| \frac{a_{n + 1}}{a_n} \right| > 1$, then $\sum a_r$ is divergent.
2. If $\lim_{ n \to \infty } \left| \frac{a_{n + 1}}{a_n} \right| < 1$, then $\sum a_r$ is convergent.
3. If $\lim_{ n \to \infty } \left| \frac{a_{n + 1}}{a_n} \right| = 1$, then the test is inconclusive.

> [!important] Especially applied to series with factorial

## Examples

> Determine if the following series are convergent:

> $\sum_{ n = 1 }^{ \infty } \frac{5n}{n!}$

$$
\begin{align}
\lim_{ n \to \infty } \left| \frac{a_{n + 1}}{a_n} \right| & = \lim_{ n \to \infty } \left| \frac{5(n + 1)}{(n + 1)!} \frac{n!}{5n} \right| \\
 & = \lim_{ n \to \infty } \left| \frac{n!}{(n + 1)!} \frac{5(n + 1)}{5n} \right| \\
 & = \lim_{ n \to \infty } \left| \frac{n + 1}{(n + 1)n} \right| \\
 & = 0 < 1
\end{align}
$$

Therefore, $\sum a_n$ is convergent by RT.

> $\sum_{ n = 1 }^{ \infty } \frac{2^nn!}{(3n)(2n)!}$

$$
\begin{align}
\lim_{ n \to \infty } \left| \frac{2^{n + 1}(n + 1)!}{(3(n + 1))(2(n + 1))!} \frac{(3n)(2n)!}{2^nn!} \right| & = \lim_{ n \to \infty } \left| \frac{2^{n + 1}}{2^n} \frac{(n + 1)!}{n!} \frac{3n}{3n + 3} \frac{(2n)!}{(2n + 2)!} \right| \\
 & = \lim_{ n \to \infty } \left| \frac{2(n + 1)(3n)}{(3n + 3)(2n + 2)(2n + 1)} \right| \\
 & = 0 < 1
\end{align}
$$

Therefore, $\sum a_n$ is convergent by RT.

> $\sum_{ n = 1 }^{ \infty } \frac{4(n!)^2}{(2n)!}$

$$
\begin{align}
\lim_{ n \to \infty } \left| \frac{4((n + 1)!)^2}{(2(n + 1))!} \frac{(2n)!}{4(n!)^2} \right| & = \lim_{ n \to \infty } \left| \frac{4((n + 1)!)^2}{4(n!)^2} \frac{(2n)!}{(2n + 2)!} \right| \\
 & = \lim_{ n \to \infty } \left| \frac{(n + 1)^2}{(2n + 2)(2n + 1)} \right| \\
 & = \frac{1}{4} < 1
\end{align}
$$

Therefore, $\sum a_n$ is convergent by RT.
