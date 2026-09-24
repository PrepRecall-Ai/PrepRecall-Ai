/* recallData.js - Hidden Repository for 7-Day Experiment */

const hiddenRecallArticles = [
  {
    id: "REC-ART-001",
    date: "2026-03-01",
    month: "Mar 2026",
    category: "National Affairs",
    title: "Urban Challenge Fund (UCF)",
    summary: "The Union Cabinet approved the UCF to support transformative urban infrastructure projects through a competitive challenge mode.",
    whatHappened: "The Union Cabinet approved the UCF to support transformative and bankable urban infrastructure projects through a competitive challenge mode, shifting from grants to market-linked financing. Central assistance covers 25% of project costs if cities raise at least 50% via municipal bonds, bank loans, and PPPs.",
    importantPoints: ["Targets a total investment of ₹4 lakh crore over five years.", "A ₹5,000 crore credit enhancement corpus will support 4,223 cities."],
    examFacts: ["₹4 lakh crore investment target", "Supports Tier 2 and Tier 3 cities"],
    quickRemember: "UCF: ₹4 lakh crore investment target for urban infrastructure.",
    audioText: "The Union Cabinet approved the Urban Challenge Fund targeting a 4 lakh crore investment for urban infrastructure.",
    source: "Union Cabinet",
    importantFor: ["SSC CGL", "SSC CHSL", "UPSC"]
  },
  {
    id: "REC-ART-002",
    date: "2026-03-02",
    month: "Mar 2026",
    category: "National Affairs",
    title: "Underwater Road-Cum-Rail Tunnel under Brahmaputra",
    summary: "CCEA approved a 33.7-km corridor in Assam featuring a twin-tube underwater tunnel.",
    whatHappened: "The CCEA approved a 33.7-km four-lane access-controlled greenfield corridor in Assam costing ₹18,662 crore, featuring a 15.79-km twin-tube underwater tunnel connecting Gohpur and Numaligarh. It reduces travel time from 6 hours to 20 minutes.",
    importantPoints: ["Second underwater road-cum-rail tunnel globally.", "Connects Gohpur (NH-15) and Numaligarh (NH-715)."],
    examFacts: ["Cost: ₹18,662 crore", "River: Brahmaputra"],
    quickRemember: "Brahmaputra underwater tunnel connects Gohpur and Numaligarh.",
    audioText: "An 18,662 crore underwater road-cum-rail tunnel has been approved under the Brahmaputra river in Assam.",
    source: "CCEA",
    importantFor: ["SSC CGL", "CDS", "UPSC"]
  },
  {
    id: "REC-ART-003",
    date: "2026-03-03",
    month: "Mar 2026",
    category: "Science & Technology",
    title: "National AI-in-Healthcare Strategy",
    summary: "Union Minister launched SAHI and BODH platforms for safe AI adoption in healthcare.",
    whatHappened: "Union Minister Jagat Prakash Nadda launched the Strategy for Artificial Intelligence in Healthcare for India (SAHI) and the Benchmarking Open Data Platform for Health AI (BODH) at the India AI Summit in New Delhi.",
    importantPoints: ["SAHI guides safe and ethical AI adoption.", "BODH evaluates AI models using real-world data without exposing underlying datasets."],
    examFacts: ["Launched by Jagat Prakash Nadda", "BODH: Benchmarking Open Data Platform"],
    quickRemember: "SAHI and BODH launched for ethical AI in Indian healthcare.",
    audioText: "The Strategy for Artificial Intelligence in Healthcare for India was launched to guide safe AI adoption.",
    source: "Ministry of Health",
    importantFor: ["SSC CGL", "UPSC"]
  },
  {
    id: "REC-ART-004",
    date: "2026-03-04",
    month: "Mar 2026",
    category: "Science & Defence",
    title: "Cadet Training Ship 'Krishna'",
    summary: "The first of three indigenous Cadet Training Ships was launched in Chennai.",
    whatHappened: "The first of three indigenous Cadet Training Ships, named 'Krishna', built by L&T Shipyard at Kattupalli, Chennai, was launched by DWWA President Anupama in the presence of CDS Gen. Anil Chauhan.",
    importantPoints: ["Built by L&T Shipyard at Kattupalli, Chennai.", "First of three indigenous Cadet Training Ships."],
    examFacts: ["Ship Name: Krishna", "Builder: L&T Shipyard"],
    quickRemember: "Training Ship 'Krishna' built by L&T Shipyard launched in Chennai.",
    audioText: "The indigenous Cadet Training Ship Krishna was launched in Chennai by L&T Shipyard.",
    source: "Indian Navy",
    importantFor: ["CDS", "SSC CGL"]
  },
  {
    id: "REC-ART-005",
    date: "2026-03-05",
    month: "Mar 2026",
    category: "Environment",
    title: "NHAI 'Bee Corridors'",
    summary: "NHAI initiated dedicated pollinator corridors along highways.",
    whatHappened: "The National Highways Authority of India (NHAI) initiated dedicated pollinator corridors along highways, planting flowering clusters every 500 metres to 1 km using native species such as neem, mahua, palash, and jamun to support bee populations.",
    importantPoints: ["Dedicated pollinator corridors along highways.", "Uses native species like neem, mahua, and palash."],
    examFacts: ["Initiative by NHAI", "Purpose: Pollinator conservation"],
    quickRemember: "NHAI launched 'Bee Corridors' along highways using native flora.",
    audioText: "The National Highways Authority of India initiated 'Bee Corridors' to support pollinators along highways.",
    source: "NHAI",
    importantFor: ["SSC CGL", "UPSC"]
  }
];

