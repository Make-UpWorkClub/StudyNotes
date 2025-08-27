---
tags:
  - Calculus
  - cegep/1
  - cegep/2
date: 2024-11-26T10:32:00
---

# Taylor Series

[[Power series]] that estimates a function in terms of its [[derivative|derivatives]] at a single point
Extension of linear approximation

$$
f(x) = \sum_{ n = 0 }^{ \infty } \frac{f^{(n)}(a)}{n!}(x - a)^n
$$

> [!abstract]+ Taylor polynomial
> nth partial sum of a Taylor series
>
> $$
> P_n(x) = \sum_{ i = 0 }^{ n } \frac{f^{(i)}(a)}{i!}(x - a)^i
> $$

> [!info] $a$ is called the **center of approximation**.

## Examples

> Estimate $f(x) = \arctan x$ at $x = 0$.

| n            | 0               | 1                   | 2                         | 3                                        |
| ------------ | --------------- | ------------------- | ------------------------- | ---------------------------------------- |
| $f^{(n)}(x)$ | $\arctan x$     | $\frac{1}{1 + x^2}$ | $-\frac{2x}{(1 + x^2)^2}$ | $\frac{2(3x^2 - 1)}{(1 + x^2)^3}$ |
| $f^{(n)}(1)$ | $\frac{\pi}{4}$ | $\frac{1}{2}$       | $-\frac{1}{2}$            | $\frac{1}{2}$                            |

So,

$$
\begin{align}
P_3(x) & = \frac{f^{(0)}(1)}{0!}(x - 1)^0 + \frac{f^{(1)}(1)}{1!}(x - 1)^1 + \frac{f^{(2)}(1)}{2!}(x - 1)^2 + \frac{f^{(3)}(1)}{3!}(x - 1)^3 \\
 & = \frac{\pi}{4} + \frac{1}{2}(x - 1) - \frac{1}{4}(x - 1)^2 + \frac{1}{12}(x - 1)^3 \\
\implies P_3(0) & = \frac{\pi}{4} + \frac{1}{2}(0 - 1) - \frac{1}{4}(0 - 1)^2 + \frac{1}{12}(0 - 1)^3 \\
 & = \frac{\pi}{4} - \frac{1}{2} - \frac{1}{4} - \frac{1}{12} \\
 & = \frac{3\pi - 10}{12}
\end{align}
$$
