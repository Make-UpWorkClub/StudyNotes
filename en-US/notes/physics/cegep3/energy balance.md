---
tags:
  - phys/wave
  - cegep/3
date: 2025-11-20T09:27:34
---

# energy balance

Relationship between [[énergie|energy]] absorbed and energy emitted by an object

$$
P_\text{in} = P_\text{out}
$$

## Of Earth

$$
\begin{align}
P_\text{in} & = S_0(1 - \alpha)\pi R^2_\text{Earth} \\
P_\text{out} & = \sigma 4\pi R^2_\text{Earth}T_e^4
\end{align}
$$

> [!abstract] solar irradiance
> Intensity of solar radiation at the Earth's position
> 
> $$
> S_0 = 1362\pu{W/m^2}
> $$

## Examples

> Consider Saturn as a blackbody. If Saturn is located $1.426 \cdot 10^{12}\pu{m}$ from the Sun and has an effective temperature of 81 K, determine its albedo.

$$
\begin{align}
P_\text{in} & = P_\text{out} \\
\frac{P_\text{Sun}}{4\pi d^2}(1 - \alpha)\cancel{\pi R_\text{Saturn}^2} & = \sigma 4\cancel{\pi R_\text{Saturn}^2}T_e^4 \\
\frac{3.83 \cdot 10^{26}}{4\pi (1.426 \cdot 10^{12})^2}(1 - \alpha) & = 5.67 \cdot 10^{-8} \cdot 4 \cdot 81^4 \\
\alpha & \approx 0.349
\end{align}
$$