---
tags:
  - Cegep2
  - ProbabilityAndStatistics
date: 2025-03-11T15:17:10
---

# Random Variable

Function of [[Event|sample points]] to numerical values
`Sym.` ==$X$, $x$ for concrete value==

> [!info] Can be the identity function

> [!abstract] Support
> Set of all possible values of $X$
> `Sym.` $S(X)$

## Properties

For discrete random variable:

$$
\begin{align}
\mu & = E(X) & = \sum xp(x) \\
\sigma^2 & = Var(X) & = E(X^2) - E^2(X) = \sum x^2p(x) - \left( \sum xp(x) \right)^2
\end{align}
$$

For sum / difference of **independent** variables:

$$
\begin{align}
E(T) & = E(X \pm Y) & = E(X) \pm E(Y) \\
Var(T) & = Var(X \pm Y) & = Var(X) \pm Var(Y)
\end{align}
$$

## Types

### Discrete

Possible values are finitely or infinitely *countable*

> [!example] Sum of two dice rolls

### Continuous

Possible values are *uncountable*, i.e. can take any value in an interval