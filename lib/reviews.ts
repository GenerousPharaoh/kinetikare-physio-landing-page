/**
 * Google reviews shown on the site, curated by Kareem: the carousel shows this subset, while
 * GOOGLE_REVIEW_TOTAL is the real Google total. The mismatch is intentional (see CLAUDE.md,
 * "The review count is multi-sourced").
 */

export interface GoogleReview {
  name: string;
  text: string;
}

/** Kareem's practitioner listing, by CID (not the Endorphins place page). */
export const GOOGLE_REVIEWS_URL = 'https://maps.google.com/maps?cid=12525727525636452787';

export const GOOGLE_REVIEW_TOTAL = 31;

export const reviews: GoogleReview[] = [
  {
    name: "Dr. Fel Rocci",
    text: "I had ACL surgery on my right knee following a tennis injury in April, 1999. As a result of ignoring my orthopedic surgeon's advice at that time to undergo one year of physiotherapy treatment, my right leg stiffened and weakened. This resulted in throwing off my entire body alignment, spinal column and left leg. In my effort to return to playing tennis in 2022, I ran into setbacks related to my existing injuries. Finally, 25 years since the injury I pursued treatment after meeting Kareem in March, 2024. His thorough diagnosis combined with an adaptable approach that shifted to optimize my progress has been nothing short of amazing! He adjusted treatment to compliment my progress utilizing deep tissue massage, dry needling and targeted exercises. It has taken just 14 months to restore my function to about 90% of normal, and I believe we will get to 100%. What matters to me is being able to play tennis unencumbered by injury. Having worked with Kareem my game has not only improved significantly over these past 3 years - I am also now able to play 4-5 times a week without incurring a setback. Not bad for a 70 year old! I write this review not only to acknowledge Kareem's diagnostic and treatment skills, but to 'pay it forward'. To those who are struggling with chronic pain and mobility issues, hesitate no further - your quality of life will be significantly improved in short order with a treatment plan tailor-made for you"
  },
  {
    name: "Thanula Gnanakanthan",
    text: "I've been seeing Kareem for physiotherapy and I can honestly say the experience has been outstanding. I came in with an ankle injury and from the very first session, Kareem was thorough, knowledgeable, and incredibly attentive. He took the time to explain the root of the issue, set clear goals, and crafted a personalized treatment plan that included hands-on therapy and guided exercises. What I really appreciated was how funny, kindhearted and compassionate he was, it made each session something I looked forward to. I saw consistent progress and now feel stronger and pain free. Highly recommend Kareem to anyone looking for an experienced physiotherapist who takes the time to listen and deliver results."
  },
  {
    name: "Tami Murzin",
    text: "I had a fantastic experience working with Kareem Hassanein for a shoulder injury. From the start, Kareem took the time to really understand the issue and developed a treatment plan that was both effective and manageable. Kareem's knowledge, encouragement, and hands-on approach helped me regain strength and mobility much faster than I expected. I always felt listened to and supported, and he provided great guidance on exercises I could do at home to keep progressing. I'm so grateful for Kareem's care and would highly recommend him to anyone dealing with an injury—especially if you're looking for someone who combines expertise with genuine compassion."
  },
  {
    name: "Mitch Ball",
    text: "I struggled with rotator cuff, hip, and back pain from weightlifting for a long time. Kareem's approach was great. His assessments helped me understand what was wrong, the exercises were effective, and the dry needling and deep tissue work really accelerated my recovery. He knows his stuff. Highly recommend."
  },
  {
    name: "D Belisle",
    text: "I can't recommend Kareem highly enough! After undergoing knee surgery, I was fortunate to have him as my physiotherapist. From day one, he took the time to truly understand my situation and tailor a treatment plan. Kareem also developed a comprehensive at-home exercise program—it was clear, structured, and was adapted as I progressed. Kareem was incredibly attentive, always making sure I performed each exercise correctly and safely. I never once felt rushed during our sessions; he always made time to answer my questions and listened carefully to any concerns I had. His professionalism, knowledge, and genuine care made a huge difference in my recovery. If you're looking for a physiotherapist who is thorough, patient, and truly dedicated to your recovery, look no further."
  },
  {
    name: "Nader S",
    text: "I took my elderly father to Kareem for his mobility issues and hip/back pain. He took his time to assess his my father's issue to determine the appropriate care. My father had a wonderful experience under Kareem's care, his issues immediately improved."
  },
  {
    name: "Marko Vasilic",
    text: "I had been struggling with achilles tendinitis and plantar fasciitis for months, and it was holding me back from playing basketball the way I wanted. Kareem did a full movement analysis and tested all of the surrounding joints and muscles, which really showed me where the extra stress was coming from. Treatment included deep trigger point release with dry needling, cupping to ease the tightness, and exercises that were specific to building the strength and mobility I needed on the court. The progress was steady, and before long the pain and stiffness had eased up and I felt confident moving again. I'm now back to playing comfortably without worrying about my Achilles or heel flaring up. I highly recommend Kareem for any athletes trying to get back to playing comfortably."
  },
  {
    name: "Ryan Darkwah",
    text: "I went to Kareem because my knees were hurting every time I jumped playing ball. He found that the problem came from weakness in my hip and tension in my quads that was putting extra strain on my patellar tendon. Kareem used dry needling on my quads to release the tightness and had me work on strengthening the right muscles. My pain's gone now, and I'm back to playing at full speed. He really knows his stuff and helped me get back on the court feeling stronger than before. I'd definitely recommend him to any athletes dealing with nagging injuries 💪🏿"
  },
  {
    name: "Pasquale Di Clemente",
    text: "Kareem has really helped me with the pain in my ankle and glute. He's great at adjusting each session based on how I'm feeling that day and always checks in to make sure I'm making progress. The exercises he's given me have made a big difference in my strength and balance, and he even sends videos with clear instructions so I never forget what to do. The dry needling and cupping have also helped loosen up my tight muscles and speed up my recovery. He asks the right questions that get to what's really going on, and I always feel like he's paying attention to the details. I was a bit nervous starting with someone new, but Kareem is easygoing and relatable, and now I actually look forward to my sessions. The clinic itself is comfortable and welcoming, which makes the whole experience even better."
  },
  {
    name: "David Espinosa",
    text: "I was looking for a physio who does dry needling because it's helped me before, and that's how I found Kareem. I came in with hip pain that was messing with my Muay Thai kicks and some foot pain that kept coming back. Kareem actually took the time to figure out what was causing it instead of just treating the pain. The dry needling and cupping made a big difference right away, and he gave me clear strategies and small adjustments so I could keep training without making things worse. The clinic space is clean and comfortable, and they do direct billing, which makes things simple. Kareem's also got a good sense of humor, so the sessions never feel stiff or awkward. My hip feels strong again, the foot pain's gone, and I've been able to train hard without any flare-ups."
  },
  {
    name: "Kendra MacCuish",
    text: "I came to see Kareem for a bad shoulder injury. After assessing my injury he has been great about working with my doctor's office to get referrals to specialists and putting together a therapy plan that includes in office treatments like cupping, dry needling, shock wave therapy and manual movement therapy. As well as an at home exercise plan. Thankfully this has allowed me to reduce my pain while increasing my range of motion."
  },
  {
    name: "Johan Mapa",
    text: "Kareem did a great job of treating my plantar fasciitis. It has been bothering me for months but after my first appointment with him in October, it felt relieving and almost all the pain is gone. I continued my appointments with Kareem since then and I always notice improvements in my mobility. I'm also dealing with shoulder blade pain and Kareem treated it right away, and it stopped being painful. He is the best and I will continue to seek treatment from him. I highly recommend him!"
  },
  {
    name: "Nickel Chan",
    text: "Kareem is honestly one of the best physiotherapists I've ever seen. He really knows what he's doing and fixed issues I'd been struggling with for a long time. The dry needling and manual therapy made a huge difference. He listens carefully, explains things clearly, and adjusts the treatment based on what actually works. I always leave feeling better and more mobile. Highly recommend him to anyone looking for a great physio."
  },
  {
    name: "Sean Vandenbarselaar",
    text: "I'm in my fifties, work in sales, and spend most days either at a desk or on a plane. I had lower back pain, plantar fasciitis, a knee that kept giving out on stairs, and a sharp electric-shock pain running down my thigh. He figured out the thigh pain was coming from a nerve in my lower back rather than the thigh itself, and walked me through why it had been moving around the way it was. Nobody had put that together for me before. A few weeks in the shock pain was gone, my knee stopped giving out, and the back quieted down. If you're getting older and stacking up a handful of nagging issues wondering if any of it's actually fixable, he's worth going to see."
  },
  {
    name: "Serhiy Sidey",
    text: "Four weeks out from a fight, I dislocated my right shoulder in a takedown at practice. Torn labrum, torn ligament and a rotator cuff tear. Started with Kareem right after the MRI and stayed with him through surgery and the rehab after. I fight in the UFC, so coming back at 80% isn't an option. When the surgeon's office sent the wrong post-op protocol, he caught it and built me the right one. Training hard again and still making progress! Definitely recommend Kareem to any athletes looking to get back to performing at their best!"
  },
  {
    name: "Raahim Shaikh",
    text: "I had been dealing with knee pain and weakness for years after an ACL tear in high school, and my knee never felt as strong or stable as it should have. Kareem was great at demonstrating the exercises, coaching me through the progressions, and making sure each phase was challenging my strength and stability in the right way. He also gave me clear targets to work toward, which made it easy to see the progress I was making. My knee feels much stronger now, more stable, and a lot better during workouts and everyday movement."
  },
  {
    name: "Darius C",
    text: "I've been seeing Kareem for about six years now, and I can't recommend him highly enough. He's incredibly knowledgeable and does a great job explaining things in a way that helps you truly understand what's going on with your body. He's thorough, dedicated, and clearly committed to getting the best possible results. I've gone to him for a variety of injuries, strains, and general aches, and each time I leave feeling stronger and more confident in my movement."
  },
  {
    name: "Lucas Picard",
    text: "Highly recommend Kareem! He helped a ton with my chronic lower back pain. The hands on treatment was really effective and he showed me some great strategies to relax the tension in my hips and hamstrings."
  },
  {
    name: "Daria N",
    text: "I started seeing Kareem after years of chronic back pain, plus newer hip pain and morning stiffness that had gotten bad enough to affect how I moved every time I got out of bed. I teach dance, and at that point I had started to think pain and stiffness were just something I had to live with. Kareem was thorough, thoughtful, and clear from the beginning. He helped me understand what was going on, and the plan he gave me felt realistic and easy enough to stay consistent with. Nothing felt generic or overwhelming, and that made a big difference. The targeted treatments he provided always left me feeling relief. Now I am back to teaching full classes without pain, my mornings feel normal again, and even long days at my desk do not affect me the way they used to. I had tried other treatments before without much progress, so I am really glad I found him. If you are looking for a physio in Burlington, I would definitely recommend Kareem!"
  },
  {
    name: "Jeff Postma",
    text: "I play basketball, and for months every jump shot came with a twinge in my shoulder that just kept getting worse the more I played. Kareem assessed it and found that it was coming from weakness in one of my rotator cuff muscles. He built me a program that started with basic strengthening and worked up to movements that challenged it more dynamically. He also did trigger point release on the tight spots that were holding me back, and he explained everything along the way so I knew what we were doing and why. He was straight with me about timelines and what to expect at each stage, so I always knew where I stood in the recovery. Within 8 weeks I was back to shooting without even thinking about my shoulder. Highly recommend!"
  },
  {
    name: "Tamara M",
    text: "Kareem was very knowledgeable and warm, immediately creating a safe and welcoming environment for me as a client. As someone with a few different challenges within my body I felt as though he was incredibly thorough and by the time I left my initial appointment I already felt better. I look forward to doing the targeted exercises he prepared for me. I highly recommend Kareem if you are looking for a kind and competent physiotherapist."
  },
  {
    name: "Nikolas K",
    text: "I highly recommend Kareem to anyone looking for physiotherapy in Burlington. He helped me recover from a radial head (elbow) fracture and guided me through every step of the process. From soft tissue massage and targeted exercises to cupping, ultrasound therapy, and other treatment techniques, he used a variety of methods to get my elbow moving and feeling strong again. His knowledge, professionalism, and encouragement genuinely made a huge difference, and thanks to his care, I was able to get back to playing hockey and golf! Thanks Kareem!"
  },
  {
    name: "Robert Gonzales",
    text: "I wouldn't recommend anyone else other than Kareem when it comes to physiotherapy. Kareem helped me recover from a painful tear through my hand and forearm. He took the time to assess the injury step-by-step and introduced exercises that helped me get my strength back. Kareem also used massaging and cupping therapy to release the tension and speed up the healing. He is incredibly knowledgeable and thorough about the process moving forward after the session, giving great advice on what to avoid and providing alternate options. Thanks to Kareem, I have regained my strength and movement!"
  },
  {
    name: "Caryn Hansen",
    text: "Kareem is fantastic! He's professional, attentive, and clearly very skilled. I noticed improvement quickly and always felt supported throughout the process. He takes the time to understand what's going on with a professionalism and genuine care that makes a huge difference. I've had a great experience and would highly recommend him."
  },
  {
    name: "Mustafa",
    text: "Incredible physiotherapist and very knowledgeable. He pays a lot of attention to every detail and makes sure you're back better than you were before. Always goes above and beyond. Highly recommend Kareem to everyone"
  },
  {
    name: "Mike Hauser",
    text: "Kareem has been treating my right shoulder for the past 3 years, frozen shoulder, limited range … and pain. Using a multitude of techniques, results have been amazing. I would totally recommend Kareem."
  }
];
