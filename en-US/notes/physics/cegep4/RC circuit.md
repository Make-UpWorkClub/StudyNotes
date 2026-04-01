---
tags:
  - phys/elec
  - cegep/4
date: 2026-03-27T10:53:09
---

# RC circuit

[[Circuit]] with both resistors and [[capacitor|capacitors]]
Slow charge of capacitor over time

- Uncharged capacitor has voltage of 0
- Charged capacitor has current of 0

$$
\begin{align}
\Delta V_{bat} + \Delta V_R + \Delta V_C & = 0 \\
\epsilon - RI - \frac{Q}{C} & = 0
\end{align}
$$

Charging:

$$
\begin{align}
Q(t) & = Q_{\text{max}}\left( 1 - e^{-\frac{t}{\tau}} \right) \\
I(t) & = I_oe^{-\frac{t}{\tau}}
\end{align}
$$

Discharging:

$$
\begin{align}
Q(t) & = Q_\text{0}e^{-\frac{t}{\tau}} \\
I(t) & = I_0e^{-\frac{t}{\tau}}
\end{align}
$$

- $\tau = RC$: **time constant**
	- $[\tau] = \pu{s}$
	- Higher time constant = slower charge

## Examples

> Consider a series RC circuit for which 𝐶 = 5 μF, 𝑅 = 4 MΩ and the emf is 𝜀 = 10 𝑉. The charging of the capacitor begins at 𝑡 = 0 s.

> 1. Determine the time constant of the circuit.

$$
\tau = RC = 4 \cdot 5 = 20\pu{s}
$$

> 2. What is the maximum charge on the capacitor after the switch is closed?

$$
\begin{align}
\Delta V & = \Delta V_\text{eq} = 10\pu{V} \\
Q_{\text{max}} & = C\Delta V = 5 \cdot 10 = 50\pu{\mu C}
\end{align}
$$

> 3. What is the charge on the capacitor at 𝑡 = 10 𝑠?

$$
Q(10) = Q_\text{max}\left( 1 - e^{-\frac{10}{\tau}} \right) = 50\left( 1 - e^{-\frac{10}{20}} \right) \approx 19.6734\pu{\mu C}
$$

> 4. What is the potential difference across the capacitor at 𝑡 = 10 𝑠?

$$
\Delta V = \frac{Q}{C} = \frac{19.6734}{5}\approx 3.9346\pu{V} 
$$

> Consider the RC circuit shown here. The switch is initially closed.
> 
> ![[RC circuit 1.png|300]]

> 1. What will be the total charge on the capacitor after a long time?

$$
\begin{align}
R_{eq} & = R_1 + R_2 = 300 + 500 = 800\Omega \\
I_{T} & = \frac{\Delta V_T}{R_{eq}} = \frac{24}{800} = 0.03\pu{A} \\
I_2 & = I_T - I_3 = 0.03 - 0 = 0.03\pu{A} \\
\Delta V_2 & = RI = 500 \cdot 0.03 = 15\pu{V} \\
\Delta V_3 & = RI = 200 \cdot 0 = 0\pu{V} \\
\Delta V_C & = \Delta V_2 - \Delta V_3 = 15 - 0 = 15\pu{V} \\
Q & = C\Delta V = 60 \cdot 15 = 900\pu{\mu C}
\end{align}
$$

> 2. Once the capacitor has been fully charged, at time 𝑡 = 0, the switch is opened. At what time will the charge on the capacitor be 75% of its initial value?

$$
\begin{align}
Q(t) & = 75\%Q_0 = 75\%900 = 675\pu{\mu C} \\
R_\text{eq} & = R_2 + R_3 = 500 + 200 = 700\Omega \\
\tau & = RC = 700 \cdot 60 = 0.042\pu{s} \\
 \\
Q(t) & = Q_0e^{-\frac{t}{\tau}} \\
675 & = 900e^{-\frac{t}{0.042}} \\
t & \approx 0.03778\pu{s}
\end{align}
$$