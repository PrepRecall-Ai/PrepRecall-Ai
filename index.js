const admin = require('firebase-admin');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const NewsAPI = require('newsapi');

// 1. Authenticate with Firebase using your GitHub Secret
const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();

// 2. Initialize AI and News APIs
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const newsapi = new NewsAPI(process.env.NEWS_API_KEY);

async function generateDailyMock() {
  try {
    console.log("Fetching daily news...");
    // Fetching top news tailored for current affairs preparation
    const newsResponse = await newsapi.v2.topHeadlines({
      country: 'in',
      language: 'en',
      pageSize: 10
    });

    const articles = newsResponse.articles.map(a => `${a.title} - ${a.description || ""}`).join('\n');
    
    console.log("Generating mock test with Gemini...");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  
  prompt = `Based on the following news headlines and articles:
\n${articles}

Generate the mock test output strictly as a JSON array of objects. 
CRITICAL RULE: You must ONLY use the exact Article IDs provided in the source text above. Do not invent, create, or increment new Article IDs.`;

    const result = await model.generateContent(prompt);
    let aiResponse = result.response.text();
    
    // Clean up markdown formatting to ensure perfect JSON
    aiResponse = aiResponse.replace(/```json/g, '').replace(/```/g, '').trim();
    const quizData = JSON.parse(aiResponse);

    console.log("Saving mock test to Firebase...");
    const today = new Date().toISOString().split('T')[0];
    
    await db.collection('daily_mocks').doc(today).set({
      date: today,
      questions: quizData,
      createdAt: admin.firestore.FieldValue.serverTimestamp()
    });

    console.log("Success! Daily mock test generated and saved to Firestore.");
  } catch (error) {
    console.error("Error generating mock test:", error);
    process.exit(1); 
  }
}

generateDailyMock();