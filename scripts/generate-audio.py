import os
import json
import asyncio
import edge_tts
import firebase_admin
from firebase_admin import credentials, firestore, storage
from datetime import datetime, timezone, timedelta

# 1. Connect to Firebase using your GitHub Secrets
cred_json = os.environ.get('FIREBASE_CREDENTIALS')
if cred_json:
    cred_dict = json.loads(cred_json)
    cred = credentials.Certificate(cred_dict)
    firebase_admin.initialize_app(cred, {
        'storageBucket': 'preprecall-94a8d.firebasestorage.app'
    })
else:
    raise Exception("FIREBASE_CREDENTIALS not found in environment!")

db = firestore.client()
bucket = storage.bucket()

async def generate_audio():
    # 2. Get today's date in Indian Standard Time (IST)
    ist = timezone(timedelta(hours=5, minutes=30))
    today_str = datetime.now(ist).strftime("%Y-%m-%d")

    print(f"Checking for articles on {today_str}...")
    doc_ref = db.collection("daily_articles").doc(today_str)
    doc_snap = doc_ref.get()

    if not doc_snap.exists:
        print(f"No articles found for {today_str}. Exiting.")
        return

    data = doc_snap.to_dict()
    articles = data.get("articles", [])

    if not articles:
        print("Article list is empty. Exiting.")
        return

    # 3. Build the script for the AI to read
    print("Compiling today's news script...")
    script_lines = [f"Daily Current Affairs Brief for {today_str}."]
    
    for idx, art in enumerate(articles, 1):
        headline = art.get("Headline") or art.get("title") or ""
        summary = art.get("Summary") or art.get("summary") or ""
        script_lines.append(f"Item {idx}: {headline}. {summary}")

    full_text = " ".join(script_lines)
    mp3_filename = f"{today_str}-daily-brief.mp3"

    # 4. Generate the MP3 using Microsoft Edge Neural Voice
    print("Generating studio-quality neural audio...")
    voice = "en-IN-PrabhatNeural" # Premium Indian Male Voice
    communicator = edge_tts.Communicate(full_text, voice)
    await communicator.save(mp3_filename)

    # 5. Upload the MP3 to Firebase Storage
    print("Uploading MP3 to Firebase Storage...")
    blob = bucket.blob(f"daily_audio/{mp3_filename}")
    blob.upload_from_filename(mp3_filename, content_type="audio/mpeg")
    blob.make_public() # Makes the link streamable
    audio_url = blob.public_url

    # 6. Save the audio link to the database
    print(f"Updating Firestore with audio link: {audio_url}")
    doc_ref.set({"audioUrl": audio_url}, merge=True)

    # Clean up the file from GitHub's server
    if os.path.exists(mp3_filename):
        os.remove(mp3_filename)

    print("Success! Audio generation and upload complete.")

if __name__ == "__main__":
    asyncio.run(generate_audio())