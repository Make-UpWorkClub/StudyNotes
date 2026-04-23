---
tags:
  - chem
  - cegep/4
date: 2026-01-21T16:30:47
---

# Buffer

# reaction rate

$$
\mathrm{Rate} = \frac{\Delta[\text{Solute}]}{\Delta t}
$$

# Differential Rate Law

Reaction rate depending on concentration of reactants

$$
Rt = k\prod_{ i \in \text{Reactants} }[i]^{n_i}
$$

# Integrated Rate Law

Concentration of reactant in a reaction depending on time

0<sup>th</sup> order:

$$
[A] = -kt + [A_0]
$$

1<sup>st</sup> order:

$$
\begin{align}
\ln[A] & = -kt + \ln[A_0] \\
t_{\frac{1}{2}} & = \ln 2 \cdot k
\end{align}
$$

2<sup>nd</sup> order:

$$
\begin{align}
\frac{1}{[A]} & = kt + \frac{1}{[A_0]} \\
t_{\frac{1}{2}} & = \frac{1}{k[A_0]}
\end{align}
$$

# reaction mechanism

Chain of elementary reactions that make up a [[reaction]]

- Overall reaction rate is the reaction rate of the slowest step

# molecularity

Number of molecules that react in an [[reaction mechanism|elementary reaction]]

- Unimolecular
- Bimolecular
- Termolecular

# Model of Chemical Kinetics

Molecules that collide will react with: 

- Enough energy to reach activated complex (`aka.` transition state)
- Correct orientation

$$
\begin{align}
\ln k & = -\frac{E_a}{RT} + \ln A
\end{align}
$$

# reaction quotient

$$
\begin{align}
Q = \frac{\prod_{ i \ \in \text{ products} }[i]^{n_i}}{\prod_{ i \in \text{ reactants} }[i]^{n_i} }
\end{align}
$$

1. $Q = K$ -> reaction in equilibrium
2. $Q < K$ -> forward reaction
3. $Q > K$ -> reverse reaction

# 2026-02-18

> A solution is prepared by mixing 200.0 mL of $1.50 \cdot 10^{-2}\pu{M}$ Mg(NO3)2 and 200.0 mL of $1.20 \cdot 10^{-1}$ NaF. Calculate the concentrations of Mg2+ and F- at equilibrium. MgF2: Ksp = 6.4x10-9.

$$
\begin{align}
n_{Mg^{2 +}} & = 0.0150 \cdot 0.2000 = 0.003\pu{mol} \\
n_{F^-} & = 0.120 \cdot 0.2000 = 0.024\pu{mol} \\
n_{Mg^{2 +}eq} & = 0.003 - 0.003 = 0\pu{mol} \\
n_{F^-eq} & = 0.024 - 0.006 = 0.018\pu{mol} \\
[F^-] & = \frac{0.018}{0.4000} = 0.045\pu{M} \\

\end{align}
$$