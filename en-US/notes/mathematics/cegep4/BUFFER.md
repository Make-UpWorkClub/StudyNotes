---
tags:
  - mat/algebra
  - cegep/4
date: 2026-01-21T14:13:16
---

# Buffer

Let $p(x)$ be a polynomial such that

$$
p(x) = a_nx^n + a_{n - 1}x^{n - 1} +\dots + a_0
$$

If $p(k) = 0$, then $k|a_0$.

$$
\begin{align}
p(k) & = 0 \\
\implies a_nk^n + a_{n - 1}k^{n - 1} +\dots + a_0 & = 0 \\
\implies a_0 & = k(a_nk^{n - 1} + a_{n - 1}k^{n - 2} +\dots + a_1) \\
\implies k & |a_0
\end{align}
$$