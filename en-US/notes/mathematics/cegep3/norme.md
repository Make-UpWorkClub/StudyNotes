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

> $k\vec{v} = |k|\cdot||\vec{v}||$

> $\frac{\vec{v}}{||\vec{v}||}$ est unitaire.

## Exemples

> $\vec{v} = < 1, 2, 5 >, \ \vec{w} = < -3, 5, - 2 >$

> 1. Évaluer $||\vec{v} - 2\vec{w}||$.

$$
\begin{align}
||\vec{v} - 2\vec{w}|| & = || < 1 - 2(-3), 2 - 2(5), 5 - 2(-2) > || \\
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
\frac{\vec{v}}{||\vec{v}||} & = < \frac{\sqrt{30}}{30}, \frac{\sqrt{30}}{15}, \frac{\sqrt{30}}{6} >
\end{align}
$$

> 3. Trouver un vecteur de longueur 12 qui pointe dans la direction opposée à $\vec{w}$.

$$
\begin{align}
||\vec{w}|| & = \sqrt{(-3)^2 + 5^2 + (-2)^2} \\
 & = \sqrt{38} \\
 \\
-\frac{12\vec{w}}{||\vec{w}||} & = < \frac{18\sqrt{38}}{19}, - \frac{30\sqrt{38}}{19}, \frac{12\sqrt{38}}{19} >
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
 & = < 1, 2, -2 > \\
 \\
\vec{OS} & = \vec{OP} + \vec{PS} \\
 & = < 2, 3, 0 > \\
\implies S & = (2, 3, 0)
\end{align}
$$