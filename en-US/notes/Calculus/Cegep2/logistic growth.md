---
tags:
  - Calculus
  - Cegep/2
date: 2025-04-11T16:06:21
---

# Logistic Growth

Growth rate of a function $y$ such that the derivative of $y$ is proportional to both $y$ and the difference between $y$ and the carrying capacity $M$

$$
\begin{align}
y' & \propto y(M - y) \\
y' & = ky(M - y) \\
y & = \frac{r}{M}y(M - y)
\end{align}
$$

## Examples

> A rumour is spreading in a population of 1700. Four people start the rumour and 3 days later 300 people know.
>
> 1. Find the function $P(t)$ that models the population after $t$ hours.
> 2. How many people will know after four days?

1.

$$
\begin{align}
\frac{\mathrm{d}P}{\mathrm{d}t} & = \frac{r}{M}P(M - P) \\
\frac{\mathrm{d}P}{\mathrm{d}t} & = \frac{r}{1700}P(1700 - P) \\
\int \frac{1700}{1700 - P} \, \mathrm{d}P & = \int r \, \mathrm{d}t \\
\int \frac{1}{P} \, \mathrm{d}P + \int \frac{1}{1700 - P} \, \mathrm{d}P & = rt + C \\
\ln |P| - \ln |1700 - P| & = rt + C \\
\ln \left| \frac{P}{1700 - P} \right| & = rt + C \\
\frac{P}{1700 - P} > 0 \implies \frac{P}{1700 - P} & = e^{rt + C} \\
\frac{P}{1700 - P} & = \frac{1}{424} e^{rt} \\
P & = \frac{1700}{424}e^{rt} - \frac{P}{424}e^{rt} \\
P\left( 1 - \frac{1}{424}e^{rt} \right) & = \frac{1700}{424}e^{rt} \\
P & = \frac{1700e^{rt}}{424 + e^{rt}} \\
 \\
300 & = \frac{1700e^{3r}}{424 + e^{3r}} \\
127200 + 300e^{3r} & = 1700e^{3r} \\
r & \approx 1.5031 \\
\therefore P(t) & = \frac{1700e^{1.5031t}}{424 + e^{1.5031t}}
\end{align}
$$

2.

$$
P(4) = \frac{1700e^{1.5031\cdot4}}{424 + e^{1.5031\cdot 4}} \approx 834.135
$$
