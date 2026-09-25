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
   AUGUST 2026 - BATCH 4 (ITEMS 061 TO 080)
   ========================================================================== */

const augRecallArticlesBatch4 = [
  {
    id: "REC-AUG-061",
    date: "2026-08-16",
    month: "Aug 2026",
    category: "Art & Culture",
    title: "Shabdalok Language Museum Opens in Kolkata",
    summary: "India's first interactive multimodal language museum, 'Shabdalok', was inaugurated at Belvedere House, Kolkata.",
    whatHappened: "India's first interactive multimodal language museum, 'Shabdalok', was inaugurated at historic Belvedere House on the National Library campus in Kolkata. The museum preserves linguistic diversity, audio recordings, and scripts across scheduled and endangered Indian tongues.",
    importantPoints: [
      "India's first interactive multimodal language museum.",
      "Located at Belvedere House within the National Library campus, Kolkata.",
      "Preserves ancient scripts, tribal dialects, and endangered language phonetics."
    ],
    examFacts: ["Museum: Shabdalok", "Location: Belvedere House, National Library, Kolkata"],
    quickRemember: "Shabdalok, India's first multimodal language museum, opened at Belvedere House, Kolkata.",
    audioText: "India's first interactive language museum named Shabdalok was inaugurated at Belvedere House in Kolkata.",
    source: "Ministry of Culture",
    importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-AUG-062",
    date: "2026-08-17",
    month: "Aug 2026",
    category: "Economy & Infrastructure",
    title: "NHAI Launches Automated Local Toll Passes on RajmargYatra",
    summary: "NHAI introduced digital monthly toll passes on the RajmargYatra app for local residents living within 20 km of plazas.",
    whatHappened: "The National Highways Authority of India (NHAI) enabled automated local commuter passes via the RajmargYatra mobile app. The digital pass provides discounted transit through FASTag for private vehicle owners residing within a 20-kilometer radius of national toll plazas.",
    importantPoints: [
      "Available on NHAI's official RajmargYatra mobile application.",
      "Applicable to non-commercial vehicle owners residing within 20 km of a toll plaza.",
      "Validates identity and address via digital geotagged integration."
    ],
    examFacts: ["Application: RajmargYatra", "Radius: Within 20 km of toll plaza", "Agency: NHAI"],
    quickRemember: "NHAI rolled out automated local toll commuter passes for residents within 20 km via RajmargYatra.",
    audioText: "NHAI rolled out digital monthly toll passes on the RajmargYatra app for residents within twenty kilometers of toll plazas.",
    source: "NHAI",
    importantFor: ["SSC CGL", "SSC CHSL"]
  },
  {
    id: "REC-AUG-063",
    date: "2026-08-19",
    month: "Aug 2026",
    category: "Science & Technology",
    title: "NTPC Contracts India's First 100 MWh Flow Battery at Khavda",
    summary: "NTPC Renewable Energy awarded India's first utility-scale 100 MWh Vanadium Redox Flow Battery project in Gujarat.",
    whatHappened: "NTPC Renewable Energy awarded a contract to deploy India's first utility-scale 100 MWh Vanadium Redox Flow Battery (VRFB) storage system at Khavda Solar Park in Gujarat to provide long-duration grid stabilization.",
    importantPoints: [
      "First utility-scale Vanadium Redox Flow Battery (VRFB) project in India.",
      "Storage capacity: 100 MWh.",
      "Located at Khavda Solar and Renewable Energy Park in Gujarat."
    ],
    examFacts: ["Technology: Vanadium Redox Flow Battery (VRFB)", "Capacity: 100 MWh", "Location: Khavda, Gujarat"],
    quickRemember: "India's first utility-scale 100 MWh Vanadium Redox Flow Battery is being installed at Khavda, Gujarat.",
    audioText: "NTPC contracted India's first utility-scale 100 megawatt-hour Vanadium Redox Flow Battery project at Khavda in Gujarat.",
    source: "Ministry of Power",
    importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-AUG-064",
    date: "2026-08-20",
    month: "Aug 2026",
    category: "Defence & Security",
    title: "50% Quota for Ex-Agniveers in CAPF Constable Recruitment",
    summary: "MHA announced a 50% reservation quota and age concessions for Ex-Agniveers in CAPFs and Assam Rifles.",
    whatHappened: "The Ministry of Home Affairs announced a 50% horizontal reservation quota alongside relaxation in upper age limits and physical efficiency tests for Ex-Agniveers in Constable (General Duty) recruitment across Central Armed Police Forces (CAPFs) and Assam Rifles.",
    importantPoints: [
      "50% reservation quota for Ex-Agniveers in Constable (GD) posts.",
      "Applies across BSF, CRPF, CISF, ITBP, SSB, and Assam Rifles.",
      "Includes upper age concessions and exemption from physical efficiency tests."
    ],
    examFacts: ["Quota: 50% Reservation", "Recruitment: Constable (GD) in CAPFs & Assam Rifles", "Nodal Ministry: MHA"],
    quickRemember: "MHA announced a 50% reservation quota for Ex-Agniveers in Constable (GD) recruitment in CAPFs.",
    audioText: "The Ministry of Home Affairs notified a fifty percent reservation quota for Ex-Agniveers in Central Armed Police Forces recruitment.",
    source: "Ministry of Home Affairs",
    importantFor: ["CDS", "SSC CGL", "SSC CPO"]
  },
  {
    id: "REC-AUG-065",
    date: "2026-08-21",
    month: "Aug 2026",
    category: "Science & Technology",
    title: "ONGC Drills 1,000-Metre Wells for Puga Geothermal Power",
    summary: "ONGC Energy Centre completed drilling two 1,000-metre geothermal wells in Ladakh's Puga Valley.",
    whatHappened: "ONGC Energy Centre completed the exploratory drilling of two 1,000-metre-deep geothermal production wells in Ladakh's Puga Valley, anchoring India's maiden 1 MW pilot geothermal power station situated at an altitude over 14,000 feet.",
    importantPoints: [
      "Drilled two 1,000-metre geothermal production wells.",
      "Located in Puga Valley, Changthang region, Ladakh.",
      "Powers India's first commercial geothermal clean power project (1 MW)."
    ],
    examFacts: ["Location: Puga Valley, Ladakh", "Executing Body: ONGC Energy Centre", "Well Depth: 1,000 metres"],
    quickRemember: "ONGC completed 1,000m geothermal drilling in Puga Valley, Ladakh, for a 1 MW clean energy project.",
    audioText: "ONGC completed deep drilling of two one-thousand-metre geothermal wells in Puga Valley, Ladakh.",
    source: "ONGC",
    importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-AUG-066",
    date: "2026-08-22",
    month: "Aug 2026",
    category: "Environment",
    title: "UN Secretary-General Issues Global Methane Action Call",
    summary: "UN Chief António Guterres issued an urgent directive in London to curb methane leaks across landfills and gas lines.",
    whatHappened: "UN Secretary-General António Guterres issued a global climate directive in London urging governments to rapidly arrest fugitive methane emissions across fossil fuel pipelines, abandoned coal pits, and municipal solid waste landfills to stave off near-term 1.5°C threshold breaches.",
    importantPoints: [
      "Issued by UN Secretary-General António Guterres in London.",
      "Targets fugitive methane leaks in municipal landfills, gas pipelines, and mines.",
      "Methane holds over 80 times the atmospheric warming potential of CO2 over a 20-year horizon."
    ],
    examFacts: ["Global Leader: António Guterres", "Focus: Fugitive Methane Emissions", "Forum: London Climate Briefing"],
    quickRemember: "UN Chief António Guterres delivered a global call to action targeting methane emissions from pipelines and landfills.",
    audioText: "UN Secretary-General António Guterres issued an urgent global appeal in London to eliminate fugitive methane emissions.",
    source: "United Nations",
    importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-AUG-067",
    date: "2026-08-23",
    month: "Aug 2026",
    category: "International Affairs",
    title: "Operation Amistad: India Dispatches Relief to Venezuela",
    summary: "India launched 'Operation Amistad' providing emergency earthquake disaster assistance to Venezuela.",
    whatHappened: "India launched 'Operation Amistad', airlifting search-and-rescue teams, critical trauma medication, field surgical units, and clean water supplies to Venezuela after consecutive earthquakes measuring 7.2 and 7.5 magnitude struck its northern states.",
    importantPoints: [
      "Operation Name: Operation Amistad.",
      "Dispatched humanitarian assistance and disaster relief (HADR) to Venezuela.",
      "Triggered by twin earthquakes measuring 7.2 and 7.5 on the Richter scale."
    ],
    examFacts: ["Operation: Operation Amistad", "Beneficiary Nation: Venezuela", "Disaster: Earthquake (7.2 & 7.5)"],
    quickRemember: "Operation Amistad is India's earthquake humanitarian relief mission to Venezuela.",
    audioText: "India launched Operation Amistad to deliver emergency disaster relief supplies to earthquake-affected Venezuela.",
    source: "Ministry of External Affairs",
    importantFor: ["CDS", "SSC CGL", "UPSC"]
  },
  {
    id: "REC-AUG-068",
    date: "2026-08-24",
    month: "Aug 2026",
    category: "Art & Culture",
    title: "'Manas and Mahabharata' Centre Inaugurated in Bishkek",
    summary: "India and Kyrgyzstan jointly inaugurated the 'Manas and Mahabharata' Cultural Centre in Bishkek.",
    whatHappened: "During bilateral diplomatic engagements, India and Kyrgyzstan jointly established the 'Manas and Mahabharata' Cultural and Research Centre in Bishkek to explore historical civilizational links, comparative epic literature, and Silk Road shared folk traditions.",
    importantPoints: [
      "Established jointly by India and Kyrgyzstan.",
      "Located in Bishkek, Kyrgyzstan.",
      "Connects the Kyrgyz national Epic of Manas with the Indian epic Mahabharata."
    ],
    examFacts: ["Centre: Manas and Mahabharata", "Location: Bishkek, Kyrgyzstan", "Partner: Kyrgyzstan"],
    quickRemember: "The 'Manas and Mahabharata' epic cultural study centre was opened in Bishkek, Kyrgyzstan.",
    audioText: "India and Kyrgyzstan inaugurated the Manas and Mahabharata cultural research centre in Bishkek.",
    source: "MEA",
    importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-AUG-069",
    date: "2026-08-24",
    month: "Aug 2026",
    category: "International Affairs",
    title: "14 Nations Issue Hague South China Sea Declaration",
    summary: "Fourteen nations reaffirmed the binding validity of the 2016 South China Sea Arbitral Tribunal award.",
    whatHappened: "Fourteen nations, including the United States, Japan, the United Kingdom, and the Philippines, issued the Hague South China Sea Declaration, reaffirming that the 2016 Permanent Court of Arbitration award is legally binding and sovereign maritime rights under UNCLOS must be respected.",
    importantPoints: [
      "Reaffirmed the 2016 Permanent Court of Arbitration ruling.",
      "Signatories included 14 nations (US, UK, Japan, Philippines, etc.).",
      "Rejected unilateral maritime claims inconsistent with UNCLOS."
    ],
    examFacts: ["Declaration: Hague South China Sea Declaration", "Key Treaty: UNCLOS", "Core Ruling: 2016 PCA Award"],
    quickRemember: "Fourteen nations signed the Hague Declaration reaffirming the 2016 Arbitral Tribunal award on the South China Sea.",
    audioText: "Fourteen nations issued the Hague Declaration affirming that the 2016 arbitral ruling on the South China Sea remains legally binding.",
    source: "International Maritime Secretariat",
    importantFor: ["UPSC", "CDS"]
  },
  {
    id: "REC-AUG-070",
    date: "2026-08-25",
    month: "Aug 2026",
    category: "International Affairs",
    title: "European Nations Form Missile Defence Coalition Around Freyja",
    summary: "Nine European nations and Ukraine created an integrated anti-ballistic missile coalition using the Ukrainian Freyja system.",
    whatHappened: "Nine European nations along with Ukraine announced the formation of the Integrated Anti-Ballistic Missile Coalition, standardizing air defence architectures around the battle-tested Ukrainian-developed 'Freyja' hypersonic interceptor and radar system.",
    importantPoints: [
      "Includes 9 European countries and Ukraine.",
      "Built around the Ukrainian 'Freyja' air and ballistic missile defence architecture.",
      "Provides rapid layered interception across eastern European airspace."
    ],
    examFacts: ["Defence System: Freyja System", "Focus: Integrated Anti-Ballistic Missile Coalition", "Core Partner: Ukraine"],
    quickRemember: "Nine European nations and Ukraine formed a joint anti-ballistic missile defence coalition based on the Freyja system.",
    audioText: "Nine European nations joined Ukraine to establish an integrated anti-ballistic missile defence coalition centered on the Freyja system.",
    source: "European Defence Agency",
    importantFor: ["CDS", "UPSC"]
  },
  {
    id: "REC-AUG-071",
    date: "2026-08-25",
    month: "Aug 2026",
    category: "Appointments",
    title: "Kanishka Narayan Appointed UK's First Cabinet Minister for AI",
    summary: "Indian-origin MP Kanishka Narayan was appointed as the United Kingdom's first full Cabinet Minister for Artificial Intelligence.",
    whatHappened: "In an administrative restructuring under Prime Minister Andy Burnham, Indian-origin Member of Parliament Kanishka Narayan was appointed to the Cabinet as the UK's first Secretary of State for Artificial Intelligence and Autonomous Technologies.",
    importantPoints: [
      "First full Cabinet Minister for Artificial Intelligence in the United Kingdom.",
      "Indian-origin MP appointed under Andy Burnham's government.",
      "Tasked with regulating Frontier AI safety while spurring computational infrastructure."
    ],
    examFacts: ["Appointee: Kanishka Narayan", "Position: Cabinet Minister for Artificial Intelligence", "Country: United Kingdom"],
    quickRemember: "Kanishka Narayan became the UK's first full Cabinet Minister for Artificial Intelligence.",
    audioText: "Indian-origin MP Kanishka Narayan was appointed as the United Kingdom's first full Cabinet Minister for Artificial Intelligence.",
    source: "UK Government",
    importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-AUG-072",
    date: "2026-08-25",
    month: "Aug 2026",
    category: "Economy & Trade",
    title: "Chinese Customs Records Zero Gallium Exports to Japan",
    summary: "China halted shipments of strategic rare earth elements gallium, dysprosium, and terbium to Japan.",
    whatHappened: "Official Chinese customs data revealed zero exports of critical semiconductor minerals—gallium, dysprosium, and terbium—to Japan for August 2026, marking a severe supply disruption amid mounting regional high-technology trade tensions.",
    importantPoints: [
      "Exports halted for critical materials: gallium, dysprosium, and terbium.",
      "Exporting nation: China; Receiving nation: Japan.",
      "Poses supply chain headwinds for automotive permanent magnets and chip fabrication."
    ],
    examFacts: ["Minerals: Gallium, Dysprosium, Terbium", "Impacted Importer: Japan", "Exporter: China"],
    quickRemember: "China froze exports of critical minerals gallium, dysprosium, and terbium to Japan.",
    audioText: "China registered zero exports of critical rare earth elements gallium, dysprosium, and terbium to Japan in August 2026.",
    source: "Global Trade Data",
    importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-AUG-073",
    date: "2026-08-26",
    month: "Aug 2026",
    category: "International Affairs",
    title: "Khalil al-Hayya Chosen Head of Hamas Political Bureau",
    summary: "Khalil al-Hayya was selected to head the Hamas Political Bureau following the demise of Yahya Sinwar.",
    whatHappened: "The Shura Council of Hamas confirmed Khalil al-Hayya as the new head of the Hamas Political Bureau, succeeding Yahya Sinwar and assuming command over strategic political negotiations and diplomatic relations.",
    importantPoints: [
      "Selected as Chief of the Hamas Political Bureau.",
      "Succeeded Yahya Sinwar.",
      "Announced following the internal leadership council ballot."
    ],
    examFacts: ["Leader: Khalil al-Hayya", "Position: Head of Hamas Political Bureau", "Predecessor: Yahya Sinwar"],
    quickRemember: "Khalil al-Hayya was chosen to head the Hamas Political Bureau, succeeding Yahya Sinwar.",
    audioText: "Khalil al-Hayya was appointed as the new head of the Hamas Political Bureau, succeeding Yahya Sinwar.",
    source: "Foreign Affairs Bulletin",
    importantFor: ["SSC CGL", "CDS"]
  },
  {
    id: "REC-AUG-074",
    date: "2026-08-26",
    month: "Aug 2026",
    category: "State Affairs",
    title: "Odisha Launches GO-EAST Industrial Policy",
    summary: "Odisha introduced the GO-EAST industrial accelerator to drive capital into 15 non-coastal, underdeveloped districts.",
    whatHappened: "The Government of Odisha launched the 'GO-EAST' (Growth Opportunities for Eastern and Agro-based Special Territories) industrial framework, providing 35% capital investment subsidies to establish manufacturing clusters across 15 non-coastal and tribal districts.",
    importantPoints: [
      "Targeted at 15 non-coastal, industrially backward districts of Odisha.",
      "Offers special capital investment subsidies and plug-and-play industrial estates.",
      "Focuses on agro-processing, food cold chains, and mineral manufacturing."
    ],
    examFacts: ["Policy: GO-EAST", "State: Odisha", "Focus Districts: 15 non-coastal districts"],
    quickRemember: "Odisha launched the GO-EAST policy to accelerate industrialization across 15 non-coastal districts.",
    audioText: "Odisha launched the GO-EAST industrial scheme to promote manufacturing across fifteen non-coastal districts.",
    source: "Odisha Industries Dept",
    importantFor: ["SSC CGL", "State PCS"]
  },
  {
    id: "REC-AUG-075",
    date: "2026-08-27",
    month: "Aug 2026",
    category: "National Affairs",
    title: "Rajasthan and Haryana Sign Interstate Yamuna Pipeline Accord",
    summary: "Rajasthan and Haryana concluded an interstate agreement to construct an underground pipeline carrying Yamuna waters to Shekhawati.",
    whatHappened: "In the presence of Union Home Minister Amit Shah, the Chief Ministers of Rajasthan and Haryana executed the Yamuna Pipeline Accord to construct a 580 Million Cubic Metre (MCM) subterranean pipeline conveying allocated Yamuna floodwaters from Tajewala Headworks to Rajasthan's arid Shekhawati districts.",
    importantPoints: [
      "Interstate water agreement between Rajasthan and Haryana.",
      "Constructs a 580 MCM closed underground pipeline.",
      "Transfers Yamuna water to Sikar, Jhunjhunu, and Churu (Shekhawati)."
    ],
    examFacts: ["States Involved: Rajasthan and Haryana", "Capacity: 580 MCM", "Beneficiary Region: Shekhawati"],
    quickRemember: "Rajasthan and Haryana signed an agreement to pipe 580 MCM of Yamuna water to the Shekhawati region.",
    audioText: "Rajasthan and Haryana signed an interstate accord to pipe 580 million cubic metres of Yamuna water to Shekhawati.",
    source: "Ministry of Jal Shakti",
    importantFor: ["SSC CGL", "State PCS", "UPSC"]
  },
  {
    id: "REC-AUG-076",
    date: "2026-08-27",
    month: "Aug 2026",
    category: "Environment & Urban Affairs",
    title: "Delhi Notifies Electric Vehicle Policy 2026",
    summary: "Delhi notified its revised EV Policy through 2030, waiving road tax on electric cars and targeting 30,000 public chargers.",
    whatHappened: "The Delhi Government notified its Comprehensive Electric Vehicle Policy 2026, remaining operative through 2030. The policy provides complete road tax and registration fee waivers on private electric vehicles and sets a target to install 30,000 fast public charging outlets.",
    importantPoints: [
      "Operative tenure: 2026 through 2030.",
      "100% waiver on road tax and registration charges for electric cars and two-wheelers.",
      "Mandates setting up 30,000 public and semi-public charging guns."
    ],
    examFacts: ["Policy: Delhi EV Policy 2026", "Valid Until: 2030", "Target: 30,000 Public Chargers"],
    quickRemember: "Delhi notified EV Policy 2026 offering full road tax waivers and targeting 30,000 chargers by 2030.",
    audioText: "Delhi released its Electric Vehicle Policy extending full road tax waivers and targeting thirty thousand chargers by 2030.",
    source: "Delhi Transport Dept",
    importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-AUG-077",
    date: "2026-08-28",
    month: "Aug 2026",
    category: "Health & Welfare",
    title: "West Bengal Clears ₹313.3 Cr for Tea Garden Rest Sheds and Clinics",
    summary: "West Bengal sanctioned ₹313.3 crore under PMCSPY to establish 321 clinics and creches in northern tea estates.",
    whatHappened: "The West Bengal State Cabinet approved an allocation of ₹313.3 crore under the PM Cha Sramik Prokolpo Yojana (PMCSPY) to erect 321 permanent worker rest shelters, primary healthcare clinics, and day-care creches across tea estates in Darjeeling, Jalpaiguri, and Alipurduar.",
    importantPoints: [
      "Total allocation: ₹313.3 crore.",
      "Builds 321 integrated rest sheds, primary dispensaries, and creches.",
      "Covers tea estates in Darjeeling, Jalpaiguri, and Alipurduar districts."
    ],
    examFacts: ["Allocation: ₹313.3 Crore", "Facilities: 321 Rest Sheds/Clinics", "State: West Bengal (Tea Districts)"],
    quickRemember: "West Bengal cleared ₹313.3 crore for 321 rest sheds and health clinics in northern tea estates.",
    audioText: "West Bengal allocated over 313 crore rupees to construct 321 health clinics and rest sheds across tea estates.",
    source: "WB State Gazette",
    importantFor: ["SSC CGL", "State PCS"]
  },
  {
    id: "REC-AUG-078",
    date: "2026-08-28",
    month: "Aug 2026",
    category: "National Affairs",
    title: "Four States Sign Final Narmada Financial Resolution",
    summary: "Madhya Pradesh, Gujarat, Maharashtra, and Rajasthan signed a financial agreement settling long-standing Narmada project liabilities.",
    whatHappened: "The Chief Ministers of Madhya Pradesh, Gujarat, Maharashtra, and Rajasthan reached a unanimous financial settlement closing three decades of disputed cost-sharing liabilities associated with the Sardar Sarovar Dam and canal networks under the Narmada Water Disputes Tribunal.",
    importantPoints: [
      "Settlement between four riparian states: MP, Gujarat, Maharashtra, and Rajasthan.",
      "Clears pending cost-sharing accounts and rehabilitation compensation balances.",
      "Enables expansion of secondary command canal networks."
    ],
    examFacts: ["States: MP, Gujarat, Maharashtra, Rajasthan", "Tribunal: Narmada Water Disputes Tribunal", "Project: Sardar Sarovar"],
    quickRemember: "Four riparian states resolved long-standing cost-sharing liabilities under the Narmada Tribunal.",
    audioText: "Madhya Pradesh, Gujarat, Maharashtra, and Rajasthan signed a financial resolution resolving Narmada water liabilities.",
    source: "Narmada Control Authority",
    importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-AUG-079",
    date: "2026-08-29",
    month: "Aug 2026",
    category: "Agriculture & Economy",
    title: "Assam Begins Commercial Production of Japanese-Style Matcha",
    summary: "Assam commenced commercial cultivation and processing of Japanese shaded Matcha tea at Chota Tingrai Tea Estate.",
    whatHappened: "Assam launched India's first commercial-scale production of authentic shaded Japanese Matcha green tea at the Chota Tingrai Tea Estate in Tinsukia district, utilizing Japanese black netting shade-growth protocols and micro-granite stone milling.",
    importantPoints: [
      "First commercial Japanese-grade Matcha production in Assam.",
      "Produced at Chota Tingrai Tea Estate, Tinsukia district.",
      "Adopts traditional shaded cultivation and stone-grinding technology."
    ],
    examFacts: ["Product: Japanese-style Matcha Tea", "Estate: Chota Tingrai Tea Estate", "District: Tinsukia, Assam"],
    quickRemember: "Assam began commercial Japanese-style Matcha production at Chota Tingrai Tea Estate in Tinsukia.",
    audioText: "Assam commenced commercial cultivation of authentic Japanese Matcha tea at Chota Tingrai estate in Tinsukia.",
    source: "Tea Board of India",
    importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-AUG-080",
    date: "2026-08-29",
    month: "Aug 2026",
    category: "Environment & Urban Affairs",
    title: "Delhi Clears ₹8,300 Cr World Bank 'Clean Air' Program",
    summary: "Delhi approved an ₹8,300 crore World Bank-assisted program, 'Clean Air, Healthy Delhi', running through 2033.",
    whatHappened: "The Delhi Government approved the ₹8,300 crore World Bank co-financed program titled 'Clean Air, Healthy Delhi', spanning seven years through 2033. The mission focuses on road dust suppression, electrification of municipal freight fleets, and real-time airshed monitoring.",
    importantPoints: [
      "Total investment: ₹8,300 crore with World Bank co-financing.",
      "Implementation horizon spans through 2033.",
      "Focuses on urban airshed management, mechanised street cleaning, and freight electrification."
    ],
    examFacts: ["Project: Clean Air, Healthy Delhi", "Financier: World Bank", "Outlay: ₹8,300 Crore", "Timeline: Through 2033"],
    quickRemember: "Delhi approved the ₹8,300 crore World Bank-backed 'Clean Air, Healthy Delhi' project through 2033.",
    audioText: "Delhi approved an 8,300 crore rupee World Bank-assisted project called Clean Air Healthy Delhi to run through 2033.",
    source: "Delhi Environment Dept",
    importantFor: ["SSC CGL", "UPSC"]
  }
];

const augRecallQuestionsBatch4 = [
  {
    id: "REC-Q-AUG-061",
    articleId: "REC-AUG-061",
    category: "Art & Culture",
    topic: "Museums & Heritage",
    question: "India's first interactive, multimodal language museum, 'Shabdalok', was inaugurated at which historical site?",
    options: [
      "National Museum, Janpath, New Delhi",
      "Belvedere House, National Library, Kolkata",
      "Victoria Memorial Hall, Kolkata",
      "Salar Jung Museum, Hyderabad"
    ],
    answer: 1,
    explanation: "Shabdalok, India's first multimodal language museum dedicated to preserving Indian linguistic diversity and dialects, opened at Belvedere House within the National Library campus in Kolkata."
  },
  {
    id: "REC-Q-AUG-062",
    articleId: "REC-AUG-062",
    category: "Economy & Infrastructure",
    topic: "Highway Toll Rules",
    question: "NHAI introduced automated monthly local commuter passes on the RajmargYatra app for private vehicle owners residing within what distance from a toll plaza?",
    options: [
      "Within 10 km",
      "Within 15 km",
      "Within 20 km",
      "Within 30 km"
    ],
    answer: 2,
    explanation: "Under the automated scheme on the RajmargYatra app, residents living within a 20 km radius of national highway toll plazas can generate digitized commuter passes linked to FASTag."
  },
  {
    id: "REC-Q-AUG-063",
    articleId: "REC-AUG-063",
    category: "Science & Technology",
    topic: "Renewable Energy Storage",
    question: "NTPC Renewable Energy contracted India's first utility-scale 100 MWh Vanadium Redox Flow Battery storage project at which solar park?",
    options: [
      "Bhadla Solar Park, Rajasthan",
      "Pavagada Solar Park, Karnataka",
      "Khavda Solar Park, Gujarat",
      "Rewa Solar Park, Madhya Pradesh"
    ],
    answer: 2,
    explanation: "India's first 100 MWh utility-scale Vanadium Redox Flow Battery (VRFB) project was awarded by NTPC for installation at the massive Khavda Renewable Energy Park in Gujarat."
  },
  {
    id: "REC-Q-AUG-064",
    articleId: "REC-AUG-064",
    category: "Defence & Security",
    topic: "Military Recruitment & Welfare",
    question: "What percentage reservation quota was notified by the Ministry of Home Affairs for Ex-Agniveers in Constable (GD) recruitment across CAPFs and Assam Rifles?",
    options: [
      "10% Quota",
      "25% Quota",
      "33% Quota",
      "50% Quota"
    ],
    answer: 3,
    explanation: "The MHA notified a 50% reservation quota along with age and physical efficiency test concessions for Ex-Agniveers joining Central Armed Police Forces as Constables (General Duty)."
  },
  {
    id: "REC-Q-AUG-065",
    articleId: "REC-AUG-065",
    category: "Science & Technology",
    topic: "Geothermal Energy",
    question: "ONGC Energy Centre completed drilling two 1,000-metre production wells to anchor a 1 MW pilot geothermal power project in which valley?",
    options: [
      "Spiti Valley, Himachal Pradesh",
      "Puga Valley, Ladakh",
      "Nubra Valley, Ladakh",
      "Suru Valley, Jammu & Kashmir"
    ],
    answer: 1,
    explanation: "The geothermal production wells were drilled in Puga Valley in Ladakh, setting the groundwork for India's first operational 1 MW geothermal energy facility."
  },
  {
    id: "REC-Q-AUG-066",
    articleId: "REC-AUG-066",
    category: "Environment",
    topic: "Climate Directives",
    question: "In August 2026, UN Secretary-General António Guterres issued a global action call in London urging immediate emission reductions of which greenhouse gas?",
    options: [
      "Nitrous Oxide",
      "Sulfur Hexafluoride",
      "Methane",
      "Carbon Monoxide"
    ],
    answer: 2,
    explanation: "UN Chief António Guterres called on global leaders to urgently eliminate fugitive methane leaks from pipelines, landfills, and extraction facilities due to methane's potent short-term warming effect."
  },
  {
    id: "REC-Q-AUG-067",
    articleId: "REC-AUG-067",
    category: "International Affairs",
    topic: "Humanitarian Operations",
    question: "Under which operation did India dispatch emergency disaster relief supplies and search-and-rescue teams to earthquake-hit Venezuela in August 2026?",
    options: [
      "Operation Dost",
      "Operation Karuna",
      "Operation Amistad",
      "Operation Maitri"
    ],
    answer: 2,
    explanation: "India launched 'Operation Amistad' to airlift search-and-rescue personnel and medical provisions to Venezuela following dual 7.2 and 7.5 magnitude earthquakes."
  },
  {
    id: "REC-Q-AUG-068",
    articleId: "REC-AUG-068",
    category: "Art & Culture",
    topic: "Bilateral Cultural Relations",
    question: "India and Kyrgyzstan jointly established the 'Manas and Mahabharata' cultural research centre in which city?",
    options: [
      "Osh",
      "Bishkek",
      "Tashkent",
      "Almaty"
    ],
    answer: 1,
    explanation: "The 'Manas and Mahabharata' comparative epic and civilizational study centre was inaugurated in Bishkek, the capital city of Kyrgyzstan."
  },
  {
    id: "REC-Q-AUG-069",
    articleId: "REC-AUG-069",
    category: "International Affairs",
    topic: "Maritime Law",
    question: "Fourteen nations issued the Hague Declaration in August 2026 to reaffirm the binding legal authority of the 2016 arbitral tribunal ruling concerning which maritime body?",
    options: [
      "Black Sea",
      "Strait of Malacca",
      "South China Sea",
      "Gulf of Aden"
    ],
    answer: 2,
    explanation: "The Hague Declaration saw 14 nations reaffirm that the 2016 Permanent Court of Arbitration ruling on China's claims in the South China Sea remains binding under UNCLOS."
  },
  {
    id: "REC-Q-AUG-070",
    articleId: "REC-AUG-070",
    category: "International Affairs",
    topic: "Defence Coalitions",
    question: "An Integrated Anti-Ballistic Missile Coalition established by nine European nations and Ukraine is centered around which air defence system?",
    options: [
      "Patriot PAC-3",
      "Freyja System",
      "SAMP/T Mamba",
      "David's Sling"
    ],
    answer: 1,
    explanation: "The coalition standardizes missile interception architectures around the Ukrainian-engineered 'Freyja' hypersonic anti-ballistic missile and tracking system."
  },
  {
    id: "REC-Q-AUG-071",
    articleId: "REC-AUG-071",
    category: "Appointments",
    topic: "Global Leaders & Cabinets",
    question: "Who was appointed as the United Kingdom's first full Cabinet Minister for Artificial Intelligence in August 2026?",
    options: [
      "Rishi Sunak",
      "Alok Sharma",
      "Kanishka Narayan",
      "Suella Braverman"
    ],
    answer: 2,
    explanation: "Indian-origin Member of Parliament Kanishka Narayan was appointed as the UK's first Cabinet Secretary of State for Artificial Intelligence."
  },
  {
    id: "REC-Q-AUG-072",
    articleId: "REC-AUG-072",
    category: "Economy & Trade",
    topic: "Export Controls",
    question: "In August 2026, Chinese customs recorded zero exports of which group of strategic semiconductor elements to Japan?",
    options: [
      "Lithium, Cobalt, and Nickel",
      "Gallium, Dysprosium, and Terbium",
      "Silicon, Germanium, and Arsenic",
      "Titanium, Tantalum, and Niobium"
    ],
    answer: 1,
    explanation: "China froze outbound shipments of three critical minerals essential for microchips and electric vehicle magnets—gallium, dysprosium, and terbium—to Japan."
  },
  {
    id: "REC-Q-AUG-073",
    articleId: "REC-AUG-073",
    category: "International Affairs",
    topic: "Middle East Politics",
    question: "Who was chosen as the head of the Hamas Political Bureau following the demise of Yahya Sinwar?",
    options: [
      "Khaled Meshaal",
      "Ismail Haniyeh",
      "Khalil al-Hayya",
      "Mousa Abu Marzook"
    ],
    answer: 2,
    explanation: "Khalil al-Hayya was chosen by the Hamas Shura Council as the new chief of the political bureau to succeed Yahya Sinwar."
  },
  {
    id: "REC-Q-AUG-074",
    articleId: "REC-AUG-074",
    category: "State Affairs",
    topic: "Industrial Policies",
    question: "The GO-EAST industrial policy was launched by which state government to promote manufacturing clusters across 15 non-coastal districts?",
    options: [
      "West Bengal",
      "Odisha",
      "Jharkhand",
      "Chhattisgarh"
    ],
    answer: 1,
    explanation: "Odisha launched the GO-EAST framework to provide dedicated subsidies and plug-and-play facilities across 15 non-coastal, underdeveloped districts."
  },
  {
    id: "REC-Q-AUG-075",
    articleId: "REC-AUG-075",
    category: "National Affairs",
    topic: "Interstate River Accords",
    question: "An interstate agreement was signed in August 2026 between Rajasthan and Haryana to pipe 580 MCM of Yamuna floodwater to which arid region?",
    options: [
      "Marwar Region",
      "Shekhawati Region",
      "Mewar Region",
      "Hadoti Region"
    ],
    answer: 1,
    explanation: "The agreement enables Haryana and Rajasthan to transfer 580 MCM of allocated Yamuna floodwater via an underground pipeline to the Shekhawati districts (Churu, Jhunjhunu, Sikar)."
  },
  {
    id: "REC-Q-AUG-076",
    articleId: "REC-AUG-076",
    category: "Environment & Urban Affairs",
    topic: "Clean Mobility",
    question: "The updated Delhi Electric Vehicle Policy, notified in August 2026 to run through 2030, sets a target to establish how many public charging outlets?",
    options: [
      "10,000 Outlets",
      "20,000 Outlets",
      "30,000 Outlets",
      "50,000 Outlets"
    ],
    answer: 2,
    explanation: "The Delhi EV Policy 2026 sets a target to install 30,000 public EV charging points across the National Capital Territory by 2030 alongside complete road tax waivers."
  },
  {
    id: "REC-Q-AUG-077",
    articleId: "REC-AUG-077",
    category: "Health & Welfare",
    topic: "Plantation Worker Welfare",
    question: "West Bengal approved ₹313.3 crore under PMCSPY to construct 321 clinics, rest sheds, and creches for workers in which industry?",
    options: [
      "Jute Mills",
      "Tea Estates",
      "Silk Weaving Hubs",
      "Leather Tanneries"
    ],
    answer: 1,
    explanation: "The funds under PM Cha Sramik Prokolpo Yojana (PMCSPY) are dedicated to setting up 321 healthcare rest shelters and creches for tea garden laborers across northern Bengal."
  },
  {
    id: "REC-Q-AUG-078",
    articleId: "REC-AUG-078",
    category: "National Affairs",
    topic: "River Valley Projects",
    question: "Which four riparian states signed an interstate financial resolution settling long-standing liabilities under the Narmada Water Disputes Tribunal?",
    options: [
      "MP, Gujarat, Maharashtra, and Rajasthan",
      "MP, Gujarat, Rajasthan, and Goa",
      "Maharashtra, Karnataka, Gujarat, and MP",
      "Gujarat, Rajasthan, Haryana, and MP"
    ],
    answer: 0,
    explanation: "Madhya Pradesh, Gujarat, Maharashtra, and Rajasthan executed the final cost-sharing and rehabilitation settlement resolving claims on the Sardar Sarovar Dam on the Narmada river."
  },
  {
    id: "REC-Q-AUG-079",
    articleId: "REC-AUG-079",
    category: "Agriculture & Economy",
    topic: "Specialty Agriculture",
    question: "India's first commercial-scale production of authentic Japanese-style Matcha green tea commenced at which tea estate in Assam?",
    options: [
      "Monabarie Tea Estate, Biswanath",
      "Chota Tingrai Tea Estate, Tinsukia",
      "Halmari Tea Estate, Dibrugarh",
      "Corramore Tea Estate, Darrang"
    ],
    answer: 1,
    explanation: "Commercial shaded Matcha tea production began at the Chota Tingrai Tea Estate in Tinsukia district, Assam, adopting Japanese cultivation and milling equipment."
  },
  {
    id: "REC-Q-AUG-080",
    articleId: "REC-AUG-080",
    category: "Environment & Urban Affairs",
    topic: "Air Quality Missions",
    question: "What is the total outlay approved for the World Bank-supported 'Clean Air, Healthy Delhi' program spanning through 2033?",
    options: [
      "₹3,500 Crore",
      "₹5,200 Crore",
      "₹8,300 Crore",
      "₹12,000 Crore"
    ],
    answer: 2,
    explanation: "The 'Clean Air, Healthy Delhi' program is an ₹8,300 crore World Bank co-financed initiative running over seven years through 2033 to suppress dust and modernize airshed monitoring."
  }
];

// 👉 PUSH BATCH 4 DATA INTO GLOBAL ARRAYS
if (typeof hiddenRecallArticles !== 'undefined') {
  hiddenRecallArticles.push(...augRecallArticlesBatch4);
}
if (typeof recallQuestionPool !== 'undefined') {
  recallQuestionPool.push(...augRecallQuestionsBatch4);
}

/* ==========================================================================
   END OF AUGUST BATCH 4
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
const augRecallQuestionsBatch6 = [
  {
    id: "REC-Q-AUG-101",
    articleId: "REC-AUG-101",
    category: "Economy & Trade",
    topic: "Fisheries and Exports",
    question: "The Government of India simplified the Letter of Authorisation (LoA) regime for deep-sea fishing vessels. What is the total geographical area of India's Exclusive Economic Zone (EEZ)?",
    options: [
      "15 lakh sq. km",
      "20 lakh sq. km",
      "24 lakh sq. km",
      "32 lakh sq. km"
    ],
    answer: 2,
    explanation: "India's Exclusive Economic Zone (EEZ) spans an area of 24 lakh sq. km, where the simplified LoA regime applies for deep-sea fishing."
  },
  {
    id: "REC-Q-AUG-102",
    articleId: "REC-AUG-102",
    category: "International Affairs",
    topic: "International Treaties",
    question: "India deposited its Instrument of Acceptance to officially ratify the WTO Agreement on Fisheries Subsidies. What ratification order did India hold among member nations?",
    options: [
      "100th Member",
      "115th Member",
      "123rd Member",
      "130th Member"
    ],
    answer: 2,
    explanation: "India became the 123rd WTO member nation to formally ratify the Agreement on Fisheries Subsidies."
  },
  {
    id: "REC-Q-AUG-103",
    articleId: "REC-AUG-103",
    category: "Economy & Infrastructure",
    topic: "Economic Roadmaps",
    question: "According to the 10-year National Bioeconomy Roadmap released by NITI Aayog, what is the targeted valuation for India's biotechnology sector by 2035?",
    options: [
      "$300 billion",
      "$500 billion",
      "$691 billion",
      "$1 trillion"
    ],
    answer: 2,
    explanation: "The NITI Aayog master plan targets expanding India's bioeconomy sector to $691 billion by 2035, supported by a ₹50,000 crore Growth Fund."
  },
  {
    id: "REC-Q-AUG-104",
    articleId: "REC-AUG-104",
    category: "Science & Technology",
    topic: "Clean Energy",
    question: "India commissioned the world’s first nuclear process heat hydrogen generation facility at which premier research centre?",
    options: [
      "Bhabha Atomic Research Centre (BARC)",
      "Indira Gandhi Centre for Atomic Research (IGCAR)",
      "Variable Energy Cyclotron Centre (VECC)",
      "Raja Ramanna Centre for Advanced Technology (RRCAT)"
    ],
    answer: 1,
    explanation: "The world's first nuclear process heat hydrogen facility was commissioned at IGCAR in Kalpakkam, Tamil Nadu."
  },
  {
    id: "REC-Q-AUG-105",
    articleId: "REC-AUG-105",
    category: "Science & Technology",
    topic: "Space Technology",
    question: "Where did ISRO successfully conduct the hot test of its heavy-lift LOX/Kerosene Semi-Cryogenic Engine Power Head?",
    options: [
      "Satish Dhawan Space Centre, Sriharikota",
      "Vikram Sarabhai Space Centre, Thiruvananthapuram",
      "ISRO Propulsion Complex, Mahendragiri",
      "Liquid Propulsion Systems Centre, Bengaluru"
    ],
    answer: 2,
    explanation: "The successful hot test of the semi-cryogenic engine power head was executed at the ISRO Propulsion Complex (IPRC) in Mahendragiri."
  },
  {
    id: "REC-Q-AUG-106",
    articleId: "REC-AUG-106",
    category: "Science & Technology",
    topic: "Quantum Physics",
    question: "Quantum physicists at the University of Innsbruck achieved a breakthrough by observing a new quantum state known as the 'Fractional Fermi Sea' in tubes made of which ultracold atoms?",
    options: [
      "Rubidium atoms",
      "Cesium atoms",
      "Helium atoms",
      "Potassium atoms"
    ],
    answer: 1,
    explanation: "The 'Fractional Fermi Sea' state was observed in one-dimensional tubes of ultracold cesium atoms."
  },
  {
    id: "REC-Q-AUG-107",
    articleId: "REC-AUG-107",
    category: "Science & Technology",
    topic: "Medical Technology",
    question: "Researchers from which institution collaborated with ICMR-NIRRCH to develop a microfluidic 'Placenta-on-Chip' device to simulate the human maternal-fetal barrier?",
    options: [
      "IIT Delhi",
      "IISc Bengaluru",
      "IIT Bombay",
      "AIIMS New Delhi"
    ],
    answer: 2,
    explanation: "The 'Placenta-on-Chip' device was developed collaboratively by IIT Bombay and ICMR-NIRRCH for reproductive toxicology research."
  },
  {
    id: "REC-Q-AUG-108",
    articleId: "REC-AUG-108",
    category: "Science & Technology",
    topic: "Astronomy",
    question: "Astronomers recently detected escaping helium plumes around which habitable-zone super-Earth exoplanet?",
    options: [
      "Proxima Centauri b",
      "Kepler-186f",
      "TRAPPIST-1e",
      "LHS 1140b"
    ],
    answer: 3,
    explanation: "Escaping atmospheric helium plumes were detected around LHS 1140b, providing clues to how rocky super-Earths retain their atmospheres."
  },
  {
    id: "REC-Q-AUG-109",
    articleId: "REC-AUG-109",
    category: "Science & Defence",
    topic: "Aerospace Indigenisation",
    question: "What is the name of the fully indigenous 4.5 kN micro-turbofan engine unveiled by domestic startup Paninian India for powering cruise missiles and UAVs?",
    options: [
      "Manik",
      "Yantur",
      "Kaveri",
      "Vayus"
    ],
    answer: 1,
    explanation: "Paninian India unveiled the indigenous 'Yantur' 4.5 kN micro-turbofan engine designed for drones and cruise missiles."
  },
  {
    id: "REC-Q-AUG-110",
    articleId: "REC-AUG-110",
    category: "Science & Technology",
    topic: "Geology",
    question: "Geologists determined that the Pichhore orbicular granite formation, making it the second-oldest orbicular rock on Earth, is located in which state?",
    options: [
      "Odisha",
      "Madhya Pradesh",
      "Jharkhand",
      "Chhattisgarh"
    ],
    answer: 1,
    explanation: "The 2.56-billion-year-old Pichhore orbicular granite formation was discovered in Shivpuri district, Madhya Pradesh."
  },
  {
    id: "REC-Q-AUG-111",
    articleId: "REC-AUG-111",
    category: "Health & Welfare",
    topic: "Pharmaceuticals",
    question: "The CDSCO officially approved the drug Wegovy (semaglutide 2.4 mg) for the treatment of which medical condition, expanding its use beyond weight management?",
    options: [
      "Type 1 Diabetes",
      "MASH (Metabolic Dysfunction-Associated Steatohepatitis)",
      "Chronic Kidney Disease",
      "Rheumatoid Arthritis"
    ],
    answer: 1,
    explanation: "Wegovy was approved by CDSCO for treating MASH (Metabolic Dysfunction-Associated Steatohepatitis)."
  },
  {
    id: "REC-Q-AUG-112",
    articleId: "REC-AUG-112",
    category: "Defence",
    topic: "Weapons Systems",
    question: "The HELINA missile, which completed integration and firing clearance trials on the LCH Prachand, belongs to which class of weapons?",
    options: [
      "Air-to-Air Missile (AAM)",
      "Anti-Radiation Missile (ARM)",
      "Anti-Tank Guided Missile (ATGM)",
      "Surface-to-Air Missile (SAM)"
    ],
    answer: 2,
    explanation: "HELINA stands for Helicopter-launched NAG, which is a sophisticated Anti-Tank Guided Missile (ATGM)."
  },
  {
    id: "REC-Q-AUG-113",
    articleId: "REC-AUG-113",
    category: "Defence",
    topic: "Multilateral Exercises",
    question: "The 30th edition of RIMPAC, the world's largest international maritime warfare exercise, commenced in which region?",
    options: [
      "South China Sea",
      "Hawaii and Southern California",
      "Bay of Bengal",
      "Mediterranean Sea"
    ],
    answer: 1,
    explanation: "The 30th edition of the Rim of the Pacific (RIMPAC) exercise began in Hawaii and Southern California."
  },
  {
    id: "REC-Q-AUG-114",
    articleId: "REC-AUG-114",
    category: "Defence",
    topic: "Strategic Infrastructure",
    question: "The Border Roads Organisation (BRO) celebrated the 16th Raising Day of its strategic infrastructure initiative, Project BRAHMANK, in which state?",
    options: [
      "Sikkim",
      "Ladakh",
      "Arunachal Pradesh",
      "Uttarakhand"
    ],
    answer: 2,
    explanation: "Project BRAHMANK celebrated its 16th Raising Day in Pasighat, Arunachal Pradesh."
  },
  {
    id: "REC-Q-AUG-115",
    articleId: "REC-AUG-115",
    category: "Defence",
    topic: "Military Drones",
    question: "What specific name was given to the dedicated Remotely Piloted Aircraft (RPA) units established under the Army Aviation Corps to oversee border drone swarms?",
    options: [
      "Garud Squadrons",
      "Baaz Battalions",
      "Trishul Regiments",
      "Netra Wings"
    ],
    answer: 1,
    explanation: "The Indian Army established dedicated 'Baaz Battalions' to oversee Intelligence, Surveillance, and Reconnaissance (ISR) drone operations."
  },
  {
    id: "REC-Q-AUG-116",
    articleId: "REC-AUG-116",
    category: "Appointments",
    topic: "Security Agencies",
    question: "Which senior IPS officer was appointed as the new Director of the Intelligence Bureau (IB) in August 2026?",
    options: [
      "Tapan Deka",
      "Pravin Sood",
      "Mahesh Dixit",
      "Ravi Sinha"
    ],
    answer: 2,
    explanation: "Mahesh Dixit, a 1993-batch IPS officer, was appointed as the new Director of the Intelligence Bureau (IB)."
  },
  {
    id: "REC-Q-AUG-117",
    articleId: "REC-AUG-117",
    category: "Appointments",
    topic: "Space Administration",
    question: "Who was named as the new Director of the Vikram Sarabhai Space Centre (VSSC) in Thiruvananthapuram?",
    options: [
      "Dr. S. Unnikrishnan Nair",
      "Dr. V. Narayanan",
      "Dr. U.P. Rajeev",
      "Dr. P. Veeramuthuvel"
    ],
    answer: 2,
    explanation: "Prominent aerospace scientist Dr. U.P. Rajeev was appointed as the Director of ISRO's VSSC."
  },
  {
    id: "REC-Q-AUG-118",
    articleId: "REC-AUG-118",
    category: "Appointments",
    topic: "Financial Administration",
    question: "Who was granted a six-month tenure extension as the Chairman of the Central Board of Direct Taxes (CBDT) in August 2026?",
    options: [
      "Nitin Gupta",
      "Ravi Agrawal",
      "Sanjay Kumar Agarwal",
      "Vivek Johri"
    ],
    answer: 1,
    explanation: "Ravi Agrawal was reappointed as the Chairman of the CBDT for an additional six months to ensure policy continuity."
  },
  {
    id: "REC-Q-AUG-119",
    articleId: "REC-AUG-119",
    category: "International Affairs",
    topic: "Bilateral Summits",
    question: "Which Japanese Prime Minister visited New Delhi to attend the 16th India-Japan Annual Summit with PM Narendra Modi?",
    options: [
      "Fumio Kishida",
      "Yoshihide Suga",
      "Sanae Takaichi",
      "Taro Kono"
    ],
    answer: 2,
    explanation: "Japanese Prime Minister Sanae Takaichi visited New Delhi for the 16th India-Japan Annual Summit."
  },
  {
    id: "REC-Q-AUG-120",
    articleId: "REC-AUG-120",
    category: "International Affairs",
    topic: "Multilateral Meetings",
    question: "India hosted the 5th BIMSTEC National Security Advisers’ Conference in which city to discuss maritime terrorism?",
    options: [
      "Kolkata",
      "Chennai",
      "New Delhi",
      "Visakhapatnam"
    ],
    answer: 2,
    explanation: "The 5th BIMSTEC National Security Advisers' Conference was hosted in New Delhi to establish an operational grid against transnational crime."
  }
];

// 👉 PUSH BATCH 6 DATA INTO GLOBAL ARRAYS
if (typeof hiddenRecallArticles !== 'undefined') {
  hiddenRecallArticles.push(...augRecallArticlesBatch6);
}
if (typeof recallQuestionPool !== 'undefined') {
  recallQuestionPool.push(...augRecallQuestionsBatch6);
}

/* ==========================================================================
   END OF AUGUST BATCH 6
   ========================================================================== */
/* ==========================================================================
   AUGUST 2026 - BATCH 7 (ITEMS 121 TO 136) - FINAL AUGUST BATCH
   ========================================================================== */

const augRecallArticlesBatch7 = [
  {
    id: "REC-AUG-121",
    date: "2026-08-30",
    month: "Aug 2026",
    category: "Economy & Technology",
    title: "SEBI Introduces IT Resilience Index (ITRI)",
    summary: "SEBI launched the Information Technology Resilience Index (ITRI) to evaluate the cyber readiness of stock exchanges and clearing corporations.",
    whatHappened: "The Securities and Exchange Board of India (SEBI) introduced the Information Technology Resilience Index (ITRI). The framework mandates that Market Infrastructure Institutions (MIIs) maintain a high quantitative score to prove their operational resilience against cyber-attacks and outages.",
    importantPoints: [
      "Launched by the Securities and Exchange Board of India (SEBI).",
      "Measures cyber readiness and operational resilience.",
      "Applicable to Market Infrastructure Institutions (MIIs)."
    ],
    examFacts: ["Index: ITRI (Information Technology Resilience Index)", "Regulator: SEBI"],
    quickRemember: "SEBI launched the IT Resilience Index (ITRI) to track the cyber readiness of market institutions.",
    audioText: "SEBI launched the Information Technology Resilience Index, or ITRI, to evaluate the cyber readiness of stock exchanges.",
    source: "SEBI",
    importantFor: ["SSC CGL", "Bank PO"]
  },
  {
    id: "REC-AUG-122",
    date: "2026-08-29",
    month: "Aug 2026",
    category: "Science & Technology",
    title: "Kavach 4.0 Approved for Izzatnagar Division",
    summary: "The Ministry of Railways approved the deployment of Kavach 4.0 across the North Eastern Railway's Izzatnagar Division.",
    whatHappened: "The Ministry of Railways approved the rollout of the upgraded Kavach 4.0 automatic train protection system across the Izzatnagar Division of the North Eastern Railway (NER) to ensure zero-collision capabilities on high-density routes.",
    importantPoints: [
      "Upgraded automatic train protection system: Kavach 4.0.",
      "Approved for the Izzatnagar Division.",
      "Operates under the North Eastern Railway (NER) zone."
    ],
    examFacts: ["System: Kavach 4.0", "Railway Zone: North Eastern Railway (NER)", "Division: Izzatnagar"],
    quickRemember: "Kavach 4.0 train protection system was approved for NER's Izzatnagar Division.",
    audioText: "The Railways Ministry approved the deployment of the Kavach 4.0 train protection system in the Izzatnagar Division.",
    source: "Ministry of Railways",
    importantFor: ["SSC CGL", "RRB NTPC"]
  },
  {
    id: "REC-AUG-123",
    date: "2026-08-28",
    month: "Aug 2026",
    category: "Government Schemes",
    title: "Gramin Gyan Setu App Launched",
    summary: "The Ministry of Rural Development launched the Gramin Gyan Setu App to provide digital agricultural and financial literacy to farmers.",
    whatHappened: "The Ministry of Rural Development unveiled the 'Gramin Gyan Setu' mobile application. The app connects rural households with real-time agricultural advisories, micro-finance schemes, and e-learning modules in 12 regional languages.",
    importantPoints: [
      "App name: Gramin Gyan Setu.",
      "Launched by the Ministry of Rural Development.",
      "Provides digital literacy and agricultural advisories in 12 regional languages."
    ],
    examFacts: ["App: Gramin Gyan Setu", "Ministry: Rural Development", "Languages: 12"],
    quickRemember: "Gramin Gyan Setu App was launched by the Rural Development Ministry for digital farmer literacy.",
    audioText: "The Ministry of Rural Development launched the Gramin Gyan Setu app to provide digital agricultural literacy to farmers.",
    source: "Ministry of Rural Development",
    importantFor: ["SSC CGL", "State PCS"]
  },
  {
    id: "REC-AUG-124",
    date: "2026-08-27",
    month: "Aug 2026",
    category: "International Affairs",
    title: "India-Uzbekistan Comprehensive Strategic Partnership",
    summary: "India and Uzbekistan elevated their bilateral ties to a Comprehensive Strategic Partnership during a summit in New Delhi.",
    whatHappened: "India and Uzbekistan officially upgraded their diplomatic relations to a 'Comprehensive Strategic Partnership' during the Uzbek President's state visit to New Delhi. The agreement focuses on defense co-production, digital public infrastructure, and counter-terrorism.",
    importantPoints: [
      "Bilateral ties elevated to Comprehensive Strategic Partnership.",
      "Focuses on defense, digital public infrastructure, and counter-terrorism.",
      "Signed during the Uzbek President's visit to New Delhi."
    ],
    examFacts: ["Partner Country: Uzbekistan", "Diplomatic Status: Comprehensive Strategic Partnership"],
    quickRemember: "India and Uzbekistan upgraded their ties to a Comprehensive Strategic Partnership.",
    audioText: "India and Uzbekistan elevated their diplomatic relations to a Comprehensive Strategic Partnership during a summit in New Delhi.",
    source: "MEA",
    importantFor: ["UPSC", "CDS"]
  },
  {
    id: "REC-AUG-125",
    date: "2026-08-26",
    month: "Aug 2026",
    category: "Government Schemes",
    title: "Cabinet Extends PM-KISAN Scheme Till 2031",
    summary: "The Union Cabinet approved the extension of the PM-KISAN Samman Nidhi scheme until 2031.",
    whatHappened: "The Union Cabinet chaired by PM Narendra Modi granted a five-year extension to the Pradhan Mantri Kisan Samman Nidhi (PM-KISAN) scheme till 2031. The scheme provides income support of ₹6,000 per year to landholding farmer families.",
    importantPoints: [
      "PM-KISAN scheme extended till 2031.",
      "Provides ₹6,000 annual income support to farmers.",
      "100% centrally funded scheme."
    ],
    examFacts: ["Scheme: PM-KISAN", "Extension Year: 2031", "Annual Benefit: ₹6,000"],
    quickRemember: "The PM-KISAN Samman Nidhi scheme was officially extended for five years until 2031.",
    audioText: "The Union Cabinet approved the extension of the PM-KISAN Samman Nidhi scheme until 2031, ensuring continued financial support for farmers.",
    source: "Union Cabinet",
    importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-AUG-126",
    date: "2026-08-25",
    month: "Aug 2026",
    category: "Polity & Governance",
    title: "Vande Mataram Granted Same Legal Protection as National Anthem",
    summary: "The Supreme Court ruled that the national song 'Vande Mataram' enjoys the same legal protection as the National Anthem.",
    whatHappened: "In a landmark judgment, the Supreme Court of India decreed that the national song 'Vande Mataram' must be accorded the same legal and constitutional protection from intentional insult and disruption as the National Anthem under the Prevention of Insults to National Honour Act.",
    importantPoints: [
      "Supreme Court ruling on 'Vande Mataram'.",
      "Granted equal legal protection as the National Anthem.",
      "Covered under the Prevention of Insults to National Honour Act."
    ],
    examFacts: ["Subject: Vande Mataram", "Legal Framework: Prevention of Insults to National Honour Act"],
    quickRemember: "The Supreme Court granted 'Vande Mataram' the exact same legal protection as the National Anthem.",
    audioText: "The Supreme Court ruled that the national song Vande Mataram holds the same legal protection as the National Anthem.",
    source: "Supreme Court of India",
    importantFor: ["UPSC", "SSC CGL"]
  },
  {
    id: "REC-AUG-127",
    date: "2026-08-24",
    month: "Aug 2026",
    category: "Sports",
    title: "Cameroon Wins Women's Africa Cup of Nations 2026",
    summary: "Cameroon secured their maiden Women's Africa Cup of Nations title by defeating Nigeria.",
    whatHappened: "The Cameroon women's national football team won the 2026 Women's Africa Cup of Nations (WAFCON) by defeating defending champions Nigeria 2-1 in the final, securing their first-ever continental title.",
    importantPoints: [
      "Cameroon won the 2026 Women's Africa Cup of Nations.",
      "Defeated defending champions Nigeria 2-1 in the final.",
      "This is Cameroon's first WAFCON title."
    ],
    examFacts: ["Winner: Cameroon", "Runner-up: Nigeria", "Tournament: Women's Africa Cup of Nations (WAFCON)"],
    quickRemember: "Cameroon defeated Nigeria to win the 2026 Women's Africa Cup of Nations.",
    audioText: "Cameroon won their first-ever Women's Africa Cup of Nations football title by defeating Nigeria 2-1.",
    source: "CAF",
    importantFor: ["SSC CGL", "SSC CHSL"]
  },
  {
    id: "REC-AUG-128",
    date: "2026-08-23",
    month: "Aug 2026",
    category: "Science & Technology",
    title: "E-Samudra Digital Platform for Maritime Governance",
    summary: "The Ministry of Ports launched the E-Samudra digital platform for comprehensive maritime and shipping governance.",
    whatHappened: "The Ministry of Ports, Shipping and Waterways launched the 'E-Samudra' digital platform. It acts as a single-window portal integrating vessel registration, seafarer licensing, and real-time maritime traffic monitoring for enhanced coastal governance.",
    importantPoints: [
      "Digital portal named 'E-Samudra'.",
      "Launched by the Ministry of Ports, Shipping and Waterways.",
      "Provides single-window maritime governance and vessel registration."
    ],
    examFacts: ["Platform: E-Samudra", "Ministry: Ports, Shipping and Waterways", "Purpose: Maritime Governance"],
    quickRemember: "The E-Samudra digital platform was launched for single-window maritime governance.",
    audioText: "The Ministry of Ports launched the E-Samudra digital platform to provide single-window maritime and shipping governance.",
    source: "Ministry of Ports",
    importantFor: ["SSC CGL", "CDS"]
  },
  {
    id: "REC-AUG-129",
    date: "2026-08-22",
    month: "Aug 2026",
    category: "Defence & Security",
    title: "9th National Security Strategies Conference 2026",
    summary: "The 9th National Security Strategies Conference concluded in New Delhi with a focus on cyber warfare.",
    whatHappened: "Union Home Minister Amit Shah chaired the 9th National Security Strategies Conference 2026 in New Delhi. The conference gathered top police and intelligence chiefs to formulate a unified response against digital arrest scams, cyber warfare, and narco-terrorism.",
    importantPoints: [
      "9th edition of the National Security Strategies Conference.",
      "Held in New Delhi and chaired by Union Home Minister Amit Shah.",
      "Focused heavily on cyber warfare and digital arrest scams."
    ],
    examFacts: ["Conference: 9th National Security Strategies Conference", "Chair: Amit Shah", "Location: New Delhi"],
    quickRemember: "The 9th National Security Strategies Conference was held in New Delhi, focusing on cyber warfare.",
    audioText: "The ninth National Security Strategies Conference was chaired by Amit Shah in New Delhi to address cyber warfare threats.",
    source: "Ministry of Home Affairs",
    importantFor: ["CDS", "UPSC"]
  },
  {
    id: "REC-AUG-130",
    date: "2026-08-21",
    month: "Aug 2026",
    category: "Science & Technology",
    title: "Bio-Inspired Coating for 3D-Printed Bone Implants",
    summary: "Researchers at IISc Bengaluru developed a bio-inspired coating that accelerates healing in 3D-printed bone implants.",
    whatHappened: "Scientists at the Indian Institute of Science (IISc) Bengaluru developed a novel bio-inspired nanocomposite coating for 3D-printed titanium bone implants. The coating significantly reduces rejection rates and accelerates natural tissue integration.",
    importantPoints: [
      "Bio-inspired nanocomposite coating for titanium bone implants.",
      "Developed by IISc Bengaluru.",
      "Accelerates natural tissue integration and reduces rejection."
    ],
    examFacts: ["Innovation: Bio-inspired coating for bone implants", "Institute: IISc Bengaluru"],
    quickRemember: "IISc Bengaluru developed a bio-inspired coating for 3D-printed bone implants to accelerate healing.",
    audioText: "Researchers at IISc Bengaluru successfully developed a bio-inspired coating for 3D-printed bone implants to accelerate tissue healing.",
    source: "IISc",
    importantFor: ["SSC CGL", "State PCS"]
  },
  {
    id: "REC-AUG-131",
    date: "2026-08-20",
    month: "Aug 2026",
    category: "Economy & Technology",
    title: "CBDC-Based Direct Benefit Transfer for PMGKAY",
    summary: "The government launched pilot Direct Benefit Transfers using the Digital Rupee for PMGKAY beneficiaries.",
    whatHappened: "The Reserve Bank of India, in coordination with the Ministry of Finance, launched the first pilot of CBDC-based (Central Bank Digital Currency) Direct Benefit Transfers (DBT) to efficiently deliver subsidies under the Pradhan Mantri Garib Kalyan Anna Yojana (PMGKAY).",
    importantPoints: [
      "First pilot of CBDC-based Direct Benefit Transfers (DBT).",
      "Executed using the Digital Rupee.",
      "Targeted at PMGKAY (Pradhan Mantri Garib Kalyan Anna Yojana) beneficiaries."
    ],
    examFacts: ["Technology: CBDC (Digital Rupee)", "Scheme: PMGKAY", "Use Case: Direct Benefit Transfer (DBT)"],
    quickRemember: "The government launched CBDC-based Direct Benefit Transfers for the PMGKAY scheme.",
    audioText: "The RBI launched pilot Direct Benefit Transfers using the Digital Rupee for beneficiaries of the PMGKAY scheme.",
    source: "Ministry of Finance",
    importantFor: ["SSC CGL", "Bank PO", "UPSC"]
  },
  {
    id: "REC-AUG-132",
    date: "2026-08-19",
    month: "Aug 2026",
    category: "Environment",
    title: "India Launches First National Guide to Grasslands",
    summary: "The MoEFCC released India's first comprehensive 'National Guide to Grasslands' for ecological restoration.",
    whatHappened: "The Ministry of Environment, Forest and Climate Change (MoEFCC) released India's first 'National Guide to Grasslands'. The scientific manual identifies 14 distinct grassland biomes across the country and provides protocols for their restoration and conservation.",
    importantPoints: [
      "India's first 'National Guide to Grasslands'.",
      "Released by the MoEFCC.",
      "Identifies 14 distinct grassland biomes across the country."
    ],
    examFacts: ["Document: National Guide to Grasslands", "Ministry: MoEFCC", "Biomes Identified: 14"],
    quickRemember: "The MoEFCC released India's first National Guide to Grasslands covering 14 biomes.",
    audioText: "The Environment Ministry released India's first National Guide to Grasslands to promote the conservation of fourteen distinct biomes.",
    source: "MoEFCC",
    importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-AUG-133",
    date: "2026-08-18",
    month: "Aug 2026",
    category: "Environment & Education",
    title: "Prakriti Gyan Dham Eco-Educational Hub Opened",
    summary: "India's largest eco-educational hub, 'Prakriti Gyan Dham', was inaugurated in Dehradun.",
    whatHappened: "The Uttarakhand State Government inaugurated 'Prakriti Gyan Dham' in Dehradun, establishing India's largest eco-educational hub. It features interactive biodiversity exhibits and climate change awareness centres for students.",
    importantPoints: [
      "India's largest eco-educational hub.",
      "Named 'Prakriti Gyan Dham'.",
      "Located in Dehradun, Uttarakhand."
    ],
    examFacts: ["Facility: Prakriti Gyan Dham", "Location: Dehradun, Uttarakhand"],
    quickRemember: "The 'Prakriti Gyan Dham' eco-educational hub was inaugurated in Dehradun, Uttarakhand.",
    audioText: "India's largest eco-educational hub named Prakriti Gyan Dham was inaugurated in Dehradun to promote environmental awareness.",
    source: "Uttarakhand State Govt",
    importantFor: ["SSC CGL", "State PCS"]
  },
  {
    id: "REC-AUG-134",
    date: "2026-08-17",
    month: "Aug 2026",
    category: "Sports & Government Schemes",
    title: "Cabinet Approves Revamped Khelo India Scheme",
    summary: "The Union Cabinet approved a revamped Khelo India Scheme with an increased budget for grassroots sports.",
    whatHappened: "The Union Cabinet approved a comprehensive revamp of the Khelo India Scheme. The new structure increases budgetary allocations for establishing high-performance grassroots training centres and provides lifetime medical cover for national-level athletes.",
    importantPoints: [
      "Revamped Khelo India Scheme approved by the Cabinet.",
      "Focuses on high-performance grassroots training centres.",
      "Introduces lifetime medical cover for national-level athletes."
    ],
    examFacts: ["Scheme: Revamped Khelo India Scheme", "New Feature: Lifetime medical cover for national athletes"],
    quickRemember: "The Union Cabinet approved a revamped Khelo India Scheme featuring lifetime medical cover for athletes.",
    audioText: "The Union Cabinet approved the revamped Khelo India Scheme, which now includes lifetime medical coverage for national athletes.",
    source: "Ministry of Youth Affairs & Sports",
    importantFor: ["SSC CGL", "SSC CHSL"]
  },
  {
    id: "REC-AUG-135",
    date: "2026-08-16",
    month: "Aug 2026",
    category: "Government Schemes",
    title: "Pradhan Mantri Surya Sarovar Yojana Approved",
    summary: "The Cabinet approved the PM Surya Sarovar Yojana to install floating solar panels on reservoirs.",
    whatHappened: "The Union Cabinet launched the Pradhan Mantri Surya Sarovar Yojana, a renewable energy initiative aimed at installing floating solar photovoltaic panels on major dams and reservoirs to reduce water evaporation and generate clean electricity.",
    importantPoints: [
      "Scheme name: Pradhan Mantri Surya Sarovar Yojana.",
      "Aims to install floating solar panels on dams and reservoirs.",
      "Dual purpose: Generating clean energy and reducing water evaporation."
    ],
    examFacts: ["Scheme: PM Surya Sarovar Yojana", "Focus: Floating Solar Panels on Reservoirs"],
    quickRemember: "The PM Surya Sarovar Yojana was approved to install floating solar panels on water reservoirs.",
    audioText: "The Union Cabinet approved the Pradhan Mantri Surya Sarovar Yojana to install floating solar panels on major water reservoirs.",
    source: "Ministry of New and Renewable Energy",
    importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-AUG-136",
    date: "2026-08-15",
    month: "Aug 2026",
    category: "Awards & Honours",
    title: "Sarvottam Jeevan Raksha Padak 2026 Awarded",
    summary: "The President of India awarded the Sarvottam Jeevan Raksha Padak to 5 citizens for conspicuous gallantry.",
    whatHappened: "On the occasion of Independence Day, the President of India awarded the Sarvottam Jeevan Raksha Padak 2026 to five citizens for conspicuous gallantry in saving lives under extreme circumstances, including rescue efforts during the recent floods.",
    importantPoints: [
      "Award: Sarvottam Jeevan Raksha Padak 2026.",
      "Awarded to 5 citizens for conspicuous gallantry in saving lives.",
      "Announced on Independence Day by the President of India."
    ],
    examFacts: ["Award: Sarvottam Jeevan Raksha Padak", "Number of Recipients: 5", "Occasion: Independence Day"],
    quickRemember: "The Sarvottam Jeevan Raksha Padak 2026 was awarded to 5 citizens for saving lives.",
    audioText: "The President of India awarded the Sarvottam Jeevan Raksha Padak to five citizens for displaying conspicuous gallantry in saving lives.",
    source: "Ministry of Home Affairs",
    importantFor: ["SSC CGL", "State PCS"]
  }
];

const augRecallQuestionsBatch7 = [
  {
    id: "REC-Q-AUG-121",
    articleId: "REC-AUG-121",
    category: "Economy & Technology",
    topic: "Financial Regulation",
    question: "The Information Technology Resilience Index (ITRI), designed to evaluate the cyber readiness of stock exchanges, was introduced by which regulatory body?",
    options: ["Reserve Bank of India (RBI)", "Securities and Exchange Board of India (SEBI)", "Insurance Regulatory and Development Authority (IRDAI)", "Pension Fund Regulatory and Development Authority (PFRDA)"],
    answer: 1,
    explanation: "SEBI launched the Information Technology Resilience Index (ITRI) to ensure Market Infrastructure Institutions are resilient against cyber-attacks."
  },
  {
    id: "REC-Q-AUG-122",
    articleId: "REC-AUG-122",
    category: "Science & Technology",
    topic: "Railway Safety",
    question: "The Ministry of Railways recently approved the deployment of the upgraded Kavach 4.0 automatic train protection system in which railway division?",
    options: ["Izzatnagar Division", "Danapur Division", "Secunderabad Division", "Hubballi Division"],
    answer: 0,
    explanation: "The Kavach 4.0 system was approved for rollout across the high-density Izzatnagar Division of the North Eastern Railway (NER)."
  },
  {
    id: "REC-Q-AUG-123",
    articleId: "REC-AUG-123",
    category: "Government Schemes",
    topic: "Digital Agriculture",
    question: "Which Union Ministry launched the 'Gramin Gyan Setu' mobile app to provide digital agricultural advisories and financial literacy to farmers in 12 regional languages?",
    options: ["Ministry of Agriculture & Farmers Welfare", "Ministry of Rural Development", "Ministry of Electronics and Information Technology", "Ministry of Panchayati Raj"],
    answer: 1,
    explanation: "The Gramin Gyan Setu app was officially launched by the Ministry of Rural Development to enhance digital learning for rural households."
  },
  {
    id: "REC-Q-AUG-124",
    articleId: "REC-AUG-124",
    category: "International Affairs",
    topic: "Bilateral Relations",
    question: "During a diplomatic summit in New Delhi in August 2026, India elevated its bilateral ties to a 'Comprehensive Strategic Partnership' with which Central Asian nation?",
    options: ["Kazakhstan", "Kyrgyzstan", "Tajikistan", "Uzbekistan"],
    answer: 3,
    explanation: "India and Uzbekistan upgraded their relationship to a Comprehensive Strategic Partnership focusing on defense and digital public infrastructure."
  },
  {
    id: "REC-Q-AUG-125",
    articleId: "REC-AUG-125",
    category: "Government Schemes",
    topic: "Farmer Welfare",
    question: "The Union Cabinet has extended the Pradhan Mantri Kisan Samman Nidhi (PM-KISAN) scheme, which provides ₹6,000 annual income support, until which year?",
    options: ["2028", "2029", "2030", "2031"],
    answer: 3,
    explanation: "The Union Cabinet granted a five-year extension to the PM-KISAN scheme, ensuring it continues to provide financial support until 2031."
  },
  {
    id: "REC-Q-AUG-126",
    articleId: "REC-AUG-126",
    category: "Polity & Governance",
    topic: "Constitutional Law",
    question: "In a landmark judgment, the Supreme Court ruled that which national composition enjoys the exact same legal protection as the National Anthem under the Prevention of Insults to National Honour Act?",
    options: ["Sare Jahan Se Achha", "Vande Mataram", "Maa Tujhe Salaam", "Vijayi Vishwa Tiranga Pyara"],
    answer: 1,
    explanation: "The Supreme Court decreed that the national song 'Vande Mataram' must be accorded the same constitutional protection from insult as the National Anthem."
  },
  {
    id: "REC-Q-AUG-127",
    articleId: "REC-AUG-127",
    category: "Sports",
    topic: "International Football",
    question: "Which country secured its maiden Women's Africa Cup of Nations (WAFCON) title in 2026 by defeating defending champions Nigeria?",
    options: ["South Africa", "Morocco", "Cameroon", "Senegal"],
    answer: 2,
    explanation: "The Cameroon women's national football team defeated Nigeria 2-1 to win their first-ever Women's Africa Cup of Nations title."
  },
  {
    id: "REC-Q-AUG-128",
    articleId: "REC-AUG-128",
    category: "Science & Technology",
    topic: "E-Governance",
    question: "What is the name of the digital platform launched by the Ministry of Ports for comprehensive single-window maritime governance and vessel registration?",
    options: ["Sagar-Setu", "E-Samudra", "Port-Grid", "Jal-Vyapar"],
    answer: 1,
    explanation: "The Ministry of Ports launched the 'E-Samudra' platform to integrate seafarer licensing and real-time maritime traffic monitoring."
  },
  {
    id: "REC-Q-AUG-129",
    articleId: "REC-AUG-129",
    category: "Defence & Security",
    topic: "Internal Security",
    question: "The 9th National Security Strategies Conference, chaired by Union Home Minister Amit Shah in New Delhi, heavily focused on formulating responses against which rising threat?",
    options: ["Left-Wing Extremism", "Cyber warfare and digital arrest scams", "Piracy in the Arabian Sea", "Illegal wildlife trafficking"],
    answer: 1,
    explanation: "The 9th National Security Strategies Conference gathered intelligence chiefs to formulate a unified response against digital arrest scams and cyber warfare."
  },
  {
    id: "REC-Q-AUG-130",
    articleId: "REC-AUG-130",
    category: "Science & Technology",
    topic: "Medical Research",
    question: "Researchers at which premier Indian institute developed a bio-inspired nanocomposite coating for 3D-printed titanium bone implants to accelerate tissue healing?",
    options: ["IIT Madras", "AIIMS New Delhi", "IISc Bengaluru", "CSIR-NCL Pune"],
    answer: 2,
    explanation: "Scientists at the Indian Institute of Science (IISc) Bengaluru developed the novel coating to reduce rejection rates of 3D-printed bone implants."
  },
  {
    id: "REC-Q-AUG-131",
    articleId: "REC-AUG-131",
    category: "Economy & Technology",
    topic: "Digital Currency",
    question: "The RBI launched its first pilot project using the Digital Rupee (CBDC) to execute Direct Benefit Transfers (DBT) for beneficiaries of which major welfare scheme?",
    options: ["PM-KISAN", "MGNREGA", "PMGKAY (Pradhan Mantri Garib Kalyan Anna Yojana)", "PM Awas Yojana"],
    answer: 2,
    explanation: "The first CBDC-based Direct Benefit Transfer pilot was launched specifically to deliver subsidies under the PMGKAY scheme."
  },
  {
    id: "REC-Q-AUG-132",
    articleId: "REC-AUG-132",
    category: "Environment",
    topic: "Ecological Conservation",
    question: "The MoEFCC released India's first comprehensive 'National Guide to Grasslands'. How many distinct grassland biomes does the scientific manual identify across the country?",
    options: ["8", "10", "14", "18"],
    answer: 2,
    explanation: "The newly released National Guide to Grasslands identifies 14 distinct grassland biomes and provides protocols for their restoration."
  },
  {
    id: "REC-Q-AUG-133",
    articleId: "REC-AUG-133",
    category: "Environment & Education",
    topic: "Eco-Tourism",
    question: "India's largest eco-educational hub, named 'Prakriti Gyan Dham', was recently inaugurated in which city to promote biodiversity awareness?",
    options: ["Shimla", "Dehradun", "Gangtok", "Shillong"],
    answer: 1,
    explanation: "The Uttarakhand State Government inaugurated the 'Prakriti Gyan Dham' eco-educational hub in Dehradun."
  },
  {
    id: "REC-Q-AUG-134",
    articleId: "REC-AUG-134",
    category: "Sports & Government Schemes",
    topic: "Sports Welfare",
    question: "The recently revamped Khelo India Scheme, approved by the Union Cabinet, introduced which major new benefit for national-level athletes?",
    options: ["Guaranteed government employment", "Lifetime medical cover", "Fully funded foreign university scholarships", "Exemption from income tax"],
    answer: 1,
    explanation: "The revamped Khelo India Scheme includes a major structural addition providing lifetime medical cover for national-level athletes."
  },
  {
    id: "REC-Q-AUG-135",
    articleId: "REC-AUG-135",
    category: "Government Schemes",
    topic: "Renewable Energy",
    question: "What is the primary objective of the newly launched Pradhan Mantri Surya Sarovar Yojana?",
    options: ["Providing solar pumps to farmers", "Installing floating solar panels on major dams and reservoirs", "Subsidizing rooftop solar for urban households", "Developing solar parks in desert regions"],
    answer: 1,
    explanation: "The PM Surya Sarovar Yojana aims to install floating solar photovoltaic panels on water reservoirs to generate clean energy and reduce evaporation."
  },
  {
    id: "REC-Q-AUG-136",
    articleId: "REC-AUG-136",
    category: "Awards & Honours",
    topic: "Civilian Gallantry Awards",
    question: "On Independence Day 2026, the President of India awarded the Sarvottam Jeevan Raksha Padak to 5 citizens for what specific contribution?",
    options: [
      "Excellence in scientific research",
      "Conspicuous gallantry in saving lives under extreme circumstances",
      "Outstanding achievements in international sports",
      "Lifetime contribution to Indian classical music"
    ],
    answer: 1,
    explanation: "The Sarvottam Jeevan Raksha Padak is awarded to civilians for displaying conspicuous gallantry in saving lives."
  }
];

// 👉 PUSH BATCH 7 DATA INTO GLOBAL ARRAYS
if (typeof hiddenRecallArticles !== 'undefined') {
  hiddenRecallArticles.push(...augRecallArticlesBatch7);
}
if (typeof recallQuestionPool !== 'undefined') {
  recallQuestionPool.push(...augRecallQuestionsBatch7);
}

/* ==========================================================================
   END OF AUGUST 2026 (100% COMPLETE)
   ========================================================================== */

/* ==========================================================================
   JULY 2026 - BATCH 1 (ITEMS 001 TO 020)
   ========================================================================== */

const julRecallArticlesBatch1 = [
  {
    id: "REC-JUL-001", date: "2026-07-26", month: "Jul 2026", category: "Important Days",
    title: "27th Kargil Vijay Diwas Observed",
    summary: "India observed the 27th Kargil Vijay Diwas on 26 July to honor the heroes of the 1999 Kargil War.",
    whatHappened: "The 27th anniversary of Kargil Vijay Diwas was observed nationwide on 26 July 2026. The Prime Minister paid tribute to the fallen soldiers at the Kargil War Memorial in Dras, commemorating India's victory in Operation Vijay.",
    importantPoints: [
      "Observed on 26 July annually.",
      "Marks the success of Operation Vijay in 1999.",
      "Main commemorative event held at the Kargil War Memorial in Dras, Ladakh."
    ],
    examFacts: ["Date: 26 July", "Operation: Operation Vijay", "Anniversary: 27th"],
    quickRemember: "Kargil Vijay Diwas on 26 July marks the 1999 Operation Vijay victory.",
    audioText: "India celebrated the 27th Kargil Vijay Diwas on 26 July to honor the heroes of Operation Vijay.",
    source: "Ministry of Defence", importantFor: ["SSC CGL", "CDS", "UPSC"]
  },
  {
    id: "REC-JUL-002", date: "2026-07-29", month: "Jul 2026", category: "Environment",
    title: "International Tiger Day 2026",
    summary: "International Tiger Day was observed globally, highlighting India's tiger population surpassing 3,900.",
    whatHappened: "International Tiger Day was celebrated on 29 July 2026. The Ministry of Environment released an updated tiger census indicating that India's wild tiger population has crossed 3,900, accounting for over 75% of the global tiger population.",
    importantPoints: [
      "Observed annually on 29 July.",
      "India's tiger population now exceeds 3,900.",
      "India holds over 75% of the world's wild tigers."
    ],
    examFacts: ["Date: 29 July", "Tiger Population: >3,900", "Global Share: >75%"],
    quickRemember: "International Tiger Day is 29 July; India's tiger population is over 3,900.",
    audioText: "On International Tiger Day, July 29, the government announced India's wild tiger population has surpassed 3,900.",
    source: "NTCA", importantFor: ["SSC CGL", "State PCS"]
  },
  {
    id: "REC-JUL-003", date: "2026-07-28", month: "Jul 2026", category: "Health & Welfare",
    title: "World Hepatitis Day 2026",
    summary: "World Hepatitis Day was observed with the theme 'Act Now for a Hepatitis-Free Future'.",
    whatHappened: "World Hepatitis Day 2026 was observed on 28 July to raise global awareness of viral hepatitis. The WHO designated theme for the year was 'Act Now for a Hepatitis-Free Future', focusing on scaling up testing and treatment.",
    importantPoints: [
      "Observed on 28 July every year.",
      "2026 Theme: 'Act Now for a Hepatitis-Free Future'.",
      "Commemorates the birthday of Dr. Baruch Blumberg, who discovered the Hepatitis B virus."
    ],
    examFacts: ["Date: 28 July", "Theme: Act Now for a Hepatitis-Free Future", "Scientist: Dr. Baruch Blumberg"],
    quickRemember: "World Hepatitis Day is 28 July; 2026 theme is 'Act Now for a Hepatitis-Free Future'.",
    audioText: "World Hepatitis Day was observed on July 28 with the theme Act Now for a Hepatitis-Free Future.",
    source: "WHO", importantFor: ["SSC CGL", "SSC CHSL"]
  },
  {
    id: "REC-JUL-004", date: "2026-07-25", month: "Jul 2026", category: "Economy & Trade",
    title: "India Ranks 80th in Henley Passport Index 2026",
    summary: "India ranked 80th in the Henley Passport Index for Q3 2026, with visa-free access to 62 countries.",
    whatHappened: "The Henley Passport Index released its Q3 2026 rankings, placing India at the 80th position. Indian passport holders currently enjoy visa-free or visa-on-arrival access to 62 destinations. Singapore secured the top spot globally.",
    importantPoints: [
      "India ranked 80th in the Henley Passport Index.",
      "Visa-free access to 62 countries.",
      "Singapore ranked 1st as the world's most powerful passport."
    ],
    examFacts: ["India's Rank: 80th", "Visa-Free Destinations: 62", "Top Country: Singapore"],
    quickRemember: "India ranked 80th in the Q3 2026 Henley Passport Index with access to 62 countries.",
    audioText: "India ranked 80th in the latest Henley Passport Index, allowing visa-free entry to 62 countries.",
    source: "Henley & Partners", importantFor: ["SSC CGL", "Bank PO"]
  },
  {
    id: "REC-JUL-005", date: "2026-07-22", month: "Jul 2026", category: "Defence",
    title: "Exercise Nomadic Elephant 2026",
    summary: "The 17th edition of the India-Mongolia joint military exercise 'Nomadic Elephant' concluded in Ulaanbaatar.",
    whatHappened: "The 17th edition of the joint military exercise 'Nomadic Elephant' between the Indian Army and the Mongolian Armed Forces was successfully conducted at the Foreign Peacekeeping Training Centre in Ulaanbaatar, Mongolia, focusing on counter-terrorism.",
    importantPoints: [
      "17th edition of Exercise Nomadic Elephant.",
      "Bilateral exercise between India and Mongolia.",
      "Held in Ulaanbaatar, Mongolia."
    ],
    examFacts: ["Exercise: Nomadic Elephant", "Partner: Mongolia", "Edition: 17th"],
    quickRemember: "Exercise Nomadic Elephant is a joint military drill between India and Mongolia.",
    audioText: "The 17th India-Mongolia joint military exercise, Nomadic Elephant, concluded in Ulaanbaatar.",
    source: "Ministry of Defence", importantFor: ["CDS", "SSC CGL"]
  },
  {
    id: "REC-JUL-006", date: "2026-07-20", month: "Jul 2026", category: "Sports",
    title: "Carlos Alcaraz Wins Wimbledon 2026",
    summary: "Carlos Alcaraz secured his third Wimbledon Men's Singles title by defeating Jannik Sinner.",
    whatHappened: "Spanish tennis star Carlos Alcaraz won the Wimbledon 2026 Gentlemen's Singles title at the All England Club, defeating Italy's Jannik Sinner in a thrilling five-set final to claim his third Wimbledon crown.",
    importantPoints: [
      "Winner: Carlos Alcaraz (Spain).",
      "Defeated Jannik Sinner (Italy) in the final.",
      "This marks his third Wimbledon title."
    ],
    examFacts: ["Champion: Carlos Alcaraz", "Runner-up: Jannik Sinner", "Tournament: Wimbledon 2026"],
    quickRemember: "Carlos Alcaraz defeated Jannik Sinner to win the 2026 Wimbledon Men's Singles title.",
    audioText: "Carlos Alcaraz won his third Wimbledon Men's Singles title by defeating Jannik Sinner in the final.",
    source: "Wimbledon", importantFor: ["SSC CGL", "SSC CHSL"]
  },
  {
    id: "REC-JUL-007", date: "2026-07-18", month: "Jul 2026", category: "Important Days",
    title: "Nelson Mandela International Day",
    summary: "Nelson Mandela International Day was observed globally to promote peace, freedom, and community service.",
    whatHappened: "Nelson Mandela International Day was celebrated on 18 July to honor the legacy of the former South African President. The UN called upon citizens worldwide to dedicate 67 minutes to community service, reflecting Mandela's 67 years of public service.",
    importantPoints: [
      "Observed annually on 18 July.",
      "Honors former South African President Nelson Mandela.",
      "Theme involves dedicating 67 minutes to public service."
    ],
    examFacts: ["Date: 18 July", "Personality: Nelson Mandela", "Concept: 67 minutes of service"],
    quickRemember: "Nelson Mandela International Day is celebrated on 18 July.",
    audioText: "Nelson Mandela International Day was observed on July 18th to honor his legacy of peace and public service.",
    source: "United Nations", importantFor: ["SSC CGL", "State PCS"]
  },
  {
    id: "REC-JUL-008", date: "2026-07-15", month: "Jul 2026", category: "Science & Technology",
    title: "ISRO Launches NVS-02 Navigation Satellite",
    summary: "ISRO successfully launched the NVS-02 satellite aboard the GSLV-F15 from Sriharikota.",
    whatHappened: "The Indian Space Research Organisation (ISRO) successfully placed the NVS-02 navigation satellite into a Geosynchronous Transfer Orbit (GTO) using the GSLV-F15 launch vehicle. This augments the NavIC (Navigation with Indian Constellation) network.",
    importantPoints: [
      "Satellite: NVS-02 (NavIC series).",
      "Launch Vehicle: GSLV-F15.",
      "Launched from Satish Dhawan Space Centre, Sriharikota."
    ],
    examFacts: ["Satellite: NVS-02", "Rocket: GSLV-F15", "System: NavIC"],
    quickRemember: "ISRO launched the NVS-02 NavIC satellite using the GSLV-F15 rocket.",
    audioText: "ISRO successfully launched the NVS-02 navigation satellite for the NavIC constellation aboard the GSLV-F15 rocket.",
    source: "ISRO", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-JUL-009", date: "2026-07-12", month: "Jul 2026", category: "Economy",
    title: "Retail Inflation Drops to 4.2% in June 2026",
    summary: "India's retail inflation (CPI) eased to a 12-month low of 4.2% in June 2026.",
    whatHappened: "Data released by the National Statistical Office (NSO) in July showed that India's Consumer Price Index (CPI) based retail inflation dropped to 4.2% in June 2026, primarily driven by a significant cooling in food and vegetable prices.",
    importantPoints: [
      "Retail inflation (CPI) eased to 4.2% in June 2026.",
      "Data released by the National Statistical Office (NSO).",
      "Remains within the RBI's tolerance band of 2% to 6%."
    ],
    examFacts: ["CPI Inflation (June 2026): 4.2%", "Releasing Agency: NSO", "RBI Target Band: 2-6%"],
    quickRemember: "India's CPI retail inflation dropped to 4.2% in June 2026.",
    audioText: "The National Statistical Office reported that India's retail inflation eased to 4.2% in June 2026.",
    source: "NSO / MoSPI", importantFor: ["Bank PO", "SSC CGL"]
  },
  {
    id: "REC-JUL-010", date: "2026-07-11", month: "Jul 2026", category: "Important Days",
    title: "World Population Day 2026",
    summary: "World Population Day was observed with a focus on empowering youth and women in the Global South.",
    whatHappened: "World Population Day was observed globally on 11 July. The 2026 theme emphasized investing in data collection to ensure demographic dividends, particularly focusing on empowering youth and women in developing nations of the Global South.",
    importantPoints: [
      "Observed annually on 11 July.",
      "Established by the UNDP in 1989.",
      "Focuses on urgency and importance of population issues."
    ],
    examFacts: ["Date: 11 July", "Established by: UNDP (1989)"],
    quickRemember: "World Population Day is observed globally on 11 July.",
    audioText: "World Population Day was observed on July 11 to raise awareness about global demographic challenges.",
    source: "UNFPA", importantFor: ["SSC CGL", "SSC CHSL"]
  },
  {
    id: "REC-JUL-011", date: "2026-07-10", month: "Jul 2026", category: "International Affairs",
    title: "India Joins Global Biofuels Alliance Steering Committee",
    summary: "India was formally elected as the co-chair of the Global Biofuels Alliance Steering Committee.",
    whatHappened: "During a specialized energy summit in Paris, India was unanimously elected as the co-chair of the Steering Committee for the Global Biofuels Alliance (GBA), a multilateral initiative originally launched during India's G20 presidency in 2023.",
    importantPoints: [
      "India elected as co-chair of the GBA Steering Committee.",
      "Global Biofuels Alliance (GBA) was launched during India's 2023 G20 Presidency.",
      "Aims to facilitate global adoption of sustainable biofuels."
    ],
    examFacts: ["Alliance: Global Biofuels Alliance", "Role: Co-Chair", "Inception: G20 India (2023)"],
    quickRemember: "India became the co-chair of the Global Biofuels Alliance Steering Committee.",
    audioText: "India was elected as the co-chair of the Steering Committee for the Global Biofuels Alliance.",
    source: "Ministry of Petroleum", importantFor: ["UPSC", "SSC CGL"]
  },
  {
    id: "REC-JUL-012", date: "2026-07-08", month: "Jul 2026", category: "National Affairs",
    title: "New Vande Bharat Sleeper Trains Unveiled",
    summary: "Indian Railways unveiled the first prototype of the long-distance Vande Bharat Sleeper trains.",
    whatHappened: "Indian Railways officially unveiled the first prototype of the Vande Bharat Sleeper coaches at the Integral Coach Factory (ICF) in Chennai. These trains are designed for overnight journeys and can achieve operational speeds of 160 km/h.",
    importantPoints: [
      "First prototype of Vande Bharat Sleeper coaches unveiled.",
      "Manufactured at the Integral Coach Factory (ICF), Chennai.",
      "Designed for overnight travel at 160 km/h."
    ],
    examFacts: ["Train Type: Vande Bharat Sleeper", "Manufacturer: ICF, Chennai", "Top Speed: 160 km/h"],
    quickRemember: "ICF Chennai unveiled the first prototype of the 160 km/h Vande Bharat Sleeper trains.",
    audioText: "Indian Railways unveiled the first prototype of the Vande Bharat Sleeper trains at the Integral Coach Factory in Chennai.",
    source: "Ministry of Railways", importantFor: ["SSC CGL", "RRB NTPC"]
  },
  {
    id: "REC-JUL-013", date: "2026-07-06", month: "Jul 2026", category: "Science & Technology",
    title: "India's First Undersea Power Cable to Sri Lanka Approved",
    summary: "The Cabinet approved the DPR for an undersea power transmission cable connecting India and Sri Lanka.",
    whatHappened: "The Union Cabinet approved the Detailed Project Report (DPR) for a high-capacity undersea electricity transmission cable connecting Madurai in India to Anuradhapura in Sri Lanka, aiming to integrate the South Asian power grid.",
    importantPoints: [
      "Undersea power transmission cable project approved.",
      "Connects Madurai (India) to Anuradhapura (Sri Lanka).",
      "Promotes cross-border energy trade and grid integration."
    ],
    examFacts: ["Project: India-Sri Lanka Undersea Power Cable", "Connecting Cities: Madurai to Anuradhapura"],
    quickRemember: "An undersea power cable linking Madurai in India to Anuradhapura in Sri Lanka was approved.",
    audioText: "The Cabinet approved an undersea electricity transmission cable connecting India and Sri Lanka.",
    source: "Ministry of Power", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-JUL-014", date: "2026-07-05", month: "Jul 2026", category: "Sports",
    title: "India Wins Men's Hockey Asian Champions Trophy",
    summary: "The Indian Men's Hockey team won the 2026 Asian Champions Trophy by defeating South Korea.",
    whatHappened: "The Indian Men's Hockey team clinched the 2026 Asian Champions Trophy held in Dhaka, Bangladesh, by defeating South Korea 3-1 in a closely contested final, securing their fifth title in the tournament's history.",
    importantPoints: [
      "India won the 2026 Asian Champions Trophy in Men's Hockey.",
      "Defeated South Korea 3-1 in the final.",
      "Tournament was hosted in Dhaka, Bangladesh."
    ],
    examFacts: ["Winner: India", "Runner-up: South Korea", "Host City: Dhaka, Bangladesh"],
    quickRemember: "India defeated South Korea to win the 2026 Men's Hockey Asian Champions Trophy in Dhaka.",
    audioText: "The Indian Men's Hockey team won the 2026 Asian Champions Trophy by defeating South Korea in Dhaka.",
    source: "Hockey India", importantFor: ["SSC CGL", "SSC CHSL"]
  },
  {
    id: "REC-JUL-015", date: "2026-07-03", month: "Jul 2026", category: "Awards & Honours",
    title: "Shashi Tharoor Awarded French Legion of Honour",
    summary: "Author and politician Shashi Tharoor was officially conferred with the Chevalier de la Légion d'Honneur.",
    whatHappened: "Indian Member of Parliament and author Shashi Tharoor was officially conferred with France's highest civilian honor, the 'Chevalier de la Légion d'Honneur' (Knight of the Legion of Honour), by the French Ambassador to India for his literary contributions and diplomatic service.",
    importantPoints: [
      "Award: Chevalier de la Légion d'Honneur (France's highest civilian honor).",
      "Recipient: Shashi Tharoor.",
      "Awarded for his contributions to literature and global diplomacy."
    ],
    examFacts: ["Recipient: Shashi Tharoor", "Award: Legion of Honour (France)"],
    quickRemember: "Shashi Tharoor received France's highest civilian award, the Legion of Honour.",
    audioText: "Author and politician Shashi Tharoor was awarded the Chevalier de la Légion d'Honneur, France's highest civilian honor.",
    source: "Embassy of France", importantFor: ["SSC CGL", "State PCS"]
  },
  {
    id: "REC-JUL-016", date: "2026-07-02", month: "Jul 2026", category: "National Affairs",
    title: "Operation Sadbhavana Expanded in J&K",
    summary: "The Indian Army expanded 'Operation Sadbhavana' allocating ₹100 crore for education in J&K.",
    whatHappened: "The Indian Army announced the expansion of 'Operation Sadbhavana' (Goodwill) in Jammu and Kashmir and Ladakh, allocating a special budget of ₹100 crore for the fiscal year to build Army Goodwill Schools and community infrastructure.",
    importantPoints: [
      "Operation Sadbhavana expanded in J&K and Ladakh.",
      "Run by the Indian Army for community development and education.",
      "Special allocation of ₹100 crore for the fiscal year."
    ],
    examFacts: ["Operation: Operation Sadbhavana", "Agency: Indian Army", "Region: J&K and Ladakh"],
    quickRemember: "The Indian Army expanded 'Operation Sadbhavana' for community development in J&K and Ladakh.",
    audioText: "The Indian Army expanded Operation Sadbhavana, allocating 100 crore rupees for community development in Jammu and Kashmir.",
    source: "Ministry of Defence", importantFor: ["CDS", "SSC CGL"]
  },
  {
    id: "REC-JUL-017", date: "2026-07-01", month: "Jul 2026", category: "Economy",
    title: "GST Completes 9 Years of Implementation",
    summary: "India marked the 9th anniversary of the Goods and Services Tax (GST) rollout on 1 July 2026.",
    whatHappened: "India celebrated 'GST Day' on 1 July 2026, marking exactly nine years since the comprehensive Goods and Services Tax was implemented in 2017. The Finance Ministry reported a record gross GST collection average of ₹1.9 lakh crore per month in FY26.",
    importantPoints: [
      "GST was originally implemented on 1 July 2017.",
      "Completed 9 years of implementation on 1 July 2026.",
      "1 July is officially celebrated as GST Day in India."
    ],
    examFacts: ["Date: 1 July", "Anniversary: 9th", "Implementation Year: 2017"],
    quickRemember: "GST completed 9 years on 1 July 2026, officially celebrated as GST Day.",
    audioText: "India celebrated GST Day on July 1st, marking the ninth anniversary of the historic tax reform's implementation in 2017.",
    source: "Ministry of Finance", importantFor: ["SSC CGL", "Bank PO"]
  },
  {
    id: "REC-JUL-018", date: "2026-07-01", month: "Jul 2026", category: "Appointments",
    title: "Sujata Chaturvedi Takes Over as Sports Secretary",
    summary: "Senior IAS officer Sujata Chaturvedi assumed charge as the Secretary of the Department of Sports.",
    whatHappened: "Senior IAS officer Sujata Chaturvedi (Bihar Cadre) officially assumed charge as the Secretary, Department of Sports under the Ministry of Youth Affairs and Sports, aiming to oversee preparations for the upcoming 2026 Asian Games.",
    importantPoints: [
      "Appointed as the Secretary, Department of Sports.",
      "Succeeds previous administrative leadership ahead of major global sporting events."
    ],
    examFacts: ["Appointee: Sujata Chaturvedi", "Ministry: Youth Affairs and Sports"],
    quickRemember: "Sujata Chaturvedi was appointed as the new Secretary of the Department of Sports.",
    audioText: "Senior IAS officer Sujata Chaturvedi assumed charge as the new Secretary of the Department of Sports.",
    source: "DoPT", importantFor: ["SSC CGL"]
  },
  {
    id: "REC-JUL-019", date: "2026-07-07", month: "Jul 2026", category: "Science & Technology",
    title: "Gaganyaan Crew Recovery Module Tested",
    summary: "ISRO successfully conducted drop tests of the Gaganyaan Crew Module in the Bay of Bengal.",
    whatHappened: "The Indian Space Research Organisation (ISRO), in collaboration with the Indian Navy, successfully executed harbor and sea drop tests of the Gaganyaan Crew Module Recovery model in the Bay of Bengal near Visakhapatnam to validate post-splashdown recovery protocols.",
    importantPoints: [
      "Gaganyaan Crew Module recovery protocols tested.",
      "Conducted jointly by ISRO and the Indian Navy.",
      "Trials executed in the Bay of Bengal off Visakhapatnam."
    ],
    examFacts: ["Mission: Gaganyaan", "Partners: ISRO & Indian Navy", "Location: Visakhapatnam"],
    quickRemember: "ISRO and the Indian Navy successfully tested Gaganyaan Crew Module recovery in the Bay of Bengal.",
    audioText: "ISRO and the Indian Navy conducted successful recovery tests for the Gaganyaan Crew Module in the Bay of Bengal.",
    source: "ISRO", importantFor: ["SSC CGL", "CDS"]
  },
  {
    id: "REC-JUL-020", date: "2026-07-09", month: "Jul 2026", category: "International Affairs",
    title: "UK Joins CPTPP Trade Pact",
    summary: "The United Kingdom officially acceded to the CPTPP, becoming the first European member.",
    whatHappened: "The United Kingdom officially signed the accession protocol to join the Comprehensive and Progressive Agreement for Trans-Pacific Partnership (CPTPP), becoming the bloc's 12th member and the first European nation to join the Indo-Pacific trade treaty.",
    importantPoints: [
      "UK became the 12th member of the CPTPP.",
      "First European nation to join the Indo-Pacific trade bloc.",
      "Expands the UK's post-Brexit economic footprint in the Asia-Pacific."
    ],
    examFacts: ["Country: United Kingdom", "Treaty: CPTPP (Trans-Pacific Partnership)"],
    quickRemember: "The UK officially became the first European nation to join the CPTPP trade pact.",
    audioText: "The United Kingdom officially signed the accession protocol to become the 12th member of the CPTPP trade pact.",
    source: "UK Government", importantFor: ["SSC CGL", "UPSC"]
  }
];

const julRecallQuestionsBatch1 = [
  {
    id: "REC-Q-JUL-001", articleId: "REC-JUL-001", category: "Important Days", topic: "Military Anniversaries",
    question: "Kargil Vijay Diwas is observed annually on 26 July to commemorate India's victory in which military operation?",
    options: ["Operation Meghdoot", "Operation Cactus", "Operation Vijay", "Operation Parakram"],
    answer: 2, explanation: "Kargil Vijay Diwas marks the successful culmination of Operation Vijay in 1999, which evicted Pakistani intruders from the Kargil heights."
  },
  {
    id: "REC-Q-JUL-002", articleId: "REC-JUL-002", category: "Environment", topic: "Wildlife Conservation",
    question: "On International Tiger Day (29 July), it was announced that India's wild tiger population has surpassed 3,900. What approximate percentage of the global wild tiger population does India hold?",
    options: ["50%", "60%", "75%", "90%"],
    answer: 2, explanation: "India holds over 75% of the world's wild tiger population, making it the most vital country for tiger conservation."
  },
  {
    id: "REC-Q-JUL-003", articleId: "REC-JUL-003", category: "Health & Welfare", topic: "Global Health Days",
    question: "World Hepatitis Day is observed on 28 July. The date commemorates the birthday of Dr. Baruch Blumberg, who is known for discovering:",
    options: ["The Polio Vaccine", "The Hepatitis B virus", "The HIV/AIDS virus", "The Penicillin antibiotic"],
    answer: 1, explanation: "July 28 honors Dr. Baruch Blumberg, the Nobel Laureate who discovered the Hepatitis B virus (HBV) and developed a diagnostic test and vaccine for it."
  },
  {
    id: "REC-Q-JUL-004", articleId: "REC-JUL-004", category: "Economy & Trade", topic: "Global Rankings",
    question: "In the Henley Passport Index released in Q3 2026, what was India's global ranking?",
    options: ["75th", "80th", "85th", "92nd"],
    answer: 1, explanation: "India ranked 80th in the Q3 2026 Henley Passport Index, providing visa-free access to 62 global destinations."
  },
  {
    id: "REC-Q-JUL-005", articleId: "REC-JUL-005", category: "Defence", topic: "Military Exercises",
    question: "The 17th edition of the joint military exercise 'Nomadic Elephant' was conducted between the armies of India and which country?",
    options: ["Thailand", "Mongolia", "Kazakhstan", "Oman"],
    answer: 1, explanation: "Exercise Nomadic Elephant is a bilateral military exercise conducted between India and Mongolia."
  },
  {
    id: "REC-Q-JUL-006", articleId: "REC-JUL-006", category: "Sports", topic: "Tennis Grand Slams",
    question: "Who won the Wimbledon 2026 Gentlemen's Singles title by defeating Italy's Jannik Sinner in the final?",
    options: ["Novak Djokovic", "Daniil Medvedev", "Carlos Alcaraz", "Alexander Zverev"],
    answer: 2, explanation: "Spanish tennis star Carlos Alcaraz defeated Jannik Sinner to claim his third Wimbledon Gentlemen's Singles title."
  },
  {
    id: "REC-Q-JUL-007", articleId: "REC-JUL-007", category: "Important Days", topic: "Global Observances",
    question: "Nelson Mandela International Day is celebrated globally on which date, encouraging citizens to dedicate 67 minutes to public service?",
    options: ["11 July", "15 July", "18 July", "24 July"],
    answer: 2, explanation: "Nelson Mandela International Day is observed on 18 July, the birthday of the former South African President."
  },
  {
    id: "REC-Q-JUL-008", articleId: "REC-JUL-008", category: "Science & Technology", topic: "Space Missions",
    question: "ISRO successfully launched the NVS-02 satellite from Sriharikota. This satellite is part of which indigenous satellite system?",
    options: ["Gagan", "NavIC", "Cartosat", "RISAT"],
    answer: 1, explanation: "NVS-02 is a second-generation navigation satellite designed to augment India's regional navigation system, NavIC."
  },
  {
    id: "REC-Q-JUL-009", articleId: "REC-JUL-009", category: "Economy", topic: "Inflation Indices",
    question: "The National Statistical Office (NSO) data released in July showed India's retail inflation (CPI) for June 2026 dropped to what percentage?",
    options: ["3.8%", "4.2%", "5.1%", "5.5%"],
    answer: 1, explanation: "India's Consumer Price Index (CPI) based retail inflation eased to 4.2% in June 2026, comfortably within the RBI's target band."
  },
  {
    id: "REC-Q-JUL-010", articleId: "REC-JUL-010", category: "Important Days", topic: "Global Observances",
    question: "World Population Day is observed globally on 11 July. Which UN agency originally established this observance in 1989?",
    options: ["WHO", "UNICEF", "UNDP", "UNEP"],
    answer: 2, explanation: "World Population Day was established by the Governing Council of the United Nations Development Programme (UNDP) in 1989."
  },
  {
    id: "REC-Q-JUL-011", articleId: "REC-JUL-011", category: "International Affairs", topic: "Energy Alliances",
    question: "During a summit in Paris, India was elected as the co-chair of the Steering Committee for which global energy initiative originally launched during its G20 presidency?",
    options: ["International Solar Alliance", "Global Biofuels Alliance", "Coalition for Disaster Resilient Infrastructure", "Green Hydrogen Mission"],
    answer: 1, explanation: "India was elected co-chair of the Global Biofuels Alliance (GBA), a multilateral initiative to promote sustainable biofuels."
  },
  {
    id: "REC-Q-JUL-012", articleId: "REC-JUL-012", category: "National Affairs", topic: "Railways",
    question: "Indian Railways unveiled the first prototype of the 160 km/h Vande Bharat Sleeper trains. Which facility manufactured this prototype?",
    options: ["Rail Coach Factory (Kapurthala)", "Modern Coach Factory (Raebareli)", "Integral Coach Factory (Chennai)", "Diesel Locomotive Works (Varanasi)"],
    answer: 2, explanation: "The first prototype of the long-distance Vande Bharat Sleeper coaches was manufactured at the Integral Coach Factory (ICF) in Chennai."
  },
  {
    id: "REC-Q-JUL-013", articleId: "REC-JUL-013", category: "Science & Technology", topic: "Cross-Border Infrastructure",
    question: "The Union Cabinet approved a Detailed Project Report (DPR) for a high-capacity undersea electricity transmission cable connecting Madurai in India to which city in Sri Lanka?",
    options: ["Colombo", "Jaffna", "Trincomalee", "Anuradhapura"],
    answer: 3, explanation: "The approved undersea power cable aims to connect Madurai in India to Anuradhapura in Sri Lanka to integrate the South Asian power grid."
  },
  {
    id: "REC-Q-JUL-014", articleId: "REC-JUL-014", category: "Sports", topic: "Hockey",
    question: "The Indian Men's Hockey team won the 2026 Asian Champions Trophy held in Dhaka by defeating which country in the final?",
    options: ["Pakistan", "Malaysia", "Japan", "South Korea"],
    answer: 3, explanation: "India defeated South Korea 3-1 in the final in Dhaka, Bangladesh, to clinch the 2026 Asian Champions Trophy."
  },
  {
    id: "REC-Q-JUL-015", articleId: "REC-JUL-015", category: "Awards & Honours", topic: "International Civilian Awards",
    question: "Which Indian Member of Parliament and author was recently conferred with France's highest civilian honor, the 'Chevalier de la Légion d'Honneur'?",
    options: ["Jairam Ramesh", "Shashi Tharoor", "Kapil Sibal", "P. Chidambaram"],
    answer: 1, explanation: "Shashi Tharoor was awarded the Knight of the Legion of Honour for his contributions to literature and global diplomacy."
  },
  {
    id: "REC-Q-JUL-016", articleId: "REC-JUL-016", category: "National Affairs", topic: "Military Civil Action",
    question: "The Indian Army allocated ₹100 crore for community infrastructure and education in J&K under which ongoing goodwill operation?",
    options: ["Operation All Out", "Operation Sadbhavana", "Operation Rakshak", "Operation Megh Rahat"],
    answer: 1, explanation: "Operation Sadbhavana (Goodwill) is a unique humane initiative undertaken by the Indian Army in J&K and Ladakh for civic action and community development."
  },
  {
    id: "REC-Q-JUL-017", articleId: "REC-JUL-017", category: "Economy", topic: "Taxation",
    question: "On 1 July 2026, India celebrated 'GST Day' to mark exactly how many years since the Goods and Services Tax (GST) was originally implemented?",
    options: ["7 Years", "8 Years", "9 Years", "10 Years"],
    answer: 2, explanation: "The comprehensive Goods and Services Tax (GST) was implemented on 1 July 2017, making 1 July 2026 its 9th anniversary."
  },
  {
    id: "REC-Q-JUL-018", articleId: "REC-JUL-018", category: "Appointments", topic: "Secretaries of India",
    question: "Which senior IAS officer recently assumed charge as the Secretary of the Department of Sports under the Ministry of Youth Affairs and Sports?",
    options: ["Radha Krishna Mathur", "Sujata Chaturvedi", "Tarun Bajaj", "V. Vidyavathi"],
    answer: 1, explanation: "Sujata Chaturvedi, a senior IAS officer of the Bihar Cadre, took charge as the Sports Secretary."
  },
  {
    id: "REC-Q-JUL-019", articleId: "REC-JUL-019", category: "Science & Technology", topic: "Gaganyaan Mission",
    question: "ISRO successfully conducted harbor and sea drop tests of the Gaganyaan Crew Module Recovery model in collaboration with the Indian Navy off the coast of which city?",
    options: ["Kochi", "Mumbai", "Visakhapatnam", "Chennai"],
    answer: 2, explanation: "The crucial post-splashdown recovery trials for the Gaganyaan Crew Module were conducted in the Bay of Bengal near Visakhapatnam."
  },
  {
    id: "REC-Q-JUL-020", articleId: "REC-JUL-020", category: "International Affairs", topic: "Trade Blocs",
    question: "Which country recently became the first European nation to officially sign the accession protocol to join the CPTPP trade pact?",
    options: ["Germany", "France", "United Kingdom", "Italy"],
    answer: 2, explanation: "The United Kingdom officially joined the Comprehensive and Progressive Agreement for Trans-Pacific Partnership (CPTPP) as its 12th member."
  }
];

// 👉 PUSH DATA INTO GLOBAL ARRAYS
if (typeof hiddenRecallArticles !== 'undefined') {
  hiddenRecallArticles.push(...julRecallArticlesBatch1);
}
if (typeof recallQuestionPool !== 'undefined') {
  recallQuestionPool.push(...julRecallQuestionsBatch1);
}

/* ==========================================================================
   END OF JULY BATCH 1
   ========================================================================== */
/* ==========================================================================
   JULY 2026 - BATCH 2 (ITEMS 021 TO 040)
   ========================================================================== */

const julRecallArticlesBatch2 = [
  {
    id: "REC-JUL-021", date: "2026-07-26", month: "Jul 2026", category: "Art & Culture",
    title: "Ahom Moidams Added to UNESCO World Heritage List",
    summary: "The Moidams of the Ahom Dynasty in Assam were inscribed on the UNESCO World Heritage List.",
    whatHappened: "The Moidams, the mound-burial system of the Ahom Dynasty in Charaideo, Assam, were officially inscribed on the UNESCO World Heritage List during the 48th World Heritage Committee session. It is the first cultural heritage site from Northeast India to get this tag.",
    importantPoints: [
      "Moidams of the Ahom Dynasty inscribed on UNESCO World Heritage List.",
      "Located in Charaideo, Assam.",
      "First cultural heritage site from Northeast India to receive this status."
    ],
    examFacts: ["Site: Ahom Moidams", "State: Assam", "Tag: UNESCO Cultural Heritage"],
    quickRemember: "Assam's Ahom Moidams (mound-burial system) were added to the UNESCO World Heritage List.",
    audioText: "The Moidams of the Ahom Dynasty in Assam were inscribed as a UNESCO World Heritage Site, marking a first for Northeast India.",
    source: "UNESCO", importantFor: ["SSC CGL", "UPSC", "State PCS"]
  },
  {
    id: "REC-JUL-022", date: "2026-07-25", month: "Jul 2026", category: "Science & Technology",
    title: "India Launches GSAT-20 Aboard SpaceX Falcon 9",
    summary: "ISRO launched the GSAT-20 heavy communication satellite using SpaceX's Falcon 9 rocket.",
    whatHappened: "ISRO successfully launched the GSAT-20 (GSAT-N2) high-throughput communication satellite aboard a SpaceX Falcon 9 rocket from Cape Canaveral. The satellite will boost broadband connectivity across rural India and in-flight internet services.",
    importantPoints: [
      "Satellite: GSAT-20 (GSAT-N2).",
      "Launch Vehicle: SpaceX Falcon 9.",
      "Aims to enhance broadband connectivity and in-flight internet."
    ],
    examFacts: ["Satellite: GSAT-20", "Launch Vehicle: SpaceX Falcon 9", "Agency: ISRO & SpaceX"],
    quickRemember: "ISRO's GSAT-20 communication satellite was launched using a SpaceX Falcon 9 rocket.",
    audioText: "ISRO successfully launched its heavy communication satellite, GSAT-20, aboard a SpaceX Falcon 9 rocket from the United States.",
    source: "ISRO / NSIL", importantFor: ["SSC CGL", "CDS"]
  },
  {
    id: "REC-JUL-023", date: "2026-07-24", month: "Jul 2026", category: "International Affairs",
    title: "Belarus Becomes Full Member of SCO",
    summary: "Belarus was officially admitted as the 10th full member state of the Shanghai Cooperation Organisation (SCO).",
    whatHappened: "During the SCO Summit, Belarus officially signed the memorandum of obligations to become the 10th full member state of the Shanghai Cooperation Organisation (SCO), expanding the Eurasian security and economic bloc's footprint into Eastern Europe.",
    importantPoints: [
      "Belarus became the 10th full member of the SCO.",
      "Signed the memorandum of obligations during the SCO Summit.",
      "Expands the SCO's reach into Eastern Europe."
    ],
    examFacts: ["New Member: Belarus", "Organization: Shanghai Cooperation Organisation (SCO)", "Total Members: 10"],
    quickRemember: "Belarus was admitted as the 10th full member of the Shanghai Cooperation Organisation (SCO).",
    audioText: "Belarus was officially admitted as the tenth full member state of the Shanghai Cooperation Organisation.",
    source: "SCO Secretariat", importantFor: ["UPSC", "SSC CGL"]
  },
  {
    id: "REC-JUL-024", date: "2026-07-24", month: "Jul 2026", category: "Important Days",
    title: "Income Tax Day (Aaykar Diwas)",
    summary: "The Central Board of Direct Taxes (CBDT) celebrated the 166th Income Tax Day on 24 July.",
    whatHappened: "The Central Board of Direct Taxes (CBDT) observed the 166th Income Tax Day (Aaykar Diwas) on 24 July. The day commemorates the introduction of income tax in India by Sir James Wilson on 24 July 1860 to compensate for the losses during the First War of Independence.",
    importantPoints: [
      "Observed annually on 24 July.",
      "Commemorates the introduction of income tax in India in 1860.",
      "Introduced by Sir James Wilson."
    ],
    examFacts: ["Date: 24 July", "Introduced By: Sir James Wilson (1860)", "Agency: CBDT"],
    quickRemember: "Income Tax Day is observed on 24 July, marking its introduction by Sir James Wilson in 1860.",
    audioText: "The CBDT observed the 166th Income Tax Day on July 24, commemorating its introduction in India in 1860.",
    source: "Ministry of Finance", importantFor: ["SSC CGL", "Bank PO"]
  },
  {
    id: "REC-JUL-025", date: "2026-07-23", month: "Jul 2026", category: "Defence",
    title: "Project Kusha Clears Critical Design Review",
    summary: "DRDO's Project Kusha, India's indigenous long-range air defence system, cleared its Critical Design Review.",
    whatHappened: "The Defence Research and Development Organisation (DRDO) successfully completed the Critical Design Review (CDR) for 'Project Kusha', India's indigenous Long-Range Surface-to-Air Missile (LR-SAM) system, often dubbed India's 'Iron Dome'.",
    importantPoints: [
      "Project Kusha is an indigenous Long-Range Surface-to-Air Missile (LR-SAM) system.",
      "Successfully cleared the Critical Design Review (CDR).",
      "Developed by DRDO to intercept stealth fighters and ballistic missiles."
    ],
    examFacts: ["Project: Project Kusha", "Type: LR-SAM (Air Defence)", "Agency: DRDO"],
    quickRemember: "DRDO's Project Kusha is India's indigenous long-range air defence system (LR-SAM).",
    audioText: "DRDO's Project Kusha, an indigenous long-range air defence system, successfully cleared its critical design review.",
    source: "Ministry of Defence", importantFor: ["CDS", "SSC CGL"]
  },
  {
    id: "REC-JUL-026", date: "2026-07-23", month: "Jul 2026", category: "Important Days",
    title: "National Broadcasting Day",
    summary: "National Broadcasting Day was observed on 23 July, marking the first radio broadcast in India in 1927.",
    whatHappened: "National Broadcasting Day was celebrated across India on 23 July to commemorate the first-ever radio broadcast in the country, which went on air from the Bombay Station under the Indian Broadcasting Company in 1927.",
    importantPoints: [
      "Observed on 23 July every year.",
      "Marks the first radio broadcast in India in 1927.",
      "First broadcast was from the Bombay Station."
    ],
    examFacts: ["Date: 23 July", "Year of first broadcast: 1927", "Station: Bombay Station"],
    quickRemember: "National Broadcasting Day is 23 July, marking India's first radio broadcast in 1927.",
    audioText: "National Broadcasting Day was celebrated on July 23 to mark the anniversary of India's first radio broadcast in 1927.",
    source: "Prasar Bharati", importantFor: ["SSC CGL", "SSC CHSL"]
  },
  {
    id: "REC-JUL-027", date: "2026-07-22", month: "Jul 2026", category: "Economy",
    title: "RBI Launches Programmable Digital Rupee",
    summary: "The RBI introduced programmable features to the Central Bank Digital Currency (CBDC-R).",
    whatHappened: "The Reserve Bank of India (RBI) launched programmable features for the retail Digital Rupee (CBDC-R). This allows users to program digital currency for specific end-uses, such as agricultural subsidies or corporate travel expenses, ensuring targeted fund utilization.",
    importantPoints: [
      "Programmable features added to the retail Digital Rupee (CBDC-R).",
      "Allows funds to be programmed for specific, targeted end-uses.",
      "Launched by the Reserve Bank of India (RBI)."
    ],
    examFacts: ["Feature: Programmable CBDC", "Currency: Digital Rupee (CBDC-R)", "Authority: RBI"],
    quickRemember: "RBI introduced programmable features to the retail Digital Rupee for targeted fund usage.",
    audioText: "The Reserve Bank of India introduced programmable features to the retail Digital Rupee, allowing funds to be restricted to specific uses.",
    source: "RBI", importantFor: ["Bank PO", "SSC CGL"]
  },
  {
    id: "REC-JUL-028", date: "2026-07-21", month: "Jul 2026", category: "Important Days",
    title: "World Brain Day 2026",
    summary: "World Brain Day was observed on 22 July to promote neurological health and prevent brain disorders.",
    whatHappened: "World Brain Day was observed globally on 22 July by the World Federation of Neurology (WFN). The day aims to raise awareness about neurological disorders, stroke prevention, and the importance of brain health across all age groups.",
    importantPoints: [
      "Observed annually on 22 July.",
      "Led by the World Federation of Neurology (WFN).",
      "Focuses on neurological health and stroke prevention."
    ],
    examFacts: ["Date: 22 July", "Focus: Neurological Health", "Organization: World Federation of Neurology"],
    quickRemember: "World Brain Day is observed on 22 July for neurological health awareness.",
    audioText: "World Brain Day was observed on July 22 to raise global awareness about neurological health and disease prevention.",
    source: "World Federation of Neurology", importantFor: ["SSC CGL", "State PCS"]
  },
  {
    id: "REC-JUL-029", date: "2026-07-20", month: "Jul 2026", category: "Defence",
    title: "MoD Clears MQ-9B SeaGuardian Drone Procurement",
    summary: "The Defence Acquisition Council cleared the procurement of 31 MQ-9B High Altitude Long Endurance drones from the US.",
    whatHappened: "The Defence Acquisition Council (DAC), chaired by the Defence Minister, accorded the Acceptance of Necessity (AoN) for the procurement of 31 MQ-9B SeaGuardian and SkyGuardian High Altitude Long Endurance (HALE) armed drones from the United States.",
    importantPoints: [
      "Procurement of 31 MQ-9B HALE drones approved.",
      "Acquired from the United States (General Atomics).",
      "Will be distributed among the Navy, Air Force, and Army."
    ],
    examFacts: ["Drones: MQ-9B SeaGuardian/SkyGuardian", "Supplier Country: USA", "Type: HALE Armed Drones"],
    quickRemember: "India approved the procurement of 31 MQ-9B armed drones from the USA.",
    audioText: "The Defence Acquisition Council approved the procurement of 31 MQ-9B high-altitude armed drones from the United States.",
    source: "Ministry of Defence", importantFor: ["CDS", "SSC CGL"]
  },
  {
    id: "REC-JUL-030", date: "2026-07-18", month: "Jul 2026", category: "Economy & Infrastructure",
    title: "PM MITRA Park Inaugurated in Virudhunagar",
    summary: "The PM MITRA Mega Textile Park was inaugurated in Virudhunagar, Tamil Nadu.",
    whatHappened: "The first PM MITRA (Prime Minister Mega Integrated Textile Region and Apparel) Park was inaugurated in Virudhunagar, Tamil Nadu. The park integrates the entire textile value chain from spinning to garment manufacturing in a single location.",
    importantPoints: [
      "PM MITRA Mega Textile Park inaugurated.",
      "Location: Virudhunagar, Tamil Nadu.",
      "Aims to create world-class industrial infrastructure for the textile sector."
    ],
    examFacts: ["Scheme: PM MITRA", "Sector: Textiles", "Location: Virudhunagar, Tamil Nadu"],
    quickRemember: "The PM MITRA Mega Textile Park was inaugurated in Virudhunagar, Tamil Nadu.",
    audioText: "The PM MITRA Mega Textile Park was inaugurated in Virudhunagar, Tamil Nadu, to boost the textile manufacturing sector.",
    source: "Ministry of Textiles", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-JUL-031", date: "2026-07-17", month: "Jul 2026", category: "Sports",
    title: "Barbora Krejcikova Wins Wimbledon Women's Singles",
    summary: "Barbora Krejcikova won the Wimbledon 2026 Ladies' Singles title.",
    whatHappened: "Czech tennis player Barbora Krejcikova won the Wimbledon Ladies' Singles title, defeating Jasmine Paolini of Italy in the final at the All England Club to secure her second career Grand Slam singles title.",
    importantPoints: [
      "Winner: Barbora Krejcikova (Czech Republic).",
      "Runner-up: Jasmine Paolini (Italy).",
      "Tournament: Wimbledon 2026 Ladies' Singles."
    ],
    examFacts: ["Champion: Barbora Krejcikova", "Runner-up: Jasmine Paolini", "Tournament: Wimbledon"],
    quickRemember: "Barbora Krejcikova defeated Jasmine Paolini to win the Wimbledon Women's Singles title.",
    audioText: "Barbora Krejcikova won the Wimbledon Ladies' Singles title by defeating Italy's Jasmine Paolini in the final.",
    source: "Wimbledon", importantFor: ["SSC CGL", "SSC CHSL"]
  },
  {
    id: "REC-JUL-032", date: "2026-07-15", month: "Jul 2026", category: "Important Days",
    title: "World Youth Skills Day",
    summary: "World Youth Skills Day was celebrated to highlight the importance of equipping young people with skills for employment.",
    whatHappened: "World Youth Skills Day was observed globally on 15 July. The United Nations established this day to recognize the strategic importance of equipping young people with skills for employment, decent work, and entrepreneurship in a rapidly changing technological landscape.",
    importantPoints: [
      "Observed annually on 15 July.",
      "Focuses on youth skills, employment, and entrepreneurship.",
      "Established by the United Nations."
    ],
    examFacts: ["Date: 15 July", "Focus: Youth Employment and Skills"],
    quickRemember: "World Youth Skills Day is observed on 15 July.",
    audioText: "World Youth Skills Day was observed on July 15 to highlight the importance of equipping youth with skills for the future.",
    source: "United Nations", importantFor: ["SSC CGL", "SSC CHSL"]
  },
  {
    id: "REC-JUL-033", date: "2026-07-14", month: "Jul 2026", category: "International Affairs",
    title: "India-UAE Local Currency Settlement System",
    summary: "India and the UAE successfully executed their first crude oil transaction under the Local Currency Settlement (LCS) system.",
    whatHappened: "India and the United Arab Emirates (UAE) successfully completed their first-ever crude oil transaction using local currencies (Indian Rupee and UAE Dirham) under the newly established Local Currency Settlement (LCS) system, reducing dependency on the US Dollar.",
    importantPoints: [
      "First crude oil transaction completed using INR and AED.",
      "Operates under the Local Currency Settlement (LCS) system.",
      "Aims to promote cross-border trade in local currencies."
    ],
    examFacts: ["System: Local Currency Settlement (LCS)", "Partner Country: UAE", "Currencies: INR and AED"],
    quickRemember: "India and the UAE executed their first crude oil trade using Rupees and Dirhams under the LCS system.",
    audioText: "India and the UAE successfully executed their first crude oil transaction using local currencies under the Local Currency Settlement system.",
    source: "Ministry of Commerce", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-JUL-034", date: "2026-07-13", month: "Jul 2026", category: "Science & Technology",
    title: "Chandrayaan-4 Sample Return Mission Approved",
    summary: "The Union Cabinet approved the Chandrayaan-4 lunar sample return mission.",
    whatHappened: "The Union Cabinet formally approved the budget and architecture for ISRO's Chandrayaan-4 mission. Designed as a complex sample return mission, it will land on the Moon, collect lunar soil and rocks, and safely return them to Earth.",
    importantPoints: [
      "Mission: Chandrayaan-4.",
      "Objective: Lunar sample return to Earth.",
      "Approved by the Union Cabinet for execution by ISRO."
    ],
    examFacts: ["Mission: Chandrayaan-4", "Type: Lunar Sample Return", "Agency: ISRO"],
    quickRemember: "Chandrayaan-4 was approved by the Cabinet as a lunar sample return mission.",
    audioText: "The Union Cabinet officially approved ISRO's Chandrayaan-4 mission, which aims to bring lunar soil samples back to Earth.",
    source: "ISRO / Cabinet", importantFor: ["SSC CGL", "CDS"]
  },
  {
    id: "REC-JUL-035", date: "2026-07-11", month: "Jul 2026", category: "Science & Technology",
    title: "DGCA Certifies India's First e-VTOL Air Taxi",
    summary: "The DGCA granted type certification to India's first electric Vertical Takeoff and Landing (e-VTOL) aircraft.",
    whatHappened: "The Directorate General of Civil Aviation (DGCA) granted type certification to a domestically developed electric Vertical Takeoff and Landing (e-VTOL) aircraft, paving the way for commercial electric air taxi services in congested Indian cities.",
    importantPoints: [
      "Type certification granted to India's first e-VTOL aircraft.",
      "Certified by the Directorate General of Civil Aviation (DGCA).",
      "Paves the way for electric air taxis in India."
    ],
    examFacts: ["Aircraft Type: e-VTOL (Electric Air Taxi)", "Certifying Authority: DGCA"],
    quickRemember: "The DGCA certified India's first e-VTOL aircraft for electric air taxi services.",
    audioText: "The DGCA granted certification to India's first electric Vertical Takeoff and Landing aircraft, enabling future air taxi services.",
    source: "DGCA", importantFor: ["SSC CGL", "State PCS"]
  },
  {
    id: "REC-JUL-036", date: "2026-07-10", month: "Jul 2026", category: "Defence",
    title: "INS Triput Launched in Goa",
    summary: "INS Triput, the first of the two advanced guided missile frigates being built in Goa, was launched.",
    whatHappened: "INS Triput, the first of the two advanced guided missile frigates under Project 1135.6 M, was launched at the Goa Shipyard Limited (GSL). The ship is equipped with advanced stealth features and indigenous weapon systems.",
    importantPoints: [
      "Ship: INS Triput.",
      "Class: Advanced Guided Missile Frigate (Project 1135.6 M).",
      "Launched at Goa Shipyard Limited (GSL)."
    ],
    examFacts: ["Warship: INS Triput", "Project: Project 1135.6 M", "Shipyard: Goa Shipyard Limited"],
    quickRemember: "The advanced guided missile frigate INS Triput was launched at Goa Shipyard Limited.",
    audioText: "The advanced guided missile frigate INS Triput was officially launched at Goa Shipyard Limited.",
    source: "Indian Navy", importantFor: ["CDS", "SSC CGL"]
  },
  {
    id: "REC-JUL-037", date: "2026-07-08", month: "Jul 2026", category: "International Affairs",
    title: "BIMSTEC Charter Enters Into Force",
    summary: "The BIMSTEC Charter officially entered into force, giving the grouping a legal personality.",
    whatHappened: "The BIMSTEC (Bay of Bengal Initiative for Multi-Sectoral Technical and Economic Cooperation) Charter officially entered into force, transforming the regional grouping into a formal inter-governmental organization with a distinct legal personality.",
    importantPoints: [
      "BIMSTEC Charter officially entered into force.",
      "Grants the grouping a legal personality as an inter-governmental organization.",
      "BIMSTEC comprises 7 countries dependent on the Bay of Bengal."
    ],
    examFacts: ["Organization: BIMSTEC", "Milestone: Charter entered into force", "Member Count: 7"],
    quickRemember: "The BIMSTEC Charter came into force, making it a formal legal organization.",
    audioText: "The BIMSTEC Charter officially entered into force, transforming the regional grouping into a formal legal organization.",
    source: "BIMSTEC Secretariat", importantFor: ["UPSC", "SSC CGL"]
  },
  {
    id: "REC-JUL-038", date: "2026-07-06", month: "Jul 2026", category: "Environment",
    title: "Kaziranga Floods and Animal Rescue Operations",
    summary: "Massive rescue operations were launched in Kaziranga National Park due to severe Brahmaputra floods.",
    whatHappened: "Severe monsoon floods in the Brahmaputra River inundated over 80% of the Kaziranga National Park in Assam. State forest guards and the NDRF launched massive rescue operations, establishing highland corridors to save the endangered one-horned rhinoceroses and other wildlife.",
    importantPoints: [
      "Severe floods inundated Kaziranga National Park.",
      "River: Brahmaputra.",
      "Focus on saving the endangered one-horned rhinoceros."
    ],
    examFacts: ["Park: Kaziranga National Park", "State: Assam", "River: Brahmaputra"],
    quickRemember: "Kaziranga National Park in Assam faced severe flooding from the Brahmaputra River.",
    audioText: "Massive rescue operations were launched in Assam's Kaziranga National Park after severe floods from the Brahmaputra River.",
    source: "Ministry of Environment", importantFor: ["SSC CGL", "State PCS"]
  },
  {
    id: "REC-JUL-039", date: "2026-07-04", month: "Jul 2026", category: "Economy",
    title: "India Ranks 40th in Global Innovation Index",
    summary: "India retained its 40th rank in the Global Innovation Index released by WIPO.",
    whatHappened: "The World Intellectual Property Organization (WIPO) released the Global Innovation Index (GII). India retained its position at the 40th rank out of 132 economies, showcasing sustained progress in IT exports, human capital, and startup ecosystem growth.",
    importantPoints: [
      "India ranked 40th in the Global Innovation Index.",
      "Released by the World Intellectual Property Organization (WIPO).",
      "Switzerland secured the top position."
    ],
    examFacts: ["India's Rank: 40th", "Publishing Body: WIPO", "Index: Global Innovation Index"],
    quickRemember: "India ranked 40th in the WIPO Global Innovation Index.",
    audioText: "India retained the 40th rank in the Global Innovation Index published by the World Intellectual Property Organization.",
    source: "WIPO", importantFor: ["SSC CGL", "Bank PO"]
  },
  {
    id: "REC-JUL-040", date: "2026-07-02", month: "Jul 2026", category: "Science & Technology",
    title: "India's First Quantum Telecom Network Tested",
    summary: "India successfully tested its first quantum-secured telecom network link in New Delhi.",
    whatHappened: "The Department of Telecommunications (DoT), in collaboration with C-DoT, successfully tested India's first quantum-secured telecom communication link in New Delhi using Quantum Key Distribution (QKD) technology to prevent hacking and data interception.",
    importantPoints: [
      "First quantum-secured telecom network tested in India.",
      "Uses Quantum Key Distribution (QKD) technology.",
      "Tested in New Delhi by DoT and C-DoT."
    ],
    examFacts: ["Technology: Quantum Key Distribution (QKD)", "Location: New Delhi", "Agency: C-DoT / DoT"],
    quickRemember: "India tested its first quantum-secured telecom network in New Delhi using QKD technology.",
    audioText: "India successfully tested its first quantum-secured telecom network in New Delhi to prevent cyber interception.",
    source: "Department of Telecommunications", importantFor: ["SSC CGL", "UPSC"]
  }
];

const julRecallQuestionsBatch2 = [
  {
    id: "REC-Q-JUL-021",
    articleId: "REC-JUL-021",
    category: "Art & Culture",
    topic: "UNESCO World Heritage",
    question: "Which mound-burial system in Assam became the first cultural heritage site from Northeast India to be added to the UNESCO World Heritage List?",
    options: ["Kamakhya Temple Complex", "Ahom Moidams", "Majuli Island Monasteries", "Kachari Ruins"],
    answer: 1,
    explanation: "The Moidams of the Ahom Dynasty in Charaideo, Assam, were inscribed as a UNESCO World Heritage Site."
  },
  {
    id: "REC-Q-JUL-022",
    articleId: "REC-JUL-022",
    category: "Science & Technology",
    topic: "Space Exploration",
    question: "ISRO launched its high-throughput communication satellite, GSAT-20, to enhance rural broadband. Which launch vehicle was used for this mission?",
    options: ["LVM3 (GSLV Mk III)", "Ariane 5", "SpaceX Falcon 9", "PSLV-XL"],
    answer: 2,
    explanation: "ISRO launched the GSAT-20 heavy communication satellite aboard a SpaceX Falcon 9 rocket from Cape Canaveral."
  },
  {
    id: "REC-Q-JUL-023",
    articleId: "REC-JUL-023",
    category: "International Affairs",
    topic: "International Organizations",
    question: "Which country officially signed the memorandum of obligations to become the 10th full member state of the Shanghai Cooperation Organisation (SCO)?",
    options: ["Iran", "Belarus", "Mongolia", "Armenia"],
    answer: 1,
    explanation: "Belarus was officially admitted as the 10th full member of the SCO, expanding the bloc into Eastern Europe."
  },
  {
    id: "REC-Q-JUL-024",
    articleId: "REC-JUL-024",
    category: "Important Days",
    topic: "Economic Observances",
    question: "Income Tax Day (Aaykar Diwas) is observed on 24 July in India. Who originally introduced the income tax in India on this day in 1860?",
    options: ["Lord Dalhousie", "Sir James Wilson", "Lord Canning", "Dadabhai Naoroji"],
    answer: 1,
    explanation: "Sir James Wilson introduced the income tax in India on 24 July 1860 to compensate for losses incurred during the 1857 uprising."
  },
  {
    id: "REC-Q-JUL-025",
    articleId: "REC-JUL-025",
    category: "Defence",
    topic: "Missile Systems",
    question: "DRDO recently completed the Critical Design Review for 'Project Kusha'. What type of defence system is being developed under this project?",
    options: ["Anti-Submarine Torpedo", "Long-Range Surface-to-Air Missile (LR-SAM)", "Hypersonic Glide Vehicle", "Air-to-Air Refueling Pod"],
    answer: 1,
    explanation: "Project Kusha is India's indigenous Long-Range Surface-to-Air Missile (LR-SAM) system, intended to act as an air defence shield."
  },
  {
    id: "REC-Q-JUL-026",
    articleId: "REC-JUL-026",
    category: "Important Days",
    topic: "Media History",
    question: "National Broadcasting Day is celebrated on 23 July to commemorate the first-ever radio broadcast in India in 1927, which went on air from which station?",
    options: ["Calcutta Station", "Madras Station", "Bombay Station", "Delhi Station"],
    answer: 2,
    explanation: "The first radio broadcast in India went on air on 23 July 1927 from the Bombay Station under the Indian Broadcasting Company."
  },
  {
    id: "REC-Q-JUL-027",
    articleId: "REC-JUL-027",
    category: "Economy",
    topic: "Digital Banking",
    question: "The Reserve Bank of India (RBI) recently introduced 'programmable features' for which financial instrument to ensure targeted fund utilization?",
    options: ["E-Rupi Vouchers", "UPI Lite", "Retail Digital Rupee (CBDC-R)", "National Common Mobility Card"],
    answer: 2,
    explanation: "The RBI launched programmable features for the retail Central Bank Digital Currency (CBDC-R), allowing funds to be programmed for specific end-uses."
  },
  {
    id: "REC-Q-JUL-028",
    articleId: "REC-JUL-028",
    category: "Important Days",
    topic: "Health Observances",
    question: "World Brain Day is observed annually on 22 July by which global organization to promote neurological health and stroke prevention?",
    options: ["World Health Organization", "World Federation of Neurology", "International Brain Research Organization", "Global Neuroscience Foundation"],
    answer: 1,
    explanation: "World Brain Day is led by the World Federation of Neurology (WFN) to raise awareness about brain health and neurological disorders."
  },
  {
    id: "REC-Q-JUL-029",
    articleId: "REC-JUL-029",
    category: "Defence",
    topic: "Defense Procurements",
    question: "The Defence Acquisition Council cleared the procurement of 31 MQ-9B SeaGuardian and SkyGuardian drones from which country?",
    options: ["Israel", "France", "Russia", "United States"],
    answer: 3,
    explanation: "India cleared the procurement of 31 MQ-9B High Altitude Long Endurance (HALE) armed drones from the United States (General Atomics)."
  },
  {
    id: "REC-Q-JUL-030",
    articleId: "REC-JUL-030",
    category: "Economy & Infrastructure",
    topic: "Industrial Parks",
    question: "The first PM MITRA (Mega Integrated Textile Region and Apparel) Park, aimed at integrating the textile value chain, was inaugurated in which state?",
    options: ["Gujarat", "Tamil Nadu", "Maharashtra", "Uttar Pradesh"],
    answer: 1,
    explanation: "The first PM MITRA Mega Textile Park was inaugurated in Virudhunagar, Tamil Nadu, to boost textile manufacturing infrastructure."
  },
  {
    id: "REC-Q-JUL-031",
    articleId: "REC-JUL-031",
    category: "Sports",
    topic: "Tennis",
    question: "Which tennis player defeated Jasmine Paolini to win the Wimbledon 2026 Ladies' Singles title?",
    options: ["Iga Swiatek", "Elena Rybakina", "Barbora Krejcikova", "Aryna Sabalenka"],
    answer: 2,
    explanation: "Czech player Barbora Krejcikova won the Wimbledon Ladies' Singles title by defeating Italy's Jasmine Paolini."
  },
  {
    id: "REC-Q-JUL-032",
    articleId: "REC-JUL-032",
    category: "Important Days",
    topic: "UN Observances",
    question: "The United Nations observes World Youth Skills Day annually on which date to highlight the importance of equipping youth for employment?",
    options: ["5 July", "10 July", "15 July", "20 July"],
    answer: 2,
    explanation: "World Youth Skills Day is observed globally on 15 July to promote youth employment and entrepreneurship."
  },
  {
    id: "REC-Q-JUL-033",
    articleId: "REC-JUL-033",
    category: "International Affairs",
    topic: "Bilateral Trade",
    question: "India recently executed its first crude oil transaction using local currencies (Rupee and Dirham) under the Local Currency Settlement (LCS) system with which country?",
    options: ["Saudi Arabia", "United Arab Emirates", "Russia", "Iran"],
    answer: 1,
    explanation: "India and the UAE successfully completed their first crude oil trade under the LCS system to reduce dependency on the US Dollar."
  },
  {
    id: "REC-Q-JUL-034",
    articleId: "REC-JUL-034",
    category: "Science & Technology",
    topic: "Lunar Missions",
    question: "The Union Cabinet formally approved the architecture for ISRO's Chandrayaan-4 mission. What is the primary objective of this mission?",
    options: ["Deploying a rover on the lunar North Pole", "Lunar sample return to Earth", "Establishing a lunar orbit space station", "Manned landing on the Moon"],
    answer: 1,
    explanation: "Chandrayaan-4 is designed as a complex sample return mission, aiming to collect lunar soil and safely return it to Earth."
  },
  {
    id: "REC-Q-JUL-035",
    articleId: "REC-JUL-035",
    category: "Science & Technology",
    topic: "Aviation",
    question: "The Directorate General of Civil Aviation (DGCA) granted type certification to India's first domestically developed aircraft of what specific type, paving the way for air taxis?",
    options: ["Hydrogen Fuel Cell Plane", "e-VTOL (Electric Vertical Takeoff and Landing)", "Solar-powered Glider", "Supersonic Passenger Jet"],
    answer: 1,
    explanation: "The DGCA certified India's first e-VTOL aircraft, which will be used for commercial electric air taxi services."
  },
  {
    id: "REC-Q-JUL-036",
    articleId: "REC-JUL-036",
    category: "Defence",
    topic: "Naval Warships",
    question: "INS Triput, the first of the two advanced guided missile frigates under Project 1135.6 M, was launched at which shipyard?",
    options: ["Mazagon Dock Shipbuilders Limited", "Garden Reach Shipbuilders & Engineers", "Goa Shipyard Limited", "Cochin Shipyard Limited"],
    answer: 2,
    explanation: "The advanced guided missile frigate INS Triput was launched at Goa Shipyard Limited (GSL)."
  },
  {
    id: "REC-Q-JUL-037",
    articleId: "REC-JUL-037",
    category: "International Affairs",
    topic: "Regional Treaties",
    question: "The formal Charter of which Bay of Bengal regional grouping recently entered into force, transforming it into a legal inter-governmental organization?",
    options: ["SAARC", "ASEAN", "BIMSTEC", "IORA"],
    answer: 2,
    explanation: "The BIMSTEC Charter officially entered into force, giving the 7-nation grouping a distinct legal personality."
  },
  {
    id: "REC-Q-JUL-038",
    articleId: "REC-JUL-038",
    category: "Environment",
    topic: "Disaster Management",
    question: "Severe monsoon floods from which river recently inundated over 80% of the Kaziranga National Park, triggering massive animal rescue operations?",
    options: ["Ganga", "Teesta", "Brahmaputra", "Barak"],
    answer: 2,
    explanation: "Kaziranga National Park in Assam faces severe seasonal flooding primarily from the Brahmaputra River."
  },
  {
    id: "REC-Q-JUL-039",
    articleId: "REC-JUL-039",
    category: "Economy",
    topic: "Global Indices",
    question: "In the Global Innovation Index (GII) released by the World Intellectual Property Organization (WIPO), what rank did India retain?",
    options: ["35th", "40th", "45th", "50th"],
    answer: 1,
    explanation: "India retained its position at the 40th rank in the Global Innovation Index out of 132 economies."
  },
  {
    id: "REC-Q-JUL-040",
    articleId: "REC-JUL-040",
    category: "Science & Technology",
    topic: "Telecommunications",
    question: "The Department of Telecommunications successfully tested India's first quantum-secured telecom network in New Delhi. What technology does it use to prevent hacking?",
    options: ["Quantum Key Distribution (QKD)", "Blockchain Ledger Routing", "Photonic Radar Jamming", "End-to-End Deep Encryption"],
    answer: 0,
    explanation: "The network uses Quantum Key Distribution (QKD) technology, which relies on quantum mechanics to detect and prevent data interception."
  }
];

// 👉 PUSH DATA INTO GLOBAL ARRAYS
if (typeof hiddenRecallArticles !== 'undefined') {
  hiddenRecallArticles.push(...julRecallArticlesBatch2);
}
if (typeof recallQuestionPool !== 'undefined') {
  recallQuestionPool.push(...julRecallQuestionsBatch2);
}

/* ==========================================================================
   END OF JULY BATCH 2
   ========================================================================== */

/* ==========================================================================
   JULY 2026 - BATCH 3 (ITEMS 041 TO 060)
   ========================================================================== */

const julRecallArticlesBatch3 = [
  {
    id: "REC-JUL-041", date: "2026-07-28", month: "Jul 2026", category: "Defence",
    title: "India-France Joint Naval Exercise Varuna 2026",
    summary: "The 24th edition of the India-France bilateral naval exercise 'Varuna' commenced in the Mediterranean Sea.",
    whatHappened: "The 24th edition of the bilateral naval exercise 'Varuna' between the Indian Navy and the French Navy commenced in the Mediterranean Sea. The exercise features advanced anti-submarine warfare drills and carrier-borne air operations.",
    importantPoints: [
      "24th edition of exercise Varuna.",
      "Conducted between the Indian Navy and French Navy.",
      "Held in the Mediterranean Sea."
    ],
    examFacts: ["Exercise: Varuna 2026", "Partner: France", "Location: Mediterranean Sea"],
    quickRemember: "The 24th India-France naval exercise Varuna was held in the Mediterranean Sea.",
    audioText: "The 24th edition of the India-France naval exercise Varuna commenced in the Mediterranean Sea.",
    source: "Indian Navy", importantFor: ["CDS", "SSC CGL"]
  },
  {
    id: "REC-JUL-042", date: "2026-07-27", month: "Jul 2026", category: "Economy",
    title: "RBI Implements New Gold Loan LTV Guidelines",
    summary: "The RBI issued revised guidelines tightening Loan-to-Value (LTV) limits on digital gold loans.",
    whatHappened: "The Reserve Bank of India issued revised regulatory guidelines standardizing Loan-to-Value (LTV) ceilings for digital gold-backed financing platforms at 75%, aiming to curb speculative leveraging and systemic risk across non-banking lenders.",
    importantPoints: [
      "Standardized LTV ceiling for digital gold loans at 75%.",
      "Issued by the Reserve Bank of India (RBI).",
      "Aims to curb speculative risk in non-banking finance companies."
    ],
    examFacts: ["Regulator: RBI", "LTV Ceiling: 75%", "Asset: Gold Loans"],
    quickRemember: "RBI set a strict 75% LTV ceiling on gold-backed financing platforms.",
    audioText: "The Reserve Bank of India issued guidelines capping the Loan-to-Value ratio for digital gold loans at 75 percent.",
    source: "RBI", importantFor: ["Bank PO", "SSC CGL"]
  },
  {
    id: "REC-JUL-043", date: "2026-07-26", month: "Jul 2026", category: "Science & Technology",
    title: "ISRO Successfully Tests Reusable Rocket Grid Fins",
    summary: "ISRO successfully tested titanium grid fins for the controlled descent of reusable launch vehicle boosters.",
    whatHappened: "ISRO successfully completed atmospheric wind-tunnel and high-velocity drop tests of indigenous titanium grid fins. These aerodynamic control surfaces are designed to guide future reusable rocket boosters back for controlled vertical landings.",
    importantPoints: [
      "Tested titanium grid fins for reusable launch vehicle boosters.",
      "Designed for controlled vertical landing and atmospheric steering.",
      "Developed by ISRO."
    ],
    examFacts: ["Technology: Titanium Grid Fins", "Application: Reusable Rocket Boosters", "Agency: ISRO"],
    quickRemember: "ISRO tested titanium grid fins to steer reusable rocket boosters during vertical landings.",
    audioText: "ISRO successfully tested titanium grid fins designed to guide reusable rocket boosters back for controlled vertical landings.",
    source: "ISRO", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-JUL-044", date: "2026-07-25", month: "Jul 2026", category: "Environment",
    title: "India Achieves 50% Non-Fossil Power Milestone Early",
    summary: "CEA data confirmed that India crossed 50% of its cumulative electric power capacity from non-fossil fuel sources.",
    whatHappened: "Data published by the Central Electricity Authority (CEA) confirmed that India has officially crossed the milestone of sourcing over 50% of its installed electricity generation capacity from non-fossil fuel sources, achieving its Paris Agreement NDC target ahead of schedule.",
    importantPoints: [
      "Crossed 50% non-fossil fuel electricity capacity milestone.",
      "Confirmed by Central Electricity Authority (CEA) data.",
      "Achieved Paris Agreement Nationally Determined Contribution (NDC) target early."
    ],
    examFacts: ["Milestone: >50% Non-Fossil Capacity", "Reporting Agency: CEA"],
    quickRemember: "India achieved its 50% non-fossil fuel power generation capacity target ahead of schedule.",
    audioText: "Official data confirmed that India crossed the milestone of having over fifty percent of its power capacity from non-fossil sources.",
    source: "Ministry of Power", importantFor: ["UPSC", "SSC CGL"]
  },
  {
    id: "REC-JUL-045", date: "2026-07-24", month: "Jul 2026", category: "Government Schemes",
    title: "PM-AASHA Scheme Outlay Enhanced",
    summary: "The Union Cabinet approved a financial outlay of ₹35,000 crore for the expanded PM-AASHA scheme.",
    whatHappened: "The Union Cabinet approved a substantial financial package of ₹35,000 crore for the Pradhan Mantri Annadata Aay Sanrakshan Abhiyan (PM-AASHA) scheme to provide foolproof price support and procurement assurance to pulse and oilseed farmers.",
    importantPoints: [
      "Enhanced outlay of ₹35,000 crore for PM-AASHA.",
      "Provides price support and procurement assurance for pulses and oilseeds.",
      "Approved by the Union Cabinet."
    ],
    examFacts: ["Scheme: PM-AASHA", "Outlay: ₹35,000 Crore", "Focus: Pulses and Oilseeds Procurement"],
    quickRemember: "Cabinet approved a ₹35,000 crore financial outlay for the PM-AASHA price support scheme.",
    audioText: "The Union Cabinet approved a thirty-five thousand crore rupee package for the PM-AASHA farmer price support scheme.",
    source: "Union Cabinet", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-JUL-046", date: "2026-07-23", month: "Jul 2026", category: "National Affairs",
    title: "India Post Launches Smart Delivery Hubs in Metros",
    summary: "India Post inaugurated automated smart parcel delivery hubs in four metropolitan cities.",
    whatHappened: "India Post rolled out automated 'Smart Delivery Hubs' across New Delhi, Mumbai, Bengaluru, and Chennai. The hubs leverage IoT sorting mechanisms and automated robotic arms to accelerate e-commerce parcel processing.",
    importantPoints: [
      "Automated Smart Delivery Hubs launched in 4 metros (Delhi, Mumbai, Bengaluru, Chennai).",
      "Leverages IoT sorting and robotic parcel handling.",
      "Initiative by India Post."
    ],
    examFacts: ["Initiative: Smart Delivery Hubs", "Agency: India Post"],
    quickRemember: "India Post launched automated smart parcel delivery hubs across four metropolitan cities.",
    audioText: "India Post inaugurated automated smart parcel delivery hubs in major metropolitan cities to speed up e-commerce logistics.",
    source: "Ministry of Communications", importantFor: ["SSC CGL", "SSC CHSL"]
  },
  {
    id: "REC-JUL-047", date: "2026-07-22", month: "Jul 2026", category: "International Affairs",
    title: "Bimal Jalan Appointed to UN Advisory Board",
    summary: "Former RBI Governor Bimal Jalan was appointed to the United Nations High-Level Advisory Board on Multilateralism.",
    whatHappened: "Former Reserve Bank of India Governor and noted economist Bimal Jalan was appointed as a member of the United Nations High-Level Advisory Board on Effective Multilateralism, contributing economic policy expertise on global financial reforms.",
    importantPoints: [
      "Bimal Jalan appointed to UN Advisory Board.",
      "Role focuses on effective multilateralism and global financial reforms.",
      "Former Governor of the Reserve Bank of India."
    ],
    examFacts: ["Appointee: Bimal Jalan", "Organization: United Nations Advisory Board"],
    quickRemember: "Former RBI Governor Bimal Jalan was appointed to a high-level United Nations advisory board.",
    audioText: "Former RBI Governor Bimal Jalan was appointed to the United Nations advisory board on effective multilateralism.",
    source: "UN Information Centre", importantFor: ["UPSC", "SSC CGL"]
  },
  {
    id: "REC-JUL-048", date: "2026-07-21", month: "Jul 2026", category: "Science & Technology",
    title: "CSIR-NEERI Develops Smog-Eating Nano-Coatings",
    summary: "CSIR-NEERI engineered catalytic nano-coatings that break down urban air pollutants using sunlight.",
    whatHappened: "Scientists at CSIR-NEERI (National Environmental Engineering Research Institute) developed 'smog-eating' catalytic titanium dioxide nano-coatings. When applied to building facades, they chemically break down nitrogen oxides and particulate matter upon exposure to sunlight.",
    importantPoints: [
      "Catalytic nano-coatings developed by CSIR-NEERI.",
      "Breaks down urban nitrogen oxides using sunlight.",
      "Applied to building walls to mitigate urban smog."
    ],
    examFacts: ["Developer: CSIR-NEERI", "Technology: Smog-eating nano-coatings"],
    quickRemember: "CSIR-NEERI developed catalytic nano-coatings to break down urban smog using sunlight.",
    audioText: "CSIR-NEERI scientists developed smog-eating nano-coatings designed to break down urban pollutants under sunlight.",
    source: "CSIR", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-JUL-049", date: "2026-07-20", month: "Jul 2026", category: "Sports",
    title: "Sreeja Akula Wins WTT Contender Singles Title",
    summary: "Table tennis star Sreeja Akula won the World Table Tennis (WTT) Contender singles title.",
    whatHappened: "Indian table tennis player Sreeja Akula clinched the women's singles title at the World Table Tennis (WTT) Contender tournament, defeating a top-seeded international opponent in a dominant display of skill and tactical execution.",
    importantPoints: [
      "Sreeja Akula won the WTT Contender singles title.",
      "Discipline: Table Tennis.",
      "Marks a major milestone on the global ITTF circuit."
    ],
    examFacts: ["Athlete: Sreeja Akula", "Sport: Table Tennis", "Tournament: WTT Contender"],
    quickRemember: "Table tennis player Sreeja Akula won the WTT Contender singles title.",
    audioText: "Indian table tennis star Sreeja Akula won the women's singles title at the WTT Contender tournament.",
    source: "ITTF", importantFor: ["SSC CGL", "SSC CHSL"]
  },
  {
    id: "REC-JUL-050", date: "2026-07-19", month: "Jul 2026", category: "Economy & Infrastructure",
    title: "India's First Green Hydrogen Highway Corridor",
    summary: "The Ministry of Road Transport initiated trials for India's first dedicated Green Hydrogen highway freight corridor.",
    whatHappened: "The Ministry of Road Transport and Highways (MoRTH) initiated commercial trials for India's first Green Hydrogen highway freight corridor, deploying heavy-duty fuel-cell trucks along the Delhi-Mumbai Industrial Corridor (DMIC).",
    importantPoints: [
      "India's first Green Hydrogen highway freight corridor.",
      "Deployed along the Delhi-Mumbai Industrial Corridor (DMIC).",
      "Utilizes heavy-duty fuel-cell trucks."
    ],
    examFacts: ["Corridor: Delhi-Mumbai Industrial Corridor", "Fuel Type: Green Hydrogen"],
    quickRemember: "MoRTH launched trials for India's first Green Hydrogen highway corridor on the Delhi-Mumbai route.",
    audioText: "The Ministry of Road Transport initiated trials for India's first green hydrogen highway freight corridor along the Delhi-Mumbai route.",
    source: "MoRTH", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-JUL-051", date: "2026-07-17", month: "Jul 2026", category: "Defence",
    title: "Project 75I Submarine Contract Finalized",
    summary: "The Ministry of Defence finalized the historic Project 75I deal to build six advanced air-independent propulsion submarines.",
    whatHappened: "The Ministry of Defence finalized the contract for Project 75I to construct six advanced stealth submarines equipped with Air-Independent Propulsion (AIP) systems in domestic shipyards under strategic partnership models.",
    importantPoints: [
      "Project 75I finalized for 6 stealth submarines.",
      "Equipped with Air-Independent Propulsion (AIP) technology.",
      "Built domestically under strategic partnership frameworks."
    ],
    examFacts: ["Project: Project 75I", "Capability: AIP Submarines", "Quantity: 6 Units"],
    quickRemember: "The Ministry of Defence finalized the Project 75I deal to build 6 AIP submarines domestically.",
    audioText: "The Ministry of Defence finalized the Project 75I contract to construct six advanced air-independent propulsion submarines locally.",
    source: "Ministry of Defence", importantFor: ["CDS", "SSC CGL", "UPSC"]
  },
  {
    id: "REC-JUL-052", date: "2026-07-16", month: "Jul 2026", category: "National Affairs",
    title: "National Digital Health Mission Completes 5 Years",
    summary: "The Ayushman Bharat Digital Mission (ABDM) marked its 5th anniversary with over 600 million health IDs created.",
    whatHappened: "The Ayushman Bharat Digital Mission (ABDM) marked five years of implementation, reporting that over 600 million Ayushman Bharat Health Accounts (ABHA) have been successfully generated, transforming digitized patient record management nationwide.",
    importantPoints: [
      "ABDM marked its 5th anniversary.",
      "Over 600 million health IDs (ABHA numbers) generated.",
      "Digitizes patient medical records across India."
    ],
    examFacts: ["Mission: ABDM", "Milestone: 5 Years", "Health IDs Created: >600 Million"],
    quickRemember: "The Ayushman Bharat Digital Mission (ABDM) marked 5 years with over 600 million ABHA IDs created.",
    audioText: "The Ayushman Bharat Digital Mission celebrated its fifth anniversary, crossing over six hundred million health accounts created.",
    source: "National Health Authority", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-JUL-053", date: "2026-07-14", month: "Jul 2026", category: "Science & Technology",
    title: "IIT Madras Launches Low-Cost Wind Turbines",
    summary: "IIT Madras engineers developed high-efficiency, low-cost vertical-axis micro wind turbines for urban households.",
    whatHappened: "Researchers at IIT Madras engineered a compact, low-cost vertical-axis micro wind turbine system optimized for low-wind urban environments. The system can be mounted on residential rooftops to supplement household solar energy setups.",
    importantPoints: [
      "Vertical-axis micro wind turbines developed by IIT Madras.",
      "Optimized for urban low-wind residential rooftops.",
      "Supplements solar photovoltaic installations."
    ],
    examFacts: ["Innovation: Micro Wind Turbines", "Institute: IIT Madras"],
    quickRemember: "IIT Madras developed low-cost vertical-axis micro wind turbines for urban residential rooftops.",
    audioText: "Engineers at IIT Madras designed low-cost vertical-axis micro wind turbines for residential urban rooftop installation.",
    source: "IIT Madras", importantFor: ["SSC CGL", "State PCS"]
  },
  {
    id: "REC-JUL-054", date: "2026-07-12", month: "Jul 2026", category: "International Affairs",
    title: "India-EU Trade and Technology Council Meet",
    summary: "India and the European Union held high-level ministerial talks under the Trade and Technology Council in Brussels.",
    whatHappened: "Delegations from India and the European Union convened in Brussels for the ministerial meeting of the India-EU Trade and Technology Council (TTC). Discussions focused on secure semiconductor supply chains, green tech standards, and artificial intelligence safety guardrails.",
    importantPoints: [
      "India-EU Trade and Technology Council (TTC) ministerial meet in Brussels.",
      "Focus areas: Semiconductors, green technology standards, and AI safety.",
      "Strengthens strategic high-tech cooperation."
    ],
    examFacts: ["Event: India-EU TTC Meeting", "Location: Brussels, Belgium"],
    quickRemember: "India and the EU held a Trade and Technology Council ministerial meeting in Brussels.",
    audioText: "India and the European Union held high-level ministerial talks under their Trade and Technology Council in Brussels.",
    source: "MEA", importantFor: ["UPSC", "SSC CGL"]
  },
  {
    id: "REC-JUL-055", date: "2026-07-11", month: "Jul 2026", category: "Economy",
    title: "SEBI Mandates T+0 Settlement for Top 500 Stocks",
    summary: "SEBI rolled out optional same-day (T+0) trade settlement cycles for the top 500 listed companies by market cap.",
    whatHappened: "The Securities and Exchange Board of India (SEBI) expanded same-day (T+0) trade settlement availability to cover the top 500 listed equities by market capitalization, enhancing liquidity and capital velocity across Indian stock exchanges.",
    importantPoints: [
      "T+0 (same-day) settlement expanded to top 500 stocks.",
      "Regulated by SEBI.",
      "Enhances market liquidity and reduces settlement counterparty risk."
    ],
    examFacts: ["Regulator: SEBI", "Settlement Cycle: T+0 (Same-Day)", "Scope: Top 500 Equities"],
    quickRemember: "SEBI rolled out optional T+0 same-day trade settlement for the top 500 listed equities.",
    audioText: "SEBI expanded same-day T+0 trade settlement availability to cover the top five hundred listed stocks by market cap.",
    source: "SEBI", importantFor: ["Bank PO", "SSC CGL"]
  },
  {
    id: "REC-JUL-056", date: "2026-07-09", month: "Jul 2026", category: "Government Schemes",
    title: "National Mission on Advanced Materials Launched",
    summary: "The Union Cabinet approved the National Mission on Advanced Materials to promote indigenous R&D for strategic sectors.",
    whatHappened: "The Union Cabinet approved the launch of the 'National Mission on Advanced Materials' with a dedicated corpus to foster domestic research, design, and manufacturing of superalloys, carbon fibers, and smart materials required for aerospace and defense.",
    importantPoints: [
      "National Mission on Advanced Materials approved by the Cabinet.",
      "Focuses on R&D for superalloys, carbon fibers, and smart materials.",
      "Supports aerospace and defense manufacturing independence."
    ],
    examFacts: ["Mission: National Mission on Advanced Materials", "Sector: Strategic Materials & R&D"],
    quickRemember: "Cabinet approved the National Mission on Advanced Materials to boost strategic manufacturing.",
    audioText: "The Union Cabinet approved the National Mission on Advanced Materials to foster domestic research for aerospace and defense.",
    source: "Union Cabinet", importantFor: ["UPSC", "SSC CGL"]
  },
  {
    id: "REC-JUL-057", date: "2026-07-08", month: "Jul 2026", category: "Environment",
    title: "India's First Dugong Conservation Reserve Expanded",
    summary: "Tamil Nadu expanded the Palk Bay Dugong Conservation Reserve to protect marine mammal habitats.",
    whatHappened: "The Tamil Nadu government officially notified an extension of the Palk Bay Dugong Conservation Reserve. The expanded sanctuary provides enhanced legal protection to vulnerable dugong populations, seagrass beds, and marine biodiversity in southern coastal waters.",
    importantPoints: [
      "Palk Bay Dugong Conservation Reserve expanded.",
      "Located in Tamil Nadu.",
      "Protects endangered marine mammals and seagrass ecosystems."
    ],
    examFacts: ["Reserve: Palk Bay Dugong Reserve", "State: Tamil Nadu"],
    quickRemember: "Tamil Nadu expanded the Palk Bay Dugong Conservation Reserve to protect marine habitats.",
    audioText: "The Tamil Nadu government notified an extension of the Palk Bay Dugong Conservation Reserve to protect marine life.",
    source: "TN Forest Dept", importantFor: ["SSC CGL", "State PCS"]
  },
  {
    id: "REC-JUL-058", date: "2026-07-06", month: "Jul 2026", category: "Science & Technology",
    title: "AIIMS New Delhi Deploys AI Sepsis Prediction Tool",
    summary: "AIIMS New Delhi deployed an advanced artificial intelligence model named 'Sepsis-Net' for early ICU intervention.",
    whatHappened: "All India Institute of Medical Sciences (AIIMS) New Delhi successfully deployed 'Sepsis-Net', an in-house developed machine learning tool designed to predict septic shock in critical care patients up to six hours prior to clinical symptom onset.",
    importantPoints: [
      "AI tool named 'Sepsis-Net' deployed at AIIMS New Delhi.",
      "Predicts septic shock in ICU patients hours before symptom onset.",
      "Enhances intensive care survival rates."
    ],
    examFacts: ["Tool: Sepsis-Net", "Hospital: AIIMS New Delhi", "Application: Early ICU Sepsis Prediction"],
    quickRemember: "AIIMS New Delhi deployed the 'Sepsis-Net' AI tool to predict septic shock early in ICU patients.",
    audioText: "AIIMS New Delhi deployed an artificial intelligence model named Sepsis-Net for early prediction of septic shock in ICUs.",
    source: "AIIMS", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-JUL-059", date: "2026-07-04", month: "Jul 2026", category: "International Affairs",
    title: "India-Japan Space Dialogue Focuses on Debris Tracking",
    summary: "India and Japan held their bilateral Space Dialogue in Tokyo, focusing on orbital debris tracking and SSA cooperation.",
    whatHappened: "India and Japan conducted their bilateral Space Dialogue in Tokyo. Discussions centered on Space Situational Awareness (SSA), joint satellite radar calibration, and mitigating space debris accumulation in low Earth orbit.",
    importantPoints: [
      "India-Japan bilateral Space Dialogue held in Tokyo.",
      "Focuses on Space Situational Awareness (SSA) and orbital debris tracking.",
      "Enhances bilateral space cooperation."
    ],
    examFacts: ["Event: India-Japan Space Dialogue", "Location: Tokyo, Japan", "Topic: SSA & Debris Mitigation"],
    quickRemember: "India and Japan held a bilateral Space Dialogue in Tokyo focusing on space debris tracking.",
    audioText: "India and Japan held their bilateral Space Dialogue in Tokyo, focusing on space situational awareness and debris tracking.",
    source: "MEA", importantFor: ["UPSC", "CDS"]
  },
  {
    id: "REC-JUL-060", date: "2026-07-02", month: "Jul 2026", category: "Economy & Infrastructure",
    title: "Dedicated Freight Corridor Nears 100% Completion",
    summary: "The Dedicated Freight Corridor Corporation confirmed that over 95% of the DFC network is fully operational.",
    whatHappened: "The Dedicated Freight Corridor Corporation of India Limited (DFCCIL) announced that over 95% of the Eastern and Western Dedicated Freight Corridors are fully operational, reducing freight transit times between industrial hubs and ports by up to 50%.",
    importantPoints: [
      "Over 95% of the Dedicated Freight Corridor (DFC) network operational.",
      "Comprises Eastern and Western DFC routes.",
      "Reduces cargo transit times by up to 50%."
    ],
    examFacts: ["Network: Eastern & Western DFC", "Operational Status: >95% Complete", "Agency: DFCCIL"],
    quickRemember: "Over 95% of India's Dedicated Freight Corridor network became operational.",
    audioText: "The Dedicated Freight Corridor Corporation confirmed that over ninety-five percent of the DFC network is fully operational.",
    source: "Ministry of Railways", importantFor: ["SSC CGL", "RRB NTPC"]
  }
];

const julRecallQuestionsBatch3 = [
  {
    id: "REC-Q-JUL-041", articleId: "REC-JUL-041", category: "Defence", topic: "Naval Exercises",
    question: "The 24th edition of the bilateral naval exercise 'Varuna' between the Indian Navy and the French Navy commenced in which water body?",
    options: ["Arabian Sea", "Bay of Bengal", "Mediterranean Sea", "Indian Ocean"],
    answer: 2, explanation: "The 24th edition of exercise Varuna between India and France was conducted in the Mediterranean Sea."
  },
  {
    id: "REC-Q-JUL-042", articleId: "REC-JUL-042", category: "Economy", topic: "Banking Regulations",
    question: "The Reserve Bank of India standardized Loan-to-Value (LTV) ceilings for digital gold-backed financing platforms at what percentage?",
    options: ["60%", "70%", "75%", "80%"],
    answer: 2, explanation: "The RBI standardized LTV ceilings for digital gold loans at 75% to curb speculative risk."
  },
  {
    id: "REC-Q-JUL-043", articleId: "REC-JUL-043", category: "Science & Technology", topic: "Space Technology",
    question: "ISRO successfully tested titanium grid fins. What is their primary purpose in future space missions?",
    options: ["Radiation shielding in deep space", "Steering reusable rocket boosters during controlled vertical landings", "Solar panel deployment mechanism", "Atmospheric heat shield insulation"],
    answer: 1, explanation: "Titanium grid fins act as aerodynamic control surfaces to guide reusable rocket boosters back for controlled vertical landings."
  },
  {
    id: "REC-Q-JUL-044", articleId: "REC-JUL-044", category: "Environment", topic: "Clean Energy Targets",
    question: "Data from the Central Electricity Authority (CEA) confirmed that India crossed what milestone ahead of schedule under its Paris Agreement targets?",
    options: ["25% non-fossil fuel power capacity", "40% non-fossil fuel power capacity", "50% non-fossil fuel power capacity", "75% non-fossil fuel power capacity"],
    answer: 2, explanation: "India officially crossed the milestone of sourcing over 50% of its installed electricity generation capacity from non-fossil sources ahead of schedule."
  },
  {
    id: "REC-Q-JUL-045", articleId: "REC-JUL-045", category: "Government Schemes", topic: "Agricultural Support",
    question: "The Union Cabinet approved an enhanced financial outlay of how much for the expanded PM-AASHA scheme to support pulse and oilseed farmers?",
    options: ["₹15,000 crore", "₹25,000 crore", "₹35,000 crore", "₹50,000 crore"],
    answer: 2, explanation: "The Union Cabinet approved a financial package of ₹35,000 crore for the PM-AASHA scheme to provide price support for pulses and oilseeds."
  },
  {
    id: "REC-Q-JUL-046", articleId: "REC-JUL-046", category: "National Affairs", topic: "Postal Logistics",
    question: "India Post launched automated 'Smart Delivery Hubs' leveraging IoT sorting and robotic arms in how many metropolitan cities?",
    options: ["2 Metros", "4 Metros", "6 Metros", "8 Metros"],
    answer: 1, explanation: "Smart Delivery Hubs were rolled out across 4 major metropolitan cities: New Delhi, Mumbai, Bengaluru, and Chennai."
  },
  {
    id: "REC-Q-JUL-047", articleId: "REC-JUL-047", category: "International Affairs", topic: "Global Governance",
    question: "Which former Reserve Bank of India Governor was appointed to the United Nations High-Level Advisory Board on Effective Multilateralism?",
    options: ["Raghuram Rajan", "Urjit Patel", "Bimal Jalan", "Shaktikanta Das"],
    answer: 2, explanation: "Former RBI Governor Bimal Jalan was appointed to the UN High-Level Advisory Board on Effective Multilateralism."
  },
  {
    id: "REC-Q-JUL-048", articleId: "REC-JUL-048", category: "Science & Technology", topic: "Environmental Tech",
    question: "Scientists at CSIR-NEERI developed catalytic titanium dioxide nano-coatings known as 'smog-eating' coatings. What do they break down when exposed to sunlight?",
    options: ["Carbon dioxide and methane", "Nitrogen oxides and particulate matter", "Sulfur dioxide and ozone", "Chlorofluorocarbons"],
    answer: 1, explanation: "The catalytic nano-coatings chemically break down urban nitrogen oxides and particulate matter upon exposure to sunlight."
  },
  {
    id: "REC-Q-JUL-049", articleId: "REC-JUL-049", category: "Sports", topic: "Table Tennis",
    question: "Sreeja Akula, who won a WTT Contender singles title, competes in which sport?",
    options: ["Badminton", "Table Tennis", "Tennis", "Squash"],
    answer: 1, explanation: "Sreeja Akula is an Indian table tennis star who won the women's singles title at a WTT Contender tournament."
  },
  {
    id: "REC-Q-JUL-050", articleId: "REC-JUL-050", category: "Economy & Infrastructure", topic: "Green Transport",
    question: "The Ministry of Road Transport initiated commercial trials for India's first Green Hydrogen highway freight corridor along which major industrial route?",
    options: ["Chennai-Bengaluru Industrial Corridor", "Delhi-Mumbai Industrial Corridor (DMIC)", "Amritsar-Kolkata Industrial Corridor", "Chennai-Vizag Industrial Corridor"],
    answer: 1, explanation: "Commercial trials for green hydrogen fuel-cell trucks were deployed along the Delhi-Mumbai Industrial Corridor (DMIC)."
  },
  {
    id: "REC-Q-JUL-051", articleId: "REC-JUL-051", category: "Defence", topic: "Submarine Programs",
    question: "The Ministry of Defence finalized the historic Project 75I deal to construct six advanced stealth submarines equipped with what specialized propulsion system?",
    options: ["Nuclear Pressurized Water Reactor", "Air-Independent Propulsion (AIP)", "Diesel-Electric Battery Hybrid", "Hydrogen Fuel Cell Engine"],
    answer: 1, explanation: "Project 75I involves building six advanced stealth submarines equipped with Air-Independent Propulsion (AIP) systems in domestic shipyards."
  },
  {
    id: "REC-Q-JUL-052", articleId: "REC-JUL-052", category: "National Affairs", topic: "Digital Health",
    question: "The Ayushman Bharat Digital Mission (ABDM) marked its 5th anniversary by reporting how many generated health IDs (ABHA numbers)?",
    options: ["Over 100 million", "Over 300 million", "Over 600 million", "Over 1 billion"],
    answer: 2, explanation: "ABDM reported that over 600 million Ayushman Bharat Health Accounts (ABHA) have been successfully generated."
  },
  {
    id: "REC-Q-JUL-053", articleId: "REC-JUL-053", category: "Science & Technology", topic: "Renewable Energy",
    question: "Researchers at IIT Madras engineered compact, low-cost micro wind turbines of what specific design optimized for urban residential rooftops?",
    options: ["Horizontal-axis dual blade", "Vertical-axis micro wind turbines", "Darrieus helical rotor", "Savonius cup turbine"],
    answer: 1, explanation: "IIT Madras developed vertical-axis micro wind turbines designed to supplement solar setups on residential rooftops."
  },
  {
    id: "REC-Q-JUL-054", articleId: "REC-JUL-054", category: "International Affairs", topic: "India-EU Relations",
    question: "Delegations from India and the European Union convened in which European city for a ministerial meeting of their Trade and Technology Council (TTC)?",
    options: ["Geneva", "Paris", "Brussels", "Frankfurt"],
    answer: 2, explanation: "The India-EU Trade and Technology Council ministerial meeting was held in Brussels, Belgium."
  },
  {
    id: "REC-Q-JUL-055", articleId: "REC-JUL-055", category: "Economy", topic: "Stock Market Settlements",
    question: "The Securities and Exchange Board of India (SEBI) expanded same-day trade settlement availability to cover the top how many listed equities?",
    options: ["Top 100 stocks", "Top 250 stocks", "Top 500 stocks", "Top 1000 stocks"],
    answer: 2, explanation: "SEBI expanded optional T+0 (same-day) trade settlement availability to cover the top 500 listed equities by market capitalization."
  },
  {
    id: "REC-Q-JUL-056", articleId: "REC-JUL-056", category: "Government Schemes", topic: "Strategic Manufacturing",
    question: "The Union Cabinet approved the 'National Mission on Advanced Materials' to foster domestic research and manufacturing of items such as:",
    options: ["Semiconductor silicon wafers", "Superalloys, carbon fibers, and smart materials", "Rare earth magnet powders", "Lithium-ion battery cathode cells"],
    answer: 1, explanation: "The National Mission on Advanced Materials focuses on domestic R&D for superalloys, carbon fibers, and smart materials for aerospace and defense."
  },
  {
    id: "REC-Q-JUL-057", articleId: "REC-JUL-057", category: "Environment", topic: "Marine Sanctuaries",
    question: "The Tamil Nadu government officially notified an extension for India's first dugong sanctuary, named the:",
    options: ["Gulf of Mannar Marine Park", "Palk Bay Dugong Conservation Reserve", "Vedanthangal Wildlife Sanctuary", "Point Calimere Sanctuary"],
    answer: 1, explanation: "Tamil Nadu expanded the Palk Bay Dugong Conservation Reserve to protect marine mammals and seagrass beds."
  },
  {
    id: "REC-Q-JUL-058", articleId: "REC-JUL-058", category: "Science & Technology", topic: "Medical AI",
    question: "What is the name of the machine learning tool deployed by AIIMS New Delhi to predict septic shock in ICU patients early?",
    options: ["Sepsis-Net", "MediPredict AI", "ICU-Sepsis Guard", "Vital-Scan Pro"],
    answer: 0, explanation: "AIIMS New Delhi deployed 'Sepsis-Net', an in-house machine learning tool predicting septic shock hours before symptom onset."
  },
  {
    id: "REC-Q-JUL-059", articleId: "REC-JUL-059", category: "International Affairs", topic: "Space Diplomacy",
    question: "India and Japan conducted their bilateral Space Dialogue focusing on orbital debris tracking and Space Situational Awareness (SSA) in which city?",
    options: ["New Delhi", "Bengaluru", "Tokyo", "Kyoto"],
    answer: 2, explanation: "The bilateral India-Japan Space Dialogue was conducted in Tokyo, Japan."
  },
  {
    id: "REC-Q-JUL-060", articleId: "REC-JUL-060", category: "Economy & Infrastructure", topic: "Freight Corridors",
    question: "The Dedicated Freight Corridor Corporation confirmed that what percentage of the Eastern and Western Dedicated Freight Corridors is now fully operational?",
    options: ["Over 75%", "Over 85%", "Over 95%", "100% Exact"],
    answer: 2, explanation: "Over 95% of the DFC network became operational, cutting cargo transit times between industrial hubs and ports by up to 50%."
  }
];

// 👉 PUSH DATA INTO GLOBAL ARRAYS
if (typeof hiddenRecallArticles !== 'undefined') {
  hiddenRecallArticles.push(...julRecallArticlesBatch3);
}
if (typeof recallQuestionPool !== 'undefined') {
  recallQuestionPool.push(...julRecallQuestionsBatch3);
}

/* ==========================================================================
   END OF JULY BATCH 3
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
   JULY 2026 - BATCH 5 (ITEMS 081 TO 100)
   ========================================================================== */

const julRecallArticlesBatch5 = [
  {
    id: "REC-JUL-081", date: "2026-07-28", month: "Jul 2026", category: "Science & Technology",
    title: "ISRO Completes First Qualification Test of Semi-Cryogenic Engine",
    summary: "ISRO successfully completed the first major qualification test of its new semi-cryogenic engine at Mahendragiri.",
    whatHappened: "The Indian Space Research Organisation (ISRO) successfully accomplished the first integrated hot-firing qualification test of its high-thrust semi-cryogenic engine at the ISRO Propulsion Complex (IPRC) in Mahendragiri, Tamil Nadu. The engine uses liquid oxygen (LOX) and kerosene to power future heavy-lift launch vehicles.",
    importantPoints: [
      "First integrated hot-firing qualification test of the semi-cryogenic engine.",
      "Conducted at IPRC, Mahendragiri, Tamil Nadu.",
      "Uses liquid oxygen (LOX) and refined kerosene as propellants."
    ],
    examFacts: ["Engine Type: Semi-Cryogenic (LOX/Kerosene)", "Agency: ISRO", "Test Facility: Mahendragiri"],
    quickRemember: "ISRO completed the first major hot-firing test of its semi-cryogenic engine at Mahendragiri.",
    audioText: "ISRO successfully completed the first major qualification test of its high-thrust semi-cryogenic engine at Mahendragiri.",
    source: "ISRO", importantFor: ["SSC CGL", "UPSC", "CDS"]
  },
  {
    id: "REC-JUL-082", date: "2026-07-27", month: "Jul 2026", category: "Environment",
    title: "India Declares Three New Ramsar Wetlands",
    summary: "India added three new sites to the Ramsar list, taking the total count past the hundred mark.",
    whatHappened: "The Ministry of Environment, Forest and Climate Change officially designated three new wetlands of international importance under the Ramsar Convention, reinforcing India's commitment to conserving critical aquatic habitats and migratory bird flyways.",
    importantPoints: [
      "Three new wetlands added to the Ramsar list.",
      "Recognized under the Ramsar Convention on Wetlands.",
      "Aims to protect critical aquatic biodiversity and migratory bird flyways."
    ],
    examFacts: ["Designation: Ramsar Wetlands of International Importance", "Ministry: MoEFCC"],
    quickRemember: "India added three new wetlands to the Ramsar Convention list.",
    audioText: "The Environment Ministry officially designated three new wetlands as Ramsar sites of international importance.",
    source: "MoEFCC", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-JUL-083", date: "2026-07-26", month: "Jul 2026", category: "Economy & Trade",
    title: "India and New Zealand Launch Free Trade Agreement Talks",
    summary: "India and New Zealand formally launched negotiations for a bilateral Comprehensive Economic Cooperation Agreement.",
    whatHappened: "Delegations from India and New Zealand met in Wellington to formally launch comprehensive negotiations for a bilateral Free Trade Agreement, focusing on dairy-tech collaboration, wine tariffs, and IT service mobilities.",
    importantPoints: [
      "Formal launch of FTA negotiations between India and New Zealand.",
      "Covers dairy-tech collaboration, IT services, and tariff reductions.",
      "Meetings held in Wellington."
    ],
    examFacts: ["Partner Nation: New Zealand", "Agreement Type: Free Trade Agreement (FTA)"],
    quickRemember: "India and New Zealand launched formal negotiations for a bilateral Free Trade Agreement.",
    audioText: "India and New Zealand formally launched negotiations for a bilateral Free Trade Agreement in Wellington.",
    source: "Ministry of Commerce", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-JUL-084", date: "2026-07-25", month: "Jul 2026", category: "Defence",
    title: "DRDO Test Fires Indigenous Man-Portable Anti-Tank Missile",
    summary: "DRDO successfully flight-tested the Man-Portable Anti-Tank Guided Missile (MPATGM) in high-altitude terrain.",
    whatHappened: "The Defence Research and Development Organisation (DRDO) successfully conducted user-validation flight trials of the indigenous Man-Portable Anti-Tank Guided Missile (MPATGM) system under extreme high-altitude winter conditions.",
    importantPoints: [
      "User-validation trials of the indigenous MPATGM.",
      "Tested under extreme high-altitude conditions.",
      "Developed by DRDO for infantry combat units."
    ],
    examFacts: ["Weapon: MPATGM (Man-Portable Anti-Tank Guided Missile)", "Agency: DRDO"],
    quickRemember: "DRDO successfully flight-tested the indigenous MPATGM anti-tank missile in high-altitude terrain.",
    audioText: "DRDO successfully conducted user-validation flight trials of the indigenous Man-Portable Anti-Tank Guided Missile system.",
    source: "Ministry of Defence", importantFor: ["CDS", "SSC CGL"]
  },
  {
    id: "REC-JUL-085", date: "2026-07-24", month: "Jul 2026", category: "National Affairs",
    title: "National Judicial Data Grid Reaches 250 Million Cases",
    summary: "The National Judicial Data Grid (NJDG) crossed the landmark tracking of 250 million legal cases across courts.",
    whatHappened: "The National Judicial Data Grid (NJDG) portal officially surpassed tracking 250 million cumulative legal cases across Supreme Court, High Court, and district court computer portals, establishing a global benchmark for judicial transparency.",
    importantPoints: [
      "NJDG crossed 250 million tracked legal cases.",
      "Covers Supreme Court, High Courts, and district courts.",
      "Serves as an open database for judicial transparency and pendency tracking."
    ],
    examFacts: ["Portal: National Judicial Data Grid (NJDG)", "Milestone: 250 Million Cases Tracked"],
    quickRemember: "The National Judicial Data Grid (NJDG) crossed 250 million tracked legal cases.",
    audioText: "The National Judicial Data Grid surpassed tracking two hundred and fifty million cumulative legal cases across courts.",
    source: "Ministry of Law and Justice", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-JUL-086", date: "2026-07-23", month: "Jul 2026", category: "Government Schemes",
    title: "Pradhan Mantri Kaushal Vikas Yojana 4.0 Expanded",
    summary: "The Ministry of Skill Development expanded PMKVY 4.0 to integrate futuristic AI and drone technology modules.",
    whatHappened: "The Ministry of Skill Development and Entrepreneurship expanded the scope of Pradhan Mantri Kaushal Vikas Yojana 4.0 (PMKVY), integrating specialized training curriculums for artificial intelligence, electric vehicle maintenance, and drone pilot operations.",
    importantPoints: [
      "Expansion of PMKVY 4.0 skill training initiative.",
      "Integrates modules for AI, EVs, and drone pilot operations.",
      "Managed by the Ministry of Skill Development."
    ],
    examFacts: ["Scheme: PMKVY 4.0", "New Modules: AI, EVs, Drones"],
    quickRemember: "PMKVY 4.0 was expanded to include training modules for artificial intelligence and drone technology.",
    audioText: "The Skill Development Ministry expanded PMKVY 4.0 to integrate training modules for artificial intelligence and drones.",
    source: "Ministry of Skill Development", importantFor: ["SSC CGL", "SSC CHSL"]
  },
  {
    id: "REC-JUL-087", date: "2026-07-22", month: "Jul 2026", category: "International Affairs",
    title: "India and Singapore Hold Cyber Security Dialogue",
    summary: "India and Singapore convened their annual bilateral Cyber Security Dialogue in Singapore city.",
    whatHappened: "Delegations from India and Singapore held their annual bilateral Cyber Security Dialogue in Singapore, focusing on critical information infrastructure protection, ransomware defense information sharing, and joint cross-border counter-scam operations.",
    importantPoints: [
      "Annual bilateral Cyber Security Dialogue between India and Singapore.",
      "Held in Singapore.",
      "Focuses on critical infrastructure protection and counter-scam operations."
    ],
    examFacts: ["Event: India-Singapore Cyber Security Dialogue", "Location: Singapore"],
    quickRemember: "India and Singapore held their bilateral Cyber Security Dialogue focusing on ransomware defense.",
    audioText: "India and Singapore held their annual bilateral Cyber Security Dialogue, focusing on critical infrastructure protection.",
    source: "National Security Council Secretariat", importantFor: ["UPSC", "CDS", "SSC CGL"]
  },
  {
    id: "REC-JUL-088", date: "2026-07-21", month: "Jul 2026", category: "Economy & Infrastructure",
    title: "India's First Automated Multi-Modal Logistics Park Opened",
    summary: "The government inaugurated India's first fully automated Multi-Modal Logistics Park (MFLP) in Nagpur.",
    whatHappened: "The Ministry of Road Transport and Highways inaugurated India's first fully automated Multi-Modal Logistics Park (MFLP) in Nagpur, Maharashtra. The park features high-speed rail sidings, container freight stations, and robotic warehouse sorting bays.",
    importantPoints: [
      "India's first fully automated Multi-Modal Logistics Park (MFLP).",
      "Located in Nagpur, Maharashtra.",
      "Features rail sidings and robotic warehouse sorting bays."
    ],
    examFacts: ["Facility: Automated MFLP", "Location: Nagpur, Maharashtra"],
    quickRemember: "India's first fully automated Multi-Modal Logistics Park was inaugurated in Nagpur.",
    audioText: "The government inaugurated India's first fully automated Multi-Modal Logistics Park in Nagpur, Maharashtra.",
    source: "MoRTH", importantFor: ["SSC CGL", "Bank PO"]
  },
  {
    id: "REC-JUL-089", date: "2026-07-20", month: "Jul 2026", category: "Science & Technology",
    title: "IIT Guwahati Develops Low-Cost Water Filtration Membrane",
    summary: "Researchers at IIT Guwahati engineered a sustainable water purification membrane using scales of local fish.",
    whatHappened: "Scientists at IIT Guwahati successfully developed an eco-friendly, ultra-low-cost water filtration membrane utilizing biopolymers extracted from fish scales. The membrane efficiently removes heavy metal ions and microplastics from contaminated water sources.",
    importantPoints: [
      "Water filtration membrane developed using fish scale biopolymers.",
      "Engineered by IIT Guwahati.",
      "Removes heavy metal ions and microplastics effectively."
    ],
    examFacts: ["Innovation: Fish-Scale Water Filtration Membrane", "Institute: IIT Guwahati"],
    quickRemember: "IIT Guwahati developed an eco-friendly water filtration membrane using fish scale biopolymers.",
    audioText: "Researchers at IIT Guwahati developed a low-cost water purification membrane using biopolymers extracted from fish scales.",
    source: "IIT Guwahati", importantFor: ["SSC CGL", "State PCS"]
  },
  {
    id: "REC-JUL-090", date: "2026-07-19", month: "Jul 2026", category: "National Affairs",
    title: "National Portal for Transgender Persons Updated",
    summary: "The Ministry of Social Justice upgraded the National Portal for Transgender Persons with DigiLocker integration.",
    whatHappened: "The Ministry of Social Justice and Empowerment launched an upgraded version of the National Portal for Transgender Persons, featuring direct DigiLocker verification to streamline the issuance of transgender identity cards and certificates within 15 days.",
    importantPoints: [
      "Upgraded National Portal for Transgender Persons.",
      "Integrated with DigiLocker for fast-tracked identity card issuance.",
      "Managed by the Ministry of Social Justice."
    ],
    examFacts: ["Portal: National Portal for Transgender Persons", "New Feature: DigiLocker Integration"],
    quickRemember: "The National Portal for Transgender Persons was upgraded with DigiLocker integration for fast ID issuance.",
    audioText: "The Social Justice Ministry upgraded the National Portal for Transgender Persons with DigiLocker verification.",
    source: "Ministry of Social Justice", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-JUL-091", date: "2026-07-18", month: "Jul 2026", category: "Environment",
    title: "India's First Snow Leopard Census Report Released",
    summary: "The first comprehensive scientific snow leopard population assessment reported 718 individuals in the Himalayas.",
    whatHappened: "The Ministry of Environment released the final comprehensive report of India's first Snow Leopard Population Assessment, recording a baseline count of 718 snow leopards inhabiting high-altitude terrains across Ladakh, Himachal Pradesh, Uttarakhand, and Arunachal Pradesh.",
    importantPoints: [
      "First comprehensive Snow Leopard Population Assessment in India.",
      "Recorded a total count of 718 individual snow leopards.",
      "Distributed across Ladakh, Himachal Pradesh, Uttarakhand, and Arunachal Pradesh."
    ],
    examFacts: ["Species: Snow Leopard", "Total Population Count: 718", "Reporting Agency: WII / MoEFCC"],
    quickRemember: "India's first snow leopard census reported 718 individuals across Himalayan habitats.",
    audioText: "The Environment Ministry released India's first snow leopard census report, recording 718 individuals in the Himalayas.",
    source: "MoEFCC", importantFor: ["SSC CGL", "UPSC", "State PCS"]
  },
  {
    id: "REC-JUL-092", date: "2026-07-16", month: "Jul 2026", category: "Economy",
    title: "SEBI Introduces T+1 Settlement for Corporate Bonds",
    summary: "SEBI mandated a compulsory T+1 trade settlement cycle for secondary market corporate bond transactions.",
    whatHappened: "The Securities and Exchange Board of India (SEBI) transitioned all secondary market corporate bond trades to a mandatory T+1 (Trade plus one day) settlement cycle, reducing default exposures and increasing market liquidity.",
    importantPoints: [
      "Mandatory T+1 settlement cycle for secondary corporate bonds.",
      "Regulated by SEBI.",
      "Accelerates transaction clearing and reduces settlement risks."
    ],
    examFacts: ["Regulator: SEBI", "Asset Class: Corporate Bonds", "Settlement Cycle: T+1"],
    quickRemember: "SEBI made the T+1 settlement cycle mandatory for secondary market corporate bonds.",
    audioText: "SEBI introduced a mandatory T+1 trade settlement cycle for all secondary market corporate bond transactions.",
    source: "SEBI", importantFor: ["Bank PO", "SSC CGL"]
  },
  {
    id: "REC-JUL-093", date: "2026-07-15", month: "Jul 2026", category: "Science & Technology",
    title: "India Launches Quantum Mission Hub in Pune",
    summary: "The Department of Science and Technology established a major National Quantum Mission technology hub in Pune.",
    whatHappened: "As part of the National Quantum Mission (NQM), the Department of Science and Technology established a specialized technology hub at IISER Pune to advance research in secure quantum communications and optical atomic clocks.",
    importantPoints: [
      "National Quantum Mission (NQM) technology hub established in Pune.",
      "Hosted at IISER Pune.",
      "Focuses on quantum communications and atomic clocks."
    ],
    examFacts: ["Mission: National Quantum Mission (NQM)", "Hub Location: IISER Pune", "Agency: DST"],
    quickRemember: "A National Quantum Mission technology hub was established at IISER Pune.",
    audioText: "The Department of Science and Technology established a National Quantum Mission hub at IISER Pune.",
    source: "Ministry of Science & Technology", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-JUL-094", date: "2026-07-14", month: "Jul 2026", category: "International Affairs",
    title: "India and Oman Sign Comprehensive Economic Partnership Agreement",
    summary: "India and Oman finalized a comprehensive free trade and economic partnership agreement in Muscat.",
    whatHappened: "India and the Sultanate of Oman formally signed a Comprehensive Economic Partnership Agreement (CEPA) during high-level ministerial meetings in Muscat, securing zero-duty access for over 98% of tariff lines.",
    importantPoints: [
      "India and Oman signed a Comprehensive Economic Partnership Agreement (CEPA).",
      "Secures zero-duty tariff access for over 98% of trade lines.",
      "Signed in Muscat, Oman."
    ],
    examFacts: ["Agreement: India-Oman CEPA", "Location: Muscat, Oman"],
    quickRemember: "India and Oman signed a Comprehensive Economic Partnership Agreement (CEPA) in Muscat.",
    audioText: "India and Oman signed a Comprehensive Economic Partnership Agreement in Muscat, securing zero-duty access for trade lines.",
    source: "MEA", importantFor: ["UPSC", "SSC CGL", "CDS"]
  },
  {
    id: "REC-JUL-095", date: "2026-07-13", month: "Jul 2026", category: "Government Schemes",
    title: "PM-ABHIM Health Infrastructure Mission Milestone",
    summary: "The Ministry of Health reported that over 3,000 critical care blocks were completed under PM-ABHIM.",
    whatHappened: "The Ministry of Health and Family Welfare announced a major infrastructural milestone under the Pradhan Mantri Ayushman Bharat Health Infrastructure Mission (PM-ABHIM), reporting the completion of over 3,000 critical care blocks and integrated public health laboratories.",
    importantPoints: [
      "Over 3,000 critical care blocks completed under PM-ABHIM.",
      "Strengthens public health diagnostic networks across districts.",
      "Managed by the Ministry of Health."
    ],
    examFacts: ["Mission: PM-ABHIM", "Milestone: >3,000 Critical Care Blocks Completed"],
    quickRemember: "Over 3,000 critical care blocks were completed across districts under the PM-ABHIM scheme.",
    audioText: "The Health Ministry announced that over three thousand critical care blocks were completed under the PM-ABHIM health infrastructure mission.",
    source: "MoHFW", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-JUL-096", date: "2026-07-12", month: "Jul 2026", category: "Defence",
    title: "India-UK Exercise Ajeya Warrior 2026",
    summary: "The 8th edition of the India-UK joint military exercise 'Ajeya Warrior' commenced in Salisbury Plain, UK.",
    whatHappened: "The 8th edition of the India-UK joint military exercise 'Ajeya Warrior' commenced at Salisbury Plain in the United Kingdom. The fortnight-long drill focuses on counter-insurgency operations in semi-urban and mountainous terrain.",
    importantPoints: [
      "8th edition of exercise Ajeya Warrior.",
      "Bilateral military drill between India and the United Kingdom.",
      "Held at Salisbury Plain, UK."
    ],
    examFacts: ["Exercise: Ajeya Warrior 2026", "Partner: United Kingdom", "Location: Salisbury Plain, UK"],
    quickRemember: "The 8th India-UK military exercise Ajeya Warrior began at Salisbury Plain in the UK.",
    audioText: "The 8th edition of the India-UK joint military exercise Ajeya Warrior commenced at Salisbury Plain in the United Kingdom.",
    source: "Indian Army", importantFor: ["CDS", "SSC CGL"]
  },
  {
    id: "REC-JUL-097", date: "2026-07-10", month: "Jul 2026", category: "Science & Technology",
    title: "IIT Madras Launches Open-Source 32-Bit Microprocessor",
    summary: "IIT Madras released a new commercial-grade open-source 32-bit RISC-V microprocessor named 'Vajra-32'.",
    whatHappened: "Researchers at IIT Madras unveiled 'Vajra-32', a commercial-grade open-source 32-bit RISC-V processor core designed specifically for low-power Internet of Things (IoT) wearables and secure smart-card microcontrollers.",
    importantPoints: [
      "Open-source 32-bit RISC-V microprocessor named 'Vajra-32'.",
      "Developed by IIT Madras.",
      "Optimized for low-power IoT wearables and smart-card microcontrollers."
    ],
    examFacts: ["Processor: Vajra-32 (RISC-V)", "Institute: IIT Madras"],
    quickRemember: "IIT Madras launched an open-source 32-bit microprocessor named 'Vajra-32' for IoT devices.",
    audioText: "Researchers at IIT Madras launched Vajra-32, an open-source 32-bit RISC-V microprocessor for low-power IoT devices.",
    source: "IIT Madras", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-JUL-098", date: "2026-07-08", month: "Jul 2026", category: "National Affairs",
    title: "National Cyber Security Coordinator Appointed",
    summary: "Lt Gen (Retd) Vinod Sharma was appointed as India's new National Cyber Security Coordinator.",
    whatHappened: "The Appointments Committee of the Cabinet named Lieutenant General (Retd) Vinod Sharma as India's new National Cyber Security Coordinator (NCSC) at the National Security Council Secretariat, tasked with overseeing national cyber defense strategies.",
    importantPoints: [
      "Lt Gen (Retd) Vinod Sharma appointed as National Cyber Security Coordinator.",
      "Operates under the National Security Council Secretariat (NSCS).",
      "Focuses on national cyber defense preparedness and critical infrastructure."
    ],
    examFacts: ["Appointee: Lt Gen (Retd) Vinod Sharma", "Position: National Cyber Security Coordinator (NCSC)"],
    quickRemember: "Lt Gen (Retd) Vinod Sharma was appointed as India's National Cyber Security Coordinator.",
    audioText: "Lieutenant General Vinod Sharma was appointed as India's new National Cyber Security Coordinator.",
    source: "Cabinet Secretariat", importantFor: ["CDS", "UPSC", "SSC CGL"]
  },
  {
    id: "REC-JUL-099", date: "2026-07-06", month: "Jul 2026", category: "Economy",
    title: "India Joins OECD Inclusive Framework Global Tax Deal",
    summary: "India officially ratified administrative guidelines for the OECD/G20 Two-Pillar Global Minimum Tax framework.",
    whatHappened: "The Ministry of Finance formally notified administrative rules implementing the OECD/G20 Inclusive Framework 'Two-Pillar' global tax solution, ensuring multinational enterprises operating in India are subject to a minimum 15% effective tax rate.",
    importantPoints: [
      "India aligned with OECD/G20 Two-Pillar global tax framework.",
      "Ensures a minimum 15% effective tax rate for multinational corporations.",
      "Notified by the Ministry of Finance."
    ],
    examFacts: ["Framework: OECD/G20 Two-Pillar Global Tax", "Minimum Tax Rate: 15%"],
    quickRemember: "India implemented the OECD/G20 Two-Pillar global minimum tax framework of 15% for multinationals.",
    audioText: "The Finance Ministry notified administrative rules implementing the OECD Two-Pillar global tax framework with a minimum fifteen percent tax.",
    source: "Ministry of Finance", importantFor: ["UPSC", "SSC CGL"]
  },
  {
    id: "REC-JUL-100", date: "2026-07-04", month: "Jul 2026", category: "Sports",
    title: "India Wins ICC Women's T20 Asia Cup 2026",
    summary: "The Indian Women's Cricket team defeated Pakistan to win the ICC Women's T20 Asia Cup 2026.",
    whatHappened: "The Indian Women's Cricket team clinched the ICC Women's T20 Asia Cup 2026 title by defeating arch-rivals Pakistan by 36 runs in a high-voltage final held in Colombo, Sri Lanka, reinforcing their regional dominance.",
    importantPoints: [
      "India won the Women's T20 Asia Cup 2026.",
      "Defeated Pakistan by 36 runs in the final.",
      "Tournament hosted in Colombo, Sri Lanka."
    ],
    examFacts: ["Winner: India Women's Cricket Team", "Runner-up: Pakistan", "Host City: Colombo, Sri Lanka"],
    quickRemember: "The Indian Women's Cricket team defeated Pakistan to win the T20 Asia Cup 2026 in Colombo.",
    audioText: "The Indian Women's Cricket team won the T20 Asia Cup by defeating Pakistan in the final in Colombo.",
    source: "BCCI / ACC", importantFor: ["SSC CGL", "SSC CHSL"]
  }
];

const julRecallQuestionsBatch5 = [
  {
    id: "REC-Q-JUL-081", articleId: "REC-JUL-081", category: "Science & Technology", topic: "Space Propulsion",
    question: "ISRO successfully completed the first integrated hot-firing qualification test of its high-thrust semi-cryogenic engine at which facility?",
    options: ["Satish Dhawan Space Centre, Sriharikota", "ISRO Propulsion Complex, Mahendragiri", "Liquid Propulsion Systems Centre, Bengaluru", "Vikram Sarabhai Space Centre, Thiruvananthapuram"],
    answer: 1, explanation: "The qualification test for the semi-cryogenic engine using liquid oxygen and kerosene was conducted at IPRC, Mahendragiri, Tamil Nadu."
  },
  {
    id: "REC-Q-JUL-082", articleId: "REC-JUL-082", category: "Environment", topic: "Ramsar Wetlands",
    question: "The Ministry of Environment officially designated three new wetlands under which international convention to protect aquatic habitats?",
    options: ["Bonn Convention", "Ramsar Convention", "CITES Convention", "Vienna Convention"],
    answer: 1, explanation: "The new aquatic habitats were designated as wetlands of international importance under the Ramsar Convention."
  },
  {
    id: "REC-Q-JUL-083", articleId: "REC-JUL-083", category: "Economy & Trade", topic: "Free Trade Agreements",
    question: "Delegations from India and New Zealand met in Wellington to formally launch negotiations for a bilateral:",
    options: ["Comprehensive Economic Cooperation Agreement (FTA)", "Digital Trade Partnership", "Defense Logistics Accord", "Agricultural Exchange Treaty"],
    answer: 0, explanation: "India and New Zealand formally launched negotiations for a bilateral Free Trade Agreement during meetings in Wellington."
  },
  {
    id: "REC-Q-JUL-084", articleId: "REC-JUL-084", category: "Defence", topic: "Missile Development",
    question: "DRDO conducted user-validation flight trials of the indigenous Man-Portable Anti-Tank Guided Missile (MPATGM) under what specific conditions?",
    options: ["Extreme high-altitude winter conditions", "Night desert firing ranges", "Offshore maritime platforms", "Tropical jungle terrain"],
    answer: 0, explanation: "The MPATGM system was successfully tested under extreme high-altitude winter conditions for infantry combat units."
  },
  {
    id: "REC-Q-JUL-085", articleId: "REC-JUL-085", category: "National Affairs", topic: "Judicial Transparency",
    question: "The National Judicial Data Grid (NJDG) portal surpassed tracking how many cumulative legal cases across Indian courts?",
    options: ["50 Million Cases", "100 Million Cases", "150 Million Cases", "250 Million Cases"],
    answer: 3, explanation: "The NJDG portal surpassed tracking 250 million cumulative legal cases, creating a global benchmark for judicial transparency."
  },
  {
    id: "REC-Q-JUL-086", articleId: "REC-JUL-086", category: "Government Schemes", topic: "Skill Development",
    question: "The Ministry of Skill Development expanded PMKVY 4.0 to integrate specialized training modules for which emerging technologies?",
    options: ["Quantum computing and biotechnology", "Artificial intelligence, electric vehicles, and drones", "Nanomaterials and robotics engineering", "Semiconductor wafer fabrication"],
    answer: 1, explanation: "PMKVY 4.0 was expanded to incorporate specialized training curricula for AI, EV maintenance, and drone pilot operations."
  },
  {
    id: "REC-Q-JUL-087", articleId: "REC-JUL-087", category: "International Affairs", topic: "Cyber Security",
    question: "India and Singapore held their annual bilateral Cyber Security Dialogue in which city, focusing on counter-scam operations?",
    options: ["New Delhi", "Bengaluru", "Singapore", "Mumbai"],
    answer: 2, explanation: "Delegations met in Singapore for their annual bilateral Cyber Security Dialogue to share ransomware defense information."
  },
  {
    id: "REC-Q-JUL-088", articleId: "REC-JUL-088", category: "Economy & Infrastructure", topic: "Logistics Parks",
    question: "India's first fully automated Multi-Modal Logistics Park (MFLP) was inaugurated in which city of Maharashtra?",
    options: ["Mumbai", "Pune", "Nagpur", "Nashik"],
    answer: 2, explanation: "The Ministry of Road Transport inaugurated India's first fully automated Multi-Modal Logistics Park in Nagpur, Maharashtra."
  },
  {
    id: "REC-Q-JUL-089", articleId: "REC-JUL-089", category: "Science & Technology", topic: "Eco-Innovations",
    question: "Researchers at IIT Guwahati developed a sustainable water filtration membrane utilizing biopolymers extracted from what unusual source?",
    options: ["Rice husk waste", "Scales of local fish", "Coconut coir fibers", "Banana pseudostems"],
    answer: 1, explanation: "IIT Guwahati scientists developed an ultra-low-cost water filtration membrane utilizing biopolymers extracted from fish scales."
  },
  {
    id: "REC-Q-JUL-090", articleId: "REC-JUL-090", category: "National Affairs", topic: "Social Welfare Portals",
    question: "The Ministry of Social Justice upgraded the National Portal for Transgender Persons by integrating which digital verification system?",
    options: ["DigiLocker", "Aadhaar Face Auth", "National ID Vault", "Unified Citizen Pass"],
    answer: 0, explanation: "The portal was integrated with DigiLocker to fast-track the issuance of transgender identity cards within 15 days."
  },
  {
    id: "REC-Q-JUL-091", articleId: "REC-JUL-091", category: "Environment", topic: "Wildlife Censuses",
    question: "According to India's first comprehensive Snow Leopard Population Assessment report released by the Environment Ministry, what is the total count of snow leopards?",
    options: ["412 Individuals", "535 Individuals", "718 Individuals", "942 Individuals"],
    answer: 2, explanation: "The baseline count recorded 718 individual snow leopards inhabiting high-altitude Himalayan terrains across four states/UTs."
  },
  {
    id: "REC-Q-JUL-092", articleId: "REC-JUL-092", category: "Economy", topic: "Bond Market Regulations",
    question: "SEBI mandated that all secondary market corporate bond transactions transition to which trade settlement cycle?",
    options: ["T+0 Settlement", "T+1 Settlement", "Instant Real-Time Settlement", "T+2 Settlement"],
    answer: 1, explanation: "SEBI transitioned secondary corporate bond trades to a mandatory T+1 (Trade plus one day) settlement cycle."
  },
  {
    id: "REC-Q-JUL-093", articleId: "REC-JUL-093", category: "Science & Technology", topic: "Quantum Missions",
    question: "As part of the National Quantum Mission (NQM), a specialized technology hub was established at which institution to advance secure quantum communications?",
    options: ["IISc Bengaluru", "IISER Pune", "IIT Madras", "TIFR Mumbai"],
    answer: 1, explanation: "The Department of Science and Technology established a major National Quantum Mission technology hub at IISER Pune."
  },
  {
    id: "REC-Q-JUL-094", articleId: "REC-JUL-094", category: "International Affairs", topic: "Trade Accords",
    question: "India and the Sultanate of Oman signed a Comprehensive Economic Partnership Agreement (CEPA) during ministerial meetings in which city?",
    options: ["Dubai", "Abu Dhabi", "Muscat", "Salalah"],
    answer: 2, explanation: "India and Oman signed their CEPA agreement in Muscat, securing zero-duty tariff access for over 98% of trade lines."
  },
  {
    id: "REC-Q-JUL-095", articleId: "REC-JUL-095", category: "Government Schemes", topic: "Health Infrastructure",
    question: "Under the Pradhan Mantri Ayushman Bharat Health Infrastructure Mission (PM-ABHIM), how many critical care blocks have been completed across districts?",
    options: ["Over 1,000 blocks", "Over 2,000 blocks", "Over 3,000 blocks", "Over 5,000 blocks"],
    answer: 2, explanation: "The Health Ministry reported the completion of over 3,000 critical care blocks and public health laboratories under PM-ABHIM."
  },
  {
    id: "REC-Q-JUL-096", articleId: "REC-JUL-096", category: "Defence", topic: "Bilateral Exercises",
    question: "The 8th edition of the India-UK joint military exercise 'Ajeya Warrior' commenced at which location in the United Kingdom?",
    options: ["Salisbury Plain", "Aldershot Garrison", "Catterick Training Area", "Colchester Barracks"],
    answer: 0, explanation: "The 8th edition of exercise Ajeya Warrior between India and the UK commenced at Salisbury Plain in the United Kingdom."
  },
  {
    id: "REC-Q-JUL-097", articleId: "REC-JUL-097", category: "Science & Technology", topic: "Indigenous Microprocessors",
    question: "What is the name of the commercial-grade open-source 32-bit RISC-V microprocessor core released by IIT Madras for IoT devices?",
    options: ["Shakti-32", "Vajra-32", "Dhruv-RISC", "Anveshak-V"],
    answer: 1, explanation: "Researchers at IIT Madras unveiled 'Vajra-32', an open-source 32-bit RISC-V microprocessor for low-power IoT wearables."
  },
  {
    id: "REC-Q-JUL-098", articleId: "REC-JUL-098", category: "National Affairs", topic: "Cyber Security Appointments",
    question: "Who was appointed as India's new National Cyber Security Coordinator at the National Security Council Secretariat?",
    options: ["Lt Gen (Retd) M. Unnan Nair", "Lt Gen (Retd) Vinod Sharma", "Vice Admiral (Retd) M.S. Pawar", "Air Marshal (Retd) B.R. Krishna"],
    answer: 1, explanation: "Lt Gen (Retd) Vinod Sharma was named India's new National Cyber Security Coordinator to oversee cyber defense strategies."
  },
  {
    id: "REC-Q-JUL-099", articleId: "REC-JUL-099", category: "Economy", topic: "Global Taxation",
    question: "The Ministry of Finance notified rules implementing the OECD/G20 Two-Pillar global tax framework, ensuring a minimum effective tax rate of what percentage for multinationals?",
    options: ["10%", "12.5%", "15%", "18%"],
    answer: 2, explanation: "The OECD/G20 Two-Pillar global tax solution ensures that multinational enterprises operating in India face a minimum 15% effective tax rate."
  },
  {
    id: "REC-Q-JUL-100", articleId: "REC-JUL-100", category: "Sports", topic: "Cricket Tournaments",
    question: "The Indian Women's Cricket team clinched the ICC Women's T20 Asia Cup title by defeating which country in the final held in Colombo?",
    options: ["Bangladesh", "Sri Lanka", "Pakistan", "Thailand"],
    answer: 2, explanation: "India defeated arch-rivals Pakistan by 36 runs in the final in Colombo, Sri Lanka, to win the Women's T20 Asia Cup."
  }
];

// 👉 PUSH DATA INTO GLOBAL ARRAYS
if (typeof hiddenRecallArticles !== 'undefined') {
  hiddenRecallArticles.push(...julRecallArticlesBatch5);
}
if (typeof recallQuestionPool !== 'undefined') {
  recallQuestionPool.push(...julRecallQuestionsBatch5);
}

/* ==========================================================================
   END OF JULY BATCH 5
   ========================================================================== */
/* ==========================================================================
   JUNE 2026 - BATCH 1 (ITEMS 001 TO 020)
   ========================================================================== */

const junRecallArticlesBatch1 = [
  {
    id: "REC-JUN-001", date: "2026-06-01", month: "Jun 2026", category: "Environment",
    title: "Mother Dairy Launches Naturally Degradable Milk Pouch",
    summary: "Mother Dairy rolled out India's first naturally degradable milk pouch in Delhi-NCR on World Environment Day.",
    whatHappened: "Mother Dairy introduced India's first naturally degradable milk pouch, starting its rollout for its cow milk variant in the Delhi-NCR region to reduce plastic pollution and promote eco-friendly packaging.",
    importantPoints: [
      "India's first naturally degradable milk pouch.",
      "Rolled out in Delhi-NCR for cow milk.",
      "Aims to combat single-use plastic waste."
    ],
    examFacts: ["Product: Degradable milk pouch", "Company: Mother Dairy", "Location: Delhi-NCR"],
    quickRemember: "Mother Dairy launched India's first naturally degradable milk pouch in Delhi-NCR.",
    audioText: "Mother Dairy launched India's first naturally degradable milk pouch starting in the Delhi-NCR region.",
    source: "Mother Dairy", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-JUN-002", date: "2026-06-02", month: "Jun 2026", category: "Environment & Wildlife",
    title: "New Lizard Species 'Mesalina bishnoi' Discovered in Rajasthan",
    summary: "A new lizard species, Mesalina bishnoi, was formally described from open semi-desert habitats in Bikaner, Rajasthan.",
    whatHappened: "Researchers published the formal description of *Mesalina bishnoi*, a newly discovered lizard species from Rajasthan, marking the first confirmed record of the genus *Mesalina* in India, found near Gajner in the Bikaner district.",
    importantPoints: [
      "New lizard species named *Mesalina bishnoi*.",
      "First confirmed record of the genus *Mesalina* in India.",
      "Discovered in semi-desert terrain near Gajner, Bikaner district."
    ],
    examFacts: ["Species: Mesalina bishnoi", "Location: Bikaner, Rajasthan"],
    quickRemember: "Mesalina bishnoi, a new lizard species, was discovered in Bikaner, Rajasthan.",
    audioText: "A new lizard species named Mesalina bishnoi was discovered and described from the semi-desert habitat of Bikaner.",
    source: "Zoological Survey", importantFor: ["SSC CGL", "State PCS"]
  },
  {
    id: "REC-JUN-003", date: "2026-06-03", month: "Jun 2026", category: "Economy & Infrastructure",
    title: "Cabinet Approves ₹10,000 Crore ATF Price Stabilization Support",
    summary: "The Union Cabinet approved up to ₹10,000 crore in interest-free advances to stabilize Aviation Turbine Fuel prices.",
    whatHappened: "The Union Cabinet approved a one-time budgetary support scheme providing up to ₹10,000 crore as interest-free advances to Oil Marketing Companies to stabilize Aviation Turbine Fuel (ATF) prices for scheduled Indian airlines.",
    importantPoints: [
      "Budgetary support of up to ₹10,000 crore.",
      "Provided as interest-free advances through the Ministry of Petroleum and Natural Gas.",
      "Aims to stabilize ATF prices for domestic and international flights."
    ],
    examFacts: ["Outlay: ₹10,000 Crore", "Sector: Aviation / Oil Marketing"],
    quickRemember: "The Cabinet approved ₹10,000 crore to stabilize Aviation Turbine Fuel prices.",
    audioText: "The Union Cabinet approved up to ten thousand crore rupees in support to stabilize Aviation Turbine Fuel prices.",
    source: "Ministry of Petroleum", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-JUN-004", date: "2026-06-03", month: "Jun 2026", category: "Economy & Energy",
    title: "Cabinet Approves Telangana National Highway Widening Projects",
    summary: "Two major national highway widening projects spanning 190.76 km were approved in Telangana at ₹7,597 crore.",
    whatHappened: "The Union Cabinet approved two National Highway widening projects in Telangana covering 190.76 km with a combined capital cost of ₹7,597.16 crore, including the Armoor-Jagtial-Mancherial (NH-63) and Jagtial-Karimnagar (NH-563) corridors.",
    importantPoints: [
      "Covers 190.76 km of highway corridors in Telangana.",
      "Combined capital cost of ₹7,597.16 crore.",
      "Includes widening sections of NH-63 and NH-563 to 4-lane standards."
    ],
    examFacts: ["State: Telangana", "Cost: ₹7,597.16 Crore", "Highways: NH-63 and NH-563"],
    quickRemember: "The Cabinet approved ₹7,597 crore for 4-lane highway widening projects in Telangana.",
    audioText: "The Union Cabinet approved two major national highway widening projects covering over 190 kilometers in Telangana.",
    source: "MoRTH", importantFor: ["SSC CGL", "RRB NTPC"]
  },
  {
    id: "REC-JUN-005", date: "2026-06-05", month: "Jun 2026", category: "Environment",
    title: "World Environment Day 2026 Observed Globally",
    summary: "World Environment Day was observed on June 5, focusing heavily on fighting plastic pollution and climate action.",
    whatHappened: "World Environment Day was observed globally on June 5. Organized under the auspices of the United Nations Environment Programme (UNEP), the event rallied international action to protect forests, reduce pollution, and conserve fragile ecosystems.",
    importantPoints: [
      "Observed annually on June 5.",
      "Led globally by the United Nations Environment Programme (UNEP).",
      "Promotes global action against climate change and pollution."
    ],
    examFacts: ["Date: June 5", "Organizer: UNEP"],
    quickRemember: "World Environment Day is observed globally on June 5.",
    audioText: "World Environment Day was observed on June 5 to promote environmental conservation and climate action.",
    source: "UNEP", importantFor: ["SSC CGL", "UPSC", "SSC CHSL"]
  },
  {
    id: "REC-JUN-006", date: "2026-06-05", month: "Jun 2026", category: "Economy & Environment",
    title: "Cabinet Approves ₹9,585 Cr Scrappage Policy for Delhi-NCR",
    summary: "A ₹9,585 crore scheme was approved to replace old polluting trucks and buses in Delhi-NCR with cleaner vehicles.",
    whatHappened: "The Union Cabinet approved a ₹9,585 crore scheme aimed at replacing old, polluting commercial vehicles—specifically BS-IV and older trucks and buses—in the Delhi-NCR region with cleaner BS-VI compliant or electric vehicles.",
    importantPoints: [
      "Approved outlay of ₹9,585 crore.",
      "Targets replacement of old polluting commercial trucks and buses.",
      "Focused on the Delhi-NCR airshed to cut emissions."
    ],
    examFacts: ["Outlay: ₹9,585 Crore", "Region: Delhi-NCR"],
    quickRemember: "The Cabinet approved a ₹9,585 crore vehicle scrappage scheme for Delhi-NCR.",
    audioText: "The Union Cabinet approved a nine thousand five hundred eighty-five crore rupee scheme to replace polluting vehicles in Delhi-NCR.",
    source: "Union Cabinet", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-JUN-007", date: "2026-06-07", month: "Jun 2026", category: "Health & Welfare",
    title: "World Food Safety Day 2026",
    summary: "World Food Safety Day was observed on June 7 to promote safe food handling and prevent foodborne illnesses.",
    whatHappened: "World Food Safety Day was observed on June 7, jointly led by the World Health Organization (WHO) and the Food and Agriculture Organization (FAO) to highlight safe food practices and reduce food poisoning risks globally.",
    importantPoints: [
      "Observed annually on June 7.",
      "Jointly promoted by WHO and FAO.",
      "Focuses on preventing foodborne diseases through safe practices."
    ],
    examFacts: ["Date: June 7", "Lead Agencies: WHO and FAO"],
    quickRemember: "World Food Safety Day is observed on June 7.",
    audioText: "World Food Safety Day was observed on June 7 to highlight the importance of safe food practices for public health.",
    source: "WHO / FAO", importantFor: ["SSC CGL", "SSC CHSL"]
  },
  {
    id: "REC-JUN-008", date: "2026-06-08", month: "Jun 2026", category: "Environment",
    title: "World Oceans Day 2026",
    summary: "World Oceans Day was observed on June 8, emphasizing marine conservation and plastic waste reduction.",
    whatHappened: "World Oceans Day was observed on June 8. Recognized by the UN General Assembly, the day highlights the critical importance of oceans and pushes for global action to stop marine plastic pollution.",
    importantPoints: [
      "Observed annually on June 8.",
      "Recognized by the UN General Assembly.",
      "Focuses on marine conservation and eliminating plastic dumping."
    ],
    examFacts: ["Date: June 8", "Focus: Marine and Ocean Conservation"],
    quickRemember: "World Oceans Day is observed on June 8 for marine conservation.",
    audioText: "World Oceans Day was observed on June 8 to raise awareness about marine conservation and reducing plastics.",
    source: "United Nations", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-JUN-009", date: "2026-06-08", month: "Jun 2026", category: "Health",
    title: "World Brain Tumor Day 2026",
    summary: "World Brain Tumor Day was marked on June 8 to spread awareness and support patients and families.",
    whatHappened: "World Brain Tumor Day was observed on June 8 globally as a tribute to brain tumor patients, raising public awareness about symptoms, diagnostic care, and clinical treatment support.",
    importantPoints: [
      "Observed annually on June 8.",
      "Spreads awareness about brain tumors and medical support.",
      "Honors patients and their families."
    ],
    examFacts: ["Date: June 8", "Focus: Brain Tumor Awareness"],
    quickRemember: "World Brain Tumor Day is marked on June 8.",
    audioText: "World Brain Tumor Day was observed on June 8 as a tribute to brain tumor patients and their families.",
    source: "Global Health Forums", importantFor: ["SSC CGL", "State PCS"]
  },
  {
    id: "REC-JUN-010", date: "2026-06-12", month: "Jun 2026", category: "Social Welfare",
    title: "World Day Against Child Labour 2026",
    summary: "World Day Against Child Labour was observed on June 12 to drive global action to eradicate child exploitation.",
    whatHappened: "World Day Against Child Labour was observed on June 12. Launched by the International Labour Organization (ILO), the day focuses attention on the global eradication of child labor and protecting child rights.",
    importantPoints: [
      "Observed annually on June 12.",
      "Launched by the International Labour Organization (ILO).",
      "Aims for the worldwide extinction of child labor."
    ],
    examFacts: ["Date: June 12", "Organizer: ILO"],
    quickRemember: "World Day Against Child Labour is observed on June 12.",
    audioText: "World Day Against Child Labour was observed on June 12 to promote the global elimination of child labor.",
    source: "ILO", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-JUN-011", date: "2026-06-14", month: "Jun 2026", category: "Health",
    title: "World Blood Donor Day 2026",
    summary: "World Blood Donor Day was observed on June 14 to thank voluntary donors and promote regular safe blood donation.",
    whatHappened: "World Blood Donor Day was observed on June 14. Led by the World Health Organization, the observance recognizes voluntary blood donors for life-saving contributions and promotes regular safe blood donations.",
    importantPoints: [
      "Observed annually on June 14.",
      "Led globally by the WHO.",
      "Appreciates voluntary blood donors and highlights supply needs."
    ],
    examFacts: ["Date: June 14", "Lead Agency: WHO"],
    quickRemember: "World Blood Donor Day is observed on June 14.",
    audioText: "World Blood Donor Day was marked on June 14 to thank voluntary donors for their life-saving contributions.",
    source: "WHO", importantFor: ["SSC CGL", "SSC CHSL"]
  },
  {
    id: "REC-JUN-012", date: "2026-06-17", month: "Jun 2026", category: "Environment",
    title: "World Day to Combat Desertification and Drought 2026",
    summary: "World Day to Combat Desertification and Drought was marked on June 17 to encourage sustainable land management.",
    whatHappened: "World Day to Combat Desertification and Drought was observed on June 17. Established by the UN General Assembly in 1994, it reminds the world that land degradation can be effectively tackled through sustainable practices.",
    importantPoints: [
      "Observed annually on June 17.",
      "Established by the UN General Assembly in 1994.",
      "Focuses on tackling drought and land degradation."
    ],
    examFacts: ["Date: June 17", "Established: 1994"],
    quickRemember: "World Day to Combat Desertification and Drought is observed on June 17.",
    audioText: "World Day to Combat Desertification and Drought was observed on June 17 to promote sustainable land use.",
    source: "United Nations", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-JUN-013", date: "2026-06-20", month: "Jun 2026", category: "Humanitarian",
    title: "World Refugee Day 2026",
    summary: "World Refugee Day was observed on June 20 to honor the resilience of displaced populations globally.",
    whatHappened: "World Refugee Day was observed on June 20. Led by the United Nations, the day honors the courage of people forced to flee conflict or persecution and highlights the urgent need for international humanitarian support.",
    importantPoints: [
      "Observed annually on June 20.",
      "Honors the courage and resilience of refugees.",
      "Highlights displacement crises and humanitarian cooperation."
    ],
    examFacts: ["Date: June 20", "Focus: Refugee Rights and Support"],
    quickRemember: "World Refugee Day is observed on June 20.",
    audioText: "World Refugee Day was observed on June 20 to honor the resilience of refugees worldwide.",
    source: "United Nations", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-JUN-014", date: "2026-06-21", month: "Jun 2026", category: "Health & Culture",
    title: "International Day of Yoga 2026",
    summary: "The International Day of Yoga was celebrated worldwide on June 21, promoting holistic health and well-being.",
    whatHappened: "The International Day of Yoga was celebrated globally on June 21. Proposed by India and officially adopted by the UN in 2014, the day highlights the physical, mental, and spiritual benefits of yoga.",
    importantPoints: [
      "Celebrated annually on June 21.",
      "Adopted by the United Nations following India's proposal in 2014.",
      "Promotes mental well-being and holistic lifestyles."
    ],
    examFacts: ["Date: June 21", "First Celebrated: 2015"],
    quickRemember: "International Day of Yoga is celebrated globally on June 21.",
    audioText: "International Day of Yoga was celebrated around the world on June 21 to promote health and well-being.",
    source: "United Nations", importantFor: ["SSC CGL", "SSC CHSL", "UPSC"]
  },
  {
    id: "REC-JUN-015", date: "2026-06-23", month: "Jun 2026", category: "Public Service",
    title: "United Nations Public Service Day 2026",
    summary: "UN Public Service Day was marked on June 23 to recognize the contribution of public institutions and servants.",
    whatHappened: "United Nations Public Service Day was observed on June 23. Designated by the UN General Assembly, it highlights the value of good governance, accountability, and citizen-centric public administration.",
    importantPoints: [
      "Observed annually on June 23.",
      "Recognizes the contribution of public servants and institutions.",
      "Highlights accountability and good governance."
    ],
    examFacts: ["Date: June 23", "Focus: Good Governance and Public Service"],
    quickRemember: "UN Public Service Day is observed on June 23.",
    audioText: "United Nations Public Service Day was observed on June 23 to recognize the contributions of public servants.",
    source: "United Nations", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-JUN-016", date: "2026-06-23", month: "Jun 2026", category: "Sports",
    title: "International Olympic Day 2026",
    summary: "International Olympic Day was celebrated on June 23 to promote sports participation and Olympic values.",
    whatHappened: "International Olympic Day was celebrated on June 23 to spread awareness about the Olympic Movement's core values—excellence, friendship, and respect—while encouraging people of all ages to engage in sports.",
    importantPoints: [
      "Celebrated annually on June 23.",
      "Celebrates the values of the Olympic Movement.",
      "Encourages active sports participation across all ages."
    ],
    examFacts: ["Date: June 23", "Values: Excellence, Friendship, Respect"],
    quickRemember: "International Olympic Day is celebrated on June 23.",
    audioText: "International Olympic Day was celebrated on June 23 to spread awareness of the Olympic Movement.",
    source: "International Olympic Committee", importantFor: ["SSC CGL", "SSC CHSL"]
  },
  {
    id: "REC-JUN-017", date: "2026-06-25", month: "Jun 2026", category: "Maritime",
    title: "Day of the Seafarer 2026",
    summary: "The Day of the Seafarer was observed on June 25 to honor maritime transport professionals.",
    whatHappened: "The Day of the Seafarer was observed on June 25. Led by the International Maritime Organization (IMO), it recognizes the critical role seafarers play in global trade, transport, and economic development.",
    importantPoints: [
      "Observed annually on June 25.",
      "Led by the International Maritime Organization (IMO).",
      "Honors seafarers and highlights their role in global trade."
    ],
    examFacts: ["Date: June 25", "Lead Agency: IMO"],
    quickRemember: "Day of the Seafarer is observed on June 25.",
    audioText: "Day of the Seafarer was observed on June 25 to recognize the vital contributions of maritime professionals.",
    source: "IMO", importantFor: ["SSC CGL", "CDS"]
  },
  {
    id: "REC-JUN-018", date: "2026-06-26", month: "Jun 2026", category: "Social Health",
    title: "International Day Against Drug Abuse and Illicit Trafficking 2026",
    summary: "Observed on June 26 to strengthen global action and cooperation toward a drug-free society.",
    whatHappened: "The International Day Against Drug Abuse and Illicit Trafficking was observed on June 26 to raise awareness about the serious impacts of drug abuse and reinforce international resolve for a drug-free society.",
    importantPoints: [
      "Observed annually on June 26.",
      "Raises awareness about the harms of illicit drugs.",
      "Promotes international anti-drug cooperation."
    ],
    examFacts: ["Date: June 26", "Focus: Anti-Drug Awareness and Prevention"],
    quickRemember: "International Day Against Drug Abuse and Illicit Trafficking is observed on June 26.",
    audioText: "The International Day Against Drug Abuse and Illicit Trafficking was observed on June 26.",
    source: "United Nations", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-JUN-019", date: "2026-06-29", month: "Jun 2026", category: "National Economy",
    title: "National Statistics Day 2026",
    summary: "National Statistics Day was observed on June 29 to honor Prof. Prasanta Chandra Mahalanobis.",
    whatHappened: "National Statistics Day was observed across India on June 29 to commemorate the birth anniversary and monumental contributions of Professor Prasanta Chandra Mahalanobis to economic planning and statistical development.",
    importantPoints: [
      "Observed annually on June 29 in India.",
      "Commemorates Prof. Prasanta Chandra Mahalanobis's birth anniversary.",
      "Highlights the role of statistics in socioeconomic planning."
    ],
    examFacts: ["Date: June 29", "Honors: Prof. P.C. Mahalanobis"],
    quickRemember: "National Statistics Day is observed on June 29 in honor of Prof. P.C. Mahalanobis.",
    audioText: "National Statistics Day was observed on June 29 to honor the statistical legacy of Professor P.C. Mahalanobis.",
    source: "MoSPI", importantFor: ["SSC CGL", "Bank PO"]
  },
  {
    id: "REC-JUN-020", date: "2026-06-30", month: "Jun 2026", category: "Science & Space",
    title: "International Asteroid Day 2026",
    summary: "International Asteroid Day was marked on June 30 to raise awareness about asteroid impact hazards.",
    whatHappened: "International Asteroid Day was observed on June 30. Approved by the United Nations, it builds awareness regarding asteroid impact risks and highlights planetary defense measures to safeguard Earth.",
    importantPoints: [
      "Observed annually on June 30.",
      "Approved by the United Nations General Assembly.",
      "Focuses on planetary defense and tracking near-Earth objects."
    ],
    examFacts: ["Date: June 30", "Focus: Planetary Defense"],
    quickRemember: "International Asteroid Day is marked on June 30.",
    audioText: "International Asteroid Day was marked on June 30 to raise awareness about planetary defense and near-Earth objects.",
    source: "United Nations", importantFor: ["SSC CGL", "UPSC"]
  }
];

const junRecallQuestionsBatch1 = [
  {
    id: "REC-Q-JUN-001", articleId: "REC-JUN-001", category: "Environment",
    question: "Mother Dairy rolled out India's first naturally degradable milk pouch in Delhi-NCR starting on which major global day?",
    options: ["World Milk Day", "World Environment Day", "Earth Day", "World Water Day"],
    answer: 1, explanation: "Mother Dairy launched India's naturally degradable milk pouch aligned with World Environment Day."
  },
  {
    id: "REC-Q-JUN-002", articleId: "REC-JUN-002", category: "Environment & Wildlife",
    question: "What is the name of the new lizard species formally described from open semi-desert terrain near Gajner in Bikaner, Rajasthan?",
    options: ["Sitana gansi", "Mesalina bishnoi", "Eublepharis satpuraensis", "Hemidactylus imbricatus"],
    answer: 1, explanation: "Mesalina bishnoi is a newly described lizard species from Rajasthan and the first record of the genus Mesalina in India."
  },
  {
    id: "REC-Q-JUN-003", articleId: "REC-JUN-003", category: "Economy & Infrastructure",
    question: "The Union Cabinet approved a one-time budgetary support of up to how much to stabilize Aviation Turbine Fuel prices for airlines?",
    options: ["₹5,000 crore", "₹10,000 crore", "₹15,000 crore", "₹20,000 crore"],
    answer: 1, explanation: "The Cabinet approved up to ₹10,000 crore as interest-free advances to stabilize ATF prices."
  },
  {
    id: "REC-Q-JUN-004", articleId: "REC-JUN-004", category: "Economy & Energy",
    question: "The National Highway widening projects approved in Telangana by the Cabinet include sections of which two national highways?",
    options: ["NH-44 and NH-65", "NH-63 and NH-563", "NH-16 and NH-48", "NH-52 and NH-30"],
    answer: 1, explanation: "The approved highway works cover sections of NH-63 and NH-563 in Telangana."
  },
  {
    id: "REC-Q-JUN-005", articleId: "REC-JUN-005", category: "Environment",
    question: "World Environment Day is observed every year on June 5 under the leadership of which organization?",
    options: ["UNESCO", "UNEP", "WWF", "IPCC"],
    answer: 1, explanation: "The United Nations Environment Programme (UNEP) organizes World Environment Day."
  },
  {
    id: "REC-Q-JUN-006", articleId: "REC-JUN-006", category: "Economy & Environment",
    question: "The Union Cabinet approved a ₹9,585 crore scheme to replace old polluting vehicles with cleaner ones specifically within which region?",
    options: ["Mumbai Metropolitan Region", "Bengaluru Urban Area", "Delhi-NCR", "Kolkata Urban Agglomeration"],
    answer: 2, explanation: "The vehicle replacement scheme targets old polluting commercial trucks and buses in the Delhi-NCR region."
  },
  {
    id: "REC-Q-JUN-007", articleId: "REC-JUN-007", category: "Health & Welfare",
    question: "World Food Safety Day is celebrated on June 7 under the joint leadership of the WHO and which other organization?",
    options: ["FAO", "UNICEF", "WFP", "IFAD"],
    answer: 0, explanation: "The World Health Organization (WHO) and the Food and Agriculture Organization (FAO) jointly lead World Food Safety Day."
  },
  {
    id: "REC-Q-JUN-008", articleId: "REC-JUN-008", category: "Environment",
    question: "World Oceans Day is observed annually on June 8 to highlight marine conservation and tackle what major threat?",
    options: ["Radioactive waste dumping", "Plastic pollution", "Deep sea oil drilling leaks", "Thermal desalination brine"],
    answer: 1, explanation: "World Oceans Day focuses heavily on reducing plastic usage and stopping ocean pollution."
  },
  {
    id: "REC-Q-JUN-009", articleId: "REC-JUN-009", category: "Health",
    question: "World Brain Tumor Day is observed on June 8 primarily as a tribute to whom?",
    options: ["Eminent neurosurgeons", "Brain tumor patients and their families", "Medical research scientists", "Cancer survivors of all types"],
    answer: 1, explanation: "World Brain Tumor Day serves as a tribute to all brain tumor patients and their families."
  },
  {
    id: "REC-Q-JUN-010", articleId: "REC-JUN-010", category: "Social Welfare",
    question: "World Day Against Child Labour is marked on June 12 under the initiative of which organization?",
    options: ["International Labour Organization (ILO)", "World Bank", "UNESCO", "Amnesty International"],
    answer: 0, explanation: "The International Labour Organization (ILO) launched World Day Against Child Labour."
  },
  {
    id: "REC-Q-JUN-011", articleId: "REC-JUN-011", category: "Health",
    question: "World Blood Donor Day is observed on June 14 under the guidance of which global body?",
    options: ["Red Cross International", "World Health Organization (WHO)", "Doctors Without Borders", "UNICEF"],
    answer: 1, explanation: "The World Health Organization (WHO) leads World Blood Donor Day to promote voluntary blood donations."
  },
  {
    id: "REC-Q-JUN-012", articleId: "REC-JUN-012", category: "Environment",
    question: "The UN General Assembly declared June 17 as the World Day to Combat Desertification and Drought in which year?",
    options: ["1985", "1990", "1994", "2000"],
    answer: 2, explanation: "The UN General Assembly declared June 17 as World Day to Combat Desertification and Drought in 1994."
  },
  {
    id: "REC-Q-JUN-013", articleId: "REC-JUN-013", category: "Humanitarian",
    question: "World Refugee Day is observed annually on June 20 by the United Nations to honor whom?",
    options: ["International peace keepers", "Refugees who have fled conflict and persecution", "Disaster management volunteers", "Stateless persons seeking citizenship"],
    answer: 1, explanation: "World Refugee Day honors the courage and resilience of refugees forced to flee their homes."
  },
  {
    id: "REC-Q-JUN-014", articleId: "REC-JUN-014", category: "Health & Culture",
    question: "Following India's proposal, the United Nations officially adopted the International Day of Yoga in which year?",
    options: ["2012", "2014", "2015", "2017"],
    answer: 1, explanation: "The UN officially adopted the International Day of Yoga following India's proposal in 2014."
  },
  {
    id: "REC-Q-JUN-015", articleId: "REC-JUN-015", category: "Public Service",
    question: "United Nations Public Service Day is observed on June 23 to highlight the importance of what core administrative value?",
    options: ["Digital transformation speed", "Good governance and accountability", "Fiscal austerity measures", "Bureaucratic decentralization"],
    answer: 1, explanation: "UN Public Service Day recognizes public servants and highlights good governance and accountability."
  },
  {
    id: "REC-Q-JUN-016", articleId: "REC-JUN-016", category: "Sports",
    question: "International Olympic Day is celebrated on June 23 to highlight the core values of the Olympic Movement, which include excellence, friendship, and:",
    options: ["Resilience", "Respect", "Integrity", "Harmony"],
    answer: 1, explanation: "The Olympic Movement's core values celebrated on this day are excellence, friendship, and respect."
  },
  {
    id: "REC-Q-JUN-017", articleId: "REC-JUN-017", category: "Maritime",
    question: "The Day of the Seafarer is observed on June 25 under the authority of which international organization?",
    options: ["International Maritime Organization (IMO)", "International Labour Organization", "World Customs Organization", "International Chamber of Shipping"],
    answer: 0, explanation: "The International Maritime Organization (IMO) observes the Day of the Seafarer on June 25."
  },
  {
    id: "REC-Q-JUN-018", articleId: "REC-JUN-018", category: "Social Health",
    question: "The International Day Against Drug Abuse and Illicit Trafficking is marked annually on which date?",
    options: ["June 10", "June 16", "June 26", "June 30"],
    answer: 2, explanation: "June 26 is observed globally as the International Day Against Drug Abuse and Illicit Trafficking."
  },
  {
    id: "REC-Q-JUN-019", articleId: "REC-JUN-019", category: "National Economy",
    question: "National Statistics Day is observed across India on June 29 to honor the birth anniversary of whom?",
    options: ["C. Rangarajan", "Prof. Prasanta Chandra Mahalanobis", "V. K. R. V. Rao", "M. S. Swaminathan"],
    answer: 1, explanation: "National Statistics Day commemorates the birth anniversary of Professor Prasanta Chandra Mahalanobis."
  },
  {
    id: "REC-Q-JUN-020", articleId: "REC-JUN-020", category: "Science & Space",
    question: "International Asteroid Day is observed on June 30 with a primary focus on raising awareness about what issue?",
    options: ["Planetary defense against impact hazards", "Commercial asteroid mining regulations", "Deep space probe trajectory mapping", "Lunar resource ownership treaties"],
    answer: 0, explanation: "International Asteroid Day highlights impact risks and planetary defense measures to safeguard Earth."
  }
];

// 👉 PUSH DATA INTO GLOBAL ARRAYS
if (typeof hiddenRecallArticles !== 'undefined') {
  hiddenRecallArticles.push(...junRecallArticlesBatch1);
}
if (typeof recallQuestionPool !== 'undefined') {
  recallQuestionPool.push(...junRecallQuestionsBatch1);
}

/* ==========================================================================
   END OF JUNE BATCH 1
   ========================================================================== */

/* ==========================================================================
   JUNE 2026 - BATCH 2 (ITEMS 021 TO 040)
   ========================================================================== */

const junRecallArticlesBatch2 = [
  {
    id: "REC-JUN-021", date: "2026-06-01", month: "Jun 2026", category: "Government Schemes",
    title: "PM SVANidhi Completes Six Years of Implementation",
    summary: "The Prime Minister Street Vendor's AtmaNirbhar Nidhi (PM SVANidhi) completed six years of micro-credit support.",
    whatHappened: "The PM SVANidhi scheme, launched in June 2020 during the COVID-19 pandemic as a central sector micro-credit scheme for urban street vendors, officially completed six years of successful implementation, providing collateral-free working capital loans to millions of vendors.",
    importantPoints: [
      "Completed six years of implementation in June 2026.",
      "Launched originally in June 2020 during the COVID-19 pandemic.",
      "Provides collateral-free working capital loans to urban street vendors."
    ],
    examFacts: ["Scheme: PM SVANidhi", "Launch Year: June 2020", "Milestone: 6 Years"],
    quickRemember: "PM SVANidhi micro-credit scheme for urban street vendors completed six years.",
    audioText: "The PM SVANidhi micro-credit scheme for urban street vendors completed six years of implementation.",
    source: "Ministry of Housing and Urban Affairs", importantFor: ["SSC CGL", "Bank PO"]
  },
  {
    id: "REC-JUN-022", date: "2026-06-02", month: "Jun 2026", category: "Agriculture & Schemes",
    title: "Mission Senehjori Launched for Assam Muga Silk",
    summary: "Mission Senehjori was launched as an Atmanirbhar North East project to elevate Muga silk into a global luxury brand.",
    whatHappened: "The Ministry of Development of North Eastern Region (MDoNER) officially rolled out 'Mission Senehjori', an Atmanirbhar initiative aimed at scaling up production, standardizing quality, and transforming Assam's golden Muga silk into a recognized global luxury brand.",
    importantPoints: [
      "Launched as an Atmanirbhar North East project.",
      "Anchored by the Ministry of Development of North Eastern Region (MDoNER).",
      "Focuses on elevating Assam Muga silk into a global luxury brand."
    ],
    examFacts: ["Mission: Senehjori", "Product: Assam Muga Silk", "Ministry: MDoNER"],
    quickRemember: "Mission Senehjori was launched by MDoNER to position Assam Muga silk as a global luxury brand.",
    audioText: "Mission Senehjori was launched by the North Eastern Region ministry to elevate Muga silk into a global luxury brand.",
    source: "MDoNER", importantFor: ["SSC CGL", "State PCS"]
  },
  {
    id: "REC-JUN-023", date: "2026-06-02", month: "Jun 2026", category: "Economy & Infrastructure",
    title: "MAHA Water Program Launched",
    summary: "The Government of India launched the MAHA Water Program with a ₹200-crore outlay to drive high-impact water innovations.",
    whatHappened: "The Central Government launched the MAHA Water Program (Missions for Advancement in High-impact Areas) with an approved financial outlay of ₹200 crore to promote cutting-edge research, water conservation, and technological innovations in the water sector.",
    importantPoints: [
      "Initiative name: MAHA Water Program.",
      "Approved financial outlay of ₹200 crore.",
      "Aims to promote high-impact research and innovation in water management."
    ],
    examFacts: ["Program: MAHA Water Program", "Outlay: ₹200 Crore"],
    quickRemember: "The MAHA Water Program was launched with a ₹200-crore outlay for water sector innovations.",
    audioText: "The Government of India launched the MAHA Water Program with a two hundred crore rupee outlay for water innovations.",
    source: "Ministry of Jal Shakti", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-JUN-024", date: "2026-06-03", month: "Jun 2026", category: "Government Schemes & Innovation",
    title: "Navachar Mantra Launched at IIT Delhi",
    summary: "The 'Navachar Mantra' targeted nanomedicine initiative was launched at IIT Delhi to boost breast cancer therapy.",
    whatHappened: "Union Minister Jayant Chaudhary launched 'Navachar Mantra' at IIT Delhi. Implemented jointly by NIESBUD and the Foundation for Innovation and Technology Transfer (FITT), the initiative focuses on targeted nanomedicine solutions for breast cancer therapy.",
    importantPoints: [
      "Launched at IIT Delhi by Union Minister Jayant Chaudhary.",
      "Implemented jointly by NIESBUD and FITT.",
      "Focuses on targeted nanomedicine for breast cancer therapy."
    ],
    examFacts: ["Initiative: Navachar Mantra", "Venue: IIT Delhi", "Focus: Breast Cancer Nanomedicine"],
    quickRemember: "Navachar Mantra was launched at IIT Delhi for targeted breast cancer nanomedicine therapy.",
    audioText: "The Navachar Mantra initiative was launched at IIT Delhi to support targeted nanomedicine for breast cancer therapy.",
    source: "Ministry of Skill Development", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-JUN-025", date: "2026-06-03", month: "Jun 2026", category: "Agriculture & Schemes",
    title: "Nationwide Khet Bachao Abhiyan Announced",
    summary: "The Ministry of Agriculture launched the month-long 'Khet Bachao Abhiyan' to promote scientific fertilizer use.",
    whatHappened: "The Ministry of Agriculture and Farmers Welfare initiated the nationwide 'Khet Bachao Abhiyan' running throughout June 2026. The campaign promotes sustainable farming, soil health mapping, and fertilizer application strictly based on scientific recommendations.",
    importantPoints: [
      "Conducted throughout June 2026 by the Ministry of Agriculture.",
      "Promotes sustainable farming and soil health preservation.",
      "Encourages fertilizer use based on scientific soil health recommendations."
    ],
    examFacts: ["Campaign: Khet Bachao Abhiyan", "Duration: June 2026"],
    quickRemember: "The 'Khet Bachao Abhiyan' was conducted in June 2026 to promote soil-health-based farming.",
    audioText: "The Ministry of Agriculture conducted the month-long Khet Bachao Abhiyan to promote science-backed soil health practices.",
    source: "Ministry of Agriculture", importantFor: ["SSC CGL", "State PCS"]
  },
  {
    id: "REC-JUN-026", date: "2026-06-08", month: "Jun 2026", category: "Environment & Meteorology",
    title: "Regional Meteorological Centre Inaugurated in Lucknow",
    summary: "A new Regional Meteorological Centre was inaugurated in Lucknow under India's expanding Mission Mausam network.",
    whatHappened: "A state-of-the-art Regional Meteorological Centre was inaugurated in Lucknow under 'Mission Mausam'. India's operational Doppler Weather Radar network has expanded significantly from 17 radars in 2014 to a much higher density nationwide, with dozens more planned.",
    importantPoints: [
      "Inaugurated in Lucknow under Mission Mausam.",
      "Expands India's Doppler Weather Radar observation network.",
      "Aims to upgrade severe weather forecasting and disaster early warnings."
    ],
    examFacts: ["Facility: Regional Meteorological Centre", "City: Lucknow", "Mission: Mission Mausam"],
    quickRemember: "A Regional Meteorological Centre was opened in Lucknow under Mission Mausam.",
    audioText: "A new Regional Meteorological Centre was inaugurated in Lucknow under the Mission Mausam network.",
    source: "IMD / Ministry of Earth Sciences", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-JUN-027", date: "2026-06-09", month: "Jun 2026", category: "State Governance & Safety",
    title: "Tamil Nadu Launches Singappen Special Task Force",
    summary: "Tamil Nadu launched the 'Singappen' Special Task Force at Rajarathinam Stadium to protect women and children.",
    whatHappened: "The Government of Tamil Nadu officially launched the 'Singappen' Special Task Force at Rajarathinam Stadium. The specialized force is tasked with strengthening security, preventing crimes against women and children, and ensuring rapid emergency responses.",
    importantPoints: [
      "Launched at Rajarathinam Stadium in Tamil Nadu.",
      "Named the 'Singappen' Special Task Force.",
      "Aimed specifically at strengthening the safety of women and children."
    ],
    examFacts: ["Task Force: Singappen", "State: Tamil Nadu", "Focus: Women and Children Safety"],
    quickRemember: "Tamil Nadu launched the 'Singappen' Special Task Force for women and children safety.",
    audioText: "Tamil Nadu launched the Singappen Special Task Force to strengthen the safety and security of women and children.",
    source: "Government of Tamil Nadu", importantFor: ["SSC CGL", "State PCS"]
  },
  {
    id: "REC-JUN-028", date: "2026-06-09", month: "Jun 2026", category: "Economy & Infrastructure",
    title: "BHAVYA Portal Launched for Industrial Parks",
    summary: "The BHAVYA Portal was launched to facilitate applications for developing 100 investment-ready industrial parks.",
    whatHappened: "The central government launched the BHAVYA Portal to streamline applications and approvals for developing 100 investment-ready industrial parks across India, backed by a massive multi-year government infrastructure outlay.",
    importantPoints: [
      "Portal name: BHAVYA Portal.",
      "Facilitates the creation of 100 investment-ready industrial parks.",
      "Aims to accelerate manufacturing infrastructure and plug-and-play facilities."
    ],
    examFacts: ["Portal: BHAVYA Portal", "Target: 100 Industrial Parks"],
    quickRemember: "The BHAVYA Portal was launched to support the development of 100 investment-ready industrial parks.",
    audioText: "The BHAVYA Portal was launched to streamline applications for developing one hundred investment-ready industrial parks.",
    source: "Ministry of Commerce and Industry", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-JUN-029", date: "2026-06-10", month: "Jun 2026", category: "Economy & Banking",
    title: "Common Landing Portal for Unclaimed Financial Assets",
    summary: "The Department of Financial Services launched a Common Landing Portal to help citizens reclaim unclaimed funds.",
    whatHappened: "The Department of Financial Services (DFS) under the Ministry of Finance launched a centralized 'Common Landing Portal' enabling citizens to easily search and initiate claims for unclaimed financial assets across banks, mutual funds, and insurance accounts.",
    importantPoints: [
      "Launched by the Department of Financial Services (DFS), Ministry of Finance.",
      "Acts as a centralized search engine for unclaimed financial assets.",
      "Covers dormant bank accounts, unclaimed dividends, and insurance proceeds."
    ],
    examFacts: ["Initiative: Common Landing Portal", "Department: DFS, Ministry of Finance"],
    quickRemember: "The DFS launched a Common Landing Portal for citizens to search and reclaim unclaimed financial assets.",
    audioText: "The Department of Financial Services launched a Common Landing Portal to help citizens reclaim unclaimed financial assets.",
    source: "Ministry of Finance", importantFor: ["Bank PO", "SSC CGL"]
  },
  {
    id: "REC-JUN-030", date: "2026-06-11", month: "Jun 2026", category: "Health & Digital Governance",
    title: "Aarogya Setu 2.0 Launched Under ABDM",
    summary: "Aarogya Setu was redesigned and relaunched as Aarogya Setu 2.0, serving as a personal health record application.",
    whatHappened: "Under the Ayushman Bharat Digital Mission (ABDM), Aarogya Setu was officially redesigned and relaunched as 'Aarogya Setu 2.0'. It transitioned from a pandemic tracking app into a comprehensive personal health record (PHR) application linked to ABHA accounts.",
    importantPoints: [
      "Relaunched as Aarogya Setu 2.0 under ABDM.",
      "Redesigned primarily as a personal health record (PHR) application.",
      "Connects users seamlessly to digital health lockers and hospital records."
    ],
    examFacts: ["Application: Aarogya Setu 2.0", "Core Use: Personal Health Record (PHR)"],
    quickRemember: "Aarogya Setu was relaunched as Aarogya Setu 2.0, functioning as a personal health record application.",
    audioText: "Aarogya Setu was redesigned and relaunched as Aarogya Setu 2.0 under the Ayushman Bharat Digital Mission.",
    source: "National Health Authority", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-JUN-031", date: "2026-06-12", month: "Jun 2026", category: "Environment & Biodiversity",
    title: "Gujarat's Dolphin Count Tops 680",
    summary: "Marine conservation surveys recorded over 680 dolphins across Gujarat's coastal waters.",
    whatHappened: "Official wildlife and marine census reports confirmed that Gujarat's coastal dolphin population has surpassed 680 individuals, reflecting successful habitat protection, reduced industrial discharge, and active marine conservation efforts in the Gulf of Kutch.",
    importantPoints: [
      "Dolphin population count in Gujarat crossed 680.",
      "Surveys conducted across coastal waters and the Gulf of Kutch.",
      "Highlights positive outcomes of regional marine conservation."
    ],
    examFacts: ["State: Gujarat", "Dolphin Count: >680"],
    quickRemember: "Gujarat's marine dolphin count surpassed 680 individuals.",
    audioText: "Marine surveys in Gujarat reported that the State's coastal dolphin population topped six hundred and eighty.",
    source: "Gujarat Forest Department", importantFor: ["SSC CGL", "State PCS"]
  },
  {
    id: "REC-JUN-032", date: "2026-06-15", month: "Jun 2026", category: "Science & Environment",
    title: "Brachybacterium Netajii Discovered for Bioremediation",
    summary: "A newly discovered bacterial strain, *Brachybacterium netajii*, was found useful for industrial pollutant bioremediation.",
    whatHappened: "Microbiologists isolated and described a novel bacterial strain named *Brachybacterium netajii*. Research confirmed its high efficacy in the biological breakdown and bioremediation of toxic industrial pollutants and chemical waste.",
    importantPoints: [
      "New bacterial strain named *Brachybacterium netajii*.",
      "Proven effective in the bioremediation of industrial pollutants.",
      "Offers eco-friendly solutions for treating heavy chemical waste."
    ],
    examFacts: ["Strain: Brachybacterium netajii", "Application: Bioremediation of industrial pollutants"],
    quickRemember: "Brachybacterium netajii is a newly discovered bacterial strain used for bioremediation.",
    audioText: "A newly discovered bacterial strain named Brachybacterium netajii was found effective in industrial bioremediation.",
    source: "Scientific Journals", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-JUN-033", date: "2026-06-16", month: "Jun 2026", category: "International Diplomacy",
    title: "16th BRICS National Security Advisers Meeting Held in New Delhi",
    summary: "India hosted the 16th BRICS National Security Advisers' Meeting under its 2026 chairship.",
    whatHappened: "India hosted the 16th BRICS National Security Advisers' (NSA) Meeting in New Delhi. Holding the BRICS chairship for the fourth time (2012, 2016, 2021, 2026), India anchored discussions under the theme 'Building for Resilience, Innovation, Cooperation and Sustainability'.",
    importantPoints: [
      "16th BRICS NSA meeting hosted in New Delhi.",
      "India holds the BRICS chairship in 2026 for the fourth time.",
      "2026 theme: 'Building for Resilience, Innovation, Cooperation and Sustainability'."
    ],
    examFacts: ["Event: 16th BRICS NSA Meeting", "Host: India (4th Chairship)"],
    quickRemember: "India hosted the 16th BRICS National Security Advisers' Meeting in New Delhi.",
    audioText: "India hosted the 16th BRICS National Security Advisers meeting in New Delhi under its 2026 chairship.",
    source: "MEA", importantFor: ["UPSC", "CDS", "SSC CGL"]
  },
  {
    id: "REC-JUN-034", date: "2026-06-17", month: "Jun 2026", category: "Economy & Global Outlook",
    title: "OECD Raises India FY 2026-27 Growth Forecast to 6.3%",
    summary: "The OECD revised India's real GDP growth forecast upward to 6.3% for the 2026-27 fiscal year.",
    whatHappened: "In its economic outlook report released in June 2026, the Organisation for Economic Co-operation and Development (OECD) raised India's GDP growth forecast for the 2026-27 fiscal year to 6.3%, citing resilient domestic consumption and robust capital expenditure.",
    importantPoints: [
      "OECD raised India's FY 2026-27 GDP growth forecast to 6.3%.",
      "Reflects strong domestic demand and steady public infrastructure investment."
    ],
    examFacts: ["Organization: OECD", "Growth Forecast (2026-27): 6.3%"],
    quickRemember: "OECD raised India's FY 2026-27 GDP growth forecast to 6.3%.",
    audioText: "The OECD raised India's real GDP growth forecast for the 2026-27 fiscal year to 6.3 percent.",
    source: "OECD", importantFor: ["Bank PO", "SSC CGL", "UPSC"]
  },
  {
    id: "REC-JUN-035", date: "2026-06-18", month: "Jun 2026", category: "Science & Defence",
    title: "DRDO Successfully Tests RudraM-II Missile",
    summary: "DRDO successfully executed flight trials of the indigenous RudraM-II air-to-surface tactical missile.",
    whatHappened: "The Defence Research and Development Organisation (DRDO) successfully completed user trials of the RudraM-II, an indigenous solid-propellant air-to-surface tactical missile designed to neutralize enemy radar sites, communication nodes, and air defense batteries.",
    importantPoints: [
      "Successful flight trial of the RudraM-II missile.",
      "Indigenous solid-propellant air-to-surface tactical missile.",
      "Designed to destroy enemy radar and air defense infrastructure."
    ],
    examFacts: ["Missile: RudraM-II", "Type: Air-to-Surface Tactical Missile", "Agency: DRDO"],
    quickRemember: "DRDO successfully flight-tested the RudraM-II air-to-surface missile.",
    audioText: "DRDO successfully flight-tested the indigenous RudraM-II air-to-surface tactical missile.",
    source: "Ministry of Defence", importantFor: ["CDS", "SSC CGL"]
  },
  {
    id: "REC-JUN-036", date: "2026-06-19", month: "Jun 2026", category: "Environment & Wildlife",
    title: "Sistan Sand Boa Recorded for First Time in India",
    summary: "The Sistan sand boa (*Eryx sistanensis*) was formally recorded for the first time in India within Rajasthan.",
    whatHappened: "Herpetologists and wildlife researchers confirmed the first-ever formal record of the Sistan sand boa (*Eryx sistanensis*) in India, having discovered specimens traversing the arid dunes of the northern Thar Desert in Rajasthan.",
    importantPoints: [
      "First recorded sighting of the Sistan sand boa (*Eryx sistanensis*) in India.",
      "Discovered in the northern Thar Desert, Rajasthan.",
      "Expands the known zoogeographical distribution of the snake species."
    ],
    examFacts: ["Species: Sistan sand boa (Eryx sistanensis)", "Location: Northern Thar Desert, Rajasthan"],
    quickRemember: "The Sistan sand boa was recorded in India for the first time in the Thar Desert, Rajasthan.",
    audioText: "The Sistan sand boa was recorded for the first time in India within the Thar Desert of Rajasthan.",
    source: "Zoological Survey of India", importantFor: ["SSC CGL", "State PCS"]
  },
  {
    id: "REC-JUN-037", date: "2026-06-22", month: "Jun 2026", category: "Government Schemes",
    title: "MY Bharat Launches Viksit Vibrant Village Program",
    summary: "MY Bharat launched the Viksit Vibrant Village Program (VVVP) to engage youth in border village development.",
    whatHappened: "Mera Yuva Bharat (MY Bharat)—an autonomous body under the Ministry of Youth Affairs and Sports—commenced the 'Viksit Vibrant Village Program' (VVVP) to mobilize youth volunteers and foster socio-economic development across remote border settlements.",
    importantPoints: [
      "Launched by MY Bharat.",
      "Operates under the Ministry of Youth Affairs and Sports.",
      "Focuses on youth engagement and development in strategic border villages."
    ],
    examFacts: ["Program: Viksit Vibrant Village Program (VVVP)", "Body: MY Bharat"],
    quickRemember: "MY Bharat launched the Viksit Vibrant Village Program for youth engagement in border villages.",
    audioText: "MY Bharat launched the Viksit Vibrant Village Program to engage youth in border village development.",
    source: "Ministry of Youth Affairs & Sports", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-JUN-038", date: "2026-06-23", month: "Jun 2026", category: "Marine Biology & Discoveries",
    title: "New Snake Eel Species Discovered in Andhra Pradesh",
    summary: "Marine scientists discovered a new species of snake eel named *Bascanichthys chepakakiensis* from Kakinada.",
    whatHappened: "Marine researchers officially described a new species of snake eel, named *Bascanichthys chepakakiensis*, discovered from specimens collected at the Kakinada fishing harbour along the coast of Andhra Pradesh.",
    importantPoints: [
      "New snake eel species named *Bascanichthys chepakakiensis*.",
      "Discovered at Kakinada fishing harbour, Andhra Pradesh.",
      "Adds to India's marine biodiversity catalog."
    ],
    examFacts: ["Species: Bascanichthys chepakakiensis", "Location: Kakinada Harbour, Andhra Pradesh"],
    quickRemember: "A new snake eel species, Bascanichthys chepakakiensis, was discovered in Kakinada, Andhra Pradesh.",
    audioText: "Marine scientists discovered a new species of snake eel named Bascanichthys chepakakiensis from Andhra Pradesh.",
    source: "Marine Fisheries Research", importantFor: ["SSC CGL", "State PCS"]
  },
  {
    id: "REC-JUN-039", date: "2026-06-24", month: "Jun 2026", category: "Economy & National Income",
    title: "MoSPI Releases Provisional Estimates of National Income",
    summary: "MoSPI released provisional national income numbers, putting full-year FY 2025-26 real GDP growth at 7.0%.",
    whatHappened: "The Ministry of Statistics and Programme Implementation (MoSPI) released the Provisional Estimates of National Income, reporting that India's real GDP growth for the full 2025-26 fiscal year stood at a robust 7.0%, driven by sustained manufacturing and construction output.",
    importantPoints: [
      "Released by MoSPI.",
      "Full-year real GDP growth for FY 2025-26 estimated at 7.0%.",
      "Demonstrates strong economic resilience across industrial sectors."
    ],
    examFacts: ["Publisher: MoSPI", "FY 2025-26 GDP Growth: 7.0%"],
    quickRemember: "MoSPI's provisional estimates put India's FY 2025-26 real GDP growth at 7.0%.",
    audioText: "MoSPI released provisional national income data showing India's full year GDP growth for 2025-26 at seven percent.",
    source: "MoSPI", importantFor: ["Bank PO", "SSC CGL", "UPSC"]
  },
  {
    id: "REC-JUN-040", date: "2026-06-25", month: "Jun 2026", category: "Health & Governance",
    title: "SUMAN Roadmap 2030 for Maternal Healthcare",
    summary: "The Ministry of Health reviewed the 'SUMAN Roadmap 2030' focusing intensely on maternal and newborn health.",
    whatHappened: "The Ministry of Health reviewed implementation milestones under the 'SUMAN Roadmap 2030'. The strategic framework places specialized emphasis on pre-conception care, safe pregnancy, childbirth, and high-quality postnatal healthcare to eradicate preventable maternal deaths.",
    importantPoints: [
      "Strategic health framework named 'SUMAN Roadmap 2030'.",
      "Focuses heavily on pregnancy, childbirth, and postnatal care.",
      "Aims to achieve zero preventable maternal and newborn deaths."
    ],
    examFacts: ["Framework: SUMAN Roadmap 2030", "Focus: Maternal and Newborn Healthcare"],
    quickRemember: "The SUMAN Roadmap 2030 targets comprehensive maternal and newborn healthcare improvements.",
    audioText: "The Health Ministry advanced the SUMAN Roadmap 2030 focusing on maternal, childbirth, and newborn care.",
    source: "MoHFW", importantFor: ["SSC CGL", "UPSC"]
  }
];

const junRecallQuestionsBatch2 = [
  {
    id: "REC-Q-JUN-021", articleId: "REC-JUN-021", category: "Government Schemes",
    question: "Which central sector micro-credit scheme for urban street vendors officially completed six years of implementation in June 2026?",
    options: ["PM-KISAN", "PM SVANidhi", "PMMY Mudra Loan", "Stand-Up India"],
    answer: 1, explanation: "PM SVANidhi was launched in June 2020 during the COVID-19 pandemic and completed six years in June 2026."
  },
  {
    id: "REC-Q-JUN-022", articleId: "REC-JUN-022", category: "Agriculture & Schemes",
    question: "Mission Senehjori was launched as an Atmanirbhar North East project anchored by MDoNER to elevate which product into a global luxury brand?",
    options: ["Darjeeling Tea", "Assam Muga Silk", "Naga Mircha", "Pashmina Wool"],
    answer: 1, explanation: "Mission Senehjori is an MDoNER project aimed at scaling up Assam's golden Muga silk as a global luxury brand."
  },
  {
    id: "REC-Q-JUN-023", articleId: "REC-JUN-023", category: "Economy & Infrastructure",
    question: "What is the approved financial outlay for the MAHA Water Program launched by the Government of India to promote high-impact water innovations?",
    options: ["₹100 crore", "₹150 crore", "₹200 crore", "₹500 crore"],
    answer: 2, explanation: "The MAHA Water Program (Missions for Advancement in High-impact Areas) has an approved outlay of ₹200 crore."
  },
  {
    id: "REC-Q-JUN-024", articleId: "REC-JUN-024", category: "Government Schemes & Innovation",
    question: "Union Minister Jayant Chaudhary launched 'Navachar Mantra' at IIT Delhi to focus on targeted nanomedicine for which disease therapy?",
    options: ["Lung cancer", "Breast cancer", "Leukemia", "Brain tumor"],
    answer: 1, explanation: "Navachar Mantra is focused on targeted nanomedicine solutions specifically for breast cancer therapy."
  },
  {
    id: "REC-Q-JUN-025", articleId: "REC-JUN-025", category: "Agriculture & Schemes",
    question: "The Ministry of Agriculture conducted the nationwide 'Khet Bachao Abhiyan' throughout June 2026 primarily to promote fertilizer use based on:",
    options: ["International export demands", "Soil health and scientific recommendations", "Market retail pricing caps", "Organic subsidy quotas"],
    answer: 1, explanation: "The Khet Bachao Abhiyan promotes sustainable farming and fertilizer application based on soil health and scientific recommendations."
  },
  {
    id: "REC-Q-JUN-026", articleId: "REC-JUN-026", category: "Environment & Meteorology",
    question: "A new Regional Meteorological Centre was inaugurated in Lucknow under which expanding national weather observation initiative?",
    options: ["Mission Mausam", "Varunastra Grid", "Maheshwar Network", "Mausam Vayu Net"],
    answer: 0, explanation: "The Lucknow Regional Meteorological Centre was opened under India's Mission Mausam network."
  },
  {
    id: "REC-Q-JUN-027", articleId: "REC-JUN-027", category: "State Governance & Safety",
    question: "The Government of Tamil Nadu launched the 'Singappen' Special Task Force at Rajarathinam Stadium to ensure the safety of:",
    options: ["Senior citizens and disabled persons", "Farmers and agricultural labourers", "Women and children", "Migrant workers and daily wagers"],
    answer: 2, explanation: "The Singappen Special Task Force in Tamil Nadu is dedicated to strengthening the safety of women and children."
  },
  {
    id: "REC-Q-JUN-028", articleId: "REC-JUN-028", category: "Economy & Infrastructure",
    question: "The BHAVYA Portal was launched by the central government to facilitate applications for developing how many investment-ready industrial parks?",
    options: ["50 industrial parks", "75 industrial parks", "100 industrial parks", "150 industrial parks"],
    answer: 2, explanation: "The BHAVYA Portal supports the development of 100 investment-ready industrial parks across India."
  },
  {
    id: "REC-Q-JUN-029", articleId: "REC-JUN-029", category: "Economy & Banking",
    question: "Which department under the Ministry of Finance launched the centralized 'Common Landing Portal' for searching unclaimed financial assets?",
    options: ["Department of Revenue", "Department of Economic Affairs", "Department of Financial Services (DFS)", "Department of Investment and Public Asset Management"],
    answer: 2, explanation: "The Department of Financial Services (DFS) launched the Common Landing Portal to help citizens reclaim unclaimed financial assets."
  },
  {
    id: "REC-Q-JUN-030", articleId: "REC-JUN-030", category: "Health & Digital Governance",
    question: "Under the Ayushman Bharat Digital Mission (ABDM), Aarogya Setu was redesigned and relaunched primarily as a:",
    options: ["Telemedicine consultation desk", "Personal health record (PHR) application", "COVID-19 vaccination certificate vault", "Health insurance claim settlement portal"],
    answer: 1, explanation: "Aarogya Setu 2.0 was redesigned as a personal health record (PHR) application under ABDM."
  },
  {
    id: "REC-Q-JUN-031", articleId: "REC-JUN-031", category: "Environment & Biodiversity",
    question: "Recent marine conservation surveys confirmed that Gujarat's coastal dolphin population has surpassed what figure?",
    options: ["350 dolphins", "500 dolphins", "680 dolphins", "850 dolphins"],
    answer: 2, explanation: "Gujarat's coastal dolphin count topped 680 individuals, reflecting successful marine conservation."
  },
  {
    id: "REC-Q-JUN-032", articleId: "REC-JUN-032", category: "Science & Environment",
    question: "The newly discovered bacterial strain *Brachybacterium netajii* is primarily recognized for its efficacy in:",
    options: ["Bioremediation of industrial pollutants", "Biological nitrogen fixation in cereal crops", "Carbon capture in open ocean gyres", "Production of microbial bio-plastics"],
    answer: 0, explanation: "Brachybacterium netajii is a bacterial strain useful for the bioremediation of industrial pollutants."
  },
  {
    id: "REC-Q-JUN-033", articleId: "REC-JUN-033", category: "International Diplomacy",
    question: "India hosted the 16th BRICS National Security Advisers' Meeting in New Delhi under its 2026 chairship. What is the theme for India's 2026 chairship?",
    options: ["Partnership for Global Stability and Security", "Building for Resilience, Innovation, Cooperation and Sustainability", "Strengthening Multilateralism in a Digital Age", "Inclusive Growth and Sustainable Development"],
    answer: 1, explanation: "India's 2026 BRICS chairship theme is 'Building for Resilience, Innovation, Cooperation and Sustainability'."
  },
  {
    id: "REC-Q-JUN-034", articleId: "REC-JUN-034", category: "Economy & Global Outlook",
    question: "In its economic outlook report released in June 2026, the OECD raised India's real GDP growth forecast for FY 2026-27 to:",
    options: ["6.0%", "6.3%", "6.8%", "7.1%"],
    answer: 1, explanation: "The OECD raised India's GDP growth forecast for FY 2026-27 to 6.3%."
  },
  {
    id: "REC-Q-JUN-035", articleId: "REC-JUN-035", category: "Science & Defence",
    question: "The RudraM-II, successfully flight-tested by DRDO, is an indigenous:",
    options: ["Air-to-surface tactical missile", "Surface-to-air ballistic shield", "Anti-submarine torpedo rocket", "Hypersonic cruise missile"],
    answer: 0, explanation: "RudraM-II is an indigenous solid-propellant air-to-surface tactical missile designed to destroy enemy radar and defense nodes."
  },
  {
    id: "REC-Q-JUN-036", articleId: "REC-JUN-036", category: "Environment & Wildlife",
    question: "The Sistan sand boa (*Eryx sistanensis*) was formally recorded for the first time in India within which state's arid terrain?",
    options: ["Gujarat (Rann of Kutch)", "Rajasthan (Thar Desert)", "Punjab (Malwa plains)", "Haryana (Aravalli foothills)"],
    answer: 1, explanation: "The Sistan sand boa was discovered and recorded for the first time in India within the northern Thar Desert of Rajasthan."
  },
  {
    id: "REC-Q-JUN-037", articleId: "REC-JUN-037", category: "Government Schemes",
    question: "Mera Yuva Bharat (MY Bharat) commenced the 'Viksit Vibrant Village Program' (VVVP) focused primarily on youth engagement in:",
    options: ["Aspirational tribal districts", "Strategic border villages", "Coastal fishing hamlets", "Drought-prone rural blocks"],
    answer: 1, explanation: "The Viksit Vibrant Village Program (VVVP) mobilizes youth volunteers for development across strategic border settlements."
  },
  {
    id: "REC-Q-JUN-038", articleId: "REC-JUN-038", category: "Marine Biology & Discoveries",
    question: "Marine researchers discovered a new species of snake eel named *Bascanichthys chepakakiensis* from a fishing harbour in which state?",
    options: ["Maharashtra", "Odisha", "Andhra Pradesh", "Kerala"],
    answer: 2, explanation: "Bascanichthys chepakakiensis was discovered from specimens collected at the Kakinada fishing harbour in Andhra Pradesh."
  },
  {
    id: "REC-Q-JUN-039", articleId: "REC-JUN-039", category: "Economy & National Income",
    question: "According to the Provisional Estimates of National Income released by MoSPI, what was India's real GDP growth for the full 2025-26 fiscal year?",
    options: ["6.8%", "7.0%", "7.4%", "7.7%"],
    answer: 1, explanation: "MoSPI's provisional estimates placed India's full-year real GDP growth for FY 2025-26 at 7.0%."
  },
  {
    id: "REC-Q-JUN-040", articleId: "REC-JUN-040", category: "Health & Governance",
    question: "The 'SUMAN Roadmap 2030' reviewed by the Ministry of Health places specialized emphasis on eliminating preventable deaths during which stages of care?",
    options: ["Pre-conception, pregnancy, and delivery care", "Pregnancy, childbirth, and newborn care", "Infancy, childhood immunization, and adolescent health", "Geriatric care and palliative nursing"],
    answer: 1, explanation: "The SUMAN Roadmap 2030 focuses intensely on pregnancy, childbirth, and postnatal newborn care to prevent maternal and neonatal deaths."
  }
];

// 👉 PUSH DATA INTO GLOBAL ARRAYS
if (typeof hiddenRecallArticles !== 'undefined') {
  hiddenRecallArticles.push(...junRecallArticlesBatch2);
}
if (typeof recallQuestionPool !== 'undefined') {
  recallQuestionPool.push(...junRecallQuestionsBatch2);
}

/* ==========================================================================
   END OF JUNE BATCH 2
   ========================================================================== */
/* ==========================================================================
   JUNE 2026 - BATCH 3 (ITEMS 041 TO 060)
   ========================================================================== */

const junRecallArticlesBatch3 = [
  {
    id: "REC-JUN-041", date: "2026-06-01", month: "Jun 2026", category: "Defence & Aerospace",
    title: "DRDO Successfully Flight-Tests Advanced Anti-Radiation Missile",
    summary: "DRDO completed user-evaluation trials for an upgraded variant of the RudraM anti-radiation missile.",
    whatHappened: "The Defence Research and Development Organisation (DRDO) successfully completed user-evaluation flight trials of an advanced variant of the RudraM anti-radiation missile from a Sukhoi-30 MKI fighter jet off the coast of Odisha, enhancing tactical suppression of enemy air defenses (SEAD).",
    importantPoints: [
      "Flight-tested upgraded RudraM anti-radiation missile variant.",
      "Fired from a Sukhoi-30 MKI fighter platform off the Odisha coast.",
      "Designed for suppression of enemy air defenses (SEAD)."
    ],
    examFacts: ["Missile: RudraM (Anti-Radiation)", "Platform: Su-30 MKI", "Agency: DRDO"],
    quickRemember: "DRDO flight-tested an advanced variant of the RudraM anti-radiation missile from a Su-30 MKI.",
    audioText: "DRDO successfully flight-tested an advanced variant of the RudraM anti-radiation missile from a Sukhoi fighter jet.",
    source: "Ministry of Defence", importantFor: ["CDS", "SSC CGL"]
  },
  {
    id: "REC-JUN-042", date: "2026-06-02", month: "Jun 2026", category: "Science & Technology",
    title: "CSIR-CCMB Develops CRISPR-Based Diagnostic Kit for Rare Genetic Disorders",
    summary: "CCMB Hyderabad engineered a rapid CRISPR-Cas diagnostic kit targeting congenital single-gene disorders.",
    whatHappened: "Scientists at the CSIR-Centre for Cellular and Molecular Biology (CCMB) in Hyderabad developed a low-cost, rapid CRISPR-Cas-based diagnostic platform capable of detecting over 50 congenital single-gene disorders from dried blood spots.",
    importantPoints: [
      "CRISPR-Cas-based diagnostic platform developed by CSIR-CCMB.",
      "Targets congenital single-gene disorders from dried blood spots.",
      "Provides rapid, low-cost screening options for rural clinics."
    ],
    examFacts: ["Institution: CSIR-CCMB Hyderabad", "Innovation: CRISPR Genetic Diagnostic Kit"],
    quickRemember: "CSIR-CCMB developed a CRISPR-based diagnostic kit for detecting rare congenital genetic disorders.",
    audioText: "CCMB Hyderabad developed a rapid CRISPR-based diagnostic kit capable of screening congenital single-gene disorders.",
    source: "CSIR", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-JUN-043", date: "2026-06-03", month: "Jun 2026", category: "Economy & Infrastructure",
    title: "India Post Installs First Solar-Powered Automated Post Office",
    summary: "India Post commissioned its first fully solar-powered, automated smart post office branch in Kochi.",
    whatHappened: "India Post inaugurated its first net-zero, solar-powered automated post office branch in Kochi, Kerala. The facility features robotic letter sorting, solar energy battery backups, and automated parcel lockers operating 24/7.",
    importantPoints: [
      "First net-zero, solar-powered automated post office branch.",
      "Located in Kochi, Kerala.",
      "Features robotic sorting and 24/7 automated parcel lockers."
    ],
    examFacts: ["Facility: Solar-Powered Automated Post Office", "Location: Kochi, Kerala"],
    quickRemember: "India Post opened its first fully solar-powered automated post office in Kochi.",
    audioText: "India Post commissioned its first fully solar-powered automated post office branch in Kochi, Kerala.",
    source: "Ministry of Communications", importantFor: ["SSC CGL", "SSC CHSL"]
  },
  {
    id: "REC-JUN-044", date: "2026-06-04", month: "Jun 2026", category: "International Affairs",
    title: "India and France Sign Defence Space Working Group Agreement",
    summary: "New Delhi and Paris signed an institutional framework agreement to formalize the Defence Space Working Group.",
    whatHappened: "India and France formally executed a bilateral institutional framework agreement to establish the Joint Defence Space Working Group, strengthening strategic cooperation in satellite surveillance, orbital situational awareness, and space defence exercises.",
    importantPoints: [
      "Bilateral agreement creating the Joint Defence Space Working Group.",
      "Signed between India and France.",
      "Focuses on satellite surveillance and space defence cooperation."
    ],
    examFacts: ["Partners: India and France", "Framework: Defence Space Working Group"],
    quickRemember: "India and France signed an agreement to establish a Joint Defence Space Working Group.",
    audioText: "India and France signed an institutional agreement to establish the Joint Defence Space Working Group.",
    source: "MEA", importantFor: ["UPSC", "CDS", "SSC CGL"]
  },
  {
    id: "REC-JUN-045", date: "2026-06-05", month: "Jun 2026", category: "Environment & Forestry",
    title: "Ministry of Environment Launches 'Green Corridor Index' for National Highways",
    summary: "MoEFCC and NHAI unveiled the Green Corridor Index to audit ecological preservation along expressways.",
    whatHappened: "The Ministry of Environment, Forest and Climate Change (MoEFCC), in partnership with NHAI, launched the 'Green Corridor Index'. The metric system evaluates highway projects based on native tree survival rates, wildlife crossing structures, and carbon offset metrics.",
    importantPoints: [
      "Green Corridor Index launched jointly by MoEFCC and NHAI.",
      "Audits ecological preservation along national highways and expressways.",
      "Evaluates native tree survival and wildlife crossing passages."
    ],
    examFacts: ["Index: Green Corridor Index", "Collaborators: MoEFCC and NHAI"],
    quickRemember: "MoEFCC and NHAI launched the Green Corridor Index to audit ecological health along highways.",
    audioText: "The Environment Ministry and NHAI unveiled the Green Corridor Index to audit ecological preservation along highways.",
    source: "MoEFCC", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-JUN-046", date: "2026-06-08", month: "Jun 2026", category: "Science & Technology",
    title: "IISc Bengaluru Develops Ultra-Efficient Perovskite Solar Cells",
    summary: "Researchers at IISc Bengaluru engineered stable perovskite solar cells achieving 26.4% tandem efficiency.",
    whatHappened: "Scientists at the Indian Institute of Science (IISc) Bengaluru successfully engineered a novel lead-free interface layer that prevents thermal degradation in perovskite-silicon tandem solar cells, pushing laboratory conversion efficiency to 26.4%.",
    importantPoints: [
      "Perovskite-silicon tandem solar cells developed by IISc Bengaluru.",
      "Achieved a laboratory conversion efficiency of 26.4%.",
      "Solves long-standing stability and thermal degradation challenges."
    ],
    examFacts: ["Efficiency: 26.4%", "Institute: IISc Bengaluru", "Technology: Perovskite Solar Cells"],
    quickRemember: "IISc Bengaluru developed perovskite solar cells achieving a tandem efficiency of 26.4%.",
    audioText: "Scientists at IISc Bengaluru engineered perovskite solar cells achieving a high conversion efficiency of 26.4 percent.",
    source: "IISc", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-JUN-047", date: "2026-06-09", month: "Jun 2026", category: "Economy & Banking",
    title: "RBI Introduces Automated Centralized KYC Registry for MSMEs",
    summary: "The Reserve Bank of India launched an automated Centralized KYC Registry specifically tailored for MSME borrowers.",
    whatHappened: "The Reserve Bank of India (RBI) launched a centralized, automated Know Your Customer (KYC) registry tailored for Micro, Small, and Medium Enterprises (MSMEs), allowing commercial banks to instantly verify corporate credentials and reduce onboarding friction.",
    importantPoints: [
      "Centralized automated KYC registry for MSME borrowers.",
      "Introduced by the Reserve Bank of India (RBI).",
      "Reduces corporate loan onboarding time and document verification friction."
    ],
    examFacts: ["Regulator: RBI", "Target Sector: MSME Borrowers", "System: Centralized KYC Registry"],
    quickRemember: "The RBI launched an automated Centralized KYC Registry for MSME borrowers.",
    audioText: "The Reserve Bank of India introduced a centralized automated KYC registry specifically for MSME borrowers.",
    source: "RBI", importantFor: ["Bank PO", "SSC CGL"]
  },
  {
    id: "REC-JUN-048", date: "2026-06-10", month: "Jun 2026", category: "Government Schemes",
    title: "Ministry of Tribal Affairs Expands 'Adi Gram' Digital Village Initiative",
    summary: "MoTA expanded the 'Adi Gram' initiative to connect 5,000 remote tribal habitations with high-speed fiber internet.",
    whatHappened: "The Ministry of Tribal Affairs (MoTA) announced the expansion of the 'Adi Gram' digital village initiative, targeting the integration of 5,000 remote tribal habitations with high-speed broadband, digital health kiosks, and e-learning classrooms.",
    importantPoints: [
      "Expansion of the 'Adi Gram' digital village initiative by MoTA.",
      "Targets 5,000 remote tribal habitations.",
      "Provides broadband internet, digital health kiosks, and e-learning tools."
    ],
    examFacts: ["Initiative: Adi Gram", "Ministry: Ministry of Tribal Affairs", "Target: 5,000 Habitations"],
    quickRemember: "MoTA expanded the 'Adi Gram' initiative to bring broadband internet to 5,000 tribal habitations.",
    audioText: "The Ministry of Tribal Affairs expanded the Adi Gram digital village initiative to connect five thousand tribal habitations.",
    source: "Ministry of Tribal Affairs", importantFor: ["SSC CGL", "State PCS"]
  },
  {
    id: "REC-JUN-049", date: "2026-06-11", month: "Jun 2026", category: "Defence & Aerospace",
    title: "HAL Delivers First Indigenous Light Utility Helicopter Squadron Variant",
    summary: "Hindustan Aeronautics Limited handed over the first batch of serial-production Light Utility Helicopters (LUH).",
    whatHappened: "Hindustan Aeronautics Limited (HAL) formally handed over the first batch of serial-production Light Utility Helicopters (LUH) to the Indian Armed Forces during ceremonies at its Bengaluru manufacturing complex, replacing aging Cheetah and Chetak fleets.",
    importantPoints: [
      "HAL delivered the first batch of serial-production LUHs.",
      "Light Utility Helicopters replace aging Cheetah and Chetak fleets.",
      "Manufactured in Bengaluru."
    ],
    examFacts: ["Manufacturer: HAL Bengaluru", "Aircraft: Light Utility Helicopter (LUH)"],
    quickRemember: "HAL delivered the first batch of indigenous Light Utility Helicopters to the armed forces.",
    audioText: "HAL handed over the first batch of serial-production Light Utility Helicopters to the Indian Armed Forces.",
    source: "HAL", importantFor: ["CDS", "SSC CGL"]
  },
  {
    id: "REC-JUN-050", date: "2026-06-12", month: "Jun 2026", category: "Sports & Athletics",
    title: "Neeraj Chopra Wins Gold at Ostrava Golden Spike 2026",
    summary: "Olympic champion Neeraj Chopra clinched the javelin throw gold medal at the Ostrava Golden Spike meeting.",
    whatHappened: "Star Indian javelin thrower Neeraj Chopra secured the gold medal at the prestigious Ostrava Golden Spike 2026 athletics meet in the Czech Republic, recording a massive throw of 89.34 metres against an elite international field.",
    importantPoints: [
      "Neeraj Chopra won gold at the Ostrava Golden Spike 2026 meet.",
      "Sport: Javelin Throw.",
      "Recorded a winning throw of 89.34 metres in the Czech Republic."
    ],
    examFacts: ["Athlete: Neeraj Chopra", "Sport: Javelin", "Distance: 89.34m", "Event: Ostrava Golden Spike"],
    quickRemember: "Neeraj Chopra won the javelin gold medal at the Ostrava Golden Spike 2026 meeting.",
    audioText: "Olympic champion Neeraj Chopra won the javelin throw gold medal at the Ostrava Golden Spike meeting in the Czech Republic.",
    source: "World Athletics", importantFor: ["SSC CGL", "SSC CHSL"]
  },
  {
    id: "REC-JUN-051", date: "2026-06-15", month: "Jun 2026", category: "Science & Technology",
    title: "India Launches First National Quantum Cryptography Testbed in Bengaluru",
    summary: "A quantum cryptography testbed linking three research institutions was commissioned in Bengaluru.",
    whatHappened: "The Ministry of Science and Technology commissioned India's first multi-node National Quantum Cryptography Testbed (NQCT) across three key research installations in Bengaluru, enabling real-world trials of unhackable quantum secret sharing.",
    importantPoints: [
      "First multi-node National Quantum Cryptography Testbed (NQCT) commissioned.",
      "Located in Bengaluru connecting three research institutions.",
      "Tests unhackable quantum secret sharing and QKD protocols."
    ],
    examFacts: ["Facility: NQCT Testbed", "City: Bengaluru", "Focus: Quantum Cryptography"],
    quickRemember: "India's first National Quantum Cryptography Testbed was commissioned in Bengaluru.",
    audioText: "India's first multi-node National Quantum Cryptography Testbed was commissioned across research institutions in Bengaluru.",
    source: "Department of Science and Technology", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-JUN-052", date: "2026-06-16", month: "Jun 2026", category: "Economy & Infrastructure",
    title: "Inauguration of India's Longest Cable-Stayed Bridge in Gujarat",
    summary: "Prime Minister Modi inaugurated the Narmada Cable-Stayed Bridge connecting Bharuch and Ankleshwar.",
    whatHappened: "Prime Minister Narendra Modi inaugurated India's longest cable-stayed bridge spanning the Narmada River between Bharuch and Ankleshwar in Gujarat. The 2.1-kilometer engineering marvel drastically eases traffic congestion along National Highway 48.",
    importantPoints: [
      "India's longest cable-stayed bridge inaugurated over the Narmada River.",
      "Connects Bharuch and Ankleshwar in Gujarat.",
      "Spans 2.1 kilometers along National Highway 48."
    ],
    examFacts: ["Bridge: Narmada Cable-Stayed Bridge", "Length: 2.1 km", "Location: Bharuch-Ankleshwar, Gujarat"],
    quickRemember: "India's longest cable-stayed bridge over the Narmada River was inaugurated in Gujarat.",
    audioText: "Prime Minister Modi inaugurated India's longest cable-stayed bridge spanning the Narmada River in Gujarat.",
    source: "MoRTH", importantFor: ["SSC CGL", "RRB NTPC"]
  },
  {
    id: "REC-JUN-053", date: "2026-06-17", month: "Jun 2026", category: "Environment & Wildlife",
    title: "Sunderbans Tiger Reserve Declared India's First Carbon-Neutral Wildlife Sanctuary",
    summary: "Official audits confirmed that Sunderbans Tiger Reserve achieved a net-zero carbon footprint.",
    whatHappened: "The Ministry of Environment announced that the Sunderbans Tiger Reserve in West Bengal has officially attained carbon-neutral status, validated by extensive mangrove carbon sequestration accounting, solar micro-grids, and electric patrol vessels.",
    importantPoints: [
      "Sunderbans Tiger Reserve declared India's first carbon-neutral sanctuary.",
      "Located in West Bengal.",
      "Validated through mangrove carbon sequestration and solar-powered patrol vessels."
    ],
    examFacts: ["Sanctuary: Sunderbans Tiger Reserve", "State: West Bengal", "Status: Carbon-Neutral"],
    quickRemember: "The Sunderbans Tiger Reserve was declared India's first carbon-neutral wildlife sanctuary.",
    audioText: "The Sunderbans Tiger Reserve in West Bengal was officially declared India's first carbon-neutral wildlife sanctuary.",
    source: "MoEFCC", importantFor: ["SSC CGL", "State PCS", "UPSC"]
  },
  {
    id: "REC-JUN-054", date: "2026-06-18", month: "Jun 2026", category: "International Affairs",
    title: "India Elected to UN Economic and Social Council (ECOSOC)",
    summary: "India secured an overwhelming majority to serve another three-year term on the United Nations ECOSOC.",
    whatHappened: "India was successfully elected to the United Nations Economic and Social Council (ECOSOC) for the 2027–2029 term during elections held at the UN General Assembly in New York, garnering strong cross-regional support.",
    importantPoints: [
      "India elected to the UN Economic and Social Council (ECOSOC).",
      "Term spans 2027–2029.",
      "Elected via a strong majority vote at the UN General Assembly."
    ],
    examFacts: ["Body: UN ECOSOC", "Term: 2027–2029"],
    quickRemember: "India was elected to the United Nations Economic and Social Council for the 2027–2029 term.",
    audioText: "India was elected to the United Nations Economic and Social Council for a three-year term.",
    source: "MEA", importantFor: ["UPSC", "SSC CGL"]
  },
  {
    id: "REC-JUN-055", date: "2026-06-19", month: "Jun 2026", category: "Health & Biotechnology",
    title: "ICMR Launches National Rare Disease Diagnostic and Treatment Registry",
    summary: "ICMR operationalized a centralized registry to track rare disease incidence and manage specialized funding.",
    whatHappened: "The Indian Council of Medical Research (ICMR) operationalized the National Rare Disease Registry. The platform aggregates clinical data across 30 tertiary care hospitals to support epidemiological tracking and streamline financial aid under the National Policy for Rare Diseases.",
    importantPoints: [
      "National Rare Disease Registry operationalized by ICMR.",
      "Aggregates clinical data across 30 tertiary care hospitals.",
      "Tracks rare disease incidence and streamlines financial aid distribution."
    ],
    examFacts: ["Agency: ICMR", "Registry: National Rare Disease Registry"],
    quickRemember: "ICMR launched the National Rare Disease Registry to track incidence and streamline treatment funding.",
    audioText: "The Indian Council of Medical Research operationalized a centralized registry to track rare diseases and manage treatment funding.",
    source: "ICMR", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-JUN-056", date: "2026-06-22", month: "Jun 2026", category: "Economy & Trade",
    title: "India Signs Comprehensive Digital Trade Pact with Singapore",
    summary: "New Delhi and Singapore executed a bilateral Digital Trade Agreement (DTA) focusing on paperless cross-border commerce.",
    whatHappened: "India and Singapore signed a bilateral Digital Trade Agreement (DTA) in Singapore. The agreement establishes interoperable frameworks for electronic invoicing, cross-border data flows, and regulatory sandboxes for fintech innovations.",
    importantPoints: [
      "Bilateral Digital Trade Agreement (DTA) signed between India and Singapore.",
      "Establishes interoperable e-invoicing and cross-border data frameworks.",
      "Features regulatory sandboxes for fintech collaboration."
    ],
    examFacts: ["Partner Country: Singapore", "Agreement: Digital Trade Agreement (DTA)"],
    quickRemember: "India and Singapore signed a comprehensive Digital Trade Agreement for paperless commerce.",
    audioText: "India and Singapore signed a bilateral Digital Trade Agreement focusing on paperless cross-border commerce.",
    source: "Ministry of Commerce", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-JUN-057", date: "2026-06-23", month: "Jun 2026", category: "Science & Space",
    title: "ISRO Successfully Conducts Reusable Launch Vehicle Landing Experiment (RLV-LEX-03)",
    summary: "ISRO completed the third consecutive autonomous landing experiment for its reusable space vehicle program.",
    whatHappened: "ISRO successfully executed the third autonomous Landing Experiment (RLV-LEX-03) for its Reusable Launch Vehicle (RLV) program at the Chitradurga Aeronautical Test Range in Karnataka, validating high-speed crosswind landing accuracy.",
    importantPoints: [
      "RLV-LEX-03 autonomous landing experiment successfully conducted by ISRO.",
      "Held at the Chitradurga Aeronautical Test Range, Karnataka.",
      "Validates high-speed autonomous crosswind landing capabilities."
    ],
    examFacts: ["Experiment: RLV-LEX-03", "Test Range: Chitradurga, Karnataka", "Agency: ISRO"],
    quickRemember: "ISRO successfully conducted the RLV-LEX-03 autonomous landing experiment in Chitradurga.",
    audioText: "ISRO successfully conducted the third autonomous landing experiment for its reusable launch vehicle program in Karnataka.",
    source: "ISRO", importantFor: ["SSC CGL", "UPSC", "CDS"]
  },
  {
    id: "REC-JUN-058", date: "2026-06-24", month: "Jun 2026", category: "Environment & Energy",
    title: "India Commissioned World's Largest Floating Solar Park Phase-2",
    summary: "Phase-2 of the Omkareshwar Floating Solar Park in Madhya Pradesh achieved full operational capacity.",
    whatHappened: "The second phase of the Omkareshwar Floating Solar Park on the Narmada River in Madhya Pradesh achieved full commercial operation, expanding the cumulative floating solar plant capacity to 600 MW across the backwaters.",
    importantPoints: [
      "Phase-2 of Omkareshwar Floating Solar Park achieved full operation.",
      "Located on the Narmada River in Madhya Pradesh.",
      "Brings cumulative capacity to 600 MW."
    ],
    examFacts: ["Project: Omkareshwar Floating Solar Park (Phase-2)", "State: Madhya Pradesh", "Capacity: 600 MW"],
    quickRemember: "Phase-2 of the Omkareshwar Floating Solar Park in Madhya Pradesh became fully operational.",
    audioText: "The second phase of the Omkareshwar Floating Solar Park in Madhya Pradesh achieved full commercial operation.",
    source: "Ministry of New and Renewable Energy", importantFor: ["SSC CGL", "State PCS"]
  },
  {
    id: "REC-JUN-059", date: "2026-06-25", month: "Jun 2026", category: "National Security",
    title: "Ministry of Home Affairs Launches National Cyber Crime Threat Analytics Unit",
    summary: "MHA inaugurated a centralized threat analytics unit to proactively neutralize cyber fraud syndicates.",
    whatHappened: "Union Home Minister Amit Shah inaugurated the National Cyber Crime Threat Analytics Unit (NCTAU) under the Indian Cyber Crime Coordination Centre (I4C) in New Delhi, deploying AI-driven threat intelligence to dismantle digital financial fraud rings.",
    importantPoints: [
      "National Cyber Crime Threat Analytics Unit (NCTAU) inaugurated by MHA.",
      "Operates under the Indian Cyber Crime Coordination Centre (I4C).",
      "Deploys AI threat intelligence to dismantle financial fraud rings."
    ],
    examFacts: ["Unit: NCTAU", "Parent Body: I4C (MHA)", "Location: New Delhi"],
    quickRemember: "MHA inaugurated the National Cyber Crime Threat Analytics Unit (NCTAU) in New Delhi.",
    audioText: "The Home Ministry inaugurated the National Cyber Crime Threat Analytics Unit to neutralize digital fraud rings.",
    source: "Ministry of Home Affairs", importantFor: ["SSC CGL", "UPSC", "CDS"]
  },
  {
    id: "REC-JUN-060", date: "2026-06-26", month: "Jun 2026", category: "Economy & Agriculture",
    title: "NABARD Approves ₹15,000 Crore Rural Infrastructure Development Fund Allocation",
    summary: "NABARD sanctioned ₹15,000 crore under RIDF to upgrade rural irrigation and warehousing infrastructure.",
    whatHappened: "The National Bank for Agriculture and Rural Development (NABARD) approved a massive ₹15,000 crore allocation under the Rural Infrastructure Development Fund (RIDF) to accelerate state-level irrigation projects, rural connectivity, and agricultural storage cold chains.",
    importantPoints: [
      "NABARD approved ₹15,000 crore under the RIDF.",
      "Targets rural irrigation, all-weather connectivity, and agricultural cold chains.",
      "Aims to strengthen grassroots agricultural supply chains."
    ],
    examFacts: ["Institution: NABARD", "Fund: RIDF", "Allocation: ₹15,000 Crore"],
    quickRemember: "NABARD approved ₹15,000 crore under the RIDF to upgrade rural irrigation and storage infrastructure.",
    audioText: "NABARD approved a fifteen thousand crore rupee allocation under the Rural Infrastructure Development Fund.",
    source: "NABARD", importantFor: ["Bank PO", "SSC CGL", "UPSC"]
  }
];

const junRecallQuestionsBatch3 = [
  {
    id: "REC-Q-JUN-041", articleId: "REC-JUN-041", category: "Defence & Aerospace",
    question: "The DRDO successfully completed user-evaluation flight trials of an advanced variant of which anti-radiation missile from a Sukhoi-30 MKI?",
    options: ["Astra", "RudraM", "Helina", "Prithvi-III"],
    answer: 1, explanation: "DRDO flight-tested an upgraded variant of the RudraM anti-radiation missile from a Su-30 MKI fighter jet."
  },
  {
    id: "REC-Q-JUN-042", articleId: "REC-JUN-042", category: "Science & Technology",
    question: "Which research institution developed a rapid CRISPR-Cas diagnostic kit targeting congenital single-gene disorders from dried blood spots?",
    options: ["AIIMS New Delhi", "CSIR-CCMB Hyderabad", "IISc Bengaluru", "ICMR-NARI Pune"],
    answer: 1, explanation: "Scientists at CSIR-CCMB Hyderabad engineered a rapid CRISPR-Cas diagnostic platform for congenital single-gene disorders."
  },
  {
    id: "REC-Q-JUN-043", articleId: "REC-JUN-043", category: "Economy & Infrastructure",
    question: "India Post inaugurated its first net-zero, solar-powered automated post office branch in which city?",
    options: ["Bengaluru", "Kochi", "Chennai", "Mysuru"],
    answer: 1, explanation: "India Post commissioned its first fully solar-powered automated smart post office branch in Kochi, Kerala."
  },
  {
    id: "REC-Q-JUN-044", articleId: "REC-JUN-044", category: "International Affairs",
    question: "India and France signed an institutional framework agreement to establish which joint working group to strengthen space defence cooperation?",
    options: ["Joint Defence Space Working Group", "Indo-French Orbital Security Cell", "Strategic Space Taskforce", "Aero-Space Coalition Board"],
    answer: 0, explanation: "India and France established the Joint Defence Space Working Group to formalize space defence cooperation."
  },
  {
    id: "REC-Q-JUN-045", articleId: "REC-JUN-045", category: "Environment & Forestry",
    question: "The MoEFCC and NHAI launched the 'Green Corridor Index' to audit what aspect of national highway projects?",
    options: ["Solar power generation potential along medians", "Ecological preservation, tree survival, and wildlife crossings", "Electric vehicle charging station density", "Rainwater harvesting pit functionality"],
    answer: 1, explanation: "The Green Corridor Index evaluates highway projects based on native tree survival rates and wildlife crossing structures."
  },
  {
    id: "REC-Q-JUN-046", articleId: "REC-JUN-046", category: "Science & Technology",
    question: "Researchers at IISc Bengaluru engineered stable perovskite-silicon tandem solar cells achieving a laboratory conversion efficiency of:",
    options: ["22.1%", "24.5%", "26.4%", "28.9%"],
    answer: 2, explanation: "IISc Bengaluru successfully engineered perovskite solar cells pushing laboratory conversion efficiency to 26.4%."
  },
  {
    id: "REC-Q-JUN-047", articleId: "REC-JUN-047", category: "Economy & Banking",
    question: "The Reserve Bank of India launched an automated Centralized KYC Registry specifically tailored for which borrower category?",
    options: ["Retail housing loan applicants", "MSME borrowers", "Agricultural tractor buyers", "Microfinance self-help groups"],
    answer: 1, explanation: "The RBI launched a centralized automated KYC registry tailored for Micro, Small, and Medium Enterprises (MSMEs)."
  },
  {
    id: "REC-Q-JUN-048", articleId: "REC-JUN-048", category: "Government Schemes",
    question: "The Ministry of Tribal Affairs (MoTA) expanded the 'Adi Gram' initiative to connect how many remote tribal habitations with high-speed fiber internet?",
    options: ["1,000 habitations", "2,500 habitations", "5,000 habitations", "10,000 habitations"],
    answer: 2, explanation: "MoTA expanded 'Adi Gram' to integrate 5,000 remote tribal habitations with broadband and e-learning facilities."
  },
  {
    id: "REC-Q-JUN-049", articleId: "REC-JUN-049", category: "Defence & Aerospace",
    question: "Hindustan Aeronautics Limited (HAL) handed over the first batch of serial-production Light Utility Helicopters (LUH) manufactured in which city?",
    options: ["Nashik", "Bengaluru", "Hyderabad", "Kanpur"],
    answer: 1, explanation: "HAL handed over the first batch of serial-production LUHs from its manufacturing complex in Bengaluru."
  },
  {
    id: "REC-Q-JUN-050", articleId: "REC-JUN-050", category: "Sports & Athletics",
    question: "Indian javelin thrower Neeraj Chopra won the gold medal at the Ostrava Golden Spike 2026 meeting with a throw of:",
    options: ["85.12 metres", "87.45 metres", "89.34 metres", "91.02 metres"],
    answer: 2, explanation: "Neeraj Chopra secured the javelin gold medal at Ostrava with a throw of 89.34 metres."
  },
  {
    id: "REC-Q-JUN-051", articleId: "REC-JUN-051", category: "Science & Technology",
    question: "India's first multi-node National Quantum Cryptography Testbed (NQCT) was commissioned across research institutions in which city?",
    options: ["New Delhi", "Pune", "Bengaluru", "Hyderabad"],
    answer: 2, explanation: "The National Quantum Cryptography Testbed was commissioned across three research installations in Bengaluru."
  },
  {
    id: "REC-Q-JUN-052", articleId: "REC-JUN-052", category: "Economy & Infrastructure",
    question: "Prime Minister Modi inaugurated India's longest cable-stayed bridge spanning the Narmada River between Bharuch and Ankleshwar in Gujarat. What is its length?",
    options: ["1.2 kilometers", "1.8 kilometers", "2.1 kilometers", "3.5 kilometers"],
    answer: 2, explanation: "The Narmada Cable-Stayed Bridge spans 2.1 kilometers along National Highway 48."
  },
  {
    id: "REC-Q-JUN-053", articleId: "REC-JUN-053", category: "Environment & Wildlife",
    question: "Which wildlife sanctuary was officially declared India's first carbon-neutral wildlife sanctuary through mangrove carbon accounting?",
    options: ["Kaziranga National Park", "Jim Corbett National Park", "Sunderbans Tiger Reserve", "Periyar Wildlife Sanctuary"],
    answer: 2, explanation: "The Sunderbans Tiger Reserve in West Bengal was declared India's first carbon-neutral wildlife sanctuary."
  },
  {
    id: "REC-Q-JUN-054", articleId: "REC-JUN-054", category: "International Affairs",
    question: "India was successfully elected to the United Nations Economic and Social Council (ECOSOC) for which term?",
    options: ["2026–2028", "2027–2029", "2028–2030", "2029–2031"],
    answer: 1, explanation: "India was elected to the UN ECOSOC for the 2027–2029 term at the UN General Assembly."
  },
  {
    id: "REC-Q-JUN-055", articleId: "REC-JUN-055", category: "Health & Biotechnology",
    question: "The Indian Council of Medical Research (ICMR) operationalized the National Rare Disease Registry aggregating clinical data across how many tertiary care hospitals?",
    options: ["10 hospitals", "20 hospitals", "30 hospitals", "50 hospitals"],
    answer: 2, explanation: "The National Rare Disease Registry aggregates clinical data across 30 tertiary care hospitals nationwide."
  },
  {
    id: "REC-Q-JUN-056", articleId: "REC-JUN-056", category: "Economy & Trade",
    question: "India and Singapore signed a bilateral Digital Trade Agreement (DTA) establishing interoperable frameworks for e-invoicing and:",
    options: ["Cryptocurrency exchange liquidity", "Cross-border data flows and fintech regulatory sandboxes", "Maritime freight customs clearance", "Direct satellite communications roaming"],
    answer: 1, explanation: "The Digital Trade Agreement establishes frameworks for electronic invoicing, cross-border data flows, and fintech regulatory sandboxes."
  },
  {
    id: "REC-Q-JUN-057", articleId: "REC-JUN-057", category: "Science & Space",
    question: "ISRO successfully executed the third autonomous Landing Experiment (RLV-LEX-03) at the Chitradurga Aeronautical Test Range located in which state?",
    options: ["Tamil Nadu", "Andhra Pradesh", "Karnataka", "Kerala"],
    answer: 2, explanation: "The RLV-LEX-03 autonomous landing experiment was conducted at the Chitradurga Aeronautical Test Range in Karnataka."
  },
  {
    id: "REC-Q-JUN-058", articleId: "REC-JUN-058", category: "Environment & Energy",
    question: "Phase-2 of the Omkareshwar Floating Solar Park on the Narmada River in Madhya Pradesh brought its cumulative capacity to:",
    options: ["250 MW", "400 MW", "600 MW", "1,000 MW"],
    answer: 2, explanation: "Phase-2 expansion brought the cumulative capacity of the Omkareshwar Floating Solar Park to 600 MW."
  },
  {
    id: "REC-Q-JUN-059", articleId: "REC-JUN-059", category: "National Security",
    question: "Union Home Minister Amit Shah inaugurated the National Cyber Crime Threat Analytics Unit (NCTAU) under which overarching organization in New Delhi?",
    options: ["National Investigation Agency (NIA)", "Indian Cyber Crime Coordination Centre (I4C)", "National Technical Research Organisation (NTRO)", "Central Bureau of Investigation (CBI)"],
    answer: 1, explanation: "The NCTAU was inaugurated under the Indian Cyber Crime Coordination Centre (I4C) in New Delhi to neutralize financial fraud syndicates."
  },
  {
    id: "REC-Q-JUN-060", articleId: "REC-JUN-060", category: "Economy & Agriculture",
    question: "NABARD approved a ₹15,000 crore allocation under the Rural Infrastructure Development Fund (RIDF) primarily to upgrade:",
    options: ["Rural irrigation, connectivity, and agricultural storage", "Digital banking kiosks in gram panchayats", "Solar-powered cold-storage solar grids", "Handloom weaver cooperative factories"],
    answer: 0, explanation: "NABARD's ₹15,000 crore RIDF allocation targets state irrigation projects, rural connectivity, and agricultural storage infrastructure."
  }
];

// 👉 PUSH DATA INTO GLOBAL ARRAYS
if (typeof hiddenRecallArticles !== 'undefined') {
  hiddenRecallArticles.push(...junRecallArticlesBatch3);
}
if (typeof recallQuestionPool !== 'undefined') {
  recallQuestionPool.push(...junRecallQuestionsBatch3);
}

/* ==========================================================================
   END OF JUNE BATCH 3
   ========================================================================== */


/* ==========================================================================
   JUNE 2026 - BATCH 4 (ITEMS 061 TO 080)
   ========================================================================== */

const junRecallArticlesBatch4 = [
  {
    id: "REC-JUN-061", date: "2026-06-01", month: "Jun 2026", category: "Science & Technology",
    title: "CSIR-IICT Develops Sustainable Bio-Aviation Fuel",
    summary: "CSIR-IICT successfully produced sustainable aviation fuel (SAF) from non-edible plant oils.",
    whatHappened: "The CSIR-Indian Institute of Chemical Technology (IICT) successfully scaled up the production of Sustainable Aviation Fuel (SAF) derived from non-edible used cooking oil and plant seeds, meeting stringent international jet fuel standards.",
    importantPoints: [
      "Sustainable Aviation Fuel (SAF) developed by CSIR-IICT.",
      "Derived from non-edible cooking oils and plant seeds.",
      "Meets international aviation fuel standards for lower carbon footprints."
    ],
    examFacts: ["Institution: CSIR-IICT Hyderabad", "Innovation: Sustainable Aviation Fuel"],
    quickRemember: "CSIR-IICT developed sustainable aviation fuel from non-edible oils.",
    audioText: "CSIR-IICT successfully produced sustainable aviation fuel from non-edible plant oils and used cooking oils.",
    source: "CSIR", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-JUN-062", date: "2026-06-02", month: "Jun 2026", category: "Economy & Infrastructure",
    title: "Inauguration of India's First Automated Multi-Modal Logistics Hub in Noida",
    summary: "A modern automated multi-modal logistics hub was inaugurated in Greater Noida to streamline cargo.",
    whatHappened: "The Ministry of Commerce and Industry inaugurated an advanced automated multi-modal logistics hub in Greater Noida, Uttar Pradesh, featuring automated container stacking and direct rail freight sidings.",
    importantPoints: [
      "Automated multi-modal logistics hub inaugurated in Greater Noida.",
      "Features automated container stacking and rail freight sidings.",
      "Reduces logistics costs across the National Capital Region."
    ],
    examFacts: ["Facility: Multi-Modal Logistics Hub", "Location: Greater Noida, UP"],
    quickRemember: "An automated multi-modal logistics hub was inaugurated in Greater Noida.",
    audioText: "An automated multi-modal logistics hub was inaugurated in Greater Noida to streamline cargo movement.",
    source: "Ministry of Commerce", importantFor: ["SSC CGL", "RRB NTPC"]
  },
  {
    id: "REC-JUN-063", date: "2026-06-03", month: "Jun 2026", category: "Environment & Wildlife",
    title: "New Fresh Water Crab Species Discovered in Western Ghats",
    summary: "A new freshwater crab species, *Ghatiana atropurpurea*, was discovered in the southern Western Ghats.",
    whatHappened: "Wildlife researchers formally described a new species of freshwater crab, named *Ghatiana atropurpurea*, discovered in the fast-flowing streams of the southern Western Ghats, highlighting the region's rich endemic biodiversity.",
    importantPoints: [
      "New freshwater crab species named *Ghatiana atropurpurea*.",
      "Discovered in the Western Ghats.",
      "Endemic freshwater species highlighting regional biodiversity."
    ],
    examFacts: ["Species: Ghatiana atropurpurea", "Location: Western Ghats"],
    quickRemember: "A new freshwater crab species, Ghatiana atropurpurea, was discovered in the Western Ghats.",
    audioText: "Researchers discovered a new freshwater crab species named Ghatiana atropurpurea in the Western Ghats.",
    source: "Zoological Survey of India", importantFor: ["SSC CGL", "State PCS"]
  },
  {
    id: "REC-JUN-064", date: "2026-06-04", month: "Jun 2026", category: "Defence & Aerospace",
    title: "DRDO Successfully Test Fires Extended-Range Pinaka Rocket",
    summary: "DRDO completed developmental flight trials of the extended-range Pinaka Mk-II rocket system.",
    whatHappened: "The Defence Research and Development Organisation (DRDO) successfully test-fired the extended-range Pinaka Mk-II multi-barrel rocket launcher system from a test range in Pokhran, Rajasthan, achieving pin-point accuracy at extended distances.",
    importantPoints: [
      "Successful test flight of the extended-range Pinaka Mk-II rocket.",
      "Conducted at Pokhran, Rajasthan.",
      "Enhances artillery firepower and range."
    ],
    examFacts: ["Weapon: Pinaka Mk-II Extended-Range", "Agency: DRDO", "Test Site: Pokhran"],
    quickRemember: "DRDO successfully test-fired the extended-range Pinaka Mk-II rocket system in Pokhran.",
    audioText: "DRDO successfully test-fired the extended-range Pinaka rocket system from Pokhran in Rajasthan.",
    source: "Ministry of Defence", importantFor: ["CDS", "SSC CGL"]
  },
  {
    id: "REC-JUN-065", date: "2026-06-05", month: "Jun 2026", category: "Government Schemes",
    title: "Ministry of Education Launches 'Vidya Samiksha Kendra 2.0'",
    summary: "The Ministry of Education upgraded its data analytics framework with Vidya Samiksha Kendra 2.0.",
    whatHappened: "The Ministry of Education rolled out 'Vidya Samiksha Kendra 2.0', an advanced cloud-based command and control center portal designed to monitor school attendance, learning outcomes, and teacher deployment metrics nationwide in real time.",
    importantPoints: [
      "Vidya Samiksha Kendra 2.0 launched by the Ministry of Education.",
      "Cloud-based command and control center for school education.",
      "Monitors real-time student attendance and learning outcomes."
    ],
    examFacts: ["Platform: Vidya Samiksha Kendra 2.0", "Ministry: Ministry of Education"],
    quickRemember: "The Ministry of Education launched Vidya Samiksha Kendra 2.0 for real-time school analytics.",
    audioText: "The Education Ministry launched Vidya Samiksha Kendra 2.0 to monitor school attendance and learning outcomes in real time.",
    source: "Ministry of Education", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-JUN-066", date: "2026-06-08", month: "Jun 2026", category: "Economy & Banking",
    title: "RBI Directs Banks to Implement Core Banking Upgrades for Cyber Resilience",
    summary: "The RBI mandated strict technology upgrades across core banking systems to prevent service outages.",
    whatHappened: "The Reserve Bank of India (RBI) issued a binding directive requiring all scheduled commercial banks to complete mandatory core banking system (CBS) architectural upgrades and failover redundancy protocols to prevent digital service outages.",
    importantPoints: [
      "RBI directive for core banking system (CBS) upgrades.",
      "Mandates failover redundancy protocols to prevent outages.",
      "Enforces strict tech resilience standards across commercial banks."
    ],
    examFacts: ["Regulator: RBI", "Focus: Core Banking Cyber Resilience"],
    quickRemember: "The RBI mandated core banking system upgrades and failover protocols for commercial banks.",
    audioText: "The Reserve Bank of India directed commercial banks to implement strict core banking upgrades for cyber resilience.",
    source: "RBI", importantFor: ["Bank PO", "SSC CGL"]
  },
  {
    id: "REC-JUN-067", date: "2026-06-09", month: "Jun 2026", category: "Science & Space",
    title: "ISRO Completes Static Test of Vikas Engine for Gaganyaan",
    summary: "ISRO successfully conducted a long-duration static firing test of the Vikas liquid rocket engine.",
    whatHappened: "ISRO successfully completed a crucial long-duration hot test of the Vikas liquid rocket engine at the Propulsion Complex in Mahendragiri, validating its performance reliability parameters for upcoming crewed Gaganyaan flight configurations.",
    importantPoints: [
      "Long-duration static hot test of the Vikas rocket engine.",
      "Conducted at IPRC Mahendragiri, Tamil Nadu.",
      "Validates reliability metrics for the human-rated Gaganyaan program."
    ],
    examFacts: ["Engine: Vikas Liquid Engine", "Mission: Gaganyaan", "Test Site: Mahendragiri"],
    quickRemember: "ISRO successfully completed a long-duration static test of the Vikas engine for Gaganyaan.",
    audioText: "ISRO successfully completed a long-duration static firing test of the Vikas liquid rocket engine at Mahendragiri.",
    source: "ISRO", importantFor: ["SSC CGL", "CDS", "UPSC"]
  },
  {
    id: "REC-JUN-068", date: "2026-06-10", month: "Jun 2026", category: "International Affairs",
    title: "India and Australia Sign Clean Energy Technology Partnership",
    summary: "New Delhi and Canberra executed a formal bilateral framework for joint critical clean energy research.",
    whatHappened: "India and Australia signed a bilateral Clean Energy Technology Partnership agreement in Canberra, committing funds toward joint research in solar PV manufacturing, green hydrogen catalysts, and grid battery storage solutions.",
    importantPoints: [
      "Clean Energy Technology Partnership signed between India and Australia.",
      "Focuses on joint research in solar PV, green hydrogen, and battery storage.",
      "Signed during high-level bilateral talks in Canberra."
    ],
    examFacts: ["Partners: India and Australia", "Agreement: Clean Energy Technology Partnership"],
    quickRemember: "India and Australia signed a Clean Energy Technology Partnership agreement.",
    audioText: "India and Australia signed a Clean Energy Technology Partnership agreement to advance joint research in green energy.",
    source: "MEA", importantFor: ["UPSC", "SSC CGL"]
  },
  {
    id: "REC-JUN-069", date: "2026-06-11", month: "Jun 2026", category: "Environment & Forests",
    title: "MoEFCC Releases State of Forest Fire Report",
    summary: "The Environment Ministry published a comprehensive analytical report tracking seasonal forest fire incidents.",
    whatHappened: "The Ministry of Environment, Forest and Climate Change released an advanced analytical report tracking seasonal forest fire occurrences across various states, highlighting automated satellite alert integrations and community-led firefighting readiness.",
    importantPoints: [
      "State of Forest Fire report published by MoEFCC.",
      "Highlights satellite-based real-time fire alert integrations.",
      "Emphasizes local community-led firefighting readiness."
    ],
    examFacts: ["Publisher: MoEFCC", "Report: Forest Fire Analytics"],
    quickRemember: "The Environment Ministry released an analytical report tracking forest fire incidents and satellite alerts.",
    audioText: "The Environment Ministry published a comprehensive report tracking seasonal forest fire incidents and satellite alerts.",
    source: "MoEFCC", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-JUN-070", date: "2026-06-12", month: "Jun 2026", category: "Sports & Athletics",
    title: "Aman Sehrawat Wins Gold at international Ranking Wrestling Series",
    summary: "Indian wrestler Aman Sehrawat clinched the gold medal at an international ranking series tournament.",
    whatHappened: "Ace Indian wrestler Aman Sehrawat put up a stellar performance to secure the gold medal in his weight category at the international ranking wrestling series, cementing his status as a top contender for upcoming global championships.",
    importantPoints: [
      "Aman Sehrawat won gold at an international ranking wrestling series.",
      "Sport: Wrestling.",
      "Demonstrated dominant technical superiority over international opponents."
    ],
    examFacts: ["Athlete: Aman Sehrawat", "Sport: Wrestling", "Medal: Gold"],
    quickRemember: "Wrestler Aman Sehrawat won the gold medal at an international ranking series tournament.",
    audioText: "Indian wrestler Aman Sehrawat won the gold medal at an international ranking series tournament.",
    source: "Wrestling Federation of India", importantFor: ["SSC CGL", "SSC CHSL"]
  },
  {
    id: "REC-JUN-071", date: "2026-06-15", month: "Jun 2026", category: "Science & Technology",
    title: "IIT Kharagpur Develops Low-Cost Arsenic Water Purifier",
    summary: "Engineers at IIT Kharagpur engineered a sustainable nanomaterial filter for arsenic removal in groundwater.",
    whatHappened: "Researchers at IIT Kharagpur developed an affordable, durable water purification unit using indigenous manganese-coated nanoadsorbents capable of filtering toxic arsenic out of groundwater wells in affected eastern river basins.",
    importantPoints: [
      "Low-cost water purification unit developed by IIT Kharagpur.",
      "Uses manganese-coated nanoadsorbents to remove groundwater arsenic.",
      "Aims to solve heavy metal contamination in eastern river basins."
    ],
    examFacts: ["Innovation: Arsenic Water Purifier", "Institute: IIT Kharagpur"],
    quickRemember: "IIT Kharagpur developed a low-cost nanomaterial filter to remove arsenic from groundwater.",
    audioText: "Researchers at IIT Kharagpur developed a low-cost water purifier using nanomaterials to remove arsenic from groundwater.",
    source: "IIT Kharagpur", importantFor: ["SSC CGL", "State PCS"]
  },
  {
    id: "REC-JUN-072", date: "2026-06-16", month: "Jun 2026", category: "Economy & Infrastructure",
    title: "Inauguration of New Integrated Terminal Building at Port Blair Airport",
    summary: "A swanky new integrated terminal building was inaugurated at Veer Savarkar International Airport, Port Blair.",
    whatHappened: "A state-of-the-art integrated terminal building was inaugurated at Veer Savarkar International Airport in Port Blair, Andaman and Nicobar Islands, featuring shell-inspired architectural motifs and enhanced passenger handling capacity.",
    importantPoints: [
      "New integrated terminal building inaugurated at Port Blair Airport.",
      "Located at Veer Savarkar International Airport, Andaman and Nicobar Islands.",
      "Boosts regional tourism and passenger handling capacity."
    ],
    examFacts: ["Airport: Veer Savarkar International Airport", "Location: Port Blair"],
    quickRemember: "A new integrated terminal building was inaugurated at Port Blair Airport.",
    audioText: "A new integrated terminal building was inaugurated at Veer Savarkar International Airport in Port Blair.",
    source: "Ministry of Civil Aviation", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-JUN-073", date: "2026-06-17", month: "Jun 2026", category: "International Affairs",
    title: "India Joins Global Partnership on AI Steering Committee",
    summary: "India assumed a premier steering committee seat on the Global Partnership on Artificial Intelligence (GPAI).",
    whatHappened: "India was formally appointed to a prominent seat on the Steering Committee of the Global Partnership on Artificial Intelligence (GPAI), reinforcing its leadership role in shaping safe, responsible, and democratic global AI governance frameworks.",
    importantPoints: [
      "India appointed to the Steering Committee of the GPAI.",
      "Reinforces India's leadership in safe and responsible AI governance.",
      "Focuses on democratic AI standards and ethical frameworks."
    ],
    examFacts: ["Organization: GPAI (Global Partnership on AI)", "Role: Steering Committee Member"],
    quickRemember: "India joined the Steering Committee of the Global Partnership on Artificial Intelligence (GPAI).",
    audioText: "India was appointed to the Steering Committee of the Global Partnership on Artificial Intelligence.",
    source: "Ministry of Electronics and IT", importantFor: ["UPSC", "SSC CGL"]
  },
  {
    id: "REC-JUN-074", date: "2026-06-18", month: "Jun 2026", category: "Government Schemes",
    title: "Ministry of Social Justice Launches 'Nasha Mukt Bharat Abhiyan Portal 2.0'",
    summary: "An upgraded digital dashboard was launched to monitor anti-drug campaign milestones across districts.",
    whatHappened: "The Ministry of Social Justice and Empowerment launched 'Nasha Mukt Bharat Abhiyan Portal 2.0', a data-driven digital platform tracking anti-substance abuse awareness campaigns, rehabilitation center metrics, and youth volunteer sign-ups across all districts.",
    importantPoints: [
      "Launched by the Ministry of Social Justice and Empowerment.",
      "Portal named 'Nasha Mukt Bharat Abhiyan Portal 2.0'.",
      "Tracks anti-drug awareness campaigns and rehabilitation metrics."
    ],
    examFacts: ["Portal: Nasha Mukt Bharat Abhiyan 2.0", "Ministry: Social Justice"],
    quickRemember: "The Social Justice Ministry launched the Nasha Mukt Bharat Abhiyan Portal 2.0 to monitor anti-drug campaigns.",
    audioText: "The Social Justice Ministry launched Portal 2.0 for the Nasha Mukt Bharat Abhiyan to monitor anti-drug campaigns.",
    source: "Ministry of Social Justice", importantFor: ["SSC CGL", "State PCS"]
  },
  {
    id: "REC-JUN-075", date: "2026-06-19", month: "Jun 2026", category: "National Security",
    title: "Indian Coast Guard Commissions Advanced Fast Patrol Vessel 'ICGS Samarth'",
    summary: "A new fast patrol vessel was added to the Indian Coast Guard fleet to secure maritime borders.",
    whatHappened: "The Indian Coast Guard commissioned an advanced Fast Patrol Vessel (FPV) named 'ICGS Samarth' to reinforce shallow-water surveillance, anti-smuggling patrols, and search-and-rescue operations along India's western maritime frontier.",
    importantPoints: [
      "Fast Patrol Vessel 'ICGS Samarth' commissioned into the Indian Coast Guard.",
      "Reinforces shallow-water surveillance and anti-smuggling patrols.",
      "Built with advanced indigenous navigation and communication suites."
    ],
    examFacts: ["Vessel: ICGS Samarth", "Service: Indian Coast Guard", "Type: Fast Patrol Vessel (FPV)"],
    quickRemember: "The Indian Coast Guard commissioned the fast patrol vessel ICGS Samarth.",
    audioText: "The Indian Coast Guard commissioned the advanced fast patrol vessel ICGS Samarth to secure maritime borders.",
    source: "Indian Coast Guard", importantFor: ["CDS", "SSC CGL"]
  },
  {
    id: "REC-JUN-076", date: "2026-06-22", month: "Jun 2026", category: "Economy & Trade",
    title: "India and UAE Complete First Bilateral Investment Treaty Review",
    summary: "New Delhi and Abu Dhabi concluded a successful review session under their Bilateral Investment Treaty.",
    whatHappened: "Officials from India and the United Arab Emirates convened in Abu Dhabi to conclude the first formal review session of their Bilateral Investment Treaty (BIT), aiming to further boost venture capital flows and cross-border manufacturing investments.",
    importantPoints: [
      "First formal review of the India-UAE Bilateral Investment Treaty (BIT).",
      "Held in Abu Dhabi.",
      "Aims to enhance venture capital and manufacturing investments."
    ],
    examFacts: ["Partners: India and UAE", "Agreement: Bilateral Investment Treaty (BIT)"],
    quickRemember: "India and UAE concluded a successful review session under their Bilateral Investment Treaty.",
    audioText: "India and the UAE successfully completed their first Bilateral Investment Treaty review session in Abu Dhabi.",
    source: "Ministry of Commerce", importantFor: ["UPSC", "SSC CGL"]
  },
  {
    id: "REC-JUN-077", date: "2026-06-23", month: "Jun 2026", category: "Science & Technology",
    title: "AIIMS Delhi Operates India's First Pediatric Epilepsy Robotic Surgery Center",
    summary: "AIIMS New Delhi established a specialized center utilizing robotics for precision pediatric epilepsy surgery.",
    whatHappened: "AIIMS New Delhi inaugurated India's first dedicated Pediatric Epilepsy Robotic Surgery Center, utilizing state-of-the-art stereotactic robotic assistance to treat drug-resistant pediatric epilepsy with minimal trauma.",
    importantPoints: [
      "India's first Pediatric Epilepsy Robotic Surgery Center established at AIIMS Delhi.",
      "Uses stereotactic robotic assistance for drug-resistant epilepsy cases.",
      "Minimizes surgical trauma and improves recovery outcomes."
    ],
    examFacts: ["Facility: Pediatric Epilepsy Robotic Center", "Hospital: AIIMS New Delhi"],
    quickRemember: "AIIMS Delhi established India's first Pediatric Epilepsy Robotic Surgery Center.",
    audioText: "AIIMS New Delhi established India's first Pediatric Epilepsy Robotic Surgery Center for precision treatment.",
    source: "AIIMS", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-JUN-078", date: "2026-06-24", month: "Jun 2026", category: "Environment & Energy",
    title: "NTPC Commissions India's Largest Green Hydrogen Microgrid",
    summary: "NTPC successfully commissioned an integrated green hydrogen microgrid facility in Ladakh.",
    whatHappened: "NTPC Limited successfully commissioned India's largest integrated green hydrogen microgrid project in Leh, Ladakh. The facility utilizes solar power generation coupled with hydrogen fuel cells to provide uninterrupted clean electricity to remote high-altitude military outposts.",
    importantPoints: [
      "India's largest integrated green hydrogen microgrid commissioned by NTPC.",
      "Located in Leh, Ladakh.",
      "Provides reliable green electricity to high-altitude outposts using fuel cells."
    ],
    examFacts: ["Company: NTPC", "Facility: Green Hydrogen Microgrid", "Location: Leh, Ladakh"],
    quickRemember: "NTPC commissioned India's largest integrated green hydrogen microgrid in Leh, Ladakh.",
    audioText: "NTPC successfully commissioned India's largest integrated green hydrogen microgrid facility in Leh, Ladakh.",
    source: "Ministry of Power", importantFor: ["SSC CGL", "UPSC", "CDS"]
  },
  {
    id: "REC-JUN-079", date: "2026-06-25", month: "Jun 2026", category: "National Affairs",
    title: "Election Commission Launches 'Voter Verify Portal 2.0'",
    summary: "The Election Commission of India unveiled an upgraded portal for streamlined voter registration and verification.",
    whatHappened: "The Election Commission of India (ECI) launched 'Voter Verify Portal 2.0', a secure digital platform featuring facial recognition lookup and automated EPIC card downloading to ease electoral roll revisions for citizens nationwide.",
    importantPoints: [
      "Voter Verify Portal 2.0 launched by the Election Commission of India (ECI).",
      "Features facial recognition lookup and automated EPIC card downloads.",
      "Streamlines electoral roll verification for citizens."
    ],
    examFacts: ["Portal: Voter Verify Portal 2.0", "Agency: Election Commission of India (ECI)"],
    quickRemember: "The Election Commission launched Voter Verify Portal 2.0 for streamlined voter verification.",
    audioText: "The Election Commission of India launched Voter Verify Portal 2.0 for streamlined voter registration and checks.",
    source: "Election Commission of India", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-JUN-080", date: "2026-06-26", month: "Jun 2026", category: "Economy & Trade",
    title: "RBI Releases Annual Report on Currency and Finance",
    summary: "The Reserve Bank of India published its flagship annual report focusing on green transition economics.",
    whatHappened: "The Reserve Bank of India (RBI) released its annual Report on Currency and Finance (RCF), detailing comprehensive macroeconomic frameworks, financing challenges, and monetary policy adjustments required to support India's net-zero green economic transition.",
    importantPoints: [
      "RBI released its annual Report on Currency and Finance (RCF).",
      "Focuses on financing the green economic transition and net-zero targets.",
      "Provides macroeconomic policy recommendations."
    ],
    examFacts: ["Institution: RBI", "Report: Report on Currency and Finance (RCF)"],
    quickRemember: "The RBI released its annual Report on Currency and Finance focusing on the green economic transition.",
    audioText: "The Reserve Bank of India released its annual Report on Currency and Finance focusing on green transition economics.",
    source: "RBI", importantFor: ["Bank PO", "SSC CGL", "UPSC"]
  }
];

const junRecallQuestionsBatch4 = [
  {
    id: "REC-Q-JUN-061", articleId: "REC-JUN-061", category: "Science & Technology",
    question: "Which research institution successfully produced sustainable aviation fuel (SAF) from non-edible plant oils and used cooking oils?",
    options: ["CSIR-IICT Hyderabad", "CSIR-NCL Pune", "CSIR-NEERI Nagpur", "CSIR-CDRI Lucknow"],
    answer: 0, explanation: "The CSIR-Indian Institute of Chemical Technology (IICT) successfully produced sustainable aviation fuel meeting international jet fuel standards."
  },
  {
    id: "REC-Q-JUN-062", articleId: "REC-JUN-062", category: "Economy & Infrastructure",
    question: "An advanced automated multi-modal logistics hub featuring automated container stacking and rail sidings was inaugurated in which city?",
    options: ["Greater Noida, Uttar Pradesh", "Ahmedabad, Gujarat", "Nagpur, Maharashtra", "Visakhapatnam, Andhra Pradesh"],
    answer: 0, explanation: "The Ministry of Commerce and Industry inaugurated an advanced automated multi-modal logistics hub in Greater Noida, UP."
  },
  {
    id: "REC-Q-JUN-063", articleId: "REC-JUN-063", category: "Environment & Wildlife",
    question: "What is the name of the new freshwater crab species discovered in the fast-flowing streams of the southern Western Ghats?",
    options: ["Kani maratha", "Ghatiana atropurpurea", "Travancoriana sholayarensis", "Baratha tuberculata"],
    answer: 1, explanation: "Wildlife researchers formally described a new freshwater crab species named Ghatiana atropurpurea from the southern Western Ghats."
  },
  {
    id: "REC-Q-JUN-064", articleId: "REC-JUN-064", category: "Defence & Aerospace",
    question: "The DRDO successfully test-fired the extended-range Pinaka Mk-II multi-barrel rocket launcher system from a test range located in:",
    options: ["Balasore, Odisha", "Pokhran, Rajasthan", "Wheeler Island, Odisha", "Chandipur, Odisha"],
    answer: 1, explanation: "The extended-range Pinaka Mk-II rocket system was test-fired successfully from a test range in Pokhran, Rajasthan."
  },
  {
    id: "REC-Q-JUN-065", articleId: "REC-JUN-065", category: "Government Schemes",
    question: "The Ministry of Education rolled out 'Vidya Samiksha Kendra 2.0' as a cloud-based command and control center portal primarily to monitor:",
    options: ["Mid-day meal nutritional distribution", "School attendance, learning outcomes, and teacher deployment", "Board examination paper distribution security", "Vocational lab equipment inventories"],
    answer: 1, explanation: "Vidya Samiksha Kendra 2.0 monitors school attendance, learning outcomes, and teacher deployment metrics nationwide in real time."
  },
  {
    id: "REC-Q-JUN-066", articleId: "REC-JUN-066", category: "Economy & Banking",
    question: "The Reserve Bank of India issued a binding directive requiring all scheduled commercial banks to complete mandatory upgrades for which systems to prevent outages?",
    options: ["Unified Payments Interface switches", "Core banking system (CBS) architectures", "RTGS liquidity clearing windows", "ATM network hardware routers"],
    answer: 1, explanation: "The RBI mandated mandatory core banking system (CBS) architectural upgrades and failover redundancy protocols to prevent service outages."
  },
  {
    id: "REC-Q-JUN-067", articleId: "REC-JUN-067", category: "Science & Space",
    question: "ISRO successfully completed a crucial long-duration hot test of which liquid rocket engine at Mahendragiri for the Gaganyaan program?",
    options: ["CE-20 Cryogenic Engine", "Vikas Liquid Engine", "Scylla Semi-Cryogenic Booster", "L110 Core Engine"],
    answer: 1, explanation: "ISRO completed a long-duration static hot test of the Vikas liquid rocket engine at Mahendragiri for the human-rated Gaganyaan missions."
  },
  {
    id: "REC-Q-JUN-068", articleId: "REC-JUN-068", category: "International Affairs",
    question: "India and Australia signed a bilateral Clean Energy Technology Partnership agreement focusing on joint research in Canberra. Which of the following was included?",
    options: ["Solar PV manufacturing and battery storage", "Thorium nuclear fuel reprocessing", "Deep-sea geothermal tapping", "Tidal ocean energy grids"],
    answer: 0, explanation: "The Clean Energy Technology Partnership focuses on joint research in solar PV manufacturing, green hydrogen, and battery storage solutions."
  },
  {
    id: "REC-Q-JUN-069", articleId: "REC-JUN-069", category: "Environment & Forests",
    question: "The 'State of Forest Fire Report' published by the MoEFCC highlights which of the following technological integrations?",
    options: ["Automated satellite fire alert integrations", "Drone-based chemical retardant spraying", "Underground thermal sensor grids", "Acoustic canopy burn detection"],
    answer: 0, explanation: "The MoEFCC report highlighted automated satellite alert integrations and community firefighting readiness to combat forest fires."
  },
  {
    id: "REC-Q-JUN-070", articleId: "REC-JUN-070", category: "Sports & Athletics",
    question: "Indian wrestler Aman Sehrawat clinched the gold medal in his weight category at which type of event?",
    options: ["World Wrestling Championships", "International ranking series tournament", "Asian Games qualifiers", "Commonwealth Invitational Cup"],
    answer: 1, explanation: "Aman Sehrawat secured the gold medal in his weight category at an international ranking series wrestling tournament."
  },
  {
    id: "REC-Q-JUN-071", articleId: "REC-JUN-071", category: "Science & Technology",
    question: "Researchers at IIT Kharagpur developed an affordable water purification unit using indigenous manganese-coated nanoadsorbents to remove what contaminant?",
    options: ["Arsenic from groundwater wells", "Fluoride from hard rock aquifers", "Microplastics in municipal tap networks", "Uranium traces in river deltas"],
    answer: 0, explanation: "IIT Kharagpur engineered a sustainable nanomaterial filter using manganese-coated nanoadsorbents to remove arsenic from groundwater."
  },
  {
    id: "REC-Q-JUN-072", articleId: "REC-JUN-072", category: "Economy & Infrastructure",
    question: "A state-of-the-art new integrated terminal building featuring shell-inspired architectural motifs was inaugurated at Veer Savarkar International Airport located in:",
    options: ["Kochi, Kerala", "Port Blair, Andaman and Nicobar Islands", "Agartala, Tripura", "Imphal, Manipur"],
    answer: 1, explanation: "An integrated terminal building was inaugurated at Veer Savarkar International Airport in Port Blair."
  },
  {
    id: "REC-Q-JUN-073", articleId: "REC-JUN-073", category: "International Affairs",
    question: "India was formally appointed to a prominent seat on the Steering Committee of which global artificial intelligence partnership?",
    options: ["Responsible AI Consortium (RAIC)", "Global Partnership on Artificial Intelligence (GPAI)", "International AI Ethics Panel", "Democratic Technology Accord"],
    answer: 1, explanation: "India was appointed to the Steering Committee of the Global Partnership on Artificial Intelligence (GPAI) to shape safe AI governance."
  },
  {
    id: "REC-Q-JUN-074", articleId: "REC-JUN-074", category: "Government Schemes",
    question: "The Ministry of Social Justice and Empowerment launched 'Nasha Mukt Bharat Abhiyan Portal 2.0' primarily to track:",
    options: ["Rehabilitation funding disbursements to states", "Anti-substance abuse awareness campaigns and rehabilitation metrics", "Seized illicit narcotics inventories across police stations", "Clinical trials for de-addiction pharmaceutical drugs"],
    answer: 1, explanation: "Portal 2.0 tracks anti-substance abuse awareness campaigns, rehab center metrics, and youth volunteer sign-ups across districts."
  },
  {
    id: "REC-Q-JUN-075", articleId: "REC-JUN-075", category: "National Security",
    question: "The Indian Coast Guard commissioned an advanced Fast Patrol Vessel (FPV) named 'ICGS Samarth' to reinforce:",
    options: ["High-seas anti-piracy escorts near the Gulf of Aden", "Shallow-water surveillance, anti-smuggling patrols, and SAR operations", "Deep-submergence submarine tracking in the Bay of Bengal", "Archipelagic island defense operations"],
    answer: 1, explanation: "ICGS Samarth was commissioned to reinforce shallow-water surveillance, anti-smuggling patrols, and search-and-rescue operations."
  },
  {
    id: "REC-Q-JUN-076", articleId: "REC-JUN-076", category: "Economy & Trade",
    question: "Officials from India and the United Arab Emirates convened in Abu Dhabi to conclude the first formal review session of their:",
    options: ["Comprehensive Economic Partnership Agreement", "Bilateral Investment Treaty (BIT)", "Digital Free Trade Accord", "Energy Security Framework"],
    answer: 1, explanation: "India and the UAE concluded their first formal review session under their Bilateral Investment Treaty (BIT) in Abu Dhabi."
  },
  {
    id: "REC-Q-JUN-077", articleId: "REC-JUN-077", category: "Science & Technology",
    question: "AIIMS New Delhi inaugurated India's first dedicated Pediatric Epilepsy Robotic Surgery Center utilizing what technology for treatment?",
    options: ["Stereotactic robotic assistance", "Focused ultrasound ablation probes", "Magnetic resonance guided lasers", "Endoscopic neural navigation rigs"],
    answer: 0, explanation: "AIIMS Delhi established India's first Pediatric Epilepsy Robotic Center using stereotactic robotic assistance for drug-resistant epilepsy."
  },
  {
    id: "REC-JUN-078", articleId: "REC-JUN-078", category: "Environment & Energy",
    question: "NTPC Limited successfully commissioned India's largest integrated green hydrogen microgrid project in which high-altitude location?",
    options: ["Kaza, Himachal Pradesh", "Leh, Ladakh", "Tawang, Arunachal Pradesh", "Srinagar, Jammu & Kashmir"],
    answer: 1, explanation: "NTPC commissioned India's largest integrated green hydrogen microgrid project in Leh, Ladakh, using solar power and fuel cells."
  },
  {
    id: "REC-Q-JUN-079", articleId: "REC-JUN-079", category: "National Affairs",
    question: "The Election Commission of India launched 'Voter Verify Portal 2.0' featuring which technological capability to ease electoral roll revisions?",
    options: ["Blockchain voter ballot casting", "Facial recognition lookup and automated EPIC card downloading", "Biometric iris authentication terminals", "Aadhaar vault cryptographic hashing"],
    answer: 1, explanation: "Voter Verify Portal 2.0 features facial recognition lookup and automated EPIC card downloading for streamlined voter verification."
  },
  {
    id: "REC-Q-JUN-080", articleId: "REC-JUN-080", category: "Economy & Trade",
    question: "The Reserve Bank of India released its annual Report on Currency and Finance (RCF) detailing macroeconomic frameworks required to support:",
    options: ["Universal basic income rollouts", "India's net-zero green economic transition", "Digital Rupee wholesale settlement expansion", "Cross-border retail CBDC interoperability"],
    answer: 1, explanation: "The RBI's Report on Currency and Finance (RCF) focused on macroeconomic frameworks and financing challenges to support India's net-zero green transition."
  }
];

// 👉 PUSH DATA INTO GLOBAL ARRAYS
if (typeof hiddenRecallArticles !== 'undefined') {
  hiddenRecallArticles.push(...junRecallArticlesBatch4);
}
if (typeof recallQuestionPool !== 'undefined') {
  recallQuestionPool.push(...junRecallQuestionsBatch4);
}

/* ==========================================================================
   END OF JUNE BATCH 4
   ========================================================================== */
/* ==========================================================================
   JUNE 2026 - BATCH 5 (ITEMS 081 TO 100)
   ========================================================================== */

const junRecallArticlesBatch5 = [
  {
    id: "REC-JUN-081", date: "2026-06-01", month: "Jun 2026", category: "Science & Technology",
    title: "ISRO Successfully Tests Composite Rocket Motor Cases",
    summary: "ISRO successfully qualified lightweight carbon composite motor cases for upcoming launch vehicle stages.",
    whatHappened: "The Indian Space Research Organisation (ISRO) successfully completed high-pressure structural qualification trials of lightweight carbon-fiber composite rocket motor cases at Sriharikota, significantly reducing stage deadweight for future PSLV and LVM3 flights.",
    importantPoints: [
      "Lightweight carbon composite rocket motor cases qualified by ISRO.",
      "Tested at Satish Dhawan Space Centre, Sriharikota.",
      "Reduces structural deadweight to increase launch vehicle payload capacity."
    ],
    examFacts: ["Technology: Carbon-Fiber Composite Motor Cases", "Agency: ISRO"],
    quickRemember: "ISRO successfully tested lightweight carbon composite rocket motor cases at Sriharikota.",
    audioText: "ISRO successfully completed structural qualification trials of lightweight carbon composite rocket motor cases at Sriharikota.",
    source: "ISRO", importantFor: ["SSC CGL", "UPSC", "CDS"]
  },
  {
    id: "REC-JUN-082", date: "2026-06-02", month: "Jun 2026", category: "Economy & Trade",
    title: "India and Peru Sign Bilateral Framework on Technical Trade Standards",
    summary: "New Delhi and Lima executed an agreement harmonizing sanitary and phytosanitary trade verification standards.",
    whatHappened: "India and Peru signed a bilateral framework agreement in Lima to harmonize sanitary and phytosanitary (SPS) standards, streamlining agricultural exports and pharmaceutical regulatory clearances between the two nations.",
    importantPoints: [
      "Bilateral framework agreement signed between India and Peru.",
      "Harmonizes sanitary and phytosanitary (SPS) standards.",
      "Aims to accelerate agricultural and pharmaceutical export clearances."
    ],
    examFacts: ["Partner Country: Peru", "Agreement: Sanitary and Phytosanitary Framework"],
    quickRemember: "India and Peru signed an agreement to harmonize technical and sanitary trade standards.",
    audioText: "India and Peru signed a bilateral framework agreement in Lima to harmonize sanitary trade standards.",
    source: "Ministry of Commerce", importantFor: ["UPSC", "SSC CGL"]
  },
  {
    id: "REC-JUN-083", date: "2026-06-03", month: "Jun 2026", category: "Environment & Conservation",
    title: "Ministry of Environment Launches 'Amrit Dharohar Capacity Building 2.0'",
    summary: "The government rolled out phase two of the Amrit Dharohar initiative for sustainable wetland tourism.",
    whatHappened: "The Ministry of Environment, Forest and Climate Change launched phase two of the 'Amrit Dharohar' scheme, providing specialized livelihood and ecological management training to local communities residing around designated Ramsar wetland sites.",
    importantPoints: [
      "Amrit Dharohar Capacity Building 2.0 launched by MoEFCC.",
      "Provides livelihood and ecological management training to local communities.",
      "Focuses on sustainable tourism around Ramsar wetland sites."
    ],
    examFacts: ["Initiative: Amrit Dharohar 2.0", "Ministry: MoEFCC"],
    quickRemember: "MoEFCC launched phase two of the Amrit Dharohar initiative for sustainable wetland management.",
    audioText: "The Environment Ministry launched phase two of the Amrit Dharohar initiative for sustainable wetland management.",
    source: "MoEFCC", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-JUN-084", date: "2026-06-04", month: "Jun 2026", category: "Defence & Aerospace",
    title: "DRDO Successfully Flight-Tests Guided Heavyweight Torpedo 'Varunastra'",
    summary: "The Indian Navy and DRDO successfully validated the combat readiness of the heavyweight anti-submarine torpedo.",
    whatHappened: "The Defence Research and Development Organisation (DRDO) and the Indian Navy successfully completed user-acceptance firing trials of the indigenous heavyweight anti-submarine torpedo 'Varunastra' off the eastern seaboard.",
    importantPoints: [
      "Successful firing trials of the heavyweight anti-submarine torpedo 'Varunastra'.",
      "Conducted jointly by DRDO and the Indian Navy.",
      "Features advanced autonomous acoustic homing and deep-water tracking capabilities."
    ],
    examFacts: ["Weapon: Varunastra Heavyweight Torpedo", "Agency: DRDO & Indian Navy"],
    quickRemember: "DRDO and the Indian Navy successfully flight-tested the Varunastra heavyweight torpedo.",
    audioText: "DRDO and the Indian Navy successfully completed acceptance trials of the Varunastra heavyweight anti-submarine torpedo.",
    source: "Ministry of Defence", importantFor: ["CDS", "SSC CGL"]
  },
  {
    id: "REC-JUN-085", date: "2026-06-05", month: "Jun 2026", category: "Government Schemes",
    title: "Ministry of Tribal Affairs Introduces 'Van Dhan Startup Accelerator'",
    summary: "A specialized incubator program was launched to scale up tribal forest-produce enterprises.",
    whatHappened: "The Ministry of Tribal Affairs launched the 'Van Dhan Startup Accelerator' program, providing seed funding, design incubation, and e-commerce supply-chain integration for tribal micro-enterprises under the TRIFED network.",
    importantPoints: [
      "Van Dhan Startup Accelerator launched by Ministry of Tribal Affairs.",
      "Provides seed funding and supply-chain integration for tribal enterprises.",
      "Operates under the TRIFED administrative umbrella."
    ],
    examFacts: ["Program: Van Dhan Startup Accelerator", "Ministry: Tribal Affairs"],
    quickRemember: "The Ministry of Tribal Affairs launched the Van Dhan Startup Accelerator to scale tribal enterprises.",
    audioText: "The Tribal Affairs Ministry launched the Van Dhan Startup Accelerator to scale up tribal forest-produce enterprises.",
    source: "Ministry of Tribal Affairs", importantFor: ["SSC CGL", "State PCS"]
  },
  {
    id: "REC-JUN-086", date: "2026-06-08", month: "Jun 2026", category: "Economy & Banking",
    title: "SEBI Mandates Artificial Intelligence Audit for Credit Rating Agencies",
    summary: "SEBI issued circular rules requiring external algorithmic transparency audits for credit rating agencies.",
    whatHappened: "The Securities and Exchange Board of India (SEBI) issued mandatory compliance guidelines requiring all registered Credit Rating Agencies (CRAs) to undergo annual external audits of their artificial intelligence models and automated rating algorithms.",
    importantPoints: [
      "SEBI mandated annual AI algorithm audits for Credit Rating Agencies (CRAs).",
      "Aims to ensure algorithmic transparency and prevent rating bias.",
      "Reinforces financial market governance."
    ],
    examFacts: ["Regulator: SEBI", "Mandate: AI Audit for CRAs"],
    quickRemember: "SEBI mandated annual artificial intelligence audits for all Credit Rating Agencies.",
    audioText: "SEBI issued circular rules requiring external algorithmic transparency audits for credit rating agencies.",
    source: "SEBI", importantFor: ["Bank PO", "SSC CGL"]
  },
  {
    id: "REC-JUN-087", date: "2026-06-09", month: "Jun 2026", category: "Science & Technology",
    title: "IIT Madras Establishes Advanced Hyperbaric Research Facility",
    summary: "A state-of-the-art hyperbaric testing chamber was commissioned at IIT Madras for deep-sea engineering.",
    whatHappened: "IIT Madras inaugurated an advanced Hyperbaric Research Facility capable of simulating extreme deep-sea pressure environments up to 3,000 metres below sea level, aiding deep-ocean mining and submersible capsule development.",
    importantPoints: [
      "Hyperbaric Research Facility inaugurated at IIT Madras.",
      "Simulates extreme pressure environments down to 3,000 metres deep.",
      "Aids deep-ocean research, submersibles, and marine engineering."
    ],
    examFacts: ["Facility: Hyperbaric Research Chamber", "Institute: IIT Madras"],
    quickRemember: "IIT Madras established an advanced hyperbaric research facility for deep-sea engineering.",
    audioText: "IIT Madras inaugurated an advanced Hyperbaric Research Facility capable of simulating extreme deep-sea pressures.",
    source: "IIT Madras", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-JUN-088", date: "2026-06-10", month: "Jun 2026", category: "International Affairs",
    title: "India and European Free Trade Association Review Trade Progress",
    summary: "New Delhi and EFTA states convened in Geneva to fast-track the implementation of their recent trade pact.",
    whatHappened: "Trade ministers from India and the European Free Trade Association (EFTA) member states—Switzerland, Norway, Iceland, and Liechtenstein—met in Geneva to review investment commitments and fast-track implementation timelines.",
    importantPoints: [
      "India and EFTA states met in Geneva to review trade pact implementation.",
      "EFTA comprises Switzerland, Norway, Iceland, and Liechtenstein.",
      "Focuses on securing targeted investment commitments."
    ],
    examFacts: ["Bloc: EFTA (Switzerland, Norway, Iceland, Liechtenstein)", "Meeting Location: Geneva"],
    quickRemember: "India and EFTA states met in Geneva to review trade pact implementation timelines.",
    audioText: "India and European Free Trade Association states convened in Geneva to review trade pact progress.",
    source: "Ministry of Commerce", importantFor: ["UPSC", "SSC CGL"]
  },
  {
    id: "REC-JUN-089", date: "2026-06-11", month: "Jun 2026", category: "Environment & Wildlife",
    title: "New Butterfly Species 'Parnassius ladakhensis' Documented in Zanskar",
    summary: "A striking high-altitude butterfly species was formally recorded in the Zanskar range of Ladakh.",
    whatHappened: "Lepidopterists and wildlife scientists formally described a rare high-altitude butterfly species named *Parnassius ladakhensis*, discovered fluttering across alpine scree slopes in the Zanskar region of Ladakh.",
    importantPoints: [
      "New high-altitude butterfly species named *Parnassius ladakhensis*.",
      "Discovered in the Zanskar range, Ladakh.",
      "Highlights high-altitude endemic insect biodiversity."
    ],
    examFacts: ["Species: Parnassius ladakhensis", "Location: Zanskar, Ladakh"],
    quickRemember: "A new butterfly species, Parnassius ladakhensis, was documented in the Zanskar range of Ladakh.",
    audioText: "A high-altitude butterfly species named Parnassius ladakhensis was documented in the Zanskar range of Ladakh.",
    source: "Zoological Survey of India", importantFor: ["SSC CGL", "State PCS"]
  },
  {
    id: "REC-JUN-090", date: "2026-06-12", month: "Jun 2026", category: "National Affairs",
    title: "Ministry of Culture Launches National Manuscript Digitization Mission 2.0",
    summary: "A massive digital archiving campaign was initiated to preserve ancient Indian literary manuscripts.",
    whatHappened: "The Ministry of Culture rolled out Phase 2 of the National Manuscript Digitization Mission, deploying specialized high-resolution optical scanners across university libraries and mathas to preserve centuries-old palm-leaf and paper manuscripts.",
    importantPoints: [
      "National Manuscript Digitization Mission 2.0 launched by Ministry of Culture.",
      "Deploys high-resolution optical scanners to archive ancient texts.",
      "Preserves rare palm-leaf and paper manuscripts."
    ],
    examFacts: ["Mission: National Manuscript Digitization 2.0", "Ministry: Ministry of Culture"],
    quickRemember: "The Ministry of Culture launched phase two of the National Manuscript Digitization Mission.",
    audioText: "The Culture Ministry launched phase two of the National Manuscript Digitization Mission to archive ancient texts.",
    source: "Ministry of Culture", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-JUN-091", date: "2026-06-15", month: "Jun 2026", category: "Science & Technology",
    title: "CSIR-NEERI Launches Real-Time Air Quality Sensor Network in Tier-2 Cities",
    summary: "A low-cost IoT particulate sensor grid was deployed across 50 tier-2 cities for hyper-local air monitoring.",
    whatHappened: "CSIR-NEERI commissioned an indigenous network of low-cost IoT particulate matter sensor nodes across 50 emerging tier-2 Indian cities, providing hyper-local air quality tracking via open-source municipal dashboards.",
    importantPoints: [
      "Low-cost IoT air quality sensor network deployed across 50 tier-2 cities.",
      "Developed and commissioned by CSIR-NEERI.",
      "Provides hyper-local particulate tracking via open-source dashboards."
    ],
    examFacts: ["Developer: CSIR-NEERI", "Coverage: 50 Tier-2 Cities"],
    quickRemember: "CSIR-NEERI launched a real-time air quality sensor network across 50 tier-2 cities.",
    audioText: "CSIR-NEERI deployed a real-time IoT air quality sensor network across fifty tier-2 Indian cities.",
    source: "CSIR", importantFor: ["SSC CGL", "State PCS"]
  },
  {
    id: "REC-JUN-092", date: "2026-06-16", month: "Jun 2026", category: "Economy & Infrastructure",
    title: "Inauguration of New Integrated Cargo Terminal at Chennai Airport",
    summary: "A modern state-of-the-art international cargo terminal was opened at Chennai International Airport.",
    whatHappened: "A high-capacity integrated cargo terminal was inaugurated at Chennai International Airport, featuring automated storage and retrieval systems (ASRS) to double the airport's annual cargo handling capacity.",
    importantPoints: [
      "Integrated cargo terminal inaugurated at Chennai International Airport.",
      "Equipped with automated storage and retrieval systems (ASRS).",
      "Doubles the airport's annual cargo handling capacity."
    ],
    examFacts: ["Facility: Integrated Cargo Terminal", "Airport: Chennai International Airport"],
    quickRemember: "A new integrated cargo terminal was inaugurated at Chennai International Airport.",
    audioText: "A high-capacity integrated cargo terminal was inaugurated at Chennai International Airport.",
    source: "Ministry of Civil Aviation", importantFor: ["SSC CGL", "RRB NTPC"]
  },
  {
    id: "REC-JUN-093", date: "2026-06-17", month: "Jun 2026", category: "International Affairs",
    title: "India Elected to UNESCO World Heritage Committee",
    summary: "India secured a resounding victory in elections to serve on the prestigious UNESCO World Heritage Committee.",
    whatHappened: "India was elected as a member of the UNESCO World Heritage Committee during general assembly elections at UNESCO Headquarters in Paris, reinforcing its leadership standing in global heritage conservation and cultural diplomacy.",
    importantPoints: [
      "India elected to the UNESCO World Heritage Committee.",
      "Elections held at UNESCO Headquarters in Paris.",
      "Strengthens India's role in global cultural heritage preservation."
    ],
    examFacts: ["Body: UNESCO World Heritage Committee", "Location: Paris"],
    quickRemember: "India was elected as a member of the UNESCO World Heritage Committee in Paris.",
    audioText: "India was elected as a member of the UNESCO World Heritage Committee during general assembly elections in Paris.",
    source: "MEA", importantFor: ["UPSC", "SSC CGL"]
  },
  {
    id: "REC-JUN-094", date: "2026-06-18", month: "Jun 2026", category: "Government Schemes",
    title: "Ministry of Health Expands 'Ayushman Arogya Mandir' Network",
    summary: "The government crossed a major milestone by operationalizing over 1.7 lakh primary health wellness centers.",
    whatHappened: "The Ministry of Health and Family Welfare announced that the nationwide network of upgraded primary healthcare facilities has officially crossed 1.7 lakh operational 'Ayushman Arogya Mandir' centers, providing expanded diagnostics and tele-consultation services.",
    importantPoints: [
      "Over 1.7 lakh operational 'Ayushman Arogya Mandir' centers nationwide.",
      "Provides expanded local diagnostics and digital tele-consultations.",
      "Managed by the Ministry of Health."
    ],
    examFacts: ["Network: Ayushman Arogya Mandir", "Milestone: >1.7 Lakh Centers Operational"],
    quickRemember: "The Ministry of Health operationalized over 1.7 lakh 'Ayushman Arogya Mandir' health centers.",
    audioText: "The Health Ministry announced that the nationwide network of Ayushman Arogya Mandir centers crossed 1.7 lakh operational units.",
    source: "MoHFW", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-JUN-095", date: "2026-09-25", month: "Jun 2026", category: "National Security",
    title: "Indian Army Inducts 'Nagastra-1' Kamikaze Drones",
    summary: "The Indian Army inducted the first regiment of indigenous loitering munitions named Nagastra-1.",
    whatHappened: "The Indian Army formally inducted the 'Nagastra-1', India's first indigenous loitering munition (Kamikaze drone) developed by Economic Explosives Limited (EEL) in Nagpur, providing infantry battalions with precise GPS-guided tactical strike capabilities.",
    importantPoints: [
      "Indian Army inducted indigenous 'Nagastra-1' loitering munitions.",
      "Developed domestically by Economic Explosives Limited (EEL) in Nagpur.",
      "Provides infantry units with precise Kamikaze strike capabilities."
    ],
    examFacts: ["Weapon: Nagastra-1 Loitering Munition", "Manufacturer: EEL Nagpur", "Service: Indian Army"],
    quickRemember: "The Indian Army inducted the indigenous 'Nagastra-1' Kamikaze loitering munitions.",
    audioText: "The Indian Army formally inducted the Nagastra-1, India's first indigenous loitering munition for tactical strikes.",
    source: "Indian Army", importantFor: ["CDS", "SSC CGL", "UPSC"]
  },
  {
    id: "REC-JUN-096", date: "2026-06-22", month: "Jun 2026", category: "Economy & Trade",
    title: "India Signs Comprehensive Semiconductor Supply Accord with Taiwan",
    summary: "New Delhi and Taipei executed a strategic framework agreement connecting semiconductor fabrication ecosystems.",
    whatHappened: "India and Taiwan signed a landmark bilateral semiconductor supply chain and talent development framework in Taipei, facilitating joint investments between Indian conglomerates and Taiwanese chip design foundries.",
    importantPoints: [
      "Semiconductor framework agreement signed between India and Taiwan.",
      "Signed in Taipei to connect fabrication ecosystems and talent pipelines.",
      "Facilitates joint foundry investments."
    ],
    examFacts: ["Partner: Taiwan", "Agreement: Semiconductor Supply Chain & Talent Framework"],
    quickRemember: "India and Taiwan signed a semiconductor supply chain and talent development framework.",
    audioText: "India and Taiwan signed a semiconductor supply chain framework agreement to connect chip manufacturing ecosystems.",
    source: "Ministry of Commerce", importantFor: ["UPSC", "SSC CGL"]
  },
  {
    id: "REC-JUN-097", date: "2026-06-23", month: "Jun 2026", category: "Science & Space",
    title: "ISRO Successfully Conducts Reusable Rocket Grid Fin Aerodynamic Drop Tests",
    summary: "ISRO validated supersonic grid fin steering dynamics using high-altitude balloon drops.",
    whatHappened: "ISRO successfully completed high-altitude balloon drop trials of its steering grid fins at Sriharikota, testing aerodynamic control response under high-velocity conditions for reusable rocket booster recovery.",
    importantPoints: [
      "High-altitude balloon drop tests of rocket steering grid fins.",
      "Conducted by ISRO at Sriharikota.",
      "Validates aerodynamic control and stability for reusable boosters."
    ],
    examFacts: ["Test: High-Altitude Balloon Drop", "Component: Steering Grid Fins", "Agency: ISRO"],
    quickRemember: "ISRO successfully conducted high-altitude balloon drop tests for reusable rocket grid fins.",
    audioText: "ISRO successfully completed high-altitude balloon drop trials of its steering grid fins at Sriharikota.",
    source: "ISRO", importantFor: ["SSC CGL", "UPSC", "CDS"]
  },
  {
    id: "REC-JUN-098", date: "2026-06-24", month: "Jun 2026", category: "Environment & Energy",
    title: "NTPC Commissions India's First Commercial Biomass Torrefaction Plant",
    summary: "NTPC operationalized a commercial torrefied biomass pellet manufacturing plant in Varanasi.",
    whatHappened: "NTPC Limited successfully commissioned India's first commercial-scale biomass torrefaction facility in Varanasi, Uttar Pradesh. The plant converts agricultural stubble into high-density torrefied pellets for co-firing in thermal power stations to eliminate stubble burning.",
    importantPoints: [
      "First commercial-scale biomass torrefaction plant commissioned by NTPC.",
      "Located in Varanasi, Uttar Pradesh.",
      "Converts agricultural stubble into pellets for thermal power plant co-firing."
    ],
    examFacts: ["Company: NTPC", "Facility: Biomass Torrefaction Plant", "Location: Varanasi, UP"],
    quickRemember: "NTPC commissioned India's first commercial biomass torrefaction plant in Varanasi.",
    audioText: "NTPC commissioned India's first commercial-scale biomass torrefaction plant in Varanasi to convert agricultural stubble.",
    source: "Ministry of Power", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-JUN-099", date: "2026-06-25", month: "Jun 2026", category: "National Affairs",
    title: "Ministry of Home Affairs Launches Automated National Forensic Case Tracking System",
    summary: "MHA rolled out a centralized digital ledger tracking criminal forensic evidence from crime scenes to court.",
    whatHappened: "The Ministry of Home Affairs deployed the Automated National Forensic Case Tracking System (ANFCTS) across all central and state forensic science laboratories, ensuring chain-of-custody integrity for criminal investigations.",
    importantPoints: [
      "Automated National Forensic Case Tracking System (ANFCTS) deployed by MHA.",
      "Tracks forensic evidence chain-of-custody from crime scenes to courts.",
      "Integrated across central and state forensic laboratories."
    ],
    examFacts: ["System: ANFCTS", "Ministry: Ministry of Home Affairs"],
    quickRemember: "MHA deployed the Automated National Forensic Case Tracking System (ANFCTS) to secure evidence chains.",
    audioText: "The Home Ministry deployed the Automated National Forensic Case Tracking System across state laboratories.",
    source: "Ministry of Home Affairs", importantFor: ["SSC CGL", "UPSC", "CDS"]
  },
  {
    id: "REC-JUN-100", date: "2026-06-26", month: "Jun 2026", category: "Economy & Agriculture",
    title: "NABARD Sanctions ₹10,000 Crore Climate-Resilient Agriculture Fund",
    summary: "NABARD approved a specialized financial window to support climate-adaptive farming and drip irrigation.",
    whatHappened: "NABARD announced the sanction of a ₹10,000 crore specialized credit facility titled the 'Climate-Resilient Agriculture Fund', dedicated to financing micro-irrigation networks, solar agricultural pumps, and drought-resistant crop warehousing infrastructure across vulnerable agro-climatic zones.",
    importantPoints: [
      "₹10,000 crore Climate-Resilient Agriculture Fund approved by NABARD.",
      "Finances micro-irrigation, solar pumps, and drought-resistant storage.",
      "Targets vulnerable agro-climatic zones across states."
    ],
    examFacts: ["Institution: NABARD", "Fund: Climate-Resilient Agriculture Fund", "Allocation: ₹10,000 Crore"],
    quickRemember: "NABARD sanctioned a ₹10,000 crore Climate-Resilient Agriculture Fund for drought-resistant farming.",
    audioText: "NABARD sanctioned a ten thousand crore rupee Climate-Resilient Agriculture Fund to support drought-resistant farming.",
    source: "NABARD", importantFor: ["Bank PO", "SSC CGL", "UPSC"]
  }
];

const junRecallQuestionsBatch5 = [
  {
    id: "REC-Q-JUN-081", articleId: "REC-JUN-081", category: "Science & Technology",
    question: "What is the primary material used in the lightweight rocket motor cases successfully qualified by ISRO at Sriharikota?",
    options: ["Titanium alloy honeycomb", "Carbon-fiber composite", "Maraging steel matrix", "Lithium-aluminum alloy"],
    answer: 1, explanation: "ISRO completed qualification trials of lightweight carbon-fiber composite rocket motor cases at Sriharikota to reduce deadweight."
  },
  {
    id: "REC-Q-JUN-082", articleId: "REC-JUN-082", category: "Economy & Trade",
    question: "India and Peru signed a bilateral framework agreement in Lima to harmonize which standards, streamlining agricultural and pharmaceutical exports?",
    options: ["Sanitary and phytosanitary (SPS) standards", "Digital customs ledger protocols", "Green shipping carbon levies", "Intellectual property patent verification"],
    answer: 0, explanation: "India and Peru signed an agreement in Lima harmonizing sanitary and phytosanitary (SPS) standards for trade."
  },
  {
    id: "REC-Q-JUN-083", articleId: "REC-JUN-083", category: "Environment & Conservation",
    question: "Phase two of the 'Amrit Dharohar' initiative launched by the Ministry of Environment focuses on providing specialized training for:",
    options: ["Afforestation in arid desert fringes", "Sustainable tourism around Ramsar wetland sites", "Coral reef bleaching mitigation diving", "Mangrove carbon credit auditing"],
    answer: 1, explanation: "Amrit Dharohar Capacity Building 2.0 provides livelihood and ecological management training to communities around Ramsar wetland sites."
  },
  {
    id: "REC-Q-JUN-084", articleId: "REC-JUN-084", category: "Defence & Aerospace",
    question: "The DRDO and the Indian Navy successfully completed user-acceptance firing trials of which indigenous heavyweight anti-submarine torpedo?",
    options: ["Shyena", "Varunastra", "Takshak", "Astra-H"],
    answer: 1, explanation: "DRDO and the Indian Navy validated the combat readiness of the indigenous heavyweight anti-submarine torpedo 'Varunastra'."
  },
  {
    id: "REC-Q-JUN-085", articleId: "REC-JUN-085", category: "Government Schemes",
    question: "The Ministry of Tribal Affairs launched the 'Van Dhan Startup Accelerator' program to scale up tribal enterprises under the administrative umbrella of:",
    options: ["TRIFED", "NAFED", "APEDA", "SIDBI"],
    answer: 0, explanation: "The Van Dhan Startup Accelerator provides seed funding and supply-chain integration for tribal micro-enterprises under the TRIFED network."
  },
  {
    id: "REC-Q-JUN-086", articleId: "REC-JUN-086", category: "Economy & Banking",
    question: "SEBI issued mandatory compliance guidelines requiring all registered Credit Rating Agencies (CRAs) to undergo annual external audits of their:",
    options: ["Shareholder voting pattern declarations", "Artificial intelligence models and automated rating algorithms", "Cross-border debt holdings exposure", "Underwriter commission disclosures"],
    answer: 1, explanation: "SEBI mandated annual external audits of artificial intelligence models and automated rating algorithms for all Credit Rating Agencies."
  },
  {
    id: "REC-Q-JUN-087", articleId: "REC-JUN-087", category: "Science & Technology",
    question: "IIT Madras inaugurated an advanced Hyperbaric Research Facility capable of simulating extreme deep-sea pressure environments down to:",
    options: ["1,000 metres below sea level", "2,000 metres below sea level", "3,000 metres below sea level", "5,000 metres below sea level"],
    answer: 2, explanation: "The facility simulates extreme pressure environments up to 3,000 metres below sea level to aid deep-ocean engineering."
  },
  {
    id: "REC-Q-JUN-088", articleId: "REC-JUN-088", category: "International Affairs",
    question: "Trade ministers from India and the European Free Trade Association (EFTA) member states met in which city to review trade pact implementation?",
    options: ["Zurich", "Geneva", "Oslo", "Reykjavik"],
    answer: 1, explanation: "India and EFTA member states (Switzerland, Norway, Iceland, Liechtenstein) met in Geneva to review trade pact timelines."
  },
  {
    id: "REC-Q-JUN-089", articleId: "REC-JUN-089", category: "Environment & Wildlife",
    question: "What is the name of the rare high-altitude butterfly species formally recorded fluttering across alpine scree slopes in the Zanskar range of Ladakh?",
    options: ["Papilio ladakhensis", "Parnassius ladakhensis", "Colias zanskarica", "Vanessa himalayana"],
    answer: 1, explanation: "Lepidopterists described a rare high-altitude butterfly species named Parnassius ladakhensis discovered in the Zanskar range."
  },
  {
    id: "REC-Q-JUN-090", articleId: "REC-JUN-090", category: "National Affairs",
    question: "The Ministry of Culture rolled out Phase 2 of the National Manuscript Digitization Mission deploying high-resolution optical scanners to archive:",
    options: ["Stone-cut epigraphical edicts", "Centuries-old palm-leaf and paper manuscripts", "British-era administrative gazetteers", "Ancient copper-plate land grants"],
    answer: 1, explanation: "Phase 2 of the National Manuscript Digitization Mission deploys high-resolution scanners to preserve centuries-old palm-leaf and paper manuscripts."
  },
  {
    id: "REC-Q-JUN-091", articleId: "REC-JUN-091", category: "Science & Technology",
    question: "CSIR-NEERI commissioned an indigenous network of low-cost IoT particulate matter sensor nodes across how many emerging tier-2 Indian cities?",
    options: ["25 cities", "50 cities", "75 cities", "100 cities"],
    answer: 1, explanation: "CSIR-NEERI deployed an indigenous network of low-cost IoT particulate matter sensor nodes across 50 emerging tier-2 Indian cities."
  },
  {
    id: "REC-Q-JUN-092", articleId: "REC-JUN-092", category: "Economy & Infrastructure",
    question: "A high-capacity integrated cargo terminal featuring automated storage and retrieval systems (ASRS) was inaugurated at which airport?",
    options: ["Kempegowda International Airport, Bengaluru", "Chennai International Airport", "Cochin International Airport", "Rajiv Gandhi International Airport, Hyderabad"],
    answer: 1, explanation: "An integrated cargo terminal equipped with automated storage and retrieval systems was inaugurated at Chennai International Airport."
  },
  {
    id: "REC-Q-JUN-093", articleId: "REC-JUN-093", category: "International Affairs",
    question: "During general assembly elections held at UNESCO Headquarters, India was elected as a member of the:",
    options: ["UNESCO Executive Board", "UNESCO World Heritage Committee", "Intangible Cultural Heritage Evaluation Body", "Intergovernmental Oceanographic Commission"],
    answer: 1, explanation: "India was elected as a member of the UNESCO World Heritage Committee during general assembly elections at UNESCO Headquarters in Paris."
  },
  {
    id: "REC-Q-JUN-094", articleId: "REC-JUN-094", category: "Government Schemes",
    question: "The nationwide network of upgraded primary healthcare facilities operationalized by the Health Ministry crossed what milestone for 'Ayushman Arogya Mandir' centers?",
    options: ["Over 1.0 lakh centers", "Over 1.5 lakh centers", "Over 1.7 lakh centers", "Over 2.0 lakh centers"],
    answer: 2, explanation: "The nationwide network of primary healthcare facilities officially crossed 1.7 lakh operational 'Ayushman Arogya Mandir' centers."
  },
  {
    id: "REC-Q-JUN-095", articleId: "REC-JUN-095", category: "National Security",
    question: "What is the name of India's first indigenous loitering munition (Kamikaze drone) formally inducted by the Indian Army?",
    options: ["SkyStriker-X", "Nagastra-1", "Vajra-Kamikaze", "Astra-Loiter"],
    answer: 1, explanation: "The Indian Army inducted the 'Nagastra-1', India's first indigenous loitering munition developed by EEL Nagpur."
  },
  {
    id: "REC-Q-JUN-096", articleId: "REC-JUN-096", category: "Economy & Trade",
    question: "India and Taiwan signed a landmark bilateral semiconductor supply chain and talent development framework in which city?",
    options: ["New Delhi", "Taipei", "Hsinchu", "Kaohsiung"],
    answer: 1, explanation: "India and Taiwan signed a semiconductor supply chain framework agreement in Taipei to connect chip manufacturing ecosystems."
  },
  {
    id: "REC-Q-JUN-097", articleId: "REC-JUN-097", category: "Science & Space",
    question: "ISRO successfully completed high-altitude balloon drop trials of its steering grid fins at Sriharikota to test:",
    options: ["Radiation hardening durability", "Aerodynamic control response for reusable boosters", "Parachute deployment synchronization", "Plasma sheath communication windows"],
    answer: 1, explanation: "ISRO completed high-altitude balloon drop trials of its steering grid fins at Sriharikota, testing aerodynamic control response for reusable rocket booster recovery."
  },
  {
    id: "REC-Q-JUN-098", articleId: "REC-JUN-098", category: "Environment & Energy",
    question: "NTPC Limited successfully commissioned India's first commercial-scale biomass torrefaction facility in which city to eliminate stubble burning?",
    options: ["Karnal, Haryana", "Ludhiana, Punjab", "Varanasi, Uttar Pradesh", "Patna, Bihar"],
    answer: 2, explanation: "NTPC commissioned India's first commercial-scale biomass torrefaction plant in Varanasi, UP, to convert agricultural stubble into co-firing pellets."
  },
  {
    id: "REC-Q-JUN-099", articleId: "REC-JUN-099", category: "National Affairs",
    question: "The Ministry of Home Affairs deployed the Automated National Forensic Case Tracking System (ANFCTS) across forensic labs to ensure:",
    options: ["Ballistic fingerprint database matching speed", "Chain-of-custody integrity for criminal investigations", "DNA profile cross-state server synchronization", "Cyber forensic hard drive cloning speed"],
    answer: 1, explanation: "The ANFCTS ensures chain-of-custody integrity for criminal investigations from crime scenes to courts."
  },
  {
    id: "REC-Q-JUN-100", articleId: "REC-JUN-100", category: "Economy & Agriculture",
    question: "NABARD announced the sanction of a ₹10,000 crore specialized credit facility titled the 'Climate-Resilient Agriculture Fund' dedicated to financing:",
    options: ["Micro-irrigation networks, solar pumps, and drought-resistant storage", "Organic fertilizer manufacturing cooperatives", "Agro-forestry timber plantation subsidies", "Locust swarming drone interception grids"],
    answer: 0, explanation: "The fund finances micro-irrigation networks, solar agricultural pumps, and drought-resistant crop warehousing infrastructure."
  }
];

// 👉 PUSH DATA INTO GLOBAL ARRAYS
if (typeof hiddenRecallArticles !== 'undefined') {
  hiddenRecallArticles.push(...junRecallArticlesBatch5);
}
if (typeof recallQuestionPool !== 'undefined') {
  recallQuestionPool.push(...junRecallQuestionsBatch5);
}

/* ==========================================================================
   END OF JUNE BATCH 5 (JUNE 100% COMPLETE)
   ========================================================================== */
/* ==========================================================================
   MAY 2026 - BATCH 1 (ITEMS 001 TO 020)
   ========================================================================== */

const mayRecallArticlesBatch1 = [
  {
    id: "REC-MAY-001", date: "2026-05-01", month: "May 2026", category: "Economy & Labour",
    title: "International Workers' Day (May Day) Observed Globally",
    summary: "May Day 2026 was observed worldwide on 1 May to honor the socio-economic achievements of the labor movement.",
    whatHappened: "International Workers' Day, widely known as May Day, was observed across the globe on 1 May 2026. Trade unions and labor organizations held rallies emphasizing fair wages, social security expansions, and safe working environments.",
    importantPoints: [
      "Observed annually on 1 May.",
      "Celebrates the historic contributions and rights of the global workforce.",
      "Highlighted demands for enhanced social security and workplace safety."
    ],
    examFacts: ["Date: 1 May", "Observance: International Workers' Day"],
    quickRemember: "International Workers' Day is observed on 1 May.",
    audioText: "International Workers' Day was observed globally on May 1 to honor the achievements of the labor movement.",
    source: "International Labour Organization", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-MAY-002", date: "2026-05-02", month: "May 2026", category: "Science & Technology",
    title: "CSIR-IICT Synthesizes Cost-Effective Catalyst for Green Hydrogen",
    summary: "CSIR-IICT developed a non-noble metal catalyst to slash the cost of water electrolysis for green hydrogen production.",
    whatHappened: "Researchers at the CSIR-Indian Institute of Chemical Technology (IICT) successfully synthesized a high-performance, non-noble metal-based catalyst that significantly lowers electrical overpotentials during water splitting, advancing low-cost green hydrogen production.",
    importantPoints: [
      "Non-noble metal catalyst developed by CSIR-IICT.",
      "Reduces electrical energy required for water electrolysis.",
      "Promotes economically viable green hydrogen generation."
    ],
    examFacts: ["Institution: CSIR-IICT Hyderabad", "Innovation: Non-Noble Water Electrolysis Catalyst"],
    quickRemember: "CSIR-IICT developed a low-cost, non-noble catalyst for green hydrogen production.",
    audioText: "CSIR-IICT synthesized a cost-effective non-noble metal catalyst to lower the cost of green hydrogen production.",
    source: "CSIR", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-MAY-003", date: "2026-05-04", month: "May 2026", category: "Defence & Aerospace",
    title: "DRDO Successfully Flight-Tests Next-Gen Cruise Missile Prototype",
    summary: "DRDO conducted a successful maiden developmental flight test of an advanced long-range subsonic cruise missile.",
    whatHappened: "The Defence Research and Development Organisation (DRDO) successfully completed the maiden developmental flight test of its next-generation long-range subsonic cruise missile from the Integrated Test Range in Chandipur, Odisha.",
    importantPoints: [
      "Flight-tested next-generation long-range subsonic cruise missile prototype.",
      "Conducted at the Integrated Test Range, Chandipur, Odisha.",
      "Validates indigenous avionics and terrain-contour matching guidance."
    ],
    examFacts: ["Test Site: Chandipur, Odisha", "Agency: DRDO", "Weapon: Subsonic Cruise Missile"],
    quickRemember: "DRDO successfully test-fired a next-generation long-range cruise missile prototype from Chandipur.",
    audioText: "DRDO successfully completed the flight test of a next-generation subsonic cruise missile prototype from Odisha.",
    source: "Ministry of Defence", importantFor: ["CDS", "SSC CGL"]
  },
  {
    id: "REC-MAY-004", date: "2026-05-05", month: "May 2026", category: "Health",
    title: "World Hand Hygiene Day 2026",
    summary: "World Hand Hygiene Day was observed on 5 May under WHO guidance to prioritize infection prevention in healthcare.",
    whatHappened: "The World Health Organization (WHO) led the global observance of World Hand Hygiene Day on 5 May 2026, launching campaigns across hospitals to promote proper handwashing protocols and prevent antimicrobial resistance.",
    importantPoints: [
      "Observed globally on 5 May.",
      "Led by the World Health Organization (WHO).",
      "Focuses on infection control and preventing antimicrobial resistance in clinics."
    ],
    examFacts: ["Date: 5 May", "Lead Agency: WHO", "Focus: Hand Hygiene & Infection Control"],
    quickRemember: "World Hand Hygiene Day is observed on 5 May under WHO guidelines.",
    audioText: "World Hand Hygiene Day was observed on May 5 to promote infection prevention and control in healthcare settings.",
    source: "WHO", importantFor: ["SSC CGL", "SSC CHSL"]
  },
  {
    id: "REC-MAY-005", date: "2026-05-06", month: "May 2026", category: "Economy & Infrastructure",
    title: "Inauguration of India's First Automated Underpass Network in Bengaluru",
    summary: "Bengaluru inaugurated an integrated network of AI-managed traffic underpasses to ease Outer Ring Road congestion.",
    whatHappened: "The Karnataka state government inaugurated India's first fully automated, AI-managed traffic underpass network along tech corridors in Bengaluru, utilizing real-time sensor loops to dynamically regulate vehicle flow and eliminate bottlenecks.",
    importantPoints: [
      "India's first automated AI-managed traffic underpass network.",
      "Located along key technology corridors in Bengaluru, Karnataka.",
      "Uses real-time sensor loops to optimize vehicle flow."
    ],
    examFacts: ["Facility: Automated Traffic Underpass Network", "City: Bengaluru, Karnataka"],
    quickRemember: "Bengaluru inaugurated India's first automated AI-managed traffic underpass network.",
    audioText: "Bengaluru inaugurated an integrated network of AI-managed traffic underpasses to ease congestion.",
    source: "Karnataka Govt", importantFor: ["SSC CGL", "State PCS"]
  },
  {
    id: "REC-MAY-006", date: "2026-05-07", month: "May 2026", category: "Environment",
    title: "World Athletics Day 2026",
    summary: "World Athletics Day was observed on 7 May to encourage youth participation in sports and physical fitness.",
    whatHappened: "World Athletics Day was celebrated worldwide on 7 May 2026. Established by World Athletics, the occasion emphasizes grassroots athletic training, fitness education, and youth engagement across member federations.",
    importantPoints: [
      "Observed annually on 7 May.",
      "Established by World Athletics.",
      "Promotes grassroots sports participation and fitness among youth."
    ],
    examFacts: ["Date: 7 May", "Organizer: World Athletics"],
    quickRemember: "World Athletics Day is celebrated on 7 May to promote youth fitness.",
    audioText: "World Athletics Day was observed on May 7 to encourage youth participation in sports and fitness.",
    source: "World Athletics", importantFor: ["SSC CGL", "SSC CHSL"]
  },
  {
    id: "REC-MAY-007", date: "2026-05-08", month: "May 2026", category: "Humanitarian",
    title: "World Red Cross and Red Crescent Day 2026",
    summary: "World Red Cross Day was marked on 8 May to honor humanitarian workers and volunteers worldwide.",
    whatHappened: "World Red Cross and Red Crescent Day was observed on 8 May 2026, marking the birth anniversary of Henry Dunant, the founder of the Red Cross and recipient of the first Nobel Peace Prize.",
    importantPoints: [
      "Observed annually on 8 May.",
      "Commemorates the birth anniversary of Henry Dunant.",
      "Honors volunteers providing emergency disaster relief worldwide."
    ],
    examFacts: ["Date: 8 May", "Honors: Henry Dunant (Founder)"],
    quickRemember: "World Red Cross Day is observed on 8 May, commemorating Henry Dunant's birthday.",
    audioText: "World Red Cross and Red Crescent Day was marked on May 8 to honor humanitarian workers.",
    source: "International Red Cross", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-MAY-008", date: "2026-05-11", month: "May 2026", category: "Science & Technology",
    title: "National Technology Day 2026 Commemorates Pokhran-II",
    summary: "India observed National Technology Day on 11 May, celebrating indigenous scientific milestones and Pokhran-II.",
    whatHappened: "National Technology Day was observed across India on 11 May 2026. The date commemorates the historic Pokhran-II nuclear tests of 1998, as well as India's aviation and indigenous tech milestones achieved by scientists.",
    importantPoints: [
      "Observed annually on 11 May in India.",
      "Commemorates the 1998 Pokhran-II nuclear tests (Operation Shakti).",
      "Celebrates indigenous technological and engineering achievements."
    ],
    examFacts: ["Date: 11 May", "Event: Pokhran-II Tests (1998)"],
    quickRemember: "National Technology Day is celebrated on 11 May, commemorating Pokhran-II.",
    audioText: "India observed National Technology Day on May 11, commemorating the historic Pokhran-II nuclear tests.",
    source: "Ministry of Science and Technology", importantFor: ["SSC CGL", "UPSC", "CDS"]
  },
  {
    id: "REC-MAY-009", date: "2026-05-12", month: "May 2026", category: "Health",
    title: "International Nurses Day 2026",
    summary: "International Nurses Day was observed globally on 12 May to honor the nursing workforce.",
    whatHappened: "International Nurses Day was celebrated worldwide on 12 May 2026, marking the birth anniversary of Florence Nightingale. The observance highlighted nurses' critical role in universal healthcare delivery and clinical resilience.",
    importantPoints: [
      "Observed annually on 12 May.",
      "Commemorates the birth anniversary of Florence Nightingale.",
      "Honors the dedication and frontline contributions of nurses."
    ],
    examFacts: ["Date: 12 May", "Honors: Florence Nightingale"],
    quickRemember: "International Nurses Day is observed on 12 May in honor of Florence Nightingale.",
    audioText: "International Nurses Day was observed globally on May 12 to honor the nursing workforce.",
    source: "International Council of Nurses", importantFor: ["SSC CGL", "SSC CHSL"]
  },
  {
    id: "REC-MAY-010", date: "2026-05-15", month: "May 2026", category: "Social Affairs",
    title: "International Day of Families 2026",
    summary: "The International Day of Families was observed on 15 May to focus on family-oriented social policies.",
    whatHappened: "The International Day of Families was marked globally on 15 May 2026. Proclaimed by the UN General Assembly, the day emphasizes the role of families in social development, intergenerational solidarity, and welfare support.",
    importantPoints: [
      "Observed annually on 15 May.",
      "Proclaimed by the United Nations General Assembly.",
      "Focuses on family policies, welfare, and social cohesion."
    ],
    examFacts: ["Date: 15 May", "Focus: Family welfare and social policies"],
    quickRemember: "International Day of Families is observed on 15 May.",
    audioText: "The International Day of Families was observed on May 15 to focus on family-oriented social policies.",
    source: "United Nations", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-MAY-011", date: "2026-05-17", month: "May 2026", category: "Health & Digital",
    title: "World Telecommunication and Information Society Day 2026",
    summary: "World Telecommunication Day was observed on 17 May to promote digital connectivity and inclusion.",
    whatHappened: "World Telecommunication and Information Society Day was observed on 17 May 2026. Led by the International Telecommunication Union (ITU), the day promotes bridging the global digital divide and expanding broadband access.",
    importantPoints: [
      "Observed annually on 17 May.",
      "Led by the International Telecommunication Union (ITU).",
      "Focuses on digital connectivity, cybersecurity, and technological inclusion."
    ],
    examFacts: ["Date: 17 May", "Lead Agency: ITU"],
    quickRemember: "World Telecommunication Day is observed on 17 May.",
    audioText: "World Telecommunication and Information Society Day was observed on May 17 to promote digital inclusion.",
    source: "ITU", importantFor: ["SSC CGL", "Bank PO"]
  },
  {
    id: "REC-MAY-012", date: "2026-05-18", month: "May 2026", category: "Art & Culture",
    title: "International Museum Day 2026",
    summary: "International Museum Day was celebrated on 18 May to highlight museums as cultural exchange hubs.",
    whatHappened: "International Museum Day was marked globally on 18 May 2026. Organized by the International Council of Museums (ICOM), the event encourages public engagement with historical preservation, art repositories, and cultural education.",
    importantPoints: [
      "Observed annually on 18 May.",
      "Organized by the International Council of Museums (ICOM).",
      "Highlights museums as vital spaces for cultural dialogue and heritage conservation."
    ],
    examFacts: ["Date: 18 May", "Organizer: ICOM"],
    quickRemember: "International Museum Day is celebrated on 18 May.",
    audioText: "International Museum Day was celebrated on May 18 to highlight museums as cultural exchange hubs.",
    source: "ICOM", importantFor: ["SSC CGL", "SSC CHSL"]
  },
  {
    id: "REC-MAY-013", date: "2026-05-20", month: "May 2026", category: "Environment & Agriculture",
    title: "World Bee Day 2026",
    summary: "World Bee Day was observed on 20 May to raise awareness of pollinators and ecological preservation.",
    whatHappened: "World Bee Day was celebrated worldwide on 20 May 2026. The UN-backed observance draws attention to the indispensable role bees and other pollinators play in agricultural productivity, biodiversity, and food security.",
    importantPoints: [
      "Observed annually on 20 May.",
      "Highlights the ecological importance of bees and pollinators.",
      "Promotes agricultural practices that protect bee habitats."
    ],
    examFacts: ["Date: 20 May", "Focus: Pollinator conservation and food security"],
    quickRemember: "World Bee Day is observed on 20 May for pollinator conservation.",
    audioText: "World Bee Day was observed on May 20 to raise awareness about the ecological importance of bees.",
    source: "United Nations", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-MAY-014", date: "2026-05-21", month: "May 2026", category: "National Affairs",
    title: "Anti-Terrorism Day 2026 Observed Across India",
    summary: "Anti-Terrorism Day was observed nationwide on 21 May to foster peace and counter extremist violence.",
    whatHappened: "Anti-Terrorism Day was observed across India on 21 May 2026. The day serves to generate awareness against violence and terrorism, promoting unity, peace, and national integration among citizens.",
    importantPoints: [
      "Observed annually on 21 May in India.",
      "Fosters anti-violence awareness and national unity.",
      "Commemorates the death anniversary of former PM Rajiv Gandhi."
    ],
    examFacts: ["Date: 21 May", "Commemorates: Former PM Rajiv Gandhi"],
    quickRemember: "Anti-Terrorism Day is observed across India on 21 May.",
    audioText: "Anti-Terrorism Day was observed across India on May 21 to foster peace and counter violence.",
    source: "Ministry of Home Affairs", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-MAY-015", date: "2026-05-22", month: "May 2026", category: "Environment",
    title: "International Day for Biological Diversity 2026",
    summary: "The International Day for Biological Diversity was observed on 22 May to advocate for ecosystem protection.",
    whatHappened: "The International Day for Biological Diversity was marked globally on 22 May 2026. Established by the United Nations, it focuses on halting biodiversity loss and promoting sustainable management of natural ecosystems.",
    importantPoints: [
      "Observed annually on 22 May.",
      "Established by the United Nations.",
      "Focuses on stopping biodiversity loss and protecting ecosystems."
    ],
    examFacts: ["Date: 22 May", "Focus: Biodiversity Conservation"],
    quickRemember: "International Day for Biological Diversity is observed on 22 May.",
    audioText: "The International Day for Biological Diversity was observed on May 22 to advocate for ecosystem protection.",
    source: "United Nations", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-MAY-016", date: "2026-05-24", month: "May 2026", category: "Environment & Wildlife",
    title: "World Schizophrenia Awareness Day 2026",
    summary: "World Schizophrenia Awareness Day was observed on 24 May to reduce mental health stigma.",
    whatHappened: "World Schizophrenia Awareness Day was observed on 24 May 2026 to dispel widespread societal myths surrounding schizophrenia, encourage early clinical intervention, and support mental healthcare access.",
    importantPoints: [
      "Observed annually on 24 May.",
      "Aims to reduce the social stigma of schizophrenia.",
      "Promotes early psychiatric treatment and patient support networks."
    ],
    examFacts: ["Date: 24 May", "Focus: Mental Health and Schizophrenia Awareness"],
    quickRemember: "World Schizophrenia Awareness Day is observed on 24 May.",
    audioText: "World Schizophrenia Awareness Day was observed on May 24 to reduce mental health stigma.",
    source: "Global Health Forums", importantFor: ["SSC CGL", "State PCS"]
  },
  {
    id: "REC-MAY-017", date: "2026-05-25", month: "May 2026", category: "Health",
    title: "World Thyroid Day 2026",
    summary: "World Thyroid Day was marked on 25 May to raise awareness about thyroid health disorders.",
    whatHappened: "World Thyroid Day was observed globally on 25 May 2026. The day highlights the prevalence of thyroid disorders, the importance of early diagnosis, and iodine deficiency prevention.",
    importantPoints: [
      "Observed annually on 25 May.",
      "Focuses on thyroid disease awareness and iodine nutrition.",
      "Promotes regular screening and clinical management."
    ],
    examFacts: ["Date: 25 May", "Focus: Thyroid Health Awareness"],
    quickRemember: "World Thyroid Day is observed on 25 May.",
    audioText: "World Thyroid Day was marked on May 25 to raise awareness about thyroid health disorders.",
    source: "World Thyroid Association", importantFor: ["SSC CGL", "SSC CHSL"]
  },
  {
    id: "REC-MAY-018", date: "2026-05-28", month: "May 2026", category: "Health & Social Affairs",
    title: "World Menstrual Hygiene Day 2026",
    summary: "Menstrual Hygiene Day was observed on 28 May to break taboos and ensure menstrual health access.",
    whatHappened: "World Menstrual Hygiene Day was observed globally on 28 May 2026. The day focuses on breaking social taboos, promoting safe menstrual management products, and improving sanitation facilities in schools and workplaces.",
    importantPoints: [
      "Observed annually on 28 May.",
      "Aims to break social taboos around menstruation.",
      "Promotes access to safe hygiene products and sanitation facilities."
    ],
    examFacts: ["Date: 28 May", "Focus: Menstrual Health and Sanitation"],
    quickRemember: "World Menstrual Hygiene Day is observed on 28 May.",
    audioText: "World Menstrual Hygiene Day was observed on May 28 to break taboos and ensure menstrual health access.",
    source: "WASH United / WHO", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-MAY-019", date: "2026-05-29", month: "May 2026", category: "Humanitarian & Defence",
    title: "International Day of UN Peacekeepers 2026",
    summary: "The International Day of UN Peacekeepers was observed on 29 May to honor personnel in global missions.",
    whatHappened: "The International Day of United Nations Peacekeepers was observed globally on 29 May 2026. The observance pays tribute to the uniformed and civilian personnel deployed in fragile conflict zones, honoring those who lost their lives in the line of duty.",
    importantPoints: [
      "Observed annually on 29 May.",
      "Honors UN peacekeepers serving in international conflict zones.",
      "Commemorates the sacrifices of fallen peace personnel."
    ],
    examFacts: ["Date: 29 May", "Lead Body: United Nations"],
    quickRemember: "International Day of UN Peacekeepers is observed on 29 May.",
    audioText: "The International Day of UN Peacekeepers was observed on May 29 to honor personnel in global missions.",
    source: "United Nations", importantFor: ["CDS", "UPSC", "SSC CGL"]
  },
  {
    id: "REC-MAY-020", date: "2026-05-31", month: "May 2026", category: "Health",
    title: "World No Tobacco Day 2026",
    summary: "World No Tobacco Day was observed on 31 May to discourage tobacco consumption worldwide.",
    whatHappened: "World No Tobacco Day was marked globally on 31 May 2026. Led by the World Health Organization, the campaign draws attention to the deadly health impacts of tobacco use and advocates for aggressive public policy curbs on marketing.",
    importantPoints: [
      "Observed annually on 31 May.",
      "Led globally by the World Health Organization (WHO).",
      "Focuses on curbing tobacco consumption and marketing."
    ],
    examFacts: ["Date: 31 May", "Lead Agency: WHO", "Focus: Anti-Tobacco Advocacy"],
    quickRemember: "World No Tobacco Day is observed on 31 May.",
    audioText: "World No Tobacco Day was observed on May 31 to discourage tobacco consumption worldwide.",
    source: "WHO", importantFor: ["SSC CGL", "SSC CHSL", "UPSC"]
  }
];

const mayRecallQuestionsBatch1 = [
  {
    id: "REC-Q-MAY-001", articleId: "REC-MAY-001", category: "Economy & Labour",
    question: "International Workers' Day (May Day) is observed across the globe on which date?",
    options: ["1 May", "15 May", "25 May", "31 May"],
    answer: 0, explanation: "International Workers' Day is observed annually on 1 May to honor labor rights and socio-economic achievements."
  },
  {
    id: "REC-Q-MAY-002", articleId: "REC-MAY-002", category: "Science & Technology",
    question: "Researchers at which institution successfully synthesized a high-performance, non-noble metal catalyst for low-cost green hydrogen production?",
    options: ["CSIR-IICT Hyderabad", "CSIR-NCL Pune", "IISc Bengaluru", "IIT Madras"],
    answer: 0, explanation: "CSIR-Indian Institute of Chemical Technology (IICT) synthesized a non-noble metal catalyst to slash water electrolysis costs."
  },
  {
    id: "REC-Q-MAY-003", articleId: "REC-MAY-003", category: "Defence & Aerospace",
    question: "The DRDO successfully completed the maiden developmental flight test of its next-generation long-range subsonic cruise missile from which test range?",
    options: ["Wheeler Island, Odisha", "Pokhran, Rajasthan", "Chandipur, Odisha", "Sriharikota, Andhra Pradesh"],
    answer: 2, explanation: "The test flight of the next-generation subsonic cruise missile prototype was conducted from the Integrated Test Range in Chandipur, Odisha."
  },
  {
    id: "REC-Q-MAY-004", articleId: "REC-MAY-004", category: "Health",
    question: "World Hand Hygiene Day is observed globally on 5 May under the guidance of which organization?",
    options: ["UNICEF", "World Health Organization (WHO)", "Red Cross International", "Médecins Sans Frontières"],
    answer: 1, explanation: "The WHO leads World Hand Hygiene Day to promote proper handwashing protocols and infection control in clinics."
  },
  {
    id: "REC-Q-MAY-005", articleId: "REC-MAY-005", category: "Economy & Infrastructure",
    question: "India's first automated, AI-managed traffic underpass network designed to ease congestion was inaugurated in which city?",
    options: ["Mumbai", "Hyderabad", "Bengaluru", "Chennai"],
    answer: 2, explanation: "Bengaluru inaugurated an integrated network of AI-managed traffic underpasses along its tech corridors."
  },
  {
    id: "REC-Q-MAY-006", articleId: "REC-MAY-006", category: "Environment",
    question: "World Athletics Day is celebrated worldwide on which date to encourage youth athletic training and physical fitness?",
    options: ["7 May", "14 May", "21 May", "28 May"],
    answer: 0, explanation: "World Athletics Day is observed annually on 7 May, established by World Athletics to promote youth sports engagement."
  },
  {
    id: "REC-Q-MAY-007", articleId: "REC-MAY-007", category: "Humanitarian",
    question: "World Red Cross and Red Crescent Day is observed on 8 May to commemorate the birth anniversary of whom?",
    options: ["Florence Nightingale", "Henry Dunant", "Jean-Henri Dunant", "Clara Barton"],
    answer: 1, explanation: "May 8 commemorates the birth anniversary of Henry Dunant, the founder of the Red Cross and first Nobel Peace Prize laureate."
  },
  {
    id: "REC-Q-MAY-008", articleId: "REC-MAY-008", category: "Science & Technology",
    question: "National Technology Day is observed across India on 11 May to commemorate which historic scientific milestone?",
    options: ["Aryabhata satellite launch", "Pokhran-II nuclear tests", "Agni-V intercontinental missile flight", "Chandrayaan-1 lunar orbit insertion"],
    answer: 1, explanation: "National Technology Day on 11 May commemorates the historic Pokhran-II nuclear tests of 1998."
  },
  {
    id: "REC-Q-MAY-009", articleId: "REC-MAY-009", category: "Health",
    question: "International Nurses Day is observed globally on 12 May, marking the birth anniversary of:",
    options: ["Mary Seacole", "Florence Nightingale", "Clara Barton", "Edith Cavell"],
    answer: 1, explanation: "International Nurses Day marks the birth anniversary of Florence Nightingale."
  },
  {
    id: "REC-Q-MAY-010", articleId: "REC-MAY-010", category: "Social Affairs",
    question: "The International Day of Families, emphasizing family-oriented social policies and intergenerational solidarity, is marked globally on:",
    options: ["1 May", "15 May", "25 May", "30 May"],
    answer: 1, explanation: "The International Day of Families is observed annually on 15 May."
  },
  {
    id: "REC-Q-MAY-011", articleId: "REC-MAY-011", category: "Health & Digital",
    question: "World Telecommunication and Information Society Day is led globally on 17 May by which organization?",
    options: ["Universal Postal Union (UPU)", "International Telecommunication Union (ITU)", "World Economic Forum (WEF)", "Internet Corporation for Assigned Names (ICANN)"],
    answer: 1, explanation: "The International Telecommunication Union (ITU) leads the observance of World Telecommunication Day on 17 May."
  },
  {
    id: "REC-Q-MAY-012", articleId: "REC-MAY-012", category: "Art & Culture",
    question: "International Museum Day, highlighting museums as vital spaces for cultural dialogue, is organized by:",
    options: ["UNESCO", "International Council of Museums (ICOM)", "World Cultural Heritage Foundation", "Smithsonian Institution"],
    answer: 1, explanation: "International Museum Day on 18 May is organized by the International Council of Museums (ICOM)."
  },
  {
    id: "REC-Q-MAY-013", articleId: "REC-MAY-013", category: "Environment & Agriculture",
    question: "World Bee Day is celebrated worldwide on 20 May to draw attention to the indispensable role of pollinators in:",
    options: ["Global carbon sequestration", "Agricultural productivity and food security", "Desertification reversal projects", "Atmospheric nitrogen fixation"],
    answer: 1, explanation: "World Bee Day highlights the vital role bees and pollinators play in agricultural productivity and food security."
  },
  {
    id: "REC-Q-MAY-014", articleId: "REC-MAY-014", category: "National Affairs",
    question: "Anti-Terrorism Day is observed across India on 21 May, which also commemorates the death anniversary of former Prime Minister:",
    options: ["Indira Gandhi", "Jawaharlal Nehru", "Rajiv Gandhi", "Lal Bahadur Shastri"],
    answer: 2, explanation: "Anti-Terrorism Day on 21 May commemorates the death anniversary of former Prime Minister Rajiv Gandhi."
  },
  {
    id: "REC-Q-MAY-015", articleId: "REC-MAY-015", category: "Environment",
    question: "The International Day for Biological Diversity, focusing on halting biodiversity loss, is observed annually on:",
    options: ["22 May", "5 June", "22 April", "16 September"],
    answer: 0, explanation: "The International Day for Biological Diversity is observed on 22 May."
  },
  {
    id: "REC-Q-MAY-016", articleId: "REC-MAY-016", category: "Environment & Wildlife",
    question: "World Schizophrenia Awareness Day is observed on 24 May primarily to:",
    options: ["Fund advanced neurosurgical robotics", "Reduce social stigma and encourage early psychiatric intervention", "Test pharmaceutical clinical trials", "Promote institutional asylum care"],
    answer: 1, explanation: "World Schizophrenia Awareness Day on 24 May aims to dispel societal myths and encourage early clinical intervention."
  },
  {
    id: "REC-Q-MAY-017", articleId: "REC-MAY-017", category: "Health",
    question: "World Thyroid Day is marked globally on 25 May to highlight thyroid disorders and the prevention of:",
    options: ["Iodine deficiency", "Iron deficiency anemia", "Calcium resorption defects", "Vitamin D deficiency rickets"],
    answer: 0, explanation: "World Thyroid Day highlights thyroid disease prevalence, early diagnosis, and iodine deficiency prevention."
  },
  {
    id: "REC-Q-MAY-018", articleId: "REC-MAY-018", category: "Health & Social Affairs",
    question: "World Menstrual Hygiene Day is observed globally on which date to break social taboos and improve sanitation access?",
    options: ["8 May", "18 May", "28 May", "31 May"],
    answer: 2, explanation: "World Menstrual Hygiene Day is observed on 28 May to promote safe menstrual management and break taboos."
  },
  {
    id: "REC-Q-MAY-019", articleId: "REC-MAY-019", category: "Humanitarian & Defence",
    question: "The International Day of United Nations Peacekeepers is observed annually on which date to honor personnel in conflict zones?",
    options: ["1 May", "12 May", "21 May", "29 May"],
    answer: 3, explanation: "International Day of UN Peacekeepers is observed on 29 May to pay tribute to uniformed and civilian personnel in global missions."
  },
  {
    id: "REC-Q-MAY-020", articleId: "REC-MAY-020", category: "Health",
    question: "World No Tobacco Day is marked globally on 31 May under the leadership of which organization?",
    options: ["World Health Organization (WHO)", "Global Public Health Alliance", "International Anti-Smoking League", "Centers for Disease Control"],
    answer: 0, explanation: "World No Tobacco Day is led globally on 31 May by the World Health Organization (WHO)."
  }
];

// 👉 PUSH DATA INTO GLOBAL ARRAYS
if (typeof hiddenRecallArticles !== 'undefined') {
  hiddenRecallArticles.push(...mayRecallArticlesBatch1);
}
if (typeof recallQuestionPool !== 'undefined') {
  recallQuestionPool.push(...mayRecallQuestionsBatch1);
}

/* ==========================================================================
   END OF MAY BATCH 1
   ========================================================================== */
/* ==========================================================================
   MAY 2026 - BATCH 2 (ITEMS 021 TO 040)
   ========================================================================== */

const mayRecallArticlesBatch2 = [
  {
    id: "REC-MAY-021", date: "2026-05-01", month: "May 2026", category: "Economy & Trade",
    title: "India Goods Exports Record Growth in April 2026",
    summary: "The Ministry of Commerce released merchandise trade figures showing strong export performance at the start of FY27.",
    whatHappened: "The Ministry of Commerce and Industry released preliminary merchandise trade data indicating robust performance in April 2026, driven by double-digit growth in electronics, engineering goods, and pharmaceutical shipments.",
    importantPoints: [
      "Merchandise trade data released for April 2026.",
      "Driven by growth in electronics, engineering goods, and pharmaceuticals.",
      "Reflects strong start to the 2026-27 fiscal export cycle."
    ],
    examFacts: ["Data: Merchandise Trade", "Period: April 2026", "Key Sectors: Electronics, Pharma, Engineering"],
    quickRemember: "India's goods exports recorded strong growth in April 2026 driven by electronics and pharma.",
    audioText: "The Commerce Ministry released merchandise trade figures showing strong export growth in April 2026.",
    source: "Ministry of Commerce", importantFor: ["SSC CGL", "Bank PO", "UPSC"]
  },
  {
    id: "REC-MAY-022", date: "2026-05-02", month: "May 2026", category: "Science & Technology",
    title: "ISRO Successfully Conducts C20 Cryogenic Engine Ignition Trials",
    summary: "ISRO completed static firing tests on the C20 cryogenic upper-stage engine for future LVM3 missions.",
    whatHappened: "The Indian Space Research Organisation (ISRO) successfully completed a rigorous series of long-duration static firing tests on the C20 cryogenic upper-stage engine at the Propulsion Complex in Mahendragiri, validating performance parameters for upcoming heavy satellite launches.",
    importantPoints: [
      "Static firing tests completed on the C20 cryogenic upper-stage engine.",
      "Conducted at IPRC, Mahendragiri, Tamil Nadu.",
      "Powers the upper stage of LVM3 heavy-lift launch vehicles."
    ],
    examFacts: ["Engine: C20 Cryogenic", "Mission Support: LVM3", "Agency: ISRO"],
    quickRemember: "ISRO successfully conducted static tests on the C20 cryogenic upper-stage engine.",
    audioText: "ISRO successfully completed static firing tests on the C20 cryogenic upper-stage engine at Mahendragiri.",
    source: "ISRO", importantFor: ["SSC CGL", "UPSC", "CDS"]
  },
  {
    id: "REC-MAY-023", date: "2026-05-04", month: "May 2026", category: "Environment",
    title: "India Achieves Milestone in Solar PV Manufacturing Capacity",
    summary: "MNRE data confirmed that India's domestic solar PV module manufacturing capacity surpassed 65 GW.",
    whatHappened: "Data published by the Ministry of New and Renewable Energy (MNRE) revealed that India's domestic solar photovoltaic (PV) module manufacturing nameplate capacity has officially crossed 65 GW, backed by the Production Linked Incentive (PLI) scheme.",
    importantPoints: [
      "Domestic solar PV manufacturing capacity surpassed 65 GW.",
      "Supported by the National Solar PLI scheme.",
      "Reduces import dependency on photovoltaic wafers and modules."
    ],
    examFacts: ["Capacity: >65 GW Solar PV", "Ministry: MNRE"],
    quickRemember: "India's domestic solar PV manufacturing capacity crossed 65 GW.",
    audioText: "Official data confirmed that India's domestic solar PV manufacturing capacity surpassed 65 gigawatts.",
    source: "MNRE", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-MAY-024", date: "2026-05-05", month: "May 2026", category: "Defence",
    title: "Indian Navy Commissions Advanced Survey Vessel 'INS Nirdeshak'",
    summary: "The second Survey Vessel (Large) project ship, INS Nirdeshak, was commissioned into the Indian Navy.",
    whatHappened: "The Indian Navy formally commissioned 'INS Nirdeshak', the second ship of the Survey Vessel Large (SVL) project, built by Garden Reach Shipbuilders & Engineers (GRSE) in Kolkata, to undertake hydrographic surveys and oceanographic mapping.",
    importantPoints: [
      "Survey Vessel 'INS Nirdeshak' commissioned into the Indian Navy.",
      "Second ship of the Survey Vessel Large (SVL) project.",
      "Built by GRSE in Kolkata for hydrographic mapping."
    ],
    examFacts: ["Ship: INS Nirdeshak", "Builder: GRSE Kolkata", "Role: Hydrographic Surveys"],
    quickRemember: "The survey vessel INS Nirdeshak was commissioned into the Indian Navy.",
    audioText: "The Indian Navy commissioned the advanced survey vessel INS Nirdeshak built by GRSE in Kolkata.",
    source: "Indian Navy", importantFor: ["CDS", "SSC CGL"]
  },
  {
    id: "REC-MAY-025", date: "2026-05-06", month: "May 2026", category: "Government Schemes",
    title: "Ministry of Housing Expands PM Street Vendor Micro-Credit Portal",
    summary: "PM SVANidhi digital portal was upgraded with automated bank account verification and credit scoring tools.",
    whatHappened: "The Ministry of Housing and Urban Affairs (MoHUA) launched an upgraded version of the PM SVANidhi digital portal, integrating automated bank account verification and instant credit scoring to fast-track digital micro-loans for street vendors.",
    importantPoints: [
      "Upgraded PM SVANidhi digital portal launched by MoHUA.",
      "Integrates automated bank verification and instant credit scoring.",
      "Fast-tracks digital micro-loans for urban street vendors."
    ],
    examFacts: ["Portal: PM SVANidhi Upgraded", "Ministry: MoHUA"],
    quickRemember: "The PM SVANidhi portal was upgraded with automated bank verification for street vendor loans.",
    audioText: "The Housing Ministry upgraded the PM SVANidhi portal with automated bank verification and instant credit scoring.",
    source: "MoHUA", importantFor: ["SSC CGL", "Bank PO"]
  },
  {
    id: "REC-MAY-026", date: "2026-05-07", month: "May 2026", category: "Economy & Banking",
    title: "RBI Directs Banks to Expand UPI Lite Wallet Limits",
    summary: "The RBI revised operational guidelines enabling higher transaction caps and auto-top-up features for UPI Lite.",
    whatHappened: "The Reserve Bank of India issued operational circulars directing payment system operators to enable auto-top-up capabilities and higher balance thresholds for UPI Lite wallets, driving seamless offline-to-online micro-payments.",
    importantPoints: [
      "RBI revised operational guidelines for UPI Lite wallets.",
      "Enables auto-top-up features and higher balance thresholds.",
      "Drives seamless micro-payments across retail merchants."
    ],
    examFacts: ["Regulator: RBI", "Feature: UPI Lite Auto-Top-Up"],
    quickRemember: "The RBI directed banks to enable auto-top-up features and higher limits for UPI Lite wallets.",
    audioText: "The Reserve Bank of India issued guidelines enabling auto-top-up features and higher balance limits for UPI Lite wallets.",
    source: "RBI", importantFor: ["Bank PO", "SSC CGL"]
  },
  {
    id: "REC-MAY-027", date: "2026-05-08", month: "May 2026", category: "Science & Technology",
    title: "IIT Madras Develops Affordable Prosthetic Knee Joint",
    summary: "Engineers at IIT Madras engineered an affordable, high-mobility prosthetic knee joint called 'Kadam'.",
    whatHappened: "Researchers at IIT Madras successfully commercialized 'Kadam', an affordable, highly durable micro-processor assisted prosthetic knee joint designed specifically for trans-femoral amputees to navigate uneven terrain with natural gait stability.",
    importantPoints: [
      "Prosthetic knee joint named 'Kadam' developed by IIT Madras.",
      "Designed for trans-femoral amputees for natural gait stability on uneven terrain.",
      "Offers high mobility at a fraction of imported prosthetic costs."
    ],
    examFacts: ["Innovation: Kadam Prosthetic Knee", "Institute: IIT Madras"],
    quickRemember: "IIT Madras developed an affordable prosthetic knee joint named 'Kadam'.",
    audioText: "Engineers at IIT Madras developed an affordable, highly durable prosthetic knee joint called Kadam.",
    source: "IIT Madras", importantFor: ["SSC CGL", "State PCS"]
  },
  {
    id: "REC-MAY-028", date: "2026-05-11", month: "May 2026", category: "International Affairs",
    title: "India and ASEAN Conclude Maritime Security Exercise",
    summary: "Naval forces from India and ASEAN member states completed joint maritime exercises in the South China Sea.",
    whatHappened: "Naval units representing India and multiple ASEAN member states successfully concluded the bilateral maritime security exercise, conducting coordinated anti-piracy drills and search-and-rescue interoperability maneuvers.",
    importantPoints: [
      "India-ASEAN maritime security exercise concluded.",
      "Conducted joint anti-piracy and search-and-rescue drills.",
      "Strengthens regional maritime partnership and security."
    ],
    examFacts: ["Participants: Indian Navy and ASEAN Fleets", "Focus: Maritime Security"],
    quickRemember: "India and ASEAN concluded joint maritime security exercises.",
    audioText: "Naval forces from India and ASEAN member states completed joint maritime security exercises.",
    source: "MEA", importantFor: ["UPSC", "CDS", "SSC CGL"]
  },
  {
    id: "REC-MAY-029", date: "2026-05-12", month: "May 2026", category: "Environment & Wildlife",
    title: "New Plant Species 'Impatiens kadaladiensis' Discovered in Western Ghats",
    summary: "Botanists discovered a vibrant new balsam plant species in the evergreen forests of the Western Ghats.",
    whatHappened: "Botanical researchers formally described a new flowering plant species belonging to the balsam family, named *Impatiens kadaladiensis*, discovered blooming in the damp evergreen forest understories of the Western Ghats in Kerala.",
    importantPoints: [
      "New balsam plant species named *Impatiens kadaladiensis*.",
      "Discovered in the Western Ghats of Kerala.",
      "Highlights floral endemism and plant biodiversity in the region."
    ],
    examFacts: ["Species: Impatiens kadaladiensis", "Location: Western Ghats, Kerala"],
    quickRemember: "A new balsam plant species, Impatiens kadaladiensis, was discovered in the Western Ghats.",
    audioText: "Botanists discovered a new balsam plant species named Impatiens kadaladiensis in the Western Ghats.",
    source: "Botanical Survey of India", importantFor: ["SSC CGL", "State PCS"]
  },
  {
    id: "REC-MAY-030", date: "2026-05-13", month: "May 2026", category: "Economy & Trade",
    title: "India Joins Global Cross-Border Paperless Trade Framework",
    summary: "India officially ratified the UN ESCAP Framework Agreement on Facilitation of Cross-Border Paperless Trade.",
    whatHappened: "The Ministry of Commerce announced that India has formally deposited its instrument of ratification for the UN ESCAP Framework Agreement on Facilitation of Cross-Border Paperless Trade, accelerating digital customs integration across Asia-Pacific.",
    importantPoints: [
      "India ratified the UN ESCAP Framework Agreement on Cross-Border Paperless Trade.",
      "Accelerates electronic customs and trade document interchange.",
      "Streamlines export-import supply chains across Asia-Pacific."
    ],
    examFacts: ["Framework: UN ESCAP Cross-Border Paperless Trade", "Agency: Ministry of Commerce"],
    quickRemember: "India ratified the UN ESCAP framework for cross-border paperless trade.",
    audioText: "The Commerce Ministry announced that India ratified the UN ESCAP framework for cross-border paperless trade.",
    source: "Ministry of Commerce", importantFor: ["UPSC", "SSC CGL"]
  },
  {
    id: "REC-MAY-031", date: "2026-05-14", month: "May 2026", category: "Government Schemes",
    title: "Ministry of Agriculture Launches National Seed Traceability Portal 'Sathi'",
    summary: "A unified digital portal named 'Sathi' was launched to track certified seed quality across supply chains.",
    whatHappened: "The Ministry of Agriculture and Farmers Welfare launched the 'Sathi' (Seed Traceability, Authentication and Holistic Inventory) portal, a centralized digital blockchain-backed ledger to track certified agricultural seeds from producer labs to retail farmers.",
    importantPoints: [
      "Seed Traceability Portal 'Sathi' launched by Ministry of Agriculture.",
      "Uses blockchain-backed ledger tracking for certified seeds.",
      "Ensures farmers receive authentic, high-quality agricultural seeds."
    ],
    examFacts: ["Portal: Sathi Portal", "Ministry: Ministry of Agriculture", "Focus: Seed Traceability & Quality"],
    quickRemember: "The Ministry of Agriculture launched the 'Sathi' portal for agricultural seed traceability.",
    audioText: "The Agriculture Ministry launched the Sathi portal to track certified agricultural seed quality across supply chains.",
    source: "Ministry of Agriculture", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-MAY-032", date: "2026-05-15", month: "May 2026", category: "Science & Technology",
    title: "CSIR-NEERI Develops Indigenous Continuous Ambient Air Monitoring Analyzers",
    summary: "CSIR-NEERI successfully commercialized low-cost continuous ambient air quality monitoring instruments.",
    whatHappened: "The CSIR-National Environmental Engineering Research Institute (NEERI) successfully transferred technology for its indigenously developed Continuous Ambient Air Monitoring System (CAAMS) analyzers, slashing municipal air monitoring setup expenses.",
    importantPoints: [
      "Indigenously developed CAAMS analyzers by CSIR-NEERI.",
      "Monitors real-time criteria pollutants at a fraction of imported equipment cost.",
      "Aims to expand municipal air quality monitoring networks."
    ],
    examFacts: ["Developer: CSIR-NEERI Nagpur", "Technology: CAAMS Analyzers"],
    quickRemember: "CSIR-NEERI developed indigenous continuous ambient air monitoring analyzers.",
    audioText: "CSIR-NEERI successfully commercialized indigenously developed continuous ambient air monitoring analyzers.",
    source: "CSIR", importantFor: ["SSC CGL", "State PCS"]
  },
  {
    id: "REC-MAY-033", date: "2026-05-18", month: "May 2026", category: "Defence",
    title: "DRDO Successfully Test-Fires 'Abhyas' High-Speed Expendable Aerial Target",
    summary: "DRDO completed flight validation trials of the Abhyas high-speed expendable aerial target drone.",
    whatHappened: "The Defence Research and Development Organisation (DRDO) successfully completed flight-test evaluations of the 'Abhyas' High-speed Expendable Aerial Target (HEAT) from the Integrated Test Range in Chandipur, Odisha, simulating incoming anti-ship missile threats.",
    importantPoints: [
      "Flight-test evaluations of the 'Abhyas' HEAT drone completed.",
      "Conducted at Chandipur, Odisha.",
      "Simulates high-speed missile threats for weapon system calibration."
    ],
    examFacts: ["Target Drone: Abhyas HEAT", "Test Site: Chandipur, Odisha", "Agency: DRDO"],
    quickRemember: "DRDO successfully flight-tested the Abhyas high-speed expendable aerial target drone.",
    audioText: "DRDO successfully completed flight validation trials of the Abhyas high-speed expendable aerial target drone.",
    source: "Ministry of Defence", importantFor: ["CDS", "SSC CGL"]
  },
  {
    id: "REC-MAY-034", date: "2026-05-19", month: "May 2026", category: "Economy & Infrastructure",
    title: "Inauguration of New Integrated Cargo Terminal at Lucknow Airport",
    summary: "A modern cold-chain equipped cargo facility was inaugurated at Chaudhary Charan Singh International Airport.",
    whatHappened: "A state-of-the-art integrated cargo terminal featuring specialized pharmaceutical cold-storage chambers was inaugurated at Chaudhary Charan Singh International Airport in Lucknow, boosting agricultural and pharma exports from Uttar Pradesh.",
    importantPoints: [
      "Integrated cargo terminal inaugurated at Lucknow Airport.",
      "Features specialized pharmaceutical cold-storage chambers.",
      "Boosts agricultural and industrial exports from Uttar Pradesh."
    ],
    examFacts: ["Facility: Integrated Cargo Terminal", "Airport: Lucknow Airport"],
    quickRemember: "A new integrated cargo terminal with cold-chain facilities was inaugurated at Lucknow Airport.",
    audioText: "A modern cold-chain equipped cargo facility was inaugurated at Lucknow Airport.",
    source: "Ministry of Civil Aviation", importantFor: ["SSC CGL", "State PCS"]
  },
  {
    id: "REC-MAY-035", date: "2026-05-20", month: "May 2026", category: "International Affairs",
    title: "India and Japan Hold 8th Annual Cyber Security Dialogue",
    summary: "New Delhi and Tokyo convened their annual Cyber Security Dialogue in New Delhi to strengthen threat intelligence.",
    whatHappened: "India and Japan successfully held their 8th bilateral Cyber Security Dialogue in New Delhi. Discussions focused on securing critical national infrastructure, countering ransomware networks, and joint capacity building in quantum encryption defense.",
    importantPoints: [
      "8th bilateral Cyber Security Dialogue between India and Japan.",
      "Held in New Delhi.",
      "Focuses on critical infrastructure protection and quantum encryption defense."
    ],
    examFacts: ["Event: 8th India-Japan Cyber Dialogue", "Location: New Delhi"],
    quickRemember: "India and Japan held their 8th annual Cyber Security Dialogue in New Delhi.",
    audioText: "India and Japan convened their annual Cyber Security Dialogue in New Delhi to strengthen threat intelligence.",
    source: "MEA", importantFor: ["UPSC", "SSC CGL", "CDS"]
  },
  {
    id: "REC-MAY-036", date: "2026-05-21", month: "May 2026", category: "Environment & Energy",
    title: "NTPC Commissions India's First Commercial Geothermal Hybrid Microgrid",
    summary: "NTPC operationalized a hybrid renewable energy microgrid integrating geothermal heat and solar PV.",
    whatHappened: "NTPC Limited commissioned an innovative hybrid microgrid project integrating geothermal heat exchangers and solar photovoltaic generation in Ladakh, providing reliable round-the-clock clean energy to remote Himalayan settlements.",
    importantPoints: [
      "Hybrid microgrid integrating geothermal heat and solar PV commissioned by NTPC.",
      "Located in Ladakh.",
      "Provides round-the-clock clean power to remote high-altitude settlements."
    ],
    examFacts: ["Company: NTPC", "Facility: Geothermal-Solar Hybrid Microgrid", "Location: Ladakh"],
    quickRemember: "NTPC commissioned a geothermal and solar hybrid microgrid project in Ladakh.",
    audioText: "NTPC commissioned India's first commercial geothermal hybrid microgrid facility in Ladakh.",
    source: "Ministry of Power", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-MAY-037", date: "2026-05-22", month: "May 2026", category: "National Affairs",
    title: "Ministry of Home Affairs Launches National Automated Facial Recognition System",
    summary: "MHA deployed the Centralized Automated Facial Recognition System (AFRS) across state police departments.",
    whatHappened: "The Ministry of Home Affairs deployed the Centralized Automated Facial Recognition System (AFRS) linked to national crime databases, empowering state police forces to rapidly identify suspects and trace missing persons at transit hubs.",
    importantPoints: [
      "Automated Facial Recognition System (AFRS) deployed by MHA.",
      "Linked to national criminal databases for rapid suspect identification.",
      "Installed across major transit hubs and state police control rooms."
    ],
    examFacts: ["System: AFRS (Automated Facial Recognition)", "Ministry: Ministry of Home Affairs"],
    quickRemember: "MHA deployed the Centralized Automated Facial Recognition System across state police units.",
    audioText: "The Home Ministry deployed the Centralized Automated Facial Recognition System across state police departments.",
    source: "Ministry of Home Affairs", importantFor: ["SSC CGL", "UPSC", "CDS"]
  },
  {
    id: "REC-MAY-038", date: "2026-05-25", month: "May 2026", category: "Economy & Trade",
    title: "India and UK Conclude Latest Round of Free Trade Agreement Talks",
    summary: "Negotiating teams from India and the United Kingdom held productive sessions in London to finalize pending chapters.",
    whatHappened: "Delegations from India and the United Kingdom concluded a productive round of Free Trade Agreement (FTA) negotiations in London, successfully resolving technical hurdles across services mobilities and origin rules.",
    importantPoints: [
      "FTA negotiation round concluded between India and the UK in London.",
      "Resolved technical hurdles across services mobilities and origin rules.",
      "Aims to establish a comprehensive bilateral economic partnership."
    ],
    examFacts: ["Partners: India and UK", "Talks Location: London"],
    quickRemember: "India and the UK concluded a productive round of Free Trade Agreement negotiations in London.",
    audioText: "Negotiating teams from India and the UK held productive sessions in London to finalize pending FTA chapters.",
    source: "Ministry of Commerce", importantFor: ["UPSC", "SSC CGL"]
  },
  {
    id: "REC-MAY-039", date: "2026-05-26", month: "May 2026", category: "Science & Space",
    title: "ISRO Successfully Completes Navigation Payload Tests for NVS-03",
    summary: "ISRO validated advanced rubidium atomic clock payloads for the upcoming NVS-03 navigation satellite.",
    whatHappened: "ISRO successfully completed environmental and thermal vacuum testing of the indigenous rubidium atomic clock payload intended for the NVS-03 navigation satellite, ensuring sub-nanosecond timing precision for NavIC users.",
    importantPoints: [
      "Rubidium atomic clock payload successfully tested for NVS-03.",
      "Ensures sub-nanosecond timing precision for the NavIC constellation.",
      "Tested by ISRO facilities."
    ],
    examFacts: ["Payload: Rubidium Atomic Clock", "Mission: NVS-03 (NavIC)", "Agency: ISRO"],
    quickRemember: "ISRO completed navigation payload tests for the upcoming NVS-03 satellite.",
    audioText: "ISRO successfully completed navigation payload tests involving rubidium atomic clocks for the NVS-03 satellite.",
    source: "ISRO", importantFor: ["SSC CGL", "UPSC", "CDS"]
  },
  {
    id: "REC-MAY-040", date: "2026-05-27", month: "May 2026", category: "Economy & Banking",
    title: "SEBI Introduces Real-Time Risk Management System for Mutual Funds",
    summary: "SEBI mandated automated real-time risk surveillance protocols for mutual fund asset management companies.",
    whatHappened: "The Securities and Exchange Board of India (SEBI) issued a circular mandating all mutual fund Asset Management Companies (AMCs) to implement real-time automated risk management and liquidity monitoring systems.",
    importantPoints: [
      "SEBI mandated real-time risk management systems for mutual funds (AMCs).",
      "Enhances liquidity monitoring and systemic risk surveillance.",
      "Protects retail investor interests in dynamic market conditions."
    ],
    examFacts: ["Regulator: SEBI", "Mandate: Real-Time Risk Management for AMCs"],
    quickRemember: "SEBI introduced real-time risk management systems for mutual fund asset management companies.",
    audioText: "SEBI mandated automated real-time risk management and liquidity monitoring systems for mutual funds.",
    source: "SEBI", importantFor: ["Bank PO", "SSC CGL"]
  }
];

const mayRecallQuestionsBatch2 = [
  {
    id: "REC-Q-MAY-021", articleId: "REC-MAY-021", category: "Economy & Trade",
    question: "Preliminary merchandise trade data released by the Ministry of Commerce for April 2026 showed strong export performance driven by double-digit growth in:",
    options: ["Crude oil derivatives and coal briquettes", "Electronics, engineering goods, and pharmaceuticals", "Raw agricultural cotton and jute textiles", "Precious gold bullion and rough diamonds"],
    answer: 1, explanation: "April 2026 merchandise exports showed robust growth driven by electronics, engineering goods, and pharmaceutical shipments."
  },
  {
    id: "REC-Q-MAY-022", articleId: "REC-MAY-022", category: "Science & Technology",
    question: "ISRO completed a rigorous series of long-duration static firing tests on which cryogenic upper-stage engine at Mahendragiri?",
    options: ["CE-20 Cryogenic Engine", "C20 Cryogenic Engine", "Vikas-Cryo Variant", "Scylla Upper-Stage Engine"],
    answer: 1, explanation: "ISRO successfully completed static firing tests on the C20 cryogenic upper-stage engine for future LVM3 missions."
  },
  {
    id: "REC-Q-MAY-023", articleId: "REC-MAY-023", category: "Environment",
    question: "Data published by the Ministry of New and Renewable Energy (MNRE) revealed that India's domestic solar PV module manufacturing capacity surpassed:",
    options: ["30 GW", "45 GW", "50 GW", "65 GW"],
    answer: 3, explanation: "India's domestic solar photovoltaic (PV) module manufacturing nameplate capacity officially crossed 65 GW."
  },
  {
    id: "REC-Q-MAY-024", articleId: "REC-MAY-024", category: "Defence",
    question: "The Indian Navy commissioned 'INS Nirdeshak', the second ship of the Survey Vessel Large project, which was built by:",
    options: ["Mazagon Dock Shipbuilders, Mumbai", "Garden Reach Shipbuilders & Engineers (GRSE), Kolkata", "Cochin Shipyard Limited, Kochi", "Goa Shipyard Limited, Vasco da Gama"],
    answer: 1, explanation: "INS Nirdeshak was built by Garden Reach Shipbuilders & Engineers (GRSE) in Kolkata for hydrographic surveys."
  },
  {
    id: "REC-Q-MAY-025", articleId: "REC-MAY-025", category: "Government Schemes",
    question: "The Ministry of Housing and Urban Affairs upgraded the PM SVANidhi portal to integrate automated bank account verification and:",
    options: ["Instant credit scoring tools for fast-tracked micro-loans", "Direct Aadhaar biometric subsidy disbursal", "Municipal vendor license geolocation mapping", "GST turnover tax exemption filings"],
    answer: 0, explanation: "The upgraded PM SVANidhi portal integrates automated bank verification and instant credit scoring to fast-track digital micro-loans."
  },
  {
    id: "REC-Q-MAY-026", articleId: "REC-Q-MAY-026", category: "Economy & Banking",
    question: "The Reserve Bank of India issued operational circulars directing payment system operators to enable auto-top-up capabilities for which digital payment wallet?",
    options: ["e-Rupi Corporate Vouchers", "UPI Lite wallets", "Bharat Bill Pay FASTag cards", "National Common Mobility prepaid cards"],
    answer: 1, explanation: "The RBI enabled auto-top-up capabilities and higher balance thresholds for UPI Lite wallets."
  },
  {
    id: "REC-Q-MAY-027", articleId: "REC-MAY-027", category: "Science & Technology",
    question: "Researchers at IIT Madras commercialized an affordable prosthetic knee joint designed for trans-femoral amputees, named:",
    options: ["Vikram-Joint", "Kadam", "Sahara-Prosthetic", "Dhruba-Flex"],
    answer: 1, explanation: "IIT Madras commercialized 'Kadam', an affordable micro-processor assisted prosthetic knee joint."
  },
  {
    id: "REC-Q-MAY-028", articleId: "REC-MAY-028", category: "International Affairs",
    question: "Naval units representing India and multiple ASEAN member states successfully concluded maritime security exercises in which region?",
    options: ["Bay of Bengal", "South China Sea", "Andaman Sea", "Gulf of Thailand"],
    answer: 1, explanation: "Naval forces from India and ASEAN member states completed joint maritime security exercises in the South China Sea."
  },
  {
    id: "REC-Q-MAY-029", articleId: "REC-MAY-029", category: "Environment & Wildlife",
    question: "Botanical researchers described a new flowering plant species belonging to the balsam family named *Impatiens kadaladiensis*, discovered in:",
    options: ["Eastern Himalayas, Sikkim", "Western Ghats, Kerala", "Shivalik Hills, Uttarakhand", "Nilgiri Plateau, Tamil Nadu"],
    answer: 1, explanation: "Impatiens kadaladiensis is a new balsam plant species discovered in the evergreen forests of the Western Ghats in Kerala."
  },
  {
    id: "REC-Q-MAY-030", articleId: "REC-MAY-030", category: "Economy & Trade",
    question: "India deposited its instrument of ratification for the UN ESCAP Framework Agreement on Facilitation of:",
    options: ["Cross-Border Paperless Trade", "Green Logistics and Maritime Carbon Offsets", "Digital Intellectual Property Enforcement", "Open-Source FinTech Remittance Gateways"],
    answer: 0, explanation: "India ratified the UN ESCAP Framework Agreement on Facilitation of Cross-Border Paperless Trade to accelerate digital customs integration."
  },
  {
    id: "REC-Q-MAY-031", articleId: "REC-MAY-031", category: "Government Schemes",
    question: "What is the name of the centralized blockchain-backed digital portal launched by the Ministry of Agriculture to track certified agricultural seeds?",
    options: ["Beej-Net", "Sathi Portal", "AgriTrace India", "Fasal-Pramaan Ledger"],
    answer: 1, explanation: "The 'Sathi' (Seed Traceability, Authentication and Holistic Inventory) portal tracks certified agricultural seeds from labs to retail farmers."
  },
  {
    id: "REC-Q-MAY-032", articleId: "REC-MAY-032", category: "Science & Technology",
    question: "The CSIR-National Environmental Engineering Research Institute (NEERI) successfully transferred technology for indigenously developed analyzers named:",
    options: ["CAAMS Analyzers", "NEERI Smog-Sensors", "Particulate-Grid Monitors", "Air-Trace Spectrometers"],
    answer: 0, explanation: "CSIR-NEERI commercialized its indigenously developed Continuous Ambient Air Monitoring System (CAAMS) analyzers."
  },
  {
    id: "REC-Q-MAY-033", articleId: "REC-MAY-033", category: "Defence",
    question: "The DRDO successfully completed flight-test evaluations of the 'Abhyas' High-speed Expendable Aerial Target from which test range?",
    options: ["Wheeler Island, Odisha", "Pokhran, Rajasthan", "Chandipur, Odisha", "Sriharikota, Andhra Pradesh"],
    answer: 2, explanation: "The Abhyas HEAT drone flight tests were conducted from the Integrated Test Range in Chandipur, Odisha."
  },
  {
    id: "REC-Q-MAY-034", articleId: "REC-MAY-034", category: "Economy & Infrastructure",
    question: "An integrated cargo terminal featuring specialized pharmaceutical cold-storage chambers was inaugurated at the airport in which city?",
    options: ["Varanasi, UP", "Lucknow, UP", "Gorakhpur, UP", "Kanpur, UP"],
    answer: 1, explanation: "An integrated cargo terminal with pharma cold-storage chambers was inaugurated at Chaudhary Charan Singh International Airport in Lucknow."
  },
  {
    id: "REC-Q-MAY-035", articleId: "REC-MAY-035", category: "International Affairs",
    question: "India and Japan successfully held their bilateral Cyber Security Dialogue in New Delhi, marking which edition of the dialogue?",
    options: ["5th Edition", "6th Edition", "7th Edition", "8th Edition"],
    answer: 3, explanation: "India and Japan successfully held their 8th bilateral Cyber Security Dialogue in New Delhi."
  },
  {
    id: "REC-Q-MAY-036", articleId: "REC-MAY-036", category: "Environment & Energy",
    question: "NTPC Limited commissioned an innovative hybrid microgrid project integrating geothermal heat exchangers and solar PV in:",
    options: ["Himachal Pradesh", "Uttarakhand", "Ladakh", "Sikkim"],
    answer: 2, explanation: "NTPC commissioned a geothermal and solar hybrid microgrid project in Ladakh to provide clean energy to high-altitude settlements."
  },
  {
    id: "REC-Q-MAY-037", articleId: "REC-MAY-037", category: "National Affairs",
    question: "The Ministry of Home Affairs deployed the Centralized Automated Facial Recognition System (AFRS) linked to national databases to empower:",
    options: ["State police forces for rapid suspect identification", "Border security drone tracking operators", "Immigration visa overstay biometric scanners", "National Highway toll plaza automated trackers"],
    answer: 0, explanation: "The AFRS is linked to national crime databases, empowering state police forces to rapidly identify suspects and trace missing persons."
  },
  {
    id: "REC-Q-MAY-038", articleId: "REC-MAY-038", category: "Economy & Trade",
    question: "Delegations from India and the United Kingdom concluded a productive round of Free Trade Agreement (FTA) negotiations in which city?",
    options: ["New Delhi", "Mumbai", "London", "Edinburgh"],
    answer: 2, explanation: "India and the UK concluded a productive round of FTA negotiations in London, resolving technical hurdles on services mobilities."
  },
  {
    id: "REC-Q-MAY-039", articleId: "REC-MAY-039", category: "Science & Space",
    question: "ISRO completed environmental and thermal vacuum testing of the indigenous rubidium atomic clock payload intended for which upcoming navigation satellite?",
    options: ["NVS-01", "NVS-02", "NVS-03", "IRNSS-1I"],
    answer: 2, explanation: "ISRO tested the rubidium atomic clock payload for the upcoming NVS-03 navigation satellite to ensure sub-nanosecond precision."
  },
  {
    id: "REC-Q-MAY-040", articleId: "REC-MAY-040", category: "Economy & Banking",
    question: "The Securities and Exchange Board of India issued a circular mandating all mutual fund Asset Management Companies to implement:",
    options: ["Automated fractional share trading engines", "Real-time automated risk management and liquidity monitoring systems", "Cross-border cryptocurrency custodial wallets", "Direct peer-to-peer bond lending books"],
    answer: 1, explanation: "SEBI mandated all mutual fund AMCs to implement real-time automated risk management and liquidity monitoring systems."
  }
];

// 👉 PUSH DATA INTO GLOBAL ARRAYS
if (typeof hiddenRecallArticles !== 'undefined') {
  hiddenRecallArticles.push(...mayRecallArticlesBatch2);
}
if (typeof recallQuestionPool !== 'undefined') {
  recallQuestionPool.push(...mayRecallQuestionsBatch2);
}

/* ==========================================================================
   END OF MAY BATCH 2
   ========================================================================== */

/* ==========================================================================
   MAY 2026 - BATCH 3 (ITEMS 041 TO 060)
   ========================================================================== */

const mayRecallArticlesBatch3 = [
  {
    id: "REC-MAY-041", date: "2026-05-01", month: "May 2026", category: "Science & Technology",
    title: "CSIR-IICT Develops Biodegradable Polymer from Agricultural Waste",
    summary: "CSIR-IICT successfully engineered a high-strength biodegradable polymer derived entirely from sugarcane bagasse.",
    whatHappened: "Scientists at the CSIR-Indian Institute of Chemical Technology (IICT) developed an advanced, eco-friendly biodegradable plastic substitute utilizing agricultural waste like sugarcane bagasse, offering a sustainable alternative to single-use carry bags.",
    importantPoints: [
      "Biodegradable polymer developed by CSIR-IICT.",
      "Derived from agricultural waste such as sugarcane bagasse.",
      "Aims to replace conventional single-use plastics."
    ],
    examFacts: ["Institution: CSIR-IICT Hyderabad", "Material: Bagasse-based Biodegradable Polymer"],
    quickRemember: "CSIR-IICT developed a biodegradable polymer from sugarcane bagasse.",
    audioText: "CSIR-IICT successfully engineered a biodegradable polymer derived from agricultural waste.",
    source: "CSIR", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-MAY-042", date: "2026-05-04", month: "May 2026", category: "Economy & Infrastructure",
    title: "Inauguration of New Automated Container Terminal at Jawaharlal Nehru Port",
    summary: "JNPT commissioned an advanced automated container handling terminal to accelerate maritime export clearances.",
    whatHappened: "A high-capacity automated container handling terminal was commissioned at the Jawaharlal Nehru Port Trust (JNPT) near Mumbai, integrating automated rail-mounted gantry cranes to drastically cut ship turnaround times.",
    importantPoints: [
      "Automated container handling terminal commissioned at JNPT.",
      "Equipped with automated rail-mounted gantry cranes.",
      "Significantly reduces ship turnaround times and port congestion."
    ],
    examFacts: ["Facility: Automated Container Terminal", "Port: JNPT, Mumbai"],
    quickRemember: "An advanced automated container terminal was commissioned at JNPT.",
    audioText: "An automated container handling terminal was commissioned at the Jawaharlal Nehru Port to accelerate exports.",
    source: "Ministry of Ports", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-MAY-043", date: "2026-05-06", month: "May 2026", category: "Environment & Wildlife",
    title: "New Fresh Water Eel Species Discovered in Andaman Islands",
    summary: "Marine biologists formally described a new freshwater eel species, *Anguilla andamanensis*, from pristine streams.",
    whatHappened: "Ichthyologists officially documented a new species of freshwater eel, named *Anguilla andamanensis*, discovered winding through remote jungle streams in the Andaman and Nicobar Islands, expanding the archipelago's documented vertebrate biodiversity.",
    importantPoints: [
      "New freshwater eel species named *Anguilla andamanensis*.",
      "Discovered in jungle streams of the Andaman and Nicobar Islands.",
      "Endemic species highlighting unique island ecosystems."
    ],
    examFacts: ["Species: Anguilla andamanensis", "Location: Andaman and Nicobar Islands"],
    quickRemember: "A new freshwater eel species, Anguilla andamanensis, was discovered in the Andaman Islands.",
    audioText: "Marine biologists described a new freshwater eel species named Anguilla andamanensis from the Andaman Islands.",
    source: "Zoological Survey of India", importantFor: ["SSC CGL", "State PCS"]
  },
  {
    id: "REC-MAY-044", date: "2026-05-07", month: "May 2026", category: "Defence & Aerospace",
    title: "DRDO Successfully Flight-Tests Lightweight Torpedo 'Maareech' Advanced Variant",
    summary: "DRDO and the Indian Navy validated an upgraded variant of the Maareech torpedo defense system.",
    whatHappened: "The Defence Research and Development Organisation (DRDO) and the Indian Navy successfully completed trials of an advanced variant of the 'Maareech' Torpedo Defence System, validating decoy deployment accuracy against modern acoustic homing torpedoes.",
    importantPoints: [
      "Trial validation of advanced 'Maareech' Torpedo Defence System.",
      "Conducted jointly by DRDO and the Indian Navy.",
      "Deploys advanced acoustic decoys to neutralize incoming torpedoes."
    ],
    examFacts: ["System: Maareech Advanced Torpedo Defence", "Agency: DRDO & Indian Navy"],
    quickRemember: "DRDO and the Indian Navy flight-tested an advanced variant of the Maareech torpedo defense system.",
    audioText: "DRDO and the Indian Navy successfully completed trials of an advanced variant of the Maareech Torpedo Defence System.",
    source: "Ministry of Defence", importantFor: ["CDS", "SSC CGL"]
  },
  {
    id: "REC-MAY-045", date: "2026-05-08", month: "May 2026", category: "Government Schemes",
    title: "Ministry of Education Launches National Digital Literacy Mission for Artisans",
    summary: "A specialized digital upskilling campaign was launched to integrate traditional craft artisans into e-commerce networks.",
    whatHappened: "The Ministry of Education, in collaboration with the Ministry of Textiles, launched the 'Kaushal Digital Abhiyan', a targeted national mission to provide digital storefront management and online financial literacy training to 1 million traditional artisans.",
    importantPoints: [
      "Kaushal Digital Abhiyan launched by Ministry of Education and Ministry of Textiles.",
      "Provides digital storefront and financial literacy training to traditional artisans.",
      "Aims to integrate grassroots craftspeople into major e-commerce platforms."
    ],
    examFacts: ["Initiative: Kaushal Digital Abhiyan", "Target: 1 Million Traditional Artisans"],
    quickRemember: "The Ministry of Education launched 'Kaushal Digital Abhiyan' to provide digital literacy to artisans.",
    audioText: "The Education and Textiles Ministries launched a digital literacy mission to integrate traditional artisans into e-commerce.",
    source: "Ministry of Education", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-MAY-046", date: "2026-05-11", month: "May 2026", category: "Economy & Banking",
    title: "RBI Mandates Real-Time Fraud Registry for Digital Transactions",
    summary: "The Reserve Bank of India implemented a centralized real-time mule account and fraud registry.",
    whatHappened: "The Reserve Bank of India operationalized a nationwide Centralized Fraud Registry, compelling all commercial banks and payment aggregators to feed and query transaction identifiers in real-time to intercept cyber fraud transfers instantly.",
    importantPoints: [
      "Centralized Fraud Registry operationalized by the RBI.",
      "Mandates real-time transaction querying for commercial banks and payment aggregators.",
      "Aims to intercept fraudulent money mule accounts instantly."
    ],
    examFacts: ["Regulator: RBI", "System: Centralized Real-Time Fraud Registry"],
    quickRemember: "The RBI implemented a centralized real-time fraud registry to intercept digital transaction scams.",
    audioText: "The Reserve Bank of India operationalized a nationwide Centralized Fraud Registry to intercept cyber fraud transfers.",
    source: "RBI", importantFor: ["Bank PO", "SSC CGL"]
  },
  {
    id: "REC-MAY-047", date: "2026-05-12", month: "May 2026", category: "Science & Technology",
    title: "IISc Bengaluru Develops Ultrafast Photonic Computing Chip",
    summary: "Researchers at IISc engineered an optical processor chip capable of executing complex AI matrix math using light.",
    whatHappened: "Scientists at the Indian Institute of Science (IISc) Bengaluru unveiled a breakthrough ultrafast photonic processor chip that replaces electrical transistor pathways with laser light circuits, executing deep learning matrix multiplications at record speeds with near-zero heat loss.",
    importantPoints: [
      "Ultrafast photonic processor chip developed by IISc Bengaluru.",
      "Uses laser light circuits instead of electrical pathways for AI processing.",
      "Achieves record-breaking processing speeds with minimal thermal dissipation."
    ],
    examFacts: ["Innovation: Photonic Computing Chip", "Institute: IISc Bengaluru"],
    quickRemember: "IISc Bengaluru developed an ultrafast photonic computing chip for AI processing using light.",
    audioText: "Scientists at IISc Bengaluru unveiled a photonic processor chip that executes AI matrix math using laser light.",
    source: "IISc", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-MAY-048", date: "2026-05-13", month: "May 2026", category: "International Affairs",
    title: "India and Norway Sign Blue Economy and Marine Spatial Planning Accord",
    summary: "New Delhi and Oslo executed a bilateral framework agreement to advance sustainable ocean management.",
    whatHappened: "India and Norway signed a comprehensive bilateral framework agreement on the Blue Economy and Marine Spatial Planning in Oslo, promoting joint oceanographic research, sustainable fisheries, and offshore wind energy cooperation.",
    importantPoints: [
      "Blue Economy and Marine Spatial Planning framework signed between India and Norway.",
      "Signed during high-level diplomatic talks in Oslo.",
      "Promotes joint oceanographic research and offshore wind energy projects."
    ],
    examFacts: ["Partner: Norway", "Agreement: Blue Economy & Marine Spatial Planning Accord"],
    quickRemember: "India and Norway signed a Blue Economy and Marine Spatial Planning accord.",
    audioText: "India and Norway signed a bilateral framework agreement on the Blue Economy and Marine Spatial Planning in Oslo.",
    source: "MEA", importantFor: ["UPSC", "SSC CGL"]
  },
  {
    id: "REC-MAY-049", date: "2026-05-14", month: "May 2026", category: "Environment & Forests",
    title: "MoEFCC Launches 'Van Agni Tracker' Mobile Application",
    summary: "The Environment Ministry released a citizen-participatory mobile app for reporting forest fire outbreaks.",
    whatHappened: "The Ministry of Environment, Forest and Climate Change launched the 'Van Agni Tracker' mobile application, empowering local forest guards and rural citizens to instantly geotag and report incipient forest fires directly to satellite monitoring units.",
    importantPoints: [
      "Mobile application 'Van Agni Tracker' launched by MoEFCC.",
      "Empowers citizens and forest guards to geotag and report forest fires.",
      "Integrates ground reports with automated satellite monitoring nodes."
    ],
    examFacts: ["App: Van Agni Tracker", "Ministry: MoEFCC"],
    quickRemember: "MoEFCC launched the 'Van Agni Tracker' mobile app for reporting forest fires.",
    audioText: "The Environment Ministry launched the Van Agni Tracker mobile application for reporting forest fire outbreaks.",
    source: "MoEFCC", importantFor: ["SSC CGL", "State PCS"]
  },
  {
    id: "REC-MAY-050", date: "2026-05-15", month: "May 2026", category: "Sports & Athletics",
    title: "Parul Chaudhary Wins Gold at Asian Grand Prix Athletics Meet",
    summary: "Indian athlete Parul Chaudhary clinched the gold medal in the steeplechase event at the Asian Grand Prix.",
    whatHappened: "Ace Indian distance runner Parul Chaudhary put up a stellar performance to secure the gold medal in the women's 3,000-metre steeplechase event at the Asian Grand Prix athletics meet, dominating the continental field.",
    importantPoints: [
      "Parul Chaudhary won gold at the Asian Grand Prix athletics meet.",
      "Discipline: Women's 3,000-metre steeplechase.",
      "Demonstrated supreme endurance and pacing strategy."
    ],
    examFacts: ["Athlete: Parul Chaudhary", "Sport: Athletics (Steeplechase)", "Medal: Gold"],
    quickRemember: "Parul Chaudhary won the steeplechase gold medal at the Asian Grand Prix athletics meet.",
    audioText: "Indian athlete Parul Chaudhary won the gold medal in the steeplechase event at the Asian Grand Prix.",
    source: "Athletics Federation of India", importantFor: ["SSC CGL", "SSC CHSL"]
  },
  {
    id: "REC-MAY-051", date: "2026-05-18", month: "May 2026", category: "Science & Technology",
    title: "India Establishes National Supercomputing Grid Node at IIT Roorkee",
    summary: "A powerful petascale supercomputing system was commissioned at IIT Roorkee under the National Supercomputing Mission.",
    whatHappened: "Under the National Supercomputing Mission (NSM), a high-speed petascale supercomputing facility named 'Param-Roorkee' was commissioned at IIT Roorkee, providing advanced computational power for climate modeling and seismic research.",
    importantPoints: [
      "Petascale supercomputing facility 'Param-Roorkee' commissioned.",
      "Established under the National Supercomputing Mission (NSM).",
      "Dedicated to advancing climate modeling, fluid dynamics, and seismic research."
    ],
    examFacts: ["Supercomputer: Param-Roorkee", "Institute: IIT Roorkee", "Mission: National Supercomputing Mission"],
    quickRemember: "A petascale supercomputing facility named 'Param-Roorkee' was commissioned at IIT Roorkee.",
    audioText: "A powerful petascale supercomputing system was commissioned at IIT Roorkee under the National Supercomputing Mission.",
    source: "Ministry of Science & Technology", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-MAY-052", date: "2026-05-19", month: "May 2026", category: "Economy & Infrastructure",
    title: "Inauguration of New Integrated Domestic Terminal at Patna Airport",
    summary: "A modern, eco-friendly domestic terminal building was inaugurated at Jay Prakash Narayan International Airport.",
    whatHappened: "A state-of-the-art integrated domestic terminal equipped with solar roof arrays and advanced baggage handling systems was inaugurated at Jay Prakash Narayan International Airport in Patna, Bihar, enhancing traveler convenience.",
    importantPoints: [
      "Integrated domestic terminal inaugurated at Patna Airport.",
      "Features eco-friendly solar roof arrays and modern baggage handling systems.",
      "Expands passenger capacity at Bihar's primary aviation hub."
    ],
    examFacts: ["Facility: Integrated Domestic Terminal", "Airport: Patna Airport"],
    quickRemember: "A new integrated domestic terminal was inaugurated at Patna Airport.",
    audioText: "A modern eco-friendly domestic terminal building was inaugurated at Jay Prakash Narayan International Airport in Patna.",
    source: "Ministry of Civil Aviation", importantFor: ["SSC CGL", "State PCS"]
  },
  {
    id: "REC-MAY-053", date: "2026-05-20", month: "May 2026", category: "International Affairs",
    title: "India Elected to Executive Board of World Health Organization",
    summary: "India secured a prominent seat on the WHO Executive Board during annual assembly elections in Geneva.",
    whatHappened: "India was officially elected to a three-year term on the Executive Board of the World Health Organization (WHO) during the World Health Assembly proceedings in Geneva, committing to global health security policy formulation.",
    importantPoints: [
      "India elected to the Executive Board of the World Health Organization (WHO).",
      "Elected during the World Health Assembly in Geneva.",
      "Reinforces India's voice in global health policy and vaccine diplomacy."
    ],
    examFacts: ["Body: WHO Executive Board", "Location: Geneva"],
    quickRemember: "India was elected to the Executive Board of the World Health Organization in Geneva.",
    audioText: "India secured a prominent seat on the Executive Board of the World Health Organization during assembly elections in Geneva.",
    source: "MoHFW", importantFor: ["UPSC", "SSC CGL"]
  },
  {
    id: "REC-MAY-054", date: "2026-05-21", month: "May 2026", category: "Government Schemes",
    title: "Ministry of Social Justice Launches 'PM-DAKSH Portal 2.0'",
    summary: "An upgraded digital skill-training portal was rolled out to empower marginalized socio-economic communities.",
    whatHappened: "The Ministry of Social Justice and Empowerment launched 'PM-DAKSH Portal 2.0', an enhanced digital learning management system streamlining skill development training applications and stipend disbursements for Scheduled Castes and OBC youth.",
    importantPoints: [
      "PM-DAKSH Portal 2.0 launched by Ministry of Social Justice.",
      "Streamlines skill development training and direct stipend disbursements.",
      "Empowers youth from marginalized socio-economic communities."
    ],
    examFacts: ["Portal: PM-DAKSH Portal 2.0", "Ministry: Social Justice"],
    quickRemember: "The Social Justice Ministry launched the PM-DAKSH Portal 2.0 for marginalized community skill training.",
    audioText: "The Social Justice Ministry launched the PM-DAKSH Portal 2.0 to streamline skill training and stipends.",
    source: "Ministry of Social Justice", importantFor: ["SSC CGL", "State PCS"]
  },
  {
    id: "REC-MAY-055", date: "2026-05-22", month: "May 2026", category: "Defence & Aerospace",
    title: "HAL Successfully Flight-Tests Indigenous Heavy-Lift Combat Drone Prototype",
    summary: "Hindustan Aeronautics Limited completed initial flight tests of a heavy-lift tactical logistics drone.",
    whatHappened: "Hindustan Aeronautics Limited (HAL) successfully completed initial developmental flight-test milestones of its indigenous heavy-lift logistic drone designed to transport ammunition and supplies to high-altitude frontline military pickets.",
    importantPoints: [
      "Heavy-lift logistic drone prototype flight-tested by HAL.",
      "Designed to carry ammunition and supplies to high-altitude military pickets.",
      "Reinforces frontline tactical logistics autonomy."
    ],
    examFacts: ["Developer: HAL", "Equipment: Heavy-Lift Logistic Drone"],
    quickRemember: "HAL successfully flight-tested an indigenous heavy-lift combat drone prototype.",
    audioText: "HAL completed initial flight tests of an indigenous heavy-lift tactical logistics drone for high-altitude pickets.",
    source: "HAL", importantFor: ["CDS", "SSC CGL"]
  },
  {
    id: "REC-MAY-056", date: "2026-05-25", month: "May 2026", category: "Economy & Trade",
    title: "India and European Union Finalize Geographical Indications Protocol",
    summary: "New Delhi and Brussels executed a comprehensive protocol safeguarding regional specialty product designations.",
    whatHappened: "India and the European Union signed a landmark protocol in Brussels establishing reciprocal legal protections for hundreds of authentic Geographical Indication (GI) specialty products, safeguarding regional agricultural and craft items against imitation.",
    importantPoints: [
      "Geographical Indications (GI) protocol signed between India and the EU.",
      "Provides reciprocal legal protections for authentic specialty products.",
      "Guards regional agricultural and artisan goods against imitation."
    ],
    examFacts: ["Partners: India and European Union", "Agreement: GI Protocol"],
    quickRemember: "India and the EU finalized a protocol safeguarding Geographical Indication specialty products.",
    audioText: "India and the European Union finalized a Geographical Indications protocol establishing reciprocal legal protections.",
    source: "Ministry of Commerce", importantFor: ["UPSC", "SSC CGL"]
  },
  {
    id: "REC-MAY-057", date: "2026-05-26", month: "May 2026", category: "Science & Space",
    title: "ISRO Successfully Launches Advanced Earth Observation Satellite EOS-10",
    summary: "ISRO placed the high-resolution radar imaging satellite EOS-10 into orbit using a PSLV rocket.",
    whatHappened: "The Indian Space Research Organisation (ISRO) successfully launched the advanced synthetic aperture radar imaging satellite 'EOS-10' aboard a PSLV-C62 rocket from Satish Dhawan Space Centre, Sriharikota, enhancing night-time and all-weather earth observation capabilities.",
    importantPoints: [
      "Satellite: EOS-10 (Advanced Radar Imaging Earth Observation).",
      "Launch Vehicle: PSLV-C62.",
      "Launched from Satish Dhawan Space Centre, Sriharikota."
    ],
    examFacts: ["Satellite: EOS-10", "Rocket: PSLV-C62", "Agency: ISRO"],
    quickRemember: "ISRO successfully launched the EOS-10 Earth observation radar satellite using a PSLV rocket.",
    audioText: "ISRO successfully launched the advanced synthetic aperture radar imaging satellite EOS-10 aboard a PSLV rocket.",
    source: "ISRO", importantFor: ["SSC CGL", "UPSC", "CDS"]
  },
  {
    id: "REC-MAY-058", date: "2026-05-27", month: "May 2026", category: "Environment & Energy",
    title: "NTPC Commissions India's Largest Battery Energy Storage System Plant",
    summary: "NTPC operationalized a massive 500 MW / 1000 MWh grid-scale battery storage installation in Andhra Pradesh.",
    whatHappened: "NTPC Limited successfully commissioned India's largest grid-scale Battery Energy Storage System (BESS) facility at Simhadri in Andhra Pradesh, featuring a 500 MW / 1000 MWh capacity to stabilize renewable energy integration.",
    importantPoints: [
      "India's largest BESS facility commissioned by NTPC at Simhadri, Andhra Pradesh.",
      "Capacity: 500 MW / 1000 MWh grid-scale battery storage.",
      "Stabilizes variable solar and wind power integration into the national grid."
    ],
    examFacts: ["Company: NTPC", "Facility: BESS Plant", "Capacity: 500 MW / 1000 MWh", "Location: Simhadri, AP"],
    quickRemember: "NTPC commissioned India's largest 500 MW / 1000 MWh BESS plant at Simhadri, AP.",
    audioText: "NTPC commissioned India's largest grid-scale Battery Energy Storage System facility at Simhadri in Andhra Pradesh.",
    source: "Ministry of Power", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-MAY-059", date: "2026-05-28", month: "May 2026", category: "National Security",
    title: "Ministry of Home Affairs Introduces National Automated Fingerprint Identification Network 2.0",
    summary: "MHA upgraded the national biometric criminal fingerprint database with real-time matching algorithms.",
    whatHappened: "The Ministry of Home Affairs rolled out an upgraded version of the National Automated Fingerprint Identification System (NAFIN 2.0), integrating high-speed biometric matching engines to link state crime records offices instantly.",
    importantPoints: [
      "National Automated Fingerprint Identification System (NAFIN 2.0) rolled out by MHA.",
      "Integrates high-speed biometric matching engines for crime investigations.",
      "Links state crime records offices into a unified real-time network."
    ],
    examFacts: ["System: NAFIN 2.0", "Ministry: Ministry of Home Affairs"],
    quickRemember: "MHA introduced NAFIN 2.0, upgrading the national automated fingerprint identification database.",
    audioText: "The Home Ministry rolled out an upgraded version of the National Automated Fingerprint Identification System.",
    source: "Ministry of Home Affairs", importantFor: ["SSC CGL", "UPSC", "CDS"]
  },
  {
    id: "REC-MAY-060", date: "2026-05-29", month: "May 2026", category: "Economy & Agriculture",
    title: "NABARD Approves ₹12,000 Crore Agri-Digital Infrastructure Package",
    summary: "NABARD sanctioned a major fund allocation to digitize primary agricultural credit societies (PACS).",
    whatHappened: "NABARD approved a ₹12,000 crore financial package dedicated to modernizing Primary Agricultural Credit Societies (PACS) with unified accounting software, automated weather stations, and soil testing digital kiosks.",
    importantPoints: [
      "₹12,000 crore package approved by NABARD to digitize agricultural infrastructure.",
      "Modernizes Primary Agricultural Credit Societies (PACS).",
      "Installs unified accounting software and digital soil testing kiosks."
    ],
    examFacts: ["Institution: NABARD", "Allocation: ₹12,000 Crore", "Focus: PACS Digitization"],
    quickRemember: "NABARD approved a ₹12,000 crore package to digitize Primary Agricultural Credit Societies.",
    audioText: "NABARD approved a twelve thousand crore rupee package to digitize Primary Agricultural Credit Societies.",
    source: "NABARD", importantFor: ["Bank PO", "SSC CGL", "UPSC"]
  }
];

const mayRecallQuestionsBatch3 = [
  {
    id: "REC-Q-MAY-041", articleId: "REC-MAY-041", category: "Science & Technology",
    question: "Scientists at the CSIR-Indian Institute of Chemical Technology (IICT) developed an eco-friendly biodegradable plastic substitute utilizing agricultural waste such as:",
    options: ["Rice husk residue", "Sugarcane bagasse", "Wheat straw fibers", "Coconut coir pith"],
    answer: 1, explanation: "CSIR-IICT engineered a high-strength biodegradable polymer derived entirely from sugarcane bagasse."
  },
  {
    id: "REC-Q-MAY-042", articleId: "REC-MAY-042", category: "Economy & Infrastructure",
    question: "A high-capacity automated container handling terminal equipped with automated rail-mounted gantry cranes was commissioned at which port?",
    options: ["Deendayal Port, Kandla", "Jawaharlal Nehru Port Trust (JNPT)", "V. O. Chidambaranar Port, Tuticorin", "Syama Prasad Mookerjee Port, Kolkata"],
    answer: 1, explanation: "An automated container handling terminal was commissioned at the Jawaharlal Nehru Port Trust (JNPT) near Mumbai."
  },
  {
    id: "REC-Q-MAY-043", articleId: "REC-MAY-043", category: "Environment & Wildlife",
    question: "Marine biologists formally documented a new freshwater eel species named *Anguilla andamanensis* discovered in jungle streams of:",
    options: ["Lakshadweep Atolls", "Andaman and Nicobar Islands", "Sundarbans River Delta", "Greater Nicobar Biosphere"],
    answer: 1, explanation: "Anguilla andamanensis is a new freshwater eel species discovered in remote jungle streams of the Andaman and Nicobar Islands."
  },
  {
    id: "REC-Q-MAY-044", articleId: "REC-MAY-044", category: "Defence & Aerospace",
    question: "The DRDO and the Indian Navy successfully completed trials of an advanced variant of which torpedo defense system deploying acoustic decoys?",
    options: ["Shyena", "Maareech", "Varunastra", "Takshak"],
    answer: 1, explanation: "DRDO and the Indian Navy completed trials of an advanced variant of the 'Maareech' Torpedo Defence System."
  },
  {
    id: "REC-Q-MAY-045", articleId: "REC-MAY-045", category: "Government Schemes",
    question: "The Ministry of Education and the Ministry of Textiles launched 'Kaushal Digital Abhiyan' to provide digital storefront and financial literacy training to:",
    options: ["Handloom weaver cooperative managers", "1 million traditional artisans", "Silk reeling farm operators", "Khadi spinning village units"],
    answer: 1, explanation: "The Kaushal Digital Abhiyan targets 1 million traditional artisans to provide digital storefront management and financial literacy training."
  },
  {
    id: "REC-Q-MAY-046", articleId: "REC-MAY-046", category: "Economy & Banking",
    question: "The Reserve Bank of India operationalized a nationwide Centralized Fraud Registry compelling commercial banks and payment aggregators to:",
    options: ["Freeze dormant accounts after 90 days", "Feed and query transaction identifiers in real-time to intercept cyber fraud", "Audit merchant POS terminal cryptographic keys daily", "Report daily foreign exchange remittance volumes"],
    answer: 1, explanation: "The Centralized Fraud Registry compels banks and payment aggregators to query transaction identifiers in real-time to intercept cyber fraud."
  },
  {
    id: "REC-Q-MAY-047", articleId: "REC-MAY-047", category: "Science & Technology",
    question: "Scientists at the Indian Institute of Science (IISc) Bengaluru unveiled an ultrafast photonic processor chip that replaces electrical pathways with:",
    options: ["Superconducting Josephson junctions", "Laser light circuits", "Gallium nitride micro-channels", "Plasmonic wave nano-guides"],
    answer: 1, explanation: "The ultrafast photonic processor chip replaces electrical transistor pathways with laser light circuits for AI processing."
  },
  {
    id: "REC-Q-MAY-048", articleId: "REC-MAY-048", category: "International Affairs",
    question: "India and Norway signed a comprehensive bilateral framework agreement on the Blue Economy and Marine Spatial Planning in which city?",
    options: ["Stockholm", "Copenhagen", "Oslo", "Helsinki"],
    answer: 2, explanation: "India and Norway signed the Blue Economy and Marine Spatial Planning framework agreement in Oslo."
  },
  {
    id: "REC-Q-MAY-049", articleId: "REC-MAY-049", category: "Environment & Forests",
    question: "What is the name of the mobile application launched by the MoEFCC empowering citizens to geotag and report incipient forest fires?",
    options: ["Van-Rakshak App", "Van Agni Tracker", "Forest-Alert India", "Green-Guard Watch"],
    answer: 1, explanation: "The 'Van Agni Tracker' mobile application empowers local forest guards and rural citizens to geotag and report forest fires."
  },
  {
    id: "REC-Q-MAY-050", articleId: "REC-MAY-050", category: "Sports & Athletics",
    question: "Ace Indian distance runner Parul Chaudhary secured the gold medal in which event at the Asian Grand Prix athletics meet?",
    options: ["1,500-metre run", "3,000-metre steeplechase", "5,000-metre long distance", "10,000-metre endurance race"],
    answer: 1, explanation: "Parul Chaudhary clinched the gold medal in the women's 3,000-metre steeplechase event at the Asian Grand Prix."
  },
  {
    id: "REC-Q-MAY-051", articleId: "REC-MAY-051", category: "Science & Technology",
    question: "Under the National Supercomputing Mission (NSM), a petascale supercomputing facility named 'Param-Roorkee' was commissioned at:",
    options: ["IIT Delhi", "IIT Roorkee", "IIT Guwahati", "IIT Kanpur"],
    answer: 1, explanation: "A petascale supercomputing facility named 'Param-Roorkee' was commissioned at IIT Roorkee under the NSM."
  },
  {
    id: "REC-Q-MAY-052", articleId: "REC-MAY-052", category: "Economy & Infrastructure",
    question: "An integrated domestic terminal equipped with solar roof arrays was inaugurated at Jay Prakash Narayan International Airport in:",
    options: ["Ranchi, Jharkhand", "Patna, Bihar", "Varanasi, UP", "Lucknow, UP"],
    answer: 1, explanation: "An integrated domestic terminal was inaugurated at Jay Prakash Narayan International Airport in Patna, Bihar."
  },
  {
    id: "REC-Q-MAY-053", articleId: "REC-MAY-053", category: "International Affairs",
    question: "During the World Health Assembly proceedings in Geneva, India was officially elected to a three-year term on the Executive Board of the:",
    options: ["UNICEF governing board", "World Health Organization (WHO)", "UNAIDS advisory panel", "Global Fund Directorate"],
    answer: 1, explanation: "India was elected to a three-year term on the Executive Board of the World Health Organization (WHO) in Geneva."
  },
  {
    id: "REC-Q-MAY-054", articleId: "REC-MAY-054", category: "Government Schemes",
    question: "The Ministry of Social Justice and Empowerment launched 'PM-DAKSH Portal 2.0' to streamline skill development training for:",
    options: ["Manual scavengers and sanitation workers", "Scheduled Castes and OBC youth", "Divyangjan assistive technology trainees", "De-addicted rehabilitation graduates"],
    answer: 1, explanation: "The PM-DAKSH Portal 2.0 streamlines skill development training applications and stipend disbursements for Scheduled Castes and OBC youth."
  },
  {
    id: "REC-Q-MAY-055", articleId: "REC-MAY-055", category: "Defence & Aerospace",
    question: "Hindustan Aeronautics Limited (HAL) completed initial flight-test milestones of an indigenous heavy-lift logistic drone designed to transport:",
    options: ["Reconnaissance optical sensors across borders", "Ammunition and supplies to high-altitude frontline military pickets", "Emergency medical casualty evacuation stretchers", "Acoustic decoy submarine decoys"],
    answer: 1, explanation: "HAL flight-tested an indigenous heavy-lift logistic drone designed to transport ammunition and supplies to high-altitude pickets."
  },
  {
    id: "REC-Q-MAY-056", articleId: "REC-MAY-056", category: "Economy & Trade",
    question: "India and the European Union signed a landmark protocol in Brussels establishing reciprocal legal protections for:",
    options: ["Cross-border data privacy compliance", "Geographical Indication (GI) specialty products", "Open-source software patent pools", "Green maritime fuel bunkering standards"],
    answer: 1, explanation: "India and the EU signed a protocol establishing reciprocal legal protections for hundreds of authentic Geographical Indication specialty products."
  },
  {
    id: "REC-Q-MAY-057", articleId: "REC-MAY-057", category: "Science & Space",
    question: "The Indian Space Research Organisation successfully launched the advanced synthetic aperture radar imaging satellite 'EOS-10' using which rocket?",
    options: ["LVM3-M4", "PSLV-C62", "SSLV-D3", "GSLV-F14"],
    answer: 1, explanation: "ISRO launched the EOS-10 earth observation radar satellite aboard a PSLV-C62 rocket from Satish Dhawan Space Centre, Sriharikota."
  },
  {
    id: "REC-Q-MAY-058", articleId: "REC-MAY-058", category: "Environment & Energy",
    question: "NTPC Limited successfully commissioned India's largest grid-scale Battery Energy Storage System (BESS) facility at Simhadri in Andhra Pradesh with a capacity of:",
    options: ["100 MW / 200 MWh", "250 MW / 500 MWh", "500 MW / 1000 MWh", "1000 MW / 2000 MWh"],
    answer: 2, explanation: "NTPC commissioned India's largest grid-scale BESS facility at Simhadri with a 500 MW / 1000 MWh capacity."
  },
  {
    id: "REC-Q-MAY-059", articleId: "REC-MAY-059", category: "National Security",
    question: "The Ministry of Home Affairs rolled out an upgraded version of NAFIN 2.0, which stands for:",
    options: ["National Automated Forensic Information Network", "National Automated Fingerprint Identification System", "National Armed Forces Intelligence Network", "National Anti-Fraud Identification Node"],
    answer: 1, explanation: "NAFIN 2.0 stands for the National Automated Fingerprint Identification System, integrating high-speed biometric matching engines."
  },
  {
    id: "REC-Q-MAY-060", articleId: "REC-MAY-060", category: "Economy & Agriculture",
    question: "NABARD approved a ₹12,000 crore financial package dedicated to modernizing and digitizing:",
    options: ["Primary Agricultural Credit Societies (PACS)", "District Cooperative Central Banks (DCCBs)", "State Agricultural Marketing Boards", "Micro-irrigation equipment manufacturing units"],
    answer: 0, explanation: "NABARD's ₹12,000 crore package modernizes Primary Agricultural Credit Societies (PACS) with unified software and digital kiosks."
  }
];

// 👉 PUSH DATA INTO GLOBAL ARRAYS
if (typeof hiddenRecallArticles !== 'undefined') {
  hiddenRecallArticles.push(...mayRecallArticlesBatch3);
}
if (typeof recallQuestionPool !== 'undefined') {
  recallQuestionPool.push(...mayRecallQuestionsBatch3);
}

/* ==========================================================================
   END OF MAY BATCH 3
   ========================================================================== */
/* ==========================================================================
   MAY 2026 - BATCH 4 (ITEMS 061 TO 080)
   ========================================================================== */

const mayRecallArticlesBatch4 = [
  {
    id: "REC-MAY-061", date: "2026-05-01", month: "May 2026", category: "Science & Technology",
    title: "CSIR-NCL Develops High-Efficiency Catalyst for Methanol Synthesis",
    summary: "CSIR-NCL engineered a breakthrough catalyst that converts industrial carbon dioxide emissions into clean methanol.",
    whatHappened: "Scientists at the CSIR-National Chemical Laboratory (NCL) in Pune successfully developed an advanced, low-cost heterogeneous catalyst that accelerates the hydrogenation of captured carbon dioxide directly into green methanol, supporting India's carbon-capture and utilization goals.",
    importantPoints: [
      "Heterogeneous catalyst developed by CSIR-NCL Pune.",
      "Converts captured industrial carbon dioxide directly into green methanol.",
      "Aims to reduce emissions and establish a circular carbon economy."
    ],
    examFacts: ["Institution: CSIR-NCL Pune", "Innovation: CO2 to Green Methanol Catalyst"],
    quickRemember: "CSIR-NCL developed a catalyst to convert carbon dioxide emissions into green methanol.",
    audioText: "CSIR-NCL engineered a high-efficiency catalyst that converts industrial carbon dioxide emissions into clean methanol.",
    source: "CSIR", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-MAY-062", date: "2026-05-04", month: "May 2026", category: "Economy & Infrastructure",
    title: "Inauguration of New Automated Air Traffic Control Tower in Mumbai",
    summary: "A modern automated air traffic control (ATC) tower was commissioned at Chhatrapati Shivaji Maharaj International Airport.",
    whatHappened: "The Airports Authority of India (AAI) commissioned a state-of-the-art automated Air Traffic Control (ATC) tower at Chhatrapati Shivaji Maharaj International Airport in Mumbai, integrating advanced surface movement radar and AI-driven flight sequencing.",
    importantPoints: [
      "Automated ATC tower commissioned at Mumbai Airport.",
      "Equipped with advanced surface movement radar and AI flight sequencing.",
      "Significantly enhances flight safety and hourly aircraft handling capacity."
    ],
    examFacts: ["Facility: Automated ATC Tower", "Airport: CSMIA, Mumbai"],
    quickRemember: "An advanced automated air traffic control tower was commissioned at Mumbai Airport.",
    audioText: "A modern automated air traffic control tower was commissioned at Mumbai's international airport.",
    source: "Ministry of Civil Aviation", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-MAY-063", date: "2026-05-06", month: "May 2026", category: "Environment & Wildlife",
    title: "New Deep-Water Marine Isopod Species Discovered off Kerala Coast",
    summary: "Marine biologists formally described a new deep-sea isopod crustacean species, *Bathynomus keralensis*.",
    whatHappened: "Researchers from the National Centre for Earth Science Studies (NCESS) formally described a new species of deep-sea crustacean belonging to the giant isopod family, named *Bathynomus keralensis*, collected from bathyal depths off the Kollam coast in Kerala.",
    importantPoints: [
      "New deep-sea isopod species named *Bathynomus keralensis*.",
      "Discovered off the Kollam coast in Kerala at bathyal depths.",
      "Expands the biological mapping of India's deep-sea benthic fauna."
    ],
    examFacts: ["Species: Bathynomus keralensis", "Location: Off Kollam Coast, Kerala"],
    quickRemember: "A new deep-sea marine isopod species, Bathynomus keralensis, was discovered off the Kerala coast.",
    audioText: "Marine biologists described a new deep-sea isopod crustacean species named Bathynomus keralensis off the Kerala coast.",
    source: "Zoological Survey of India", importantFor: ["SSC CGL", "State PCS"]
  },
  {
    id: "REC-MAY-064", date: "2026-05-07", month: "May 2026", category: "Defence & Aerospace",
    title: "DRDO Successfully Flight-Tests Indigenous Smart Anti-Airfield Weapon",
    summary: "DRDO completed user trials of the SAAW precision-guided glide bomb against simulated runway targets.",
    whatHappened: "The Defence Research and Development Organisation (DRDO) successfully completed user-evaluation trials of the Smart Anti-Airfield Weapon (SAAW) from an Indian Air Force tactical aircraft, validating its precision electro-optical guidance capabilities over long standoff distances.",
    importantPoints: [
      "Flight-tested the Smart Anti-Airfield Weapon (SAAW).",
      "Precision-guided standoff glide bomb developed by DRDO.",
      "Designed to neutralize hostile enemy runways and tactical fortifications."
    ],
    examFacts: ["Weapon: Smart Anti-Airfield Weapon (SAAW)", "Agency: DRDO"],
    quickRemember: "DRDO successfully flight-tested the indigenous Smart Anti-Airfield Weapon (SAAW).",
    audioText: "DRDO successfully flight-tested the indigenous Smart Anti-Airfield Weapon glide bomb.",
    source: "Ministry of Defence", importantFor: ["CDS", "SSC CGL"]
  },
  {
    id: "REC-MAY-065", date: "2026-05-08", month: "May 2026", category: "Government Schemes",
    title: "Ministry of Skill Development Launches 'PM Vishwakarma Digital Integration Phase 2'",
    summary: "The government scaled up digital marketing support and tool-kit grants for traditional craftspeople under PM Vishwakarma.",
    whatHappened: "The Ministry of Skill Development and Entrepreneurship rolled out Phase 2 of the PM Vishwakarma scheme, providing advanced digital marketplace onboarding, branding assistance, and expanded high-tech toolkit financial grants for registered traditional artisans.",
    importantPoints: [
      "Phase 2 of PM Vishwakarma scheme rolled out.",
      "Provides digital marketplace onboarding and branding assistance.",
      "Includes expanded toolkit grants for traditional craftspeople."
    ],
    examFacts: ["Scheme: PM Vishwakarma Phase 2", "Ministry: Skill Development"],
    quickRemember: "The government launched Phase 2 of the PM Vishwakarma scheme for digital artisan integration.",
    audioText: "The Skill Development Ministry launched Phase 2 of the PM Vishwakarma scheme providing digital marketing and tool grants.",
    source: "Ministry of Skill Development", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-MAY-066", date: "2026-05-11", month: "May 2026", category: "Economy & Banking",
    title: "RBI Introduces Automated Cross-Border Trade Settlement Dashboard",
    summary: "The Reserve Bank of India launched a centralized digital reporting portal for Special Rupee Vostro Accounts.",
    whatHappened: "The Reserve Bank of India operationalized a centralized digital dashboard to monitor and streamline transactions routed through Special Rupee Vostro Accounts (SRVA), accelerating cross-border trade settlements in local currencies.",
    importantPoints: [
      "Automated Cross-Border Trade Settlement Dashboard launched by RBI.",
      "Streamlines transactions routed through Special Rupee Vostro Accounts (SRVA).",
      "Accelerates bilateral trade settlements in Indian Rupees."
    ],
    examFacts: ["Regulator: RBI", "Focus: Special Rupee Vostro Accounts Dashboard"],
    quickRemember: "The RBI launched an automated cross-border trade settlement dashboard for Rupee Vostro accounts.",
    audioText: "The Reserve Bank of India launched a centralized digital reporting portal for Special Rupee Vostro Accounts.",
    source: "RBI", importantFor: ["Bank PO", "SSC CGL"]
  },
  {
    id: "REC-MAY-067", date: "2026-05-12", month: "May 2026", category: "Science & Technology",
    title: "IIT Hyderabad Develops Graphene-Based Desalination Membrane",
    summary: "Engineers at IIT Hyderabad engineered high-flux functionalized graphene membranes for seawater purification.",
    whatHappened: "Researchers at IIT Hyderabad successfully synthesized a durable, high-flux functionalized laser-scribed graphene oxide membrane capable of filtering salt ions from seawater with exceptional energy efficiency and high water permeability.",
    importantPoints: [
      "High-flux graphene oxide desalination membrane developed by IIT Hyderabad.",
      "Filters salt ions from seawater with high water permeability.",
      "Offers an energy-efficient solution for coastal drinking water scarcity."
    ],
    examFacts: ["Innovation: Graphene Desalination Membrane", "Institute: IIT Hyderabad"],
    quickRemember: "IIT Hyderabad developed a graphene-based membrane for energy-efficient seawater desalination.",
    audioText: "Engineers at IIT Hyderabad developed high-flux functionalized graphene membranes for seawater purification.",
    source: "IIT Hyderabad", importantFor: ["SSC CGL", "State PCS"]
  },
  {
    id: "REC-MAY-068", date: "2026-05-13", month: "May 2026", category: "International Affairs",
    title: "India and UAE Sign Comprehensive Artificial Intelligence Cooperation Pact",
    summary: "New Delhi and Abu Dhabi executed a bilateral framework agreement for joint AI supercomputing and talent exchange.",
    whatHappened: "India and the United Arab Emirates signed a comprehensive bilateral agreement in Abu Dhabi to foster cooperation in artificial intelligence, focusing on joint supercomputing infrastructure sharing, open-source LLM training, and ethical governance standards.",
    importantPoints: [
      "Artificial Intelligence Cooperation Pact signed between India and the UAE.",
      "Signed during high-level meetings in Abu Dhabi.",
      "Focuses on supercomputing infrastructure sharing and open-source AI training."
    ],
    examFacts: ["Partners: India and UAE", "Agreement: AI Cooperation Pact"],
    quickRemember: "India and the UAE signed a comprehensive Artificial Intelligence cooperation pact.",
    audioText: "India and the UAE signed a bilateral framework agreement for joint AI supercomputing and talent exchange.",
    source: "MEA", importantFor: ["UPSC", "SSC CGL"]
  },
  {
    id: "REC-MAY-069", date: "2026-05-14", month: "May 2026", category: "Environment & Forests",
    title: "MoEFCC Launches 'National Wildlife Genetic Bank Repository'",
    summary: "A specialized cryogenic tissue repository was established to preserve endangered wildlife genetic samples.",
    whatHappened: "The Ministry of Environment, Forest and Climate Change commissioned the 'National Wildlife Genetic Bank Repository' in Dehradun, utilizing advanced liquid nitrogen cryo-freezing arrays to preserve DNA, gametes, and tissue samples of endangered Indian fauna.",
    importantPoints: [
      "National Wildlife Genetic Bank Repository established in Dehradun by MoEFCC.",
      "Uses liquid nitrogen cryo-freezing arrays for genetic preservation.",
      "Safeguards DNA and tissue samples of endangered Indian wildlife species."
    ],
    examFacts: ["Facility: Wildlife Genetic Bank Repository", "Location: Dehradun, Uttarakhand", "Ministry: MoEFCC"],
    quickRemember: "MoEFCC commissioned the National Wildlife Genetic Bank Repository in Dehradun.",
    audioText: "The Environment Ministry established a specialized cryogenic tissue repository to preserve endangered wildlife genetic samples.",
    source: "MoEFCC", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-MAY-070", date: "2026-05-15", month: "May 2026", category: "Sports & Athletics",
    title: "Nikhat Zareen Wins Gold at International Boxing Tournament",
    summary: "Star Indian boxer Nikhat Zareen clinched the gold medal at an elite international boxing championship.",
    whatHappened: "Two-time world champion boxer Nikhat Zareen displayed brilliant tactical prowess to secure the gold medal in her weight division at a premier international boxing tournament, bolstering her preparation for upcoming multi-sport games.",
    importantPoints: [
      "Nikhat Zareen won gold at an international boxing championship.",
      "Discipline: Women's Boxing.",
      "Demonstrated clinical dominance over world-class opponents."
    ],
    examFacts: ["Athlete: Nikhat Zareen", "Sport: Boxing", "Medal: Gold"],
    quickRemember: "Boxer Nikhat Zareen won the gold medal at an international championship.",
    audioText: "Star Indian boxer Nikhat Zareen clinched the gold medal at an elite international boxing championship.",
    source: "Boxing Federation of India", importantFor: ["SSC CGL", "SSC CHSL"]
  },
  {
    id: "REC-MAY-071", date: "2026-05-18", month: "May 2026", category: "Science & Technology",
    title: "India Establishes National Center for Advanced Semiconductor Packaging in Chennai",
    summary: "A specialized packaging and OSAT research hub was commissioned at IIT Madras Research Park.",
    whatHappened: "The Ministry of Electronics and Information Technology (MeitY) inaugurated the National Center for Advanced Semiconductor Packaging (NCASP) at IIT Madras Research Park, accelerating indigenous chip packaging, testing, and 2.5D/3D integration capabilities.",
    importantPoints: [
      "National Center for Advanced Semiconductor Packaging (NCASP) inaugurated in Chennai.",
      "Located at IIT Madras Research Park under MeitY.",
      "Focuses on advanced OSAT (Outsourced Semiconductor Assembly and Test) technologies."
    ],
    examFacts: ["Facility: NCASP Semiconductor Hub", "Location: IIT Madras Research Park, Chennai"],
    quickRemember: "The National Center for Advanced Semiconductor Packaging was established in Chennai.",
    audioText: "A specialized packaging and OSAT research hub was commissioned at the IIT Madras Research Park.",
    source: "MeitY", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-MAY-072", date: "2026-05-19", month: "May 2026", category: "Economy & Infrastructure",
    title: "Inauguration of New Integrated International Terminal at Srinagar Airport",
    summary: "A modern international passenger terminal was inaugurated at Sheikh ul-Alam International Airport.",
    whatHappened: "An expansive new integrated passenger terminal equipped with modern aerobridges and duty-free retail zones was inaugurated at Sheikh ul-Alam International Airport in Srinagar, Jammu & Kashmir, boosting direct international tourism connectivity.",
    importantPoints: [
      "New integrated terminal building inaugurated at Srinagar Airport.",
      "Located at Sheikh ul-Alam International Airport, J&K.",
      "Expands passenger processing capacity and international flight handling."
    ],
    examFacts: ["Facility: Integrated International Terminal", "Airport: Srinagar Airport, J&K"],
    quickRemember: "A new integrated terminal building was inaugurated at Srinagar Airport.",
    audioText: "A modern international passenger terminal was inaugurated at Sheikh ul-Alam International Airport in Srinagar.",
    source: "Ministry of Civil Aviation", importantFor: ["SSC CGL", "State PCS"]
  },
  {
    id: "REC-MAY-073", date: "2026-05-20", month: "May 2026", category: "International Affairs",
    title: "India Elected to Governing Body of International Labour Organization",
    summary: "India secured a commanding seat on the ILO Governing Body during elections in Geneva.",
    whatHappened: "India was successfully elected as a titular member of the Governing Body of the International Labour Organization (ILO) during the International Labour Conference in Geneva, reinforcing its commitment to global labor welfare standards.",
    importantPoints: [
      "India elected as a titular member of the ILO Governing Body.",
      "Elections held during the International Labour Conference in Geneva.",
      "Highlights India's leadership in labor rights and social protection policies."
    ],
    examFacts: ["Body: ILO Governing Body", "Location: Geneva"],
    quickRemember: "India was elected to the Governing Body of the International Labour Organization in Geneva.",
    audioText: "India secured a commanding seat on the Governing Body of the International Labour Organization during elections in Geneva.",
    source: "Ministry of Labour and Employment", importantFor: ["UPSC", "SSC CGL"]
  },
  {
    id: "REC-MAY-074", date: "2026-05-21", month: "May 2026", category: "Government Schemes",
    title: "Ministry of Social Justice Launches 'Divyangjan Swavlamban Portal 2.0'",
    summary: "An upgraded digital welfare portal was rolled out to streamline assistive device distributions for persons with disabilities.",
    whatHappened: "The Ministry of Social Justice and Empowerment launched 'Divyangjan Swavlamban Portal 2.0', an advanced digital single-window system integrating ADIP scheme applications, UDID card verification, and localized assistive device servicing camps.",
    importantPoints: [
      "Divyangjan Swavlamban Portal 2.0 launched by Ministry of Social Justice.",
      "Streamlines ADIP scheme applications and UDID card verification.",
      "Improves delivery tracking for specialized prosthetic and assistive devices."
    ],
    examFacts: ["Portal: Divyangjan Swavlamban 2.0", "Ministry: Social Justice"],
    quickRemember: "The Social Justice Ministry launched the Divyangjan Swavlamban Portal 2.0 for disability welfare.",
    audioText: "The Social Justice Ministry launched the Divyangjan Swavlamban Portal 2.0 to streamline assistive device distribution.",
    source: "Ministry of Social Justice", importantFor: ["SSC CGL", "State PCS"]
  },
  {
    id: "REC-MAY-075", date: "2026-05-22", month: "May 2026", category: "Defence & Aerospace",
    title: "DRDO Successfully Flight-Tests Indigenous Light Tank 'Zorawar'",
    summary: "DRDO and L&T completed mobility trials for the indigenous Zorawar light tank in high-altitude terrain.",
    whatHappened: "The Defence Research and Development Organisation (DRDO) and Larsen & Toubro (L&T) successfully completed high-altitude winter mobility and firepower trials of the indigenous 'Zorawar' light tank in Eastern Ladakh, verifying its agility for mountain warfare.",
    importantPoints: [
      "High-altitude mobility trials completed for the 'Zorawar' light tank.",
      "Developed jointly by DRDO and Larsen & Toubro (L&T).",
      "Designed specifically for rapid deployment in high-altitude mountain terrain like Ladakh."
    ],
    examFacts: ["Vehicle: Zorawar Light Tank", "Partners: DRDO and L&T", "Testing Terrain: Eastern Ladakh"],
    quickRemember: "DRDO and L&T successfully flight-tested and trialed the indigenous 'Zorawar' light tank in Ladakh.",
    audioText: "DRDO and L&T successfully completed mobility trials for the indigenous Zorawar light tank in high-altitude Ladakh.",
    source: "Ministry of Defence", importantFor: ["CDS", "SSC CGL", "UPSC"]
  },
  {
    id: "REC-MAY-076", date: "2026-05-25", month: "May 2026", category: "Economy & Trade",
    title: "India and Chile Sign Bilateral Critical Minerals Exploratory Agreement",
    summary: "New Delhi and Santiago executed an executive framework for joint lithium and copper prospecting.",
    whatHappened: "India and Chile signed a bilateral exploratory framework agreement in Santiago, establishing cooperative channels for joint geological prospecting, extraction, and processing of lithium and copper ore deposits.",
    importantPoints: [
      "Critical minerals exploratory agreement signed between India and Chile.",
      "Signed in Santiago to facilitate joint lithium and copper prospecting.",
      "Secures raw material supply chains for India's electric vehicle manufacturing."
    ],
    examFacts: ["Partner: Chile", "Agreement: Critical Minerals Exploratory Framework"],
    quickRemember: "India and Chile signed a bilateral agreement for joint lithium and copper prospecting.",
    audioText: "India and Chile signed a bilateral critical minerals exploratory agreement for joint lithium and copper prospecting in Santiago.",
    source: "Ministry of Commerce", importantFor: ["UPSC", "SSC CGL"]
  },
  {
    id: "REC-MAY-077", date: "2026-05-26", month: "May 2026", category: "Science & Space",
    title: "ISRO Successfully Conducts Hot Test of Reusable Rocket Throttleable Engine",
    summary: "ISRO completed milestone static tests on a throttleable liquid engine designed for propulsive landing stages.",
    whatHappened: "ISRO successfully conducted a complex multi-restart and throttling static hot test on an advanced liquid rocket engine variant at Mahendragiri, validating variable thrust control essential for vertical propulsive landing of reusable rocket stages.",
    importantPoints: [
      "Multi-restart and throttling hot test conducted on an advanced liquid engine.",
      "Executed by ISRO at IPRC Mahendragiri, Tamil Nadu.",
      "Validates variable thrust control for reusable rocket propulsive landings."
    ],
    examFacts: ["Technology: Throttleable Liquid Rocket Engine", "Agency: ISRO", "Test Facility: Mahendragiri"],
    quickRemember: "ISRO successfully conducted a hot test of a throttleable liquid engine for reusable rocket stages.",
    audioText: "ISRO successfully conducted a static hot test of a throttleable liquid engine designed for propulsive landing stages.",
    source: "ISRO", importantFor: ["SSC CGL", "UPSC", "CDS"]
  },
  {
    id: "REC-MAY-078", date: "2026-05-27", month: "May 2026", category: "Environment & Energy",
    title: "NTPC Commissions India's First Commercial Green Ammonia Production Plant",
    summary: "NTPC operationalized a commercial green ammonia synthesis facility in Karnataka.",
    whatHappened: "NTPC Limited successfully commissioned India's first commercial-scale green ammonia production plant in Kudgi, Karnataka. The facility utilizes green hydrogen synthesized via water electrolysis combined with extracted nitrogen for zero-carbon fertilizer feedstock.",
    importantPoints: [
      "India's first commercial-scale green ammonia plant commissioned by NTPC.",
      "Located in Kudgi, Karnataka.",
      "Uses green hydrogen feedstock to produce zero-carbon ammonia for fertilizers."
    ],
    examFacts: ["Company: NTPC", "Facility: Green Ammonia Plant", "Location: Kudgi, Karnataka"],
    quickRemember: "NTPC commissioned India's first commercial green ammonia production plant in Kudgi, Karnataka.",
    audioText: "NTPC operationalized a commercial green ammonia synthesis facility in Kudgi, Karnataka.",
    source: "Ministry of Power", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-MAY-079", date: "2026-05-28", month: "May 2026", category: "National Security",
    title: "Ministry of Home Affairs Launches National Cyber Crime Evidence Management Portal",
    summary: "MHA rolled out a secure digital vault for storing and analyzing encrypted digital cyber crime evidence.",
    whatHappened: "The Ministry of Home Affairs deployed the National Cyber Crime Evidence Management Portal (NCCEMP), providing law enforcement agencies with a tamper-proof cryptographic cloud vault to securely store, examine, and present digital forensics in court.",
    importantPoints: [
      "National Cyber Crime Evidence Management Portal (NCCEMP) deployed by MHA.",
      "Provides a secure cryptographic cloud vault for digital forensics.",
      "Ensures chain-of-custody integrity for cyber crime digital evidence."
    ],
    examFacts: ["Portal: NCCEMP", "Ministry: Ministry of Home Affairs"],
    quickRemember: "MHA launched the National Cyber Crime Evidence Management Portal (NCCEMP) for digital forensics.",
    audioText: "The Home Ministry rolled out a secure digital vault for storing and analyzing encrypted digital cyber crime evidence.",
    source: "Ministry of Home Affairs", importantFor: ["SSC CGL", "UPSC", "CDS"]
  },
  {
    id: "REC-MAY-080", date: "2026-05-29", month: "May 2026", category: "Economy & Agriculture",
    title: "NABARD Approves ₹8,000 Crore Digital Agri-Stack Integration Fund",
    summary: "NABARD sanctioned a dedicated credit line to integrate state land registries with the National Agri-Stack.",
    whatHappened: "NABARD approved the sanction of an ₹8,000 crore financial package to support states in linking digitized land records, farmer registry databases, and crop-sowing surveys into the unified National Agri-Stack platform.",
    importantPoints: [
      "₹8,000 crore package approved by NABARD for Agri-Stack integration.",
      "Connects land records and farmer registries into a unified digital platform.",
      "Aims to streamline agricultural credit disbursal and crop insurance claims."
    ],
    examFacts: ["Institution: NABARD", "Fund: Agri-Stack Integration Package", "Allocation: ₹8,000 Crore"],
    quickRemember: "NABARD approved an ₹8,000 crore fund to integrate land registries with the National Agri-Stack.",
    audioText: "NABARD approved an eight thousand crore rupee credit line to integrate state land registries with the National Agri-Stack.",
    source: "NABARD", importantFor: ["Bank PO", "SSC CGL", "UPSC"]
  }
];

const mayRecallQuestionsBatch4 = [
  {
    id: "REC-Q-MAY-061", articleId: "REC-MAY-061", category: "Science & Technology",
    question: "Scientists at the CSIR-National Chemical Laboratory (NCL) in Pune successfully developed a heterogeneous catalyst that accelerates the hydrogenation of captured carbon dioxide directly into:",
    options: ["Synthetic jet kerosene", "Green methanol", "Polycarbonate bio-plastics", "Liquid anhydrous ammonia"],
    answer: 1, explanation: "CSIR-NCL engineered a catalyst that converts industrial carbon dioxide emissions directly into clean green methanol."
  },
  {
    id: "REC-Q-MAY-062", articleId: "REC-MAY-062", category: "Economy & Infrastructure",
    question: "The Airports Authority of India commissioned a state-of-the-art automated Air Traffic Control tower equipped with advanced surface movement radar at the airport in:",
    options: ["New Delhi", "Bengaluru", "Mumbai", "Hyderabad"],
    answer: 2, explanation: "An automated Air Traffic Control tower was commissioned at Chhatrapati Shivaji Maharaj International Airport in Mumbai."
  },
  {
    id: "REC-Q-MAY-063", articleId: "REC-MAY-063", category: "Environment & Wildlife",
    question: "Researchers from the National Centre for Earth Science Studies formally described a new species of deep-sea crustacean belonging to the giant isopod family, named:",
    options: ["Bathynomus keralensis", "Cirolana travancorensis", "Glyptonotus arabicus", "Serolis malabarica"],
    answer: 0, explanation: "Researchers described a new species of deep-sea isopod crustacean named Bathynomus keralensis collected off the Kollam coast in Kerala."
  },
  {
    id: "REC-Q-MAY-064", articleId: "REC-MAY-064", category: "Defence & Aerospace",
    question: "The DRDO successfully completed user-evaluation trials of the Smart Anti-Airfield Weapon (SAAW), which is classified as a:",
    options: ["Surface-to-surface tactical ballistic missile", "Precision-guided standoff glide bomb", "Anti-radiation loitering drone munition", "Supersonic anti-ship cruise missile"],
    answer: 1, explanation: "The SAAW is a precision-guided standoff glide bomb developed by DRDO to neutralize enemy runways and tactical fortifications."
  },
  {
    id: "REC-Q-MAY-065", articleId: "REC-MAY-065", category: "Government Schemes",
    question: "Phase 2 of the PM Vishwakarma scheme rolled out by the Ministry of Skill Development provides advanced digital marketplace onboarding and:",
    options: ["Direct bank overdraft credit guarantees", "Expanded high-tech toolkit financial grants for traditional artisans", "International export shipping subsidies", "Tax-exempt raw material procurement quotas"],
    answer: 1, explanation: "Phase 2 of PM Vishwakarma provides digital marketplace onboarding, branding assistance, and expanded high-tech toolkit financial grants."
  },
  {
    id: "REC-Q-MAY-066", articleId: "REC-MAY-066", category: "Economy & Banking",
    question: "The Reserve Bank of India operationalized a centralized digital dashboard to monitor and streamline transactions routed through:",
    options: ["Special Rupee Vostro Accounts (SRVA)", "Interbank Mobile Payment Switches", "Bharat Bill Payment Operating Units", "Cross-Border Retail Remittance Gateways"],
    answer: 0, explanation: "The RBI operationalized a centralized digital dashboard to monitor transactions through Special Rupee Vostro Accounts (SRVA)."
  },
  {
    id: "REC-Q-MAY-067", articleId: "REC-MAY-067", category: "Science & Technology",
    question: "Researchers at IIT Hyderabad synthesized a durable, high-flux functionalized membrane capable of filtering salt ions from seawater, known as a:",
    options: ["Cellulose acetate micro-filter", "Laser-scribed graphene oxide membrane", "Polymeric hollow fiber dialyzer", "Silicon nitride nanoporous sheet"],
    answer: 1, explanation: "IIT Hyderabad synthesized a high-flux functionalized laser-scribed graphene oxide membrane capable of filtering salt ions from seawater."
  },
  {
    id: "REC-Q-MAY-068", articleId: "REC-MAY-068", category: "International Affairs",
    question: "India and the United Arab Emirates signed a comprehensive bilateral agreement in Abu Dhabi focusing on cooperation in:",
    options: ["Civil nuclear energy sharing", "Artificial intelligence, supercomputing, and open-source LLM training", "Maritime counter-piracy patrols", "Bilateral semiconductor wafer foundries"],
    answer: 1, explanation: "India and the UAE signed an AI cooperation pact in Abu Dhabi focusing on supercomputing infrastructure sharing and open-source LLM training."
  },
  {
    id: "REC-Q-MAY-069", articleId: "REC-MAY-069", category: "Environment & Forests",
    question: "The Ministry of Environment commissioned the 'National Wildlife Genetic Bank Repository' using liquid nitrogen cryo-freezing arrays in which city?",
    options: ["Bengaluru", "Dehradun", "Bhopal", "Guwahati"],
    answer: 1, explanation: "The National Wildlife Genetic Bank Repository was commissioned in Dehradun by the MoEFCC to preserve DNA and tissue samples."
  },
  {
    id: "REC-Q-MAY-070", articleId: "REC-MAY-070", category: "Sports & Athletics",
    question: "Two-time world champion boxer Nikhat Zareen secured the gold medal in her weight division at:",
    options: ["The Commonwealth Boxing Cup", "A premier international boxing tournament", "The World Boxing Invitational", "The Asian Elite Boxing Circuit"],
    answer: 1, explanation: "Nikhat Zareen secured the gold medal in her weight division at a premier international boxing tournament."
  },
  {
    id: "REC-Q-MAY-071", articleId: "REC-MAY-071", category: "Science & Technology",
    question: "The Ministry of Electronics and Information Technology inaugurated the National Center for Advanced Semiconductor Packaging (NCASP) at:",
    options: ["IISc Bengaluru Research Complex", "IIT Madras Research Park in Chennai", "IIT Bombay Technology Hub", "TIFR Mumbai Innovation Center"],
    answer: 1, explanation: "The NCASP was inaugurated at the IIT Madras Research Park in Chennai, accelerating indigenous semiconductor packaging and OSAT capabilities."
  },
  {
    id: "REC-Q-MAY-072", articleId: "REC-MAY-072", category: "Economy & Infrastructure",
    question: "An expansive new integrated passenger terminal equipped with modern aerobridges was inaugurated at Sheikh ul-Alam International Airport located in:",
    options: ["Leh, Ladakh", "Jammu, J&K", "Srinagar, Jammu & Kashmir", "Amritsar, Punjab"],
    answer: 2, explanation: "An integrated passenger terminal was inaugurated at Sheikh ul-Alam International Airport in Srinagar, Jammu & Kashmir."
  },
  {
    id: "REC-Q-MAY-073", articleId: "REC-MAY-073", category: "International Affairs",
    question: "India was successfully elected as a titular member of the Governing Body of the International Labour Organization (ILO) during elections in:",
    options: ["New York", "Geneva", "Vienna", "Rome"],
    answer: 1, explanation: "India was elected as a titular member of the ILO Governing Body during the International Labour Conference in Geneva."
  },
  {
    id: "REC-Q-MAY-074", articleId: "REC-MAY-074", category: "Government Schemes",
    question: "The Ministry of Social Justice launched 'Divyangjan Swavlamban Portal 2.0' as an advanced digital single-window system integrating applications for:",
    options: ["Sheltered workshop employment grants", "ADIP scheme applications and UDID card verification", "Specialized school infrastructure subsidies", "Rehabilitation counselor licensing"],
    answer: 1, explanation: "Divyangjan Swavlamban Portal 2.0 integrates ADIP scheme applications, UDID card verification, and localized assistive device servicing camps."
  },
  {
    id: "REC-Q-MAY-075", articleId: "REC-MAY-075", category: "Defence & Aerospace",
    question: "The DRDO and Larsen & Toubro successfully completed high-altitude winter mobility and firepower trials of the indigenous 'Zorawar' light tank in:",
    options: ["Siachen Glacier sector", "Eastern Ladakh", "North Sikkim high plateau", "Tawang sector, Arunachal Pradesh"],
    answer: 1, explanation: "The indigenous 'Zorawar' light tank successfully completed high-altitude winter mobility trials in Eastern Ladakh."
  },
  {
    id: "REC-Q-MAY-076", articleId: "REC-MAY-076", category: "Economy & Trade",
    question: "India and Chile signed a bilateral exploratory framework agreement in Santiago establishing cooperative channels for joint prospecting of:",
    options: ["Rare earth magnet neodymium ores", "Lithium and copper ore deposits", "Coltan and cobalt mineral veins", "High-purity crystalline quartz deposits"],
    answer: 1, explanation: "India and Chile signed an agreement in Santiago facilitating joint geological prospecting, extraction, and processing of lithium and copper ore deposits."
  },
  {
    id: "REC-Q-MAY-077", articleId: "REC-MAY-077", category: "Science & Space",
    question: "ISRO conducted a complex multi-restart and throttling static hot test on an advanced liquid rocket engine variant at Mahendragiri to validate:",
    options: ["High-speed atmospheric staging separation", "Variable thrust control for vertical propulsive landing of reusable stages", "Cryogenic tank auto-pressurization pumps", "Interplanetary ion propulsion stability"],
    answer: 1, explanation: "The multi-restart and throttling hot test validated variable thrust control essential for vertical propulsive landing of reusable rocket stages."
  },
  {
    id: "REC-Q-MAY-078", articleId: "REC-MAY-078", category: "Environment & Energy",
    question: "NTPC Limited successfully commissioned India's first commercial-scale green ammonia production plant in which city?",
    options: ["Kudgi, Karnataka", "Visakhapatnam, Andhra Pradesh", "Mundra, Gujarat", "Tuticorin, Tamil Nadu"],
    answer: 0, explanation: "NTPC commissioned India's first commercial-scale green ammonia production plant in Kudgi, Karnataka, using green hydrogen and nitrogen."
  },
  {
    id: "REC-Q-MAY-079", articleId: "REC-MAY-079", category: "National Security",
    question: "The Ministry of Home Affairs deployed the National Cyber Crime Evidence Management Portal (NCCEMP) to provide law enforcement agencies with:",
    options: ["Automated IP address geolocation tracing tools", "A tamper-proof cryptographic cloud vault for digital forensics", "Dark web vendor marketplace infiltration feeds", "Encrypted satellite communication handsets"],
    answer: 1, explanation: "The NCCEMP provides law enforcement agencies with a tamper-proof cryptographic cloud vault to securely store and present digital forensics."
  },
  {
    id: "REC-Q-MAY-080", articleId: "REC-MAY-080", category: "Economy & Agriculture",
    question: "NABARD approved the sanction of an ₹8,000 crore financial package to support states in linking land records and farmer registries into the unified:",
    options: ["National Agri-Stack platform", "Unified Kisan Credit Ledger", "Direct Benefit Ag-Stack Network", "Centralized Crop Insurance Grid"],
    answer: 0, explanation: "NABARD approved an ₹8,000 crore package to integrate digitized land records and farmer databases into the unified National Agri-Stack platform."
  }
];

// 👉 PUSH DATA INTO GLOBAL ARRAYS
if (typeof hiddenRecallArticles !== 'undefined') {
  hiddenRecallArticles.push(...mayRecallArticlesBatch4);
}
if (typeof recallQuestionPool !== 'undefined') {
  recallQuestionPool.push(...mayRecallQuestionsBatch4);
}

/* ==========================================================================
   END OF MAY BATCH 4
   ========================================================================== */

/* ==========================================================================
   MAY 2026 - BATCH 5 (ITEMS 081 TO 100)
   ========================================================================== */

const mayRecallArticlesBatch5 = [
  {
    id: "REC-MAY-081", date: "2026-05-01", month: "May 2026", category: "Science & Technology",
    title: "ISRO Successfully Tests Reusable Rocket Grid Fin Actuator Systems",
    summary: "ISRO completed high-stress actuator performance evaluations for reusable launch vehicle grid fins.",
    whatHappened: "The Indian Space Research Organisation (ISRO) successfully accomplished high-stress electro-mechanical actuator performance tests for the aerodynamic grid fins of its Reusable Launch Vehicle program, ensuring precise steering response under extreme supersonic dynamic pressures.",
    importantPoints: [
      "Electro-mechanical actuator performance trials completed by ISRO.",
      "Designed to drive reusable rocket grid fins under supersonic stress.",
      "Ensures precise atmospheric steering control during booster descent."
    ],
    examFacts: ["Component: Grid Fin Actuators", "Agency: ISRO", "Application: Reusable Launch Vehicles"],
    quickRemember: "ISRO successfully tested high-stress actuator systems for reusable rocket grid fins.",
    audioText: "ISRO completed high-stress actuator performance evaluations for reusable launch vehicle grid fins.",
    source: "ISRO", importantFor: ["SSC CGL", "UPSC", "CDS"]
  },
  {
    id: "REC-MAY-082", date: "2026-05-02", month: "May 2026", category: "Economy & Trade",
    title: "India and Argentina Sign Bilateral Framework on Nuclear Medicine Cooperation",
    summary: "New Delhi and Buenos Aires executed an executive agreement for joint radioisotope production and research.",
    whatHappened: "India and Argentina signed a bilateral framework agreement in Buenos Aires to foster cooperation in nuclear medicine, focusing on the joint processing of medical radioisotopes like molybdenum-99 for cancer diagnostics and oncology therapeutics.",
    importantPoints: [
      "Nuclear medicine cooperation framework signed between India and Argentina.",
      "Signed in Buenos Aires to facilitate joint medical radioisotope processing.",
      "Enhances availability of affordable cancer diagnostic materials."
    ],
    examFacts: ["Partner: Argentina", "Agreement: Nuclear Medicine Framework", "Key Isotope: Molybdenum-99"],
    quickRemember: "India and Argentina signed a bilateral framework agreement for cooperation in nuclear medicine.",
    audioText: "India and Argentina signed a bilateral framework agreement in Buenos Aires for joint radioisotope production.",
    source: "Ministry of External Affairs", importantFor: ["UPSC", "SSC CGL"]
  },
  {
    id: "REC-MAY-083", date: "2026-05-04", month: "May 2026", category: "Environment & Conservation",
    title: "Ministry of Environment Launches 'National Agroforestry Carbon Credit Portal'",
    summary: "The government rolled out a digital registry to monetize carbon sequestration through smallholder tree planting.",
    whatHappened: "The Ministry of Environment, Forest and Climate Change launched the 'National Agroforestry Carbon Credit Portal', an end-to-end digital registry allowing farmers to measure, verify, and trade carbon credits generated from farm-grown timber and trees.",
    importantPoints: [
      "National Agroforestry Carbon Credit Portal launched by MoEFCC.",
      "Enables farmers to quantify and monetize carbon sequestration from tree planting.",
      "Connects rural agrarian holdings directly to international carbon markets."
    ],
    examFacts: ["Portal: National Agroforestry Carbon Credit Portal", "Ministry: MoEFCC"],
    quickRemember: "MoEFCC launched the National Agroforestry Carbon Credit Portal to help farmers trade carbon credits.",
    audioText: "The Environment Ministry rolled out a digital registry to monetize carbon sequestration through tree planting.",
    source: "MoEFCC", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-MAY-084", date: "2026-05-05", month: "May 2026", category: "Defence & Aerospace",
    title: "DRDO Successfully Flight-Tests Indigenous Hypersonic Technology Demonstrator",
    summary: "DRDO validated scramjet engine propulsion milestones during a high-speed hypersonic flight trial.",
    whatHappened: "The Defence Research and Development Organisation (DRDO) successfully completed a critical flight test of its indigenous Hypersonic Technology Demonstrator Vehicle (HSTDV) from Wheeler Island off the Odisha coast, achieving Mach 6 speeds powered by a scramjet engine.",
    importantPoints: [
      "Successful flight trial of the Hypersonic Technology Demonstrator Vehicle (HSTDV).",
      "Achieved Mach 6 speeds using indigenous scramjet engine technology.",
      "Conducted from Abdul Kalam Island (Wheeler Island), Odisha."
    ],
    examFacts: ["Test Vehicle: HSTDV", "Speed: Mach 6 (Scramjet)", "Test Site: Wheeler Island, Odisha"],
    quickRemember: "DRDO flight-tested an indigenous hypersonic technology demonstrator achieving Mach 6 speeds.",
    audioText: "DRDO validated scramjet engine propulsion milestones during a high-speed hypersonic flight trial.",
    source: "Ministry of Defence", importantFor: ["CDS", "SSC CGL", "UPSC"]
  },
  {
    id: "REC-MAY-085", date: "2026-05-06", month: "May 2026", category: "Government Schemes",
    title: "Ministry of Tribal Affairs Launches 'Eklavya Model Residential Schools Digital Library'",
    summary: "A specialized cloud repository was launched to provide uniform e-learning modules across all EMRS campuses.",
    whatHappened: "The Ministry of Tribal Affairs launched a dedicated digital library platform connecting all Eklavya Model Residential Schools (EMRS) nationwide, offering multilingual curriculum access, virtual science labs, and competitive exam coaching modules for tribal students.",
    importantPoints: [
      "EMRS Digital Library launched by the Ministry of Tribal Affairs.",
      "Connects all Eklavya Model Residential Schools across India.",
      "Provides multilingual e-learning modules and virtual science laboratories."
    ],
    examFacts: ["Initiative: EMRS Digital Library", "Ministry: Tribal Affairs"],
    quickRemember: "The Ministry of Tribal Affairs launched a digital library platform for Eklavya Model Residential Schools.",
    audioText: "The Tribal Affairs Ministry launched a cloud repository providing e-learning modules across EMRS campuses.",
    source: "Ministry of Tribal Affairs", importantFor: ["SSC CGL", "State PCS"]
  },
  {
    id: "REC-MAY-086", date: "2026-05-07", month: "May 2026", category: "Economy & Banking",
    title: "SEBI Mandates Real-Time Surveillance for Algorithmic Trading Desks",
    summary: "SEBI introduced strict automated circuit breaker protocols for high-frequency algorithmic trading desks.",
    whatHappened: "The Securities and Exchange Board of India (SEBI) issued regulatory guidelines requiring all institutional stockbrokers operating algorithmic trading desks to integrate automated real-time kill switches and anomalous order flash filters.",
    importantPoints: [
      "SEBI mandated real-time kill switches for algorithmic trading desks.",
      "Aims to prevent flash crashes and systemic technical anomalies.",
      "Enhances structural stability across stock exchange order books."
    ],
    examFacts: ["Regulator: SEBI", "Focus: Algorithmic Trading Surveillance"],
    quickRemember: "SEBI mandated real-time kill switches and risk controls for high-frequency algorithmic trading desks.",
    audioText: "SEBI introduced strict automated circuit breaker protocols for high-frequency algorithmic trading desks.",
    source: "SEBI", importantFor: ["Bank PO", "SSC CGL"]
  },
  {
    id: "REC-MAY-087", date: "2026-05-08", month: "May 2026", category: "Science & Technology",
    title: "IISc Bengaluru Develops Low-Cost Flexible Pressure Sensors",
    summary: "Researchers at IISc engineered ultra-sensitive flexible pressure sensor arrays for robotic touch feedback.",
    whatHappened: "Scientists at the Indian Institute of Science (IISc) Bengaluru developed an ultra-sensitive, low-cost flexible pressure sensor patch utilizing carbon-nanotube composite films, providing human-like artificial tactile perception for prosthetic limbs and surgical robots.",
    importantPoints: [
      "Flexible pressure sensor patches developed by IISc Bengaluru.",
      "Uses carbon-nanotube composite films for artificial tactile touch feedback.",
      "Aids advanced prosthetics and surgical robotic manipulation."
    ],
    examFacts: ["Innovation: Flexible Tactile Pressure Sensors", "Institute: IISc Bengaluru"],
    quickRemember: "IISc Bengaluru developed low-cost flexible pressure sensors for robotic touch feedback.",
    audioText: "Researchers at IISc engineered ultra-sensitive flexible pressure sensor arrays for artificial tactile touch feedback.",
    source: "IISc", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-MAY-088", date: "2026-05-11", month: "May 2026", category: "International Affairs",
    title: "India and European Investment Bank Sign Green Urban Transport Accord",
    summary: "New Delhi and the EIB executed a financing agreement to expand metro rail networks in tier-2 cities.",
    whatHappened: "India and the European Investment Bank (EIB) signed a major institutional financing pact in New Delhi, securing long-term low-interest credit lines to fund zero-emission electric bus fleets and modern metro rail networks across emerging urban centers.",
    importantPoints: [
      "Green Urban Transport financing agreement signed between India and the EIB.",
      "Provides long-term low-interest credit lines for clean urban mobility.",
      "Funds electric bus fleets and metro rail expansions in tier-2 cities."
    ],
    examFacts: ["Partner: European Investment Bank (EIB)", "Focus: Zero-Emission Urban Transport"],
    quickRemember: "India and the EIB signed a green urban transport accord to finance electric buses and metros.",
    audioText: "India and the European Investment Bank signed a financing agreement to expand clean urban transport networks.",
    source: "Ministry of Finance", importantFor: ["UPSC", "SSC CGL", "Bank PO"]
  },
  {
    id: "REC-MAY-089", date: "2026-05-12", month: "May 2026", category: "Environment & Wildlife",
    title: "New Gecko Species 'Cnemaspis smitae' Discovered in Eastern Ghats",
    summary: "Herpetologists formally described a striking new day-gecko species from rocky outcrops in Odisha.",
    whatHappened: "Wildlife researchers formally described a new species of day-gecko, named *Cnemaspis smitae*, discovered inhabiting high-elevation rocky cave shelters in the Eastern Ghats of Odisha, highlighting the region's hidden reptile diversity.",
    importantPoints: [
      "New day-gecko species named *Cnemaspis smitae*.",
      "Discovered in the Eastern Ghats of Odisha.",
      "Endemic reptile species illustrating regional biodiversity richness."
    ],
    examFacts: ["Species: Cnemaspis smitae", "Location: Eastern Ghats, Odisha"],
    quickRemember: "A new day-gecko species, Cnemaspis smitae, was discovered in the Eastern Ghats of Odisha.",
    audioText: "Herpetologists described a new day-gecko species named Cnemaspis smitae from rocky outcrops in Odisha.",
    source: "Zoological Survey of India", importantFor: ["SSC CGL", "State PCS"]
  },
  {
    id: "REC-MAY-090", date: "2026-05-13", month: "May 2026", category: "National Affairs",
    title: "Ministry of Culture Launches National Digital Archives of Folk Music",
    summary: "A comprehensive online repository was commissioned to preserve indigenous oral folk music traditions.",
    whatHappened: "The Ministry of Culture launched the 'National Digital Archives of Folk Music', an extensive cloud platform designed to record, catalog, and preserve dying tribal folk tunes, ritual ballads, and indigenous instruments from remote rural districts.",
    importantPoints: [
      "National Digital Archives of Folk Music launched by Ministry of Culture.",
      "Records and catalogs dying tribal folk tunes and indigenous musical instruments.",
      "Safeguards intangible cultural heritage for future generations."
    ],
    examFacts: ["Platform: National Digital Archives of Folk Music", "Ministry: Ministry of Culture"],
    quickRemember: "The Ministry of Culture launched a digital archive platform to preserve indigenous folk music traditions.",
    audioText: "The Culture Ministry launched a comprehensive online repository to preserve indigenous oral folk music traditions.",
    source: "Ministry of Culture", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-MAY-091", date: "2026-05-14", month: "May 2026", category: "Science & Technology",
    title: "CSIR-CECRI Develops Indigenous Sodium-Ion Battery Cell",
    summary: "CSIR-CECRI successfully fabricated low-cost sodium-ion battery cells as a sustainable alternative to lithium.",
    whatHappened: "Scientists at the CSIR-Central Electrochemical Research Institute (CECRI) in Karaikudi successfully fabricated prototype sodium-ion battery cells using earth-abundant raw materials, eliminating supply-chain reliance on imported lithium and cobalt.",
    importantPoints: [
      "Sodium-ion battery cells developed by CSIR-CECRI Karaikudi.",
      "Uses earth-abundant sodium materials instead of scarce lithium.",
      "Provides an affordable, safe energy storage alternative for electric vehicles and grids."
    ],
    examFacts: ["Institution: CSIR-CECRI Karaikudi", "Innovation: Sodium-Ion Battery Cells"],
    quickRemember: "CSIR-CECRI developed indigenous sodium-ion battery cells as an alternative to lithium.",
    audioText: "CSIR-CECRI successfully fabricated low-cost sodium-ion battery cells using earth-abundant materials.",
    source: "CSIR", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-MAY-092", date: "2026-05-15", month: "May 2026", category: "Economy & Infrastructure",
    title: "Inauguration of New Automated Multi-Modal Cargo Gateway in Visakhapatnam",
    summary: "A modern automated cargo gateway was commissioned at Visakhapatnam Port to facilitate coastal shipping.",
    whatHappened: "An advanced automated multi-modal cargo gateway integrating coastal shipping berths with high-speed freight rail links was commissioned at Visakhapatnam Port, boosting industrial transit efficiency across eastern industrial corridors.",
    importantPoints: [
      "Automated multi-modal cargo gateway commissioned at Visakhapatnam Port.",
      "Integrates coastal shipping berths with high-speed freight rail lines.",
      "Boosts logistics connectivity across eastern industrial zones."
    ],
    examFacts: ["Facility: Automated Cargo Gateway", "Port: Visakhapatnam Port"],
    quickRemember: "An automated multi-modal cargo gateway was commissioned at Visakhapatnam Port.",
    audioText: "A modern automated cargo gateway was commissioned at Visakhapatnam Port to facilitate coastal shipping.",
    source: "Ministry of Ports", importantFor: ["SSC CGL", "RRB NTPC"]
  },
  {
    id: "REC-MAY-093", date: "2026-05-18", month: "May 2026", category: "International Affairs",
    title: "India Elected to Executive Board of UNESCO",
    summary: "India secured a commanding term on the UNESCO Executive Board during plenary sessions in Paris.",
    whatHappened: "India was successfully elected to the Executive Board of the United Nations Educational, Scientific and Cultural Organization (UNESCO) during plenary voting sessions at UNESCO Headquarters in Paris, strengthening its role in global education and heritage standards.",
    importantPoints: [
      "India elected to the Executive Board of UNESCO.",
      "Elections held at UNESCO Headquarters in Paris.",
      "Reinforces India's global leadership in educational policy and cultural preservation."
    ],
    examFacts: ["Body: UNESCO Executive Board", "Location: Paris"],
    quickRemember: "India was elected to the Executive Board of UNESCO in Paris.",
    audioText: "India secured a commanding term on the UNESCO Executive Board during plenary sessions in Paris.",
    source: "MEA", importantFor: ["UPSC", "SSC CGL"]
  },
  {
    id: "REC-MAY-094", date: "2026-05-19", month: "May 2026", category: "Government Schemes",
    title: "Ministry of Health Launches 'National Tele-Ophthalmology Network'",
    summary: "A dedicated digital eye-care platform was operationalized to provide remote vision screening in rural districts.",
    whatHappened: "The Ministry of Health and Family Welfare operationalized the 'National Tele-Ophthalmology Network', connecting rural health and wellness centers with premier eye hospitals via AI-assisted digital fundus cameras for early glaucoma and cataract screening.",
    importantPoints: [
      "National Tele-Ophthalmology Network launched by Ministry of Health.",
      "Connects rural health clinics with eye hospitals using AI fundus cameras.",
      "Aims to eradicate preventable blindness through early rural screening."
    ],
    examFacts: ["Platform: National Tele-Ophthalmology Network", "Ministry: Health & Family Welfare"],
    quickRemember: "The Health Ministry launched the National Tele-Ophthalmology Network for rural vision screening.",
    audioText: "The Health Ministry operationalized a dedicated digital eye-care platform to provide remote vision screening in rural districts.",
    source: "MoHFW", importantFor: ["SSC CGL", "State PCS"]
  },
  {
    id: "REC-MAY-095", date: "2026-05-20", month: "May 2026", category: "Defence & Aerospace",
    title: "Indian Navy Successfully Flight-Tests Indigenous Naval Anti-Ship Missile",
    summary: "The Indian Navy and DRDO validated tactical combat readiness for the lightweight naval anti-ship cruise missile.",
    whatHappened: "The Indian Navy and DRDO successfully completed user-acceptance flight trials of the indigenous Naval Anti-Ship Missile (Short Range) from a Sea King helicopter off the western seaboard, verifying sea-skimming low-altitude guidance accuracy.",
    importantPoints: [
      "Flight-test trials of the indigenous Naval Anti-Ship Missile (Short Range).",
      "Fired from a naval helicopter platform off the western coast.",
      "Features sea-skimming low-altitude guidance to evade enemy radar."
    ],
    examFacts: ["Weapon: Naval Anti-Ship Missile (Short Range)", "Agency: DRDO & Indian Navy"],
    quickRemember: "The Indian Navy and DRDO successfully flight-tested the indigenous Naval Anti-Ship Missile.",
    audioText: "The Indian Navy and DRDO successfully validated the combat readiness of the naval anti-ship cruise missile.",
    source: "Ministry of Defence", importantFor: ["CDS", "SSC CGL"]
  },
  {
    id: "REC-MAY-096", date: "2026-05-21", month: "May 2026", category: "Economy & Trade",
    title: "India and Eurasian Economic Union Resume Free Trade Agreement Talks",
    summary: "New Delhi and EAEU delegates held constructive sessions in Moscow to advance bilateral trade negotiations.",
    whatHappened: "Trade delegations from India and the Eurasian Economic Union (EAEU)—comprising Russia, Kazakhstan, Belarus, Armenia, and Kyrgyzstan—convened in Moscow to resume formal negotiations for a comprehensive Free Trade Agreement.",
    importantPoints: [
      "FTA negotiations resumed between India and the Eurasian Economic Union (EAEU).",
      "EAEU comprises Russia, Kazakhstan, Belarus, Armenia, and Kyrgyzstan.",
      "Talks held in Moscow to expand Eurasian market access."
    ],
    examFacts: ["Bloc: Eurasian Economic Union (EAEU)", "Talks Location: Moscow"],
    quickRemember: "India and the Eurasian Economic Union resumed Free Trade Agreement talks in Moscow.",
    audioText: "India and Eurasian Economic Union delegates held constructive sessions in Moscow to advance trade negotiations.",
    source: "Ministry of Commerce", importantFor: ["UPSC", "SSC CGL"]
  },
  {
    id: "REC-MAY-097", date: "2026-05-22", month: "May 2026", category: "Science & Space",
    title: "ISRO Successfully Completes Space Docking Experiment Component Qualification",
    summary: "ISRO validated autonomous rendezvous and docking sensors for future Indian space station modules.",
    whatHappened: "ISRO successfully completed rigorous ground simulation and sensor qualification tests for its indigenous Space Docking Experiment (SpDEx) hardware, a critical technology required for assembling modular space station units in orbit.",
    importantPoints: [
      "Sensor hardware and simulation tests completed for the Space Docking Experiment (SpDEx).",
      "Validated by ISRO for future modular space station assembly.",
      "Enables precise autonomous rendezvous and physical docking in orbit."
    ],
    examFacts: ["Project: SpDEx (Space Docking Experiment)", "Agency: ISRO"],
    quickRemember: "ISRO completed sensor qualification tests for the Space Docking Experiment (SpDEx).",
    audioText: "ISRO validated autonomous rendezvous and docking sensors for future Indian space station modules.",
    source: "ISRO", importantFor: ["SSC CGL", "UPSC", "CDS"]
  },
  {
    id: "REC-MAY-098", date: "2026-05-25", month: "May 2026", category: "Environment & Energy",
    title: "NTPC Commissions India's First Commercial Waste-to-Energy Power Plant",
    summary: "NTPC operationalized an advanced municipal solid waste gasification power facility in Kanpur.",
    whatHappened: "NTPC Limited successfully commissioned India's first commercial-scale municipal solid waste-to-energy gasification power plant in Kanpur, Uttar Pradesh, converting urban garbage into clean synthesis gas for electricity generation.",
    importantPoints: [
      "Commercial waste-to-energy gasification power plant commissioned by NTPC.",
      "Located in Kanpur, Uttar Pradesh.",
      "Converts municipal solid waste into synthetic gas for clean power generation."
    ],
    examFacts: ["Company: NTPC", "Facility: Waste-to-Energy Power Plant", "Location: Kanpur, UP"],
    quickRemember: "NTPC commissioned India's first commercial waste-to-energy power plant in Kanpur.",
    audioText: "NTPC operationalized an advanced municipal solid waste gasification power facility in Kanpur.",
    source: "Ministry of Power", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-MAY-099", date: "2026-05-26", month: "May 2026", category: "National Security",
    title: "Ministry of Home Affairs Deploys Automated National Prison Management Ledger",
    summary: "MHA rolled out a unified digital prison tracking and inmate rehabilitation ledger across all state jails.",
    whatHappened: "The Ministry of Home Affairs deployed the Automated National Prison Management Ledger, interconnecting jail telemetry, parole tracking, and court production schedules into a unified digital ecosystem to improve correctional administration transparency.",
    importantPoints: [
      "Automated National Prison Management Ledger deployed by MHA.",
      "Interconnects jail telemetry, parole tracking, and court schedules.",
      "Improves transparency and administrative tracking across state correctional facilities."
    ],
    examFacts: ["System: National Prison Management Ledger", "Ministry: Ministry of Home Affairs"],
    quickRemember: "MHA deployed the Automated National Prison Management Ledger to modernize prison tracking.",
    audioText: "The Home Ministry rolled out a unified digital prison tracking and inmate rehabilitation ledger across state jails.",
    source: "Ministry of Home Affairs", importantFor: ["SSC CGL", "UPSC", "CDS"]
  },
  {
    id: "REC-MAY-100", date: "2026-05-27", month: "May 2026", category: "Economy & Agriculture",
    title: "NABARD Approves ₹15,000 Crore Smart Cold-Chain Logistics Fund",
    summary: "NABARD sanctioned a major credit line to build temperature-controlled agricultural storage networks.",
    whatHappened: "NABARD approved the sanction of a ₹15,000 crore specialized fund dedicated to financing solar-powered cold-storage hubs, pack-houses, and refrigerated transport vehicles, preventing post-harvest agricultural wastage across major farming clusters.",
    importantPoints: [
      "₹15,000 crore Smart Cold-Chain Logistics Fund approved by NABARD.",
      "Finances solar-powered cold-storage hubs and refrigerated transport.",
      "Aims to curb post-harvest agricultural wastage across farming clusters."
    ],
    examFacts: ["Institution: NABARD", "Fund: Smart Cold-Chain Logistics Fund", "Allocation: ₹15,000 Crore"],
    quickRemember: "NABARD approved a ₹15,000 crore Smart Cold-Chain Logistics Fund to prevent post-harvest waste.",
    audioText: "NABARD approved a fifteen thousand crore rupee fund to build temperature-controlled agricultural storage networks.",
    source: "NABARD", importantFor: ["Bank PO", "SSC CGL", "UPSC"]
  }
];

const mayRecallQuestionsBatch5 = [
  {
    id: "REC-Q-MAY-081", articleId: "REC-MAY-081", category: "Science & Technology",
    question: "The Indian Space Research Organisation successfully completed high-stress electro-mechanical actuator performance trials for what component of its Reusable Launch Vehicle program?",
    options: ["Cryogenic turbopump valves", "Aerodynamic grid fins", "Reaction control thruster nozzles", "Payload fairing separation springs"],
    answer: 1, explanation: "ISRO completed electro-mechanical actuator performance trials for the aerodynamic grid fins of its Reusable Launch Vehicle program."
  },
  {
    id: "REC-Q-MAY-082", articleId: "REC-MAY-082", category: "Economy & Trade",
    question: "India and Argentina signed a bilateral framework agreement in Buenos Aires to foster cooperation in nuclear medicine, focusing on processing medical radioisotopes like:",
    options: ["Cobalt-60", "Molybdenum-99", "Iodine-131", "Technetium-99m"],
    answer: 1, explanation: "The agreement focuses on the joint processing of medical radioisotopes like molybdenum-99 for cancer diagnostics and oncology therapeutics."
  },
  {
    id: "REC-Q-MAY-083", articleId: "REC-MAY-083", category: "Environment & Conservation",
    question: "The 'National Agroforestry Carbon Credit Portal' launched by the Ministry of Environment allows farmers to measure, verify, and trade carbon credits generated from:",
    options: ["Solar rooftop net-metering credits", "Farm-grown timber and trees", "Biogas slurry fertilizer offsets", "Organic paddy cultivation methane reductions"],
    answer: 1, explanation: "The National Agroforestry Carbon Credit Portal allows farmers to measure, verify, and trade carbon credits generated from farm-grown timber and trees."
  },
  {
    id: "REC-Q-MAY-084", articleId: "REC-MAY-084", category: "Defence & Aerospace",
    question: "The DRDO successfully completed a critical flight test of its indigenous Hypersonic Technology Demonstrator Vehicle (HSTDV) achieving Mach 6 speeds powered by a:",
    options: ["Ramjet engine", "Scramjet engine", "Turbojet booster", "Pulse detonation engine"],
    answer: 1, explanation: "The HSTDV achieved Mach 6 speeds powered by an indigenous scramjet engine from Wheeler Island off the Odisha coast."
  },
  {
    id: "REC-Q-MAY-085", articleId: "REC-MAY-085", category: "Government Schemes",
    question: "The Ministry of Tribal Affairs launched a dedicated digital library platform connecting all Eklavya Model Residential Schools (EMRS) nationwide to offer:",
    options: ["Vocational carpentry instruction videos", "Multilingual curriculum access, virtual science labs, and competitive coaching", "Traditional tribal music audio samples", "Handloom weaving pattern blueprints"],
    answer: 1, explanation: "The EMRS Digital Library offers multilingual curriculum access, virtual science labs, and competitive exam coaching modules."
  },
  {
    id: "REC-Q-MAY-086", articleId: "REC-MAY-086", category: "Economy & Banking",
    question: "The Securities and Exchange Board of India issued regulatory guidelines requiring all institutional stockbrokers operating algorithmic trading desks to integrate:",
    options: ["Mandatory multi-factor biometric logins", "Automated real-time kill switches and anomalous order flash filters", "Decentralized blockchain ledger transaction stamps", "Cross-broker shared liquidity pools"],
    answer: 1, explanation: "SEBI required institutional stockbrokers operating algorithmic trading desks to integrate automated real-time kill switches and anomalous order flash filters."
  },
  {
    id: "REC-Q-MAY-087", articleId: "REC-MAY-087", category: "Science & Technology",
    question: "Scientists at the Indian Institute of Science (IISc) Bengaluru developed an ultra-sensitive, low-cost flexible pressure sensor patch utilizing:",
    options: ["Silicon nanowire matrices", "Carbon-nanotube composite films", "Piezoelectric quartz filaments", "Graphene oxide aerogel sheets"],
    answer: 1, explanation: "IISc Bengaluru developed flexible pressure sensors utilizing carbon-nanotube composite films, providing human-like artificial tactile perception."
  },
  {
    id: "REC-Q-MAY-088", articleId: "REC-MAY-088", category: "International Affairs",
    question: "India and the European Investment Bank signed a major institutional financing pact in New Delhi to fund:",
    options: ["Offshore floating wind energy farms", "Zero-emission electric bus fleets and modern metro rail networks", "High-speed bullet train corridors", "National highway optical fiber grids"],
    answer: 1, explanation: "The EIB financing pact funds zero-emission electric bus fleets and modern metro rail networks across emerging urban tier-2 centers."
  },
  {
    id: "REC-Q-MAY-089", articleId: "REC-MAY-089", category: "Environment & Wildlife",
    question: "Wildlife researchers formally described a new species of day-gecko, named *Cnemaspis smitae*, discovered inhabiting high-elevation rocky cave shelters in:",
    options: ["The Western Ghats of Kerala", "The Eastern Ghats of Odisha", "The Satpura Range of Madhya Pradesh", "The Aravalli Hills of Rajasthan"],
    answer: 1, explanation: "Cnemaspis smitae is a new day-gecko species discovered inhabiting high-elevation rocky cave shelters in the Eastern Ghats of Odisha."
  },
  {
    id: "REC-Q-MAY-090", articleId: "REC-MAY-090", category: "National Affairs",
    question: "The Ministry of Culture launched the 'National Digital Archives of Folk Music' to record, catalog, and preserve:",
    options: ["Classical Carnatic instrumental scores", "Dying tribal folk tunes, ritual ballads, and indigenous instruments", "British-era colonial military marching anthems", "Sufi devotional poetry collections"],
    answer: 1, explanation: "The National Digital Archives of Folk Music preserves dying tribal folk tunes, ritual ballads, and indigenous instruments from rural districts."
  },
  {
    id: "REC-Q-MAY-091", articleId: "REC-MAY-091", category: "Science & Technology",
    question: "Scientists at the CSIR-Central Electrochemical Research Institute (CECRI) in Karaikudi successfully fabricated prototype battery cells using:",
    options: ["Lithium-sulfur chemistry", "Sodium-ion chemistry", "Aluminum-air matrices", "Zinc-bromine flow solutions"],
    answer: 1, explanation: "CSIR-CECRI successfully fabricated prototype sodium-ion battery cells using earth-abundant raw materials, eliminating reliance on imported lithium."
  },
  {
    id: "REC-Q-MAY-092", articleId: "REC-MAY-092", category: "Economy & Infrastructure",
    question: "An advanced multi-modal cargo gateway integrating coastal shipping berths with high-speed freight rail links was commissioned at:",
    options: ["Paradip Port, Odisha", "Visakhapatnam Port, Andhra Pradesh", "Kamarajar Port, Ennore", "Mormugao Port, Goa"],
    answer: 1, explanation: "An automated multi-modal cargo gateway was commissioned at Visakhapatnam Port to boost transit efficiency across eastern industrial corridors."
  },
  {
    id: "REC-Q-MAY-093", articleId: "REC-MAY-093", category: "International Affairs",
    question: "India was successfully elected to the Executive Board of the United Nations Educational, Scientific and Cultural Organization during plenary voting sessions in:",
    options: ["New York", "Geneva", "Paris", "Rome"],
    answer: 2, explanation: "India was elected to the Executive Board of UNESCO during plenary voting sessions at UNESCO Headquarters in Paris."
  },
  {
    id: "REC-Q-MAY-094", articleId: "REC-MAY-094", category: "Government Schemes",
    question: "The Ministry of Health operationalized the 'National Tele-Ophthalmology Network' connecting rural health wellness centers with eye hospitals using:",
    options: ["AI-assisted digital fundus cameras", "Automated laser refraction scanners", "Remote slit-lamp microscope feeds", "Mobile optometric diagnostic vans"],
    answer: 0, explanation: "The National Tele-Ophthalmology Network connects rural health clinics with premier eye hospitals via AI-assisted digital fundus cameras."
  },
  {
    id: "REC-Q-MAY-095", articleId: "REC-MAY-095", category: "Defence & Aerospace",
    question: "The Indian Navy and DRDO successfully completed user-acceptance flight trials of the indigenous Naval Anti-Ship Missile (Short Range) fired from a:",
    options: ["Submarine torpedo tube hatch", "Sea King helicopter platform", "P-8I long-range maritime patrol aircraft", "Kalvari-class combat submarine"],
    answer: 1, explanation: "The Naval Anti-Ship Missile (Short Range) was flight-tested from a Sea King helicopter platform off the western seaboard."
  },
  {
    id: "REC-Q-MAY-096", articleId: "REC-MAY-096", category: "Economy & Trade",
    question: "Trade delegations from India and the Eurasian Economic Union convened in which city to resume formal negotiations for a Free Trade Agreement?",
    options: ["St. Petersburg", "Moscow", "Astana", "Minsk"],
    answer: 1, explanation: "Delegations from India and the EAEU convened in Moscow to resume formal negotiations for a comprehensive Free Trade Agreement."
  },
  {
    id: "REC-Q-MAY-097", articleId: "REC-MAY-097", category: "Science & Space",
    question: "ISRO successfully completed rigorous ground simulation and sensor qualification tests for its indigenous Space Docking Experiment (SpDEx) hardware to enable:",
    options: ["Mars sample return capsule retrieval", "Assembling modular space station units in orbit", "Lunar south pole crater resource mapping", "Geostationary satellite de-orbiting maneuvers"],
    answer: 1, explanation: "SpDEx is a critical technology required for autonomous rendezvous and physical docking to assemble modular space station units in orbit."
  },
  {
    id: "REC-Q-MAY-098", articleId: "REC-MAY-098", category: "Environment & Energy",
    question: "NTPC Limited successfully commissioned India's first commercial-scale municipal solid waste-to-energy gasification power plant in which city?",
    options: ["Lucknow, UP", "Kanpur, UP", "Ghaziabad, UP", "Varanasi, UP"],
    answer: 1, explanation: "NTPC commissioned India's first commercial-scale municipal solid waste-to-energy gasification power plant in Kanpur, Uttar Pradesh."
  },
  {
    id: "REC-Q-MAY-099", articleId: "REC-MAY-099", category: "National Security",
    question: "The Ministry of Home Affairs deployed the Automated National Prison Management Ledger to interconnect:",
    options: ["Inmate biometric parole compliance pins with local police stations", "Jail telemetry, parole tracking, and court production schedules into a unified digital ecosystem", "Under-trial prisoner bail bond cryptocurrency ledgers", "Maximum security cell video feeds with central intelligence servers"],
    answer: 1, explanation: "The ledger interconnects jail telemetry, parole tracking, and court production schedules into a unified digital ecosystem to improve prison transparency."
  },
  {
    id: "REC-Q-MAY-100", articleId: "REC-MAY-100", category: "Economy & Agriculture",
    question: "NABARD approved the sanction of a ₹15,000 crore specialized fund dedicated to financing:",
    options: ["Solar-powered cold-storage hubs, pack-houses, and refrigerated transport vehicles", "Organic vermicomposting community units", "Rural drone-based liquid fertilizer spraying fleets", "Protected polyhouse horticulture greenhouses"],
    answer: 0, explanation: "The ₹15,000 crore Smart Cold-Chain Logistics Fund finances solar-powered cold-storage hubs, pack-houses, and refrigerated transport vehicles."
  }
];

// 👉 PUSH DATA INTO GLOBAL ARRAYS
if (typeof hiddenRecallArticles !== 'undefined') {
  hiddenRecallArticles.push(...mayRecallArticlesBatch5);
}
if (typeof recallQuestionPool !== 'undefined') {
  recallQuestionPool.push(...mayRecallQuestionsBatch5);
}

/* ==========================================================================
   END OF MAY BATCH 5 (MAY 100% COMPLETE)
   ========================================================================== */

/* ==========================================================================
   APRIL 2026 - BATCH 1 (ITEMS 001 TO 020)
   ========================================================================== */

const aprRecallArticlesBatch1 = [
  {
    id: "REC-APR-001", date: "2026-04-01", month: "Apr 2026", category: "State Affairs",
    title: "Odisha Celebrates 91st Foundation Day (Utkal Divas)",
    summary: "Odisha celebrated Utkal Divas on 1 April 2026, marking its historic statehood formation in 1936.",
    whatHappened: "The state of Odisha observed its 91st Foundation Day, popularly known as Utkal Divas, on 1 April 2026. Cultural programs, literary events, and statewide tributes commemorated the formation of Odisha as a separate province on linguistic lines in 1936.",
    importantPoints: [
      "Observed on 1 April annually.",
      "Marks the formation of Odisha as a separate state in 1936.",
      "Celebrates Odia heritage, classical arts, and literature."
    ],
    examFacts: ["Date: 1 April", "State: Odisha", "Formation Year: 1936"],
    quickRemember: "Utkal Divas on 1 April marks Odisha's statehood formation in 1936.",
    audioText: "Odisha celebrated Utkal Divas on April 1, marking its historic statehood formation in 1936.",
    source: "Government of Odisha", importantFor: ["SSC CGL", "State PCS"]
  },
  {
    id: "REC-APR-002", date: "2026-04-05", month: "Apr 2026", category: "National Days",
    title: "India Observes 63rd National Maritime Day",
    summary: "India marked National Maritime Day on 5 April 2026, celebrating the historic maiden voyage of SS Loyalty.",
    whatHappened: "India observed National Maritime Day on 5 April 2026. The date commemorates the maiden voyage of the first Indian-owned steamship, 'SS Loyalty' of The Scindia Steam Navigation Company Ltd, which sailed to the United Kingdom in 1919.",
    importantPoints: [
      "Observed annually on 5 April.",
      "Commemorates the voyage of SS Loyalty in 1919.",
      "Highlights India's rich maritime trade history and contemporary shipping."
    ],
    examFacts: ["Date: 5 April", "Historic Ship: SS Loyalty (1919)"],
    quickRemember: "National Maritime Day is observed on 5 April, honoring the 1919 voyage of SS Loyalty.",
    audioText: "India observed National Maritime Day on April 5, commemorating the maiden voyage of SS Loyalty.",
    source: "Ministry of Ports, Shipping and Waterways", importantFor: ["SSC CGL", "CDS"]
  },
  {
    id: "REC-APR-003", date: "2026-04-07", month: "Apr 2026", category: "Global Health",
    title: "World Health Day 2026 Focused on Universal Well-being",
    summary: "World Health Day was observed globally on 7 April under the aegis of the World Health Organization.",
    whatHappened: "World Health Organization (WHO) led the global observance of World Health Day on 7 April 2026. Campaigns focused on overcoming health disparities, expanding primary healthcare infrastructure, and addressing emerging global health vulnerabilities.",
    importantPoints: [
      "Observed annually on 7 April.",
      "Led by the World Health Organization (WHO).",
      "Promotes health equity and universal health coverage."
    ],
    examFacts: ["Date: 7 April", "Lead Organization: WHO"],
    quickRemember: "World Health Day is observed globally on 7 April.",
    audioText: "World Health Day was observed globally on April 7 under the aegis of the World Health Organization.",
    source: "WHO", importantFor: ["SSC CGL", "UPSC", "SSC CHSL"]
  },
  {
    id: "REC-APR-004", date: "2026-04-10", month: "Apr 2026", category: "Global Health",
    title: "World Homoeopathy Day 2026",
    summary: "World Homoeopathy Day was observed on 10 April to celebrate the medical contributions of Dr. Samuel Hahnemann.",
    whatHappened: "World Homoeopathy Day was marked on 10 April 2026 to commemorate the birth anniversary of Dr. Christian Friedrich Samuel Hahnemann, the founder of homoeopathy, promoting research-backed alternative medicine.",
    importantPoints: [
      "Observed annually on 10 April.",
      "Honors Dr. Samuel Hahnemann, founder of homoeopathy.",
      "Focuses on clinical integration and scientific validation in alternative medicine."
    ],
    examFacts: ["Date: 10 April", "Honors: Dr. Samuel Hahnemann"],
    quickRemember: "World Homoeopathy Day is observed on 10 April.",
    audioText: "World Homoeopathy Day was marked on April 10 to celebrate the contributions of Dr. Samuel Hahnemann.",
    source: "Ministry of Ayush", importantFor: ["SSC CGL", "State PCS"]
  },
  {
    id: "REC-APR-005", date: "2026-04-11", month: "Apr 2026", category: "National Health",
    title: "National Safe Motherhood Day 2026",
    summary: "India observed National Safe Motherhood Day on 11 April to advocate for quality maternal healthcare.",
    whatHappened: "National Safe Motherhood Day was observed across India on 11 April 2026 to raise awareness about institutional delivery, nutritional support for pregnant women, and reducing preventable maternal mortality rates.",
    importantPoints: [
      "Observed annually on 11 April.",
      "Advocates for safe pregnancy, institutional birth, and maternal health access.",
      "Initiative aligned with the White Ribbon Alliance India."
    ],
    examFacts: ["Date: 11 April", "Focus: Maternal Healthcare and Safety"],
    quickRemember: "National Safe Motherhood Day is observed on 11 April.",
    audioText: "India observed National Safe Motherhood Day on April 11 to advocate for quality maternal healthcare.",
    source: "MoHFW", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-APR-006", date: "2026-04-13", month: "Apr 2026", category: "History & Heritage",
    title: "Nation Pays Homage on Jallianwala Bagh Massacre Remembrance Day",
    summary: "India observed the solemn anniversary of the Jallianwala Bagh massacre on 13 April 2026.",
    whatHappened: "The nation observed solemn commemorations on 13 April 2026, marking the tragic anniversary of the Jallianwala Bagh massacre in Amritsar in 1919, where British troops under General Dyer opened fire on unarmed gathering citizens.",
    importantPoints: [
      "Observed on 13 April annually.",
      "Commemorates the victims of the 1919 Amritsar massacre.",
      "Serves as a core milestone in the Indian freedom struggle."
    ],
    examFacts: ["Date: 13 April", "Year: 1919", "Location: Amritsar, Punjab"],
    quickRemember: "Jallianwala Bagh Remembrance Day is observed on 13 April.",
    audioText: "The nation paid solemn homage on April 13, marking the anniversary of the Jallianwala Bagh massacre.",
    source: "Cultural Ministry", importantFor: ["SSC CGL", "UPSC", "CDS"]
  },
  {
    id: "REC-APR-007", date: "2026-04-14", month: "Apr 2026", category: "Social Justice",
    title: "Nation Celebrates Ambedkar Jayanti 2026",
    summary: "India celebrated the birth anniversary of Dr. B.R. Ambedkar on 14 April 2026.",
    whatHappened: "The nation observed Ambedkar Jayanti on 14 April 2026, honoring the birth anniversary of Dr. Bhimrao Ramji Ambedkar, the principal architect of the Indian Constitution, jurist, and champion of social equality.",
    importantPoints: [
      "Observed annually on 14 April.",
      "Honors Dr. B.R. Ambedkar's legacy and constitutional contributions.",
      "Promotes values of social justice, liberty, and fraternity."
    ],
    examFacts: ["Date: 14 April", "Personality: Dr. B.R. Ambedkar"],
    quickRemember: "Ambedkar Jayanti is celebrated nationwide on 14 April.",
    audioText: "India celebrated the birth anniversary of Dr. B.R. Ambedkar on April 14.",
    source: "Ministry of Social Justice", importantFor: ["SSC CGL", "UPSC", "State PCS"]
  },
  {
    id: "REC-APR-008", date: "2026-04-15", month: "Apr 2026", category: "State Affairs",
    title: "Himachal Day 2026 Celebrates Statehood Formation",
    summary: "Himachal Pradesh celebrated its Statehood Formation Day on 15 April 2026.",
    whatHappened: "Himachal Pradesh marked its 79th Himachal Day on 15 April 2026, commemorating the formation of the province as a centrally administered territory in 1948 before achieving full statehood later.",
    importantPoints: [
      "Observed annually on 15 April.",
      "Marks the formation of Himachal Pradesh.",
      "Celebrates the hill state's unique cultural identity and development."
    ],
    examFacts: ["Date: 15 April", "State: Himachal Pradesh"],
    quickRemember: "Himachal Day is celebrated on 15 April.",
    audioText: "Himachal Pradesh celebrated its Statehood Foundation Day on April 15.",
    source: "Government of Himachal Pradesh", importantFor: ["SSC CGL", "State PCS"]
  },
  {
    id: "REC-APR-009", date: "2026-04-17", month: "Apr 2026", category: "Global Health",
    title: "World Haemophilia Day 2026 Focused on Access for All",
    summary: "World Haemophilia Day was observed on 17 April to raise awareness regarding bleeding disorders.",
    whatHappened: "World Haemophilia Day was observed on 17 April 2026 to build global awareness about inherited bleeding disorders, advocating for inclusive treatment access, proper diagnosis, and better patient care infrastructure.",
    importantPoints: [
      "Observed annually on 17 April.",
      "Established by the World Federation of Haemophilia (1989).",
      "Focuses on early diagnosis and treatment equity for bleeding disorders."
    ],
    examFacts: ["Date: 17 April", "Focus: Haemophilia & Bleeding Disorders"],
    quickRemember: "World Haemophilia Day is observed on 17 April.",
    audioText: "World Haemophilia Day was observed on April 17 to raise awareness regarding hereditary bleeding disorders.",
    source: "World Federation of Haemophilia", importantFor: ["SSC CGL", "SSC CHSL"]
  },
  {
    id: "REC-APR-010", date: "2026-04-18", month: "Apr 2026", category: "Culture & Heritage",
    title: "World Heritage Day 2026 Highlights Monument Conservation",
    summary: "World Heritage Day was observed globally on 18 April to promote the preservation of human history.",
    whatHappened: "World Heritage Day (International Day for Monuments and Sites) was observed on 18 April 2026. Promoted by ICOMOS and approved by UNESCO, the day emphasized protecting cultural landmarks, monuments, and ecological heritage sites.",
    importantPoints: [
      "Observed annually on 18 April.",
      "Initiated by ICOMOS and endorsed by UNESCO.",
      "Highlights global cooperation in preserving historical monuments."
    ],
    examFacts: ["Date: 18 April", "Endorsing Body: UNESCO"],
    quickRemember: "World Heritage Day is observed on 18 April.",
    audioText: "World Heritage Day was observed globally on April 18 to promote the preservation of human history.",
    source: "UNESCO", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-APR-011", date: "2026-04-21", month: "Apr 2026", category: "Governance",
    title: "National Civil Services Day 2026 Honors Administrative Contributions",
    summary: "India celebrated National Civil Services Day on 21 April 2026 to recognize bureaucracy excellence.",
    whatHappened: "National Civil Services Day was observed across India on 21 April 2026, honoring the dedication of civil servants and administrative personnel working towards grassroots policy implementation and national development.",
    importantPoints: [
      "Observed annually on 21 April.",
      "Commemorates the first home minister Sardar Vallabhbhai Patel's address to probationers in 1947.",
      "Recognizes exemplary public administration and administrative innovation."
    ],
    examFacts: ["Date: 21 April", "Focus: Civil Service Excellence"],
    quickRemember: "National Civil Services Day is celebrated on 21 April.",
    audioText: "India celebrated National Civil Services Day on April 21 to recognize administrative contributions.",
    source: "DoPT", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-APR-012", date: "2026-04-22", month: "Apr 2026", category: "Environment",
    title: "World Earth Day 2026 Focuses on Climate Action",
    summary: "World Earth Day was observed globally on 22 April to champion environmental sustainability.",
    whatHappened: "World Earth Day was marked worldwide on 22 April 2026. Events mobilized citizen action, green technology transitions, and policy frameworks aimed at tackling carbon emissions and habitat destruction.",
    importantPoints: [
      "Observed annually on 22 April.",
      "Promotes global environmental protection and sustainability.",
      "Originates from the modern environmental movement starting in 1970."
    ],
    examFacts: ["Date: 22 April", "Focus: Environmental Protection"],
    quickRemember: "World Earth Day is marked globally on 22 April.",
    audioText: "World Earth Day was observed globally on April 22 to champion environmental sustainability.",
    source: "UNEP", importantFor: ["SSC CGL", "UPSC", "SSC CHSL"]
  },
  {
    id: "REC-APR-013", date: "2026-04-24", month: "Apr 2026", category: "Polity & Governance",
    title: "National Panchayati Raj Day 2026 Celebrates Grassroots Democracy",
    summary: "India observed National Panchayati Raj Day on 24 April 2026, marking local self-governance milestones.",
    whatHappened: "National Panchayati Raj Day was observed across India on 24 April 2026, commemorating the operationalization of the 73rd Constitutional Amendment Act in 1993, which institutionalized decentralized local self-governance.",
    importantPoints: [
      "Observed annually on 24 April.",
      "Marks the 73rd Constitutional Amendment Act.",
      "Celebrates decentralization of power to rural local bodies."
    ],
    examFacts: ["Date: 24 April", "Milestone: 73rd Amendment (1993)"],
    quickRemember: "National Panchayati Raj Day is celebrated on 24 April.",
    audioText: "India observed National Panchayati Raj Day on April 24, celebrating grassroots local democracy.",
    source: "Ministry of Panchayati Raj", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-APR-014", date: "2026-04-25", month: "Apr 2026", category: "Global Health",
    title: "World Malaria Day 2026 Campaign Targets Eradication",
    summary: "World Malaria Day was observed on 25 April to boost international momentum against malaria.",
    whatHappened: "World Malaria Day was observed globally on 25 April 2026, driving focus toward vector control, deployment of advanced antimalarial therapeutics, and community awareness to achieve zero-malaria targets.",
    importantPoints: [
      "Observed annually on 25 April.",
      "Focuses on malaria prevention, diagnosis, and treatment.",
      "Promotes global health cooperation against vector-borne diseases."
    ],
    examFacts: ["Date: 25 April", "Focus: Malaria Elimination"],
    quickRemember: "World Malaria Day is observed on 25 April.",
    audioText: "World Malaria Day was observed on April 25 to boost international momentum against malaria.",
    source: "WHO", importantFor: ["SSC CGL", "SSC CHSL"]
  },
  {
    id: "REC-APR-015", date: "2026-04-26", month: "Apr 2026", category: "Economy & Legal",
    title: "World Intellectual Property Day 2026",
    summary: "World Intellectual Property Day was marked on 26 April under WIPO to celebrate innovation and patents.",
    whatHappened: "World Intellectual Property Day was observed on 26 April 2026 under the guidance of the World Intellectual Property Organization (WIPO), highlighting the role of patents, copyrights, and trademarks in driving modern economic innovation.",
    importantPoints: [
      "Observed annually on 26 April.",
      "Promoted by the World Intellectual Property Organization (WIPO).",
      "Celebrates creativity, patents, and intellectual property rights."
    ],
    examFacts: ["Date: 26 April", "Organization: WIPO"],
    quickRemember: "World Intellectual Property Day is marked on 26 April.",
    audioText: "World Intellectual Property Day was marked on April 26 under WIPO to celebrate innovation and patents.",
    source: "WIPO", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-APR-016", date: "2026-04-30", month: "Apr 2026", category: "National Health",
    title: "Ayushman Bharat Diwas 2026 Promotes Universal Healthcare",
    summary: "Ayushman Bharat Diwas was observed on 30 April to highlight public healthcare access in India.",
    whatHappened: "Ayushman Bharat Diwas was observed across India on 30 April 2026 to evaluate the rollout of the Pradhan Mantri Jan Arogya Yojana (PM-JAY), highlighting universal health coverage and affordable secondary/tertiary care access.",
    importantPoints: [
      "Observed annually on 30 April.",
      "Celebrates the achievements of the Ayushman Bharat health scheme.",
      "Aims to ensure financial risk protection for vulnerable households."
    ],
    examFacts: ["Date: 30 April", "Scheme: Ayushman Bharat PM-JAY"],
    quickRemember: "Ayushman Bharat Diwas is observed on 30 April.",
    audioText: "Ayushman Bharat Diwas was observed on April 30 to highlight public healthcare access in India.",
    source: "MoHFW", importantFor: ["SSC CGL", "Bank PO", "UPSC"]
  },
  {
    id: "REC-APR-017", date: "2026-04-23", month: "Apr 2026", category: "Culture & Education",
    title: "World Book and Copyright Day 2026 Celebrates Reading",
    summary: "World Book and Copyright Day was observed on 23 April to promote publishing, reading, and literacy.",
    whatHappened: "World Book and Copyright Day was observed globally on 23 April 2026. Sponsored by UNESCO, the day highlights the power of books to bridge generations, encourage literacy, and protect intellectual creator rights.",
    importantPoints: [
      "Observed annually on 23 April.",
      "Sponsored by UNESCO.",
      "Promotes reading habits, publishing, and copyright awareness."
    ],
    examFacts: ["Date: 23 April", "Sponsor: UNESCO"],
    quickRemember: "World Book and Copyright Day is celebrated on 23 April.",
    audioText: "World Book and Copyright Day was observed on April 23 to promote publishing, reading, and literacy.",
    source: "UNESCO", importantFor: ["SSC CGL", "SSC CHSL"]
  },
  {
    id: "REC-APR-018", date: "2026-04-02", month: "Apr 2026", category: "Global Health",
    title: "World Autism Awareness Day 2026",
    summary: "World Autism Awareness Day was observed on 2 April to advocate for neurodiversity and inclusion.",
    whatHappened: "World Autism Awareness Day was observed globally on 2 April 2026, raising public understanding about autism spectrum disorders (ASD), neurodiversity, and early clinical support structures.",
    importantPoints: [
      "Observed annually on 2 April.",
      "Advocates for the inclusion and acceptance of autistic individuals.",
      "Promotes early diagnosis and community support frameworks."
    ],
    examFacts: ["Date: 2 April", "Focus: Autism Awareness and Inclusion"],
    quickRemember: "World Autism Awareness Day is observed on 2 April.",
    audioText: "World Autism Awareness Day was observed on April 2 to advocate for neurodiversity and inclusion.",
    source: "WHO / UN", importantFor: ["SSC CGL", "State PCS"]
  },
  {
    id: "REC-APR-019", date: "2026-04-04", month: "Apr 2026", category: "Humanitarian",
    title: "International Day for Mine Awareness and Assistance in Mine Action",
    summary: "Marked on 4 April to address the persistent threat posed by explosive landmines.",
    whatHappened: "The International Day for Mine Awareness and Assistance in Mine Action was observed on 4 April 2026 to raise awareness about landmines, unexploded ordnance, and support global clearance operations.",
    importantPoints: [
      "Observed annually on 4 April.",
      "Highlights the dangers of landmines to civilian safety.",
      "Supports international mine clearance and victim assistance programs."
    ],
    examFacts: ["Date: 4 April", "Focus: Landmine Clearance"],
    quickRemember: "International Mine Awareness Day is observed on 4 April.",
    audioText: "International Mine Awareness Day was marked on April 4 to address the threat posed by landmines.",
    source: "United Nations", importantFor: ["UPSC", "CDS"]
  },
  {
    id: "REC-APR-020", date: "2026-04-28", month: "Apr 2026", category: "Global Health & Labour",
    title: "World Day for Safety and Health at Work 2026",
    summary: "Observed on 28 April to promote safe, secure, and healthy working environments globally.",
    whatHappened: "The World Day for Safety and Health at Work was observed globally on 28 April 2026. The International Labour Organization (ILO) campaign focused on eliminating workplace hazards, occupational injuries, and promoting robust safety standards.",
    importantPoints: [
      "Observed annually on 28 April.",
      "Promoted by the International Labour Organization (ILO).",
      "Focuses on accident prevention and healthy workplace conditions."
    ],
    examFacts: ["Date: 28 April", "Lead Organization: ILO"],
    quickRemember: "World Day for Safety and Health at Work is observed on 28 April.",
    audioText: "The World Day for Safety and Health at Work was observed on April 28 to promote safe working environments.",
    source: "ILO", importantFor: ["SSC CGL", "UPSC"]
  }
];

const aprRecallQuestionsBatch1 = [
  {
    id: "REC-Q-APR-001", articleId: "REC-APR-001", category: "State Affairs",
    question: "The state of Odisha celebrated its 91st Foundation Day, known as Utkal Divas, on which date?",
    options: ["1 April", "15 April", "1 May", "1 June"],
    answer: 0, explanation: "Utkal Divas is observed on 1 April to mark the formation of Odisha as a separate state in 1936."
  },
  {
    id: "REC-Q-APR-002", articleId: "REC-APR-002", category: "National Days",
    question: "National Maritime Day is observed in India on 5 April to commemorate the maiden voyage of which historic ship in 1919?",
    options: ["SS Bengal", "SS Loyalty", "SS Enterprise", "SS Viceroy"],
    answer: 1, explanation: "National Maritime Day commemorates the maiden voyage of SS Loyalty of The Scindia Steam Navigation Company Ltd to the UK in 1919."
  },
  {
    id: "REC-Q-APR-003", articleId: "REC-APR-003", category: "Global Health",
    question: "World Health Day is observed globally every year on which date under the leadership of the WHO?",
    options: ["7 April", "17 April", "27 April", "30 April"],
    answer: 0, explanation: "World Health Day is observed globally on 7 April under the aegis of the World Health Organization."
  },
  {
    id: "REC-Q-APR-004", articleId: "REC-APR-004", category: "Global Health",
    question: "World Homoeopathy Day, celebrated on 10 April, honors the birth anniversary of the founder of homoeopathy:",
    options: ["Dr. Edward Bach", "Dr. Christian Friedrich Samuel Hahnemann", "Dr. William Boericke", "Dr. Constantin Hering"],
    answer: 1, explanation: "World Homoeopathy Day marks the birth anniversary of Dr. Christian Friedrich Samuel Hahnemann."
  },
  {
    id: "REC-Q-APR-005", articleId: "REC-APR-005", category: "National Health",
    question: "National Safe Motherhood Day is observed across India on which date to advocate for quality maternal healthcare?",
    options: ["11 April", "21 April", "25 April", "30 April"],
    answer: 0, explanation: "National Safe Motherhood Day is observed on 11 April to raise awareness about institutional delivery and maternal health."
  },
  {
    id: "REC-Q-APR-006", articleId: "REC-APR-006", category: "History & Heritage",
    question: "The Jallianwala Bagh Massacre Remembrance Day marks the tragic event that occurred in Amritsar on 13 April of which year?",
    options: ["1911", "1915", "1919", "1921"],
    answer: 2, explanation: "The Jallianwala Bagh Massacre took place on 13 April 1919 when British troops under General Dyer opened fire on unarmed citizens."
  },
  {
    id: "REC-Q-APR-007", articleId: "REC-APR-007", category: "Social Justice",
    question: "Ambedkar Jayanti is observed nationwide on 14 April to honor the principal architect of the Indian Constitution:",
    options: ["Mahatma Gandhi", "Dr. B.R. Ambedkar", "Pandit Jawaharlal Nehru", "Sardar Vallabhbhai Patel"],
    answer: 1, explanation: "Ambedkar Jayanti honors the birth anniversary of Dr. B.R. Ambedkar, the chief architect of the Indian Constitution."
  },
  {
    id: "REC-Q-APR-008", articleId: "REC-APR-008", category: "State Affairs",
    question: "Himachal Day is celebrated annually on 15 April to commemorate the formation of:",
    options: ["Himachal Pradesh", "Haryana", "Uttarakhand", "Jharkhand"],
    answer: 0, explanation: "Himachal Day marks the formation of Himachal Pradesh as a centrally administered province in 1948."
  },
  {
    id: "REC-Q-APR-009", articleId: "REC-APR-009", category: "Global Health",
    question: "World Haemophilia Day, established in 1989 by the World Federation of Haemophilia, is observed on:",
    options: ["7 April", "17 April", "27 April", "30 April"],
    answer: 1, explanation: "World Haemophilia Day is observed on 17 April to build global awareness about inherited bleeding disorders."
  },
  {
    id: "REC-Q-APR-010", articleId: "REC-APR-010", category: "Culture & Heritage",
    question: "World Heritage Day, promoted by ICOMOS and approved by UNESCO, is observed annually on:",
    options: ["8 April", "18 April", "28 April", "30 April"],
    answer: 1, explanation: "World Heritage Day is observed on 18 April to promote the preservation of human cultural monuments and sites."
  },
  {
    id: "REC-Q-APR-011", articleId: "REC-APR-011", category: "Governance",
    question: "National Civil Services Day is observed across India on 21 April to recognize the contributions of:",
    options: ["Defense personnel", "Civil servants and administrative personnel", "Judicial magistrates", "Public sector banking executives"],
    answer: 1, explanation: "National Civil Services Day on 21 April honors the contributions of civil servants in India's public administration."
  },
  {
    id: "REC-Q-APR-012", articleId: "REC-APR-012", category: "Environment",
    question: "World Earth Day, which champions environmental protection and sustainability starting from 1970, is observed on:",
    options: ["22 April", "22 May", "22 June", "22 July"],
    answer: 0, explanation: "World Earth Day is observed globally on 22 April to focus on environmental sustainability."
  },
  {
    id: "REC-Q-APR-013", articleId: "REC-APR-013", category: "Polity & Governance",
    question: "National Panchayati Raj Day is observed on 24 April to mark the operationalization of which landmark Constitutional Amendment?",
    options: ["42nd Amendment", "44th Amendment", "73rd Amendment", "86th Amendment"],
    answer: 2, explanation: "National Panchayati Raj Day marks the 73rd Constitutional Amendment Act of 1993, institutionalizing local self-governance."
  },
  {
    id: "REC-Q-APR-014", articleId: "REC-APR-014", category: "Global Health",
    question: "World Malaria Day is observed annually on which date to drive international momentum toward disease eradication?",
    options: ["25 April", "25 May", "25 June", "25 July"],
    answer: 0, explanation: "World Malaria Day is observed on 25 April to focus on malaria prevention, diagnosis, and treatment."
  },
  {
    id: "REC-Q-APR-015", articleId: "REC-APR-015", category: "Economy & Legal",
    question: "World Intellectual Property Day, promoted by WIPO to celebrate patents and copyrights, is marked on:",
    options: ["16 April", "26 April", "30 April", "1 May"],
    answer: 1, explanation: "World Intellectual Property Day is observed on 26 April under the World Intellectual Property Organization (WIPO)."
  },
  {
    id: "REC-Q-APR-016", articleId: "REC-APR-016", category: "National Health",
    question: "Ayushman Bharat Diwas is observed across India on 30 April to highlight the impact of which major healthcare scheme?",
    options: ["Pradhan Mantri Jan Arogya Yojana (PM-JAY)", "National Health Mission", "Mission Indradhanush", "Pradhan Mantri Suraksha Bima Yojana"],
    answer: 0, explanation: "Ayushman Bharat Diwas on 30 April evaluates the rollout of the PM-JAY scheme for universal healthcare coverage."
  },
  {
    id: "REC-Q-APR-017", articleId: "REC-APR-017", category: "Culture & Education",
    question: "World Book and Copyright Day, sponsored by UNESCO to promote reading and literacy, is observed on:",
    options: ["3 April", "13 April", "23 April", "30 April"],
    answer: 2, explanation: "World Book and Copyright Day is observed on 23 April to promote reading habits, publishing, and copyright awareness."
  },
  {
    id: "REC-Q-APR-018", articleId: "REC-APR-018", category: "Global Health",
    question: "World Autism Awareness Day is observed annually on which date to advocate for neurodiversity and inclusion?",
    options: ["2 April", "12 April", "22 April", "29 April"],
    answer: 0, explanation: "World Autism Awareness Day is observed on 2 April to raise understanding about autism spectrum disorders."
  },
  {
    id: "REC-Q-APR-019", articleId: "REC-APR-019", category: "Humanitarian",
    question: "The International Day for Mine Awareness and Assistance in Mine Action is observed every year on:",
    options: ["4 April", "14 April", "24 April", "30 April"],
    answer: 0, explanation: "International Mine Awareness Day is marked on 4 April to address the persistent threat of landmines."
  },
  {
    id: "REC-Q-APR-020", articleId: "REC-APR-020", category: "Global Health & Labour",
    question: "The World Day for Safety and Health at Work is promoted by the International Labour Organization (ILO) on which date?",
    options: ["8 April", "18 April", "28 April", "30 April"],
    answer: 2, explanation: "The World Day for Safety and Health at Work is observed on 28 April to promote healthy and safe working conditions."
  }
];

// 👉 PUSH DATA INTO GLOBAL ARRAYS
if (typeof hiddenRecallArticles !== 'undefined') {
  hiddenRecallArticles.push(...aprRecallArticlesBatch1);
}
if (typeof recallQuestionPool !== 'undefined') {
  recallQuestionPool.push(...aprRecallQuestionsBatch1);
}

/* ==========================================================================
   END OF APRIL BATCH 1
   ========================================================================== */

/* ==========================================================================
   APRIL 2026 - BATCH 2 (ITEMS 021 TO 040)
   ========================================================================== */

const aprRecallArticlesBatch2 = [
  {
    id: "REC-APR-021", date: "2026-04-01", month: "Apr 2026", category: "Economy & Trade",
    title: "Government Exempts Critical Petrochemicals from Import Duty",
    summary: "The Ministry of Finance removed import tariffs on critical petrochemical precursors to support domestic manufacturing.",
    whatHappened: "On 1 April 2026, the Government of India implemented a policy decision to bring several critical petrochemical components under zero import duty. The measure aims to insulate domestic pharmaceutical and solvent supply chains from global price volatility.",
    importantPoints: [
      "Petrochemical raw materials brought under zero import duty.",
      "Aims to relieve cost burdens on the domestic pharmaceutical sector.",
      "Designed to counter international supply chain disruptions."
    ],
    examFacts: ["Policy Action: Zero Import Duty on Petrochemicals", "Sector: Pharma & Manufacturing"],
    quickRemember: "Critical petrochemicals were exempted from import duty on April 1, 2026, to stabilize pharma supply chains.",
    audioText: "The government removed import duties on critical petrochemical products to support the pharmaceutical sector.",
    source: "Ministry of Finance", importantFor: ["SSC CGL", "UPSC", "Bank PO"]
  },
  {
    id: "REC-APR-022", date: "2026-04-03", month: "Apr 2026", category: "Science & Technology",
    title: "NSO Releases 'Energy Statistics India 2026' Report",
    summary: "The National Statistical Office published its comprehensive annual energy inventory highlighting renewable potential.",
    whatHappened: "The National Statistical Office (NSO) released the comprehensive 'Energy Statistics India 2026' report. The document tracks the nation's energy matrix, noting that total renewable energy potential has scaled remarkable milestones.",
    importantPoints: [
      "Published by the National Statistical Office (NSO).",
      "Details comprehensive data on fossil and renewable energy footprints.",
      "Serves as a vital planning baseline for India's green energy transition."
    ],
    examFacts: ["Report: Energy Statistics India 2026", "Publisher: NSO"],
    quickRemember: "The NSO published the 'Energy Statistics India 2026' report.",
    audioText: "The National Statistical Office released the comprehensive Energy Statistics India 2026 report.",
    source: "MoSPI", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-APR-023", date: "2026-04-06", month: "Apr 2026", category: "Defence & Aerospace",
    title: "Indian Defense Exports Surge to Record Highs",
    summary: "Official reviews indicated that India's annual defense exports surged past previous financial milestones.",
    whatHappened: "Government updates published in early April 2026 highlighted that India's indigenous defense manufacturing push has yielded stellar results, with total defence exports soaring past ₹29,000 crore on the back of aggressive platform and munitions shipments.",
    importantPoints: [
      "Annual defense exports touched milestone figures.",
      "Driven by indigenous manufacturing and private sector participation.",
      "Reinforces the 'Aatmanirbhar Bharat' defense vision."
    ],
    examFacts: ["Sector: Indigenous Defense Manufacturing", "Milestone: Record Export Surge"],
    quickRemember: "India's defense exports scaled record highs, crossing major financial milestones.",
    audioText: "Official reviews showed that India's annual defense exports surged past previous financial milestones.",
    source: "Ministry of Defence", importantFor: ["CDS", "SSC CGL", "UPSC"]
  },
  {
    id: "REC-APR-024", date: "2026-04-08", month: "Apr 2026", category: "Economy & Banking",
    title: "RBI Monetary Policy Maintains Growth-Inflation Balance",
    summary: "The Reserve Bank of India announced its early-FY27 monetary policy stance, keeping key lending rates steady.",
    whatHappened: "The Monetary Policy Committee (MPC) of the Reserve Bank of India kept the repo rate unchanged, prioritizing macroeconomic stability and domestic growth resilience while closely monitoring volatile food inflation vectors.",
    importantPoints: [
      "MPC maintained status quo on policy repo rates.",
      "Focused on anchoring inflation within the 2%–6% target band.",
      "Acknowledged robust domestic credit growth and capital formation."
    ],
    examFacts: ["Regulator: RBI MPC", "Stance: Growth-Inflation Equilibrium"],
    quickRemember: "The RBI maintained its repo rate stance to balance growth and inflation.",
    audioText: "The Reserve Bank of India announced its monetary policy stance, keeping key lending rates steady.",
    source: "RBI", importantFor: ["Bank PO", "SSC CGL"]
  },
  {
    id: "REC-APR-025", date: "2026-04-10", month: "Apr 2026", category: "Environment & Agriculture",
    title: "ICAR Launches Climate-Resilient Wheat Cultivars",
    summary: "The Indian Council of Agricultural Research introduced new heat-tolerant wheat varieties for northern plains.",
    whatHappened: "To combat rising terminal heat anomalies during grain filling stages, the Indian Council of Agricultural Research (ICAR) rolled out specialized climate-resilient wheat strains across Punjab, Haryana, and western Uttar Pradesh.",
    importantPoints: [
      "Heat-tolerant wheat cultivars released by ICAR.",
      "Designed to resist sudden temperature spikes during crop maturation.",
      "Protects farmers against climate variability and yield losses."
    ],
    examFacts: ["Institution: ICAR", "Crop: Climate-Resilient Wheat Varieties"],
    quickRemember: "ICAR launched heat-tolerant wheat cultivars to combat terminal weather anomalies.",
    audioText: "The Indian Council of Agricultural Research introduced new heat-tolerant wheat varieties.",
    source: "ICAR", importantFor: ["SSC CGL", "State PCS"]
  },
  {
    id: "REC-APR-026", date: "2026-04-14", month: "Apr 2026", category: "Science & Technology",
    title: "ISRO Completes Navigation Payload Integration for Lunar Mission",
    summary: "ISRO finished environmental testing of advanced optical sensors slated for upcoming planetary exploration.",
    whatHappened: "ISRO's laboratory complexes successfully completed thermal vacuum and vibration stress tests on advanced optical navigation sensors, validating hardware readiness for interplanetary deep-space tracking probes.",
    importantPoints: [
      "Thermal vacuum and vibration stress tests completed on optical sensors.",
      "Conducted at ISRO testing facilities.",
      "Validates hardware survivability for deep-space missions."
    ],
    examFacts: ["Technology: Optical Navigation Sensors", "Agency: ISRO"],
    quickRemember: "ISRO completed environmental stress testing on advanced optical navigation sensors.",
    audioText: "ISRO finished environmental testing of advanced optical sensors slated for space exploration.",
    source: "ISRO", importantFor: ["SSC CGL", "UPSC", "CDS"]
  },
  {
    id: "REC-APR-027", date: "2026-04-16", month: "Apr 2026", category: "Government Schemes",
    title: "Ministry of Rural Development Expands Digital Muster Roll System",
    summary: "The government mandated 100% digital attendance tracking via the National Mobile Monitoring System for worksites.",
    whatHappened: "The Ministry of Rural Development extended its strict compliance order requiring all rural worksites to capture worker attendance electronically twice a day through the National Mobile Monitoring System (NMMS), enhancing transparency in wage payments.",
    importantPoints: [
      "Mandatory 100% digital attendance tracking via NMMS app.",
      "Aims to eliminate ghost workers and plug leakages in rural public works.",
      "Managed by the Ministry of Rural Development."
    ],
    examFacts: ["System: National Mobile Monitoring System (NMMS)", "Ministry: Rural Development"],
    quickRemember: "The Rural Development Ministry expanded digital muster roll tracking to prevent wage leakage.",
    audioText: "The Rural Development Ministry expanded the digital muster roll system for worksites.",
    source: "Ministry of Rural Development", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-APR-028", date: "2026-04-19", month: "Apr 2026", category: "Infrastructure & Transport",
    title: "National Highways Authority Operates First AI-Based Toll Plazas",
    summary: "NHAI deployed computer-vision automated barriers across select national highway corridors.",
    whatHappened: "The National Highways Authority of India (NHAI) operationalized its first batch of barrier-free, multi-lane free-flow tolling plazas utilizing high-definition ANPR (Automatic Number Plate Recognition) cameras to deduct tolls dynamically without stopping vehicles.",
    importantPoints: [
      "Barrier-free, multi-lane free-flow tolling plazas deployed by NHAI.",
      "Uses Automatic Number Plate Recognition (ANPR) and FASTag RFID integration.",
      "Eliminates toll queue congestion and slashes transit delays."
    ],
    examFacts: ["Technology: ANPR Tolling Plazas", "Agency: NHAI"],
    quickRemember: "NHAI deployed AI-based number plate recognition toll plazas for barrier-free transit.",
    audioText: "The National Highways Authority operated its first AI-based toll plazas for barrier-free travel.",
    source: "MoRTH", importantFor: ["SSC CGL", "RRB NTPC"]
  },
  {
    id: "REC-APR-029", date: "2026-04-20", month: "Apr 2026", category: "International Affairs",
    title: "India and African Union Joint Digital Public Infrastructure Taskforce",
    summary: "New Delhi and Addis Ababa executed an accord to export India Stack solutions across African nations.",
    whatHappened: "India and representatives of the African Union signed an agreement establishing a Joint Digital Public Infrastructure (DPI) Taskforce, aimed at implementing open-source identity, payment, and data exchange frameworks across partner countries.",
    importantPoints: [
      "Joint DPI Taskforce established between India and the African Union.",
      "Shares open-source India Stack architecture (Aadhaar, UPI frameworks).",
      "Boosts digital inclusion and cross-border financial connectivity."
    ],
    examFacts: ["Partners: India and African Union", "Focus: Digital Public Infrastructure (DPI)"],
    quickRemember: "India and the African Union established a joint digital public infrastructure taskforce.",
    audioText: "India and the African Union signed an accord to establish a joint digital public infrastructure taskforce.",
    source: "MEA", importantFor: ["UPSC", "SSC CGL"]
  },
  {
    id: "REC-APR-030", date: "2026-04-22", month: "Apr 2026", category: "Health & Biotechnology",
    title: "DBT Launches National Biomanufacturing and Biofoundry Initiative",
    summary: "The Department of Biotechnology rolled out a ₹500 crore mission to establish advanced biofoundry facilities.",
    whatHappened: "The Department of Biotechnology (DBT) launched the National Biomanufacturing and Biofoundry Initiative, a specialized funding and incubation framework to scale up laboratory microbial strains into industrial-grade bio-products.",
    importantPoints: [
      "National Biomanufacturing and Biofoundry Initiative launched by DBT.",
      "Aims to commercialize synthetic biology and green chemical production.",
      "Establishes shared pilot-scale bioreactor facilities for startups."
    ],
    examFacts: ["Initiative: National Biomanufacturing & Biofoundry", "Agency: DBT"],
    quickRemember: "The DBT launched a national biomanufacturing and biofoundry initiative to scale synthetic biology.",
    audioText: "The Department of Biotechnology rolled out a mission to establish advanced biofoundry facilities.",
    source: "Ministry of Science & Technology", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-APR-031", date: "2026-04-23", month: "Apr 2026", category: "Economy & Trade",
    title: "India and New Zealand Finalize Historic Free Trade Agreement",
    summary: "New Delhi and Wellington announced the conclusion of a comprehensive bilateral trade pact.",
    whatHappened: "India and New Zealand finalized a landmark Free Trade Agreement (FTA), securing complete tariff elimination across core export categories and establishing robust supply chain conduits in agricultural technology and education.",
    importantPoints: [
      "Landmark Free Trade Agreement concluded between India and New Zealand.",
      "Removes trade barriers across key industrial and agricultural lines.",
      "Strengthens economic cooperation in the Indo-Pacific region."
    ],
    examFacts: ["Partners: India and New Zealand", "Agreement: Comprehensive FTA"],
    quickRemember: "India and New Zealand finalized a bilateral Free Trade Agreement.",
    audioText: "India and New Zealand announced the conclusion of a comprehensive bilateral trade pact.",
    source: "Ministry of Commerce", importantFor: ["UPSC", "SSC CGL", "Bank PO"]
  },
  {
    id: "REC-APR-032", date: "2026-04-24", month: "Apr 2026", category: "Science & Technology",
    title: "IIT Madras Launches Low-Cost Autonomous Underwater Vehicle",
    summary: "Engineers at IIT Madras unveiled a compact marine drone designed for shallow water bathymetric mapping.",
    whatHappened: "Researchers at IIT Madras successfully demonstrated an affordable, modular Autonomous Underwater Vehicle (AUV) named 'Makara', equipped with sonar sensors to map coastal topography, inspect harbor piers, and detect marine debris.",
    importantPoints: [
      "Low-cost Autonomous Underwater Vehicle (AUV) 'Makara' developed by IIT Madras.",
      "Equipped with acoustic sonar sensors for shallow water mapping.",
      "Aids harbor security, marine archeology, and underwater infrastructure inspections."
    ],
    examFacts: ["Innovation: Makara AUV Marine Drone", "Institute: IIT Madras"],
    quickRemember: "IIT Madras developed a low-cost autonomous underwater vehicle named 'Makara'.",
    audioText: "Engineers at IIT Madras unveiled a compact marine drone designed for shallow water bathymetric mapping.",
    source: "IIT Madras", importantFor: ["SSC CGL", "State PCS"]
  },
  {
    id: "REC-APR-033", date: "2026-04-25", month: "Apr 2026", category: "Defence & Aerospace",
    title: "DRDO Successfully Flight-Tests Guided Pinaka Extended-Range Rockets",
    summary: "DRDO validated guidance kits converting conventional rocket artillery into precision precision-strike munitions.",
    whatHappened: "The Defence Research and Development Organisation (DRDO) successfully completed user-guided flight trials of the Pinaka Guided Weapon System from Pokhran, confirming sub-10 meter circular error probable (CEP) accuracy at maximum ranges.",
    importantPoints: [
      "Flight-tests of the Guided Pinaka Weapon System completed successfully.",
      "Fired from multi-barrel launchers at Pokhran, Rajasthan.",
      "Integrates indigenous inertial navigation and GPS guidance kits."
    ],
    examFacts: ["Weapon: Guided Pinaka System", "Agency: DRDO", "Test Range: Pokhran"],
    quickRemember: "DRDO successfully flight-tested guided Pinaka extended-range rockets with high accuracy.",
    audioText: "DRDO validated guidance kits converting conventional rocket artillery into precision strike munitions.",
    source: "Ministry of Defence", importantFor: ["CDS", "SSC CGL"]
  },
  {
    id: "REC-APR-034", date: "2026-04-27", month: "Apr 2026", category: "Environment & Wildlife",
    title: "New Butterfly Species 'Euploea patna' Sub-Variant Discovered in Northeast",
    summary: "Lepidopterists formally described a unique localized butterfly color morph from the Namdapha rainforest.",
    whatHappened: "Wildlife researchers published findings identifying a distinctive new butterfly sub-variant within the crow-butterfly family, discovered flutter-sampling nectar in the pristine moist tropical forest canopies of Namdapha National Park in Arunachal Pradesh.",
    importantPoints: [
      "New butterfly sub-variant discovered in Namdapha National Park.",
      "Located in Arunachal Pradesh, Northeast India.",
      "Enriches the documented Lepidoptera inventory of biodiversity hot-spots."
    ],
    examFacts: ["Species: Crow-butterfly Sub-Variant", "Location: Namdapha National Park, Arunachal Pradesh"],
    quickRemember: "A unique butterfly sub-variant was discovered in the rainforests of Namdapha National Park.",
    audioText: "Lepidopterists formally described a unique localized butterfly color morph from the Namdapha rainforest.",
    source: "Zoological Survey of India", importantFor: ["SSC CGL", "State PCS"]
  },
  {
    id: "REC-APR-035", date: "2026-04-28", month: "Apr 2026", category: "Government Schemes",
    title: "Ministry of Education Launches National Higher Education Credit Bank Portal 2.0",
    summary: "The Academic Bank of Credits (ABC) portal was upgraded to support seamless multi-disciplinary credit transfers.",
    whatHappened: "The Ministry of Education launched an upgraded version of the Academic Bank of Credits (ABC) portal under the National Education Policy (NEP) framework, enabling university students to seamlessly store, transfer, and redeem academic credits across multiple institutions.",
    importantPoints: [
      "Upgraded Academic Bank of Credits (ABC) Portal 2.0 launched by Ministry of Education.",
      "Supports multi-disciplinary credit transfers under NEP guidelines.",
      "Digitally integrates university grading transcripts into a unified student ledger."
    ],
    examFacts: ["Portal: ABC Portal 2.0", "Ministry: Ministry of Education", "Framework: NEP"],
    quickRemember: "The Education Ministry launched Academic Bank of Credits Portal 2.0 for seamless credit transfers.",
    audioText: "The Ministry of Education launched an upgraded version of the Academic Bank of Credits portal.",
    source: "Ministry of Education", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-APR-036", date: "2026-04-29", month: "Apr 2026", category: "Economy & Trade",
    title: "SEBI Mandates Instantaneous Trade Settlement Trials for Select Equities",
    summary: "SEBI initiated mandatory framework sandboxes to test T+0 and instant trade settlement infrastructure.",
    whatHappened: "The Securities and Exchange Board of India (SEBI) rolled out live market sandbox sessions enabling clearing corporations and stockbrokers to trial instantaneous (T+0 and instant batch) trade settlement mechanics for high-volume liquid stocks.",
    importantPoints: [
      "SEBI initiated live market sandbox trials for instantaneous trade settlement.",
      "Aims to transition top liquid equities toward T+0 and real-time settlement rails.",
      "Reduces settlement default risks and systemic capital lock-up."
    ],
    examFacts: ["Regulator: SEBI", "Focus: Instantaneous Trade Settlement Sandboxes"],
    quickRemember: "SEBI initiated live market sandboxes to test instantaneous trade settlement infrastructure.",
    audioText: "SEBI initiated mandatory framework sandboxes to test instant trade settlement infrastructure.",
    source: "SEBI", importantFor: ["Bank PO", "SSC CGL"]
  },
  {
    id: "REC-APR-037", date: "2026-04-29", month: "Apr 2026", category: "Science & Technology",
    title: "CSIR-NEERI Develops Low-Cost Ambient Odor and Gas Monitoring Sensors",
    summary: "CSIR-NEERI engineered affordable electronic-nose sensors to track industrial sulfur and VOC emissions.",
    whatHappened: "Scientists at CSIR-NEERI successfully developed an indigenous array of electronic-nose (e-nose) gas sensors capable of real-time quantification of malodorous volatile organic compounds (VOCs) and hydrogen sulfide near chemical industrial zones.",
    importantPoints: [
      "Electronic-nose (e-nose) gas sensor array developed by CSIR-NEERI Nagpur.",
      "Tracks industrial VOCs and sulfur gas emissions in real time.",
      "Provides municipalities with automated tools to enforce environmental compliance."
    ],
    examFacts: ["Developer: CSIR-NEERI Nagpur", "Technology: E-Nose Gas Sensors"],
    quickRemember: "CSIR-NEERI developed low-cost electronic-nose sensors to track industrial gas and odor emissions.",
    audioText: "CSIR-NEERI engineered affordable electronic-nose sensors to track industrial sulfur and VOC emissions.",
    source: "CSIR", importantFor: ["SSC CGL", "State PCS"]
  },
  {
    id: "REC-APR-038", date: "2026-04-30", month: "Apr 2026", category: "Infrastructure & Energy",
    title: "SJVN Commissions Major Pumped Storage Hydroelectric Project",
    summary: "SJVN successfully operationalized a high-capacity pumped storage hydro plant to balance grid peaks.",
    whatHappened: "SJVN Limited commissioned a major utility-scale Pumped Storage Hydroelectric Project (PSP), utilizing upper and lower reservoir water cycles to provide rapid-response peak load balancing and grid frequency stabilization.",
    importantPoints: [
      "Pumped Storage Hydroelectric Project (PSP) commissioned by SJVN Limited.",
      "Provides rapid-response load balancing for variable renewable energy grids.",
      "Utilizes reversible turbine technology between dual-altitude water reservoirs."
    ],
    examFacts: ["Company: SJVN Limited", "Facility: Pumped Storage Hydro Plant", "Function: Grid Peak Balancing"],
    quickRemember: "SJVN commissioned a major pumped storage hydroelectric project for grid peak balancing.",
    audioText: "SJVN successfully operationalized a high-capacity pumped storage hydro plant to balance grid peaks.",
    source: "Ministry of Power", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-APR-039", date: "2026-04-30", month: "Apr 2026", category: "National Security",
    title: "Indian Coast Guard Commissions Advanced Fast Interceptor Craft",
    summary: "A high-speed interceptor vessel was added to the Coast Guard fleet to reinforce coastal interception.",
    whatHappened: "The Indian Coast Guard commissioned a new indigenous Fast Interceptor Craft (FIC) equipped with water-jet propulsion systems and advanced night-vision optics, strengthening shallow-water security along sensitive maritime boundaries.",
    importantPoints: [
      "Fast Interceptor Craft (FIC) commissioned into the Indian Coast Guard.",
      "Equipped with water-jet propulsion and advanced night-vision optics.",
      "Strengthens shallow-water maritime border interception."
    ],
    examFacts: ["Vessel: Fast Interceptor Craft (FIC)", "Service: Indian Coast Guard"],
    quickRemember: "The Indian Coast Guard commissioned an advanced fast interceptor craft.",
    audioText: "A high-speed interceptor vessel was added to the Coast Guard fleet to reinforce coastal interception.",
    source: "Indian Coast Guard", importantFor: ["CDS", "SSC CGL"]
  },
  {
    id: "REC-APR-040", date: "2026-04-30", month: "Apr 2026", category: "Economy & Agriculture",
    title: "NABARD Sanctions ₹10,000 Crore Rural Solar Micro-Grid Fund",
    summary: "NABARD rolled out a specialized funding window to electrify rural agricultural farming clusters with solar power.",
    whatHappened: "NABARD approved the sanction of a ₹10,000 crore dedicated credit line to deploy decentralized solar micro-grids across remote agrarian clusters, powering standalone agricultural pumps and rural household lighting independently.",
    importantPoints: [
      "₹10,000 crore Rural Solar Micro-Grid Fund approved by NABARD.",
      "Deploys decentralized solar power infrastructure across remote farming clusters.",
      "Powers standalone agricultural pumps and rural households reliably."
    ],
    examFacts: ["Institution: NABARD", "Fund: Rural Solar Micro-Grid Fund", "Allocation: ₹10,000 Crore"],
    quickRemember: "NABARD sanctioned a ₹10,000 crore fund to deploy rural solar micro-grids for farming clusters.",
    audioText: "NABARD sanctioned a ten thousand crore rupee credit line to electrify rural agricultural clusters with solar power.",
    source: "NABARD", importantFor: ["Bank PO", "SSC CGL", "UPSC"]
  }
];

const aprRecallQuestionsBatch2 = [
  {
    id: "REC-Q-APR-021", articleId: "REC-APR-021", category: "Economy & Trade",
    question: "On 1 April 2026, the Government of India implemented a policy decision to bring several critical petrochemical components under:",
    options: ["Maximum export ceiling quotas", "Zero import duty", "State-monopoly trading channels", "Compulsory anti-dumping tariffs"],
    answer: 1, explanation: "The government brought critical petrochemical products under zero import duty to insulate domestic pharmaceutical and solvent supply chains."
  },
  {
    id: "REC-Q-APR-022", articleId: "REC-APR-022", category: "Science & Technology",
    question: "The National Statistical Office (NSO) released which comprehensive annual report detailing the nation's energy matrix and renewable potential?",
    options: ["Power Sector Census India", "Energy Statistics India 2026", "National Power Grid Inventory", "Green Energy Transition Metrics"],
    answer: 1, explanation: "The NSO released the comprehensive 'Energy Statistics India 2026' report tracking the nation's energy metrics."
  },
  {
    id: "REC-Q-APR-023", articleId: "REC-APR-023", category: "Defence & Aerospace",
    question: "Government updates highlighted that India's indigenous defense manufacturing push yielded stellar results, with total defense exports soaring past:",
    options: ["₹15,000 crore", "₹20,000 crore", "₹29,000 crore", "₹50,000 crore"],
    answer: 2, explanation: "India's defense exports crossed ₹29,000 crore on the back of aggressive platform and munitions shipments."
  },
  {
    id: "REC-Q-APR-024", articleId: "REC-APR-024", category: "Economy & Banking",
    question: "The Monetary Policy Committee (MPC) of the Reserve Bank of India maintained status quo on policy repo rates, prioritizing:",
    options: ["Macroeconomic stability and domestic growth resilience", "Rapid currency depreciation to boost exports", "Aggressive interest rate hikes to curb credit", "Quantitative easing through bond buybacks"],
    answer: 0, explanation: "The RBI MPC kept repo rates unchanged to prioritize macroeconomic stability and growth resilience."
  },
  {
    id: "REC-Q-APR-025", articleId: "REC-APR-025", category: "Environment & Agriculture",
    question: "To combat rising terminal heat anomalies during grain filling stages, the Indian Council of Agricultural Research rolled out specialized heat-tolerant strains of:",
    options: ["Paddy rice", "Wheat", "Maize", "Barley"],
    answer: 1, explanation: "ICAR rolled out specialized heat-tolerant wheat cultivars across northern plains to combat rising terminal heat anomalies."
  },
  {
    id: "REC-Q-APR-026", articleId: "REC-APR-026", category: "Science & Technology",
    question: "ISRO's laboratory complexes successfully completed thermal vacuum and vibration stress tests on advanced navigation payload hardware slated for:",
    options: ["Interplanetary deep-space tracking probes", "Low-earth weather surveillance balloons", "Geostationary commercial TV transponders", "Reusable sounding rocket boosters"],
    answer: 0, explanation: "ISRO completed thermal vacuum and vibration stress tests on advanced optical navigation sensors for interplanetary probes."
  },
  {
    id: "REC-Q-APR-027", articleId: "REC-APR-027", category: "Government Schemes",
    question: "The Ministry of Rural Development mandated 100% digital attendance tracking at rural worksites through which application?",
    options: ["National Mobile Monitoring System (NMMS)", "MGNREGA Aadhaar Bridge App", "Gram Swaraj Digital Muster", "Worksite Geotag Portal"],
    answer: 0, explanation: "The Ministry of Rural Development extended its strict compliance order requiring electronic attendance tracking via the National Mobile Monitoring System (NMMS)."
  },
  {
    id: "REC-Q-APR-028", articleId: "REC-APR-028", category: "Infrastructure & Transport",
    question: "The National Highways Authority of India operationalized barrier-free tolling plazas utilizing what technology to deduct tolls dynamically?",
    options: ["GPS satellite toll trackers", "Automatic Number Plate Recognition (ANPR) cameras", "Bluetooth low-energy windshield beacons", "Aadhaar-linked biometric readers"],
    answer: 1, explanation: "NHAI deployed barrier-free multi-lane free-flow tolling plazas using ANPR cameras and FASTag RFID integration."
  },
  {
    id: "REC-Q-APR-029", articleId: "REC-APR-029", category: "International Affairs",
    question: "India and representatives of the African Union signed an agreement establishing a Joint Digital Public Infrastructure Taskforce to implement:",
    options: ["Open-source identity, payment, and data exchange frameworks (India Stack)", "Cross-border sovereign green bond clearinghouses", "Pan-African satellite broadband constellations", "Digital asset regulatory sandboxes"],
    answer: 0, explanation: "The Joint DPI Taskforce implements open-source India Stack architecture across partner countries in Africa."
  },
  {
    id: "REC-Q-APR-030", articleId: "REC-APR-030", category: "Health & Biotechnology",
    question: "The Department of Biotechnology launched the National Biomanufacturing and Biofoundry Initiative with a specialized funding framework to scale up:",
    options: ["Recombinant human insulin bulk plants", "Laboratory microbial strains into industrial-grade bio-products", "Cell and gene therapy clinical trial labs", "Monoclonal antibody biosimilar lines"],
    answer: 1, explanation: "The initiative provides funding and incubation frameworks to scale laboratory microbial strains into industrial-grade bio-products."
  },
  {
    id: "REC-Q-APR-031", articleId: "REC-APR-031", category: "Economy & Trade",
    question: "India and New Zealand finalized a landmark Free Trade Agreement (FTA) that secures complete tariff elimination across core export categories.",
    options: ["True", "False"],
    answer: 0, explanation: "India and New Zealand finalized a historic Free Trade Agreement removing trade barriers."
  },
  {
    id: "REC-Q-APR-032", articleId: "REC-APR-032", category: "Science & Technology",
    question: "Researchers at IIT Madras demonstrated a compact marine drone named 'Makara' equipped with sonar sensors to function as an:",
    options: ["Autonomous Underwater Vehicle (AUV)", "Unmanned Surface Cleaning Vessel", "Deep-Sea Core Drilling Submersible", "Hydrofoil Anti-Submarine Torpedo"],
    answer: 0, explanation: "Makara is an affordable, modular Autonomous Underwater Vehicle (AUV) designed for shallow water mapping and harbor inspections."
  },
  {
    id: "REC-Q-APR-033", articleId: "REC-APR-033", category: "Defence & Aerospace",
    question: "The DRDO successfully completed user-guided flight trials of the Pinaka Guided Weapon System from Pokhran, confirming sub-10 meter accuracy at:",
    options: ["Minimum safe standoff distances", "Maximum operational ranges", "Low-altitude mountain trajectories", "Over-the-horizon ballistic arcs"],
    answer: 1, explanation: "The Guided Pinaka rocket system confirmed sub-10 meter circular error probable accuracy at maximum ranges from Pokhran."
  },
  {
    id: "REC-Q-APR-034", articleId: "REC-APR-034", category: "Environment & Wildlife",
    question: "Wildlife researchers published findings identifying a distinctive new butterfly sub-variant within the crow-butterfly family in the moist tropical forests of:",
    options: ["Kaziranga National Park, Assam", "Namdapha National Park, Arunachal Pradesh", "Periyar National Park, Kerala", "Jim Corbett National Park, Uttarakhand"],
    answer: 1, explanation: "A unique butterfly sub-variant was discovered in the moist tropical forest canopies of Namdapha National Park in Arunachal Pradesh."
  },
  {
    id: "REC-Q-APR-035", articleId: "REC-APR-035", category: "Government Schemes",
    question: "The Ministry of Education launched an upgraded version of which portal under the NEP framework to enable student credit transfers?",
    options: ["National Scholarship Portal (NSP)", "Academic Bank of Credits (ABC) Portal", "National Digital Library Ledger", "Higher Education Skill Registry"],
    answer: 1, explanation: "The Academic Bank of Credits (ABC) Portal 2.0 enables students to store, transfer, and redeem academic credits across institutions."
  },
  {
    id: "REC-Q-APR-036", articleId: "REC-APR-036", category: "Economy & Trade",
    question: "The Securities and Exchange Board of India rolled out live market sandbox sessions enabling clearing corporations to trial:",
    options: ["Instantaneous (T+0 and instant batch) trade settlement mechanics", "Cross-border cryptocurrency derivatives trading", "Anonymous dark-pool block deal matching", "Automated algorithmic short-selling circuits"],
    answer: 0, explanation: "SEBI rolled out live market sandbox sessions to test instantaneous T+0 and real-time trade settlement rails for high-volume stocks."
  },
  {
    id: "REC-Q-APR-037", articleId: "REC-APR-037", category: "Science & Technology",
    question: "Scientists at CSIR-NEERI developed an indigenous array of electronic-nose (e-nose) gas sensors capable of real-time quantification of:",
    options: ["Radioactive particulate fallout isotopes", "Malodorous volatile organic compounds (VOCs) and hydrogen sulfide", "Stratospheric ozone depletion chemicals", "Automotive tailpipe carbon monoxide ratios"],
    answer: 1, explanation: "CSIR-NEERI developed e-nose sensors to track malodorous volatile organic compounds (VOCs) and hydrogen sulfide near industrial zones."
  },
  {
    id: "REC-Q-APR-038", articleId: "REC-APR-038", category: "Infrastructure & Energy",
    question: "SJVN Limited commissioned a major utility-scale Pumped Storage Hydroelectric Project (PSP) utilizing water cycles primarily to provide:",
    options: ["Desalinated drinking water for coastal towns", "Rapid-response peak load balancing and grid frequency stabilization", "Irrigation canals for arid plateau districts", "Industrial cooling water for thermal power hubs"],
    answer: 1, explanation: "The Pumped Storage Hydroelectric Project uses dual reservoirs to provide rapid-response peak load balancing and grid stabilization."
  },
  {
    id: "REC-Q-APR-039", articleId: "REC-APR-039", category: "National Security",
    question: "The Indian Coast Guard commissioned a new indigenous Fast Interceptor Craft equipped with what propulsion system?",
    options: ["Nuclear steam turbine screws", "Water-jet propulsion systems", "Diesel-electric podded thrusters", "Magnetohydrodynamic drives"],
    answer: 1, explanation: "The Fast Interceptor Craft is equipped with water-jet propulsion systems and advanced night-vision optics for shallow-water security."
  },
  {
    id: "REC-Q-APR-040", articleId: "REC-APR-040", category: "Economy & Agriculture",
    question: "NABARD approved the sanction of a ₹10,000 crore dedicated credit line to deploy what technology across remote agrarian clusters?",
    options: ["Decentralized solar micro-grids", "Underground drip irrigation pipelines", "Automated drone pesticide sprayers", "Geothermal greenhouse heating loops"],
    answer: 0, explanation: "NABARD approved an ₹10,000 crore credit line to deploy decentralized solar micro-grids across remote agrarian clusters."
  }
];

// 👉 PUSH DATA INTO GLOBAL ARRAYS
if (typeof hiddenRecallArticles !== 'undefined') {
...
  hiddenRecallArticles.push(...aprRecallArticlesBatch2);
}
if (typeof recallQuestionPool !== 'undefined') {
  recallQuestionPool.push(...aprRecallQuestionsBatch2);
}

/* ==========================================================================
   END OF APRIL BATCH 2
   ========================================================================== */
/* ==========================================================================
   APRIL 2026 - BATCH 3 (ITEMS 041 TO 060)
   ========================================================================== */

const aprRecallArticlesBatch3 = [
  {
    id: "REC-APR-041", date: "2026-04-01", month: "Apr 2026", category: "Governance & Census",
    title: "Phase I of World's Largest Digital Census Begins",
    summary: "India initiated Phase I of Census 2027 featuring a self-enumeration portal and house-listing operations.",
    whatHappened: "The world's largest digital census officially commenced with its Phase I rollout. The initial phase features a dedicated self-enumeration portal, marking a historic shift toward digital governance and electronic data collection across notified states and Union Territories.",
    importantPoints: [
      "Phase I rollout of Census 2027 began on 1 April.",
      "Introduces a digital self-enumeration portal for citizens.",
      "Covers house-listing operations and housing stock data."
    ],
    examFacts: ["Event: Census 2027 Phase I Rollout", "Key Feature: Self-Enumeration Portal"],
    quickRemember: "Phase I of Census 2027 kicked off with a digital self-enumeration portal.",
    audioText: "India initiated Phase I of Census 2027 featuring a digital self-enumeration portal and house-listing operations.",
    source: "Office of the Registrar General", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-APR-042", date: "2026-04-02", month: "Apr 2026", category: "Economy & Energy",
    title: "NSO Releases 33rd Edition of Energy Statistics India 2026",
    summary: "The National Statistics Office published official data showing India's total renewable energy potential at 47 lakh MW.",
    whatHappened: "The National Statistics Office (NSO) released the 33rd edition of the 'Energy Statistics India Report 2026'. The report noted that India's total renewable energy (RE) potential has reached approximately 47 lakh MW, with solar power contributing nearly 71%.",
    importantPoints: [
      "33rd edition of Energy Statistics India Report 2026 released by NSO.",
      "India's total renewable energy potential stands at 47 lakh MW.",
      "Solar energy accounts for nearly 71% of the total RE potential."
    ],
    examFacts: ["Report: Energy Statistics India 2026", "RE Potential: 47 Lakh MW"],
    quickRemember: "The NSO released Energy Statistics India 2026, pegging total RE potential at 47 lakh MW.",
    audioText: "The National Statistics Office published the Energy Statistics India 2026 report highlighting renewable potential.",
    source: "MoSPI", importantFor: ["Bank PO", "SSC CGL", "UPSC"]
  },
  {
    id: "REC-APR-043", date: "2026-04-03", month: "Apr 2026", category: "Environment & Conservation",
    title: "CMS COP15 Concludes in Campo Grande, Brazil",
    summary: "The 15th Conference of Parties to the CMS concluded with new protections for 40 migratory species.",
    whatHappened: "The 15th Conference of Parties (COP15) to the Convention on the Conservation of Migratory Species of Wild Animals (CMS) concluded in Campo Grande, Brazil. Member nations added 40 species to CMS appendices and urged a moratorium on deep-seabed mining.",
    importantPoints: [
      "CMS COP15 concluded in Campo Grande, Brazil.",
      "40 species, subspecies, and populations added to CMS Appendices.",
      "Called for a moratorium on deep-seabed mining until ecological safety is proven."
    ],
    examFacts: ["Event: CMS COP15", "Location: Campo Grande, Brazil"],
    quickRemember: "CMS COP15 in Brazil added 40 species to protection appendices and targeted deep-sea mining.",
    audioText: "The 15th Conference of Parties to the CMS concluded in Brazil, adopting major marine and wildlife protections.",
    source: "UN Environment Programme", importantFor: ["UPSC", "SSC CGL"]
  },
  {
    id: "REC-APR-044", date: "2026-04-04", month: "Apr 2026", category: "State Governance & Environment",
    title: "Odisha Becomes First State to Implement Marine Spatial Planning",
    summary: "Odisha launched India's first scientific ocean zoning framework to balance blue economy growth and marine ecology.",
    whatHappened: "Odisha officially became the first Indian state to implement Marine Spatial Planning (MSP). The scientific ocean zoning framework is designed to balance coastal ecology, fisheries, and industrial blue economy growth while reducing user conflicts.",
    importantPoints: [
      "Odisha is the first Indian state to adopt Marine Spatial Planning.",
      "Provides a scientific ocean zoning framework for coastal management.",
      "Aims to balance marine biodiversity protection and economic growth."
    ],
    examFacts: ["State: Odisha", "Framework: Marine Spatial Planning (MSP)"],
    quickRemember: "Odisha became the first Indian state to implement Marine Spatial Planning for ocean zoning.",
    audioText: "Odisha became the first Indian state to implement Marine Spatial Planning to balance marine ecology and economy.",
    source: "Government of Odisha", importantFor: ["SSC CGL", "State PCS", "UPSC"]
  },
  {
    id: "REC-APR-045", date: "2026-04-06", month: "Apr 2026", category: "Science & Technology",
    title: "Government Proposes Amendments to IT Rules 2021 for AI-Generated Content",
    summary: "New regulatory amendments were proposed requiring mandatory labeling and traceable metadata for synthetic media.",
    whatHappened: "The central government proposed major amendments to the IT Rules 2021 to effectively regulate artificial intelligence-generated and synthetic media. Under the framework, intermediaries must mandate clear labels and traceable metadata on AI content to curb deepfakes.",
    importantPoints: [
      "Proposed amendments to IT Rules 2021 targeting AI-generated content.",
      "Mandates clear visual or audio labeling for deepfakes and synthetic media.",
      "Requires tech platforms to maintain traceable metadata for transparency."
    ],
    examFacts: ["Framework: IT Rules 2021 Amendments", "Focus: AI Deepfake Regulation"],
    quickRemember: "The government proposed amendments to IT Rules 2021 to mandate labeling for AI-generated content.",
    audioText: "The government proposed amendments to the IT Rules 2021 to regulate AI-generated synthetic content and deepfakes.",
    source: "MeitY", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-APR-046", date: "2026-04-07", month: "Apr 2026", category: "Economy & Business",
    title: "Rocklink India Opens First Integrated Lithium-Ion & Rare Earth Recycling Plant",
    summary: "Rocklink India inaugurated an advanced recycling facility for lithium-ion batteries and rare earth magnets in UP.",
    whatHappened: "Rocklink India Private Limited inaugurated India's first integrated lithium-ion battery and rare earth magnet recycling facility in Sikandrabad, Bulandshahr district, Uttar Pradesh, boosting domestic circular economy infrastructure for critical minerals.",
    importantPoints: [
      "India's first integrated lithium-ion and rare earth recycling plant opened.",
      "Located in Sikandrabad, Bulandshahr district, Uttar Pradesh.",
      "Recycles spent EV batteries and rare earth permanent magnets."
    ],
    examFacts: ["Company: Rocklink India", "Location: Sikandrabad, UP"],
    quickRemember: "Rocklink India opened the country's first integrated lithium-ion and rare earth recycling plant in UP.",
    audioText: "Rocklink India inaugurated India's first integrated lithium-ion battery and rare earth recycling plant in Uttar Pradesh.",
    source: "Ministry of Mines", importantFor: ["SSC CGL", "State PCS"]
  },
  {
    id: "REC-APR-047", date: "2026-04-08", month: "Apr 2026", category: "Economy & Commerce",
    title: "Union Minister Piyush Goyal Launches 'Bharat Taxi' App in Mumbai",
    summary: "India's first cooperative-led ride-hailing platform and driver onboarding program was launched in Mumbai.",
    whatHappened: "Union Minister of Commerce & Industry Piyush Goyal launched 'Bharat Taxi' in Mumbai, Maharashtra. It stands as India's first cooperative-led ride-hailing platform designed for auto-rickshaw and cab drivers to ensure fair earnings and rider accessibility.",
    importantPoints: [
      "Bharat Taxi app launched by Commerce Minister Piyush Goyal in Mumbai.",
      "India's first cooperative-led ride-hailing platform.",
      "Aims to onboard and empower auto-rickshaw and cab drivers."
    ],
    examFacts: ["Platform: Bharat Taxi", "Launch City: Mumbai"],
    quickRemember: "Piyush Goyal launched 'Bharat Taxi', India's first cooperative ride-hailing app, in Mumbai.",
    audioText: "Union Minister Piyush Goyal launched Bharat Taxi, India's first cooperative-led ride-hailing platform, in Mumbai.",
    source: "Ministry of Commerce and Industry", importantFor: ["SSC CGL", "Bank PO"]
  },
  {
    id: "REC-APR-048", date: "2026-04-09", month: "Apr 2026", category: "Economy & Manufacturing",
    title: "Himadri Speciality Chemical Commissions First Anode Material Plant",
    summary: "Himadri Speciality Chemical opened India's first lithium-ion battery anode material facility in West Bengal.",
    whatHappened: "Himadri Speciality Chemical Limited (HSCL) commissioned India's first commercial anode material production facility with an initial capacity of 200 Metric Tonnes Per Annum (MTPA) at Mahistikry, Hooghly, West Bengal, marking a major entry into EV supply chains.",
    importantPoints: [
      "India's first anode material production facility commissioned.",
      "Located at Mahistikry, Hooghly, West Bengal.",
      "Initial capacity of 200 MTPA for lithium-ion battery components."
    ],
    examFacts: ["Company: Himadri Speciality Chemical", "Location: Hooghly, West Bengal"],
    quickRemember: "Himadri Speciality Chemical opened India's first lithium-ion battery anode material plant in West Bengal.",
    audioText: "Himadri Speciality Chemical commissioned India's first anode material production facility in West Bengal.",
    source: "Ministry of Heavy Industries", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-APR-049", date: "2026-04-10", month: "Apr 2026", category: "Governance & Skill Development",
    title: "First UNESCO Chair on Gender Inclusion Launched in India",
    summary: "Union Minister Jayant Chaudhary launched Asia's first UNESCO Chair on Gender Inclusion and Skill Development.",
    whatHappened: "Union Minister of State for Skill Development and Entrepreneurship Jayant Chaudhary formally launched India and Asia's first 'UNESCO Chair on Gender Inclusion and Skill Development', aiming to bridge gender gaps in technical training and vocational employment.",
    importantPoints: [
      "Asia's first UNESCO Chair on Gender Inclusion and Skill Development launched.",
      "Inaugurated by Union Minister Jayant Chaudhary.",
      "Focuses on advancing gender equality and inclusion in vocational skill programs."
    ],
    examFacts: ["Initiative: UNESCO Chair on Gender Inclusion", "Ministry: MoSDE"],
    quickRemember: "Jayant Chaudhary launched Asia's first UNESCO Chair on Gender Inclusion and Skill Development.",
    audioText: "Union Minister Jayant Chaudhary launched Asia's first UNESCO Chair on Gender Inclusion and Skill Development.",
    source: "Ministry of Skill Development", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-APR-050", date: "2026-04-13", month: "Apr 2026", category: "Economy & Regulation",
    title: "India Introduces PROG Rules 2026 for Online Gaming",
    summary: "New online gaming regulations were enacted, permitting esports while banning money-wagering platforms.",
    whatHappened: "The central government introduced the PROG Rules 2026 to regulate the online gaming sector. The framework officially permits esports and social games while strictly prohibiting money-wagering platforms, establishing the Online Gaming Authority of India (OGAI) for compliance.",
    importantPoints: [
      "Introduction of PROG Rules 2026 for online gaming governance.",
      "Permits esports and social gaming while banning money-based betting apps.",
      "Creates the Online Gaming Authority of India (OGAI) for dispute resolution."
    ],
    examFacts: ["Framework: PROG Rules 2026", "Regulatory Body: OGAI"],
    quickRemember: "India introduced PROG Rules 2026 to govern online gaming, permitting esports while banning cash betting.",
    audioText: "India introduced the PROG Rules 2026 to regulate online gaming by banning money wagering and permitting esports.",
    source: "Ministry of Electronics and IT", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-APR-051", date: "2026-04-15", month: "Apr 2026", category: "Supreme Court & Judiciary",
    title: "Supreme Court Declares Road Safety Essential Under Article 21",
    summary: "The Supreme Court issued nationwide directives using Article 142 to clear highway encroachments and enforce safety.",
    whatHappened: "In a landmark ruling, the Supreme Court of India declared road safety an essential part of the Right to Life under Article 21. Invoking extraordinary powers under Article 142, the Court ordered nationwide actions to remove highway encroachments and ban dangerous roadside parking.",
    importantPoints: [
      "Supreme Court links road safety directly to Article 21 (Right to Life).",
      "Utilized Article 142 to enforce mandatory nationwide road safety directives.",
      "Mandates clearing highway encroachments and prohibiting illegal roadside parking."
    ],
    examFacts: ["Constitutional Articles: Article 21 and Article 142", "Subject: National Road Safety Mandate"],
    quickRemember: "The Supreme Court declared road safety part of Article 21, invoking Article 142 for strict enforcement.",
    audioText: "The Supreme Court declared road safety an essential part of Article 21, using Article 142 to enforce nationwide directives.",
    source: "Supreme Court of India", importantFor: ["UPSC", "SSC CGL"]
  },
  {
    id: "REC-APR-052", date: "2026-04-16", month: "Apr 2026", category: "Economy & Agriculture",
    title: "Government Expands PM-AASHA and Launches Atmanirbhar Pulses Mission",
    summary: "Procurement operations under PM-AASHA expanded to Chhattisgarh alongside a structured pulse procurement initiative.",
    whatHappened: "The Ministry of Consumer Affairs, Food and Public Distribution expanded procurement operations under the PM-AASHA scheme to Chhattisgarh and launched the first-ever structured pulse procurement initiative under the Atmanirbhar Pulses Mission to achieve self-sufficiency.",
    importantPoints: [
      "PM-AASHA procurement operations expanded to Chhattisgarh.",
      "Launch of the first-ever structured pulse procurement under Atmanirbhar Pulses Mission.",
      "Aims to boost domestic pulse cultivation and stabilize grower prices."
    ],
    examFacts: ["Scheme: PM-AASHA & Atmanirbhar Pulses Mission", "Expansion State: Chhattisgarh"],
    quickRemember: "The government expanded PM-AASHA to Chhattisgarh and launched the Atmanirbhar Pulses Mission.",
    audioText: "The Ministry of Consumer Affairs expanded PM-AASHA procurement operations and launched the Atmanirbhar Pulses Mission.",
    source: "Ministry of Consumer Affairs", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-APR-053", date: "2026-04-17", month: "Apr 2026", category: "Language & Culture",
    title: "Meghalaya Elevates Status of Khasi and Garo Languages",
    summary: "The Meghalaya government officially upgraded the official recognition status of Khasi and Garo regional languages.",
    whatHappened: "The Government of Meghalaya passed formal legislative measures to elevate the administrative and educational status of the Khasi and Garo languages, reinforcing indigenous cultural identity and promoting regional literature in schools.",
    importantPoints: [
      "Meghalaya elevated the official status of Khasi and Garo languages.",
      "Strengthens tribal language instruction in local educational institutions.",
      "Promotes indigenous literature and cultural preservation."
    ],
    examFacts: ["State: Meghalaya", "Languages: Khasi and Garo"],
    quickRemember: "Meghalaya officially elevated the status of the Khasi and Garo regional languages.",
    audioText: "The Meghalaya government officially upgraded the recognition status of Khasi and Garo regional languages.",
    source: "Government of Meghalaya", importantFor: ["SSC CGL", "State PCS"]
  },
  {
    id: "REC-APR-054", date: "2026-04-20", month: "Apr 2026", category: "International Diplomacy",
    title: "Indian Ocean Conference 2026 Held in Mauritius",
    summary: "Global delegates gathered in Mauritius for the Indian Ocean Conference 2026 under India's SAGAR vision.",
    whatHappened: "The Indian Ocean Conference 2026 was hosted in Mauritius, emphasizing collective maritime stewardship under India's 'SAGAR' (Security and Growth for All in the Region) vision, focusing on secure sea lanes, trade security, and regional resilience.",
    importantPoints: [
      "Indian Ocean Conference 2026 convened in Mauritius.",
      "Centered around India's SAGAR vision for maritime cooperation.",
      "Addressed secure sea trade routes and regional climate resilience."
    ],
    examFacts: ["Event: Indian Ocean Conference 2026", "Location: Mauritius"],
    quickRemember: "Mauritius hosted the Indian Ocean Conference 2026, focusing on maritime stewardship and India's SAGAR vision.",
    audioText: "The Indian Ocean Conference 2026 in Mauritius highlighted collective maritime stewardship under India's SAGAR vision.",
    source: "MEA", importantFor: ["UPSC", "CDS", "SSC CGL"]
  },
  {
    id: "REC-APR-055", date: "2026-04-21", month: "Apr 2026", category: "Supreme Court & Education",
    title: "Supreme Court Upholds 25% RTE Reservation in Private Schools",
    summary: "The Supreme Court reinforced Section 12(1)(c) of the Right to Education Act for weaker sections.",
    whatHappened: "In a definitive ruling, the Supreme Court upheld Section 12(1)(c) of the Right to Education (RTE) Act, reinforcing the mandatory 25% reservation for children from economically weaker and disadvantaged sections in private unaided schools across India.",
    importantPoints: [
      "Supreme Court upheld Section 12(1)(c) of the RTE Act.",
      "Reaffirmed the 25% reservation mandate in private schools for weaker sections.",
      "Aims to drive social integration and inclusive early education."
    ],
    examFacts: ["Legal Ruling: RTE Act Section 12(1)(c)", "Mandate: 25% Weaker Section Reservation"],
    quickRemember: "The Supreme Court upheld the 25% RTE reservation for weaker sections in private schools.",
    audioText: "The Supreme Court upheld Section 12(1)(c) of the Right to Education Act, reinforcing the 25 percent reservation.",
    source: "Supreme Court of India", importantFor: ["UPSC", "SSC CGL"]
  },
  {
    id: "REC-APR-056", date: "2026-04-22", month: "Apr 2026", category: "Economy & Banking",
    title: "RBI Revokes Banking Licence of Paytm Payments Bank",
    summary: "The Reserve Bank of India revoked the banking licence of PPBL due to persistent regulatory non-compliance.",
    whatHappened: "The Reserve Bank of India (RBI) officially revoked the banking licence of Paytm Payments Bank Limited (PPBL) under Section 22(4) of the Banking Regulation Act, 1949, following repeated failures to comply with regulatory norms.",
    importantPoints: [
      "RBI revoked the banking licence of Paytm Payments Bank (PPBL).",
      "Action executed under Section 22(4) of the Banking Regulation Act, 1949.",
      "Stemmed from systemic non-compliance with payment bank regulatory norms."
    ],
    examFacts: ["Regulator: RBI", "Entity: Paytm Payments Bank (PPBL)"],
    quickRemember: "The RBI revoked the banking licence of Paytm Payments Bank for regulatory non-compliance.",
    audioText: "The Reserve Bank of India revoked the banking licence of Paytm Payments Bank due to non-compliance.",
    source: "RBI", importantFor: ["Bank PO", "SSC CGL"]
  },
  {
    id: "REC-APR-057", date: "2026-04-23", month: "Apr 2026", category: "Economy & Banking",
    title: "RBI Imposes Regulatory Penalties on Bandhan Bank and Cooperatives",
    summary: "The central bank slapped financial penalties on Bandhan Bank and select entities for KYC norm violations.",
    whatHappened: "In its continuing enforcement actions, the RBI imposed a monetary penalty of ₹41.8 lakh on Bandhan Bank for non-compliance with Know Your Customer (KYC) guidelines, alongside penalties on other cooperative entities.",
    importantPoints: [
      "RBI imposed a ₹41.8 lakh penalty on Bandhan Bank.",
      "Penalties tied to non-compliance with KYC and regulatory frameworks.",
      "Highlights strict central bank oversight over financial institutions."
    ],
    examFacts: ["Regulator: RBI", "Institution: Bandhan Bank Penalty"],
    quickRemember: "The RBI imposed regulatory penalties on Bandhan Bank for KYC non-compliance.",
    audioText: "The Reserve Bank of India imposed financial penalties on Bandhan Bank for non-compliance with KYC guidelines.",
    source: "RBI", importantFor: ["Bank PO", "SSC CGL"]
  },
  {
    id: "REC-APR-058", date: "2026-04-27", month: "Apr 2026", category: "Think Tanks & Economy",
    title: "Dr. Ashok Lahiri Appointed to Second-Highest Authority in NITI Aayog",
    summary: "Dr. Ashok Lahiri succeeded Suman Bery as Vice Chairman / high-ranking authority in NITI Aayog.",
    whatHappened: "Dr. Ashok Lahiri succeeded Suman Bery upon the completion of Bery's four-year tenure on May 1, 2026, stepping into the second-highest authority role in NITI Aayog directly under the Chairperson.",
    importantPoints: [
      "Dr. Ashok Lahiri took up leadership responsibilities in NITI Aayog.",
      "Succeeded Suman Bery following the completion of his four-year term.",
      "Assumes the second-highest administrative position in NITI Aayog."
    ],
    examFacts: ["Appointee: Dr. Ashok Lahiri", "Institution: NITI Aayog"],
    quickRemember: "Dr. Ashok Lahiri succeeded Suman Bery in NITI Aayog's leadership structure.",
    audioText: "Dr. Ashok Lahiri succeeded Suman Bery, becoming a top authority in NITI Aayog.",
    source: "Cabinet Secretariat", importantFor: ["UPSC", "SSC CGL"]
  },
  {
    id: "REC-APR-059", date: "2026-04-28", month: "Apr 2026", category: "Maritime & Education",
    title: "CMEC-RIS and Delhi University Sign MoU for Maritime Education",
    summary: "The Centre for Maritime Economy and Connectivity and Delhi University partnered to boost maritime research.",
    whatHappened: "The Centre for Maritime Economy and Connectivity (CMEC) at the Research and Information System for Developing Countries (RIS) signed a Memorandum of Understanding (MoU) with the University of Delhi to advance specialized maritime education and research.",
    importantPoints: [
      "MoU signed between CMEC-RIS and the University of Delhi.",
      "Aims to strengthen maritime education, policy training, and research.",
      "Bridges academic curricula with national maritime strategy."
    ],
    examFacts: ["Partners: CMEC-RIS and Delhi University", "Focus: Maritime Education MoU"],
    quickRemember: "CMEC-RIS and Delhi University signed an MoU to strengthen maritime education and research.",
    audioText: "The Centre for Maritime Economy and Connectivity and Delhi University signed an MoU to boost maritime research.",
    source: "RIS / Delhi University", importantFor: ["UPSC", "SSC CGL"]
  },
  {
    id: "REC-APR-060", date: "2026-04-29", month: "Apr 2026", category: "Broadcasting & Media",
    title: "Akashvani Launches Nationwide 'Signature Tune' and 'Jingle' Contests for 90th Anniversary",
    summary: "Prasar Bharati's Akashvani launched public creative contests under the theme 'Akashvani @90'.",
    whatHappened: "Akashvani (All India Radio), operating under Prasar Bharati in collaboration with MyGov, launched two nationwide public contests ('Signature Tune-Making' and 'Jingle-Making') centered around the theme “Akashvani @90 – The New Rhythm of Bharat” to mark its 90th anniversary.",
    importantPoints: [
      "Akashvani launched nationwide signature tune and jingle-making contests.",
      "Marked under the theme 'Akashvani @90 – The New Rhythm of Bharat'.",
      "Conducted in collaboration with MyGov to celebrate 90 years of broadcasting."
    ],
    examFacts: ["Organizer: Akashvani / Prasar Bharati", "Occasion: 90th Anniversary Contests"],
    quickRemember: "Akashvani launched nationwide public contests under 'Akashvani @90' for its 90th anniversary.",
    audioText: "Akashvani launched nationwide signature tune and jingle-making contests to mark its 90th anniversary.",
    source: "Prasar Bharati", importantFor: ["SSC CGL", "SSC CHSL"]
  }
];

const aprRecallQuestionsBatch3 = [
  {
    id: "REC-Q-APR-041", articleId: "REC-APR-041", category: "Governance & Census",
    question: "Phase I rollout of Census 2027 officially began on 1 April with the introduction of:",
    options: ["A biometric fingerprint scanning grid", "A digital self-enumeration portal and house-listing operations", "Geospatial drone mapping surveys", "Mandatory Aadhaar-linked household registries"],
    answer: 1, explanation: "Census 2027 Phase I began with a digital self-enumeration portal and house-listing operations."
  },
  {
    id: "REC-Q-APR-042", articleId: "REC-APR-042", category: "Economy & Energy",
    question: "According to the 33rd edition of the Energy Statistics India Report 2026 released by the NSO, India's total renewable energy potential is estimated at:",
    options: ["10 lakh MW", "25 lakh MW", "35 lakh MW", "47 lakh MW"],
    answer: 3, explanation: "The NSO report placed India's total renewable energy potential at 47 lakh MW, with solar accounting for ~71%."
  },
  {
    id: "REC-Q-APR-043", articleId: "REC-APR-043", category: "Environment & Conservation",
    question: "The 15th Conference of Parties (COP15) to the Convention on the Conservation of Migratory Species (CMS) concluded in which city?",
    options: ["Bonn, Germany", "Campo Grande, Brazil", "Nairobi, Kenya", "Montreal, Canada"],
    answer: 1, explanation: "CMS COP15 concluded in Campo Grande, Brazil, adding 40 species to protection appendices."
  },
  {
    id: "REC-Q-APR-044", articleId: "REC-APR-044", category: "State Governance & Environment",
    question: "Which Indian state became the first to implement Marine Spatial Planning (MSP) as a scientific ocean zoning framework?",
    options: ["Kerala", "Gujarat", "Odisha", "Tamil Nadu"],
    answer: 2, explanation: "Odisha became the first Indian state to implement Marine Spatial Planning to balance ecology and the blue economy."
  },
  {
    id: "REC-Q-APR-045", articleId: "REC-APR-045", category: "Science & Technology",
    question: "Proposed amendments to the IT Rules 2021 target which type of digital content to curb deepfakes and misinformation?",
    options: ["Encrypted peer-to-peer messaging attachments", "AI-generated and synthetic media content", "Algorithmic stock trading bots", "Decentralized crypto-wallet protocols"],
    answer: 1, explanation: "Proposed amendments to IT Rules 2021 require platforms to label AI-generated and synthetic content clearly."
  },
  {
    id: "REC-Q-APR-046", articleId: "REC-APR-046", category: "Economy & Business",
    question: "Rocklink India Private Limited inaugurated India's first integrated lithium-ion battery and rare earth magnet recycling facility in:",
    options: ["Sikandrabad, Uttar Pradesh", "Sriperumbudur, Tamil Nadu", "Sanand, Gujarat", "Pithampur, Madhya Pradesh"],
    answer: 0, explanation: "Rocklink India opened the recycling facility in Sikandrabad, Bulandshahr district, Uttar Pradesh."
  },
  {
    id: "REC-Q-APR-047", articleId: "REC-APR-047", category: "Economy & Commerce",
    question: "Union Minister Piyush Goyal launched 'Bharat Taxi' in Mumbai, which is India's first:",
    options: ["Drone-based medical delivery fleet", "Cooperative-led ride-hailing platform and driver onboarding program", "State-owned electric bus transit network", "Hydrogen-powered commercial cargo corridor"],
    answer: 1, explanation: "Bharat Taxi was launched in Mumbai as India's first cooperative-led ride-hailing and driver onboarding platform."
  },
  {
    id: "REC-Q-APR-048", articleId: "REC-APR-048", category: "Economy & Manufacturing",
    question: "Himadri Speciality Chemical Limited commissioned India's first commercial anode material production facility with an initial capacity of 200 MTPA in:",
    options: ["Hazira, Gujarat", "Mahistikry, West Bengal", "Paradip, Odisha", "Visakhapatnam, Andhra Pradesh"],
    answer: 1, explanation: "The facility was commissioned at Mahistikry, Hooghly, West Bengal, marking a major entry into EV anode production."
  },
  {
    id: "REC-Q-APR-049", articleId: "REC-APR-049", category: "Governance & Skill Development",
    question: "Union Minister Jayant Chaudhary launched Asia's first 'UNESCO Chair on Gender Inclusion and Skill Development' under the aegis of:",
    options: ["Ministry of Education", "Ministry of Skill Development and Entrepreneurship (MoSDE)", "Ministry of Women and Child Development", "Ministry of Culture"],
    answer: 1, explanation: "The chair was launched by MoSDE Minister Jayant Chaudhary in April 2026."
  },
  {
    id: "REC-Q-APR-050", articleId: "REC-APR-050", category: "Economy & Regulation",
    question: "The PROG Rules 2026 introduced by the central government govern which sector by establishing the OGAI?",
    options: ["Cryptocurrency exchanges", "Online gaming policy", "Artificial intelligence cloud providers", "Direct-to-consumer drone logistics"],
    answer: 1, explanation: "The PROG Rules 2026 regulate online gaming, permitting esports while banning money betting and establishing the OGAI."
  },
  {
    id: "REC-Q-APR-051", articleId: "REC-APR-051", category: "Supreme Court & Judiciary",
    question: "In a landmark ruling, the Supreme Court declared road safety an essential part of the Right to Life under which Constitutional Article?",
    options: ["Article 14", "Article 19", "Article 21", "Article 32"],
    answer: 2, explanation: "The Supreme Court declared road safety part of Article 21, invoking Article 142 for nationwide enforcement."
  },
  {
    id: "REC-Q-APR-052", articleId: "REC-APR-052", category: "Economy & Agriculture",
    question: "Under the Atmanirbhar Pulses Mission, the government launched a structured pulse procurement initiative while expanding PM-AASHA operations to:",
    options: ["Punjab", "Chhattisgarh", "Madhya Pradesh", "Rajasthan"],
    answer: 1, explanation: "PM-AASHA procurement operations expanded to Chhattisgarh alongside the new pulse procurement initiative."
  },
  {
    id: "REC-Q-APR-053", articleId: "REC-APR-053", category: "Language & Culture",
    question: "The Government of Meghalaya passed formal legislative measures to elevate the administrative and educational status of which regional languages?",
    options: ["Mizo and Kokborok", "Khasi and Garo", "Assamese and Manipuri", "Nagamese and Adi"],
    answer: 1, explanation: "Meghalaya officially elevated the recognition status of the Khasi and Garo languages."
  },
  {
    id: "REC-Q-APR-054", articleId: "REC-APR-054", category: "International Diplomacy",
    question: "The Indian Ocean Conference 2026 hosted in Mauritius centered around collective maritime stewardship under India's vision of:",
    options: ["MAHASAGAR", "SAGAR (Security and Growth for All in the Region)", "Indo-Pacific Oceans Initiative (IPOI)", "MAITREE"],
    answer: 1, explanation: "The conference highlighted maritime cooperation under India's SAGAR vision."
  },
  {
    id: "REC-Q-APR-055", articleId: "REC-APR-055", category: "Supreme Court & Education",
    question: "The Supreme Court upheld Section 12(1)(c) of the Right to Education Act, which mandates what percentage of reservation in private schools?",
    options: ["10%", "15%", "25%", "33%"],
    answer: 2, explanation: "The Supreme Court reaffirmed the mandatory 25% reservation for weaker sections in private unaided schools."
  },
  {
    id: "REC-Q-APR-056", articleId: "REC-APR-056", category: "Economy & Banking",
    question: "The Reserve Bank of India revoked the banking licence of Paytm Payments Bank Limited (PPBL) under which section of the Banking Regulation Act, 1949?",
    options: ["Section 10(2)", "Section 22(4)", "Section 35A", "Section 45"],
    answer: 1, explanation: "The RBI revoked PPBL's banking licence under Section 22(4) of the Banking Regulation Act due to non-compliance."
  },
  {
    id: "REC-Q-APR-057", articleId: "REC-APR-057", category: "Economy & Banking",
    question: "The RBI imposed a monetary penalty of ₹41.8 lakh on which major commercial bank for non-compliance with KYC guidelines?",
    options: ["Federal Bank", "Bandhan Bank", "IDFC First Bank", "RBL Bank"],
    answer: 1, explanation: "The RBI penalized Bandhan Bank ₹41.8 lakh for KYC and regulatory non-compliance."
  },
  {
    id: "REC-Q-APR-058", articleId: "REC-APR-058", category: "Think Tanks & Economy",
    question: "Who succeeded Suman Bery to take up the second-highest authority role in NITI Aayog directly under the Chairperson?",
    options: ["Dr. Arvind Panagariya", "Dr. Ashok Lahiri", "Montek Singh Ahluwalia", "Dr. Rajiv Kumar"],
    answer: 1, explanation: "Dr. Ashok Lahiri succeeded Suman Bery upon the completion of Bery's four-year tenure in NITI Aayog."
  },
  {
    id: "REC-Q-APR-059", articleId: "REC-APR-059", category: "Maritime & Education",
    question: "The Centre for Maritime Economy and Connectivity (CMEC) at RIS signed an MoU with which university to advance maritime education?",
    options: ["Jawaharlal Nehru University", "University of Delhi", "Jamia Millia Islamia", "IIT Madras"],
    answer: 1, explanation: "CMEC-RIS signed an MoU with the University of Delhi to strengthen maritime education and research."
  },
  {
    id: "REC-Q-APR-060", articleId: "REC-APR-060", category: "Broadcasting & Media",
    question: "Akashvani launched public contests for its 90th anniversary under which theme?",
    options: ["“Akashvani @90 – The New Rhythm of Bharat”", "“Voice of the Nation at 90”", "“Airwaves of Freedom and Unity”", "“Digital Soundscapes of Bharat”"],
    answer: 0, explanation: "Akashvani launched signature tune and jingle contests under the theme “Akashvani @90 – The New Rhythm of Bharat”."
  }
];

// 👉 PUSH DATA INTO GLOBAL ARRAYS
if (typeof hiddenRecallArticles !== 'undefined') {
  hiddenRecallArticles.push(...aprRecallArticlesBatch3);
}
if (typeof recallQuestionPool !== 'undefined') {
  recallQuestionPool.push(...aprRecallQuestionsBatch3);
}

/* ==========================================================================
   END OF APRIL BATCH 3
   ========================================================================== */

/* ==========================================================================
   APRIL 2026 - BATCH 4 (ITEMS 061 TO 080)
   ========================================================================== */

const aprRecallArticlesBatch4 = [
  {
    id: "REC-APR-061", date: "2026-04-01", month: "Apr 2026", category: "Science & Technology",
    title: "CSIR-IICT Develops High-Performance Catalyst for Sustainable Aviation Fuel",
    summary: "CSIR-IICT successfully formulated an advanced catalyst for converting industrial waste oils into net-zero aviation fuel.",
    whatHappened: "The CSIR-Indian Institute of Chemical Technology (IICT) developed a novel heterogeneous catalyst designed to process non-edible plant oils and used cooking fat into drop-in Sustainable Aviation Fuel (SAF) at commercial scale.",
    importantPoints: [
      "Heterogeneous catalyst developed by CSIR-IICT Hyderabad.",
      "Converts waste cooking fats and non-edible plant oils into drop-in SAF.",
      "Aims to curb carbon emissions across commercial airline sectors."
    ],
    examFacts: ["Institution: CSIR-IICT Hyderabad", "Innovation: Sustainable Aviation Fuel Catalyst"],
    quickRemember: "CSIR-IICT developed a high-performance catalyst for sustainable aviation fuel.",
    audioText: "CSIR-IICT successfully formulated an advanced catalyst for converting industrial waste oils into sustainable aviation fuel.",
    source: "CSIR", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-APR-062", date: "2026-04-02", month: "Apr 2026", category: "Economy & Infrastructure",
    title: "Inauguration of New Automated Air Traffic Control Complex in Chennai",
    summary: "A modern automated air traffic control complex was commissioned at Chennai International Airport.",
    whatHappened: "The Airports Authority of India (AAI) inaugurated a state-of-the-art automated Air Traffic Control (ATC) complex at Chennai International Airport, featuring advanced arrival sequencing tools and automated safety net alerts.",
    importantPoints: [
      "Automated ATC complex commissioned at Chennai International Airport.",
      "Features advanced arrival sequencing tools and collision-avoidance safety nets.",
      "Boosts flight handling capacity and regional airspace safety."
    ],
    examFacts: ["Facility: Automated ATC Complex", "Airport: Chennai International Airport"],
    quickRemember: "An advanced automated air traffic control complex was commissioned at Chennai Airport.",
    audioText: "A modern automated air traffic control complex was commissioned at Chennai International Airport.",
    source: "Ministry of Civil Aviation", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-APR-063", date: "2026-04-03", month: "Apr 2026", category: "Environment & Wildlife",
    title: "New Deep-Water Benthic Amphipod Species Discovered off Lakshadweep",
    summary: "Marine biologists formally described a new deep-sea amphipod crustacean species, *Quadrivisio lakshadweepensis*.",
    whatHappened: "Marine researchers from the Zoological Survey of India formally described a new species of benthic amphipod crustacean, named *Quadrivisio lakshadweepensis*, collected from submerged coral reef rubble zones around the Lakshadweep archipelago.",
    importantPoints: [
      "New deep-water benthic amphipod species named *Quadrivisio lakshadweepensis*.",
      "Discovered in coral reef benthic zones around the Lakshadweep archipelago.",
      "Enriches marine biodiversity documentation in Indian island territories."
    ],
    examFacts: ["Species: Quadrivisio lakshadweepensis", "Location: Lakshadweep Archipelago"],
    quickRemember: "A new deep-water benthic amphipod species was discovered off the Lakshadweep islands.",
    audioText: "Marine biologists described a new deep-water benthic amphipod species from the Lakshadweep archipelago.",
    source: "Zoological Survey of India", importantFor: ["SSC CGL", "State PCS"]
  },
  {
    id: "REC-APR-064", date: "2026-04-06", month: "Apr 2026", category: "Defence & Aerospace",
    title: "DRDO Successfully Flight-Tests Indigenous Light Weight Torpedo Systems",
    summary: "DRDO completed user validation flight trials of the advanced lightweight anti-submarine torpedo.",
    whatHappened: "The Defence Research and Development Organisation (DRDO) successfully completed user-acceptance firing trials of an advanced lightweight torpedo variant from an Indian Navy platform, validating acoustic homing algorithms in shallow waters.",
    importantPoints: [
      "Flight-tests of advanced lightweight torpedo systems completed successfully.",
      "Conducted jointly by DRDO and the Indian Navy.",
      "Validates shallow-water acoustic homing and target tracking capabilities."
    ],
    examFacts: ["Weapon: Advanced Lightweight Torpedo", "Agency: DRDO & Indian Navy"],
    quickRemember: "DRDO successfully flight-tested advanced lightweight anti-submarine torpedo systems.",
    audioText: "DRDO completed user validation flight trials of the advanced lightweight anti-submarine torpedo.",
    source: "Ministry of Defence", importantFor: ["CDS", "SSC CGL"]
  },
  {
    id: "REC-APR-065", date: "2026-04-07", month: "Apr 2026", category: "Government Schemes",
    title: "Ministry of Skill Development Launches 'PM Kaushal Vikas Yojana 4.0 Advanced Tech Wings'",
    summary: "The government integrated specialized training modules for quantum computing and EV architecture under PMKVY 4.0.",
    whatHappened: "The Ministry of Skill Development and Entrepreneurship rolled out specialized high-tech wings under PMKVY 4.0, introducing certified vocational modules in quantum computing maintenance, semiconductor packaging, and green energy grid management.",
    importantPoints: [
      "PMKVY 4.0 expanded with advanced tech training wings.",
      "Introduces vocational modules in quantum computing and semiconductor assembly.",
      "Aims to create a future-ready technical workforce across industrial clusters."
    ],
    examFacts: ["Scheme: PMKVY 4.0 Advanced Tech Wings", "Ministry: Skill Development"],
    quickRemember: "The government integrated quantum and semiconductor training wings under PMKVY 4.0.",
    audioText: "The Skill Development Ministry launched advanced tech wings under PMKVY 4.0 for futuristic skill training.",
    source: "Ministry of Skill Development", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-APR-066", date: "2026-04-08", month: "Apr 2026", category: "Economy & Banking",
    title: "RBI Directs Implementation of Automated Centralized Regulatory Reporting System",
    summary: "The Reserve Bank of India mandated an integrated digital architecture for automated bank compliance submissions.",
    whatHappened: "The Reserve Bank of India (RBI) issued a binding circular directing all scheduled commercial banks to migrate their statutory liquidity, reserve maintenance, and asset quality disclosures to an automated Centralized Regulatory Reporting System (CRRS).",
    importantPoints: [
      "Automated Centralized Regulatory Reporting System (CRRS) mandated by RBI.",
      "Streamlines statutory bank disclosures and financial data submissions.",
      "Replaces manual legacy reporting conduits with real-time API integrations."
    ],
    examFacts: ["Regulator: RBI", "System: Centralized Regulatory Reporting System (CRRS)"],
    quickRemember: "The RBI mandated an automated Centralized Regulatory Reporting System for commercial banks.",
    audioText: "The Reserve Bank of India directed the implementation of an automated Centralized Regulatory Reporting System.",
    source: "RBI", importantFor: ["Bank PO", "SSC CGL"]
  },
  {
    id: "REC-APR-067", date: "2026-04-09", month: "Apr 2026", category: "Science & Technology",
    title: "IIT Roorkee Develops Low-Cost Biodegradable Packaging Film from Pine Needle Waste",
    summary: "Engineers at IIT Roorkee engineered high-strength packaging materials using Himalayan pine needle debris.",
    whatHappened: "Researchers at IIT Roorkee successfully synthesized a durable, compostable packaging film extracted from abundant Himalayan pine needle waste, offering a dual solution to seasonal forest fire hazards and single-use plastic pollution.",
    importantPoints: [
      "Biodegradable packaging film developed by IIT Roorkee.",
      "Extracted from seasonal Himalayan pine needle waste debris.",
      "Combats forest fire fuel loads while replacing commercial plastic wraps."
    ],
    examFacts: ["Innovation: Pine Needle Biodegradable Film", "Institute: IIT Roorkee"],
    quickRemember: "IIT Roorkee developed a biodegradable packaging film from Himalayan pine needle waste.",
    audioText: "Engineers at IIT Roorkee engineered high-strength packaging materials using Himalayan pine needle waste.",
    source: "IIT Roorkee", importantFor: ["SSC CGL", "State PCS"]
  },
  {
    id: "REC-APR-068", date: "2026-04-10", month: "Apr 2026", category: "International Affairs",
    title: "India and France Sign Strategic Cyber Defence Framework Agreement",
    summary: "New Delhi and Paris executed a bilateral pact to strengthen joint cyber incident response and threat intelligence.",
    whatHappened: "India and France signed a comprehensive Strategic Cyber Defence Framework agreement in Paris, establishing secure channels for real-time malware analysis, critical infrastructure protection drills, and joint counter-ransomware operations.",
    importantPoints: [
      "Strategic Cyber Defence Framework signed between India and France.",
      "Signed in Paris during bilateral security consultations.",
      "Establishes real-time threat intelligence sharing and critical asset defense."
    ],
    examFacts: ["Partners: India and France", "Agreement: Strategic Cyber Defence Framework"],
    quickRemember: "India and France signed a Strategic Cyber Defence Framework agreement in Paris.",
    audioText: "India and France signed a strategic cyber defence framework agreement to strengthen threat intelligence sharing.",
    source: "MEA", importantFor: ["UPSC", "SSC CGL", "CDS"]
  },
  {
    id: "REC-APR-069", date: "2026-04-13", month: "Apr 2026", category: "Environment & Forests",
    title: "MoEFCC Launches 'National Elephant Corridor Verification Portal'",
    summary: "The Environment Ministry deployed a GIS-mapped digital portal to track and protect traditional elephant pathways.",
    whatHappened: "The Ministry of Environment, Forest and Climate Change launched the 'National Elephant Corridor Verification Portal', a GIS-integrated platform tracking human-wildlife conflict zones, mining clearances, and linear infrastructure intrusions across elephant passages.",
    importantPoints: [
      "National Elephant Corridor Verification Portal launched by MoEFCC.",
      "GIS-integrated platform tracking traditional elephant migration pathways.",
      "Aims to mitigate human-elephant conflict and safeguard vital corridors."
    ],
    examFacts: ["Portal: National Elephant Corridor Verification Portal", "Ministry: MoEFCC"],
    quickRemember: "MoEFCC launched a GIS-mapped portal to verify and protect traditional elephant corridors.",
    audioText: "The Environment Ministry deployed a GIS-mapped digital portal to track and protect traditional elephant pathways.",
    source: "MoEFCC", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-APR-070", date: "2026-04-15", month: "Apr 2026", category: "Sports & Athletics",
    title: "Saurav Ghosal Wins Gold at International Squash Invitational",
    summary: "Veteran Indian squash player Saurav Ghosal clinched the singles title at a premier international invitational.",
    whatHappened: "Veteran Indian squash maestro Saurav Ghosal displayed exceptional court craft to secure the gold medal in the men's singles category at an elite international squash invitational tournament, outclassing top-seeded global rivals.",
    importantPoints: [
      "Saurav Ghosal won gold at an international squash invitational.",
      "Discipline: Men's Squash Singles.",
      "Demonstrated enduring dominance and tactical brilliance."
    ],
    examFacts: ["Athlete: Saurav Ghosal", "Sport: Squash", "Medal: Gold"],
    quickRemember: "Squash maestro Saurav Ghosal won the gold medal at an international invitational tournament.",
    audioText: "Veteran Indian squash player Saurav Ghosal clinched the singles title at a premier international invitational.",
    source: "Squash Rackets Federation of India", importantFor: ["SSC CGL", "SSC CHSL"]
  },
  {
    id: "REC-APR-071", date: "2026-04-16", month: "Apr 2026", category: "Science & Technology",
    title: "IISc Bengaluru Develops Low-Cost Quantum Random Number Generator Chip",
    summary: "Researchers at IISc engineered a micro-chip producing true quantum randomness for cryptographic security.",
    whatHappened: "Scientists at the Indian Institute of Science (IISc) Bengaluru successfully fabricated a miniature Quantum Random Number Generator (QRNG) chip utilizing optical quantum vacuum fluctuations, providing absolute unhackable cryptographic keys for secure communications.",
    importantPoints: [
      "Quantum Random Number Generator (QRNG) chip developed by IISc Bengaluru.",
      "Generates true random numbers using optical quantum vacuum fluctuations.",
      "Secures encryption keys against advanced quantum computing decryption attacks."
    ],
    examFacts: ["Innovation: QRNG Micro-Chip", "Institute: IISc Bengaluru"],
    quickRemember: "IISc Bengaluru developed a low-cost quantum random number generator chip for cryptographic security.",
    audioText: "Researchers at IISc engineered a micro-chip producing true quantum randomness for cryptographic security.",
    source: "IISc", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-APR-072", date: "2026-04-17", month: "Apr 2026", category: "Economy & Infrastructure",
    title: "Inauguration of New Integrated International Cargo Hub in Nagpur",
    summary: "A central multi-modal cargo hub equipped with automated cold storage was commissioned at Nagpur Airport.",
    whatHappened: "An expansive integrated international cargo hub equipped with automated cold-storage facilities and direct air-to-road transfer bays was inaugurated at Dr. Babasaheb Ambedkar International Airport in Nagpur, Maharashtra.",
    importantPoints: [
      "Integrated international cargo hub inaugurated at Nagpur Airport.",
      "Equipped with automated cold storage and direct transfer bays.",
      "Serves as a central logistics nexus for central Indian manufacturing."
    ],
    examFacts: ["Facility: Integrated Cargo Hub", "Airport: Nagpur Airport, Maharashtra"],
    quickRemember: "A new integrated international cargo hub was inaugurated at Nagpur Airport.",
    audioText: "A central multi-modal cargo hub equipped with automated cold storage was commissioned at Nagpur Airport.",
    source: "Ministry of Civil Aviation", importantFor: ["SSC CGL", "State PCS"]
  },
  {
    id: "REC-APR-073", date: "2026-04-20", month: "Apr 2026", category: "International Affairs",
    title: "India Elected to Executive Board of UNICEF",
    summary: "India secured a prestigious three-year term on the UNICEF Executive Board during meetings at UN Headquarters.",
    whatHappened: "India was successfully elected to the Executive Board of the United Nations Children's Fund (UNICEF) during organizational elections held at UN Headquarters in New York, reinforcing its leadership role in global child welfare and nutrition policy.",
    importantPoints: [
      "India elected to the Executive Board of UNICEF.",
      "Elections held at UN Headquarters in New York.",
      "Reinforces India's commitment to global child health, education, and protection."
    ],
    examFacts: ["Body: UNICEF Executive Board", "Location: New York"],
    quickRemember: "India was elected to the Executive Board of UNICEF at UN Headquarters in New York.",
    audioText: "India secured a prestigious three-year term on the UNICEF Executive Board during meetings at UN Headquarters.",
    source: "MEA", importantFor: ["UPSC", "SSC CGL"]
  },
  {
    id: "REC-APR-074", date: "2026-04-21", month: "Apr 2026", category: "Government Schemes",
    title: "Ministry of Health Launches 'National Digital Health Registry for Rare Diseases'",
    summary: "A centralized cloud health ledger was operationalized to track specialized rare disease treatment pathways.",
    whatHappened: "The Ministry of Health and Family Welfare operationalized the 'National Digital Health Registry for Rare Diseases', integrating specialized clinical centers of excellence to streamline financial assistance and drug supply tracking for registered patients.",
    importantPoints: [
      "National Digital Health Registry for Rare Diseases launched by Ministry of Health.",
      "Integrates specialized clinical centers of excellence into a unified ledger.",
      "Streamlines financial assistance disbursements and specialized drug supply chains."
    ],
    examFacts: ["Platform: National Digital Health Registry for Rare Diseases", "Ministry: Health & Family Welfare"],
    quickRemember: "The Health Ministry launched the National Digital Health Registry for Rare Diseases.",
    audioText: "The Ministry of Health operationalized a centralized cloud health ledger to track rare disease treatment pathways.",
    source: "MoHFW", importantFor: ["SSC CGL", "State PCS"]
  },
  {
    id: "REC-APR-075", date: "2026-04-22", month: "Apr 2026", category: "Defence & Aerospace",
    title: "Indian Navy Successfully Flight-Tests Indigenous Naval Cruise Missile System",
    summary: "The Indian Navy and DRDO validated advanced sea-skimming trajectories for the indigenous naval cruise missile.",
    whatHappened: "The Indian Navy and DRDO successfully completed high-precision flight trials of the indigenous naval cruise missile from a guided-missile destroyer off the western coast, verifying complex waypoint navigation and terminal engagement maneuvers.",
    importantPoints: [
      "Flight-test trials of the indigenous naval cruise missile completed successfully.",
      "Fired from an Indian Navy guided-missile destroyer.",
      "Verifies complex waypoint navigation and precision terminal guidance."
    ],
    examFacts: ["Weapon: Indigenous Naval Cruise Missile", "Agency: DRDO & Indian Navy"],
    quickRemember: "The Indian Navy and DRDO successfully flight-tested an indigenous naval cruise missile system.",
    audioText: "The Indian Navy and DRDO validated advanced sea-skimming trajectories for the indigenous naval cruise missile.",
    source: "Ministry of Defence", importantFor: ["CDS", "SSC CGL"]
  },
  {
    id: "REC-APR-076", date: "2026-04-23", month: "Apr 2026", category: "Economy & Trade",
    title: "India and Oman Conclude Bilateral Free Trade Agreement Negotiations",
    summary: "New Delhi and Muscat finalized text agreements on the India-Oman Comprehensive Economic Partnership.",
    whatHappened: "Trade negotiating teams from India and the Sultanate of Oman successfully concluded all chapters of their bilateral Comprehensive Economic Partnership Agreement (CEPA), securing duty-free market access across thousands of tariff lines.",
    importantPoints: [
      "India-Oman Comprehensive Economic Partnership Agreement (CEPA) finalized.",
      "Secures duty-free market access across thousands of industrial and agricultural lines.",
      "Deepens strategic and commercial integration in the Gulf region."
    ],
    examFacts: ["Partners: India and Oman", "Agreement: CEPA Finalized"],
    quickRemember: "India and Oman concluded negotiations for their Comprehensive Economic Partnership Agreement.",
    audioText: "India and Oman finalized text agreements on their bilateral Comprehensive Economic Partnership.",
    source: "Ministry of Commerce", importantFor: ["UPSC", "SSC CGL", "Bank PO"]
  },
  {
    id: "REC-APR-077", date: "2026-04-24", month: "Apr 2026", category: "Science & Space",
    title: "ISRO Successfully Completes Environmental Testing of Aditya-L1 Solar Coronagraph",
    summary: "ISRO validated optical stability parameters for specialized solar observation instruments.",
    whatHappened: "ISRO successfully completed post-deployment calibration and thermal stress validation tests on specialized optical components of the Aditya-L1 solar observation payload, ensuring enduring space-weather imaging fidelity.",
    importantPoints: [
      "Thermal stress and calibration tests completed on Aditya-L1 payload components.",
      "Conducted at ISRO testing facilities in Bengaluru.",
      "Ensures enduring space-weather imaging and solar flare tracking fidelity."
    ],
    examFacts: ["Mission: Aditya-L1 Solar Observatory", "Agency: ISRO"],
    quickRemember: "ISRO completed environmental testing on specialized solar observation instruments for Aditya-L1.",
    audioText: "ISRO successfully completed environmental testing of the Aditya-L1 solar coronagraph instruments.",
    source: "ISRO", importantFor: ["SSC CGL", "UPSC", "CDS"]
  },
  {
    id: "REC-APR-078", date: "2026-04-27", month: "Apr 2026", category: "Environment & Energy",
    title: "NTPC Commissions India's First Commercial Offshore Floating Solar Plant",
    summary: "NTPC operationalized an advanced marine floating solar photovoltaic installation off the Gujarat coast.",
    whatHappened: "NTPC Limited successfully commissioned India's first commercial-scale offshore floating solar photovoltaic plant in coastal marine waters off the Gulf of Khambhat in Gujarat, testing structural resilience against high tidal wave action.",
    importantPoints: [
      "India's first commercial offshore floating solar plant commissioned by NTPC.",
      "Located in coastal marine waters of the Gulf of Khambhat, Gujarat.",
      "Tests structural durability against tidal currents and high-salinity corrosion."
    ],
    examFacts: ["Company: NTPC", "Facility: Offshore Floating Solar Plant", "Location: Gulf of Khambhat, Gujarat"],
    quickRemember: "NTPC commissioned India's first commercial offshore floating solar plant in Gujarat.",
    audioText: "NTPC operationalized an advanced marine floating solar photovoltaic installation off the Gujarat coast.",
    source: "Ministry of Power", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-APR-079", date: "2026-04-28", month: "Apr 2026", category: "National Security",
    title: "Ministry of Home Affairs Deploys Automated National Counter-Terrorism Intelligence Grid",
    summary: "MHA integrated multi-agency counter-terrorism databases into a unified real-time analytics network.",
    whatHappened: "The Ministry of Home Affairs deployed the Automated National Counter-Terrorism Intelligence Grid, linking state intelligence inputs, border surveillance feeds, and financial AML tracking data into a secure real-time operational dashboard.",
    importantPoints: [
      "Automated National Counter-Terrorism Intelligence Grid deployed by MHA.",
      "Integrates state intelligence, border feeds, and financial tracking data.",
      "Enhances proactive threat interception across law enforcement agencies."
    ],
    examFacts: ["System: Counter-Terrorism Intelligence Grid", "Ministry: Ministry of Home Affairs"],
    quickRemember: "MHA deployed an automated National Counter-Terrorism Intelligence Grid for real-time threat analysis.",
    audioText: "The Home Ministry integrated multi-agency counter-terrorism databases into a unified real-time analytics network.",
    source: "Ministry of Home Affairs", importantFor: ["SSC CGL", "UPSC", "CDS"]
  },
  {
    id: "REC-APR-080", date: "2026-04-29", month: "Apr 2026", category: "Economy & Agriculture",
    title: "NABARD Sanctions ₹14,000 Crore Rural Digital Land Registry Fund",
    summary: "NABARD approved a dedicated financial package to support states in upgrading cadastral maps and survey records.",
    whatHappened: "NABARD approved the sanction of a ₹14,000 crore specialized fund dedicated to assisting state governments in digitizing cadastral survey maps, integrating textual records of rights, and establishing georeferenced land parcels for secure agricultural credit.",
    importantPoints: [
      "₹14,000 crore Rural Digital Land Registry Fund approved by NABARD.",
      "Assists states in digitizing cadastral maps and georeferencing land parcels.",
      "Aims to streamline agricultural credit access and eliminate property title disputes."
    ],
    examFacts: ["Institution: NABARD", "Fund: Rural Digital Land Registry Fund", "Allocation: ₹14,000 Crore"],
    quickRemember: "NABARD sanctioned a ₹14,000 crore fund to help states digitize rural land registries and cadastral maps.",
    audioText: "NABARD approved a fourteen thousand crore rupee financial package to support states in upgrading cadastral maps.",
    source: "NABARD", importantFor: ["Bank PO", "SSC CGL", "UPSC"]
  }
];

const aprRecallQuestionsBatch4 = [
  {
    id: "REC-Q-APR-061", articleId: "REC-APR-061", category: "Science & Technology",
    question: "The CSIR-Indian Institute of Chemical Technology developed a novel heterogeneous catalyst designed to process non-edible plant oils and used cooking fat into:",
    options: ["Synthetic jet kerosene", "Drop-in Sustainable Aviation Fuel (SAF)", "Polycarbonate bio-plastics", "Liquid anhydrous ammonia"],
    answer: 1, explanation: "CSIR-IICT developed a heterogeneous catalyst that converts industrial waste oils and cooking fats into Sustainable Aviation Fuel (SAF)."
  },
  {
    id: "REC-Q-APR-062", articleId: "REC-APR-062", category: "Economy & Infrastructure",
    question: "The Airports Authority of India commissioned a state-of-the-art automated Air Traffic Control complex featuring advanced arrival sequencing tools at the airport in:",
    options: ["New Delhi", "Bengaluru", "Chennai", "Kolkata"],
    answer: 2, explanation: "An automated Air Traffic Control complex featuring arrival sequencing tools was commissioned at Chennai International Airport."
  },
  {
    id: "REC-Q-APR-063", articleId: "REC-APR-063", category: "Environment & Wildlife",
    question: "Marine researchers from the Zoological Survey of India formally described a new species of benthic amphipod crustacean named *Quadrivisio lakshadweepensis* discovered around:",
    options: ["The Andaman Islands", "The Lakshadweep archipelago", "The Nicobar barrier reefs", "The Gulf of Mannar coral banks"],
    answer: 1, explanation: "Quadrivisio lakshadweepensis is a new benthic amphipod crustacean species collected from coral reef rubble zones around the Lakshadweep archipelago."
  },
  {
    id: "REC-Q-APR-064", articleId: "REC-APR-064", category: "Defence & Aerospace",
    question: "The DRDO and the Indian Navy successfully completed user-acceptance firing trials of an advanced lightweight torpedo variant, validating:",
    options: ["Deep-submergence pressure hull seals", "Shallow-water acoustic homing and target tracking capabilities", "Supersonic underwater rocket booster staging", "Electromagnetic pulse torpedo warheads"],
    answer: 1, explanation: "The lightweight torpedo trials validated acoustic homing and target tracking capabilities in shallow waters."
  },
  {
    id: "REC-Q-APR-065", articleId: "REC-APR-065", category: "Government Schemes",
    question: "The Ministry of Skill Development and Entrepreneurship rolled out specialized high-tech wings under PMKVY 4.0 introducing certified vocational modules in:",
    options: ["Quantum computing maintenance and semiconductor packaging", "Traditional bamboo craft weaving design", "Organic vermicomposting laboratory testing", "Solar-powered textile loom operations"],
    answer: 0, explanation: "PMKVY 4.0 introduced specialized vocational modules in quantum computing maintenance, semiconductor packaging, and green energy management."
  },
  {
    id: "REC-Q-APR-066", articleId: "REC-APR-066", category: "Economy & Banking",
    question: "The Reserve Bank of India issued a binding circular directing scheduled commercial banks to migrate statutory disclosures to an automated:",
    options: ["Centralized Regulatory Reporting System (CRRS)", "Unified Liquidity Management Ledger", "Cross-Border Remittance Clearing Grid", "Real-Time Fraud Interception Switch"],
    answer: 0, explanation: "The RBI mandated migration to an automated Centralized Regulatory Reporting System (CRRS) for statutory bank disclosures."
  },
  {
    id: "REC-Q-APR-067", articleId: "REC-APR-067", category: "Science & Technology",
    question: "Researchers at IIT Roorkee successfully synthesized a durable, compostable packaging film extracted from abundant:",
    options: ["Rice straw biomass", "Himalayan pine needle waste", "Water hyacinth aquatic fibers", "Bagasse sugarcane pith"],
    answer: 1, explanation: "IIT Roorkee engineered high-strength biodegradable packaging films extracted from abundant Himalayan pine needle waste."
  },
  {
    id: "REC-Q-APR-068", articleId: "REC-APR-068", category: "International Affairs",
    question: "India and France signed a comprehensive Strategic Cyber Defence Framework agreement in Paris establishing secure channels for:",
    options: ["Quantum key distribution satellite links", "Real-time malware analysis and critical infrastructure protection drills", "Dark web cryptocurrency transaction tracking", "Encrypted diplomatic cable routing"],
    answer: 1, explanation: "The Strategic Cyber Defence Framework establishes secure channels for real-time malware analysis and critical infrastructure protection drills."
  },
  {
    id: "REC-Q-APR-069", articleId: "REC-APR-069", category: "Environment & Forests",
    question: "The Ministry of Environment launched the 'National Elephant Corridor Verification Portal' as a GIS-integrated platform to track:",
    options: ["Poaching syndicate communication intercepts", "Traditional elephant migration pathways and human-wildlife conflict zones", "Reserved forest timber boundary demarcations", "Protected elephant ivory stock vaults"],
    answer: 1, explanation: "The portal tracks human-wildlife conflict zones, mining clearances, and linear infrastructure intrusions across traditional elephant passages."
  },
  {
    id: "REC-Q-APR-070", articleId: "REC-APR-070", category: "Sports & Athletics",
    question: "Veteran Indian squash maestro Saurav Ghosal secured the gold medal in the men's singles category at:",
    options: ["The Asian Squash Championship", "An elite international squash invitational tournament", "The Commonwealth Invitational Cup", "The World Games Squash Circuit"],
    answer: 1, explanation: "Saurav Ghosal secured the gold medal in the men's singles category at a premier international squash invitational tournament."
  },
  {
    id: "REC-Q-APR-071", articleId: "REC-APR-071", category: "Science & Technology",
    question: "Scientists at the Indian Institute of Science Bengaluru fabricated a miniature Quantum Random Number Generator (QRNG) chip utilizing:",
    options: ["Superconducting tunnel junctions", "Optical quantum vacuum fluctuations", "Atomic Bose-Einstein condensates", "Silicon photonic ring resonators"],
    answer: 1, explanation: "The QRNG micro-chip utilizes optical quantum vacuum fluctuations to generate true random numbers for cryptographic security."
  },
  {
    id: "REC-Q-APR-072", articleId: "REC-APR-072", category: "Economy & Infrastructure",
    question: "An expansive integrated international cargo hub equipped with automated cold-storage facilities was inaugurated at Dr. Babasaheb Ambedkar International Airport in:",
    options: ["Indore, Madhya Pradesh", "Nagpur, Maharashtra", "Raipur, Chhattisgarh", "Bhopal, Madhya Pradesh"],
    answer: 1, explanation: "An integrated cargo hub was inaugurated at Dr. Babasaheb Ambedkar International Airport in Nagpur, Maharashtra."
  },
  {
    id: "REC-Q-APR-073", articleId: "REC-APR-073", category: "International Affairs",
    question: "India was successfully elected to the Executive Board of the United Nations Children's Fund during organizational elections held at:",
    options: ["UN Headquarters in New York", "UNESCO Headquarters in Paris", "UN Office in Geneva", "UN Environment Programme HQ in Nairobi"],
    answer: 0, explanation: "India was elected to the Executive Board of UNICEF during organizational elections held at UN Headquarters in New York."
  },
  {
    id: "REC-Q-APR-074", articleId: "REC-APR-074", category: "Government Schemes",
    question: "The Ministry of Health and Family Welfare operationalized the 'National Digital Health Registry for Rare Diseases' to integrate:",
    options: ["Pharmaceutical clinical trial volunteers", "Specialized clinical centers of excellence into a unified ledger", "Global rare disease diagnostic laboratories", "Orphan drug patent licensing agreements"],
    answer: 1, explanation: "The registry integrates specialized clinical centers of excellence to streamline financial assistance and drug supply tracking for rare diseases."
  },
  {
    id: "REC-Q-APR-075", articleId: "REC-APR-075", category: "Defence & Aerospace",
    question: "The Indian Navy and DRDO completed high-precision flight trials of the indigenous naval cruise missile from a guided-missile destroyer off the:",
    options: ["Eastern seaboard in the Bay of Bengal", "Western coast, verifying waypoint navigation", "Andaman and Nicobar island command waters", "Southern tip near Cape Comorin"],
    answer: 1, explanation: "The naval cruise missile trials were conducted from a guided-missile destroyer off the western coast, verifying waypoint navigation and terminal guidance."
  },
  {
    id: "REC-Q-APR-076", articleId: "REC-APR-076", category: "Economy & Trade",
    question: "Trade negotiating teams from India and the Sultanate of Oman concluded all chapters of their bilateral:",
    options: ["Digital Economy Partnership Accord", "Comprehensive Economic Partnership Agreement (CEPA)", "Critical Minerals Exploratory Framework", "Maritime Transport and Logistics Treaty"],
    answer: 1, explanation: "India and Oman concluded their Comprehensive Economic Partnership Agreement (CEPA), securing duty-free market access."
  },
  {
    id: "REC-Q-APR-077", articleId: "REC-APR-077", category: "Science & Space",
    question: "ISRO completed post-deployment calibration and thermal stress validation tests on specialized optical components of which solar observation payload?",
    options: ["Chandrayaan-3 Rover Spectroscope", "Aditya-L1 solar observation payload", "Xosat Polarimeter instrument", "Astrosat Ultraviolet Imaging Telescope"],
    answer: 1, explanation: "ISRO completed thermal stress validation tests on specialized optical components of the Aditya-L1 solar observation payload."
  },
  {
    id: "REC-Q-APR-078", articleId: "REC-APR-078", category: "Environment & Energy",
    question: "NTPC Limited successfully commissioned India's first commercial-scale offshore floating solar photovoltaic plant in coastal marine waters off the:",
    options: ["Gulf of Kutch, Gujarat", "Gulf of Khambhat, Gujarat", "Palk Bay, Tamil Nadu", "Sundarbans Estuary, West Bengal"],
    answer: 1, explanation: "NTPC commissioned India's first commercial offshore floating solar plant in coastal marine waters off the Gulf of Khambhat in Gujarat."
  },
  {
    id: "REC-Q-APR-079", articleId: "REC-APR-079", category: "National Security",
    question: "The Ministry of Home Affairs deployed the Automated National Counter-Terrorism Intelligence Grid, linking state intelligence inputs, border feeds, and:",
    options: ["Cryptocurrency exchange dark-pool logs", "Financial AML tracking data into a secure real-time operational dashboard", "Cell tower triangulation metadata archives", "Encrypted satellite communications intercept feeds"],
    answer: 1, explanation: "The intelligence grid links state intelligence inputs, border surveillance feeds, and financial AML tracking data into a secure operational dashboard."
  },
  {
    id: "REC-Q-APR-080", articleId: "REC-APR-080", category: "Economy & Agriculture",
    question: "NABARD approved the sanction of a ₹14,000 crore specialized fund dedicated to assisting state governments in digitizing:",
    options: ["Primary Agricultural Credit Society micro-ATMs", "Cadastral survey maps and georeferenced land parcels", "Cold-chain warehouse temperature logs", "Pesticide residue testing laboratory networks"],
    answer: 1, explanation: "The ₹14,000 crore Rural Digital Land Registry Fund assists states in digitizing cadastral survey maps and establishing georeferenced land parcels."
  }
];

// 👉 PUSH DATA INTO GLOBAL ARRAYS
if (typeof hiddenRecallArticles !== 'undefined') {
  hiddenRecallArticles.push(...aprRecallArticlesBatch4);
}
if (typeof recallQuestionPool !== 'undefined') {
  recallQuestionPool.push(...aprRecallQuestionsBatch4);
}

/* ==========================================================================
   END OF APRIL BATCH 4
   ========================================================================== */
/* ==========================================================================
   APRIL 2026 - BATCH 5 (ITEMS 081 TO 100) - FINAL APRIL BATCH
   ========================================================================== */

const aprRecallArticlesBatch5 = [
  {
    id: "REC-APR-081", date: "2026-04-01", month: "Apr 2026", category: "Science & Technology",
    title: "CSIR-IICT Develops Advanced Catalytic System for Green Hydrogen",
    summary: "CSIR-IICT engineered a breakthrough electrocatalyst to maximize green hydrogen yield via water splitting.",
    whatHappened: "The CSIR-Indian Institute of Chemical Technology (IICT) formulated a low-cost, earth-abundant nickel-iron layered double hydroxide electrocatalyst that drastically enhances hydrogen evolution reaction kinetics during industrial alkaline water electrolysis.",
    importantPoints: [
      "Advanced nickel-iron electrocatalyst developed by CSIR-IICT.",
      "Accelerates water splitting efficiency for low-cost green hydrogen production.",
      "Eliminates dependency on precious platinum-group metal catalysts."
    ],
    examFacts: ["Institution: CSIR-IICT Hyderabad", "Innovation: Nickel-Iron Water Splitting Catalyst"],
    quickRemember: "CSIR-IICT developed a low-cost nickel-iron electrocatalyst to scale up green hydrogen production.",
    audioText: "CSIR-IICT engineered an advanced electrocatalyst to maximize green hydrogen yield via water splitting.",
    source: "CSIR", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-APR-082", date: "2026-04-03", month: "Apr 2026", category: "Economy & Infrastructure",
    title: "Inauguration of New Automated Multi-Modal Inland Waterway Terminal in Varanasi",
    summary: "A modern automated cargo handling terminal was commissioned along National Waterway-1 on the Ganga River.",
    whatHappened: "The Inland Waterways Authority of India (IWAI) commissioned an advanced automated cargo handling terminal along National Waterway-1 (River Ganga) in Varanasi, featuring high-speed gantry cranes and direct multi-modal rail connectivity.",
    importantPoints: [
      "Automated cargo terminal commissioned on National Waterway-1 (River Ganga) in Varanasi.",
      "Features high-speed gantry cranes and direct rail connections.",
      "Boosts cargo throughput and green freight transport along eastern corridors."
    ],
    examFacts: ["Facility: Automated Inland Waterway Terminal", "Location: Varanasi, UP", "Waterway: NW-1 (Ganga)"],
    quickRemember: "An automated multi-modal inland waterway terminal was commissioned along the Ganga River in Varanasi.",
    audioText: "A modern automated cargo handling terminal was commissioned along National Waterway-1 on the Ganga River.",
    source: "IWAI / Ministry of Ports", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-APR-083", date: "2026-04-06", month: "Apr 2026", category: "Environment & Wildlife",
    title: "New Deep-Water Benthic Crustacean Species Discovered off Odisha Coast",
    summary: "Marine biologists formally described a new deep-sea crab species, *Albunea odishaensis*, from bathyal trawls.",
    whatHappened: "Researchers from the Zoological Survey of India formally described a new species of sand crab belonging to the family Albuneidae, named *Albunea odishaensis*, collected from deep benthic trawl surveys off the Paradip coast in Odisha.",
    importantPoints: [
      "New deep-water sand crab species named *Albunea odishaensis*.",
      "Discovered from bathyal trawl surveys off the Paradip coast, Odisha.",
      "Expands India's benthic marine crustacean taxonomy."
    ],
    examFacts: ["Species: Albunea odishaensis", "Location: Off Paradip Coast, Odisha"],
    quickRemember: "A new deep-water sand crab species, Albunea odishaensis, was discovered off the Odisha coast.",
    audioText: "Marine biologists described a new deep-sea crustacean species named Albunea odishaensis off the Odisha coast.",
    source: "Zoological Survey of India", importantFor: ["SSC CGL", "State PCS"]
  },
  {
    id: "REC-APR-084", date: "2026-04-07", month: "Apr 2026", category: "Defence & Aerospace",
    title: "DRDO Successfully Flight-Tests Indigenous Extended-Range Anti-Submarine Rocket",
    summary: "DRDO and the Indian Navy validated extended-range targeting parameters for submarine-hunting rockets.",
    whatHappened: "The Defence Research and Development Organisation (DRDO) and the Indian Navy successfully completed developmental flight trials of the extended-range version of the indigenous Anti-Submarine Rocket (ASR) system from a warship platform, expanding engagement zones.",
    importantPoints: [
      "Flight tests of the extended-range Anti-Submarine Rocket (ASR) completed successfully.",
      "Fired from an Indian Navy frontline warship.",
      "Expands the tactical engagement zone against hostile underwater submarines."
    ],
    examFacts: ["Weapon: Extended-Range Anti-Submarine Rocket", "Agency: DRDO & Indian Navy"],
    quickRemember: "DRDO and the Indian Navy successfully flight-tested an extended-range anti-submarine rocket system.",
    audioText: "DRDO and the Indian Navy validated extended-range targeting parameters for submarine-hunting rockets.",
    source: "Ministry of Defence", importantFor: ["CDS", "SSC CGL"]
  },
  {
    id: "REC-APR-085", date: "2026-04-08", month: "Apr 2026", category: "Government Schemes",
    title: "Ministry of Skill Development Launches 'Pradhan Mantri National Apprenticeship Training Portal 3.0'",
    summary: "An upgraded digital apprenticeship matching portal was rolled out to connect engineering graduates with industries.",
    whatHappened: "The Ministry of Skill Development and Entrepreneurship launched Portal 3.0 of the National Apprenticeship Training Scheme (NATS), integrating AI-driven candidate profiling and automated stipend direct-benefit transfers across manufacturing sectors.",
    importantPoints: [
      "NATS Portal 3.0 launched by the Ministry of Skill Development.",
      "Integrates AI-driven candidate matching and automated stipend DBT.",
      "Expands practical industrial apprenticeship opportunities for youth."
    ],
    examFacts: ["Portal: NATS Portal 3.0", "Ministry: Skill Development"],
    quickRemember: "The Skill Development Ministry launched NATS Portal 3.0 for automated apprenticeship matching.",
    audioText: "The Skill Development Ministry rolled out an upgraded digital apprenticeship matching portal.",
    source: "Ministry of Skill Development", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-APR-086", date: "2026-04-09", month: "Apr 2026", category: "Economy & Banking",
    title: "RBI Mandates Automated Liquidity Stress Testing Framework for NBFCs",
    summary: "The Reserve Bank of India enforced strict automated liquidity simulation tools for top-tier non-banking financiers.",
    whatHappened: "The Reserve Bank of India (RBI) issued a regulatory mandate requiring all top-layer and upper-layer Non-Banking Financial Companies (NBFCs) to implement automated daily liquidity stress-testing models to simulate cash-flow crunches under severe market shocks.",
    importantPoints: [
      "Automated daily liquidity stress testing mandated by RBI for top-tier NBFCs.",
      "Simulates sudden cash-flow crunches and wholesale funding withdrawals.",
      "Enhances macro-prudential surveillance across shadow banking sectors."
    ],
    examFacts: ["Regulator: RBI", "Focus: NBFC Liquidity Stress Testing"],
    quickRemember: "The RBI mandated automated daily liquidity stress testing models for top-tier NBFCs.",
    audioText: "The Reserve Bank of India enforced strict automated liquidity simulation tools for top-tier non-banking financiers.",
    source: "RBI", importantFor: ["Bank PO", "SSC CGL"]
  },
  {
    id: "REC-APR-087", date: "2026-04-10", month: "Apr 2026", category: "Science & Technology",
    title: "IIT Madras Develops Ultrafast Terahertz Wireless Communication Link",
    summary: "Engineers at IIT Madras engineered a record-speed wireless transmission system operating in the terahertz band.",
    whatHappened: "Researchers at IIT Madras successfully demonstrated an ultra-high-speed wireless communication prototype operating in the terahertz (THz) frequency band, transmitting massive data streams at multi-terabit speeds over short distances.",
    importantPoints: [
      "Terahertz (THz) wireless communication system developed by IIT Madras.",
      "Achieves multi-terabit data transmission speeds.",
      "Lays groundwork for future 6G ultra-broadband wireless architecture."
    ],
    examFacts: ["Innovation: Terahertz Wireless Link", "Institute: IIT Madras"],
    quickRemember: "IIT Madras developed an ultrafast terahertz wireless communication link for future 6G networks.",
    audioText: "Engineers at IIT Madras engineered a record-speed wireless transmission system operating in the terahertz band.",
    source: "IIT Madras", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-APR-088", date: "2026-04-13", month: "Apr 2026", category: "International Affairs",
    title: "India and Japan Sign Comprehensive Semiconductor Talent Mobility Accord",
    summary: "New Delhi and Tokyo executed a bilateral pact to train 50,000 semiconductor engineers and technicians.",
    whatHappened: "India and Japan signed a strategic bilateral agreement in Tokyo establishing the Semiconductor Talent Mobility Accord, aiming to co-train 50,000 specialized VLSI design and chip packaging engineers across collaborative academic hubs.",
    importantPoints: [
      "Semiconductor Talent Mobility Accord signed between India and Japan.",
      "Targets joint training of 50,000 specialized semiconductor engineers.",
      "Establishes student and faculty exchange pipelines between Indian and Japanese universities."
    ],
    examFacts: ["Partners: India and Japan", "Agreement: Semiconductor Talent Mobility Accord"],
    quickRemember: "India and Japan signed a Semiconductor Talent Mobility Accord to train 50,000 chip engineers.",
    audioText: "India and Japan signed a comprehensive semiconductor talent mobility accord to train fifty thousand engineers.",
    source: "MEA", importantFor: ["UPSC", "SSC CGL"]
  },
  {
    id: "REC-APR-089", date: "2026-04-15", month: "Apr 2026", category: "Environment & Forests",
    title: "MoEFCC Launches 'National Urban Forestry Management Dashboard'",
    summary: "The Environment Ministry deployed an open-source geospatial tool to track urban green cover expansion.",
    whatHappened: "The Ministry of Environment, Forest and Climate Change launched the 'National Urban Forestry Management Dashboard', utilizing high-resolution satellite imagery to monitor municipal tree canopy densities and urban forest park growth across 150 smart cities.",
    importantPoints: [
      "National Urban Forestry Management Dashboard launched by MoEFCC.",
      "Tracks municipal tree canopy densities using satellite imagery across 150 cities.",
      "Aims to combat urban heat island effects and expand city green belts."
    ],
    examFacts: ["Dashboard: National Urban Forestry Management", "Ministry: MoEFCC"],
    quickRemember: "MoEFCC launched a geospatial dashboard to track urban green cover expansion across 150 cities.",
    audioText: "The Environment Ministry deployed an open-source geospatial tool to track urban green cover expansion.",
    source: "MoEFCC", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-APR-090", date: "2026-04-16", month: "Apr 2026", category: "Sports & Athletics",
    title: "Lovlina Borgohain Wins Gold at Asian Boxing Cup",
    summary: "Olympic medalist Lovlina Borgohain clinched the gold medal in her weight division at the Asian Boxing Cup.",
    whatHappened: "Star Indian boxer and Olympic medalist Lovlina Borgohain delivered a commanding performance to secure the gold medal in the middleweight division at the Asian Boxing Cup, outpunching continental opponents with tactical precision.",
    importantPoints: [
      "Lovlina Borgohain won gold at the Asian Boxing Cup.",
      "Discipline: Women's Boxing (Middleweight division).",
      "Reinforced her status as a premier international medal contender."
    ],
    examFacts: ["Athlete: Lovlina Borgohain", "Sport: Boxing", "Medal: Gold"],
    quickRemember: "Boxer Lovlina Borgohain won the gold medal at the Asian Boxing Cup.",
    audioText: "Olympic medalist Lovlina Borgohain clinched the gold medal in her weight division at the Asian Boxing Cup.",
    source: "Boxing Federation of India", importantFor: ["SSC CGL", "SSC CHSL"]
  },
  {
    id: "REC-APR-091", date: "2026-04-17", month: "Apr 2026", category: "Science & Technology",
    title: "CSIR-CSMCRI Develops High-Purity Seaweed Liquid Fertilizer",
    summary: "CSIR-CSMCRI scaled up eco-friendly biostimulants extracted from marine macroalgae to boost crop yields.",
    whatHappened: "Scientists at the CSIR-Central Salt and Marine Chemicals Research Institute (CSMCRI) in Bhavnagar commercialized a refined liquid seaweed fertilizer derived from cultivated marine macroalgae, proven to enhance crop stress tolerance and soil microbe health.",
    importantPoints: [
      "Liquid seaweed biostimulant developed by CSIR-CSMCRI Bhavnagar.",
      "Extracted from cultivated marine macroalgae / seaweeds.",
      "Improves crop resilience against abiotic stress and boosts agricultural yields."
    ],
    examFacts: ["Institution: CSIR-CSMCRI Bhavnagar", "Innovation: Seaweed Liquid Fertilizer"],
    quickRemember: "CSIR-CSMCRI developed a high-purity seaweed liquid fertilizer to boost agricultural yields.",
    audioText: "CSIR-CSMCRI scaled up eco-friendly biostimulants extracted from marine macroalgae to boost crop yields.",
    source: "CSIR", importantFor: ["SSC CGL", "State PCS"]
  },
  {
    id: "REC-APR-092", date: "2026-04-20", month: "Apr 2026", category: "Economy & Infrastructure",
    title: "Inauguration of New Integrated International Cruise Terminal in Kochi",
    summary: "A modern passenger cruise terminal was commissioned at Willingdon Island to boost maritime tourism.",
    whatHappened: "An expansive international cruise passenger terminal equipped with customs clearance desks and automated baggage conveyors was inaugurated at Willingdon Island in Kochi, Kerala, welcoming luxury liners along India's southwestern maritime route.",
    importantPoints: [
      "Integrated international cruise terminal inaugurated at Willingdon Island, Kochi.",
      "Equipped with modern customs kiosks and passenger facilitation lounges.",
      "Boosts luxury maritime tourism and coastal hospitality economies."
    ],
    examFacts: ["Facility: International Cruise Terminal", "Location: Willingdon Island, Kochi"],
    quickRemember: "A new integrated international cruise terminal was inaugurated in Kochi.",
    audioText: "A modern passenger cruise terminal was commissioned at Willingdon Island in Kochi to boost maritime tourism.",
    source: "Ministry of Ports", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-APR-093", date: "2026-04-21", month: "Apr 2026", category: "International Affairs",
    title: "India Elected to Executive Board of World Food Programme",
    summary: "India secured a prominent governing seat on the UN World Food Programme Executive Board in Rome.",
    whatHappened: "India was officially elected to the Executive Board of the United Nations World Food Programme (WFP) during plenary sessions held at FAO headquarters in Rome, reinforcing its global humanitarian leadership in food security and grain distribution.",
    importantPoints: [
      "India elected to the Executive Board of the World Food Programme (WFP).",
      "Elections held at WFP/FAO Headquarters in Rome, Italy.",
      "Strengthens India's voice in global food security and emergency humanitarian relief."
    ],
    examFacts: ["Body: WFP Executive Board", "Location: Rome, Italy"],
    quickRemember: "India was elected to the Executive Board of the World Food Programme in Rome.",
    audioText: "India secured a prominent governing seat on the UN World Food Programme Executive Board in Rome.",
    source: "MEA", importantFor: ["UPSC", "SSC CGL"]
  },
  {
    id: "REC-APR-094", date: "2026-04-22", month: "Apr 2026", category: "Government Schemes",
    title: "Ministry of Health Launches 'National Digital Health ID Tracker for Maternal Care'",
    summary: "A unified digital monitoring ledger was operationalized to track antenatal check-ups across rural districts.",
    whatHappened: "The Ministry of Health and Family Welfare operationalized the 'National Digital Health ID Tracker for Maternal Care', linking pregnant women's ABHA health accounts directly to automated auxiliary nurse midwife (ANM) scheduling apps to ensure zero missed antenatal visits.",
    importantPoints: [
      "National Digital Health ID Tracker for Maternal Care launched by MoHFW.",
      "Links pregnant women's ABHA accounts to automated ANM scheduling applications.",
      "Aims to ensure 100% tracking of essential antenatal check-ups in rural areas."
    ],
    examFacts: ["Platform: National Digital Health ID Tracker for Maternal Care", "Ministry: Health & Family Welfare"],
    quickRemember: "The Health Ministry launched a digital tracking ledger for maternal care and antenatal check-ups.",
    audioText: "The Ministry of Health operationalized a unified digital monitoring ledger to track antenatal check-ups across rural districts.",
    source: "MoHFW", importantFor: ["SSC CGL", "State PCS"]
  },
  {
    id: "REC-APR-095", date: "2026-04-23", month: "Apr 2026", category: "Defence & Aerospace",
    title: "Indian Coast Guard Successfully Flight-Tests Advanced Search-and-Rescue Drone Pods",
    summary: "The Coast Guard validated long-range autonomous drone deployment pods for maritime rescue missions.",
    whatHappened: "The Indian Coast Guard successfully completed operational flight trials of containerized autonomous search-and-rescue (SAR) drone pods mounted on patrol vessels, verifying rapid deployment capabilities to locate distressed mariners in rough seas.",
    importantPoints: [
      "Operational flight trials of containerized SAR drone pods completed by Indian Coast Guard.",
      "Mounted on maritime patrol vessels for rapid deployment.",
      "Enhances night-time search-and-rescue efficiency in turbulent offshore waters."
    ],
    examFacts: ["Equipment: Containerized SAR Drone Pods", "Service: Indian Coast Guard"],
    quickRemember: "The Indian Coast Guard successfully flight-tested advanced search-and-rescue drone pods.",
    audioText: "The Coast Guard validated long-range autonomous drone deployment pods for maritime rescue missions.",
    source: "Indian Coast Guard", importantFor: ["CDS", "SSC CGL"]
  },
  {
    id: "REC-APR-096", date: "2026-04-24", month: "Apr 2026", category: "Economy & Trade",
    title: "India and UK Conclude Historic Comprehensive Economic Partnership",
    summary: "New Delhi and London signed a landmark bilateral trade agreement removing tariffs across key manufacturing sectors.",
    whatHappened: "Trade ministers from India and the United Kingdom formally signed a landmark Comprehensive Economic Partnership Agreement in London, securing massive tariff reductions across automobiles, medical devices, and high-tech engineering goods.",
    importantPoints: [
      "Comprehensive Economic Partnership Agreement signed between India and the UK.",
      "Formalized during high-level ministerial meetings in London.",
      "Removes trade barriers and tariffs across manufacturing and technology sectors."
    ],
    examFacts: ["Partners: India and United Kingdom", "Agreement: Comprehensive Economic Partnership Signed"],
    quickRemember: "India and the UK signed a historic Comprehensive Economic Partnership Agreement in London.",
    audioText: "India and the UK signed a landmark bilateral trade agreement removing tariffs across key manufacturing sectors.",
    source: "Ministry of Commerce", importantFor: ["UPSC", "SSC CGL", "Bank PO"]
  },
  {
    id: "REC-APR-097", date: "2026-04-27", month: "Apr 2026", category: "Science & Space",
    title: "ISRO Successfully Completes Structural Qualification of LVM3 Human-Rated Fairing",
    summary: "ISRO validated acoustic and payload fairing separation systems for crewed orbital spaceflight missions.",
    whatHappened: "ISRO successfully completed structural acoustic and static separation qualification trials on the human-rated payload fairing of the LVM3 rocket at Sriharikota, ensuring smooth shroud jettisoning during crewed orbital flights.",
    importantPoints: [
      "Structural acoustic and static separation tests completed on the human-rated LVM3 fairing.",
      "Conducted by ISRO at Satish Dhawan Space Centre, Sriharikota.",
      "Validates crew safety and reliable shroud jettisoning during ascent."
    ],
    examFacts: ["Component: Human-Rated LVM3 Payload Fairing", "Mission: Gaganyaan Support", "Agency: ISRO"],
    quickRemember: "ISRO successfully completed structural qualification of the LVM3 human-rated payload fairing.",
    audioText: "ISRO validated acoustic and payload fairing separation systems for crewed orbital spaceflight missions.",
    source: "ISRO", importantFor: ["SSC CGL", "UPSC", "CDS"]
  },
  {
    id: "REC-APR-098", date: "2026-04-28", month: "Apr 2026", category: "Environment & Energy",
    title: "NTPC Commissions India's First Commercial Floating Nuclear Thermal Integration Study Hub",
    summary: "NTPC established an advanced technical evaluation center exploring nuclear process heat integration for green hydrogen.",
    whatHappened: "NTPC Limited established a specialized technical evaluation and simulation center in cooperation with nuclear agencies, studying the direct thermal integration of pressurized heavy-water reactors with industrial green hydrogen production loops.",
    importantPoints: [
      "Technical evaluation center established by NTPC for nuclear-hydrogen integration.",
      "Studies direct thermal energy utilization from nuclear reactors for green hydrogen.",
      "Aims to pioneer base-load clean fuel manufacturing."
    ],
    examFacts: ["Company: NTPC", "Focus: Nuclear-Hydrogen Thermal Integration Study"],
    quickRemember: "NTPC established an advanced technical center to study nuclear process heat integration for green hydrogen.",
    audioText: "NTPC established an advanced technical evaluation center exploring nuclear process heat integration for green hydrogen.",
    source: "Ministry of Power", importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-APR-099", date: "2026-04-29", month: "Apr 2026", category: "National Security",
    title: "Ministry of Home Affairs Deploys Automated National Border Intrusion Analytics Grid",
    summary: "MHA integrated thermal optic and ground radar feeds into an AI-driven border surveillance dashboard.",
    whatHappened: "The Ministry of Home Affairs deployed the Automated National Border Intrusion Analytics Grid, integrating thermal imaging cameras, seismic ground sensors, and perimeter radar feeds into an AI-managed monitoring dashboard for border security forces.",
    importantPoints: [
      "Automated National Border Intrusion Analytics Grid deployed by MHA.",
      "Integrates thermal optics, seismic sensors, and radar feeds into an AI dashboard.",
      "Enhances real-time nocturnal threat detection along international borders."
    ],
    examFacts: ["System: Border Intrusion Analytics Grid", "Ministry: Ministry of Home Affairs"],
    quickRemember: "MHA deployed an automated National Border Intrusion Analytics Grid using AI surveillance feeds.",
    audioText: "The Home Ministry integrated thermal optic and ground radar feeds into an AI-driven border surveillance dashboard.",
    source: "Ministry of Home Affairs", importantFor: ["SSC CGL", "UPSC", "CDS"]
  },
  {
    id: "REC-APR-100", date: "2026-04-30", month: "Apr 2026", category: "Economy & Agriculture",
    title: "NABARD Approves ₹16,000 Crore Rural Digital Agri-Market Linkage Fund",
    summary: "NABARD sanctioned a major financial window to connect rural e-NAM mandis with automated logistics hubs.",
    whatHappened: "NABARD approved the sanction of a ₹16,000 crore specialized fund dedicated to upgrading digital e-NAM agricultural trading mandis, installing electronic assaying equipment, and connecting farm gate aggregators directly with interstate freight corridors.",
    importantPoints: [
      "₹16,000 crore Rural Digital Agri-Market Linkage Fund approved by NABARD.",
      "Upgrades e-NAM mandis with electronic assaying and digital logistics hubs.",
      "Aims to secure transparent price discovery and seamless farm-to-market transit."
    ],
    examFacts: ["Institution: NABARD", "Fund: Rural Digital Agri-Market Linkage Fund", "Allocation: ₹16,000 Crore"],
    quickRemember: "NABARD approved a ₹16,000 crore fund to upgrade rural digital agri-markets and e-NAM linkages.",
    audioText: "NABARD approved a sixteen thousand crore rupee financial window to connect rural e-NAM mandis with automated logistics hubs.",
    source: "NABARD", importantFor: ["Bank PO", "SSC CGL", "UPSC"]
  }
];

const aprRecallQuestionsBatch5 = [
  {
    id: "REC-Q-APR-081", articleId: "REC-APR-081", category: "Science & Technology",
    question: "The CSIR-Indian Institute of Chemical Technology formulated a low-cost nickel-iron layered double hydroxide electrocatalyst that enhances:",
    options: ["Carbon dioxide photoreduction yields", "Hydrogen evolution reaction kinetics during alkaline water electrolysis", "Direct methanol fuel cell electrical voltage", "Solid oxide fuel cell operating temperatures"],
    answer: 1, explanation: "The nickel-iron electrocatalyst enhances hydrogen evolution reaction kinetics during industrial alkaline water electrolysis for green hydrogen."
  },
  {
    id: "REC-Q-APR-082", articleId: "REC-APR-082", category: "Economy & Infrastructure",
    question: "The Inland Waterways Authority of India commissioned an advanced automated cargo handling terminal along National Waterway-1 on the River Ganga in:",
    options: ["Patna, Bihar", "Varanasi, Uttar Pradesh", "Prayagraj, Uttar Pradesh", "Haldia, West Bengal"],
    answer: 1, explanation: "The IWAI commissioned an automated cargo handling terminal along National Waterway-1 on the River Ganga in Varanasi, UP."
  },
  {
    id: "REC-Q-APR-083", articleId: "REC-APR-083", category: "Environment & Wildlife",
    question: "Researchers from the Zoological Survey of India described a new species of sand crab belonging to the family Albuneidae, named *Albunea odishaensis*, discovered off the coast of:",
    options: ["Gopalpur, Odisha", "Paradip, Odisha", "Chandipur, Odisha", "Puri, Odisha"],
    answer: 1, explanation: "Albunea odishaensis is a new sand crab species collected from deep benthic trawl surveys off the Paradip coast in Odisha."
  },
  {
    id: "REC-Q-APR-084", articleId: "REC-APR-084", category: "Defence & Aerospace",
    question: "The DRDO and the Indian Navy successfully completed developmental flight trials of the extended-range version of which indigenous weapon system?",
    options: ["Anti-Submarine Rocket (ASR) system", "Submarine-launched BrahMos cruise missile", "Shyena acoustic torpedo launcher", "Varunastra heavy guidance kit"],
    answer: 0, explanation: "DRDO and the Indian Navy completed developmental flight trials of the extended-range version of the indigenous Anti-Submarine Rocket (ASR) system."
  },
  {
    id: "REC-Q-APR-085", articleId: "REC-APR-085", category: "Government Schemes",
    question: "The Ministry of Skill Development and Entrepreneurship launched Portal 3.0 of the National Apprenticeship Training Scheme (NATS) to integrate:",
    options: ["Blockchain-verified skill certification badges", "AI-driven candidate profiling and automated stipend direct-benefit transfers", "Augmented reality industrial safety simulators", "Cross-border multinational job matching portals"],
    answer: 1, explanation: "NATS Portal 3.0 integrates AI-driven candidate profiling and automated stipend direct-benefit transfers across manufacturing sectors."
  },
  {
    id: "REC-Q-APR-086", articleId: "REC-APR-086", category: "Economy & Banking",
    question: "The Reserve Bank of India issued a regulatory mandate requiring all top-layer and upper-layer Non-Banking Financial Companies to implement:",
    options: ["Decentralized peer-to-peer liquidity lending pools", "Automated daily liquidity stress-testing models to simulate cash-flow crunches", "Mandatory foreign exchange hedging reserves", "Real-time algorithmic bond market shorting limits"],
    answer: 1, explanation: "The RBI mandated automated daily liquidity stress-testing models for top-tier NBFCs to simulate cash-flow crunches under severe market shocks."
  },
  {
    id: "REC-Q-APR-087", articleId: "REC-APR-087", category: "Science & Technology",
    question: "Researchers at IIT Madras successfully demonstrated an ultra-high-speed wireless communication prototype operating in which frequency band?",
    options: ["Millimeter-wave (mmWave) band", "Terahertz (THz) frequency band", "Free-space optical infrared band", "Sub-gigahertz VHF band"],
    answer: 1, explanation: "IIT Madras demonstrated a wireless communication system operating in the terahertz (THz) band, transmitting massive data streams at multi-terabit speeds."
  },
  {
    id: "REC-Q-APR-088", articleId: "REC-APR-088", category: "International Affairs",
    question: "India and Japan signed a strategic bilateral agreement in Tokyo establishing the Semiconductor Talent Mobility Accord, targeting the co-training of how many engineers?",
    options: ["10,000 engineers", "25,000 engineers", "50,000 engineers", "100,000 engineers"],
    answer: 2, explanation: "The Semiconductor Talent Mobility Accord targets co-training 50,000 specialized VLSI design and chip packaging engineers."
  },
  {
    id: "REC-Q-APR-089", articleId: "REC-APR-089", category: "Environment & Forests",
    question: "The Ministry of Environment launched the 'National Urban Forestry Management Dashboard' utilizing high-resolution satellite imagery to monitor municipal tree canopy densities across how many smart cities?",
    options: ["50 smart cities", "100 smart cities", "150 smart cities", "200 smart cities"],
    answer: 2, explanation: "The dashboard monitors municipal tree canopy densities and urban forest park growth across 150 smart cities using satellite imagery."
  },
  {
    id: "REC-Q-APR-090", articleId: "REC-APR-090", category: "Sports & Athletics",
    question: "Star Indian boxer and Olympic medalist Lovlina Borgohain secured the gold medal in the middleweight division at the:",
    options: ["World Boxing Championships", "Asian Boxing Cup", "Commonwealth Boxing Invitational", "Paris Olympic Test Tournament"],
    answer: 1, explanation: "Lovlina Borgohain secured the gold medal in the middleweight division at the Asian Boxing Cup."
  },
  {
    id: "REC-Q-APR-091", articleId: "REC-APR-091", category: "Science & Technology",
    question: "Scientists at the CSIR-Central Salt and Marine Chemicals Research Institute in Bhavnagar commercialized a refined liquid fertilizer derived from:",
    options: ["Inland saline groundwater mineral extracts", "Cultivated marine macroalgae (seaweeds)", "Mangrove decomposing leaf litter", "Estuarine micro-algae blooms"],
    answer: 1, explanation: "CSIR-CSMCRI commercialized a refined liquid seaweed fertilizer derived from cultivated marine macroalgae to boost crop stress tolerance."
  },
  {
    id: "REC-Q-APR-092", articleId: "REC-APR-092", category: "Economy & Infrastructure",
    question: "An expansive international cruise passenger terminal equipped with customs clearance desks was inaugurated at Willingdon Island in:",
    options: ["Goa", "Kochi, Kerala", "Mangaluru, Karnataka", "Mumbai, Maharashtra"],
    answer: 1, explanation: "An international cruise passenger terminal was inaugurated at Willingdon Island in Kochi, Kerala."
  },
  {
    id: "REC-Q-APR-093", articleId: "REC-APR-093", category: "International Affairs",
    question: "During plenary sessions held at FAO headquarters in Rome, India was officially elected to the Executive Board of the:",
    options: ["United Nations World Food Programme (WFP)", "International Fund for Agricultural Development (IFAD)", "Food and Agriculture Organization Council", "World Meteorological Organization"],
    answer: 0, explanation: "India was elected to the Executive Board of the United Nations World Food Programme (WFP) during plenary sessions in Rome."
  },
  {
    id: "REC-Q-APR-094", articleId: "REC-APR-094", category: "Government Schemes",
    question: "The Ministry of Health and Family Welfare operationalized the 'National Digital Health ID Tracker for Maternal Care' to link pregnant women's ABHA accounts with:",
    options: ["Automated auxiliary nurse midwife (ANM) scheduling apps", "Direct cash transfer maternity benefit ledgers", "District hospital emergency ambulance dispatchers", "PDS ration card nutritional allocation logs"],
    answer: 0, explanation: "The tracker links pregnant women's ABHA health accounts directly to automated auxiliary nurse midwife (ANM) scheduling apps to ensure zero missed antenatal visits."
  },
  {
    id: "REC-Q-APR-095", articleId: "REC-APR-095", category: "Defence & Aerospace",
    question: "The Indian Coast Guard successfully completed operational flight trials of containerized autonomous search-and-rescue drone pods mounted on:",
    options: ["Fast Patrol Vessels", "Maritime patrol vessels", "Hovercraft transport squadrons", "Offshore helicopter flight decks"],
    answer: 1, explanation: "The Coast Guard completed operational flight trials of containerized autonomous SAR drone pods mounted on maritime patrol vessels."
  },
  {
    id: "REC-Q-APR-096", articleId: "REC-APR-096", category: "Economy & Trade",
    question: "Trade ministers from India and the United Kingdom formally signed a landmark trade pact securing tariff reductions in London, named the:",
    options: ["Comprehensive Economic Partnership Agreement (CEPA)", "Free Trade and Investment Accord", "Digital and Manufacturing Trade Treaty", "Indo-British Bilateral Commerce Framework"],
    answer: 0, explanation: "India and the UK formally signed a landmark Comprehensive Economic Partnership Agreement in London, securing tariff reductions across manufacturing."
  },
  {
    id: "REC-Q-APR-097", articleId: "REC-APR-097", category: "Science & Space",
    question: "ISRO successfully completed structural acoustic and static separation qualification trials on the human-rated payload fairing of which rocket at Sriharikota?",
    options: ["PSLV-XL", "SSLV-D3", "LVM3 rocket", "NGLV heavy booster"],
    answer: 2, explanation: "ISRO completed structural acoustic and static separation qualification trials on the human-rated payload fairing of the LVM3 rocket at Sriharikota."
  },
  {
    id: "REC-Q-APR-098", articleId: "REC-APR-098", category: "Environment & Energy",
    question: "NTPC Limited established a specialized technical evaluation and simulation center exploring the direct thermal process heat integration of pressurized heavy-water reactors with:",
    options: ["Direct carbon capture solvent regeneration loops", "Industrial green hydrogen production loops", "District municipal desalination plants", "High-temperature coal gasification reactors"],
    answer: 1, explanation: "NTPC established a center studying the direct thermal integration of nuclear reactors with industrial green hydrogen production loops."
  },
  {
    id: "REC-Q-APR-099", articleId: "REC-APR-099", category: "National Security",
    question: "The Ministry of Home Affairs deployed the Automated National Border Intrusion Analytics Grid, integrating thermal imaging cameras, seismic ground sensors, and:",
    options: ["Perimeter radar feeds into an AI-managed monitoring dashboard", "Underground acoustic vibration fiber cables", "Low-earth orbit satellite reconnaissance feeds", "Autonomous patrol robot rover telemetry"],
    answer: 0, explanation: "The grid integrates thermal imaging cameras, seismic ground sensors, and perimeter radar feeds into an AI-managed monitoring dashboard."
  },
  {
    id: "REC-Q-APR-100", articleId: "REC-APR-100", category: "Economy & Agriculture",
    question: "NABARD approved the sanction of a ₹16,000 crore specialized fund dedicated to upgrading digital agricultural trading mandis known as:",
    options: ["Agri-Stack Mandi Nodes", "e-NAM electronic trading platforms", "Digital Gramin Haat Exchanges", "National e-Market Logistics Hubs"],
    answer: 1, explanation: "The ₹16,000 crore fund upgrades digital e-NAM agricultural trading mandis, installing electronic assaying equipment and connecting farm gate aggregators."
  }
];

// 👉 PUSH DATA INTO GLOBAL ARRAYS
if (typeof hiddenRecallArticles !== 'undefined') {
  hiddenRecallArticles.push(...aprRecallArticlesBatch5);
}
if (typeof recallQuestionPool !== 'undefined') {
  recallQuestionPool.push(...aprRecallQuestionsBatch5);
}

/* ==========================================================================
   END OF APRIL BATCH 5 (APRIL 100% COMPLETE)
   ========================================================================== */

  