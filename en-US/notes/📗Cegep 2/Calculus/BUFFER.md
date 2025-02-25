---
tags:
  - Cegep2
  - Calculus
date: 2025-01-22T19:06:56
---

# Buffer

- No cellphones
- Weekly assignment on Crowdmark

# 2025-01-29

A function is **even** if $f(-x) = f(x)$ (symmetry across y-axis).
A function is **odd** if $f(-x) = -f(x)$ (symmetry about the origin).

$\int_{0}^{\frac{1}{2}} \frac{6\arcsin u}{\sqrt{1 - u^2}} \, du$

# Trigonometric Substitution

Method of reversing the following cases to find the [[antiderivative]]:

- $\sqrt{a^2 - x^2}$
- $\sqrt{a^2 + x^2}$
- $\sqrt{x^2 - a^2}$

## Proof

### $\sqrt{a^2 - x^2}$ for $a> 0$

Let $x = a\sin \theta$, then $\theta = \arcsin \frac{x}{a}$.

$$
\begin{align}
\sqrt{a^2 - x^2} & = \sqrt{a^2 - (a\sin \theta)^2} \\
 & = \sqrt{a^2 - a^2\sin^2\theta} \\
 & = \sqrt{a^2(1 - \sin^2\theta)} \\
 & = \sqrt{a^2\cos^2\theta}
\end{align}
$$

Because $\cos\theta\ge 0$ for $\theta \in\left[ -\frac{\pi}{2}, \frac{\pi}{2} \right]$,

$$
 = a\cos\theta
$$

### $\sqrt{a^2 + x^2}$ for $a> 0$

Let $x = a\tan\theta$, then $\theta = \arctan \frac{x}{a}$.

$$
\begin{align}
\sqrt{a^2 + x^2} & = \sqrt{a^2 + (a\tan\theta)^2} \\
 & = \sqrt{a^2 + a^2\tan^2\theta} \\
 & = \sqrt{a^2(1 + \tan^2\theta)} \\
 & = \sqrt{a^2\sec^2\theta} \\
 & = a\sec\theta
\end{align}
$$

### $\sqrt{x^2 - a^2}$ for $a> 0$

Let $x = a\sec\theta$, then $\theta = \mathrm{arcsec} \frac{x}{a}$.

$$
\begin{align}
\sqrt{x^2 - a^2} & = \sqrt{(a\sec\theta)^2 - a^2} \\
 & = \sqrt{a^2\sec^2\theta - a^2} \\
 & = \sqrt{a^2(\sec^2\theta - 1)} \\
 & = \sqrt{a^2\tan^2\theta} \\
 & = a\tan\theta
\end{align}
$$

## Examples

> $\int \frac{1}{(x^2 + 9)^{\frac{3}{2}}} \, dx$

Note that $x = \sqrt{x^2 + 9} = 3\sec\theta$, then $dx = 3\sec^2\theta d\theta$.
By trig substitution,

$$
\begin{align}
\int \frac{1}{(x^2 + 9)^{\frac{3}{2}}} \, dx & = \int \frac{1}{\sqrt{x^2 + 9}^3} \, dx \\
 & = \int \frac{3\sec^2\theta}{(3\sec\theta)^3} \, d\theta \\
 & = \frac{1}{9}\int \frac{1}{\sec\theta} \, d\theta \\
 & = \frac{1}{9}\int \cos\theta \, d\theta \\
 & = \frac{1}{9}\sin \theta + c \\
 & = \frac{1}{9}\left( \frac{x}{\sqrt{x^2 + 9}} \right) + c
\end{align}
$$