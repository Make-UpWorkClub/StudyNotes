---
tags:
  - Cegep1
  - Mathematics
date: 2024-10-01T11:21:56
---

%% [[Limit]] %%

# Derivative

Slope of a [[tangent line]] of a function
Also instantaneous rate of change of the function at the tangent point
The derivative of $f$ at $x$ is

$$
f'(x) = y' = \frac{\mathrm{d}}{\mathrm{d}x}[f(x)] = \frac{\mathrm{d}y}{\mathrm{d}x} = \lim_{ h \to 0 } \frac{f(x + h) - f(x)}{h}
$$

> [!info] $\frac{f(x + h) - f(x)}{h}$ is called the **difference quotient**.

> [!info] $\frac{\mathrm{d}y}{\mathrm{d}x}$ is called the **differentiation operator**, or formally Leibniz's notation, and means "take the derivative with respect to $x$."

> [!warning]+
> $f'(a)$ stands for derivative at $a$ while $\frac{d}{dx} f(a)$ is derivative at $y = f(a)$, which is always 0.
> Under Leibniz's notation we write
> 
> $$
> \left.\frac{d}{dx}f(x)\right|_{x = a}
> $$

## Sidedness

Left-side derivative at $a$:

$$
f'_-(a) = \lim_{ h \to 0^- } \frac{f(a + h) - f(a)}{h}
$$

Right-side derivative at $a$:

$$
f'_+(a) = \lim_{ h \to 0^+ } \frac{f(a + h) - f(a)}{h}
$$

> [!important] $f'(x) = L \iff f'_-(x) = f'_+(x) = L$

## Order

The $n$ <sup>th</sup> order derivative of $f$ is:

|   $n$    |       $f^{(n)}(x)$        |      $y^{(n)}$      | $\frac{\mathrm{d}^n}{\mathrm{d}x^n}f(x)$ | $\frac{\mathrm{d}^ny}{\mathrm{d}x^n}$ |
|:--------:|:-------------------------:|:-------------------:|:----------------------------------------:|:-------------------------------------:|
|    0     |  $f(x)$ or $f^{(0)}(x)$   |  $y$ or $y^{(0)}$   | $\frac{\mathrm{d}^0}{\mathrm{d}x^0}f(x)$ | $\frac{\mathrm{d}y^0}{\mathrm{d}x^0}$ |
|    1     |  $f'(x)$ or $f^{(1)}(x)$  |  $y'$ or $y^{(1)}$  |   $\frac{\mathrm{d}}{\mathrm{d}x}f(x)$   |   $\frac{\mathrm{d}y}{\mathrm{d}x}$   |
|    2     | $f''(x)$ or $f^{(2)}(x)$  | $y''$ or $y^{(2)}$  | $\frac{\mathrm{d}^2}{\mathrm{d}x^2}f(x)$ | $\frac{\mathrm{d}y^2}{\mathrm{d}x^2}$ |
|    3     | $f'''(x)$ or $f^{(3)}(x)$ | $y'''$ or $y^{(3)}$ | $\frac{\mathrm{d}^3}{\mathrm{d}x^3}f(x)$ | $\frac{\mathrm{d}y^3}{\mathrm{d}x^3}$ |
|    4     |       $f^{(4)}(x)$        |      $y^{(4)}$      | $\frac{\mathrm{d}^4}{\mathrm{d}x^4}f(x)$ | $\frac{\mathrm{d}y^4}{\mathrm{d}x^4}$ |
| $\vdots$ |         $\vdots$          |      $\vdots$       |                 $\vdots$                 |               $\vdots$                |

## Properties & theorems

