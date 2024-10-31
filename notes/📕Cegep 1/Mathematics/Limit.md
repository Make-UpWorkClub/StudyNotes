---
tags:
  - Cegep1
  - Mathematics
date: 2024-09-02T18:32:33
---

# Limit

Use to study the output of a function as the input(s) approach something (a number or infinity)

Of the form $\lim_{ x \to a }f(x) = L$
Read as:

- $f(x)$ has the limit $L$ as $x$ approaches $a$
- $L$ is the limit as $x$ approaches $a$ of $f$ of $x$
- $L$ is the limit of $f$ of $x$ as $x$ approaches $a$

> [!important]+
> The limit must be a number
> When the limit is equal to $\infty$, we say the limit **diverges**

## Sidedness

By default, $x$ can approach from either side
For left-side ($x < a$) / right-side ($a < x$) limit, superscript $a$ with $-$ / $+$
Superscript the limit with $-$ / $+$ depending on whether it is approached from the 

> [!example]+ Left-side limit
> $f(x)$ has the left-side limit $M$ as $x$ approaches $a$:
> $\lim_{ x \to a^- }f(x) = M$

> [!example]+ Right-side limit
> $f(x)$ has the left-side limit $R$ as $x$ approaches $a$:
> $\lim_{ x \to a^+ }f(x) = R$

> [!important]+ Existence of a limit theorem
> $\lim_{ x \to a }f(x) = L \iff \lim_{ x \to a^- }f(x) = \lim_{ x \to a^+ }f(x) = L$
> Otherwise, we say the limit **D.N.E.** (does not exist)

> [!important] The limit is approached but never reached

## Properties & theorems

- $\lim_{ x \to a }k = k$
- $\lim_{ x \to a }x = a$
- $\lim_{ x \to a }kf(x) = k\lim_{ x \to a }f(x) = kL$
- $\lim_{ x \to a }(f@g)(x) = \lim_{ x \to a }f(x)@\lim_{ x \to a }g(x) = L@M$, where $@$ is any of addition, subtraction, multiplication or division (when $@$ = division, $M \ne 0$)
- $\lim_{ x \to a }f^n(x) = (\lim_{ x \to a }f(x))^n = L^n$
- $\lim_{ x \to a } \frac{\sin g(x)}{g(x)} = 1$, where $a \in \mathbb{R}$ or $a = \infty$ and $g(a) = 0$

### Direct substitution property

If $f(x)$ is a polynomial with $x = a$ in its domain, then $\lim_{ x \to a }f(x) = f(a)$

## Evaluation

For a generic limit $\lim_{ x \to a }f(x)$:

1. If evaluating a piecewise function at boundary of two pieces, the left and right limits need to be considered;
2. Substitute $a$ into $f(x)$ using the direct substitution property. If the result is an indeterminate form, follow the steps below.

### Indeterminate forms

Multiple ways to solve
All indeterminate forms can be converted to use l'Hôpital's Rule.

#### $\frac{0}{0}$

For a limit $\lim_{ x \to a }\frac{P(x)}{Q(x)}$
where $P(x)$ and $Q(x)$ are polynomials such that $P(a) = Q(a) = 0$,

first rationalize the fraction.

Because **it is always possible to factorize a polynomial equal to 0**, we factorize $\frac{P(x)}{Q(x)}$ either:

1. to $\frac{(x - a)P'(x)}{(x - a)Q'(x)}$ and cancel $(x - a)$, or
2. with long division.

Now that it no longer contains the factor that makes it 0, we can solve the limit as usual.

#### $\frac{\infty}{\infty}$

For a limit $\lim_{ x \to \infty } \frac{P(x)}{Q(x)}$ evaluating to $\pm\frac{\infty}{\infty}$,
there are three possible answers:

1. $0$ when $deg(P) < deg(Q)$
2. $\pm \infty$ when $deg(P) > deg(Q)$
3. $\mathbb{R}_*$ when $deg(P) = deg(Q)$

99% of the time, forcefully factorize the dominant term.
Otherwise, rationalize.

> [!example]- $\lim_{ x \to \infty } \frac{x\sqrt{ x + 1 }(1 - 2\sqrt{ x^2 - 3 })}{7 - 6x + 4x^3}$
> When $x \to \infty$, limit = $-\frac{\infty}{\infty}$.
> We factorize:
> 
> $$
> \lim_{ x \to \infty } \frac{x\sqrt{ x + 1 }(1 - 2\sqrt{ x^2 - 3 })}{7 - 6x + 4x^3} = \lim_{ x \to \infty } \frac{x\sqrt{ x }\sqrt{ 1 + \frac{1}{x} }\left( 1 - 2|x|\sqrt{ 1 - \frac{3}{x^2} } \right)}{x^3\left( \frac{7}{x^3} - \frac{6}{x^2} + 4 \right)}
> $$
> 
> Since $x \to \infty$, $|x| = x$.
> 
> $$
> \begin{align}
> \lim_{ x \to \infty } \frac{x\sqrt{ x }\sqrt{ 1 + \frac{1}{x} }\left( 1 - 2x\sqrt{ 1 - \frac{3}{x^2} } \right)}{x^3\left( \frac{7}{x^3} - \frac{6}{x^2} + 4 \right)} & = \lim_{ x \to \infty } \frac{x^2\sqrt{ x }\sqrt{ 1 + \frac{1}{x} }\left( \frac{1}{x} - 2\sqrt{ 1 - \frac{3}{x^2} } \right)}{x^3\left( \frac{7}{x^3} - \frac{6}{x^2} + 4 \right)} \\
>  & = \frac{\sqrt{ 1 + \frac{1}{x} }\left( \frac{1}{x} - 2\sqrt{ 1 - \frac{3}{x^2} } \right)}{\sqrt{ x }\left( \frac{7}{x^3} - \frac{6}{x^2} + 4 \right)} \\
>  & = 0
> \end{align}
> $$

#### $\infty-\infty$

1. Factorize
2. Combine
3. Rationalize

> [!example]- $\lim_{ t \to 0 }\left( \frac{1}{t\sqrt{ t + 1 }} - \frac{1}{t} \right)$
> if $t = 0$, limit = $\frac{1}{0} - \frac{1}{0}$.
> Combining the two fractions gives $\lim_{ t \to 0 } \frac{1 - \sqrt{ t + 1 }}{t\sqrt{ t + 1 }}$.
> 
> $$
> \begin{align}
> \frac{1 - \sqrt{ t + 1 }}{t\sqrt{ t + 1 }} & = \frac{t}{t\sqrt{ t + 1 }(1 + \sqrt{ t + 1 })} \\
>  & = \frac{1}{\sqrt{ t + 1 } + t + 1}
> \end{align}
> $$
> 
> Substituting $0$ into $t$ gives $\frac{1}{2}$.

#### 
### Limit at infinity

1. Forcefully factorize dominant term
2. Rationalize
3. Combine