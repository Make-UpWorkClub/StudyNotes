---
tags:
  - PAS
  - Cegep/2
date: 2025-01-30T20:00:45
---

# Mean

Sum of measurements divided by the number of measurements
Measure of [[central tendency]]
`Syn.` expected value (of a random variable)

*Sample* mean:

$$
\overline{x} = \frac{\sum_{ i = 1 }^{ n } x_{i}}{n}
$$

*Population* mean:

$$
\mu = \frac{\sum_{ i = 1 }^{ N } x_i}{N}
$$

For *discrete* classes:

$$
\overline{x} = \frac{\sum_{ i = 1 }^{ c } n_ix_i}{n}
$$

For *continuous* classes:

$$
\overline{x} = \frac{\sum_{ i = 1 }^{ c } n_ic_i}{n}
$$

## Properties

$$
\begin{align}
E(\overline{X}) & = \mu \\
Var(\overline{X}) & = \frac{\sigma^2}{n} \\
Z & = \frac{\overline{x} - \mu}{\frac{\sigma}{\sqrt{n}}}
\end{align}
$$

For linear transformation:

$$
E(Y) = E(aX + b) = aE(X) + b
$$

For independent variables:

$$
E(T) = E(X \pm Y) = E(X) \pm E(Y)
$$