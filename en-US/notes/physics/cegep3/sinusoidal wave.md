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
v_y(x, t) & = -A\omega \cos(kx - \omega t + \phi_0) \\
a_y(x, t) & = -A\omega^2\sin(kx - \omega t + \phi_0) \\
 \\
\phi & = kx \pm\omega t + \phi_0
\end{align}
$$

- $\omega t$ is *negative* for a wave travelling in the *positive* x direction,
  *positive* for a wave travelling in the *negative* x direction.
- Snapshot: $t$ is fixed
  History graph: $x$ is fixed

> [!abstract] crest
> Point of maximum displacement

> [!abstract] trough
> Point of minimum displacement

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