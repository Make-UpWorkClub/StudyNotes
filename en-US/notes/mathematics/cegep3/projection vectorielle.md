---
tags:
  - algebra/linear
  - cegep/3
date: 2025-09-05T11:59:20
---

# projection vectorielle

Opération [[vecteur|vectorielle]]
La projection de $\vec{v}$ sur $\vec{d}$ est donnée par:

$$
\begin{align}
proj_{\vec{d}}\vec{v} & = \frac{\vec{v} \cdot \vec{d}}{||\vec{d}||^2}\vec{d} = \frac{\vec{v} \cdot \vec{d}}{\vec{d} \cdot \vec{d}}\vec{d} \\
orth_{\vec{d}}\vec{v} & = \vec{v} - proj_{\vec{d}}\vec{v} = \vec{v} - \frac{\vec{v} \cdot \vec{d}}{||\vec{d}||^2}\vec{d}
\end{align}
$$

## Propriétés

### Théorème de projection

> Soit $\vec{v} \in \mathbb{R}^n$ et $\vec{d} \in \mathbb{R}^n$,
> 
> $$
> \begin{align}
> \exists \vec{a} & = \frac{\vec{v} \cdot \vec{d}}{||\vec{d}||} \frac{\vec{d}}{||\vec{d}||} & \parallel \vec{d} \\
> \vec{b} & = \vec{v} - \vec{a} & \perp \vec{d}
> \end{align}
> $$

![[preuve de projection]]

Selon la définition de $\cos\theta$,

$$
\cos\theta = \frac{\vec{p}}{||\vec{v}||} \implies p = ||\vec{v}||\cos\theta
$$

Soit $\vec{e} = \frac{\vec{d}}{||\vec{d}||}$,

$$
\begin{align}
\implies p & = ||\vec{v}||\ ||\vec{e}||\cos\theta \\
 & = \vec{v} \cdot \vec{e} \\
 & = \frac{\vec{v} \cdot \vec{d}}{||\vec{d}||}
\end{align}
$$

Puisque $\vec{a}\parallel\vec{d}$ et $||\vec{a}|| = p$,

$$
\vec{a} = p \frac{\vec{d}}{||\vec{d}||} = \frac{\vec{v} \cdot \vec{d}}{||\vec{d}||} \frac{\vec{d}}{||\vec{d}||}
$$

Pour vérifier que $\vec{a}\perp \vec{b}$,

$$
\begin{align}
\vec{a} \cdot \vec{b} & = \vec{a} \cdot(\vec{v} - \vec{a}) \\
 & = \vec{a} \cdot \vec{v} - \vec{a} \cdot \vec{a} \\
 & = \vec{a} \cdot \vec{v} - \vec{a} \cdot \vec{a} \\
 & = \left( \frac{\vec{v} \cdot \vec{d}}{||\vec{d}||^2}\vec{d} \right) \cdot \vec{v} - \left( \frac{\vec{v} \cdot \vec{d}}{||\vec{d}||^2}\vec{d} \right) \cdot \left( \frac{\vec{v} \cdot \vec{d}}{||\vec{d}||^2}\vec{d} \right) \\
 & = \frac{(\vec{v} \cdot \vec{d})^2}{||\vec{d}||^2} - \frac{(\vec{v} \cdot \vec{d})^2}{||\vec{d}||^4}(\vec{d} \cdot \vec{d}) \\
 & = \frac{(\vec{v} \cdot \vec{d})^2}{||\vec{d}||^2} - \frac{(\vec{v} \cdot \vec{d})^2}{||\vec{d}||^2} \\
 & = 0
\end{align}
$$

$\square$

## Exemples

> Soit $A(-2, 3, 2), \ B(6, -1, 6), \ P(1, 3, 2), R$ et que $AB\perp PR$, trouver les coordonnées de $R$.

$$
\begin{align}
\vec{BA} & = < -8, 4, -4 > \\
\vec{BP} & = < -5, 4, -4 > \\
 \\
\vec{BR} = proj_{\vec{BA}}\vec{BP} & = \frac{\vec{BP} \cdot \vec{BA}}{\vec{BA} \cdot \vec{BA}}\vec{BA} \\
 & = 0.75 < -8, 4, -4 > \\
 & = < -6, 3, -3 > \\
 \\
\vec{OR} & = \vec{OB} + \vec{BR} \\
 & = < 6, -1, 6 > + < -6, 3, -3 > \\
 & = < 0, 2, 3 > \\
\implies R & = (0, 2, 3)
\end{align}
$$