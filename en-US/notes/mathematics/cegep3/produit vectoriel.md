---
tags:
  - mat/algebra
  - cegep/3
date: 2025-09-09T12:02:58
---

# produit vectoriel

Opération [[vecteur|vectorielle]]
Soit $\vec{v}, \ \vec{w} \in \mathbb{R}^3$,

$$
\begin{align}
\vec{v}\times \vec{w} & = \begin{bmatrix}
v_2w_3 - w_2v_3 \\
v_3w_1 - w_3v_1 \\
v_1w_2 - w_1v_2
\end{bmatrix}
\end{align}
$$

## Propriétés

> $\vec{v}, \ \vec{w}\perp \vec{v}\times \vec{w}$

$$
\begin{align}
\vec{v} \cdot (\vec{v} \times \vec{w}) & = \vec{v} \cdot \begin{bmatrix}
v_2w_3 - w_2v_3 \\
v_3w_1 - w_3v_1 \\
v_1w_2 - w_1v_2
\end{bmatrix} \\
 & = v_1(v_2w_3 - w_2v_3) + v_2(v_3w_1 - w_3v_1) + v_3(v_1w_2 - w_1v_2) \\
 & = \cancel{v_1v_2w_3 - v_1w_2v_3 + w_1v_2v_3 - v_1v_2w_3 + v_1w_2v_3 - w_1v_2v_3K} \\
 & = 0 \\
\implies \vec{v} & \perp \vec{v} \times \vec{w}
\end{align}
$$

Similairement, $\vec{w} \perp \vec{v} \times \vec{w}$.

> $\vec{v} \parallel \vec{w} \implies \vec{v}\times \vec{w} = \vec{0}$

Par définition, $\vec{w} = k\vec{v}$ pour un $k \in \mathbb{R}$.

$$
\begin{align}
\vec{v}\times \vec{w} & = -\vec{w} \times \vec{v} \\
\vec{v} \times (k\vec{v}) & = -k \vec{v}\times \vec{v} \\
2k(\vec{v}\times \vec{v}) & = \vec{0} \\
\vec{w}\times \vec{v} & = \vec{0}
\end{align}
$$

### Anticommutativité

> $\vec{v}\times \vec{w} = -\vec{w}\times \vec{v}$

### Distributivité

> $\vec{u}\times(\vec{v} + \vec{w}) = \vec{u}\times \vec{v} + \vec{u}\times \vec{w}$

### Associativité avec multiple scalaire

> $(k\vec{u}) \times \vec{w} = k(\vec{u} \times \vec{w}) = \vec{u}(k\vec{v})$

### Formule de norme

> $||\vec{v}\times \vec{w}||^2 = ||\vec{v}||^2||\vec{w}||^2 - (\vec{v} \cdot \vec{w})^2$

> $||\vec{v}\times \vec{w}|| = ||\vec{v}||\ ||\vec{w}||\sin\theta$

$$
\begin{align}
||\vec{v}\times\vec{w}||^2 & = ||\vec{v}||^2||\vec{w}||^2 - (\vec{v} \cdot \vec{w})^2 \\
 & = ||\vec{v}||^2||\vec{w}||^2 - (||\vec{v}||\ ||\vec{w}||\cos\theta)^2 \\
 & = ||\vec{v}||^2||\vec{w}||^2(1 - \cos^2\theta) \\
 & = ||\vec{v}||^2||\vec{w}||^2\sin^2\theta \\
||\vec{v}\times \vec{w}|| & = ||\vec{v}||\ ||\vec{w}||\sin\theta
\end{align}
$$

$\square$

## Exemples

> Soit $\vec{v} = < 1, 2, 4 >, \ \vec{w} = < 3, 5, -6 >$.

> 1. Calculer $\vec{v}\times \vec{w}$.

$$
\vec{v}x\vec{w} = \begin{bmatrix}
1 \\
2 \\
4
\end{bmatrix}\times \begin{bmatrix}
3 \\
5 \\
-6
\end{bmatrix} = \begin{bmatrix}
-12 - 20 \\
12 + 6 \\
5 - 6
\end{bmatrix} = \begin{bmatrix}
-32 \\
18 \\
-1
\end{bmatrix}
$$

> 2. Calculer $\vec{w}\times \vec{v}$.

$$
\vec{w}\times \vec{v} = \begin{bmatrix}
3 \\
5 \\
-6
\end{bmatrix}\times \begin{bmatrix}
1 \\
2 \\
4
\end{bmatrix} = \begin{bmatrix}
20 + 12 \\
-6 - 12 \\
6 - 5
\end{bmatrix} = \begin{bmatrix}
32 \\
-18 \\
1
\end{bmatrix}
$$

> 3. Calculer les angles entre $\vec{v}$ et $\vec{v}\times \vec{w}$ et $\vec{w}$ et $\vec{v}\times \vec{w}$.

On sait que $\theta = \arccos \frac{\vec{v} \cdot(\vec{v}\times \vec{w})}{||\vec{v}||\ ||\vec{v}\times \vec{w}||}$.

$$
\begin{align}
\vec{v} \cdot(\vec{v}\times \vec{w}) & = < 1, 2, 4 > \cdot < -32, 18, -1 > \\
 & = 0 \\
\implies\theta & = \arccos0 \\
 & = 90°
\end{align}
$$

Similairement, l'angle entre $\vec{w}$ et $\vec{v} \times \vec{w}$ est $90°$.

> Soit les vecteurs $\vec{u}$ et $\vec{v}$ tels que $\vec{u} \times \vec{v} = \langle 1, 7, -13 \rangle$, évaluer $(-4\vec{u} - 2\vec{v}) \times (4\vec{u} + 2\vec{v})$.

$$
\begin{align}
(-4\vec{u} - 2\vec{v}) \times (4\vec{u} + 2\vec{v}) & = \underbrace{-16\vec{u} \times \vec{u}}_{\vec{0}} - 8\vec{u} \times \vec{v} - 8\vec{v} \times \vec{u} - \underbrace{4\vec{v} \times \vec{v}}_{\vec{0}} \\
 & = -8\vec{u} \times \vec{v} + 8\vec{u} \times \vec{v} \\
 & = \vec{0}
\end{align}
$$

> Trouver l'aire du triangle dont les sommets sont les points $A = (2, 1, -3), B = (4, 2, -3), C = (8, 1, 2)$.

$$
\begin{align}
\vec{AB} & = \vec{OB} - \vec{OA} & = \langle 2, 1, 0 \rangle \\
\vec{AC} & = \vec{OC} - \vec{OA} & = \langle 6, 0, 5 \rangle \\
\vec{AB} \times \vec{AC} & = \begin{bmatrix}
1 \cdot 5 - 0 \cdot 0 \\
0 \cdot 6 - 5 \cdot 2 \\
2 \cdot 0 - 6 \cdot 1
\end{bmatrix} & = \begin{bmatrix}
5 \\
-10 \\
-6
\end{bmatrix} \\
\frac{||\vec{AB} \times \vec{AC}||}{2} & = \frac{\sqrt{5^2 + (-10)^2 + (-6)^2}}{2} & = \frac{\sqrt{161}}{2}
\end{align}
$$