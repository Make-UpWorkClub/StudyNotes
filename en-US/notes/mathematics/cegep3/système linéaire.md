---
tags:
  - mat/algebra
  - cegep/3
date: 2025-10-10T10:49:23
---

# système linéaire

Un système linéaire de $n$ variables et de $m$ [[équation linéaire|équations]] :

$$
(A) = \left. \begin{cases}
\sum_{ i = 1 }^{ n } a_{1i}x_i = b_i \\
\sum_{ i = 1 }^{ n } a_{2i}x_i = b_i \\
\vdots \\
\sum_{ i = 1 }^{ n } a_{mi}x_i = b_i
\end{cases} \ \ \ \ \ \right\}m
$$

## Solutions

- Le nombre de solutions d'une matrice dépend de son rang :
	- $\mathrm{rank}(A) = \mathrm{rank}([A|\vec{b}]) = n$ -> solution *unique*
	- $\mathrm{rank}(A) < \mathrm{rank}([A|\vec{b}])$ -> *aucune* solution
	- $\mathrm{rank}(A) = \mathrm{rank}([A|\vec{b}]) < n$ -> solutions *infinies*
- Deux systèmes sont équivalents s'ils ont les mêmes solutions.

> [!abstract] consistence
> - Une ou une infinité de solutions -> système ==consistent==
> - Aucune solution -> système ==inconsistent==

> [!abstract] solution générale
> Équation paramétrique qui donne toutes les solutions possibles d'un système ayant une infinité de solutions

> [!abstract] solution particulière
> Solution obtenue à partir de la solution générale en fixant les paramètres

## Homogénité

Un système linéaire est homogène si tous les coefficients constants sont nuls.

- Toutes les équations sont satisfaites par l'origine.
	- => toujours consistent
		- => un système homogène qui contient plus de variables que d'équations admet une infinité de solutions.
- La solution d'un système homogène est toujours la solution de son équivalent non-homogène plus un constant.

## Résolution

### Élimination de Gauss

Pour résoudre un système linéaire :

1. Écrire la matrice augmentée.
2. Trouver une FE.
3. Convertir les variables libres en paramètres.
4. Résoudre le système linéaire correspondant à la FE.

> [!abstract] variable de base / libre
> Variable ayant / n'ayant pas de pivot dans sa colonne

### Élimination de Gauss-Jordan

Même que l'élimination de Gauss mais utilisant la FER

## Exemples

> Résoudre les systèmes linéaires suivants.

> $$
> \begin{cases}
> x + 2y - 4z & = 8 \\
> -x + y - 2z & = -5 \\
> 2x + 6y - 9z & = 9
> \end{cases}
> $$

$$
\begin{align}
\begin{bmatrix}
1 & 2 & -4 & \bigm| & 8 \\
-1 & 1 & -2 & \bigm| & -5 \\
2 & 6 & -9 & \bigm| & 9
\end{bmatrix} & = \begin{bmatrix}
1 & 2 & -4 & \bigm| & 8 \\
0 & 3 & -6 & \bigm| & 3 \\
2 & 6 & -9 & \bigm| & 9
\end{bmatrix} \\
 & = \begin{bmatrix}
1 & 2 & -4 & \bigm| & 8 \\
0 & 3 & -6 & \bigm| & 3 \\
0 & 2 & -1 & \bigm| & -7
\end{bmatrix} \\
 & = \begin{bmatrix}
1 & 2 & -4 & \bigm| & 8 \\
0 & 1 & -2 & \bigm| & 1 \\
0 & 0 & 3 & \bigm| & -9
\end{bmatrix} \\
 & = \begin{bmatrix}
1 & 2 & -4 & \bigm| & 8 \\
0 & 1 & -2 & \bigm| & 1 \\
0 & 0 & 1 & \bigm| & -3
\end{bmatrix} \\
 & = \begin{bmatrix}
1 & 2 & -4 & \bigm| & 8 \\
0 & 1 & 0 & \bigm| & -5 \\
0 & 0 & 1 & \bigm| & -3
\end{bmatrix} \\
 & = \begin{bmatrix}
1 & 0 & 0 & \bigm| & 6 \\
0 & 1 & 0 & \bigm| & -5 \\
0 & 0 & 1 & \bigm| & -3
\end{bmatrix} \\
 & \implies \begin{cases}
