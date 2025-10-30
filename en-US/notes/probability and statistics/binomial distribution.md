---
tags:
  - mat/PAS
  - cegep/2
date: 2025-03-17T13:08:57
---

# Binomial Distribution

[[probability distribution#Discrete|Discrete probability distribution]] of the number of successes in $n$ [[Bernoulli trial|Bernoulli trials]] *with* replacement
`Sym.` $B(n, p)$

![[Binomial Distribution.png|400]]

## Properties

$$
\begin{align}
P(X = k) & = {n\choose k}p^k(1 - p)^{n - k} \\
E(X) & = np \\
Var(X) & = np(1 - p)
\end{align}
$$

> [!info] Unlike hypergeometric distribution, since the experiments are conducted with replacement, the PMF doesn't depend on population size and number of successes in population.