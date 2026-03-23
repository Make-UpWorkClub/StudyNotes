---
tags:
  - phys/elec
  - cegep/4
date: 2026-02-10T11:52:42
---

# electric potential

[[field|Scalar field]] of [[electric potential energy]]
Antiderivative of [[electric field]]

$$
\begin{align}
V & = \frac{k_eq}{r} \\
\Delta V & = -\int_i^f \vec{E} \cdot \mathrm{d} \vec{s}
\end{align}
$$

> [!abstract] equipotential surface
> Each of the lines on the contour map of electric potential

## Examples

> Over a certain region of space, the electric potential is $V = 5x - 3x^2y + 2yz^2$, with 𝑥, 𝑦, 𝑧
in meters and 𝑉 in Volts.

> 1. Find the expressions for the x, y, and z components of the electric field over this
region.

$$
\begin{align}
\frac{\partial V}{\partial x} & = 5 - 6xy + 0 \\
 & = 5 - 6xy \\
\implies E_x & = -\frac{\partial V}{\partial x} = -5 + 6xy \\
 \\
\frac{\partial V}{\partial y} & = 0 - 3x^2 + 2z^2 \\
 & = -3x^2 + 2z^2 \\
\implies E_y & = -\frac{\partial V}{\partial y} = 3x^2 - 2z^2 \\
 \\
\frac{\partial V}{\partial z} & = 0 - 0 + 4yz \\
 & = 4yz \\
\implies E_z & = -\frac{\partial V}{\partial z} = -4yz
\end{align}
$$

> 2. What is the magnitude of the field at the point P that has coordinates (1, 0, –2) m?

$$
\begin{align}
E_x & = -5 + 6 \cdot 1 \cdot 0 = -5 \\
E_y & = 3 \cdot 1^2 - 2 (-2)^2 = 5 \\
E_z & = -4 \cdot 0(-2) = 0 \\
 \\
E & = \sqrt{E_x^2 + E_y^2 + E_z^2} \\
 & = \sqrt{(-5)^2 + 5^2 + 0^2} \\
 & = \sqrt{50}
\end{align}
$$

> What is the work done by the electric force in bringing a proton from $0\pu{V}$ to $14\pu{V}$?

$$
\begin{align}
W & = U_f - U_i \\
 & = qV_f - 0 \\
 & = 1.602 \cdot 10^{-19} \cdot 14 \\
 & = 2.2428 \cdot 10^{-18}\pu{J}
\end{align}
$$