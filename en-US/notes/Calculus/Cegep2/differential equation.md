---
tags:
  - Calculus
  - Cegep/2
date: 2025-04-09T14:24:23
---

# Differential Equation

Equation involving a function and some of its [[derivative|derivatives]]

> [!abstract] Particular solution
> Function $f$ that satisfies the DE when $f$ and its derivatives are substituted into the DE

> [!abstract] General solution
> General antiderivative of the particular solution

> [!abstract]+ Separable differential equation
> DE in which it is possible to factor the derivative $\frac{\mathrm{d}y}{\mathrm{d}x}$ as a function of $x(h(x))$ times a function of $y(g(y))$
>
> $$
> \frac{\mathrm{d}y}{\mathrm{d}x} = h(x)g(x)
> $$

> [!example]+
> - $y'' + 3y = 5y'$
> - $x''(t) = -\omega^2x(t)$ (simple harmonic motion)
> - $\frac{\mathrm{d}P}{\mathrm{d}t} = kP(t)$ (exponential growth)

## Examples

> Show that the function $y = 5e^{2x} + 3e^x$ is a solution to the DE $y'' - 3y' = -2y$.

$$
\begin{align}
y & = 5e^{2x} + 3e^x \\
y' & = 10e^{2x} + 3e^x \\
y'' & = 20e^{2x} + 3e^x \\
 \\
y'' - 3y' & = 20e^{2x} + 3e^x - 3(10e^{2x} + 3e^x) \\
 & = 20e^{2x} + 3e^x - 30e^{2x} - 9e^x \\
 & = -10e^{2x} - 6e^x \\
 & = -2(5e^{2x} + 3e^x) \\
 & = -2y
\end{align}
$$

Therefore, $y$ is a solution to the DE.

> Consider $\frac{\mathrm{d}y}{\mathrm{d}x} =(2x - 1)(1)$. Find the function $y$ that passes through the point $P(1, 0)$.

$$
\begin{align}
\frac{\mathrm{d}y}{\mathrm{d}x} & = (2x - 1)(1) \\
dy & = (2x - 1)dx \\
\int dy & = \int (2x - 1) \, \mathrm{d}x \\
y & = x^2 - x + C
\end{align}
$$

Substituting the coordinates into the general solution gives

$$
\begin{align}
0 & = 1^2 - 1 + C \\
C & = 0 \\
\therefore y & = x^2 - x
\end{align}
$$

> Consider $\frac{\mathrm{d}y}{\mathrm{d}x} = \frac{x^2}{y^2}$. Find the function $y$ that passes through the point $P(1, 0)$.

$$
\begin{align}
\frac{\mathrm{d}y}{\mathrm{d}x} & = \frac{x^2}{y^2} \\
y^2dy & = x^2dx \\
\int y^2 \, \mathrm{d}y & = \int x^2 \, \mathrm{d}x \\
\frac{1}{3}y^3 & = \frac{1}{3}x^3 + C \\
y^3 & = x^3 + 3C \\
y & = \sqrt[3]{x^3 + 3C}
\end{align}
$$

Substituting the coordinates into the general solution gives

$$
\begin{align}
2 & = \sqrt[3]{0^3 + 3C} \\
C & = \frac{8}{3} \\
\therefore y & = \sqrt[3]{x^3 + 8}
\end{align}
$$

> Find the particular solution to $\frac{y'}{x^2} = y$ at $(3, 1)$.

$$
\begin{align}
\frac{y'}{x^2} & = y \\
\frac{\frac{\mathrm{d}y}{\mathrm{d}x}}{x^2} & = y \\
\frac{\mathrm{d}y}{\mathrm{d}x} & = x^2y \\
\int \frac{1}{y} \, \mathrm{d}y & = \int x^2 \, \mathrm{d}x \\
\ln |y| & = \frac{x^3}{3} + C \\
\implies e^{\ln |y|} & = e^{\frac{x^3}{3} + C} \\
|y| & = e^{\frac{x^3}{3} + C} \\
y & = \pm e^{\frac{x^3}{3} + C}
\end{align}
$$

Substituting the coordinates gives

$$
\begin{align}
\ln |1| & = \frac{3^3}{3} + C \\
C & = -9 \\
\therefore y & = \pm e^{\frac{x^3}{3} - 9}
\end{align}
$$

Verifying the positive solution:

$$
\begin{align}
1 & = e^{\frac{3^3}{3} - 9} \\
1 & = e^0 \\
1 & = 1
\end{align}
$$

Verifying the negative solution:

$$
\begin{align}
1 & = -e^{\frac{3^3}{3} - 9} \\
1 & = -e^0 \\
1 & = -1
\end{align}
$$

Therefore, the particular solution is $y = e^{\frac{x^3}{3} - 9}$.

> Solve $\frac{\mathrm{d}p}{\mathrm{d}t} = t^2p - p + t^2 - 1$.

$$
\begin{align}
\frac{\mathrm{d}p}{\mathrm{d}t} & = t^2p - p + t^2 - 1 \\
 & = p(t^2 - 1) + t^2 - 1 \\
 & = (p + 1)(t^2 - 1) \\
\int \frac{1}{p + 1} \, \mathrm{d}p & = \int (t^2 - 1) \, \mathrm{d}t \\
\ln |p + 1| & = \frac{t^3}{3} - t + C \\
|p + 1| & = e^{\frac{t^3}{3} - t + C} \\
p & = \pm e^{\frac{t^3}{3} - t + C} - 1
\end{align}
$$

> Solve $\frac{\mathrm{d}z}{\mathrm{d}t} + e^{t + z} = 0$.

$$
\begin{align}
\frac{\mathrm{d}z}{\mathrm{d}t} + e^{t + z} & = 0 \\
\frac{\mathrm{d}z}{\mathrm{d}t} & = -e^t e^z \\
\int e^{-z} \, \mathrm{d}z & = -\int e^t \, \mathrm{d}t \\
-e^{-z} & = -e^t + C \\
z & = -\ln(e^t - C)
\end{align}
$$
