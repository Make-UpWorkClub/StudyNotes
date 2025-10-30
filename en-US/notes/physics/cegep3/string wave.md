---
tags:
  - phys/wave
  - cegep/3
date: 2025-10-15T19:59:38
---

# string wave

Transverse mechanical [[wave]] travelling through a string

## wave speed

$$
\begin{align}
v & = \sqrt{\frac{T_s}{\mu}} \\
\mu & = \frac{m}{l}
\end{align}
$$

Where $\mu$ is the **linear density** in kg/m.

## [[Standing wave]]

Boundary condition: reflection at the fixed ends => the ends must be *nodes* 

$$
y(x, t) = \underbrace{2A\sin(kx)}_{\text{Amplitude component}}\underbrace{\cos(\omega t)}_{\text{Oscillating component}}
$$

## Examples

> A stretched string has a linear density of 5.0 g/cm and a tension of 200.0 N. A sinusoidal wave on this string is travelling in the negative direction of the x-axis with an amplitude of 2 m and a frequency of 5 Hz. When writing the displacement with a sine function, the phase constant is $\frac{\pi}{4}$ rad.
> Write the wave function for this wave.

$$
\begin{align}
v & = \sqrt{\frac{T_s}{\mu}} = \sqrt{\frac{200}{5}} = 2\sqrt{10}\pu{cm / s} \\
\lambda & = \frac{v}{f} = \frac{2\sqrt{10}}{5}\pu{cm} \\
T & = \frac{1}{f} = \frac{1}{5}\pu{s} \\
 \\
y(x, t) & = A\sin(kx + \omega t + \phi_0) \\
 & = 2\sin\left( \frac{2\pi}{\frac{2\sqrt{10}}{5}}x + \frac{2\pi}{\frac{1}{5}}t + \frac{\pi}{4} \right) \\
 & = 2\sin\left( \frac{\pi \sqrt{10}}{2}x + 10\pi t + \frac{\pi}{4} \right)
\end{align}
$$