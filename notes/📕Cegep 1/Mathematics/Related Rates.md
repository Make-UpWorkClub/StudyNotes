---
tags:
  - Cegep1
  - Mathematics
date: 2024-11-15T17:14:49
---

# Related Rates

Problem where the one rate depends on another

## Examples

Two people on bikes are separated by 250 meters horizontally. Person A starts riding north at a rate of 5 m/sec and 7 minutes later Person B starts riding south at 3 m/sec. At what rate is the distance separating the two people changing 25 minutes after Person A starts riding?

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