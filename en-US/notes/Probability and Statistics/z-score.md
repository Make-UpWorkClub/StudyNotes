---
tags:
  - PAS
  - Cegep/2
date: 2025-01-30T20:22:47
---

# Z-Score

Distance of a measurement from the [[mean]] in [[standard deviation|standard deviations]]
Measure of [[relative standing]]
`Sym.` $Z$ (as a random variable)

Sample z-score:

$$
z = \frac{x - \overline{x}}{s}
$$

Population z-score:

$$
z = \frac{x - \mu}{\sigma}
$$

==Follows [[normal distribution#^a4cfff|standard normal distribution]]:==

$$
\begin{align}
Z & \sim N(0, 1) \\
E(Z) & = 0 \\
Var(Z) & = 1
\end{align}
$$

> [!abstract] $z_a$
> $z$ such that an area of $a$ lies to its right, i.e. $P(Z > z_a) = a$

## Examples

> Suppose the scores, X, on a college entrance exam are normally distributed with mean of 550 and standard deviation of 100. A prestigious university will only consider admitting applicants whose scores exceed the 90th percentile of the distribution. Find the minimum score an applicant must achieve in order to receive consideration for admission to the university.

$$
\begin{align}
P(X\le x_0) & = 0.9 \\
\iff P\left( \frac{X - \mu}{\sigma}\le \frac{x_0 - \mu}{\sigma} \right) & = 0.9 \\
\iff P\left( Z\le \frac{x_0 - 550}{100} \right) & = 0.9 \\
\iff P\left( Z > \frac{x_0 - 550}{100} \right) & = 0.1 \\
\iff P\left( Z< -\frac{x_0 - 550}{100} \right) & = 0.1 \\
-\frac{x_0 - 550}{100} & = -1.28 \\
x_0 & = 678
\end{align}
$$

> Using z-score, derive a $1 - a$ confidence interval for $p$ by taking $n$ random samples.

$$
\begin{align}
P\left( -z_{\frac{\alpha}{2}} < Z < z_{\frac{\alpha}{2}} \right) & = 1 - \alpha \\
\iff P\left( -z_{\frac{\alpha}{2}} < \frac{\hat{P} - p}{\sqrt{\frac{p(1 - p)}{n}}} < z_{\frac{\alpha}{2}} \right) & = 1 - \alpha \\
\iff P\left( \hat{P} - z_{\frac{\alpha}{2}}\sqrt{\frac{p(1 - p)}{2}} < p < \hat{P} + z_{\frac{\alpha}{2}}\sqrt{\frac{p(1 - p)}{n}} \right) & = 1 - \alpha \\
P\left( \hat{P} - z_{\frac{\alpha}{2}}\sqrt{\frac{\hat{p}(1 - \hat{p})}{n}} < p < \hat{P} + z_{\frac{\alpha}{2}}\sqrt{\frac{\hat{p}(1 - \hat{p})}{n}} \right) & \approx 1 - \alpha
\end{align}
$$