---
tags:
  - Cegep2
  - Calculus
date: 2025-02-07T20:50:05
---

# Substitution

Method of reversing an application of [[chain rule]] to find the [[antiderivative]]

To find the antiderivative of $f(x) = \int g(A)u' \, dx$,

1. Let $u = A$.
2. Find $\frac{\mathrm{d}u}{\mathrm{d}x}$.
3. Substitute $u$ into $A$ and $du$ into $u'dx$ -> $f(x) = \int g(u)du$.
4. Integrate -> $G(u) + c$.
5. Back-substitute $A$ into $u$ -> $G(A) + c$.

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