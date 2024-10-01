---
tags:
  - Cegep1
  - Mathematics
date: 2024-10-01T10:00:10
---

# Proofs

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