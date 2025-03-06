---
tags:
  - Cegep2
  - Calculus
date: 2025-02-06T13:11:53
---

# Fundamental Theorem of Calculus, Part 2

`Abbr.` FTC2

If $f$ is continuous on $[a, b]$ and $F$ is any [[antiderivative]] of $f$,
then the [[definite integral]] of $f$ between $a$ and $b$ is the difference between the antiderivatives at $a$ and $b$, i.e.

$$
\int_{a}^{b} f(x) \, dx = F(b) - F(a)
$$

> [!important] $f(x)$ can be **any** antiderivative of $f$.

> [!info] Subtraction notation: $F(b) - F(a) = \left. F(x) \right|_a^b$

## Proof

We know that $f$ is continuous on $[a, b]$.
We want to show that $\int_{a}^{b} f(x) \, dx = F(b) - F(a) \forall F$.
Let $A(x) = \int_{a}^{x} f(t) \, dt$, then by [[Fundamental Theorem of Calculus, Part 1|FTC1]] we know $A' = f$.
Since $A$ and $f$ are both antiderivatives of $f'$, $f(x) = A(x) + c$.
Then,

$$
\begin{align}
f(b) - f(a) & = A(b) + c - (A(a) + c) \\
 & = A(b) - A(a) \\
 & = A(b) - 0 \\
 & = \int_{a}^{b} f(t) \, dt
\end{align}
$$

$\square$

## Consequence

$$
\begin{align}
\frac{\mathrm{d}}{\mathrm{d}x}\int_{h(x)}^{g(x)} f(t) \, dt & = \frac{\mathrm{d}}{\mathrm{d}x}\left( \int_{a}^{g(x)} f(t) \, dt - \int_{a}^{h(x)} f(t) \, dt \right) \\
 & = \frac{\mathrm{d}}{\mathrm{d}x}(F(g(x)) - F(a) - (F(h(x)) - F(a))) \\
 & = \frac{\mathrm{d}}{\mathrm{d}x}(F(g(x)) - F(h(x))) \\
 & = f(g(x))g'(x) - f(h(x))h'(x)
\end{align}
$$

## Examples

$g(x) = \frac{1}{3}x^3$ is an antiderivative of $f(x) = x^2$.

---

> Evaluate the following integrals.

$$
\int_{0}^{1} x^2 \, dx = \left.\frac{1}{3}x^3\right|_0^1 = \frac{1}{3}1^3 - 0 = \frac{1}{3}
$$

$$
\int_{1}^{3} e^x \, dx = \left. e^x \right|_1^3 = e^3 - e
$$

$$
\int_{0}^{3} (3x^2 + x) \, dx = \left. x^3 + \frac{x^2}{2} \right|_0^3 = 3^3 + \frac{3^2}{2} - 0 = \frac{63}{2}
$$