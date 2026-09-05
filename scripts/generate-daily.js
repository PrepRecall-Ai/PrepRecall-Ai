const admin = require('firebase-admin');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const NewsAPI = require('newsapi');

const serviceAccount = JSON.parse(process.env.FIREBASE_CREDENTIALS || "{}");
admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
const db = admin.firestore();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const newsapi = new NewsAPI(process.env.NEWS_API_KEY);

function getISTDateString(daysAgo) {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Kolkata' }).format(date);
}

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function runBackfillAndGenerate() {
  console.log("Starting 5-Day Audit & Generation System...");
  const todayStr = getISTDateString(0); 

  for (let i = 4; i >= 0; i--) {
    const targetDate = getISTDateString(i);
    
    const docRef = db.collection('daily_mocks').doc(targetDate);
    const docSnap = await docRef.get();

    if (docSnap.exists) {
      console.log(`⏩ [${targetDate}] Data already exists. Skipping.`);
      continue;
    }

    console.log(`⚠️ [${targetDate}] Missing data detected. Initiating fetch...`);

    try {
      let newsResponse;
      
      if (targetDate === todayStr) {
        newsResponse = await newsapi.v2.topHeadlines({ country: 'in', language: 'en', pageSize: 15 });
      } else {
        newsResponse = await newsapi.v2.everything({
          q: 'India AND (government OR economy OR defense OR national)',
          from: targetDate,
          to: targetDate,
          language: 'en',
          sortBy: 'relevancy',
          pageSize: 15
        });
      }

      if (!newsResponse.articles || newsResponse.articles.length === 0) {
        console.warn(`No news found for ${targetDate}. Skipping.`);
        continue;
      }

      const realArticles = newsResponse.articles
        .filter(a => a.title && a.title !== '[Removed]')
        .map(a => `Title: ${a.title}\nDescription: ${a.description || "N/A"}`)
        .join('\n\n');

      // Updated to 3.6-flash
      const model = genAI.getGenerativeModel({ 
        model: "gemini-3.6-flash",
        generationConfig: { responseMimeType: "application/json" }
      });
    
      const prompt = `
        You are an expert Indian competitive exam creator. 
        Date Context: ${targetDate}
        
        Here is the strictly factual, live news retrieved for this exact date:
        """
        ${realArticles}
        """

        Task 1: Select top articles from the text above and format them.
        Task 2: Generate 10 mock test questions based STRICTLY AND ONLY on the provided news text.
        Task 3: Categorize everything into specific subcategories (e.g., "National Affairs", "Economy", "Defense").
        
        CRITICAL SAFEGUARD RULES:
        1. DO NOT INVENT FACTS. You must act as a strict parser. If it is not in the text provided, do not write it.
        2. Every single 'correctAnswer' MUST perfectly match a string in the 'options' array.

        Return strictly in this JSON format:
        {
          "articles": [
            { "subcategory": "String", "headline": "String", "summary": "String", "date": "${targetDate}" }
          ],
          "mocks": [
            {
              "question": "String",
              "options": ["Opt 1", "Opt 2", "Opt 3", "Opt 4"],
              "correctAnswer": "Exact Match Opt",
              "explanation": "String",
              "subcategory": "String"
            }
          ],
          "aiInsight": "3-sentence strategic insight based on these facts."
        }
      `;

      console.log(`🤖 Generating strict grounded content for ${targetDate}...`);
      const result = await model.generateContent(prompt);
      const quizData = JSON.parse(result.response.text());

      const batch = db.batch();
      batch.set(db.collection('daily_mocks').doc(targetDate), { 
        questions: quizData.mocks, 
        date: targetDate,
        createdAt: admin.firestore.FieldValue.serverTimestamp()
      });
      batch.set(db.collection('daily_articles').doc(targetDate), { 
        articles: quizData.articles, 
        date: targetDate 
      });
      if (quizData.aiInsight) {
        batch.set(db.collection('daily_insights').doc(targetDate), { 
          report: quizData.aiInsight, 
          date: targetDate 
        });
      }

      await batch.commit();
      console.log(`✅ Successfully stored factual data for ${targetDate}`);
      
      await delay(15000); 

    } catch (error) {
      console.error(`❌ Error processing ${targetDate}:`, error.message);
    }
  }
  console.log("Backfill and daily generation complete.");
}

runBackfillAndGenerate();