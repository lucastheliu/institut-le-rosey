# Project Description

## Abstract

Lung cancer is the leading cause of cancer-related death worldwide, accounting for the highest mortality rates among both men and women. Specifically, non-small cell lung cancer (NSCLC) accounts for 85% of all cases of lung cancer.

However, most lung cancer cases are diagnosed at advanced stages where treatment options are limited. Current detection methods are either costly or invasive, involving the use of PCR machines or imaging tests, making it inaccessible in many regions.

Our project aims to create a kit for preliminary diagnosis using the presence of EGFR mutation as a biomarker. Through the use of padlock probes with rolling circle amplification and lettuce probe detection mechanism, we aim to improve the accessibility of technology. The project will provide an inexpensive preliminary test to screen for high-risk individuals who can then be quickly treated before lung cancer can develop to the advanced stages.

## Defining the problem

Lung cancer is the leading cause of cancer-related death worldwide, with the highest mortality rate. In Switzerland, lung cancer are among the top 3 most common types of cancer in both men and women and, overall, it is the most common cause of cancer death with average of 3200 cases per year. 85% of cases of lung cancer falls into the category of NSCLC due to the cell’s appearance under the microscope.

## Pathophysiology

NSCLC, like other types of cancers, are often caused by the amplification of oncogenes and inactivation of tumor suppressor genes. This can be caused by exposure to carcinogens like tobacco smoke and asbestos, or genetic susceptibility due to inheritance.

Studies have shown that the most important abnormalities detected are mutations involving the ras family of oncogenes including _H-ras, K-ras, and N-ras_. These genes encode for a protein on the inner surface of the cell membrane with guanosine triphosphatase activity that is involved in signal transduction.

Other molecular abnormalities found in NSCLC include mutations in the oncogenes c-myc and c-raf and in the tumor suppressor genes retinoblastoma (Rb) and p53.

NSCLC can be further classified into 3 types: adenocarcinoma, squamous cell carcinoma, and large-cell carcinoma. These types shares similar treatment approaches and prognoses but has unique histological and clinical characteristics.

### Adenocarcinoma:

Adenocarcinoma often originates from the bronchial mucosal glands; it usually occurs in a peripheral location within the lungs. In some cases, it starts to develop in locations with pre-existing scars, wounds, or inflammation. It is a subtype of NSCLC which is most common among people who do not smoke.

#### Squamous cell carcinoma (SCC):

SCC are often found in central parts of the lungs, often observed as a cavitary lesion in a proximal bronchus. It is most often linked with hypercalcemia

#### Large-cell carcinoma:

Large cell carcinoma usually takes the form of large peripheral mass on chest radiograph. Unlike adenocarcinoma and SCC, it shows no evidence of keratinization or gland formation. This type of NSCLC is usually grouped with adenocarcinomas for clinical trials.

<img
  src="https://static.igem.wiki/teams/5502/random/types-lung-cancer-pie-chart-rev-e1529351963619.png"
  alt="Image description"
  width="400"
/>

## Symptoms

Symptoms of lung cancer vary from each individual. Most people will have symptoms related to the lungs; however, in cases of metastasized cancers, symptoms can be observed in other parts of the body the cancer has spread to. In most cases, symptoms will not show until the cancer is advanced. Symptoms can include:

1. Coughing that gets worse or doesn't go away.

2. Chest pain.

3. Shortness of breath.

4. Wheezing.

5. Coughing up blood.

6. Feeling very tired all the time.

7. Weight loss with no known cause.

## Current diagnosis

### References:

There are multiple diagnostics used by physicians to diagnose for NSCLC. Many of these are used in conjunction to confirm the presence of a tumor.

- Imaging tests: imaging tests takes a picture of the body through imaging process like X-ray, MRI, CT and PET scan. This can show the size and location of the lung cancer
- Sputum cytology: Sputum, the mucus that is coughed up from the lungs, can be examined under the microscope for the presence of a cancer cell
- Biopsy: a procedure is executed to remove a sample of tissue for testing in a lab. This can be done in multiple ways like bronchoscopy, mediastinoscopy, and needle biopsy
- Gene sequencing: through the use of next generation sequencing (NGS) or polymerase chain reaction (PCR), most common genetic mutations in EGFR, ALK, ROS1 and KRAS can be detected
- Proteins: proteins like PD-L1 can be detected to suggest the presence of some types of NSCLC

<img
  src="https://static.igem.wiki/teams/5502/random/screenshot-2024-10-01-at-22-07-13.png"
  alt="Image description"
  width="400"
/>

## EGFR Background

The EGFR gene stands for Epidermal Growth Factor Receptor and encodes a receptor tyrosine kinase that it is involved in cellular growth, proliferation, and survival. Its mutation accounts for approximately 85% of all lung cancers and is part of the ErbB family of receptors, which includes other members like HER2.
In our project the EGFR gene with a deletion on EXON 19 is our target sequence which we have chosnen since it is the most common type of mutation. Since the false-negative rate of EGFR mutation is 11.3% which is even higher than some driver mutations its detection still requires more work. But, in theory our experiments should work with any number of other mutations and their detection with minimal alterations to the design.

Wildtype(73): TTCC...

Mutation (50): TTCC...

## Product Summary

