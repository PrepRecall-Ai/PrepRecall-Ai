/* ==========================================================================
   recallData.js - MASTER HIDDEN REPOSITORY
   ========================================================================== */

// 👉 1. GLOBAL ARRAYS (CRITICAL: Never delete these two lines!)
const hiddenRecallArticles = [];
const recallQuestionPool = [];

/* ==========================================================================
   AUGUST 2026 - BATCH 1 (ITEMS 001 TO 020)
   ========================================================================== */

const augRecallArticlesBatch1 = [
  {
    id: "REC-AUG-001", date: "2026-08-31", month: "Aug 2026", category: "Science & Technology",
    title: "NASA Launches Nancy Grace Roman Space Telescope",
    summary: "NASA launched the Nancy Grace Roman Space Telescope aboard a SpaceX Falcon Heavy to study dark energy, dark matter, and exoplanets.",
    whatHappened: "NASA successfully launched the Nancy Grace Roman Space Telescope on 30 August 2026 aboard a SpaceX Falcon Heavy from Kennedy Space Center, Florida. The observatory is dedicated to studying dark energy, dark matter, and exoplanets.",
    importantPoints: [
      "Launched aboard a SpaceX Falcon Heavy rocket.",
      "Named after NASA's first chief astronomer, known as the 'Mother of Hubble'.",
      "Focuses on wide-field infrared surveys of the universe."
    ],
    examFacts: ["Named after: Nancy Grace Roman", "Launch Vehicle: SpaceX Falcon Heavy"],
    quickRemember: "Nancy Grace Roman Telescope: NASA's mission to study dark energy.",
    audioText: "NASA launched the Nancy Grace Roman Space Telescope on a SpaceX Falcon Heavy to investigate dark energy and exoplanets.",
    source: "NASA", importantFor: ["SSC CGL", "UPSC", "CDS"]
  },
  {
    id: "REC-AUG-002", date: "2026-08-31", month: "Aug 2026", category: "International Affairs",
    title: "25th Anniversary SCO Summit Held in Bishkek",
    summary: "The Shanghai Cooperation Organisation (SCO) Summit 2026 concluded in Bishkek, Kyrgyzstan.",
    whatHappened: "The SCO Summit 2026 was hosted in Bishkek, Kyrgyzstan, from 31 August to 1 September 2026. The summit commemorated the 25th anniversary of the regional multilateral security and economic organization.",
    importantPoints: [
      "Marked the 25th anniversary of the SCO.",
      "Bishkek served as the host chair for the 2026 summit."
    ],
    examFacts: ["Host City: Bishkek, Kyrgyzstan", "Milestone: 25th Anniversary"],
    quickRemember: "25th SCO Summit 2026 hosted in Bishkek, Kyrgyzstan.",
    audioText: "The 25th anniversary Shanghai Cooperation Organisation summit was held in Bishkek, Kyrgyzstan.",
    source: "SCO Secretariat", importantFor: ["SSC CGL", "CDS", "UPSC"]
  },
  {
    id: "REC-AUG-003", date: "2026-08-29", month: "Aug 2026", category: "Art & Culture",
    title: "World Sanskrit Day Observed on Shravana Purnima",
    summary: "World Sanskrit Day 2026 was celebrated nationwide on 28 August to promote ancient Indian linguistic heritage.",
    whatHappened: "World Sanskrit Day 2026 was observed across educational and cultural institutions on 28 August, coinciding with the full moon day of the Hindu month of Shravana (Shravana Purnima).",
    importantPoints: [
      "Celebrated annually on Shravana Purnima.",
      "First instituted by the Government of India in 1969."
    ],
    examFacts: ["Observance: Shravana Purnima", "Year first declared: 1969"],
    quickRemember: "World Sanskrit Day is celebrated annually on Shravana Purnima.",
    audioText: "World Sanskrit Day was celebrated across the country on the occasion of Shravana Purnima.",
    source: "Ministry of Culture", importantFor: ["SSC CGL", "SSC CHSL"]
  },
  {
    id: "REC-AUG-004", date: "2026-08-29", month: "Aug 2026", category: "Environment",
    title: "Nepal Flash Floods Triggered by Glacial Collapse",
    summary: "A massive glacial ice and rock collapse dammed northern river valleys, causing catastrophic flash floods in Nepal.",
    whatHappened: "A catastrophic flash flood hit Nepal's northern valleys after a glacial collapse near the Tibet border temporarily dammed the river before bursting, sending flash surges down the Bhote Koshi and Trishuli rivers.",
    importantPoints: [
      "Triggered by a glacial rock-ice avalanche.",
      "Devastated areas along the Bhote Koshi and Trishuli river corridors."
    ],
    examFacts: ["Primary Rivers: Bhote Koshi and Trishuli", "Direct Cause: Glacial barrier burst"],
    quickRemember: "Nepal flash floods caused by a glacial dam burst in the Bhote Koshi and Trishuli basins.",
    audioText: "A glacial collapse in Nepal temporarily dammed river channels before bursting, triggering destructive flash floods in the Bhote Koshi basin.",
    source: "Disaster Management Cell", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-AUG-005", date: "2026-08-28", month: "Aug 2026", category: "Sports",
    title: "R. Praggnanandhaa Wins Grand Chess Tour 2026",
    summary: "R. Praggnanandhaa became the first Indian grandmaster to clinch the prestigious Grand Chess Tour title.",
    whatHappened: "Indian Grandmaster R. Praggnanandhaa made chess history by winning the Grand Chess Tour 2026 in St. Louis, defeating defending champion Fabiano Caruana 15-13 in the decisive final.",
    importantPoints: [
      "First Indian to win the Grand Chess Tour title.",
      "Defeated Fabiano Caruana 15-13 in the final."
    ],
    examFacts: ["Winner: R. Praggnanandhaa", "Venue: St. Louis, USA"],
    quickRemember: "Praggnanandhaa is the first Indian to win the Grand Chess Tour.",
    audioText: "Grandmaster R. Praggnanandhaa became the first Indian to win the Grand Chess Tour after defeating Fabiano Caruana.",
    source: "FIDE", importantFor: ["SSC CGL", "SSC CHSL"]
  },
  {
    id: "REC-AUG-006", date: "2026-08-28", month: "Aug 2026", category: "Government Schemes",
    title: "PM Jan Dhan Yojana Completes 12 Years",
    summary: "India's flagship financial inclusion mission PMJDY completed 12 years with 59.09 crore bank accounts opened.",
    whatHappened: "Pradhan Mantri Jan Dhan Yojana completed 12 years of operation on 28 August 2026. Launched in 2014, the scheme has provided basic banking access to over 59 crore beneficiaries.",
    importantPoints: [
      "Launched on 28 August 2014.",
      "Total accounts opened crossed 59.09 crore by August 2026."
    ],
    examFacts: ["Launch Date: 28 August 2014", "Accounts: 59.09 Crore"],
    quickRemember: "PMJDY was launched on 28 August 2014 and completed 12 years in August 2026.",
    audioText: "The Pradhan Mantri Jan Dhan Yojana completed twelve years of financial inclusion, achieving over 59 crore accounts.",
    source: "Ministry of Finance", importantFor: ["SSC CGL", "UPSC", "CDS"]
  },
  {
    id: "REC-AUG-007", date: "2026-08-27", month: "Aug 2026", category: "Important Days",
    title: "National Sports Day 2026 Commemorates Major Dhyan Chand",
    summary: "India celebrated National Sports Day on 29 August with a three-day national fitness and tribute campaign.",
    whatHappened: "National Sports Day 2026 was observed across India on 29 August to honor the birth anniversary of hockey icon Major Dhyan Chand, celebrated under the campaign theme 'Tribute, Play, and Move'.",
    importantPoints: [
      "Observed annually on 29 August.",
      "Commemorates hockey legend Major Dhyan Chand's birth anniversary."
    ],
    examFacts: ["Date: 29 August", "Commemorates: Major Dhyan Chand"],
    quickRemember: "National Sports Day is celebrated on 29 August in honor of Major Dhyan Chand.",
    audioText: "India observed National Sports Day on 29 August, commemorating the birth anniversary of Major Dhyan Chand.",
    source: "Ministry of Youth Affairs", importantFor: ["SSC CGL", "SSC CHSL"]
  },
  {
    id: "REC-AUG-008", date: "2026-08-27", month: "Aug 2026", category: "Economy & Infrastructure",
    title: "ICAT Certifies India's First 15-Metre Sleeper Bus",
    summary: "Synaty Automotive received ICAT certification for India's first 15-metre multi-axle sleeper bus under AIS standards.",
    whatHappened: "The International Centre for Automotive Technology (ICAT) issued India's first compliance certificate for a 15-metre multi-axle sleeper bus to Synaty Automotive Pvt. Ltd. under AIS-119 and AIS-153 regulations.",
    importantPoints: [
      "First 15-metre multi-axle sleeper bus certified in India.",
      "Complies with AIS-119 and AIS-153."
    ],
    examFacts: ["Certifying Body: ICAT", "Standards: AIS-119 and AIS-153"],
    quickRemember: "Synaty Automotive secured ICAT certification for a 15m sleeper bus under AIS-119 and AIS-153.",
    audioText: "ICAT granted its first compliance certificate for a 15-metre multi-axle sleeper bus under AIS-119 and AIS-153 standards.",
    source: "ICAT", importantFor: ["SSC CGL"]
  },
  {
    id: "REC-AUG-009", date: "2026-08-26", month: "Aug 2026", category: "Government Schemes",
    title: "UP Approves 25 Lakh Free Tablets Under Swami Vivekananda Scheme",
    summary: "Uttar Pradesh cleared the procurement of 25 lakh digital tablets for students under the youth empowerment scheme.",
    whatHappened: "The Uttar Pradesh State Cabinet sanctioned the procurement and distribution of 25 lakh tablets to higher education and technical students under the Swami Vivekananda Yuva Sashaktikaran Yojana.",
    importantPoints: [
      "Sanctioned 25 lakh tablets for eligible youth.",
      "Operated under the Swami Vivekananda Yuva Sashaktikaran Yojana."
    ],
    examFacts: ["Quantity: 25 Lakh Tablets", "Scheme: Swami Vivekananda Yuva Sashaktikaran Yojana"],
    quickRemember: "UP approved 25 lakh free tablets under the Swami Vivekananda Yuva Sashaktikaran Yojana.",
    audioText: "The Uttar Pradesh cabinet cleared twenty-five lakh free tablets under the Swami Vivekananda Yuva Sashaktikaran Yojana.",
    source: "UP Government", importantFor: ["SSC CGL", "State PCS"]
  },
  {
    id: "REC-AUG-010", date: "2026-08-26", month: "Aug 2026", category: "Science & Defence",
    title: "Indigenous AK-203 'Sher' Assault Rifle Enters Service",
    summary: "Indo-Russian Rifles Private Limited readied the indigenous AK-203 assault rifle, designated 'Sher', for the Indian Army.",
    whatHappened: "The indigenous 7.62x39mm AK-203 assault rifle, officially designated 'Sher', completed production runs at the Korwa Ordnance Factory in Amethi, Uttar Pradesh, for induction into the Indian Army.",
    importantPoints: [
      "Named 'Sher' for the Indian military.",
      "Manufactured at Korwa, Amethi, UP, by IRRPL."
    ],
    examFacts: ["Designation: Sher", "Facility: Korwa, Amethi (UP)"],
    quickRemember: "India's indigenous AK-203 rifle built at Korwa, Amethi is named 'Sher'.",
    audioText: "The indigenous AK-203 rifle manufactured in Amethi has been named Sher for the Indian Army.",
    source: "Ministry of Defence", importantFor: ["CDS", "SSC CGL"]
  },
  {
    id: "REC-AUG-011", date: "2026-08-25", month: "Aug 2026", category: "Economy",
    title: "Unified Payments Interface (UPI) Marks 10-Year Milestone",
    summary: "NPCI's real-time payment network UPI completed 10 years of operations on 25 August 2026.",
    whatHappened: "The Unified Payments Interface (UPI), developed by the National Payments Corporation of India (NPCI), completed 10 years of operations on 25 August 2026, processing billions of transactions monthly.",
    importantPoints: [
      "Completed 10 years on 25 August 2026.",
      "Engineered by NPCI and regulated by the Reserve Bank of India."
    ],
    examFacts: ["Anniversary: 10 Years", "Entity: NPCI"],
    quickRemember: "UPI completed 10 years on 25 August 2026 under NPCI.",
    audioText: "Unified Payments Interface completed ten years of operations on 25 August 2026.",
    source: "NPCI", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-AUG-012", date: "2026-08-25", month: "Aug 2026", category: "International Affairs",
    title: "Ajit Doval Represents India at 25th India-China Border Talks",
    summary: "India and China conducted the 25th round of Special Representatives border negotiations in Beijing.",
    whatHappened: "National Security Adviser Ajit Doval met Chinese Foreign Minister Wang Yi in Beijing for the 25th round of Special Representatives (SR) talks, addressing peace and disengagement protocols.",
    importantPoints: [
      "25th round of Special Representatives border talks.",
      "India represented by NSA Ajit Doval."
    ],
    examFacts: ["Indian Representative: Ajit Doval", "Location: Beijing"],
    quickRemember: "NSA Ajit Doval led the Indian delegation at the 25th border talks in Beijing.",
    audioText: "National Security Adviser Ajit Doval represented India in the twenty-fifth round of border talks held in Beijing.",
    source: "MEA", importantFor: ["CDS", "UPSC", "SSC CGL"]
  },
  {
    id: "REC-AUG-013", date: "2026-08-24", month: "Aug 2026", category: "Important Days",
    title: "National Space Day Observed on 23 August",
    summary: "India observed National Space Day on 23 August to commemorate Chandrayaan-3's lunar landing.",
    whatHappened: "National Space Day was celebrated on 23 August across Indian science centers and schools to mark the historic soft landing of ISRO's Chandrayaan-3 lander 'Vikram' on the Moon's South Pole.",
    importantPoints: [
      "Celebrated annually on 23 August.",
      "Commemorates the soft landing of Chandrayaan-3."
    ],
    examFacts: ["Date: 23 August", "Commemorates: Chandrayaan-3 landing"],
    quickRemember: "National Space Day is celebrated on 23 August for Chandrayaan-3's Moon landing.",
    audioText: "India celebrated National Space Day on 23 August to mark Chandrayaan-3's soft landing on the Moon.",
    source: "ISRO", importantFor: ["SSC CGL", "SSC CHSL"]
  },
  {
    id: "REC-AUG-014", date: "2026-08-24", month: "Aug 2026", category: "Sports",
    title: "East Bengal Lifts 2026 Durand Cup Trophy",
    summary: "East Bengal defeated Mohun Bagan 4-1 at Salt Lake Stadium to win the 135th Durand Cup.",
    whatHappened: "East Bengal FC defeated fierce rival Mohun Bagan Super Giant 4-1 in the final of the 135th Durand Cup at Salt Lake Stadium in Kolkata, ending a 22-year title drought.",
    importantPoints: [
      "East Bengal won 4-1 against Mohun Bagan.",
      "Durand Cup is Asia's oldest football tournament."
    ],
    examFacts: ["Champion: East Bengal", "Tournament: Durand Cup (Est. 1888)"],
    quickRemember: "East Bengal won the 2026 Durand Cup by beating Mohun Bagan 4-1 in Kolkata.",
    audioText: "East Bengal defeated Mohun Bagan 4-1 to clinch the 2026 Durand Cup football title.",
    source: "Durand Football Society", importantFor: ["SSC CGL", "SSC CHSL"]
  },
  {
    id: "REC-AUG-015", date: "2026-08-22", month: "Aug 2026", category: "Sports",
    title: "Kajal Dhochak Wins Back-to-Back U20 World Wrestling Gold",
    summary: "Indian wrestler Kajal Dhochak retained her U20 World Wrestling Championship title in the 76 kg category.",
    whatHappened: "Kajal Dhochak created history in Slovakia by winning her second consecutive gold medal at the U20 World Wrestling Championship, shutting out China's Jingru Sun 7-0 in the women's 76 kg freestyle final.",
    importantPoints: [
      "Won gold in the women's 76 kg category.",
      "Defeated China's Jingru Sun 7-0."
    ],
    examFacts: ["Wrestler: Kajal Dhochak", "Weight Category: 76 kg"],
    quickRemember: "Kajal Dhochak won her second consecutive U20 World Wrestling Championship in the 76 kg category.",
    audioText: "Kajal Dhochak won her second consecutive U20 World Wrestling Championship gold in the 76 kilogram category.",
    source: "United World Wrestling", importantFor: ["SSC CGL", "CDS"]
  },
  {
    id: "REC-AUG-016", date: "2026-08-22", month: "Aug 2026", category: "Economy",
    title: "Government Permits Duty-Free Import of 10 LMT Raw Sugar",
    summary: "The Centre approved the duty-free import of 10 lakh tonnes of raw sugar to stabilize domestic retail supplies.",
    whatHappened: "The Department of Food and Public Distribution cleared the duty-free import of 10 lakh metric tonnes (LMT) of raw sugar by domestic refiners to boost buffer stocks and suppress price escalation.",
    importantPoints: [
      "Duty-free quota of 10 lakh metric tonnes approved.",
      "Aimed at curbing domestic price spikes ahead of festival demand."
    ],
    examFacts: ["Approved Quantity: 10 Lakh Tonnes (10 LMT)", "Duty Status: Duty-free"],
    quickRemember: "The government permitted duty-free import of 10 lakh tonnes of raw sugar to stabilize prices.",
    audioText: "The Indian government approved duty-free import of ten lakh metric tonnes of raw sugar to maintain price stability.",
    source: "Ministry of Consumer Affairs", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-AUG-017", date: "2026-08-21", month: "Aug 2026", category: "National Affairs",
    title: "Cabinet Approves Permanent High Court Bench in Leh",
    summary: "The Union Cabinet sanctioned a permanent High Court Bench in Leh for Jammu & Kashmir and Ladakh.",
    whatHappened: "The Union Cabinet approved a permanent Bench of the High Court of Jammu & Kashmir and Ladakh at Leh, establishing it as the third seat of the High Court alongside Srinagar and Jammu.",
    importantPoints: [
      "Permanent High Court Bench established at Leh.",
      "Forms the third official seat after Srinagar and Jammu."
    ],
    examFacts: ["Seat: Leh, Ladakh", "Court: High Court of J&K and Ladakh"],
    quickRemember: "A permanent High Court bench was approved in Leh as the third seat of J&K High Court.",
    audioText: "The Union Cabinet sanctioned the third seat of the Jammu & Kashmir and Ladakh High Court in Leh.",
    source: "Ministry of Law & Justice", importantFor: ["SSC CGL", "UPSC", "State PCS"]
  },
  {
    id: "REC-AUG-018", date: "2026-08-21", month: "Aug 2026", category: "International Affairs",
    title: "Mirza Fakhrul Islam Alamgir Elected Bangladesh President",
    summary: "BNP leader Mirza Fakhrul Islam Alamgir was elected the 23rd President of Bangladesh.",
    whatHappened: "Mirza Fakhrul Islam Alamgir, senior secretary-general of the Bangladesh Nationalist Party (BNP), was elected as the 23rd President of Bangladesh, securing 255 parliamentary votes.",
    importantPoints: [
      "Elected as the 23rd President of Bangladesh.",
      "Senior leader of the Bangladesh Nationalist Party (BNP)."
    ],
    examFacts: ["Elected President: Mirza Fakhrul Islam Alamgir", "Order: 23rd President"],
    quickRemember: "Mirza Fakhrul Islam Alamgir was elected the 23rd President of Bangladesh.",
    audioText: "BNP leader Mirza Fakhrul Islam Alamgir was elected the twenty-third President of Bangladesh.",
    source: "Foreign Media", importantFor: ["SSC CGL", "CDS"]
  },
  {
    id: "REC-AUG-019", date: "2026-08-20", month: "Aug 2026", category: "Science & Technology",
    title: "Indian Scientists Synthesize Smart Cancer Drug RK-251",
    summary: "IASST and IIT-Guwahati developed RK-251, a smart molecule targeting tumor cells while sparing healthy tissue.",
    whatHappened: "Scientists from the Institute of Advanced Study in Science and Technology (IASST) and IIT-Guwahati engineered 'RK-251', a targeted chemotherapeutic molecule designed to selectively destroy malignant tumors.",
    importantPoints: [
      "Drug compound designated RK-251.",
      "Developed collaboratively by IASST and IIT Guwahati."
    ],
    examFacts: ["Drug Name: RK-251", "Institutions: IASST and IIT-Guwahati"],
    quickRemember: "RK-251 is an indigenous smart cancer drug developed by IIT Guwahati and IASST.",
    audioText: "Indian researchers from IIT Guwahati and IASST synthesized a targeted cancer drug candidate named RK-251.",
    source: "DST", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-AUG-020", date: "2026-08-20", month: "Aug 2026", category: "Economy & Infrastructure",
    title: "Cabinet Approves 4-Laning of NH-22 Section Connecting Nepal",
    summary: "The Union Cabinet sanctioned four-laning NH-22 to enhance trade with Nepal.",
    whatHappened: "The Cabinet Committee on Economic Affairs approved the four-laning of the Muzaffarpur-Sitamarhi-Sonbarsa corridor on National Highway 22 (NH-22) in Bihar to boost transit with Nepal.",
    importantPoints: [
      "Corridor: Muzaffarpur-Sitamarhi-Sonbarsa on NH-22.",
      "Strengthens cross-border logistics between India and Nepal."
    ],
    examFacts: ["Highway: NH-22", "States/Neighbors: Bihar to Nepal border"],
    quickRemember: "Four-laning of NH-22 (Muzaffarpur to Sonbarsa) boosts cross-border trade with Nepal.",
    audioText: "The Cabinet approved four-laning of the NH-22 section connecting Bihar to the Nepal border.",
    source: "MoRTH", importantFor: ["SSC CGL", "UPSC"]
  }
];

