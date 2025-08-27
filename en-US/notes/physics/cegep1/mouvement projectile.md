---
tags:
  - Physics/Mechanics
  - cegep/1
date: 2024-10-16T17:26:08
---

# Mouvement projectile

Mouvement 2D où chaque axe effectue un [[Mouvement uniformément accéléré|MUA]]

> [!example]- $y_0 = 3\mathrm{m},\ y \ge 2.24\mathrm{m},\ x_0 = -8\mathrm{m},\ x = 0\mathrm{m},\ v_{x_{min}} =\ ?$
> En $y$ :
>
> $$
> \begin{align}
> y(t) & = y_0 + v_{y_0}t + \frac{1}{2}a_yt^2 \\
> 2.24 & \le 3 + 0t + \frac{1}{2}\cdot - 9.8t^2 \\
> t & \le 0.3938\dots \mathrm{s}
> \end{align}
> $$
>
> En $x$ :
>
> $$
> \begin{align}
> x(t) & = x_0 + v_{x_0}t + \frac{1}{2}a_xt^2 \\
> \implies 0 & = x_0 + v_{x_{min}}t_{max} + \frac{1}{2}a_xt_{max}^2 \\
> 0 & = -8 + v_{x_{min}}\cdot0.3938\dots + \frac{1}{2}0\cdot0.3938\dots^2 \\
> v_{x_{min}} & \approx 20.31\mathrm{\frac{m}{s}}
> \end{align}
> $$

> [!example]- $y_0 = 3\mathrm{m},\ y = 0\mathrm{m},\ x_0 = -8\mathrm{m},\ x \le 9\mathrm{m},\ v_{x_{max}} =\ ?$
> En $y$ :
>
> $$
> \begin{align}
> y(t) & = y_0 + v_{y_0}t + \frac{1}{2}a_yt^2 \\
> 0 & = 3 + 0t + \frac{1}{2}\cdot -9.8t^2 \\
> t & = 0.7824\dots \mathrm{s}
> \end{align}
> $$
>
> En $x$ :
>
> $$
> \begin{align}
> x(t) & = x_0 + v_{x_0}t + \frac{1}{2}a_xt^2 \\
> \implies 9 & = x_0 + v_{x_{max}}t + \frac{1}{2}a_xt^2 \\
> 9 & = -8 + v_{x_{max}}\cdot0.7824\dots + \frac{1}{2}\cdot0t^2 \\
> v_{x_{max}} & \approx 21.73\mathrm{\frac{m}{s}}
> \end{align}
> $$

> [!example]- $\theta = 30^\circ,\ x_0 = 0\mathrm{m},\ x = 63\mathrm{m},\ y_0 = 2\mathrm{m},\ y = 0,\ v_{x_0} =\ ?$
> En $x$ :
>
> $$
> \begin{align}
> x(t) & = x_0 + v_{x_0}t + \frac{1}{2}a_xt^2 \\
> 63 & = 0 + \cos30^\circ v_0t + \frac{1}{2}\cdot0t^2 \\
> t & = \frac{63}{\cos30^\circ v_0}
> \end{align}
> $$
>
> En $y$ :
>
> $$
> \begin{align}
> y(t) & = y_0 + v_{y_0}t + \frac{1}{2}a_yt^2 \\
> 0 & = 2 + \sin30^\circ v_0t + \frac{1}{2}\cdot -9.8t^2 \\
> \implies 0 & = -4.6\left( \frac{63}{\cos30^\circ v_0} \right)^2 + \sin30^\circ v_0\left( \frac{63}{\cos30^\circ v_0} \right) + 2 \\
> 0 & = -\frac{24343.2}{v_0^2} + 21\sqrt{3} + 2 \\
> v_0 & = 25.1869\dots \mathrm{\frac{m}{s}}
> \end{align}
> $$
>
> $$
> v_{x_0} = \cos30^\circ v_0 = 25.1869\dots \mathrm{\frac{m}{s}}
> $$
>
> $x_0 = 0\mathrm{m},\ x = 0.7\mathrm{m},\ v_{x_0} = 0\mathrm{\frac{m}{s}},\ v_x = 25.1869\dots\mathrm{\frac{m}{s^2}},\ a_x =\ ?$
> $$
> \begin{align}
> v_x(x)^2 & = v_{x_0}^2 + 2a_x(x - x_0) \\
> 25.1869\dots^2 & = 0^2 + 2a_x(0.7 - 0) \\
> a_x & \approx 453.1\mathrm{\frac{m}{s^2}}
> \end{align}
> $$
