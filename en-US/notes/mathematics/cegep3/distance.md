---
tags:
  - mat/algebra
  - cegep/3
date: 2025-10-07T10:17:19
---

# distance

## Entre une droite et un point

![[distance droite-point]]

$$
\begin{align}
dist(A, D) & = ||orth_{\vec{d}}\vec{PA}|| = ||\vec{PA} - \frac{\vec{PA} \cdot \vec{d}}{||\vec{d}||^2}\vec{d}|| \\
 & = ||\vec{PA}||\sin\theta = \frac{||\vec{PA} \times \vec{d}||}{||\vec{d}||} \\
\vec{OP_D(A)} & = \vec{OP} + proj_{\vec{d}}\vec{PA}
\end{align}
$$

## Entre deux droites

![[distance droite-droite]]

- Coïncidentes parallèles ou intersectées : 0
- Distinctes parallèles : distance entre une droite et un point quelconque sur l'autre
- Obliques : $$
  dist(D_1, D_2) = ||proj_{\vec{d_1} \times \vec{d_2}}\vec{P_1P_2}||
  $$

## Entre un plan et un point

![[distance plan-point]]

$$
\begin{align}
dist(A, \pi) & = ||proj_{\vec{n}}\vec{AP}|| = \frac{|ax + by + cz - d|}{\sqrt{a^2 + b^2 + c^2}} \\
\vec{OP_\pi(A)} & = \vec{OA} + proj_{\vec{n}}\vec{AP}
\end{align}
$$

> [!note]- Preuve
> $$
> \begin{align}
> dist(A, \pi) & = ||proj_{\vec{n}}\vec{AP}|| \\
>  & = || \frac{\vec{n} \cdot \vec{AP}}{||\vec{n}||^2}\vec{n}|| \\
>  & = \frac{|\vec{n} \cdot \vec{AP}|}{||\vec{n}||} \\
>  & = \frac{|\vec{n} \cdot \vec{OA} - \vec{n} \cdot \vec{OP}|}{\sqrt{a^2 + b^2 + c^2}} \\
>  & = \frac{|ax + by + cz - d|}{\sqrt{a^2 + b^2 + c^2}}
> \end{align}
> $$

## Entre un plan et une droite

- Coïncidents parallèles ou intersectés : 0
- Distincts parallèles : distance entre un point quelconque sur la droite et le plan

## Entre deux plans

- Coïncidents parallèles ou intersectés : 0
- Distincts parallèles :
	- Distance entre un point quelconque sur un plan et l'autre
	- Si l'équation générale des deux plans partage le même $\vec{n}$ : $$
      dist(D_1, D_2) = \frac{|d_1 - d_2|}{||\vec{n}||}
      $$

## Exemples

> $$
> \begin{align}
> A & = (2, 1, 1) \\
> D: & \begin{cases}
x & = -1 + t \\
y & = 8 + 2t \\
z & = 8 + t
\end{cases}
> \end{align}
> $$

> 1. Montrer que $A \notin D$.

$$
\begin{align}
x & = -1 + t \\
2 & = -1 + t \\
t & = 3 \\
 \\
y & = 8 + 2t \\
1 & = 8 + 2t \\
t & = -\frac{7}{2} \\
 \\
3 & \ne -\frac{7}{2}
\end{align}
$$

> 2. Trouver le point $P_D(A)$.

$$
\begin{align}
\vec{d} & = \langle 1, 2, 1 \rangle \\
P & = (-1, 8, 8) \\
\vec{PA} & = \vec{OA} - \vec{OP} = \langle 3, -7, -7 \rangle \\
\vec{OP_D(A)} & = \vec{OP} + proj_{\vec{d}}\vec{PA} \\
 & = \langle -1, 8, 8 \rangle + \frac{\vec{PA} \cdot \vec{d}}{\vec{d} \cdot \vec{d}}\vec{d} \\
 & = \langle -1, 8, 8 \rangle - \frac{18}{6}\langle -3, -6, -3 \rangle \\
 & = \langle 4, 2, 5 \rangle \\
\implies P_D(A) & = (4, 2, 5)
\end{align}
$$

> 3. Trouver la distance entre $A$ et $D$.

$$
\begin{align}
dist(A, D) & = ||\vec{OA} - \vec{OP_D(A)}|| \\
 & = ||\langle 2, 1, 1 \rangle - \langle -4, 2, 5 \rangle|| \\
 & = \sqrt{53}
\end{align}
$$

> Trouver $dist(D_1, D_2)$ si
> 
> $$
> \begin{align}
> D_1 & : \begin{cases}
> x & = 4 \\
> y & = -1 + t \\
> z & = 3 - 2t
> \end{cases} \\
> D_2 & : \frac{b - x}{3} = 8 - y = \frac{z - 17}{4}
> \end{align}
> $$

$$
\begin{align}
\vec{d_1} & = \langle 0, 1, -2 \rangle \\
\vec{d_2} & = \langle -3, -1, 4 \rangle \\
\vec{d_1} \times \vec{d_2} & = \begin{bmatrix}
4 - 2 \\
6 \\
3
\end{bmatrix} = \begin{bmatrix}
2 \\
6 \\
3
\end{bmatrix} \ne \vec{0} \\
\implies D_1 & \nparallel D_2 \\
 \\
dist(D, D_2) & = ||proj_{\vec{d_1} \times \vec{d_2}}\vec{P_1P_2}|| \\
 & = || \frac{(\vec{d_1} \times \vec{d_2}) \cdot \vec{P_1P_2}}{||\vec{d_1} \times \vec{d_2}||^2}\vec{d_1} \times \vec{d_2}|| \\
 & = \frac{|(\vec{d_1} \times \vec{d_2}) \cdot \vec{P_1P_2}|}{||\vec{d_1} \times \vec{d_2}||} \\
 & = \frac{|98|}{\sqrt{4 + 36 + 9}} \\
 & = \frac{98}{\sqrt{49}} \\
 & = 14
\end{align}
$$