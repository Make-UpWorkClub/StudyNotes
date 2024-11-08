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

## 2024-08-28

Don't confuse $\sin ^{-1}x$ with $(\sin x)^{-1}$
Prefer $\arcsin$ and $asin$ to $\sin ^{-1}$

## 2024-09-10

Factorization of cubes:

$$
\begin{align}
a^3 - b^3 & = (a - b)(a^2 + ab + b^2) \\
a^3 + b^3 & = (a + b)(a^2 - ab + b^2)
\end{align}
$$

## 2024-10-01

Point-slope form: $y - y_o = m(x - x_o)$

## 2024-10-21

Questions:

- Not write add 0 in product rule?

## 2024-11-06

# Related Rates

Two people on bikes are separated by 250 meters horizontally. Person A starts riding north at a rate of 5 m/sec and 7 minutes later Person B starts riding south at 3 m/sec. At what rate is the distance separating the two people changing 25 minutes after Person A starts riding?

![[Related Rates 1|300]]

After 25 mins:

$$
\begin{align}
y & = 3\cdot18\cdot60 & = 3240\mathrm{m} \\
z & = 5\cdot25\cdot60 & = 7500\mathrm{m} \\
x & = \sqrt{350^2 + (3240 + 7500)^2} & = 10745.7015\dots \mathrm{m}
\end{align}
$$

We have

$$
\begin{align}
x^2 & = 350^2 + (y + z)^2 \\
\implies \frac{\mathrm{d}}{\mathrm{d}t} x^2 & = \frac{\mathrm{d}}{\mathrm{d}t} (350^2 + (y + z)^2) \\
2xx' & = 2(y + z)(y' + z') \\
x' & = \frac{(y + z)(y' + z')}{x} \\
 & = \frac{(3240 + 7500)(3 + 5)}{10745.7015\dots} \\
 & \approx 7.9958\mathrm{\frac{m}{s}}
\end{align}
$$