const augRecallQuestionsBatch1 = [
  {
    id: "REC-Q-AUG-001", articleId: "REC-AUG-001", category: "Science & Technology",
    question: "NASA's Nancy Grace Roman Space Telescope, launched to study dark energy, dark matter, and exoplanets, is named after whom?",
    options: [
      "The first American woman to complete a spacewalk",
      "NASA's first chief astronomer, known as the 'Mother of Hubble'",
      "The chief flight controller of the Apollo 11 moon mission",
      "The discoverer of Jupiter's volcanic moon Io"
    ],
    answer: 1, explanation: "Nancy Grace Roman was NASA's first chief astronomer and is widely celebrated as the 'Mother of Hubble' for initiating the space telescope program."
  },
  {
    id: "REC-Q-AUG-002", articleId: "REC-AUG-002", category: "International Affairs",
    question: "The Shanghai Cooperation Organisation (SCO) Summit 2026, marking the 25th anniversary of the bloc, was hosted in which city?",
    options: ["Tashkent, Uzbekistan", "Astana, Kazakhstan", "Bishkek, Kyrgyzstan", "Dushanbe, Tajikistan"],
    answer: 2, explanation: "The 25th anniversary SCO Summit was held in Bishkek, Kyrgyzstan, from 31 August to 1 September 2026."
  },
  {
    id: "REC-Q-AUG-003", articleId: "REC-AUG-003", category: "Art & Culture",
    question: "World Sanskrit Day is observed across India annually on which traditional occasion?",
    options: ["Guru Purnima", "Shravana Purnima", "Kartik Purnima", "Buddha Purnima"],
    answer: 1, explanation: "World Sanskrit Day is observed every year on Shravana Purnima (the full moon day of Shravana) to celebrate India's classical language."
  },
  {
    id: "REC-Q-AUG-004", articleId: "REC-AUG-004", category: "Environment",
    question: "What was the primary trigger for the sudden flash floods in Nepal's Bhote Koshi and Trishuli rivers in August 2026?",
    options: ["A cloudburst over Kathmandu Valley", "Structural breach of a major hydroelectric reservoir", "A glacial ice and rock collapse that dammed the river before bursting", "Prolonged monsoon rainfall exceeding 500 mm in 12 hours"],
    answer: 2, explanation: "The flood was caused by a sudden glacial rock-ice avalanche that dammed the river flow upstream before bursting and releasing a flash torrent."
  },
  {
    id: "REC-Q-AUG-005", articleId: "REC-AUG-005", category: "Sports",
    question: "Who became the first Indian chess player to win the Grand Chess Tour title in August 2026?",
    options: ["D. Gukesh", "Arjun Erigaisi", "R. Praggnanandhaa", "Vidit Gujrathi"],
    answer: 2, explanation: "R. Praggnanandhaa made history as the first Indian to win the Grand Chess Tour, defeating Fabiano Caruana 15-13 in the final in St. Louis."
  },
  {
    id: "REC-Q-AUG-006", articleId: "REC-AUG-006", category: "Government Schemes",
    question: "Pradhan Mantri Jan Dhan Yojana (PMJDY), which completed 12 years in August 2026, was officially launched on which date?",
    options: ["15 August 2014", "28 August 2014", "25 September 2014", "2 October 2014"],
    answer: 1, explanation: "PM Jan Dhan Yojana was formally launched on 28 August 2014 as the national mission for comprehensive financial inclusion."
  },
  {
    id: "REC-Q-AUG-007", articleId: "REC-AUG-007", category: "Important Days",
    question: "National Sports Day is celebrated in India on 29 August to commemorate the birth anniversary of which legendary sportsperson?",
    options: ["K. D. Jadhav", "Major Dhyan Chand", "Milkha Singh", "Balbir Singh Sr."],
    answer: 1, explanation: "National Sports Day is observed annually on 29 August to honor the birth anniversary of hockey legend Major Dhyan Chand."
  },
  {
    id: "REC-Q-AUG-008", articleId: "REC-AUG-008", category: "Economy & Infrastructure",
    question: "Synaty Automotive received ICAT's first compliance certification for a 15-metre multi-axle sleeper bus under which standards?",
    options: ["AIS-052 and AIS-140", "AIS-119 and AIS-153", "AIS-023 and AIS-096", "AIS-037 and AIS-125"],
    answer: 1, explanation: "ICAT certified India's first 15-metre sleeper coach under AIS-119 (sleeper bus norms) and AIS-153 (safety construction requirements)."
  },
  {
    id: "REC-Q-AUG-009", articleId: "REC-AUG-009", category: "Government Schemes",
    question: "In August 2026, the Uttar Pradesh Cabinet approved the procurement of how many free tablets under the Swami Vivekananda Yuva Sashaktikaran Yojana?",
    options: ["10 Lakh", "15 Lakh", "25 Lakh", "50 Lakh"],
    answer: 2, explanation: "The Uttar Pradesh Cabinet cleared 25 lakh tablets for distribution among technical and graduate students under the empowerment scheme."
  },
  {
    id: "REC-Q-AUG-010", articleId: "REC-AUG-010", category: "Science & Defence",
    question: "What name has been given to the indigenous AK-203 assault rifle manufactured at Korwa, Amethi, for the Indian Army?",
    options: ["Vajra", "Sher", "Ghatak", "Trishul"],
    answer: 1, explanation: "The military-grade AK-203 rifle manufactured by Indo-Russian Rifles Private Limited in Korwa, Amethi, has been designated 'Sher'."
  },
  {
    id: "REC-Q-AUG-011", articleId: "REC-AUG-011", category: "Economy",
    question: "On 25 August 2026, the Unified Payments Interface (UPI) completed how many years of nationwide operation?",
    options: ["5 Years", "8 Years", "10 Years", "12 Years"],
    answer: 2, explanation: "UPI completed 10 years of operations on 25 August 2026 since its public launch by NPCI in 2016."
  },
  {
    id: "REC-Q-AUG-012", articleId: "REC-AUG-012", category: "International Affairs",
    question: "Who represented India at the 25th round of India-China Special Representatives border talks held in Beijing in August 2026?",
    options: ["S. Jaishankar", "Vikram Misri", "Ajit Doval", "Rajnath Singh"],
    answer: 2, explanation: "National Security Adviser Ajit Doval represented India in the 25th round of bilateral border negotiations with Chinese Foreign Minister Wang Yi."
  },
  {
    id: "REC-Q-AUG-013", articleId: "REC-AUG-013", category: "Important Days",
    question: "National Space Day is celebrated annually on 23 August to commemorate which historic scientific milestone?",
    options: ["The orbital insertion of Mars Orbiter Mission (Mangalyaan)", "The launch of India's first satellite Aryabhata in 1975", "The soft landing of Chandrayaan-3 on the lunar South Pole", "The flight test of the Pushpak Reusable Launch Vehicle"],
    answer: 2, explanation: "National Space Day commemorates India's historic Chandrayaan-3 landing on the Moon's South Pole on 23 August 2023."
  },
  {
    id: "REC-Q-AUG-014", articleId: "REC-AUG-014", category: "Sports",
    question: "Which club won the 135th Durand Cup in August 2026, defeating Mohun Bagan 4-1 in the final?",
    options: ["NorthEast United FC", "Bengaluru FC", "East Bengal FC", "FC Goa"],
    answer: 2, explanation: "East Bengal FC defeated Mohun Bagan 4-1 at Kolkata's Salt Lake Stadium to secure the 2026 Durand Cup."
  },
  {
    id: "REC-Q-AUG-015", articleId: "REC-AUG-015", category: "Sports",
    question: "Indian wrestler Kajal Dhochak won her second consecutive U20 World Wrestling Championship gold in which weight category?",
    options: ["53 kg", "62 kg", "68 kg", "76 kg"],
    answer: 3, explanation: "Kajal Dhochak won back-to-back world U20 titles in the women's 76 kg freestyle category, defeating China's Jingru Sun 7-0."
  },
  {
    id: "REC-Q-AUG-016", articleId: "REC-AUG-016", category: "Economy",
    question: "In August 2026, the central government approved the duty-free import of what volume of raw sugar to stabilize festive retail prices?",
    options: ["5 Lakh Tonnes", "10 Lakh Tonnes", "15 Lakh Tonnes", "25 Lakh Tonnes"],
    answer: 1, explanation: "The government cleared the duty-free import of 10 lakh tonnes (10 LMT) of raw sugar to prevent price inflation during the festive period."
  },
  {
    id: "REC-Q-AUG-017", articleId: "REC-AUG-017", category: "National Affairs",
    question: "The Union Cabinet sanctioned a new permanent Bench of the High Court of Jammu & Kashmir and Ladakh at which location in August 2026?",
    options: ["Kargil", "Leh", "Udhampur", "Anantnag"],
    answer: 1, explanation: "The Union Cabinet approved a permanent Bench at Leh, establishing it as the third seat of the High Court alongside Srinagar and Jammu."
  },
  {
    id: "REC-Q-AUG-018", articleId: "REC-AUG-018", category: "International Affairs",
    question: "Who was elected as the 23rd President of Bangladesh on 20 August 2026?",
    options: ["Tarique Rahman", "Oli Ahmad", "Mirza Fakhrul Islam Alamgir", "Salahuddin Ahmed"],
    answer: 2, explanation: "BNP senior leader Mirza Fakhrul Islam Alamgir was elected the 23rd President of Bangladesh, securing 255 votes in parliament."
  },
  {
    id: "REC-Q-AUG-019", articleId: "REC-AUG-019", category: "Science & Technology",
    question: "What is the designation of the smart chemotherapeutic drug synthesized by IIT-Guwahati and IASST to target tumor cells while sparing healthy tissue?",
    options: ["CBG-108", "RK-251", "NANO-500", "ONCO-44"],
    answer: 1, explanation: "The novel smart molecule developed by IASST and IIT Guwahati to target cancer cells selectively is named RK-251."
  },
  {
    id: "REC-Q-AUG-020", articleId: "REC-AUG-020", category: "Economy & Infrastructure",
    question: "The four-laning of the Muzaffarpur-Sitamarhi-Sonbarsa highway corridor on NH-22 will enhance cross-border connectivity with which country?",
    options: ["Bhutan", "Bangladesh", "Nepal", "Myanmar"],
    answer: 2, explanation: "The NH-22 expansion project connects north Bihar directly to the Sonbarsa border checkpoint into Nepal."
  }
];

// 👉 3. INJECT BATCH 1 DATA INTO THE GLOBAL ARRAYS
hiddenRecallArticles.push(...augRecallArticlesBatch1);
recallQuestionPool.push(...augRecallQuestionsBatch1);


/* ==========================================================================
   AUGUST 2026 - BATCH 2 (ITEMS 021 TO 040)
   ========================================================================== */

const augRecallArticlesBatch2 = [
  {
    id: "REC-AUG-021", date: "2026-08-01", month: "Aug 2026", category: "Defence",
    title: "Air Marshal Tejpal Singh Appointed Deputy Chief of Air Staff",
    summary: "Air Marshal Tejpal Singh assumed the appointment of Deputy Chief of the Air Staff (DCAS).",
    whatHappened: "Air Marshal Tejpal Singh assumed the appointment of Deputy Chief of the Air Staff (DCAS) on 1 August 2026. He succeeded Air Marshal Awadhesh Kumar Bharti after his retirement.",
    importantPoints: ["Assumed office on 1 August 2026.", "Succeeded Air Marshal Awadhesh Kumar Bharti."],
    examFacts: ["Appointee: Air Marshal Tejpal Singh", "Post: Deputy Chief of the Air Staff (DCAS)"],
    quickRemember: "Air Marshal Tejpal Singh appointed as the new Deputy Chief of the Air Staff.",
    audioText: "Air Marshal Tejpal Singh assumed the appointment of Deputy Chief of the Air Staff on 1 August 2026.",
    source: "Ministry of Defence", importantFor: ["CDS", "SSC CGL"]
  },
  {
    id: "REC-AUG-022", date: "2026-08-01", month: "Aug 2026", category: "Defence",
    title: "Vice Admiral AN Pramod Appointed Deputy Chief of Naval Staff",
    summary: "Vice Admiral AN Pramod assumed charge as the Deputy Chief of Naval Staff (DCNS).",
    whatHappened: "Vice Admiral AN Pramod assumed charge as the Deputy Chief of Naval Staff (DCNS) on 1 August 2026, succeeding Vice Admiral Tarun Sobti.",
    importantPoints: ["Assumed office on 1 August 2026.", "Succeeded Vice Admiral Tarun Sobti."],
    examFacts: ["Appointee: Vice Admiral AN Pramod", "Post: Deputy Chief of Naval Staff (DCNS)"],
    quickRemember: "Vice Admiral AN Pramod is the new Deputy Chief of Naval Staff.",
    audioText: "Vice Admiral AN Pramod assumed charge as the Deputy Chief of Naval Staff on 1 August 2026.",
    source: "Indian Navy", importantFor: ["CDS", "SSC CGL"]
  },
  {
    id: "REC-AUG-023", date: "2026-08-04", month: "Aug 2026", category: "Environment",
    title: "Glaw Lake Becomes Arunachal Pradesh's First Ramsar Site",
    summary: "Glaw Lake was designated as India's 101st Ramsar Site and the first in Arunachal Pradesh.",
    whatHappened: "Glaw Lake, located in the Kamlang Tiger Reserve & Wildlife Sanctuary, was designated as India's 101st Ramsar Site, making it the first such wetland of international importance in Arunachal Pradesh.",
    importantPoints: ["India's 101st Ramsar Site.", "Located in Kamlang Tiger Reserve, Arunachal Pradesh."],
    examFacts: ["Site: Glaw Lake", "State: Arunachal Pradesh", "Status: 101st Ramsar Site"],
    quickRemember: "Glaw Lake is India's 101st Ramsar site and Arunachal Pradesh's first.",
    audioText: "Glaw Lake in Arunachal Pradesh was designated as India's 101st Ramsar Site.",
    source: "MoEFCC", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-AUG-024", date: "2026-08-17", month: "Aug 2026", category: "Government Schemes",
    title: "Suryapath Tiranga 2026 Launched",
    summary: "Suryapath Tiranga, a global relay across 21 countries, was launched for Independence Day.",
    whatHappened: "Suryapath Tiranga was launched as a global Tiranga relay under the Har Ghar Tiranga 2026 celebrations. The national flag was hoisted successively at Indian Missions across different time zones, following the path of the rising sun.",
    importantPoints: ["Part of Har Ghar Tiranga 2026.", "Relay across 21 countries following the rising sun."],
    examFacts: ["Campaign: Suryapath Tiranga", "Event: 80th Independence Day"],
    quickRemember: "Suryapath Tiranga is a global flag relay covering 21 countries for Independence Day.",
    audioText: "The Suryapath Tiranga campaign was launched as a global flag relay across 21 countries to mark India's 80th Independence Day.",
    source: "Ministry of External Affairs", importantFor: ["SSC CGL", "SSC CHSL"]
  },
  {
    id: "REC-AUG-025", date: "2026-08-10", month: "Aug 2026", category: "Economy",
    title: "India Crosses 300 GW Non-Fossil Fuel Capacity",
    summary: "India achieved a major milestone by crossing 300 GW of non-fossil fuel-based electricity capacity.",
    whatHappened: "India crossed 300 GW of non-fossil fuel-based installed electricity generation capacity in August 2026. The country aims to achieve 500 GW of non-fossil fuel capacity by 2030 and net-zero emissions by 2070.",
    importantPoints: ["Crossed 300 GW milestone.", "Target: 500 GW by 2030."],
    examFacts: ["Milestone: 300 GW", "2030 Target: 500 GW", "Net-Zero Target: 2070"],
    quickRemember: "India crossed 300 GW of non-fossil fuel capacity, targeting 500 GW by 2030.",
    audioText: "India achieved a major renewable energy milestone by crossing 300 gigawatts of non-fossil fuel-based electricity capacity.",
    source: "Ministry of Power", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-AUG-026", date: "2026-08-07", month: "Aug 2026", category: "Government Schemes",
    title: "GOBARdhan National Circular Bioenergy Scheme Approved",
    summary: "The Union Cabinet approved the GOBARdhan scheme to increase Compressed Biogas (CBG) production.",
    whatHappened: "The Union Cabinet approved the GOBARdhan National Circular Bioenergy Scheme to boost India's Compressed Biogas (CBG) production by nearly ten times using agricultural residue, cattle dung, and municipal solid waste.",
    importantPoints: ["Aims to increase CBG production tenfold.", "Utilizes organic waste like cattle dung and agricultural residue."],
    examFacts: ["Scheme: GOBARdhan", "Target: Compressed Biogas (CBG) production"],
    quickRemember: "GOBARdhan scheme approved to increase Compressed Biogas production tenfold.",
    audioText: "The Union Cabinet approved the GOBARdhan scheme to dramatically increase India's Compressed Biogas production using organic waste.",
    source: "Union Cabinet", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-AUG-027", date: "2026-08-03", month: "Aug 2026", category: "Government Schemes",
    title: "Nasha Mukt Yuva Abhiyan Launched",
    summary: "PM Modi launched a 100-week campaign for a drug-free India.",
    whatHappened: "Prime Minister Narendra Modi launched the 'Nasha Mukt Yuva for Viksit Bharat Sankalp Abhiyan', a 100-week campaign aimed at building a drug-free India by encouraging youth to stay away from substance abuse.",
    importantPoints: ["100-week campaign duration.", "Aims to build a drug-free youth population."],
    examFacts: ["Campaign: Nasha Mukt Yuva", "Duration: 100 weeks"],
    quickRemember: "PM Modi launched the 100-week Nasha Mukt Yuva campaign for a drug-free India.",
    audioText: "A 100-week campaign named Nasha Mukt Yuva for Viksit Bharat was launched to promote a drug-free youth population.",
    source: "PMO", importantFor: ["SSC CGL", "SSC CHSL"]
  },
  {
    id: "REC-AUG-028", date: "2026-08-01", month: "Aug 2026", category: "Economy",
    title: "Samudra Manthan Offshore Exploration Scheme",
    summary: "The Cabinet approved 'Samudra Manthan' to accelerate offshore oil and gas exploration.",
    whatHappened: "The Union Cabinet approved the 'Samudra Manthan' National Offshore Exploration Scheme to accelerate offshore oil and gas exploration, increase domestic hydrocarbon production, and strengthen India's energy security.",
    importantPoints: ["Accelerates offshore oil and gas exploration.", "Aims to reduce import dependence."],
    examFacts: ["Scheme Name: Samudra Manthan", "Sector: Offshore Oil & Gas"],
    quickRemember: "Samudra Manthan scheme launched to boost offshore oil and gas exploration.",
    audioText: "The Samudra Manthan scheme was approved to accelerate offshore oil and gas exploration and strengthen energy security.",
    source: "Ministry of Petroleum", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-AUG-029", date: "2026-08-15", month: "Aug 2026", category: "Important Days",
    title: "80th Independence Day & 150 Years of Vande Mataram",
    summary: "India celebrated its 80th Independence Day, marking 150 years of Vande Mataram.",
    whatHappened: "India celebrated its 80th Independence Day at the Red Fort with 'Yuva Shakti' as the central focus. The event also historically marked 150 years of the national song, Vande Mataram.",
    importantPoints: ["80th Independence Day theme: Yuva Shakti.", "Marked 150 years of Vande Mataram."],
    examFacts: ["Edition: 80th Independence Day", "Theme: Yuva Shakti", "Milestone: 150 years of Vande Mataram"],
    quickRemember: "India's 80th Independence Day focused on Yuva Shakti and marked 150 years of Vande Mataram.",
    audioText: "India's 80th Independence Day celebrations at the Red Fort highlighted Yuva Shakti and marked 150 years of Vande Mataram.",
    source: "PIB", importantFor: ["SSC CGL", "State PCS"]
  },
  {
    id: "REC-AUG-030", date: "2026-08-14", month: "Aug 2026", category: "Important Days",
    title: "Partition Horrors Remembrance Day",
    summary: "Partition Horrors Remembrance Day was observed on August 14.",
    whatHappened: "Partition Horrors Remembrance Day is observed every year on 14 August to honour the millions who suffered displacement, violence, and loss during the 1947 Partition of India.",
    importantPoints: ["Observed annually on 14 August.", "Commemorates the suffering during the 1947 partition."],
    examFacts: ["Date: 14 August", "Observance: Partition Horrors Remembrance Day"],
    quickRemember: "Partition Horrors Remembrance Day is observed on 14 August.",
    audioText: "Partition Horrors Remembrance Day was observed on August 14 to honor those who suffered during the 1947 partition.",
    source: "Ministry of Culture", importantFor: ["SSC CGL", "SSC CHSL"]
  },
  {
    id: "REC-AUG-031", date: "2026-08-13", month: "Aug 2026", category: "International Affairs",
    title: "Mecca Joint Defence Pact Signed",
    summary: "Saudi Arabia, Türkiye, and Pakistan signed the Mecca Joint Defence Pact.",
    whatHappened: "Saudi Arabia, Türkiye, and Pakistan signed the Mecca Joint Defence Pact in Mecca. The pact establishes a collective-defence commitment under which an armed attack on one member will be treated as an attack on all three.",
    importantPoints: ["Signed by Saudi Arabia, Türkiye, and Pakistan.", "Establishes a collective-defence commitment."],
    examFacts: ["Pact: Mecca Joint Defence Pact", "Signatories: Saudi Arabia, Türkiye, Pakistan"],
    quickRemember: "Saudi Arabia, Türkiye, and Pakistan signed the Mecca Joint Defence Pact.",
    audioText: "Saudi Arabia, Türkiye, and Pakistan signed a collective-defence agreement known as the Mecca Joint Defence Pact.",
    source: "International News", importantFor: ["CDS", "UPSC"]
  },
  {
    id: "REC-AUG-032", date: "2026-08-05", month: "Aug 2026", category: "International Affairs",
    title: "India-Flagged Vessel Sinks in Red Sea",
    summary: "The MSV Faize Noore Oliya sank in the Red Sea after a targeted attack.",
    whatHappened: "The India-flagged cargo vessel MSV Faize Noore Oliya sank in the Red Sea off the coast of Yemen after being struck by an explosives-laden boat, highlighting ongoing regional security risks.",
    importantPoints: ["Vessel name: MSV Faize Noore Oliya.", "Sank off the coast of Yemen in the Red Sea."],
    examFacts: ["Vessel: MSV Faize Noore Oliya", "Location: Red Sea (Yemen coast)"],
    quickRemember: "Indian cargo vessel MSV Faize Noore Oliya sank in the Red Sea after an attack.",
    audioText: "The India-flagged cargo vessel MSV Faize Noore Oliya sank in the Red Sea off the coast of Yemen following an attack.",
    source: "Maritime Security Agencies", importantFor: ["CDS", "SSC CGL"]
  },
  {
    id: "REC-AUG-033", date: "2026-08-18", month: "Aug 2026", category: "Defence",
    title: "India-Thailand Exercise MAITREE-XV Begins",
    summary: "The 15th edition of the India-Thailand military exercise MAITREE began in Surat Thani.",
    whatHappened: "The 15th edition of the India-Thailand Joint Military Exercise MAITREE-XV commenced in Surat Thani, Thailand. It aims to enhance interoperability in counter-terrorism and jungle warfare.",
    importantPoints: ["15th edition of MAITREE exercise.", "Held in Surat Thani, Thailand."],
    examFacts: ["Exercise: MAITREE-XV", "Partner: Thailand", "Location: Surat Thani"],
    quickRemember: "India-Thailand military exercise MAITREE-XV was held in Surat Thani, Thailand.",
    audioText: "The 15th edition of the India-Thailand joint military exercise MAITREE commenced in Surat Thani, Thailand.",
    source: "Indian Army", importantFor: ["CDS", "SSC CGL"]
  },
  {
    id: "REC-AUG-034", date: "2026-08-15", month: "Aug 2026", category: "National Affairs",
    title: "India Post's First Drone Delivery of Tiranga",
    summary: "India Post used a drone to deliver the National Flag in Himachal Pradesh.",
    whatHappened: "India Post created history on 14 August 2026 by making its first-ever drone delivery of the National Flag (Tiranga). The drone flew from Mandi Head Post Office to Rehardhar Branch Post Office in Himachal Pradesh.",
    importantPoints: ["First drone delivery of Tiranga by India Post.", "Route: Mandi to Rehardhar in Himachal Pradesh."],
    examFacts: ["Agency: India Post", "State: Himachal Pradesh"],
    quickRemember: "India Post made its first drone delivery of the Tiranga in Himachal Pradesh.",
    audioText: "India Post completed its first-ever drone delivery of the National Flag from Mandi to Rehardhar in Himachal Pradesh.",
    source: "India Post", importantFor: ["SSC CGL", "SSC CHSL"]
  },
  {
    id: "REC-AUG-035", date: "2026-08-10", month: "Aug 2026", category: "Defence",
    title: "India-US EOD Exercise 2026 in Kochi",
    summary: "The 8th India-US Explosive Ordnance Disposal Exercise was held in Kochi.",
    whatHappened: "The Indian Navy and US Navy commenced the 8th edition of the Explosive Ordnance Disposal (EOD) Exercise 2026 at the Southern Naval Command in Kochi, focusing on bomb disposal and counter-IED tactics.",
    importantPoints: ["8th edition of the EOD exercise.", "Held at Southern Naval Command, Kochi."],
    examFacts: ["Exercise: EOD 2026", "Partners: India and US Navies", "Location: Kochi"],
    quickRemember: "The 8th India-US Explosive Ordnance Disposal Exercise took place in Kochi.",
    audioText: "The 8th edition of the India-US Explosive Ordnance Disposal Exercise was conducted at the Southern Naval Command in Kochi.",
    source: "Indian Navy", importantFor: ["CDS", "SSC CGL"]
  },
  {
    id: "REC-AUG-036", date: "2026-08-18", month: "Aug 2026", category: "Science & Technology",
    title: "India's First 14D Virtual Zoo Inaugurated",
    summary: "India's first 14D Virtual Zoo was inaugurated in Indore, Madhya Pradesh.",
    whatHappened: "India's first 14D Virtual Zoo was inaugurated at the Kamla Nehru Prani Sangrahalaya in Indore, Madhya Pradesh. It offers highly immersive wildlife simulations for educational purposes.",
    importantPoints: ["First 14D Virtual Zoo in India.", "Located in Indore, Madhya Pradesh."],
    examFacts: ["Location: Indore, MP", "Facility: 14D Virtual Zoo"],
    quickRemember: "India's first 14D Virtual Zoo was opened in Indore, MP.",
    audioText: "India's first 14D Virtual Zoo was inaugurated at the Kamla Nehru zoo in Indore, Madhya Pradesh.",
    source: "State News", importantFor: ["SSC CGL", "SSC CHSL"]
  },
  {
    id: "REC-AUG-037", date: "2026-08-12", month: "Aug 2026", category: "Science & Technology",
    title: "NASA Invites ISRO to Moon Base Programme",
    summary: "NASA invited ISRO to join its Moon Base programme for a permanent lunar outpost.",
    whatHappened: "During the India-U.S. Civil Space Joint Working Group meeting in Bengaluru, NASA officially invited ISRO to participate in its Moon Base programme aimed at establishing a permanent human outpost near the lunar South Pole.",
    importantPoints: ["NASA invites ISRO to Moon Base programme.", "Aims to build a permanent outpost near the lunar South Pole."],
    examFacts: ["Partner Agency: NASA", "Goal: Permanent lunar South Pole outpost"],
    quickRemember: "NASA invited ISRO to join its programme to build a permanent Moon Base.",
    audioText: "NASA officially invited ISRO to partner in its Moon Base programme to establish a permanent human outpost on the Moon.",
    source: "ISRO / NASA", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-AUG-038", date: "2026-08-07", month: "Aug 2026", category: "Defence",
    title: "Agni-4 Ballistic Missile Successfully Tested",
    summary: "India successfully test-fired the Agni-4 ballistic missile from Chandipur, Odisha.",
    whatHappened: "India successfully test-fired the Agni-4 Medium-Range Ballistic Missile (MRBM) from the Integrated Test Range in Chandipur, Odisha. The missile has a strike range of up to 4,000 km.",
    importantPoints: ["Agni-4 is a Medium-Range Ballistic Missile.", "Strike range of up to 4,000 km."],
    examFacts: ["Missile: Agni-4", "Range: 4,000 km", "Test site: Chandipur, Odisha"],
    quickRemember: "India test-fired the 4,000-km range Agni-4 ballistic missile from Chandipur.",
    audioText: "India successfully test-fired the Agni-4 medium-range ballistic missile, capable of striking targets up to 4,000 kilometers away.",
    source: "DRDO", importantFor: ["CDS", "UPSC"]
  },
  {
    id: "REC-AUG-039", date: "2026-08-06", month: "Aug 2026", category: "Science & Technology",
    title: "Gaganyaan First Uncrewed Flight in Q4 2026",
    summary: "ISRO targeted the fourth quarter of 2026 for the first uncrewed Gaganyaan mission.",
    whatHappened: "ISRO announced that the first uncrewed experimental flight of the Gaganyaan human spaceflight programme is targeted for the fourth quarter of 2026, paving the way for the crewed mission in 2027.",
    importantPoints: ["First uncrewed flight targeted for Q4 2026.", "Crewed mission planned for 2027."],
    examFacts: ["Mission: Gaganyaan", "First Uncrewed Flight: Q4 2026"],
    quickRemember: "Gaganyaan's first uncrewed experimental flight is scheduled for Q4 2026.",
    audioText: "ISRO confirmed that the first uncrewed flight of the Gaganyaan mission will launch in the fourth quarter of 2026.",
    source: "ISRO", importantFor: ["SSC CGL", "CDS"]
  },
  {
    id: "REC-AUG-040", date: "2026-08-04", month: "Aug 2026", category: "Sports",
    title: "Harshita Jakhar Competes in Tour de France Femmes",
    summary: "Harshita Jakhar became the first Indian woman to participate in the Tour de France Femmes.",
    whatHappened: "Nineteen-year-old cyclist Harshita Jakhar from Rajasthan became the first Indian woman to participate in the prestigious Tour de France Femmes, starting her journey in Stage 2 in Switzerland.",
    importantPoints: ["First Indian woman in Tour de France Femmes.", "Hails from Rajasthan."],
    examFacts: ["Athlete: Harshita Jakhar", "Sport: Cycling (Tour de France Femmes)"],
    quickRemember: "Harshita Jakhar is the first Indian woman to race in the Tour de France Femmes.",
    audioText: "Cyclist Harshita Jakhar made history by becoming the first Indian woman to participate in the Tour de France Femmes.",
    source: "Sports News", importantFor: ["SSC CGL", "SSC CHSL"]
  }
];

