---
tags:
  - mat/algebra
  - sec/5
date: 2024-02-05 14:09
---

# Coniques

[Alloprof](https://www.alloprof.qc.ca/fr/eleves/bv/mathematiques/les-coniques-m1326)

![[Sections coniques.png|300]]

> [!abstract]+ Lieu géométrique
> Ensemble de points d'un espace géométrique qui sont caractérisés par une propriété métrique commune

^8b160e

## Cercle

[[coniques#^8b160e|Lieu géométrique]] de tous les points dont la distance à *1* point (centre) est constante
Sous-ensemble de l’[[coniques#Ellipse|ellipse]]

Forme générale : $x^2 + y^2 + Dx + Ey + F = 0$ où $F < (\cfrac{D}{2})^2 + (\cfrac{E}{2})^2$

Forme canonique :
$$
\begin{align}
(x - h)^2 + (y - k)^2 &= r^2 \\
D &= -2h \\
E &= -2k \\
F &= h^2 + k^2 - r^2
\end{align}
$$

## Ellipse

[[coniques#^8b160e|Lieu géométrique]] de tous les points dont la *somme* des distances à *2* points (foyers) est constante

Forme générale : $Ax^2 + By^2 + Dx + Ey + F = 0$ où $A$ et $B$ sont différents et de même signe

Forme canonique :
$$
\begin{align}
\cfrac{(x - h)^2}{a^2} + \cfrac{(y - k)^2}{b^2} &= 1 \\
\text{Longueurs des axes de symétrie} &: 2a, 2b \\
\text{Somme des distances aux foyers} &: max(2a, 2b)
\end{align}
$$

## Parabole

[[coniques#^8b160e|Lieu géométrique]] de tous les points dont les distances à *1* point (foyer) et à une droite (directive) sont égales
Courbe divergente crée par une section conique *parallèle*

|            | Forme canonique (verticale) | Forme canonique (horizontale) |
| ----------:|:---------------------------:|:-----------------------------:|
|   Équation |   $(x - h)^2 = 4c(y - k)$   |    $(y - k)^2 = 4c(x - h)$    |
|     Sommet |        $(h, c + k)$         |         $(c + h, k)$          |
| Directrice |         $y = k - c$         |          $x = h - c$          |

## Hyperbole

[[coniques#^8b160e|Lieu géométrique]] de tous les points dont la *différence absolue* des distances à *2* points (foyers) est constante
Courbe qui s’approche de deux asymptotes. Toujours en paire

Forme générale : $Ax^2 + By^2 + Dx + Ey + F = 0\text{ où }AB$

|            |              Forme canonique (verticale)               |             Forme canonique (horizontale)             |
| ----------:|:------------------------------------------------------:|:-----------------------------------------------------:|
|   Équation | $\cfrac{(x - h)^2}{a^2} - \cfrac{(y - k)^2}{b^2} = -1$ | $\cfrac{(x - h)^2}{a^2} - \cfrac{(y - k)^2}{b^2} = 1$ |
|        $c$ |                      $a^2 + b^2$                       |                      $a^2 + b^2$                      |
|    Sommets |               $(h, -b + k),\ (h, b + k)$               |              $(-a + h, k),\ (a + h, k)$               |
|     Foyers |               $(h, -c + k),\ (h, c + k)$               |              $(-c + h, k),\ (c + h, k)$               |
| Asymptotes |            $y = \pm\cfrac{b}{a}(x - h) + k$            |           $y = \pm\cfrac{b}{a}(x - h) + k$            |

> [!note]- Preuve des asymptotes
> $$
\begin{align}
\cfrac{x^2}{a^2} - \cfrac{y^2}{b^2} &= \pm 1 \\
\cfrac{y^2}{b^2} &= \cfrac{x^2}{a^2} \mp 1 \\
y^2 &= b^2(\cfrac{x^2}{a^2} \mp \cfrac{a^2}{a^2}) \\
y &= \sqrt{ \cfrac{b^2}{a^2}(x^2 \mp a^2) } \\
y &\approx \pm\cfrac{b}{a}x
\end{align}
$$