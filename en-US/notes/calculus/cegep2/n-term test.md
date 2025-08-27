---
tags:
  - Calculus
  - cegep/2
date: 2025-04-25T16:03:13
---

# n-Term Test

Test to determine whether a [[series]] diverges
Special case of [[limit comparison test]] where $b_n = 1$

If $\lim_{ n \to \infty }a_n \ne 0$, $\sum_{ n = 1 }^{ \infty } a_n$ diverges.

> [!important]
> If $\lim_{ n \to \infty } a_n = 0$, $\sum_{ n = 1 }^{ \infty } a_n$ doesn't necessarily converge.
> To prove it converges, use limit comparison test.

## Proof

Assuming $\sum_{ n = 1 }^{ \infty }a_n$ is convergent, show $\lim_{ n \to \infty }a_n = 0$.

If $\sum_{ n = 1 }^{ \infty }a_n$ is convergent, then $\lim_{ N \to \infty }S_N = S$ exists.
Since $S_N - S_{N - 1} = a_N$,

$$
\begin{align}
\lim_{ N \to \infty } a_N & = \lim_{ N \to \infty } S_N - S_{N - 1} \\
 & = \lim_{ N \to \infty } S_N - \lim_{ N \to \infty } S_{N - 1} \\
 & = S - S \\
 & = 0 \\
\therefore\lim_{ n \to \infty } a_n & = 0
\end{align}
$$

By contrapositive, if $\lim_{ n \to \infty }a_n\ne 0$, $\sum_{ n = 1 }^{ \infty }a_n$ is divergent.

$\square$
