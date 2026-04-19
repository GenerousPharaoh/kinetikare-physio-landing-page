/**
 * Plain-language definitions for technical terms that appear in condition
 * page body copy. Keep definitions short (<=180 chars) and written for
 * patients, not clinicians.
 *
 * Keyed by a stable slug; `term` is the canonical display form. The
 * auto-linker matches `term` (and any entries in `aliases`) as whole-word,
 * case-insensitive, wrapping only the first occurrence per rendered
 * passage so the page doesn't turn into a field of dotted underlines.
 */

export interface GlossaryEntry {
  /** Canonical display form of the term (title-case optional). */
  term: string;
  /** Short, patient-friendly definition. */
  definition: string;
  /** Alternative surface forms to also match (e.g. plurals, hyphen variants). */
  aliases?: string[];
}

export const GLOSSARY: Record<string, GlossaryEntry> = {
  tendinopathy: {
    term: 'tendinopathy',
    definition:
      'A painful overuse condition affecting a tendon. The tissue shows disorganized healing rather than classic inflammation.',
    aliases: ['tendinopathies'],
  },
  pathophysiology: {
    term: 'pathophysiology',
    definition:
      'The biological processes in the body that produce a disease or injury, and how those processes cause the symptoms you experience.',
  },
  biomechanics: {
    term: 'biomechanics',
    definition:
      'How forces move through your body during activity. Small differences in biomechanics can change how much load a tissue has to absorb.',
  },
  collagen: {
    term: 'collagen',
    definition:
      'The main structural protein in tendons, ligaments and skin. In healthy tendons, collagen fibers line up in tight parallel bundles.',
  },
  eccentric: {
    term: 'eccentric contraction',
    definition:
      'A muscle working while it lengthens under load — the lowering phase of a squat or the controlled drop of a decline squat. Central to tendon rehab.',
    aliases: ['eccentric', 'eccentric exercise', 'eccentric contractions', 'eccentric loading'],
  },
  isometric: {
    term: 'isometric contraction',
    definition:
      'A muscle working without changing length — like holding a wall sit. Useful early in tendon rehab because it relieves pain while loading the tendon.',
    aliases: ['isometric', 'isometric loading', 'isometric contractions'],
  },
  neovascularization: {
    term: 'neovascularization',
    definition:
      'New blood vessel growth in a tissue that is normally low in vessels. In painful tendons, these new vessels bring nerve fibers that contribute to the pain.',
    aliases: ['neovascularisation'],
  },
  proprioception: {
    term: 'proprioception',
    definition:
      'Your body\u2019s sense of where its parts are in space and how they are moving, without having to look. It can be dulled after an injury and is worth retraining.',
  },
  'kinetic-chain': {
    term: 'kinetic chain',
    definition:
      'The linked segments of the body that work together in movement \u2014 foot, ankle, knee, hip, trunk. Problems in one link often show up as pain further along.',
  },
  patellofemoral: {
    term: 'patellofemoral',
    definition:
      'Relating to the joint between the kneecap (patella) and the thigh bone (femur). "Patellofemoral pain" is front-of-knee pain from this joint.',
  },
  'visa-p': {
    term: 'VISA-P',
    definition:
      'A validated questionnaire (0\u2013100) that tracks patellar tendon pain and function over time. A 13-point change is considered clinically meaningful.',
  },
  dorsiflexion: {
    term: 'dorsiflexion',
    definition:
      'Bending your ankle so your toes move toward your shin. Reduced ankle dorsiflexion loads the knee tendons more heavily during squats and landing.',
  },
  fascia: {
    term: 'fascia',
    definition:
      'Thin connective tissue that wraps and connects muscles throughout the body. It can become tender and restricted with overuse.',
  },
  'trigger-point': {
    term: 'trigger point',
    definition:
      'A taut, tender spot in a muscle that can refer pain to other areas. Manual pressure or dry needling is often used to settle them.',
    aliases: ['trigger points'],
  },
  'radiculopathy': {
    term: 'radiculopathy',
    definition:
      'Irritation of a spinal nerve root, causing pain, tingling, numbness or weakness along the path of that nerve.',
  },
};
