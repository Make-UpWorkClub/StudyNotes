---
tags:
  - mat/calculus
  - cegep/2
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

## Examples

> Evaluate the following infinite integrals:

> $\int_{\ln2}^{\infty} \frac{e^x}{(e^{2x} + 4)^{\frac{3}{2}}} \, \mathrm{d} x$

$$
\int_{\ln2}^{\infty} \frac{e^x}{(e^{2x} + 4)^{\frac{3}{2}}} \, \mathrm{d} x = \lim_{ t \to \infty } \int_{\ln2}^{t} \frac{e^x}{(e^{2x} + 4)^{\frac{3}{2}}} \, \mathrm{d} x
$$

Let $u = e^x$, then $du = e^x \, dx$.

$$
= \lim_{ t \to \infty } \int_{2}^{e^t} \frac{1}{(u^2 + 4)^{\frac{3}{2}}} \, \mathrm{d} u
$$

Let $u = 2\tan \theta$.

$$
\begin{align}
 & = \lim_{ t \to \infty } \int_{\frac{\pi}{4}}^{\arctan \frac{e^t}{2}} \frac{2\sec^2\theta}{(2\sec\theta)^3} \, \mathrm{d} \theta \\
 & = \lim_{ t \to \infty } \frac{1}{4} \int_{\frac{\pi}{4}}^{\arctan \frac{e^t}{2}} \cos \theta \, \mathrm{d} \theta \\
 & = \lim_{ t \to \infty } \left. \frac{1}{4}\sin\theta \right|_{\frac{\pi}{4}}^{\arctan \frac{e^t}{2}} \\
 & = \lim_{ t \to \infty } \frac{1}{4}\left[ \sin\left( \arctan \frac{e^t}{2} \right) - \sin \frac{\pi}{4} \right] \\
 & = \frac{1}{4}\left[ \sin \frac{\pi}{2} - \sin \frac{\pi}{4} \right] \\
 & = \frac{1}{4}\left( 1 - \frac{\sqrt{2}}{2} \right)
\end{align}
$$

> Evaluate the following discontinuous integrals:

> $\int_{-1}^{1} \frac{1}{x^2} \, \mathrm{d}x$

$$
\begin{align}
\int_{-1}^{1} \frac{1}{x^2} \, \mathrm{d}x & = 2\int_{0}^{1} \frac{1}{x^2} \, \mathrm{d}x \\
 & = 2\lim_{ t \to 0^+ }\int_{t}^{1} \frac{1}{x^2} \, \mathrm{d}x \\
 & = 2\left.\lim_{ t \to 0^+ } \left( -\frac{1}{x} \right)\right|_t^1 \\
 & = 2\lim_{ t \to 0^+ } \left( -\frac{1}{1} + \frac{1}{t} \right) \\
 & = \infty
\end{align}
$$

> $\int_{1}^{4} \frac{1}{x - \sqrt{x}} \, \mathrm{d}x$

$$
\int_{1}^{4} \frac{1}{x - \sqrt{x}} \, \mathrm{d}x = \lim_{ t \to 1^+ } \int_{t}^{4} \frac{1}{x - \sqrt{x}} \, \mathrm{d}x
$$

Let $u = \sqrt{x}$, then $du = \frac{1}{2\sqrt{x}} dx$.

$$
\begin{align}
 & = \lim_{ t \to 1^+ } \int_{\sqrt{t}}^{2} \frac{2u}{u^2 - u} \, \mathrm{d}u \\
 & = \lim_{ t \to 1^+ } 2\int_{\sqrt{t}}^{2} \frac{1}{u - 1} \, \mathrm{d}x \\
 & = \lim_{ t \to 1^+ } 2\left. \ln|u - 1| \right|_{\sqrt{t}}^{2} \\
 & = \lim_{ t \to 1^+ } 2(\ln|2 - 1| - \ln |\sqrt{t} - 1|) \\
 & = \infty
\end{align}
$$

> $\int_{2}^{3} \frac{1}{\sqrt{3 - x}} \, \mathrm{d}x$

$$
\int_{2}^{3} \frac{1}{\sqrt{3 - x}} \, \mathrm{d}x = \lim_{ t \to 3^- } \int_{2}^{t} \frac{1}{\sqrt{3 - x}} \, \mathrm{d}x
$$

Let $u = 3 - x$, then $du = -dx$.

$$
\begin{align}
 & = \lim_{ t \to 3^- } -\int_{1}^{3 - t} \frac{1}{\sqrt{u}} \, \mathrm{d}u \\
 & = \lim_{ t \to 3^- } -[2\sqrt{u}]_{1}^{3 - t} \\
 & = \lim_{ t \to 3^- } -(2\sqrt{3 - t} - 2\sqrt{1}) \\
 & = 2
\end{align}
$$

