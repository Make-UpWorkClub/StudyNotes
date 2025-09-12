---
tags:
  - phys/wave
  - cegep/3
date: 2025-09-10T17:57:26
---

# sound

Longitudinal mechanical [[wave]] that consists of compressions and rarefactions of the medium

- Travelling speed in air at 20°C is $243\pu{m/s}$.
- Travels faster at higher temperatures
- Human audible frequency: 20-20000Hz

## Intensity

Measured in **decibels**:

$$
\beta = 10\pu{dB}\log \frac{I}{I_o} 
$$

- Human audible intensity: $I_o = 10^{-12}$ to $1\pu{W/m^2}$
- Low frequencies correspond to lower pitch, high frequencies correspond to higher pitch

## Examples

> A loudspeaker suspended high off the ground emits 35.0 J of energy per second, with a uniform distribution in all directions. A small detector is located 55.0 m from the speaker.

> 1. What is the sound intensity at the detector’s position?

$$
\begin{align}
I & = \frac{P}{4\pi r^2} \\
 & = \frac{35}{4\pi \cdot55^2} \\
 & \approx 0.009087\pu{W/m^2}
\end{align}
$$

> 2. How much energy will be transferred to the detector in 60 seconds, if the detector has a surface area of 0.01 $\pu{m^2}$?

$$
\begin{align}
E & = ItS \\
 & = 0.009087 \cdot60 \cdot0.01 \\
 & \approx 0.005452J
\end{align}
$$

> The sound intensity level from one solo flute is 70 dB. If 100 identical flutists standing close together play in unison, what will be the sound intensity level?

$$
\begin{align}
\beta_i & = 10\log \frac{I_i}{I_o} \\
70 & = 10\log \frac{I_i}{I_o} \\
10^7 & = \frac{I_i}{I_o} \\
I_i & = 10^{-5}\pu{W/m^2} \\
 \\
\beta_f & = 10\log \frac{I_f}{I_o} \\
 & = 10\log \frac{100 \cdot10^{-5}}{I_o} \\
 & = 10\log 10^9 \\
 & = 90\pu{dB}
\end{align}
$$