---
tags:
  - Cegep1
  - Calculus
date: 2024-10-07T15:01:08
---

# Miscellaneous Proofs

## $\lim_{ x \to 0 }\frac{\sin x}{x} = 1$

![[Proof 1]]

where $x \in \left( 0, \frac{\pi}{2} \right)$ is the angle between the x-axis and the line $\overline{OC}$.
This creates the following inequality:

$$
A_{\triangle DOB} \le A_{\text{sector }DOB} \le A_{\triangle COB}
$$

### $A_{\triangle DOB}$

The base, $\overline{OB}$, and the hypotenuse, $\overline{DO}$, are radii of the unit circle, so they have length 1.

For the height,

$$
\overline{DA} = \sin x \cdot \overline{DO} = \sin x\cdot 1 = \sin x
$$

Then,

$$
A_{\triangle DOB} = \frac{bh}{2} = \frac{\sin x}{2}
$$

### $A_{\text{sector }DOB}$

$$
A_{\text{sector }DOB} = \frac{1}{2}r^2\theta = \frac{x}{2}
$$

### $A_{\triangle COB}$

$$
\overline{CB} = \tan x\cdot \overline{OB} = \tan x\cdot 1 = \tan x
$$

Then,

$$
A_{\triangle COB} = \frac{bh}{2} = \frac{\tan x}{2}
$$

---

Therefore, we have

$$
\begin{align}
A_{\triangle DOB} & \le A_{\text{sector }DOB} & \le A_{\triangle COB} \\
\frac{\sin x}{2} & \le \frac{x}{2} & \le \frac{\tan x}{2}
\end{align}
$$

Since $x \in \left( 0, \frac{\pi}{2} \right)$, we consider $x \to 0^+$.
Multiplying through by $\frac{2}{\sin x} > 0$ yields

$$
1 \le \frac{x}{\sin x} \le \frac{1}{\cos x}
$$

Taking reciprocals gives

$$
\begin{align}
\cos x & \le \frac{\sin x}{x} & \le 1 \\
\implies \lim_{ x \to 0^+ } \cos x & \le \lim_{ x \to 0^+ } \frac{\sin x}{x} & \le \lim_{ x \to 0^+ } 1 \\
1 & \le \lim_{ x \to 0^+ } \frac{\sin x}{x} & \le 1
\end{align}
$$

$\therefore$ by the Squeeze Theorem,

$$
\lim_{ x \to 0^+ } \frac{\sin x}{x}=1
$$

For $x \to 0^-$, since $\frac{\sin x}{x}$ is an even function as demonstrated below

$$
\frac{\sin-x}{-x} = \frac{-\sin x}{-x} = \frac{\sin x}{x}
$$

It follows that $\lim_{ x \to 0^- } \frac{\sin x}{x} = 1$.
Hence,

$$
\lim_{ x \to 0 } \frac{\sin x}{x} = 1
$$

$\square$

## Derivative of a constant

> [!abstract] $\frac{d}{dx}c = 0$ for $c \in \mathbb{R}$

Let $f(x) = c$, then

$$
\begin{align}
f'(x) & = \lim_{ h \to 0 } \frac{f(x + h) - f(x)}{h} \\
 & = \lim_{ h \to 0 } \frac{c - c}{h} \\
 & = \lim_{ h \to 0 } \frac{0}{h} \\
 & = \lim_{ h \to 0 } 0 \\
 & = 0
\end{align}
$$

$\square$

## Derivative of function times a constant

> [!abstract]+
> Let $c \in \mathbb{R}$ and $f$ be a differentiable function, then
> 
> $$
> \frac{d}{dx}(cf(x)) = c \frac{d}{dx}f(x)
> $$

Let $g(x) = cf(x)$, then

$$
\begin{align}
\frac{d}{dx}(cf(x)) = g'(x) & = \lim_{ h \to 0 } \frac{g(x + h) - g(x)}{h} \\
 & = \lim_{ h \to 0 } \frac{cf(x + h) - cf(x)}{h} \\
 & = c\lim_{ h \to 0 } \frac{f(x + h) - f(x)}{h} \\
 & = cf'(x)
\end{align}
$$

$\square$

## Derivative of sum / difference

> [!abstract]+
> Let $f$ and $g$ be differentiable functions, then
> 
> $$
> \frac{\mathrm{d}}{\mathrm{d}x} (f(x) \pm g(x)) = \frac{\mathrm{d}}{\mathrm{d}x} f(x) \pm \frac{\mathrm{d}}{\mathrm{d}x} g(x)
> $$

Let $s(x) = f(x) \pm g(x)$, then

