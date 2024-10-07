---
tags:
  - Cegep1
  - Mathematics
date: 2024-10-01T11:21:56
---

# Derivative

Slope of a [[tangent line]] of a function
Also instantaneous rate of change of the function at the tangent point
The derivative of $f$ at $x$ is

$$
f'(x) = y' = \frac{d}{dx}[f(x)] = \frac{dy}{dx} = \lim_{ h \to 0 } \frac{f(x + h) - f(x)}{h}
$$

> [!abstract] Difference quotient
> $\frac{f(x + h) - f(x)}{h}$

> [!abstract] Differentiation operator
> $\frac{d}{dx}$ "take the derivative with respect to $x$"

## Sidedness

Left-side derivative at $a$:

$$
f'_-(a) = \lim_{ h \to 0^- } \frac{f(a + h) - f(a)}{h}
$$

Right-side derivative at $a$:

$$
f'_+(a) = \lim_{ h \to 0^+ } \frac{f(a + h) - f(a)}{h}
$$

> [!important] $f'(x) = L \iff f'_-(x) = f'_+(x) = L$

## Properties & theorems

- $\frac{d}{dx}c = 0$
- Power rule: $\frac{d}{dx}x^n = nx^{n - 1}$