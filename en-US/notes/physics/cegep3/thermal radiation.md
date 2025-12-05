---
tags:
  - phys/wave
  - cegep/3
date: 2025-11-19T17:23:46
---

# thermal radiation

Mechanism of [[heat]] transfer through [[electromagnetic radiation|EM waves]]

$$
P = e\sigma AT^4
$$

- $0 \le e \le 1$: **emissivity** of the material (effectiveness of emitting and absorbing thermal radiation)
- $\sigma = 5.67 \cdot 10^{-8}\pu{W/m^2K^4}$: **Stefan-Boltzmann constant**
- $A$: surface area of material

## Blackbody radiation

EM emission of a blackbody (an object with an emissivity of 1)

**Wien's Law**:

$$
\begin{align}
\lambda_\text{max} & = \frac{b}{T} \\
b & = 2.898 \cdot 10^{-3}\pu{mK}
\end{align}
$$

![[blackbody radiation.png]]

## Examples

> The Sun is a glowing ball of gas with a surface temperature of 5800 K, and the Earth has an average surface temperature of 15℃. Treating both objects as blackbodies, what are the peak wavelengths for the thermal radiation of the Sun and the Earth?

$$
\begin{align}
\lambda_\text{max sun} & = \frac{b}{T_\text{sun}} \\
 & = \frac{2.898 \cdot 10^{-3}}{5800} \\
 & \approx 500\cdot10^{-9}\pu{m} \\
 & \approx 500\pu{nm} \\
 \\
\lambda_\text{max earth} & = \frac{b}{T_\text{earth}} \\
 & = \frac{2.898 \cdot 10^{-3}}{288.15} \\
 & \approx 1.0057 \cdot 10^{-5}\pu{m}
\end{align}
$$