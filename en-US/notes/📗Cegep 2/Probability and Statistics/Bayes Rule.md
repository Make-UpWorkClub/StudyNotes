---
tags:
  - Cegep2
  - ProbabilityAndStatistics
date: 2025-02-26T11:01:32
---

%% [[Probability]] %%

# Bayes Rule

$$
P(A|B) = \frac{P(A)P(B|A)}{P(B)}
$$

> [!example]+
> > Three machines, A, B and C, are responsible for 50, 30 and 20 percent of the total production of a given item, respectively. The machines have defective rates of 2, 4 and 6 percent, respectively. An item is randomly selected from the lot. If it is defective, find the probability that it was produced by machine A.
> 
> $$
> \begin{align}
> P(D) & = P(D|A)P(A) + P(D|B)P(B) + P(D|C)P(C) \\
>  & = 0.02\cdot0.5 + 0.04\cdot0.3 + 0.06\cdot0.2 \\
>  & = 0.034
> \end{align}
> $$
> 
> $$
> \begin{align}
> P(A|D) & = \frac{P(A)P(D|A)}{P(D)} \\
>  & = \frac{0.5\cdot0.02}{0.034} \\
>  & \approx 0.2941
> \end{align}
> $$