const augRecallQuestionsBatch2 = [
  {
    id: "REC-Q-AUG-021",
    articleId: "REC-AUG-021",
    category: "Defence",
    topic: "Appointments",
    question: "Who assumed the appointment of Deputy Chief of the Air Staff (DCAS) on 1 August 2026?",
    options: ["Air Marshal Sandeep Singh", "Air Marshal Tejpal Singh", "Air Marshal Amar Preet Singh", "Air Marshal Vivek Ram Chaudhari"],
    answer: 1,
    explanation: "Air Marshal Tejpal Singh took over as the Deputy Chief of the Air Staff, succeeding Air Marshal Awadhesh Kumar Bharti."
  },
  {
    id: "REC-Q-AUG-022",
    articleId: "REC-AUG-022",
    category: "Defence",
    topic: "Appointments",
    question: "Who assumed charge as the Deputy Chief of Naval Staff (DCNS) on 1 August 2026?",
    options: ["Vice Admiral Tarun Sobti", "Vice Admiral R. Hari Kumar", "Vice Admiral AN Pramod", "Vice Admiral Sanjay Mahindru"],
    answer: 2,
    explanation: "Vice Admiral AN Pramod assumed charge as the Deputy Chief of Naval Staff on 1 August 2026."
  },
  {
    id: "REC-Q-AUG-023",
    articleId: "REC-AUG-023",
    category: "Environment",
    topic: "Ramsar Sites",
    question: "In August 2026, Glaw Lake was added to the Ramsar List. It became the first Ramsar Site of which Indian state?",
    options: ["Assam", "Manipur", "Arunachal Pradesh", "Meghalaya"],
    answer: 2,
    explanation: "Glaw Lake, located in the Kamlang Tiger Reserve, became the first Ramsar Site in Arunachal Pradesh and India's 101st overall."
  },
  {
    id: "REC-Q-AUG-024",
    articleId: "REC-AUG-024",
    category: "Government Schemes",
    topic: "National Campaigns",
    question: "What is the name of the global Tiranga relay launched across 21 countries for India's 80th Independence Day?",
    options: ["Vande Bharatam", "Suryapath Tiranga", "Amrit Mahotsav Relay", "Tiranga Yatra"],
    answer: 1,
    explanation: "Suryapath Tiranga is a global relay launched across 21 countries following the path of the rising sun to mark Independence Day."
  },
  {
    id: "REC-Q-AUG-025",
    articleId: "REC-AUG-025",
    category: "Economy",
    topic: "Energy Targets",
    question: "In August 2026, India crossed which major milestone in non-fossil fuel-based installed electricity generation capacity?",
    options: ["100 GW", "200 GW", "300 GW", "400 GW"],
    answer: 2,
    explanation: "India achieved a major milestone by crossing 300 GW of non-fossil fuel-based capacity, aiming for 500 GW by 2030."
  },
  {
    id: "REC-Q-AUG-026",
    articleId: "REC-AUG-026",
    category: "Government Schemes",
    topic: "Bioenergy",
    question: "The GOBARdhan National Circular Bioenergy Scheme approved by the Cabinet aims to increase the domestic production of:",
    options: ["Liquid Hydrogen", "Compressed Biogas (CBG)", "Ethanol Blended Petrol", "Geothermal Energy"],
    answer: 1,
    explanation: "The scheme aims to increase the domestic production of Compressed Biogas (CBG) nearly tenfold using organic waste."
  },
  {
    id: "REC-Q-AUG-027",
    articleId: "REC-AUG-027",
    category: "Government Schemes",
    topic: "Youth Welfare",
    question: "The 'Nasha Mukt Yuva for Viksit Bharat Sankalp Abhiyan', launched in August 2026 for a drug-free India, has a campaign duration of:",
    options: ["50 weeks", "75 weeks", "100 weeks", "150 weeks"],
    answer: 2,
    explanation: "The campaign was launched by PM Modi with a planned duration of 100 weeks to combat substance abuse among youth."
  },
  {
    id: "REC-Q-AUG-028",
    articleId: "REC-AUG-028",
    category: "Economy",
    topic: "Energy Security",
    question: "What is the primary objective of the 'Samudra Manthan' scheme approved by the Union Cabinet?",
    options: ["Deep sea mineral mining", "Offshore oil and gas exploration", "Naval submarine development", "Marine plastic cleanup"],
    answer: 1,
    explanation: "The Samudra Manthan scheme aims to accelerate offshore oil and gas exploration to increase domestic hydrocarbon production."
  },
  {
    id: "REC-Q-AUG-029",
    articleId: "REC-AUG-029",
    category: "Important Days",
    topic: "National Events",
    question: "India's 80th Independence Day celebrations in 2026 also historically marked 150 years of which national composition?",
    options: ["Jana Gana Mana", "Sare Jahan Se Achha", "Vande Mataram", "Maa Tujhe Salaam"],
    answer: 2,
    explanation: "The 80th Independence Day celebrations officially marked 150 years of the national song, Vande Mataram."
  },
  {
    id: "REC-Q-AUG-030",
    articleId: "REC-AUG-030",
    category: "Important Days",
    topic: "National Observances",
    question: "Partition Horrors Remembrance Day is observed every year on which date?",
    options: ["12 August", "14 August", "15 August", "16 August"],
    answer: 1,
    explanation: "Partition Horrors Remembrance Day is observed annually on 14 August to honour those who suffered during the 1947 partition."
  },
  {
    id: "REC-Q-AUG-031",
    articleId: "REC-AUG-031",
    category: "International Affairs",
    topic: "Defence Agreements",
    question: "Which three countries signed the Mecca Joint Defence Pact in August 2026 establishing a collective-defence commitment?",
    options: ["Saudi Arabia, UAE, and Egypt", "Iran, Syria, and Iraq", "Saudi Arabia, Türkiye, and Pakistan", "Türkiye, Qatar, and Pakistan"],
    answer: 2,
    explanation: "Saudi Arabia, Türkiye, and Pakistan signed the pact, agreeing that an attack on one is an attack on all three."
  },
  {
    id: "REC-Q-AUG-032",
    articleId: "REC-AUG-032",
    category: "International Affairs",
    topic: "Maritime Security",
    question: "The India-flagged cargo vessel MSV Faize Noore Oliya sank after being attacked off the coast of Yemen in which water body?",
    options: ["Persian Gulf", "Gulf of Oman", "Red Sea", "Mediterranean Sea"],
    answer: 2,
    explanation: "The MSV Faize Noore Oliya sank in the Red Sea off the coast of Yemen after being struck by an explosives-laden boat."
  },
  {
    id: "REC-Q-AUG-033",
    articleId: "REC-AUG-033",
    category: "Defence",
    topic: "Military Exercises",
    question: "Where is the 15th edition of the India-Thailand Joint Military Exercise MAITREE-XV being conducted?",
    options: ["Pune, India", "Surat Thani, Thailand", "Umroi, India", "Bangkok, Thailand"],
    answer: 1,
    explanation: "The 15th edition of Exercise MAITREE commenced in Surat Thani, Thailand."
  },
  {
    id: "REC-Q-AUG-034",
    articleId: "REC-AUG-034",
    category: "National Affairs",
    topic: "Logistics",
    question: "India Post made its first-ever drone delivery of the National Flag (Tiranga) between Mandi and Rehardhar in which state?",
    options: ["Uttarakhand", "Himachal Pradesh", "Jammu & Kashmir", "Sikkim"],
    answer: 1,
    explanation: "India Post used a drone to deliver the Tiranga from Mandi to Rehardhar in Himachal Pradesh."
  },
  {
    id: "REC-Q-AUG-035",
    articleId: "REC-AUG-035",
    category: "Defence",
    topic: "Naval Exercises",
    question: "The 8th edition of the India-US Explosive Ordnance Disposal (EOD) Exercise 2026 was hosted at which location?",
    options: ["Visakhapatnam", "Mumbai", "Kochi", "Chennai"],
    answer: 2,
    explanation: "The India-US EOD Exercise was conducted at the Southern Naval Command in Kochi."
  },
  {
    id: "REC-Q-AUG-036",
    articleId: "REC-AUG-036",
    category: "Science & Technology",
    topic: "Innovations",
    question: "Where was India's first 14D Virtual Zoo inaugurated in August 2026?",
    options: ["Bengaluru", "Indore", "Hyderabad", "Jaipur"],
    answer: 1,
    explanation: "India's first 14D Virtual Zoo was inaugurated at the Kamla Nehru Prani Sangrahalaya in Indore, Madhya Pradesh."
  },
  {
    id: "REC-Q-AUG-037",
    articleId: "REC-AUG-037",
    category: "Science & Technology",
    topic: "Space Exploration",
    question: "Which international space agency officially invited ISRO to participate in its Moon Base programme for a permanent lunar outpost?",
    options: ["ESA", "Roscosmos", "JAXA", "NASA"],
    answer: 3,
    explanation: "NASA officially invited ISRO to join its Moon Base programme aimed at establishing a permanent human outpost near the lunar South Pole."
  },
  {
    id: "REC-Q-AUG-038",
    articleId: "REC-AUG-038",
    category: "Defence",
    topic: "Missile Tests",
    question: "In August 2026, India successfully test-fired the Agni-4 ballistic missile. What is its approximate strike range?",
    options: ["2,000 km", "3,000 km", "4,000 km", "5,000 km"],
    answer: 2,
    explanation: "The Agni-4 is a Medium-Range Ballistic Missile (MRBM) with a strike range of up to 4,000 km."
  },
  {
    id: "REC-Q-AUG-039",
    articleId: "REC-AUG-039",
    category: "Science & Technology",
    topic: "Space Missions",
    question: "ISRO announced that the first uncrewed experimental flight of the Gaganyaan mission is targeted for which timeline?",
    options: ["Q1 2027", "Q4 2026", "Q2 2026", "Q3 2027"],
    answer: 1,
    explanation: "ISRO has targeted the fourth quarter (Q4) of 2026 for the first uncrewed Gaganyaan flight."
  },
  {
    id: "REC-Q-AUG-040",
    articleId: "REC-AUG-040",
    category: "Sports",
    topic: "Cycling",
    question: "Who made history as the first Indian woman to participate in the prestigious Tour de France Femmes?",
    options: ["Deborah Herold", "Rutuja Satpute", "Harshita Jakhar", "Swasti Singh"],
    answer: 2,
    explanation: "19-year-old cyclist Harshita Jakhar from Rajasthan became the first Indian woman to compete in the Tour de France Femmes."
  }
];

// 👉 PUSH BATCH 2 DATA INTO GLOBAL ARRAYS
if (typeof hiddenRecallArticles !== 'undefined') {
  hiddenRecallArticles.push(...augRecallArticlesBatch2);
}
if (typeof recallQuestionPool !== 'undefined') {
  recallQuestionPool.push(...augRecallQuestionsBatch2);
}

/* ==========================================================================
   END OF AUGUST BATCH 2
   ========================================================================== */


/* ==========================================================================
   AUGUST 2026 - BATCH 3 (ITEMS 041 TO 060)
   ========================================================================== */

