// Short plain phrases for each quiz question, used in the result instead of
// quoting the question back. [answered yes or somewhat, answered no]. Sentence
// case, no final full stop; the result lowercases the first letter inside a
// sentence. Every question id in the clusters needs an entry
// (scripts/pattern-matcher-check.ts checks this).
export const QUESTION_FEATURES: Record<string, [yes: string, no: string]> = {
  // Knee
  pain_below_kneecap_on_tendon: ['The worst spot on the tendon just below the kneecap', 'The worst spot not on the tendon below the kneecap'],
  pain_around_kneecap: ['Pain around or behind the kneecap that is hard to pin down', 'Pain you can point to with one finger'],
  pain_outside_of_knee: ['Pain on the outer side of the knee', 'No pain on the outer side of the knee'],
  theatre_sign: ['Pain when you stand up after sitting with the knee bent', 'No extra pain standing up after a long sit'],
  worse_going_downstairs: ['Going down stairs worse than going up', 'Stairs no worse going down than going up'],
  pain_with_jumping_or_landing: ['Pain worst with jumping, landing or deep squats', 'Jumping and deep squats not the main trigger'],
  catching_locking_giving_way: ['Catching, brief locking or giving way', 'No catching, locking or giving way'],
  pain_running_especially_downhill: ['Pain at a set point in a run, worse downhill', 'No set point in a run when the pain starts'],
  morning_stiffness_short: ['Morning stiffness that eases within about half an hour', 'No morning stiffness'],
  specific_twist_or_injury_event: ['A specific twist, impact or pop at the start', 'No single injury at the start'],
  worse_after_full_rest: ['Worse after a week off, settling once warmed up', 'Rest helping rather than making it worse'],
  age_over_45: ['Being 45 or older', 'Being under 45'],

  // Hip
  pain_groin_or_front_of_hip: ['Pain in the groin or the crease at the front of the hip', 'Pain not mainly in the groin'],
  pain_outside_of_hip: ['Pain over the bony point on the outside of the hip', 'Pain not mainly on the outside of the hip'],
  pain_at_sit_bone: ['Pain right at the sit bone', 'Pain not at the sit bone'],
  worse_deep_hip_flexion: ['Pain in deep hip positions, like a low car seat or a deep squat', 'Deep hip positions not a trigger'],
  catching_or_clicking_with_pivot: ['Pinching, clicking or catching when you twist or pivot', 'No pinching, clicking or catching'],
  worse_lying_on_that_side: ['An ache within minutes of lying on that side', 'Lying on that side not bringing on an ache'],
  worse_prolonged_sitting_hard_chair: ['A long sit on a firm seat flaring the sit bone', 'Long sitting not the main trigger'],
  worse_uphill_or_lengthened_hamstring: ['Pain at the back of the hip with hills, lunges or hamstring stretches', 'Hills and hamstring stretches not a trigger'],
  morning_stiffness_hip_short: ['Morning stiffness that loosens within about half an hour', 'No morning stiffness'],
  loss_of_rotation_putting_on_socks: ['Trouble with socks, toenails or getting into a car on that side', 'No trouble with socks or getting into a car'],
  age_over_50_hip: ['Being 50 or older', 'Being under 50'],

  // Low back
  pain_central_low_back: ['Pain across the centre of the low back', 'Pain not spread across the centre of the back'],
  pain_one_sided_buttock_or_si: ['A sore spot on one side, near the dimple above the buttock', 'No one-sided sore spot near the dimple above the buttock'],
  pain_radiates_below_knee: ['Pain, numbness or tingling travelling past the knee', 'No symptoms travelling past the knee'],
  pain_deep_in_buttock: ['A deep ache in the middle of the buttock', 'No deep ache in the buttock'],
  worse_with_bending_or_sitting: ['Worse bending forward, slouching or lifting', 'Bending and slouching not the main triggers'],
  worse_with_standing_or_extension: ['Worse with long standing, walking or arching back', 'Standing and arching back not the main triggers'],
  eases_with_sitting_or_leaning_forward: ['Walking pain that settles when you sit or lean forward', 'Sitting or leaning forward not easing walking pain'],
  worse_single_leg_activities: ['Worse on one leg, on stairs or rolling over in bed', 'Single-leg moves not a trigger'],
  worse_prolonged_sitting: ['A long sit on a firm seat flaring the buttock', 'Long sitting not the main trigger'],
  specific_lifting_or_twisting_event: ['A specific lift, twist or bend at the start', 'No single lift or twist at the start'],
  age_over_60: ['Being 60 or older', 'Being under 60'],

  // Shoulder
  pain_top_of_shoulder_ac: ['A pinpoint sore spot on top of the shoulder, where the collarbone meets it', 'No sore spot on top of the shoulder'],
  pain_outside_deltoid: ['Pain on the outside of the shoulder, where a sleeve sits', 'Pain not mainly on the outside of the shoulder'],
  pain_front_of_shoulder: ['Pain at the front of the shoulder', 'Pain not mainly at the front of the shoulder'],
  painful_arc_overhead: ['A painful zone between shoulder and ear height that eases higher up', 'No painful zone when lifting the arm to the side'],
  cant_reach_behind_back: ['Trouble reaching behind your back', 'No trouble reaching behind your back'],
  passive_motion_restricted_all_directions: ['Movement blocked in every direction, even when someone else moves the arm', 'Movement freer when someone else moves the arm'],
  weakness_lifting_or_external_rotation: ['Real weakness lifting overhead or turning the arm outward', 'Soreness rather than real weakness'],
  night_pain_lying_on_shoulder: ['Waking when you roll onto that shoulder', 'Lying on the shoulder not waking you'],
  cross_body_reach_painful: ['Pain on top of the shoulder when reaching across your body', 'Reaching across your body not painful'],
  specific_fall_on_shoulder: ['A fall, hit or sudden pull at the start', 'No fall or injury at the start'],
  gradual_progressive_stiffening: ['Stiffness that has built up over weeks or months', 'No gradual stiffening over time'],

  // Elbow, wrist and hand
  pain_outer_elbow_bump: ['The worst spot on the bony bump on the outside of the elbow', 'The worst spot not on the outer elbow bump'],
  pain_inner_elbow_bump: ['The worst spot on the bony bump on the inside of the elbow', 'The worst spot not on the inner elbow bump'],
  pain_with_gripping_or_handshake: ['Pain with a firm handshake, pouring or turning a doorknob', 'Gripping not bringing on the pain'],
  pain_with_wrist_flexion_or_pronation: ['Pain with throwing, a golf swing or swinging a hammer', 'Throwing and swinging not the main triggers'],
  tingling_thumb_index_middle: ['Tingling or numbness in the thumb, index or middle finger', 'No tingling in the thumb or first two fingers'],
  night_waking_with_numb_hand: ['Waking at night with a numb hand you need to shake out', 'No waking at night with a numb hand'],
  diffuse_aching_forearm_no_single_spot: ['A spread-out forearm ache with no single sore spot', 'One clear sore spot rather than a spread-out ache'],
  started_with_task_spike: ['A start after a spike in a repetitive task', 'No spike in a repetitive task before it started'],
  worse_after_full_rest_elbow: ['Stiff and sore for the first few reps after a week off, then warming up', 'No stiffness on the first reps after time off'],
  symptoms_spread_across_neck_shoulder_forearm: ['Symptoms moving between the neck, shoulder, forearm and hand', 'Symptoms staying in one place'],
  weak_grip_or_dropping_objects: ['A weak grip or dropping things', 'No weak grip or dropping things'],

  // Foot and ankle
  pain_under_heel_plantar: ['The worst spot under the heel, toward the arch', 'The worst spot not under the heel'],
  pain_back_of_heel_or_cord: ['Pain in the cord at the back of the heel', 'No pain in the cord at the back of the heel'],
  pain_medial_arch_or_below_inner_ankle: ['Pain along the inner foot, below the inner ankle bone or along the arch', 'No pain along the inner foot or arch'],
  pain_forefoot_between_toes: ['Pain in the ball of the foot or between the middle toes', 'No pain in the ball of the foot'],
  pain_lateral_foot_or_behind_outer_ankle: ['Pain on the outer side of the foot or ankle', 'No pain on the outer side of the foot or ankle'],
  first_step_morning_pain: ['The first steps out of bed being the worst moment', 'First steps in the morning not the worst moment'],
  warms_up_then_worse_after: ['Easing once warmed up, then worse an hour or two after activity', 'No flare in the hours after activity'],
  arch_collapse_or_cant_rise_on_toes: ['The arch flattening, or trouble rising onto the ball of the foot', 'No flattening arch or trouble rising onto your toes'],
  better_in_wide_toe_box: ['Wide, roomy shoes clearly feeling better', 'Shoe width not making a clear difference'],
  history_of_rolled_ankles: ['Past ankle sprains and an ankle that feels wobbly on uneven ground', 'No past sprains or wobbly ankle'],
  pain_with_push_off_running: ['Pain at push-off when running, walking briskly or climbing', 'Push-off not the main trigger'],
  numbness_or_burning_in_toes: ['Numbness, burning or tingling in the toes', 'No numbness or burning in the toes'],
};
