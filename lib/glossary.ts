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
      'A muscle working while it lengthens under load, for example the lowering phase of a squat. Central to tendon rehab because it loads the tendon under control.',
    aliases: ['eccentric', 'eccentric exercise', 'eccentric contractions', 'eccentric loading'],
  },
  isometric: {
    term: 'isometric contraction',
    definition:
      'A muscle working without changing length, like holding a wall sit. Useful early in tendon rehab because it relieves pain while still loading the tendon.',
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
      'The linked segments of the body that work together in movement: foot, ankle, knee, hip, trunk. Problems in one link often show up as pain further along.',
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
      'A growth-plate site where a tendon attaches to a bone in young athletes. Can become irritated when a tendon repeatedly pulls on it (e.g. Osgood-Schlatter at the knee).',
    aliases: ['apophyseal', 'apophyses'],
  },
  retinaculum: {
    term: 'retinaculum',
    definition:
      'A band of connective tissue that holds tendons in place across a joint so they track correctly during movement. Most familiar at the ankle and wrist.',
    aliases: ['retinacula', 'retinacular'],
  },
  subluxation: {
    term: 'subluxation',
    definition:
      'A partial, usually brief separation of a joint that slips back on its own, unlike a full dislocation. Can leave the joint feeling loose or unsteady afterwards.',
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
  instability: {
    term: 'instability',
    definition:
      'A joint that feels loose or gives way, lacking the normal muscular and ligament control that keeps it tracking smoothly.',
  },
  'rotator-cuff': {
    term: 'rotator cuff',
    definition:
      'The four small shoulder muscles and their tendons that control and stabilize the ball of the shoulder as the arm moves.',
  },
  pathology: {
    term: 'pathology',
    definition:
      'An underlying disease process or tissue change that a clinician is looking to identify. Not every ache has a discrete pathology.',
    aliases: ['pathologies'],
  },
  stenosis: {
    term: 'stenosis',
    definition:
      'Narrowing of a space, often a spinal canal or the opening where a nerve exits. Can contribute to pins and needles or heavy legs with walking.',
  },
  herniation: {
    term: 'herniation',
    definition:
      'Disc material bulging beyond its normal boundary. Most herniations settle with time and loading; the size on imaging does not predict how sore you will be.',
    aliases: ['herniations', 'herniated'],
  },
  laxity: {
    term: 'laxity',
    definition:
      'Excess looseness in a joint or ligament. Some laxity is normal and inherited; it only matters when it goes with symptoms.',
  },
  crepitus: {
    term: 'crepitus',
    definition:
      'A grinding, clicking or crackling sensation or sound from a joint. Common and usually harmless if there is no pain or swelling alongside it.',
  },
  glenohumeral: {
    term: 'glenohumeral',
    definition:
      'The ball-and-socket joint of the shoulder, where the head of the upper arm bone meets the shallow socket on the shoulder blade.',
  },
  piriformis: {
    term: 'piriformis',
    definition:
      'A deep muscle in the buttock. When it tightens around the sciatic nerve beneath it, it can produce buttock pain that travels down the leg.',
  },
  'sciatic-nerve': {
    term: 'sciatic nerve',
    definition:
      'The long nerve that runs from the low back through the buttock and down the back of the leg. Irritation anywhere along its path is called sciatica.',
    aliases: ['sciatic'],
  },
  'facet-joint': {
    term: 'facet joint',
    definition:
      'Small paired joints at the back of each vertebra that guide how the spine bends and twists. They can become painful with sustained extension or rotation.',
    aliases: ['facet joints'],
  },
  sacroiliac: {
    term: 'sacroiliac',
    definition:
      'The joint between the sacrum at the base of the spine and the pelvis. Often shortened to SI joint. Can refer pain into the buttock or groin.',
    aliases: ['SI joint', 'sacroiliac joint', 'sacroiliac joints'],
  },
  'nerve-root': {
    term: 'nerve root',
    definition:
      'Where a spinal nerve exits the spine between two vertebrae. Compression or irritation here can cause pain, pins and needles, or weakness down a limb.',
    aliases: ['nerve roots'],
  },
  'iliotibial-band': {
    term: 'iliotibial band',
    definition:
      'A thick strip of fascia running along the outer thigh from hip to knee. Commonly called the IT band. Can become tender with repetitive knee bending.',
    aliases: ['IT band', 'iliotibial'],
  },
  tenosynovitis: {
    term: 'tenosynovitis',
    definition:
      'Irritation of the thin sheath that wraps a tendon, often producing swelling and pain with movement. Common at the wrist, thumb and ankle.',
  },
  osteophyte: {
    term: 'osteophyte',
    definition:
      'A small bony outgrowth at the edge of a joint, often called a bone spur. Common on imaging with age and does not necessarily cause pain on its own.',
    aliases: ['osteophytes', 'bone spur', 'bone spurs'],
  },
  centralization: {
    term: 'centralization',
    definition:
      'When spinal pain retreats from the leg or arm back toward the spine during specific movements. Often a useful sign for guiding exercise choice.',
    aliases: ['centralisation', 'centralize', 'centralise'],
  },
  'end-feel': {
    term: 'end-feel',
    definition:
      'How a joint feels at the very end of its range when the therapist moves it: firm, soft, bony or empty. Each quality points to different structures.',
    aliases: ['end feel'],
  },
  'joint-mobilization': {
    term: 'joint mobilization',
    definition:
      'Gentle, graded hands-on movements applied to a joint by the therapist, used to ease pain and restore range without forceful thrusts.',
    aliases: ['joint mobilisation'],
  },
  'dry-needling': {
    term: 'dry needling',
    definition:
      'Thin solid needles inserted into trigger points or taut muscle bands for a short treatment. Different from acupuncture in both theory and target.',
  },
  'manual-therapy': {
    term: 'manual therapy',
    definition:
      'An umbrella term for hands-on treatment, including joint mobilization, soft-tissue work and guided movement.',
  },
};
