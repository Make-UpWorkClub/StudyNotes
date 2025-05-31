---
tags:
  - Calculus
  - Cegep/1
date: 2024-10-07T19:36:55
---

%% [[derivative]] %%

# Power Rule

Let $f(x) = x^n\text{, }n \in \mathbb{R}$, then

$$
\frac{d}{dx}x^n = nx^{n - 1}
$$

## General Power Rule

Let $f$ be a differentiable function and $h(x) = (f(x))^n$ for $n\in\mathbb{R}$, then

$$
h'(x) = \frac{\mathrm{d}}{\mathrm{d}x} (f(x))^n = n(f(x))^{n - 1}\cdot f'(x)
$$

## Proof

> [!info] For now, this proof is only for $n \in \mathbb{N}$.

Note the fact that the following equality is true:

$$
x^n - a^n = (x - a)\cdot\sum_{i = 1}^n x^{n - i}a^{i - 1}
$$

Let $f(x) = x^n$, we have to show that $f'(a) = na^{n - 1}$ for any $a$:

$$
\begin{align}
f'(a) & = \lim_{ h \to 0 } \frac{f(a + h) - f(a)}{h} \\
 & = \lim_{ x \to a } \frac{f(x) - f(a)}{x - a} \\
 & = \lim_{ x \to a } \frac{x^n - a^n}{x - a}
\end{align}
$$

Using the fact stated above, we have

$$
\begin{align}
 & = \lim_{ x \to a } \frac{(x - a)\cdot \sum_{i = 1}^n x^{n - i}a^{i - 1}}{x - a} \\
 & = \lim_{ x \to a } \sum_{i = 1}^n x^{n - i}a^{i - 1} \\
 & = \sum_{i = 1}^n a^{n - i}a^{i - 1} \\
 & = \sum_{i = 1}^n a^{n - 1} \\
 & = na^{n - 1}
\end{align}
$$

$\square$
