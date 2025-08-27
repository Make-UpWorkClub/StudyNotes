---
tags:
  - Calculus
  - cegep/1
date: 2024-09-20T14:21:52
---

%% [[limit]] %%

# Continuity

Quality of a function:

- At a point $c$ if $\lim_{ x \to c }f(x) = f(c)$
- Over an open interval if every point of the interval is continuous
- Over a closed interval if the open interval is continuous and the left / right endpoints are right / left continuous

## Sidedness

Left continuity at $c$ if $\lim_{ x \to c^- }f(x) = f(c)$
Right continuity at $c$ if $\lim_{ x \to c^+ }f(x) = f(c)$

## Properties & theorems

1. $f@g$ is continuous at $c$, where $@$ is any of addition, subtraction, multiplication or division (when $@$ = division, $g(c) \ne 0$), if $f$ and $g$ are continuous at $c$
2. $f\circ g$ is continuous at $c$ if $g$ is continuous at $c$ and $f$ is continuous at $g(c)$
3. Functions continuous over their domain:
	- Polynomials
	- Rational functions
	- Root functions
	- Trigonometric functions
	- Inverse trigonometric functions
	- Exponential functions
	- Logarithmic functions

## Evaluation

To find if $f(x)$ is continuous at $c$, evaluate $\lim_{ x \to c }f(x) = f(c)$.
