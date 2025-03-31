---
tags:
  - Cegep2
  - ProbabilityAndStatistics
date: 2025-03-27T15:02:39
---

# Central Limit Theorem

Consider a random sample of $n$ observations selected from **any** population with mean $\mu$ and standard deviation $\sigma$. Then, when $n$ is sufficiently large, the sampling distribution of [[Mean|sample mean]] will be approximately [[Normal Distribution|normal]]:

$$
\begin{align}
\overline{X} & \sim N\left( \mu, \frac{\sigma^2}{n} \right) \\
\frac{\overline{X} - E(\overline{X})}{\sigma(\overline{X})} & \sim N(0, 1) \\
E(\overline{X}) & = \mu \\
\sigma(\overline{X}) & = \frac{\sigma}{\sqrt{n}}
\end{align}
$$

## Examples

> Suppose we have selected a random sample of 36 observations from a population with mean 80 and standard deviation 6. What is the probability that the sample mean will be greater than 82?

$$
\begin{align}
\overline{X} & \sim N\left( \mu_{\overline{X}} = 80, \sigma_{\overline{X}} = \frac{6}{\sqrt{36}} = 1 \right) \\
 \\
P(\overline{X} > 82) & = P\left( \frac{\overline{X} - \mu_{\overline{X}}}{\sigma_{\overline{X}}} > \frac{82 - 80}{1} \right) \\
 & = P(Z > 2) \\
 & = P(Z < -2) \\
 & = 0.0228
\end{align}
$$

> The distribution of the lengths of life of a certain brand’s car battery has a mean of 54 months and a standard deviation of 6 months. Suppose you purchase a sample of 50 of these batteries and subject them to tests that estimate the battery’s life. What is the probability that your sample has a mean life of 52 or fewer months?

$$
\begin{align}
\overline{X} & \sim N\left( \mu_{\overline{X}} = 52, \sigma_{\overline{X}} = \frac{\sigma}{\sqrt{n}} = \frac{6}{\sqrt{50}} \right) \\
 \\
P(\overline{X}\le 52) & = P\left( \frac{\overline{X} - \mu_{\overline{X}}}{\sigma_{\overline{X}}} \le \frac{52 - 54}{\frac{6}{\sqrt{50}}} \right) \\
 & = P(Z \le -2.36) \\
 & = 0.0091
\end{align}
$$