const augRecallArticlesBatch3 = [
  {
    id: "REC-AUG-041",
    date: "2026-08-05",
    month: "Aug 2026",
    category: "Polity & Governance",
    title: "Delayed Birth/Death Registration Rules Tightened",
    summary: "Parliament passed the Registration of Births and Deaths (Amendment) Bill, 2026, requiring judicial orders for registrations delayed over two years.",
    whatHappened: "The Registration of Births and Deaths (Amendment) Bill, 2026 was passed on 4 August 2026. Under the amended provisions, registering a birth or death reported more than two years after occurrence strictly requires an order from a Judicial Magistrate of the First Class (JMFC).",
    importantPoints: [
      "Amends the Registration of Births and Deaths Act, 1969.",
      "Delays exceeding two years require an order from a Judicial Magistrate of the First Class.",
      "Aims to curb fraudulent documentation and improve civil registry integrity."
    ],
    examFacts: ["Authority for >2 yr delay: Judicial Magistrate of the First Class", "Amended Act: Registration of Births and Deaths Act, 1969"],
    quickRemember: "Birth or death registration delayed over 2 years requires an order from a Judicial Magistrate of the First Class.",
    audioText: "Under the new Registration of Births and Deaths Amendment Bill, any registration delayed by more than two years requires an order from a Judicial Magistrate of the First Class.",
    source: "Ministry of Home Affairs",
    importantFor: ["SSC CGL", "UPSC", "State PCS"]
  },
  {
    id: "REC-AUG-042",
    date: "2026-08-06",
    month: "Aug 2026",
    category: "Polity & Governance",
    title: "Supreme Court Judge Strength Raised to 37",
    summary: "Parliament cleared legislation raising the sanctioned judge strength of the Supreme Court to 37, excluding the Chief Justice of India.",
    whatHappened: "Parliament passed the Supreme Court (Number of Judges) Amendment Bill, 2026 on 5 August 2026, expanding the sanctioned strength of judges from 33 to 37 (excluding the Chief Justice of India), taking the total maximum strength to 38.",
    importantPoints: [
      "Sanctioned strength increased from 33 to 37 (excluding the CJI).",
      "Total bench capacity becomes 38 including the Chief Justice of India.",
      "Enacted under Article 124(1) to tackle pending constitutional and appellate cases."
    ],
    examFacts: ["Sanctioned Judges (excluding CJI): 37", "Total Strength with CJI: 38", "Constitutional Article: Article 124(1)"],
    quickRemember: "Sanctioned Supreme Court judge strength increased from 33 to 37 (excluding the CJI).",
    audioText: "Parliament passed legislation expanding the sanctioned strength of the Supreme Court to thirty-seven judges, excluding the Chief Justice of India.",
    source: "Ministry of Law and Justice",
    importantFor: ["SSC CGL", "UPSC", "CDS"]
  },
  {
    id: "REC-AUG-043",
    date: "2026-08-13",
    month: "Aug 2026",
    category: "Environment",
    title: "World Elephant Day Observed on 12 August",
    summary: "World Elephant Day 2026 was observed globally with the theme 'Bringing the world together to help elephants'.",
    whatHappened: "World Elephant Day was observed across India on 12 August 2026 to raise awareness of elephant conservation, mitigate human-elephant conflict, and safeguard ecological corridors under Project Elephant.",
    importantPoints: [
      "Celebrated internationally every year on 12 August.",
      "2026 global theme: 'Bringing the world together to help elephants'.",
      "India harbors over 60% of the world's wild Asian elephant population."
    ],
    examFacts: ["Date: 12 August", "2026 Theme: Bringing the world together to help elephants", "National Initiative: Project Elephant (1992)"],
    quickRemember: "World Elephant Day is observed on 12 August; 2026 theme is 'Bringing the world together to help elephants'.",
    audioText: "World Elephant Day was celebrated on 12 August with the theme 'Bringing the world together to help elephants'.",
    source: "MoEFCC",
    importantFor: ["SSC CGL", "SSC CHSL"]
  },
  {
    id: "REC-AUG-044",
    date: "2026-08-12",
    month: "Aug 2026",
    category: "Polity & Governance",
    title: "Lok Sabha Clears Kerala (Alteration of Name) Bill",
    summary: "The Lok Sabha passed legislation to officially alter the constitutional name of Kerala to 'Keralam'.",
    whatHappened: "The Lok Sabha passed the Kerala (Alteration of Name) Bill, 2026 on 11 August 2026 under Article 3 of the Constitution to amend the First Schedule, aligning the state's official English identity with its native Malayalam nomenclature.",
    importantPoints: [
      "Passed under Article 3 of the Constitution of India.",
      "Officially renames the state from 'Kerala' to 'Keralam'.",
      "Amends the First Schedule of the Constitution."
    ],
    examFacts: ["New Constitutional Name: Keralam", "Constitutional Provision: Article 3", "Target: First Schedule"],
    quickRemember: "The Kerala (Alteration of Name) Bill, 2026 officially changes Kerala's name to Keralam under Article 3.",
    audioText: "The Lok Sabha passed the Kerala Alteration of Name Bill to officially rename the state as Keralam.",
    source: "Lok Sabha Secretariat",
    importantFor: ["SSC CGL", "UPSC", "CDS"]
  },
  {
    id: "REC-AUG-045",
    date: "2026-08-11",
    month: "Aug 2026",
    category: "Environment",
    title: "World Lion Day Highlights Asiatic Lion Population of 891",
    summary: "World Lion Day was observed on 10 August, highlighting the expansion of Asiatic lions to 891 individuals in Gir.",
    whatHappened: "India observed World Lion Day on 10 August 2026, highlighting wildlife conservation milestones that saw the endemic Asiatic lion (Panthera leo persica) population increase from 523 in 2015 to 891 in the 2025 census across Gujarat's Saurashtra region.",
    importantPoints: [
      "World Lion Day is observed every year on 10 August.",
      "Asiatic lion census documented 891 individuals across the Gir landscape.",
      "Gir National Park and Wildlife Sanctuary remains the only wild habitat for Asiatic lions."
    ],
    examFacts: ["Date: 10 August", "Asiatic Lion Count: 891", "Habitat: Gir Landscape, Gujarat"],
    quickRemember: "World Lion Day is 10 August; India's Asiatic lion population stands at 891 in the Gir landscape.",
    audioText: "On World Lion Day, 10 August, India highlighted that its Asiatic lion population reached 891 individuals.",
    source: "Gujarat Forest Department",
    importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-AUG-046",
    date: "2026-08-08",
    month: "Aug 2026",
    category: "Important Days",
    title: "National Handloom Day Commemorates 1905 Swadeshi Movement",
    summary: "India observed the 12th National Handloom Day on 7 August to support indigenous weavers.",
    whatHappened: "National Handloom Day was observed across India on 7 August 2026. The date commemorates the formal launch of the historic Swadeshi Movement in 1905 at the Calcutta Town Hall to boycott foreign goods and support domestic khadi and weavers.",
    importantPoints: [
      "Observed annually on 7 August.",
      "Marks the anniversary of the 1905 Swadeshi Movement.",
      "First celebrated nationally in 2015 in Chennai."
    ],
    examFacts: ["Date: 7 August", "Historical Event: 1905 Swadeshi Movement", "Inaugural Year: 2015"],
    quickRemember: "National Handloom Day on 7 August commemorates the 1905 Swadeshi Movement.",
    audioText: "National Handloom Day was observed on 7 August, commemorating the launch of the Swadeshi Movement in 1905.",
    source: "Ministry of Textiles",
    importantFor: ["SSC CGL", "SSC CHSL"]
  },
  {
    id: "REC-AUG-047",
    date: "2026-08-08",
    month: "Aug 2026",
    category: "Sports",
    title: "Praggnanandhaa Clinches St. Louis Rapid & Blitz 2026",
    summary: "R. Praggnanandhaa won the St. Louis Rapid & Blitz title at the Saint Louis Chess Club.",
    whatHappened: "Indian Grandmaster R. Praggnanandhaa clinched his maiden St. Louis Rapid & Blitz title in Missouri, USA, competing from 31 July to 7 August 2026 and scoring dominant wins against elite international grandmasters.",
    importantPoints: [
      "Won the 2026 St. Louis Rapid & Blitz tournament.",
      "Held at the Saint Louis Chess Club in Missouri, USA.",
      "Contributed to his historic overall Grand Chess Tour season victory."
    ],
    examFacts: ["Winner: R. Praggnanandhaa", "Tournament: St. Louis Rapid & Blitz 2026", "Discipline: Chess"],
    quickRemember: "R. Praggnanandhaa won the St. Louis Rapid & Blitz 2026 title in Missouri, USA.",
    audioText: "Grandmaster R. Praggnanandhaa captured the St. Louis Rapid and Blitz chess title in the United States.",
    source: "Grand Chess Tour",
    importantFor: ["SSC CGL", "SSC CHSL"]
  },
  {
    id: "REC-AUG-048",
    date: "2026-08-19",
    month: "Aug 2026",
    category: "Sports",
    title: "Rishabh Pant Hits 100 Sixes in Test Cricket",
    summary: "Rishabh Pant became the first Indian cricketer to hit 100 sixes in Test match history.",
    whatHappened: "Wicketkeeper-batter Rishabh Pant became the first Indian and only the fourth player in cricket history to smash 100 sixes in Test matches, reaching the milestone on Day 4 of the opening Test against Sri Lanka.",
    importantPoints: [
      "First Indian cricketer to reach 100 Test sixes.",
      "Fourth player in global cricket history to achieve the feat.",
      "Accomplished against Sri Lanka in August 2026."
    ],
    examFacts: ["Milestone: 100 Test Sixes", "Player: Rishabh Pant", "First Indian to hit 100 Test sixes"],
    quickRemember: "Rishabh Pant is the first Indian and fourth player globally to hit 100 sixes in Test cricket.",
    audioText: "Rishabh Pant became the first Indian cricketer to hit one hundred sixes in Test cricket history.",
    source: "BCCI",
    importantFor: ["SSC CGL", "SSC CHSL"]
  },
  {
    id: "REC-AUG-049",
    date: "2026-08-19",
    month: "Aug 2026",
    category: "Awards & Honours",
    title: "I Arumainayagam Conferred Arjuna Award (Lifetime) for Football",
    summary: "Former international footballer I Arumainayagam received the Arjuna Award (Lifetime) 2025.",
    whatHappened: "The Ministry of Youth Affairs and Sports announced the National Sports Awards 2025, conferring the prestigious Arjuna Award (Lifetime) on veteran Indian international footballer I Arumainayagam for his contributions to the sport.",
    importantPoints: [
      "Conferred the Arjuna Award (Lifetime) for Football.",
      "Recognized by the Ministry of Youth Affairs and Sports in the National Sports Awards 2025.",
      "Honors his historic role in Indian international football tournaments."
    ],
    examFacts: ["Awardee: I Arumainayagam", "Category: Arjuna Award (Lifetime)", "Sport: Football"],
    quickRemember: "I Arumainayagam was selected for the Arjuna Award (Lifetime) 2025 for Football.",
    audioText: "Veteran footballer I Arumainayagam was honored with the Arjuna Award Lifetime for his contributions to Indian football.",
    source: "Ministry of Youth Affairs & Sports",
    importantFor: ["SSC CGL", "SSC CHSL"]
  },
  {
    id: "REC-AUG-050",
    date: "2026-08-17",
    month: "Aug 2026",
    category: "Sports",
    title: "Magnus Carlsen Retains Esports World Cup Chess 2026",
    summary: "Magnus Carlsen won back-to-back titles at the Esports World Cup Chess tournament in Paris.",
    whatHappened: "Former World Champion Magnus Carlsen successfully defended his Esports World Cup (EWC) Chess crown in Paris, defeating Denis Lazavik 2-0 in the grand final to become the first player to win the esports chess title twice consecutively.",
    importantPoints: [
      "Defended his Esports World Cup Chess title.",
      "Defeated Denis Lazavik 2-0 in the Paris final.",
      "First player to win the EWC Chess tournament twice consecutively."
    ],
    examFacts: ["Champion: Magnus Carlsen", "Runner-up: Denis Lazavik", "Venue: Paris, France"],
    quickRemember: "Magnus Carlsen won the Esports World Cup Chess 2026 in Paris, beating Denis Lazavik 2-0.",
    audioText: "Magnus Carlsen defended his Esports World Cup Chess title in Paris by defeating Denis Lazavik.",
    source: "EWC Media",
    importantFor: ["SSC CGL"]
  },
  {
    id: "REC-AUG-051",
    date: "2026-08-13",
    month: "Aug 2026",
    category: "Books & Authors",
    title: "Ram Nath Kovind's Autobiography Released",
    summary: "PM Narendra Modi released former President Ram Nath Kovind's autobiography 'Triumph of the Indian Republic'.",
    whatHappened: "Prime Minister Narendra Modi released the autobiography of former President of India Ram Nath Kovind, titled 'Triumph of the Indian Republic: My Life, My Struggles', at Vigyan Bhavan, New Delhi, chronicling his legal, social, and presidential career.",
    importantPoints: [
      "Autobiography of former President Ram Nath Kovind.",
      "Titled: 'Triumph of the Indian Republic: My Life, My Struggles'.",
      "Released by Prime Minister Narendra Modi at Vigyan Bhavan."
    ],
    examFacts: ["Author: Ram Nath Kovind", "Title: Triumph of the Indian Republic: My Life, My Struggles"],
    quickRemember: "Ram Nath Kovind's autobiography is titled 'Triumph of the Indian Republic: My Life, My Struggles'.",
    audioText: "Prime Minister Narendra Modi released former President Ram Nath Kovind's autobiography, titled Triumph of the Indian Republic.",
    source: "PIB",
    importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-AUG-052",
    date: "2026-08-11",
    month: "Aug 2026",
    category: "National Affairs",
    title: "Bureau of Port Security (BoPS) Established",
    summary: "Ministry of Ports established BoPS as the dedicated regulatory authority for port and coastal security.",
    whatHappened: "The Ministry of Ports, Shipping and Waterways constituted the Bureau of Port Security (BoPS) under the Merchant Shipping Act, 2025, naming the Central Industrial Security Force (CISF) as the lead security audit and enforcement agency across major and non-major maritime ports.",
    importantPoints: [
      "Dedicated regulatory authority for port and ship security.",
      "Formed under the Merchant Shipping Act, 2025.",
      "CISF designated as the nodal force for security audits and perimeter protection."
    ],
    examFacts: ["Statutory Body: Bureau of Port Security (BoPS)", "Lead Audit Force: CISF", "Ministry: Ports, Shipping and Waterways"],
    quickRemember: "The Bureau of Port Security (BoPS) was established under the Ports Ministry, with CISF as the lead audit force.",
    audioText: "The Ministry of Ports established the Bureau of Port Security, naming the CISF as its lead audit agency.",
    source: "Ministry of Ports",
    importantFor: ["CDS", "UPSC", "SSC CGL"]
  },
  {
    id: "REC-AUG-053",
    date: "2026-08-12",
    month: "Aug 2026",
    category: "Economy & Infrastructure",
    title: "India Ranked World's Top Ship Recycling Nation by UNCTAD",
    summary: "UNCTAD reported India as the world's leading ship recycler with a 35.4% global market share.",
    whatHappened: "A report released by the United Nations Conference on Trade and Development (UNCTAD) confirmed India as the world's number one ship recycling nation in 2025, accounting for 35.4% of global dismantled tonnage with 2.99 million Gross Tonnage scrapped primarily at Alang, Gujarat.",
    importantPoints: [
      "India ranked first globally in ship recycling by UNCTAD.",
      "Captured 35.4% of global ship recycling with 2.99 million Gross Tonnage.",
      "Hub: Alang Ship Breaking Yard in Bhavnagar, Gujarat."
    ],
    examFacts: ["Global Rank: 1st", "Global Market Share: 35.4%", "Reporting Body: UNCTAD", "Key Yard: Alang, Gujarat"],
    quickRemember: "India is the world's leading ship recycler with a 35.4% global market share according to UNCTAD.",
    audioText: "According to UNCTAD, India ranked as the world's leading ship recycling nation, dismantling over thirty-five percent of global tonnage.",
    source: "UNCTAD",
    importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-AUG-054",
    date: "2026-08-15",
    month: "Aug 2026",
    category: "National Affairs",
    title: "DIKSHA Unified as 'One Nation, One Digital Platform'",
    summary: "The Ministry of Education unified K-12 schooling under DIKSHA across 36 Indian languages.",
    whatHappened: "The central government expanded and notified the DIKSHA portal as 'One Nation, One Digital Platform' for K-12 school education, integrating NCERT and State board curricula across 36 Indian languages with personalized learning and AI assessment tools.",
    importantPoints: [
      "Motto: 'One Nation, One Digital Platform'.",
      "Spans 36 Indian languages with digital textbooks and assessments.",
      "Implemented by the Ministry of Education."
    ],
    examFacts: ["Platform: DIKSHA", "Initiative: One Nation, One Digital Platform", "Languages: 36"],
    quickRemember: "DIKSHA was unified as 'One Nation, One Digital Platform' across 36 Indian languages.",
    audioText: "The Ministry of Education unified school learning under DIKSHA as One Nation, One Digital Platform across thirty-six languages.",
    source: "Ministry of Education",
    importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-AUG-055",
    date: "2026-08-16",
    month: "Aug 2026",
    category: "Economy & Infrastructure",
    title: "India's First Offshore Airport Approved in Palghar",
    summary: "Maharashtra approved the Detailed Project Report for India's first offshore airport at Kore Beach, Palghar.",
    whatHappened: "The Maharashtra government approved the Detailed Project Report (DPR) for India's first offshore airport to be constructed on reclaimed coastal land off Kore Beach in Palghar district to alleviate airspace congestion in the Mumbai Metropolitan Region.",
    importantPoints: [
      "India's first offshore airport on reclaimed coastal land.",
      "Location: Kore Beach, Palghar district, Maharashtra.",
      "Engineered to serve as a supplementary commercial hub for Mumbai."
    ],
    examFacts: ["Project: India's first offshore airport", "Location: Kore Beach, Palghar, Maharashtra"],
    quickRemember: "India's first offshore airport is approved for construction at Kore Beach in Palghar, Maharashtra.",
    audioText: "Maharashtra approved the detailed project report for India's first offshore airport at Kore Beach in Palghar.",
    source: "Maharashtra Civil Aviation",
    importantFor: ["SSC CGL", "CDS"]
  },
  {
    id: "REC-AUG-056",
    date: "2026-08-18",
    month: "Aug 2026",
    category: "Health & Welfare",
    title: "Health Ministry Unveils SUMAN Roadmap 2030",
    summary: "The Health Ministry launched the SUMAN Roadmap 2030 targeting zero preventable maternal and newborn deaths.",
    whatHappened: "Union Health Minister J. P. Nadda unveiled the SUMAN (Surakshit Matritva Aashwasan) Roadmap 2030, targeting zero preventable maternal and neonatal mortality across 130 priority districts with assured free delivery and emergency obstetric care.",
    importantPoints: [
      "Initiative: SUMAN Roadmap 2030.",
      "Targets zero preventable maternal and neonatal deaths across 130 focus districts.",
      "Provides 100% free institutional delivery, diagnostic tests, and transport."
    ],
    examFacts: ["Scheme: SUMAN (Surakshit Matritva Aashwasan)", "Goal: Zero preventable maternal and neonatal deaths", "Priority Districts: 130"],
    quickRemember: "SUMAN Roadmap 2030 targets zero preventable maternal and neonatal deaths in 130 high-priority districts.",
    audioText: "Union Health Minister J. P. Nadda launched the SUMAN Roadmap 2030 to achieve zero preventable maternal deaths across 130 districts.",
    source: "MoHFW",
    importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-AUG-057",
    date: "2026-08-20",
    month: "Aug 2026",
    category: "Science & Technology",
    title: "I-2SEA Subsea Fiber Cable Project Announced",
    summary: "A 3,600-km subsea fiber cable project will connect Machilipatnam to Malaysia and Singapore by 2029.",
    whatHappened: "Microsoft, Lightstorm, and Tata Communications announced a joint consortium to construct the 3,600-km 'I-2SEA' undersea optical fiber cable system, linking Machilipatnam on India's east coast directly to landing stations in Malaysia and Singapore by 2029.",
    importantPoints: [
      "Name: I-2SEA subsea cable system.",
      "Spans 3,600 km connecting Machilipatnam (Andhra Pradesh) to Singapore and Malaysia.",
      "Scheduled for commercial commissioning by 2029."
    ],
    examFacts: ["Cable Name: I-2SEA", "Indian Landing Station: Machilipatnam, Andhra Pradesh", "Length: 3,600 km"],
    quickRemember: "The 3,600-km I-2SEA subsea fiber cable will connect Machilipatnam to Malaysia and Singapore.",
    audioText: "A 3,600-kilometer undersea fiber cable named I-2SEA will link Machilipatnam directly to Singapore and Malaysia.",
    source: "Communications International",
    importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-AUG-058",
    date: "2026-08-21",
    month: "Aug 2026",
    category: "Government Schemes",
    title: "Ministry of Tribal Affairs Launches TribeX Digital Platform",
    summary: "MoTA launched TribeX to provide digital vocational and accredited postgraduate education in tribal culture.",
    whatHappened: "The Ministry of Tribal Affairs (MoTA) launched 'TribeX', an indigenous digital learning and heritage portal offering vocational courses, tribal language archives, and accredited postgraduate diplomas in indigenous culture and tribal resource management.",
    importantPoints: [
      "Launched by the Ministry of Tribal Affairs.",
      "Provides digital education and accredited diplomas in tribal arts and governance.",
      "Facilitates tribal research and entrepreneurship under Van Dhan Vikas Kendras."
    ],
    examFacts: ["Platform: TribeX", "Ministry: Ministry of Tribal Affairs (MoTA)", "Focus: Tribal higher education & heritage"],
    quickRemember: "TribeX is a digital higher education and heritage platform launched by the Ministry of Tribal Affairs.",
    audioText: "The Ministry of Tribal Affairs launched TribeX, a digital platform dedicated to tribal education and indigenous cultural heritage.",
    source: "Ministry of Tribal Affairs",
    importantFor: ["SSC CGL", "State PCS"]
  },
  {
    id: "REC-AUG-059",
    date: "2026-08-23",
    month: "Aug 2026",
    category: "Economy & Infrastructure",
    title: "HPCL Greenfield Petrochemical Complex Opened at Pachpadra",
    summary: "PM Narendra Modi inaugurated HPCL's ₹79,450 crore refinery-cum-petrochemical complex at Pachpadra, Rajasthan.",
    whatHappened: "Prime Minister Narendra Modi dedicated HPCL Rajasthan Refinery Limited's (HRRL) ₹79,450 crore greenfield refinery-cum-petrochemical complex at Pachpadra in Balotra district, Rajasthan, featuring a 9 MMTPA crude processing capacity.",
    importantPoints: [
      "Joint venture between HPCL and the Government of Rajasthan.",
      "Outlay: Over ₹79,450 crore with 9 MMTPA refining capacity.",
      "Located at Pachpadra, Balotra district, Rajasthan."
    ],
    examFacts: ["Location: Pachpadra, Balotra (Rajasthan)", "Cost: ₹79,450 Crore", "Capacity: 9 MMTPA"],
    quickRemember: "HPCL's ₹79,450 crore greenfield refinery complex was inaugurated at Pachpadra, Balotra, Rajasthan.",
    audioText: "Prime Minister Modi inaugurated HPCL's seventy-nine thousand crore greenfield refinery and petrochemical complex at Pachpadra, Rajasthan.",
    source: "Ministry of Petroleum",
    importantFor: ["SSC CGL", "UPSC", "State PCS"]
  },
  {
    id: "REC-AUG-060",
    date: "2026-08-25",
    month: "Aug 2026",
    category: "Science & Technology",
    title: "Thorium and Monazite Deposits Mapped in Gundlupet",
    summary: "The Geological Survey of India discovered significant thorium-bearing monazite deposits across 700 acres in Karnataka.",
    whatHappened: "The Geological Survey of India (GSI) discovered and mapped extensive monazite and thorium-bearing heavy mineral sand deposits across 700 acres in Gundlupet taluk, Chamarajanagar district, Karnataka, strengthening India's domestic nuclear fuel reserves.",
    importantPoints: [
      "Discovered by the Geological Survey of India (GSI).",
      "Spread across 700 acres in Gundlupet, Chamarajanagar district, Karnataka.",
      "Contains high concentrations of radioactive thorium and rare earth elements (REEs)."
    ],
    examFacts: ["Mineral: Thorium and Monazite", "Location: Gundlupet, Chamarajanagar (Karnataka)", "Agency: GSI"],
    quickRemember: "Major thorium-bearing monazite deposits were mapped by GSI across 700 acres in Gundlupet, Karnataka.",
    audioText: "The Geological Survey of India identified substantial thorium and monazite deposits across 700 acres in Gundlupet, Karnataka.",
    source: "Geological Survey of India",
    importantFor: ["SSC CGL", "UPSC"]
  }
];

const augRecallQuestionsBatch3 = [
  {
    id: "REC-Q-AUG-041",
    articleId: "REC-AUG-041",
    category: "Polity & Governance",
    topic: "Civil Registration",
    question: "Under the Registration of Births and Deaths (Amendment) Bill, 2026, registration of a birth or death reported more than two years after its occurrence requires an order from which judicial authority?",
    options: [
      "Sub-Divisional Magistrate (SDM)",
      "Judicial Magistrate of the First Class (JMFC)",
      "District and Sessions Judge",
      "Chief Judicial Magistrate (CJM)"
    ],
    answer: 1,
    explanation: "Under the 2026 amendments, any birth or death reported more than two years after occurrence can only be registered with the sanction of a Judicial Magistrate of the First Class."
  },
  {
    id: "REC-Q-AUG-042",
    articleId: "REC-AUG-042",
    category: "Polity & Governance",
    topic: "Judiciary",
    question: "The Supreme Court (Number of Judges) Amendment Bill, 2026 increases the sanctioned strength of Supreme Court judges, excluding the Chief Justice of India, to:",
    options: [
      "34 Judges",
      "36 Judges",
      "37 Judges",
      "40 Judges"
    ],
    answer: 2,
    explanation: "The sanctioned strength was raised from 33 to 37 judges excluding the CJI, bringing the total sanctioned bench to 38 judges."
  },
  {
    id: "REC-Q-AUG-043",
    articleId: "REC-AUG-043",
    category: "Environment",
    topic: "Wildlife Conservation",
    question: "World Elephant Day is celebrated globally on 12 August. What was its designated international theme for 2026?",
    options: [
      "Protecting Forest Giants for Future Generations",
      "Bringing the world together to help elephants",
      "Securing Corridors, Protecting Lives",
      "Human-Wildlife Harmony in Changing Climates"
    ],
    answer: 1,
    explanation: "The global theme for World Elephant Day 2026 was 'Bringing the world together to help elephants'."
  },
  {
    id: "REC-Q-AUG-044",
    articleId: "REC-AUG-044",
    category: "Polity & Governance",
    topic: "State Reorganization",
    question: "The Kerala (Alteration of Name) Bill, 2026, passed by the Lok Sabha in August 2026, officially alters the constitutional name of the state to:",
    options: [
      "Keraladesham",
      "Keralam",
      "Malabar Keralam",
      "Dakshina Keralam"
    ],
    answer: 1,
    explanation: "The Bill officially alters the name from 'Kerala' to 'Keralam' to align with its native Malayalam pronunciation."
  },
  {
    id: "REC-Q-AUG-045",
    articleId: "REC-AUG-045",
    category: "Environment",
    topic: "Wildlife Census",
    question: "On World Lion Day (10 August 2026), what population figure of wild Asiatic lions across Gujarat's Gir landscape was highlighted?",
    options: [
      "674 Lions",
      "750 Lions",
      "891 Lions",
      "1,024 Lions"
    ],
    answer: 2,
    explanation: "The Asiatic lion population in Gujarat increased from 523 in 2015 to 891 according to official census figures."
  },
  {
    id: "REC-Q-AUG-046",
    articleId: "REC-AUG-046",
    category: "Important Days",
    topic: "National Movement",
    question: "National Handloom Day is observed annually on 7 August across India to commemorate which historic freedom movement?",
    options: [
      "Non-Cooperation Movement (1920)",
      "Swadeshi Movement (1905)",
      "Civil Disobedience Movement (1930)",
      "Champaran Satyagraha (1917)"
    ],
    answer: 1,
    explanation: "National Handloom Day commemorates the launch of the Swadeshi Movement on 7 August 1905 at the Calcutta Town Hall."
  },
  {
    id: "REC-Q-AUG-047",
    articleId: "REC-AUG-047",
    category: "Sports",
    topic: "Chess",
    question: "Which Indian chess Grandmaster won the St. Louis Rapid & Blitz 2026 title held at the Saint Louis Chess Club in August 2026?",
    options: [
      "D. Gukesh",
      "Arjun Erigaisi",
      "R. Praggnanandhaa",
      "Pentala Harikrishna"
    ],
    answer: 2,
    explanation: "R. Praggnanandhaa won the St. Louis Rapid & Blitz 2026 title in Missouri, USA."
  },
  {
    id: "REC-Q-AUG-048",
    articleId: "REC-AUG-048",
    category: "Sports",
    topic: "Cricket Records",
    question: "Who became the first Indian batsman and the fourth player in world cricket history to hit 100 sixes in Test matches?",
    options: [
      "Rohit Sharma",
      "Virender Sehwag",
      "Rishabh Pant",
      "Hardik Pandya"
    ],
    answer: 2,
    explanation: "Rishabh Pant reached the milestone of 100 Test sixes against Sri Lanka, becoming the first Indian and fourth player globally to achieve it."
  },
  {
    id: "REC-Q-AUG-049",
    articleId: "REC-AUG-049",
    category: "Awards & Honours",
    topic: "Sports Honours",
    question: "Who among the following was conferred the Arjuna Award (Lifetime) for Football in the National Sports Awards 2025 announced in August 2026?",
    options: [
      "Subrata Paul",
      "I Arumainayagam",
      "Bhaichung Bhutia",
      "Sunil Chhetri"
    ],
    answer: 1,
    explanation: "Veteran international footballer I Arumainayagam was honored with the Arjuna Award (Lifetime) for his legacy in Indian football."
  },
  {
    id: "REC-Q-AUG-050",
    articleId: "REC-AUG-050",
    category: "Sports",
    topic: "Esports & Chess",
    question: "Who won the Esports World Cup Chess 2026 title in Paris, defeating Denis Lazavik 2-0 in the grand final?",
    options: [
      "Hikaru Nakamura",
      "Alireza Firouzja",
      "Magnus Carlsen",
      "Fabiano Caruana"
    ],
    answer: 2,
    explanation: "Magnus Carlsen defended his Esports World Cup Chess title in Paris, beating Denis Lazavik 2-0."
  },
  {
    id: "REC-Q-AUG-051",
    articleId: "REC-AUG-051",
    category: "Books & Authors",
    topic: "Autobiographies",
    question: "What is the title of the autobiography of former President Ram Nath Kovind, released in New Delhi in August 2026?",
    options: [
      "Serving the Republic: An Indian Journey",
      "Triumph of the Indian Republic: My Life, My Struggles",
      "From Paraunkh to Raisina Hill",
      "Wings of Justice: My Presidential Years"
    ],
    answer: 1,
    explanation: "Former President Ram Nath Kovind's autobiography is titled 'Triumph of the Indian Republic: My Life, My Struggles'."
  },
  {
    id: "REC-Q-AUG-052",
    articleId: "REC-AUG-052",
    category: "National Affairs",
    topic: "Maritime Security",
    question: "Which central security agency was designated as the lead audit and security force for the newly established Bureau of Port Security (BoPS)?",
    options: [
      "Indian Coast Guard (ICG)",
      "National Security Guard (NSG)",
      "Central Industrial Security Force (CISF)",
      "Marine Commando Force (MARCOS)"
    ],
    answer: 2,
    explanation: "The Central Industrial Security Force (CISF) was designated as the lead security audit and enforcement agency for BoPS."
  },
  {
    id: "REC-Q-AUG-053",
    articleId: "REC-AUG-053",
    category: "Economy & Infrastructure",
    topic: "Maritime Trade",
    question: "According to UNCTAD data, which country ranked as the world's leading ship recycler with a 35.4% global market share?",
    options: [
      "Bangladesh",
      "Pakistan",
      "India",
      "Turkey"
    ],
    answer: 2,
    explanation: "India led global ship recycling with 35.4% of total dismantled gross tonnage, centered around Alang in Gujarat."
  },
  {
    id: "REC-Q-AUG-054",
    articleId: "REC-AUG-054",
    category: "National Affairs",
    topic: "Digital Education",
    question: "The DIKSHA schooling portal, expanded as 'One Nation, One Digital Platform', provides curriculum and assessment support in how many Indian languages?",
    options: [
      "12 Languages",
      "22 Languages",
      "36 Languages",
      "44 Languages"
    ],
    answer: 2,
    explanation: "DIKSHA provides digital schooling resources and pedagogical tools across 36 Indian languages."
  },
  {
    id: "REC-Q-AUG-055",
    articleId: "REC-AUG-055",
    category: "Economy & Infrastructure",
    topic: "Civil Aviation",
    question: "India's first offshore airport on reclaimed coastal land was approved for construction at which location?",
    options: [
      "Digha Beach, West Bengal",
      "Kore Beach, Palghar (Maharashtra)",
      "Marina Coast, Tamil Nadu",
      "Karwar Bay, Karnataka"
    ],
    answer: 1,
    explanation: "Maharashtra cleared the DPR for India's first offshore airport at Kore Beach in Palghar district."
  },
  {
    id: "REC-Q-AUG-056",
    articleId: "REC-AUG-056",
    category: "Health & Welfare",
    topic: "Maternal Health",
    question: "The SUMAN Roadmap 2030, unveiled by the Union Health Ministry, aims to eliminate preventable maternal and newborn deaths across how many focus districts?",
    options: [
      "75 Districts",
      "100 Districts",
      "130 Districts",
      "150 Districts"
    ],
    answer: 2,
    explanation: "The SUMAN Roadmap 2030 concentrates targeted emergency maternal healthcare interventions across 130 priority districts."
  },
  {
    id: "REC-Q-AUG-057",
    articleId: "REC-AUG-057",
    category: "Science & Technology",
    topic: "Telecommunications",
    question: "The proposed 3,600-km I-2SEA subsea fiber optic cable will directly connect which Indian port city to Malaysia and Singapore?",
    options: [
      "Visakhapatnam",
      "Machilipatnam",
      "Paradip",
      "Chennai"
    ],
    answer: 1,
    explanation: "The I-2SEA subsea cable lands at Machilipatnam in Andhra Pradesh, linking it with Southeast Asian hubs."
  },
  {
    id: "REC-AUG-058",
    articleId: "REC-AUG-058",
    category: "Government Schemes",
    topic: "Tribal Education",
    question: "What is the name of the digital education and vocational portal launched by the Ministry of Tribal Affairs (MoTA) in August 2026?",
    options: [
      "EklavyaNet",
      "TribeX",
      "VanVani",
      "AdivasiShiksha"
    ],
    answer: 1,
    explanation: "The Ministry of Tribal Affairs launched TribeX to offer digital vocational courses and postgraduate diplomas in indigenous culture."
  },
  {
    id: "REC-Q-AUG-059",
    articleId: "REC-AUG-059",
    category: "Economy & Infrastructure",
    topic: "Petrochemicals",
    question: "HPCL's newly dedicated ₹79,450 crore greenfield integrated refinery-cum-petrochemical complex is located in which district of Rajasthan?",
    options: [
      "Jaisalmer",
      "Bikaner",
      "Balotra (Pachpadra)",
      "Barmer (Uttarlai)"
    ],
    answer: 2,
    explanation: "The 9 MMTPA HPCL refinery-cum-petrochemical complex was commissioned at Pachpadra in Balotra district, Rajasthan."
  },
  {
    id: "REC-Q-AUG-060",
    articleId: "REC-AUG-060",
    category: "Science & Technology",
    topic: "Strategic Minerals",
    question: "The Geological Survey of India mapped major thorium-bearing monazite deposits across 700 acres in which state?",
    options: [
      "Odisha (Ganjam)",
      "Kerala (Kollam)",
      "Karnataka (Gundlupet)",
      "Andhra Pradesh (Srikakulam)"
    ],
    answer: 2,
    explanation: "GSI mapped extensive thorium and monazite heavy mineral deposits across 700 acres in Gundlupet taluk, Chamarajanagar district, Karnataka."
  }
];

