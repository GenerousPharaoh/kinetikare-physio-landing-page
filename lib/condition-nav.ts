// AUTO-GENERATED nav slice of lib/conditions-data.ts (conditionCategories).
// Header.tsx imports this lightweight module instead of the full catalog, so the
// ~144 KB conditions-data module no longer ships in the global client bundle.
// To regenerate after changing category/condition titles or slugs, run:
//   node --experimental-strip-types _gen-condition-nav.mjs   (then delete that script)

export interface ConditionNavItem {
  slug: string;
  name: string;
}

export interface ConditionNavCategory {
  slug: string;
  title: string;
  conditions: ConditionNavItem[];
}

export const conditionNav: ConditionNavCategory[] = [
  {
    "slug": "spinal-health",
    "title": "Neck & Back",
    "conditions": [
      {
        "slug": "low-back-pain",
        "name": "Low Back Pain"
      },
      {
        "slug": "neck-pain",
        "name": "Neck Pain & Stiffness"
      },
      {
        "slug": "whiplash",
        "name": "Whiplash/WAD"
      },
      {
        "slug": "sciatica",
        "name": "Sciatica"
      },
      {
        "slug": "disc-herniation",
        "name": "Disc Herniations / Bulges"
      },
      {
        "slug": "degenerative-disc-disease",
        "name": "Degenerative Disc Disease"
      },
      {
        "slug": "spinal-stenosis",
        "name": "Spinal Stenosis"
      },
      {
        "slug": "facet-joint-syndrome",
        "name": "Facet Joint Syndrome"
      },
      {
        "slug": "postural-dysfunction",
        "name": "Postural Dysfunction"
      }
    ]
  },
  {
    "slug": "shoulder",
    "title": "Shoulder",
    "conditions": [
      {
        "slug": "rotator-cuff-injuries",
        "name": "Rotator Cuff Injuries"
      },
      {
        "slug": "shoulder-impingement",
        "name": "Shoulder Impingement Syndrome"
      },
      {
        "slug": "frozen-shoulder",
        "name": "Frozen Shoulder"
      },
      {
        "slug": "shoulder-instability",
        "name": "Shoulder Instability / Dislocations"
      },
      {
        "slug": "thoracic-outlet-syndrome",
        "name": "Thoracic Outlet Syndrome"
      },
      {
        "slug": "biceps-tendinopathy",
        "name": "Biceps Tendinopathy"
      },
      {
        "slug": "shoulder-bursitis",
        "name": "Bursitis / Tendinitis"
      },
      {
        "slug": "ac-joint-injuries",
        "name": "AC Joint Sprains"
      },
      {
        "slug": "diabetes-related-conditions",
        "name": "Diabetes-Related Musculoskeletal Conditions"
      }
    ]
  },
  {
    "slug": "elbow-wrist-hand",
    "title": "Elbow, Wrist & Hand",
    "conditions": [
      {
        "slug": "tennis-elbow",
        "name": "Tennis Elbow"
      },
      {
        "slug": "golfers-elbow",
        "name": "Golfer's Elbow"
      },
      {
        "slug": "carpal-tunnel-syndrome",
        "name": "Carpal Tunnel Syndrome"
      },
      {
        "slug": "de-quervains-tenosynovitis",
        "name": "De Quervain's Tenosynovitis"
      },
      {
        "slug": "wrist-sprains",
        "name": "Wrist Sprains & Strains"
      },
      {
        "slug": "scaphoid-fractures",
        "name": "Scaphoid Fractures"
      },
      {
        "slug": "repetitive-strain-injuries",
        "name": "Repetitive Strain Injuries"
      }
    ]
  },
  {
    "slug": "hip-pelvis",
    "title": "Hip & Pelvis",
    "conditions": [
      {
        "slug": "hip-osteoarthritis",
        "name": "Hip Osteoarthritis"
      },
      {
        "slug": "femoroacetabular-impingement",
        "name": "Femoroacetabular Impingement (FAI)"
      },
      {
        "slug": "greater-trochanteric-pain-syndrome",
        "name": "Lateral Hip Pain & Gluteal Tendinopathy"
      },
      {
        "slug": "hip-labral-tears",
        "name": "Hip Labral Tears"
      },
      {
        "slug": "hip-bursitis",
        "name": "Hip Bursitis"
      },
      {
        "slug": "deep-gluteal-syndrome",
        "name": "Deep Gluteal Syndrome"
      },
      {
        "slug": "proximal-hamstring-tendinopathy",
        "name": "Proximal Hamstring Tendinopathy"
      },
      {
        "slug": "piriformis-syndrome",
        "name": "Piriformis Syndrome"
      },
      {
        "slug": "si-joint-dysfunction",
        "name": "Sacroiliac (SI) Joint Dysfunction"
      },
      {
        "slug": "groin-strains",
        "name": "Groin Strains"
      },
      {
        "slug": "hamstring-strains",
        "name": "Hamstring Strains"
      }
    ]
  },
  {
    "slug": "knee",
    "title": "Knee",
    "conditions": [
      {
        "slug": "knee-pain-patellofemoral",
        "name": "Knee Pain"
      },
      {
        "slug": "acl-injuries",
        "name": "ACL Injuries"
      },
      {
        "slug": "mcl-lcl-sprains",
        "name": "MCL/LCL Sprains"
      },
      {
        "slug": "pcl-injuries",
        "name": "PCL Injuries"
      },
      {
        "slug": "meniscus-tears",
        "name": "Meniscal Injuries"
      },
      {
        "slug": "it-band-syndrome",
        "name": "IT Band Syndrome"
      },
      {
        "slug": "patellar-tendinopathy",
        "name": "Patellar Tendinopathy (Jumper's Knee)"
      },
      {
        "slug": "knee-osteoarthritis",
        "name": "Osteoarthritis of the Knee"
      },
      {
        "slug": "patella-fractures",
        "name": "Patella Fractures"
      }
    ]
  },
  {
    "slug": "foot-ankle",
    "title": "Foot & Ankle",
    "conditions": [
      {
        "slug": "ankle-sprains",
        "name": "Ankle Sprains"
      },
      {
        "slug": "plantar-fasciitis",
        "name": "Plantar Fasciitis & Heel Spurs"
      },
      {
        "slug": "achilles-tendinopathy",
        "name": "Achilles Tendinopathy / Tendinitis"
      },
      {
        "slug": "shin-splints",
        "name": "Shin Splints"
      },
      {
        "slug": "peroneal-tendinopathy",
        "name": "Peroneal Tendinopathy"
      },
      {
        "slug": "posterior-tibial-tendon-dysfunction",
        "name": "Posterior Tibial Tendon Dysfunction"
      },
      {
        "slug": "mortons-neuroma",
        "name": "Morton's Neuroma"
      },
      {
        "slug": "metatarsalgia",
        "name": "Metatarsalgia"
      },
      {
        "slug": "hallux-valgus",
        "name": "Hallux Valgus (Bunions)"
      },
      {
        "slug": "hallux-rigidus",
        "name": "Hallux Rigidus"
      },
      {
        "slug": "turf-toe",
        "name": "Turf Toe"
      },
      {
        "slug": "severs-disease",
        "name": "Sever's Disease"
      },
      {
        "slug": "tarsal-tunnel-syndrome",
        "name": "Tarsal Tunnel Syndrome"
      },
      {
        "slug": "hammer-toe-deformities",
        "name": "Hammer Toe Deformities"
      },
      {
        "slug": "stress-fractures",
        "name": "Stress Fractures"
      },
      {
        "slug": "growth-plate-injuries",
        "name": "Growth Plate Injuries"
      }
    ]
  }
];
