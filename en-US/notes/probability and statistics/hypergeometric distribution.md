---
tags:
  - mat/PAS
  - cegep/2
date: 2025-03-17T14:37:44
---

# Hypergeometric Distribution

[[probability distribution#Discrete|Discrete probability distribution]] of the number of successes in $n$ [[Bernoulli trial|Bernoulli trials]] *without* replacement
Follows a hypergeometric series

> [!important] Not related to geometric distribution

![[Hypergeometric Distribution.png|300]]

## Properties

$$
\begin{align}
P(X = k) & = \frac{{K\choose k}{N - K\choose n - k}}{N\choose n} \\
E(X) & = n\frac{K}{N} \\
Var(X) & = n \frac{K}{N} \frac{N - K}{N} \frac{N - n}{N - 1}
\end{align}
$$

Where:

- $N$ = population size
- $K$ = number of successes in population
- $n$ = number of draws
- $k$ = number of successes drawn