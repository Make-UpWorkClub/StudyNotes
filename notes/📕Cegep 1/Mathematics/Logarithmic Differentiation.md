---
tags:
  - Cegep1
  - Mathematics
date: 2024-10-23T15:58:07
---

# Logarithmic differentiation

Used to simplify [[Derivative|differentiation]] or differentiate otherwise impossible equations

0. Preferably convert explicit differentiation to implicit by replacing $f(x)$ by $y$
1. Apply $\ln$
2. Simplify
3. Differentiate
4. Solve for the derivative

## Examples

Find $y'$ when $y = x^x$.

$$
\begin{align}
y & = x^x \\
\implies \ln y & = \ln x \\
 & = x\ln x \\
\implies \frac{\mathrm{d}}{\mathrm{d}x} \ln y & = \frac{\mathrm{d}}{\mathrm{d}x} (x\ln x) \\
\frac{y'}{y} & = \ln x + x\cdot \frac{1}{x} \\
 & = \ln x + 1 \\
y' & = y(\ln x + 1) \\
 & = x^x(\ln x + 1)
\end{align}
$$

---

Find $y'$ when $y = x^{x^x}$.

$$
\begin{align}
y & = x^{x^x} \\
\implies \ln y & = \ln x^{x^x} \\
\ln y & = x^x\ln x \\
\implies \ln \ln y & = \ln(x^x\ln x) \\
 & = \ln x^x + \ln \ln x \\
 & = x\ln x + \ln \ln x \\
\frac{\mathrm{d}}{\mathrm{d}x} \ln \ln y & = \frac{\mathrm{d}}{\mathrm{d}x} (x\ln x + \ln \ln x) \\
\frac{(\ln y)'}{\ln y} & = \ln x + x\cdot \frac{1}{x} + \frac{(\ln x)'}{\ln x} \\
\frac{y'}{y\ln y} & = \ln x + 1 + \frac{x'}{x\ln x} \\
y' & = y\ln y\left( \ln x + 1 + \frac{1}{x\ln x} \right) \\
 & = x^{x^x}\ln x^{x^x}\left( \ln x + 1 + \frac{1}{x\ln x} \right)
\end{align}
$$