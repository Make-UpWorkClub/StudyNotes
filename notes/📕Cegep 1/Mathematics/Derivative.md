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

> [!info] $\frac{f(x + h) - f(x)}{h}$ is called the **difference quotient**.

> [!info] $\frac{dy}{dx}$ is called the **differentiation operator**, or formally Leibniz's notation, and means "take the derivative with respect to $x$."

> [!warning]+
> $f'(a)$ stands for derivative at $a$ while $\frac{d}{dx} f(a)$ is derivative at $y = f(a)$, which is always 0.
> Under Leibniz's notation we write
> 
> $$
> \left.\frac{d}{dx}f(x)\right|_{x = a}
> $$

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

## Implicit differentiation

To differentiate implicit expressions, 

## Properties & theorems

- $\frac{d}{dx}c = 0$
- $\frac{d}{dx}(c\cdot f(x)) = c\cdot f'(x)$
- $\frac{d}{dx}(f(x)\pm g(x)) = f'(x) \pm g'(x)$
- Product Rule: $\frac{d}{dx}(f(x)\cdot g(x)) = f(x)g'(x) + g(x)f'(x)$
- Quotient Rule: $\frac{d}{dx} \frac{f(x)}{g(x)} = \frac{g(x)f'(x) - f(x)g'(x)}{(g(x))^2}\text{, provided }g(x)\ne 0$
- Power Rule: $\frac{d}{dx}x^n = nx^{n - 1}$
- $\frac{d}{dx}\sin x = \cos x$
- $\frac{d}{dx}\cos x = -\sin x$
- $\frac{d}{dx}\tan x = \sec ^2x$
- $\frac{d}{dx}\sec x = \tan x\sec x$
- $\frac{d}{dx}\csc x = -\cot x\csc x$
- $\frac{d}{dx}\cot x = -\csc ^2x$