---
tags:
  - Cegep1
  - Mathematics
date: 2024-11-26T10:32:00
---

[[Derivative]]

# Taylor Series

Series of polynomials used to approximate functions
The Taylor polynomial of degree $n$ at $x = a$ is

$$
P_n(x) = \sum_{ i = 0 }^{ n } \frac{f^{(i)}(a)}{i!}(x - a)^i
$$

Extension of linear approximation

> [!note] $a$ is called the **center of approximation**.

> [!abstract] Maclaurin Polynomial
> Taylor Polynomial where $a = 0$

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

---

>  Use the degree 5 Maclaurin polynomial of $f(x) = ln(1 - x)$ to approximate $\ln2$.

| n            | 0           | 1                  | 2                      | 3                      | 4                            | 5                                  |
| ------------ | ----------- | ------------------ | ---------------------- | ---------------------- | ---------------------------- | ---------------------------------- |
| $f^{(n)}(x)$ | $ln(1 - x)$ | $-\frac{1}{1 - x}$ | $-\frac{1}{(1 - x)^2}$ | $-\frac{2}{(1 - x)^3}$ | $-\frac{2\cdot3}{(1 - x)^4}$ | $-\frac{2\cdot3\cdot4}{(1 - x)^5}$ |
| $f^{(n)}(0)$ | $0$         | $-1$               | $-1$                   | $-2$                   | $-6$                         | $-24$                              |

So,

$$
\begin{align}
P_5(x) & = \frac{f^{(0)}(0)}{0!}x^0 + \frac{f^{(1)}(0)}{1!}x^1 + \frac{f^{(2)}0}{2!}x^2 + \frac{f^{(3)}(0)}{3!}x^3 + \frac{f^{(4)}(0)}{4!}x^4 + \frac{f^{(5)}(0)}{5!}x^5 \\
 & = -x - \frac{x^2}{2!} - \frac{2x^3}{3!} - \frac{6x^4}{4!} - \frac{24x^5}{5!}
\end{align}
$$

Note that $\ln2 = f(-1)$, then

$$
\begin{align}
f(-1) & \approx P_5(-1) \\
 & = -(-1) - \frac{(-1)^2}{2!} - \frac{2(-1)^3}{3!} - \frac{6(-1)^4}{4!} - \frac{24(-1)^5}{5!} \\
 & = \frac{47}{60} \\
 & = 0.78\overline{3}
\end{align}
$$