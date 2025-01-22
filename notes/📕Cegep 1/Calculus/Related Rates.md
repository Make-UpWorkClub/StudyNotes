---
tags:
  - Cegep1
  - Calculus
date: 2024-11-15T17:14:49
---

# Related Rates

Problem where one rate depends on another

## Steps

1. Draw the situation.
2. Establish the equation that relates the quantities of interest.
3. Implicitly differentiate the equation with respect to $t$.
4. Substitute the given information and solve for the rate.

## Examples

Two people on bikes are separated by 350 meters horizontally. Person A starts riding north at a rate of 5 m/sec and 7 minutes later Person B starts riding south at 3 m/sec. At what rate is the distance separating the two people changing 25 minutes after Person A starts riding?

![[Related Rates 1|300]]

After 25 mins:

$$
\begin{align}
y & = 3\cdot18\cdot60 & = 3240\mathrm{m} \\
z & = 5\cdot25\cdot60 & = 7500\mathrm{m} \\
x & = \sqrt{350^2 + (3240 + 7500)^2} & = 10745.7015\dots \mathrm{m}
\end{align}
$$

We have

$$
\begin{align}
x^2 & = 350^2 + (y + z)^2 \\
\implies \frac{\mathrm{d}}{\mathrm{d}t} x^2 & = \frac{\mathrm{d}}{\mathrm{d}t} (350^2 + (y + z)^2) \\
2xx' & = 2(y + z)(y' + z') \\
x' & = \frac{(y + z)(y' + z')}{x} \\
 & = \frac{(3240 + 7500)(3 + 5)}{10745.7015\dots} \\
 & \approx 7.9958\mathrm{\frac{m}{s}}
\end{align}
$$

---

A plane flying with a constant speed of 29 km/min passes over a ground radar station at an altitude of 11 km and climbs at an angle of 35 degrees. At what rate is the distance from the plane to the radar station increasing 3 minutes later?

$$
\begin{align}
d & = \sqrt{ (\cos35°x)^2 + (11 + \sin 35°x)^2 } \\
\implies \frac{\mathrm{d}d}{\mathrm{d}t} & = \frac{\mathrm{d}}{\mathrm{d}t} \sqrt{ (\cos35°x)^2 + (11 + \sin 35°x)^2 } \\
 & = \frac{1}{2}((\cos35°x)^2 + (11 + \sin 35°x)^2)^{-\frac{1}{2}}(2(\cos35°x)\cos35°x' + 2(11 + \sin 35°x)\sin 35°x') \\
 & = \frac{1}{2}((\cos35°\cdot3\cdot29)^2 + (11 + \sin 35°\cdot3\cdot29)^2)^{-\frac{1}{2}}(2(\cos35°\cdot3\cdot29)\cos35°\cdot29 + 2(11 + \sin 35°\cdot3\cdot29)\sin 35°\cdot29) \\
 & \approx 28.8657\mathrm{\frac{km}{min}}
\end{align}
$$

---

> Two parallel sides of a rectangle are being increased at a rate of 2 cm per second while the other 2 sides are being shortened so that the area remains constant at $50\mathrm{cm^2}$.
> (a) What is the rate of change of the perimeter when the length of an increasing side is 5 cm?
> (b) What are the dimensions at the instant when the perimeter stops decreasing?

We know that

$$
\begin{align}
xy & = 50 & (1)\\
P & = 2x + 2y & (2)
\end{align}
$$

Using (1),

$$
y = \frac{50}{x}
$$

Using (2),

$$
\begin{align}
P & = 2x + 2\left( \frac{50}{x} \right) \\
 & = 2x + \frac{100}{x}
\end{align}
$$

Then,

$$
\begin{align}
\frac{\mathrm{d}}{\mathrm{d}t}P & = \frac{\mathrm{d}}{\mathrm{d}t}\left( 2x + \frac{100}{x} \right) \\
P' & = 2x' - \frac{100}{x^2}x'
\end{align}
$$

When $x = 5$ and $x'= 2$,

$$
\begin{align}
P' & = 2\cdot2 - \frac{100}{5^2}\cdot2 \\
 & = -4\mathrm{\frac{cm}{s}}
\end{align}
$$

(b) we want $x$ and $y$ when $P'= 0$.

$$
\begin{align}
P' & = 0 \\
\implies 2x'-\frac{100}{x^2}x' & = 0 \\
2 - \frac{100}{x^2} & = 0 \\
2x^2 & = 100 \\
x & = 5\sqrt{2}
\end{align}
$$

Note that $x > 0$.

| 0   | $5\sqrt{2}$ | $\infty$ |
| --- | ----------- | -------- |
| P'  | -           | +        |
| P   | dec         | inc      |

So, $P$ stops decreasing when $x = 5\sqrt{2}$.
By (1),

$$
\begin{align}
5\sqrt{2}y & = 50 \\
y & = 5\sqrt{2}
\end{align}
$$

---

> A rain gutter is to be constructed from a sheet of metal of width 30 cm bending up one third of the sheet on each side through an angle of 𝜃 . Find 𝜃 so the gutter will carry the maximum amount of water.

Note that

$$
\begin{cases}
A & = \frac{(B + b)h}{2} \\
h & = \sin \theta\cdot10 \\
b & = 10 \\
B & = 10 + \cos\theta\cdot10
\end{cases}
$$

Using the above equations,

$$
\begin{align}
A(\theta) & = \frac{(10 + \cos\theta\cdot10 + 10)\sin \theta\cdot10}{2} \\
 & = 100(1 + \cos\theta)\sin \theta
\end{align}
$$

As the sides close down, an equilateral triangle is formed.
So,

$$
\begin{align}
\theta_\text{max} & = \frac{\pi}{2} + \frac{\pi}{6} = \frac{2\pi}{3} \\
\therefore\theta \in\left[ 0, \frac{2\pi}{3} \right]
\end{align}
$$

Then,

$$
\begin{align}
A'(\theta) & = 100(-\sin \theta \sin \theta + (1 + \cos\theta)\cos\theta) \\
 & = 100(\cos^2\theta - 1 + \cos\theta + \cos^2\theta) \\
 & = 100(2\cos^2\theta + \cos\theta - 1)
\end{align}
$$

$A'$ is never undefined. $A'= 0$ if

$$
\begin{align}
2\cos^2\theta + \cos\theta - 1 & = 0 \\
2\cos^2\theta + 2\cos\theta - \cos\theta - 1 & = 0 \\
2\cos\theta(\cos\theta + 1) - (\cos\theta + 1) & = 0 \\
(2\cos\theta - 1)(\cos\theta + 1) & = 0 \\
\implies2\cos\theta - 1 & = 0 \text{ or } & \cos\theta + 1 & = 0 \\
2\cos\theta & = 1 & \cos\theta & = -1 \\
\cos\theta & = \frac{1}{2} \\
\theta & = \pi & \theta & = \frac{\pi}{3}\text{ or }\frac{5\pi}{3}
\end{align}
$$

Only $\frac{\pi}{3}\in\left[ 0, \frac{2\pi}{3} \right]$. Then,

| 0   | $\frac{\pi}{3}$ | $\frac{2\pi}{3}$ |
| --- | --------------- | ---------------- |
| A'  | +               | -                |
| A   | inc             | dec              | 

By the first derivative test, $A(\theta)$ is maximized when $\theta = \frac{\pi}{3}$.