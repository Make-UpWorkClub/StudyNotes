---
tags:
  - Cegep1
  - Mechanics
date: 2024-11-20T08:44:00
---

# Rotation

$$
\begin{align}
s & = r\theta \\
t_t & = r\omega \\
a_t & = r\alpha \\
 \\
\omega(t) & = \frac{d\theta}{dt} \\
\alpha(t) & = \frac{d\omega}{dt} \\
 \\
\theta(t) & = \theta_0 + \omega_0t + \frac{1}{2}\alpha t^2 \\
\omega(t) & = \omega_0 + \alpha t \\
\omega^2(t) & = \omega_0^2 + 2\alpha(\theta - \theta_0) \\
\theta(t) & = \theta_0 + \frac{\omega_0 + \omega(t)}{2}t
\end{align}
$$

Une force appliquée sur le centre ou l'axe de rotation ne cause pas d'accélération angulaire.

## Exemples

Montrez que l'accélération de deux masses attachées à un poulie est égale à $\frac{m_2 - m_1}{m_2 + m_1 + \frac{1}{2M}} g$.

$F_{g_1}$ & $F_{g_2}$ :

$$
\begin{align}
\sum F & = ma \\
F_{g_1} + F_{g_2} & = 0 \\
m_1g + m_2g = 0
\end{align}
$$

$\tau$ :

$$
\begin{align}
\sum\tau & = I\alpha \\
rF_{g_1} - rF_{g_2} & = \frac{1}{2}Mr^2\cdot ra \\
m_1g - m_2g & = \frac{1}{2}Mr^2a \\
a & = 2g\frac{m_1 - m_2}{Mr^2}
\end{align}
$$

