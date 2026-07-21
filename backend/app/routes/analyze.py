from fastapi import APIRouter, UploadFile, File
import os
import shutil

from app.services.file_reader import read_pdf, read_docx, read_txt
from app.services.preprocessing import clean_text
from app.services.statistics import document_statistics
from app.services.sentiment import analyze_sentiment
from app.services.summarizer import generate_summary
from app.services.topic_model import extract_topics

router = APIRouter()


@router.post("/analyze")
async def analyze(file: UploadFile = File(...)):
    upload_dir = "uploads"
    os.makedirs(upload_dir, exist_ok=True)

    file_path = os.path.join(upload_dir, file.filename)

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    extension = file.filename.split(".")[-1].lower()

    if extension == "pdf":
        text = read_pdf(file_path)

    elif extension == "docx":
        text = read_docx(file_path)

    elif extension == "txt":
        text = read_txt(file_path)

    else:
        return {"error": "Unsupported file type"}

    cleaned_text = clean_text(text)

    stats = document_statistics(cleaned_text)

    sentiment = analyze_sentiment(cleaned_text)

    summary = generate_summary(cleaned_text)

    topics = extract_topics(cleaned_text)

    return {
    "success": True,
    "message": "Document analyzed successfully.",
    "data": {
        "statistics": stats,
        "sentiment": sentiment,
        "topics": topics,
        "summary": summary
    }
}