// 👉 PUSH BATCH 3 DATA INTO GLOBAL ARRAYS
hiddenRecallArticles.push(...augRecallArticlesBatch3);
recallQuestionPool.push(...augRecallQuestionsBatch3);

/* ==========================================================================
   END OF AUGUST BATCH 3
   ========================================================================== */


/* ==========================================================================
   JULY 2026 - BATCH 4 (ITEMS 061 TO 080)
   ========================================================================== */

const julRecallArticlesBatch4 = [
  {
    id: "REC-JUL-061", date: "2026-07-29", month: "Jul 2026", category: "Science & Technology",
    title: "India's First Indigenous MRI Scanner Developed",
    summary: "CSIR and IIT Delhi successfully unveiled India's first fully indigenous 1.5 Tesla MRI scanner.",
    whatHappened: "In a major milestone for domestic medical manufacturing, CSIR and IIT Delhi researchers successfully unveiled India's first fully indigenous 1.5 Tesla Magnetic Resonance Imaging (MRI) scanner, slashing hardware import costs by over 60%.",
    importantPoints: [
      "India's first indigenous 1.5 Tesla MRI scanner.",
      "Developed jointly by CSIR and IIT Delhi.",
      "Significantly reduces medical equipment import costs."
    ],
    examFacts: ["Device: 1.5T Indigenous MRI Scanner", "Developers: CSIR and IIT Delhi"],
    quickRemember: "CSIR and IIT Delhi developed India's first indigenous 1.5 Tesla MRI scanner.",
    audioText: "CSIR and IIT Delhi unveiled India's first fully indigenous 1.5 Tesla MRI scanner, cutting medical equipment costs.",
    source: "CSIR", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-JUL-062", date: "2026-07-28", month: "Jul 2026", category: "Environment",
    title: "India Ratifies Global Biodiversity Framework Targets",
    summary: "The Union Cabinet formally ratified national alignment with the Kunming-Montreal Global Biodiversity Framework.",
    whatHappened: "The Union Cabinet formally approved national policy alignment with the Kunming-Montreal Global Biodiversity Framework (KMGBF), committing India to protect 30% of degraded lands and inland waters by 2030.",
    importantPoints: [
      "National alignment with Kunming-Montreal Global Biodiversity Framework.",
      "Commits to protecting 30% of land and water ecosystems by 2030.",
      "Approved by the Union Cabinet."
    ],
    examFacts: ["Framework: Kunming-Montreal Global Biodiversity Framework", "Target: 30% protection by 2030"],
    quickRemember: "India aligned its national policy with the Kunming-Montreal Global Biodiversity Framework.",
    audioText: "The Union Cabinet approved national alignment with the Kunming-Montreal Global Biodiversity Framework to protect ecosystems by 2030.",
    source: "MoEFCC", importantFor: ["UPSC", "SSC CGL"]
  },
  {
    id: "REC-JUL-063", date: "2026-07-27", month: "Jul 2026", category: "Economy & Trade",
    title: "India Launches B2B Logistics Portal 'LogiEx'",
    summary: "The Ministry of Commerce launched 'LogiEx', an AI-driven logistics exchange platform for micro-exporters.",
    whatHappened: "The Ministry of Commerce and Industry launched 'LogiEx', an artificial intelligence-powered digital exchange platform designed to match micro-exporters with verified freight forwarders, cutting cross-border supply chain bottlenecks.",
    importantPoints: [
      "Platform name: LogiEx.",
      "Launched by the Ministry of Commerce and Industry.",
      "Aims to optimize cross-border shipping for micro-exporters using AI."
    ],
    examFacts: ["Platform: LogiEx", "Sector: B2B Export Logistics"],
    quickRemember: "The Ministry of Commerce launched the 'LogiEx' digital platform to optimize export logistics.",
    audioText: "The Commerce Ministry launched LogiEx, an AI-driven exchange platform to assist micro-exporters with freight forwarding.",
    source: "Ministry of Commerce", importantFor: ["SSC CGL", "Bank PO"]
  },
  {
    id: "REC-JUL-064", date: "2026-07-26", month: "Jul 2026", category: "Defence",
    title: "Indian Navy Inducts First Deep Submergence Rescue Vehicle Complex",
    summary: "The Indian Navy commissioned a state-of-the-art DSRV mother ship complex at Visakhapatnam.",
    whatHappened: "The Indian Navy formally commissioned a specialized Deep Submergence Rescue Vehicle (DSRV) mother ship complex at the Eastern Naval Command in Visakhapatnam, significantly boosting submarine rescue and deep-sea diving capabilities.",
    importantPoints: [
      "Specialized DSRV mother ship complex commissioned.",
      "Located at Eastern Naval Command, Visakhapatnam.",
      "Enhances submarine rescue and deep-sea operations."
    ],
    examFacts: ["System: DSRV Complex", "Command: Eastern Naval Command (Visakhapatnam)"],
    quickRemember: "The Indian Navy commissioned a new DSRV submarine rescue complex in Visakhapatnam.",
    audioText: "The Indian Navy commissioned a specialized Deep Submergence Rescue Vehicle complex at Visakhapatnam.",
    source: "Indian Navy", importantFor: ["CDS", "SSC CGL"]
  },
  {
    id: "REC-JUL-065", date: "2026-07-25", month: "Jul 2026", category: "Science & Technology",
    title: "AIIMS Hyderabad Deploys Robotic Surgical Suite",
    summary: "AIIMS Hyderabad inaugurated an advanced indigenous robotic surgery suite for complex oncology operations.",
    whatHappened: "AIIMS Hyderabad inaugurated a next-generation indigenous robotic surgical suite to perform complex oncological and cardiovascular procedures with sub-millimetre precision, lowering post-operative recovery timelines.",
    importantPoints: [
      "Robotic surgical suite inaugurated at AIIMS Hyderabad.",
      "Focuses on complex oncology and precision surgery.",
      "Utilizes advanced indigenous robotic arms."
    ],
    examFacts: ["Hospital: AIIMS Hyderabad", "Facility: Robotic Surgical Suite"],
    quickRemember: "AIIMS Hyderabad inaugurated an advanced robotic surgical suite for precision operations.",
    audioText: "AIIMS Hyderabad inaugurated an advanced robotic surgical suite designed for precision oncology operations.",
    source: "AIIMS Hyderabad", importantFor: ["SSC CGL", "State PCS"]
  },
  {
    id: "REC-JUL-066", date: "2026-07-24", month: "Jul 2026", category: "Government Schemes",
    title: "PM-VAYO Scheme Extended for Senior Citizens",
    summary: "The Ministry of Social Justice extended the PM-VAYO scheme to provide assistive living devices to elders.",
    whatHappened: "The Ministry of Social Justice and Empowerment expanded the 'Rashtriya Vayoshri Yojana' (PM-VAYO), scaling up the distribution of high-quality physical aids and assisted-living devices to senior citizens belonging to BPL households nationwide.",
    importantPoints: [
      "Expansion of the PM-VAYO scheme for senior citizens.",
      "Provides assisted-living devices to BPL elders.",
      "Managed by the Ministry of Social Justice."
    ],
    examFacts: ["Scheme: PM-VAYO (Rashtriya Vayoshri Yojana)", "Beneficiaries: Senior citizens (BPL)"],
    quickRemember: "The PM-VAYO scheme was expanded to provide assisted-living devices to senior citizens.",
    audioText: "The Social Justice Ministry expanded the PM-VAYO scheme to distribute assistive devices to senior citizens.",
    source: "Ministry of Social Justice", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-JUL-067", date: "2026-07-23", month: "Jul 2026", category: "International Affairs",
    title: "India-Vietnam Joint Maritime Security Exercise",
    summary: "The Indian Navy and Vietnam People's Navy conducted bilateral maritime security exercises in the South China Sea.",
    whatHappened: "Naval units from India and Vietnam executed coordinated passage exercises and maritime security drills in the South China Sea, emphasizing freedom of navigation, interoperability, and regional stability under international law.",
    importantPoints: [
      "Bilateral maritime security exercise between India and Vietnam.",
      "Conducted in the South China Sea.",
      "Focuses on freedom of navigation and interoperability."
    ],
    examFacts: ["Participants: Indian Navy and Vietnam People's Navy", "Location: South China Sea"],
    quickRemember: "India and Vietnam conducted a joint maritime security exercise in the South China Sea.",
    audioText: "The Indian Navy and Vietnam People's Navy conducted bilateral maritime security exercises in the South China Sea.",
    source: "Ministry of Defence", importantFor: ["CDS", "SSC CGL", "UPSC"]
  },
  {
    id: "REC-JUL-068", date: "2026-07-22", month: "Jul 2026", category: "Economy",
    title: "SEBI Mandates ESG Rating Provider Accreditation",
    summary: "SEBI enforced strict regulatory compliance standards for all Environmental, Social, and Governance (ESG) rating agencies.",
    whatHappened: "SEBI enforced full implementation of its regulatory framework requiring all Environmental, Social, and Governance (ESG) Rating Providers (ERPs) operating in Indian markets to secure formal accreditation and adhere to transparent scoring standards.",
    importantPoints: [
      "SEBI enforced accreditation rules for ESG Rating Providers (ERPs).",
      "Ensures transparent scoring and mitigates greenwashing.",
      "Regulates financial market compliance."
    ],
    examFacts: ["Regulator: SEBI", "Subject: ESG Rating Providers (ERPs)"],
    quickRemember: "SEBI enforced strict accreditation standards for ESG Rating Providers in Indian markets.",
    audioText: "SEBI enforced strict regulatory standards requiring all Environmental, Social, and Governance rating agencies to secure accreditation.",
    source: "SEBI", importantFor: ["Bank PO", "SSC CGL"]
  },
  {
    id: "REC-JUL-069", date: "2026-07-21", month: "Jul 2026", category: "Science & Technology",
    title: "IIT Roorkee Develops Earthquake Early Warning System",
    summary: "IIT Roorkee deployed an upgraded seismic sensor grid for real-time earthquake early warnings in Uttarakhand.",
    whatHappened: "Researchers at IIT Roorkee upgraded and deployed a dense seismic sensor network across the Garhwal Himalayan region. The system provides automated early warnings to state disaster authorities seconds before destructive shear waves arrive.",
    importantPoints: [
      "Seismic sensor grid upgraded in the Garhwal Himalayas.",
      "Developed by IIT Roorkee.",
      "Provides real-time earthquake early warnings to mitigate disaster risks."
    ],
    examFacts: ["Institution: IIT Roorkee", "System: Earthquake Early Warning Grid", "Region: Uttarakhand"],
    quickRemember: "IIT Roorkee deployed an upgraded seismic sensor grid for earthquake early warnings in Uttarakhand.",
    audioText: "Researchers at IIT Roorkee deployed an upgraded seismic sensor grid for real-time earthquake early warnings.",
    source: "IIT Roorkee", importantFor: ["SSC CGL", "State PCS"]
  },
  {
    id: "REC-JUL-070", date: "2026-07-20", month: "Jul 2026", category: "Sports",
    title: "Divya Deshmukh Wins World Junior Chess Championship",
    summary: "Indian chess prodigy Divya Deshmukh won the FIDE World Junior Girls Chess Championship.",
    whatHappened: "Indian chess sensation Divya Deshmukh clinched the title at the FIDE World Junior Girls Chess Championship with a dominant performance, demonstrating exceptional tactical prowess throughout the international tournament.",
    importantPoints: [
      "Divya Deshmukh won the FIDE World Junior Girls Chess Championship.",
      "Discipline: Chess.",
      "Brought global acclaim to Indian youth chess talent."
    ],
    examFacts: ["Athlete: Divya Deshmukh", "Sport: Chess", "Title: World Junior Girls Champion"],
    quickRemember: "Chess prodigy Divya Deshmukh won the FIDE World Junior Girls Chess Championship.",
    audioText: "Indian chess prodigy Divya Deshmukh won the FIDE World Junior Girls Chess Championship.",
    source: "FIDE", importantFor: ["SSC CGL", "SSC CHSL"]
  },
  {
    id: "REC-JUL-071", date: "2026-07-19", month: "Jul 2026", category: "Science & Technology",
    title: "ISRO Releases First Data from Aditya-L1 VELC Instrument",
    summary: "ISRO published high-resolution solar corona data captured by the Visible Emission Line Coronagraph.",
    whatHappened: "ISRO officially released the first tranche of high-resolution scientific data collected by the Visible Emission Line Coronagraph (VELC) payload onboard Aditya-L1, India's first dedicated solar observation spacecraft stationed at Lagrangian Point 1.",
    importantPoints: [
      "Released scientific data from the VELC payload on Aditya-L1.",
      "Captures high-resolution solar corona dynamics.",
      "Spacecraft stationed at Sun-Earth Lagrangian Point 1 (L1)."
    ],
    examFacts: ["Spacecraft: Aditya-L1", "Instrument: VELC (Visible Emission Line Coronagraph)", "Agency: ISRO"],
    quickRemember: "ISRO published high-resolution solar data from the Aditya-L1 VELC instrument.",
    audioText: "ISRO published the first high-resolution solar corona data captured by the VELC instrument onboard Aditya-L1.",
    source: "ISRO", importantFor: ["SSC CGL", "UPSC", "CDS"]
  },
  {
    id: "REC-JUL-072", date: "2026-07-17", month: "Jul 2026", category: "Economy & Infrastructure",
    title: "India Sets Up National Deep Tech Startup Hub in Pune",
    summary: "The Ministry of Science and Technology inaugurated the National Deep Tech Startup Hub (NDTSH) in Pune.",
    whatHappened: "The Ministry of Science and Technology inaugurated the National Deep Tech Startup Hub (NDTSH) in Pune, Maharashtra. The facility provides specialized incubation, wet labs, and high-performance computing clusters for early-stage engineering startups.",
    importantPoints: [
      "National Deep Tech Startup Hub (NDTSH) inaugurated in Pune.",
      "Provides wet labs and high-performance computing for deep-tech startups.",
      "Backed by the Ministry of Science and Technology."
    ],
    examFacts: ["Facility: National Deep Tech Startup Hub (NDTSH)", "Location: Pune, Maharashtra"],
    quickRemember: "The National Deep Tech Startup Hub (NDTSH) was inaugurated in Pune.",
    audioText: "The Ministry of Science and Technology inaugurated the National Deep Tech Startup Hub in Pune to support engineering startups.",
    source: "Ministry of Science & Technology", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-JUL-073", date: "2026-07-16", month: "Jul 2026", category: "International Affairs",
    title: "India and Japan Sign Critical Minerals Partnership",
    summary: "India and Japan executed a bilateral framework agreement to secure rare earth and critical mineral supply chains.",
    whatHappened: "India and Japan signed a comprehensive Critical Minerals Partnership agreement in Tokyo. The pact facilitates joint exploration, processing, and recycling of rare earth elements and battery minerals to reduce single-nation supply dependencies.",
    importantPoints: [
      "Critical Minerals Partnership signed between India and Japan.",
      "Focuses on joint exploration, processing, and recycling of rare earths.",
      "Aims to secure supply chains for clean energy and electronics."
    ],
    examFacts: ["Partnership: India-Japan Critical Minerals Pact", "Focus: Rare Earths & Battery Minerals"],
    quickRemember: "India and Japan signed a Critical Minerals Partnership to secure rare earth supply chains.",
    audioText: "India and Japan signed a bilateral critical minerals partnership agreement to secure rare earth supply chains.",
    source: "MEA", importantFor: ["UPSC", "SSC CGL"]
  },
  {
    id: "REC-JUL-074", date: "2026-07-15", month: "Jul 2026", category: "Government Schemes",
    title: "National Tele-Mental Health Programme Expands Reach",
    summary: "The Ministry of Health reported that 'Tele-MANAS' crossed 2 million counseling calls since launch.",
    whatHappened: "The Ministry of Health and Family Welfare announced that 'Tele-MANAS', the national tele-mental health helpline, successfully crossed 2 million mental health counseling calls, expanding its 24/7 multilingual support network across all states.",
    importantPoints: [
      "Tele-MANAS national mental health helpline crossed 2 million calls.",
      "Provides 24/7 multilingual counseling support.",
      "Managed by the Ministry of Health."
    ],
    examFacts: ["Platform: Tele-MANAS", "Milestone: >2 Million Calls", "Ministry: Health & Family Welfare"],
    quickRemember: "The Tele-MANAS mental health helpline crossed 2 million counseling calls.",
    audioText: "The Health Ministry announced that the Tele-MANAS mental health helpline crossed two million counseling calls.",
    source: "MoHFW", importantFor: ["SSC CGL", "State PCS"]
  },
  {
    id: "REC-JUL-075", date: "2026-07-14", month: "Jul 2026", category: "National Affairs",
    title: "Supreme Court Directs Fast-Tracking of Cyber Crime Tribunals",
    summary: "The Supreme Court issued guidelines to establish dedicated fast-track tribunals for financial cyber fraud cases.",
    whatHappened: "In a landmark directive, the Supreme Court of India instructed all state high courts and governments to expedite the establishment of specialized fast-track tribunals dedicated exclusively to adjudicating online financial cyber fraud and identity theft cases.",
    importantPoints: [
      "Supreme Court directed fast-tracking of cyber crime tribunals.",
      "Focuses exclusively on online financial fraud and identity theft.",
      "Aims to reduce judicial backlog in cyber crime cases."
    ],
    examFacts: ["Directive Body: Supreme Court of India", "Focus: Cyber Crime Financial Tribunals"],
    quickRemember: "The Supreme Court directed states to establish fast-track tribunals for cyber crime financial cases.",
    audioText: "The Supreme Court issued guidelines directing states to establish dedicated fast-track tribunals for cyber crime fraud cases.",
    source: "Supreme Court of India", importantFor: ["UPSC", "SSC CGL"]
  },
  {
    id: "REC-JUL-076", date: "2026-07-13", month: "Jul 2026", category: "Economy & Infrastructure",
    title: "Kochi-Lakshadweep Subsea Optical Fiber Cable Operational",
    summary: "Prime Minister Modi dedicated the high-speed Kochi-Lakshadweep Islands Subsea Fiber Connection (KLISFC) to the nation.",
    whatHappened: "The high-speed Kochi-Lakshadweep Islands Subsea Fiber Connection (KLISFC) project became fully operational, delivering 100 Gbps bandwidth capacity to Kavaratti and outlying islands to upgrade digital connectivity.",
    importantPoints: [
      "Kochi-Lakshadweep Islands Subsea Fiber Connection (KLISFC) fully operational.",
      "Provides high-speed 100 Gbps bandwidth capacity to remote island populations.",
      "Boosts digital governance, tourism, and telemedicine."
    ],
    examFacts: ["Project: KLISFC (Kochi-Lakshadweep Subsea Fiber)", "Bandwidth: 100 Gbps"],
    quickRemember: "The Kochi-Lakshadweep subsea fiber optic cable project became fully operational.",
    audioText: "The high-speed Kochi-Lakshadweep subsea fiber optic connection became fully operational, bringing high bandwidth to the islands.",
    source: "Ministry of Communications", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-JUL-077", date: "2026-07-12", month: "Jul 2026", category: "Environment",
    title: "India Launches National Mangrove and Coral Restoration Mission",
    summary: "The government launched a dedicated national mission to restore degraded mangrove forests and coral reefs.",
    whatHappened: "The Ministry of Environment, Forest and Climate Change launched the 'National Mangrove and Coral Reef Restoration Mission', committing ₹500 crore to rejuvenate coastal bio-shields along the eastern and western seaboards.",
    importantPoints: [
      "National Mangrove and Coral Reef Restoration Mission launched.",
      "Committed corpus of ₹500 crore.",
      "Aims to rejuvenate coastal bio-shields against climate change storms."
    ],
    examFacts: ["Mission: Mangrove and Coral Reef Restoration", "Outlay: ₹500 Crore", "Ministry: MoEFCC"],
    quickRemember: "India launched a ₹500 crore national mission to restore mangrove forests and coral reefs.",
    audioText: "The Environment Ministry launched a national mission with a five hundred crore rupee outlay to restore mangroves and coral reefs.",
    source: "MoEFCC", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-JUL-078", date: "2026-07-10", month: "Jul 2026", category: "Science & Technology",
    title: "IIT Hyderabad Creates Biodegradable Surgical Threads",
    summary: "Researchers at IIT Hyderabad developed advanced biodegradable surgical sutures derived from marine polysaccharides.",
    whatHappened: "Engineers at IIT Hyderabad successfully synthesized high-strength biodegradable surgical threads extracted from marine crustacean polysaccharides. These sutures dissolve naturally within weeks, eliminating the need for removal stitches.",
    importantPoints: [
      "Biodegradable surgical threads developed by IIT Hyderabad.",
      "Derived from marine polysaccharides.",
      "Dissolves naturally without requiring post-surgery stitch removal."
    ],
    examFacts: ["Innovation: Biodegradable Surgical Sutures", "Institute: IIT Hyderabad"],
    quickRemember: "IIT Hyderabad developed biodegradable surgical threads derived from marine polysaccharides.",
    audioText: "Researchers at IIT Hyderabad developed biodegradable surgical sutures extracted from marine polysaccharides.",
    source: "IIT Hyderabad", importantFor: ["SSC CGL", "State PCS"]
  },
  {
    id: "REC-JUL-079", date: "2026-07-09", month: "Jul 2026", category: "International Affairs",
    title: "India Extends Line of Credit to Sri Lanka for Dairy Development",
    summary: "India disbursed a dedicated Line of Credit to Sri Lanka to modernize its cooperative dairy sector.",
    whatHappened: "Under bilateral economic assistance pacts, India disbursed a targeted Line of Credit (LoC) to Sri Lanka to assist its national dairy cooperative sector in establishing modern processing plants, cold chains, and veterinary infrastructure.",
    importantPoints: [
      "India extended a Line of Credit to Sri Lanka for dairy development.",
      "Focuses on modernizing processing plants and cold chains.",
      "Strengthens bilateral agricultural cooperation."
    ],
    examFacts: ["Assistance Type: Line of Credit (LoC)", "Partner Nation: Sri Lanka", "Sector: Cooperative Dairy"],
    quickRemember: "India provided a Line of Credit to Sri Lanka to modernize its cooperative dairy sector.",
    audioText: "India disbursed a Line of Credit to Sri Lanka to help modernize its cooperative dairy sector and cold chains.",
    source: "MEA", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-JUL-080", date: "2026-07-07", month: "Jul 2026", category: "Economy & Infrastructure",
    title: "NITI Aayog Releases State Energy Efficiency Index 2025-26",
    summary: "NITI Aayog published the State Energy Efficiency Index, highlighting Karnataka and Kerala as top performers.",
    whatHappened: "NITI Aayog, in partnership with the Bureau of Energy Efficiency (BEE), released the State Energy Efficiency Index (SEEI). Karnataka, Kerala, and Andhra Pradesh emerged as the leading frontrunner states in implementing industrial and municipal energy conservation measures.",
    importantPoints: [
      "State Energy Efficiency Index published by NITI Aayog and BEE.",
      "Top-performing frontrunner states: Karnataka, Kerala, and Andhra Pradesh.",
      "Evaluates energy-saving policies across industrial and municipal sectors."
    ],
    examFacts: ["Publisher: NITI Aayog & BEE", "Top States: Karnataka, Kerala, Andhra Pradesh"],
    quickRemember: "NITI Aayog's Energy Efficiency Index ranked Karnataka and Kerala as top frontrunner states.",
    audioText: "NITI Aayog released the State Energy Efficiency Index, highlighting Karnataka and Kerala as top frontrunners.",
    source: "NITI Aayog", importantFor: ["SSC CGL", "UPSC"]
  }
];

