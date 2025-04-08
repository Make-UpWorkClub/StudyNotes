---
tags:
  - Cegep2
  - Calculus
date: 2025-04-03T11:17:27
---

# Improper Integral

Extension of [[definite integral]] to esoteric cases where FTC2 doesn't apply

## Forms

### Infinite integral

If $f$ is continuous on $[a, \infty)$, then

$$
\int_{a}^{\infty} f(x) \, \mathrm{d}x = \lim_{ t \to \infty } \int_{a}^{t} f(x) \, \mathrm{d}x
$$

### Discontinuous integral

If $f$ is discontinuous at $a$, then

$$
\int_{a}^{b} f(x) \, \mathrm{d}x = \lim_{ t \to a^+ } \int_{t}^{b} f(x) \, \mathrm{d}x
$$

> [!info] If the discontinuity occurs inside the interval, split the integral.

> [!example]- $\int_{-1}^{1} \frac{1}{x^2} \, \mathrm{d}x$
> $$
> \begin{align}
> \int_{-1}^{1} \frac{1}{x^2} \, \mathrm{d}x & = 2\int_{0}^{1} \frac{1}{x^2} \, \mathrm{d}x \\
>  & = 2\lim_{ t \to 0^+ }\int_{t}^{1} \frac{1}{x^2} \, \mathrm{d}x \\
>  & = 2\left.\lim_{ t \to 0^+ } \left( -\frac{1}{x} \right)\right|_t^1 \\
>  & = 2\lim_{ t \to 0^+ } \left( -\frac{1}{1} + \frac{1}{t} \right) \\
>  & = \infty
> \end{align}
> $$

> [!example]- $\int_{1}^{4} \frac{1}{x - \sqrt{x}} \, \mathrm{d}x$
> $$
> \int_{1}^{4} \frac{1}{x - \sqrt{x}} \, \mathrm{d}x = \lim_{ t \to 1^+ } \int_{t}^{4} \frac{1}{x - \sqrt{x}} \, \mathrm{d}x
> $$
> 
> Let $u = \sqrt{x}$, then $du = \frac{1}{2\sqrt{x}} dx$.
> 
> $$
> \begin{align}
>  & = \lim_{ t \to 1^+ } \int_{\sqrt{t}}^{2} \frac{2u}{u^2 - u} \, \mathrm{d}u \\
>  & = \lim_{ t \to 1^+ } 2\int_{\sqrt{t}}^{2} \frac{1}{u - 1} \, \mathrm{d}x \\
>  & = \lim_{ t \to 1^+ } 2\left. \ln|u - 1| \right|_{\sqrt{t}}^{2} \\
>  & = \lim_{ t \to 1^+ } 2(\ln|2 - 1| - \ln |\sqrt{t} - 1|) \\
>  & = \infty
> \end{align}
> $$

> [!example]- $\int_{2}^{3} \frac{1}{\sqrt{3 - x}} \, \mathrm{d}x$
> $$
> \int_{2}^{3} \frac{1}{\sqrt{3 - x}} \, \mathrm{d}x = \lim_{ t \to 3^- } \int_{2}^{t} \frac{1}{\sqrt{3 - x}} \, \mathrm{d}x
> $$
> 
> Let $u = 3 - x$, then $du = -dx$.
> 
> $$
> \begin{align}
>  & = \lim_{ t \to 3^- } -\int_{1}^{3 - t} \frac{1}{\sqrt{u}} \, \mathrm{d}u \\
>  & = \lim_{ t \to 3^- } -[2\sqrt{u}]_{1}^{3 - t} \\
>  & = \lim_{ t \to 3^- } -(2\sqrt{3 - t} - 2\sqrt{1}) \\
>  & = 2
> \end{align}
> $$

> [!example]- $\int_{0}^{1} \sqrt{x}\ln x \, \mathrm{d}x$
> $$
> \int_{0}^{1} \sqrt{x}\ln x \, \mathrm{d}x = \lim_{ t \to 0^+ } \int_{t}^{1} \sqrt{x}\ln x \, \mathrm{d}x
> $$
> 
> Let $u = \ln x$ and $dv = \sqrt{x}dx$,
> then $du = \frac{1}{x}dx$ and $v = \frac{2}{3}x^{\frac{3}{2}}$.
> 
> $$
> \begin{align}
>  & = \lim_{ t \to 0^+ } \left. \ln x\cdot \frac{2}{3}x^{\frac{3}{2}} - \int \frac{2}{3}x^{\frac{1}{2}} \, \mathrm{d}u \right|_{t}^{1} \\
>  & = \lim_{ t \to 0^+ } \left. \frac{2}{3}\ln x\cdot x^{\frac{3}{2}} - \frac{4}{9}x^{\frac{3}{2}} \right|_t^1 \\
>  & = \lim_{ t \to 0^+ } \left( \frac{2}{3}\ln1\cdot1^{\frac{3}{2}} - \frac{4}{9}1^{\frac{3}{2}} \right) - \left( \frac{2}{3}\ln t\cdot t^{\frac{3}{2}} - \frac{4}{9}t^{\frac{3}{2}} \right) \\
>  & = -\frac{4}{9} - \frac{2}{3}\lim_{ t \to 0^+ } \ln t\cdot t^{\frac{3}{2}} \\
>  & = -\frac{4}{9} - \frac{2}{3}\lim_{ t \to 0^+ } \frac{\ln t}{t^{-\frac{3}{2}}} \\
>  & = -\frac{4}{9} - \frac{2}{3}\lim_{ t \to 0^+ } \frac{\frac{1}{t}}{-\frac{3}{2}t^{-\frac{5}{2}}} \\
>  & = -\frac{4}{9} - \frac{2}{3}\lim_{ t \to 0^+ } - \frac{2}{3}t^{\frac{3}{2}} \\
>  & = -\frac{4}{9}
> \end{align}
> $$