x & = 30 \\
y & = -5 \\
z & = -3
\end{cases}
\end{align}
$$

> $$
> \begin{cases}
> x - y + z & = 0 \\
> 3x - 3y + 3z & = 0 \\
> -x + 3y + z & = 5 \\
> 3x + y + 7z & = 2
> \end{cases}
> $$

$$
\begin{align}
\begin{bmatrix}
1 & -1 & 1 & \bigm| & 0 \\
3 & -3 & 3 & \bigm| & 0 \\
-1 & 3 & 1 & \bigm| & 5 \\
3 & 1 & 7 & \bigm| & 2
\end{bmatrix} & = \begin{bmatrix}
1 & -1 & 1 & \bigm| & 0 \\
0 & 4 & 4 & \bigm| & 2 \\
0 & 0 & 0 & \bigm| & 4 \\
0 & 0 & 0 & \bigm| & 0
\end{bmatrix} \\
 & \implies \text{inconsistent}
\end{align}
$$

> $$
> \begin{cases}
> x - y + 3z & = 8 \\
> 3x - y + 9z & = 20 \\
> 2x - 4y + 5z & = 19
> \end{cases}
> $$

$$
\begin{align}
\begin{bmatrix}
1 & -1 & 3 & \bigm| & 8 \\
3 & -1 & 9 & \bigm| & 20 \\
2 & -4 & 5 & \bigm| & 19
\end{bmatrix} & = \begin{bmatrix}
1 & 0 & 0 & \bigm| & 3 \\
0 & 1 & 0 & \bigm| & -2 \\
0 & 0 & 1 & \bigm| & 1
\end{bmatrix} \\
 & \implies \begin{cases}
x & = 3 \\
y & = -2 \\
z & = 1
\end{cases}
\end{align}
$$

> $$
> \begin{cases}
> 3x - 1y - 2z & = 6 \\
> -2x + 11y - 5z & = -62 \\
> x - 5y + 4z & = 30
> \end{cases}
> $$

$$
\begin{align}
\begin{bmatrix}
3 & -1 & -2 & \bigm| & 6 \\
-2 & 11 & -5 & \bigm| & -62 \\
1 & -5 & 4 & \bigm| & 30
\end{bmatrix} & = \begin{bmatrix}
0 & 0 & 1 & \bigm| & 1 \\
0 & 1 & 0 & \bigm| & -5 \\
1 & 0 & 0 & \bigm| & 1
\end{bmatrix} \\
 & \implies \begin{cases}
x & = 1 \\
y & = -5 \\
z & = 1
\end{cases}
\end{align}
$$

> $$
> \begin{cases}
> x - y - 3z & = 3 \\
> 4x - 5y - 6z & = 8
> \end{cases}
> $$

$$
\begin{align}
\begin{bmatrix}
1 & -1 & -3 & \bigm| & 3 \\
4 & -5 & -6 & \bigm| & 8
\end{bmatrix} & = \begin{bmatrix}
1 & 0 & -9 & \bigm| & 7 \\
0 & 1 & -6 & \bigm| & 4
\end{bmatrix} \\
 & = \begin{bmatrix}
1 & 0 & 0 & \bigm| & 7 + 9t \\
0 & 1 & 0 & \bigm| & 4 + 6t
\end{bmatrix} \\
 & \implies \begin{cases}
x & = 7 + 9t \\
y & = 4 + 6t \\
z & = t
\end{cases}
\end{align}
$$

> $$
> \begin{cases}
> x_1 + x_2 + 4x_3 & = -2 \\
> 6x_1 + 5x_2 - 3x_3 & = -9
> \end{cases}
> $$

$$
\begin{align}
\begin{bmatrix}
1 & 1 & 4 & \bigm| & -2 \\
6 & 5 & -3 & \bigm| & -9
\end{bmatrix} & = \begin{bmatrix}
0 & 1 & 27 & \bigm| & -3 \\
1 & 0 & -23 & \bigm| & 1
\end{bmatrix} \\
 & = \begin{bmatrix}
0 & 1 & 0 & \bigm| & -3 - 27t \\
1 & 0 & 0 & \bigm| & 1 + 23t
\end{bmatrix} \\
 & \implies \begin{cases}
x_1 & = 1 + 23t \\
x_2 & = -3 - 27t \\
x_3 & = t
\end{cases}
\end{align}
$$

