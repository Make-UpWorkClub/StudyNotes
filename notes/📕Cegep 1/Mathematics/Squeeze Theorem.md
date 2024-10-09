---
tags:
  - Cegep1
  - Mathematics
date: 2024-09-17T11:02:42
---

%% [[Limit]] %%

# Squeeze Theorem

If $f(x)\le g(x)\le h(x)$ when $x$ is near $a$ (except possibly at $a$),
and

$$
\lim_{ x \to a } f(x) = \lim_{ x \to a } h(x) = L
$$

, then

$$
\lim_{ x \to a } g(x) = L
$$

> [!example]+ $\lim_{ x \to \infty } \frac{\sin x}{x}$
> Because $-\frac{1}{x} \le \frac{\sin x}{x} \le \frac{1}{x}$
> and $\lim_{ x \to \infty } -\frac{1}{x} = \lim_{ x \to \infty } \frac{1}{x} = 0$,
> $\lim_{ x \to \infty } \frac{\sin x}{x} = 0$.