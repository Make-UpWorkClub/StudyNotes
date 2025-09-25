---
tags:
  - phys/wave
  - cegep/3
date: 2025-09-24T16:19:01
---

# Interference

As a result of [[superposition]], the displacement of the medium at a point is the sum of the displacements due to each wave.

$$
\Delta\phi = \frac{2\pi}{\lambda}\Delta x \pm \frac{2\pi}{T}\Delta t + \Delta\phi_0
$$

> [!abstract] in / out of phase
> *In* phase: $\Delta\phi_0 = 0$
> *Out* of phase: $\Delta\phi_0 = \pi$

> [!abstract] node / antinode
> Locations where amplitude is always zero / maximal

> [!abstract]+ nodal / antinodal line
> Line of destructive / constructive interference in 2D
> 
> - Nodal lines: $\Delta r = \pm \frac{1}{2}\lambda, \pm \frac{3}{2}\lambda, \dots$
> - Antinodal lines: $\Delta r = 0, \pm\lambda, \pm 2\lambda, \dots$
> - $\Delta r$ is the same for all points on an antinodal line.

## Types

### Constructive

Superposition resulting in *increased* amplitude
Intrinsic phase difference is *even* multiple of $\pi$

$$
\Delta\phi = 2m\pi
$$

### Destructive

Superposition resulting in *decreased* amplitude
Intrinsic phase difference is *odd* multiple of $\pi$

$$
\Delta\phi = (2m + 1)\pi
$$

### Partial

Between constructive and destructive

## Examples

> Two out-of-phase loudspeakers emit 515 Hz sound waves with no time delay. The air conditions on this day are normal. Speaker 1 is at 𝑥 = 1.00 m and speaker 2 at 𝑥 = 3.50 m.

> 1. At the position 𝑥 = 1.25 m, what kind of interference occurs between these two signals?

$$
\begin{align}
\Delta x & = x_2 - x_1 = (1.25 - 1) - (3.50 - 1.25) = -2 \pu{m} \\
T & = \frac{1}{f} = \frac{1}{515}\pu{s} \\
\lambda & = \frac{2}{3}\pu{m} \\
\Delta\phi & = \frac{2\pi}{\lambda}\Delta x + \frac{2\pi}{T}\Delta t + \Delta\phi_0 \\
 & = \frac{2\pi}{\frac{2}{3}}(-2) + \frac{2\pi}{\frac{1}{515}} \cdot 0 + \pi \\
 & = -5\pi \\
 & = (2(-3) + 1)\pi
\end{align}
$$

Destructive interference occurs at that position.

> 2. What is the smallest path-length difference (∆𝑥) that would result in constructive interference?

$$
\begin{align}
(2m + 1)\pi & = \frac{2\pi}{\frac{2}{3}}\Delta x + \pi \\
2m\pi & = 3\pi\Delta x \\
\Delta x & = \frac{2m}{3} \\
\implies \Delta x_{min} & = \frac{2 \cdot 1}{3} \\
 & = \frac{2}{3}\pu{m}
\end{align}
$$