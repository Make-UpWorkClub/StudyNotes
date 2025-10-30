---
tags:
  - mat/calculus
  - cegep/2
date: 2025-01-24T21:03:47
---

# Summation

## Properties

- $\sum_{ i = 1 }^{ n }k = kn$
- $\sum_{ i = 1 }^{ n }ka_i = k\sum_{ i = 1 }^{ n }a_i$
- $\sum_{ i = 1 }^{ n }(a_i + b_i) = \sum_{ i = 1 }^{ n }a_i + \sum_{ i = 1 }^{ n }b_i$
- $\sum_{ i = 1 }^{ n }i = \frac{n(n + 1)}{2}$
- ==$\sum_{ i = 1 }^{ n }i^2 = \frac{n(n + 1)(2n + 1)}{6}$==
- ==$\sum_{ i = 1 }^{ n }i^3 = \left( \frac{n(n + 1)}{2} \right)^2$==

> [!example]- Find the value of the sum as an expression of $n$: $\sum_{ i = 1 }^{ n }\left( \left( 2 + \frac{3i}{n} \right)^2 - \left( 2 + \frac{3i}{n} \right)\right)\left( \frac{3}{n} \right)$
> $$
> \begin{align}
> \sum_{ i = 1 }^{ n }\left( \left( 2 + \frac{3i}{n} \right)^2 - \left( 2 + \frac{3i}{n} \right)\right)\left( \frac{3}{n} \right) & = \frac{3}{n}\left( \sum_{ i = 1 }^{ n } \left( 2 + \frac{3i}{n} \right)^2 - \sum_{ i = 1 }^{ n } \left( 2 + \frac{3i}{n} \right) \right) \\
>  & = \frac{3}{n}\left( \sum_{ i = 1 }^{ n } \left( 4 + \frac{12i}{n} + \frac{9i^2}{n^2} \right) - 2n - \sum_{ i = 1 }^{ n } \frac{3i}{n} \right) \\
>  & = \frac{3}{n}\left( 4n + \frac{12}{n} \sum_{ i = 1 }^{ n } i + \frac{9}{n^2}\sum_{ i = 1 }^{ n } i^2 - 2n - \frac{3}{n}\sum_{ i = 1 }^{ n } i \right) \\
>  & = \frac{3}{n}\left( 2n + \frac{9}{n}\cdot \frac{n(n + 1)}{2} + \frac{9}{n^2} \cdot \frac{n(n + 1)(2n + 1)}{6} \right) \\
>  & = 6 + \frac{27(n + 1)}{2n} + \frac{9(n + 1)(2n + 1)}{2n^2}
> \end{align}
> $$