$$
\begin{align}
\frac{\mathrm{d}}{\mathrm{d}x} (f(x) \pm g(x)) = s'(x) & = \lim_{ h \to 0 } \frac{s(x + h) - s(x)}{h} \\
 & = \lim_{ h \to 0 } \frac{(f(x + h) \pm g(x + h)) - (f(x) \pm g(x))}{h} \\
 & = \lim_{ h \to 0 } \frac{(f(x + h) - f(x)) \pm(g(x + h) - g(x))}{h} \\
 & = \lim_{ h \to 0 } \frac{f(x + h) - f(x)}{h} \pm \lim_{ h \to 0 } \frac{g(x + h) - g(x)}{h} \\
 & = f'(x) \pm g'(x)
\end{align}
$$

$\square$

## Derivative of $\sin x$

> [!abstract] $\frac{\mathrm{d}}{\mathrm{d}x} \sin x = \cos x$

Let $f(x) = \sin x$.

$$
f'(x) = \lim_{ h \to 0 } \frac{f(x + h) - f(x)}{h} = \lim_{ h \to 0 } \frac{\sin(x + h) - \sin x}{h}
$$

Using the sine rule for sums,

$$
\begin{align}
 & = \lim_{ h \to 0 } \frac{\sin x\cos h + \cos x\sin h - \sin x}{h} \\
 & = \lim_{ h \to 0 } \frac{\sin x(\cos h - 1) + \cos x\sin h}{h} \\
 & = \lim_{ h \to 0 } \frac{\sin x(\cos h - 1)}{h} + \lim_{ h \to 0 } \frac{\cos x\sin h}{h} \\
 & = \sin x\lim_{ h \to 0 } \frac{\cos h - 1}{h} + \cos x\lim_{ h \to 0 } \frac{\sin h}{h} \\
 & = \cos x
\end{align}
$$

$\square$

## Derivative of $\cos x$

> [!abstract] $\frac{\mathrm{d}}{\mathrm{d}x} \cos x = -\sin x$

Let $f(x) = \sin x$.

$$
f'(x) = \lim_{ h \to 0 } \frac{f(x + h) - f(x)}{h} = \lim_{ h \to 0 } \frac{\cos(x + h) - \cos x}{h}
$$

Using the cosine rule for sums,

$$
\begin{align}
 & = \lim_{ h \to 0 } \frac{\cos x\cos h - \sin x\sin h - \cos x}{h} \\
 & = \lim_{ h \to 0 } \frac{\cos x(\cos h - 1) - \sin x\sin h}{h} \\
 & = \lim_{ h \to 0 } \frac{\cos x(\cos h - 1)}{h} - \lim_{ h \to 0 } \frac{\sin x\sin h}{h} \\
 & = \cos x\lim_{ h \to 0 } \frac{\cos h - 1}{h} - \sin x\lim_{ h \to 0 } \frac{\sin h}{h} \\
 & = -\sin x
\end{align}
$$

$\square$

## Derivative of $\tan x$

> [!abstract] $\frac{\mathrm{d}}{\mathrm{d}x}\tan x = \sec^2x$

$$
\begin{align}
\frac{d}{dx}\tan x & = \frac{d}{dx} \frac{\sin x}{\cos x} \\
 & = \frac{\cos x(\sin x)' - \sin x(\cos x)'}{\cos ^2x} \\
 & = \frac{\cos x\cos x+\sin x\sin x}{\cos ^2x} \\
 & = \frac{\cos ^2x + \sin ^2x}{\cos ^2x} \\
 & = \frac{1}{\cos ^2x} \\
 & = \sec ^2x
\end{align}
$$

$\square$

## Derivative of $\sec x$

> [!abstract] $\frac{\mathrm{d}}{\mathrm{d}x}\sec x = \sec x\tan x$

$$
\begin{align}
\frac{\mathrm{d}}{\mathrm{d}x} \sec x & = \frac{\mathrm{d}}{\mathrm{d}x} \frac{1}{\cos x} \\
 & = \frac{\cos x(1)' - (\cos x)'}{\cos^2x} \\
 & = \frac{\cos x\cdot0 - (-\sin x)}{\cos^2x} \\
 & = \frac{\sin x}{\cos^2x} \\
 & = \frac{1}{\cos x}\cdot \frac{\sin x}{\cos x} \\
 & = \sec x\tan x
\end{align}
$$

$\square$

## Derivative of $\csc x$

> [!abstract] $\frac{\mathrm{d}}{\mathrm{d}x}\csc x = -\csc x\cot x$

