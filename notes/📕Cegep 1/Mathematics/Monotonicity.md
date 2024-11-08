---
tags:
  - Cegep1
  - Mathematics
date: 2024-11-08T14:21:34
---

%% [[Derivative]] %%

# Monotonicity

Property of a function over an interval that is always increasing or decreasing

## Evaluation

To find the intervals of monotonicity of $f$:

1. Find the domain of $f$.
2. Find and simplify $f'$.
3. Find all [[Critical Point|critical points]] of $f$.
4. Construct a sign table with the critical points.

## Examples

Find the intervals of monotonicity and critical points of $f(x) = \frac{x^2 + 3}{x - 1}$.

$f(x)$ is undefined when $x - 1 \ne 0 \implies x \ne 1$. So, the domain of $f$ is $x \in \mathbb{R}\setminus\{1\}$.

$$
\begin{align}
f'(x) & = \frac{\mathrm{d}}{\mathrm{d}x} \frac{x^2 + 3}{x - 1} \\
 & = \frac{(x - 1)2x - (x^2 + 3)}{(x - 1)^2} \\
 & = \frac{(x - 3)(x + 1)}{(x - 1)^2} \\
\implies 0 & = x - 3\text{ or }0 = x + 1 \\
x & = 3\text{ or }x = -1
\end{align}
$$

$x = -1$ and $x = 3$ are critical points. Since $x = 1 \notin dom(f)$, it cannot be a critical point.

| $-\infty$ |     | -1  |     |  1  |     |  3  |     | $\infty$ |
|:---------:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:--------:|
|  $f'(x)$  |  +  |     |  -  |     |  -  |     |  +  |          |
|  $f(x)$   | inc |     | dec |     | dec |     | inc |          |

---

Find the intervals of monotonicity and critical points of

$$
f(x) = x^2(x^2 - 1)^{1/3}
$$

given

$$
f'(x) = \frac{2x(4x^2 - 3)}{3(x^2 - 1)^{2/3}}
$$

$f'(x)$ is defined $\forall x\in \mathbb{R}$.

$$
\begin{align}
f'(x) & = \frac{2x(4x^2 - 3)}{3(x^2 - 1)^{2/3}} \\
\implies 0 & = 2x\text{ or }0 = 4x^2 - 3 \\
x & = 0\text{ or }\pm \frac{\sqrt{3}}{2}
\end{align}
$$

$f'(x)$ is undefined when $3(x^2 - 1)^{2/3} = 0 \implies x = \pm1$.
$x = 0$, $x = \pm \frac{\sqrt{3}}{2}$ and $x = \pm1$ are critical points.

| $-\infty$ |     | -1  |     | $-\frac{\sqrt{3}}{2}$ |     |  0  |     | $\frac{\sqrt{3}}{2}$ |     |  1  |     | $\infty$ |
|:---------:|:---:|:---:|:---:|:---------------------:|:---:|:---:|:---:|:--------------------:|:---:|:---:|:---:|:--------:|
|  $f'(x)$  |  -  |     |  -  |                       |  +  |     |  -  |                      |  +  |     |  +  |          |
|  $f(x)$   | dec |     | dec |                       | inc |     | dec |                      | inc |     | inc |          |
