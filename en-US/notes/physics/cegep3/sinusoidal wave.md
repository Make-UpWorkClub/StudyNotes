---
tags:
  - phys/wave
  - cegep/3
date: 2025-09-02T13:58:04
---

# sinusoidal wave

[[Wave]] that looks like a sinusoidal function
Every particle oscillates in [[simple harmonic motion|SHM]]

$$
\begin{align}
y(x, t) & = A\sin(kx \pm\omega t + \phi_0) \\
\frac{\mathrm{d}y}{\mathrm{d}t} & = -A\omega \cos(kx - \omega t + \phi_0) \\
\frac{\mathrm{d}^2y}{\mathrm{d}t^2} & = -A\omega^2\sin(kx - \omega t + \phi_0) \\
 \\
\lambda & = vT \\
k & = \frac{2\pi}{\lambda} \\
\phi & = kx \pm\omega t + \phi_0
\end{align}
$$

$\omega t$ is *negative* for a wave travelling in the *positive* x direction, *positive* for a wave travelling in the *negative* x direction.

Snapshot: $t$ is fixed
History graph: $x$ is fixed

## Harmonic

Sinusoidal wave with a frequency that is a multiple of the [[en-US/notes/physics/frequency#Fundamental frequency|fundamental frequency]]

## Examples

> Find the wave function for this wave.
> 
> ![[sinusoidal wave example.png|400]]

$$
\begin{align}
T & = 0.6\pu{s} \\
A & = 0.06\pu{m} \\
\lambda & = vT = 1.2\pu{m} \\
k & = \frac{2\pi}{\lambda} \approx 5.2360\pu{\frac{rad}{m}} \\
\omega & = \frac{2\pi}{T} \approx 10.4720\pu{\frac{rad}{s}} \\
 \\
y(0, 0) = -0.03 & = 0.06\sin(\phi_0) \\
\phi_0 & = -0.5236\pu{rad} \\
 \\
y(x, t) & = 0.06\sin(5.2360x + 10.4720t - 0.5236)
\end{align}
$$

> A stretched string has a linear density of 5.0 g/cm and a tension of 200.0 N. A sinusoidal wave on this string is travelling in the negative direction of the x-axis with an amplitude of 2 m and a frequency of 5 Hz. When writing the displacement with a sine function, the phase constant is $\frac{\pi}{4}$ rad.
> Write the wave function for this wave.
