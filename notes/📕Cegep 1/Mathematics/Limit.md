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

## Approaching side

By default, $x$ can approach from either side
For left-side ($x < a$) / right-side ($a < x$) limit, superscript $a$ with $-$ / $+$
Superscript the limit with $-$ / $+$ depending on whether it is approached from the 

> [!example]+ Left-side limit
> $f(x)$ has the left-side limit $M$ as $x$ approaches $a$:
> $\lim_{ x \to a^- }f(x) = M$

> [!example]+ Right-side limit
> $f(x)$ has the left-side limit $R$ as $x$ approaches $a$:
> $\lim_{ x \to a^+ }f(x) = R$

> [!important] Existence of a limit theorem
> $\lim_{ x \to a }f(x) = L \iff \lim_{ x \to a^- }f(x) = \lim_{ x \to a^+ }f(x) = L$

> [!important] The limit is approached but never reached

## Properties

1. $\lim_{ x \to a }k = k$
2. $\lim_{ x \to a }x = a$
3. $\lim_{ x \to a }kf(x) = k\lim_{ x \to a }f(x) = kL$
4. $\lim_{ x \to a }(f@g)(x) = \lim_{ x \to a }f(x)@\lim_{ x \to a }g(x) = L@M$, where $@$ is any of addition, subtraction, multiplication or division (when $@$ = division, $M \ne 0$)
5. $\lim_{ x \to a }f^n(x) = (\lim_{ x \to a }f(x))^n = L^n$