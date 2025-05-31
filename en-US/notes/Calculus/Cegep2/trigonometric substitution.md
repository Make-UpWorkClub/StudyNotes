---
tags:
  - Calculus
  - Cegep/2
date: 2025-02-26T15:02:06
---

# Trigonometric Substitution

Method of reversing applications of Pythagorean Theorem to find the [[antiderivative]]:

- $a^2 - x^2$:
	- Let $x = a\sin \theta$, then $a^2\cos^2\theta$
	- Let $x = a\cos \theta$, then $a^2\sin^2\theta$
- $a^2 + x^2$:
	- Let $x = a\tan\theta$, then $a^2\sec^2\theta$
	- Let $x = a\cot\theta$, then $a^2\csc^2\theta$
- $x^2 - a^2$:
	- Let $x = a\sec\theta$, then $a^2\tan^2\theta$
	- Let $x = a\csc\theta$, then $a^2\cot^2\theta$

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

> Evaluate the following integrals.

> $\int \frac{1}{(x^2 + 9)^{\frac{3}{2}}} \, dx$

Let $x = 3\tan\theta$, then $dx = 3\sec^2\theta d\theta$.
By trig substitution,

$$
\begin{align}
\int \frac{1}{(x^2 + 9)^{\frac{3}{2}}} \, dx & = \int \frac{1}{\sqrt{x^2 + 9}^3} \, dx \\
 & = \int \frac{3\sec^2\theta}{(3\sec\theta)^3} \, d\theta \\
 & = \frac{1}{9}\int \frac{1}{\sec\theta} \, d\theta \\
 & = \frac{1}{9}\int \cos\theta \, d\theta \\
 & = \frac{1}{9}\sin \theta + C \\
 & = \frac{1}{9}\left( \frac{x}{\sqrt{x^2 + 9}} \right) + C
\end{align}
$$

> $\int \frac{\sqrt{x^2 - 2}}{x^3} \, dx$

Let $x = \sqrt{2}\sec\theta$, then $dx = \sqrt{2}\sec\theta \tan\theta d\theta$.
By trig substitution,

$$
\begin{align}
\int \frac{\sqrt{x^2 - 2}}{x^3} \, dx & = \int \frac{\sqrt{2}\tan\theta}{(\sqrt{2}\sec\theta)^3}\sqrt{2}\sec\theta \tan\theta \, d\theta \\
 & = \frac{1}{\sqrt{2}}\int \frac{\tan^2\theta}{\sec^2\theta} \, d\theta \\
 & = \frac{1}{\sqrt{2}}\int \sin^2\theta \, d\theta \\
 & = \frac{1}{\sqrt{2}}\cdot \frac{1}{2}\int (1 - \cos2\theta) \, d\theta \\
 & = \frac{1}{2\sqrt{2}}\left( \theta - \frac{\sin 2\theta}{2} \right) + C \\
 & = \frac{1}{2\sqrt{2}}\sqrt{\mathrm{arcsec} \frac{x}{\sqrt{2}} - \sin \theta \cos\theta} + C \\
 & = \frac{1}{2\sqrt{2}}\left( \mathrm{arcsec} \frac{x}{\sqrt{2}} - \left( \frac{\sqrt{x^2 - 2}}{x} \right)\left( \frac{\sqrt{2}}{x} \right) \right) + C
\end{align}
$$

> $\int \sqrt{16 - x^2} \, dx$

Let $x = 4\sin \theta$, then $dx = 4\cos\theta d\theta$.
By trig substitution,

$$
\begin{align}
\int \sqrt{16 - x^2} \, dx & = \int 4\cos\theta \cdot4\cos\theta \, d\theta \\
 & = 8\int (1 + \cos2\theta) \, d\theta \\
 & = 8\left( \theta + \frac{\sin 2\theta}{2} \right) + C \\
 & = 8\left( \arcsin \frac{x}{4} + \left( \frac{x}{4} \right)\left( \frac{\sqrt{16 - x^2}}{4} \right) \right) + C
\end{align}
$$

> $\int \frac{1}{x^2\sqrt{5 + x^2}} \, dx$

Let $x = \sqrt{5}\tan \theta$, then $dx = \sqrt{5}\sec^2\theta d\theta$.
By trig substitution,

$$
\begin{align}
\int \frac{1}{x^2\sqrt{5 + x^2}} \, dx & = \int \frac{1}{5\tan^2\theta \sqrt{5}\sec\theta} \, d\theta \\
 & = \frac{1}{5}\int \frac{\sec\theta}{\tan^2\theta} \, d\theta \\
 & = \frac{1}{5}\int \frac{\cos\theta}{\sin^2\theta} \, d\theta
\end{align}
$$

Let $u = \sin \theta$, then $du = \cos\theta d\theta$.
By substitution,

$$
\begin{align}
 & = \frac{1}{5}\int \frac{1}{u^2} \, du \\
 & = -\frac{1}{5}\left( \frac{1}{\sin \theta} \right) + C \\
 & = -\frac{1}{5}\left( \frac{\sqrt{x^2 + 5}}{x} \right) + C
\end{align}
$$

> $\int \frac{x}{\sqrt{x^2 - 7}} \, \mathrm{d}x$

Let $x = \sqrt{7}\sec\theta$, then $dx = \sqrt{7}\tan\theta \sec\theta d\theta$.
By trig substitution,

$$
\begin{align}
\int \frac{x}{\sqrt{x^2 - 7}} \, \mathrm{d}x & = \int \frac{\sqrt{7}\sec\theta}{\sqrt{7}\tan\theta}\sqrt{7}\tan\theta \sec\theta \, \mathrm{d}\theta \\
 & = \sqrt{7}\int \sec^2\theta \, \mathrm{d}\theta \\
 & = \sqrt{7}\tan\theta + C \\
 & = \sqrt{x^2 - 7} + C
\end{align}
$$

> $\int \frac{\ln(\arcsin t)}{\sqrt{1 - t^2}} \, \mathrm{d} t$

Let $t = \sin\theta \implies dt = \cos\theta \, d\theta$.

$$
\begin{align}
\int \frac{\ln(\arcsin t)}{\sqrt{1 - t^2}} \, \mathrm{d} t & = \int \frac{\ln(\arcsin(\sin\theta))}{\cos\theta}\cos\theta \, \mathrm{d} \theta \\
 & = \int \ln\theta \, \mathrm{d} \theta \\
 & = \theta ln\theta - \theta + C \\
 & = \arcsin t\cdot\ln(\arcsin t) - \arcsin t + C
\end{align}
$$
