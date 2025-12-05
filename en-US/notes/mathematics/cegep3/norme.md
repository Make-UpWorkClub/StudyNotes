---
tags:
  - mat/algebra
  - cegep/3
date: 2025-09-05T10:55:49
---

# norme

Opération [[vecteur|vectorielle]]
Soit $\vec{v} \in \mathbb{R}^n$,

$$
||\vec{v}|| = \sqrt{v_1^2 + v_2^2 + v_3^2 +\dots v_n^2} = \sqrt{\sum_{ i = 1 }^{ n } v_i^2}
$$

## Propriétés

> $||k\vec{v}|| = |k|\cdot||\vec{v}||$

> $\frac{\vec{v}}{||\vec{v}||}$ est unitaire.

> $$
> ||\vec{u} + \vec{v}||^2 = ||\vec{u}||^2 + ||\vec{v}||^2 + 2\vec{u} \cdot \vec{v}
> $$

De la loi de cosinus :

$$
\begin{align}
||\vec{u} + \vec{v}||^2 & = ||\vec{u}||^2 + ||\vec{v}||^2 + 2||\vec{u}||\ ||\vec{v}||\cos\theta \\
 & = ||\vec{u}||^2 + ||\vec{v}||^2 + 2\vec{u} \cdot \vec{v} \because \vec{u} \cdot \vec{v} = ||\vec{u}||\ ||\vec{v}||\cos\theta
\end{align}
$$

$\square$

## Exemples

> $\vec{v} = \langle 1, 2, 5 \rangle, \ \vec{w} = \langle -3, 5, - 2 \rangle$

> 1. Évaluer $||\vec{v} - 2\vec{w}||$.

$$
\begin{align}
||\vec{v} - 2\vec{w}|| & = || \langle 1 - 2(-3), 2 - 2(5), 5 - 2(-2) \rangle || \\
 & = \sqrt{7^2 + (-8)^2 + 9^2} \\
 & = 194
\end{align}
$$

> 2. Trouver un vecteur unitaire dans la même direction que $\vec{v}$.

$$
\begin{align}
||\vec{v}|| & = \sqrt{1^2 + 2^2 + 5^2} \\
 & = \sqrt{30} \\
 \\
\frac{\vec{v}}{||\vec{v}||} & = \left\langle \frac{\sqrt{30}}{30}, \frac{\sqrt{30}}{15}, \frac{\sqrt{30}}{6} \right\rangle
\end{align}
$$

> 3. Trouver un vecteur de longueur 12 qui pointe dans la direction opposée à $\vec{w}$.

$$
\begin{align}
||\vec{w}|| & = \sqrt{(-3)^2 + 5^2 + (-2)^2} \\
 & = \sqrt{38} \\
 \\
-\frac{12\vec{w}}{||\vec{w}||} & = \left\langle \frac{18\sqrt{38}}{19}, - \frac{30\sqrt{38}}{19}, \frac{12\sqrt{38}}{19} \right\rangle
\end{align}
$$

> Soit $P = (1, 1, 2)$ et $Q = (8, 15, - 12)$, trouver le point $S$ entre $P$ et $Q$ et à une distance de 3 de $P$.

$$
\begin{align}
3 & = ||\vec{PS}|| \\
 & = ||x \vec{PQ}|| \\
 & = \sqrt{(7x)^2 + (14x)^2 + (-14x)^2} \\
 & = \pm21x \\
x & = \frac{\pm1}{7}
\end{align}
$$

Puisque $\vec{PS}$ et $\vec{PQ}$ pointent dans la même direction, $x$ et positif.

$$
\begin{align}
\vec{PS} & = x \vec{PQ} \\
 & = \langle 1, 2, -2 \rangle \\
 \\
\vec{OS} & = \vec{OP} + \vec{PS} \\
 & = \langle 2, 3, 0 \rangle \\
\implies S & = (2, 3, 0)
\end{align}
$$

> Étant donné que $||\vec{u} + \vec{v}|| = 5$, $||\vec{u}|| = 4$ et $||\vec{v}|| = 2$, trouver $\vec{u} \cdot \vec{v}$.

$$
\begin{align}
||\vec{u} + \vec{v}||^2 & = ||\vec{u}||^2 + ||\vec{v}||^2 + 2\vec{u} \cdot \vec{v} \\
5^2 & = 4^2 + 2^2 + 2\vec{u} \cdot \vec{v} \\
\vec{u} \cdot \vec{v} & = \frac{5}{2}
\end{align}
$$

> Soit $\vec{a}$ et $\vec{b}$ des vecteurs unitaires qui forment un angle de 120°. Trouver $||2\vec{a} - \vec{b}||$.

Soit $\vec{c} = -\vec{b}$, alors l'angle entre $\vec{a}$ et $\vec{c}$ est $180°-120°= 60°$.

$$
\begin{align}
||2\vec{a} - \vec{b}|| = ||2\vec{a} + \vec{c}|| & = \sqrt{||2\vec{a}||^2 + ||\vec{c}||^2 + 2||2\vec{a}||\ ||\vec{c}||\cos\theta} \\
 & = \sqrt{2^2 + 1^2 + 2 \cdot 2 \cdot 1\cos60°} \\
 & = \sqrt{7}
\end{align}
$$