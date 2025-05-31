---
tags:
  - Calculus
  - Cegep/2
date: 2025-02-06T13:12:00
---

# Indefinite Integral

General form of all [[antiderivative|antiderivatives]] of a function

## Properties

- $\int 0 \, dx = C$
- $\int kf(x) \, dx = k\int f(x) \, dx$
- $\int (f(x) \pm g(x)) \, dx = \int f(x) \, dx \pm \int g(x) \, dx$
- $\int x^n \, dx = \frac{x^{n + 1}}{n + 1} + C$ for $n \ne -1$
- $\int x^{-1} \, dx = \ln|x| + c$ for $x \ne 0$
- $\int a^x \, dx = \frac{a^x}{\ln a} + C$
- $\int \cos x \, \mathrm{d}x = \sin x$
- $\int \sin x \, \mathrm{d}x = -\cos x$
- $\int \sec^2x \, \mathrm{d}x = \tan x$
- $\int \tan x\sec x \, \mathrm{d}x = \sec x$
- $\int \cot x\csc x \, \mathrm{d}x = -\csc x$
- $\int \csc^2x \, \mathrm{d}x = -\cot x$
- $\int \frac{1}{\sqrt{1 - x^2}} \, \mathrm{d}x = \arcsin x = -\arccos x$
- $\int \frac{1}{|x|\sqrt{x^2 - 1}} \, \mathrm{d}x = \mathrm{arcsec}x = -\mathrm{arccsc}x$
- $\int \frac{1}{1 + x^2} \, \mathrm{d}x = \arctan x = -\mathrm{arccot}x$
- ==$\int \ln x \, dx = x\ln x - x + C$==
- ==$\int \tan x \, dx = \ln \sec |x| + C$==
- ==$\int \sec x \, dx = \ln |\sec x + \tan x| + C$==

## Examples

> Evaluate the following indefinite integrals.

$$
\int (\cos x + 5\sin x - 3^x) \, dx = \sin x - 5\cos x - \frac{3^x}{\ln3} + C
$$

$$
\int \frac{x^2 - 3\sqrt{x} + 2x^{\frac{3}{2}}}{2x^{\frac{3}{2}}} \, dx = \frac{1}{2}\int \left( x^{\frac{1}{2}} - 3x^{-1} + 2 \right) \, dx = \frac{1}{2}\left( \frac{x^{\frac{3}{2}}}{\frac{3}{2}} - 3ln|x| + 2x \right) + C
$$

$$
\int 2x\cos(x^2 + 3) \, dx = \sin(x^2 + 3) + C
$$

> $\int \sin^4x \, \mathrm{d} x$

$$
\begin{align}
\int \sin^4x \, \mathrm{d} x & = \int \left( \frac{1}{2}(1 - \cos(2x)) \right)^2 \, \mathrm{d} x \\
 & = \frac{1}{4}\int (1 - 2\cos(2x) + \cos^2(2x)) \, \mathrm{d} x \\
 & = \frac{1}{4}\int \left( 1 - 2\cos(2x) + \frac{1}{2}(1 + \cos(2x)) \right) \, \mathrm{d} x \\
 & = \frac{1}{4}\int \left( \frac{3}{2} - \frac{3}{4}\cos(2x) \right) \, \mathrm{d} x \\
 & = \frac{1}{4}\left( \frac{3}{2}x - \frac{3}{8}\sin(2x) \right) + C \\
 & = \frac{3}{8}x - \frac{3}{32}\sin(2x) + C
\end{align}
$$
