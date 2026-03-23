---
tags:
  - mat/algebra
  - cegep/4
date: 2026-02-18T14:44:46
---

# uniqueness of basis representation

Let $S = \{ \vec{v}_{1}, \dots, \vec{v}_n \}$ be a [[en-US/notes/mathematics/base|basis]] for $W$ where $W \le \mathbb{R}^n$, then any vector $\vec{v} \in W$ is expressed as $\vec{v} = c_1\vec{v}_{1} +\dots + c_n\vec{v}_n$ uniquely.

Assume there is more than one way, i.e.

$$
\begin{align}
\vec{v} & = c_1\vec{v}_{1} +\dots + c_n\vec{v}_n \\
\vec{v} & = d_1\vec{v}_{1} +\dots + d_n\vec{v}_n \\
\implies c_1\vec{v}_{1} +\dots + c_n\vec{v}_n & = d_1\vec{v}_{1} +\dots + d_n\vec{v}_n \\
\implies (c_1 - d_1)\vec{v}_{1} +\dots + (c_n - d_n)\vec{v}_n & = \vec{0}
\end{align}
$$

#TODO