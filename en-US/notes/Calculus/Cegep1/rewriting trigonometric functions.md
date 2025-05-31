---
tags:
  - Calculus
  - Cegep/1
date: 2024-08-28T17:03:19
---

# Rewriting Trigonometric Functions

$\cos(\arcsin(x + 1))$

$$
\begin{align}
\text{Let }\theta &= \arcsin(x + 1) \\
\sin\theta &= x + 1
\end{align}
$$

$$
\begin{align}
\text{Let }c &= \text{adjacent side of }\theta \\
1^2 &= c^2 + (x + 1)^2 \\
c^2 &= 1 - (x + 1)^2 \\
c &= \pm \sqrt{ 1 - (x + 1)^2 }
\end{align}
$$

$$
\begin{gather}
\text{Note that }\cos\theta \ge 0\text{ \& }\cos\theta = \frac{c}{1} = c \\
\therefore c > 0
\end{gather}
$$

$$
\begin{align}
\cos(\arcsin(x + 1))  & = \cos\theta \\
 & = c \\
 & = \sqrt{ 1 - (x + 1)^2 }
\end{align}
$$
---
$\sin(2\arccos(e^x))$

$$
\begin{align}
\text{Let }\theta &= \arccos(e^x) \\
\cos\theta &= e^x
\end{align}
$$

$$
\begin{aligned}
\text{Let }c &= \text{opposite side of }\theta \\
1^2 &= c^2 + (e^x)^2 \\
c^2 &= 1 - e^{2x} \\
c &= \pm \sqrt{ 1 - e^{2x} }
\end{aligned}
$$

$$
\begin{gather}
\text{Note that }\sin\theta \ge 0\text{ and }\sin\theta = \frac{c}{1} = c \\
\therefore c > 0
\end{gather}
$$

$$
\begin{align}
\sin(2\arccos(e^x)) &= \sin(2\theta) \\
&= 2\sin\theta \cos\theta \\
&= 2ce^x \\
&= 2\sqrt{ 1 - e^{2x} }e^x
\end{align}
$$
---
$\sec\left( \arctan\left( \frac{1}{x} \right) \right)$

$$
\begin{align}
\text{Let }\theta &= \arctan\left( \frac{1}{x} \right) \\
\tan\theta &= \frac{1}{x} \\
\text{Thus }1 &=\text{ opposite side of }\theta \\
x &= \text{adjacent side of }\theta
\end{align}
$$

$$
\begin{gather}
\text{Let }c = \text{hypotenuse of }\theta \\
\text{Per Pythagorean Theorem, }c = \sqrt{ 1^2 + x^2 }
\end{gather}
$$

$$
\begin{gather}
\text{Since }\sec\theta > 0\text{ and }\sec\theta = \frac{c}{x}\text{,} \\
\frac{c}{x} > 0 \\
\text{Note that }x \ne 0\text{ because }\frac{1}{x}\text{ is defined} \\
\text{Thus, }x > 0\implies c > 0\text{ \& }x < 0\implies c < 0
\end{gather}
$$

$$
\begin{align}
\sec\left( \arctan\left( \frac{1}{x} \right) \right) &= \sec\theta \\
&= \frac{c}{x} \\
&= \begin{cases}
\frac{\sqrt{ 1 + x^2 }}{x} & x > 0 \\
-\frac{\sqrt{ 1 + x^2 }}{x} & x < 0
\end{cases}
\end{align}
$$
