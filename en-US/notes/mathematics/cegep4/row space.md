---
tags:
  - mat/algebra
  - cegep/4
date: 2026-04-22T14:22:27
---

# row space

[[Subspace]] of $\mathbb{R}^n$ consisting of the [[espace engendré|span]] of row vectors of a matrix with $n$ columns
`Sym.` $\mathrm{Row}()$
`Ant.` [[column space]]

## Properties

> $$
> \mathrm{dim}(\mathrm{Row}(A)) = \mathrm{rank}(A)
> $$

## Evaluation

To find a basis for $\mathrm{Row}(A)$, apply REF and select all non-zero vectors.