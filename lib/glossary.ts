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
      'The story of how a condition actually develops inside the body, and why it causes the specific symptoms you feel.',
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
      'A muscle that is working while it is being stretched, like the slow lowering phase of a squat. Useful in tendon rehab because it loads the tendon in a controlled way.',
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
      'New blood vessels growing into a tissue that normally has very few. In sore tendons these new vessels bring nerve endings with them and add to the pain.',
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
      'A short questionnaire scored 0 to 100 that tracks how much your patellar tendon pain is affecting daily activity and sport. Useful for seeing progress over weeks.',
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
      'Pain, tingling, numbness or weakness that travels along a limb because a nerve is being irritated where it leaves the spine.',
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
      'A cartilage ring around the rim of the shoulder or hip socket that makes the socket a bit deeper so the ball of the joint sits more securely.',
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
      'When a bursa becomes irritated, usually from being pressed on or used the same way over and over. Often feels sore when you touch the spot or load the joint a certain way.',
  },
  sensitization: {
    term: 'sensitization',
    definition:
      'When the nervous system becomes extra-reactive and makes everyday movement feel more painful than it should. It can settle again with time and gradual, measured loading.',
    aliases: ['sensitisation', 'sensitized', 'sensitised'],
  },
  'scapular-dyskinesis': {
    term: 'scapular dyskinesis',
    definition:
      'When the shoulder blade moves or sits in an unhelpful way when you raise your arm. Often contributes to shoulder pain rather than being the only cause.',
  },
  apophysis: {
    term: 'apophysis',
    definition:
      'A soft growth zone where a tendon attaches to a bone in young athletes. It can get sore when the tendon repeatedly tugs on it (e.g. Osgood-Schlatter at the knee).',
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
      'Describes muscle and the fascia wrapped around it together. Myofascial pain usually feels like a combination of muscle tenderness and tissue that does not glide as freely as it should.',
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
      'A specific problem with a tissue or a specific disease process. Not every ache has an obvious pathology behind it.',
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
      'How a joint feels at the very end of its range when the therapist moves it: firm, soft, bony or empty. Each one tells us something different about what is limiting the joint.',
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
  abduction: {
    term: 'hip abduction',
    definition:
      'Movement that takes your thigh out to the side, away from the midline. The gluteus medius is the main muscle that produces it and keeps the pelvis level.',
    aliases: ['abduction', 'abductor', 'abductors', 'hip abductor'],
  },
  acetabulum: {
    term: 'acetabulum',
    definition:
      'The cup-shaped socket of the hip joint in the pelvis that the ball of the thigh bone sits inside. The rim of this socket is lined by the labrum.',
    aliases: ['acetabular'],
  },
  acromion: {
    term: 'acromion',
    definition:
      'The bony roof at the top of your shoulder blade. The rotator cuff tendons slide underneath it, which is why this area can become pinched or sore.',
    aliases: ['acromial'],
  },
  adduction: {
    term: 'hip adduction',
    definition:
      'Movement that brings your thigh toward or across the midline of your body. Crossing your legs or letting the top knee drop in side-lying is sustained adduction.',
    aliases: ['adduction', 'adductor', 'adductors', 'hip adductor'],
  },
  'adhesive-capsulitis': {
    term: 'adhesive capsulitis',
    definition:
      'The medical name for frozen shoulder. The lining of the shoulder joint becomes inflamed and tight, gradually limiting movement in all directions.',
  },
  'annulus-fibrosus': {
    term: 'annulus fibrosus',
    definition:
      'The tough outer ring of a spinal disc. Tears here can allow the softer inner material to push outward, which is what a disc herniation describes.',
    aliases: ['annular', 'annulus'],
  },
  'antalgic-gait': {
    term: 'antalgic gait',
    definition:
      'A limp where you spend less time on the sore leg to avoid pain. Often the first clue that a foot or lower limb problem is loading-related.',
  },
  apophysitis: {
    term: 'apophysitis',
    definition:
      'Irritation of a growth zone where a tendon attaches to a bone in a growing child. Sever\'s disease at the heel and Osgood-Schlatter at the knee are common examples.',
  },
  'avascular-necrosis': {
    term: 'avascular necrosis',
    definition:
      'When part of a bone dies because its blood supply has been cut off, often after a fracture. The scaphoid, femoral head and talus are the classic sites at risk.',
    aliases: ['avascular', 'AVN', 'bone death'],
  },
  'bicipital-groove': {
    term: 'bicipital groove',
    definition:
      'A shallow channel at the front of the upper arm bone that the long head of the biceps tendon travels through. A common site of front-of-shoulder tenderness.',
    aliases: ['bicipital'],
  },
  'bone-stress-injury': {
    term: 'bone stress injury',
    definition:
      'Early bone damage from repetitive loading, often visible as swelling inside the bone on MRI before any crack appears. A precursor to a stress fracture.',
    aliases: ['bone stress injuries', 'bone stress'],
  },
  'brachial-plexus': {
    term: 'brachial plexus',
    definition:
      'The network of nerves travelling from the neck through the shoulder and down the arm. Compression anywhere along this path can cause arm pain, numbness, or weakness.',
  },
  'bucket-handle-tear': {
    term: 'bucket-handle tear',
    definition:
      'A meniscus tear where a long flap flips into the middle of the joint and can block the knee from fully straightening. Usually needs prompt orthopaedic review.',
    aliases: ['bucket handle tear', 'bucket-handle meniscus tear'],
  },
  'c-sign': {
    term: 'C-sign',
    definition:
      'When someone describes hip pain by cupping their hand from the groin around to the side of the hip in a C shape. Often points to pain coming from inside the hip joint.',
  },
  calcaneus: {
    term: 'calcaneus',
    definition:
      'The heel bone. It anchors the Achilles tendon at the back and the plantar fascia underneath, which is why both conditions produce pain around it.',
    aliases: ['calcaneal'],
  },
  'cam-morphology': {
    term: 'cam morphology',
    definition:
      'An extra bit of bone at the top of the thigh bone that makes the ball of the hip less perfectly round. It can contact the socket at deep hip bends in some people.',
    aliases: ['cam-type', 'cam'],
  },
  'carpal-tunnel': {
    term: 'carpal tunnel',
    definition:
      'A narrow passage at the front of the wrist bordered by wrist bones and a thick ligament. The median nerve and nine tendons share this tight space.',
  },
  'cauda-equina': {
    term: 'cauda equina',
    definition:
      'The bundle of nerve roots at the bottom of the spinal canal, named for looking like a horse\'s tail. Compression here can be a surgical emergency.',
    aliases: ['cauda equina syndrome'],
  },
  cervical: {
    term: 'cervical spine',
    definition:
      'The neck region of the spine, made up of the top seven vertebrae. Problems here can cause neck pain, headaches, or symptoms down the arm.',
    aliases: ['cervical'],
  },
  'collateral-ligament': {
    term: 'collateral ligament',
    definition:
      'A ligament on the inner (MCL) or outer (LCL) side of the knee that stops the joint from buckling sideways when you take an impact or plant and cut.',
    aliases: ['collateral ligaments', 'MCL', 'LCL', 'medial collateral ligament', 'lateral collateral ligament'],
  },
  comminuted: {
    term: 'comminuted fracture',
    definition:
      'A fracture where the bone has broken into several pieces rather than a single clean line. More common with direct high-energy impacts.',
    aliases: ['comminuted', 'comminution'],
  },
  concentric: {
    term: 'concentric contraction',
    definition:
      'A muscle shortening as it works, like the lifting phase of a bicep curl. The opposite of an eccentric contraction.',
    aliases: ['concentric', 'concentric exercise'],
  },
  'copenhagen-adduction': {
    term: 'Copenhagen adduction exercise',
    definition:
      'A side-lying groin strengthening exercise where the top leg is supported and you lift your body toward it. Well-studied for preventing and rehabbing groin strains.',
    aliases: ['Copenhagen adduction', 'Copenhagen exercise'],
  },
  'cruciate-ligament': {
    term: 'cruciate ligament',
    definition:
      'One of two strong ligaments (the ACL and PCL) that cross inside the knee and stop the shin from sliding forward or backward on the thigh bone.',
    aliases: ['cruciate', 'cruciate ligaments', 'ACL', 'PCL', 'anterior cruciate ligament', 'posterior cruciate ligament'],
  },
  'cubital-tunnel': {
    term: 'cubital tunnel',
    definition:
      'The narrow passage behind the inner elbow where the ulnar nerve travels. Prolonged elbow bending can irritate the nerve here, causing tingling in the ring and small fingers.',
  },
  dermatome: {
    term: 'dermatome',
    definition:
      'A strip of skin supplied by a single spinal nerve root. Leg or arm symptoms that follow a dermatome point toward nerve root irritation.',
    aliases: ['dermatomal'],
  },
  'directional-preference': {
    term: 'directional preference',
    definition:
      'A specific movement direction, usually bending forward or backward, that consistently eases symptoms or pulls them closer to the spine. Used to guide exercise choice.',
  },
  enthesopathy: {
    term: 'enthesopathy',
    definition:
      'Irritation or degeneration where a tendon or ligament attaches to bone. These attachment points are common pain sources in chronic groin and hip tendon issues.',
  },
  epicondylalgia: {
    term: 'epicondylalgia',
    definition:
      'Pain at one of the bony bumps of the elbow from overloaded forearm tendons. Lateral epicondylalgia is tennis elbow; medial is golfer\'s elbow.',
    aliases: ['epicondylitis'],
  },
  epicondyle: {
    term: 'epicondyle',
    definition:
      'The bony bump on either side of the elbow where forearm tendons attach. The outer one is involved in tennis elbow, the inner one in golfer\'s elbow.',
    aliases: ['epicondyles', 'lateral epicondyle', 'medial epicondyle'],
  },
  eversion: {
    term: 'eversion',
    definition:
      'Turning the sole of the foot outward, away from the midline. The peroneal tendons on the outside of the ankle drive this motion.',
    aliases: ['evert', 'everted'],
  },
  'extensor-mechanism': {
    term: 'extensor mechanism',
    definition:
      'The quadriceps muscle, its tendon, the kneecap and the patellar tendon working together to straighten the knee. When any link fails, you cannot lift the leg against gravity.',
    aliases: ['extensor apparatus'],
  },
  'fadir-test': {
    term: 'FADIR test',
    definition:
      'A clinical test where the hip is bent, brought across the body and rotated inward to see if it reproduces familiar groin pain. Useful for hip impingement and labral tears.',
    aliases: ['FADIR'],
  },
  fibrocartilage: {
    term: 'fibrocartilage',
    definition:
      'A tough, fibrous type of cartilage that handles compression and shearing. The meniscus in the knee and the discs between vertebrae are made of it.',
    aliases: ['fibrocartilaginous'],
  },
  'finkelsteins-test': {
    term: 'Finkelstein\'s test',
    definition:
      'A simple wrist test where you tuck the thumb in a fist and bend the wrist toward the little finger. Sharp pain on the thumb side suggests De Quervain\'s tenosynovitis.',
    aliases: ['Finkelstein test', 'Finkelstein'],
  },
  forefoot: {
    term: 'forefoot',
    definition:
      'The front part of the foot, including the toes and the ball of the foot where the metatarsal heads bear weight during push-off.',
  },
  'gluteus-medius': {
    term: 'gluteus medius',
    definition:
      'A mid-sized muscle on the side of the hip that keeps the pelvis level when you stand on one leg. Weakness here is common in lateral hip and knee pain.',
    aliases: ['gluteus minimus'],
  },
  'greater-trochanter': {
    term: 'greater trochanter',
    definition:
      'The bony knob you can feel on the outer side of the hip near the top of the thigh bone. Many hip muscles attach here, and it is the tender spot in lateral hip pain.',
    aliases: ['trochanter', 'trochanteric'],
  },
  hallux: {
    term: 'hallux',
    definition:
      'The medical name for the big toe. Hallux valgus is a bunion, and hallux rigidus is a stiff, arthritic big toe joint.',
  },
  hemarthrosis: {
    term: 'hemarthrosis',
    definition:
      'Blood collecting inside a joint after injury, producing rapid, firm swelling within hours. Often points to a significant ligament tear or fracture.',
    aliases: ['haemarthrosis', 'blood in the joint'],
  },
  hindfoot: {
    term: 'hindfoot',
    definition:
      'The back part of the foot, made up of the heel bone and the ankle joint below it. Controls how the foot strikes the ground and manages pronation.',
  },
  'intrinsic-foot-muscles': {
    term: 'intrinsic foot muscles',
    definition:
      'The small muscles that sit entirely within the foot and help support the arch, spread the toes, and fine-tune balance. Often weak and worth retraining.',
    aliases: ['intrinsic muscles', 'intrinsics', 'intrinsic foot'],
  },
  inversion: {
    term: 'inversion',
    definition:
      'Turning the sole of the foot inward, toward the midline. Rolling the ankle into inversion is the classic mechanism for a lateral ankle sprain.',
    aliases: ['invert', 'inverted'],
  },
  'ischial-tuberosity': {
    term: 'ischial tuberosity',
    definition:
      'The bony part of the pelvis you sit on, sometimes called the sit bone. A common site of tenderness with hamstring tendon irritation.',
    aliases: ['sit bone', 'sit bones', 'ischial tuberosities'],
  },
  kyphosis: {
    term: 'kyphosis',
    definition:
      'The natural forward curve of the upper back. Can become more pronounced with posture or age, sometimes called a rounded upper back.',
    aliases: ['kyphotic', 'hyperkyphosis'],
  },
  'ligamentum-flavum': {
    term: 'ligamentum flavum',
    definition:
      'A ligament running along the back of the spinal canal. With age it can thicken and buckle inward, contributing to narrowing of the canal.',
  },
  lumbar: {
    term: 'lumbar spine',
    definition:
      'The lower back region of the spine, made up of five vertebrae that carry most of the body\'s load. The most common site of back pain and disc problems.',
    aliases: ['lumbar'],
  },
  'median-nerve': {
    term: 'median nerve',
    definition:
      'The nerve that travels from the neck through the arm into the hand, supplying feeling to the thumb, index, middle and half of the ring finger. Compressed in carpal tunnel syndrome.',
  },
  metatarsal: {
    term: 'metatarsal',
    definition:
      'One of the five long bones in the middle of the foot between the ankle and the toes. The rounded front ends (metatarsal heads) make up the ball of the foot.',
    aliases: ['metatarsals', 'metatarsal head', 'metatarsal heads'],
  },
  'mtp-joint': {
    term: 'MTP joint',
    definition:
      'The metatarsophalangeal joint, where a toe meets the foot. The first MTP joint at the base of the big toe is the one involved in bunions, turf toe, and hallux rigidus.',
    aliases: ['metatarsophalangeal joint', 'metatarsophalangeal', 'first MTP', 'MTP'],
  },
  multifidus: {
    term: 'multifidus',
    definition:
      'A small, deep muscle that runs along the spine and helps control movement of individual segments. Often shows delayed activation with low back pain.',
  },
  'musculotendinous-junction': {
    term: 'musculotendinous junction',
    definition:
      'The zone where a muscle transitions into its tendon. This is the most common place for muscle strains to tear, including hamstring and groin strains.',
    aliases: ['musculotendinous', 'muscle-tendon junction'],
  },
  myotome: {
    term: 'myotome',
    definition:
      'The group of muscles controlled by a single spinal nerve root. Weakness in a specific myotome helps pinpoint which nerve level is involved.',
    aliases: ['myotomal'],
  },
  'neural-mobilization': {
    term: 'neural mobilization',
    definition:
      'Gentle gliding exercises that move a nerve through its surrounding tissues to reduce sensitivity and improve mobility. Often called nerve sliders or flossing.',
    aliases: ['nerve mobilization', 'nerve gliding', 'nerve sliders', 'nerve glides'],
  },
  'neurogenic-claudication': {
    term: 'neurogenic claudication',
    definition:
      'Leg heaviness, cramping, or pain that builds with standing and walking and eases quickly with sitting or leaning forward. A classic pattern of spinal stenosis.',
    aliases: ['claudication'],
  },
  neuropathy: {
    term: 'neuropathy',
    definition:
      'Damage or dysfunction in one or more nerves, causing numbness, tingling, burning or weakness. Diabetes is a common cause of a symmetrical stocking-and-glove pattern.',
    aliases: ['peripheral neuropathy', 'neuropathic'],
  },
  'non-union': {
    term: 'non-union',
    definition:
      'A fracture that stops healing and fails to knit back together. More of a concern in bones with a limited blood supply, like the scaphoid in the wrist.',
    aliases: ['nonunion', 'non-unions', 'failed union'],
  },
  'nordic-hamstring-curl': {
    term: 'Nordic hamstring curl',
    definition:
      'A kneeling exercise where you slowly lower your upper body toward the floor while a partner or strap holds your ankles. A key lengthening exercise for hamstring rehab.',
    aliases: ['Nordic hamstring', 'Nordic curl', 'Nordic'],
  },
  'nucleus-pulposus': {
    term: 'nucleus pulposus',
    definition:
      'The soft, gel-like core at the centre of a spinal disc that normally acts as a shock absorber between vertebrae. Loses water content gradually with age.',
  },
  ossification: {
    term: 'ossification',
    definition:
      'The gradual process of cartilage turning into bone as a child grows. Secondary ossification centres, like the one at the heel, fuse to the main bone by the mid-teens.',
    aliases: ['ossification centre', 'ossification center'],
  },
  osteoarthritis: {
    term: 'osteoarthritis',
    definition:
      'Gradual remodeling of a joint involving cartilage thinning, changes in the underlying bone and sometimes mild inflammation. Very common with age and often painless on imaging.',
    aliases: ['OA', 'arthritis', 'degenerative joint disease'],
  },
  'osteochondral-lesion': {
    term: 'osteochondral lesion',
    definition:
      'An injury to the cartilage and the bone just underneath it inside a joint. Can cause catching, clicking, or deep pain that lingers after a sprain.',
    aliases: ['osteochondral injury', 'osteochondral'],
  },
  paresthesia: {
    term: 'paresthesia',
    definition:
      'The pins-and-needles, tingling or "pins poking" feeling caused by an irritated or compressed nerve. Common in carpal tunnel and pinched neck nerves.',
    aliases: ['paresthesias', 'paraesthesia'],
  },
  physis: {
    term: 'physis',
    definition:
      'The growth plate near the end of a long bone where lengthwise growth happens during childhood. It is made of cartilage, so it is weaker than the mature bone around it.',
    aliases: ['physes', 'physeal', 'growth plate', 'growth plates'],
  },
  'pincer-morphology': {
    term: 'pincer morphology',
    definition:
      'A hip socket that is a little deeper than average, so its rim can contact the thigh bone earlier as the hip bends. One of the shapes linked with hip impingement.',
    aliases: ['pincer-type', 'pincer'],
  },
  'plantar-fascia': {
    term: 'plantar fascia',
    definition:
      'The thick band of connective tissue running under the foot from the heel bone to the base of the toes. It supports the arch and helps absorb load during walking and running.',
    aliases: ['plantar fasciae'],
  },
  'plantar-plate': {
    term: 'plantar plate',
    definition:
      'A firm band under each toe joint that stops the toe from bending too far upward. The plantar plate at the big toe is the structure injured in turf toe.',
  },
  plyometric: {
    term: 'plyometric',
    definition:
      'Jumping, hopping or bounding exercises that train muscles and tendons to store and release energy quickly. Used in later-stage rehab to prepare for sport.',
    aliases: ['plyometrics', 'plyos'],
  },
  pronation: {
    term: 'pronation',
    definition:
      'The natural inward roll of the foot and arch flattening as it lands when you walk or run. Helps absorb impact; only a problem when it is excessive or uncontrolled.',
    aliases: ['overpronation', 'over-pronation', 'pronated', 'pronating'],
  },
  radicular: {
    term: 'radicular pain',
    definition:
      'Sharp, electric, or burning pain that travels along a limb because a nerve root at the spine is irritated. Sciatica is the best-known example.',
    aliases: ['radicular'],
  },
  'salter-harris': {
    term: 'Salter-Harris fracture',
    definition:
      'A fracture in a child or adolescent that runs through or near a growth plate. Graded I to V by pattern, with higher grades carrying more risk of growth disturbance.',
    aliases: ['Salter-Harris', 'Salter Harris fracture', 'physeal fracture'],
  },
  scalenes: {
    term: 'scalene muscles',
    definition:
      'Small muscles on the side of the neck that help with breathing and neck movement. When tight, they can narrow the space where nerves and vessels pass into the arm.',
    aliases: ['scalene', 'scalenes'],
  },
  scapholunate: {
    term: 'scapholunate',
    definition:
      'The ligament connecting two small wrist bones (scaphoid and lunate). Often injured in falls on an outstretched hand and important for wrist stability.',
    aliases: ['scapholunate ligament'],
  },
  sesamoid: {
    term: 'sesamoid',
    definition:
      'A small bone that sits inside a tendon to help the tendon work more efficiently across a joint. The kneecap is the largest example in the body.',
    aliases: ['sesamoids', 'sesamoid bone'],
  },
  shockwave: {
    term: 'shockwave therapy',
    definition:
      'A treatment that sends pulses of acoustic energy into a stubborn tendon or fascia to stimulate healing. Often abbreviated ESWT.',
    aliases: ['ESWT', 'extracorporeal shockwave', 'shockwave'],
  },
  'straight-leg-raise': {
    term: 'straight leg raise',
    definition:
      'A test where the therapist slowly lifts the leg with the knee straight. Reproduction of leg symptoms suggests irritation of a lumbar nerve root.',
    aliases: ['slump test'],
  },
  'stress-fracture': {
    term: 'stress fracture',
    definition:
      'A small crack in bone caused by repeated loading that outpaces the bone\'s ability to repair itself, rather than a single traumatic break.',
    aliases: ['stress fractures'],
  },
  subacromial: {
    term: 'subacromial',
    definition:
      'The narrow space under the acromion where the rotator cuff tendons and a bursa sit. Many shoulder pain patterns originate from irritation in this space.',
  },
  supraspinatus: {
    term: 'supraspinatus',
    definition:
      'One of the four rotator cuff muscles. Its tendon runs across the top of the shoulder and is the one most often irritated or torn in the group.',
  },
  syndesmosis: {
    term: 'syndesmosis',
    definition:
      'The fibrous connection between the two lower leg bones just above the ankle. A high ankle sprain injures this area and behaves differently from a standard ankle sprain.',
    aliases: ['syndesmotic', 'high ankle sprain', 'high ankle'],
  },
  tendinitis: {
    term: 'tendinitis',
    definition:
      'An older term for a painful tendon. Most long-standing cases are actually tendinopathy (a degenerative process) rather than true inflammation.',
    aliases: ['tendonitis'],
  },
  tfcc: {
    term: 'TFCC',
    definition:
      'Triangular fibrocartilage complex: a small cartilage and ligament structure on the little-finger side of the wrist that cushions and stabilises the joint during rotation.',
    aliases: ['triangular fibrocartilage complex'],
  },
  thenar: {
    term: 'thenar',
    definition:
      'The fleshy pad of muscle at the base of the thumb. Shrinkage of this muscle (thenar atrophy) is a late sign of severe carpal tunnel syndrome.',
    aliases: ['thenar atrophy'],
  },
  thoracic: {
    term: 'thoracic spine',
    definition:
      'The mid-back region of the spine, made up of twelve vertebrae that connect to the ribs. Limited mobility here often shows up as neck or shoulder strain.',
    aliases: ['thoracic'],
  },
  'thoracic-outlet': {
    term: 'thoracic outlet',
    definition:
      'The space between the collarbone and first rib where nerves and blood vessels travel to the arm. Compression here can cause arm-wide tingling, heaviness or colour change.',
    aliases: ['thoracic outlet syndrome'],
  },
  'trendelenburg-gait': {
    term: 'Trendelenburg gait',
    definition:
      'A walking pattern where the pelvis drops down on the side opposite a weak or sore hip during single-leg stance. Often called a hip drop in the clinic.',
    aliases: ['Trendelenburg', 'hip drop'],
  },
  'ulnar-nerve': {
    term: 'ulnar nerve',
    definition:
      'The nerve that runs behind the inner elbow (the "funny bone") and supplies feeling to the ring and small fingers. Can be irritated at the elbow or wrist.',
  },
  'windlass-mechanism': {
    term: 'windlass mechanism',
    definition:
      'The way the plantar fascia tightens as the toes bend upward during push-off, lifting the arch and turning the foot into a stiff lever for propulsion.',
  },
};