- $\frac{d}{dx}c = 0$
- $\frac{d}{dx}(c\cdot f(x)) = c\cdot f'(x)$
- $\frac{d}{dx}(f(x)\pm g(x)) = f'(x) \pm g'(x)$
- Product Rule: $\frac{d}{dx}(f(x)\cdot g(x)) = f(x)g'(x) + g(x)f'(x)$
- Quotient Rule: $\frac{d}{dx} \frac{f(x)}{g(x)} = \frac{g(x)f'(x) - f(x)g'(x)}{(g(x))^2}\text{, provided }g(x)\ne 0$
- Chain Rule: $\frac{\mathrm{d}}{\mathrm{d}x}(f\circ g)(x) = (f'\circ g)(x)g'(x)$
- General Power Rule: $\frac{d}{dx}f(x)^n = nf(x)^{n - 1}f'(x)$
- $\frac{d}{dx}\sin x = \cos x$
- $\frac{d}{dx}\cos x = -\sin x$
- $\frac{d}{dx}\tan x = \sec ^2x$
- $\frac{d}{dx}\sec x = \tan x\sec x$
- $\frac{d}{dx}\csc x = -\cot x\csc x$
- $\frac{d}{dx}\cot x = -\csc ^2x$
- $\frac{\mathrm{d}}{\mathrm{d}x}\arcsin x = \frac{1}{\sqrt{1 - x^2}}$
- $\frac{\mathrm{d}}{\mathrm{d}x}\arccos x = -\frac{1}{\sqrt{1 - x^2}}$
- $\frac{\mathrm{d}}{\mathrm{d}x}\arctan x = \frac{1}{1 + x^2}$
- $\frac{\mathrm{d}}{\mathrm{d}x}\mathrm{arcsec}\ x = \frac{1}{|x|\sqrt{x^2 - 1}}$
- $\frac{\mathrm{d}}{\mathrm{d}x}\mathrm{arccsc}\ x = -\frac{1}{|x|\sqrt{x^2 - 1}}$
- $\frac{\mathrm{d}}{\mathrm{d}x} \mathrm{arccot}\ x = -\frac{1}{1 + x^2}$
- $\frac{\mathrm{d}}{\mathrm{d}x}\log_bx = \frac{1}{x\ln b}$
- $\frac{\mathrm{d}}{\mathrm{d}x}a^x = a^x\ln a$

## Examples

> Find $k'(1)$ of $k(x) = (x^2 + 3)^3(x - 2x^2)^2$.

$$
\begin{align}
k'(1) & = \left.\frac{\mathrm{d}}{\mathrm{d}x} k(x)\right|_{x = 1} \\
 & = \left.\frac{\mathrm{d}}{\mathrm{d}x} ((x^2 + 3)^3(x - 2x^2)^2)\right|_{x = 1} \\
 & = \left.3(x^2 + 3)^2(x^2 + 3)'(x - 2x^2)^2 + (x^2 + 3)^32(x - 2x^2)(x - 2x^2)'\right|_{x = 1} \\
 & = \left.3(x^2 + 3)^22x(x - 2x^2)^2 + (x^2 + 3)^32(x - 2x^2)(1 - 4x)\right|_{x = 1} \\
 & = 3(4)^2\cdot2(1 - 2)^2 + (4)^3\cdot2(1 - 2)(1 - 4) \\
 & = 3\cdot16\cdot2\cdot1 + 64\cdot2\cdot - 1\cdot - 3 \\
 & = 96 + 384 \\
 & = 480
\end{align}
$$

---

> Find the derivative of $h(y) = \tan(\sec((y^3 + 1)^4))$.

$$
\begin{align}
h'(y) & = \frac{\mathrm{d}}{\mathrm{d}y} h(y) \\
 & = \frac{\mathrm{d}}{\mathrm{d}y} (\tan(\sec((y^3 + 1)^4))) \\
 & = \sec ^2(\sec((y^3 + 1)^4))(\sec((y^3 + 1)^4))' \\
 & = \sec ^2(\sec((y^3 + 1)^4))\sec((y^3 + 1)^4)\tan((y^3 + 1)^4)4(y^3 + 1)^33y^2
\end{align}
$$

---

> Find the derivative of $y = \sqrt[4]{x + \sqrt[5]{x + \sqrt[4]{x}}}$.

Let $4rt(x) = \sqrt[4]{x},\ 5rt(x) = \sqrt[5]{x}$,
then $4rt'(x) = \frac{1}{4}x^{1/4 - 1} = \frac{1}{4}x^{-3/4},\ 5rt'(x) = \frac{1}{5}x^{1/5 - 1} = \frac{1}{5}x^{-4/5}$.

$$
\begin{align}
y' & = \frac{\mathrm{d}}{\mathrm{d}x} \sqrt[4]{x + \sqrt[5]{x + \sqrt[4]{x}}} \\
 & = \frac{\mathrm{d}}{\mathrm{d}x} 4rt(x + 5rt(x + 4rt(x))) \\
 & = 4rt'(x + 5rt(x + 4rt(x)))\cdot\frac{\mathrm{d}}{\mathrm{d}x} (x + 5rt(x + 4rt(x))) \\
 & = 4rt'(x + 5rt(x + 4rt(x)))\cdot \left(1 + \frac{\mathrm{d}}{\mathrm{d}x} 5rt(x + 4rt(x))\right) \\
 & = \frac{1}{4}(x + 5rt(x + 4rt(x)))^{-3/4}\cdot\left(1 + 5rt'(x + 4rt(x))\cdot\frac{\mathrm{d}}{\mathrm{d}x} (x + 4rt(x))\right) \\
 & = \frac{1}{4}(x + \sqrt[5]{x + \sqrt[4]{x}})^{-3/4}\cdot\left(1 + \frac{1}{5}(x + 4rt(x))^{-4/5}\cdot(1 + 4rt'(x))\right) \\
 & = \frac{1}{4}(x + \sqrt[5]{x + \sqrt[4]{x}})^{-3/4}\cdot\left(1 + \frac{1}{5}(x + \sqrt[4]{x})^{-4/5}\cdot\left(1 + \frac{1}{4}x^{-3/4}\right)\right) \\
\end{align}
$$