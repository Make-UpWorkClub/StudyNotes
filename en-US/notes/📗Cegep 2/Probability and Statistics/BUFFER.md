---
tags:
  - Cegep2
  - ProbabilityAndStatistics
date: 2025-01-21T19:08:18
---

# Buffer

# Variable

Property of an individual that is studied

# Census

Study where variable is measured for all individuals in the population

# Tails

Ends of a data distribution

# Law of Large Numbers

[[Frequency#Class relative frequency|Relative frequency]] approaches true probability as the number of tries repeats

# Combinations Rule

The number of possibilities by choosing $n$ elements from set of $N$ elements is

$$
{N \choose n} = \frac{N!}{n!(N - n)!}
$$

`Read as` "N choose n"

# Multiplicative Rule

The number of possibilities by choosing one element from $k$ sets of $n_i$ elements is

$$
n_1n_2n_3\dots n_k
$$

## Multiplicative rule of probability

For independent events, $P(A\cap B) = P(A)P(B|A) = P(B)P(A|B)$
For dependent events, $P(A_1\cap A_2\cap\dots A_i) = P(A_1)P(A_2)\dots P(A_i)$

# Law of True Probability

Suppose event $A$ and partitions $B_1, B_2,\dots B_k$, then

$$
P(A) = \sum_{ i = 1 }^{ k } P(A\cap B_i) = \sum_{ i = 1 }^{ k } P(B_i)P(A|B_i)
$$

> [!abstract] Partition
> Each of the pairwise disjoint events $E$ such that $E_1\cup E_2\cup\dots E_k = \Omega$

# Bayes Rule

$$
P(A|B) = \frac{P(A)P(B|A)}{P(B)}
$$

> [!example]+ Three machines, A, B and C, are responsible for 50, 30 and 20 percent of the total production of a given item, respectively. The machines have defective rates of 2, 4 and 6 percent, respectively. An item is randomly selected from the lot. If it is defective, find the probability that it was produced by machine A.
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
