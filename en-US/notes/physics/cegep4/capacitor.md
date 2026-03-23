---
tags:
  - phys/elec
  - cegep/4
date: 2026-02-24T11:12:20
---

# capacitor

Two equally but oppositely charged electrodes that are close but not touching

- Creates potential difference between the electrodes
- Stores charge

$$
U = \frac{1}{2}C\Delta V^2
$$

![[assets/img/capacitor]]

## In series

$$
\begin{align} \\
Q_{eq} & = Q_1 = \dots = Q_n \\
\Delta V_{eq} & = \sum_{ i }\Delta V_i \\ 
C_{eq} & = \left( \sum_{ i } C_i^{-1}  \right)^{-1}
\end{align}
$$

## In parallel

$$
\begin{align} \\
Q_{eq} & = \sum_{ i }Q_i \\
\Delta V_{eq} & = \Delta V_1 = \dots = \Delta V_n \\
C_{eq} & = \sum_{ i }C_i 
\end{align}
$$

## Examples

> A $12\pu{V}$ battery is connected to a $3\pu{\mu F}$ capacitor which is connected to a $5\pu{\mu F}$ capacitor and a $1\pu{\mu F}$ capacitor in parallel.

> 1. Find the equivalent capacitance.

$$
C_{eq} = \left( 3^{-1} + (5 + 1)^{-1} \right)^{-1} = 2\pu{\mu F}
$$

> 2. Find the charge and the potential difference across each capacitor.

$$
\begin{align} \\
Q_1 & = Q_2 + Q_3 \\
\Delta V_2 & = \Delta V_3 \\
 \\
Q_1 = Q_{eq} & = C_{eq}\Delta V_{eq} \\
 & = 2 \cdot 12 \\
 & = 24\pu{\mu C} \\
\\
\Delta V_1 & = \frac{Q_1}{C_1} \\
 & = \frac{24}{3} \\
 & = 8\pu{V} \\
\\
\Delta V_2 = \Delta V_3 & = \Delta V_{eq} - \Delta V_1 \\
 & = 12 - 8 \\
 & = 4\pu{V} \\
 \\
Q_2 & = C_2\Delta V_2 \\
 & = 5 \cdot 4 \\
 & = 20\pu{\mu C} \\
 \\
Q_3 & = C_3\Delta V_3 \\
 & = 1 \cdot 4 \\
 & = 4\pu{\mu C}
\end{align}
$$