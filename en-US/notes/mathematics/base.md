---
tags:
  - mat/algebra
  - cegep/3
  - cegep/4
date: 2025-11-18T11:31:05
---

# base (basis)

[[generator|Générateur]] [[dépendance linéaire|linéairement indépendant]]
$B = \{ \vec{v}_{1}, \vec{v}_{2}, \dots, \vec{v}_n \}$ est une base de l'espace vectorielle $V$ si

1. $B$ est linéairement indépendant.
2. Tout vecteur $\vec{w} \in V$ peut s'écrire comme une combinaison linéaire de vecteurs dans $B$.
   $$
  \vec{w} \in \mathrm{Vect}(B) = V
  $$

> [!info] The coordinates of $\vec{v}$ relative to basis $B$ is noted $(\vec{v})_B$.

## Properties

> Let $S = \{ \vec{v}_{1}, \dots \vec{v}_n \} \in V$ of vector space $V$ with dimension $n$.
> $S$ is a basis of $V$ if and only if $S$ is linearly independent.

If $S$ is a basis, then $S$ is linearly independent.
We show if $S$ is linearly independent, then $S$ is a basis.
Let $W = \mathrm{span}(S)$.
We know $W \le V$ and

#TODO

> Let $S = \{ \vec{v}_{1}, \dots, \vec{v}_m \}$ be a linearly independent set in vector space $V$ such that $S$ is not a basis of $V$, then it is possible to add vectors to $S$ to make it a basis of $V$.

Since $S$ is not a basis of $V$, $\mathrm{span}(S) < V$.
Therefore there is $\vec{v}_{m + 1} \in V$ such that $\vec{v}_{m + 1} \notin \mathrm{span}(S)$.
Consider $S_1 = \{ \vec{v}_{1}, \dots, \vec{v}_m, \vec{v}_{m + 1} \}$. $S_1$ is linearly independent.
If $\mathrm{span}(S_1) = V$, then $S_1$ is a basis of $V$, else repeat until $S_n$ is a basis.

$\square$