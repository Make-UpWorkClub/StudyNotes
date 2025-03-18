---
tags:
  - Cegep2
  - ProbabilityAndStatistics
date: 2025-03-11T15:17:10
---

# Random Variable

Function of [[Event|sample points]] to numerical values

> [!info] Can be the identity function

## Properties

For discrete random variable:

$$
\begin{align}
\sigma^2 & = Var(X) & = \sum x^2p(x) - E^2(X) = E(X^2) - E^2(X) \\
\mu & = E(X) & = \sum xp(x)
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

`Sym.` $X$
Possible value denoted as $x$

> [!abstract] Support
> Set of all possible values of $X$
> `Sym.` $S(X)$

> [!example] Sum of two dice rolls

### Continuous

Possible values are *uncountable*, i.e. can take any value in an interval