const julRecallQuestionsBatch4 = [
  {
    id: "REC-Q-JUL-061", articleId: "REC-JUL-061", category: "Science & Technology", topic: "Medical Manufacturing",
    question: "CSIR and IIT Delhi successfully unveiled India's first fully indigenous magnetic resonance imaging scanner of what strength?",
    options: ["1.0 Tesla", "1.5 Tesla", "3.0 Tesla", "7.0 Tesla"],
    answer: 1, explanation: "CSIR and IIT Delhi unveiled India's first fully indigenous 1.5 Tesla MRI scanner, cutting equipment import costs."
  },
  {
    id: "REC-Q-JUL-062", articleId: "REC-JUL-062", category: "Environment", topic: "Biodiversity Frameworks",
    question: "The Union Cabinet approved national policy alignment with the Kunming-Montreal Global Biodiversity Framework, committing India to protect what percentage of degraded lands and waters by 2030?",
    options: ["10%", "20%", "30%", "50%"],
    answer: 2, explanation: "India committed under the framework to protect 30% of degraded lands and inland waters by 2030."
  },
  {
    id: "REC-Q-JUL-063", articleId: "REC-JUL-063", category: "Economy & Trade", topic: "Export Platforms",
    question: "What is the name of the AI-driven B2B logistics exchange platform launched by the Ministry of Commerce to assist micro-exporters?",
    options: ["ExportSetu", "LogiEx", "TradeConnect AI", "ShipBharat"],
    answer: 1, explanation: "The Ministry of Commerce launched 'LogiEx' to match micro-exporters with verified freight forwarders using artificial intelligence."
  },
  {
    id: "REC-Q-JUL-064", articleId: "REC-JUL-064", category: "Defence", topic: "Naval Rescue",
    question: "The Indian Navy commissioned a specialized Deep Submergence Rescue Vehicle (DSRV) mother ship complex at which naval base?",
    options: ["Mumbai", "Kochi", "Visakhapatnam", "Karatara"],
    answer: 2, explanation: "The specialized DSRV mother ship complex was commissioned at the Eastern Naval Command in Visakhapatnam."
  },
  {
    id: "REC-Q-JUL-065", articleId: "REC-JUL-065", category: "Science & Technology", topic: "Medical Robotics",
    question: "Which premier medical institution inaugurated a next-generation indigenous robotic surgical suite for complex oncology procedures?",
    options: ["AIIMS New Delhi", "AIIMS Hyderabad", "PGI Chandigarh", "JIPMER Puducherry"],
    answer: 1, explanation: "AIIMS Hyderabad inaugurated an advanced indigenous robotic surgery suite for precise oncology operations."
  },
  {
    id: "REC-Q-JUL-066", articleId: "REC-JUL-066", category: "Government Schemes", topic: "Senior Citizen Welfare",
    question: "The Ministry of Social Justice expanded the Rashtriya Vayoshri Yojana (PM-VAYO) to distribute assisted-living devices to senior citizens belonging to which category?",
    options: ["EWS households", "BPL households", "Tribal designated areas", "Rural agrarian districts"],
    answer: 1, explanation: "The expanded PM-VAYO scheme distributes physical aids and assisted-living devices to senior citizens belonging to BPL households nationwide."
  },
  {
    id: "REC-Q-JUL-067", articleId: "REC-JUL-067", category: "Defence", topic: "Naval Cooperation",
    question: "The Indian Navy and the Vietnam People's Navy conducted bilateral maritime security exercises in which major body of water?",
    options: ["Bay of Bengal", "South China Sea", "Andaman Sea", "Gulf of Thailand"],
    answer: 1, explanation: "Naval units from India and Vietnam executed coordinated passage exercises in the South China Sea."
  },
  {
    id: "REC-Q-JUL-068", articleId: "REC-JUL-068", category: "Economy", topic: "Financial Market Standards",
    question: "SEBI enforced strict regulatory accreditation rules for all Environmental, Social, and Governance (ESG) rating agencies known as:",
    options: ["ESG Rating Providers (ERPs)", "Sustainable Credit Rating Agencies", "Green Audit Frameworks", "Climate Compliance Evaluators"],
    answer: 0, explanation: "SEBI mandated that all Environmental, Social, and Governance (ESG) Rating Providers (ERPs) secure formal market accreditation."
  },
  {
    id: "REC-Q-JUL-069", articleId: "REC-JUL-069", category: "Science & Technology", topic: "Disaster Warning Systems",
    question: "Researchers at which premier institute upgraded and deployed a dense seismic sensor grid for real-time earthquake early warnings in Uttarakhand?",
    options: ["IIT Bombay", "IIT Roorkee", "IISc Bengaluru", "IIT Madras"],
    answer: 1, explanation: "IIT Roorkee deployed an upgraded seismic sensor network across the Garhwal Himalayan region for automated early warnings."
  },
  {
    id: "REC-Q-JUL-070", articleId: "REC-JUL-070", category: "Sports", topic: "Chess Championships",
    question: "Which Indian chess prodigy clinched the title at the FIDE World Junior Girls Chess Championship?",
    options: ["Koneru Humpy", "Harika Dronavalli", "Divya Deshmukh", "Vantika Agrawal"],
    answer: 2, explanation: "Divya Deshmukh won the FIDE World Junior Girls Chess Championship with a dominant performance."
  },
  {
    id: "REC-Q-JUL-071", articleId: "REC-JUL-071", category: "Science & Technology", topic: "Solar Missions",
    question: "ISRO released the first tranche of high-resolution scientific data collected by the VELC payload onboard which solar observation spacecraft?",
    options: ["Chandrayaan-3", "Aditya-L1", "Xosat", "ASTROSAT"],
    answer: 1, explanation: "ISRO published solar corona data from the Visible Emission Line Coronagraph (VELC) onboard Aditya-L1."
  },
  {
    id: "REC-Q-JUL-072", articleId: "REC-JUL-072", category: "Economy & Infrastructure", topic: "Startup Ecosystems",
    question: "The Ministry of Science and Technology inaugurated the National Deep Tech Startup Hub (NDTSH) in which city?",
    options: ["Bengaluru", "Hyderabad", "Pune", "Ahmedabad"],
    answer: 2, explanation: "The National Deep Tech Startup Hub (NDTSH) was inaugurated in Pune, Maharashtra, providing wet labs and computing clusters."
  },
  {
    id: "REC-Q-JUL-073", articleId: "REC-JUL-073", category: "International Affairs", topic: "Critical Minerals",
    question: "India and Japan signed a bilateral framework agreement in Tokyo to secure supply chains for:",
    options: ["Semiconductor silicon wafers", "Critical minerals and rare earth elements", "Green hydrogen transport containers", "Advanced nuclear fuel pellets"],
    answer: 1, explanation: "India and Japan signed a Critical Minerals Partnership agreement in Tokyo to facilitate joint exploration and processing of rare earths."
  },
  {
    id: "REC-Q-JUL-074", articleId: "REC-JUL-074", category: "Government Schemes", topic: "Mental Health Helplines",
    question: "What is the name of the national tele-mental health helpline that crossed 2 million counseling calls managed by the Ministry of Health?",
    options: ["MANAS-Care", "Tele-MANAS", "Sanjeevani Helpline", "Mind-Heal India"],
    answer: 1, explanation: "Tele-MANAS is the national tele-mental health helpline that crossed 2 million counseling calls across multilingual networks."
  },
  {
    id: "REC-Q-JUL-075", articleId: "REC-JUL-075", category: "National Affairs", topic: "Cyber Crime Justice",
    question: "The Supreme Court directed all state high courts and governments to establish specialized fast-track tribunals dedicated exclusively to:",
    options: ["Environmental compliance violations", "Online financial cyber fraud and identity theft", "Digital copyright piracy disputes", "Cryptocurrency tax evasion trials"],
    answer: 1, explanation: "The Supreme Court issued directives to establish fast-track tribunals dedicated exclusively to online financial cyber fraud cases."
  },
  {
    id: "REC-Q-JUL-076", articleId: "REC-JUL-076", category: "Economy & Infrastructure", topic: "Subsea Cables",
    question: "The high-speed Kochi-Lakshadweep Islands Subsea Fiber Connection (KLISFC) project delivers what level of bandwidth capacity to the islands?",
    options: ["10 Gbps", "40 Gbps", "100 Gbps", "1 Tbps"],
    answer: 2, explanation: "The KLISFC project delivers high-speed 100 Gbps bandwidth capacity to Kavaratti and outlying Lakshadweep islands."
  },
  {
    id: "REC-Q-JUL-077", articleId: "REC-JUL-077", category: "Environment", topic: "Coastal Restoration",
    question: "The Ministry of Environment launched the 'National Mangrove and Coral Reef Restoration Mission' with a dedicated corpus of how much?",
    options: ["₹100 Crore", "₹250 Crore", "₹500 Crore", "₹1,000 Crore"],
    answer: 2, explanation: "The mission committed a corpus of ₹500 crore to rejuvenate coastal bio-shields and coral reefs along Indian seaboards."
  },
  {
    id: "REC-Q-JUL-078", articleId: "REC-JUL-078", category: "Science & Technology", topic: "Biomaterials",
    question: "Researchers at which Indian Institute of Technology successfully synthesized high-strength biodegradable surgical threads from marine crustacean polysaccharides?",
    options: ["IIT Bombay", "IIT Madras", "IIT Hyderabad", "IIT Kharagpur"],
    answer: 2, explanation: "Engineers at IIT Hyderabad developed advanced biodegradable surgical sutures derived from marine polysaccharides."
  },
  {
    id: "REC-Q-JUL-079", articleId: "REC-JUL-079", category: "International Affairs", topic: "Developmental Aid",
    question: "India extended a dedicated Line of Credit to Sri Lanka to modernize and support which specific sector?",
    options: ["Cooperative dairy sector", "Railway signaling infrastructure", "Port container automation", "Textile export manufacturing"],
    answer: 0, explanation: "India disbursed a Line of Credit to Sri Lanka to assist its cooperative dairy sector in building processing plants and cold chains."
  },
  {
    id: "REC-Q-JUL-080", articleId: "REC-JUL-080", category: "Economy & Infrastructure", topic: "Energy Efficiency",
    question: "In the State Energy Efficiency Index released by NITI Aayog and BEE, which states emerged as the top-performing frontrunners?",
    options: ["Gujarat, Maharashtra, and Punjab", "Karnataka, Kerala, and Andhra Pradesh", "Tamil Nadu, Telangana, and Haryana", "Himachal Pradesh, Sikkim, and Goa"],
    answer: 1, explanation: "Karnataka, Kerala, and Andhra Pradesh emerged as the leading frontrunner states in implementing energy conservation measures."
  }
];

// 👉 PUSH DATA INTO GLOBAL ARRAYS
if (typeof hiddenRecallArticles !== 'undefined') {
  hiddenRecallArticles.push(...julRecallArticlesBatch4);
}
if (typeof recallQuestionPool !== 'undefined') {
  recallQuestionPool.push(...julRecallQuestionsBatch4);
}

/* ==========================================================================
   END OF JULY BATCH 4
   ========================================================================== */


/* ==========================================================================
   AUGUST 2026 - BATCH 5 (ITEMS 081 TO 100)
   ========================================================================== */

