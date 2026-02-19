// Comprehensive search content for physiotherapy website

export const symptomMappings = [
  {
    symptoms: ['sharp pain', 'stabbing', 'acute pain', 'sudden pain'],
    conditions: ['Muscle Strain', 'Ligament Sprain', 'Acute Injury'],
    urgency: 'high',
    action: 'Book urgent assessment'
  },
  {
    symptoms: ['can\'t walk', 'unable to bear weight', 'can\'t stand', 'severe pain'],
    conditions: ['Severe Injury', 'Fracture Risk'],
    urgency: 'emergency',
    action: 'Call immediately or visit ER'
  },
  {
    symptoms: ['dull ache', 'chronic pain', 'ongoing pain', 'persistent'],
    conditions: ['Chronic Conditions', 'Arthritis', 'Overuse Injury'],
    urgency: 'moderate',
    action: 'Book assessment this week'
  },
  {
    symptoms: ['stiffness', 'tight', 'reduced mobility', 'can\'t bend'],
    conditions: ['Muscle Tension', 'Joint Stiffness', 'Mobility Issues'],
    urgency: 'low',
    action: 'Book routine assessment'
  },
  {
    symptoms: ['numbness', 'tingling', 'pins and needles', 'burning'],
    conditions: ['Nerve Involvement', 'Sciatica', 'Nerve Compression'],
    urgency: 'high',
    action: 'Book assessment within 48 hours'
  },
  {
    symptoms: ['swelling', 'inflammation', 'puffy', 'enlarged'],
    conditions: ['Inflammation', 'Acute Injury', 'Bursitis'],
    urgency: 'moderate',
    action: 'Book assessment soon'
  }
];

export const bodyPartConditions = {
  'neck': ['Neck Pain', 'Whiplash', 'Cervical Strain', 'Headaches', 'Torticollis'],
  'shoulder': ['Rotator Cuff', 'Frozen Shoulder', 'Shoulder Impingement', 'Shoulder Instability'],
  'back': ['Low Back Pain', 'Sciatica', 'Disc Issues', 'Muscle Strain', 'Postural Pain'],
  'upper back': ['Thoracic Pain', 'Rib Dysfunction', 'Postural Syndrome'],
  'lower back': ['Lumbar Strain', 'Disc Herniation', 'Sciatica', 'SI Joint Pain'],
  'hip': ['Hip Arthritis', 'Hip Bursitis', 'Hip Flexor Strain', 'Groin Pain'],
  'knee': ['ACL Injury', 'Meniscus Tear', 'Patellofemoral Pain', 'Knee Arthritis', 'Runner\'s Knee'],
  'ankle': ['Ankle Sprain', 'Achilles Tendinitis', 'Plantar Fasciitis', 'Ankle Instability'],
  'foot': ['Plantar Fasciitis', 'Heel Spurs', 'Metatarsalgia', 'Morton\'s Neuroma'],
  'elbow': ['Tennis Elbow', 'Golfer\'s Elbow', 'Cubital Tunnel'],
  'wrist': ['Carpal Tunnel', 'Wrist Sprain', 'De Quervain\'s'],
  'hand': ['Trigger Finger', 'Arthritis', 'Tendinitis']
};

export const exerciseDatabase = [
  {
    name: 'Lower Back Stretches',
    keywords: ['back stretch', 'lumbar stretch', 'back relief', 'back exercise'],
    bodyParts: ['back', 'lower back'],
    description: 'Gentle stretches to relieve lower back tension',
    difficulty: 'beginner'
  },
  {
    name: 'Neck Mobility Exercises',
    keywords: ['neck stretch', 'neck exercise', 'neck mobility', 'cervical'],
    bodyParts: ['neck'],
    description: 'Improve neck range of motion and reduce stiffness',
    difficulty: 'beginner'
  },
  {
    name: 'Core Strengthening',
    keywords: ['core', 'abs', 'stability', 'strengthen core', 'back support'],
    bodyParts: ['back', 'abdomen'],
    description: 'Build core strength to support your spine',
    difficulty: 'intermediate'
  },
  {
    name: 'Knee Rehabilitation',
    keywords: ['knee exercise', 'knee rehab', 'knee strengthening', 'quad exercise'],
    bodyParts: ['knee'],
    description: 'Progressive exercises for knee recovery',
    difficulty: 'varies'
  },
  {
    name: 'Shoulder Mobility',
    keywords: ['shoulder stretch', 'shoulder exercise', 'rotator cuff', 'shoulder mobility'],
    bodyParts: ['shoulder'],
    description: 'Restore shoulder range of motion',
    difficulty: 'beginner'
  },
  {
    name: 'Hip Flexor Stretches',
    keywords: ['hip stretch', 'hip flexor', 'hip mobility', 'hip exercise'],
    bodyParts: ['hip'],
    description: 'Release tight hip flexors from sitting',
    difficulty: 'beginner'
  },
  {
    name: 'Posture Correction',
    keywords: ['posture', 'posture exercise', 'desk posture', 'sitting posture'],
    bodyParts: ['back', 'neck', 'shoulder'],
    description: 'Exercises to improve posture',
    difficulty: 'beginner'
  }
];

