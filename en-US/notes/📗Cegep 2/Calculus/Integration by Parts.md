---
tags:
  - Cegep2
  - Calculus
date: 2025-02-12T22:26:42
---

# Integration by Parts

Method of reversing an application of [[product rule]] to find the [[antiderivative]]
`Abbr.` IBP

To find the antiderivative of $\int u \, dv$,

1. Set $u$ and $dv$ such that finding $du$ and $v$ is easiest.
2. Find $du$ by differentiation and $v$ by integration.
3. 

> [!tip]+ Priority of $u$
> 1. Logarithmic
> 2. Inverse trigonometric
> 3. Algebraic
> 4. Trigonometric
> 5. Exponential

## Proof

$$
\begin{align}
f(x)g(x) & = \int (f'(x)g(x) + f(x)g'(x)) \, dx \\
\int f(x)g'(x) \, dx & = f(x)g(x) - \int f'(x)g(x) \, dx
\end{align}
$$

Let $u = f(x)$ and $v = g(x)$, then $du = f'(x)dx$ and $dv = g'(x)dx$.
Then, by substitution,

$$
\int u \, dv = uv - \int v \, du
$$

## Examples

> $\int \frac{lnx}{x^2} \, dx$

Let $u = ln(x)$ and $dv = \frac{1}{x^2}dx$,
then $du = \frac{1}{x}dx$ and $v = -\frac{1}{x}$.

$$
\begin{align}
\int \frac{\ln x}{x^2} \, dx & = -\frac{1}{x}\ln x - \int \left( -\frac{1}{x} \right)\left( \frac{1}{x} \right) \, dx \\
 & = -\frac{1}{x}\ln x + \int \frac{1}{x^2} \, dx \\
 & = -\frac{1}{x}\ln x - \frac{1}{x} + c
\end{align}
$$

>  $\int \arcsin x \, dx$

Let $u = \arcsin x$ and $dv = dx$,
then $du = \frac{dx}{\sqrt{1 - x^2}}$ and $v = x$.
By IBP,

$$
\begin{align}
\int \arcsin x \, dx & = x\arcsin x - \int \frac{x}{\sqrt{1 - x^2}} \, dx \\
 & = x\arcsin x + \frac{1}{2}\int \frac{du}{\sqrt{u}} \, dx \\
 & = x\arcsin x + u^{\frac{1}{2}} + c \\
 & = x\arcsin x + \sqrt{1 - x^2} + c
\end{align}
$$

> $\int x\mathrm{arcsec}x \, dx$

Let $u = \mathrm{arcsec}x$ and $dv = x$,
then $du = \frac{dx}{|x|\sqrt{x^2 - 1}}$ and $v = \frac{x^2}{2}$.
By IBP,

$$
\begin{align}
\int x\mathrm{arcsec}x \, dx & = \mathrm{arcsec}x \cdot \frac{x^2}{2} - \int x \cdot \frac{dx}{|x|\sqrt{x^2 - 1}}
\end{align}
$$