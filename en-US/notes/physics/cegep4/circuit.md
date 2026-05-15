---
tags:
  - phys/elec
  - cegep/4
date: 2026-03-13T11:08:25
---

# circuit

Closed path in which [[électricité|electricity]] flows

> [!abstract] short circuit
> Bypass of certain circuit branches due to zero resistance path

## Properties

### In series

$$
\begin{align}
U_T & = \sum_iU_i \\
\Delta V_{eq} & = \sum_i\Delta V_i \\
I_T & = I_1 = \dots = I_n
\end{align}
$$

### In parallel

$$
\begin{align}
U_T & = U_1 = \dots = U_n \\
\Delta V_{eq} & = \Delta V_1 = \dots = \Delta V_n \\
I_T & = \sum_iI_i
\end{align}
$$

## Parts

### Junction

Point where the number of available paths changes

### Branch

Segment between two junctions

### Loop

Closed path around the circuit

## Examples

> ![[circuit 1]]

$$
\begin{align}
\begin{cases}
I_1 - I_2 - I_3 & = 0 \\
-5I_1 - 10I_2 + 12 - 6 & = 0 \\
10I_2 - 3I_3 + 6 - 8 & = 0 \\
-5I_1 - 3I_3 + 12 - 8 & = 0
\end{cases} \\
\begin{bmatrix}
1 & -1 & -1 & \bigm| & 0 \\
-5 & -10 & 0 & \bigm| & -6 \\
0 & 10 & -3 & \bigm| & 2 \\
-5 & 0 & -3 & \bigm| & -4
\end{bmatrix} & = \begin{bmatrix}
1 & 0 & 0 & \bigm| & \frac{58}{95} \\
0 & 1 & 0 & \bigm| & \frac{28}{95} \\
0 & 0 & 1 & \bigm| & \frac{6}{19} \\
0 & 0 & 0 & \bigm| & 0
\end{bmatrix} \\
\begin{cases}
I_1 & = \frac{58}{95}\pu{A} \\
I_2 & = \frac{28}{95}\pu{A} \\
I_3 & = \frac{6}{19}\pu{A}
\end{cases}
\end{align}
$$