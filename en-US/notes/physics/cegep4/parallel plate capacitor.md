---
tags:
  - phys/elec
  - cegep/4
date: 2026-02-17T10:32:02
---

# parallel plate capacitor

[[Electric field]] between a [[en-US/notes/physics/cegep4/capacitor|capacitor]] of two infinitely wide plates of the same material

$$
\begin{align}
E_\text{cap} & = \frac{\eta}{\epsilon} \\
\Delta V_\text{cap} & = Ed \\
C & = \frac{A\epsilon}{d}
\end{align}
$$

## Examples

> Consider a uniform electric field 𝐸 = $(-1.26 \cdot 10^3\hat{j})\pu{\frac{N}{C}}$. A charged particle of
> mass $m = 7.0 \cdot 10^{-9}\pu{kg}$ sits at rest at the origin and is released at 𝑡 = 0 𝑠. At time
> $t = 3.6 \cdot 10^{-4}\pu{s}$, that particle has reached position (𝑥, 𝑦) = (0 m, 0.04 m).

> 1. Determine the charge of the particle.

$$
\begin{align}
\vec{r_f} - \vec{r_i} & = v_i\Delta t + \frac{1}{2}a\Delta t^2 \\
a & = \frac{2\vec{r_f}}{\Delta t^2} \\
 & = \frac{2 \cdot 0.04}{(3.6 \cdot 10^{-4})^2} \\
 & \approx 617283.9506\pu{\frac{m}{s^2}} \\
 \\
F & = ma \\
 & = 7.0 \cdot 10^{-9} \cdot 617283.9506 \\
 & \approx 0.0043\pu{N} \\
 \\
F & = Eq \\
q & = \frac{F}{E} \\
 & = \frac{0.0043}{-1.26 \cdot 10^3} \\
 & \approx -3.4127\pu{\mu C}
\end{align}
$$

> 2. If the capacitor generating this field is made up of two disks with a charge of
> magnitude 5 𝜇𝐶 on each disk, what is the radius of the disks?

$$
\begin{align}
E & = \frac{Q}{\epsilon A} \\
A & = \frac{Q}{\epsilon E} \\
 & = \frac{5 \cdot 10^{-6}}{8.85 \cdot 10^{-12} \cdot 1.26 \cdot 10^3} \\
 & \approx 448.3902\pu{m^2} \\
 \\
A & = \pi r^2 \\
r & = \sqrt{\frac{A}{\pi}} \\
 & = \sqrt{\frac{448.3902}{\pi}} \\
 & \approx 11.9468\pu{m}
\end{align}
$$

> An isolated air-filled parallel-plate capacitor that is no longer connected to anything has been charged up to 𝑄 = 2.9 nC. Initially, the separation between the plates is 1.20 mm and the capacitance is 31 pF. Then, you pull the plates apart until their separation becomes 5.30 mm. Determine the work done by the electric field as the plates are pulled apart.

$$
\begin{align}
C_1 & = \frac{A\epsilon}{d_1} \\
C_1d_1 & = C_2d_2 \\
C_2 & = \frac{31 \cdot 1.2}{5.3} \\
 & \approx 7.0189\pu{pF} \\
 \\
U_1 & = \frac{1}{2}C_1\Delta V_1^2 \\
U_1 & = \frac{1}{2}\frac{Q^2}{C_1} \\
U_1 & = \frac{1}{2} \frac{(2.9 \cdot 10^{-9})^2}{31 \cdot 10^{-12}} \\
 & \approx 1.3565\cdot10^{-7}\pu{J} \\
 \\
U_2 & = \frac{1}{2} \frac{Q^2}{C_2} \\
U_2 & = \frac{1}{2} \frac{(2.9 \cdot 10^{-9})^2}{7.0189 \cdot 10^{-12}} \approx 5.9910\cdot10^{-7}\pu{J} \\
 \\
\omega & = U_2 - U_1 \\
 & = 5.9910 \cdot 10^{-7} - 1.3565 \cdot 10^{-7} \\
 & \approx 4.6345\cdot10^{-7}\pu{J}
\end{align}
$$