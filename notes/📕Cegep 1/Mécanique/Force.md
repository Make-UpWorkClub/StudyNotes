---
tags:
  - Cegep1
  - Mechanics
date: 2024-09-18T08:38:13
---

# Force

## Types

### ~ de contact

Donneur et receveur *sont* en contact

#### Tension

Force avec laquelle une corde tire sur un objet
Dénotée $\overset{\to}{T}$

#### ~ normale

Dénotée $\overset{\to}{n}$

#### ~ de rappel

Force d'un ressort
Dénotée $\overset{\to}{F_r}$

$$
\begin{align}
F_r & = k|l - l_n| \\
F_r & \propto |l - l_n|
\end{align}
$$

Quand $l_0 = l_n$,  $\theta = 0$ et $x_0 = 0$:

$$
\begin{align}
U_r & = ||\overset{\to}{F}||\cdot x \\
U_r & = \int_0^x kx'\cdot dx' \\
U_r & = k\left[ \frac{x'^2}{2} \right]_0^x \\
U_r & = \frac{1}{2}kx^2
\end{align}
$$

#### Friction

Force qui s'oppose au glissement relatif de deux surfaces
Dénotée $\overset{\to}{f}$
$f \propto n$

### ~ de champs

Donneur et receveur *ne sont pas* en contact

#### Gravité

$$
\begin{align}
F_g & = \frac{Gm_1m_2}{r^2} \\
G & = 6.674\dots\ \times10^{-11} \frac{Nm^2}{kg^2}
\end{align}
$$

### ~ fondamentale

Toutes les forces ont comme origine l'une des forces fondamentales:

- Gravité
- ~ électromagnétique
	- Tension
	- ~ normale
	- ~ de rappel
	- Friction
- ~ nucléaire forte
- ~ nucléaire faible

### ~ conservative

Force associée à une énergie potentielle
Dépendant du déplacement
Indépendant du travail

$$
\begin{align}
\overset{\to}{F_g},\ U_g = mgy \\
\overset{\to}{F_r},\ U_r = \frac{1}{2}kx^2
\end{align}
$$