---
tags:
  - mat/PAS
  - cegep/2
date: 2025-04-17T15:00:36
---

# Test

[[Experiment]] to prove a [[hypothesis]]

> [!abstract] Rejection region
> Set of possible values of the test statistic for which $H_0$ is rejected in favour of $H_1$

## Tails

*One-tailed* test: test whose alternative hypothesis *specifies* the direction ($<$ or $>$)

$$
\begin{align}
P(T_{n - 1} > t_{n - 1, \alpha}) & = 1 - \alpha \\
P(T_{n - 1} < -t_{n - 1, \alpha}) & = 1 - \alpha
\end{align}
$$

*Two-tailed* test: test whose alternative hypothesis *doesn't specify* the direction ($\ne$)

$$
\begin{align}
P\left( -t_{n - 1, \frac{\alpha}{2}} < T_{n - 1} < t_{n - 1, \frac{\alpha}{2}} \right) & = 1 - \alpha \\
P\left( T_{n - 1} < -t_{n - 1, \frac{\alpha}{2}} \cup T_{n - 1} > t_{n - 1, \frac{\alpha}{2}} \right) & = \alpha
\end{align}
$$

## Examples

> A random sample of 15 sections of sewer pipe are tested for strength. You choose α = 0.05. Suppose the mean is found to be 2500 pounds per linear foot and the standard deviation is 200 pounds per linear foot. What would your test that strength is above 2400 conclude?

$$
\begin{align}
T_{14} & = \frac{\overline{x} - \mu}{\frac{s}{\sqrt{n}}} \\
 & = \frac{2500 - 2400}{\frac{200}{\sqrt{15}}} \\
 & = 1.93
\end{align}
$$

Therefore, there is sufficient evidence to reject $H_0$ at $\alpha = 0.05$.