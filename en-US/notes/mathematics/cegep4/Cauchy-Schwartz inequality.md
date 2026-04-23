---
tags:
  - mat/algebra
  - cegep/4
date: 2026-04-15T14:34:51
---

# Cauchy-Schwartz inequality

Let $V$ be a real [[inner product]] space.
Then, for any $\vec{u}, \vec{v} \in V$,

$$
|\langle \vec{u}, \vec{v} \rangle| \le ||\vec{u}|| \cdot ||\vec{v}||
$$

## Proof

We know for any $t \in \mathbb{R}$,

$$
\begin{align}
0 & \le \langle \vec{u} + t\vec{v}, \vec{u} + t\vec{v} \rangle \\
0 & \le \langle \vec{u}, \vec{u} \rangle + t \langle \vec{u}, \vec{v} \rangle + t \langle \vec{v}, \vec{u} \rangle + t^2 \langle \vec{v}, \vec{v} \rangle \\
0 & \le \langle \vec{u}, \vec{u} \rangle + 2t \langle \vec{u}, \vec{v} \rangle + t^2\langle \vec{v}, \vec{v} \rangle \\
\implies \Delta = (2\langle \vec{u}, \vec{v} \rangle)^2 - 4\langle \vec{u}, \vec{u} \rangle \langle \vec{v}, \vec{v} \rangle & \le 0 \\
(2\langle \vec{u}, \vec{u} \rangle)^2 & \le 4\langle \vec{u}, \vec{u} \rangle \langle \vec{v}, \vec{v} \rangle \\
|\langle \vec{u}, \vec{u} \rangle| & \le ||\vec{u}|| \cdot ||\vec{v}||
\end{align}
$$

$\square$

## Examples

>  Show for any continuous functions $f$ and $g$,
> 
> $$
> \left( \int_{a}^{b} f(x)g(x) \, \mathrm{d} x \right)^2 \le \int_{a}^{b} f(x)^2 \, \mathrm{d} x \int_{a}^{b} g(x)^2 \, \mathrm{d} x
> $$

Let $V = C(-\infty, \infty)$, then

$$
\langle f, g \rangle \int_{a}^{b} f(x)g(x) \, \mathrm{d} x
$$

is a valid inner product for $V$.
By Cauchy-Schwartz,

$$
\begin{align}
\langle f, g \rangle & \le ||f|| \cdot ||g|| \\
\int_{a}^{b} f(x)g(x) \, \mathrm{d} x & \le \sqrt{\int_{a}^{b} f(x)^2 \, \mathrm{d} x}\sqrt{\int_{a}^{b} g(x)^2 \, \mathrm{d} x} \\
\left( \int_{a}^{b} f(x)g(x) \, \mathrm{d} x \right)^2 & \le \int_{a}^{b} f(x)^2 \, \mathrm{d} x \int_{a}^{b} g(x)^2 \, \mathrm{d} x
\end{align}
$$