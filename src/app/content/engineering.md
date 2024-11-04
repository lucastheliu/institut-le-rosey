# Engineering success

### Description of engineering cycle:

**Goal:** Develop a cost-effective, sensitive, and specific method for detecting EGFR mutations in circulating tumor DNA (ctDNA) for the diagnosis of NSCLC, using Rolling Circle Amplification (RCA) and a split lettuce reporter mechanism.

### RCA Mechanism:

- Design the padlock probe complementary to the target EGFR mutation.
- Incorporate sequences to allow binding with the RCA primer and the probe for the reporting mechanism.
- Ensure high fidelity of the ligation and amplification process to generate long ssDNA.
  Reporter Mechanism:
- Adapt the split lettuce detection mechanism to integrate with the padlock probe.
- Ensure that the split aptamer forms only in the presence of the EGFR mutation, binding DFHB-1T to induce fluorescence.

### Build/Prototype:

- Order Materials: Synthesize the designed DNA padlock probes, RCA primers, phi29 DNA polymerase, T4 ligase, DFHB-1T chemical, and other necessary components.
- Construct the RCA System: Perform RCA to amplify the target sequence. Ensure that the padlock probe binds to the EGFR mutation and the RCA reaction produces long ssDNA.

### Initial Testing of RCA:

- Perform gel electrophoresis to check the size of the RCA product (long ssDNA).
- Confirm that only the mutated EGFR sequence is amplified.
  Test the Reporter Mechanism:
- Verify that fluorescence is detected only in the presence of the amplified target sequence using a fluorescence spectrophotometer.
- Calibrate fluorescence levels to quantify the concentration of the target sequence based on the fluorescent signal.
  Optimize/Iterate:
- Based on testing results:
  - Adjust the DNA probe design or RCA conditions to improve amplification efficiency or specificity.
  - Optimize the split lettuce sequence or conditions for more precise fluorescence activation in response to the target sequence.
- Repeat tests, modifying and refining the system for optimal performance.
  Implementation/Final Product:
  Once optimized, the final product would consist of:
- A diagnostic kit for detecting EGFR mutations in NSCLC using RCA and fluorescence readout.
- The kit should include the necessary reagents (padlock probe, primers, ligase, polymerase, DFHB-1T) and instructions for use in clinical settings.

## Round 1:

### Design 1:

We designed a padlock probe and modified it into a new EGFR biosensor. Our EGFR biosensor improves signal amplification capabilities of the padlock probe providing better results.

