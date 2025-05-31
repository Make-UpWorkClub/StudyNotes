---
tags:
  - PAS
  - Cegep/2
date: 2025-01-30T20:22:50
---

# Percentile

The $k^{th}$ percentile is the number such that $k\%$ of measurements fall below that number, and the rest fall above it.
`Sym.` $P_k(X)$, where X is the variable
Measure of [[relative standing]]

The $k^{th}$ percentile is:

- Discrete -> first value whose $F > k$ (interpolate with next value if $F = k$)
- Continuous grouped -> $P_k = L_c + \left( \frac{k - F_{c - 1}}{f_c} \right)w_c$