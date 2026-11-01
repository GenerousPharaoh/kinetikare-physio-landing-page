/**
 * Narrative citation links for the condition pages, keyed by condition slug.
 * `text` is the exact citation as it appears in that page's copy (outside the
 * research cards, which carry their own links); `url` is the paper. Built on
 * 2026-11-01 from the clinical review's source register and PubMed, each
 * pairing checked by hand. If a sentence is reworded, its entry here must
 * follow, or the link simply stops rendering (CiteText matches exact text).
 */
export interface CitationLink {
  text: string;
  url: string;
  title?: string;
}

export const CITATION_LINKS: Record<string, CitationLink[]> = {
  "ac-joint-injuries": [
    { text: "(Beitzel and colleagues, ISAKOS, 2014)", url: "https://pubmed.ncbi.nlm.nih.gov/24485119/", title: "ISAKOS upper extremity committee consensus statement on the need for diversification of the Rockwood classification for acromioclavicular joint injuries." },
    { text: "(Medicine, 2018)", url: "https://pubmed.ncbi.nlm.nih.gov/29369191/", title: "Comparison of surgical and conservative treatment of Rockwood type-III acromioclavicular dislocation: A meta-analysis" },
    { text: "Dragoo et al., 2012", url: "https://pubmed.ncbi.nlm.nih.gov/22869625/", title: "Acromioclavicular joint injuries in National Collegiate Athletic Association football: data from the 2004-2005 through 2008-2009 National Collegiate Athletic Association Injury Surveillance System" },
    { text: "Pallis et al., 2012", url: "https://pubmed.ncbi.nlm.nih.gov/22707749/", title: "Epidemiology of acromioclavicular joint injury in young athletes" },
  ],
  "achilles-tendinopathy": [
    { text: "(Beyer et al., 2015)", url: "https://pubmed.ncbi.nlm.nih.gov/26018970/", title: "Heavy, slow strength training versus heel drops for Achilles tendinopathy: a randomised trial" },
    { text: "(Johannsen et al., JAMA Network Open 2022)", url: "https://pubmed.ncbi.nlm.nih.gov/35816306/", title: "Effect of Ultrasonography-Guided Corticosteroid Injection vs Placebo Added to Exercise Therapy for Achilles Tendinopathy: A Randomized Clinical Trial." },
    { text: "(Murphy and colleagues, 2018)", url: "https://pubmed.ncbi.nlm.nih.gov/29766442/", title: "How quickly Achilles pain and function improve with loading exercise" },
    { text: "(Silbernagel et al., 2020)", url: "https://pubmed.ncbi.nlm.nih.gov/32267723/", title: "Current Clinical Concepts: Conservative Management of Achilles Tendinopathy." },
    { text: "Beyer and colleagues (2015)", url: "https://pubmed.ncbi.nlm.nih.gov/26018970/", title: "Heavy, slow strength training versus heel drops for Achilles tendinopathy: a randomised trial" },
    { text: "Beyer and colleagues (AJSM 2015)", url: "https://pubmed.ncbi.nlm.nih.gov/26018970/", title: "Heavy, slow strength training versus heel drops for Achilles tendinopathy: a randomised trial" },
  ],
  "acl-injuries": [
    { text: "(Grindem et al., OJSM 2018)", url: "https://pubmed.ncbi.nlm.nih.gov/29854860/", title: "Anterior Cruciate Ligament Injury-Who Succeeds Without Reconstructive Surgery? The Delaware-Oslo ACL Cohort Study." },
    { text: "Grindem and colleagues (2016)", url: "https://pubmed.ncbi.nlm.nih.gov/27162233/", title: "Simple decision rules can reduce reinjury risk by 84% after ACL reconstruction: the Delaware-Oslo ACL cohort study." },
    { text: "Grindem et al. (BJSM 2016)", url: "https://pubmed.ncbi.nlm.nih.gov/27162233/", title: "Simple decision rules can reduce reinjury risk by 84% after ACL reconstruction: the Delaware-Oslo ACL cohort study." },
    { text: "Kyritsis et al. (BJSM 2016)", url: "https://pubmed.ncbi.nlm.nih.gov/27215935/", title: "Likelihood of ACL graft rupture: not meeting six clinical discharge criteria before return to sport is associated with a four times greater risk of rupture." },
    { text: "Wiggins et al. (AJSM 2016)", url: "https://pubmed.ncbi.nlm.nih.gov/26772611/", title: "Risk of Secondary Injury in Younger Athletes After Anterior Cruciate Ligament Reconstruction: A Systematic Review and Meta-analysis." },
  ],
  "ankle-sprains": [
    { text: "(Doherty et al., 2016)", url: "https://pubmed.ncbi.nlm.nih.gov/26912285/", title: "Recovery From a First-Time Lateral Ankle Sprain and the Predictors of Chronic Ankle Instability: A Prospective Cohort Analysis." },
    { text: "(Doherty et al., AJSM 2016)", url: "https://pubmed.ncbi.nlm.nih.gov/26912285/", title: "Recovery From a First-Time Lateral Ankle Sprain and the Predictors of Chronic Ankle Instability: A Prospective Cohort Analysis." },
    { text: "(Dubois and Esculier, BJSM 2020)", url: "https://pubmed.ncbi.nlm.nih.gov/31377722/", title: "Soft-tissue injuries simply need PEACE and LOVE." },
    { text: "(Martin et al., 2021)", url: "https://pubmed.ncbi.nlm.nih.gov/33789434/", title: "The 2021 American Physical Therapy Association guideline for ankle sprains" },
    { text: "(Thompson et al., BMC Musculoskelet Disord 2017)", url: "https://pubmed.ncbi.nlm.nih.gov/29061135/", title: "What predicts recovery after a recent ankle sprain: a systematic review" },
    { text: "(Vuurberg et al., 2018)", url: "https://pubmed.ncbi.nlm.nih.gov/29514819/", title: "Diagnosis, treatment and prevention of ankle sprains: update of an evidence-based clinical guideline" },
    { text: "Martin et al., JOSPT 2021", url: "https://pubmed.ncbi.nlm.nih.gov/33789434/", title: "Ankle Stability and Movement Coordination Impairments: Lateral Ankle Ligament Sprains Revision 2021" },
    { text: "Vuurberg et al., 2018", url: "https://pubmed.ncbi.nlm.nih.gov/29514819/", title: "Diagnosis, treatment and prevention of ankle sprains: update of an evidence-based clinical guideline" },
  ],
  "biceps-tendinopathy": [
    { text: "(Churgay, Am Fam Physician 2009)", url: "https://pubmed.ncbi.nlm.nih.gov/19725488/", title: "Diagnosis and treatment of biceps tendinitis and tendinosis" },
    { text: "(Redondo-Alonso and colleagues, 2014)", url: "https://pubmed.ncbi.nlm.nih.gov/25408141/", title: "Relationship between chronic pathologies of the supraspinatus tendon and the long head of the biceps tendon: systematic review" },
  ],
  "carpal-tunnel-syndrome": [
    { text: "(Gelberman et al., 1981)", url: "https://pubmed.ncbi.nlm.nih.gov/7204435/", title: "The carpal tunnel syndrome. A study of carpal canal pressures" },
    { text: "Gelberman and colleagues (1981)", url: "https://pubmed.ncbi.nlm.nih.gov/7204435/", title: "The carpal tunnel syndrome. A study of carpal canal pressures" },
  ],
  "de-quervains-tenosynovitis": [
    { text: "(Abi-Rafeh et al., Plastic and Reconstructive Surgery, 2022)", url: "https://pubmed.ncbi.nlm.nih.gov/35077418/", title: "Utility of Ultrasonography and Significance of Surgical Anatomy in the Management of de Quervain Disease: A Systematic Review and Meta-Analysis" },
    { text: "(Cavaleri et al., 2016)", url: "https://pubmed.ncbi.nlm.nih.gov/26705671/", title: "Hand therapy versus corticosteroid injections in the treatment of de Quervain's disease: A systematic review and meta-analysis" },
    { text: "(Challoumas et al., JAMA Network Open 2023)", url: "https://pubmed.ncbi.nlm.nih.gov/37889490/", title: "Management of de Quervain Tenosynovitis: A Systematic Review and Network Meta-Analysis." },
    { text: "(Wu et al., Journal of Hand and Microsurgery 2018)", url: "https://pubmed.ncbi.nlm.nih.gov/30154628/", title: "Finkelstein's Test Is Superior to Eichhoff's Test in the Investigation of de Quervain's Disease." },
  ],
  "degenerative-disc-disease": [
    { text: "(Qaseem and colleagues, 2017)", url: "https://pubmed.ncbi.nlm.nih.gov/28192789/", title: "Noninvasive Treatments for Acute, Subacute, and Chronic Low Back Pain: A Clinical Practice Guideline From the American College of Physicians." },
    { text: "Brinjikji et al. (AJNR 2015)", url: "https://pubmed.ncbi.nlm.nih.gov/25430861/", title: "Systematic literature review of imaging features of spinal degeneration in asymptomatic populations." },
    { text: "Jensen et al. (NEJM 1994)", url: "https://pubmed.ncbi.nlm.nih.gov/8208267/", title: "Magnetic resonance imaging of the lumbar spine in people without back pain." },
  ],
  "disc-herniation": [
    { text: "(Foster and colleagues, 2018)", url: "https://pubmed.ncbi.nlm.nih.gov/29573872/", title: "Prevention and treatment of low back pain: evidence, challenges, and promising directions." },
    { text: "(Lurie and colleagues, Spine 2014)", url: "https://pubmed.ncbi.nlm.nih.gov/24153171/", title: "Surgical versus nonoperative treatment for lumbar disc herniation: eight-year results for the spine patient outcomes research trial." },
    { text: "(Weinstein and colleagues, JAMA 2006)", url: "https://pubmed.ncbi.nlm.nih.gov/17119140/", title: "Surgical vs nonoperative treatment for lumbar disk herniation: the Spine Patient Outcomes Research Trial (SPORT): a randomized trial." },
    { text: "Brinjikji et al. (AJNR 2015)", url: "https://pubmed.ncbi.nlm.nih.gov/25430861/", title: "Systematic literature review of imaging features of spinal degeneration in asymptomatic populations." },
    { text: "Jensen et al. (NEJM 1994)", url: "https://pubmed.ncbi.nlm.nih.gov/8208267/", title: "Magnetic resonance imaging of the lumbar spine in people without back pain." },
  ],
  "facet-joint-syndrome": [
    { text: "(Cohen and colleagues, 2020)", url: "https://pubmed.ncbi.nlm.nih.gov/32245841/", title: "Consensus practice guidelines on interventions for lumbar facet joint pain from a multispecialty, international working group." },
  ],
  "femoroacetabular-impingement": [
    { text: "(Griffin and colleagues, Lancet 2018)", url: "https://pubmed.ncbi.nlm.nih.gov/29893223/", title: "UK FASHIoN trial: keyhole hip surgery or physiotherapy (Griffin et al., Lancet)" },
    { text: "(Griffin et al., Lancet 2018)", url: "https://pubmed.ncbi.nlm.nih.gov/29893223/", title: "UK FASHIoN trial: keyhole hip surgery or physiotherapy (Griffin et al., Lancet)" },
    { text: "Mansell and colleagues (2018)", url: "https://pubmed.ncbi.nlm.nih.gov/29443538/", title: "Keyhole surgery or physical therapy for hip impingement, 2-year follow-up (Mansell et al.)" },
    { text: "Mansell et al. (AJSM 2018)", url: "https://pubmed.ncbi.nlm.nih.gov/29443538/", title: "Keyhole surgery or physical therapy for hip impingement, 2-year follow-up (Mansell et al.)" },
  ],
  "frozen-shoulder": [
    { text: "(Hand and colleagues, 2008)", url: "https://pubmed.ncbi.nlm.nih.gov/17993282/", title: "Long-term outcome of frozen shoulder." },
    { text: "(Rangan et al., Lancet 2020)", url: "https://pubmed.ncbi.nlm.nih.gov/33010843/", title: "Management of adults with primary frozen shoulder in secondary care (UK FROST): a multicentre, pragmatic, three-arm, superiority randomised clinical trial." },
    { text: "Hand and colleagues (JSES 2008)", url: "https://pubmed.ncbi.nlm.nih.gov/17993282/", title: "Long-term outcome of frozen shoulder." },
    { text: "Wong and colleagues (Physiotherapy 2017)", url: "https://pubmed.ncbi.nlm.nih.gov/27641499/", title: "Natural history of frozen shoulder: fact or fiction? A systematic review." },
  ],
  "golfers-elbow": [
    { text: "(Descatha et al., 2003)", url: "https://pubmed.ncbi.nlm.nih.gov/14506342/", title: "Medial epicondylitis in occupational settings: prevalence, incidence and associated risk factors" },
    { text: "(See et al., 2026)", url: "https://pubmed.ncbi.nlm.nih.gov/41887339/", title: "Eccentric exercise therapy for medial epicondylitis: A systematic review of clinical outcomes" },
  ],
  "greater-trochanteric-pain-syndrome": [
    { text: "(Bergmann et al., 2001)", url: "https://pubmed.ncbi.nlm.nih.gov/11410170/", title: "Hip contact forces and gait patterns from routine activities." },
    { text: "(Mellor and colleagues, BMJ 2018)", url: "https://pubmed.ncbi.nlm.nih.gov/29720374/", title: "LEAP trial: education and exercise compared with an injection (Mellor et al., BMJ)" },
    { text: "(Mellor et al., BMJ 2018)", url: "https://pubmed.ncbi.nlm.nih.gov/29720374/", title: "LEAP trial: education and exercise compared with an injection (Mellor et al., BMJ)" },
    { text: "(Segal et al., 2007)", url: "https://pubmed.ncbi.nlm.nih.gov/17678660/", title: "Greater trochanteric pain syndrome: epidemiology and associated factors." },
    { text: "Segal et al. (2007)", url: "https://pubmed.ncbi.nlm.nih.gov/17678660/", title: "Greater trochanteric pain syndrome: epidemiology and associated factors." },
  ],
  "groin-strains": [
    { text: "(Ekstrand et al., American Journal of Sports Medicine, 2011)", url: "https://pubmed.ncbi.nlm.nih.gov/21335353/", title: "Epidemiology of muscle injuries in professional football (soccer)" },
    { text: "(Serner et al., Orthop J Sports Med 2020)", url: "https://pubmed.ncbi.nlm.nih.gov/32064292/", title: "Return to sport after rehab based on meeting set criteria, for new inner thigh injuries" },
    { text: "(Tyler et al., American Journal of Sports Medicine, 2001)", url: "https://pubmed.ncbi.nlm.nih.gov/11292035/", title: "The association of hip strength and flexibility with the incidence of adductor muscle strains in professional ice hockey players" },
    { text: "Hölmich program (Lancet 1999)", url: "https://pubmed.ncbi.nlm.nih.gov/9989713/", title: "Effectiveness of active physical training as treatment for long-standing adductor-related groin pain in athletes: randomised trial" },
    { text: "Serner and colleagues (2020)", url: "https://pubmed.ncbi.nlm.nih.gov/32064292/", title: "Return to sport after rehab based on meeting set criteria, for new inner thigh injuries" },
    { text: "Serner et al. (BJSM 2016)", url: "https://pubmed.ncbi.nlm.nih.gov/27531521/", title: "Can standardised clinical examination of athletes with acute groin injuries predict the presence and location of MRI findings?" },
  ],
  "hallux-rigidus": [
    { text: "(Grady et al., 2002)", url: "https://pubmed.ncbi.nlm.nih.gov/11847262/", title: "A retrospective analysis of 772 patients with hallux limitus" },
    { text: "(Shamus et al., 2004)", url: "https://pubmed.ncbi.nlm.nih.gov/15296364/", title: "The effect of sesamoid mobilization, flexor hallucis strengthening, and gait training on reducing pain and restoring function in individuals with hallux limitus: a clinical trial" },
    { text: "Grady and colleagues (2002)", url: "https://pubmed.ncbi.nlm.nih.gov/11847262/", title: "A retrospective analysis of 772 patients with hallux limitus" },
    { text: "Shamus and colleagues (2004)", url: "https://pubmed.ncbi.nlm.nih.gov/15296364/", title: "The effect of sesamoid mobilization, flexor hallucis strengthening, and gait training on reducing pain and restoring function in individuals with hallux limitus: a clinical trial" },
  ],
  "hammer-toe-deformities": [
    { text: "Shirzad and colleagues (2011)", url: "https://pubmed.ncbi.nlm.nih.gov/21807918/", title: "Lesser toe deformities" },
  ],
  "hamstring-strains": [
    { text: "(Lempainen et al., Muscles Ligaments Tendons J 2015)", url: "https://pubmed.ncbi.nlm.nih.gov/25878983/", title: "Expert opinion: diagnosis and treatment of proximal hamstring tendinopathy." },
    { text: "(Martin et al., J Hip Preserv Surg 2015)", url: "https://pubmed.ncbi.nlm.nih.gov/27011826/", title: "Deep gluteal syndrome." },
    { text: "(Pollock and colleagues, 2016)", url: "https://pubmed.ncbi.nlm.nih.gov/26888072/", title: "Time to return to full training is delayed and recurrence rate is higher in intratendinous ('c') acute hamstring injury in elite track and field athletes: clinical application of the British Athletics Muscle Injury Classification." },
    { text: "(Pollock et al., BJSM 2014)", url: "https://pubmed.ncbi.nlm.nih.gov/25031367/", title: "British athletics muscle injury classification: a new grading system." },
    { text: "(Pollock et al., BJSM 2016)", url: "https://pubmed.ncbi.nlm.nih.gov/26888072/", title: "Time to return to full training is delayed and recurrence rate is higher in intratendinous ('c') acute hamstring injury in elite track and field athletes: clinical application of the British Athletics Muscle Injury Classification." },
    { text: "Askling and colleagues (2013)", url: "https://pubmed.ncbi.nlm.nih.gov/23536466/", title: "Two rehab programs for new hamstring injuries in Swedish elite soccer (Askling et al.)" },
    { text: "Van Dyk and colleagues (2019)", url: "https://pubmed.ncbi.nlm.nih.gov/30808663/", title: "Including the Nordic hamstring exercise in injury prevention programmes halves the rate of hamstring injuries: a systematic review and meta-analysis of 8459 athletes" },
    { text: "Van Dyk et al. (BJSM 2019)", url: "https://pubmed.ncbi.nlm.nih.gov/30808663/", title: "Including the Nordic hamstring exercise in injury prevention programmes halves the rate of hamstring injuries: a systematic review and meta-analysis of 8459 athletes" },
  ],
  "hip-bursitis": [
    { text: "(Mellor and colleagues, BMJ 2018)", url: "https://pubmed.ncbi.nlm.nih.gov/29720374/", title: "LEAP trial: education and exercise compared with an injection (Mellor et al., BMJ)" },
    { text: "(Mellor et al., BMJ 2018)", url: "https://pubmed.ncbi.nlm.nih.gov/29720374/", title: "LEAP trial: education and exercise compared with an injection (Mellor et al., BMJ)" },
  ],
  "hip-labral-tears": [
    { text: "Register et al. (AJSM 2012)", url: "https://pubmed.ncbi.nlm.nih.gov/23104610/", title: "How often scans find hip changes in people without hip pain (Register et al.)" },
    { text: "Yazbek and colleagues (2011)", url: "https://pubmed.ncbi.nlm.nih.gov/21335929/", title: "Nonsurgical treatment of acetabular labrum tears: a case series." },
  ],
  "hip-osteoarthritis": [
    { text: "(Bergmann and colleagues, Journal of Biomechanics, 2001)", url: "https://pubmed.ncbi.nlm.nih.gov/11410170/", title: "Hip contact forces and gait patterns from routine activities." },
  ],
  "it-band-syndrome": [
    { text: "Noehren and colleagues (2014)", url: "https://pubmed.ncbi.nlm.nih.gov/24450366/", title: "Assessment of strength, flexibility, and running mechanics in men with iliotibial band syndrome" },
    { text: "Noehren and colleagues (JOSPT 2014)", url: "https://pubmed.ncbi.nlm.nih.gov/24450366/", title: "Assessment of strength, flexibility, and running mechanics in men with iliotibial band syndrome" },
  ],
  "knee-osteoarthritis": [
    { text: "Juhl and colleagues (2014)", url: "https://pubmed.ncbi.nlm.nih.gov/24574223/", title: "Impact of exercise type and dose on pain and disability in knee osteoarthritis: a systematic review and meta-regression analysis of randomized controlled trials." },
  ],
  "knee-pain-patellofemoral": [
    { text: "(Hart et al., BJSM 2022)", url: "https://pubmed.ncbi.nlm.nih.gov/35115309/", title: "May the force be with you: understanding how patellofemoral joint reaction force compares across different activities and physical interventions-a systematic review and meta-analysis." },
    { text: "Bramah and colleagues (2019)", url: "https://pubmed.ncbi.nlm.nih.gov/31657964/", title: "A 10% Increase in Step Rate Improves Running Kinematics and Clinical Outcomes in Runners With Patellofemoral Pain at 4 Weeks and 3 Months." },
  ],
  "low-back-pain": [
    { text: "(Fritz and colleagues, 2007)", url: "https://pubmed.ncbi.nlm.nih.gov/17612355/", title: "Matching treatment to how low back pain presents" },
    { text: "(Hayden and colleagues, 2021)", url: "https://pubmed.ncbi.nlm.nih.gov/34580864/", title: "Exercise for long-lasting low back pain" },
    { text: "(Kent and colleagues, RESTORE trial, Lancet 2023)", url: "https://pubmed.ncbi.nlm.nih.gov/37146623/", title: "Cognitive functional therapy for long-lasting, disabling low back pain (RESTORE trial)" },
    { text: "(Swain and colleagues, Journal of Biomechanics, 2020)", url: "https://pubmed.ncbi.nlm.nih.gov/31451200/", title: "No consensus on causality of spine postures or physical exposure and low back pain: A systematic review of systematic reviews." },
    { text: "Brinjikji and colleagues (AJNR 2015)", url: "https://pubmed.ncbi.nlm.nih.gov/25430861/", title: "Systematic literature review of imaging features of spinal degeneration in asymptomatic populations." },
  ],
  "mcl-lcl-sprains": [
    { text: "(Indelicato, Journal of Bone and Joint Surgery, 1983)", url: "https://pubmed.ncbi.nlm.nih.gov/6826594/", title: "Non-operative treatment of complete tears of the medial collateral ligament of the knee" },
    { text: "(Kannus, American Journal of Sports Medicine, 1989)", url: "https://pubmed.ncbi.nlm.nih.gov/2929843/", title: "Nonoperative treatment of grade II and III sprains of the lateral ligament compartment of the knee" },
    { text: "(Phisitkul et al., Iowa Orthopaedic Journal, 2006)", url: "https://pubmed.ncbi.nlm.nih.gov/16789454/", title: "MCL injuries of the knee: current concepts review" },
  ],
  "meniscus-tears": [
    { text: "(Katz et al., NEJM 2013)", url: "https://pubmed.ncbi.nlm.nih.gov/23506518/", title: "Surgery versus physical therapy for a meniscal tear and osteoarthritis." },
    { text: "(Noorduyn et al., JAMA Network Open 2022)", url: "https://pubmed.ncbi.nlm.nih.gov/35802374/", title: "Physical therapy compared with keyhole surgery for tears from gradual wear: 5-year follow-up of the ESCAPE trial" },
    { text: "(Sihvonen et al., NEJM 2013)", url: "https://pubmed.ncbi.nlm.nih.gov/24369076/", title: "Arthroscopic partial meniscectomy versus sham surgery for a degenerative meniscal tear." },
  ],
  "metatarsalgia": [
    { text: "(Br J Sports Med 2015)", url: "https://pubmed.ncbi.nlm.nih.gov/24659509/", title: "A review describes the small foot muscles as a 'foot core' that supports the arches" },
    { text: "(Foot and Ankle International, 2008)", url: "https://pubmed.ncbi.nlm.nih.gov/18752791/", title: "A review of current practice puts shoe changes and taking pressure off the forefoot before surgery" },
    { text: "(Hastings et al., 2007)", url: "https://pubmed.ncbi.nlm.nih.gov/17257544/", title: "Pads placed just behind the bone end lowered peak forefoot pressure by about a third in people with diabetes and nerve damage" },
    { text: "Espinosa and colleagues (Foot and Ankle International, 2008)", url: "https://pubmed.ncbi.nlm.nih.gov/18752791/", title: "A review of current practice puts shoe changes and taking pressure off the forefoot before surgery" },
    { text: "McKeon and colleagues (Br J Sports Med 2015)", url: "https://pubmed.ncbi.nlm.nih.gov/24659509/", title: "A review describes the small foot muscles as a 'foot core' that supports the arches" },
  ],
  "mortons-neuroma": [
    { text: "(Matthews et al., 2024)", url: "https://pubmed.ncbi.nlm.nih.gov/38334217/", title: "Treatments for Morton's neuroma" },
  ],
  "patellar-tendinopathy": [
    { text: "(Kongsgaard et al. 2009)", url: "https://pubmed.ncbi.nlm.nih.gov/19793213/", title: "Corticosteroid injections, eccentric decline squat training and heavy slow resistance training in patellar tendinopathy." },
    { text: "(Rio et al., BJSM 2015)", url: "https://pubmed.ncbi.nlm.nih.gov/25979840/", title: "Isometric exercise induces analgesia and reduces inhibition in patellar tendinopathy" },
    { text: "Cook et al. 1997", url: "https://pubmed.ncbi.nlm.nih.gov/9429013/", title: "A cross sectional study of 100 athletes with jumper's knee managed conservatively and surgically. The Victorian Institute of Sport Tendon Study Group" },
    { text: "Kettunen et al. 2002", url: "https://pubmed.ncbi.nlm.nih.gov/12239003/", title: "Long-term prognosis for jumper's knee in male athletes. A prospective follow-up study" },
    { text: "Kongsgaard et al. 2009", url: "https://pubmed.ncbi.nlm.nih.gov/19793213/", title: "Corticosteroid injections, eccentric decline squat training and heavy slow resistance training in patellar tendinopathy." },
    { text: "Millar and colleagues (Nature Reviews Disease Primers, 2021)", url: "https://pubmed.ncbi.nlm.nih.gov/33414454/", title: "Tendinopathy." },
    { text: "Rio and colleagues 2015", url: "https://pubmed.ncbi.nlm.nih.gov/25979840/", title: "Isometric exercise induces analgesia and reduces inhibition in patellar tendinopathy" },
  ],
  "pcl-injuries": [
    { text: "Pierce and colleagues (2012)", url: "https://pubmed.ncbi.nlm.nih.gov/22484415/", title: "Posterior cruciate ligament tears: functional and postoperative rehabilitation" },
    { text: "Pierce et al. (KSSTA 2012)", url: "https://pubmed.ncbi.nlm.nih.gov/22484415/", title: "Posterior cruciate ligament tears: functional and postoperative rehabilitation" },
    { text: "Wang et al. (Curr Rev Musculoskelet Med 2018)", url: "https://pubmed.ncbi.nlm.nih.gov/29721691/", title: "Nonoperative Treatment of PCL Injuries: Goals of Rehabilitation and the Natural History of Conservative Care." },
  ],
  "piriformis-syndrome": [
    { text: "(Martin et al., J Hip Preserv Surg 2015)", url: "https://pubmed.ncbi.nlm.nih.gov/27011826/", title: "Deep gluteal syndrome." },
    { text: "Hernando et al. (Skeletal Radiology 2015)", url: "https://pubmed.ncbi.nlm.nih.gov/25739706/", title: "Deep gluteal syndrome: anatomy, imaging, and management of sciatic nerve entrapments in the subgluteal space" },
  ],
  "plantar-fasciitis": [
    { text: "(Hansen et al., 2018)", url: "https://pubmed.ncbi.nlm.nih.gov/29536022/", title: "Long-Term Prognosis of Plantar Fasciitis: A 5- to 15-Year Follow-up Study of 174 Patients With Ultrasound Examination." },
    { text: "(Rathleff et al., 2015)", url: "https://pubmed.ncbi.nlm.nih.gov/25145882/", title: "High-load strength training improves outcome in patients with plantar fasciitis: A randomized controlled trial with 12-month follow-up." },
    { text: "DiGiovanni and colleagues (JBJS 2003)", url: "https://pubmed.ncbi.nlm.nih.gov/12851352/", title: "Tissue-specific plantar fascia-stretching exercise enhances outcomes in patients with chronic heel pain. A prospective, randomized study." },
    { text: "Rathleff and colleagues (2015)", url: "https://pubmed.ncbi.nlm.nih.gov/25145882/", title: "High-load strength training improves outcome in patients with plantar fasciitis: A randomized controlled trial with 12-month follow-up." },
  ],
  "posterior-tibial-tendon-dysfunction": [
    { text: "(Alvarez et al., 2006)", url: "https://pubmed.ncbi.nlm.nih.gov/16442022/", title: "Stage I and II posterior tibial tendon dysfunction treated by a structured nonoperative management protocol: an orthosis and exercise program." },
    { text: "Houck and colleagues (2015)", url: "https://pubmed.ncbi.nlm.nih.gov/25857939/", title: "Randomized Controlled Trial Comparing Orthosis Augmented by Either Stretching or Stretching and Strengthening for Stage II Tibialis Posterior Tendon Dysfunction." },
  ],
  "proximal-hamstring-tendinopathy": [
    { text: "Goom and colleagues (2016)", url: "https://pubmed.ncbi.nlm.nih.gov/27084841/", title: "Assessing and managing hamstring tendon pain at the sitting bone (Goom et al.)" },
    { text: "Goom and colleagues (JOSPT, 2016)", url: "https://pubmed.ncbi.nlm.nih.gov/27084841/", title: "Assessing and managing hamstring tendon pain at the sitting bone (Goom et al.)" },
    { text: "Goom and colleagues in 2016", url: "https://pubmed.ncbi.nlm.nih.gov/27084841/", title: "Assessing and managing hamstring tendon pain at the sitting bone (Goom et al.)" },
  ],
  "rotator-cuff-injuries": [
    { text: "(CSAW trial, Beard and colleagues, Lancet 2018)", url: "https://pubmed.ncbi.nlm.nih.gov/29169668/", title: "Arthroscopic subacromial decompression for subacromial shoulder pain (CSAW): a multicentre, pragmatic, parallel group, placebo-controlled, three-group, randomised surgical trial." },
    { text: "(Hickey and colleagues, BJSM 2018)", url: "https://pubmed.ncbi.nlm.nih.gov/28735288/", title: "Scapular dyskinesis increases the risk of future shoulder pain by 43% in asymptomatic athletes: a systematic review and meta-analysis" },
    { text: "(Kuhn and colleagues, JBJS 2024)", url: "https://pubmed.ncbi.nlm.nih.gov/38980920/", title: "The Predictors of Surgery for Symptomatic, Atraumatic Full-Thickness Rotator Cuff Tears Change Over Time: Ten-Year Outcomes of the MOON Shoulder Prospective Cohort." },
    { text: "(Kuhn and colleagues, JSES 2013)", url: "https://pubmed.ncbi.nlm.nih.gov/23540577/", title: "Effectiveness of physical therapy in treating atraumatic full-thickness rotator cuff tears: a multicenter prospective cohort study." },
    { text: "(Thigpen and colleagues, J Shoulder Elbow Surg 2016)", url: "https://pubmed.ncbi.nlm.nih.gov/26995456/", title: "Rehabilitation after keyhole rotator cuff repair: a consensus statement from shoulder and elbow therapists" },
    { text: "Littlewood and colleagues 2016", url: "https://pubmed.ncbi.nlm.nih.gov/26160149/", title: "A self-managed single exercise programme versus usual physiotherapy treatment for rotator cuff tendinopathy: a randomised controlled trial (the SELF study)." },
  ],
  "scaphoid-fractures": [
    { text: "Steinmann and colleagues (2006)", url: "https://pubmed.ncbi.nlm.nih.gov/16897211/", title: "Scaphoid fractures and nonunions: diagnosis and treatment." },
  ],
  "sciatica": [
    { text: "(Lurie and colleagues, Spine 2014)", url: "https://pubmed.ncbi.nlm.nih.gov/24153171/", title: "Surgical versus nonoperative treatment for lumbar disc herniation: eight-year results for the spine patient outcomes research trial." },
    { text: "(Weinstein and colleagues, JAMA 2006)", url: "https://pubmed.ncbi.nlm.nih.gov/17119140/", title: "Surgical vs nonoperative treatment for lumbar disk herniation: the Spine Patient Outcomes Research Trial (SPORT): a randomized trial." },
  ],
  "shin-splints": [
    { text: "(Anderson et al., Gait & Posture 2024)", url: "https://pubmed.ncbi.nlm.nih.gov/38096737/", title: "Effect of three different running gait cues on vertical tibial acceleration." },
    { text: "(Crowell and Davis, 2011)", url: "https://pubmed.ncbi.nlm.nih.gov/20888675/", title: "Running retraining to reduce impact on the legs in runners" },
  ],
  "shoulder-impingement": [
    { text: "(Beard et al., Lancet 2018)", url: "https://pubmed.ncbi.nlm.nih.gov/29169668/", title: "Arthroscopic subacromial decompression for subacromial shoulder pain (CSAW): a multicentre, pragmatic, parallel group, placebo-controlled, three-group, randomised surgical trial." },
    { text: "(Hanratty and colleagues, 2012)", url: "https://pubmed.ncbi.nlm.nih.gov/22607807/", title: "Exercise for shoulder impingement: a review of 16 trials" },
  ],
  "shoulder-instability": [
    { text: "(Pasqualini and colleagues, 2024)", url: "https://pubmed.ncbi.nlm.nih.gov/38735414/", title: "Shoulder Instability-Return to Sports After Injury Scale Shows That Lack of Psychological Readiness Predicts Outcomes and Recurrence Following Surgical Stabilization" },
  ],
  "si-joint-dysfunction": [
    { text: "Laslett and colleagues (Manual Therapy 2005)", url: "https://pubmed.ncbi.nlm.nih.gov/16038856/", title: "Diagnosis of sacroiliac joint pain: validity of individual provocation tests and composites of tests." },
  ],
  "stress-fractures": [
    { text: "(Hoenig et al., British Journal of Sports Medicine 2025)", url: "https://pubmed.ncbi.nlm.nih.gov/39638438/", title: "International Delphi consensus on bone stress injuries in athletes" },
  ],
  "tennis-elbow": [
    { text: "(Tyler and colleagues, 2010)", url: "https://pubmed.ncbi.nlm.nih.gov/20579907/", title: "Addition of isolated wrist extensor eccentric exercise to standard treatment for chronic lateral epicondylosis: a prospective randomized trial" },
    { text: "Bisset and colleagues (2006)", url: "https://pubmed.ncbi.nlm.nih.gov/23385272/", title: "Effect of corticosteroid injection, physiotherapy, or both on clinical outcomes in patients with unilateral lateral epicondylalgia: a randomized controlled trial" },
    { text: "Peterson and colleagues (2014)", url: "https://pubmed.ncbi.nlm.nih.gov/24634444/", title: "A randomized controlled trial of eccentric vs. concentric graded exercise in chronic tennis elbow (lateral elbow tendinopathy)." },
  ],
  "thoracic-outlet-syndrome": [
    { text: "(Illig and colleagues, 2016)", url: "https://pubmed.ncbi.nlm.nih.gov/27565607/", title: "Reporting standards of the Society for Vascular Surgery for thoracic outlet syndrome." },
    { text: "(INTOS consensus, 2024)", url: "https://pubmed.ncbi.nlm.nih.gov/39206209/", title: "Consensus Recommendations for Neurogenic Thoracic Outlet Syndrome from the INTOS Workgroup" },
  ],
  "turf-toe": [
    { text: "McCormick and Anderson (Sports Health, 2010)", url: "https://pubmed.ncbi.nlm.nih.gov/23015979/", title: "Turf toe: anatomy, diagnosis, and treatment" },
  ],
  "wrist-sprains": [
    { text: "(Bergner et al., 2020)", url: "https://pubmed.ncbi.nlm.nih.gov/30879716/", title: "Dart thrower's motion and the injured scapholunate interosseous ligament: A scoping review of studies examining motion, orthoses, and rehabilitation" },
    { text: "(Bergner et al., Journal of Hand Therapy 2020)", url: "https://pubmed.ncbi.nlm.nih.gov/30879716/", title: "Dart thrower's motion and the injured scapholunate interosseous ligament: A scoping review of studies examining motion, orthoses, and rehabilitation" },
  ],
};
