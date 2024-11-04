# Experiments

## Preparation of Solution

### Padlock Probe

- Add 10 mL of ultrapure water to the tube to create 10 mL worth of 400 nM solution.
- Vortex for 30 sec and keep at room temperature.

### EGFR Mutation and Wildtype

- Take 100 µL of solution and add 9.9 mL of ultrapure water to create 10 mL of 1 µM stock solution.
- Vortex for 30 sec.
- Then take 10 µL of 1 µM stock solution and add 9.99 mL of ultrapure water to create 10 mL of 1 nM stock solution.
- Vortex and keep at room temperature.

### Split Lettuce Right

- Add 640 µL of ultrapure water to create 640 µL of 100 µM stock solution.
- Vortex and keep at room temperature.

### Split Lettuce Left

- Add 640 µL of ultrapure water to create 640 µL of 100 µM stock solution.
- Vortex and keep at room temperature.

### DFHBI-1T

- Add 1 mg of substance.
- Add 31.23 mL of ethanol.
- Ultrasonicate until no more substance is left.
- Store at cold temperatures to avoid evaporation of ethanol.

---

## Ligation (Standard Protocol Adapted for T4 Buffers and No Washing)

### Materials:

- PCR tubes
- Pipettes & tips
- 10X T7 ligase buffer
- T4 ligase
- Padlock probe
- EGFR wildtype and mutated
- Heat block/incubator

### Procedure:

1. Prepare padlock probe to the right concentration.
2. Ensure all PCR tubes are DNase-free. Label 10 PCR tubes (5 wildtype, 5 mutation).
3. Pipette 1 µL of 10X Ligation Buffer (from NEB) into all PCR tubes.
4. Add 0.5 µL of 100 nM padlock probe. Add 0.4 µL of 500 pM of the EGFR.
5. Add 6.1 µL of water.
6. Heat the solution at 65°C for 3 minutes, then slowly cool to room temperature over 10 minutes using a heat block or incubator.
7. Add 1 µL (5U) of T4 Ligase.
8. Incubate the reaction for 2 hours at 37°C.
9. Bring half the reactions up to 65°C for 10 minutes to terminate and the other half for 20 minutes.
10. Each of the A1-A5 tubes are on the gradient for 10 minutes. Each of the A6-A10 tubes are on the gradient for 20 minutes.

---

## RCA Reaction

### Materials:

- Pipettes and tips
- Phi29 buffer
- DNA polymerase
- dNTP mix
- Incubator/heat block
- PCR tubes

### Procedure:

1. Pipette 2.5 µL of 10X phi29 buffer (from NEB) into the previous ligation reaction mixture.
2. Add 12.5 U or 1.25 µL of phi29 DNA polymerase.
3. Add 6.75 µL of 10 mM dNTPs.
4. Incubate the reactions for 8 hours at 37°C.
5. Bring up the reactions to 65°C for 10 minutes to inactivate the DNA polymerase.

---

## Gel Electrophoresis

### Materials:

- 1X TAE buffer
- Agarose gel comb
- Agarose gel tray
- Balance
- Erlenmeyer flask
- Microwave
- Pipettes & tips
- Agarose powder
- SYBR Gold

### Making Gels:

1. Mix 1 g of agarose with 50 mL of 1X TAE buffer in a 100-250 mL Erlenmeyer flask.
2. Heat the solution in the microwave for about 2 minutes. Mix the solution until the agarose is dissolved in the TAE buffer and appears clear.
3. Cool the solution to 65°C.
4. Add 6 µL of SYBR™ Gold and gently swirl the flask to mix the solution.
5. Pour the solution into a gel chamber and insert the gel comb.
6. Wait for the gel to solidify (~30 minutes) before loading.

---

## Sample Preparation

### Materials:

- Purple loading dye
- Samples
- Pipettes & tips
- Parafilm

### Procedure:

1. On a piece of parafilm, mix 5 µL of DNA and 1 µL of purple loading dye using a micropipette.

---

## Loading the Gel

### Materials:

- 1X TAE buffer
- Agarose gel electrophoresis system
- DNA ladder
- Pipettes & tips
- Prepared samples
- Solidified agarose gel

### Procedure:

1. Remove the comb from the agarose gel.
2. Place the gel on the tray within the electrophoresis system. Ensure that the comb is located at the negative electrode.
3. Pour 1X TAE buffer into the gel chamber evenly to cover the gel completely.
4. Add 6 µL of a DNA ladder into an empty well.
5. Add 6 µL of the mixed sample solution into each well:
   - Well 1: DNA ladder
   - Well 2: 10 µM EGFR mutation
   - Well 3: 10 µM EGFR wildtype
   - Well 4-8: Ligation products 1-5

---

## Running the Gel

### Procedure:

1. Close the gel chamber and connect the electrodes to the power supply.
2. Set the power supply to 100 V and run for approximately 2 hours.
3. Turn on the power supply and ensure bubbles are rising on the sides of the gel chamber.
4. After completion, put the gel under UV light to compare the DNA bands to the ladder bands.

---

## Lettuce Reaction

### Materials:

- Nuclease-free PCR tubes
- Water
- Phi29 DNA polymerase buffer
- T4 DNA ligase buffer
- Split Lettuce Left Sequence (100 µM stock)
- Split Lettuce Right Sequence (100 µM stock)
- RCP
- DFHBI-1T (100 µM stock)

### Procedure:

1. In nuclease-free PCR tubes, prepare triplicates of the following mixtures:

   ### Dye Background:

   - 25 µL water
   - 2.5 µL phi29 DNA polymerase buffer
   - 1 µL T4 DNA ligase buffer

   ### Lettuce:

   - 19 µL DNase-free water
   - 1 µL 10X T4 DNA ligase buffer
   - 2.5 µL 10X phi29 reaction buffer
   - 3 µL Split Lettuce Left Sequence (100 µM stock)
   - 3 µL Split Lettuce Right Sequence (100 µM stock)

   ### Lettuce with RCP:

   - 17.5 µL DNase-free water
   - 3 µL Split Lettuce Left Sequence (100 µM stock)
   - 3 µL Split Lettuce Right Sequence (100 µM stock)
   - 1.5 µL RCP
   - 1 µL 10X T4 DNA ligase buffer
   - 2.5 µL 10X phi29 reaction buffer

2. Centrifuge the reagents.
3. Add 1.5 µL of DFHBI-1T (100 µM stock) to each PCR tube (except controls).
4. Vortex and centrifuge.
5. Incubate at 70°C for 5 minutes, then at 25°C for 1 hour.
6. Measure fluorescence with a plate reader (excitation: 480 nm, emission: 528 nm).

This layout provides structured instructions for the preparation, ligation, RCA reaction, gel electrophoresis, and the lettuce reaction.