export const quickActions = [
  {
    query: ['book', 'appointment', 'schedule', 'see someone'],
    action: 'Book Assessment',
    url: 'https://endorphinshealth.janeapp.com/#/staff_member/42',
    icon: 'calendar',
    priority: 10
  },
  {
    query: ['emergency', 'urgent', 'can\'t walk', 'severe pain', 'help now'],
    action: 'Urgent Care',
    phone: '905-634-6000',
    message: 'For emergencies, call immediately or visit ER',
    icon: 'alert',
    priority: 10
  },
  {
    query: ['insurance', 'coverage', 'cost', 'price', 'direct billing'],
    action: 'Insurance & Billing',
    url: '/faq#insurance',
    description: 'Direct billing available for most insurers',
    icon: 'credit-card',
    priority: 8
  },
  {
    query: ['where', 'location', 'directions', 'address', 'parking'],
    action: 'Location & Directions',
    url: '/#contact',
    description: '4631 Palladium Way, Burlington',
    icon: 'map',
    priority: 7
  },
  {
    query: ['hours', 'when open', 'evening', 'weekend'],
    action: 'Clinic Hours',
    description: 'Evening appointments available',
    url: '/#contact',
    icon: 'clock',
    priority: 7
  },
  {
    query: ['first visit', 'what to expect', 'new patient', 'first appointment'],
    action: 'First Visit Guide',
    url: '/faq#first-visit',
    description: 'What to bring and expect',
    icon: 'info',
    priority: 6
  }
];

export const treatmentModalities = [
  {
    name: 'Manual Therapy',
    keywords: ['hands on', 'joint mobilization', 'mobilization', 'manual'],
    conditions: ['back pain', 'neck pain', 'joint stiffness'],
    description: 'Hands-on techniques to improve mobility'
  },
  {
    name: 'Dry Needling',
    keywords: ['needle', 'trigger point', 'dry needling'],
    conditions: ['muscle knots', 'trigger points', 'chronic pain'],
    description: 'Release trigger points and muscle tension'
  },
  {
    name: 'Exercise Prescription',
    keywords: ['exercise', 'strengthening', 'stretching', 'rehab program'],
    conditions: ['weakness', 'instability', 'recovery'],
    description: 'Customized exercise programs'
  },
  {
    name: 'Shockwave Therapy',
    keywords: ['shockwave', 'chronic tendon', 'heel pain'],
    conditions: ['plantar fasciitis', 'tendinitis', 'chronic pain'],
    description: 'Focused treatment for chronic conditions'
  },
  {
    name: 'Taping & Bracing',
    keywords: ['tape', 'kinesio', 'support', 'brace'],
    conditions: ['instability', 'acute injury', 'support'],
    description: 'Support and protection during healing'
  }
];

// Activity-specific searches
export const activityInjuries = [
  {
    activity: 'running',
    keywords: ['runner', 'running', 'marathon', 'jogging'],
    conditions: ['Runner\'s Knee', 'IT Band Syndrome', 'Plantar Fasciitis', 'Shin Splints'],
    advice: 'Common running injuries treated daily'
  },
  {
    activity: 'golf',
    keywords: ['golf', 'golfing', 'golfer'],
    conditions: ['Golfer\'s Elbow', 'Low Back Pain', 'Shoulder Pain'],
    advice: 'Get back to the course pain-free'
  },
  {
    activity: 'tennis',
    keywords: ['tennis', 'racquet', 'tennis player'],
    conditions: ['Tennis Elbow', 'Shoulder Impingement', 'Wrist Pain'],
    advice: 'Serve without pain'
  },
  {
    activity: 'gym',
    keywords: ['gym', 'weights', 'lifting', 'crossfit', 'workout'],
    conditions: ['Muscle Strain', 'Shoulder Pain', 'Back Pain'],
    advice: 'Safe return to training'
  },
  {
    activity: 'desk work',
    keywords: ['desk', 'computer', 'office', 'sitting', 'work from home'],
    conditions: ['Neck Pain', 'Upper Back Pain', 'Carpal Tunnel', 'Headaches'],
    advice: 'Ergonomic solutions and treatment'
  }
];