$$
\begin{align}
\frac{d}{dx}\csc x & = \frac{d}{dx} \frac{1}{\sin x} \\
 & = \frac{\sin x(1)' - (\sin x)'}{\sin ^2x} \\
 & =  \frac{\sin x\cdot0 - \cos x}{\sin^2x} \\
 & = -\frac{\cos x}{\sin^2x} \\
 & = -\frac{1}{\sin x}\cdot \frac{\cos x}{\sin x} \\
 & = -\csc x\cot x
\end{align}
$$

$\square$

## Derivative of $\cot x$

> [!abstract] $\frac{\mathrm{d}}{\mathrm{d}x}\cot x = -\csc^2x$

$$
\begin{align}
\frac{\mathrm{d}}{\mathrm{d}x} \cot x & = \frac{\mathrm{d}}{\mathrm{d}x} \frac{\cos x}{\sin x} \\
 & = \frac{\sin x(\cos x)'-\cos x(\sin x)'}{\sin^2x} \\
 & = \frac{-\sin^2x - \cos^2x}{\sin^2x} \\
 & = -\frac{\sin^2x + \cos^2x}{\sin^2x} \\
 & = -\frac{1}{\sin^2x} \\
 & = -\csc^2x
\end{align}
$$

$\square$

## Derivative of $\arcsin x$

> [!abstract] $\frac{\mathrm{d}}{\mathrm{d}x}\arcsin x = \frac{1}{\sqrt{1 - x^2}}$

Let $y = \arcsin x$ so $x = \sin y$.
Note that the range of $y = \arcsin x$ is $y\in\left[ -\frac{\pi}{2}, \frac{\pi}{2} \right]$.
Using implicit differentiation, we have

$$
\begin{align}
x & = \sin y \\
\frac{\mathrm{d}}{\mathrm{d}x} x & = \frac{\mathrm{d}}{\mathrm{d}x} \sin y \\
1 & = \cos y\cdot y' \\
y' & = \frac{1}{\cos y}
\end{align}
$$

We use $\sin^2y + \cos^2y = 1 \implies |\cos y|= \sqrt{1 - \sin^2y}$. Since $y\in\left[ -\frac{\pi}{2}, \frac{\pi}{2} \right]$, $\cos y\ge0$.
Then,

$$
\begin{align}
 & = \frac{1}{\sqrt{1 - \sin^2y}} \\
 & = \frac{1}{\sqrt{1 - x^2}}
\end{align}
$$

$\square$
## Derivative of $\arccos x$

> [!abstract] $\frac{\mathrm{d}}{\mathrm{d}x}\arccos x = -\frac{1}{\sqrt{1 - x^2}}$

Let $y = \arccos x$ so $x = \cos y$.
Note that the range of $y = \arccos x$ is $y\in[0, \pi]$.
Using implicit differentiation, we have

$$
\begin{align}
x & = \cos y \\
\frac{\mathrm{d}}{\mathrm{d}x} x & = \frac{\mathrm{d}}{\mathrm{d}x} \cos y \\
1 & = -\sin y\cdot y' \\
y' & = -\frac{1}{\sin y}
\end{align}
$$

We use $\sin^2y + \cos^2y = 1 \implies|\sin y|= \sqrt{1 - \cos^2y}$. Since $y\in[0, \pi]$,  $\sin y\ge0$.
Then,

$$
\begin{align}
 & = -\frac{1}{\sqrt{1 - \cos^2y}} \\
 & = -\frac{1}{\sqrt{1 - x^2}}
\end{align}
$$

$\square$

## Derivative of $\arctan x$

> [!abstract] $\frac{\mathrm{d}}{\mathrm{d}x}\arctan x = \frac{1}{1 + x^2}$

Let $y = \arctan x$ so $x = \tan y$. Using implicit differentiation, we have

$$
\begin{align}
x & = \tan y \\
\frac{\mathrm{d}}{\mathrm{d}x} x & = \frac{\mathrm{d}}{\mathrm{d}x} \tan y \\
1 & = \sec^2y\cdot y' \\
y' & = \frac{1}{\sec^2y} \\
y' & = \frac{1}{1 + \tan^2y} \\
y' & = \frac{1}{1 + x^2}
\end{align}
$$

$\square$

## Derivative of $\mathrm{arcsec} x$

> [!abstract] $\frac{\mathrm{d}}{\mathrm{d}x}\mathrm{arcsec}x = \frac{1}{|x|\sqrt{x^2 - 1}}$

Let $y = \mathrm{arcsec} x$ so $x = \sec y$, equivalently $\cos y = \frac{1}{x}$.
Note that the range and domain of $y = \mathrm{arcsec} x$ are $y\in[0, \frac{\pi}{2}) \cup(\frac{\pi}{2}, \pi]$ and $x\in(-\infty, -1] \cup [1, \infty)$, respectively.
Using implicit differentiation, we have

