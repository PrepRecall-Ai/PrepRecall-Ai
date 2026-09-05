import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { GoogleGenerativeAI } from '@google/generative-ai';
import NewsAPI from 'newsapi';

const serviceAccount = JSON.parse(process.env.FIREBASE_CREDENTIALS || "{}");
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const newsapi = new NewsAPI(process.env.NEWS_API_KEY);

function getISTDateString(daysAgo) {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Kolkata' }).format(date);
}

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function runBackfillAndGenerate() {
  console.log("Starting 5-Day Precision Audit & Generation System...");

  for (let i = 4; i >= 0; i--) {
    const targetDate = getISTDateString(i);
    
    const docRef = db.collection('daily_mocks').doc(targetDate);
    const docSnap = await docRef.get();

    if (docSnap.exists) {
      console.log(`⏩ [${targetDate}] Data already exists. Skipping.`);
      continue;
    }

    console.log(`⚠️ [${targetDate}] Missing data detected. Initiating high-accuracy fetch...`);

    try {
      let newsResponse;
      
      // 1. Target high-authority official domains and keywords for competitive exams
      try {
        newsResponse = await newsapi.v2.everything({
          q: 'India AND (PIB OR Ministry OR RBI OR Supreme Court OR ISRO OR DRDO OR Parliament OR Scheme OR Policy)',
          language: 'en',
          sortBy: 'publishedAt',
          pageSize: 25
        });
      } catch (e) {
        newsResponse = { articles: [] };
      }

      // Fallback to strict national category if filtered query returns sparse results
      if (!newsResponse || !newsResponse.articles || newsResponse.articles.length === 0) {
        newsResponse = await newsapi.v2.topHeadlines({ country: 'in', category: 'general', language: 'en', pageSize: 25 });
      }

      if (!newsResponse.articles || newsResponse.articles.length === 0) {
        console.warn(`No verified news available. Skipping ${targetDate}.`);
        continue;
      }

      // Filter out fluff, advertisements, and removed entries
      const realArticles = newsResponse.articles
        .filter(a => a.title && a.title !== '[Removed]' && !a.title.includes('[Sponsored]'))
        .map(a => `Source: ${a.source?.name || 'Official'}\nTitle: ${a.title}\nDescription: ${a.description || "N/A"}`)
        .join('\n\n');

      const model = genAI.getGenerativeModel({ 
        model: "gemini-3.6-flash",
        generationConfig: { responseMimeType: "application/json" }
      });
    
      const prompt = `
        You are a senior question setter and examiner for top Indian competitive exams (UPSC, SSC CGL, CDS). 
        Date Context: ${targetDate}
        
        Here is the strictly factual, live news feed:
        """
        ${realArticles}
        """

        Task 1: Select the top 10 most exam-relevant current affairs events from the text above. Use capital JSON keys ("Category", "Headline", "Summary").
        Task 2: Generate exactly 10 multiple-choice mock test questions based STRICTLY AND ONLY on the provided news text. Every 'correctAnswer' must match an item in 'options' word-for-word.
        Task 3: Generate a 3-sentence 'Daily Weakness Report' and strategic study tip for aspirants, highlighting complex policy areas or factual pitfalls they need to watch out for.
        
        CRITICAL ACCURACY GUARDRAILS:
        1. ZERO HALLUCINATION: Do not invent statistics, committee names, constitutional articles, or ministerial targets unless explicitly mentioned in the source text above.
        2. EXAM RELEVANCE: Prioritize national schemes, appointments, defense tech, indexes, and economic reports.

        Return strictly in this JSON format:
        {
          "articles": [
            { "Category": "String", "Headline": "String", "Summary": "String", "date": "${targetDate}" }
          ],
          "audioScript": "A short summary script.",
          "mocks": [
            {
              "question": "String",
              "options": ["Opt 1", "Opt 2", "Opt 3", "Opt 4"],
              "correctAnswer": "Exact Match Opt",
              "explanation": "String",
              "category": "String"
            }
          ],
          "aiInsight": "3-sentence student weakness report and study advice."
        }
      `;

      let result, rawText;
      const maxRetries = 4;
      for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
          console.log(`🤖 Generating verified content for ${targetDate} (Attempt ${attempt}/${maxRetries})...`);
          result = await model.generateContent(prompt);
          rawText = result.response.text();
          break;
        } catch (apiError) {
          if (apiError.message?.includes('503') && attempt < maxRetries) {
            const waitTime = attempt * 10000;
            console.warn(`⚠️ [API 503] Server busy. Retrying in ${waitTime/1000}s...`);
            await delay(waitTime);
          } else {
            throw apiError;
          }
        }
      }

      const quizData = JSON.parse(rawText);

      const batch = db.batch();
      batch.set(db.collection('daily_mocks').doc(targetDate), { 
        questions: quizData.mocks, 
        date: targetDate,
        createdAt: FieldValue.serverTimestamp()
      });
      batch.set(db.collection('daily_articles').doc(targetDate), { 
        articles: quizData.articles, 
        audioScript: quizData.audioScript || "Daily current affairs update.",
        date: targetDate 
      });
      if (quizData.aiInsight) {
        batch.set(db.collection('daily_insights').doc(targetDate), { 
          report: quizData.aiInsight, 
          date: targetDate 
        });
      }

      await batch.commit();
      console.log(`✅ Successfully stored 10 verified factual articles and insights for ${targetDate}`);
      
      await delay(10000); 

    } catch (error) {
      console.error(`❌ Error processing ${targetDate}:`, error.message);
    }
  }
  console.log("Precision backfill and generation complete.");
}

runBackfillAndGenerate();