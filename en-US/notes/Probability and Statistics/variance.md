---
tags:
  - PAS
  - Cegep/2
date: 2025-01-30T19:52:50
---

# Variance

Measure of [[variability]]
Special case of [[covariance]] in which the two variables are identical

*Sample* variance:

$$
s^2 = \frac{\sum_{ i = 1 }^{ n } (x_i - \overline{x})^2}{n - 1}
$$

*Population* variance:

$$
\sigma^2 = \frac{\sum_{ i = 1 }^{ n } (x_i - \mu)^2}{N}
$$

For *discrete* classes:

$$
s^2 = \frac{\sum_{ i = 1 }^{ c } n_i(x_i - \overline{x})^2}{n - 1}
$$

For *continuous* classes:

$$
s^2 = \frac{\sum_{ i = 1 }^{ c } n_i(c_i - \overline{x})^2}{n - 1}
$$

## Properties

$$
Var(X) = E(X^2) - E^2(X) = \sum x^2p(x) - \left( \sum xp(x) \right)^2
$$

For linear transformation:

$$
Var(Y) = Var(aX + b) = a^2Var(X)
$$

For independent variables:

$$
Var(T) = Var(X \pm Y) = Var(X) \pm Var(Y)
$$