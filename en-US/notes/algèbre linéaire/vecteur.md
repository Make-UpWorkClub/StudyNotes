---
tags:
  - algebra/linear
  - cegep/2
date: 2025-08-19T12:50:16
---

# vecteur

Flèche avec longueur (magnitude) & direction
**Sans position**

---

Algébriquement, un vecteur $\vec{v}\in \mathbb{R}^n$ est une liste

$$
\vec{v} = < v_1, v_2, v_3,\dots v_n > = \begin{bmatrix}
v_1 \\
v_2 \\
v_3 \\
\vdots \\
v_n
\end{bmatrix}
$$

où $v_1, v_2, v_3,\dots v_n \in \mathbb{R}$

$n$ est la **dimension** de $\vec{v}$.

> [!abstract]+ vecteur nul
> Le vecteur nul dans $\mathbb{R}^n$ est
> 
> $$
> \vec{0} = \underbrace{< 0, 0, \dots0 >}_{n}
> $$

> [!abstract]+ vecteur unitaire
> Vecteur dont la longueur est 1

---

Le vecteur entre deux points $A$ et $B$ est

$$
\vec{AB} = < B_1 - A_1, B_2 - A_2,\dots B_n - A_n >
$$

> [!abstract]+ vecteur position
> Le vecteur position du point $P\in \mathbb{R}^n$ est
> 
> $$
> \vec{OP} = < P_1, P_2,\dots P_n >
> $$

## Opérations

Soit $\vec{u}, \vec{v}, \vec{w}\in \mathbb{R}^n$.

### Addition / soustraction

$$
\begin{align}
\vec{v} \pm \vec{w} & = < v_1 \pm w_1,\ v_2 \pm w_2, \ \dots v_n \pm w_n >
\end{align}
$$

> $\vec{AB} = \vec{OB} - \vec{OA}$

> $\vec{AB} + \vec{BC} = \vec{AC}$

$$
\begin{align}
\vec{AB} + \vec{BC} & = (\vec{OB} - \vec{OA}) + (\vec{OC} + \vec{OB}) \\
 & = \vec{OC} - \vec{OA} \\
 & = \vec{AC}
\end{align}
$$

#### Commutativité

> $\vec{v} \pm \vec{w} = \vec{w} \pm \vec{v}$

#### Associativité

> $(\vec{u} \pm \vec{v}) + \vec{w} = \vec{u} + (\vec{v} + \vec{w})$

### Multiplication / division scalaire

$$
\begin{align}
k & \in \mathbb{R} \\
\implies k\vec{v} & = < kv_1, \ kv_2, \ \dots kv_n > \\
\implies \frac{\vec{v}}{k} & = < \frac{v_1}{k}, \ \frac{v_2}{k}, \ \dots \frac{v_n}{k} >
\end{align}
$$

#### Distributivité sur somme de scalaires

> $(a \pm b)\vec{u} = a\vec{u} \pm b\vec{u}$

$$
\begin{align}
(a + b)\vec{u} & = <(a + b)u_1,(a + b)u_2,\dots(a + b)u_n > \\
 & = < au_1 + bu_1, au_2 + bu_2,\dots au_3 + bu_n > \\
 & = < au_1, au_2,\dots au_n > + < bu_1, bu_2,\dots bu_n > \\
 & = a\vec{u} + b\vec{u}
\end{align}
$$

$\square$

#### Distributivité sur somme de vecteurs

> $a(\vec{u} \pm \vec{v}) = a\vec{u} \pm a\vec{v}$ & $\frac{\vec{u} \pm \vec{v}}{a} = \frac{\vec{u}}{a} \pm \frac{\vec{v}}{a}$

$$
\begin{align}
a(\vec{u} + \vec{v}) & = a < u_1 + v_1, u_2 + v_2,\dots u_n + v_n > \\
 & = < a(u_1 + v_1), a(u_2 + v_2),\dots a(u_n + v_n) > \\
 & = < au_1 + av_1, au_2 + av_2,\dots au_n + av_n > \\
 & = < au_1, au_2,\dots au_n > + < av_1, av_2,\dots av_n > \\
 & = a\vec{u} + a\vec{v}
\end{align}
$$

$\square$

#### Parallélisme

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

### Inverse

$$
-\vec{v} = -1\cdot \vec{v}
$$

Renverse l'orientation

> $\forall \vec{u}\in \mathbb{R}^n, \exists \vec{e}\in \mathbb{R}^n$ tel que $\vec{u} + \vec{e} = \vec{0}$.

### Longueur

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