$$
\begin{align}
\cos y & = \frac{1}{x} \\
\frac{\mathrm{d}}{\mathrm{d}x} \cos y & = \frac{\mathrm{d}}{\mathrm{d}x} \frac{1}{x} \\
-\sin y\cdot y' & = -\frac{1}{x^2} \\
y' & = \frac{1}{x^2\sin y}
\end{align}
$$

We use $\sin^2y + \cos^2y = 1 \implies |\sin y| = \sqrt{1 - \cos^2y}$. Since $y\in[0, \frac{\pi}{2}) \cup(\frac{\pi}{2}, \pi]$, $\sin y\ge 0$.
Then,

$$
\begin{align}
 & = \frac{1}{x^2\sqrt{1 - \cos^2y}} \\
 & = \frac{1}{x^2\sqrt{1 - \frac{1}{x^2}}} \\
 & = \frac{1}{x^2\sqrt{\frac{x^2 - 1}{x^2}}} \\
 & = \frac{1}{x^2\cdot \frac{1}{|x|}\sqrt{x^2 - 1}}
\end{align}
$$

If $x\in(-\infty, -1]$ (i.e. negative values), then $|x| = -x$ and $\frac{x^2}{|x|} = -x$. If $x\in[1, \infty)$ (i.e. positive values), then $|x| = x$ and $\frac{x^2}{|x|} = x$. In both cases, $\frac{x^2}{|x|} = |x|$, hence

$$
= \frac{1}{|x|\sqrt{x^2 - 1}}
$$

$\square$

## Derivative of $\mathrm{arccsc} x$

> [!abstract] $\frac{\mathrm{d}}{\mathrm{d}x}\mathrm{arccsc} x = -\frac{1}{|x|\sqrt{x^2 - 1}}$

Let $y = \mathrm{arccsc} x$ so $x = \csc y$, equivalently $\sin y = \frac{1}{x}$.
Note that the range and domain of $y = \mathrm{arccsc} x$ are $y\in\left[ -\frac{\pi}{2}, 0) \cup(0, \frac{\pi}{2} \right]$ and $x\in(-\infty, -1] \cup [1, \infty)$, respectively.
Using implicit differentiation, we have

$$
\begin{align}
\sin y & = \frac{1}{x} \\
\frac{\mathrm{d}}{\mathrm{d}x} \sin y & = \frac{\mathrm{d}}{\mathrm{d}x} \frac{1}{x} \\
\cos y\cdot y' & = -\frac{1}{x^2} \\
y' & = -\frac{1}{x^2\cos y}
\end{align}
$$

We use $\sin^2y + \cos^2y = 1 \implies |\cos y| = \sqrt{1 - \sin^2y}$. Since $y\in\left[ -\frac{\pi}{2}, 0) \cup(0, \frac{\pi}{2} \right]$, $\cos y\ge 0$.
Then,

$$
\begin{align}
 & = -\frac{1}{x^2\sqrt{1 - \sin^2y}} \\
 & = -\frac{1}{x^2\sqrt{1 - \frac{1}{x^2}}} \\
 & = -\frac{1}{x^2\sqrt{\frac{x^2 - 1}{x^2}}} \\
 & = -\frac{1}{x^2\cdot \frac{1}{|x|}\sqrt{x^2 - 1}}
\end{align}
$$

If $x\in(-\infty, -1]$ (i.e. negative values), then $|x| = -x$ and $\frac{x^2}{|x|} = -x$. If $x\in[1, \infty)$ (i.e. positive values), then $|x| = x$ and $\frac{x^2}{|x|} = x$. In both cases, $\frac{x^2}{|x|} = |x|$, hence

$$
= -\frac{1}{|x|\sqrt{x^2 - 1}}
$$

$\square$

## Derivative of $\mathrm{arccot} x$

> [!abstract] $\frac{\mathrm{d}}{\mathrm{d}x}\mathrm{arccot} x = -\frac{1}{1 + x^2}$

Let $y = \mathrm{arccot} x$ so $x = \cot y$. Using implicit differentiation, we have

$$
\begin{align}
x & = \cot y \\
\frac{\mathrm{d}}{\mathrm{d}x} x & = \frac{\mathrm{d}}{\mathrm{d}x} \cot y \\
1 & = -\csc^2y\cdot y' \\
y' & = -\frac{1}{\csc^2y} \\
y' & = -\frac{1}{1 + \cot^2y} \\
y' & = -\frac{1}{1 + x^2}
\end{align}
$$

