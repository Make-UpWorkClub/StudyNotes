---
tags:
  - mat/calculus
  - cegep/1
date: 2024-09-27T14:32:11
---

%% [[limit]] %%

# Intermediate Value Theorem

`Abbr.` I. V. T.

Suppose that $f$ is continuous over $[a, b]$ where $f(a) \ne f(b)$.
Let $N$ be any number between $f(a)$ and $f(b)$,
then $\exists c \in [a, b]$ such that $f(c) = N$.

> [!important] To effectively use I. V. T. for functions that don't pass the horizontal line test, you may need to cut the interval.

## Examples

Show that $\sin x + 1 = \sqrt{ x }$ is solvable.

$$
\begin{align}
\sin x + 1 & = \sqrt{ x } \\
\sin x + 1 - \sqrt{ x } & = 0
\end{align}
$$

Let $f(x) = \sin x + 1 - \sqrt{ x }$.
$f(x)$ is continuous $\forall x \in [0, \infty)$.
Consider $x \in [0, \pi]$:

$$
\begin{align}
f(0) & = \sin 0 + 1 - \sqrt{ 0 } & = 1 > 0 \\
f(\pi) & = \sin \pi + 1 - \sqrt{ \pi } & = 1 - \sqrt{ \pi } < 0
\end{align}
$$

Let $N = 0 \in [f(\pi), f(0)]$,
so by I. V. T., $\exists c \in [0, \pi]$ such that $f(c) = N = 0$.

---

Show that $\cos x = x^2$ is solvable for $x \in (0, 1)$.

$$
\begin{align}
\cos x & = x^2 \\
\cos x - x^2 & = 0
\end{align}
$$

Let $f(x) = \cos x - x^2$.
$f(x)$ is continuous $\forall x \in \mathbb{R}$.
Consider $x \in [0, 1]$, then

$$
\begin{align}
f(0) & = \cos 0 - 0^2 = 1 \\
f(1) & = \cos 1 - 1^2 < 0 & \text{, since }\cos 1 \in (-1, 1)\text{.}
\end{align}
$$

Let $N = 0 \in [f(1), f(0)]$,
so by I. V. T., $\exists c \in [0, 1]$ such that $f(c) = N = 0$.
