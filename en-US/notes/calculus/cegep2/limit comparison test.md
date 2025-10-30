---
tags:
  - mat/calculus
  - cegep/2
date: 2025-04-25T16:03:07
---

# Limit Comparison Test

Test to determine whether a [[series]] diverges by considering a simplified general term with same convergence / divergence

Let $\sum_{ n = 1 }^{ \infty } a_n$ and $\sum_{ n = 1 }^{ \infty }b_n$ be two series with only positive terms.
If $\lim_{ n \to \infty } \frac{a_n}{b_n}$ exists and is non zero, then $\sum a \sim \sum b$.

## Examples

> Determine if the following series are convergent:

> $\sum_{ n = 1 }^{ \infty } \frac{1}{n^3 + 1}$

$$
\begin{align}
\sum_{ n = 1 }^{ \infty } \frac{1}{n^3 + 1} & \implies a_n = \frac{1}{n^3 + 1} \\
\sum_{ n = 1 }^{ \infty } \frac{1}{n^3} & \implies b_n = \frac{1}{n^3} \\
\lim_{ n \to \infty } \frac{a_n}{b_n} & = \lim_{ n \to \infty } \frac{\frac{1}{n^3 + 1}}{\frac{1}{n^3}} \\
 & = \lim_{ n \to \infty } \frac{n^3}{n^3 + 1} \\
 & = 1 \ne 0
\end{align}
$$

Therefore, $\sum_{ n = 1 }^{ \infty } \frac{1}{n^3 + 1}$ is also convergent by LCT.

> $\sum_{ n = 1 }^{ \infty } \cos \frac{1}{\sqrt{n}}$

$$
\begin{align}
\sum_{ n = 1 }^{ \infty } \cos \frac{1}{\sqrt{n}} & \implies a_n = \cos \frac{1}{\sqrt{n}} \\
\sum_{ n = 1 }^{ \infty } 1 & \implies b_n = 1 \\
\lim_{ n \to \infty } \frac{a_n}{b_n} & = \lim_{ n \to \infty } \frac{\cos \frac{1}{\sqrt{n}}}{1} \\
 & = \cos \lim_{ n \to \infty } \frac{1}{\sqrt{n}} \\
 & = \cos 0 \\
 & = 1 \ne 0
\end{align}
$$

Therefore, $\sum_{ n = 1 }^{ \infty } \cos \frac{1}{\sqrt{n}}$ is also divergent by LCT.

> $\sum_{ n = 1 }^{ \infty } \frac{3n + 4^n}{5^n + 5}$

$$
\begin{align}
\sum_{ n = 1 }^{ \infty } \frac{3n + 4^n}{5^n + 5} & \implies a_n = \frac{3n + 4^n}{5^n + 5} \\
\sum_{ n = 1 }^{ \infty } \frac{4^n}{5^n} & \implies b_n = \frac{4^n}{5^n} \\
|r| & = \frac{4}{5} < 1 \therefore \text{convergent geometric series} \\
 \\
\lim_{ n \to \infty } \left( \frac{3n + 4^n}{5^n + 5} \right)\left( \frac{5^n}{4^n} \right) & = \lim_{ n \to \infty } \frac{\frac{3n}{4^n} + 1}{1 + \frac{5}{5^n}} \\
 & = 1 \ne 0
\end{align}
$$

Therefore, $\sum a_n$ is also convergent by LCT.

> $\sum_{ n = 1 }^{ \infty } \left( 1 + \frac{1}{n} \right)e^{-n}$

$$
\begin{align}
\sum_{ n = 1 }^{ \infty } \left( 1 + \frac{1}{n} \right)e^{-n} & \implies a_n =\left( 1 + \frac{1}{n} \right)e^{-n} \\
\sum_{ n = 1 }^{ \infty } e^{-1} & \implies b_n = e^{-1} \\
|r| & = \frac{1}{e} < 1 \therefore \text{convergent geometric series} \\
 \\
\lim_{ n \to \infty } \frac{\left( 1 + \frac{1}{n} \right)e^{-n}}{e^{-n}} & = \lim_{ n \to \infty } \left( 1 + \frac{1}{n} \right) \\
 & = 1 \ne 0
\end{align}
$$

Therefore, $\sum a_n$ is also convergent by LCT.
