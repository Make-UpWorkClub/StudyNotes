---
tags:
  - Calculus
  - cegep/2
date: 2025-02-07T06:08:15
---

# Antiderivative

The function $F(x)$ is an antiderivative of $f(x)$ if $F'= f$.

> [!important]+
> Antiderivatives are not unique. $F(x) + c$ is the **general antiderivative** of $f(x)$.
> If $g(x)$ and $h(x)$ are both antiderivatives of $f(x)$, then $g(x) = h(x) + c$.

## Evaluation

Tools:

- Rationalisation
- Factorisation
- Long division
- Trigonometric identities
	- Generally used before substitution
	- ==$\cos^2x = \frac{1}{2}(1 + \cos 2x)$==
	- ==$\sin^2x = \frac{1}{2}(1 - \cos 2x)$==
	- $\sec^2x = \tan^2x + 1$
	- $\tan^2x = \sec^2x - 1$
	- $\sin(2x) = 2\sin x\cos x$
- Indefinite integrals
- u-substitution
- Trigonometric substitution
- Integration by parts

For trigonometric integrals:

- $\int \sin^nx\cos^mx \, \mathrm{d} x$
	- Easy: at least one is odd
	- Hard: both are even => $\sin^2x = \frac{1}{2}(1 - \cos(2x))$
- $\int \sec^nx\tan^mx \, \mathrm{d} x$
	- Easy: odd $\tan x$, even $\sec x$
	- Hard:
		- $\int \tan^2x \, \mathrm{d} x \implies \int (\sec^2x - 1) \, \mathrm{d} x$
		- $\int \tan^3x \, \mathrm{d} x \implies \int (\sec^2x - 1)\tan x \, \mathrm{d} x$
		- $\int \sec^3x\tan^2x \, \mathrm{d} x \implies \int \sec^3x(\sec^2x - 1) \, \mathrm{d} x$
		- $\int \sec^3x \, \mathrm{d} x$ => IBP boomerang
