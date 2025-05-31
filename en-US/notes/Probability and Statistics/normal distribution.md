---
tags:
  - PAS
  - Cegep/2
date: 2025-03-25T14:21:12
---

# Normal Distribution

[[probability distribution#Absolutely continuous|Absolutely continuous probability distribution]]
`Sym.` $N(\mu, \sigma^2)$
`Syn.` Gaussian distribution

> [!abstract] Bell curve
> Curve of a normal distribution

> [!abstract] Standard normal distribution
> Normal distribution with $\mu = 0$ and $\sigma = 1$
> `Sym.` $Z$

^a4cfff

![[Normal Distribution.png|400]]

## Properties

$$
P(X = k) = \frac{1}{\sigma \sqrt{2\pi}}e^{-\frac{1}{2}\left( \frac{k - \mu}{\sigma} \right)^2},\, - \infty < k < \infty
$$

- Linear transformations of normal variables are normal variables.
- Sums / differences of **independent** normal variables are normal variables.

$$
X, Y \sim N \implies (aX + b), (X \pm Y) \sim N
$$