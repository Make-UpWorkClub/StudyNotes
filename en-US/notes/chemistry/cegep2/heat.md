---
tags:
  - chem/reaction
  - cegep/2
date: 2025-05-23T01:43:54
---

# Heat

Flow of thermal [[énergie|energy]] from a hot object to a colder object
`Sym.` $q$

$$
q = ms\Delta T\text{ where }s = \text{specific heat capacity}
$$

At constant *pressure*:

$$
\begin{align}
q_P & = \Delta E + P\Delta V = \Delta E + RT\Delta n_g \\
q_{rxn} & = -(\underbrace{q_{cal}}_{\approx 0} + q_{sol}) = -m_{sol}s_{sol}\Delta T
\end{align}
$$

At constant *volume*:

$$
\begin{align}
q_V & = \Delta E \\
q_{rxn} & = -(q_{cal} + q_{water}) = -(C_{cal}\Delta T + m_{H_2O}s_{H_2O}\Delta T) = -(C_{cal} + m_{H_2O}s_{H_2O})\Delta T
\end{align}
$$

> [!info] $1\pu{cal} = 4.184\pu{J}$

## Examples

> 1.435 𝑔 of naphthalene (𝐶10𝐻8) was burned in a bomb calorimeter. Consequently, the temperature of the water rose from 20.17 °𝐶 to 25.84 °𝐶. If the mass of water surrounding the calorimeter was exactly 2000 𝑔 and the heat capacity of the bomb calorimeter was 1.80 𝑘𝐽 °𝐶 , calculate $\Delta E_{rxn}$ of combustion of naphthalene.

$$
\Delta E_{rxn} = q_{V} = -\left( 1.80\pu{kJ°C} + 2000\pu{g}\cdot4.184\pu{\frac{J}{g°C}}\cdot \frac{1\pu{kJ}}{1000J} \right)(25.84°C - 20.17°C) \approx -57.6526\pu{kJ}
$$

> 0.500 𝑔 of magnesium and 100.0 𝑚𝐿 of 1.00 𝑀 𝐻𝐶𝑙 are placed in a coffee-cup calorimeter. The temperature of the solution increases from 22.2 °𝐶 to 44.8 °𝐶 . What is the enthalpy change for this reaction per mole of 𝑀𝑔? (assume the specific heat capacity of the solution is 4.20 $\frac{J}{gK}$ and the density of 𝐻𝐶𝑙 is 1.0 $\pu{\frac{g}{mL}}$). Assume that the heat capacity of the Styrofoam cup is negligible.

$$
\Delta H = q_P = -\left( 100.0\pu{mL}\cdot 1.0\pu{\frac{g}{mL}} + 0.500\pu{g} \right)4.20\pu{\frac{J}{gK}}(44.8\pu{°C} - 22.2\pu{°C}) = 9539.46\pu{J}
$$