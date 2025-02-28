---
tags:
  - Cegep2
  - ProbabilityAndStatistics
date: 2025-02-26T10:47:27
---

# Multiplicative Rule

The [[Counting#^5d51c4|cardinality]] of an event that occurs through a series of $k$ mutually exclusive events is

$$
n(A) = n(A_1)n(A_2)\dots n(A_k)
$$

## Multiplicative rule of [[probability]]

The probability of an event that occurs through a series of $k$ mutually exclusive events is

- For *independent* events, $P(A_1\cap A_2\cap\dots A_k) = P(A_1)P(A_2)\dots P(A_k)$
- For *dependent* events, $P(A_1\cap A_2\cap\dots A_k) = P(A_1)P(A_2|A_1)\dots P(A_k|A_{k - 1}|\dots A_1)$