const augRecallArticlesBatch5 = [
  {
    id: "REC-AUG-081",
    date: "2026-08-16",
    month: "Aug 2026",
    category: "Art & Culture",
    title: "Akashvani Inaugurates Swar Prerna Veethika",
    summary: "Akashvani inaugurated the archival portrait gallery 'Swar Prerna Veethika' honoring 20 musical maestros.",
    whatHappened: "To commemorate its 90th anniversary, Akashvani inaugurated 'Swar Prerna Veethika', an archival portrait gallery dedicated to honoring 20 legendary musical maestros who shaped India's classical and contemporary audio heritage.",
    importantPoints: [
      "Inaugurated by Akashvani for its 90th anniversary.",
      "Archival portrait gallery named 'Swar Prerna Veethika'.",
      "Honors 20 legendary musical maestros."
    ],
    examFacts: ["Gallery Name: Swar Prerna Veethika", "Organization: Akashvani (All India Radio)", "Occasion: 90th Anniversary"],
    quickRemember: "Akashvani opened the 'Swar Prerna Veethika' gallery to honor 20 musical maestros.",
    audioText: "Akashvani inaugurated an archival portrait gallery named Swar Prerna Veethika to honor twenty legendary musical maestros.",
    source: "Prasar Bharati",
    importantFor: ["SSC CGL", "State PCS"]
  },
  {
    id: "REC-AUG-082",
    date: "2026-08-14",
    month: "Aug 2026",
    category: "Science & Technology",
    title: "Indian Tycoons Join AI for Good Global Commission",
    summary: "Mukesh Ambani, Sunil Bharti Mittal, and Lakshmi Mittal joined the ITU-Salesforce AI for Good Global Commission.",
    whatHappened: "Indian corporate leaders Mukesh Ambani, Sunil Bharti Mittal, and Lakshmi Mittal were inducted as founding commissioners of the ITU-Salesforce 'AI for Good Global Commission', focusing on equitable AI deployment for developing nations.",
    importantPoints: [
      "Joint initiative by the International Telecommunication Union (ITU) and Salesforce.",
      "Indian inductees: Mukesh Ambani, Sunil Bharti Mittal, and Lakshmi Mittal.",
      "Focuses on ethical and equitable AI governance."
    ],
    examFacts: ["Commission: AI for Good Global Commission", "Key Bodies: ITU and Salesforce"],
    quickRemember: "Mukesh Ambani and Sunil Bharti Mittal joined the ITU-Salesforce 'AI for Good Global Commission'.",
    audioText: "Leading Indian industrialists joined the ITU-Salesforce AI for Good Global Commission to guide equitable AI deployment.",
    source: "ITU",
    importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-AUG-083",
    date: "2026-08-14",
    month: "Aug 2026",
    category: "Economy & Infrastructure",
    title: "Kamarajar Port Achieves 18-Metre Draft",
    summary: "Kamarajar Port in Ennore became India’s second major port capable of handling 170,000 DWT Capesize vessels.",
    whatHappened: "Kamarajar Port in Ennore, Tamil Nadu, officially achieved an 18-metre draft, making it only the second major port in India capable of handling fully loaded 170,000 Deadweight Tonnage (DWT) Capesize vessels.",
    importantPoints: [
      "Achieved an 18-metre navigational draft.",
      "Located in Ennore, Tamil Nadu.",
      "Can now handle 170,000 DWT Capesize cargo vessels."
    ],
    examFacts: ["Port: Kamarajar Port (Ennore)", "Milestone: 18-Metre Draft", "Capacity: 170,000 DWT Capesize"],
    quickRemember: "Kamarajar Port (Ennore) reached an 18-metre draft, becoming India's second port to handle Capesize vessels.",
    audioText: "Kamarajar Port in Tamil Nadu achieved an 18-metre draft, allowing it to handle massive Capesize vessels.",
    source: "Ministry of Ports, Shipping and Waterways",
    importantFor: ["SSC CGL", "CDS"]
  },
  {
    id: "REC-AUG-084",
    date: "2026-08-12",
    month: "Aug 2026",
    category: "Health & Infrastructure",
    title: "Navi Mumbai Airport Notified as Drug Import Hub",
    summary: "Navi Mumbai International Airport was notified as India's 42nd designated drug import hub under Rule 43A.",
    whatHappened: "The Central Drugs Standard Control Organisation (CDSCO) notified the newly constructed Navi Mumbai International Airport under Rule 43A of the Drugs Rules as India's 42nd designated hub for pharmaceutical and drug importation.",
    importantPoints: [
      "Notified under Rule 43A of the Drugs Rules.",
      "Designated as the 42nd drug import hub in India.",
      "Aims to decongest Mumbai's primary air cargo terminal."
    ],
    examFacts: ["Facility: Navi Mumbai International Airport", "Designation: 42nd Drug Import Hub", "Rule: Rule 43A of Drugs Rules"],
    quickRemember: "Navi Mumbai International Airport is India's 42nd designated hub for drug importation.",
    audioText: "Navi Mumbai International Airport was officially notified as India's forty-second designated hub for importing pharmaceutical drugs.",
    source: "CDSCO",
    importantFor: ["SSC CGL", "State PCS"]
  },
  {
    id: "REC-AUG-085",
    date: "2026-08-11",
    month: "Aug 2026",
    category: "National Affairs",
    title: "Central Vista Renamed to Kartavya Bhawan Area",
    summary: "The Central Vista redevelopment zone in New Delhi was formally redesignated as the Kartavya Bhawan Area.",
    whatHappened: "Following the opening of the new Parliament building and secretariats, the Union Government formally redesignated the entire Central Vista redevelopment area in New Delhi as the 'Kartavya Bhawan Area'.",
    importantPoints: [
      "Redesignation of the Central Vista redevelopment project area.",
      "New Name: Kartavya Bhawan Area.",
      "Aligns with the earlier renaming of Rajpath to Kartavya Path."
    ],
    examFacts: ["Old Name: Central Vista Area", "New Name: Kartavya Bhawan Area", "Location: New Delhi"],
    quickRemember: "The Central Vista redevelopment area was officially renamed the Kartavya Bhawan Area.",
    audioText: "The Central Vista redevelopment zone in New Delhi was officially renamed as the Kartavya Bhawan Area.",
    source: "MoHUA",
    importantFor: ["SSC CGL", "UPSC", "SSC CHSL"]
  },
  {
    id: "REC-AUG-086",
    date: "2026-08-10",
    month: "Aug 2026",
    category: "International Affairs",
    title: "India Launches UNSC Bid Under 'SHANTI' Framework",
    summary: "External Affairs Minister S. Jaishankar launched India's campaign for a non-permanent UNSC seat under the SHANTI framework.",
    whatHappened: "External Affairs Minister S. Jaishankar officially launched India's campaign for a non-permanent seat on the UN Security Council for the 2028-29 term. The campaign is centered around the 'SHANTI' (Security, Heritage, Alliance, Neutrality, Technology, Inclusion) framework.",
    importantPoints: [
      "Campaign for a non-permanent UNSC seat for the 2028-29 term.",
      "Framework acronym: SHANTI.",
      "Stands for Security, Heritage, Alliance, Neutrality, Technology, Inclusion."
    ],
    examFacts: ["Term: 2028-29 UNSC Non-Permanent Seat", "Campaign Framework: SHANTI"],
    quickRemember: "India is campaigning for the 2028-29 UNSC non-permanent seat using the SHANTI framework.",
    audioText: "India launched its campaign for a non-permanent UN Security Council seat for 2028-29 under the SHANTI framework.",
    source: "Ministry of External Affairs",
    importantFor: ["UPSC", "CDS", "SSC CGL"]
  },
  {
    id: "REC-AUG-087",
    date: "2026-08-09",
    month: "Aug 2026",
    category: "Economy & Infrastructure",
    title: "Gujarat Installs SCADA-Controlled Rubber Dams",
    summary: "Gujarat commenced work on SCADA-controlled inflatable rubber dams on the Heran and Ambika rivers.",
    whatHappened: "To optimize water conservation and prevent seasonal flooding, Gujarat started installing innovative SCADA-controlled inflatable rubber dams across the Heran and Ambika rivers, replacing traditional concrete check dams.",
    importantPoints: [
      "Inflatable rubber dams controlled via SCADA technology.",
      "Installed on the Heran and Ambika rivers.",
      "Improves water retention and reduces sedimentation issues."
    ],
    examFacts: ["Technology: SCADA-controlled rubber dams", "Rivers: Heran and Ambika", "State: Gujarat"],
    quickRemember: "Gujarat is building SCADA-controlled inflatable rubber dams on the Heran and Ambika rivers.",
    audioText: "Gujarat began installing advanced inflatable rubber dams on the Heran and Ambika rivers for better water conservation.",
    source: "Gujarat Water Resources Dept",
    importantFor: ["SSC CGL", "State PCS"]
  },
  {
    id: "REC-AUG-088",
    date: "2026-08-08",
    month: "Aug 2026",
    category: "Government Schemes",
    title: "UP Launches Mahila Udyam Nidhi",
    summary: "Uttar Pradesh introduced the Mahila Udyam Nidhi scheme offering micro-loans up to ₹10 lakh for women entrepreneurs.",
    whatHappened: "The Uttar Pradesh government launched the 'Mahila Udyam Nidhi' scheme to foster female entrepreneurship. The initiative provides collateral-free, low-interest micro-loans ranging from ₹50,000 to ₹10 lakh to women starting MSME ventures.",
    importantPoints: [
      "Provides collateral-free micro-loans for women entrepreneurs.",
      "Loan range: ₹50,000 to ₹10 lakh.",
      "Launched by the Uttar Pradesh state government."
    ],
    examFacts: ["Scheme: Mahila Udyam Nidhi", "Target Group: Women Entrepreneurs", "Max Loan: ₹10 lakh"],
    quickRemember: "UP's Mahila Udyam Nidhi scheme offers women entrepreneurs collateral-free loans up to ₹10 lakh.",
    audioText: "Uttar Pradesh introduced the Mahila Udyam Nidhi scheme to provide micro-loans up to ten lakh rupees for women entrepreneurs.",
    source: "UP MSME Department",
    importantFor: ["SSC CGL", "State PCS"]
  },
  {
    id: "REC-AUG-089",
    date: "2026-08-07",
    month: "Aug 2026",
    category: "Science & Education",
    title: "India's First AI University Announced for Bengaluru",
    summary: "Karnataka announced the establishment of India's first state-supported AI University in Bengaluru.",
    whatHappened: "The Karnataka State Government announced plans to establish India's first state-supported Artificial Intelligence University in Bengaluru. The campus will be powered by twin green data centres and focus on generative AI, robotics, and quantum computing.",
    importantPoints: [
      "India's first state-supported AI University.",
      "To be established in Bengaluru, Karnataka.",
      "Will feature twin green data centres for sustainable computing."
    ],
    examFacts: ["Institution: India's first AI University", "City: Bengaluru", "State: Karnataka"],
    quickRemember: "India's first state-supported Artificial Intelligence University is being built in Bengaluru.",
    audioText: "Karnataka announced the creation of India's first state-supported Artificial Intelligence University in Bengaluru.",
    source: "Karnataka IT Ministry",
    importantFor: ["SSC CGL", "SSC CHSL"]
  },
  {
    id: "REC-AUG-090",
    date: "2026-08-07",
    month: "Aug 2026",
    category: "National Affairs",
    title: "Uttarakhand Becomes India's Sixth Fully Literate State",
    summary: "Uttarakhand surpassed 98.7% adult literacy, achieving designation as India’s sixth fully literate state.",
    whatHappened: "Through the successful implementation of the ULLAS adult education scheme, Uttarakhand surpassed a 98.7% adult literacy rate, officially earning the designation as India’s sixth fully literate state.",
    importantPoints: [
      "Achieved an adult literacy rate exceeding 98.7%.",
      "Became India's sixth fully literate state.",
      "Driven by the central ULLAS (Nav Bharat Saksharta Karyakram) program."
    ],
    examFacts: ["State: Uttarakhand", "Milestone: 6th Fully Literate State", "Scheme: ULLAS"],
    quickRemember: "Uttarakhand is officially India's sixth fully literate state with over 98.7% adult literacy.",
    audioText: "Uttarakhand achieved an adult literacy rate above 98.7 percent, making it India's sixth fully literate state.",
    source: "Ministry of Education",
    importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-AUG-091",
    date: "2026-08-06",
    month: "Aug 2026",
    category: "Environment",
    title: "Killai Designated as Climate-Resilient Village",
    summary: "Killai village in Tamil Nadu was commissioned as a model cyclone- and sea-level-resilient rural settlement.",
    whatHappened: "Killai village in the Cuddalore district of Tamil Nadu was formally commissioned as a model climate-resilient village. It features stilt-housing, elevated fresh-water banks, and extensive mangrove buffers to withstand cyclones and rising sea levels.",
    importantPoints: [
      "Designated as a model climate-resilient village.",
      "Location: Killai village, Cuddalore district, Tamil Nadu.",
      "Features mangrove buffers and elevated infrastructure."
    ],
    examFacts: ["Village: Killai", "District: Cuddalore, Tamil Nadu", "Focus: Cyclone & Sea-level Resilience"],
    quickRemember: "Killai village in Cuddalore, Tamil Nadu, is India's new model climate-resilient village.",
    audioText: "Killai village in Tamil Nadu's Cuddalore district was commissioned as a model climate-resilient coastal settlement.",
    source: "MoEFCC",
    importantFor: ["SSC CGL", "State PCS"]
  },
  {
    id: "REC-AUG-092",
    date: "2026-08-05",
    month: "Aug 2026",
    category: "Government Schemes",
    title: "Mission Golden Spice Launched in Meghalaya",
    summary: "DoNER launched 'Mission Golden Spice' to expand Meghalaya’s high-curcumin Lakadong turmeric cultivation.",
    whatHappened: "The Ministry of Development of North Eastern Region (DoNER) launched 'Mission Golden Spice' with a ₹175.45 crore outlay. The program aims to scale up the cultivation and global export of Meghalaya’s GI-tagged Lakadong turmeric, famous for its high curcumin content.",
    importantPoints: [
      "Launched by the Ministry of DoNER.",
      "Outlay of ₹175.45 crore.",
      "Focuses on Meghalaya’s GI-tagged Lakadong turmeric."
    ],
    examFacts: ["Mission: Mission Golden Spice", "Crop: Lakadong Turmeric", "State: Meghalaya"],
    quickRemember: "Mission Golden Spice promotes Meghalaya's Lakadong turmeric cultivation.",
    audioText: "The Ministry of DoNER launched Mission Golden Spice to boost the cultivation and export of Meghalaya's Lakadong turmeric.",
    source: "Ministry of DoNER",
    importantFor: ["SSC CGL", "SSC CHSL"]
  },
  {
    id: "REC-AUG-093",
    date: "2026-08-04",
    month: "Aug 2026",
    category: "Economy",
    title: "India's External Debt Reaches $762.8 Billion",
    summary: "The RBI reported that India's total external debt stood at $762.8 billion at the close of FY26.",
    whatHappened: "The Reserve Bank of India's annual data release indicated that India's total external debt stood at $762.8 billion at the end of the financial year 2025-26. This represents a safe and sustainable ratio of 20.8% of the national GDP.",
    importantPoints: [
      "Total external debt: $762.8 billion.",
      "Represents 20.8% of India's GDP.",
      "Reported at the close of FY26."
    ],
    examFacts: ["External Debt: $762.8 billion", "Debt-to-GDP Ratio: 20.8%", "Source: RBI"],
    quickRemember: "India's external debt at the close of FY26 was $762.8 billion (20.8% of GDP).",
    audioText: "The Reserve Bank of India reported that the nation's total external debt stood at 762.8 billion dollars at the end of the fiscal year.",
    source: "RBI",
    importantFor: ["SSC CGL", "UPSC", "CDS"]
  },
  {
    id: "REC-AUG-094",
    date: "2026-08-04",
    month: "Aug 2026",
    category: "Economy",
    title: "ADB Funds Northeast Bamboo Sector",
    summary: "The Asian Development Bank sanctioned a $42.2 million credit facility for northeastern bamboo clusters.",
    whatHappened: "The Asian Development Bank (ADB) sanctioned a $42.2 million sovereign-backed credit facility to finance modern harvesting techniques, treatment plants, and value-addition infrastructure across bamboo clusters in India's Northeast.",
    importantPoints: [
      "Sanctioned by the Asian Development Bank (ADB).",
      "Loan amount: $42.2 million.",
      "Targeted at bamboo processing and value-addition in the Northeast."
    ],
    examFacts: ["Funder: Asian Development Bank (ADB)", "Amount: $42.2 million", "Sector: Bamboo Clusters (Northeast)"],
    quickRemember: "ADB provided a $42.2 million loan for bamboo sector development in Northeast India.",
    audioText: "The Asian Development Bank approved a 42.2 million dollar credit facility to upgrade bamboo clusters in northeastern India.",
    source: "Ministry of Finance / ADB",
    importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-AUG-095",
    date: "2026-08-03",
    month: "Aug 2026",
    category: "Economy",
    title: "RBI Revamps Integrated Ombudsman Mechanism",
    summary: "The RBI upgraded its ombudsman system, raising maximum compensation awards to ₹30 lakh.",
    whatHappened: "The Reserve Bank of India implemented a revamped single-window Integrated Ombudsman mechanism. The new guidelines raised the maximum compensation for verifiable financial loss to ₹30 lakh and harassment compensation to ₹3 lakh.",
    importantPoints: [
      "Maximum compensation for financial loss increased to ₹30 lakh.",
      "Compensation for harassment raised to ₹3 lakh.",
      "Operates as a unified single-window resolution system."
    ],
    examFacts: ["Max Financial Loss Compensation: ₹30 Lakh", "Harassment Compensation: ₹3 Lakh", "Regulator: RBI"],
    quickRemember: "The RBI Integrated Ombudsman now offers up to ₹30 lakh compensation for financial loss.",
    audioText: "The Reserve Bank of India upgraded its Integrated Ombudsman scheme, raising the maximum compensation for financial loss to thirty lakh rupees.",
    source: "RBI",
    importantFor: ["SSC CGL", "Bank PO"]
  },
  {
    id: "REC-AUG-096",
    date: "2026-08-03",
    month: "Aug 2026",
    category: "Economy",
    title: "Cross-Border FX UPI Rails Deployed",
    summary: "NPCI partnered with HSBC and J.P. Morgan to deploy instant currency conversion for international UPI.",
    whatHappened: "The National Payments Corporation of India (NPCI), in collaboration with HSBC India and J.P. Morgan Payments, successfully deployed instant cross-border foreign exchange (FX) conversion rails for international UPI transfers.",
    importantPoints: [
      "Enables instant currency conversion for international UPI payments.",
      "Partnership between NPCI, HSBC India, and J.P. Morgan Payments.",
      "Reduces settlement time for cross-border remittances."
    ],
    examFacts: ["Technology: Cross-Border FX UPI", "Partners: NPCI, HSBC India, J.P. Morgan Payments"],
    quickRemember: "NPCI partnered with HSBC and J.P. Morgan to enable instant FX conversion for international UPI.",
    audioText: "NPCI teamed up with HSBC India and J.P. Morgan to launch instant foreign exchange conversion for international UPI transactions.",
    source: "NPCI",
    importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-AUG-097",
    date: "2026-08-02",
    month: "Aug 2026",
    category: "Economy",
    title: "MoSPI Publishes Inaugural Services Production Index",
    summary: "MoSPI launched the monthly Index of Services Production (ISP) with a base year of 2024-25.",
    whatHappened: "The Ministry of Statistics and Programme Implementation (MoSPI) published its inaugural monthly Index of Services Production (ISP). The index uses 2024-25 as the base year and tracks short-term growth across 19 formal service sub-sectors.",
    importantPoints: [
      "Tracks short-term growth in the services sector.",
      "Published by MoSPI.",
      "Base year set at 2024-25."
    ],
    examFacts: ["Index: Index of Services Production (ISP)", "Publisher: MoSPI", "Base Year: 2024-25"],
    quickRemember: "MoSPI launched the Index of Services Production (ISP) with 2024-25 as the base year.",
    audioText: "The Ministry of Statistics launched the Index of Services Production to track growth across the services sector with a base year of 2024-25.",
    source: "MoSPI",
    importantFor: ["SSC CGL", "UPSC", "SSC CHSL"]
  },
  {
    id: "REC-AUG-098",
    date: "2026-08-02",
    month: "Aug 2026",
    category: "Economy & Trade",
    title: "DGFT Bans Forced-Labour Imports",
    summary: "The DGFT formally barred the import of goods produced using forced or bonded labour.",
    whatHappened: "The Directorate General of Foreign Trade (DGFT) inserted Paragraph 2.20B into the Foreign Trade Policy, legally barring the importation of any goods produced entirely or in part using forced, indentured, or bonded labour.",
    importantPoints: [
      "Bans imports of goods made with forced or bonded labour.",
      "Enforced by inserting Paragraph 2.20B into the Foreign Trade Policy.",
      "Aligns India with global ethical supply chain standards."
    ],
    examFacts: ["Agency: Directorate General of Foreign Trade (DGFT)", "Provision: Paragraph 2.20B of FTP", "Ban: Forced-labour imports"],
    quickRemember: "DGFT added Paragraph 2.20B to the Foreign Trade Policy to ban forced-labour imports.",
    audioText: "The Directorate General of Foreign Trade legally barred the import of goods produced using forced or bonded labour.",
    source: "Ministry of Commerce",
    importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-AUG-099",
    date: "2026-08-01",
    month: "Aug 2026",
    category: "Economy",
    title: "Government Recalibrates Windfall Tax on Fuel Exports",
    summary: "The government increased the windfall export duty on diesel to ₹15.50 per litre amid rising crude prices.",
    whatHappened: "In response to spiking global crude oil benchmarks, the central government recalibrated the Special Additional Excise Duty (windfall tax). Export duties on diesel were raised to ₹15.50 per litre, and aviation turbine fuel (ATF) was set at ₹14.50 per litre.",
    importantPoints: [
      "Windfall tax recalibrated due to high global crude prices.",
      "Diesel export duty raised to ₹15.50 per litre.",
      "Aviation fuel export duty set at ₹14.50 per litre."
    ],
    examFacts: ["Tax Type: Special Additional Excise Duty (Windfall Tax)", "Diesel Duty: ₹15.50/litre", "ATF Duty: ₹14.50/litre"],
    quickRemember: "Windfall tax on diesel exports was raised to ₹15.50 per litre.",
    audioText: "The government increased the windfall export duty on diesel to 15 rupees and 50 paise per litre amid rising global crude prices.",
    source: "Ministry of Finance",
    importantFor: ["SSC CGL"]
  },
  {
    id: "REC-AUG-100",
    date: "2026-08-01",
    month: "Aug 2026",
    category: "Economy & Technology",
    title: "NPCI Develops Offline NFC UPI Payments",
    summary: "NPCI completed offline contactless tap-to-pay functionality for UPI Lite up to ₹2,000.",
    whatHappened: "The National Payments Corporation of India (NPCI) completed the development and testing of offline contactless Near Field Communication (NFC) tap-to-pay functionality on standard POS terminals for UPI Lite transactions up to ₹2,000.",
    importantPoints: [
      "Enables offline tap-to-pay via NFC technology.",
      "Powered through the UPI Lite framework.",
      "Maximum transaction limit set at ₹2,000."
    ],
    examFacts: ["Organization: NPCI", "Technology: NFC (Near Field Communication)", "Transaction Limit: ₹2,000"],
    quickRemember: "NPCI enabled offline NFC tap-to-pay for UPI Lite transactions up to ₹2,000.",
    audioText: "NPCI successfully developed offline tap-to-pay functionality for UPI Lite transactions up to two thousand rupees.",
    source: "NPCI",
    importantFor: ["SSC CGL", "Bank PO"]
  }
];

const augRecallQuestionsBatch5 = [
  {
    id: "REC-Q-AUG-081",
    articleId: "REC-AUG-081",
    category: "Art & Culture",
    topic: "Broadcasting Heritage",
    question: "What is the name of the archival portrait gallery inaugurated by Akashvani to honor 20 legendary musical maestros?",
    options: ["Sur Sangam", "Swar Prerna Veethika", "Kala Darshan", "Sangeet Smriti"],
    answer: 1,
    explanation: "Akashvani (All India Radio) inaugurated 'Swar Prerna Veethika' to commemorate its 90th anniversary and honor India's musical legends."
  },
  {
    id: "REC-Q-AUG-082",
    articleId: "REC-AUG-082",
    category: "Science & Technology",
    topic: "Global AI Governance",
    question: "Which Indian telecom and business leader joined the ITU-Salesforce 'AI for Good Global Commission' along with Mukesh Ambani?",
    options: ["Ratan Tata", "Sunil Bharti Mittal", "Azim Premji", "Kumar Mangalam Birla"],
    answer: 1,
    explanation: "Sunil Bharti Mittal, Mukesh Ambani, and Lakshmi Mittal were inducted as founding commissioners to guide equitable AI deployment."
  },
  {
    id: "REC-Q-AUG-083",
    articleId: "REC-AUG-083",
    category: "Economy & Infrastructure",
    topic: "Maritime Infrastructure",
    question: "Which major Indian port became the second in the country capable of handling 170,000 DWT Capesize vessels by achieving an 18-metre draft?",
    options: ["Jawaharlal Nehru Port", "Deendayal Port", "Kamarajar Port", "Paradip Port"],
    answer: 2,
    explanation: "Kamarajar Port in Ennore, Tamil Nadu, achieved an 18-metre draft, allowing it to handle fully loaded Capesize vessels."
  },
  {
    id: "REC-Q-AUG-084",
    articleId: "REC-AUG-084",
    category: "Health & Infrastructure",
    topic: "Pharmaceutical Logistics",
    question: "Which newly developed international airport was notified as India's 42nd designated drug import hub under Rule 43A of the Drugs Rules?",
    options: ["Mopa International Airport", "Navi Mumbai International Airport", "Noida International Airport", "Rajiv Gandhi International Airport"],
    answer: 1,
    explanation: "The CDSCO designated the Navi Mumbai International Airport as a hub for pharmaceutical importation to decongest existing air cargo routes."
  },
  {
    id: "REC-Q-AUG-085",
    articleId: "REC-AUG-085",
    category: "National Affairs",
    topic: "Urban Redevelopment",
    question: "The Central Vista redevelopment area in New Delhi was formally redesignated by the Union Government as the:",
    options: ["Bharat Bhawan Area", "Kartavya Bhawan Area", "Amrit Bhawan Area", "Sankalp Bhawan Area"],
    answer: 1,
    explanation: "Aligning with the renaming of Rajpath, the Central Vista zone was formally renamed the 'Kartavya Bhawan Area'."
  },
  {
    id: "REC-Q-AUG-086",
    articleId: "REC-AUG-086",
    category: "International Affairs",
    topic: "United Nations Diplomacy",
    question: "Under which thematic framework did EAM S. Jaishankar launch India's campaign for a non-permanent UN Security Council seat for the 2028-29 term?",
    options: ["PRAGATI", "SANKALP", "SHANTI", "SURAKSHA"],
    answer: 2,
    explanation: "The campaign was launched under the 'SHANTI' framework (Security, Heritage, Alliance, Neutrality, Technology, Inclusion)."
  },
  {
    id: "REC-Q-AUG-087",
    articleId: "REC-AUG-087",
    category: "Economy & Infrastructure",
    topic: "Water Conservation",
    question: "Gujarat commenced the installation of SCADA-controlled inflatable rubber dams on which two rivers?",
    options: ["Narmada and Tapti", "Sabarmati and Mahi", "Heran and Ambika", "Bhadar and Shetrunji"],
    answer: 2,
    explanation: "To optimize water retention and prevent flooding, Gujarat began installing rubber dams on the Heran and Ambika rivers."
  },
  {
    id: "REC-Q-AUG-088",
    articleId: "REC-AUG-088",
    category: "Government Schemes",
    topic: "Women Entrepreneurship",
    question: "Which state introduced the 'Mahila Udyam Nidhi' scheme providing low-interest micro-loans up to ₹10 lakh for women entrepreneurs?",
    options: ["Madhya Pradesh", "Bihar", "Uttar Pradesh", "Rajasthan"],
    answer: 2,
    explanation: "Uttar Pradesh launched the Mahila Udyam Nidhi to offer collateral-free loans from ₹50,000 to ₹10 lakh to foster female MSME ventures."
  },
  {
    id: "REC-Q-AUG-089",
    articleId: "REC-AUG-089",
    category: "Science & Education",
    topic: "Digital Universities",
    question: "Which state announced the establishment of India's first state-supported Artificial Intelligence University in Bengaluru?",
    options: ["Telangana", "Karnataka", "Maharashtra", "Tamil Nadu"],
    answer: 1,
    explanation: "The Karnataka government announced plans for an AI University in Bengaluru powered by twin green data centres."
  },
  {
    id: "REC-Q-AUG-090",
    articleId: "REC-AUG-090",
    category: "National Affairs",
    topic: "Literacy Milestones",
    question: "Which state surpassed 98.7% adult literacy in August 2026 to be officially designated as India's sixth fully literate state?",
    options: ["Himachal Pradesh", "Uttarakhand", "Sikkim", "Goa"],
    answer: 1,
    explanation: "Driven by the ULLAS adult education scheme, Uttarakhand crossed the 98.7% threshold to become the sixth fully literate state."
  },
  {
    id: "REC-Q-AUG-091",
    articleId: "REC-AUG-091",
    category: "Environment",
    topic: "Climate Resilience",
    question: "Killai village, recently commissioned as a model cyclone- and sea-level-resilient rural settlement, is located in which state?",
    options: ["Odisha", "Andhra Pradesh", "Tamil Nadu", "Kerala"],
    answer: 2,
    explanation: "Killai village in the Cuddalore district of Tamil Nadu features stilt-housing and mangrove buffers to withstand climate impacts."
  },
  {
    id: "REC-Q-AUG-092",
    articleId: "REC-AUG-092",
    category: "Government Schemes",
    topic: "Agriculture Export",
    question: "'Mission Golden Spice', launched by the Ministry of DoNER, is aimed at expanding the cultivation of which GI-tagged crop in Meghalaya?",
    options: ["Bhut Jolokia", "Lakadong Turmeric", "Kaji Nemu", "Naga Mircha"],
    answer: 1,
    explanation: "Mission Golden Spice focuses on scaling up the cultivation and export of Meghalaya’s high-curcumin Lakadong turmeric."
  },
  {
    id: "REC-Q-AUG-093",
    articleId: "REC-AUG-093",
    category: "Economy",
    topic: "Macroeconomic Indicators",
    question: "According to the RBI report released in August 2026, what was India's total external debt at the close of FY26?",
    options: ["$650.5 billion", "$700.2 billion", "$762.8 billion", "$810.4 billion"],
    answer: 2,
    explanation: "India's total external debt stood at $762.8 billion at the end of FY26, representing 20.8% of the national GDP."
  },
  {
    id: "REC-Q-AUG-094",
    articleId: "REC-AUG-094",
    category: "Economy",
    topic: "Multilateral Funding",
    question: "Which international financial institution sanctioned a $42.2 million credit facility to upgrade bamboo clusters in northeastern India?",
    options: ["World Bank", "Asian Development Bank (ADB)", "New Development Bank (NDB)", "International Monetary Fund (IMF)"],
    answer: 1,
    explanation: "The Asian Development Bank (ADB) provided the sovereign-backed loan to finance bamboo harvesting and value-addition infrastructure."
  },
  {
    id: "REC-Q-AUG-095",
    articleId: "REC-AUG-095",
    category: "Economy",
    topic: "Banking Regulations",
    question: "Under the revamped RBI Integrated Ombudsman mechanism, what is the maximum compensation award allowed for verifiable financial loss?",
    options: ["₹10 lakh", "₹20 lakh", "₹30 lakh", "₹50 lakh"],
    answer: 2,
    explanation: "The RBI raised the maximum compensation for financial loss to ₹30 lakh, while harassment compensation was set at ₹3 lakh."
  },
  {
    id: "REC-Q-AUG-096",
    articleId: "REC-AUG-096",
    category: "Economy",
    topic: "Digital Payments",
    question: "Which two global banking majors partnered with NPCI to deploy instant cross-border currency conversion rails for international UPI transfers?",
    options: ["Citibank and Standard Chartered", "HSBC India and J.P. Morgan Payments", "Barclays and Deutsche Bank", "Wells Fargo and BNP Paribas"],
    answer: 1,
    explanation: "NPCI collaborated with HSBC India and J.P. Morgan Payments to enable instant FX conversion for global UPI remittances."
  },
  {
    id: "REC-Q-AUG-097",
    articleId: "REC-AUG-097",
    category: "Economy",
    topic: "Macroeconomic Indices",
    question: "The Ministry of Statistics and Programme Implementation (MoSPI) published its inaugural monthly Index of Services Production (ISP) with which base year?",
    options: ["2011-12", "2018-19", "2021-22", "2024-25"],
    answer: 3,
    explanation: "The newly launched Index of Services Production (ISP) uses 2024-25 as its base year to track 19 formal service sub-sectors."
  },
  {
    id: "REC-Q-AUG-098",
    articleId: "REC-AUG-098",
    category: "Economy & Trade",
    topic: "Foreign Trade Policy",
    question: "The Directorate General of Foreign Trade (DGFT) formally barred the import of goods produced using forced or bonded labour by inserting which paragraph into the Foreign Trade Policy?",
    options: ["Paragraph 1.10A", "Paragraph 2.20B", "Paragraph 3.15C", "Paragraph 4.05D"],
    answer: 1,
    explanation: "DGFT inserted Paragraph 2.20B into the Foreign Trade Policy to ban the importation of goods made with forced or indentured labour."
  },
  {
    id: "REC-Q-AUG-099",
    articleId: "REC-AUG-099",
    category: "Economy",
    topic: "Taxation",
    question: "Amid global crude price spikes, the government recalibrated the windfall export duty on diesel to what amount per litre?",
    options: ["₹10.50", "₹12.00", "₹15.50", "₹18.00"],
    answer: 2,
    explanation: "The Special Additional Excise Duty (windfall tax) on diesel exports was raised to ₹15.50 per litre."
  },
  {
    id: "REC-Q-AUG-100",
    articleId: "REC-AUG-100",
    category: "Economy & Technology",
    topic: "Fintech",
    question: "NPCI developed offline contactless NFC tap-to-pay functionality on POS terminals for UPI Lite transactions up to what maximum limit?",
    options: ["₹500", "₹1,000", "₹2,000", "₹5,000"],
    answer: 2,
    explanation: "The offline NFC tap-to-pay feature for UPI Lite is capped at a maximum transaction limit of ₹2,000."
  }
];

// 👉 PUSH BATCH 5 DATA INTO GLOBAL ARRAYS
if (typeof hiddenRecallArticles !== 'undefined') {
  hiddenRecallArticles.push(...augRecallArticlesBatch5);
}
if (typeof recallQuestionPool !== 'undefined') {
  recallQuestionPool.push(...augRecallQuestionsBatch5);
}

