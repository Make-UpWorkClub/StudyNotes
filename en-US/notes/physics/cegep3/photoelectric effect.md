---
tags:
  - phys/wave
  - cegep/3
date: 2025-10-15T13:13:08
---

# photoelectric effect

Phenomenon where [[electron|electrons]] are emitted by shining [[electromagnetic radiation|light]] on some surfaces

$$
E_\text{light} = hf = K_\text{max} + E_0
$$

- $K_\text{max}$: maximum kinetic energy of freed electron
- $E_0$: minimum energy to free an electron, `aka.` work function
	- Depends on surface

## Continuous vs discrete models

==Incorrect== model using continuous classical physics:

- Light intensity *positively* influences $K_\text{max}$.
- Light intensity positively influences frequency of ejection.
- Light frequency *doesn't matter*.

==Correct== model using discrete quantum physics:

- Light intensity *doesn't* influence $K_\text{max}$.
- Light intensity positively influences frequency of ejection.
- Light frequency *positively influences* $K_\text{max}$.
- There exists a **cutoff frequency** $f_0$ (minimum frequency for ejection).
	- $f > f_0$: electrons get ejected right away.
	- $f < f_0$: electrons never get ejected.

## Examples

> When ultraviolet light with a wavelength of 400 nm falls on a certain metal surface, the maximum kinetic energy of the emitted photoelectrons is measured to be 1.10eV.

> 1. What is the work function for this metal?

$$
\begin{align}
E_0 & = hf - K_{max} \\
 & = 4.14 \cdot 10^{-15} \cdot \frac{3 \cdot 10^8}{4 \cdot 10^{-7}} - 1.10 \\
 & \approx 2.005\pu{eV}
\end{align}
$$

> 2. What is the cutoff frequency for this metal?

$$
\begin{align}
f_0 & = \frac{E_0}{h} \\
 & = \frac{2.005}{4.14 \cdot 10^{-15}} \approx 4.8430 \cdot 10^{14}\pu{Hz}
\end{align}
$$

> 3. What is the maximum kinetic energy of the photoelectrons when light of wavelength 300 nm falls on the same surface?

$$
\begin{align}
K_{max} & = hf - E_0 \\
 & = 4.14 \cdot 10^{-15} \cdot \frac{3 \cdot 10^8}{3 \cdot 10^{-7}} - 2.005 \approx 2.135\pu{eV}
\end{align}
$$