$\square$

## Derivative of $\log_bx$

> [!abstract] $\frac{\mathrm{d}}{\mathrm{d}x} \log_bx = \frac{1}{x\ln b}$

Note that

$$
\lim_{ n \to \infty } \left( 1 + \frac{1}{n} \right)^n \equiv \lim_{ m \to 0 } (1 + m)^{1/m} = e
$$

Let $f(x) = \log_bx$, then

$$
\begin{align}
f'(x) & = \lim_{ h \to 0 } \frac{f(x + h) - f(x)}{h} \\
 & = \lim_{ h \to 0 } \frac{\log_b(x + h) - \log_bx}{h} \\
 & = \lim_{ h \to 0 } \left( \frac{1}{h}\log_b \frac{x + h}{x} \right) \\
 & = \lim_{ h \to 0 } \left( \frac{1}{h}\log_b \left( 1 + \frac{h}{x} \right) \right) \\
 & = \lim_{ h \to 0 } \left( \frac{1}{x}\cdot \frac{x}{h}\log_b\left( 1 + \frac{h}{x} \right) \right) \\
 & = \frac{1}{x}\lim_{ h \to 0 } \log_b\left( 1 + \frac{h}{x} \right)^{x/h}
\end{align}
$$

Since $\log_b$ is continuous,

$$
\begin{align}
 & = \frac{1}{x}\log_b \lim_{ h \to 0 } \left( 1 + \frac{h}{x} \right)^{x/h} \\
 & = \frac{1}{x}\log_b \lim_{ h \to 0 } \left( 1 + \frac{h}{x} \right)^{1/(h/x)}
\end{align}
$$

Using definition of $e$ with $m = \frac{h}{x}$,

$$
= \frac{1}{x}\log_be
$$

Using the change of base rule,

$$
\begin{align}
 & = \frac{1}{x} \frac{\ln e}{\ln b} \\
 & = \frac{1}{x\ln b}
\end{align}
$$

$\square$

## Derivative of $a^x$

> [!abstract] $\frac{\mathrm{d}}{\mathrm{d}x} a^x = a^x\ln a$

Let $y = a^x$ so $x = \log_ay$. Using implicit differentiation, we have

$$
\begin{align}
x & = \log_ay \\
\frac{\mathrm{d}}{\mathrm{d}x} x & = \frac{\mathrm{d}}{\mathrm{d}x} \log_ay \\
1 & = \frac{1}{y\ln a}\cdot y' \\
y' & = y\ln a \\
y' & = a^x\ln a
\end{align}
$$

$\square$

## Differentiability implies continuity

We have to show that $f(a) = \lim_{ x \to a }f(x)$. We know that $f$ is differentiable at $a$, so

$$
f'(a) = \lim_{ x \to a } \frac{f(x) - f(a)}{x - a}
$$

is certain to exist.
Then,

$$
\begin{align}
f'(x) & = \lim_{ x \to a } \frac{f(x) - f(a)}{x - a} \\
f'(x) & = \frac{\lim_{ x \to a } (f(x) - f(a))}{\lim_{ x \to a } (x - a)} \\
f'(x)\cdot \lim_{ x \to a } (x - a) & = \lim_{ x \to a } (f(x) - f(a)) \\
f'(x)\cdot 0 & = \lim_{ x \to a } f(x) - \lim_{ x \to a } f(a) \\
\lim_{ x \to a } f(a) & = \lim_{ x \to a } f(x) \\
f(a) & = \lim_{ x \to a } f(x)
\end{align}
$$

> [!important] The contrapositive of the theorem says non-continuity $\implies$ non-differentiability.

> [!important] The converse is not necessarily true, i.e. continuity doesn't imply differentiability.

## Constant on interval when derivative is 0

> [!abstract] If $f'(x) = 0\ \forall x\in(a, b)$, then $f$ is constant on $(a, b)$.

We want to show that for any $x_1, x_2\in(a, b)$ where $x_1 < x_2$, $f(x_1) = f(x_2)$.
Since $f$ is differentiable on $(a, b)$, it must be differentiable on $(x_1, x_2)$ and continuous on $[x_1, x_2]$.
$\therefore$ by M. V. T., $\exists c\in(x_1, x_2)$ such that

$$
\Delta f(x) = f'(c)\Delta x
$$

Since $f'(x) = 0\ \forall x\in(a, b)$, we have

$$
\Delta f(x) = 0 \implies f(x_2) = f(x_1)
$$

Therefore, $f$ has the same value at any two numbers $x_1$ and $x_2$ in $(a, b)$. This means that $f$ is constant on $(a, b)$.

$\square$