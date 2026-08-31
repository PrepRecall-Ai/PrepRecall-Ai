import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Firebase
const serviceAccount = JSON.parse(process.env.FIREBASE_CREDENTIALS || "{}");
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function generateDailyContent() {
  const today = new Date().toISOString().split('T')[0];
  const currentYear = today.split('-')[0];
  console.log(`Starting generation for Indian SSC Exams: ${today}`);

  // Keeping your exact model specification
  const model = genAI.getGenerativeModel({ model: "gemini-3.6-flash" });

  // Upgraded prompt with strict Date and count enforcements
  const prompt = `
    You are an expert Indian SSC Exam content creator.
    Today's exact date is ${today} (Year is ${currentYear}). 
    
    Generate exactly 10 top current affairs for Indian competitive exams (CGL, CHSL, etc.). 
    CRITICAL: The news MUST be relevant to ${currentYear}. Do NOT generate outdated 2024 news.
    Ensure the 10 articles cover diverse categories (e.g., National Affairs, Defence, Economy, Government Schemes).
    Also generate exactly 10 mock test questions relevant to SSC exams based on this news.
    
    You MUST output ONLY a raw, valid JSON object. Do NOT include markdown blocks like \`\`\`json.
    Strictly use this exact JSON structure:
    {
      "articles": [
        { "Category": "String", "Headline": "String", "Summary": "String" }
      ],
      "audioScript": "A conversational English script summarizing the top news.",
      "mocks": [
        {
          "question": "String",
          "options": ["Option 1", "Option 2", "Option 3", "Option 4"],
          "correctAnswer": "Exact string of the correct option",
          "explanation": "1-sentence explanation",
          "category": "String"
        }
      ]
    }
    IMPORTANT: The "articles" array MUST contain exactly 10 items. The "mocks" array MUST contain exactly 10 items.
  `;

  try {
    const result = await model.generateContent(prompt);
    let rawText = result.response.text();
    
    // Safety check: Strip accidental markdown if Gemini includes it
    rawText = rawText.replace(/```json/g, '').replace(/```/g, '').trim();
    
    const data = JSON.parse(rawText);

    // Push to Firestore
    const batch = db.batch();

    batch.set(db.collection('daily_mocks').doc(today), { questions: data.mocks, date: today });
    batch.set(db.collection('daily_articles').doc(today), { 
      articles: data.articles, 
      audioScript: data.audioScript, 
      date: today 
    });

    await batch.commit();
    console.log(`✅ Successfully saved ${today} content to Firestore! (${data.articles.length} articles, ${data.mocks.length} mocks)`);

  } catch (error) {
    console.error("❌ Error generating content:", error);
    process.exit(1);
  }
}

generateDailyContent();