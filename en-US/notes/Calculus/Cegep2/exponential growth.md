---
tags:
  - Calculus
  - Cegep/2
date: 2025-04-11T16:06:27
---

# Exponential Growth

Growth rate of a function $y$ such that the derivative of $y$ is proportional to $y$

$$
\begin{align}
y' & \propto y \\
y' & = ky \\
y & = y_0e^{kx}
\end{align}
$$

## Examples

> A bacteria culture starts with 500 bacteria and after 3 hours there are 8000.
>
> 1. Find the function $P(t)$ that models the population after $t$ hours.
> 2. When will the population reach 30000 bacteria?
> 3. What is the doubling time?
> 4. When will the population reach 60000?

1.

$$
\begin{align}
\frac{\mathrm{d}P}{\mathrm{d}t} & = kP(t) \\
\int \frac{1}{P} \, \mathrm{d}P & = \int k \, \mathrm{d}t \\
\ln |P| & = kt + C \\
|P| & = e^{kt + C} \\
P & = \pm e^{kt + C} \\
P > 0 \implies P & = e^{kt + C} \\
P & = e^c e^{kt} \\
 \\
500 & = e^c e^0 \\
e^c & = 500 \\
\therefore P & = 500e^{kt} \\
 \\
8000 & = 500e^{k\cdot3} \\
16 & = e^{3k} \\
k & \approx 0.924196 \\
\therefore P(t) & = 500e^{0.924196t}
\end{align}
$$

2.

$$
\begin{align}
30000 & = 500e^{0.924196t} \\
t & \approx 4.43\pu{h}
\end{align}
$$

3.

$$
\begin{align}
1000 & = 500e^{0.924196t} \\
t & \approx 0.75\pu{h}
\end{align}
$$

4.

$$
\begin{align}
P(4.43 + 0.75) & = 60000 \\
t & \approx 5.18\pu{h}
\end{align}
$$
