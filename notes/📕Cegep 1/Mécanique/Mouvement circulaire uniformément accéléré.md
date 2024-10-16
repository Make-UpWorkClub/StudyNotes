---
tags:
  - Cegep1
  - Mechanics
date: 2024-10-07T14:18:12
---

# Mouvement circulaire uniformément accéléré

Mouvement 2D avec des accélérations centripète et tangentielle dont les modules sont constants
[[Mouvement circulaire uniforme|MCU]] + accélération tangentielle
`Abbr.` MCUA

$$
\begin{align}
\overset{\to}{a} & = \overset{ \to }{ a_c } + \overset{ \to }{ a_t } \\
a & = \sqrt{ a_c^2 + a_t^2 } \\
|a_t| & = \left|\frac{dv}{dt}\right| \\
 \\
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

> [!example]- $\omega_0 = 3.4 \frac{rad}{s},\ \theta = 1.25*2\pi = 2.5\pi rad,\ \alpha = ?,\ t = ?$
> $$
> \begin{align}
> \omega^2(t) & = \omega_0^2 + 2\alpha(\theta - \theta_0) \\
> 0 & = 3.4^2 + 2\alpha(2.5\pi - 0) \\
> a & = -0.7359\dots \frac{rad}{s^2}
> \end{align}
> $$
> 
> $$
> \begin{align}
> \omega(t) & = \omega_0 + \alpha t \\
> 0 & = 3.4 - 0.7359\dots t \\
> t & \approx 4.620s
> \end{align}
> $$