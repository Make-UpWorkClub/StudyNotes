---
tags:
  - Calculus
  - Cegep/2
date: 2025-02-07T20:50:05
---

# u-Substitution

Method of reversing an application of [[chain rule]] to find the [[antiderivative]]

To find the antiderivative of $f(x) = \int g(A)u' \, dx$,

1. Let $u = A$.
2. Find $\frac{\mathrm{d}u}{\mathrm{d}x}$.
3. Substitute $u$ into $A$ and $du$ into $u'dx \to f(x) = \int g(u)du$.
4. Integrate $\to G(u) + C$.
5. Back-substitute $A$ into $u \to G(A) + C$.

> [!important] The limits of integration must be adjusted when using substitution on a definite integral.

## Examples

> Evaluate the following integrals.

> $\int 2x(x^2 - 1)^4 \, dx$

Let $u = x^2 - 1$, then $du = 2xdx$.
Using substitution, we get $\int u^4du$.
Finding the antiderivative gives $\frac{u^5}{5} + C$.
Using back-substitution, we get $\frac{(x^2 - 1)^5}{5} + C$.

> $\int e^{-x^4}(-4x^3) \, dx$

Let $u = -x^4$, then $du = -4x^3dx$.

$$
\begin{align}
\int e^{-x^4}(-4x^3) \, dx & = \int e^u \, du \\
\implies & = e^u \\
 & = e^{-x^4} + C
\end{align}
$$

> $\int \sqrt{\cot x}\csc^2x \, dx$

Let $u = \cot x$, then $du = -\csc^2x\cdot dx$.

$$
\begin{align}
\int \sqrt{\cot x}\csc^2x \, dx & = -\int \sqrt{u} \, du \\
\implies & = -\frac{2u^{\frac{3}{2}}}{3} + C \\
 & = -\frac{2(\cot x)^{\frac{3}{2}}}{3} + C
\end{align}
$$

> $\int e^{\tan2x}\sec^22x \, dx$

Let $u = \tan2x$, then $du = \sec^22x\cdot2 \, dx$.

$$
\begin{align}
\int e^{\tan2x}\sec^22x \, dx & = \frac{1}{2}\int e^u \, du \\
\implies & = \frac{1}{2}e^u \\
 & = \frac{1}{2}e^{\tan2x} + C
\end{align}
$$

> $\int \frac{2x + 3}{(2x^2 + 6x + 5)^{\frac{3}{2}}} \, dx$

Let $u = 2x^2 + 6x + 5$, then

$$
\begin{align}
du & = (4x + 6) \, dx \\
\frac{du}{2} & = (2x + 3) \, dx
\end{align}
$$

Using substitution,

$$
\begin{align}
\int \frac{2x + 3}{(2x^2 + 6x + 5)^{\frac{3}{2}}} \, dx & = \frac{1}{2}\int \frac{du}{u^{\frac{3}{2}}} \\
\implies & = \frac{1}{5}u^{\frac{5}{2}} \\
 & = \frac{1}{5}(2x^2 + 6x + 5)^{\frac{5}{2}} + C
\end{align}
$$

> $\int \sec^3x \tan x \, dx$

Let $u = \sec x$, then $du = \sec x\cos x \, dx$.

$$
\begin{align}
\int \sec^3x\tan x \, dx & = \int u^2 \, du \\
 & = \frac{u^3}{3} + C \\
 & = \frac{\sec^3x}{3} + C
\end{align}
$$

> $\int \sin^2x\cos^2x \, dx$

$$
\begin{align}
\int \sin^2x\cos^2x \, dx & = \frac{1}{4}\int (1 - \cos(2x))(1 + \cos(2x)) \, dx \\
 & = \frac{1}{4}\int (1 - \cos^2(2x)) \, dx \\
 & = \frac{1}{4}x - \frac{1}{4}\int \cos^2(2x) \, dx \\
 & = \frac{1}{4}x - \frac{1}{4}\left( \frac{1}{2} \right)\int (1 + \cos(4x)) \, dx \\
 & = \frac{1}{4}x - \frac{1}{8}x - \frac{1}{8}\int \cos(4x) \, dx \\
 & = \frac{1}{8}x - \frac{1}{32}\sin(4x) + C
\end{align}
$$

> $\int \tan^2x \, d\sec^2x$

$$
\begin{align}
 \int \tan^5x\sec^7x & = dx\int \tan^4x\sec^6\sec x\tan x \, dx \\
 & = \int (\sec^2x - 1)^2\sec^6x\sec x\tan x \, dx \\
\end{align}
$$

Let $u = \sec x$, then $du = \sec x\tan x dx$.
By substitution,

$$
\begin{align}
 & = \int (u^2 - 1)^2 \, du \\
 & = \int (u^4 - 2u^2 + 1) \, du \\
 & = \int (u^{10} - 2u^8 + u^6) \, du \\
 & = \frac{1}{11}\sec^{11}x - \frac{2}{9}\sec^9x + \frac{1}{7}\sec^7x + C
\end{align}
$$

>  $\int \tan^3x \, dx$

$$
\begin{align}
\int \tan^3x \, dx & = \int (\sec^2x - 1)\tan x \, dx \\
 & = \int \sec^2x\tan x \, dx - \int \tan x \, dx
\end{align}
$$

Let $u = \tan x$, then $du = \sec^2xdx$.
By substitution,

$$
\begin{align}
 & = \int u \, du - \ln |\sec x| + C \\
 & = \frac{1}{2}\tan^2x - \ln |\sec x| + C
\end{align}
$$

> $\int \frac{\tan^5\theta}{\cos^9\theta} \, \mathrm{d} \theta$

$$
\int \frac{\tan^5\theta}{\cos^9\theta} \, \mathrm{d} \theta = \int \frac{\sin^5\theta}{\cos^{14}\theta} \, \mathrm{d} \theta
$$

Let $u = \cos\theta \implies du = -\sin\theta \, d\theta$.

$$
\begin{align}
 & = -\int \frac{(1 - u^2)^2}{u^{14}} \, \mathrm{d} u \\
 & = -\int u^{-14} - 2u^{-12} + u^{-10} \, \mathrm{d} u \\
 & = \frac{u^{-13}}{13} - \frac{2u^{-11}}{11} + \frac{u^{-9}}{9} + C \\
 & = \frac{1}{13\cos^{13}\theta} - \frac{2}{11\cos^{11}\theta} + \frac{1}{9\cos^9\theta} + C
\end{align}
$$

> $\int_{2}^{8} x^{-1}(\log_8x)^2 \, \mathrm{d} x$

Let $u = \log_8x \implies du = \frac{1}{\ln8x}dx$.

$$
\begin{align}
\int_{2}^{8} x^{-1}(\log_8x)^2 \, \mathrm{d} x & = \int_{\log_82}^{\log_88} u^2\ln8 \, \mathrm{d} u \\
 & = \ln8[2u]_{\log_8 2}^{\log_8 8} \\
 & = \ln8(2\log_8 8 - 2\log_8 2) \\
 & = \frac{4\ln8}{3}
\end{align}
$$
