---
tags:
  - Calculus
  - cegep/1
date: 2024-11-20T15:15:44
---

# Optimisation

Finding the [[extremum]] of the function representing the situation

## Steps

1. Draw the situation if possible.
2. Find the **target function**, i.e. the function to optimise.
3. Find the **constraint equation** linking the variables.
4. Rewrite the target function in terms of a single variable.
5. Find the domain of the target function.
6. Differentiate the target function to find the critical points in the domain.
7. Identify the extremum by using:
	- First / second derivative test
	- Other arguments, e.g. vertex of a parabola

> [!info] The $\frac{\mathrm{d}}{\mathrm{d}x}f(x) = f'(x)$ step can be omitted for optimisation.

## Examples

> Two poles, one 15 meters tall and one 10 meters tall, are 40 meters apart.
A length of wire is attached to the top of each pole, and it is staked to the
ground somewhere between the two poles. Where should the wire be
staked so that the angle formed by the two pieces of wire at the stake is a
maximum?

![[Optimisation 1]]

Note that $\theta = \pi - \arctan \frac{10}{x} - \arctan \frac{15}{40 - x}$.
So,

$$
\begin{align}
\theta' & = -\left( \frac{-\frac{10}{x^2}}{1 + \left( \frac{10}{x} \right)^2} + \frac{\frac{15}{(40 - x)^2}}{1 + \left( \frac{15}{40 - x} \right)^2} \right) \\
 & = -\left( \frac{-10}{x^2 + 10^2} + \frac{15}{(40 - x)^2 + 15^2} \right) \\
 & = -\left( -\frac{-10((40 - x)^2 + 15^2) + 15(x^2 + 10^2)}{(x^2 + 10^2)((40 - x)^2 + 15^2)} \right) \\
 & = \frac{-5(x^2 + 160x - 3350)}{(x^2 + 10^2)((40 - x)^2 + 15^2)}
\end{align}
$$

$\theta$ is never undefined. $\theta'= 0$ if

$$
\begin{align}
x^2 + 160x - 3350 = 0 \\
(x + 80)^2 - 9750 = 0 \\
(x + 178.74\dots)(x - 18.74\dots) = 0 \\
\implies x = -178.74\dots \text{ or }18.74\dots
\end{align}
$$

We reject $x_-$ because $x > 0$.

|     0     | $x_+$ | 40  |
|:---------:|:-----:|:---:|
| $\theta'$ |   +   |  -  |
| $\theta$  |  inc  | dec |

By the first derivative test, $\theta$ has a global maximum at $x = x_+$.
Thus, the wires should be stacked at about 18.74m from the 10m pole.

(The angle is:)

$$
\begin{align}
\theta(-80 + \sqrt{80^2 - 3350}) & = \pi - \arctan \frac{10}{-80 + \sqrt{80^2 - 3350}} - \arctan \frac{15}{40 + 80 - \sqrt{80^2 - 3350}} \\
 & \approx 3.30\dots \mathrm{rad}
\end{align}
$$

---

> A box (with no top) is to be constructed from a piece of cardboard of sides
15ft and 24ft by cutting out squares of length ℎ from the corners and folding
up the sides. Find the value of ℎ that maximizes the volume of the box. What
are the dimensions of this box?

We need $15 - 2h > 0$ and $24 - 2h > 0$. The former implies that $h < 7.5$ while the latter says $h < 12$. So, $h \in (0, 7.5)$.
Then,

$$
\begin{align}
V(h) & = (15 - 2h)(24 - 2h)h \\
 & = (15\cdot24 - 30h - 48h + 4h^2)h \\
 & = 360h - 78h^2 + 4h^3
\end{align}
$$

So,

$$
\begin{align}
V'(h) & = 360 - 156h + 12h^2 \\
V''(h) & = -156 + 24h
\end{align}
$$

$V'$ is never undefined.

$$
\begin{align}
V'(h) & = 0 \\
360 - 156h + 12h^2 & = 0 \\
h & = \frac{156 \pm \sqrt{(-156)^2 - 4\cdot12\cdot360}}{2\cdot12} \\
h & = 10\text{ or }3
\end{align}
$$

Since $h\in(0, 7.5)$, we reject $h = 10$.
Then,

$$
\begin{align}
V''(3) & = -156 + 24\cdot3 \\
 & = -84
\end{align}
$$

By the second derivative test, V has a global maximum at $x = 3$.
Finally,

$$
\begin{align}
15 - 2h & = 9\mathrm{ft} \\
24 - 2h & = 18\mathrm{ft}
\end{align}
$$

The dimensions of the box are 18x9x3ft.
