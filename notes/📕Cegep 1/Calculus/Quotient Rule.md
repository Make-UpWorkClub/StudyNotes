---
tags:
  - Cegep1
  - Calculus
date: 2024-10-08T10:24:08
---

%% [[Derivative]] %%

# Quotient Rule

Let $f$ and $g$ be two **differentiable** functions, then

$$
\frac{d}{dx} \frac{f(x)}{g(x)} = \frac{g(x)f'(x) - f(x)g'(x)}{(g(x))^2}\text{, provided }g(x)\ne 0
$$

## Proof

Let $q(x) = \frac{f(x)}{g(x)}$, then note that

$$
\begin{align}
q(x + h) - q(x) & = \frac{f(x + h)}{g(x + h)} - \frac{f(x)}{g(x)} = \frac{f(x + h)g(x) - f(x)g(x + h)}{g(x + h)g(x)} \\
\implies \frac{q(x + h) - q(x)}{h} & = \frac{1}{h}\cdot \frac{f(x + h)g(x) - f(x)g(x + h)}{g(x + h)g(x)}
\end{align}
$$

Now,

$$
\begin{align}
\frac{\mathrm{d}}{\mathrm{d}x} \frac{f(x)}{g(x)} = q'(x) & = \lim_{ h \to 0 } \frac{q(x + h) - q(x)}{h} \\
 & = \lim_{ h \to 0 } \frac{1}{h}\cdot \frac{f(x + h)g(x) - f(x)g(x + h)}{g(x + h)g(x)} \\
\implies & = \lim_{ h \to 0 } \frac{1}{h}\cdot \frac{f(x + h)g(x) - f(x)g(x) + f(x)g(x) - f(x)g(x + h)}{g(x + h)g(x)} \\
 & = \lim_{ h \to 0 } \frac{1}{g(x + h)g(x)}\cdot \frac{f(x + h)g(x) - f(x)g(x) + f(x)g(x) - f(x)g(x + h)}{h} \\
 & = \lim_{ h \to 0 } \frac{1}{g(x + h)g(x)}\left( \frac{f(x + h)g(x) - f(x)g(x)}{h} + \frac{f(x)g(x) - f(x)g(x + h)}{h} \right) \\
 & = \lim_{ h \to 0 } \frac{1}{g(x + h)g(x)}\left( g(x) \frac{f(x + h) - f(x)}{h} - f(x) \frac{g(x + h) - g(x)}{h} \right) \\
 & = \frac{1}{g(x)\lim_{ h \to 0 } g(x + h)}\left( g(x)\lim_{ h \to 0 } \frac{f(x + h) - f(x)}{h} - f(x)\lim_{ h \to 0 } \frac{g(x + h) - g(x)}{h} \right) \\
 & = \frac{1}{g(x)g(x)}(g(x)f'(x) - f(x)g'(x)) \\
 & = \frac{g(x)f'(x) - f(x)g'(x)}{(g(x))^2}
\end{align}
$$

$\square$