---
tags:
  - mat/calculus
  - cegep/1
date: 2024-10-08T10:03:56
---

%% [[derivative]] %%

# Product Rule

Let $f$ and $g$ be two **differentiable** functions, then

$$
\frac{d}{dx}(f(x)g(x)) = f(x)g'(x) + g(x)f'(x)
$$

The rule extends to >2 functions:

$$
\frac{d}{dx}(f(x)g(x)h(x)) = f'(x)g(x)h(x) + g'(x)f(x)h(x) + h'(x)f(x)g(x)
$$

## Proof

Let $p(x) = f(x)g(x)$, then

$$
\begin{align}
\frac{\mathrm{d}}{\mathrm{d}x} (f(x)g(x)) = p'(x) & = \lim_{ h \to 0 } \frac{p(x + h) - p(x)}{h} \\
 & = \lim_{ h \to 0 } \frac{f(x + h)g(x + h) - f(x)g(x)}{h} \\
\implies & = \lim_{ h \to 0 } \frac{f(x + h)g(x + h) - f(x + h)g(x) + f(x + h)g(x) - f(x)g(x)}{h} \\
 & = \lim_{ h \to 0 } \frac{f(x + h)(g(x + h) - g(x)) + g(x)(f(x + h) - f(x))}{h} \\
 & = \lim_{ h \to 0 } \left( \frac{f(x + h)(g(x + h) - g(x))}{h} + \frac{g(x)(f(x + h) - f(x))}{h} \right) \\
 & = \lim_{ h \to 0 } \frac{f(x + h)(g(x + h) - g(x))}{h} + \lim_{ h \to 0 } \frac{g(x)(f(x + h) - f(x))}{h} \\
 & = \lim_{ h \to 0 } f(x + h)\lim_{ h \to 0 } \frac{g(x + h) - g(x)}{h} + g(x) \lim_{ h \to 0 } \frac{f(x + h) - f(x)}{h} \\
 & = f(x)g'(x) + g(x)f'(x)
\end{align}
$$
