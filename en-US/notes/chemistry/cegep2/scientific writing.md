---
tags:
  - chem
  - cegep/2
date: 2025-01-20T14:37:08
---

%% [[Lab]] %%

# Scientific Writing

## Sections

### Abstract

Summary of the whole experiment

- 100-300 words short paragraph
- Written last
- No citations

Structure:

1. Introduction (background or problem)
2. Presentation of experiment & justification of purpose
3. Method (description of methodology)
4. Results
5. Discussion (interpretation of results)

> [!example]+
> 1. Knuzzles are everyone’s favorite pet, but they are notoriously difficult to bring to full size in a domestic environment.
> 2. In this experiment, we test one of the emerging commercial products (Treatment X) promoted to ==assist knuzzle growth==.
> 3. In three separate trials, we applied Treatment X to five commercially bought knuzzles for a period of ten days, while maintaining a batch of five untreated knuzzles under otherwise identical conditions.
> 4. Our results indicated that the growth of the treated group (10.1 ± 0.2 %) significantly exceeded that of the control group (1.2 ± 0.1 %).
> 5. We conclude that Treatment X ==holds promise as a product favoring domestic knuzzle growth==.

### Objective

Statement of the goal and opt. hypothesis of the experiment

> [!example] The aim of this experiment ==was== to determine whether the application of Treatment X led to a significant increase in the rate of knuzzle growth.

### Introduction

Outline of the background and the motivation of the experiment

Contains:

- Broad area of research
- Relevant theory
- Importance of the experiment to the field of research

> [!example]+
> With the ==growing popularity== of knuzzles as household pets, there are number of commercially-available products promoted to enhance knuzzle growth in a domestic environment. Treatment X, produced by Pharmaceutix Y, contains WU27, a complex polycarbonate known to increase the proliferation of basal knuzzle cells under laboratory conditions. The purpose of this experiment is to ==determine whether this product actively promotes the growth of knuzzles== in a natural, domestic environment.

### Method

Description of how the experiment was carried out

- Prefer passive voice
- Sufficiently detailed so that the experiment can be reproduced

Structure:

1. Materials and opt. diagram of setup
2. Preparation if it's not clear from materials
3. Procedure
	- Single paragraph
	- Steps and justification
	- Parameters measured
	- Parameters calculated
	- Opt. parameter changed between trials
4. ==Precautions==: step that goes beyond the standard use of the equipment

> [!example]+
> 1. A commercial supply of Treatment X, 30 adult knuzzles, aged 6 to 12 months, one dually separated transparent tank, and vernier callipers were used in the experiment.
> 2. Thirty knuzzles were obtained by random selection from a local breeder.
> 3. In each trial, ten knuzzles were randomly separated into two equally sized groups ==to avoid selection bias==. Each group was placed in one bin of the tank. The treated group was fed daily with Treatment X as a 10-g food supplement; the untreated (control) group was not. Each trial lasted ten days. The ==diameter of each knuzzle was measured== at the start of the trial and again at the end, using vernier callipers. The ==fractional growth was calculated== using Excel and a Python script was written to perform the statistical calculations. The trial was performed ==three times== as described above ==with different knuzzle populations==.
> 4. The cubicle was rotated daily to balance environmental factors for each knuzzle group.

### Results

Presentation of experimental data

Contains:

