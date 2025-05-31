---
tags:
  - Chem/Molecule
  - Cegep/2
date: 2025-02-06T15:36:20
---

# Empirical Formula

Simplest whole number ratio between elements in a molecule
`Syn.` simple formula

> [!example] Empirical formula of $C_4H_8O_2$ is $C_2H_4O$.

## Evaluation

To find the empirical formula of an unknown reagent knowing the products:

- If there's a common element between the reagent and multiple products:
	1. For each element shared only by the reagent and one product, find quantity and mass
	2. Find mass of last element in the reagent by subtraction
	3. Convert mass to quantity
 - Otherwise:
	1. For each element shared only by the reagent and one product, find quantity
2. Divide moles by the smallest number of moles
3. Optionally multiply and round to obtain integer values

## Examples

> Butanoic acid consists entirely of 𝐶, 𝐻 and 𝑂. Combustion analysis of a 0.3164 𝑔 sample of liquid butanoic acid yielded 0.6322 𝑔 𝐶𝑂2 and 0.2588 𝑔 𝐻2𝑂 at 25 ℃. A separate experiment showed that the molar mass of butanoic acid is 88.1051 𝑔/𝑚𝑜𝑙. Determine the empirical formula of butanoic acid.

$$
\begin{align}
MM_{\ce{CO_2}} & \approx 44.009\pu{\frac{g}{mol}} \\
MM_{\ce{H_2O}} & \approx 18.015\pu{\frac{g}{mol}} \\
n_{\ce{C}} & = \frac{0.6322\pu{g}}{44.009\pu{\frac{g}{mol\ce{CO_2}}}} \cdot \frac{1\pu{mol\ce{C}}}{1\pu{mol\ce{CO_2}}} \approx 0.01437\pu{mol\ce{C}} \\
n_{\ce{H}} & = \frac{0.2588\pu{g}}{18.015\pu{\frac{g}{mol\ce{H_2O}}}} \cdot \frac{2\pu{mol\ce{H}}}{1\pu{mol\ce{H_2O}}}\approx 0.02873\pu{mol\ce{H}} \\
n_{\ce{O}} & = \frac{0.3164\pu{g} - 12.011\pu{\frac{g}{mol\ce{C}}} \cdot 0.01437\pu{mol\ce{C}} - 1.008\pu{\frac{g}{mol\ce{H}}} \cdot 0.02873\pu{mol\ce{H}}}{15.999\pu{\frac{g}{mol\ce{C}}}}\approx 0.007182\pu{mol\ce{O}} \\
 \\
\frac{0.01437\pu{mol\ce{C}}}{0.007182\pu{mol\ce{O}}} & \approx \frac{2\ce{C}}{1\ce{O}} \\
\frac{0.02873\pu{mol\ce{H}}}{0.007182\pu{mol\ce{O}}} & \approx \frac{4\ce{H}}{1\ce{O}}
\end{align}
$$

The empirical formula of butanoic acid is $\ce{C_2H_4O}$.
