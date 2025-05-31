---
tags:
  - PAS
  - Cegep/2
date: 2025-05-06T14:30:02
---

# Chi-Squared Test

[[Test]] to determine whether two qualitative variables are independent

$H_0$: variables are independent
$H_1$: variables are dependent

Steps:

1. Determine the degrees of freedom
2. Construct the table of expected frequencies
3. Compute chi-squared
4. Use probability table to find p-value of chi-squared

> [!warning] Only valid when $n \ge 30$ and $e_{ij} \ge 5 \forall i, j$

## Examples

> A randomly selected sample was asked to choose their preferred musical genres from a set of choices. Do the results of the sample indicate (at 𝛼 = 5%) whether musical preferences are dependent of the generation to which belongs the respondents?
> 
> |         | Classical/Jazz | Hip Hop/Rap | Pop | Rock/Alternative | Total |
> | -------:| --------------:| -----------:| ---:| ----------------:| -----:|
> | Boomers |             32 |           6 |  11 |               18 |    67 |
> |   Gen X |             18 |           9 |  23 |               31 |    81 |
> |   Gen Y |             11 |          21 |  39 |               17 |    88 |
> |   Gen Z |              8 |          31 |  25 |               11 |    75 |
> |   Total |             69 |          67 |  98 |               77 |   311 |

$H_0$: the musical preferences are independent of the generation.
$H_1$: the musical preferences are dependent of the generation.

$$
\begin{align}
df & = (n - 1)(m - 1) = (4 - 1)(4 - 1) = 9 \\
\chi_9^2 & = \sum_{ i, j } \frac{(o_{ij} - e_{ij})^2}{e_{ij}} \\
 & = \frac{\left( 32 - \frac{67\cdot69}{311} \right)^2}{\frac{67\cdot69}{311}} + \frac{\left( 6 - \frac{67\cdot67}{311} \right)^2}{\frac{67\cdot67}{311}} +\dots + \frac{\left( 11 - \frac{75\cdot77}{311} \right)^2}{\frac{75\cdot77}{311}} \\
 & \approx 70.81 \\
p & = P(X_9^2 > 70.81) \approx 1.05\cdot10^{-11} < 5\%
\end{align}
$$

Therefore, we reject $H_0$ and conclude that preferred musical genres are dependent of the generation.