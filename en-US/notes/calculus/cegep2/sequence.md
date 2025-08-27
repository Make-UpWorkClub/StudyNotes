---
tags:
  - Calculus
  - cegep/2
date: 2025-04-15T15:25:00
---

# Sequence

Infinite set of values with a specific order and pattern

$$
\{ a_1, a_2, a_3, \dots \} = \{ a_n \}_{n = 1}^\infty
$$

## Examples

> Find the general term for each sequence:

> $\left\{  1, \frac{1}{3}, \frac{1}{5}, \frac{1}{7}, \dots  \right\}$

$$
\frac{1}{2n - 1}
$$

> $\{ 5, 8, 11, 14, 17, \dots \}$

$$
3n + 3
$$

> $\left\{  - \frac{1}{2}, \frac{4}{3}, \frac{9}{4}, \frac{16}{5}, \dots  \right\}$

$$
\frac{(-1)^nn^2}{n + 1}
$$

> $\left\{  \frac{3}{5}, - \frac{4}{25}, \frac{1}{25}, - \frac{6}{625}, \dots  \right\}$

$$
(-1)^{n - 1} \frac{n + 2}{5^n}
$$

> $\left\{  3, 2, \frac{4}{3}, \frac{8}{9}, \frac{16}{27}, \dots  \right\}$

$$
\frac{2^{n - 1}}{3^{n - 2}}
$$

> Determine if the sequence converges or diverges:

> $\left\{  e^{\frac{2n}{n + 2}}\arctan \frac{n}{2}  \right\}_{n = 1}^{\infty}$

$$
\lim_{ n \to \infty } e^{\frac{2n}{n + 2}}\arctan \frac{n}{2} = e^2 \frac{\pi}{2}
$$

> $\left\{  \frac{(n + 1)!}{(n + 4)!}  \right\}_{n = 1}^{\infty}$

$$
\begin{align}
\lim_{ n \to \infty } \frac{(n + 1)!}{(n + 4)!} & = \lim_{ n \to \infty } \frac{(n + 1)!}{(n + 4)(n + 3)(n + 2)(n + 1)!} \\
 & = \lim_{ n \to \infty } \frac{1}{(n + 4)(n + 3)(n + 2)} \\
 & = 0
\end{align}
$$

> $\left\{  \frac{(n + 2)!}{n!}  \right\}_{n = 1}^{\infty}$

$$
\begin{align}
\lim_{ n \to \infty } \frac{(n + 2)!}{n!} & = \lim_{ n \to \infty } \frac{(n + 2)(n + 1)n!}{n!} \\
 & = \lim_{ n \to \infty } (n + 2)(n + 1) \\
 & = \infty
\end{align}
$$

> $\left\{  \ln(1 + n^2) - \frac{1}{2}\ln(n^3 + 4n)  \right\}_{n = 1}^{\infty}$

$$
\lim_{ n \to \infty } \ln(1 + n^2) - \frac{1}{2}\ln(n^3 + 4n) = -\infty
$$

> $\left\{  (1 + 2n)^{\frac{1}{n}}  \right\}_{n = 1}^{\infty}$

Let $x =(1 + 2n)^{\frac{1}{n}}$.

$$
\begin{align}
\lim_{ n \to \infty } (1 + 2n)^{\frac{1}{n}} & = x \\
\implies \lim_{ n \to \infty } \ln(1 + 2n)^{\frac{1}{n}} & = \ln x \\
\lim_{ n \to \infty } \frac{1}{n}\ln(1 + 2n) & = \ln x \\
\implies \lim_{ n \to \infty } \frac{1}{1 + 2n}\cdot2 & = \ln x \\
0 & = \ln x \\
x & = 1
\end{align}
$$
