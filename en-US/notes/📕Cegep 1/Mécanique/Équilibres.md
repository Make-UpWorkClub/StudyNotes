---
tags:
  - Cegep1
  - Mechanics
date: 2024-11-25T08:21:38
---

# Équilibres

## Types

### ~ de translation

$$
\sum \overset{\to}{F} = \overset{\to}{0}
$$

### ~ de rotation

$$
\sum \tau = 0
$$

> [!note] Un corps en équilibre de rotation ne tourne pas autour de n'importe quel axe.

### ~ statique

Équilibre de translation + de rotation

## Exemples

![[Équilibre 1]]

$$
\begin{align}
\sum F_x & = 0 \\
-\sin 30°T_G + \sin 30°T_D & = 0 \\
T_D & = T_G
\end{align}
$$

$$
\begin{align}
\sum F_y & = 0 \\
\cos30°T_G + \cos30°T_D - T_A - 0.98 & = 0 \\
\implies 2\cos30°T_G - T_A - 0.98 & = 0 \\
\sqrt{3}T_G - T_A - 0.98 & = 0 \\
T_G & = \frac{T_A + 0.98}{\sqrt{3}}
\end{align}
$$

On place l'axe de rot. à droite pour que $\overset{\to}{T_D}$ n'influence pas $\sum \tau$.

$$
\begin{align}
\sum \tau & = 0 \\
\frac{L}{2}\sin 60°\cdot0.98 + \frac{3L}{4}\sin 60°\cdot T_A - L\sin 90°\cdot T_G & = 0 \\
\frac{1}{2}\sin 60°\cdot0.98 + \frac{3}{4}\sin 60°\cdot T_A - T_G & = 0 \\
\frac{\sqrt{3}}{4}0.98 + \frac{3\sqrt{3}}{8}T_A - T_G & = 0 \\
\implies \frac{3}{4}0.98 + \frac{9}{8}T_A - T_A - 0.98 & = 0 \\
T_A & = 1.96N
\end{align}
$$

$$
\begin{align}
T_G & = \frac{T_A + 0.98}{\sqrt{3}} \\
 & = \frac{1.96 + 0.98}{\sqrt{3}} \\
 & \approx 1.70 N
\end{align}
$$

$$
T_A = T_G \approx 1.70N
$$