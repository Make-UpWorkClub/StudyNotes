---
tags:
  - phys/elec
  - cegep/4
date: 2026-02-17T10:30:02
---

# point charge

## Properties

### [[Electric field]]

$$
\vec{E} = \sum_{ i } \frac{k_eq_i}{r_i^2}\hat{r}_i
$$

### [[Electric potential]]

$$
V = \sum_{ i } \frac{k_eq_i}{r_i}
$$

### [[Electric potential energy]]

$$
\begin{align}
U_\text{elec} & = \frac{k_eq_1q_2}{r_\text{ij}} \\
U_\text{sys} & = \sum_{ i < j } \frac{k_eq_iq_j}{r_{ij}}
\end{align}
$$

In a uniform field:

$$
U_\text{elec} = qEs
$$

- $s$: displacement along the field

## Examples

> A positron (positive electron) with an initial speed $v_0 = 3.00 \cdot 10^6\pu{\frac{m}{s}}$ is in a head-on collision with an immobile alpha particle. If the two particles are initially infinitely faraway, find the distance of closest approach. A positron has mass $9.11 \cdot 10^{-31}\pu{kg}$ and a charge + 𝑒; an alpha particle has a charge +2𝑒.

$$
\begin{align}
E_i & = E_f \\
K_i & = U_f \\
\frac{1}{2}mv_i^2 & = \frac{k_eq_1q_2}{r} \\
r & = \frac{2k_eq_1q_2}{mv_i^2} \\
 & = \frac{2 \cdot 8.99 \cdot 10^9 \cdot 1.602 \cdot 10^{-19} \cdot 2 \cdot 1.602 \cdot 10^{-19}}{9.11 \cdot 10^{-31} \cdot (3.00 \cdot 10^6)^2} \\
 & \approx 1.1256 \cdot 10^{-10}\pu{m}
\end{align}
$$

> There are three charges:
> 
> 1. -4nC at (-0.5m, 0)
> 2. 5nC at (0, 0)
> 3. 3nC at (0.8, 0)

> 1. Find the electric field at (0, 2m).

$$
\begin{align}
r_1 & = \sqrt{0.5^2 + 2^2} \approx 2.0615\pu{m} \\
r_2 & = 2\pu{m} \\
r_3 & = \sqrt{0.8^2 + 2^2} \approx 2.1540\pu{m} \\
 \\
F_1 & = \frac{k_e|q_1|}{r_1^2} \\
 & = \frac{8.99 \cdot 10^9 \cdot 4 \cdot 10^{-9}}{2.0615^2} \\
 & \approx 8.4616\pu{\frac{N}{C}} \\
 \\
F_2 & = \frac{k_e|q_2|}{r_2^2} \\
 & = \frac{8.99 \cdot 10^9 \cdot 5 \cdot 10^{-9}}{2^2} \\
 & \approx 11.2375\pu{\frac{N}{C}} \\
 \\
F_3 & = \frac{k_e|q_3|}{r_3^2} \\
 & = \frac{8.99 \cdot 10^9 \cdot 3 \cdot 10^{-9}}{2.1540^2} \\
 & \approx 5.8128\pu{\frac{N}{C}} \\
 \\
\vec{F_{1_x}} & = -\cos\left( \arctan \frac{2}{0.5} \right) 8.4616 \approx -2.0522\pu{\frac{N}{C}} \\
\vec{F_{1_y}} & = -\sin\left( \arctan \frac{2}{0.5} \right) 8.4616 \approx -8.2089\pu{\frac{N}{C}} \\
\vec{F_{2_y}} & = 11.2375\pu{\frac{N}{C}} \\
\vec{F_{3_x}} & = -\cos\left( \arctan \frac{2}{0.8} \right) 5.8128 \approx -2.1588\pu{\frac{N}{C}} \\
\vec{F_{3_y}} & = \sin\left( \arctan \frac{2}{0.8} \right) 5.8128 \approx 5.3970\pu{\frac{N}{C}} \\
 \\
\vec{F_{r_x}} & = \vec{F_{1_x}} + \vec{F_{3_x}} = -2.0522 - 2.1588 = -4.211\pu{\frac{N}{C}} \\
\vec{F_{r_y}} & = \vec{F_{1_y}} + \vec{F_{2_y}} + \vec{F_{3_y}} = -8.2089 + 11.2375 + 5.3970 = 8.4256\pu{\frac{N}{C}} \\
\vec{F_r} & = (-4.211\hat{i} + 8.4256\hat{j})\pu{\frac{N}{C}}
\end{align}
$$

> 2. Find the electric field at (2m, 0).

$$
\begin{align}
r_1 & = 2.5\pu{m} \\
r_2 & = 2\pu{m} \\
r_3 & = 1.2\pu{m} \\
 \\
\vec{F_{1_x}} = \vec{F_1} & = \frac{k_eq_1}{r_1^2}\hat{r}_{1} \\
 & = \frac{8.99 \cdot 10^9 \cdot -4 \cdot 10^{-9}}{2.5^2}\hat{i} \\
 & = -5.7536\hat{i}\pu{\frac{N}{C}} \\
\vec{F_{2_x}} = \vec{F_2} & = \frac{k_eq_2}{r_2^2}\hat{r}_{2} \\
 & = \frac{8.99 \cdot 10^9 \cdot 5 \cdot 10^{-9}}{2^2}\hat{i} \\
 & = 11.2375\hat{i}\pu{\frac{N}{C}} \\
\vec{F_{3_x}} = \vec{F_3} & = \frac{k_eq_3}{r_3^2}\hat{r}_{3} \\
 & = \frac{8.99 \cdot 10^9 \cdot 3 \cdot 10^{-9}}{1.2^2}\hat{i} \\
 & \approx 18.7291\hat{i}\pu{\frac{N}{C}} \\
 \\
\vec{F_r} = \vec{F_{r_x}} & = \vec{F_{1_x}} + \vec{F_{2_x}} + \vec{F_{3_x}} \\
 & = -5.7536 + 11.2375 + 18.7291 \\
 & = 24.213\hat{i}\pu{\frac{N}{C}}
\end{align}
$$

> Four identical tiny beads of mass 1.00 𝑔 and with charge 𝑞 = 1.00 μ𝐶 are placed at the corners of a square of side 1.00 cm. The beads are initially at rest. They are suddenly allowed to move due to their mutual repulsion. Compute their speed once they are very far from each other.

$$
\begin{align}
E_i & = E_f \\
U_i & = K_f \\
4U_\text{side} + 2U_\text{diag} & = 4\frac{1}{2}mv^2 \\
v & = \sqrt{\frac{2 \frac{k_eq_1q_2}{r_s} + \frac{k_eq_1q_2}{r_d}}{m}} \\
 & = \sqrt{\frac{2 \frac{8.99 \cdot 10^9 \cdot 10^{-6} \cdot 10^{-6}}{0.01} + \frac{8.99 \cdot 10^9 \cdot 10^{-6} \cdot 10^{-6}}{\sqrt{0.01^2 + 0.01^2}}}{0.001}} \\
 & \approx 49.3324\pu{\frac{m}{s}}
\end{align}
$$

> A proton enters a region of uniform electric field $E = -10^4\hat{i}\pu{\frac{N}{C}}$ with an initial velocity $v_i = 10^5\hat{i}\pu{\frac{m}{s}}$. It takes the proton $5 \cdot 10^{-8}\pu{s}$ to traverse the distance d. What is d?

