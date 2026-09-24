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
      
      // 1. Primary Targeted Query
      try {
        newsResponse = await newsapi.v2.everything({
          q: 'India AND (PIB OR "Ministry" OR RBI OR "Supreme Court" OR ISRO OR DRDO OR Parliament OR "Cabinet" OR Scheme OR "NITI Aayog" OR Defence OR "Joint Exercise")',
          language: 'en',
          sortBy: 'publishedAt',
          pageSize: 35
        });
      } catch (e) {
        newsResponse = { articles: [] };
      }

      // 2. Focused Secondary Fallback
      if (!newsResponse || !newsResponse.articles || newsResponse.articles.length === 0) {
        try {
          newsResponse = await newsapi.v2.everything({
            q: 'India AND (Summit OR MoU OR "Bilateral" OR "Ranking" OR "Index" OR "National Award")',
            language: 'en',
            sortBy: 'publishedAt',
            pageSize: 25
          });
        } catch (e) {
          newsResponse = { articles: [] };
        }
      }

      if (!newsResponse.articles || newsResponse.articles.length === 0) {
        console.warn(`No verified news available. Skipping ${targetDate}.`);
        continue;
      }

      const realArticles = newsResponse.articles
        .filter(a => a.title && a.title !== '[Removed]' && !a.title.includes('[Sponsored]'))
        .map(a => `Source: ${a.source?.name || 'Official'}\nTitle: ${a.title}\nDescription: ${a.description || "N/A"}`)
        .join('\n\n');

      const prompt = `
        You are a senior question setter and examiner for top Indian competitive exams (UPSC CSE, SSC CGL, CDS, NDA). 
        Date Context: ${targetDate}
        
        Here is the strictly factual, live news feed:
        """
        ${realArticles}
        """

        ### MANDATORY INCLUSION CRITERIA (Select ONLY items fitting these 7 categories):
        1. Appointments: High-level constitutional, statutory, judicial (Supreme Court / Chief Justices), defence chiefs, or international bodies (UN, World Bank, IMF).
        2. Schemes & Policies: Central government schemes, launching Ministry, financial outlay, beneficiary target, and milestones.
        3. Defence & Space Science: Joint military exercises (name, participating nations, location), missile/defence tests (DRDO/Armed forces), naval commissions, ISRO missions.
        4. Awards & Honors: National awards (Padma, Sahitya Akademi, Khel Ratna) and major international honours (Nobel, Booker, Magsaysay).
        5. Reports & Indexes: Index name, publishing organization, India's rank, and top-ranking nation.
        6. Summits & Bilateral Accords: Bilateral/multilateral summits (G20, BRICS, SCO, Quad, ASEAN), host city, and government-to-government MoUs.
        7. Major Sports & Milestones: National games, historical firsts for Indian athletes, Grand Slams, World Cups, and international championships.

        ### STRICT EXCLUSION CRITERIA (DISCARD IMMEDIATELY):
        - Regional High Court procedural rulings, family/maintenance cases, routine bail orders, or local magistrate FIR procedural matters.
        - Municipal-level foreign city pacts, local foreign MoUs.
        - Routine corporate/PSU internal supply logistics.
        - Political party debates, campaign speeches, and party rivalries.
        - Local crime, accidents, traffic diversions, entertainment, and celebrity news.

        ### TASKS:
        Task 1: Select exactly 10 high-yield current affairs events that strictly pass the Inclusion Criteria. Use capital JSON keys ("Category", "Headline", "Summary").
        Task 2: Generate exactly 10 multiple-choice mock test questions based STRICTLY AND ONLY on the provided news text. Every 'correctAnswer' must match one of the entries in 'options' word-for-word.
        Task 3: Generate a 3-sentence 'Daily Weakness Report' and strategic study tip highlighting factual traps or confusing ministerial attributions.
        
        CRITICAL ACCURACY GUARDRAILS:
        1. ZERO HALLUCINATION: Do not invent statistics, outlay figures, dates, or ministerial targets not explicitly present in the source text.
        2. EXAM RELEVANCE: Questions must test high-yield facts an examiner would select, not trivial journalistic filler.

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

      // 🔴 FIX: DYNAMIC MODEL FALLBACK & LONGER RATE-LIMIT DELAYS 🔴
     const modelFallbackList = ["gemini-3.6-flash", "gemini-3.5-flash", "gemini-3.5-flash-lite"];
      let result, rawText;
      let success = false;

      for (const modelName of modelFallbackList) {
        if (success) break;

        const model = genAI.getGenerativeModel({ 
          model: modelName,
          generationConfig: { responseMimeType: "application/json" }
        });

        const maxRetries = 3;
        for (let attempt = 1; attempt <= maxRetries; attempt++) {
          try {
            console.log(`🤖 [${modelName}] Generating content for ${targetDate} (Attempt ${attempt}/${maxRetries})...`);
            result = await model.generateContent(prompt);
            rawText = result.response.text();
            success = true;
            break; // Success! Break out of the retry loop.
          } catch (apiError) {
            const errMsg = apiError.message || "";
            // Catch BOTH 503 (Server Busy) AND 429 (Rate Limit/Quota)
            if ((errMsg.includes('503') || errMsg.includes('429')) && attempt < maxRetries) {
              console.warn(`⚠️ [${modelName}] API bottleneck (429/503). Cooling down for 35 seconds...`);
              await delay(35000); // 429 limits demand ~30s. We wait 35s to be absolutely safe.
            } else if (attempt === maxRetries) {
              console.warn(`❌ [${modelName}] Exhausted retries. Switching to fallback model...`);
              break; // Break retry loop to try the next model in the fallback list
            } else {
              console.warn(`⚠️ [${modelName}] Unhandled error: ${errMsg}`);
              break; // Break retry loop to try the next model
            }
          }
        }
      }

      if (!success) {
        throw new Error("All fallback models failed due to persistent API limits.");
      }

      const quizData = JSON.parse(rawText);

      if (!quizData.mocks || quizData.mocks.length === 0) {
        console.warn(`No qualifying exam mocks passed filters for ${targetDate}. Skipping storage.`);
        continue;
      }

      const batch = db.batch();
      batch.set(db.collection('daily_mocks').doc(targetDate), { 
        questions: quizData.mocks, 
        date: targetDate,
        createdAt: FieldValue.serverTimestamp()
      });
      batch.set(db.collection('daily_articles').doc(targetDate), { 
        articles: quizData.articles || [], 
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
      console.log(`✅ Successfully stored verified articles and mocks for ${targetDate}`);
      
      await delay(10000); 

    } catch (error) {
      console.error(`❌ Error processing ${targetDate}:`, error.message);
      // 🔴 FIX: FORCE GITHUB ACTIONS TO TURN RED IF IT FAILS 🔴
      process.exitCode = 1; 
    }
  }
  console.log("Precision backfill and generation complete.");
}

runBackfillAndGenerate();