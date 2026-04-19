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
  impingement: {
    term: 'impingement',
    definition:
      'Pinching or compression of soft tissue (tendon, bursa, nerve) between two bones during movement. Often felt as a sharp catch at specific joint angles.',
    aliases: ['impinge', 'impinged', 'impinges', 'impinging'],
  },
  valgus: {
    term: 'valgus',
    definition:
      'A knee or foot position that caves inward, for example the knee drifting toward the midline during a squat or landing. Changes how load passes through the joint.',
  },
  varus: {
    term: 'varus',
    definition:
      'A knee or foot position that bows outward, the opposite of valgus. Shifts load toward the outer side of the joint.',
  },
  meniscus: {
    term: 'meniscus',
    definition:
      'One of two C-shaped cartilage cushions inside the knee that help distribute load and stabilize the joint. Tears can be from injury or gradual wear.',
    aliases: ['menisci', 'meniscal'],
  },
  labrum: {
    term: 'labrum',
    definition:
      'A cartilage rim that deepens the shoulder or hip socket and helps hold the ball of the joint in place. Can be torn or frayed with injury or repetitive load.',
    aliases: ['labral'],
  },
  effusion: {
    term: 'joint effusion',
    definition:
      'Fluid that has built up inside a joint capsule, the medical term for a visibly swollen joint. Often a sign the joint is irritated and deserves a lighter load.',
    aliases: ['effusions'],
  },
  fasciitis: {
    term: 'fasciitis',
    definition:
      'Irritation of fascia, the connective tissue that wraps muscles and other structures. "Plantar fasciitis" is the best-known example, at the bottom of the foot.',
  },
  bursa: {
    term: 'bursa',
    definition:
      'A small fluid-filled sac that cushions the sliding surfaces between tendons, muscles and bone. Several bursae sit around most major joints.',
    aliases: ['bursae', 'bursal'],
  },
  bursitis: {
    term: 'bursitis',
    definition:
      'Irritation of a bursa, usually from compression or repetitive load. Produces focal tenderness and can ache when the joint is pressed or loaded in specific positions.',
  },
  sensitization: {
    term: 'sensitization',
    definition:
      'A change in the nervous system that amplifies pain signals, so normal load feels more painful than it should. Reversible with graded loading and time.',
    aliases: ['sensitisation', 'sensitized', 'sensitised'],
  },
  'scapular-dyskinesis': {
    term: 'scapular dyskinesis',
    definition:
      'Altered movement or resting position of the shoulder blade during arm motion. Often contributes to shoulder pain rather than being the sole cause.',
  },
  apophysis: {
    term: 'apophysis',
    definition:
      'A growth-plate site where a tendon attaches to a bone, present in growing athletes. Can become irritated by repetitive traction (e.g. Osgood-Schlatter at the knee).',
    aliases: ['apophyseal', 'apophyses'],
  },
  retinaculum: {
    term: 'retinaculum',
    definition:
      'A band of connective tissue that holds tendons in place across a joint so they track correctly during movement — most familiar at the ankle and wrist.',
    aliases: ['retinacula', 'retinacular'],
  },
  subluxation: {
    term: 'subluxation',
    definition:
      'A partial, usually brief separation of a joint that resolves on its own, unlike a full dislocation. Can leave the joint feeling loose or apprehensive afterwards.',
    aliases: ['subluxations', 'sublux', 'subluxes', 'subluxing'],
  },
  plantarflexion: {
    term: 'plantarflexion',
    definition:
      'Pointing the foot downward, the opposite of dorsiflexion. Used heavily in push-off during walking, running and jumping.',
    aliases: ['plantar flexion', 'plantarflex', 'plantarflexed'],
  },
  avulsion: {
    term: 'avulsion',
    definition:
      'An injury where a tendon or ligament pulls a small fragment of bone off at its attachment. Usually managed conservatively unless the fragment has shifted significantly.',
    aliases: ['avulsions', 'avulsed'],
  },
  'referred-pain': {
    term: 'referred pain',
    definition:
      'Pain felt at a distance from its actual source, for example hip joint problems that present as knee pain. Why the most tender spot isn\u2019t always the cause.',
  },
  degenerative: {
    term: 'degenerative',
    definition:
      'Gradual wear and remodeling of a tissue over time. Common on imaging after age 40 and often painless; not a verdict on future function.',
    aliases: ['degeneration'],
  },
  myofascial: {
    term: 'myofascial',
    definition:
      'Relating to muscle and its surrounding fascia together. "Myofascial pain" describes a combined pattern of muscle tenderness and restricted fascial glide.',
  },
};