Our project’s aim is to create a kit for diagnosis of cancer especially non-small cell lung cancer (NSCLC) through the detection of EGFR mutation in ctDNA in the blood. We will use rolling circle amplification (RCA) in amplifying the sequence to avoid the use of expensive PCR machines. The ssDNA product will contain a sequence, which allows binding of lettuce probe, producing fluorescence to be detected and quantified.

This kit only requires the user to draw blood from the patient and perform an in vitro test following our protocols, limiting invasiveness of the test. The procedure can be performed in an isothermal environment with specifically designed padlocks which bind to the target sequence and T4-DNA ligase. Phi29 DNA polymerase will then be used to amplify the target DNA into a long ssDNA called the rolling circle product (RCP). RCP will then bind to lettuce probe – a novel detection mechanism – which will create an aptamer with the chemical DFHBI-1T generating fluorescence.

We decided to create this diagnostic for several reasons. Despite PCR being effective, it is expensive, which low-income families in developing countries will not be able to access. Therefore, although our experiment is slightly less accurate, it’s a much more affordable alternative to PCR.
However, our project will use the split lettuce detection mechanism which consist of 2 DNA sequences and a fluorescent chemical (DFHB-1T) and it will fluoresce only in the presence of our padlock sequence.

The product can be split into 2 main parts: RCA and reporting mechanism

### Rolling circle amplification (RCA):

The product can be split into 2 main parts: RCA and reporting mechanism

Rolling circle amplification is used to amplify the small amount of EGFR mutated genes into a long ssDNA with designed characteristics. This procedure will replace the expensive PCR amplification to reduce costs and improve accessibility, as it can be performed in isothermal conditions and with limited equipment.

The padlock probe is a small piece of ssDNA that has complementary sequence to the target sequence at its 5’ and 3’ terminal. It also contains the lettuce flanking sequences which will be replicated and binded by the lettuce aptamer.

At the start of the procedure, the padlock probe will bind with the target sequence through DNA DNA hybridization. T4 DNA ligase will then be added to complete the hybridization creating a circular ssDNA; however, if the hybridized ssDNA is not the target sequence the T4 ligase will not be able to ligate the two DNA and, therefore, not able to continue to the DNA replication.

<img
  src="https://static.igem.wiki/teams/5502/random/padlock-probe-small-diagram.png"
  alt="Image description"
  width="400"
/>

After ligation, a random primer with exonuclease resistant will bind to the padlock probe which initiate the replication process with phi29 DNA polymerase (a viral enzyme that works in isothermal conditions). The phi29 DNA polymerase has the ability to carry out multiple displacement replication allowing the production of a long ssDNA (rolling circle product RCP) product from only one DNA template.

<img
  src="https://static.igem.wiki/teams/5502/random/ligation.gif"
  alt="Image description"
  width="400"
/>

As this reaction can work in isothermal conditions, the reaction can be carried out without a thermocycler reducing the cost of each diagnostic test.

### Split lettuce detection mechanism:

Split lettuce detection mechanism is used to detect the presence of the RCP amplified from the RCA reaction. The method consists of 2 specially designed sequences which will allow the binding of DFHBI-1T only when they are bound together. These sequences were taken from the iGEM parts library [BBa_K4245133](https://parts.igem.org/Part:BBa_K4245133)

Each sequence is attached to a short flanking sequence (the 5’ terminal of the left lettuce sequence and the 3’ terminal of the right lettuce sequence) which is complimentary to the RCP. The two lettuce sequences will only pair if the two flanking sequences can bind to a DNA sequence; therefore, they will only bind in the presence of the RCP.

The aptamer created by the two lettuce sequences allows the binding and activation of fluorescence of DFHBI-1T molecule which can then be detected and quantified.

<img
  src="https://static.igem.wiki/teams/5502/random/lettuce.png"
  alt="Image description"
  width="400"
/>

## What does cell-free Synthetic Biology mean and why has this concept emerged?

Cell-free synthetic biology is the idea of creating biological processes, outside of living cells, which are essentially extracts of biological molecules, such as proteins, nucleic acids (DNA/RNA), or mitochondrion. The idea is to use cellular machinery without the actual manipulation of cells. For example, synthesizing the protein chains to fix cells, without using the cell, only the mitochondria itself.

This concept emerged from the early ages of biochemistry and molecular biology, when many biological pathways from metabolism to genetic central dogma were being discovered. From the discovery of the Krebs cycle, to decoding the hidden information in DNA, scientists have used cell lysate or in vitro protein translation in numerous foundational discoveries.

What, therefore, are the benefits of using cell-free synethetic biology, opposed to traditional, in vivo biology? In vitro, coming from the Latin phrase, meaning in glass, has several benefits, because organic processes happen outside the organism. Such as, direct control of metabolism, the rates of processes, which can be completely controlled by catalysts without the fear of overdoing it or underdoing it and being unable to further catalyse the process.

It also gives greater control transcription, the process of creating RNA, from the DNA template, which we can manipulate to control the gene expression, and get exactly what we want, of translation, which is when ribosomes use messenger RNAs (mRNAs) as a template to synthesize more protein. This is all because everything is not locked inside of a cell, revolutionizing academic and research industries, since no longer are the synthesis rates and product yields limited to the cell capacity and abilities.
