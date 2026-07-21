from app.models.ai_models import sentiment_model


def analyze_sentiment(text):
    result = sentiment_model(text[:512])[0]

    return {
        "label": result["label"],
        "score": round(result["score"] * 100, 2)
    }