# Pilot 3 Illustration Systems

All 18 final images are square 1254 x 1254 PNG files. Each saved file was opened at full size during generation and inspected again at 264 x 264 through a circular mask. The review checked anatomical relationships, pathology location, circular-crop safety, small-scale legibility, and whether the image carries function or failure rather than only morphology.

## Recommendation

Choose **Load Path** for the 56-page condition library.

It is the only system in this round whose basic grammar directly answers a functional question on every page: where load travels, where it concentrates, and how pathology interrupts or redistributes it. The continuous stress ramp remains legible at 264 px, adapts well to ligament tension, enthesis traction, nerve compression, joint contact and tendon loading, and is visually distinct from all nine earlier systems. It also allows the surrounding anatomy to remain neutral, so colour has a consistent clinical job rather than becoming decoration.

The production rule should be conservative: every page needs a defensible loading scenario, and the colour field should show relative concentration rather than imply measured patient-specific values. **Scan Slice** is the strongest fallback for conditions with a clear structural or tissue-state correlate but no honest single load path.

## Cyanotype

**System:** A camera-less contact-print record in luminous white and pale cyan on deep Prussian blue. Soft contact diffusion, emulsion pooling and local density changes make pathology appear as part of the recorded evidence rather than as an added marker.

**Functional capacity beyond a static plate:** Cyanotype can contrast taut and slack tissue, continuous and interrupted load-bearing fibers, or rounded and flattened structures through contact density and shadow spread. It does not measure force or range, but it can make loss of tension, focal thickening and compression read as changes in the record itself.

**Likely struggles:** Dynamic instability without a visible structural event, movement-control diagnoses, diffuse pain, multi-structure syndromes, very small low-contrast lesions, and conditions whose important distinction depends on several tissue colours.

**Files:**

- `pilot3/cyanotype/acl.png`
- `pilot3/cyanotype/plantar-fascia.png`
- `pilot3/cyanotype/carpal-tunnel.png`

## Load Path

**System:** Neutral grey anatomy rendered as a finite-element biomechanics study. A restrained indigo-to-red contour field follows the mechanical chain and peaks at the pathological interface.

**Functional capacity beyond a static plate:** The system can show relative load magnitude, stress concentration, contact pressure, secondary redistribution and an interrupted load-bearing route. In this pilot it shows anterior shear failing across the torn ACL, tensile load peaking at the plantar enthesis, and pressure transferring from the flexor retinaculum into the flattened median nerve.

**Likely struggles:** Central sensitization, non-mechanical or referred pain, systemic and inflammatory presentations without one defensible load scenario, conditions whose loading direction is genuinely uncertain, and complex multi-axial problems that would be oversimplified by one colour field.

**Files:**

- `pilot3/load-path/acl.png`
- `pilot3/load-path/plantar-fascia.png`
- `pilot3/load-path/carpal-tunnel.png`

## Chronophotography

**System:** Marey-style multiple exposures on a charcoal-black field. Cool exposures describe the free portion of a movement and muted vermilion isolates the restricted or failing terminal phase.

**Functional capacity beyond a static plate:** It directly carries sequence, range, phase-specific tissue behaviour and abnormal translation. The ACL study fixes the femur while the tibia fans through extension, the plantar study shows the windlass load rising into push-off, and the carpal study shows tunnel area and nerve shape changing with wrist position.

**Likely struggles:** Conditions that are not movement-dependent, diffuse tissue disease, microscopic lesions, pain with no repeatable motion relationship, crowded multi-plane movement, and regions where repeated exposures would become unreadable at medallion scale.

**Files:**

- `pilot3/chronophotography/acl.png`
- `pilot3/chronophotography/plantar-fascia.png`
- `pilot3/chronophotography/carpal-tunnel.png`

## Scan Slice

**System:** An art-directed MRI-like slice with honest greyscale tissue contrast and exactly one affected structure isolated in colour. It retains scan grain and clinically plausible tissue hierarchy without pretending to be a patient image.

**Functional capacity beyond a static plate:** It can show tissue continuity, deformation, clearance, edema-like response and the relationship between a lesion and adjacent structures in a clinically meaningful plane. It remains a static system, so it cannot directly show motion or force, but it can show the physical consequence of failure more credibly than a conventional surface plate.

