---
tags:
  - Cegep1
  - Mathematics
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
 & = \sin \frac{x}{\cos^2x} \\
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


## Derivative of $\log_bx$

> [!abstract] $\frac{\mathrm{d}}{\mathrm{d}x} \log_bx = \frac{1}{x\ln b}$

Note that

$$
\lim_{ n \to \infty } (1)
$$

Let $f(x) = \log_bx$, then

## Derivative of $\arcsin x$

## Derivative of $\arccos x$



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