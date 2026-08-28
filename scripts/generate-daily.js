import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { GoogleGenerativeAI, SchemaType } from '@google/generative-ai';

// Initialize Firebase with your secure GitHub Secret
const serviceAccount = JSON.parse(process.env.FIREBASE_CREDENTIALS || "{}");
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// Initialize Gemini with your existing Secret
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function generateDailyContent() {
  const today = new Date().toISOString().split('T')[0];
  console.log(`Starting generation for Indian SSC Exams: ${today}`);

  // 1. Force Gemini to return perfect JSON using a strict Schema
  const schema = {
    type: SchemaType.OBJECT,
    properties: {
      articles: {
        type: SchemaType.ARRAY,
        items: {
          type: SchemaType.OBJECT,
          properties: {
            Headline: { type: SchemaType.STRING },
            Summary: { type: SchemaType.STRING }
          }
        }
      },
      audioScript: { type: SchemaType.STRING },
      mocks: {
        type: SchemaType.ARRAY,
        items: {
          type: SchemaType.OBJECT,
          properties: {
            id: { type: SchemaType.STRING },
            question: { type: SchemaType.STRING },
            options: {
              type: SchemaType.ARRAY,
              items: { type: SchemaType.STRING }
            },
            correctAnswer: { type: SchemaType.STRING },
            explanation: { type: SchemaType.STRING }
          }
        }
      }
    }
  };

  const model = genAI.getGenerativeModel({
  model: "gemini-1.5-pro",
  // ... rest of the code stays the same
});
    generationConfig: {
      responseMimeType: "application/json",
      responseSchema: schema,
    }
  });

  // 2. The Prompt (Tailored for SSC Aspirants)
  const prompt = `
    Generate today's top current affairs for Indian SSC competitive exams.
    1. Create 3 short, highly factual articles (Headline and Summary).
    2. Write an engaging, conversational audio script in English (suitable for an Indian accent TTS) summarizing these 3 news items.
    3. Generate 10 SSC-level multiple-choice questions based on this news. Include 4 options, the exact correct answer, and a 1-sentence explanation. Make the 'id' format like 'Q-TODAY-001'.
  `;

  try {
    const result = await model.generateContent(prompt);
    const data = JSON.parse(result.response.text());

    // 3. Push everything directly into Firestore simultaneously
    const batch = db.batch();

    const mockRef = db.collection('daily_mocks').doc(today);
    batch.set(mockRef, { questions: data.mocks, date: today });

    const articleRef = db.collection('daily_articles').doc(today);
    batch.set(articleRef, { 
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