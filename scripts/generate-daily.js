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
  console.log(`Starting generation for Indian SSC Exams: ${today}`);

  // Using the absolute latest and fastest Flash model
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  // Strong Prompt to guarantee JSON output without markdown
  const prompt = `
    Generate today's top current affairs for Indian SSC competitive exams.
    You MUST output ONLY a raw, valid JSON object. Do NOT include markdown blocks like \`\`\`json.
    Strictly use this exact JSON structure:
    {
      "articles": [
        { "Headline": "String", "Summary": "String" },
        { "Headline": "String", "Summary": "String" },
        { "Headline": "String", "Summary": "String" }
      ],
      "audioScript": "A conversational English script summarizing the news.",
      "mocks": [
        {
          "id": "Q-TODAY-001",
          "question": "String",
          "options": ["Option 1", "Option 2", "Option 3", "Option 4"],
          "correctAnswer": "Exact string of the correct option",
          "explanation": "1-sentence explanation"
        }
      ]
    }
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
    console.log(`✅ Successfully saved ${today} content to Firestore!`);

  } catch (error) {
    console.error("❌ Error generating content:", error);
    process.exit(1);
  }
}

generateDailyContent();