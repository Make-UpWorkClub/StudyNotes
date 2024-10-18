---
tags:
  - Cegep1
  - Mathematics
date: 2024-10-18T15:31:54
---

# Higher Order Derivative

[[Derivative]] of a derivative (order higher than 1)

> [!important] Do not simplify when finding patterns in the formula.

> [!example]- Find the formula for the $n$ <sup>th</sup> derivative of $f(x) = \frac{1}{x}$.
> |     $n$      |       0       |        1         |        2        |           3            |              4              | $\dots$ |
> |:------------:|:-------------:|:----------------:|:---------------:|:----------------------:|:---------------------------:|:-------:|
> | $f^{(x)}(x)$ | $\frac{1}{x}$ | $-\frac{1}{x^2}$ | $\frac{2}{x^3}$ | $-\frac{2\cdot3}{x^4}$ | $\frac{2\cdot3\cdot4}{x^5}$ | $\dots$ |
> 
> By observation, $f^{(n)}(x) = \frac{(-1)^nn!}{x^{n + 1}}$.