> $\int_{0}^{1} \sqrt{x}\ln x \, \mathrm{d}x$

$$
\int_{0}^{1} \sqrt{x}\ln x \, \mathrm{d}x = \lim_{ t \to 0^+ } \int_{t}^{1} \sqrt{x}\ln x \, \mathrm{d}x
$$

Let $u = \ln x$ and $dv = \sqrt{x}dx$,
then $du = \frac{1}{x}dx$ and $v = \frac{2}{3}x^{\frac{3}{2}}$.

$$
\begin{align}
 & = \lim_{ t \to 0^+ } \left. \ln x\cdot \frac{2}{3}x^{\frac{3}{2}} - \int \frac{2}{3}x^{\frac{1}{2}} \, \mathrm{d}u \right|_{t}^{1} \\
 & = \lim_{ t \to 0^+ } \left. \frac{2}{3}\ln x\cdot x^{\frac{3}{2}} - \frac{4}{9}x^{\frac{3}{2}} \right|_t^1 \\
 & = \lim_{ t \to 0^+ } \left( \frac{2}{3}\ln1\cdot1^{\frac{3}{2}} - \frac{4}{9}1^{\frac{3}{2}} \right) - \left( \frac{2}{3}\ln t\cdot t^{\frac{3}{2}} - \frac{4}{9}t^{\frac{3}{2}} \right) \\
 & = -\frac{4}{9} - \frac{2}{3}\lim_{ t \to 0^+ } \ln t\cdot t^{\frac{3}{2}} \\
 & = -\frac{4}{9} - \frac{2}{3}\lim_{ t \to 0^+ } \frac{\ln t}{t^{-\frac{3}{2}}} \\
 & = -\frac{4}{9} - \frac{2}{3}\lim_{ t \to 0^+ } \frac{\frac{1}{t}}{-\frac{3}{2}t^{-\frac{5}{2}}} \\
 & = -\frac{4}{9} - \frac{2}{3}\lim_{ t \to 0^+ } - \frac{2}{3}t^{\frac{3}{2}} \\
 & = -\frac{4}{9}
\end{align}
$$

> Determine if the improper integral converges or diverges. If it converges, find the value:

> $\int_{0}^{\infty} \frac{6x^3}{(x^4 + 1)^2} \, \mathrm{d}x$

Let $u = x^4 + 1$, then $du = 4x^3dx$.

$$
\begin{align}
\int_{0}^{\infty} \frac{6x^3}{(x^4 + 1)^2} \, \mathrm{d}x & = \lim_{ t \to \infty } \int_{0^4 + 1}^{t^4 + 1} \frac{3}{2u^2} \, \mathrm{d}u \\
 & = \lim_{ t \to \infty } \frac{3}{2}[-u^{-1}]_{0^4 + 1}^{t^4 + 1} \\
 & = \lim_{ t \to \infty } \frac{3}{2}(-(t^4 + 1) ^{-1} + (0^4 + 1)^{-1}) \\
 & = \frac{3}{2}
\end{align}
$$

> $\int_{-\infty}^{2} \sqrt{6 - y} \, \mathrm{d}y$

Let $u = 6 - y$, then $du = -dy$.

$$
\begin{align}
\int_{-\infty}^{2} \sqrt{6 - y} \, \mathrm{d}y & = \lim_{ t \to \infty } \int_{6 + t}^{4} \sqrt{u}\cdot - \, \mathrm{d}u \\
 & = \lim_{ t \to \infty } \left[ -\frac{2}{3}u^{\frac{3}{2}} \right]_{6 + t}^4 \\
 & = \lim_{ t \to \infty } \left( -\frac{2}{3}4^{\frac{3}{2}} + \frac{2}{3}(6 + t)^{\frac{3}{2}} \right) \\
 & = \infty
\end{align}
$$

> $\int_{-\infty}^{\infty} x^3 \, \mathrm{d}x$

$$
\begin{align}
\int_{-\infty}^{\infty} x^3 \, \mathrm{d}x & = \int_{-\infty}^{0} x^3 \, \mathrm{d}x + \int_{0}^{\infty} x^3 \, \mathrm{d}x \\
 & = \lim_{ t \to -\infty } \int_{t}^{0} x^3 \, \mathrm{d}x + \lim_{ s \to \infty } \int_{0}^{s} x^3 \, \mathrm{d}x \\
 & = \left. \lim_{ t \to -\infty } \frac{1}{4}x^4 \right|_{t}^{0} + \left. \lim_{ s \to \infty } \frac{1}{4}x^4 \right|_{0}^{s} \\
 & = \lim_{ t \to \infty } \left( 0 - \frac{1}{4}t^4 \right) + \lim_{ s \to \infty } \left( \frac{1}{4}s^4 - 0 \right) \\
 & = \text{D.N.E.}
\end{align}
$$
