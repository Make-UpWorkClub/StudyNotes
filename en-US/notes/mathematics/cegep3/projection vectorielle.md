---
tags:
  - mat/algebra
  - cegep/3
date: 2025-09-05T11:59:20
---

# projection vectorielle

Opération [[vecteur|vectorielle]]
La projection de $\vec{v}$ sur $\vec{d}$ est donnée par:

$$
\begin{align}
\mathrm{proj}_{\vec{d}}\vec{v} & = \frac{\vec{v} \cdot \vec{d}}{||\vec{d}||^2}\vec{d} = \frac{\vec{v} \cdot \vec{d}}{\vec{d} \cdot \vec{d}}\vec{d} = \frac{||\vec{v}||\cos\theta}{||\vec{d}||}\vec{d} \\
\mathrm{orth}_{\vec{d}}\vec{v} & = \vec{v} - \mathrm{proj}_{\vec{d}}\vec{v} = \vec{v} - \frac{\vec{v} \cdot \vec{d}}{||\vec{d}||^2}\vec{d}
\end{align}
$$

## Propriétés

> $\mathrm{proj}_{\vec{a}}(\vec{u} + \vec{v}) = \mathrm{proj}_{\vec{a}}\vec{u} + \mathrm{proj}_{\vec{a}}\vec{v}$

$$
\begin{align}
\mathrm{proj}_{\vec{a}}(\vec{u} + \vec{v}) & = \frac{(\vec{u} + \vec{v}) \cdot \vec{a}}{\vec{a} \cdot \vec{a}}\vec{a} \\
 & = \frac{\vec{u} \cdot \vec{a}}{\vec{a} \cdot \vec{a}}\vec{a} + \frac{\vec{v} \cdot \vec{a}}{\vec{a} \cdot \vec{a}}\vec{a} \\
 & = \mathrm{proj}_{\vec{a}}\vec{u} + \mathrm{proj}_{\vec{a}}\vec{v}
\end{align}
$$

$\square$

> $\mathrm{proj}_{\vec{v}}(\mathrm{proj}_{\vec{v}}\vec{u}) = \mathrm{proj}_{\vec{v}}\vec{u}$

$$
\begin{align}
\mathrm{proj}_{\vec{v}}(\mathrm{proj}_{\vec{v}}\vec{u}) & = \frac{\frac{\vec{u} \cdot \vec{v}}{\vec{v} \cdot \vec{v}}\cancel{\vec{v} \cdot \vec{v}}}{\cancel{\vec{v} \cdot \vec{v}}}\vec{v} \\
 & = \frac{\vec{u} \cdot \vec{v}}{\vec{v} \cdot \vec{v}}\vec{v} \\
 & = \mathrm{proj}_{\vec{v}}\vec{u}
\end{align}
$$

$\square$

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
\cos\theta = \frac{p}{||\vec{v}||} \implies p = ||\vec{v}||\cos\theta
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
\vec{BA} & = \langle -8, 4, -4 \rangle \\
\vec{BP} & = \langle -5, 4, -4 \rangle \\
 \\
\vec{BR} = \mathrm{proj}_{\vec{BA}}\vec{BP} & = \frac{\vec{BP} \cdot \vec{BA}}{\vec{BA} \cdot \vec{BA}}\vec{BA} \\
 & = 0.75 \langle -8, 4, -4 \rangle \\
 & = \langle -6, 3, -3 \rangle \\
 \\
\vec{OR} & = \vec{OB} + \vec{BR} \\
 & = \langle 6, -1, 6 \rangle + \langle -6, 3, -3 \rangle \\
 & = \langle 0, 2, 3 \rangle \\
\implies R & = (0, 2, 3)
\end{align}
$$

> Soit la droite et le plan définis respectivement par les équations
> 
> D : ⟨x, y, z⟩ = ⟨2, 5, 1⟩ + s ⟨1, −2, 3⟩ , s ∈ R
> 
> et
> 
> π : x + y + 2z = 17

> 1. Trouver une équation vectorielle de la droite qui est l’image symétrique de D par rapport au plan.

![[projection vectorielle 1]]

1. Trouver l'intersection de $D$ et $\pi$.

$$
\begin{align}
\begin{bmatrix}
1 & 0 & 0 & -1 & \bigm| & 2 \\
0 & 1 & 0 & 2 & \bigm| & 5 \\
0 & 0 & 1 & -3 & \bigm| & 1 \\
1 & 1 & 2 & 0 & \bigm| & 17
\end{bmatrix} & = \begin{bmatrix}
1 & 0 & 0 & 0 & \bigm| & \frac{18}{5} \\
0 & 1 & 0 & 0 & \bigm| & \frac{9}{5} \\
0 & 0 & 1 & 0 & \bigm| & \frac{29}{5} \\
0 & 0 & 0 & 1 & \bigm| & \frac{8}{5}
\end{bmatrix} \\
\implies \left\langle  \frac{18}{5}, \frac{9}{5}, \frac{29}{5}  \right\rangle
\end{align}
$$

2. Trouver $\vec{p}$.

$$
\begin{align}
\vec{d}_{1} & = \langle 2, 5, 1 \rangle - \left\langle  \frac{18}{5}, \frac{9}{5}, \frac{29}{5}  \right\rangle = \left\langle  -\frac{8}{5}, \frac{16}{5}, -\frac{24}{5}  \right\rangle \\
\vec{n} & = \langle 1, 1, 2 \rangle \\
 \\
\vec{p} & = \mathrm{proj}_{\vec{n}}\vec{d}_{1} \\
& = \frac{\vec{d}_{1} \cdot \vec{n}}{\vec{n} \cdot \vec{n}}\vec{n} \\
& = \left\langle  -\frac{4}{3}, -\frac{4}{3}, -\frac{8}{3}  \right\rangle
\end{align}
$$

3. Trouver $\vec{d}_{2}$.

$$
\begin{align}
\vec{d}_{2} & = \langle 2, 5, 1 \rangle - 2\left\langle  -\frac{4}{3}, -\frac{4}{3}, -\frac{8}{3}  \right\rangle - \left\langle  \frac{18}{5}, \frac{9}{5}, \frac{29}{5}  \right\rangle \\
 & = \left\langle  \frac{16}{15}, \frac{88}{15}, \frac{8}{15}  \right\rangle
\end{align}
$$

4. Écrire l'équation de la droite symétrique.

$$
D': \langle x, y, z \rangle = \left\langle  \frac{18}{5}, \frac{9}{5}, \frac{29}{5}  \right\rangle + s \left\langle  2, 11, 1  \right\rangle, \ s \in \mathbb{R}
$$

> 2. Si D représente la trajectoire d’un rayon lumineux et π un miroir, calculer l’équation de la trajectoire de la droite après qu’elle ait été reflétée par la surface du miroir.

$$
D': \langle x, y, z \rangle = \left\langle  \frac{18}{5}, \frac{9}{5}, \frac{29}{5}  \right\rangle + s \left\langle  -2, -11, -1  \right\rangle, \ s \in \mathbb{R}^*
$$