> $$
> \begin{cases}
> -5x + 9y - 5z & = -1 \\
> 1x + 1y + 5z & = -1 \\
> 9x + 0y + 7z & = 20
> \end{cases}
> $$

$$
\begin{align}
\begin{bmatrix}
-5 & 9 & -5 & \bigm| & -1 \\
1 & 1 & 5 & \bigm| & -1 \\
9 & 0 & 7 & \bigm| & 20
\end{bmatrix} & = \begin{bmatrix}
0 & 1 & 0 & \bigm| & 1 \\
1 & 0 & 0 & \bigm| & 3 \\
0 & 0 & 1 & \bigm| & -1
\end{bmatrix} \\
 & \implies \begin{cases}
x & = 3 \\
y & = 1 \\
z & = -1
\end{cases}
\end{align}
$$

> Pour quelles valeurs de $k$ est-ce que
> 
> $$
> (A) = \begin{cases}
> x + y - z & = -k \\
> x + ky + 2z = 2 - k & = 2 - k \\
> kx + (2k - 1)y + 3z & = k + 2
> \end{cases}
> $$

> 1. Admet une unique solution ?

$$
\begin{align}
[A|\vec{b}] & = \begin{bmatrix}
1 & 1 & -1 & \bigm| & -k \\
1 & k & 2 & \bigm| & 2 - k \\
k & 2k - 1 & 3 & \bigm| & k + 2
\end{bmatrix} \\
 & = \begin{bmatrix}
1 & 1 & -1 & \bigm| & -k \\
0 & k - 1 & 3 & \bigm| & 2 \\
0 & 0 & k & \bigm| & k^2 + k
\end{bmatrix}
\end{align}
$$

Si $k = 0$,

$$
\begin{align}
[A|\vec{b}] & = \begin{bmatrix}
1 & 1 & -1 & \bigm| & 0 \\
0 & -1 & 3 & \bigm| & 2 \\
0 & 0 & 0 & \bigm| & 0
\end{bmatrix} \\
 \\
\mathrm{rank}([A|\vec{b}]) < n & \implies \text{infinité de solutions}
\end{align}
$$

> 2. Admet aucune solution ?

Si $k = 1$,

$$
\begin{align}
[A|\vec{b}] & \sim \begin{bmatrix}
1 & 1 & -1 & \bigm| & -1 \\
0 & 0 & 3 & \bigm| & 2 \\
0 & 0 & 1 & \bigm| & 2
\end{bmatrix} \\
 & = \begin{bmatrix}
1 & 1 & -1 & \bigm| & -1 \\
0 & 0 & 1 & \bigm| & 2 \\
0 & 0 & 0 & \bigm| & -4
\end{bmatrix} \\
 \\
\mathrm{rank}(A) < \mathrm{rank}([A|\vec{b}]) & \implies \text{aucune solution}
\end{align}
$$

> 3. Admet une solution ?

Si $k \ne 0, 1$,

$$
\begin{align}
[A|\vec{b}] & \sim \begin{bmatrix}
1 & 1 & -1 & \bigm| & -k \\
0 & \in \mathbb{R} & 3 & \bigm| & 2 \\
0 & 0 & \in \mathbb{R} & \bigm| & k^2 + k
\end{bmatrix} \\
 \\
\mathrm{rank}(A) = \mathrm{rank}([A|\vec{b}]) = n & \implies \text{solution unique}
\end{align}
$$

> $$
> (H) = \begin{cases}
> -2x + y - z & = 0 \\
> -2x + 11y - z & = 0 \\
> 4x - y + 2z & = 0
> \end{cases}
> $$

> 1. Déterminer le nombre de solutions.

$$
\begin{align}
[H|\vec{0}] & = \begin{bmatrix}
-2 & 1 & - 1 & \bigm| & 0 \\
-2 & 11 & - 1 & \bigm| & 0 \\
4 & - 1 & 2 & \bigm| & 0
\end{bmatrix} \\
 & = \begin{bmatrix}
-2 & 1 & - 1 & \bigm| & 0 \\
0 & 1 & 0 & \bigm| & 0 \\
0 & 0 & 0 & \bigm| & 0
\end{bmatrix} \\
 \\
\mathrm{rank}([H|\vec{0}]) < n & \implies \text{infinité de solutions}
\end{align}
$$