const recallQuestionPool = [
  {
    id: "REC-Q-001",
    question: "What is the total investment target of the Urban Challenge Fund (UCF) approved by the Union Cabinet?",
    options: ["₹2 lakh crore", "₹4 lakh crore", "₹6 lakh crore", "₹8 lakh crore"],
    answer: 1,
    explanation: "The UCF targets a total investment of ₹4 lakh crore over five years, shifting from grants to market-linked financing for urban infrastructure.",
    topic: "Urban Infrastructure",
    category: "National Affairs",
    articleId: "REC-ART-001"
  },
  {
    id: "REC-Q-002",
    question: "The newly approved twin-tube underwater road-cum-rail tunnel in Assam will be constructed under which river?",
    options: ["Ganga", "Teesta", "Brahmaputra", "Barak"],
    answer: 2,
    explanation: "The CCEA approved a 15.79-km twin-tube underwater tunnel connecting Gohpur and Numaligarh under the Brahmaputra river.",
    topic: "Infrastructure Projects",
    category: "National Affairs",
    articleId: "REC-ART-002"
  },
  {
    id: "REC-Q-003",
    question: "Which platform was launched by the Health Ministry to evaluate AI models using real-world data without exposing underlying datasets?",
    options: ["SAHI", "BODH", "AYUSH-AI", "e-Sanjeevani"],
    answer: 1,
    explanation: "BODH (Benchmarking Open Data Platform for Health AI) was launched alongside SAHI to safely evaluate AI models.",
    topic: "Health Tech",
    category: "Science & Technology",
    articleId: "REC-ART-003"
  },
  {
    id: "REC-Q-004",
    question: "What is the name of the first indigenous Cadet Training Ship built by L&T Shipyard and launched in Chennai?",
    options: ["Kaveri", "Godavari", "Krishna", "Narmada"],
    answer: 2,
    explanation: "The first of three indigenous Cadet Training Ships, built by L&T Shipyard at Kattupalli, is named 'Krishna'.",
    topic: "Naval Defence",
    category: "Science & Defence",
    articleId: "REC-ART-004"
  },
  {
    id: "REC-Q-005",
    question: "Which government body initiated 'Bee Corridors' by planting flowering clusters along major transport routes?",
    options: ["Ministry of Environment", "NHAI", "Indian Railways", "Border Roads Organisation"],
    answer: 1,
    explanation: "The National Highways Authority of India (NHAI) initiated dedicated pollinator 'Bee Corridors' along highways.",
    topic: "Environmental Conservation",
    category: "Environment",
    articleId: "REC-ART-005"
  }
];