---
tags:
  - Cegep2
  - Calculus
date: 2025-02-07T20:50:05
---

# u-Substitution

Method of reversing an application of [[chain rule]] to find the [[antiderivative]]

To find the antiderivative of $f(x) = \int g(A)u' \, dx$,

1. Let $u = A$.
2. Find $\frac{\mathrm{d}u}{\mathrm{d}x}$.
3. Substitute $u$ into $A$ and $du$ into $u'dx \to f(x) = \int g(u)du$.
4. Integrate $\to G(u) + c$.
5. Back-substitute $A$ into $u \to G(A) + c$.

> [!important] The limits of integration must be adjusted when using substitution on a definite integral.

## Examples

> Evaluate the following integrals.

> $\int 2x(x^2 - 1)^4 \, dx$

Let $u = x^2 - 1$, then $du = 2xdx$.
Using substitution, we get $\int u^4du$.
Finding the antiderivative gives $\frac{u^5}{5} + c$.
Using back-substitution, we get $\frac{(x^2 - 1)^5}{5} + c$.

> $\int e^{-x^4}(-4x^3) \, dx$

Let $u = -x^4$, then $du = -4x^3dx$.

$$
\begin{align}
\int e^{-x^4}(-4x^3) \, dx & = \int e^u \, du \\
\implies & = e^u \\
 & = e^{-x^4}
\end{align}
$$

> $\int \sqrt{\cot x}\csc^2x \, dx$

Let $u = \cot x$, then $du = -\csc^2x\cdot dx$.

$$
\begin{align}
\int \sqrt{\cot x}\csc^2x \, dx & = -\int \sqrt{u} \, du \\
\implies & = -\frac{2u^{\frac{3}{2}}}{3} + c \\
 & = -\frac{2(\cot x)^{\frac{3}{2}}}{3} + c
\end{align}
$$

> $\int e^{\tan2x}\sec^22x \, dx$

Let $u = \tan2x$, then $du = \sec^22x\cdot2 \, dx$.

$$
\begin{align}
\int e^{\tan2x}\sec^22x \, dx & = \frac{1}{2}\int e^u \, du \\
\implies & = \frac{1}{2}e^u \\
 & = \frac{1}{2}e^{\tan2x}
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
 & = \frac{1}{5}(2x^2 + 6x + 5)^{\frac{5}{2}}
\end{align}
$$

> $\int \sec^3x \tan x \, dx$

Let $u = \sec x$, then $du = \sec x\cos x \, dx$.

$$
\begin{align}
\int \sec^3x\tan x \, dx & = \int u^2 \, du \\
 & = \frac{u^3}{3} + c \\
 & = \frac{\sec^3x}{3} + c
\end{align}
$$

> $\int \sin^2x\cos^2x \, dx$

$$
\begin{align}
\int \sin^2x\cos^2x \, dx & = \frac{1}{4}\int (1 - \cos(2x))(1 + \cos(2x)) \, dx \\
 & = \frac{1}{4}\int (1 - \cos^2x) \, dx \\
 & = \frac{1}{4}x - \frac{1}{4}\int \cos^2(2x) \, dx \\
 & = \frac{1}{4}x - \frac{1}{4}\left( \frac{1}{2} \right)\int (1 + \cos(4x)) \, dx \\
 & = \frac{1}{4}x - \frac{1}{8}x - \frac{1}{8}\int \cos(4x) \, dx \\
 & =
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
 & = \frac{1}{11}\sec^{11}x - \frac{2}{9}\sec^9x + \frac{1}{7}\sec^7x + c
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
 & = \int u \, du - \ln |\sec x| + c \\
 & = \frac{1}{2}\tan^2x - \ln |\sec x| + c
\end{align}
$$