**Likely struggles:** Intermittent or dynamic impingement, movement-control diagnoses, instability that is reduced at rest, referred or centrally mediated symptoms, and conditions with no reliable imaging correlate.

**Files:**

- `pilot3/scan-slice/acl.png`
- `pilot3/scan-slice/plantar-fascia.png`
- `pilot3/scan-slice/carpal-tunnel.png`

## Riso Duo

**System:** A modern two-ink risograph using cobalt blue and persimmon orange on warm unprinted paper. Flat anatomy, halftone grain and one local misregistration edge create a confident graphic system.

**Functional capacity beyond a static plate:** The second ink can define the load-bearing structure, while a localized registration slip can represent failed continuity, repeated traction or shear at a compression interface. This is a symbolic functional cue rather than a physical measurement, so its functional ceiling is lower than Load Path or Chronophotography.

**Likely struggles:** Subtle edema, crowded small structures, diffuse or multi-site pathology, graded tissue contrast, complex pressure fields, and conditions that require several movement phases.

**Files:**

- `pilot3/riso-duo/acl.png`
- `pilot3/riso-duo/plantar-fascia.png`
- `pilot3/riso-duo/carpal-tunnel.png`

## Resin Specimen

**System:** Anatomy suspended inside a clear optical-resin block and photographed as a precious teaching object. Cool internal edge light establishes depth; a restrained smoky red inclusion sits inside the actual failure or compression interface.

**Functional capacity beyond a static plate:** The transparent volume can show nested relationships, the depth of an intra-articular failure, loss of continuity across a true gap, and direct compression of one structure beneath another. It communicates spatial mechanics well, but it still freezes time and does not show a movement arc or changing load.

**Likely struggles:** Dynamic restrictions, diffuse inflammation or edema, pain without structural change, large body regions, multi-plane motion, and conditions whose defining mechanism occurs only under active loading.

**Files:**

- `pilot3/resin-specimen/acl.png`
- `pilot3/resin-specimen/plantar-fascia.png`
- `pilot3/resin-specimen/carpal-tunnel.png`

## Attempts

| System | ACL | Plantar fascia | Carpal tunnel |
|---|---:|---:|---:|
| Cyanotype | 1 | 1 | 2 |
| Load Path | 1 | 1 | 1 |
| Chronophotography | 2 | 1 | 1 |
| Scan Slice | 1 | 1 | 2 |
| Riso Duo | 1 | 1 | 1 |
| Resin Specimen | 2 | 1 | 2 |

The revised cyanotype carpal image corrected a ten-profile tunnel and clarified the flattened median nerve. The revised chronophotography ACL image replaced several translated knees with one stationary femur and a true fan of tibial positions. The revised scan-slice carpal image moved the plane from the distal forearm to the carpal bones and restored nine tendons. The revised resin ACL image opened a clear gap between two frayed stumps, and the revised resin carpal image restored the five-plus-four tendon arrangement.

## Final Prompt Set

The images were generated with the built-in image-generation path. Every final prompt shared these requirements: square 1254 px output, central subject, circular-crop safety, 264 px legibility, no text or graphic notation, no people or hands, premium restraint, anatomy-specific pathology, and explicit exclusion of all nine earlier systems.

The condition anchors were held constant across all six media:

- **ACL:** Intra-articular complete midsubstance tear with two separated frayed stumps, an intact PCL, and a functional contrast between normal restraint and failed anterior-translation control.
- **Plantar fascia:** Continuous fascia from the medial calcaneal tubercle toward the forefoot, focal proximal thickening at the enthesis, and a visible tension relationship across the medial arch or windlass phase.
- **Carpal tunnel:** Axial cross-section at the carpal bones, flexor retinaculum as the roof, exactly nine flexor tendons, and the median nerve immediately deep to the roof, outside the tendon cluster and visibly flattened.

The medium directives were cyanotype contact diffusion, finite-element contour loading, Marey multiple exposure, MRI-like tissue contrast with one coloured structure, cobalt-and-persimmon risograph with one local registration slip, and clear optical-resin museum photography with an internal pathology inclusion.

## Substitution

No wildcard was used. None of the six requested systems was dropped.
