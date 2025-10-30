---
tags:
  - mat/algebra
  - cegep/3
date: 2025-09-05T10:47:37
---

# multiplication & division vectorielle scalaire

Opération [[vecteur|vectorielle]]
Soit $\vec{v}, \vec{w} \in \mathbb{R}^n, \ k \in \mathbb{R}$,

$$
\begin{align}
k\vec{v} & = < kv_1, \ kv_2, \ \dots kv_n > \\
\frac{\vec{v}}{k} & = < \frac{v_1}{k}, \ \frac{v_2}{k}, \ \dots \frac{v_n}{k} >
\end{align}
$$

## Propriétés

### Distributivité sur somme de scalaires

> $(a \pm b)\vec{v} = a\vec{v} \pm b\vec{v}$

$$
\begin{align}
(a + b)\vec{v} & = <(a + b)v_1,(a + b)v_2,\dots(a + b)v_n > \\
 & = < av_1 + bv_1, av_2 + bv_2,\dots av_3 + bv_n > \\
 & = < av_1, av_2,\dots av_n > + < bv_1, bv_2,\dots bv_n > \\
 & = a\vec{v} + b\vec{v}
\end{align}
$$

$\square$

### Distributivité sur somme de vecteurs

> $a(\vec{v} \pm \vec{w}) = a\vec{v} \pm a\vec{w}$ & $\frac{\vec{v} \pm \vec{w}}{a} = \frac{\vec{v}}{a} \pm \frac{\vec{w}}{a}$

$$
\begin{align}
a(\vec{v} + \vec{w}) & = a < v_1 + w_1, v_2 + w_2,\dots v_n + w_n > \\
 & = < a(v_1 + w_1), a(v_2 + w_2),\dots a(v_n + w_n) > \\
 & = < av_1 + aw_1, av_2 + aw_2,\dots av_n + aw_n > \\
 & = < av_1, av_2,\dots av_n > + < aw_1, aw_2,\dots aw_n > \\
 & = a\vec{v} + a\vec{w}
\end{align}
$$

$\square$

### Parallélisme

$\vec{v} \parallel \vec{w}$ si $\exists k\in \mathbb{R}$ telle que

$$
\vec{v} = k\vec{w}
$$

> [!example]+ Déterminer si $\vec{v} = < 1, 4, 1 >$ et $\vec{w} = < -3, 12, - 3 >$ sont parallèles.
> $$
> \begin{align}
v_1 & = -\frac{1}{3}w_1 \\
v_2 & = \frac{1}{3}w_2 \\
\implies \vec{v} & \nparallel \vec{w}
\end{align}
> $$

## Exemples

> Soit $P = (1, 1, 2)$ et $Q = (8, 15, - 12)$, trouver le point $R$ situé au $\frac{2}{7}$ du chemin entre $P$ et $Q$.

$$
\begin{align}
\vec{PQ} & = < 8 - 1, 15 - 1, -12 - 2 > \\
 & = < 7, 14, -14 > \\
 \\
\vec{PR} & = \frac{2}{7}\vec{PQ} \\
 & = < 2, 4, -4 > \\
 \\
\vec{OR} & = \vec{OP} + \vec{PR} \\
 & = < 3, 5, -2 > \\
\implies R & = (3, 5, -2)
\end{align}
$$