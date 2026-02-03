---
tags:
  - bio/astro
  - cegep/3
date: 2025-12-15T01:00:58
---

# Kepler's Laws

## First Law

The orbit of [[planet|planets]] around the sun is an ellipse.

$$
\begin{align}
R_p & = a(1 - e) \\
R_a & = a(1 + e)
\end{align}
$$

- $e$: **eccentricity** (measure of how elliptical the orbit is)
- $R_p$: **periapsis** (closest distance)
- $R_a$: **apoapsis** (farthest distance)

## Second Law

A planet sweeps out equal areas of its orbit in equal times.
`Aka.` conservation of angular momentum

## Third Law

More distant planets orbit at slower speeds, obeying the relationship

$$
T^2 = \frac{4\pi^2}{G(M_* + M_p)}a^3
$$

When measuring everything in solar units and $M_* \gg M_p$:

$$
T^2 = \frac{a^3}{M_*}
$$

Therefore, to determine the mass of a planet:

$$
m_p\sin i \approx \frac{(v_*\sin i)\sqrt{1 - e^2}}{28.4}T^{\frac{1}{3}}M_*^{\frac{2}{3}}
$$