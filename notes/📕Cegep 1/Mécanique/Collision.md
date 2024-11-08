---
tags:
  - Cegep1
  - Mechanics
date: 2024-11-06T09:00:16
---

# Collision

## Types

### Élastique

Collision où $\sum K$ est conservée

$$
\sum p_{i} = \sum p_{f}
$$

Dans une collision entre A (en mouvement) et B immobile où A devient immobile,

$$
v_{f_B} = \frac{m_A}{m_B}v_{i_A}
$$

### Inélastique

Collision où $\sum K$ n'est pas conservée (il y a un travail)

### Totalement inélastique

Collision où les objets restent collés après la collision

## Exemples

![[Collision 1]]

$$
\begin{align}
m_A & = 0.5\mathrm{kg} \\
m_B & = 1\mathrm{kg}
\end{align}
$$

$$
\begin{align}
v_{B_{i_x}} & = -4\cos30° & = -3.464\dots \mathrm{m/s} \\
v_{B_{i_y}} & = -4\sin 30° & = -2\mathrm{m/s}
\end{align}
$$

En $x$ :

$$
\begin{align}
\sum p_{i_x} & =\sum p_{f_x} \\
m_Av_{A_{i_x}} + m_Bv_{B_{i_x}} & = m_Av_{A_{f_x}} + m_Bv_{B_{f_x}} \\
0.5\cdot5 + 1\cdot - 3.464\dots & = 0 + 1v_{B_{f_x}} \\
v_{B_{f_x}} & = -0.9641\dots \mathrm{m/s}
\end{align}
$$

En $y$ :

$$
\begin{align}
\sum p_{i_y} & = \sum p_{f_y} \\
m_Av_{A_{i_y}} + m_Bv_{B_{i_y}} & = m_Av_{A_{f_y}} + m_Bv_{B_{f_y}} \\
0 + 1\cdot - 2 & = 0.5*-4 + 1\cdot v_{B_{f_y}} \\
v_{B_{f_y}} & = 0\mathrm{m/s}
\end{align}
$$