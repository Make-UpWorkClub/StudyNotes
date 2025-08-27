---
tags:
  - Calculus
  - cegep/1
date: 2024-11-13T15:17:39
---

# Curve Sketching

To sketch the curve of a function $f$:

1. Find the domain of $f$.
2. Find the x-intercepts and the y-intercept if possible.
3. Find the horizontal and vertical asymptotes of $f$ if possible.
4. Find the intervals of monotonicity of $f$.
5. (Optional) find the relative extrema of $f$.
6. Find the intervals of concavity of $f$.
7. Find the inflection points of $f$.
8. Sketch the graph.
	1. Draw a Cartesian plane.
	2. Plot the x-intercepts, the y-intercept, the H.A., the V.A., the relative extrema, and the inflection points.
	3. Plot $f(x)$ from left to right.
		- Consider the monotonicity and concavity of $f$.
		- Consider the behaviour of $f$ from left and right of V.A.
		- Consider the side of $f$ relative to the H.A.

## Examples

Given

$$
\begin{align}
f(x) & = (5 - 2x)x^{\frac{2}{3}} \\
f'(x) & = \frac{10(1 - x)}{3x^{\frac{1}{3}}} \\
f''(x) & = \frac{-10(1 + 2x)}{9x^{\frac{4}{3}}}
\end{align}
$$

sketch the graph of $f$.

### Domain

$f$  is defined $\forall x\in \mathbb{R}$.

### Intercepts

x-intercepts:

$$
\begin{align}
f(x) & = 0 \\
\implies(5 - 2x)x^{\frac{2}{3}} & = 0 \\
5 - 2x = 0 & \text{ or }x^{\frac{2}{3}} = 0 \\
x = \frac{5}{2} & x = 0
\end{align}
$$

y-intercept:

$$
f(0) = (5 - 2\cdot0)0^{\frac{2}{3}} = 0
$$

### Asymptotes

V.A.:

Since $domf = x\in \mathbb{R}$, there are no V.A.

H.A.:

$$
\begin{align}
\lim_{ x \to \pm \infty } f(x) & = \lim_{ x \to \pm \infty } (5 - 2x)x^{\frac{2}{3}} \\
 & = \lim_{ x \to \pm \infty } (5 - 2x)\lim_{ x \to \pm \infty } x^{\frac{2}{3}} \\
 & = \mp \infty\cdot \infty \\
 & = \mp \infty
\end{align}
$$

Therefore, there are no H.A.

### Intervals of monotonicity and concavity

$$
\begin{align}
f'(x) & = 0 \\
10(1 - x) & = 0 \\
1 - x & = 0 \\
x & = 1
\end{align}
$$

$f'(x)$ is undefined if

$$
\begin{align}
3x^{\frac{1}{3}} & \infty= 0 \\
x^{\frac{1}{3}} & = 0 \\
x & = 0
\end{align}
$$

Similarly,

$$
\begin{align}
f''(x) & = 0 \\
-10(1 + 2x) & = 0 \\
1 + 2x & = 0 \\
x & = -\frac{1}{2}
\end{align}
$$

$f''(x)$ is undefined if

$$
\begin{align}
9x^{\frac{4}{3}} & = 0 \\
x^{\frac{4}{3}} & = 0 \\
x & = 0
\end{align}
$$

So,

| $-\infty$ | $-\frac{1}{2}$ |    0    |    1    | $\infty$ |
|:---------:|:--------------:|:-------:|:-------:|:--------:|
|  $f'(x)$  |       -        |    -    |    +    |    -     |
| $f''(x)$  |       +        |    -    |    -    |    -     |
|  $f(x)$   |    dec dec     | inc dec | dec inc | inc dec  |

### Relative extrema

$x = 0$ is a relative minimum.
$x = 1$ is a relative maximum:

$$
\begin{align}
f(1) & = (5 - 2)\cdot1^{\frac{2}{3}} \\
 & = 3
\end{align}
$$

### Inflection points

$x = 0$ is not an inflection point since the concavity doesn't change.
$x = -\frac{1}{2}$ is an inflection point:

$$
\begin{align}
f\left( -\frac{1}{2} \right) & = \left( 5 - 2\left( -\frac{1}{2} \right) \right)\left( -\frac{1}{2} \right)^{\frac{2}{3}} \\
 & = \frac{6}{\sqrt[3]{4}}
\end{align}
$$

### Curve sketch

![[Curve Sketching 1]]