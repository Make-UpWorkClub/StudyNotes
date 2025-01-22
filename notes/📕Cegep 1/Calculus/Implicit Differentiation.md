---
tags:
  - Cegep1
  - Calculus
date: 2024-10-23T15:52:17
---

# Implicit differentiation

[[Derivative|Differentiation]] of equations (as opposed to explicit functions)

Find $y'$ / $x'$ by:

- Considering $y$ / $x$ as a function of $x$ / $y$
- Differentiating as normal using the Chain Rule

2 ways of higher order implicit differentiation:

1. Isolate $y'$, then differentiate it again
2. Take any intermediate step during derivation and differentiate both sides

> [!info]+
> $y'$ and $x'$ may depend on two variables.
> To evaluate $y'$ at $(x_0, y_0)$, we write
> 
> $$
> y'(x_0, y_0) = \dots
> $$

## Examples

Find $\frac{\mathrm{d}y}{\mathrm{d}x}$ of $x^2 + xy + y^2 = 1$.

$$
\begin{align}
x^2 + xy + y^2 & = 1 \\
\frac{\mathrm{d}}{\mathrm{d}x} (x^2 + xy + y^2) & = \frac{\mathrm{d}}{\mathrm{d}x} 1 \\
2x + y + xy' + 2yy' & = 0 \\
y'(x + 2y) & = - (2x + y) \\
y' & = -\frac{2x + y}{x + 2y}
\end{align}
$$

---

Find $\frac{\mathrm{d}x}{\mathrm{d}y}$ of $x^2 + xy + y^2 = 1$.

$$
\begin{align}
x^2 + xy + y^2 & = 1 \\
\frac{\mathrm{d}}{\mathrm{d}x} (x^2 + xy + y^2) & = \frac{\mathrm{d}}{\mathrm{d}x} 1 \\
2xx' + x'y + x + 2y & = 0 \\
x'(2x + y) & = -(x + 2y) \\
x' & = -\frac{x + 2y}{2x + y}
\end{align}
$$

---

Find the slope of the tangent line to the curve $xy\ln(2 - yx) = 0$ at $(1,1)$.

$$
\begin{align}
xy\ln(2 - xy) & = 0 \\
\frac{\mathrm{d}}{\mathrm{d}x} (xy\ln(2 - xy)) & = \frac{\mathrm{d}}{\mathrm{d}x} 0 \\
y\ln(2 - xy) + xy'\ln(2 - xy) + xy\cdot \frac{(2 - xy)'}{2 - xy} & = 0 \\
y\ln(2 - xy) + xy'\ln(2 - xy) - xy\cdot \frac{y + xy'}{2 - xy} & = 0
\end{align}
$$

Plug $(1, 1)$:

$$
\begin{align}
1\ln(2 - 1\cdot1) + 1y'(1, 1)\ln(2 - 1\cdot1) - 1\cdot1 \frac{1 + 1y'(1, 1)}{2 - 1\cdot1} & = 0 \\
-(1 + y'(1, 1)) & = 0 \\
y'(1, 1) & = - 1
\end{align}
$$