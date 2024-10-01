---
tags:
  - Cegep1
  - Mathematics
date: 2024-08-21T14:27:00
---

# Buffer

## 2024-08-21

Full / hollow dot at the end of graphs

## 2024-08-23

$\sqrt{ x^2 } = |x|$

One to one: (of a function) has an inverse. Can be tested with the horizontal line test

$$
\begin{align}
f\circ f^{-1}(x) &= x\text{ for dom}f^{-1} \\
f^{-1}\circ f(x) &= x\text{ for dom}f
\end{align}
$$

## 2024-08-27

$$
\begin{align}
6(3 - x)^4 + 2x(3 - x)^3 - x^2(3 - x)^2 &= AB^2C \\
(3 - x)^2(6(3 - x)^2 + 2x(3 - x) - x^2) \\
(3 - x)^2(3x^2 - 30x + 54) \\
3(3 - x)^2(x^2 - 10x + 18) \\
3(3 - x)^2((x - 5)^2 - 7) \\
3(3 - x)^2(x - 5 + \sqrt{ 7 })(x - 5 - \sqrt{ 7 })
\end{align}
$$
---
$$
\begin{align}
 & \frac{\frac{1}{\sqrt{ 17(x + h) }} - \frac{1}{\sqrt{ 17x }}}{h} \\
= & \frac{\sqrt{ 17x } - \sqrt{ 17(x + h) }}{17h\sqrt{ x(x + h) }} \\
= & \frac{(\sqrt{ 17x } - \sqrt{ 17(x + h) })(\sqrt{ 17x } + \sqrt{ 17(x + h) })}{17h\sqrt{ x(x + h) }(\sqrt{ 17x } + \sqrt{ 17(x + h) })} \\
= & \frac{17x - 17(x + h)}{17h(\sqrt{ 17(x + h) }x + \sqrt{ 17x }(x + h))} \\
= & \frac{1}{\sqrt{ 17 }(\sqrt{ x + h }x + \sqrt{ x }(x + h))}
\end{align}
$$
---
$$
\begin{align}
0 &= x^2 - 20x + 75 \\
0 &= (x - 5)(x - 15) \\
x &= 5\text{ or }15
\end{align}
$$
---
$$
\begin{align}
\frac{(x^2 - 3)^2}{4} &= 2 - x^2 \\
x^4 - 6x^2 + 9 &= 8 - 4x^2 \\
x^4 - 2x^2 + 1 &= 0 \\
(x^2 - 1)^2 &= 0 \\
x = \pm1
\end{align}
$$
---
$$
\begin{align}
-\frac{1}{x - 3} + \frac{x + 5}{2x + 1} &= 0 \\
-2 - \frac{7}{x - 3} + x + 5 &= 0 \\
-7 + (x + 3)(x - 3) &= 0 \\
x^2 - 16 &= 0 \\
(x + 4)(x - 4) &= 0 \\
x &= \pm4
\end{align}
$$
---
$$
\begin{align}
(2x + x^2(15 - 17x))(15 - 17x)^{-\frac{1}{2}} &= 0 \\
-17x^3 + 15x^2 + 2x &= 0 \\
-17x^2 + 15x + 2 &= 0 \\
(-x + 1)(17x + 2) &= 0 \\
x &= 1\text{ or }-\frac{2}{17}
\end{align}
$$
---
$$
\begin{aligned}
 & \frac{\frac{x}{4x + 7} - \frac{a}{4a + 7}}{x - a} \\
= & \frac{x(4a + 7) - a(4x + 7)}{(x - a)(4x + 7)(4a + 7)} \\
= & \frac{7(x - a)}{(x - a)(4x + 7)(4a + 7)} \\
= & \frac{7}{(4x + 7)(4a + 7)}
\end{aligned}
$$

## 2024-08-28

Don't confuse $\sin ^{-1}x$ with $(\sin x)^{-1}$
Prefer $\arcsin$ and $asin$ to $\sin ^{-1}$

## 2024-09-06

$$
\begin{align}
a = -3 \\
 \\
(-2)^2 + b\cdot-2 + c &= -3 \\
-2b + c &= -7 \\
 \\
3^2 + b\cdot 3 + c &= 22 \\
3b + c &= 13 \\
5b &= 20 \\
b &= 4 \\
 \\
-2\cdot 4 + c &= -7 \\
c &= 1
\end{align}
$$

## 2024-09-10

Factorization of cubes:

$$
\begin{align}
a^3 - b^3 & = (a - b)(a^2 + ab + b^2) \\
a^3 + b^3 & = (a + b)(a^2 - ab + b^2)
\end{align}
$$
---
$$
\begin{align}
\lim_{ x \to 1 }\frac{\sqrt{ 2 + x^2 } - \sqrt{ 4x - x^2 }}{x^2 - 1} & =\lim_{ x \to 1 }\frac{2 + x^2 - (4x - x^2)}{(x^2 - 1)(\sqrt{ 2 + x^2 } + \sqrt{ 4x - x^2 })} \\
 & = \lim_{ x \to 1 }\frac{2x^2 - 4x + 2}{(x^2 - 1)(\sqrt{ 2 + x^2 } + \sqrt{ 4x - x^2 })} \\
 & = 2\lim_{ x \to 1 }\frac{(x - 1)^2}{(x - 1)(x + 1)(\sqrt{ x^2 + 2 } + \sqrt{ 4x - x^2 })} \\
 & = 2\lim_{ x \to 1 } \frac{x - 1}{(x + 1)(\sqrt{ x^2 + 2 } + \sqrt{ 4x - x^2 })} \\
 & = 0
\end{align}
$$

## 2024-09-11

$\lim_{ x \to 1^+ } \frac{\sqrt{ x^2 + x }}{\sqrt{ x - x^2 }}$

When $x = 1$, limit = $\frac{\sqrt{ 2 }}{0}$.
We factorize $x - x^2$ to $x(1 - x)$.
Now it becomes clear that $x(1 - x) = 0^-$.
The limit diverges to $-\infty$.

## 2024-10-01

Point-slope form: $y - y_o = m(x - x_o)$