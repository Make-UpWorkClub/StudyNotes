---
tags:
  - Calculus
  - cegep/1
date: 2024-10-01T11:22:17
---

# Tangent Line

Line that touches a curve at exactly one point

The slope of the tangent line at $(a, f(a))$ to the curve given by $y = f(x)$ is

$$
\lim_{ x \to a } \frac{f(x) - f(a)}{x - a}
$$

> [!example]- Find the equation of the tangent to the curve $y = x^2 + 2x$ at $x = 1$.
> The equation of the tangent is
>
> $$
> y - y_o = m(x - x_o)
> $$
>
> where
>
> $$
> \begin{align}
> m & = \lim_{ x \to a } \frac{f(x) - f(a)}{x - a} \\
>  & = \lim_{ x \to 1 } \frac{x^2 + 2x - 3}{x - 1} \\
>  & = \lim_{ x \to 1 } \frac{(x - 1)(x + 3)}{x - 1} \\
>  & = \lim_{ x \to 1 } (x + 3) \\
>  & = 4
> \end{align}
> $$
>
> Since the tangent shares the point $(1, f(1)) = (1, 3)$ with $f$,
>
> $$
> \begin{align}
> y - 3 & = 4(x - 1) \\
> y & = 4x - 4 + 3 \\
> y & = 4x - 1
> \end{align}
> $$
