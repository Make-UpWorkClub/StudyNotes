---
tags:
  - Cegep2
  - ProbabilityAndStatistics
date: 2025-01-30T19:52:50
---

# Variance

Measure of [[variability]]

Sample variance:

$$
s^2 = \frac{\sum_{ i = 1 }^{ n } (x_i - \overline{x})^2}{n - 1}
$$

Population variance:

$$
\sigma^2 = \frac{\sum_{ i = 1 }^{ n } (x_i - \mu)^2}{N}
$$

For discrete classes:

$$
s^2 = \frac{\sum_{ i = 1 }^{ c } n_i(x_i - \overline{x})^2}{n - 1}
$$

For continuous classes:

$$
s^2 = \frac{\sum_{ i = 1 }^{ c } n_i(c_i - \overline{x})^2}{n - 1}
$$

For discrete random variable:

$$
\sigma^2 = \sum x^2p(x) - \mu^2
$$

For linear transformation:

$$
\sigma^2(Y) = \sigma^2(aX + b) = a^2\sigma^2(X)
$$

For sum / difference of **independent** variables:

$$
\sigma^2(T) = \sigma^2(X + Y) = \sigma^2(X) + \sigma^2(Y)
$$