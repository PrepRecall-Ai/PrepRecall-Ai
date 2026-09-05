import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Firebase
const serviceAccount = JSON.parse(process.env.FIREBASE_CREDENTIALS || "{}");
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// Initialize Gemini with safety validation check
const API_KEY = process.env.GEMINI_API_KEY;
if (!API_KEY) {
  console.error("CRITICAL ERROR: Gemini API key is missing from environment variables!");
  process.exit(1);
}
const genAI = new GoogleGenerativeAI(API_KEY);

async function generateDailyContent() {
  // Force the date to Indian Standard Time (IST) to match your target audience
  const today = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Kolkata' }).format(new Date());
  const currentYear = today.split('-')[0];
  console.log(`Starting generation for Indian SSC Exams: ${today}`);

  // generationConfig strictly forces the API to return clean JSON without Markdown tags
  const model = genAI.getGenerativeModel({ 
    model: "gemini-3.6-flash",
    generationConfig: { responseMimeType: "application/json" }
  });

  // Prompt enforces grounding rules, mocks generation, and the new AI diagnostic insight
  const prompt = `
    You are an expert Indian SSC Exam content creator.
    Today's exact date is ${today} (Year is ${currentYear}). 
    
    Task 1: Generate exactly 10 top current affairs articles for Indian competitive exams (CGL, CHSL, etc.).
    CRITICAL: The news MUST be relevant to ${currentYear}. Do NOT generate outdated 2024 news.
    Ensure the 10 articles cover diverse categories (e.g., National Affairs, Defence, Economy, Government Schemes).
    
    Task 2: Generate exactly 10 mock test questions based STRICTLY AND ONLY on the articles you just generated.
    
    CRITICAL QUALITY CONTROL RULES FOR MOCKS:
    - GROUNDING: Do not invent facts or use outside knowledge. Every question MUST be answerable solely using the facts provided in the 'articles' array.
    - ACCURACY: The 'correctAnswer' string MUST be an exact, word-for-word match to one of the 4 strings inside the 'options' array.

    Task 3: Generate a short, highly motivating 3-sentence expert daily diagnostic and study tip for SSC/CDS/UPSC aspirants. Highlight key focus areas based on today's current affairs and potential mock test pitfalls.

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
          "explanation": "1-sentence explanation based on the article",
          "category": "String"
        }
      ],
      "aiInsight": "Your 3-sentence expert diagnostic and study tip here."
    }
  `;

  try {
    // Helper function to pause execution during retry delays
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    let result;
    let rawText;
    const maxRetries = 5;

    // Foolproof retry loop to handle 503 traffic spikes without crashing your action
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        console.log(`⏳ Requesting content from Gemini (Attempt ${attempt}/${maxRetries})...`);
        result = await model.generateContent(prompt);
        rawText = result.response.text();
        break; // Success! Exit retry loop
        
      } catch (error) {
        const errString = `${error.message || ''} ${error.status || ''} ${error.statusCode || ''} ${JSON.stringify(error)}`;
        const is503 = errString.includes('503') || errString.includes('Service Unavailable');
        
        if (is503 && attempt < maxRetries) {
          const waitTime = attempt * 10000; // 10s, 20s, 30s, 40s...
          console.warn(`⚠️ [API 503] Server overloaded. Retrying in ${waitTime / 1000} seconds (Attempt ${attempt}/${maxRetries})...`);
          await delay(waitTime);
        } else {
          throw error;
        }
      }
    }
      
    // Parse JSON directly
    const data = JSON.parse(rawText);

    // Pre-Database Validation Checks
    if (!data.articles || data.articles.length !== 10) {
      throw new Error(`Quality Check Failed: Expected 10 articles, got ${data.articles?.length || 0}`);
    }
    if (!data.mocks || data.mocks.length !== 10) {
      throw new Error(`Quality Check Failed: Expected 10 mocks, got ${data.mocks?.length || 0}`);
    }

    // Verify correct answers exist in options
    data.mocks.forEach((mock, index) => {
      if (!mock.options.includes(mock.correctAnswer)) {
        throw new Error(`Quality Check Failed: Mock Question ${index + 1} has a correctAnswer ("${mock.correctAnswer}") that does not exist in its options array.`);
      }
    });

    // Push all components to Firestore safely in a single batch
    const batch = db.batch();

    batch.set(db.collection('daily_mocks').doc(today), { questions: data.mocks, date: today });
    batch.set(db.collection('daily_articles').doc(today), { 
      articles: data.articles, 
      audioScript: data.audioScript, 
      date: today 
    });

    if (data.aiInsight) {
        batch.set(db.collection('daily_insights').doc(today), { 
          report: data.aiInsight, 
          date: today 
        });
    }

    await batch.commit();
    console.log(`✅ Successfully saved ${today} content and AI insight to Firestore! (${data.articles.length} articles, ${data.mocks.length} mocks)`);

  } catch (error) {
    console.error("❌ Error generating content:", error);
    process.exit(1);
  }
}

generateDailyContent();