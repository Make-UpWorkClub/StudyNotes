---
tags:
  - Calculus
  - cegep/1
  - cegep/2
date: 2024-11-05T12:04:25
---

%% [[derivative]] %%

# Mean Value Theorem

`Abbr.` M. V. T.

Let $f(x)$ be a function continuous over $[a, b]$ and differentiable over $(a, b)$,
then $\exists c\in[a, b]$ such that

$$
\begin{align}
f'(c) & = \frac{f(b) - f(a)}{b - a} \\
f(c) & = \frac{1}{b - a}\int_{a}^{b} f(x) \, \mathrm{d}x
\end{align}
$$

## Proof for integrals

We know that $f$ is continuous on $[a, b]$.
Define $A(x) = \int_{a}^{x} f(t) \, \mathrm{d}t$, then by FTC1 we get:

1. $A(x)$ is continuous on $[a, b]$.
2. $A(x)$ is differentiable on $(a, b)$.
3. $A'(x) = f(x)$

By 1. and 2. we can apply MVT to $A(x)$ on $[a, b]$ to get that $\exists c\in[a, b]$ such that

$$
A'(c) = \frac{A(b) - A(a)}{b - a}
$$

Using 3.,

$$
f(c) =
$$

Note that $A(b) = \int_{a}^{b} f(t)$ and $A(a) = \int_{a}^{a} f(t) \, \mathrm{d}t = 0$.

$$
= \frac{1}{b - a}\int_{a}^{b} f(t) \, \mathrm{d}t
$$

$\square$

## Examples

> If a steel ball is dropped, its velocity at time $t$ is approximated by $v(t) = -10t\pu{\frac{m}{s}}$. Find the average velocity between the time it is dropped at 373m and when it hits the ground.

We find $t_2$ by solving $x(t) = 0$.

$$
\begin{align}
x(t) & = \int v(t) \, \mathrm{d}t \\
 & = -5t^2 + 373
\end{align}
$$
