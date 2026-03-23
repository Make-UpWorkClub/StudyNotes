---
tags:
  - chem/reaction
  - sec/5
  - cegep/4
date: 2024-04-11 10:03
---

# Équilibre de [[Reaction|réaction]]

$$
\begin{align}
K_c & = \frac{\prod_{ i \ \in \text{Products} }[i]^{n_i} }{\prod_{ i \ \in \text{Reactants} } [i]^{n_i} } \\
K_p & = \frac{\prod_{ i \in \text{Products} }P_i^{n_i} }{\prod_{ i \in \text{Reactants} } P_i^{n_i} } \\
K_\text{backward} & = K_\text{forward}^{-1} \\
K_p & = K_c(RT)^{\Delta n}
\end{align}
$$

- $K_c$: concentration **equilibrium constant**
- $K_p$: pressure equilibrium constant (for reactions only involving gases)
- $P$: partial pressure
- $\Delta n$: difference of orders of products and reactants

If all coefficients in a chemical equation are multiplied by a constant $n$, then

$$
K' = K^n
$$

> [!tip] For small $K$, we can assume the concentration of reactant stays constant.

## Influences

> [!abstract]+ Principe de Le Chatelier
> Un système à l’équilibre résiste partiellement aux changements jusqu’à ce qu’il atteigne un nouvel équilibre.
> ![[Henry Le Chatelier.jpg|200]]

### Concentration

| Changement de la concentration d'une substance | Résistance au changement | Changement de l’équilibre |
|:----------------------------------------------:|:------------------------:|:-------------------------:|
|                       ++                       |            -             |            $s$            |
|                       --                       |            +             |            $s$            |
#TODO
### Énergie

| Changement de l'énergie | Résistance au changement |                                                                                            Changement de l’équilibre                                                                                             |
|:-------------------------:|:------------------------:|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
|            ++             |            -             | $\begin{align}\downarrow A_{(g)} + \downarrow B &\to\ \uparrow C + \uparrow D \\ \uparrow A_{(g)} + \uparrow B &\to\ \downarrow 4C_{(g)} + \downarrow D \\ =A_{(g)} + =3B_{(g)} &\to\ =4C_{(g)} + =D\end{align}$ |
|            --             |            +             | $\begin{align}\uparrow A_{(g)} + \uparrow B &\to\ \downarrow C + \downarrow D \\ \downarrow A_{(g)} + \downarrow B &\to\ \uparrow 4C_{(g)} + \uparrow D \\ =A_{(g)} + =3B_{(g)} &\to\ =4C_{(g)} + =D\end{align}$ |

### Pression

| Changement de la pression | Résistance au changement |                                                                                            Changement de l’équilibre                                                                                             |
|:-------------------------:|:----------:|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
|            ++             |     -      | $\begin{align}\downarrow A_{(g)} + \downarrow B &\to\ \uparrow C + \uparrow D \\ \uparrow A_{(g)} + \uparrow B &\to\ \downarrow 4C_{(g)} + \downarrow D \\ =A_{(g)} + =3B_{(g)} &\to\ =4C_{(g)} + =D\end{align}$ |
|            --             |     +      | $\begin{align}\uparrow A_{(g)} + \uparrow B &\to\ \downarrow C + \downarrow D \\ \downarrow A_{(g)} + \downarrow B &\to\ \uparrow 4C_{(g)} + \uparrow D \\ =A_{(g)} + =3B_{(g)} &\to\ =4C_{(g)} + =D\end{align}$ |

Selon la loi générale de gaz, la pression *peut* être directement proportionnelle à la température et à la concentration (car elle *peut* être inversement proportionnelle au volume et $C = \cfrac{n}{v}$).