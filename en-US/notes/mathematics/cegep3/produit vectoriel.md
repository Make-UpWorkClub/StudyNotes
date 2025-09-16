---
tags:
  - algebra/linear
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
 & = |\vec{v}||^2||\vec{w}||^2(1 - \cos^2\theta) \\
 & = ||\vec{v}||^2||\vec{w}||^2\sin^2\theta \\
||\vec{v}\times \vec{w}|| & = ||\vec{v}||\ ||\vec{w}||\sin\theta
\end{align}
$$

### Formule d'aire

> ![[assets/excalidraw/parallélogramme]]
> L'aire du [[en-US/notes/mathematics/cegep3/parallélogramme|parallélogramme]] est $||\vec{v}\times \vec{w}||$.
> L'aire du triangle formé par $\vec{v}$, $\vec{w}$ et $\vec{v} - \vec{w}$

Soit $\theta$ l'angle entre $\vec{v}$ et $\vec{w}$,

$$
\begin{align}
A_\text{parallélogramme} & = bh \\
 & = ||\vec{v}||\ ||\vec{w}||\cos\theta \\
 & = ||\vec{v}\times \vec{w}|| \\
\implies A_\text{triangle} & = \frac{||\vec{v}\times \vec{w}||}{2}
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
 & =
\end{align}
$$