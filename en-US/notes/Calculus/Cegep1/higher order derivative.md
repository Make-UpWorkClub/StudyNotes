---
tags:
  - Calculus
  - Cegep/1
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

> [!example]- Find the formula for the $n$ <sup>th</sup> derivative of $f(x) = x^{2/3}$.
> |     $n$      |     0     |           1           |            2             |               3               |                   4                   | $\dots$ |
> |:------------:|:---------:|:---------------------:|:------------------------:|:-----------------------------:|:-------------------------------------:|:-------:|
> | $f^{(x)}(x)$ | $x^{2/3}$ | $\frac{2}{3}x^{-1/3}$ | $-\frac{2}{3^2}x^{-4/3}$ | $\frac{2\cdot4}{3^3}x^{-7/3}$ | $-\frac{2\cdot4\cdot7}{3^4}x^{-10/3}$ | $\dots$ |
>
> By observation, $f^{(n)}(x) = \left( \prod_{ i = 1 }^{ n } \frac{5 - 3i}{3} \right)x^{(2 - 3n)/3}$.
> Without pi notation, $f^{(n)}(x) = \frac{2}{3^n}x^{-(3n - 2)/3}(-1)^{n - 1}(1\cdot4\cdot7\dots\ \cdot(3n - 5))$ for $n \ge 2$.
