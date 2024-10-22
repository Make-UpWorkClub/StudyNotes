---
tags:
  - Cegep1
  - Mathematics
date: 2024-10-01T11:21:56
---

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

## Implicit differentiation

Find $y'$ / $x'$ by:

- Considering $y$ / $x$ as a function of $x$ / $y$
- Differentiating as normal using the Chain Rule

> [!info]+
> $y'$ and $x'$ may depend on two variables.
> To evaluate $y'$ at $(x_0, y_0)$, we write
> 
> $$
> y'(x_0, y_0) = \dots
> $$

> [!example]+ Find $\frac{\mathrm{d}y}{\mathrm{d}x}$ of $x^2 + xy + y^2 = 1$.
> 
> $$
> \begin{align}
> x^2 + xy + y^2 & = 1 \\
> \frac{\mathrm{d}}{\mathrm{d}x} (x^2 + xy + y^2) & = \frac{\mathrm{d}}{\mathrm{d}x} 1 \\
> 2x + y + xy' + 2yy' & = 0 \\
> y'(x + 2y) & = - (2x + y) \\
> y' & = -\frac{2x + y}{x + 2y}
> \end{align}
> $$

> [!example]- Find $\frac{\mathrm{d}x}{\mathrm{d}y}$ of $x^2 + xy + y^2 = 1$.
> 
> $$
> \begin{align}
> x^2 + xy + y^2 & = 1 \\
> \frac{\mathrm{d}}{\mathrm{d}x} (x^2 + xy + y^2) & = \frac{\mathrm{d}}{\mathrm{d}x} 1 \\
> 2xx' + x'y + x + 2y & = 0 \\
> x'(2x + y) & = -(x + 2y) \\
> x' & = -\frac{x + 2y}{2x + y}
> \end{align}
> $$

Find the slope of the tangent line to the curve $xy\ln(2 - yx) = 0$.

$$
\begin{align}
xy\ln(2 - xy) & = 0 \\
\frac{\mathrm{d}}{\mathrm{d}x} (xy\ln(2 - xy)) & = \frac{\mathrm{d}}{\mathrm{d}x} 0 \\
y\ln(2 - xy) + xy'\ln(2 - xy) + xy\cdot \frac{(2 - xy)'}{2 - xy} & = 0 \\
y\ln(2 - xy) + xy'\ln(2 - xy) - xy\cdot \frac{y + xy'}{2 - xy} & = 0
\end{align}
$$

Plug $(1, 1)$:

$$
\begin{align}
1\ln(2 - 1\cdot1) + 1y'(1, 1)\ln(2 - 1\cdot1) - 1\cdot1 \frac{1 + 1y'(1, 1)}{2 - 1\cdot1} & = 0 \\
-(1 + y'(1, 1)) & = 0 \\
y'(1, 1) & = - 1
\end{align}
$$

## Properties & theorems

- $\frac{d}{dx}c = 0$
- $\frac{d}{dx}(c\cdot f(x)) = c\cdot f'(x)$
- $\frac{d}{dx}(f(x)\pm g(x)) = f'(x) \pm g'(x)$
- Product Rule: $\frac{d}{dx}(f(x)\cdot g(x)) = f(x)g'(x) + g(x)f'(x)$
- Quotient Rule: $\frac{d}{dx} \frac{f(x)}{g(x)} = \frac{g(x)f'(x) - f(x)g'(x)}{(g(x))^2}\text{, provided }g(x)\ne 0$
- Power Rule: $\frac{d}{dx}x^n = nx^{n - 1}$
- $\frac{d}{dx}\sin x = \cos x$
- $\frac{d}{dx}\cos x = -\sin x$
- $\frac{d}{dx}\tan x = \sec ^2x$
- $\frac{d}{dx}\sec x = \tan x\sec x$
- $\frac{d}{dx}\csc x = -\cot x\csc x$
- $\frac{d}{dx}\cot x = -\csc ^2x$

## Examples

Find the derivative of $y = \sqrt[4]{x + \sqrt[5]{x + \sqrt[4]{x}}}$.

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