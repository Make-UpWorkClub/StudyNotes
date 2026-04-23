---
tags:
  - mat/algebra
  - cegep/4
date: 2026-04-08T15:49:39
---

# sphere

Let $V$ be a real [[inner product space]].
A sphere of radius $r$ is the set of all vectors in $V$ whose [[norme|norm]] is $r$:

$$
\{ \vec{u} \in V\ |\ ||\vec{u}|| = r \}
$$

## Examples

> Let $V = \mathbb{R}^2$ and $\langle \vec{u}, \vec{v} \rangle = \frac{1}{9}u_1v_1 + \frac{1}{4}u_2v_2$.

> 1. Is $\hat{i}$ unit?

$$
\begin{align}
||\hat{i}|| & = \sqrt{\langle \hat{i}, \hat{i} \rangle} \\
 & = \sqrt{\frac{1}{9}1 \cdot 1 + \frac{1}{4}0 \cdot 0)} \\
 & = \frac{1}{3} \ne 1
\end{align}
$$

No, $\hat{i}$ is not unit.

> 2. Write the circle of radius 1 as a set.

$$
\begin{align}
\{ \vec{v} \in \mathbb{R}^2\ |\ ||\vec{v}|| = 1 \} & = \{ \langle v_1, v_2 \rangle\ |\ \sqrt{\langle \vec{v}, \vec{v} \rangle} = 1 \} \\
 & = \left\{  \langle v_1, v_2 \rangle\ |\ \sqrt{\frac{1}{9}v_1^2 + \frac{1}{4}v_2^2} = 1  \right\} \\
 & = \left\{  \langle v_1, v_2 \rangle\ |\ \frac{1}{9}v_1^2 + \frac{1}{4}v_2^2 = 1  \right\}
\end{align}
$$