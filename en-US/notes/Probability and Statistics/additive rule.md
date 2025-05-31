---
tags:
  - PAS
  - Cegep/2
date: 2025-02-26T10:54:41
---

# Additive Rule

The [[counting#^5d51c4|cardinality]] of an event that can occur through $k$ events is

- For *mutually exclusive* events, $n(A_1\cup A_2\cup\dots A_k) = n(A_1) + n(A_2)\dots + n(A_k)$
- For *non mutually exclusive* events, $n(A_1\cup A_2\cup\dots A_k) = \sum_{ i = 1 }^{ k }n(A_i) - \sum_{ i = 1 }^{ k }\sum_{ j = i + 1 }^{ k }n(A_i\cap A_j) + \dots + (-1)^{k + 1}n(A_1\cap A_2\cap\dots A_k)$ (`aka.` **inclusion-exclusion principle**)

## Additive rule of probability

The [[probability]] of an event that can occur through $k$ events is

- For *mutually exclusive* events, $P(A_1\cup A_2\cup\dots A_k) = P(A_1) + P(A_2) +\dots P(A_k)$
- For *non mutually exclusive* events, $P(A_1\cup A_2\cup\dots A_k) = \sum_{ i = 1 }^{ k }P(A_i) - \sum_{ i = 1 }^{ k }\sum_{ j = i + 1 }^{ k }P(A_i\cap A_j) + \dots + (-1)^{k + 1}P(A_1\cap A_2\cap\dots A_k)$ (`aka.` inclusion-exclusion principle)