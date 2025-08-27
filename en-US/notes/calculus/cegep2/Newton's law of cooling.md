---
tags:
  - Calculus
  - cegep/2
date: 2025-04-23T15:18:48
---

# Newton's Law of Cooling

The cooling rate of an object is proportional to the difference between the temperature of the object and the ambient temperature.

$$
\begin{align}
\frac{\mathrm{d}T}{\mathrm{d}t} & \propto T - T_s \\
\frac{\mathrm{d}T}{\mathrm{d}t} & = k(T - T_s)
\end{align}
$$

## Examples

> A pizza is removed from the oven after baking thoroughly, and the temperature of the oven is 350°𝐹. The temperature of the kitchen is 75°𝐹, and after 5 minutes the temperature of the pizza is 340°𝐹. We would like to wait until the temperature of the pizza reaches 300°𝐹 before cutting and serving it.

 > 1. Set up the differential equation and the initial value problem modelling the temperature of the pizza.

We know that

$$
\begin{align}
T_s & = 75 \\
T(0) & = 350
\end{align}
$$

We want to solve $\frac{\mathrm{d}T}{\mathrm{d}t} = k(T - 75)$ given initial value $T(0) = 350$.

> 2. Solve the differential equation to find the function 𝑇(𝑡).

$$
\begin{align} \\
\frac{\mathrm{d}T}{\mathrm{d}t} & = k(T - 75) \\
\int \frac{1}{T - 75} \, \mathrm{d}T & = \int k \, \mathrm{d}t \\
\ln(T - 75) & = kt + C \\
T & = e^{kt + C} + 75
\end{align}
$$

Substitute in $(0, 350)$ to find $C$:

$$
\begin{align}
350 & = e^{k\cdot0 + C} + 75 \\
C & = \ln275
\end{align}
$$

Substitute in $(5, 340)$ to find $k$:

$$
\begin{align}
340 & = e^{5k + \ln275} + 75 \\
5k + \ln275 & = \ln265 \\
k & = \frac{\ln265 - \ln275}{5} \\
k & = \frac{1}{5}\ln \frac{53}{55} \\
 \\
\therefore T(t) & = e^{\frac{1}{5}\ln \frac{53}{55}t + \ln275} + 75 \\
\end{align}
$$

> 3. How much longer will we need to wait before the pizza reaches a temperature of 300°𝐹?

$$
\begin{align}
300 & = e^{\frac{1}{5}\ln \frac{53}{55}t + \ln275} + 75 \\
\frac{1}{5}\ln \frac{53}{55}t + \ln275 & = \ln225 \\
t & = \frac{\ln225 - \ln275}{\frac{1}{5}\ln \frac{53}{55}} \\
 & = 5 \frac{\ln \frac{9}{11}}{\ln \frac{53}{55}} \\
 & \approx 27.0874\pu{min}
\end{align}
$$