- [[#Table|Tables]] & [[#Figure|figures]]
	- Raw data as table
- Explanation of how uncertainties were calculated

> [!example] Table 1. shows the diameter of the ten knuzzles (five untreated, five treated) before and after the ten-day period.

### Analysis

Determination of the overall result of the experiment

Contains:

- Summary of result
	- Opt. statistical analysis
	- Calculation of relevant quantities, `e.g.` number of moles from volume data
		- Opt. [[#Equation|equations]]
- Assessment of random uncertainty

> [!example]+
> The fractional growth over the three trials was 10.1 ==± 0.2 %== for the treated group, as opposed to 1.2 ==± 0.1 %== for the untreated group. The results thus demonstrated that the application of Treatment X ==led to significant knuzzle growth== enhancement over a ten-day period.

### Discussion

Interpretation of the result

- Use active voice

Contains:

- Assessment of the consistency of the result
	- Comparison with theory or hypothesis
- Possible factors causing random or systematic uncertainty
	- Address any anomaly in the data
	- Ways to improve the method in a future study
- Impact of results

> [!example]+
> We demonstrated that the application of Treatment X led to significant knuzzle growth enhancement over a ten-day period. This is consistent with both the manufacturer’s claim [Ref] and studies performed on isolated basal knuzzle cells [Ref].
> In our study, it is possible that the separation of the treated and untreated groups may have presented alternative factors for preferential growth; notably, the treated knuzzles ==may have experienced a cooperative effect either influencing or inhibiting their mutual growth==. Hence, in future trials, all knuzzles could be separated during the trial period.
> Our study therefore justifies future study on the effectiveness and safety of Treatment X as a domestic knuzzle food supplement.

### Conclusion

Outline of the important results and how the objective was addressed

- Short paragraph

Contains:

- Objective
- Result that addresses the objective
- Opt. whether the result supports the model or hypothesis in the objective

> [!example]+
> The purpose of this experiment was to determine whether the application of Treatment X led to a significant increase in the rate of knuzzle growth. The fractional growth over ten days was significantly greater for the group treated with Treatment X (10.1 ± 0.2 %) compared to the untreated group (1.2 ± 0.1 %). We conclude that Treatment X enhances knuzzle growth.

### References

List of authoritative citations

- **All external facts must be referenced.**

![[Authoritative Sources.png]]

## Language

- ==Avoid excessive words==
	- `e.g.` ~~After careful measurement, we found that the length of the rod was 12.3 cm.~~ -> The length of the rod was 12.3 cm.
- ==Precise==
	- `e.g.` ~~We conclude that the rod was too short.~~ -> We conclude that the rod’s length was less than the theoretical value.
	- `e.g.` ~~suction tube~~ -> pipette
- Objective
- Formal
- Experiment in past tense
- Judgement and ideas in present tense
- Prefer reformulation with citation over quotation

## Format

### Title

- Concise
- Informative

### Authors

- Use full names

### Affiliation

Place where the experiment was performed
*Institute*, *City* (*Province*), *Country*

### Date

*Month* *d*, *yyyy*

- Avoid numerical forms <= different interpretation

### Table

Contains:

- Caption
	- Title
		- Repeat if placed at the top
	- Short description
	- Opt. source
- Header
- Data
- ==Summary values==, e.g. average

> [!example]+
> ![[Table.png]]

### Figure

Contains:

- Caption
	- Title
		- Repeat if placed at the top
		- Descriptive
			- ==No var1 vs. var2, var1 as a function of var2, etc.==
	- Short description
	- Opt. source
- Data points
- Opt. error bars
- Axis labels
- Legend

> [!example]+
> ![[Figure.png]]

### Equation

- Numbered consecutively
	- Referred to as:
		- `Eq. (x)` inside a sentence
		- `Equation (x)` at the start of a sentence
- First state the formula (without substitution)

> [!example]+
> For a right triangle, the Pythagorean theorem ==(Eq. 1)== can be used to calculate the hypotenuse length $L$ given the lengths of the two perpendicular sides $a$ and $b$.
>
> $L^2 = a^2 + b^2$ ==(1)==
>
> ==Equation 1== can therefore be used to calculate the length of the rod ($L$) from its measured vertical and horizontal projections ($a = 12\mathrm{cm}$ and $b = 16\mathrm{cm}$):
>
> $L^2 = (12^2 + 16^2) \mathrm{cm^2}$ ==(2)==
> $L^2 = 400 \mathrm{cm^2}$ ==(3)==
> $L = 20 \mathrm{cm}$ ==(4)==
