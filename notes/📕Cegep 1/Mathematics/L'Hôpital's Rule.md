---
tags:
  - Cegep1
  - Mathematics
date: 2024-10-30T15:45:14
---

%% [[Limit]] [[Derivative]] %%

# L'Hôpital's Rule

Suppose $f$ and $g$ are differentiable functions and that $\lim_{ x \to a } \frac{f(x)}{g(x)}$ evaluates to $\frac{0}{0}$ or $\frac{\infty}{\infty}$, then

$$
\lim_{ x \to a } \frac{f(x)}{g(x)} = \lim_{ x \to a } \frac{f'(x)}{g'(x)}
$$

## Evaluation

### $\frac{0}{0}$ or $\frac{\infty}{\infty}$

Apply L'Hôpital's Rule, several times if needed.
If the derivative loops, L'Hôpital's Rule cannot be used.

> [!example]- Evaluate the limit $\lim_{ x \to 0^+ } \frac{\ln x}{1 + (\ln x)^2}$.
> $$
> \begin{align}
>  & \lim_{ x \to 0^+ } \frac{\ln x}{1 + (\ln x)^2},\ x = 0, -\frac{\infty}{\infty} \\
> = & \lim_{ x \to 0^+ } \frac{1}{2\ln x} \\
> = &\ 0
> \end{align}
> $$

### $\infty - \infty$

> [!example]- Evaluate the limit $\lim_{ x \to \infty }(\ln x - \sqrt{x - 1})$.
> 
> $$
> \begin{align}
>  & \lim_{ x \to \infty }(\ln x - \sqrt{x - 1}),\ x \to \infty,\ \infty - \infty \\
> = & \lim_{ x \to \infty } \left( \sqrt{x - 1}\left( \frac{\ln x}{\sqrt{x - 1}} - 1 \right) \right)
> \end{align}
> $$
> 
> On the side:
> 
> $$
> \begin{align}
> \lim_{ x \to \infty } \frac{\ln x}{\sqrt{x - 1}} & = \lim_{ x \to \infty } \frac{\frac{1}{x}}{\frac{1}{2\sqrt{x - 1}}} \\
>  & = \lim_{ x \to \infty } \frac{1}{x}\cdot2\sqrt{x - 1} \\
>  & = \lim_{ x \to \infty } \frac{2\sqrt{x - 1}}{x} \\
>  & = \lim_{ x \to \infty } \frac{2\sqrt{x}\sqrt{1 - \frac{1}{x}}}{x} \\
>  & = \lim_{ x \to \infty } \frac{2\sqrt{1 - \frac{1}{x}}}{\sqrt{x}} \\
>  & = 0
> \end{align}
> $$
> 
> Back to the limit,
> 
> $$
> \begin{align}
> \lim_{ x \to \infty } \left( \sqrt{x - 1}\left( \frac{\ln x}{\sqrt{x - 1}} - 1 \right) \right) & = \lim_{ x \to \infty } \sqrt{x - 1}\left( \lim_{ x \to \infty } \frac{\ln x}{\sqrt{x - 1}} - \lim_{ x \to \infty } 1 \right) \\
>  & = \infty(0 - 1) \\
>  & = -\infty
> \end{align}
> $$