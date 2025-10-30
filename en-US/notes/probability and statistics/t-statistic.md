---
tags:
  - mat/PAS
  - cegep/2
date: 2025-04-03T21:09:38
---

# T-Statistic

Distance of a random variable from its mean in standard errors
Similar to [[z-score]], but used when ==the sample size is small== or ==the population standard deviation is unknown==

$$
\begin{align}
t & = \frac{x - \mu}{s} \\
df & = n - 1
\end{align}
$$

> [!info] The higher the degrees of freedom, the closer the t-distribution to the z-distribution.

## Examples

> Using t-statistic, derive a $1 - a$ confidence interval for $\mu$ by taking $n$ random samples.

$$
\begin{align}
P\left( -t_{\frac{\alpha}{2}} < T_{n - 1} < t_{\frac{\alpha}{2}} \right) & = 1 - \alpha \\
\iff P\left( -t_{\frac{\alpha}{2}} < \frac{\overline{X} - \mu}{\frac{S}{\sqrt{n}}} < t_{\frac{a}{2}} \right) & = 1 - \alpha \\
\iff P\left( -\overline{X} - t_{\frac{\alpha}{2}} \frac{S}{\sqrt{n}} < -\mu < -\overline{X} + t_{\frac{\alpha}{2}} \frac{S}{\sqrt{n}} \right) & = 1 - \alpha \\
\iff P\left( \overline{X} - t_{\frac{\alpha}{2}} \frac{S}{\sqrt{n}} < \mu < \overline{X} + t_{\frac{\alpha}{2}} \frac{S}{\sqrt{n}} \right) & = 1 - \alpha
\end{align}
$$

The confidence interval is $\left( \overline{X} - t_{\frac{\alpha}{2}} \frac{S}{\sqrt{n}}, \overline{X} + t_{\frac{\alpha}{2}} \frac{S}{\sqrt{n}} \right)$.

> A manufacturer of printers wishes to estimate the mean number of characters printed before the printhead fails. The printer manufacturer tests n = 15 printheads and finds $\overline{x}$ = 1.24 million characters printed until failure and s = 0.19 million characters printed until failure. Form a 99% confidence interval for the mean number of characters printed before the printhead fails. Interpret the result.

$$
\begin{align}
n = 15 \implies df & = 15 - 1 = 14 \\
t_{\frac{\alpha}{2}} & = t_{0.005} = 2.977 \\
\left( \overline{x} - t_{\frac{\alpha}{2}} \frac{s}{\sqrt{n}}, \overline{x} + t_{\frac{\alpha}{2}} \frac{s}{\sqrt{n}} \right) & =(1.09, 1.39)
\end{align}
$$

Therefore, $(1.09, 1.39)$ is a 99% C.I. for $\mu$.