We used Part: [BBa_K4245200](https://parts.igem.org/Part:BBa_K4245200), and modified it for our experiment, registered as **Part:[BBa_K5502000](https://parts.igem.org/Part:BBa_K5502000)** (a new part). The enhancements in our EGFR biosensor are particularly critical for detecting mutations and expression levels of the Epidermal Growth Factor Receptor (EGFR), a key molecular marker in non-small cell lung cancer. We used snapgene to model and determine the characteristics of the new probe. We also based the EGFR sequences from [Xiaojun Xu et al.](https://pubs.rsc.org/en/content/articlelanding/2019/ra/c9ra06758b), and ordered them from IDT. Then we ordered the lettuce sequences or Part:[BBa_K4245134](http://parts.igem.org/Part:BBa_K4245134) for modified left lettuce and Part:[BBa_K4245135](https://parts.igem.org/wiki/index.php/Part:BBa_K4245135) for the right lettuce.

<img
  src="https://static.igem.wiki/teams/5502/random/engineering/picture-1.png"
  width="500"
/>

### Build 1:

We ordered a made padlock probe according to our specifications from IDT. DNA Oligo, 101 bases

<img
  src="https://static.igem.wiki/teams/5502/random/engineering/padlocksequence.png"
  width="800"
/>

### Test 1:

#### Experimental Design:

Rolling circle amplification is used to amplify the small amount of EGFR mutated genes into a long ssDNA with designed characteristics.

- Padlock probe (a piece of ssDNA) is designed to have complementary sequence to the mutated part of the gene at both tips.
- The padlock probe will bind to the target sequence with no gaps.
- The DNA will be ligated with T4 DNA ligase probes that do not bind properly will not be ligated
- DNA replication will start with phi29 DNA polymerase allowing it to be amplified into a long ssDNA called the rolling circle product (RCAP)
- The padlock probe is a small piece of ssDNA that has complementary sequence to the target sequence on both ends. It also contains sequences that are complimentary to the probe sequence for the reporting mechanism. In addition, it contains sequence that is complimentary to the RCA primer in order to start the amplification process.

#### Protocols:

##### Part 1:Making Gels

1. Mix 0.5 g of agarose with 50 mL of 1x TAE buffer in a 100 - 250 mL Erlenmeyer flask.
2. Heat up the solution until it turns clear.
3. Cool solution to 65°C.
4. Add 6 µL of SYBR™ Safe and gently swirl the flask to mix the solution.
5. Pour the solution into a gel chamber and put in the gel comb.
6. Wait for the gel to solidify before loading.
   Running the Gel
7. Once solidified, fix the gel’s position so that the wells of the gel are at the end of the chamber and DNA runs to red.
8. Pour used 1x TAE buffer into the gel chamber evenly to completely cover the gel.
9. On a piece of parafilm, mix 5 µL of DNA and 1 µL of purple loading dye using a micropipette.
10. Add the mixed 6 µL solution into each well.
11. Add 6 µL of a ladder into an empty well.
12. Close the gel chamber and connect electrodes to the power supply.
13. Set power supply with voltage and time.
14. Turn on the power supply and make sure bubbles are rising on the sides of the gel chamber.
15. Once gel electrophoresis is completed, put the gel under UV (ultraviolet) light to compare the bands of DNA to the bands of the ladder.

##### Part 2: ligation reaction

1. Prepare padlock probe to the right concentration
2. Make sure all the PCR tubes are DNAse free. Label the PCR tubes.
3. Label 2ml Eppindorf tubes 1-5. Pipette 1 µL of 10 x Ligation Buffer into all of the tubes.
4. Add 0.5 µL of 100 nM padlock probe. Add .4 µL of 500 pM of the EGFR.
5. Add 6.1 µL of water.
6. Heat the solution at 65°C for 3 minutes, and slowly cool it to room temperature for over 10 minutes
7. Add 1 µL (5U) of T4 Ligase.
8. Leave the reaction for 2 hours at room temperature (22-25 degree celsius)
9. Bring half the reactions up to 65°C for 10 minutes to terminate
10. Purify the reaction with Monarch kit (provided by EPFL) to prevent the ligase from interfering with the gel
11.

##### Part3: RCA Reaction

1. Pipette 2.5 µL of 10x phi29 buffer (from NEB) into previous ligation reaction mixture.
2. Add 12.5 U or 1.25 µL of phi29 DNA polymerase.
3. Add 6.75 mcl of 10 mM dNTPs.
4. Incubate the reactions for 8 hours at 37°C.
5. Bring up the reactions to 65°C for 10 minutes to inactivate the DNA polymerase.

### Learn 1:

In our initial experimental design, we employed SYBR Safe as a nucleic acid stain to visualize and detect nucleic acids during gel electrophoresis. **SYBR Safe** is a widely used DNA stain because it offers high sensitivity for dsDNA detection while being less toxic compared to traditional stains like ethidium bromide. However, after further testing, we realized that **SYBR Safe** is not well-suited for binding to ssDNA sequences, which was crucial for our application in detecting ssDNA molecules related to **EGFR** mutations.

By transitioning from **SYBR Safe** to **SYBR Gold**, we addressed the shortcomings of the original stain in **ssDNA** detection, ensuring that our biosensor could effectively bind and visualize ssDNA sequences. This change was crucial for the success of our biosensor, as it allowed for accurate detection of ssDNA strands of EGFR, improved the overall signal amplification, and made the biosensor more suitable for use in molecular diagnostics

## Round 2:

### Design 2:

In addition to switching from **SYBR Safe** to **SYBR Gold** for improved RNA detection, we also adjusted the agarose gel concentration by using a **2% agarose solution** instead of the more common **1% agarose solution**.

In a lower-concentration gel, nucleic acids can diffuse more easily through the larger pores, which can lead to smearing or less defined bands, particularly when dealing with small RNA fragments or amplified products. The smaller pore size of the 2% agarose gel helps to minimize this diffusion, resulting in clearer, more distinct bands during electrophoresis, improving the accuracy of our EGFR biosensor experiments.

### Build 2:

#### Making Gels

1. Mix 0.5 g of agarose with 50 mL of 1x TAE buffer in a 100 - 250 mL Erlenmeyer flask.
2. Heat up the solution until it turns clear.
3. Cool solution to 65°C.
4. Add 6 µL of SYBR™ Safe and gently swirl the flask to mix the solution.
5. Pour the solution into a gel chamber and put in the gel comb.
6. Wait for the gel to solidify before loading.
   Running the Gel
7. Once solidified, fix the gel’s position so that the wells of the gel are at the end of the chamber and DNA runs to red.
8. Pour used 1x TAE buffer into the gel chamber evenly to completely cover the gel.
9. On a piece of parafilm, mix 5 µL of DNA and 1 µL of purple loading dye using a micropipette.
10. Add the mixed 6 µL solution into each well.
11. Add 6 µL of a ladder into an empty well.
12. Close the gel chamber and connect electrodes to the power supply.
13. Set power supply with voltage and time.
14. Turn on the power supply and make sure bubbles are rising on the sides of the gel chamber.
15. Once gel electrophoresis is completed, put the gel under UV (ultraviolet) light to compare the bands of DNA to the bands of the ladder.

### Test 2:

We immediately saw some results from modifying the protocols of the gel, and now there was a strand visible aside from the ladder.

<img
  src="https://static.igem.wiki/teams/5502/random/engineering/egfr-result.jpg"
  width="500"
/>

### Learn 2:

Our EGFR biosensor was designed to target relatively short ssDNA sequences or specific nucleic acid fragments related to EGFR mutations. A 2% agarose gel has smaller pores than a 1% gel, allowing for better separation and resolution of these smaller fragments. This increased resolution was essential for distinguishing closely sized nucleic acid sequences. Also, the change from SYBR safe to SYBR Gold allowed the SYBR GOLD stainer to bond with the ssDNA.

## Round 3:

### Design 3:

As seen in the results above, it became evident that the sensitivity and clarity of our data were insufficient for drawing reliable conclusions. This was likely due to the **lower concentration of DNA** present in our samples, which limited the effectiveness of our EGFR biosensor in generating a strong, detectable signal. To address this issue, we modified our experimental methods to **increase the DNA concentration** and improve the overall quality of the results. As seen in the results above, it became evident that the sensitivity and clarity of our data were insufficient for drawing reliable conclusions. This was likely due to the lower concentration of DNA present in our samples, which limited the effectiveness of our EGFR biosensor in generating a strong, detectable signal. To address this issue, we modified our experimental methods to increase the DNA concentration and improve the overall quality of the results.

### Build 3:

**Hybridization and ligation reactions**

- Ligation buffer
- 10mM Tris-HCL -> pH stabilizer
- 10uM MgCl2 -> DNA ligase needs metal ions to function
- 10uM ATP -> needed for DNA ligation
- pH 7.5
- Padlock probe:
  - TTGATAGCGACGGGAAAACTATCATAAGACTCGTCATGTCTCAGCAGCTTaacctctttcagcttccatctACTCACTATAGGTTTCCTTGTTGGCTTTCG
- Primer:
  - GCTGAGACATGACGAGTC
- EGFR target gene
- DNase inhibitor

### Test 3:

The improved visibility of the lines in the **EGFR mutated samples** can be directly attributed to the increased concentration of DNA. This enhancement played a critical role in amplifying the target sequences, resulting in clearer, more reliable results. These findings demonstrate the importance of DNA concentration in ensuring the accuracy and sensitivity of the biosensor for detecting EGFR mutations, particularly in our application of cancer diagnostics.

<img
  src="https://static.igem.wiki/teams/5502/random/engineering/ligation.jpg"
  width="300"
/> <img
  src="https://static.igem.wiki/teams/5502/random/engineering/rca-result.png"
  width="300"
/>

### Learn 3:

The initial results, which suffered from low DNA concentrations, hindered our ability to extrapolate meaningful data. However, by modifying our methods to **increase the concentration of DNA**, including sample preparation optimization, improved amplification techniques, and DNA concentration methods, we were able to generate more robust and detectable signals. These changes have greatly enhanced the performance of our EGFR biosensor, making it more reliable for detecting mutations or other clinically relevant alterations in the EGFR gene.
