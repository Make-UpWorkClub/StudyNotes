---
tags:
  - mat/algebra
  - cegep/4
date: 2026-02-25T15:18:09
---

# trace

Sum of diagonal of a square matrix
[[en-US/notes/mathematics/cegep4/linear transformation|Linear transformation]]

$$
\mathrm{tr}(A_{n \times n}) = \sum_{ i \le n }a_{i, i} 
$$

## Properties

> Distributivity: $\mathrm{tr}(A_{n \times n} + B_{n \times n}) = \mathrm{tr}(A) + \mathrm{tr}(B)$

$$
\begin{align}
\mathrm{tr}(A + B) & = \sum_{ i = 1 }^{ n } (a_{ii} + b_{ii}) \\
 & = \sum_{ i = 1 }^{ n } a_{ii} + \sum_{ i = 1 }^{ n } b_{ii} \\
 & = \mathrm{tr}(A) + \mathrm{tr}(B)
\end{align}
$$

$\square$

> Associativity: $\mathrm{tr}(kA_{n \times n}) = k \mathrm{tr}(A)$

$$
\begin{align}
\mathrm{tr}(kA) & = \sum_{ i = 1 }^{ n } (ka_{ii}) \\
 & = k\sum_{ i = 1 }^{ n } a_{ii} \\
 & = k \mathrm{tr}(A)
\end{align}
$$

$\square$

> Cyclic property: $\mathrm{tr}(A_{n \times m}B_{m \times n}) = \mathrm{tr}(BA)$

$$
\begin{align}
\mathrm{tr}(AB) & = \sum_{ i = 1 }^{ n } (AB)_{ii} \\
 & = \sum_{ i = 1 }^{ n } \sum_{ j = 1 }^{ m } (a_{ij}b_{ji}) \\
 & = \sum_{ j = 1 }^{ m } \sum_{ i = 1 }^{ n } (b_{ji}a_{ij}) \\
 & = \sum_{ j = 1 }^{ m } (BA)_{jj} \\
 & = \mathrm{tr}(BA)
\end{align}
$$

$\square$

> $\mathrm{tr}(A_{n \times n}^T) = \mathrm{tr}(A)$

$$
\begin{align}
\mathrm{tr}(A^T) & = \sum_{ i = 1 }^{ n } A_{ii}^T \\
 & = \sum_{ i = 1 }^{ n } A_{ii} \\
 & = \mathrm{tr}(A)
\end{align}
$$

$\square$