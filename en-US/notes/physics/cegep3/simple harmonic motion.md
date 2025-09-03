---
tags:
  - phys/wave
  - cegep/3
date: 2025-08-27T16:43:11
---

# simple harmonic motion

[[Oscillatory motion]] whose restoring force is directly proportional to displacement
Creates [[sinusoidal wave|sinusoidal waves]]
One-dimensional projection of [[uniform circular motion]]
`Abbr.` SHM

$$
\begin{align}
x(t) & = A\cos\left( \omega t + \phi_0 \right) \\
v(t) & = -A\omega \sin(\omega t + \phi_0) \\
a(t) & = -A\omega^2\cos(\omega t + \phi_0) \\
 \\
\omega & = 2\pi f = \frac{2\pi}{T} \\
 & = \sqrt{\frac{k}{m}} \\
\phi & = \omega t + \phi_0 \\
F & = -kx  \\
 \\
\frac{\mathrm{d}^2x}{\mathrm{d}t^2} + \frac{g}{L}\theta & = 0 \\
E = K + U & = \frac{1}{2}mv^2 + \frac{1}{2}kx^2 \\
 & = \frac{1}{2}mv_\text{max}^2 \\
 & = \frac{1}{2}kA^2
\end{align}
$$

> [!info] Oscillation around the equilibrium is symmetrical even for vertical SHM.

> [!info] No work is done by non-conservative forces => mechanical energy is conserved

## Examples

> A 0.500-kg cart connected to a light spring for which the spring constant is 20.0 N/m oscillates on a frictionless, horizontal air track.

> 1. Using energy, calculate the maximum speed of the cart if the amplitude of the motion is 3.00 cm.

$$
\begin{align}
E = \frac{1}{2}kA^2 & = \frac{1}{2}mv_\text{max}^2 \\
\frac{1}{2}20\cdot0.03 & = \frac{1}{2}0.5v_\text{max}^2 \\
v_\text{max} & = \sqrt{1.2}\pu{\frac{m}{s}}
\end{align}
$$

> 2. Compute the kinetic and potential energies of the system when the position of the cart is 2.00 cm.

$$
\begin{align}
U & = \frac{1}{2}kx^2 \\
 & = \frac{1}{2}20\cdot0.02^2 \\
 & = 0.004\pu{J} \\
 \\
E = \frac{1}{2}kA^2 & = K + U \\
\frac{1}{2}20\cdot0.03^2 & = K + 0.004 \\
K & = 0.005\pu{J}
\end{align}
$$