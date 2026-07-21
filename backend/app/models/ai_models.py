from transformers import pipeline
from keybert import KeyBERT
from sentence_transformers import SentenceTransformer
import spacy
nlp = spacy.load("en_core_web_sm")

sentiment_model = pipeline(
    "sentiment-analysis",
    model="cardiffnlp/twitter-roberta-base-sentiment-latest"
)

summarizer_model = pipeline(
    "summarization",
    model="sshleifer/distilbart-cnn-12-6"
)

keyword_model = KeyBERT("all-MiniLM-L6-v2")
# Sentence Embedding Model
embedding_model = SentenceTransformer("all-MiniLM-L6-v2")