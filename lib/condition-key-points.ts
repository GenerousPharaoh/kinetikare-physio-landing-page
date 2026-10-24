// "Key points" at the top of each condition page: one short line on what
// usually helps and one on how long it takes, each a condensed version of the
// page's own treatment opener and recovery text (no new claims). The other two
// rows of the box are built from the page itself: the first two "What you can
// do now" items and the urgency bands of the warning list. A missing `time`
// drops that row (fracture and growth-plate pages, where the doctor or surgeon
// sets the timeline).
export interface ConditionKeyPoints {
  helps: string;
  time?: string;
}

export const CONDITION_KEY_POINTS: Record<string, ConditionKeyPoints> = {
  // Spine
  'low-back-pain': { helps: 'Staying active and exercise that suits you. No single type has been shown to be best.', time: 'A recent episode often improves within 2 to 6 weeks; long-standing pain usually needs 3 to 6 months.' },
  'neck-pain': { helps: 'Exercise for the neck and upper back, including the small muscles at the front of the neck.', time: 'A recent episode often improves over the first few weeks; recurring pain can take longer.' },
  whiplash: { helps: 'Gentle, frequent neck movement from early on, rather than rest and a soft collar.', time: 'Many people improve over the first weeks to months, and some take longer.' },
  sciatica: { helps: 'Staying active, and the movements that ease the leg pain or draw it back toward the spine.', time: 'Many people improve within 4 to 6 weeks, and most recover within about 3 months.' },
  'disc-herniation': { helps: 'Staying active and exercises that ease the leg or arm symptoms.', time: 'Many people improve within 4 to 6 weeks, and most recover within about 3 months.' },
  'degenerative-disc-disease': { helps: 'Exercise, with clear information about what disc changes on a scan mean.', time: 'Flare-ups usually settle within 2 to 6 weeks; learning to manage it usually takes 3 to 6 months.' },
  'spinal-stenosis': { helps: 'Exercise that favours bending forward, strength work and cycling, which can help you walk further.', time: 'A meaningful improvement without surgery is possible in 6 to 12 weeks.' },
  'facet-joint-syndrome': { helps: 'Exercise, with joint mobilization for short-term relief.', time: 'Many people improve within 4 to 6 weeks; longer-standing pain can take longer.' },
  'postural-dysfunction': { helps: 'Strengthening the deep neck and mid-back muscles, with regular movement breaks.', time: 'Pain and tension often ease within 4 to 6 weeks; building endurance takes longer.' },

  // Shoulder
  'rotator-cuff-injuries': { helps: 'Strengthening built up step by step. Many people avoid surgery, and a surgical opinion is discussed for some tears.', time: 'Some improvement within 2 to 4 weeks; full function usually takes 3 to 6 months.' },
  'shoulder-impingement': { helps: 'Strengthening the rotator cuff and shoulder blade muscles. Surgery to make more space did no better than placebo surgery.', time: 'Substantial progress by 6 to 8 weeks for many, and most improve over 3 to 6 months.' },
  'frozen-shoulder': { helps: 'Physiotherapy matched to how painful and how stiff the shoulder is right now.', time: 'Often many months, sometimes longer, with plateaus and flare-ups along the way.' },
  'shoulder-instability': { helps: 'Structured exercise for a shoulder that became loose without an injury. After a first dislocation in a young athlete, an early surgical opinion.', time: 'Improvement is usually gradual; a loose shoulder usually gets about 6 months of rehab before surgery is considered.' },
  'thoracic-outlet-syndrome': { helps: 'A monitored trial of rehabilitation for the nerve type, when there is no significant weakness or wasting.', time: 'Improvement often takes 3 to 6 months.' },
  'biceps-tendinopathy': { helps: 'Loading the tendon with slow, heavy exercises built up over time.', time: 'Many cases improve within 6 to 12 weeks of the right loading.' },
  'ac-joint-injuries': { helps: 'Rehab matched to the grade of the injury. Higher grades need a surgical opinion.', time: 'Depends on the grade and on what you are returning to; heavy lifting and contact sport come back last.' },
  'diabetes-related-conditions': { helps: 'Depends on the problem: movement work for a stiff shoulder, hand care for carpal tunnel, balance and foot protection for the feet.', time: 'No single timeline. A stiff shoulder can take many months with diabetes.' },

  // Elbow, wrist and hand
  'tennis-elbow': { helps: 'Strengthening the muscles that lift the wrist, built up gradually, while managing how much load the arm takes.', time: 'Meaningful change within 6 to 12 weeks for many; recovery commonly takes 3 to 6 months.' },
  'golfers-elbow': { helps: 'Strengthening the muscles that bend the wrist, built up gradually. The evidence is more limited than for tennis elbow.', time: 'Many people notice change over a few months; longer-standing cases take longer.' },
  'carpal-tunnel-syndrome': { helps: 'A night splint that keeps the wrist straight, and changes to grip and wrist position.', time: 'Mild cases often ease within several weeks; moderate cases deserve 6 to 12 weeks of non-surgical care.' },
  'de-quervains-tenosynovitis': { helps: 'A thumb splint with activity changes. A splint combined with a cortisone injection succeeded more often in trials.', time: 'Mild cases often improve over several weeks; longer-standing cases can take a few months.' },
  'wrist-sprains': { helps: 'Once a fracture is ruled out, a short spell in a brace, then early, protected movement.', time: 'Many sprains improve over several weeks; full recovery can take a few months.' },
  'scaphoid-fractures': { helps: 'Protection first: a cast or splint, then rehab once healing has been confirmed on imaging.', time: 'A fracture across the middle of the bone is typically in a cast for around 6 to 12 weeks.' },
  'repetitive-strain-injuries': { helps: 'Exercise built up gradually, with changes to how much and how long you load the tissue.', time: 'Early, mild cases often settle within 6 to 12 weeks; longer-standing cases can take 3 to 6 months.' },

  // Hip and pelvis
  'hip-osteoarthritis': { helps: 'Exercise and education are the first treatment. In severe arthritis, a hip replacement gives larger gains.', time: 'Many people see meaningful change within 6 to 12 weeks, and keeping it up matters over the long term.' },
  'femoroacetabular-impingement': { helps: 'Physiotherapy that changes how you move and strengthens the hip, as the usual first step.', time: 'Pain often eases within 4 to 6 weeks; non-surgical care usually takes 3 to 6 months.' },
  'greater-trochanteric-pain-syndrome': { helps: 'Education and exercise built up gradually. In the LEAP trial they did better overall than a cortisone injection.', time: 'Pain often starts to ease within 4 to 6 weeks; rebuilding the tendon takes 3 to 6 months or longer.' },
  'hip-labral-tears': { helps: 'Hip strengthening and retraining how you move. Many people manage without surgery.', time: 'A fair trial of non-surgical care is usually 3 to 4 months.' },
  'hip-bursitis': { helps: 'Taking the squeeze off the outer hip and gradually strengthening the buttock muscles.', time: 'Meaningful change usually takes 6 to 12 weeks; lasting strength takes 3 to 6 months.' },
  'proximal-hamstring-tendinopathy': { helps: 'A loading program that moves from holds to heavier, slow strength work.', time: 'Pain can ease in a few weeks; getting back to your activities can take 3 to 9 months.' },
  'piriformis-syndrome': { helps: 'Hip strengthening, gentle nerve gliding and changes to how you sit.', time: 'Many people improve over several weeks; some take longer.' },
  'si-joint-dysfunction': { helps: 'Strengthening the trunk and buttock muscles, with hands-on treatment where it helps.', time: 'Many people improve over 6 to 8 weeks; some take longer.' },
  'groin-strains': { helps: 'Active loading started early and strength work built up step by step, rather than long rest.', time: 'Small to moderate strains: about 3 weeks to full training. Long-standing groin pain often takes several months.' },
  'hamstring-strains': { helps: 'Exercises that load the hamstring as it lengthens, which returned players to sport sooner in a trial.', time: 'Grade 1: 2 to 3 weeks. Grade 2: 4 to 8 weeks. A complete tear: 3 to 6 months.' },

  // Knee
  'knee-pain-patellofemoral': { helps: 'Strengthening the hip and thigh muscles, which current guidelines support most strongly.', time: 'Many people improve meaningfully over 6 to 12 weeks, though it can come back.' },
  'acl-injuries': { helps: 'Without surgery, training balance, landing and knee control step by step. After surgery, rehab guided by milestones.', time: 'Daily activities: 3 to 6 months without surgery. Sport after surgery: 9 to 12 months.' },
  'mcl-lcl-sprains': { helps: 'Early movement within any brace limits, and strength built up step by step.', time: 'MCL as a rough guide: grade I 2 to 4 weeks, grade II 4 to 8, grade III 8 to 12. The LCL can take longer.' },
  'pcl-injuries': { helps: 'Rehab built around the front thigh muscle. Most PCL injuries on their own avoid surgery.', time: 'Return to sport is typically possible after 3 months; full function often within 4 to 6 months.' },
  'meniscus-tears': { helps: 'Structured exercise first for tears from gradual wear. A knee that truly locks needs prompt medical assessment.', time: 'Many people improve within 6 to 12 weeks of rehab.' },
  'it-band-syndrome': { helps: 'Strengthening the side of the hip, with changes to training and to how you run.', time: 'Some runners improve over several weeks; others need longer.' },
  'patellar-tendinopathy': { helps: 'Loading the tendon step by step: holds, then slow, heavy strength work.', time: 'Many athletes improve within 12 weeks; the tendon keeps rebuilding for 6 to 12 months.' },
  'knee-osteoarthritis': { helps: 'Strengthening the front thigh muscle with low-impact exercise such as cycling, walking or water exercise.', time: 'Improvement is often seen within 6 to 12 weeks, and it needs long-term management.' },
  'patella-fractures': { helps: 'Following the protection plan from your doctor or surgeon, then rehab once healing allows.' },

  // Lower leg, ankle and foot
  'ankle-sprains': { helps: 'Early movement and exercise built up gradually, rather than a cast or boot for most sprains.', time: 'Mild: 1 to 3 weeks. Partial tear: 3 to 6 weeks. Complete tear: 6 to 12 weeks.' },
  'plantar-fasciitis': { helps: 'Stretching the sole and the calf, done consistently, with calf strengthening and supportive shoes.', time: 'Usually months rather than weeks; many see clear improvement within 6 to 12 months.' },
  'achilles-tendinopathy': { helps: 'Exercise that loads the tendon, such as heel drops and slow, heavy calf work.', time: 'Gains often build over the first 12 weeks; full recovery can take a year or longer.' },
  'shin-splints': { helps: 'Calf and hip strengthening, and a running plan cut back and then rebuilt.', time: 'Many runners return over several weeks with a structured plan.' },
  'peroneal-tendinopathy': { helps: 'Loading the tendons step by step, with balance training to steady the ankle.', time: 'Improvement often takes weeks to months.' },
  'posterior-tibial-tendon-dysfunction': { helps: 'In the early stages, a shoe insert or brace with strengthening of the tibialis posterior muscle.', time: 'Early stages often improve over a few months; later stages can take longer.' },
  'mortons-neuroma': { helps: 'Wider shoes, a metatarsal pad and cutting back on what aggravates it.', time: 'Some change within several weeks for many, continuing over a few months.' },
  metatarsalgia: { helps: 'A well-placed metatarsal pad and suitable shoes to take load off the sore spot.', time: 'Some improvement within several weeks for many; recovery can take a few months.' },
  'hallux-valgus': { helps: 'Wider shoes, padding and shoe inserts for comfort. They are not shown to change the shape of the toe.', time: 'Many people get meaningful relief over the first few months.' },
  'hallux-rigidus': { helps: 'Shoes with a stiff, curved (rocker) sole and gentle movement of the big toe.', time: 'Mild to moderate cases often feel better within several weeks.' },
  'turf-toe': { helps: 'Working out the grade early and protecting the toe to match.', time: 'Grade I: 1 to 3 weeks. Grade II: 3 to 6 weeks. Grade III: 8 to 12 weeks or longer.' },
  'severs-disease': { helps: "Adjusting your child's running and jumping, with calf stretching and strengthening.", time: 'Often improves within 2 to 4 weeks and clears within 2 to 6 months. It does not come back once the growth plate closes.' },
  'tarsal-tunnel-syndrome': { helps: 'Activity changes, gentle nerve gliding and arch support if the foot rolls in.', time: 'Often 8 to 12 weeks when treated early; longer-standing cases may need 3 to 6 months.' },
  'hammer-toe-deformities': { helps: 'Roomy shoes, cushioning the bent joint, and gentle daily stretching of a toe that can still straighten.' },
  'stress-fractures': { helps: 'Time away from impact, with a protection plan matched to the bone involved, and a look at the causes.' },
  'growth-plate-injuries': { helps: 'Cutting back the most aggravating activities while keeping up the ones that do not hurt.' },
};
