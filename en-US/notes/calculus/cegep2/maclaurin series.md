---
tags:
  - mat/calculus
  - cegep/1
  - cegep/2
date: 2025-05-02T15:37:25
---

# Maclaurin Series

[[Taylor series]] where $a = 0$

$$
f(x) = \sum_{ n = 0 }^{ \infty } \frac{f^{(n)}(0)}{n!}x^n
$$

## Examples

> Find the Maclaurin series of the following functions:

> $\cos x$

$$
\begin{align}
\cos x & = \frac{1}{0!}x^0 + 0 + \frac{-1}{2!}x^2 + 0 + \frac{1}{4!}x^4 + 0 +\dots \\
 & = 1 - \frac{1}{2!}x^2 + \frac{1}{4!}x^4 +\dots \\
 & = \sum_{ n = 0 }^{ \infty } \frac{(-1)^nx^{2n}}{(2n)!}
\end{align}
$$

> Knowing that $\arctan x = \sum_{ n = 0 }^{ \infty } \frac{(-1)^nx^{2n + 1}}{2n + 1}$,

> a. Find a Maclaurin series for $\arctan x^2$.

$$
\begin{align}
\arctan x & = \sum_{ n = 0 }^{ \infty } \frac{(-1)^nx^{2n + 1}}{2n + 1} \\
\implies \arctan x^2 & = \sum_{ n = 0 }^{ \infty } \frac{(-1)^nx^{4n + 2}}{2n + 1} \\
 & = \sum_{ n = 0 }^{ \infty } \frac{\frac{(-1)^nx^{3n + 2}n!}{2n + 1}}{n!}x^n
\end{align}
$$

> b. Find a series expansion for $F(x) = \int_{0}^{x} \arctan t^2 \, \mathrm{d} t$.

$$
\begin{align}
F(x) & = \int_{0}^{x} \sum_{ n = 0 }^{ \infty } \frac{\frac{(-1)^nt^{3n + 2}n!}{2n + 1}}{n!}t^n \, \mathrm{d} t \\
 & = \sum_{ n = 0 }^{ \infty } \int_{0}^{x} \frac{\frac{(-1)^nt^{3n + 2}n!}{2n + 1}}{n!}t^n \, \mathrm{d} t \\
 & = \sum_{ n = 0 }^{ \infty } \left( \frac{(-1)^n}{2n + 1}\int_{0}^{x} t^{4n + 2} \, \mathrm{d} t \right) \\
 & = \sum_{ n = 0 }^{ \infty } \left( \frac{(-1)^n}{2n + 1} \frac{x^{4n + 3}}{4n + 3} \right) \\
 & = \sum_{ n = 0 }^{ \infty } \frac{(-1)^nx^{4n + 3}}{(2n + 1)(4n + 3)} \\
 & = \frac{x^3}{1\cdot3} - \frac{x^7}{3\cdot7} + \frac{x^{11}}{5\cdot11} -\dots
\end{align}
$$

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