/* ==========================================================================
   END OF AUGUST BATCH 5
   ========================================================================== */

/* ==========================================================================
   AUGUST 2026 - BATCH 6 (ITEMS 101 TO 120)
   ========================================================================== */

const augRecallArticlesBatch6 = [
  {
    id: "REC-AUG-101",
    date: "2026-08-20",
    month: "Aug 2026",
    category: "Economy & Trade",
    title: "High-Seas Fishing LoA Regime Simplified",
    summary: "The government simplified Letter of Authorisation rules for deep-sea vessels in India's EEZ.",
    whatHappened: "The Government of India streamlined the Letter of Authorisation (LoA) regime for deep-sea fishing vessels operating across India's 24 lakh sq. km Exclusive Economic Zone (EEZ), boosting the marine export sector.",
    importantPoints: [
      "Simplified the Letter of Authorisation (LoA) framework.",
      "Applies to deep-sea fishing vessels in India's Exclusive Economic Zone (EEZ).",
      "EEZ spans 24 lakh sq. km."
    ],
    examFacts: ["Policy: LoA Regime", "Sector: Deep-Sea Fishing", "EEZ Area: 24 Lakh sq. km"],
    quickRemember: "India simplified the LoA regime for deep-sea fishing vessels in its 24 lakh sq. km EEZ.",
    audioText: "The Indian government simplified the Letter of Authorisation rules for deep-sea fishing vessels operating within its Exclusive Economic Zone.",
    source: "Ministry of Fisheries",
    importantFor: ["SSC CGL", "State PCS"]
  },
  {
    id: "REC-AUG-102",
    date: "2026-08-21",
    month: "Aug 2026",
    category: "International Affairs",
    title: "India Ratifies WTO Fisheries Subsidies Agreement",
    summary: "India deposited its Instrument of Acceptance, becoming the 123rd member to ratify the WTO Agreement on Fisheries Subsidies.",
    whatHappened: "India formally deposited its Instrument of Acceptance in Geneva, becoming the 123rd member to ratify the WTO Agreement on Fisheries Subsidies. The agreement aims to curb harmful subsidies driving overfishing and illegal fishing.",
    importantPoints: [
      "India became the 123rd member to ratify the agreement.",
      "Aims to curb subsidies that contribute to illegal, unreported, and unregulated (IUU) fishing.",
      "Instrument of Acceptance deposited at the WTO."
    ],
    examFacts: ["Agreement: WTO Fisheries Subsidies", "India's Order: 123rd Member to ratify"],
    quickRemember: "India became the 123rd nation to ratify the WTO Agreement on Fisheries Subsidies.",
    audioText: "India deposited its Instrument of Acceptance to become the 123rd member to ratify the WTO Agreement on Fisheries Subsidies.",
    source: "WTO",
    importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-AUG-103",
    date: "2026-08-22",
    month: "Aug 2026",
    category: "Economy & Infrastructure",
    title: "NITI Aayog Releases National Bioeconomy Roadmap",
    summary: "NITI Aayog released a 10-year master plan to expand India’s biotechnology sector to $691 billion by 2035.",
    whatHappened: "NITI Aayog released a comprehensive 10-year master plan to expand India’s bioeconomy sector to $691 billion by 2035. The roadmap is supported by a proposed ₹50,000 crore Growth Fund focusing on biomanufacturing and synthetic biology.",
    importantPoints: [
      "Target: $691 billion bioeconomy by 2035.",
      "Proposed a ₹50,000 crore Growth Fund.",
      "Focuses on biomanufacturing and synthetic biology."
    ],
    examFacts: ["Target Value: $691 Billion by 2035", "Growth Fund: ₹50,000 Crore", "Agency: NITI Aayog"],
    quickRemember: "NITI Aayog aims for a $691 billion bioeconomy by 2035 with a ₹50,000 crore Growth Fund.",
    audioText: "NITI Aayog released a ten-year National Bioeconomy Roadmap, targeting a 691 billion dollar sector by 2035.",
    source: "NITI Aayog",
    importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-AUG-104",
    date: "2026-08-22",
    month: "Aug 2026",
    category: "Science & Technology",
    title: "World's First Nuclear Hydrogen Facility at IGCAR",
    summary: "India commissioned the world’s first nuclear process heat hydrogen facility at Kalpakkam.",
    whatHappened: "India achieved a major scientific milestone by commissioning the world’s first nuclear process heat hydrogen generation facility at the Indira Gandhi Centre for Atomic Research (IGCAR) in Kalpakkam, Tamil Nadu.",
    importantPoints: [
      "World’s first nuclear process heat hydrogen generation facility.",
      "Located at IGCAR in Kalpakkam, Tamil Nadu.",
      "Advances clean green hydrogen production using nuclear heat."
    ],
    examFacts: ["Facility: Nuclear Hydrogen Generation", "Location: IGCAR, Kalpakkam (Tamil Nadu)"],
    quickRemember: "India commissioned the world's first nuclear hydrogen facility at IGCAR, Kalpakkam.",
    audioText: "India commissioned the world's first nuclear process heat hydrogen generation facility at IGCAR in Kalpakkam.",
    source: "Department of Atomic Energy",
    importantFor: ["SSC CGL", "UPSC", "CDS"]
  },
  {
    id: "REC-AUG-105",
    date: "2026-08-23",
    month: "Aug 2026",
    category: "Science & Technology",
    title: "ISRO Hot-Tests Semi-Cryogenic Engine",
    summary: "ISRO conducted a successful hot test of the LOX/Kerosene Semi-Cryogenic Engine Power Head at Mahendragiri.",
    whatHappened: "The Indian Space Research Organisation (ISRO) successfully conducted a hot test of the intermediate configuration of its heavy-lift LOX/Kerosene Semi-Cryogenic Engine Power Head at the Propulsion Complex in Mahendragiri.",
    importantPoints: [
      "Test involved the LOX/Kerosene Semi-Cryogenic Engine Power Head.",
      "Conducted at ISRO Propulsion Complex (IPRC) in Mahendragiri.",
      "Designed to enhance the payload capacity of future launch vehicles."
    ],
    examFacts: ["Engine Type: LOX/Kerosene Semi-Cryogenic", "Test Site: IPRC, Mahendragiri"],
    quickRemember: "ISRO successfully hot-tested its LOX/Kerosene Semi-Cryogenic engine at Mahendragiri.",
    audioText: "ISRO successfully conducted a hot test of its new semi-cryogenic engine power head at the Mahendragiri propulsion complex.",
    source: "ISRO",
    importantFor: ["SSC CGL", "CDS"]
  },
  {
    id: "REC-AUG-106",
    date: "2026-08-23",
    month: "Aug 2026",
    category: "Science & Technology",
    title: "New Quantum State 'Fractional Fermi Sea' Observed",
    summary: "Quantum physicists at the University of Innsbruck observed a new quantum state in one-dimensional tubes of ultracold cesium atoms.",
    whatHappened: "Quantum physicists at the University of Innsbruck achieved a breakthrough by observing a new quantum state of matter called the 'Fractional Fermi Sea' in one-dimensional tubes of ultracold cesium atoms.",
    importantPoints: [
      "New quantum state: Fractional Fermi Sea.",
      "Observed by researchers at the University of Innsbruck.",
      "Involves one-dimensional tubes of ultracold cesium atoms."
    ],
    examFacts: ["Quantum State: Fractional Fermi Sea", "Institute: University of Innsbruck", "Element: Cesium Atoms"],
    quickRemember: "Researchers at the University of Innsbruck observed a new quantum state called the Fractional Fermi Sea.",
    audioText: "Quantum physicists at the University of Innsbruck successfully observed a new quantum state known as the Fractional Fermi Sea.",
    source: "Science Journals",
    importantFor: ["UPSC", "SSC CGL"]
  },
  {
    id: "REC-AUG-107",
    date: "2026-08-24",
    month: "Aug 2026",
    category: "Science & Technology",
    title: "IIT Bombay Develops Placenta-on-Chip Device",
    summary: "IIT Bombay and ICMR-NIRRCH developed a microfluidic device simulating the human maternal-fetal barrier.",
    whatHappened: "Researchers from IIT Bombay, in collaboration with ICMR-NIRRCH, developed a microfluidic 'Placenta-on-Chip' device that perfectly simulates the human maternal-fetal barrier to study reproductive toxicology and drug transfers.",
    importantPoints: [
      "Device simulates the human maternal-fetal barrier.",
      "Developed by IIT Bombay and ICMR-NIRRCH.",
      "Used for reproductive toxicology and drug testing."
    ],
    examFacts: ["Device: Placenta-on-Chip", "Institutions: IIT Bombay and ICMR-NIRRCH"],
    quickRemember: "IIT Bombay and ICMR developed a 'Placenta-on-Chip' device to study the maternal-fetal barrier.",
    audioText: "IIT Bombay and ICMR developed a Placenta-on-Chip microfluidic device to study the human maternal-fetal barrier.",
    source: "ICMR",
    importantFor: ["SSC CGL", "State PCS"]
  },
  {
    id: "REC-AUG-108",
    date: "2026-08-24",
    month: "Aug 2026",
    category: "Science & Technology",
    title: "Atmospheric Escape Detected on Exoplanet LHS 1140b",
    summary: "Astronomers detected escaping helium plumes around the habitable-zone super-Earth LHS 1140b.",
    whatHappened: "Astronomers using space telescopes detected escaping helium plumes around LHS 1140b, a habitable-zone super-Earth exoplanet. This atmospheric escape provides crucial data on how rocky planets retain or lose their atmospheres.",
    importantPoints: [
      "Detected escaping helium plumes.",
      "Exoplanet: LHS 1140b (a super-Earth).",
      "Located in its star's habitable zone."
    ],
    examFacts: ["Exoplanet: LHS 1140b", "Detection: Escaping helium plumes"],
    quickRemember: "Astronomers detected escaping helium plumes on the super-Earth exoplanet LHS 1140b.",
    audioText: "Astronomers detected escaping helium plumes in the atmosphere of the super-Earth exoplanet LHS 1140b.",
    source: "Astronomy Journals",
    importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-AUG-109",
    date: "2026-08-25",
    month: "Aug 2026",
    category: "Science & Defence",
    title: "Paninian India Unveils Indigenous Yantur Turbofan Engine",
    summary: "Domestic startup Paninian India unveiled the Yantur 4.5 kN micro-turbofan engine.",
    whatHappened: "Domestic aerospace startup Paninian India unveiled the 'Yantur', a fully indigenous 4.5 kN micro-turbofan engine designed specifically to power indigenous cruise missiles and heavy Unmanned Aerial Vehicles (UAVs).",
    importantPoints: [
      "Engine Name: Yantur.",
      "Thrust Capacity: 4.5 kN micro-turbofan.",
      "Developed by domestic startup Paninian India for cruise missiles and UAVs."
    ],
    examFacts: ["Engine: Yantur (4.5 kN)", "Company: Paninian India", "Application: Cruise missiles and UAVs"],
    quickRemember: "Startup Paninian India unveiled the indigenous Yantur micro-turbofan engine for UAVs.",
    audioText: "Domestic startup Paninian India unveiled the Yantur 4.5 kN micro-turbofan engine designed to power cruise missiles and drones.",
    source: "Defence News",
    importantFor: ["CDS", "SSC CGL"]
  },
  {
    id: "REC-AUG-110",
    date: "2026-08-25",
    month: "Aug 2026",
    category: "Science & Technology",
    title: "Ancient 2.56-Billion-Year-Old Rock Formation Found in MP",
    summary: "Geologists dated the Pichhore orbicular granite in Madhya Pradesh to 2.56 billion years old.",
    whatHappened: "Geologists determined that the Pichhore orbicular granite formation in Shivpuri district, Madhya Pradesh, is 2.56 billion years old, making it the second-oldest orbicular rock formation ever discovered on Earth.",
    importantPoints: [
      "Age: 2.56 billion years old.",
      "Rock type: Orbicular granite.",
      "Location: Pichhore in Shivpuri district, Madhya Pradesh."
    ],
    examFacts: ["Location: Pichhore, Shivpuri (MP)", "Age: 2.56 Billion Years", "Rock Type: Orbicular Granite"],
    quickRemember: "The 2.56-billion-year-old Pichhore orbicular granite formation was discovered in Shivpuri, MP.",
    audioText: "Geologists discovered that the Pichhore orbicular granite formation in Madhya Pradesh is 2.56 billion years old.",
    source: "Geological Survey of India",
    importantFor: ["SSC CGL", "State PCS"]
  },
  {
    id: "REC-AUG-111",
    date: "2026-08-26",
    month: "Aug 2026",
    category: "Health & Welfare",
    title: "CDSCO Approves Wegovy for MASH Therapy",
    summary: "India's CDSCO approved Wegovy (semaglutide 2.4 mg) for Metabolic Dysfunction-Associated Steatohepatitis (MASH).",
    whatHappened: "The Central Drugs Standard Control Organisation (CDSCO) officially approved the use of Wegovy (semaglutide 2.4 mg) for the treatment of Metabolic Dysfunction-Associated Steatohepatitis (MASH), expanding its use beyond weight management.",
    importantPoints: [
      "Drug: Wegovy (semaglutide 2.4 mg).",
      "Approved for MASH (Metabolic Dysfunction-Associated Steatohepatitis).",
      "Approved by CDSCO in India."
    ],
    examFacts: ["Drug: Wegovy", "Condition: MASH (Steatohepatitis)", "Regulator: CDSCO"],
    quickRemember: "CDSCO approved the drug Wegovy (semaglutide) for the treatment of MASH.",
    audioText: "The CDSCO officially approved the drug Wegovy for treating Metabolic Dysfunction-Associated Steatohepatitis, known as MASH.",
    source: "CDSCO",
    importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-AUG-112",
    date: "2026-08-26",
    month: "Aug 2026",
    category: "Defence",
    title: "HELINA Missile Integrated on LCH Prachand",
    summary: "Clearance trials of the HELINA (helicopter-launched NAG) anti-tank missile were completed on the LCH Prachand.",
    whatHappened: "The Defence Research and Development Organisation (DRDO) and the Indian Air Force completed the integration and firing clearance trials of the HELINA (Helicopter-launched NAG) Anti-Tank Guided Missile on the indigenous LCH Prachand.",
    importantPoints: [
      "Missile: HELINA (Helicopter-launched NAG).",
      "Helicopter: LCH Prachand.",
      "It is an Anti-Tank Guided Missile (ATGM)."
    ],
    examFacts: ["Missile: HELINA ATGM", "Platform: LCH Prachand"],
    quickRemember: "The HELINA anti-tank guided missile was successfully integrated onto the LCH Prachand helicopter.",
    audioText: "Integration trials of the HELINA anti-tank guided missile were successfully completed on the LCH Prachand helicopter.",
    source: "DRDO",
    importantFor: ["CDS", "SSC CGL"]
  },
  {
    id: "REC-AUG-113",
    date: "2026-08-27",
    month: "Aug 2026",
    category: "Defence",
    title: "RIMPAC 2026 Commences in Hawaii",
    summary: "The 30th edition of the Rim of the Pacific (RIMPAC) maritime exercise began in Hawaii with 30 nations.",
    whatHappened: "The 30th edition of the biennial Rim of the Pacific (RIMPAC) maritime exercise, the world's largest international maritime warfare exercise, commenced in Hawaii and Southern California featuring naval forces from 30 participating nations, including India.",
    importantPoints: [
      "30th edition of RIMPAC.",
      "Hosted in Hawaii and Southern California.",
      "World's largest international maritime warfare exercise with 30 nations."
    ],
    examFacts: ["Exercise: RIMPAC 2026", "Edition: 30th", "Location: Hawaii"],
    quickRemember: "The 30th edition of RIMPAC, the world's largest maritime exercise, began in Hawaii.",
    audioText: "The thirtieth edition of the Rim of the Pacific maritime exercise commenced in Hawaii with thirty participating nations.",
    source: "US Navy / Indian Navy",
    importantFor: ["CDS", "SSC CGL"]
  },
  {
    id: "REC-AUG-114",
    date: "2026-08-27",
    month: "Aug 2026",
    category: "Defence",
    title: "Project BRAHMANK Celebrates 16th Raising Day",
    summary: "The Border Roads Organisation's strategic Project BRAHMANK celebrated its 16th Raising Day in Arunachal Pradesh.",
    whatHappened: "Project BRAHMANK, a strategic infrastructure development initiative by the Border Roads Organisation (BRO), celebrated its 16th Raising Day at Pasighat in Arunachal Pradesh. The project maintains vital logistical routes near the LAC.",
    importantPoints: [
      "16th Raising Day of Project BRAHMANK.",
      "Operated by the Border Roads Organisation (BRO).",
      "Located in Pasighat, Arunachal Pradesh."
    ],
    examFacts: ["Project: BRAHMANK", "Agency: Border Roads Organisation (BRO)", "State: Arunachal Pradesh"],
    quickRemember: "BRO's Project BRAHMANK celebrated its 16th Raising Day in Arunachal Pradesh.",
    audioText: "The Border Roads Organisation's strategic Project BRAHMANK celebrated its sixteenth Raising Day in Arunachal Pradesh.",
    source: "Border Roads Organisation",
    importantFor: ["CDS", "UPSC"]
  },
  {
    id: "REC-AUG-115",
    date: "2026-08-28",
    month: "Aug 2026",
    category: "Defence",
    title: "Indian Army Establishes Drone 'Baaz Battalions'",
    summary: "The Indian Army raised dedicated 'Baaz Battalions' to oversee border ISR drone swarms.",
    whatHappened: "The Indian Army officially raised dedicated Remotely Piloted Aircraft (RPA) units named 'Baaz Battalions' under the Army Aviation Corps. These battalions will oversee and operate border Intelligence, Surveillance, and Reconnaissance (ISR) drone swarms.",
    importantPoints: [
      "Dedicated drone units named 'Baaz Battalions'.",
      "Operate under the Army Aviation Corps.",
      "Focused on Intelligence, Surveillance, and Reconnaissance (ISR) along borders."
    ],
    examFacts: ["Unit Name: Baaz Battalions", "Focus: RPA / Drone Swarms", "Corps: Army Aviation Corps"],
    quickRemember: "The Indian Army established 'Baaz Battalions' for drone surveillance under the Aviation Corps.",
    audioText: "The Indian Army established new dedicated drone units named Baaz Battalions under the Army Aviation Corps.",
    source: "Indian Army",
    importantFor: ["CDS", "SSC CGL"]
  },
  {
    id: "REC-AUG-116",
    date: "2026-08-28",
    month: "Aug 2026",
    category: "Appointments",
    title: "Mahesh Dixit Appointed Director of Intelligence Bureau",
    summary: "Senior IPS officer Mahesh Dixit was appointed as the Director of the Intelligence Bureau (IB).",
    whatHappened: "The Appointments Committee of the Cabinet appointed senior 1993-batch IPS officer Mahesh Dixit as the new Director of the Intelligence Bureau (IB). He brings extensive experience in counter-terrorism and internal security operations.",
    importantPoints: [
      "Appointed Director of the Intelligence Bureau (IB).",
      "Mahesh Dixit is a 1993-batch IPS officer."
    ],
    examFacts: ["Appointee: Mahesh Dixit", "Position: Director, Intelligence Bureau (IB)"],
    quickRemember: "Mahesh Dixit was appointed as the new Director of the Intelligence Bureau (IB).",
    audioText: "Senior IPS officer Mahesh Dixit was appointed as the new Director of the Intelligence Bureau.",
    source: "Ministry of Home Affairs",
    importantFor: ["SSC CGL", "UPSC", "CDS"]
  },
  {
    id: "REC-AUG-117",
    date: "2026-08-29",
    month: "Aug 2026",
    category: "Appointments",
    title: "Dr. U.P. Rajeev Named Director of VSSC",
    summary: "Dr. U.P. Rajeev was appointed as the Director of the Vikram Sarabhai Space Centre (VSSC).",
    whatHappened: "Prominent aerospace scientist Dr. U.P. Rajeev was appointed as the Director of the Vikram Sarabhai Space Centre (VSSC) in Thiruvananthapuram, ISRO's lead facility for launch vehicle development.",
    importantPoints: [
      "Appointed Director of Vikram Sarabhai Space Centre (VSSC).",
      "Located in Thiruvananthapuram, Kerala.",
      "VSSC is ISRO's lead facility for launch vehicles."
    ],
    examFacts: ["Appointee: Dr. U.P. Rajeev", "Position: Director, VSSC"],
    quickRemember: "Dr. U.P. Rajeev is the new Director of the Vikram Sarabhai Space Centre (VSSC).",
    audioText: "Scientist Dr. U.P. Rajeev was named the new Director of the Vikram Sarabhai Space Centre in Thiruvananthapuram.",
    source: "ISRO",
    importantFor: ["SSC CGL", "SSC CHSL"]
  },
  {
    id: "REC-AUG-118",
    date: "2026-08-29",
    month: "Aug 2026",
    category: "Appointments",
    title: "Ravi Agrawal Reappointed CBDT Chairman",
    summary: "Ravi Agrawal was reappointed as the Chairman of the Central Board of Direct Taxes for a six-month extension.",
    whatHappened: "The Appointments Committee of the Cabinet approved the reappointment of Ravi Agrawal as the Chairman of the Central Board of Direct Taxes (CBDT) for an additional six-month tenure to ensure continuity in tax administration policies.",
    importantPoints: [
      "Reappointed as Chairman of CBDT.",
      "Extension granted for an additional six months."
    ],
    examFacts: ["Appointee: Ravi Agrawal", "Position: Chairman, CBDT"],
    quickRemember: "Ravi Agrawal was given a six-month extension as the Chairman of CBDT.",
    audioText: "Ravi Agrawal was reappointed as the Chairman of the Central Board of Direct Taxes for an additional six months.",
    source: "Ministry of Finance",
    importantFor: ["SSC CGL", "Bank PO"]
  },
  {
    id: "REC-AUG-119",
    date: "2026-08-30",
    month: "Aug 2026",
    category: "International Affairs",
    title: "16th India-Japan Annual Summit Held in New Delhi",
    summary: "Japanese Prime Minister Sanae Takaichi visited New Delhi for the 16th India-Japan Annual Summit.",
    whatHappened: "Japanese Prime Minister Sanae Takaichi visited New Delhi for bilateral talks with PM Narendra Modi during the 16th India-Japan Annual Summit. The leaders focused on expanding defense manufacturing and semiconductor supply chains.",
    importantPoints: [
      "16th edition of the India-Japan Annual Summit.",
      "Held in New Delhi.",
      "Attended by Japanese Prime Minister Sanae Takaichi and PM Narendra Modi."
    ],
    examFacts: ["Event: 16th India-Japan Annual Summit", "Japanese PM: Sanae Takaichi", "Location: New Delhi"],
    quickRemember: "The 16th India-Japan Annual Summit was held in New Delhi with PM Sanae Takaichi.",
    audioText: "The 16th India-Japan Annual Summit was held in New Delhi, attended by Japanese Prime Minister Sanae Takaichi.",
    source: "MEA",
    importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-AUG-120",
    date: "2026-08-30",
    month: "Aug 2026",
    category: "International Affairs",
    title: "5th BIMSTEC National Security Advisers' Conference",
    summary: "India hosted the 5th BIMSTEC National Security Advisers’ Conference in New Delhi.",
    whatHappened: "India hosted the 5th BIMSTEC National Security Advisers’ Conference in New Delhi. The multilateral talks aimed to establish a unified operational grid to counter maritime terrorism and transnational organized crime in the Bay of Bengal region.",
    importantPoints: [
      "5th edition of the BIMSTEC NSA Conference.",
      "Hosted in New Delhi, India.",
      "Focused on maritime terrorism in the Bay of Bengal."
    ],
    examFacts: ["Event: 5th BIMSTEC NSA Conference", "Host City: New Delhi", "Focus: Maritime Terrorism"],
    quickRemember: "New Delhi hosted the 5th BIMSTEC National Security Advisers’ Conference.",
    audioText: "India hosted the fifth BIMSTEC National Security Advisers' Conference in New Delhi to discuss maritime security.",
    source: "Ministry of External Affairs",
    importantFor: ["UPSC", "CDS"]
  }
];

