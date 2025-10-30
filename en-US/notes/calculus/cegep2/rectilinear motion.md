---
tags:
  - mat/calculus
  - cegep/2
date: 2025-04-15T15:24:19
---

# Rectilinear Motion

Motion in a straight line

Displacement:

$$
\int_{t_1}^{t_2} v(t) \, \mathrm{d}t = s(t_2) - s(t_1)
$$

Distance travelled:

$$
\int_{t_1}^{t_2} |v(t)| \, \mathrm{d}t
$$

## Examples

> An object moves along the x-axis with an acceleration given by $a(t) = \cos t - \sin t$ with initial velocity of $1\pu{\frac{cm}{s}}$.
>
> 1. Find both the displacement and the distance travelled from $t_1 = 0$ to $t_2 = \pi$.
> 2. If initial position is $3\pu{cm}$, find the position function $s(t)$.

1.

$$
\begin{align}
v(t) & = \int a(t) \, \mathrm{d}t \\
& = \int (\cos t - \sin t) \, \mathrm{d}t \\
& = \sin t + \cos t + C \\
 \\
1 & = \sin0 + \cos0 + C \\
C & = 0 \\
 \\
\therefore v(t) & = \sin t + \cos t
 \\
\text{displacement} & = \int_{t_1}^{t_2} v(t) \, \mathrm{d}t \\
 & = \int_{0}^{\pi} (\sin t + \cos t) \, \mathrm{d}t \\
 & = [-\cos t + \sin t]_0^\pi \\
 & = -\cos \pi + \sin \pi - (-\cos0 + \sin0) \\
 & = 2\pu{cm}
\end{align}
$$

We need to determine the sign of $v(t)$.

$$
\begin{align}
\sin t + \cos t & = 0 \\
\sin t & = -\cos t \\
\tan t & = -1 \\
t & = \frac{3\pi}{4} \\
 \\
\text{distance travelled} & = \int_{0}^{\pi} |\sin t + \cos t| \, \mathrm{d}t \\
 & = -\int_{0}^{\frac{3\pi}{4}} (\sin t + \cos t) \, \mathrm{d}t + \int_{\frac{3\pi}{4}}^{\pi} (\sin t + \cos t) \, \mathrm{d}t \\
 & = -(-\cos t + \sin t)_0^{\frac{3\pi}{4}} + (-\cos t + \sin t)_{\frac{3\pi}{4}}^\pi \\
 & = -\left( -\cos \frac{3\pi}{4} + \sin \frac{3\pi}{4} \right) - (-\cos0 + \sin0) - \cos \pi + \sin \pi - \left( -\cos \frac{3\pi}{4} + \sin \frac{3\pi}{4} \right) \\
 & = 2\sqrt{2}\pu{cm}
\end{align}
$$

2.

$$
\begin{align}
s(t) & = \int v(t) \, \mathrm{d}t \\
 & = \int v(t) \, \mathrm{d}t \\
 & = \int (\sin t + \cos t) \, \mathrm{d}t \\
 & = -\cos t + \sin t + C_2 \\
 \\
3 & = -\cos0 + \sin0 + C_2 \\
C_2 & = 4 \\
 \\
\therefore s(t) & = -\cos t + \sin t + 4
\end{align}
$$
