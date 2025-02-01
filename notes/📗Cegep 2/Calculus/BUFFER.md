---
tags:
  - Cegep2
  - Calculus
date: 2025-01-22T19:06:56
---

# Buffer

- No cellphones
- Weekly assignment on Crowdmark

## 2025-01-29

A function is **even** if $f(-x) = f(x)$ (symmetry across y-axis).
A function is **odd** if $f(-x) = -f(x)$ (symmetry about the origin).

## 2025-01-31

# Fundamental Theorem of Calculus

`Abbr.` FTC

## I

If $f(t)$ is continuous on $[a, b]$, let $A(x) = \int_{a}^{x} f(t) \, dt$, then:

1. $A$ is continuous on $[a, b]$
2. $A$ is differentiable on $(a, b)$
3. ==$A' = f$==

$$
\frac{\mathrm{d}}{\mathrm{d}x}\int_{h(x)}^{g(x)} f(t) \, dt = f(g(x))g'(x) - f(h(x))h'(x)
$$

### Proof

We know that $f$ is continuous on $[a, b]$.
We want to show that $A'(x) = f(x)$.
Let $A(x) = \int_{a}^{x} f(t) \, dt$, then

$$
\begin{align}
A(x + h) - A(x) & = \int_{a}^{x + h} f(t) \, dt - \int_{a}^{x} f(t) \, dt \\
 & = \int_{x}^{x + h} f(t) \, dt \\
\therefore \frac{A(x + h) - A(x)}{h} & = \frac{1}{h}\int_{x}^{x + h} f(t) \, dt \\
\therefore A'(x) & = \lim_{ h \to 0 } \frac{A(x + h) - A(x)}{h} = \lim_{ h \to 0 } \frac{1}{h}\int_{x}^{x + h} f(t) \, dt = f(x)
\end{align}
$$

Since $f$ is continuous on $[x, x + h]$,
By E.V.T., there must exist an absolute minimum $m_h$ and an absolute maximum $M_h$ for $f$ on $[x, x + h]$.
Therefore,

$$
\begin{align}
m_h & \le f(t) & \le M_h \\
(m_h)h & \le \int_{x}^{x + h} f(t) \, dt & \le (M_h)h \\
m_h & \le \frac{1}{h}\int_{x}^{x + h} f(t) \, dt & \le M_h \\
\lim_{ h \to 0 } m_h & \le \lim_{ h \to 0 } \frac{1}{h}\int_{x}^{x + h} f(t) \, dt & \le \lim_{ h \to 0 } M_h
\end{align}
$$

Since $\lim_{ h \to 0 }m_h = \lim_{ h \to 0 }M_h = f(x)$,
By the Squeeze Theorem,

$$
\lim_{ h \to 0 } \frac{1}{h}\int_{x}^{x + h} f(t) \, dt = f(x)
$$

$\square$

### Examples

$\frac{\mathrm{d}}{\mathrm{d}x}\int_{5}^{x} (1 - \sqrt{\sin t}) \, dt$

$$
\begin{align}
\frac{\mathrm{d}}{\mathrm{d}x}\int_{5}^{x} (1 - \sqrt{\sin t}) \, dt & =
\end{align}
$$