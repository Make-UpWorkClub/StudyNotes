---
tags:
  - Cegep2
  - ProbabilityAndStatistics
date: 2025-01-30T20:22:50
---

# Percentile

The $k^{th}$ percentile is the number such that $k\%$ of measurements fall below that number, and the rest fall above it.
`Sym.` $P_k(X)$, where X is the variable
Measure of [[relative standing]]

The $k^{th}$ percentile is:
	- $k\%(n + 1)$ is integer -> the value at $k\%(n + 1)$
	- else -> estimated by interpolation: $P_k = L_c + \left( \frac{k - F_{c - 1}}{f_c} \right)w_c$